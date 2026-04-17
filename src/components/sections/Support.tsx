"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Clock, MessageCircle, Wrench, BarChart3 } from "lucide-react";
import { sectionBodyTitle, sectionTitle } from "@/lib/fonts";

const supports = [
  { icon: Clock, num: "01", title: "7 dias de suporte pós-entrega", desc: "Após o go-live, nossa equipe permanece disponível para ajustes e correções." },
  { icon: MessageCircle, num: "02", title: "Canal direto no WhatsApp", desc: "Fale diretamente com quem criou seu projeto — sem tickets ou chamados." },
  { icon: Wrench, num: "03", title: "Correções em até 24h", desc: "Qualquer ajuste no período de suporte é atendido em até 24 horas úteis." },
  { icon: BarChart3, num: "04", title: "Relatório de performance", desc: "Você recebe um relatório completo com métricas, recomendações e próximos passos." },
];

export default function Support() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-16 bg-[#111111] border-b border-white/5">
      <div className="max-w-[90rem] mx-auto">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">// 06</span>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Suporte</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <ScrollReveal>
              <h2 className={`${sectionTitle} text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-white mb-8`}>
                Entregamos e{" "}
                <span className="text-[#FE4101]">ficamos</span>{" "}
                ao seu lado.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-white/40 leading-relaxed text-lg">
                A maioria das agências desaparece depois da entrega. Nós acreditamos que o go-live é só o começo — e estamos lá para garantir que tudo funcione.
              </p>
            </ScrollReveal>
          </div>

          <div className="border-t border-white/8">
            {supports.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group flex items-start gap-6 py-7 border-b border-white/8 hover:bg-white/[0.02] transition-colors duration-300 -mx-2 px-2">
                  <div className="flex-shrink-0 w-10 h-10 border border-white/8 flex items-center justify-center group-hover:border-[#FE4101]/30 transition-colors duration-300">
                    <item.icon size={16} className="text-white/30 group-hover:text-[#FE4101] transition-colors duration-300" />
                  </div>
                  <div>
                    <div className={`${sectionBodyTitle} text-white mb-1`}>{item.title}</div>
                    <div className="text-white/30 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
