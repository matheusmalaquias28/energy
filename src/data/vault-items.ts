export type VaultCategory = "manuais" | "artigos" | "ferramentas" | "gratuitos";

export interface VaultItem {
  id: string;
  title: string;
  description: string;
  category: VaultCategory;
  tags: string[];
  date: string;
  readingTime?: string;
  fileSize?: string;
  fileType?: string;
  href: string;
  isNew?: boolean;
  isFeatured?: boolean;
  coverImage?: string;
}

export const vaultItems: VaultItem[] = [
  {
    id: "v012",
    title: "Magnific: a IA que substituiu meu time de design",
    description:
      "Como a plataforma Magnific (antigo Freepik) opera na Energy, o que você consegue fazer com a versão pública, e por que quem usa IA corretamente pode te substituir antes da própria IA.",
    category: "artigos",
    tags: ["IA", "Design", "Magnific", "Ferramentas"],
    date: "2026-07-04",
    readingTime: "13 min",
    href: "/blog/magnific-ia-geracao-de-imagens",
    isNew: true,
    isFeatured: true,
    coverImage: "/Capas/magnific_crie-a-imagem-de-um-desig_kLETTeW16B.jpeg",
  },
  {
    id: "v011",
    title: "Fable 5: Manual Completo — O Que É e Como Começar a Usar",
    description:
      "O modelo mais avançado da Anthropic explicado do zero. O que mudou, como acessar via claude.ai, Claude Code e API, e um roteiro prático de 30 minutos para entrar em uso real.",
    category: "manuais",
    tags: ["Fable 5", "IA", "Anthropic", "Claude"],
    date: "2026-07-02",
    readingTime: "14 min",
    href: "/blog/fable-5-o-que-e-como-usar",
    isNew: true,
    isFeatured: true,
    coverImage: "/Capas/magnific_crie-uma-imagem-realista-_74rgw9AJAL (1).jpeg",
  },
  {
    id: "v001",
    title: "Guia Definitivo de SEO para Empresas em 2026",
    description:
      "Manual completo cobrindo estratégia, técnica e conteúdo para dominar os resultados orgânicos. Do on-page ao link building.",
    category: "manuais",
    tags: ["SEO", "Estratégia", "Google"],
    date: "2026-06-01",
    fileSize: "4.2 MB",
    fileType: "PDF",
    href: "/blog/seo-para-empresas",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "v002",
    title: "Manual de Identidade Digital para Marcas B2B",
    description:
      "Como construir e manter uma presença digital coesa que converta autoridade em contratos. Guia visual + estratégico.",
    category: "manuais",
    tags: ["Branding", "B2B", "Design"],
    date: "2026-05-15",
    fileSize: "2.8 MB",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "v003",
    title: "Template de Briefing para Sites Corporativos",
    description:
      "O mesmo template que usamos com clientes enterprise. 8 seções, 40 perguntas, validado em mais de 60 projetos.",
    category: "ferramentas",
    tags: ["Template", "Briefing", "Processo"],
    date: "2026-05-01",
    fileSize: "0.9 MB",
    fileType: "XLSX",
    href: "#",
    isFeatured: true,
    isNew: true,
  },
  {
    id: "v004",
    title: "Checklist de Lançamento de Site",
    description:
      "87 itens organizados em 9 categorias: SEO técnico, acessibilidade, performance, segurança, analytics e muito mais.",
    category: "ferramentas",
    tags: ["Checklist", "Lançamento", "QA"],
    date: "2026-04-20",
    fileSize: "0.4 MB",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "v005",
    title: "Quanto custa criar um site profissional em 2026?",
    description:
      "Entenda os fatores que determinam o preço de um site e como não cair em armadilhas baratas que custam caro no longo prazo.",
    category: "artigos",
    tags: ["Websites", "Investimento"],
    date: "2026-04-15",
    readingTime: "8 min",
    href: "/blog/quanto-custa-criar-um-site",
  },
  {
    id: "v006",
    title: "O que é uma landing page e como ela aumenta suas vendas",
    description:
      "Landing page não é só uma página bonita — é uma ferramenta de conversão com propósito claro. Entenda como funciona.",
    category: "artigos",
    tags: ["Landing Page", "Conversão"],
    date: "2026-04-10",
    readingTime: "7 min",
    href: "/blog/o-que-e-landing-page",
  },
  {
    id: "v007",
    title: "Como criar um e-commerce do zero: guia 2026",
    description:
      "Do planejamento ao primeiro pedido: tudo que você precisa para montar uma loja virtual que vende de verdade no Brasil.",
    category: "artigos",
    tags: ["E-commerce", "Estratégia"],
    date: "2026-04-05",
    readingTime: "12 min",
    href: "/blog/como-criar-ecommerce",
    isFeatured: true,
  },
  {
    id: "v008",
    title: "SEO para empresas: o que é, por que importa e por onde começar",
    description:
      "SEO não é magia. É o conjunto de práticas que fazem seu site aparecer quando seu cliente está procurando por você.",
    category: "artigos",
    tags: ["SEO", "Google"],
    date: "2026-03-20",
    readingTime: "9 min",
    href: "/blog/seo-para-empresas",
  },
  {
    id: "v009",
    title: "Diagnóstico Digital Gratuito",
    description:
      "Avalie em 5 minutos os pontos críticos da presença digital da sua empresa com o framework interno da Energy.",
    category: "gratuitos",
    tags: ["Diagnóstico", "Estratégia"],
    date: "2026-06-15",
    href: "#",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "v010",
    title: "Calculadora de ROI para E-commerce",
    description:
      "Projete o retorno do investimento de uma loja virtual com base nos dados reais do seu negócio em 3 minutos.",
    category: "gratuitos",
    tags: ["E-commerce", "ROI"],
    date: "2026-05-25",
    href: "#",
  },
];

export const VAULT_CATEGORY_COLORS: Record<VaultCategory, string> = {
  manuais: "#FE4101",
  artigos: "#38BDF8",
  ferramentas: "#A855F7",
  gratuitos: "#22D3A5",
};
