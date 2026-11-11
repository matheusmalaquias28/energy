import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

/** Logo da Energy (public/logo-energy.svg) como data URI para usar em <img>. Usado por /logo.png. */
export async function energyLogoDataUri() {
  const svg = await readFile(path.join(process.cwd(), "public", "logo-energy.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

/** Textos que cada rota passava para a arte gerada. Hoje todas usam a mesma imagem. */
type OgCardText = { eyebrow: string; title: string; footer: string };

/**
 * Imagem de compartilhamento do site todo: public/og-energy.png (1200×630).
 * As rotas continuam chamando com seus textos, mas a imagem é a mesma em todas.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function renderOgImage(_text?: OgCardText) {
  const png = await readFile(path.join(process.cwd(), "public", "og-energy.png"));
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
