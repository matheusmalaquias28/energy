import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  Gauge,
  ImageIcon,
  MessageCircle,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import RevealObserver from "./_components/RevealObserver";
import { PRICE, PROPOSAL, brl, wa } from "./data";

const ASSET = "/proposta/lm-select-cars";

const FLOW = [
  {
    tag: "Como hoje",
    title: "RevendaMais",
    text: "A equipe cadastra fotos, preço e ficha no sistema que já usa. Nada muda na rotina.",
  },
  {
    tag: "Automático",
    title: "XML a cada 30 min",
    text: "O RevendaMais gera um arquivo com o estoque completo e atualiza sozinho.",
  },
  {
    tag: "Sem retrabalho",
    title: "Site da LM",
    text: "Entrou carro, mudou o preço ou foi vendido: o site acompanha, sem cadastrar duas vezes.",
  },
];

const FEATURES = [
  { icon: SlidersHorizontal, title: "Estoque com filtros", text: "Marca, modelo, faixa de preço e carroceria. O cliente acha o carro em segundos." },
  { icon: MessageCircle, title: "WhatsApp", text: "Em todo o site e em cada veículo, levando direto para o consultor." },
  { icon: FileText, title: "Formulários", text: "Avaliação do usado e financiamento, com os dados chegando organizados." },
  { icon: Search, title: "SEO otimizado", text: "Cada veículo com página própria, estruturada para aparecer no Google." },
  { icon: Gauge, title: "Velocidade", text: "Imagens otimizadas e carregamento rápido, principalmente no celular." },
  { icon: ImageIcon, title: "Banners de destaque", text: "O carro do mês em evidência na home, trocado todo mês." },
];

const MONTHLY_ITEMS = [
  "Hospedagem do site",
  "Suporte mensal direto comigo",
  "Banners para os destaques do mês",
  "Atualizações e correções de problemas",
];

function Head({ n, kicker, title, intro }: { n: string; kicker: string; title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <div className="head" data-reveal>
      <div className="eyebrow">
        <span>{n}</span> {kicker}
      </div>
      <h2>{title}</h2>
      {intro && <p className="intro">{intro}</p>}
    </div>
  );
}

