"use client";

import { useEffect, useState } from "react";

const QUERY = "consultoria tributária para empresas";

type Result = {
  id: string;
  paid: boolean;
  url: string;
  title: string;
  desc: string;
  cpc: number;
};

const RESULTS: Result[] = [
  {
    id: "a",
    paid: true,
    url: "concorrente-a.com.br",
    title: "Consultoria Tributária | Fale com um Especialista Hoje",
    desc: "Reduza impostos com planejamento tributário. Atendimento para todo o Brasil.",
    cpc: 9.8,
  },
  {
    id: "b",
    paid: true,
    url: "concorrente-b.com.br",
    title: "Planejamento Tributário para PMEs | Orçamento Grátis",
    desc: "Equipe especializada em Lucro Real e Presumido. Solicite contato.",
    cpc: 7.35,
  },
  {
    id: "org",
    paid: false,
    url: "suaempresa.com.br › consultoria-tributaria",
    title: "Consultoria tributária para empresas: como reduzir impostos com segurança",
    desc: "Entenda quando vale revisar o regime tributário, quais créditos sua empresa pode recuperar e como funciona…",
    cpc: 0,
  },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Ordem em que os "cliques" caem nos resultados; só os patrocinados custam.
const CLICK_ORDER = ["a", "org", "b", "org", "a", "b", "org"];
const REDUCED_TICKS = 20;

export function SerpHero() {
  const [chars, setChars] = useState(0);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tick: ReturnType<typeof setInterval> | undefined;
    let c = 0;
    const type = setInterval(
      () => {
        c = reduce ? QUERY.length : c + 1;
        setChars(c);
        if (c < QUERY.length) return;
        clearInterval(type);
        if (reduce) setTicks(REDUCED_TICKS);
        else tick = setInterval(() => setTicks((t) => t + 1), 1100);
      },
      reduce ? 0 : 45,
    );
    return () => {
      clearInterval(type);
      if (tick) clearInterval(tick);
    };
  }, []);

  const clicks: Record<string, number> = { a: 0, b: 0, org: 0 };
  let spent = 0;
  for (let i = 0; i < ticks; i++) {
    const id = CLICK_ORDER[i % CLICK_ORDER.length];
    clicks[id] += 1;
    spent += RESULTS.find((r) => r.id === id)!.cpc;
  }
  const flash = ticks > 0 ? CLICK_ORDER[(ticks - 1) % CLICK_ORDER.length] : null;
  const typed = QUERY.slice(0, chars);

  return (
    <figure className="serp" aria-label="Simulação de uma página de resultados de busca">
      <div className="serp-bar">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="serp-query">
          {typed}
          <span className="serp-caret" aria-hidden />
        </span>
      </div>

      <ol className="serp-results">
        {RESULTS.map((r) => (
          <li
            key={r.id}
            className={`serp-item ${r.paid ? "is-paid" : "is-organic"} ${flash === r.id ? "is-flash" : ""}`}
          >
            <div className="serp-meta">
              {r.paid ? (
                <span className="serp-tag">Patrocinado</span>
              ) : (
                <span className="serp-tag serp-tag--org">Orgânico · posição 1</span>
              )}
              <cite>{r.url}</cite>
            </div>
            <p className="serp-title">{r.title}</p>
            <p className="serp-desc">{r.desc}</p>
            <div className="serp-cost">
              <span>{clicks[r.id]} {clicks[r.id] === 1 ? "clique" : "cliques"}</span>
              <span className="serp-cpc">
                {r.paid ? `${brl(r.cpc)} / clique` : `${brl(0)} / clique`}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <figcaption className="serp-meter">
        <span>Gasto em anúncios desde que você abriu esta página</span>
        <output aria-live="off">{brl(spent)}</output>
      </figcaption>
    </figure>
  );
}
