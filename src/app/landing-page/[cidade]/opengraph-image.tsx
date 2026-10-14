import { OG_SIZE, renderOgImage } from "@/lib/og";
import { getLpCityPage } from "@/data/lp-city-pages";

export const alt = "Energy — criação de landing pages na sua cidade";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade } = await params;
  const city = getLpCityPage(cidade);
  return renderOgImage({
    eyebrow: city ? `${city.cidade} · ${city.estado}` : "Landing pages",
    title: city ? `Landing pages que convertem em ${city.cidade}` : "Landing pages que convertem",
    footer: "Energy · energymidia.com.br",
  });
}
