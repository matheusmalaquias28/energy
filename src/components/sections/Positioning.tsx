"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { sectionDisplay, sectionTitle } from "@/lib/fonts";

export default function Positioning() {
  return (
    <section id="posicionamento" className="py-28 lg:py-36 px-6 lg:px-16 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-[90rem] mx-auto">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">// 01</span>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Posicionamento</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <ScrollReveal>
              <h2 className={`${sectionTitle} text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-white mb-8`}>
                Seu site é o seu vendedor{" "}
                <span className="text-[#FE4101]">mais importante.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-white/50 leading-relaxed text-lg mb-6">
                Não importa o tamanho da sua empresa. O que importa é a qualidade do impacto que você causa na primeira visita.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-white/30 leading-relaxed">
                A Energy cria ativos digitais que transformam curiosidade em confiança — e confiança em cliente. Trabalhamos com empresas que entendem que design não é custo, é investimento estratégico.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {[
              { value: "120+", label: "Projetos entregues", desc: "Em 4 anos de mercado" },
              { value: "98%", label: "Taxa de satisfação", desc: "Clientes que recomendam" },
              { value: "40%", label: "Mais conversões", desc: "Média após redesign" },
              { value: "72h", label: "Primeiro protótipo", desc: "Da briefing ao visual" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="bg-[#0a0a0a] p-8 hover:bg-[#111111] transition-colors duration-300">
                  <div className={`${sectionDisplay} text-3xl lg:text-4xl text-[#FE4101] mb-3`}>{stat.value}</div>
                  <div className="text-white text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-white/30 text-xs uppercase tracking-wider">{stat.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
