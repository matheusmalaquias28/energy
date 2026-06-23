import type { Metadata } from "next";
import ServicePageCTA from "@/components/ui/ServicePageCTA";
import FaqAccordion from "@/components/ui/FaqAccordion";

const SITE_URL = "https://energymidia.com.br";

export const metadata: Metadata = {
  title: "Landing Pages de Alta Conversão | Energy",
  description:
    "Criação de landing pages de alta conversão com copy persuasivo, design focado e integração com Google Ads e Meta Ads. Transforme tráfego em leads e clientes reais.",
  keywords: [
    "criar landing page",
    "landing page alta conversão",
    "landing page para empresa",
    "landing page google ads",
    "página de vendas",
    "landing page profissional",
    "agência landing page",
  ],
  alternates: { canonical: `${SITE_URL}/servicos/landing-page` },
  openGraph: {
    title: "Landing Pages de Alta Conversão | Energy",
    description:
      "Landing pages com copy persuasivo, design focado em conversão e integração com campanhas de tráfego pago.",
    url: `${SITE_URL}/servicos/landing-page`,
    type: "website",
    locale: "pt_BR",
  },
};

const deliverables = [
  {
    num: "01",
    title: "Copy estratégico",
    desc: "Texto pensado para converter — não apenas informar. Cada headline, parágrafo e CTA é construído para conduzir o visitante à ação que você quer que ele tome.",
    tags: ["Copywriting persuasivo", "Headline de impacto", "CTA otimizado", "Objeções respondidas"],
  },
  {
    num: "02",
    title: "Design focado em conversão",
    desc: "Sem distração. Sem menu desnecessário. Cada elemento visual existe para conduzir o olhar do visitante até o botão de conversão. Layout testado para maximizar o resultado.",
    tags: ["Layout sem distração", "Hierarquia visual", "Prova social visível", "Urgência e escassez"],
  },
  {
    num: "03",
    title: "Velocidade máxima",
    desc: "Cada segundo a mais de carregamento custa conversões. Landing pages da Energy carregam em menos de 2 segundos — fundamental para o Quality Score do Google Ads.",
    tags: ["< 2s de carregamento", "Quality Score alto", "PageSpeed 95+", "Mobile otimizado"],
  },
  {
    num: "04",
    title: "Integração com tráfego pago",
    desc: "Criamos landing pages alinhadas com os anúncios de Google Ads e Meta Ads — mesmo tom, mesma promessa, mesma oferta. Essa consistência aumenta a taxa de conversão e reduz o custo por lead.",
    tags: ["Google Ads integrado", "Meta Ads integrado", "UTM configurado", "Pixel instalado"],
  },
  {
    num: "05",
    title: "Rastreamento de conversões",
    desc: "Você sabe exatamente quantos leads a página gerou, de onde vieram, qual horário converte mais e qual anúncio trouxe o melhor resultado. Dados reais para decisões reais.",
    tags: ["Google Analytics 4", "Conversão configurada", "Heatmap opcional", "Relatório de performance"],
  },
  {
    num: "06",
    title: "A/B testing e otimização",
    desc: "Entregamos a primeira versão — e continuamos otimizando. Testamos headlines, CTAs, cores e ofertas para aumentar a taxa de conversão ao longo do tempo.",
    tags: ["Teste A/B", "Otimização contínua", "Dados para decisão", "Iteração rápida"],
  },
];

const useCases = [
  { title: "Campanhas de tráfego pago", desc: "Google Ads e Meta Ads geram cliques caros. Sem landing page otimizada, você está pagando para educar o cliente do concorrente." },
  { title: "Lançamentos e pré-vendas", desc: "Capte interesse antes de abrir o produto. Liste de espera, contagem regressiva e oferta de early access em uma página de impacto." },
  { title: "Captação de leads B2B", desc: "Formulários estratégicos, isca digital e sequência de e-mail para qualificar e nutrir leads antes de passar para o comercial." },
  { title: "Campanhas sazonais", desc: "Black Friday, Natal, temporadas — cada campanha merece uma página própria alinhada com a oferta e o público do momento." },
  { title: "Eventos e inscrições", desc: "Webinars, cursos, workshops e eventos presenciais com countdown, lista de benefícios e checkout de inscrição simplificado." },
  { title: "Páginas de produto", desc: "Para lançamentos de produto físico ou digital, com copy de produto, depoimentos e botão de compra com alta taxa de clique." },
];

