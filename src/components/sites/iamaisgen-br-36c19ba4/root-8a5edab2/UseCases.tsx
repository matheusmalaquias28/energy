const cards = [
  {
    id: "estrategia",
    label: "Estratégia",
    title: "Estrutura antes do layout",
    body: "Definição da oferta, argumentos e caminho de conversão — a lógica comercial que sustenta cada seção da página.",
    visual: "rings" as const,
  },
  {
    id: "copy",
    label: "Copy",
    title: "Texto que conduz à ação",
    body: "Mensagens desenvolvidas para apresentar sua solução, eliminar objeções e levar o visitante até o contato.",
    visual: "blobs" as const,
  },
  {
    id: "design",
    label: "Design",
    title: "Visual que transmite confiança",
    body: "Interface personalizada e alinhada ao posicionamento da sua marca, pensada para valorizar sua oferta.",
    visual: "globe" as const,
  },
  {
    id: "dev",
    label: "Desenvolvimento",
    title: "Rápida e responsiva",
    body: "Implementação otimizada para desktop e mobile, preparada para campanhas e tráfego pago.",
    visual: "panels" as const,
  },
  {
    id: "conversao",
    label: "Conversão",
    title: "Pronta para performar",
    body: "CTAs, formulários e elementos de contato — sua landing no ar e recebendo tráfego com foco em resultado.",
    visual: "launch" as const,
  },
];

function BentoVisual({ type }: { type: (typeof cards)[number]["visual"] }) {
  switch (type) {
    case "rings":
      return (
        <div className="projeto-bento-visual projeto-bento-visual--rings" aria-hidden>
          <span className="projeto-bento-ring projeto-bento-ring--1" />
          <span className="projeto-bento-ring projeto-bento-ring--2" />
          <span className="projeto-bento-ring projeto-bento-ring--3" />
        </div>
      );
    case "blobs":
      return (
        <div className="projeto-bento-visual projeto-bento-visual--blobs" aria-hidden>
          <span className="projeto-bento-blob projeto-bento-blob--1" />
          <span className="projeto-bento-blob projeto-bento-blob--2" />
          <span className="projeto-bento-blob projeto-bento-blob--3" />
        </div>
      );
    case "globe":
      return (
        <div className="projeto-bento-visual projeto-bento-visual--globe" aria-hidden>
          <span className="projeto-bento-pill">Landing page</span>
          <span className="projeto-bento-globe" />
        </div>
      );
    case "panels":
      return (
        <div className="projeto-bento-visual projeto-bento-visual--panels" aria-hidden>
          <span className="projeto-bento-panel projeto-bento-panel--1">A</span>
          <span className="projeto-bento-panel projeto-bento-panel--2">B</span>
          <span className="projeto-bento-panel projeto-bento-panel--3">✓</span>
        </div>
      );
    case "launch":
      return (
        <div className="projeto-bento-visual projeto-bento-visual--launch" aria-hidden>
          <span className="projeto-bento-chip">LP</span>
          <span className="projeto-bento-node" />
        </div>
      );
  }
}

export function UseCases() {
  return (
    <section className="sec projeto-bento-sec" style={{ background: "#000" }}>
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">O projeto</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px auto 0",
              maxWidth: "22ch",
            }}
          >
            Não é só uma página. É a estrutura comercial por trás do seu anúncio.
          </h2>
        </div>

        <div className="projeto-bento-grid">
          {cards.map((card, index) => (
            <article
              key={card.id}
              className={`projeto-bento-card projeto-bento-card--${index + 1}`}
            >
              <div className="projeto-bento-card__visual-wrap">
                <BentoVisual type={card.visual} />
                <div className="projeto-bento-card__visual-fade" aria-hidden />
              </div>
              <div className="projeto-bento-card__content">
                <span className="projeto-bento-card__label">{card.label}</span>
                <h3 className="projeto-bento-card__title">{card.title}</h3>
                <p className="projeto-bento-card__body">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
