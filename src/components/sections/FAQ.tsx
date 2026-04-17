"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { sectionBodyTitle, sectionTitle } from "@/lib/fonts";

const faqs = [
  { q: "Quanto tempo leva para entregar um projeto?", a: "Depende do escopo. Landing pages: 7-14 dias. Sites institucionais: 3-6 semanas. E-commerces: 6-12 semanas. Sempre apresentamos um cronograma detalhado na proposta." },
  { q: "Vocês trabalham com empresas de qualquer segmento?", a: "Sim. Já atendemos advocacia, tecnologia, varejo, construção, saúde e mais. O que importa é o seu compromisso com qualidade — o segmento vem depois." },
  { q: "Como funciona o processo de aprovação e revisões?", a: "O projeto passa por etapas claras: briefing, wireframes, design, desenvolvimento e entrega. Em cada etapa você aprova antes de avançar. Revisões são ilimitadas na fase de design." },
  { q: "O site vai ter boa performance e SEO?", a: "Garantimos. Todos os nossos projetos são desenvolvidos com Lighthouse 95+ como meta mínima. SEO técnico, acessibilidade e Core Web Vitals são parte do escopo padrão." },
  { q: "Posso atualizar o conteúdo do site depois?", a: "Sim. Todos os projetos incluem CMS integrado para você atualizar textos, imagens e páginas sem precisar de um desenvolvedor." },
  { q: "Vocês também fazem manutenção após a entrega?", a: "O suporte pós-entrega de 7 dias é padrão. Para manutenção contínua, oferecemos planos mensais a partir do segundo mês." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 lg:py-36 px-6 lg:px-16 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-[90rem] mx-auto">

        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">// 07</span>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Dúvidas frequentes</span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <h2 className={`${sectionTitle} text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-white sticky top-32`}>
              Perguntas que{" "}
              <span className="text-[#FE4101]">todo mundo</span>{" "}
              faz.
            </h2>
          </ScrollReveal>

          <div className="border-t border-white/8">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="border-b border-white/8">
                  <button
                    className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-none group"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className={`${sectionBodyTitle} text-base text-white/80 group-hover:text-white transition-colors duration-300`}>
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 text-white/30 group-hover:text-[#FE4101] transition-colors duration-300">
                      {open === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <p className="pb-6 text-white/40 leading-relaxed text-sm">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
