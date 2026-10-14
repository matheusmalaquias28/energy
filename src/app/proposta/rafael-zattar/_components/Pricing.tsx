"use client";

import { useState } from "react";
import { PIX_OFF, PLANS, PROPOSAL, brl, listPrice, wa } from "../data";

type Billing = "pix" | "parcelado";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("pix");

  return (
    <div>
      <div className="billing" role="radiogroup" aria-label="Forma de pagamento" data-reveal>
        <button type="button" role="radio" aria-checked={billing === "pix"} className={billing === "pix" ? "on" : ""} onClick={() => setBilling("pix")}>
          À vista no Pix <span className="off">−{Math.round(PIX_OFF * 100)}%</span>
        </button>
        <button type="button" role="radio" aria-checked={billing === "parcelado"} className={billing === "parcelado" ? "on" : ""} onClick={() => setBilling("parcelado")}>
          Parcelado
        </button>
      </div>

      <div className="plans">
        {PLANS.map((p, i) => {
          const list = listPrice(p);
          const pix = Math.round(p.price * (1 - PIX_OFF));
          const shown = billing === "pix" ? pix : p.price;
          const saving = list - shown;
          const message =
            `Olá, ${PROPOSAL.author.split(" ")[0]}! Vi o orçamento da Carteira Z e quero seguir com o plano ${p.name} ` +
            `(${billing === "pix" ? `${brl(pix)} à vista no Pix` : `${brl(p.price)} parcelado`}).`;

          return (
            <article key={p.id} className={`plan ${p.recommended ? "rec" : ""}`} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              {p.recommended && <div className="ribbon">Recomendado</div>}
              <div className="plan-head">
                <span className="label">Plano {String(i + 1).padStart(2, "0")}</span>
                <h3>{p.name}</h3>
                <p className="tl">{p.tagline}</p>
              </div>

              <div className="price-box">
                {saving > 0 ? <s className="from">de {brl(list)}</s> : <span className="from">&nbsp;</span>}
                <div className="price">{brl(shown)}</div>
                <div className="price-sub">
                  {billing === "pix" ? "à vista no Pix" : `ou 50% + 50% · até 12× no cartão`}
                </div>
                {saving > 0 && <span className="save">Economia de {brl(saving)}</span>}
              </div>

              <a className={`btn ${p.recommended ? "" : "btn-ghost"}`} href={wa(message)} target="_blank" rel="noopener noreferrer">
                Quero este plano
              </a>

              <ul>
                {p.items.map((it) => (
                  <li key={it}>
                    <Check />
                    {it}
                  </li>
                ))}
              </ul>

              <div className="plan-foot">
                <div>
                  <span className="label">Prazo</span>
                  <b>{p.deadline}</b>
                </div>
                <div>
                  <span className="label">Z Friends</span>
                  <b>{p.friendsNote}</b>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
