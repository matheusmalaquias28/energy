import type { Metadata } from "next";
import ServicePageCTA from "@/components/ui/ServicePageCTA";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { Check, Target, Zap, BarChart3, Clock, RefreshCw, Shield } from "lucide-react";

const SITE_URL = "https://energymidia.com.br";

export const metadata: Metadata = {
  title: "Landing Pages por Nicho | Médicos, Advogados, Psicólogos",
  description:
    "Landing pages específicas para o seu nicho. Médicos, advogados, psicólogos, dentistas e mais. Copy pensado para o seu público. Design que converte.",
  keywords: [
    "landing page para médico",
    "landing page para advogado",
    "landing page para psicólogo",
    "landing page por nicho",
    "site para médico",
    "site para advogado",
    "landing page profissional liberal",
    "agência landing page nicho",
  ],
  alternates: { canonical: `${SITE_URL}/modelo` },
  openGraph: {
    title: "Landing Pages por Nicho | Energy",
    description:
      "Páginas específicas para médicos, advogados, psicólogos e mais. Copy estratégico, design que converte.",
    url: `${SITE_URL}/modelo`,
    type: "website",
    locale: "pt_BR",
  },
};

const nichos = [
  {
    icon: "🩺",
    title: "Médicos",
    desc: "CRM visível, credibilidade técnica e agendamento facilitado. Copy dentro das normas do CFM que converte consultas sem prometer resultados.",
  },
  {
    icon: "⚖️",
    title: "Advogados",
    desc: "Autoridade jurídica, especializações em destaque e OAB visível. Copy cuidadoso que gera leads sem infringir o Código de Ética da OAB.",
  },
  {
    icon: "🧠",
    title: "Psicólogos",
    desc: "Acolhimento e confiança visual. Design que transmite serenidade com copy respeitando as diretrizes do CFP.",
  },
  {
    icon: "🦷",
    title: "Dentistas",
    desc: "Clínica moderna, procedimentos em destaque e depoimentos reais. Conversão direta para agendamento de avaliação.",
  },
  {
    icon: "🏠",
    title: "Imóveis",
    desc: "Captação de compradores e investidores com formulário estratégico, galeria e integração com portais imobiliários.",
  },
  {
    icon: "💪",
    title: "Personal Trainers",
    desc: "Transformações reais, protocolos de treino e agendamento de aula experimental como principal CTA da página.",
  },
  {
    icon: "📚",
    title: "Educação",
    desc: "Matrículas, listas de espera e captação por turma. Cada período de inscrição com sua própria página de conversão.",
  },
  {
    icon: "💰",
    title: "Financeiro",
    desc: "Planejadores, consultores e corretores. Copy que transmite segurança e gera leads qualificados com proposta de valor clara.",
  },
  {
    icon: "✨",
    title: "Estética",
    desc: "Clínicas de estética, dermatologia e bem-estar com galeria de resultados e agendamento de avaliação simplificado.",
  },
];

const features = [
  {
    icon: <Target size={18} />,
    title: "Copy específico do nicho",
    desc: "Não usamos template. Cada palavra é escrita entendendo as dores, o vocabulário e as objeções do seu público.",
  },
  {
    icon: <Zap size={18} />,
    title: "< 2s de carregamento",
    desc: "Páginas lentas custam conversões. Nossas landing pages carregam rápido e mantêm Quality Score alto em anúncios.",
  },
  {
    icon: <BarChart3 size={18} />,
    title: "Rastreamento completo",
    desc: "GA4, pixels, UTMs e eventos de conversão configurados. Você sabe exatamente o que converte e o que não converte.",
  },
  {
    icon: <Clock size={18} />,
    title: "Entrega em 7–14 dias",
    desc: "Do briefing à entrega final. Sem espera de meses nem surpresas no cronograma.",
  },
  {
    icon: <RefreshCw size={18} />,
    title: "Revisões ilimitadas",
    desc: "Ajustamos headline, CTA, cores e layout até você aprovar 100%, sem custo adicional por rodadas.",
  },
  {
    icon: <Shield size={18} />,
    title: "Dentro das normas do conselho",
    desc: "Conhecemos as regras de publicidade do CFM, OAB e CFP. Nenhum copy vai te colocar em problema com seu conselho.",
  },
];

const steps = [
  {
    num: "01",
    title: "Briefing do nicho",
    desc: "Entendemos seu público, sua oferta, seus diferenciais e o objetivo da campanha. Quanto mais detalhe você der, melhor o resultado.",
  },
  {
    num: "02",
    title: "Copy + Design",
    desc: "Nossa equipe cria o texto estratégico e o design visual alinhados ao seu nicho e objetivo de conversão — juntos, não separados.",
  },
  {
    num: "03",
    title: "Revisão e aprovação",
    desc: "Você revisa cada elemento. Ajustamos quantas vezes forem necessárias até você aprovar 100%.",
  },
  {
    num: "04",
    title: "Entrega + go live",
    desc: "Publicamos na plataforma da sua escolha, configuramos rastreamento e integramos com Google Ads ou Meta Ads.",
  },
];

