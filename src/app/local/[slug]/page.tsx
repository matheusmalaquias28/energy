import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { localPages, getLocalPageBySlug } from "@/data/local-pages";
import CityPageCTA from "@/components/ui/CityPageCTA";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energyagencia.com.br";

export async function generateStaticParams() {
  return localPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const page = getLocalPageBySlug(slug);
  if (!page) return {};

  const url = `${SITE_URL}/local/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      type: "website",
      locale: "pt_BR",
    },
  };
}

/* ─── Accordion FAQ (client boundary) ──────────────────────────── */
import FaqAccordion from "@/components/ui/FaqAccordion";

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default async function LocalPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const page = getLocalPageBySlug(slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Energy — ${page.serviceLabel} em ${page.city}`,
    description: page.metaDescription,
    url: `${SITE_URL}/local/${page.slug}`,
    areaServed: {
      "@type": "City",
      name: page.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: page.region,
        containedInPlace: { "@type": "State", name: page.state },
      },
    },
    keywords: page.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#0a0a0a] text-white">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="min-h-[72vh] flex flex-col justify-center px-6 lg:px-16 pt-40 pb-24 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto w-full">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
              // {page.serviceLabel} — {page.city}, {page.state}
            </p>

            <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.02] text-white mb-8 max-w-5xl">
              {page.h1}
            </h1>

            <p className="text-white/50 leading-relaxed text-lg max-w-2xl mb-12">
              {page.intro}
            </p>

            <CityPageCTA city={page.city} />

            {/* Breadcrumb keywords */}
            <div className="mt-16 flex flex-wrap gap-3">
              {page.keywords.slice(0, 3).map((kw) => (
                <span
                  key={kw}
                  className="text-[10px] uppercase tracking-widest text-white/20 border border-white/8 px-3 py-1"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Market context ────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-4 block">
                O mercado em {page.city}
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-white">
                Por que {page.serviceLabel.toLowerCase()} em {page.city}?
              </h2>
            </div>
            <p className="text-white/40 leading-relaxed text-base lg:text-lg">
              {page.marketContext}
            </p>
          </div>
        </section>

        {/* ── Service details ───────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">
                // O que entregamos
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-3xl">
                {page.serviceLabel} para {page.city}.{" "}
                <span className="text-[#FE4101]">Cada detalhe no lugar certo.</span>
              </h2>
            </div>

            <div className="border-t border-white/8">
              {page.serviceDetails.map((s, i) => (
                <div
                  key={i}
                  className="border-b border-white/8 py-10 grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-12 items-start px-0 lg:px-4"
                >
                  <span className="text-xs text-white/20 uppercase tracking-widest pt-1 w-10">
                    // {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/40 leading-relaxed text-sm lg:text-base">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why local ─────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-6 block">
                // Por que importa
              </span>
              <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/60 leading-relaxed">
                {page.whyLocal}
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">
                // Dúvidas frequentes
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white sticky top-32">
                Perguntas sobre{" "}
                <span className="text-[#FE4101]">{page.serviceLabel.toLowerCase()}</span>{" "}
                em {page.city}
              </h2>
            </div>
            <FaqAccordion faqs={page.faqs} />
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16">
          <div className="max-w-[90rem] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
              // Pronto para começar?
            </p>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight text-white mb-6 max-w-4xl mx-auto">
              Vamos criar o seu{" "}
              <span className="text-[#FE4101]">
                {page.serviceLabel.toLowerCase()}
              </span>{" "}
              em {page.city}
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
              Resposta em até 24 horas. Sem compromisso — só uma conversa honesta sobre o que faz sentido para o seu negócio.
            </p>
            <CityPageCTA city={page.city} />
          </div>
        </section>

      </main>
    </>
  );
}
