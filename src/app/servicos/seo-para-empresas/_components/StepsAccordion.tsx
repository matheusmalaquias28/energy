"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type Step = {
  when: string;
  title: string;
  desc: string;
  /** Intervalo de meses destacado no gráfico. */
  range: [number, number];
};

const STEPS: Step[] = [
  {
    when: "Mês 1",
    title: "Diagnóstico e base técnica",
    desc: "Auditoria técnica, pesquisa de palavras-chave e correção do que impede o site de ser indexado e bem avaliado pelo Google.",
    range: [0, 1],
  },
  {
    when: "Meses 2 e 3",
    title: "Páginas com intenção comercial",
    desc: "Criação e otimização das páginas de serviço que respondem às buscas de quem já está pronto para contratar.",
    range: [1, 3],
  },
  {
    when: "Meses 4 a 6",
    title: "Primeiras posições",
    desc: "O tráfego orgânico começa a crescer de forma consistente. Ajustamos conteúdo e prioridades com base nos dados reais.",
    range: [3, 6],
  },
  {
    when: "A partir do 6º mês",
    title: "Efeito acumulado",
    desc: "Cada página nova soma ao que já está posicionado. O custo por lead cai à medida que o orgânico assume parte da demanda.",
    range: [6, 12],
  },
];

// Curva ilustrativa de tráfego orgânico, mês 0 a 12.
const CURVE = [3, 4, 6, 9, 14, 21, 30, 41, 53, 65, 78, 91, 104];
const W = 520;
const H = 300;
const PAD = { l: 20, r: 20, t: 28, b: 40 };
const x = (m: number) => PAD.l + (m / 12) * (W - PAD.l - PAD.r);
const y = (v: number) => H - PAD.b - (v / 110) * (H - PAD.t - PAD.b);

function smoothPath(points: [number, number][]) {
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

const POINTS = CURVE.map((v, m) => [x(m), y(v)] as [number, number]);
const LINE = smoothPath(POINTS);
const AREA = `${LINE} L ${x(12)} ${H - PAD.b} L ${x(0)} ${H - PAD.b} Z`;

export function StepsAccordion({ children }: { children?: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const [from, to] = STEPS[active].range;

  return (
    <div className="steps">
      <div className="steps-list">
        {STEPS.map((s, i) => {
          const open = i === active;
          return (
            <div key={s.when} className={`step ${open ? "is-open" : ""}`}>
              <h3>
                <button
                  type="button"
                  id={`${base}-b${i}`}
                  aria-expanded={open}
                  aria-controls={`${base}-p${i}`}
                  onClick={() => setActive(i)}
                  className="step-btn"
                >
                  <span className="step-when">{s.when}</span>
                  <span className="sr-only">: </span>
                  <span className="step-title">{s.title}</span>
                  <ChevronDown className="step-chev" size={18} aria-hidden />
                </button>
              </h3>
              <div
                id={`${base}-p${i}`}
                role="region"
                aria-labelledby={`${base}-b${i}`}
                className="step-panel"
              >
                <div>
                  <p>{s.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
        {children}
      </div>

      <figure className="steps-chart">
        <figcaption className="steps-chart-head">
          <span>Tráfego orgânico</span>
          <strong>{STEPS[active].when}</strong>
        </figcaption>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Curva ilustrativa de crescimento do tráfego orgânico ao longo de 12 meses">
          <defs>
            <linearGradient id={`${base}-fill`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#FE4101" stopOpacity="0.22" />
              <stop offset="1" stopColor="#FE4101" stopOpacity="0" />
            </linearGradient>
            <clipPath id={`${base}-clip`}>
              <rect
                className="steps-clip"
                x={x(from)}
                y={0}
                width={x(to) - x(from)}
                height={H}
              />
            </clipPath>
          </defs>

          {[0, 3, 6, 9, 12].map((m) => (
            <g key={m}>
              <line x1={x(m)} x2={x(m)} y1={PAD.t} y2={H - PAD.b} className="steps-grid" />
              <text x={x(m)} y={H - 14} textAnchor="middle" className="steps-axis">
                {m === 0 ? "Início" : `Mês ${m}`}
              </text>
            </g>
          ))}
          <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b} className="steps-base" />

          <rect
            className="steps-band"
            x={x(from)}
            y={PAD.t}
            width={x(to) - x(from)}
            height={H - PAD.t - PAD.b}
            rx={6}
          />
          <path d={AREA} className="steps-area-muted" />
          <path d={LINE} className="steps-line-muted" />
          <g clipPath={`url(#${base}-clip)`}>
            <path d={AREA} fill={`url(#${base}-fill)`} />
            <path d={LINE} className="steps-line" />
          </g>
          <circle cx={x(to)} cy={y(CURVE[to])} r={5} className="steps-dot" />
        </svg>
        <p className="steps-chart-note">
          Curva ilustrativa. O ritmo real depende do setor e do ponto de partida do site.
        </p>
      </figure>
    </div>
  );
}