const faqs = [
  {
    q: "Por que eu preciso de uma landing page específica para o meu nicho?",
    a: "Porque o paciente de um cardiologista não reage ao mesmo copy que o de um clínico geral. O cliente de um advogado trabalhista tem urgências diferentes de um advogado de família. Landing pages genéricas perdem essas nuances — falam com todo mundo e convencem ninguém. Uma página feita para o seu nicho fala a língua exata do seu paciente ou cliente.",
  },
  {
    q: "Vocês conhecem as regras de publicidade do meu conselho profissional?",
    a: "Sim. Trabalhamos com médicos (CFM), advogados (OAB) e psicólogos (CFP) e conhecemos as restrições de cada um. Nenhum copy nosso promete resultado garantido, exagera benefícios ou descumpre o código de ética da profissão.",
  },
  {
    q: "Quanto tempo leva para entregar a landing page?",
    a: "De 7 a 14 dias úteis do briefing à entrega final. Para nichos que já temos experiência, costuma ser mais rápido. Para campanhas com prazo fixo, avise com pelo menos 3 semanas de antecedência.",
  },
  {
    q: "Posso usar a landing page para Google Ads ou Meta Ads?",
    a: "Sim, e recomendamos. As páginas já são criadas pensando em tráfego pago — com URLs específicas, pixels configurados, UTMs e copy alinhado com o anúncio para maximizar o Quality Score e reduzir o custo por lead.",
  },
  {
    q: "Quantas revisões estão incluídas?",
    a: "Revisões ilimitadas até a aprovação. Não cobramos por rodadas de ajuste — você aprova quando estiver satisfeito com cada elemento da página.",
  },
  {
    q: "Preciso ter o texto pronto para vocês criarem a página?",
    a: "Não. Escrevemos o copy estratégico a partir do briefing que fazemos com você. Quanto mais detalhes você der sobre seu público, oferta e diferenciais, mais eficaz o texto final.",
  },
];

const marqueeItems = [
  "Médicos", "Advogados", "Psicólogos", "Dentistas", "Imóveis",
  "Personal Trainers", "Educação", "Financeiro", "Estética", "Nutricionistas",
  "Clínicas", "Corretores", "Consultores", "Arquitetos", "Engenheiros",
];
const allItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

