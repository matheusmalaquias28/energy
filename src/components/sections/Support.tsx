"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Clock, MessageCircle, Wrench, BarChart3 } from "lucide-react";
import { sectionBodyTitle, sectionTitle } from "@/lib/fonts";

const supports = [
  {
    icon: Clock,
    title: "7 dias de suporte pós-entrega",
    desc: "Após o go-live, nossa equipe permanece disponível para ajustes e correções.",
  },
  {
    icon: MessageCircle,
    title: "Canal direto no WhatsApp",
    desc: "Fale diretamente com quem criou seu projeto — sem tickets ou chamados.",
  },
  {
    icon: Wrench,
    title: "Correções em até 24h",
    desc: "Qualquer ajuste no período de suporte é atendido em até 24 horas úteis.",
  },
  {
    icon: BarChart3,
    title: "Relatório de performance",
    desc: "Você recebe um relatório completo com métricas, recomendações e próximos passos.",
  },
];

export default function Support() {
  return (
    <section className="border-b border-white/5 bg-black px-6 py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[90rem]">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
            <span className="gallery-marquee__eyebrow">Suporte</span>
            <h2
              className={`${sectionTitle} mb-6 mt-4 text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-white`}
            >
              Entregamos e <span className="text-[#FE4101]">ficamos</span> ao seu lado.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/40">
              A maioria das agências desaparece depois da entrega. Nós acreditamos que o go-live é só o
              começo — e estamos lá para garantir que tudo funcione.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {supports.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <article
                className="group flex h-full flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-8 text-center transition-all duration-300 ease-out hover:scale-[1.025] hover:border-[#FE4101]/25 hover:bg-white/[0.035] hover:shadow-[0_0_36px_rgba(254,65,1,0.14),0_12px_40px_rgba(0,0,0,0.35)] sm:px-6 sm:py-9"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#FE4101]/35 group-hover:bg-[#FE4101]/10 group-hover:shadow-[0_0_20px_rgba(254,65,1,0.2)]">
                  <item.icon
                    size={20}
                    className="text-white/45 transition-colors duration-300 group-hover:text-[#FE4101]"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className={`${sectionBodyTitle} mb-2 text-base text-white sm:text-[1.05rem]`}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/35">{item.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
