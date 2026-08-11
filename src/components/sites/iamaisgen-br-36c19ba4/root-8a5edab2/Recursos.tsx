import Image from "next/image";

const cards: Array<{
  id: string;
  icon: "target" | "pen" | "layout" | "code" | "chart";
  title: string;
  body: string;
  tag?: string;
}> = [
  {
    id: "a",
    icon: "target",
    title: "Estrutura estratégica",
    body: "A informação aparece na ordem certa para conduzir o visitante até a conversão.",
    tag: "A lógica certa no momento certo",
  },
  {
    id: "b",
    icon: "pen",
    title: "Copy orientada à ação",
    body: "Sua oferta é apresentada de forma clara, objetiva e persuasiva.",
  },
  {
    id: "c",
    icon: "layout",
    title: "Design profissional",
    body: "Visual pensado para transmitir confiança e valor desde o primeiro segundo.",
  },
  {
    id: "d",
    icon: "code",
    title: "Desenvolvimento otimizado",
    body: "Página responsiva, rápida e preparada para receber tráfego e campanhas de aquisição.",
  },
  {
    id: "e",
    icon: "chart",
    title: "Foco em conversão",
    body: "Cada seção existe por um motivo: gerar entendimento, confiança ou ação. Nada de enchimento.",
    tag: "Resultado, não estética",
  },
];

function BentoIcon({ type }: { type: "target" | "pen" | "layout" | "code" | "chart" }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#FE4101",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      );
    case "layout":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 16V9M12 16V5M17 16v-4" />
        </svg>
      );
  }
}

export function Recursos() {
  return (
    <section
      id="virada"
      className="sec band"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <div className="wrap">
        <div className="sec-head sec-head-left">
          <span className="eyebrow">Não é só design</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px 0 18px",
            }}
          >
            Uma Landing Page pensada para fazer o visitante avançar.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(242,245,240,0.62)", lineHeight: 1.65, maxWidth: "52ch", margin: 0 }}>
            Cada projeto é construído considerando o que seu público precisa entender, sentir e
            fazer antes de entrar em contato com sua empresa.
          </p>
        </div>

        <div className="bento-shell">
          <div className="bento-panel-bar">
            <span>O método</span>
            <span className="bento-panel-bar__sep">/</span>
            <span>Por que converte mais</span>
            <span className="bento-panel-bar__tag">Estratégia antes do layout</span>
          </div>

          <div className="bento-grid">
            {cards.map((card) => (
              <article
                key={card.id}
                className={`card bento-card bento-card--${card.id}`}
              >
                <div className="bento-card-icon" aria-hidden>
                  <BentoIcon type={card.icon} />
                </div>
                <h3 className="bento-card-title">{card.title}</h3>
                <p className="bento-card-body">{card.body}</p>
                {card.tag ? (
                  <span className="bento-card-tag">{card.tag}</span>
                ) : null}
              </article>
            ))}

            <article className="card bento-card bento-card--visual">
              <div className="bento-visual-glow bento-visual-glow--primary" aria-hidden />
              <div className="bento-visual-glow bento-visual-glow--secondary" aria-hidden />
              <div className="bento-visual-logo">
                <Image
                  src="/logo-inflated.png"
                  alt=""
                  width={1150}
                  height={1936}
                  className="bento-visual-logo__img"
                />
              </div>
              <span className="bento-visual-tag">100% Energy</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
