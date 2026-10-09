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
  origem: z.string().trim().max(80).optional(),
});

const DEFAULT_WEBHOOK =
  "https://hook.us2.make.com/pg7m6yi0oe7rbnxn5zby2atlzd7i36uj";

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

  const { nome, telefone, empresa, origem } = parsed.data;
  const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL ?? DEFAULT_WEBHOOK;

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        telefone,
        empresa,
        origem: origem ?? "site",
        enviadoEm: new Date().toISOString(),
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Não foi possível enviar agora. Tente de novo." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Erro de rede. Verifique sua conexão." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
