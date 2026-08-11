const plans = [
  {
    name: "START",
    tagline: "Pra quem está começando a colocar IA nas entregas.",
    price: "R$79",
    period: "/mês",
    credits: "650",
    images: "≈ 130 imagens",
    featured: false,
    cta: "Assinar o START",
    href: "https://app.iamaisgen.com/",
  },
  {
    name: "CREATOR",
    tagline: "Pra quem entrega projeto toda semana.",
    price: "R$149",
    period: "/mês",
    credits: "1.250",
    images: "≈ 250 imagens",
    featured: true,
    cta: "Assinar o CREATOR",
    href: "https://app.iamaisgen.com/",
  },
  {
    name: "STUDIO",
    tagline: "Pra quem roda vários clientes ao mesmo tempo.",
    price: "R$297",
    period: "/mês",
    credits: "2.500",
    images: "≈ 500 imagens",
    featured: false,
    cta: "Assinar o STUDIO",
    href: "https://app.iamaisgen.com/",
  },
];

const perks = [
  "Todas as ferramentas da plataforma",
  "Upscale e mockups fotográficos inclusos",
  "Uso comercial liberado",
];

export function Planos() {
  return (
    <section id="planos" className="sec" style={{ background: "#000" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span className="eyebrow">Planos</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px auto 18px",
              maxWidth: "18ch",
            }}
          >
            Escolha o tamanho
            <br />
            da sua produção
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(242,245,240,0.4)", lineHeight: 1.6 }}>
            Créditos renovam todo mês. Sem fidelidade: assine, use, cancele quando quiser.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "12px",
              fontSize: "0.78rem",
              color: "rgba(242,245,240,0.45)",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "100px",
              padding: "5px 14px",
            }}
          >
            <span style={{ color: "#FE4101" }}>◆</span>
            5 créditos = 1 imagem
          </div>
        </div>

        {/* Plan cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                border: plan.featured
                  ? "1px solid rgba(254,65,1,0.4)"
                  : "1px solid rgba(255,255,255,0.09)",
                borderRadius: "24px",
                padding: "32px",
                background: plan.featured
                  ? "rgba(254,65,1,0.04)"
                  : "rgba(255,255,255,0.028)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#FE4101",
                    color: "#0A0A0A",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  ✦ Popular
                </span>
              )}

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontFamily: "'Clash Display', system-ui, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: plan.featured ? "#FE4101" : "rgba(242,245,240,0.7)",
                    letterSpacing: "0.06em",
                    marginBottom: "6px",
                  }}
                >
                  {plan.name}
                </div>
                <p style={{ fontSize: "0.82rem", color: "rgba(242,245,240,0.5)", lineHeight: 1.5, margin: "0 0 20px" }}>
                  {plan.tagline}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span
                    style={{
                      fontFamily: "'Clash Display', system-ui, sans-serif",
                      fontSize: "2.8rem",
                      fontWeight: 700,
                      color: "#F2F5F0",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: "0.88rem", color: "rgba(242,245,240,0.4)" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: "0.72rem", color: "rgba(242,245,240,0.35)", margin: "4px 0 0" }}>
                  Cobrado mensalmente
                </p>
              </div>

              {/* Credits */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F2F5F0", marginBottom: "2px" }}>
                  {plan.credits} créditos por mês
                </div>
                <div style={{ fontSize: "0.78rem", color: "rgba(242,245,240,0.45)" }}>
                  {plan.images}
                </div>
              </div>

              {/* Perks */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                {[`Até ${plan.images.replace("≈ ", "")} por mês`, ...perks].map((perk) => (
                  <li key={perk} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "rgba(242,245,240,0.65)", lineHeight: 1.4 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FE4101" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px",
                  borderRadius: "100px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  background: plan.featured ? "#FE4101" : "rgba(255,255,255,0.07)",
                  color: plan.featured ? "#0A0A0A" : "#F2F5F0",
                  border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.12)",
                  transition: "opacity 0.2s",
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
