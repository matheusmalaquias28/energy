import { LpContactButton } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/LpContactButton";

const diferenciais = [
  "Estratégia antes do layout",
  "Copy + design + desenvolvimento",
  "Experiência com diferentes nichos",
  "Estrutura preparada para tráfego",
  "Projeto personalizado",
  "Comunicação direta",
];

export function Comparativo() {
  return (
    <section
      id="diferencial"
      className="sec"
      style={{ background: "#000" }}
    >
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">Por que fazer com a gente?</span>
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
            Você não precisa de mais uma página bonita.
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left: differentials list */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {diferenciais.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 24px",
                  borderBottom: i < diferenciais.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "rgba(254,65,1,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    color: "#FE4101",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: "0.9rem", color: "#F2F5F0", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Right: text + punchline */}
          <div>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(242,245,240,0.62)",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              Precisa de alguém que entenda que uma landing page existe para{" "}
              <strong style={{ color: "#F2F5F0" }}>fazer negócio acontecer</strong>.
            </p>

            <div
              style={{
                border: "1px solid rgba(254,65,1,0.2)",
                borderRadius: "16px",
                padding: "24px",
                background: "rgba(254,65,1,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Clash Display', system-ui, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#F2F5F0",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                O objetivo não é impressionar você no Figma.
                <br />
                <span style={{ color: "#FE4101" }}>É fazer o visitante clicar no botão.</span>
              </p>
            </div>

            <div style={{ marginTop: "32px" }}>
              <LpContactButton label="Quero minha Landing Page" className="min-w-[276px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
