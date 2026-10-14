import { OG_SIZE, renderOgImage } from "@/lib/og";
import { getCityBySlug } from "@/data/cities";

export const alt = "Energy — criação de sites na sua cidade";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade } = await params;
  const city = getCityBySlug(cidade);
  return renderOgImage({
    eyebrow: city ? `${city.name} · ${city.state}` : "Agência digital",
    title: city?.h1 ?? "Criação de sites",
    footer: "Sites, landing pages e e-commerces · energymidia.com.br",
  });
}
