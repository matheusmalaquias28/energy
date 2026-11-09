import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  nome: z.string().trim().min(2, "Nome muito curto").max(120),
  telefone: z
    .string()
    .trim()
    .refine((v) => {
      const n = v.replace(/\D/g, "");
      return n.length >= 10 && n.length <= 11;
    }, "Telefone inválido"),
  empresa: z.string().trim().min(2, "Informe o nome da empresa").max(200),
  origem: z.string().trim().max(200).optional(),
  // honeypot: campo escondido que só robô preenche
  website: z.string().max(500).optional(),
  // momento (ms) em que o formulário foi exibido
  t: z.number({ error: "Recarregue a página e tente de novo" }).int().positive(),
});

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const MAX_BODY_BYTES = 4_000;
const MIN_FILL_MS = 3_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

// Limite por IP em memória. Vale por instância da função (não é global entre
// regiões/instâncias), mas já barra rajadas de um mesmo robô.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((ts) => now - ts < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) {
    for (const [key, list] of hits) {
      if (list.every((ts) => now - ts >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_MAX;
}

function sameOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }
  const allowed = new Set<string>();
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (host) allowed.add(host);
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (site) {
    try {
      const h = new URL(site).host;
      allowed.add(h);
      allowed.add(h.startsWith("www.") ? h.slice(4) : `www.${h}`);
    } catch {}
  }
  return allowed.has(originHost);
}

const fake = () => NextResponse.json({ ok: true });

export async function POST(req: Request) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ error: "Origem não permitida" }, { status: 403 });
  }

  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Envio muito grande" }, { status: 413 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitos envios seguidos. Tente de novo em alguns minutos." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Envio muito grande" }, { status: 413 });
    }
    json = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Dados inválidos";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  // Robôs recebem "ok" para não saberem que foram barrados.
  const elapsed = Date.now() - parsed.data.t;
  if (parsed.data.website || elapsed < MIN_FILL_MS || elapsed > MAX_FORM_AGE_MS) {
    console.warn("[contact] envio descartado como spam", { ip, elapsed });
    return fake();
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("[contact] TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID ausente");
    return NextResponse.json(
      { error: "Não foi possível enviar agora. Tente de novo." },
      { status: 500 },
    );
  }

  const { nome, telefone, empresa, origem } = parsed.data;
  const digits = telefone.replace(/\D/g, "");
  const enviadoEm = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  const text = [
    "🔔 <b>Novo lead no site</b>",
    "",
    `<b>Nome:</b> ${escapeHtml(nome)}`,
    `<b>Telefone:</b> ${escapeHtml(telefone)}`,
    `<b>Empresa:</b> ${escapeHtml(empresa)}`,
    `<b>Origem:</b> ${escapeHtml(origem ?? "site")}`,
    `<b>Enviado em:</b> ${enviadoEm}`,
    "",
    `<a href="https://wa.me/55${digits}">Abrir no WhatsApp</a>`,
  ].join("\n");

  try {
    const upstream = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!upstream.ok) {
      console.error("[contact] Telegram respondeu", upstream.status, await upstream.text());
      return NextResponse.json(
        { error: "Não foi possível enviar agora. Tente de novo." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] falha ao chamar Telegram", err);
    return NextResponse.json(
      { error: "Erro de rede. Verifique sua conexão." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
