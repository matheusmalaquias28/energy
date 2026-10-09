import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard, energyLogoDataUri, loadOgFonts } from "@/lib/og";

// Gera no build a imagem de compartilhamento padrão referenciada no layout (/og-image.jpg).
export const dynamic = "force-static";

const EYEBROW = "Agência digital";
const TITLE = "Design que posiciona. Site que converte.";
const FOOTER = "Sites, landing pages, e-commerces e SEO · energymidia.com.br";

export async function GET() {
  const [logo, fonts] = await Promise.all([
    energyLogoDataUri(),
    loadOgFonts(EYEBROW + TITLE + FOOTER),
  ]);
  return new ImageResponse(<OgCard logo={logo} eyebrow={EYEBROW} title={TITLE} footer={FOOTER} />, {
    ...OG_SIZE,
    fonts,
    headers: { "Cache-Control": "public, max-age=86400, immutable" },
  });
}
