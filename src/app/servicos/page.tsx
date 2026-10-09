import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServicePageCTA from "@/components/ui/ServicePageCTA";

const SITE_URL = "https://energymidia.com.br";

export const metadata: Metadata = {
  title: "Serviços | Energy — Criação de Sites, Landing Pages e E-commerce",
  description:
    "Agência especializada em criação de sites institucionais, landing pages de alta conversão e e-commerces com design exclusivo e SEO técnico. Conheça nossos serviços.",
  keywords: [
    "serviços agência digital",
    "criação de sites",
    "landing page",
    "ecommerce",
    "agência digital",
    "desenvolvimento web",
  ],
  alternates: { canonical: `${SITE_URL}/servicos` },
  openGraph: {
    title: "Serviços | Energy — Criação de Sites, Landing Pages e E-commerce",
    description:
      "Sites institucionais, landing pages e e-commerces com design exclusivo e SEO técnico.",
    url: `${SITE_URL}/servicos`,
    type: "website",
    locale: "pt_BR",
  },
};

const services = [
  {
    num: "01",
    title: "Criação de Sites",
    subtitle: "Presença que impõe respeito",
    desc: "Sites robustos, elegantes e altamente performáticos para empresas que precisam transmitir autoridade e credibilidade desde o primeiro clique.",
    tags: ["Design exclusivo", "SEO técnico", "Performance 95+", "CMS integrado"],
    href: "/servicos/criacao-de-sites",
  },
  {
    num: "02",
    title: "Landing Pages",
    subtitle: "Foco total em conversão",
    desc: "Páginas desenhadas para maximizar conversão. Cada elemento testado e otimizado para transformar visitante em lead ou cliente com o menor custo por aquisição.",
    tags: ["Copy persuasivo", "A/B testing", "Integração CRM", "Rastreamento completo"],
    href: "/servicos/landing-page",
  },
  {
    num: "03",
    title: "E-commerces",
    subtitle: "Lojas que vendem de verdade",
    desc: "Experiências de compra memoráveis que reduzem abandono de carrinho e aumentam ticket médio. Design centrado no produto, na jornada do cliente e no resultado.",
    tags: ["UX de checkout", "Mobile first", "Integração ERP", "Google Shopping"],
    href: "/servicos/ecommerce",
  },
  {
    num: "04",
    title: "Consultoria de SEO",
    subtitle: "Leads sem pagar por clique",
    desc: "Posicionamento orgânico no Google que vira ativo da empresa. Páginas, conteúdo e autoridade que continuam gerando contatos sem depender de verba mensal em anúncios.",
    tags: ["SEO técnico", "SEO local", "Conteúdo comercial", "Relatório de leads"],
    href: "/servicos/seo-para-empresas",
  },
];

export default function ServicosPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 lg:px-16 border-b border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
            // O que fazemos
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.02] text-white">
              Quatro soluções.{" "}
              <span className="text-[#FE4101]">Um único objetivo:</span>{" "}
              resultado.
            </h1>
            <div>
              <p className="text-white/40 leading-relaxed text-lg mb-10">
                Cada projeto começa com estratégia e termina com um ativo digital que trabalha por você 24 horas por dia — gerando presença, leads e vendas.
              </p>
              <ServicePageCTA label="Solicitar proposta" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service cards ─────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-b border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="border-t border-white/8">
            {services.map((s) => (
              <Link
                key={s.num}
                href={s.href}
                className="group block border-b border-white/8 py-12 grid lg:grid-cols-[80px_1fr_1fr_auto] gap-6 lg:gap-12 items-start hover:bg-white/[0.02] transition-colors duration-300 px-0 lg:px-4"
              >
                <span className="text-xs text-white/20 uppercase tracking-widest pt-1">
                  // {s.num}
                </span>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-[#FE4101] transition-colors duration-300">
                    {s.title}
                  </h2>
                  <span className="text-xs text-[#FE4101]/60 uppercase tracking-widest">
                    {s.subtitle}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-5 lg:hidden">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-white/40 leading-relaxed text-sm lg:text-base mb-5">
                    {s.desc}
                  </p>
                  <div className="hidden lg:flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start pt-1">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FE4101] group-hover:bg-[#FE4101] transition-all duration-300 shrink-0">
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Energy ────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-3 gap-px bg-white/8">
            {[
              {
                label: "Design",
                title: "Nenhum template.",
                desc: "Cada projeto é criado do zero a partir da sua marca, público e objetivos. Design que diferencia — não que padroniza.",
              },
              {
                label: "Técnica",
                title: "SEO no DNA.",
                desc: "Estrutura técnica, schema markup, Core Web Vitals e performance configurados desde o primeiro deploy. O site já nasce pronto para o Google.",
              },
              {
                label: "Resultado",
                title: "Ativo que trabalha.",
                desc: "Um site profissional gera leads, credibilidade e vendas enquanto você cuida do negócio. É o vendedor que nunca dorme.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#111111] p-10">
                <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-4 block">
                  // {item.label}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-[90rem] mx-auto text-center">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
            // Pronto para começar?
          </p>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight text-white mb-6 max-w-4xl mx-auto">
            Qual serviço faz sentido{" "}
            <span className="text-[#FE4101]">para o seu momento?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
            Resposta em até 24 horas. Uma conversa honesta sobre o que realmente faz sentido para o seu negócio — sem enrolação.
          </p>
          <ServicePageCTA label="Solicitar proposta" />
        </div>
      </section>

    </main>
  );
}
