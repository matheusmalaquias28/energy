import type React from "react";

type MDXModule = { default: React.ComponentType };

export const blogContent: Record<string, () => Promise<MDXModule>> = {
  "magnific-ia-geracao-de-imagens": () =>
    import("@/content/blog/magnific-ia-geracao-de-imagens.mdx"),
  "fable-5-o-que-e-como-usar": () =>
    import("@/content/blog/fable-5-o-que-e-como-usar.mdx"),
  "criacao-de-sites-vila-velha": () =>
    import("@/content/blog/criacao-de-sites-vila-velha.mdx"),
  "criacao-de-sites-vitoria-es": () =>
    import("@/content/blog/criacao-de-sites-vitoria-es.mdx"),
  "criacao-de-sites-serra-es": () =>
    import("@/content/blog/criacao-de-sites-serra-es.mdx"),
  "criacao-de-sites-campos-do-jordao": () =>
    import("@/content/blog/criacao-de-sites-campos-do-jordao.mdx"),
  "quanto-custa-criar-um-site": () =>
    import("@/content/blog/quanto-custa-criar-um-site.mdx"),
  "o-que-e-landing-page": () =>
    import("@/content/blog/o-que-e-landing-page.mdx"),
  "como-criar-ecommerce": () =>
    import("@/content/blog/como-criar-ecommerce.mdx"),
  "site-institucional-empresa": () =>
    import("@/content/blog/site-institucional-empresa.mdx"),
  "seo-para-empresas": () =>
    import("@/content/blog/seo-para-empresas.mdx"),
};
