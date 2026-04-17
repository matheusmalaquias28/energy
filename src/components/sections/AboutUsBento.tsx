"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GradientBorderBox from "@/components/ui/GradientBorderBox";
import { sectionDisplay, sectionTitle } from "@/lib/fonts";
import { GlobeVV } from "@/components/effects/GlobeVV";

const stats = [
  {
    value: "13+",
    label: "Anos de experiência",
    sub: "Em agência e projetos digitais de alto impacto.",
  },
  {
    value: "15+",
    label: "Prémios & menções",
    sub: "Reconhecimento em plataformas de design e criatividade.",
  },
  {
    value: "350+",
    label: "Clientes satisfeitos",
    sub: "Marcas que confiam na nossa entrega e acompanhamento.",
  },
] as const;

export default function AboutUsBento() {
  return (
    <section
      id="sobre-nos"
      className="border-b border-white/5 bg-[#0a0a0a] py-20 lg:py-28"
      aria-labelledby="about-bento-heading"
    >
      <div className="mx-auto w-full max-w-[80vw]">
        <ScrollReveal>
          <div className="mb-10 space-y-3 md:mb-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
              ( Sobre nós )
            </p>
            <h2
              id="about-bento-heading"
              className={`${sectionTitle} max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-white`}
            >
              Quem somos e como{" "}
              <span className="text-[#FE4101]">trabalhamos</span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
              Números que resumem a nossa trajetória — e espaço para a história completa
              em breve.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 lg:items-stretch">
          <div className="flex flex-col gap-5 lg:col-span-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <GradientBorderBox className="flex-1">
                  <div className="flex flex-col gap-3 p-6 md:p-7">
                    <span
                      className={`${sectionDisplay} text-4xl leading-none text-white md:text-5xl`}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                      {stat.label}
                    </span>
                    <p className="text-sm leading-relaxed text-white/40">{stat.sub}</p>
                  </div>
                </GradientBorderBox>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.12} className="flex lg:col-span-8">
            <GradientBorderBox className="w-full min-h-[320px] md:min-h-[400px] lg:min-h-[520px]">
              <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[inherit]">
                <GlobeVV />
              </div>
            </GradientBorderBox>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
