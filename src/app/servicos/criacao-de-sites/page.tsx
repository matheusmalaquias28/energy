import type { Metadata } from "next";
import ServicePageCTA from "@/components/ui/ServicePageCTA";
import FaqAccordion from "@/components/ui/FaqAccordion";

const SITE_URL = "https://energymidia.com.br";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais | Energy",
  description:
    "Criação de sites institucionais com design exclusivo, SEO técnico e performance 95+. Para empresas que precisam de presença digital que transmite autoridade e gera resultados reais.",
  keywords: [
    "criação de sites profissional",
    "agência de criação de sites",
    "site institucional empresa",
    "desenvolvimento de site",
    "site profissional",
    "agência de sites",
    "criar site empresa",
  ],
  alternates: { canonical: `${SITE_URL}/servicos/criacao-de-sites` },
  openGraph: {
    title: "Criação de Sites Profissionais | Energy",
    description:
      "Sites institucionais com design exclusivo, SEO técnico e performance máxima para empresas que não aceitam ser esquecidas.",
    url: `${SITE_URL}/servicos/criacao-de-sites`,
    type: "website",
    locale: "pt_BR",
  },
};

const deliverables = [
  {
    num: "01",
    title: "Design exclusivo",
    desc: "Nenhum template. Cada site é criado do zero a partir da identidade da marca, público-alvo e objetivos de negócio. Design que diferencia — não que padroniza.",
    tags: ["UI/UX personalizado", "Identidade visual integrada", "Componentes únicos"],
  },
  {
    num: "02",
    title: "SEO técnico completo",
    desc: "Estrutura de URLs, meta tags, schema markup, sitemap, robots.txt, performance e Core Web Vitals configurados desde o primeiro deploy. O site já nasce pronto para o Google.",
    tags: ["Schema markup", "Core Web Vitals", "Sitemap + robots.txt", "Meta tags estratégicas"],
  },
  {
    num: "03",
    title: "Performance 95+",
    desc: "Sites lentos perdem clientes antes de mostrar o produto. Todos os projetos são entregues com score acima de 90 no PageSpeed Insights — no mobile e no desktop.",
    tags: ["PageSpeed 95+", "Imagens otimizadas", "CDN integrado", "Código limpo"],
  },
  {
    num: "04",
    title: "CMS integrado",
    desc: "Você atualiza textos, fotos, equipe e conteúdo sem precisar de desenvolvedor. Painel intuitivo, treinamento incluído e autonomia total após a entrega.",
    tags: ["Painel intuitivo", "Sem código", "Treinamento incluso", "Suporte pós-entrega"],
  },
  {
    num: "05",
    title: "Mobile first",
    desc: "Mais de 70% do tráfego é mobile. Todos os projetos são desenvolvidos com prioridade para celular — e testados em múltiplos dispositivos antes da entrega.",
    tags: ["Responsivo", "Touch-friendly", "Testado em dispositivos reais"],
  },
  {
    num: "06",
    title: "Copy estratégico",
    desc: "Texto que vende. Redigimos os textos do seu site com foco em comunicar valor, responder objeções e conduzir o visitante até a ação que você quer que ele tome.",
    tags: ["Copywriting persuasivo", "Hierarquia de mensagem", "CTA otimizado"],
  },
];

const process = [
  { step: "01", title: "Briefing estratégico", desc: "Entendemos o seu negócio, público, concorrência e objetivos. Essa etapa define tudo que vem depois." },
  { step: "02", title: "Arquitetura e wireframe", desc: "Planejamos a estrutura de páginas, fluxo do usuário e hierarquia de conteúdo antes de desenhar uma linha." },
  { step: "03", title: "Design e aprovação", desc: "Criamos o design completo em Figma. Você aprova, pede ajustes e só avançamos quando estiver 100% satisfeito." },
  { step: "04", title: "Desenvolvimento", desc: "Codificamos o site com as melhores tecnologias para performance, SEO e escalabilidade." },
  { step: "05", title: "Testes e ajustes", desc: "Testamos em múltiplos dispositivos, navegadores e velocidades de conexão. Corrigimos tudo antes de publicar." },
  { step: "06", title: "Entrega e lançamento", desc: "Configuramos domínio, hospedagem, analytics e fazemos o lançamento. Você recebe tudo funcionando — e o treinamento do CMS." },
];

