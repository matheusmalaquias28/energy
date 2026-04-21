export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "quanto-custa-criar-um-site",
    title: "Quanto custa criar um site profissional em 2026?",
    description:
      "Entenda os fatores que determinam o preço de um site, o que esperar de cada faixa de investimento e como não cair em armadilhas baratas que custam caro no longo prazo.",
    publishedAt: "2026-04-15",
    readingTime: "8 min",
    category: "Guias",
    keywords: [
      "quanto custa criar um site",
      "preço site profissional",
      "valor site empresa",
      "orçamento criação de site",
    ],
  },
  {
    slug: "o-que-e-landing-page",
    title: "O que é uma landing page e como ela aumenta suas vendas",
    description:
      "Landing page não é só uma página bonita. É uma ferramenta de conversão com propósito claro. Entenda como funciona, por que converte mais e quando usar.",
    publishedAt: "2026-04-10",
    readingTime: "7 min",
    category: "Marketing Digital",
    keywords: [
      "o que é landing page",
      "landing page conversão",
      "landing page para empresa",
      "como criar landing page",
    ],
  },
  {
    slug: "como-criar-ecommerce",
    title: "Como criar um e-commerce do zero: guia completo para 2026",
    description:
      "Do planejamento ao primeiro pedido: tudo o que você precisa saber para montar uma loja virtual que vende de verdade no mercado brasileiro.",
    publishedAt: "2026-04-05",
    readingTime: "12 min",
    category: "E-commerce",
    keywords: [
      "como criar ecommerce",
      "como montar loja virtual",
      "criar loja online",
      "ecommerce do zero",
    ],
  },
  {
    slug: "site-institucional-empresa",
    title: "Site institucional: por que sua empresa não pode mais ficar sem um",
    description:
      "Em 2026, não ter um site profissional é como não ter cartão de visita — só que pior. Entenda o que é um site institucional, o que ele precisa ter e como ele trabalha por você 24h.",
    publishedAt: "2026-03-28",
    readingTime: "6 min",
    category: "Websites",
    keywords: [
      "site institucional",
      "site para empresa",
      "criar site institucional",
      "site profissional empresa",
    ],
  },
  {
    slug: "seo-para-empresas",
    title: "SEO para empresas: o que é, por que importa e por onde começar",
    description:
      "SEO não é magia nem técnica exclusiva de grandes empresas. É o conjunto de práticas que fazem seu site aparecer quando seu cliente está procurando por você. Aprenda o básico certo.",
    publishedAt: "2026-03-20",
    readingTime: "9 min",
    category: "SEO",
    keywords: [
      "seo para empresas",
      "o que é seo",
      "seo para pequenas empresas",
      "como aparecer no google",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
