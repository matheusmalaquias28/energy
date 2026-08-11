import { LpContactButton } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/LpContactButton";
import type { LpCityPage } from "@/data/lp-city-pages";

export function CityCtaFinal({ city }: { city: LpCityPage }) {
  return (
    <section
      id="cta"
      className="sec"
      style={{ background: "#000", textAlign: "center" }}
    >
      <div className="wrap" style={{ maxWidth: "640px" }}>
        <span className="eyebrow">Próximo passo</span>
        <h2
          style={{
            fontFamily: "'Clash Display', system-ui, sans-serif",
            fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.06,
            color: "#F2F5F0",
            margin: "16px auto 24px",
            maxWidth: "24ch",
          }}
        >
          Você já está pagando pelo tráfego em {city.cidade}.{" "}
          <em style={{ color: "#FE4101", fontStyle: "normal" }}>
            Faça cada clique valer mais.
          </em>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(242,245,240,0.55)",
            lineHeight: 1.7,
            maxWidth: "48ch",
            margin: "0 auto 40px",
          }}
        >
          Sua próxima campanha merece uma página construída para transformar
          atenção em oportunidade.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <LpContactButton
            label={`Quero minha Landing Page em ${city.cidade}`}
            className="min-w-[270px]"
          />
        </div>

        <p style={{ fontSize: "0.78rem", color: "rgba(242,245,240,0.35)" }}>
          Solicite um orçamento sem compromisso.
        </p>
      </div>
    </section>
  );
}
