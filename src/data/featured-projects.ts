export type FeaturedProject = {
  name: string;
  year: string;
  /** Imagem estática (capa do projeto) */
  image: string;
  /** Vídeo em loop no hover (opcional) */
  video?: string;
  /** Vídeo sempre visível com autoplay (preenche o container) em vez de só no hover */
  videoAlways?: boolean;
  /** Badges no canto inferior esquerdo */
  badges: string[];
  /** URL do site ao vivo — abre em nova guia ao clicar no card */
  href?: string;
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
    href: "https://aboveimobiliaria.com.br/",
  },
  {
    name: "Chocolate Araucária",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop",
    video: "/videos/araucaria-render-1.mp4",
    videoAlways: true,
    badges: ["Website Institucional", "Scroll Effects", "Dev"],
    href: "https://www.chocolatearaucaria.com.br/",
  },
  {
    name: "Veredas",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80&auto=format&fit=crop",
    video: "/videos/veredas-hero.mp4",
    videoAlways: true,
    badges: ["Site Institucional"],
    href: "https://www.veredas.art/",
  },
  {
    name: "Rastro Collect",
    year: "2026",
    image: "/projects/rastro-collect.webp",
    badges: ["Site institucional", "UI/UX", "Scroll Effects"],
    href: "https://www.rastrocollect.com.br/",
  },
  {
    name: "Cashflow",
    year: "2026",
    image: "/projects/cashflow.webp",
    badges: ["Landing page", "SaaS", "UI/UX"],
    href: "https://www.appcashflow.com.br/",
  },
];