const faqs = [
  {
    q: "Qual a diferença entre landing page e site institucional?",
    a: "O site institucional apresenta a empresa de forma completa — quem é, o que faz, serviços, contato. A landing page tem um único objetivo: converter o visitante em lead ou cliente. Por isso, não tem menu de navegação, tem copy focado e CTA único. Para campanhas de tráfego pago, a landing page converte muito mais do que mandar o cliente para a homepage.",
  },
  {
    q: "Preciso de landing page mesmo tendo um site?",
    a: "Sim, se você faz campanhas de Google Ads ou Meta Ads. Enviar tráfego pago para a homepage desperdiça o investimento — o visitante se distrai e vai embora sem converter. A landing page mantém o foco e aumenta o ROI da campanha.",
  },
  {
    q: "Quanto tempo leva para criar uma landing page?",
    a: "Landing pages ficam prontas em 7 a 14 dias úteis. Para campanhas com prazo fixo, recomendamos solicitar com pelo menos 3 semanas de antecedência para garantir tempo de ajustes e otimização antes do lançamento.",
  },
  {
    q: "Quanto custa uma landing page profissional?",
    a: "Landing pages de alta conversão partem de R$ 2.500. O valor varia com a complexidade do copy, número de seções, integrações necessárias (CRM, automação de e-mail, checkout) e se inclui pacote de otimização pós-lançamento.",
  },
  {
    q: "Vocês escrevem o texto ou eu preciso fornecer?",
    a: "Escrevemos o copy estratégico da landing page a partir do briefing do produto, público e oferta. Quanto mais informações você fornecer sobre o seu cliente e o diferencial da oferta, mais preciso e eficaz o copy.",
  },
  {
    q: "Posso usar a mesma landing page para vários anúncios?",
    a: "Tecnicamente sim — mas idealmente não. Anúncios com mensagens diferentes convertem melhor quando cada um vai para uma landing page específica. Podemos criar um sistema de templates que agiliza a criação de variações para cada campanha.",
  },
];

export default function LandingPagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landing Pages de Alta Conversão",
    description: "Criação de landing pages com copy estratégico, design focado em conversão e integração com campanhas de Google Ads e Meta Ads.",
    provider: { "@type": "ProfessionalService", name: "Energy Midia", url: SITE_URL },
    areaServed: { "@type": "Country", name: "Brazil" },
    serviceType: "Landing Page",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#0a0a0a] text-white">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="min-h-[72vh] flex flex-col justify-center px-6 lg:px-16 pt-40 pb-24 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto w-full">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
              // Serviço — Landing Pages
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.02] text-white mb-8 max-w-5xl">
              Clique que entra.{" "}
              <span className="text-[#FE4101]">Lead que converte.</span>
            </h1>
            <p className="text-white/50 leading-relaxed text-lg max-w-2xl mb-12">
              Landing pages de alta conversão com copy persuasivo, design focado e integração com Google Ads e Meta Ads. Cada elemento existe para transformar visitante em cliente.
            </p>
            <ServicePageCTA label="Solicitar proposta de landing page" />
            <div className="mt-16 flex flex-wrap gap-3">
              {["Copy estratégico", "Alta conversão", "Google Ads integrado", "A/B testing", "Rastreamento completo"].map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-white/20 border border-white/8 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Numbers ───────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/8">
            {[
              { val: "< 2s", label: "Tempo de carregamento — fundamental para Ads" },
              { val: "7–14", label: "Dias úteis do briefing à entrega" },
              { val: "3×", label: "Mais conversão vs. tráfego para homepage" },
              { val: "100%", label: "Com rastreamento de conversões configurado" },
            ].map(({ val, label }) => (
              <div key={label} className="lg:px-10 first:pl-0 last:pr-0">
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FE4101] leading-none mb-2">{val}</p>
                <p className="text-xs text-white/30 leading-snug uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deliverables ──────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">// O que está incluso</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-3xl">
                Cada detalhe pensado{" "}
                <span className="text-[#FE4101]">para converter.</span>
              </h2>
            </div>
            <div className="border-t border-white/8">
              {deliverables.map((d, i) => (
                <div key={i} className="border-b border-white/8 py-10 grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-12 items-start px-0 lg:px-4">
                  <span className="text-xs text-white/20 uppercase tracking-widest pt-1 w-10">// {d.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{d.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/40 leading-relaxed text-sm lg:text-base">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use cases ─────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">// Quando usar</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-3xl">
                Uma landing page para{" "}
                <span className="text-[#FE4101]">cada objetivo.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
              {useCases.map((u) => (
                <div key={u.title} className="bg-[#0a0a0a] p-8">
                  <h3 className="text-base font-bold text-white mb-3">{u.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-4 block">// Por que importa</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-white">
                Você paga pelo clique. A landing page decide se ele vira cliente.
              </h2>
            </div>
            <p className="text-white/40 leading-relaxed text-base lg:text-lg">
              Sem landing page otimizada, você manda o tráfego pago para uma homepage cheia de distrações. O visitante chega, não encontra o que o anúncio prometeu e vai embora — sem converter. Cada real investido em mídia rende mais quando a página de destino foi construída para converter.
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">// Dúvidas frequentes</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white sticky top-32">
                Perguntas sobre{" "}
                <span className="text-[#FE4101]">landing pages</span>
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16">
          <div className="max-w-[90rem] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">// Pronto para converter mais?</p>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight text-white mb-6 max-w-4xl mx-auto">
              Sua próxima campanha merece uma{" "}
              <span className="text-[#FE4101]">landing page de verdade.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
              Resposta em até 24 horas. Conte sobre a campanha e vamos montar a proposta certa para o seu objetivo.
            </p>
            <ServicePageCTA label="Solicitar proposta de landing page" />
          </div>
        </section>

      </main>
    </>
  );
}
