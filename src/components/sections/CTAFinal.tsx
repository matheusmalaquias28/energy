"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { sectionTitle } from "@/lib/fonts";

export default function CTAFinal() {
  return (
    <section id="contato" className="py-28 lg:py-40 px-6 lg:px-16 bg-[#111111]">
      <div className="max-w-[90rem] mx-auto">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">// 08</span>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Contato</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className={`${sectionTitle} text-[clamp(2.5rem,7vw,7.5rem)] leading-[0.95] text-white mb-8 max-w-4xl`}>
            Vamos criar algo{" "}
            <span className="text-[#FE4101]">extraordinário</span>{" "}
            juntos.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-white/40 text-lg leading-relaxed mb-14 max-w-xl">
            Sua empresa merece um site que impressiona, converte e posiciona. Vamos conversar sobre o que a Energy pode fazer por você.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <motion.a
              href="mailto:contato@energy.studio"
              className="group inline-flex items-center gap-3 text-base uppercase tracking-[0.15em] text-white border-b border-white/20 pb-2 hover:border-[#FE4101] hover:text-[#FE4101] transition-colors duration-300 cursor-none"
              whileHover={{}}
            >
              Solicitar proposta gratuita
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.a>
            <a
              href="#projetos"
              className="group inline-flex items-center gap-3 text-base uppercase tracking-[0.15em] text-white/30 border-b border-white/10 pb-2 hover:border-white/40 hover:text-white/60 transition-colors duration-300 cursor-none"
            >
              Ver portfólio completo
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-12 text-white/15 text-xs uppercase tracking-[0.2em]">
            Resposta em até 2 horas úteis · Sem compromisso · 100% personalizado
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
