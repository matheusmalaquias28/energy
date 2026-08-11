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
    <section id="faq" className="border-b border-white/5 bg-[#0a0a0a] px-6 py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[90rem]">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <span className="gallery-marquee__eyebrow">Dúvidas frequentes</span>
            <h2
              className={`${sectionTitle} mt-4 text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-white`}
            >
              Perguntas que{" "}
              <span className="block text-[#FE4101]">todo mundo faz.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl border-t border-white/8">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="border-b border-white/8">
                <button
                  type="button"
                  className="group flex w-full cursor-none items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className={`${sectionBodyTitle} text-base text-white/80 transition-colors duration-300 group-hover:text-white`}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-white/30 transition-colors duration-300 group-hover:text-[#FE4101]">
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
                      <p className="pb-6 text-sm leading-relaxed text-white/40">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
