const steps = [
  {
    num: "01",
    title: "Uma página confusa",
    body: "Não fica claro o que a empresa oferece, para quem é ou por que deveria escolher você.",
  },
  {
    num: "02",
    title: "Informação demais",
    body: "Textos, menus e elementos disputando atenção em vez de conduzir o visitante para uma ação.",
  },
  {
    num: "03",
    title: "Design sem estratégia",
    body: "Uma página bonita, mas construída pensando em estética — não em conversão.",
  },
  {
    num: "04",
    title: "Nenhum próximo passo claro",
    body: "O visitante chega, olha, não sabe o que fazer e vai embora.",
  },
];

export function Problema() {
  return (
    <section
      id="problema"
      className="sec"
      style={{ background: "#000" }}
    >
      <div className="wrap">
        {/* Header */}
        <div className="sec-head center" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">O problema não é só o tráfego</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px auto 18px",
              maxWidth: "22ch",
            }}
          >
            Você pode estar pagando para mandar pessoas para uma página que não convence ninguém.
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(242,245,240,0.62)",
              maxWidth: "44ch",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Seu anúncio conseguiu o clique. Mas aí o visitante entra e encontra:
          </p>
        </div>

        {/* 4-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              className="card"
              style={{
                padding: "28px 24px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "'Clash Display', system-ui, sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#FE4101",
                  letterSpacing: "-0.03em",
                  marginBottom: "16px",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Clash Display', system-ui, sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#F2F5F0",
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(242,245,240,0.55)",
                  lineHeight: 1.6,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        <p
          style={{
            textAlign: "center",
            maxWidth: "52ch",
            margin: "0 auto",
            fontSize: "1rem",
            color: "rgba(242,245,240,0.62)",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#F2F5F0" }}>Tráfego caro + página ruim = dinheiro desperdiçado.</strong>
          <br />
          A landing page precisa fazer o trabalho que acontece depois do clique.
        </p>
      </div>
    </section>
  );
}
