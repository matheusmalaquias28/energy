import type React from "react";

type MDXModule = { default: React.ComponentType };

export const blogContent: Record<string, () => Promise<MDXModule>> = {
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
