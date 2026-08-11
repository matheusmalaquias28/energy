const audiences = [
  {
    icon: "◈",
    title: "Empresas que anunciam",
    body: "Para quem já investe em tráfego e precisa aproveitar melhor cada clique.",
  },
  {
    icon: "◉",
    title: "Prestadores de serviço",
    body: "Para transformar uma apresentação genérica em uma máquina de geração de oportunidades.",
  },
  {
    icon: "◆",
    title: "Negócios locais",
    body: "Para construir autoridade e facilitar o contato de novos clientes.",
  },
  {
    icon: "◇",
    title: "Infoprodutores e experts",
    body: "Para apresentar uma oferta com clareza e conduzir o visitante até a compra ou inscrição.",
  },
];

export function Galeria() {
  return (
    <section
      id="para-quem"
      className="sec band"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">Feita para quem precisa vender</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px auto 18px",
              maxWidth: "20ch",
            }}
          >
            Sua empresa já tem uma oferta.{" "}
            <em style={{ color: "#FE4101", fontStyle: "normal" }}>Agora ela precisa de uma página à altura.</em>
          </h2>
        </div>

        {/* Audience cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {audiences.map((a, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: "32px 28px" }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "1.5rem",
                  color: "#FE4101",
                  marginBottom: "20px",
                  lineHeight: 1,
                }}
              >
                {a.icon}
              </span>
              <h3
                style={{
                  fontFamily: "'Clash Display', system-ui, sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#F2F5F0",
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}
              >
                {a.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(242,245,240,0.55)", lineHeight: 1.65, margin: 0 }}>
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
