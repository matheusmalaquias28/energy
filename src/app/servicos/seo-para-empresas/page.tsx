import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Ban,
  Check,
  ChartLine,
  CircleX,
  FileText,
  Gauge,
  KeyRound,
  Layers,
  Link2,
  MapPin,
  Navigation,
  Receipt,
  Search,
  ShieldCheck,
  Star,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";
import { seoBody, seoDisplay, seoMono } from "./fonts";
import { SerpHero } from "./_components/SerpHero";
import { AdSpendCalculator } from "./_components/AdSpendCalculator";
import { StepsAccordion } from "./_components/StepsAccordion";
import { LeadForm } from "./_components/LeadForm";
import { Reveal } from "./_components/Reveal";
import "./seo.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";
const PAGE_URL = `${SITE_URL}/servicos/seo-para-empresas`;

const TITLE = "Consultoria de SEO para Empresas: Leads pelo Google";
const DESCRIPTION =
  "Consultoria de SEO para empresas que querem leads pelo Google sem pagar por clique. Posicionamento orgânico que vira ativo e reduz o gasto com anúncios.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "consultoria de seo",
    "consultoria de seo para empresas",
    "agência de seo",
    "seo para empresas",
    "seo para gerar leads",
    "tráfego orgânico",
    "posicionamento no google",
    "seo local",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const stats = [
  { value: "R$ 0", label: "por clique no resultado orgânico" },
  { value: "24h", label: "suas páginas atendendo buscas, todos os dias" },
  { value: "100%", label: "do conteúdo e da autoridade ficam com a empresa" },
];

const comparison = [
  {
    paid: { title: "Você paga por cada clique", desc: "Até quem só está pesquisando preço custa dinheiro." },
    seo: { title: "Nenhum custo por clique", desc: "Quem encontra sua página no Google chega sem custo adicional." },
  },
  {
    paid: { title: "Parou o investimento, parou o lead", desc: "Os contatos somem no mesmo dia em que a verba acaba." },
    seo: { title: "As páginas continuam trabalhando", desc: "O que já está posicionado segue gerando contatos." },
  },
  {
    paid: { title: "Custo que tende a subir", desc: "Cada concorrente novo no leilão encarece o seu clique." },
    seo: { title: "Resultado que se acumula", desc: "Cada página nova soma ao tráfego das que já estão no ar." },
  },
  {
    paid: { title: "Marcado como Patrocinado", desc: "Parte do público pula os anúncios e vai direto para os resultados orgânicos." },
    seo: { title: "Escolhido pela própria busca", desc: "Aparecer no orgânico transmite a confiança de quem foi recomendado pelo Google." },
  },
  {
    paid: { title: "O alcance é da plataforma", desc: "Mudou a regra ou a conta foi bloqueada, o canal some." },
    seo: { title: "O ativo é da sua empresa", desc: "Conteúdo, autoridade e posições ficam no seu site." },
  },
];

const smallPillars = [
  {
    icon: KeyRound,
    title: "Buscas com intenção de compra",
    desc: "Mapeamos o que seu cliente pesquisa quando está pronto para contratar, não só os termos com mais volume.",
    dark: false,
  },
  {
    icon: FileText,
    title: "Páginas que respondem e vendem",
    desc: "Páginas de serviço, páginas por cidade e artigos que respondem dúvidas reais e terminam em um próximo passo claro.",
    dark: true,
  },
  {
    icon: Link2,
    title: "Autoridade",
    desc: "Menções e links de sites relevantes do seu setor, que mostram ao Google que sua empresa é referência.",
    dark: false,
  },
  {
    icon: ChartLine,
    title: "Mensuração de leads",
    desc: "Search Console, GA4 e rastreamento de conversões. Todo mês você sabe quantos contatos vieram do orgânico.",
    dark: true,
  },
];

const fitYes = [
  "Seu cliente pesquisa no Google pelo serviço ou produto que você vende.",
  "Você já investe em anúncios e quer reduzir o custo por lead.",
  "Sua empresa pensa em resultado para os próximos 6 a 12 meses.",
  "Cada novo cliente vale o suficiente para justificar um contato comercial.",
];

const fitNo = [
  "Você precisa de vendas na próxima semana. Para isso, anúncio resolve melhor.",
  "Seu cliente não costuma pesquisar pelo que você oferece.",
  "Você procura alguém que garanta a primeira posição.",
];

type Faq = { q: string; a: string; link?: { href: string; label: string } };

