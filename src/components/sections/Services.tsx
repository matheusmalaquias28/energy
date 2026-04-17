"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { sectionDisplay, sectionTitle } from "@/lib/fonts";

const services = [
  {
    num: "01",
    title: "Sites Institucionais",
    subtitle: "Presença que impõe respeito",
    desc: "Sites robustos, elegantes e altamente performáticos para empresas que precisam transmitir autoridade e credibilidade desde o primeiro clique.",
    tags: ["Design exclusivo", "SEO técnico", "Performance 95+", "CMS integrado"],
  },
  {
    num: "02",
    title: "Landing Pages",
    subtitle: "Foco total em conversão",
    desc: "Páginas desenhadas para maximizar conversão. Cada elemento testado e otimizado para transformar visitante em lead ou cliente.",
    tags: ["Copy persuasivo", "A/B testing", "Integração CRM", "Análise de dados"],
  },
  {
    num: "03",
    title: "E-commerces",
    subtitle: "Lojas que vendem de verdade",
    desc: "Experiências de compra memoráveis que reduzem abandono de carrinho e aumentam ticket médio. Design centrado no produto e na jornada do cliente.",
    tags: ["UX de checkout", "Mobile first", "Integração ERP", "Analytics"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-28 lg:py-36 px-6 lg:px-16 bg-[#111111] border-b border-white/5">
      <div className="max-w-[90rem] mx-auto">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">// 02</span>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">O que fazemos</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-20">
          <ScrollReveal>
            <h2 className={`${sectionTitle} text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-white`}>
              Três soluções.{" "}
              <span className="text-[#FE4101]">Um único objetivo:</span>{" "}
              resultado.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 leading-relaxed max-w-sm">
              Cada projeto começa com estratégia e termina com um ativo digital que trabalha por você 24 horas por dia.
            </p>
          </ScrollReveal>
        </div>

        {/* Services list */}
        <div className="border-t border-white/8">
          {services.map((service, i) => (
            <ScrollReveal key={service.num} delay={i * 0.08}>
              <div className="group border-b border-white/8 py-10 grid lg:grid-cols-[80px_1fr_1fr_auto] gap-6 lg:gap-12 items-start hover:bg-white/[0.02] transition-colors duration-300 px-0 lg:px-4 cursor-none">
                <span className="text-xs text-white/20 uppercase tracking-widest pt-1">// {service.num}</span>
                <div>
                  <h3 className={`${sectionDisplay} text-xl lg:text-2xl text-white mb-1 group-hover:text-[#FE4101] transition-colors duration-300`}>{service.title}</h3>
                  <span className="text-xs text-[#FE4101]/60 uppercase tracking-widest">{service.subtitle}</span>
                </div>
                <p className="text-white/40 leading-relaxed text-sm lg:text-base">{service.desc}</p>
                <div className="flex flex-col items-end gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FE4101] group-hover:bg-[#FE4101] transition-all duration-300">
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="hidden lg:flex flex-wrap gap-2 justify-end">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
