import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brazilCities, getCityBySlug } from "@/data/cities";
import CityPageCTA from "@/components/ui/CityPageCTA";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

export async function generateStaticParams() {
  return brazilCities.map((city) => ({ cidade: city.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await props.params;
  const city = getCityBySlug(cidade);
  if (!city) return {};

  const canonicalUrl = `${SITE_URL}/agencia/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonicalUrl,
      type: "website",
      locale: "pt_BR",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

const services = [
  {
    num: "01",
    title: "Sites Institucionais",
    subtitle: "Presença que impõe respeito",
    desc: "Sites robustos, elegantes e altamente performáticos. Desenvolvemos para empresas que precisam transmitir autoridade desde o primeiro clique — com Lighthouse 95+ e SEO técnico incluso.",
    tags: ["Design exclusivo", "SEO técnico", "Performance 95+", "CMS integrado"],
  },
  {
    num: "02",
    title: "Landing Pages",
    subtitle: "Foco total em conversão",
    desc: "Páginas desenhadas para maximizar conversão. Copy persuasivo e conexão direta ao seu CRM. Cada elemento existe para transformar visitante em cliente.",
    tags: ["Copy persuasivo", "Alta conversão", "Integração CRM", "Análise de dados"],
  },
  {
    num: "03",
    title: "E-commerces",
    subtitle: "Lojas que vendem de verdade",
    desc: "Experiências de compra memoráveis que reduzem abandono de carrinho e aumentam ticket médio. UX de checkout otimizado, mobile first e integração com ERP e analytics.",
    tags: ["UX de checkout", "Mobile first", "Integração ERP", "Analytics"],
  },
];

const differentials = [
  {
    title: "13+ anos de experiência",
    desc: "Fundador com mais de 13 anos em agências e projetos de alto impacto digital.",
  },
  {
    title: "Performance 95+ garantida",
    desc: "Todos os projetos são entregues com Lighthouse 95+ como meta mínima.",
  },
  {
    title: "Design exclusivo",
    desc: "Nenhum template. Cada projeto começa do zero, pensado para a sua marca.",
  },
  {
    title: "Revisões ilimitadas",
    desc: "Na fase de design, revisões são ilimitadas. Você aprova antes de avançar.",
  },
  {
    title: "SEO técnico incluso",
    desc: "Core Web Vitals, acessibilidade e SEO técnico fazem parte do escopo padrão.",
  },
  {
    title: "CMS integrado",
    desc: "Atualize textos e imagens sem precisar de um desenvolvedor.",
  },
];

const faqs = [
  {
    q: "Quanto custa um site profissional?",
    a: "O valor varia conforme a complexidade do projeto, quantidade de páginas e funcionalidades. Após entender suas necessidades, enviamos uma proposta personalizada e detalhada.",
  },
  {
    q: "Quanto tempo leva para criar um site?",
    a: "O prazo é definido antes do início, com etapas e aprovações claras. Projetos menores podem ser entregues em semanas; projetos mais complexos têm cronograma proporcional.",
  },
  {
    q: "O site fica bem no Google?",
    a: "Sim. SEO técnico, Core Web Vitals, acessibilidade e estrutura de dados (Schema.org) fazem parte do escopo padrão de todos os projetos.",
  },
  {
    q: "Vou conseguir editar o site depois?",
    a: "Sim. Todos os projetos incluem CMS integrado para que você atualize textos, imagens e conteúdo sem precisar de um desenvolvedor.",
  },
  {
    q: "Vocês atendem empresas de todos os segmentos?",
    a: "Sim. Já desenvolvemos projetos para clínicas, consultorias, imobiliárias, e-commerces, SaaS, serviços B2B e empresas de diferentes portes.",
  },
];

export default async function CityPage(props: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await props.params;
  const city = getCityBySlug(cidade);
  if (!city) notFound();

  const pageUrl = `${SITE_URL}/agencia/${city.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${pageUrl}/#service`,
      name: `Energy — Agência de Sites em ${city.name}`,
      description: city.metaDescription,
      url: pageUrl,
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: {
          "@type": "State",
          name: city.state,
          containedInPlace: { "@type": "Country", name: "Brazil" },
        },
      },
      provider: {
        "@type": "Organization",
        name: "Energy",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Desenvolvimento de Sites em ${city.name}`,
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.desc },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Agência Digital", item: `${SITE_URL}/agencia` },
        { "@type": "ListItem", position: 3, name: `Sites em ${city.name}`, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#0a0a0a] text-white">
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col justify-center px-6 lg:px-16 pt-40 pb-24 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto w-full">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
              // Agência de Sites — {city.name}, {city.state}
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.02] text-white mb-8 max-w-5xl">
              {city.h1}
            </h1>
            <p className="text-white/50 leading-relaxed text-lg max-w-2xl mb-12">
              {city.intro}
            </p>
            <CityPageCTA city={city.name} />
            <div className="mt-16 flex flex-wrap gap-6">
              {city.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-white/30 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-[#FE4101]" />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business context */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-4 block">
                O mercado em {city.name}
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-white">
                Por que investir em desenvolvimento de site em {city.name}?
              </h2>
            </div>
            <p className="text-white/40 leading-relaxed text-base lg:text-lg">
              {city.businessContext}
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">
                // O que fazemos
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-2xl">
                Criação de sites em {city.name}.{" "}
                <span className="text-[#FE4101]">Design e desenvolvimento completo.</span>
              </h2>
            </div>
            <div className="border-t border-white/8">
              {services.map((service) => (
                <div
                  key={service.num}
                  className="border-b border-white/8 py-10 grid lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 items-start px-0 lg:px-4"
                >
                  <span className="text-xs text-white/20 uppercase tracking-widest pt-1">
                    // {service.num}
                  </span>
                  <div>
                    <h3 className="text-xl lg:text-2xl text-white font-bold mb-1">{service.title}</h3>
                    <span className="text-xs text-[#FE4101]/60 uppercase tracking-widest">{service.subtitle}</span>
                  </div>
                  <div>
                    <p className="text-white/40 leading-relaxed text-sm lg:text-base mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">
                // Por que a Energy
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-2xl">
                O que faz a diferença em cada projeto
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {differentials.map((d) => (
                <div key={d.title} className="bg-[#0a0a0a] p-8">
                  <h3 className="text-white font-bold mb-3">{d.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">
                // Dúvidas frequentes
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-white">
                Perguntas sobre criação de sites em {city.name}
              </h2>
            </div>
            <div className="space-y-px bg-white/5">
              {faqs.map((f) => (
                <div key={f.q} className="bg-[#111111] px-8 py-6">
                  <h3 className="text-white font-bold mb-3 text-base">{f.q}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-28 px-6 lg:px-16">
          <div className="max-w-[90rem] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
              // Pronto para começar?
            </p>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight text-white mb-6 max-w-3xl mx-auto">
              Vamos construir o site da sua empresa em{" "}
              <span className="text-[#FE4101]">{city.name}</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
              Resposta em até 24 horas. Sem compromisso — só uma conversa honesta sobre o
              que faz sentido para o seu negócio.
            </p>
            <CityPageCTA city={city.name} />
          </div>
        </section>
      </main>
    </>
  );
}