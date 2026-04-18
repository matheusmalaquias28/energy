"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { sectionBodyTitle, sectionTitle } from "@/lib/fonts";
import { useContactModal } from "@/components/contact/contact-modal-context";

export default function StrategicPartner() {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-16 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-[90rem] mx-auto">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">// 05</span>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Parceria estratégica</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <ScrollReveal>
              <h2 className={`${sectionTitle} text-[clamp(2rem,5vw,4.5rem)] leading-[1.0] text-white mb-8`}>
                Não somos um fornecedor.{" "}
                <span className="text-[#FE4101]">Somos parte do seu time.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-white/50 text-lg leading-relaxed mb-5">
                Enquanto a maioria das agências entrega um arquivo e some, a Energy acompanha o crescimento da sua marca.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-white/30 leading-relaxed mb-10">
                Você terá acesso direto ao time responsável — sem gerentes intermediários, sem ruído de comunicação. Decisões rápidas, resultado mais preciso.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-6">
                <button
                  type="button"
                  onClick={openContactModal}
                  className="group inline-flex cursor-none items-center gap-2 border-b border-white/20 bg-transparent pb-1 text-sm uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-[#FE4101] hover:text-[#FE4101]"
                >
                  Quero ser parceiro
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <a href="#servicos" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-white/40 border-b border-white/10 pb-1 hover:border-white/40 hover:text-white/70 transition-colors duration-300 cursor-none">
                  Ver como funciona
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — checklist */}
          <ScrollReveal delay={0.1}>
            <div className="border-t border-white/8">
              {[
                { label: "Comunicação direta", desc: "Fale com quem faz, sem intermediários." },
                { label: "Sem contratos longos", desc: "Projetos por escopo, sem amarras." },
                { label: "Revisões ilimitadas", desc: "Na fase de design, sem cobrança extra." },
                { label: "Entrega ágil", desc: "Metodologia ágil, resultados rápidos." },
              ].map((item, i) => (
                <div key={item.label} className="flex items-start justify-between py-6 border-b border-white/8 gap-8">
                  <div>
                    <div className={`${sectionBodyTitle} text-white mb-1`}>{item.label}</div>
                    <div className="text-white/30 text-sm">{item.desc}</div>
                  </div>
                  <span className="text-[#FE4101] text-lg flex-shrink-0">✓</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