const faqs = [
  {
    q: "Qual o prazo para criar um site profissional?",
    a: "Sites institucionais de 5 a 10 páginas ficam prontos em 3 a 6 semanas a partir do briefing aprovado. O prazo depende da complexidade do projeto e da velocidade de aprovação das etapas. Sempre apresentamos um cronograma detalhado na proposta.",
  },
  {
    q: "Quanto custa criar um site?",
    a: "O investimento varia de acordo com o escopo: número de páginas, funcionalidades, integrações e nível de personalização do design. Sites institucionais profissionais partem de R$ 4.500. Apresentamos proposta detalhada após uma conversa para entender suas necessidades.",
  },
  {
    q: "O site vai aparecer no Google?",
    a: "Todos os projetos incluem SEO técnico completo — estrutura de URLs, meta tags, schema markup, sitemap e performance otimizada. Isso cria a base necessária para o posicionamento orgânico. O ranqueamento para termos competitivos exige também estratégia de conteúdo e link building ao longo do tempo.",
  },
  {
    q: "Posso atualizar o site depois sem precisar de um desenvolvedor?",
    a: "Sim. Todo projeto inclui CMS integrado e treinamento para que você ou sua equipe possam atualizar textos, fotos e conteúdo sem depender de ninguém.",
  },
  {
    q: "Trabalham com empresas de qualquer segmento?",
    a: "Sim. Já desenvolvemos sites para clínicas, escritórios de advocacia, pousadas, restaurantes, indústrias, imobiliárias e empresas de tecnologia. O projeto é sempre adaptado ao setor, ao público e aos objetivos específicos do negócio.",
  },
  {
    q: "O que acontece depois que o site é entregue?",
    a: "Oferecemos suporte pós-entrega e planos de manutenção mensal. Além disso, você tem autonomia para atualizar o conteúdo pelo CMS. Para evoluções maiores — novas páginas, funcionalidades ou redesign — trabalhamos sob demanda.",
  },
];

export default function CriacaoDeSitesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Criação de Sites Profissionais",
    description: "Sites institucionais com design exclusivo, SEO técnico completo e alta performance para empresas de médio e grande porte.",
    provider: { "@type": "ProfessionalService", name: "Energy Midia", url: SITE_URL },
    areaServed: { "@type": "Country", name: "Brazil" },
    serviceType: "Desenvolvimento de Sites",
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
              // Serviço — Criação de Sites
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.02] text-white mb-8 max-w-5xl">
              Sites que{" "}
              <span className="text-[#FE4101]">posicionam</span>{" "}
              e convertem.
            </h1>
            <p className="text-white/50 leading-relaxed text-lg max-w-2xl mb-12">
              Criamos sites institucionais com design exclusivo, SEO técnico completo e performance máxima para empresas que precisam de uma presença digital à altura do que entregam.
            </p>
            <ServicePageCTA label="Solicitar proposta de site" />
            <div className="mt-16 flex flex-wrap gap-3">
              {["Design exclusivo", "SEO técnico", "Performance 95+", "CMS integrado", "Mobile first"].map((tag) => (
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
              { val: "95+", label: "Score PageSpeed em todos os projetos" },
              { val: "3–6", label: "Semanas do briefing à entrega" },
              { val: "100%", label: "Projetos com SEO técnico incluso" },
              { val: "0", label: "Templates prontos — tudo do zero" },
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
                Tudo que o seu site precisa.{" "}
                <span className="text-[#FE4101]">Sem adicional.</span>
              </h2>
            </div>
            <div className="border-t border-white/8">
              {deliverables.map((d, i) => (
                <div
                  key={i}
                  className="border-b border-white/8 py-10 grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-12 items-start px-0 lg:px-4"
                >
                  <span className="text-xs text-white/20 uppercase tracking-widest pt-1 w-10">// {d.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{d.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/40 leading-relaxed text-sm lg:text-base">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">// Como funciona</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-3xl">
                Do briefing ao lançamento.{" "}
                <span className="text-[#FE4101]">Sem surpresas.</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-px bg-white/8">
              {process.map((p) => (
                <div key={p.step} className="bg-[#0a0a0a] p-8 lg:p-10">
                  <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-6 block">// {p.step}</span>
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Energy ────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-4 block">// Por que a Energy</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-white">
                Site barato custa caro no longo prazo.
              </h2>
            </div>
            <p className="text-white/40 leading-relaxed text-base lg:text-lg">
              Um site mal feito não é neutro — ele ativamente afasta o cliente que você mais quer atrair. Cada mês com um site lento, feio ou sem SEO é um mês de oportunidades perdidas para o concorrente que investiu direito. Criamos sites que trabalham por você enquanto você cuida do seu negócio.
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
                <span className="text-[#FE4101]">criação de sites</span>
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16">
          <div className="max-w-[90rem] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">// Pronto para começar?</p>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight text-white mb-6 max-w-4xl mx-auto">
              Vamos criar um site que{" "}
              <span className="text-[#FE4101]">trabalha por você.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
              Resposta em até 24 horas. Sem compromisso — só uma conversa honesta sobre o que faz sentido para o seu negócio.
            </p>
            <ServicePageCTA label="Solicitar proposta de site" />
          </div>
        </section>

      </main>
    </>
  );
}
