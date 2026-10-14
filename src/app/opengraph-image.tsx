import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Energy — criação de sites, landing pages e e-commerces";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Agência digital",
    title: "Design que posiciona. Site que converte.",
    footer: "Sites, landing pages, e-commerces e SEO · energymidia.com.br",
  });
}
