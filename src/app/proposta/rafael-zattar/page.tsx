import { ArrowRight, Check, CreditCard, Landmark, QrCode, X } from "lucide-react";
import RevealObserver from "./_components/RevealObserver";
import Pricing from "./_components/Pricing";
import { PIX_OFF, PROPOSAL, wa } from "./data";

const ASSET = "/proposta/rafael-zattar";

function ZCoin({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <defs>
        <linearGradient id="rzp-g" x2="1" y2="1">
          <stop stopColor="#f0dfb5" />
          <stop offset="1" stopColor="#ad8744" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#rzp-g)" />
      <text x="29" y="50" textAnchor="middle" fontSize="52" fontFamily="Georgia,serif" fontStyle="italic" fill="#163125">Z</text>
    </svg>
  );
}

function SecHead({ n, kicker, title, intro }: { n: string; kicker: string; title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <div className="sec-head" data-reveal>
      <div className="label gold">
        {n} · {kicker}
      </div>
      <h2 className="sec-title">{title}</h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </div>
  );
}

export default function PropostaRafaelZattar() {
  return (
    <main className="rzp">
      <RevealObserver />

      {/* HERO */}
      <header className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-bg" src={`${ASSET}/hero.webp`} alt="" />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <div className="brands" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-energy.svg" alt="Energy" className="energy" />
            <span className="x">×</span>
            <span className="cz">
              Carteira <ZCoin size={28} />
            </span>
          </div>
          <div className="label" data-reveal>Orçamento · {PROPOSAL.issuedAt}</div>
          <h1 data-reveal>
            Uma porta de entrada.
            <br />
            <em>Dois produtos vendendo.</em>
          </h1>
          <p className="lede" data-reveal>
            Rafael, a Home já está pronta e no ar, com os ajustes que você pediu. Aqui está o orçamento para fechar o ecossistema: a
            Home, a página de vendas da Carteira Z com VSL e, se fizer sentido, uma página enxuta para o Z Friends.
          </p>
          <div className="hero-actions" data-reveal>
            <a className="btn" href="#investimento">
              Ver planos e valores
            </a>
            <a className="btn btn-ghost" href={PROPOSAL.homeUrl} target="_blank" rel="noopener noreferrer">
              Abrir a Home no ar <ArrowRight size={15} />
            </a>
          </div>
          <dl className="meta" data-reveal>
            <div>
              <dt className="label">Preparado para</dt>
              <dd>{PROPOSAL.preparedFor}</dd>
            </div>
            <div>
              <dt className="label">Feito por</dt>
              <dd>
                {PROPOSAL.author} · {PROPOSAL.agency}
              </dd>
            </div>
            <div>
              <dt className="label">Válido até</dt>
              <dd>{PROPOSAL.validUntil}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* 01 · ESTRUTURA */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            n="01"
            kicker="Estrutura"
            title={
              <>
                A Home gera confiança. <em>Cada produto fecha a venda.</em>
              </>
            }
            intro="Quem chega pelo Instagram ou pelo YouTube encontra a autoridade primeiro e depois escolhe o caminho certo para o próprio momento."
          />

          <div className="map">
            <a className="node home" href={PROPOSAL.homeUrl} target="_blank" rel="noopener noreferrer" data-reveal>
              <div className="thumb" style={{ backgroundImage: `url(${ASSET}/hero.webp)` }}>
                <span className="chip chip-good">
                  <Check size={12} /> Pronta
                </span>
                <div className="thumb-copy">
                  Deixe os melhores gestores do Brasil construírem seu patrimônio
                </div>
              </div>
              <div className="node-b">
                <span className="label gold">Home</span>
                <h3>Direcionamento + autoridade</h3>
                <p>Resultados das carteiras, imprensa, time e conteúdo. Já com os seus ajustes.</p>
              </div>
            </a>

            <div className="split" aria-hidden>
              <span />
              <span />
            </div>

            <div className="routes">
              <div className="route" data-reveal>
                <div className="route-head">
                  <span className="label gold">Produto 01</span>
                  <h3>Carteira Z</h3>
                </div>
                <ol className="steps">
                  <li className="new">
                    <b>LP com VSL</b>
                    <span>Nova</span>
                  </li>
                  <li>
                    <b>Checkout</b>
                    <span>Sua plataforma</span>
                  </li>
                </ol>
                <p>O vídeo conduz a decisão e a página sustenta: prova, oferta, garantia e respostas às objeções.</p>
              </div>

              <div className="route" data-reveal>
                <div className="route-head">
                  <span className="label gold">Produto 02</span>
                  <h3>Z Friends</h3>
                </div>
                <ol className="steps">
                  <li className="opt">
                    <b>LP enxuta</b>
                    <span>Opcional</span>
                  </li>
                  <li>
                    <b>Hotmart</b>
                    <span>Como hoje</span>
                  </li>
                </ol>
                <p>Produto de entrada pede pouca fricção. Pode seguir direto para a Hotmart ou ganhar uma página curta com o bônus em destaque.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · INVESTIMENTO */}
      <section className="sec sec-alt" id="investimento">
        <div className="wrap">
          <SecHead
            n="02"
            kicker="Investimento"
            title={
              <>
                Escolha até onde ir. <em>Quanto mais completo, maior o desconto.</em>
              </>
            }
            intro="Os pacotes saem mais em conta do que as páginas avulsas. No Pix à vista, ainda entra um desconto extra."
          />

          <Pricing />

          <div className="pay" data-reveal>
            <div>
              <QrCode size={20} />
              <b>Pix à vista</b>
              <p>{Math.round(PIX_OFF * 100)}% de desconto extra sobre o valor do plano.</p>
            </div>
            <div>
              <Landmark size={20} />
              <b>50% + 50%</b>
              <p>Metade para iniciar, metade na entrega. A Home é publicada após a primeira parcela.</p>
            </div>
            <div>
              <CreditCard size={20} />
              <b>Cartão em até 12×</b>
              <p>Pelo link de pagamento, com a taxa da operadora.</p>
            </div>
          </div>

          <div className="terms" data-reveal>
            <div>
              <div className="label good">Incluso em todos os planos</div>
              <ul>
                {[
                  "Duas rodadas de ajuste por página",
                  "Versão para celular e computador",
                  "Código e hospedagem no seu nome",
                  "30 dias de suporte após a entrega",
                ].map((t) => (
                  <li key={t}>
                    <Check size={15} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label">Fica por sua conta</div>
              <ul className="no">
                {["Gravação e edição do VSL", "Domínio e plataforma de checkout", "Gestão de tráfego pago"].map((t) => (
                  <li key={t}>
                    <X size={15} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="final">
        <div className="final-glow" />
        <div className="wrap" style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="final-team" src={`${ASSET}/carteira-z-time.webp`} alt="Time da Carteira Z" />
          <div className="label gold">Próximo passo</div>
          <h2>
            A Home está pronta. <em>Vamos colocar os produtos para vender.</em>
          </h2>
          <p>Me diga qual plano faz sentido e eu já te mando o cronograma. Se quiser ajustar o escopo, a gente monta junto.</p>
          <div className="hero-actions center">
            <a className="btn btn-wa" href={wa("Olá, Matheus! Vi o orçamento da Carteira Z e quero seguir.")} target="_blank" rel="noopener noreferrer">
              Fechar pelo WhatsApp
            </a>
            <a className="btn btn-ghost" href={wa("Olá, Matheus! Vi o orçamento da Carteira Z e tenho uma dúvida:")} target="_blank" rel="noopener noreferrer">
              Tirar uma dúvida
            </a>
          </div>
          <div className="sign">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/matheus.webp`} alt={PROPOSAL.author} className="avatar" />
            <div className="who">
              {PROPOSAL.author} · {PROPOSAL.agency}
              <span>Design que posiciona. Site que converte.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <span>Orçamento para Carteira Z · {PROPOSAL.issuedAt}</span>
          <span>
            <a href={PROPOSAL.energySite} target="_blank" rel="noopener noreferrer">
              energymidia.com.br
            </a>
            {" · "}
            <a href={PROPOSAL.energyInstagram} target="_blank" rel="noopener noreferrer">
              @energymidia
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
