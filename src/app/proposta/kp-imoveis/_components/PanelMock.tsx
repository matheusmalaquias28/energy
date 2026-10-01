"use client";

import { useMemo, useState } from "react";
import { KpLogo } from "./KpLogo";

// Dados ilustrativos: só para mostrar como o painel vai ler.
function series(days: number, seed: number) {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: days }, (_, i) => {
    const weekend = i % 7 === 5 || i % 7 === 6 ? 1.35 : 1;
    return Math.round((3 + rnd() * 8) * weekend);
  });
}

const TOP = [
  { ref: "#1.354", name: "Cobertura Duplex · 495 Joaquim Lírio", views: 2140, clicks: 162, leads: 31 },
  { ref: "#438", name: "Casa do Pôr do Sol · Ilha do Boi", views: 1985, clicks: 141, leads: 24 },
  { ref: "#1.358", name: "Cyan Ocean Front · Enseada do Suá", views: 1530, clicks: 118, leads: 19 },
  { ref: "#1.082", name: "Casa · Alphaville Jacuhy", views: 1312, clicks: 97, leads: 17 },
  { ref: "#1.350", name: "Edifício Seven · Itapuã", views: 1204, clicks: 88, leads: 12 },
];

const NAV = [
  { label: "Visão geral", on: true },
  { label: "Leads", badge: "6" },
  { label: "Imóveis" },
  { label: "Destaques" },
  { label: "Aprovações", badge: "3" },
  { label: "Filtros" },
  { label: "Equipe" },
];

export default function PanelMock() {
  const [range, setRange] = useState<7 | 30>(30);
  const [hover, setHover] = useState<number | null>(null);
  const data = useMemo(() => series(range, range === 30 ? 42 : 7), [range]);
  const max = Math.max(...data);
  const total = data.reduce((a, b) => a + b, 0);

  const kpis = range === 30
    ? [
        { l: "Visitas", v: "18.240", d: "+12% vs. mês anterior" },
        { l: "Cliques no WhatsApp", v: "1.126", d: "+9%" },
        { l: "Leads", v: String(total), d: "+15%" },
        { l: "Tempo até o 1º contato", v: "4 min", d: "meta: 10 min" },
      ]
    : [
        { l: "Visitas", v: "4.310", d: "+6% vs. semana anterior" },
        { l: "Cliques no WhatsApp", v: "268", d: "+4%" },
        { l: "Leads", v: String(total), d: "+11%" },
        { l: "Tempo até o 1º contato", v: "3 min", d: "meta: 10 min" },
      ];

  return (
    <div className="browser" data-reveal>
      <div className="browser-bar">
        <i /><i /><i />
        <div className="browser-url">kleversonpassos.com/painel</div>
      </div>
      <div className="dash">
        <aside className="dash-side">
          <KpLogo className="logo" />
          {NAV.map((n) => (
            <div key={n.label} className={`dash-nav ${n.on ? "on" : ""}`}>
              {n.label}
              {n.badge && <span className="badge">{n.badge}</span>}
            </div>
          ))}
        </aside>
        <div className="dash-main">
          <div className="dash-top">
            <h4>Visão geral</h4>
            <div className="seg" role="group" aria-label="Período">
              <button type="button" className={range === 7 ? "on" : ""} onClick={() => setRange(7)}>7 dias</button>
              <button type="button" className={range === 30 ? "on" : ""} onClick={() => setRange(30)}>30 dias</button>
            </div>
          </div>

          <div className="kpis">
            {kpis.map((k) => (
              <div key={k.l} className="kpi">
                <div className="label">{k.l}</div>
                <div className="v">{k.v}</div>
                <div className="d">{k.d}</div>
              </div>
            ))}
          </div>

          <div className="chart-box">
            <h5>Leads por dia</h5>
            <div className="bars" onMouseLeave={() => setHover(null)}>
              {data.map((v, i) => (
                <div
                  key={i}
                  className="bar-hit"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  tabIndex={0}
                  aria-label={`Dia ${i + 1}: ${v} leads`}
                >
                  <div className="bar" style={{ height: `${(v / max) * 100}%` }} />
                  {hover === i && (
                    <div className="tip">
                      Dia {i + 1} <span>·</span> {v} leads
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bars-axis">
              <span>Dia 1</span>
              <span>Dia {range}</span>
            </div>
          </div>

          <div className="chart-box">
            <h5>Imóveis mais procurados</h5>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Imóvel</th>
                    <th className="num">Visitas</th>
                    <th className="num">Cliques</th>
                    <th className="num">Leads</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP.map((r) => {
                    const f = range === 30 ? 1 : 0.24;
                    return (
                      <tr key={r.ref}>
                        <td><span className="ref">KP {r.ref}</span>{r.name}</td>
                        <td className="num">{Math.round(r.views * f).toLocaleString("pt-BR")}</td>
                        <td className="num">{Math.round(r.clicks * f).toLocaleString("pt-BR")}</td>
                        <td className="num">{Math.max(1, Math.round(r.leads * f))}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
