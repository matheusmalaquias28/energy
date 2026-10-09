import { ImageResponse } from "next/og";
import { OG_SIZE, OgCard, energyLogoDataUri, loadOgFonts } from "@/lib/og";

export const alt = "Consultoria de SEO para empresas: leads pelo Google sem depender de anúncios";
export const size = OG_SIZE;
export const contentType = "image/png";

const EYEBROW = "Consultoria de SEO para empresas";
const TITLE = "Pare de alugar clientes. Seja encontrado no Google.";
const FOOTER = "Energy · energymidia.com.br/servicos/seo-para-empresas";

export default async function Image() {
  const [logo, fonts] = await Promise.all([
    energyLogoDataUri(),
    loadOgFonts(EYEBROW + TITLE + FOOTER),
  ]);
  return new ImageResponse(<OgCard logo={logo} eyebrow={EYEBROW} title={TITLE} footer={FOOTER} />, {
    ...size,
    fonts,
  });
}
