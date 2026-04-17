"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { sectionDisplay, sectionTitle } from "@/lib/fonts";

const differentials = [
  {
    num: "01",
    title: "Design com intenção estratégica",
    desc: "Cada cor, fonte e espaçamento tem um propósito. Não decoramos páginas — construímos ferramentas de persuasão visual.",
  },
  {
    num: "02",
    title: "Entrega rápida sem abrir mão da qualidade",
    desc: "Primeiro protótipo em até 72h da briefing. Metodologia ágil que respeita seu prazo e seu negócio.",
  },
  {
    num: "03",
    title: "Parceria, não prestação de serviço",
    desc: "Você terá acesso direto ao designer responsável — sem intermediários, sem telefone sem fio.",
  },
  {
    num: "04",
    title: "Performance como padrão",
    desc: "Sites com Lighthouse 95+ por padrão. SEO técnico, Core Web Vitals e acessibilidade integrados desde o início.",
  },
  {
    num: "05",
    title: "Suporte real por 7 dias",
    desc: "Após o go-live, permanecemos disponíveis para ajustes e monitoramento. Sem abandono pós-entrega.",
  },
  {
    num: "06",
    title: "Design que evolui com você",
    desc: "Sistema de design escalável para você continuar crescendo sem ter que refazer tudo do zero no futuro.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-28 lg:py-36 px-6 lg:px-16 bg-[#111111] border-b border-white/5">
      <div className="max-w-[90rem] mx-auto">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">// 04</span>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Por que a Energy</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-end mb-20">
          <ScrollReveal>
            <h2 className={`${sectionTitle} text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-white`}>
              O que nos torna{" "}
              <span className="text-[#FE4101]">diferentes.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 leading-relaxed">
              Seis princípios que guiam cada projeto que entregamos — do primeiro pixel ao go-live.
            </p>
          </ScrollReveal>
        </div>

        <div className="border-t border-white/8">
          {differentials.map((item, i) => (
            <ScrollReveal key={item.num} delay={i * 0.06}>
              <motion.div
                className="group grid lg:grid-cols-[60px_1fr_1fr] gap-6 lg:gap-12 py-8 border-b border-white/8 items-start hover:bg-white/[0.02] transition-colors duration-300 cursor-none"
                whileHover={{}}
              >
                <span className="text-xs text-white/20 uppercase tracking-widest pt-1">// {item.num}</span>
                <h3 className={`${sectionDisplay} text-lg text-white group-hover:text-[#FE4101] transition-colors duration-300 leading-snug`}>
                  {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
