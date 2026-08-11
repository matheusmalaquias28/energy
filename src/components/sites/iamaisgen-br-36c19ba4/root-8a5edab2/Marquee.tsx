const items = [
  "Estrutura estratégica",
  "Copy orientada à ação",
  "Design profissional",
  "Desenvolvimento web",
  "Foco em conversão",
  "Pronta para anunciar",
  "Projeto personalizado",
  "Responsivo e rápido",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "18px 0",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "iagen-marquee 24s linear infinite",
          willChange: "transform",
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              fontSize: "0.82rem",
              fontWeight: 500,
              color: "rgba(242,245,240,0.5)",
              letterSpacing: "0.02em",
              paddingRight: "48px",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#FE4101",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
