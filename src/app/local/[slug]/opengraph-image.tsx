import { OG_SIZE, renderOgImage } from "@/lib/og";
import { getLocalPageBySlug } from "@/data/local-pages";

export const alt = "Energy — serviços digitais na sua região";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLocalPageBySlug(slug);
  return renderOgImage({
    eyebrow: page ? `${page.city} · ${page.state}` : "Agência digital",
    title: page ? `${page.serviceLabel} em ${page.city}` : "Criação de sites",
    footer: "Energy · energymidia.com.br",
  });
}
