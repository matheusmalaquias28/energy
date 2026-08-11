"use client";
import { useState } from "react";
import type { LpCityPage } from "@/data/lp-city-pages";

export function CityFaq({ city }: { city: LpCityPage }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="sec" style={{ background: "#000" }}>
      <div className="wrap" style={{ maxWidth: "760px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2
            style={{
              fontFamily: "'Clash Display', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#F2F5F0",
              margin: "16px auto 0",
              maxWidth: "20ch",
            }}
          >
            Perguntas sobre landing pages em {city.cidade}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {city.faq.map((item, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.028)",
                transition: "border-color 0.2s",
                borderColor:
                  open === i
                    ? "rgba(254,65,1,0.25)"
                    : "rgba(255,255,255,0.09)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Clash Display', system-ui, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#F2F5F0",
                    lineHeight: 1.3,
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    color:
                      open === i ? "#FE4101" : "rgba(242,245,240,0.5)",
                    transition: "transform 0.2s, color 0.2s",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div style={{ padding: "0 24px 20px" }}>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(242,245,240,0.6)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
