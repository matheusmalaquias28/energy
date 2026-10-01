"use client";

import { useState } from "react";
import { ADDON, MONTHLY, PLANS, PROPOSAL, brl, type Plan } from "../data";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Investment() {
  const [planId, setPlanId] = useState<Plan["id"]>("completa");
  const [addon, setAddon] = useState(true);

  const plan = PLANS.find((p) => p.id === planId)!;
  const total = plan.price + (addon ? ADDON.price : 0);
  const cash = Math.round(total * 0.92);

  const message =
    `Olá, ${PROPOSAL.author.split(" ")[0]}! Li a proposta da KP e quero seguir com: ` +
    `${plan.name} (${brl(plan.price)})` +
    (addon ? ` + ${ADDON.name} (${brl(ADDON.price)})` : "") +
    `. Total ${brl(total)}.`;
  const waHref = `https://wa.me/${PROPOSAL.energyWhatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <div className="plans" role="radiogroup" aria-label="Escopo" data-reveal>
        {PLANS.map((p) => (
          <button
            key={p.id}
            type="button"
            role="radio"
            aria-checked={planId === p.id}
            className={`plan ${planId === p.id ? "on" : ""}`}
            onClick={() => setPlanId(p.id)}
          >
            <div className="plan-top">
              {p.recommended ? <span className="chip chip-accent">Recomendado</span> : <span className="chip">Opção 01</span>}
              <span className="radio" aria-hidden />
            </div>
            <h4>{p.name}</h4>
            <p className="tl">{p.tagline}</p>
            <div className="price">{brl(p.price)}</div>
            <div className="price-sub">ou {brl(Math.round(p.price * 0.92))} à vista</div>
            <ul>
              {p.items.map((it) => (
                <li key={it}>
                  <Check />
                  {it}
                </li>
              ))}
            </ul>
            <div className="dur">{"// "}{p.weeks}</div>
          </button>
        ))}
      </div>

      <button
        type="button"
        role="checkbox"
        aria-checked={addon}
        className={`addon ${addon ? "on" : ""}`}
        onClick={() => setAddon((a) => !a)}
      >
        <span className="check" aria-hidden>{addon && <Check />}</span>
        <div>
          <span className="label" style={{ color: "var(--gold)" }}>Opcional</span>
          <h5 style={{ marginTop: 6 }}>{ADDON.name}</h5>
          <p>
            A equipe Energy cadastra os {ADDON.units} imóveis restantes no painel novo: fotos tratadas, textos revisados para o Google,
            endereço no mapa e identificador KP. Prazo {ADDON.weeks}.
          </p>
        </div>
        <div className="p">
          {brl(ADDON.price)}
          <small>{ADDON.units} imóveis restantes</small>
        </div>
      </button>

      <div className="total" data-reveal>
        <div>
          <div className="label">Total do projeto</div>
          <div className="big">{brl(total)}</div>
          <div className="pay">
            <div>
              <span>À vista, 8% off</span>
              <b>{brl(cash)}</b>
            </div>
            <div>
              <span>Em 3 etapas</span>
              <b>3× {brl(Math.round(total / 3))}</b>
            </div>
            <div>
              <span>6× no Pix, sem juros</span>
              <b>6× {brl(Math.round(total / 6))}</b>
            </div>
            <div>
              <span>6× no cartão</span>
              <b>Com juros</b>
            </div>
          </div>
        </div>
        <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
          Aceitar esta opção
        </a>
      </div>

      <div className="monthly" data-reveal>
        <span>
          <b style={{ color: "var(--fg)" }}>{MONTHLY.name}</b>, a partir do lançamento
        </span>
        <span className="mono" style={{ color: "var(--fg)" }}>{brl(MONTHLY.price)}/mês</span>
      </div>
    </div>
  );
}