export default function ModeloPage() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-40 pb-28"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(254,65,1,0.13) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(254,65,1,0.07) 0%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />
        </div>

        <div className="relative max-w-[90rem] mx-auto w-full">
          <div className="inline-flex items-center gap-2.5 border border-[#FE4101]/25 bg-[#FE4101]/8 text-[#FE4101] text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE4101] animate-pulse flex-shrink-0" />
            Landing pages por nicho
          </div>

          <h1 className="text-[clamp(3rem,8.5vw,8.5rem)] font-black leading-[0.9] tracking-tight text-white mb-8 max-w-6xl">
            Sua landing page.<br />
            Feita pro seu<br />
            <span className="text-[#FE4101]">nicho.</span>
          </h1>

          <p className="text-white/45 text-lg leading-relaxed max-w-xl mb-12">
            Médicos, advogados e psicólogos perdem pacientes todo dia com páginas genéricas. A gente cria a página que fala a língua do seu público.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-14">
            <ServicePageCTA label="Peça sua landing page" />
            <a
              href="#nichos"
              className="text-white/40 hover:text-white text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 cursor-none"
            >
              Ver nichos →
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Dentro das normas do conselho",
              "Copy estratégico incluso",
              "Entrega em até 14 dias",
              "Rastreamento configurado",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-[10px] text-white/25 uppercase tracking-[0.15em]"
              >
                <Check size={9} className="text-[#FE4101] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee nichos ───────────────────────────────────── */}
      <div className="border-y border-white/5 py-5 overflow-hidden bg-[#060606]">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {allItems.map((item, i) => (
            <span
              key={i}
              className="mx-10 text-[10px] uppercase tracking-[0.25em] text-white/18 flex items-center gap-10"
            >
              {item}
              <span className="text-[#FE4101] text-sm">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── O Problema ───────────────────────────────────────── */}
      <section className="py-36 px-6 lg:px-16 border-b border-white/5 bg-[#060606]">
        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-6 block">
              // O problema
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white mb-8">
              Template genérico<br />
              <span className="text-[#FE4101]">não converte.</span>
            </h2>
            <p className="text-white/35 leading-relaxed text-base lg:text-lg max-w-lg">
              O paciente que busca um cardiologista tem medos específicos. O cliente que procura um advogado trabalhista tem urgência diferente. Uma landing page que serve para tudo não serve para ninguém — ela fala com todo mundo e convence ninguém.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { val: "3×", label: "mais conversão com copy específico do nicho" },
              { val: "< 2s", label: "tempo de carregamento em todas as páginas" },
              { val: "14", label: "dias úteis do briefing à entrega final" },
              { val: "100%", label: "dentro das normas do seu conselho profissional" },
            ].map(({ val, label }) => (
              <div key={val} className="border border-white/5 p-7 bg-[#0a0a0a]">
                <p className="text-[clamp(2rem,3.5vw,3.5rem)] font-black text-[#FE4101] leading-none mb-3">
                  {val}
                </p>
                <p className="text-[10px] text-white/20 uppercase tracking-wider leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nichos ───────────────────────────────────────────── */}
      <section
        id="nichos"
        className="py-36 px-6 lg:px-16 border-b border-white/5 relative"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(254,65,1,0.06) 0%, transparent 70%)",
              filter: "blur(120px)",
            }}
          />
        </div>
        <div className="relative max-w-[90rem] mx-auto">
          <div className="mb-16">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-6 block">
              // Seu nicho
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white max-w-2xl">
              Uma página feita para{" "}
              <span className="text-[#FE4101]">quem você atende.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {nichos.map((n) => (
              <div
                key={n.title}
                className="bg-[#0a0a0a] p-9 group hover:bg-[#0f0f0f] transition-colors duration-300"
              >
                <span className="text-4xl mb-6 block">{n.icon}</span>
                <h3 className="text-base font-black text-white mb-3 group-hover:text-[#FE4101] transition-colors duration-300">
                  {n.title}
                </h3>
                <p className="text-white/30 text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-px bg-[#0a0a0a] border-x border-b border-white/5 px-9 py-6">
            <p className="text-white/25 text-[11px] uppercase tracking-wider">
              Seu nicho não está listado?{" "}
              <span className="text-[#FE4101]">
                Criamos para qualquer segmento — fale com a gente.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── O que está incluso ───────────────────────────────── */}
      <section className="py-36 px-6 lg:px-16 border-b border-white/5 bg-[#060606]">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-16">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-6 block">
              // O que está incluso
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white max-w-2xl">
              Tudo que a página precisa{" "}
              <span className="text-[#FE4101]">para converter.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {features.map((f) => (
              <div key={f.title} className="bg-[#060606] p-9">
                <span className="text-[#FE4101] mb-6 block">{f.icon}</span>
                <h3 className="text-base font-black text-white mb-3">{f.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ────────────────────────────────────── */}
      <section className="py-36 px-6 lg:px-16 border-b border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-16">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-6 block">
              // Como funciona
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white max-w-2xl">
              Do briefing à entrega em{" "}
              <span className="text-[#FE4101]">14 dias.</span>
            </h2>
          </div>

          <div className="border-t border-white/5">
            {steps.map((s) => (
              <div
                key={s.num}
                className="border-b border-white/5 py-11 grid lg:grid-cols-[auto_1fr_2fr] gap-6 lg:gap-16 items-start"
              >
                <span className="text-[10px] font-mono text-white/12 tracking-[0.2em] pt-1 w-12 flex-shrink-0">
                  // {s.num}
                </span>
                <h3 className="text-xl font-black text-white">{s.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA intermediário ────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-16 border-b border-white/5 bg-[#0f0704] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, rgba(254,65,1,0.08) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-[90rem] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="text-[10px] text-[#FE4101] uppercase tracking-[0.25em] mb-3">
              // Pronto para começar?
            </p>
            <h2 className="text-[clamp(1.6rem,3.5vw,3rem)] font-black leading-tight tracking-tight text-white">
              Conte sobre o seu nicho.<br />
              Montamos a proposta em 24h.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <ServicePageCTA label="Solicitar minha landing page" />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-36 px-6 lg:px-16 border-b border-white/5 bg-[#060606]">
        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-6 block">
              // Dúvidas
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-black leading-[0.95] tracking-tight text-white">
              Perguntas<br />
              <span className="text-[#FE4101]">frequentes</span>
            </h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section
        className="py-44 px-6 lg:px-16 text-center relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(254,65,1,0.1) 0%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />
        </div>
        <div className="relative max-w-[90rem] mx-auto">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.25em] mb-10">
            // Sua vez
          </p>
          <h2 className="text-[clamp(2.5rem,7.5vw,8rem)] font-black leading-[0.9] tracking-tight text-white mb-10 max-w-5xl mx-auto">
            Pare de perder clientes<br />
            para quem tem uma{" "}
            <span className="text-[#FE4101]">página melhor.</span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto mb-14 text-lg leading-relaxed">
            Landing pages de alta conversão, feitas para o seu nicho. Do briefing à entrega em até 14 dias.
          </p>
          <ServicePageCTA label="Peça sua landing page agora" />
        </div>
      </section>

    </main>
  );
}