export default function PropostaLmSelectCars() {
  return (
    <main className="lmp">
      <RevealObserver />

      <div className="topbar">
        <div className="brands">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-energy.svg" alt="Energy" className="energy" />
          <span className="x">×</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${ASSET}/logo-lm.svg`} alt="LM Select Cars" className="lm" />
        </div>
        <span className="eyebrow">Proposta · {PROPOSAL.issuedAt}</span>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="eyebrow" data-reveal>
          Novo site · Integrado ao RevendaMais
        </div>
        <h1 data-reveal>
          <span>Mesmo sistema.</span>
          <span className="chrome">Outra vitrine.</span>
        </h1>
        <div className="hero-row">
          <p className="lede" data-reveal>
            O cadastro dos veículos continua no RevendaMais, do jeito que a equipe já faz. O que muda é onde o estoque aparece: um site
            à altura dos carros que a LM vende.
          </p>
          <div className="actions" data-reveal>
            <a className="btn" href={PROPOSAL.previewUrl} target="_blank" rel="noopener noreferrer">
              Ver a prévia no ar <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-line" href="#investimento">
              Investimento
            </a>
          </div>
        </div>
      </header>

      <a className="shot" href={PROPOSAL.previewUrl} target="_blank" rel="noopener noreferrer" data-reveal>
        <picture>
          <source media="(max-width: 700px)" srcSet={`${ASSET}/hero-mobile.webp`} />
          { }
          <img src={`${ASSET}/hero.webp`} alt="Porsche 911 Carrera Cabriolet no showroom da LM Select Cars" />
        </picture>
        <span className="shot-tag">
          Prévia · {PROPOSAL.previewLabel} <ArrowUpRight size={14} />
        </span>
      </a>

      <dl className="meta">
        <div>
          <dt className="eyebrow">Preparado para</dt>
          <dd>{PROPOSAL.client}</dd>
        </div>
        <div>
          <dt className="eyebrow">Feito por</dt>
          <dd>
            {PROPOSAL.author} · {PROPOSAL.agency}
          </dd>
        </div>
        <div>
          <dt className="eyebrow">Válido até</dt>
          <dd>{PROPOSAL.validUntil}</dd>
        </div>
      </dl>

      {/* 01 · INTEGRAÇÃO */}
      <section className="sec">
        <Head
          n="01"
          kicker="Integração"
          title={
            <>
              Cadastrou no RevendaMais, <span className="chrome">está no site.</span>
            </>
          }
          intro="Confirmei com o comercial do RevendaMais: o sistema gera um arquivo XML com o estoque, atualizado a cada 30 minutos. O site novo lê esse arquivo sozinho."
        />

        <ol className="flow">
          {FLOW.map((f, i) => (
            <li key={f.title} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="flow-top">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="tag">{f.tag}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              {i < FLOW.length - 1 && <ArrowRight className="flow-arrow" size={18} aria-hidden />}
            </li>
          ))}
        </ol>
      </section>

      {/* 02 · O QUE ENTRA */}
      <section className="sec">
        <Head
          n="02"
          kicker="O que entra"
          title={
            <>
              Tudo para o cliente <span className="chrome">chegar na loja.</span>
            </>
          }
        />

        <ul className="features">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <li key={title} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <Icon size={20} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 03 · INVESTIMENTO */}
      <section className="sec" id="investimento">
        <Head
          n="03"
          kicker="Investimento"
          title={
            <>
              Um valor fechado. <span className="chrome">Pronto em {PRICE.deadline}.</span>
            </>
          }
        />

        <div className="price-grid">
          <article className="card main" data-reveal>
            <div className="eyebrow">Projeto completo</div>
            <div className="price">{brl(PRICE.project)}</div>
            <div className="pay">
              <div>
                <b>Até {PRICE.installments}× no cartão</b>
                <span>com a taxa da operadora</span>
              </div>
              <div>
                <b>50% + 50%</b>
                <span>
                  {brl(PRICE.project / 2)} para iniciar e {brl(PRICE.project / 2)} na entrega
                </span>
              </div>
            </div>
            <div className="deadline">
              <span className="eyebrow">Prazo</span>
              <b>{PRICE.deadline} após a aprovação</b>
            </div>
            <a className="btn" href={wa("Olá, Matheus! Vi a proposta do site da LM Select Cars e quero seguir.")} target="_blank" rel="noopener noreferrer">
              Aprovar a proposta
            </a>
          </article>

          <article className="card" data-reveal style={{ transitionDelay: "90ms" }}>
            <div className="eyebrow">Hospedagem e suporte</div>
            <div className="price small">
              {brl(PRICE.monthly)}
              <span>/mês</span>
            </div>
            <ul className="incl">
              {MONTHLY_ITEMS.map((t) => (
                <li key={t}>
                  <Check size={15} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="fine">O site fica no ar e sempre em dia, sem a LM precisar se preocupar com nada técnico.</p>
          </article>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="final">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="final-bg" src={`${ASSET}/cayenne.webp`} alt="" />
        <div className="final-inner">
          <div className="eyebrow" data-reveal>
            Próximo passo
          </div>
          <h2 data-reveal>
            A prévia já existe. <span className="chrome">Em {PRICE.deadline}, ela vira o site da LM.</span>
          </h2>
          <div className="actions" data-reveal>
            <a className="btn btn-wa" href={wa("Olá, Matheus! Vi a proposta do site da LM Select Cars e quero fechar.")} target="_blank" rel="noopener noreferrer">
              Fechar pelo WhatsApp
            </a>
            <a className="btn btn-line" href={wa("Olá, Matheus! Vi a proposta do site da LM Select Cars e tenho uma dúvida:")} target="_blank" rel="noopener noreferrer">
              Tirar uma dúvida
            </a>
          </div>
          <div className="sign" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/matheus.webp`} alt={PROPOSAL.author} />
            <div>
              {PROPOSAL.author} · {PROPOSAL.agency}
              <span>Design que posiciona. Site que converte.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <span>Proposta para {PROPOSAL.client} · {PROPOSAL.issuedAt}</span>
        <span>
          <a href={PROPOSAL.energySite} target="_blank" rel="noopener noreferrer">
            energymidia.com.br
          </a>
          {" · "}
          <a href={PROPOSAL.energyInstagram} target="_blank" rel="noopener noreferrer">
            @energymidia
          </a>
        </span>
      </footer>
    </main>
  );
}
