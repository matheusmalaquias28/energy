export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  keywords: string[];
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "magnific-ia-geracao-de-imagens",
    title: "Magnific: a IA que substituiu meu time de design (e o que isso significa para você)",
    description:
      "Como a plataforma de geração visual por IA Magnific (antigo Freepik) mudou a operação da Energy — e por que quem opera IA corretamente pode te substituir antes da própria IA.",
    publishedAt: "2026-07-04",
    readingTime: "13 min",
    category: "Inteligência Artificial",
    coverImage: "/Capas/magnific_crie-a-imagem-de-um-desig_kLETTeW16B.jpeg",
    keywords: [
      "magnific ia",
      "magnific freepik",
      "geração de imagens ia",
      "ia para design",
      "substituir designer ia",
      "magnific plataforma",
      "geração de vídeo ia",
      "ferramentas ia criativo",
      "flux pro",
      "upscaling ia",
    ],
  },
  {
    slug: "fable-5-o-que-e-como-usar",
    title: "Fable 5: o que é e como começar a usar o modelo mais avançado da Anthropic",
    description:
      "Manual completo sobre o Fable 5, o mais novo modelo da família Claude. O que mudou, como acessar via claude.ai, Claude Code e API, e um roteiro prático para você começar hoje.",
    publishedAt: "2026-07-02",
    readingTime: "14 min",
    category: "Inteligência Artificial",
    coverImage: "/Capas/magnific_crie-uma-imagem-realista-_74rgw9AJAL (1).jpeg",
    keywords: [
      "fable 5",
      "claude fable 5",
      "anthropic fable 5",
      "o que é fable 5",
      "como usar claude fable 5",
      "modelos claude anthropic",
      "claude code",
      "ia para empresas",
    ],
  },
  {
    slug: "criacao-de-sites-vila-velha",
    title: "Criação de Sites em Vila Velha: o que empresas capixabas precisam saber",
    description:
      "Guia completo para donos de negócios de Vila Velha que querem entender como um site profissional funciona na prática — e por que ele é um dos ativos mais valiosos que uma empresa local pode construir.",
    publishedAt: "2026-06-23",
    readingTime: "10 min",
    category: "SEO Local",
    keywords: [
      "criação de sites vila velha",
      "site profissional vila velha es",
      "agência digital vila velha",
      "seo local vila velha",
      "site para empresa vila velha",
    ],
  },
  {
    slug: "criacao-de-sites-vitoria-es",
    title: "Criação de Sites em Vitória (ES): o guia para empresas da capital capixaba",
    description:
      "O mercado de Vitória é exigente, sofisticado e ainda tem espaço para quem investe em presença digital de qualidade. Saiba o que seu site precisa ter para se destacar na capital do Espírito Santo.",
    publishedAt: "2026-06-23",
    readingTime: "10 min",
    category: "SEO Local",
    keywords: [
      "criação de sites vitória es",
      "site profissional vitória espírito santo",
      "agência digital vitória es",
      "seo vitória es",
      "site para empresa vitória",
    ],
  },
  {
    slug: "criacao-de-sites-serra-es",
    title: "Criação de Sites em Serra (ES): guia para empresas do maior polo industrial capixaba",
    description:
      "Serra tem um potencial enorme e ainda está sendo descoberta como mercado digital. Saiba como empresas do polo industrial e do comércio local podem dominar as buscas do Google na região.",
    publishedAt: "2026-06-23",
    readingTime: "11 min",
    category: "SEO Local",
    keywords: [
      "criação de sites serra es",
      "site profissional serra espírito santo",
      "agência digital serra es",
      "seo serra es",
      "site para empresa serra es",
    ],
  },
  {
    slug: "criacao-de-sites-campos-do-jordao",
    title: "Criação de Sites em Campos do Jordão: guia completo para empresas da serra",
    description:
      "Tudo que donos de pousadas, restaurantes, ateliês e prestadores de serviço de Campos do Jordão precisam saber para ter um site profissional que aparece no Google e converte turistas em clientes.",
    publishedAt: "2026-06-23",
    readingTime: "11 min",
    category: "SEO Local",
    keywords: [
      "criação de sites campos do jordão",
      "site profissional campos do jordão",
      "agência digital campos do jordão",
      "seo campos do jordão",
      "site pousada campos do jordão",
    ],
  },
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
