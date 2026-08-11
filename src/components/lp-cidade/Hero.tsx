import { DarkGradientBg } from "@/components/ui/elegant-dark-pattern";
import { LpContactButton } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/LpContactButton";
import type { LpCityPage } from "@/data/lp-city-pages";

export function CityHero({ city }: { city: LpCityPage }) {
  return (
    <DarkGradientBg
      as="header"
      className="flex min-h-screen flex-col items-center justify-center overflow-hidden"
      contentClassName="flex w-full flex-col items-center justify-center"
    >
      <h1 className="hero-title">
        <span className="hero-title-line">Criação de Landing Pages</span>
        <span className="hero-title-sub">em {city.cidade}.</span>
      </h1>

      <div
        className="wrap hero-wrap"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            color: "rgba(242,245,240,0.62)",
            lineHeight: 1.65,
            maxWidth: "52ch",
            marginBottom: "40px",
          }}
        >
          {city.heroLead}
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "28px",
          }}
        >
          <LpContactButton
            label="Quero minha Landing Page"
            className="min-w-[270px]"
          />
          <a
            href="#problema"
            className="btn-ghost"
            style={{ padding: "15px 28px", fontSize: "0.95rem" }}
          >
            Como funciona
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: "0.78rem",
            color: "rgba(242,245,240,0.45)",
          }}
        >
          {[
            "Projeto personalizado",
            "Estratégia + design + desenvolvimento",
            "Pronta para receber tráfego",
          ].map((item) => (
            <span
              key={item}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FE4101"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>

    </DarkGradientBg>
  );
}
