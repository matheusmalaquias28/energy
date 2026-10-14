import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Consultoria de SEO para empresas: leads pelo Google sem depender de anúncios";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Consultoria de SEO para empresas",
    title: "Pare de alugar clientes. Seja encontrado no Google.",
    footer: "Energy · energymidia.com.br/servicos/seo-para-empresas",
  });
}