const faqs: Faq[] = [
  {
    q: "Vocês são uma consultoria ou uma agência de SEO?",
    a: "As duas coisas. Fazemos o diagnóstico e a estratégia, como uma consultoria de SEO, e também executamos o trabalho técnico, as páginas e o conteúdo, como uma agência. Sua empresa não precisa ter equipe interna de SEO para ter resultado.",
  },
  {
    q: "Quanto tempo o SEO leva para dar resultado?",
    a: "Os primeiros sinais (páginas indexadas, aumento de impressões no Search Console) costumam aparecer nas primeiras semanas. Crescimento consistente de visitas e leads orgânicos normalmente acontece entre 4 e 6 meses, e o efeito acumulado se fortalece a partir daí. O prazo depende da concorrência do seu setor e do estado atual do site. No diagnóstico, damos uma estimativa para o seu caso.",
  },
  {
    q: "SEO substitui o tráfego pago?",
    a: "Não precisa substituir. Anúncio é ótimo para acelerar e testar ofertas; SEO reduz a dependência dele. Na prática, empresas que investem nos dois conseguem diminuir a verba de anúncios à medida que o orgânico passa a trazer uma parte dos leads.",
  },
  {
    q: "Vocês garantem a primeira posição no Google?",
    a: "Não. Ninguém controla o algoritmo do Google, e quem promete posição garantida está vendendo algo que não pode entregar. O que garantimos é método, transparência e relatórios mensais mostrando a evolução de posições, tráfego e leads.",
  },
  {
    q: "Quanto custa SEO para empresas?",
    a: "SEO é um trabalho mensal, e o investimento depende do tamanho do site, da concorrência do setor e de quantas páginas precisam ser criadas. Depois do diagnóstico, apresentamos uma proposta com escopo e valor fechados.",
  },
  {
    q: "Preciso fazer um site novo?",
    a: "Nem sempre. Se o site atual tem uma base técnica aproveitável, otimizamos o que já existe. Quando a plataforma impede velocidade, indexação ou a criação de novas páginas, recomendamos a reconstrução, e a Energy também desenvolve o site.",
    link: { href: "/servicos/criacao-de-sites", label: "Conheça a criação de sites da Energy" },
  },
  {
    q: "Como vou saber se está funcionando?",
    a: "Todo mês você recebe um relatório com as posições das buscas que importam, as visitas orgânicas e, principalmente, quantos contatos vieram do Google. Os dados vêm direto do Google Search Console e do GA4.",
  },
  {
    q: "As buscas com IA vão acabar com o SEO?",
    a: "Não. Os resumos de IA do Google e ferramentas como ChatGPT e Perplexity citam páginas bem estruturadas e confiáveis como fonte. As mesmas práticas de SEO (conteúdo claro, dados estruturados e autoridade) aumentam a chance de sua empresa ser citada nessas respostas.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}/#service`,
    name: "Consultoria de SEO para Empresas",
    alternateName: "SEO para empresas",
    serviceType: "Consultoria de SEO",
    description: DESCRIPTION,
    url: PAGE_URL,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Energy",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Brazil" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "O que entra na consultoria de SEO",
      itemListElement: [
        "SEO técnico",
        "SEO local",
        "Pesquisa de palavras-chave com intenção de compra",
        "Criação e otimização de páginas e conteúdo",
        "Autoridade e link building",
        "Mensuração de leads orgânicos",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#matheus-malaquias`,
    name: "Matheus Malaquias",
    jobTitle: "Fundador",
    image: `${SITE_URL}/matheus-malaquias.jpg`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/servicos` },
      { "@type": "ListItem", position: 3, name: "Consultoria de SEO", item: PAGE_URL },
    ],
  },
];

function Cta({ children = "Quero um diagnóstico de SEO" }: { children?: React.ReactNode }) {
  return (
    <a href="#diagnostico" className="seo-btn">
      {children}
      <ArrowRight size={16} strokeWidth={2.2} aria-hidden />
    </a>
  );
}

function SectionHead({
  eyebrow,
  id,
  title,
  children,
}: {
  eyebrow: string;
  id: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="seo-head" data-reveal>
      <p className="seo-eyebrow">{eyebrow}</p>
      <h2 id={id} className="seo-h2">{title}</h2>
      {children && <p className="seo-sub">{children}</p>}
    </header>
  );
}

export default function SeoParaEmpresasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={`seo-lp ${seoDisplay.variable} ${seoBody.variable} ${seoMono.variable}`}>
        <Reveal />

        {/* Hero */}
        <section className="seo-hero">
          <div className="seo-hero-lines" aria-hidden />
          <div className="seo-wrap seo-hero-inner">
            <nav aria-label="Breadcrumb" className="seo-crumbs">
              <Link href="/">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/servicos">Serviços</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">Consultoria de SEO</span>
            </nav>
            <p className="seo-eyebrow">Para empresas cansadas de pagar por cada clique</p>
            <h1 className="seo-h1">Consultoria de SEO para empresas que querem parar de alugar clientes</h1>
            <p className="seo-lede">
              Anúncio funciona <strong>enquanto você paga</strong>. Uma posição orgânica no Google
              continua trazendo contatos <strong>mês após mês</strong>. É um{" "}
              <strong>ativo da sua empresa</strong>, não mais uma despesa recorrente.
            </p>
            <div className="seo-hero-actions">
              <Cta />
              <p className="seo-micro">Retorno pelo WhatsApp em até 2 horas úteis</p>
            </div>

            <div className="seo-hero-visual">
              <SerpHero />
              <p className="seo-footnote">Simulação ilustrativa. Valores de clique variam por setor.</p>
            </div>
          </div>
        </section>

        <div className="seo-light">
          {/* Números */}
          <div className="seo-wrap">
            <ul className="seo-stats">
              {stats.map((s) => (
                <li key={s.value}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problema */}
          <section className="seo-sec" aria-labelledby="problema-title">
            <div className="seo-wrap">
              <SectionHead
                eyebrow="O problema de depender só de anúncios"
                id="problema-title"
                title="Anúncio é aluguel. Quando a verba para, os leads param junto."
              >
                Tráfego pago é ótimo para acelerar. O problema é <strong>depender só dele</strong>:
                o custo sobe com a concorrência e <strong>nada do que você investiu fica com a empresa</strong>.
              </SectionHead>

              <div className="seo-problems">
                <article className="pcard" data-reveal>
                  <div className="pcard-visual" aria-hidden>
                    <div className="viz-cpc">
                      <div className="viz-chip"><TrendingUp size={14} /> Custo por clique</div>
                      <svg viewBox="0 0 220 90" className="viz-cpc-line">
                        <path d="M4 80 C 40 76, 60 70, 90 60 S 150 36, 216 8" />
                      </svg>
                      <div className="viz-tags">
                        <span>+ concorrentes</span>
                        <span>+ leilão</span>
                      </div>
                    </div>
                  </div>
                  <h3>O clique tende a ficar mais caro</h3>
                  <p>
                    Cada empresa que entra no leilão disputa o mesmo cliente. Você paga{" "}
                    <strong>mais para manter o mesmo volume</strong> de contatos.
                  </p>
                </article>

                <article className="pcard" data-reveal>
                  <div className="pcard-visual" aria-hidden>
                    <div className="viz-bars">
                      {[62, 70, 66, 74, 70, 0, 0, 0].map((h, i) => (
                        <span key={i} style={{ height: `${h}%` }} className={h === 0 ? "is-zero" : ""} />
                      ))}
                      <div className="viz-pause"><Ban size={13} /> Campanha pausada</div>
                    </div>
                  </div>
                  <h3>Parou de pagar, parou de chegar lead</h3>
                  <p>
                    No dia em que a verba acaba, <strong>o telefone para de tocar</strong>. Não sobra
                    nada trabalhando pela empresa.
                  </p>
                </article>

                <article className="pcard" data-reveal>
                  <div className="pcard-visual" aria-hidden>
                    <div className="viz-receipt">
                      <div className="viz-receipt-head"><Receipt size={14} /> Investimento em anúncios</div>
                      {["Janeiro", "Fevereiro", "Março"].map((m) => (
                        <div key={m} className="viz-receipt-row">
                          <span>{m}</span>
                          <span>R$ 5.000</span>
                        </div>
                      ))}
                      <div className="viz-receipt-row is-total">
                        <span>Patrimônio acumulado</span>
                        <span>R$ 0</span>
                      </div>
                    </div>
                  </div>
                  <h3>Nada do que você investiu fica com a empresa</h3>
                  <p>
                    Anúncio é despesa. Depois de um ano, <strong>o saldo do canal é zero</strong>,
                    não importa quanto foi investido.
                  </p>
                </article>
              </div>

              {/* Calculadora */}
              <div className="seo-calc-card" data-reveal>
                <div>
                  <p className="seo-eyebrow">Faça a conta</p>
                  <h3 className="seo-h3">Quanto sua empresa já alugou de atenção?</h3>
                  <p className="seo-calc-text">
                    Mova o seletor com o valor que você investe por mês em anúncios. Agora compare
                    com o que continua gerando leads <strong>se você pausar amanhã</strong>.
                  </p>
                  <p className="seo-calc-text">
                    SEO inverte essa lógica: o investimento vai para páginas, conteúdo e autoridade que{" "}
                    <strong>ficam no seu site</strong> e continuam trabalhando.
                  </p>
                </div>
                <AdSpendCalculator />
              </div>
            </div>
          </section>

          {/* Comparação */}
          <section className="seo-sec" aria-labelledby="ativo-title">
            <div className="seo-wrap">
              <SectionHead
                eyebrow="Por que SEO é um ativo"
                id="ativo-title"
                title="SEO é a parte do marketing que fica com a sua empresa"
              >
                Não é um contra o outro. Empresas que crescem com previsibilidade usam anúncio para{" "}
                <strong>acelerar</strong> e SEO para <strong>deixar de depender dele</strong>.
              </SectionHead>

              <div className="seo-vs" data-reveal>
                <div className="seo-vs-col is-paid">
                  <p className="seo-vs-label">Só com tráfego pago</p>
                  <ul>
                    {comparison.map((c) => (
                      <li key={c.paid.title}>
                        <CircleX size={20} className="seo-vs-icon" aria-hidden />
                        <div>
                          <h3>{c.paid.title}</h3>
                          <p>{c.paid.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="seo-vs-col is-seo">
                  <p className="seo-vs-label">Com SEO</p>
                  <ul>
                    {comparison.map((c) => (
                      <li key={c.seo.title}>
                        <ShieldCheck size={20} className="seo-vs-icon" aria-hidden />
                        <div>
                          <h3>{c.seo.title}</h3>
                          <p>{c.seo.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="seo-center" data-reveal>
                <Cta>Ver o potencial orgânico da minha empresa</Cta>
              </div>
            </div>
          </section>

          {/* Escopo */}
          <section className="seo-sec" aria-labelledby="escopo-title">
            <div className="seo-wrap">
              <SectionHead
                eyebrow="O que entra no trabalho"
                id="escopo-title"
                title="O que fazemos para sua empresa aparecer e ser escolhida"
              >
                Como agência de SEO, cuidamos todo mês da <strong>parte técnica, do conteúdo e da
                autoridade</strong>, com relatórios que mostram <strong>quantos leads vieram do Google</strong>.
              </SectionHead>

              <div className="seo-bento">
                <article className="bcard bcard--lg is-dark" data-reveal>
                  <div className="bcard-visual" aria-hidden>
                    <div className="viz-vitals">
                      <div className="viz-vitals-head"><Gauge size={14} /> Saúde técnica do site</div>
                      {[
                        ["Carregamento (LCP)", "1,8 s"],
                        ["Resposta (INP)", "120 ms"],
                        ["Estabilidade (CLS)", "0,02"],
                        ["Páginas indexadas", "48 / 48"],
                      ].map(([k, v]) => (
                        <div key={k} className="viz-vitals-row">
                          <span><i /> {k}</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bcard-body">
                    <h3>SEO técnico</h3>
                    <p>
                      Velocidade, Core Web Vitals, indexação, dados estruturados e arquitetura de URLs.{" "}
                      <strong>O Google precisa conseguir ler e confiar no seu site</strong> antes de qualquer
                      outra coisa.
                    </p>
                  </div>
                </article>

                <article className="bcard bcard--lg" data-reveal>
                  <div className="bcard-visual bcard-visual--map" aria-hidden>
                    <div className="viz-map">
                      <span className="viz-map-pin"><MapPin size={18} /></span>
                      <div className="viz-map-card">
                        <strong>Sua Empresa</strong>
                        <span className="viz-map-stars">
                          {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={11} />)}
                        </span>
                        <span>Aberto agora</span>
                        <span className="viz-map-actions">
                          <span><Navigation size={11} /> Rotas</span>
                          <span><Search size={11} /> Site</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bcard-body">
                    <h3>SEO local</h3>
                    <p>
                      Perfil da Empresa no Google, avaliações e dados de endereço e telefone consistentes
                      para <strong>aparecer no mapa quando alguém busca perto de você</strong>.
                    </p>
                  </div>
                </article>

                {smallPillars.map((p) => (
                  <article key={p.title} className={`bcard ${p.dark ? "is-dark" : ""}`} data-reveal>
                    <div className="bcard-body">
                      <span className="bcard-icon"><p.icon size={20} aria-hidden /></span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Processo */}
          <section className="seo-sec" aria-labelledby="prazo-title">
            <div className="seo-wrap">
              <SectionHead
                eyebrow="Como funciona"
                id="prazo-title"
                title="O que esperar, mês a mês"
              >
                SEO é construção. Os prazos abaixo são <strong>realistas</strong> e variam conforme a
                concorrência do setor e o estado atual do site.
              </SectionHead>
              <div data-reveal>
                <StepsAccordion>
                  <div className="steps-cta">
                    <Cta />
                  </div>
                </StepsAccordion>
              </div>
            </div>
          </section>

          {/* Para quem */}
          <section className="seo-sec" aria-labelledby="fit-title">
            <div className="seo-wrap">
              <SectionHead
                eyebrow="Para quem faz sentido"
                id="fit-title"
                title="SEO não é para todo mundo. Veja se é para você."
              />
              <div className="seo-fit" data-reveal>
                <div className="seo-fit-col is-yes">
                  <h3>Faz sentido se</h3>
                  <ul>
                    {fitYes.map((t) => (
                      <li key={t}><Check size={18} aria-hidden /> {t}</li>
                    ))}
                  </ul>
                </div>
                <div className="seo-fit-col is-no">
                  <h3>Não faz sentido se</h3>
                  <ul>
                    {fitNo.map((t) => (
                      <li key={t}><X size={18} aria-hidden /> {t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Quem conduz */}
          <section className="seo-sec" aria-labelledby="quem-title">
            <div className="seo-wrap">
              <div className="seo-author" data-reveal>
                <div className="seo-author-photo">
                  <Image
                    src="/matheus-malaquias.jpg"
                    alt="Matheus Malaquias, fundador da Energy"
                    fill
                    sizes="(max-width: 960px) 100vw, 380px"
                    className="seo-author-img"
                  />
                </div>
                <div className="seo-author-body">
                  <p className="seo-eyebrow">Quem conduz o trabalho</p>
                  <h2 id="quem-title" className="seo-h2">
                    SEO feito por quem constrói sites que vendem
                  </h2>
                  <p className="seo-author-text">
                    A consultoria de SEO é conduzida por <strong>Matheus Malaquias</strong>, fundador da
                    Energy, com <strong>mais de 13 anos</strong> em agência e projetos digitais. Na
                    Energy, SEO técnico, Core Web Vitals e dados estruturados já fazem parte do escopo
                    padrão de todo site que desenvolvemos. A consultoria leva esse mesmo cuidado para o
                    conteúdo e a autoridade da sua empresa.
                  </p>
                  <ul className="seo-author-stats">
                    <li><strong>13+</strong><span>anos de experiência</span></li>
                    <li><strong>350+</strong><span>clientes atendidos</span></li>
                    <li><strong>4+</strong><span>países</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ */}
        <section className="seo-sec seo-dark" aria-labelledby="faq-title">
          <div className="seo-wrap seo-wrap--narrow">
            <SectionHead
              eyebrow="Perguntas frequentes"
              id="faq-title"
              title="Respostas diretas sobre consultoria de SEO"
            >
              Quer entender o básico antes? Leia o guia{" "}
              <Link href="/blog/seo-para-empresas">SEO para empresas: o que é e por onde começar</Link>.
            </SectionHead>
            <div className="seo-faq" data-reveal>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                  {f.link && (
                    <Link href={f.link.href} className="seo-faq-link">
                      {f.link.label} <ArrowRight size={14} aria-hidden />
                    </Link>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="diagnostico" className="seo-sec seo-light seo-final" aria-labelledby="diag-title">
          <div className="seo-wrap">
            <div className="seo-cta-card" data-reveal>
              <div className="seo-cta-lines" aria-hidden />
              <div className="seo-cta-copy">
                <p className="seo-eyebrow">Diagnóstico de SEO</p>
                <h2 id="diag-title" className="seo-h2">
                  Descubra quanto da sua demanda já está no Google e quem está ficando com ela
                </h2>
                <p className="seo-cta-text">
                  Deixe seu contato. Analisamos <strong>seu site e as buscas mais importantes do seu
                  mercado</strong> e apresentamos o diagnóstico pelo WhatsApp.
                </p>
                <ul className="seo-checks">
                  <li><Layers size={16} aria-hidden /> Como seu site está hoje aos olhos do Google</li>
                  <li><KeyRound size={16} aria-hidden /> Quais buscas trazem clientes no seu setor</li>
                  <li><TrendingDown size={16} aria-hidden /> Quem aparece no seu lugar e por quê</li>
                </ul>
              </div>
              <div className="seo-form-card">
                <LeadForm />
                <p className="seo-form-legal">
                  Sem custo e sem compromisso. Seus dados são usados só para este contato.{" "}
                  <Link href="/politica-de-privacidade">Política de privacidade</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
