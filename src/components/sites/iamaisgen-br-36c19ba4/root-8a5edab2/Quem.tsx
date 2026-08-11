import Image from "next/image";

const authors = [
  {
    initials: "TM",
    name: "Thiago Medeiros",
    role: "Criador do iA GEN",
    bio: "Designer há 6 anos, fundador de Figmais, Framer.PRO, IA MAIS e Forza Club. Usa a plataforma nos próprios projetos e nos dos mais de 2.000 alunos que já formou.",
    photo: "/sites/iamaisgen-br-36c19ba4/root-8a5edab2/images/TM.jpg",
  },
  {
    initials: "AM",
    name: "Alef Miranda",
    role: "Criador do iA GEN",
    bio: "Referência em landing pages de alta conversão no Brasil.",
    photo: "/sites/iamaisgen-br-36c19ba4/root-8a5edab2/images/AM.jpg",
  },
];

export function Quem() {
  return (
    <section
      id="quem"
      className="sec band"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="eyebrow">Quem fez</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px auto 0",
              maxWidth: "18ch",
            }}
          >
            Feito por quem
            <br />
            vive de entregar
          </h2>
        </div>

        {/* Author cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {authors.map((author) => (
            <div
              key={author.initials}
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "26px",
                alignItems: "center",
                padding: "22px",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  width: "120px",
                  height: "120px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "linear-gradient(150deg, #FE4101, #7BC93F)",
                  flexShrink: 0,
                  boxShadow: "0 0 0 1px rgba(254,65,1,0.3), 0 0 34px -14px rgba(254,65,1,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={author.photo}
                  alt={author.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Fallback initials shown via CSS if image fails */}
                <span
                  style={{
                    fontFamily: "'Clash Display', system-ui, sans-serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    letterSpacing: "-0.02em",
                    position: "absolute",
                  }}
                  aria-hidden="true"
                >
                  {author.initials}
                </span>
              </div>

              {/* Body */}
              <div>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "'Clash Display', system-ui, sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#F2F5F0",
                    lineHeight: 1.1,
                    marginBottom: "4px",
                  }}
                >
                  {author.name}
                </strong>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.78rem",
                    color: "rgba(242,245,240,0.38)",
                    marginBottom: "12px",
                  }}
                >
                  {author.role}
                </span>
                <p style={{ fontSize: "0.85rem", color: "rgba(242,245,240,0.6)", lineHeight: 1.65, margin: 0 }}>
                  {author.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "'Clash Display', system-ui, sans-serif",
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            fontWeight: 600,
            color: "rgba(242,245,240,0.6)",
            lineHeight: 1.5,
            maxWidth: "32ch",
            margin: "0 auto",
          }}
        >
          A plataforma não nasceu
          <br />
          num laboratório. Nasceu no
          <br />
          <span style={{ color: "#F2F5F0" }}>prazo apertado de projeto real.</span>
        </p>
      </div>
    </section>
  );
}
