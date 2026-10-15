import { resolveCases } from "@/data/local-block";
import type { LpCityPage } from "@/data/lp-city-pages";

const heading = {
  fontFamily: "'Clash Display', system-ui, sans-serif",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: "#F2F5F0",
} as const;

const chip = {
  fontSize: "0.72rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "rgba(242,245,240,0.55)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "999px",
  padding: "6px 12px",
} as const;

/** Bloco de conteúdo próprio da cidade, no visual das landing pages por cidade. */
export function CityLocal({ city }: { city: LpCityPage }) {
  const { local } = city;
  const cases = resolveCases(local.cases);

  return (
    <section id="na-cidade" className="sec" style={{ background: "#000" }}>
      <div className="wrap" style={{ maxWidth: "980px" }}>
        <span className="eyebrow">Energy em {city.cidade}</span>
        <h2
          style={{
            ...heading,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            lineHeight: 1.08,
            margin: "16px 0 32px",
            maxWidth: "24ch",
          }}
        >
          {local.heading}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "68ch" }}>
          {local.paragraphs.map((p) => (
            <p
              key={p}
              style={{ fontSize: "1.02rem", color: "rgba(242,245,240,0.68)", lineHeight: 1.75, margin: 0 }}
            >
              {p}
            </p>
          ))}
        </div>

        <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", listStyle: "none", padding: 0, margin: "32px 0 0" }}>
          {local.places.map((place) => (
            <li key={place} style={chip}>
              {place}
            </li>
          ))}
        </ul>

        {cases.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "12px",
              marginTop: "48px",
            }}
          >
            {cases.map((c) => (
              <div
                key={c.name}
                style={{
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.028)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "rgba(242,245,240,0.45)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Case · {c.city} · {c.year}
                </span>
                <h3 style={{ ...heading, fontSize: "1.3rem", margin: 0 }}>{c.name}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(242,245,240,0.6)", lineHeight: 1.65, margin: 0 }}>
                  {c.summary}
                </p>
                <p style={{ fontSize: "0.8rem", color: "rgba(242,245,240,0.45)", margin: 0 }}>
                  {c.badges.join(" · ")}
                </p>
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#FE4101", fontSize: "0.85rem", fontWeight: 600, marginTop: "auto" }}
                  >
                    Ver o projeto ao vivo ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
