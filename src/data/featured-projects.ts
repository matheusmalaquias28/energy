export type FeaturedProject = {
  name: string;
  year: string;
  /** Imagem estática (capa do projeto) */
  image: string;
  /** Vídeo em loop no hover (opcional) */
  video: string;
  /** Vídeo sempre visível com autoplay (preenche o container) em vez de só no hover */
  videoAlways?: boolean;
  /** Badges no canto inferior esquerdo */
  badges: string[];
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: "Above Imobiliária",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be27880ed?w=1600&q=80&auto=format&fit=crop",
    video: "/videos/render-above-2.mp4",
    videoAlways: true,
    badges: ["Site institucional", "UI/UX", "Performance"],
  },
  {
    name: "Chocolate Araucária",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop",
    video: "/videos/araucaria-render-1.mp4",
    videoAlways: true,
    badges: ["Website Institucional", "Scroll Effects", "Dev"],
  },
  {
    name: "Casa Bella",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80&auto=format&fit=crop",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    badges: ["E-commerce", "Branding"],
  },
  {
    name: "Atlas Construtora",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format&fit=crop",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    badges: ["Site institucional", "3D", "SEO"],
  },
];
