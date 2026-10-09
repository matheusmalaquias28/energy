"use client";

import { useId, useState } from "react";

const MIN = 1000;
const MAX = 50000;
const STEP = 500;

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function AdSpendCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const id = useId();
  const pct = ((monthly - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="calc">
      <label htmlFor={id} className="calc-label">
        Quanto sua empresa investe em anúncios por mês?
      </label>
      <div className="calc-value">{brl(monthly)}</div>
      <input
        id={id}
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={monthly}
        onChange={(e) => setMonthly(Number(e.target.value))}
        className="calc-range"
        style={{ "--fill": `${pct}%` } as React.CSSProperties}
        aria-valuetext={`${brl(monthly)} por mês`}
      />

      <dl className="calc-rows">
        {[12, 24, 36].map((m) => (
          <div key={m} className="calc-row">
            <dt>Em {m} meses</dt>
            <dd>{brl(monthly * m)}</dd>
          </div>
        ))}
        <div className="calc-row calc-row--zero">
          <dt>O que continua gerando leads se você pausar amanhã</dt>
          <dd>{brl(0)}</dd>
        </div>
      </dl>
    </div>
  );
}
