import { blogPosts } from "@/data/blog-posts";
import { brazilCities } from "@/data/cities";
import { localPages } from "@/data/local-pages";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

export async function GET() {
  const blogLines = blogPosts
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`)
    .join("\n");

  const cityLines = brazilCities
    .map((c) => `- [${c.name}](${SITE_URL}/agencia/${c.slug}): ${c.metaDescription}`)
    .join("\n");

  const content = `# Energy — Agência Digital

> Energy é uma agência digital brasileira especializada em criação de sites institucionais, landing pages de alta conversão e e-commerces premium para médias e grandes empresas. Fundada por um profissional com 13+ anos de experiência em projetos de alto impacto digital.

## Serviços

- [Sites Institucionais](${SITE_URL}/#servicos): Sites robustos, elegantes e performáticos com design exclusivo, SEO técnico incluso e Lighthouse 95+ garantido. Para empresas que precisam transmitir autoridade e credibilidade.
- [Landing Pages](${SITE_URL}/#servicos): Páginas otimizadas para conversão com copy persuasivo, A/B testing e integração com CRM. Cada elemento testado para transformar visitante em cliente.
- [E-commerces](${SITE_URL}/#servicos): Lojas virtuais com experiência de compra memorável, UX de checkout otimizado, mobile first e integração com ERP e analytics.
- [Consultoria de SEO para Empresas](${SITE_URL}/servicos/seo-para-empresas): Posicionamento orgânico no Google para gerar leads sem depender de tráfego pago. SEO técnico, SEO local, conteúdo com intenção comercial, autoridade e relatório mensal de leads.

## Blog

${blogLines}

## Páginas Locais por Serviço

${localPages.map((p) => `- [${p.h1}](${SITE_URL}/local/${p.slug}): ${p.metaDescription}`).join("\n")}

## Cidades Atendidas no Brasil

${cityLines}

## Diferenciais

- 13+ anos de experiência em projetos de alto impacto digital
- Performance Lighthouse 95+ garantida em todos os projetos
- Design 100% exclusivo — sem templates
- SEO técnico, acessibilidade e Core Web Vitals no escopo padrão
- CMS integrado para autonomia editorial
- Revisões ilimitadas na fase de design

## Contato

Site: ${SITE_URL}

## Sobre

A Energy foi criada para atender médias e grandes empresas brasileiras que não aceitam ser esquecidas no digital. Cada projeto começa com estratégia e termina com um ativo digital que trabalha 24 horas por dia pela empresa. Atualmente expandindo para mercados nos EUA e Europa.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
