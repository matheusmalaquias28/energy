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
});

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Dados inválidos";
    return NextResponse.json({ error: msg }, { status: 400 });
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
