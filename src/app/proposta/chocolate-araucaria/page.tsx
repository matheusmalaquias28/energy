import {
  ArrowDown,
  Blocks,
  Check,
  Cloud,
  Layers,
  Plug,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Builder from "./_components/Builder";
import RevealObserver from "./_components/RevealObserver";
import { MONTHLY, PROPOSAL, brl, wa } from "./data";

const STATS = [
  { n: "3.992", l: "telas no sistema atual" },
  { n: "314 mil", l: "linhas de código" },
  { n: "260", l: "tabelas no banco" },
  { n: "61", l: "perfis de acesso" },
  { n: "8", l: "marcas" },
  { n: "24", l: "áreas da empresa" },
];

const WHY = [
  {
    t: "Tecnologia sem futuro",
    d: "O sistema foi feito em ASP clássico, uma linguagem que a Microsoft parou de evoluir há mais de 20 anos. Cada ajuste fica mais caro e mais difícil achar quem mexa.",
  },
  {
    t: "Segurança",
    d: "Na análise do código encontrei falhas no login e no acesso ao banco de dados que não se resolvem com remendo.",
  },
  {
    t: "PDV com ECF",
    d: "O cupom fiscal em ECF foi extinto. As lojas precisam de NFC-e para vender dentro da lei.",
  },
  {
    t: "Cópias do sistema",
    d: "Para atender outras empresas, o sistema foi copiado inteiro. Uma correção precisa ser feita em cada cópia.",
  },
];

const CHANGES = [
  { icon: Sparkles, t: "Bonito e simples", d: "Telas limpas, busca rápida e menos cliques. A equipe aprende em dias, não em meses." },
  { icon: Layers, t: "Um sistema só", d: "Todas as empresas, marcas e lojas no mesmo lugar, cada uma vendo só o que é dela." },
  { icon: Blocks, t: "Por módulos", d: "Começa pelo essencial e liga os outros módulos quando a empresa precisar." },
  { icon: Plug, t: "Integrável", d: "Conversa com loja virtual, PDV, ponto, API fiscal e outras ferramentas." },
  { icon: Smartphone, t: "No celular", d: "Funciona no navegador do computador, do tablet e do celular, sem instalar nada." },
  { icon: Cloud, t: "Na nuvem e seguro", d: "Backup diário, acesso controlado por perfil e registro de tudo que é feito." },
];

const STEPS = [
  {
    tag: "Primeira semana",
    t: "Levantamento",
    d: "As regras do sistema atual são extraídas do próprio código e validadas com quem usa. Aqui confirmamos lojas, Protheus e o que ainda é usado.",
  },
  {
    tag: "Primeira entrega",
    t: "Núcleo no ar",
    d: "Cadastros, pedidos e estoque funcionando com os dados migrados. A equipe já começa a usar.",
  },
  {
    tag: "Em sequência",
    t: "Módulos",
    d: "Cada módulo é entregue, testado com a equipe e entra em uso antes do próximo começar.",
  },
  {
    tag: "Em cada entrega",
    t: "Migração e treinamento",
    d: "Os dados antigos daquele módulo vêm junto e a equipe é treinada na hora de usar.",
  },
];

const MONTHLY_RULES = [
  "O valor exato depende dos módulos escolhidos e das ferramentas que eles usam.",
  "Ele é fechado junto com o orçamento, quando a montagem estiver definida.",
  "Seja qual for a montagem, fica dentro dessa faixa.",
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

export default function PropostaAraucaria() {
  return (
    <main className="arp">
      <RevealObserver />

      <div className="topbar">
        <div className="brands">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-energy.svg" alt="Energy" className="energy" />
          <span className="x">×</span>
          <span className="wordmark">
            Chocolate <b>Araucária</b>
          </span>
        </div>
        <span className="eyebrow">Proposta · {PROPOSAL.issuedAt}</span>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="eyebrow" data-reveal>
          Novo sistema de gestão · Orçamento por módulos
        </div>
        <h1 data-reveal>
          Quinze anos de fábrica. <em>Um sistema à altura.</em>
        </h1>
        <div className="hero-row">
          <p className="lede" data-reveal>
            O sistema atual ainda roda a fábrica, os pedidos e as lojas. A proposta é refazer tudo do zero: mais bonito, mais fácil de usar e
            dividido em módulos. Abaixo, vocês escolhem o que entra e veem o valor e o prazo na hora.
          </p>
          <div className="actions" data-reveal>
            <a className="btn" href="#montar">
              Montar o orçamento <ArrowDown size={16} />
            </a>
            <a className="btn btn-line" href="#diagnostico">
              O sistema atual
            </a>
          </div>
        </div>
      </header>

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

      {/* 01 · DIAGNÓSTICO */}
      <section className="sec" id="diagnostico">
        <Head
          n="01"
          kicker="O sistema atual"
          title={
            <>
              Abri o sistema inteiro. <em>Ele faz muito mais do que parece.</em>
            </>
          }
          intro="Analisei todo o backup do sistema atual. Ele cobre fábrica, vendas, compras, financeiro, lojas, RH e sites. Muita coisa ali provavelmente nem é mais usada, e é por isso que o orçamento é montado por módulos."
        />

        <ul className="stats">
          {STATS.map((s, i) => (
            <li key={s.l} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <b>{s.n}</b>
              <span>{s.l}</span>
            </li>
          ))}
        </ul>

        <div className="why">
          <h3 data-reveal>Por que refazer, e não reformar</h3>
          <ol>
            {WHY.map((w, i) => (
              <li key={w.t} data-reveal style={{ transitionDelay: `${(i % 2) * 70}ms` }}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{w.t}</h4>
                  <p>{w.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 02 · O QUE MUDA */}
      <section className="sec">
        <Head
          n="02"
          kicker="O que muda"
          title={
            <>
              O mesmo trabalho, <em>com muito menos atrito.</em>
            </>
          }
        />
        <ul className="features">
          {CHANGES.map(({ icon: Icon, t, d }, i) => (
            <li key={t} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <Icon size={20} strokeWidth={1.5} />
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 03 · MONTAGEM */}
      <section className="sec" id="montar">
        <Head
          n="03"
          kicker="Monte o seu sistema"
          title={
            <>
              Marque o que entra. <em>O valor e o prazo somam na hora.</em>
            </>
          }
          intro="Tudo o que existe hoje no sistema antigo está aqui, organizado em módulos. O núcleo é a base obrigatória. O resto vocês marcam conforme a necessidade, agora ou depois. Os itens “a confirmar” validamos juntos no levantamento."
        />
        <Builder />
      </section>

      {/* 04 · COMO ENTREGAMOS */}
      <section className="sec">
        <Head
          n="04"
          kicker="Como entregamos"
          title={
            <>
              Em partes, <em>sem parar a fábrica.</em>
            </>
          }
          intro="O sistema atual continua funcionando até cada parte nova estar pronta e testada. A troca acontece módulo a módulo."
        />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.t} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="step-top">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="tag">{s.tag}</span>
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="after">
          <article className="card" data-reveal>
            <div className="eyebrow">Custo mensal</div>
            <div className="price small">
              {brl(MONTHLY.min)}
              <span className="pre-to">a</span>
              {brl(MONTHLY.max)}
              <span>/mês</span>
            </div>
            <ul className="incl">
              {MONTHLY.items.map((t) => (
                <li key={t}>
                  <Check size={15} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="fine">Começa a contar quando o núcleo entra em uso.</p>
          </article>
          <article className="card" data-reveal style={{ transitionDelay: "90ms" }}>
            <div className="eyebrow">Como o valor mensal é definido</div>
            <ul className="third">
              {MONTHLY_RULES.map((t) => (
                <li key={t}>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="fine">
              <ShieldCheck size={14} /> O código e os dados são da Chocolate Araucária.
            </p>
          </article>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="final">
        <div className="eyebrow" data-reveal>
          Próximo passo
        </div>
        <h2 data-reveal>
          Montou o seu? <em>É só me mandar.</em>
        </h2>
        <p className="lede" data-reveal>
          O botão “Aprovar esta montagem” já envia pelo WhatsApp a lista do que vocês marcaram. Se preferir, a gente revisa os módulos juntos
          numa chamada.
        </p>
        <div className="actions" data-reveal>
          <a className="btn" href="#montar">
            Voltar para a montagem
          </a>
          <a
            className="btn btn-line"
            href={wa("Olá, Matheus! Vi a proposta do novo sistema da Chocolate Araucária e quero marcar uma conversa.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcar uma conversa
          </a>
        </div>
        <div className="sign" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/proposta/lm-select-cars/matheus.webp" alt={PROPOSAL.author} />
          <div>
            {PROPOSAL.author} · {PROPOSAL.agency}
            <span>Sites, sistemas e marketing</span>
          </div>
        </div>
      </section>

      <footer className="foot">
        <span>
          Proposta para {PROPOSAL.client} · {PROPOSAL.issuedAt}
        </span>
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
