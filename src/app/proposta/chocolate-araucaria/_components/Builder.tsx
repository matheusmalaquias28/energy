"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, Lock, Plus } from "lucide-react";
import { ALL_MODULES, CORE, DISCOUNTS, FISCAL_ID, GROUPS, MONTHLY, brl, wa, type Module } from "../data";

const byId = new Map(ALL_MODULES.map((m) => [m.id, m]));

/** Marca o módulo e tudo de que ele precisa. */
function withRequirements(id: string, set: Set<string>) {
  set.add(id);
  byId.get(id)?.requires?.forEach((r) => !set.has(r) && withRequirements(r, set));
}

/** Desmarca o módulo e tudo que depende dele. */
function withoutDependents(id: string, set: Set<string>) {
  set.delete(id);
  ALL_MODULES.forEach((m) => m.requires?.includes(id) && set.has(m.id) && withoutDependents(m.id, set));
}

const weeksLabel = (w: number) =>
  w === 0.5 ? "½ semana" : `${w.toLocaleString("pt-BR")} ${w === 1 ? "semana" : "semanas"}`;
const monthsLabel = (w: number) => {
  const m = Math.max(0.5, Math.round((w / 4.33) * 2) / 2);
  return `≈ ${m.toLocaleString("pt-BR")} ${m === 1 ? "mês" : "meses"}`;
};

export default function Builder() {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  // A seleção fica no link, para o cliente poder mandar a montagem dele para outra pessoa.
  useEffect(() => {
    const ids = new URLSearchParams(window.location.search).get("m")?.split(",") ?? [];
    const next = new Set<string>();
    ids.filter((id) => byId.has(id)).forEach((id) => withRequirements(id, next));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leitura única do link ao abrir
    if (next.size) setSelected(next);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (selected.size) url.searchParams.set("m", ALL_MODULES.filter((m) => selected.has(m.id)).map((m) => m.id).join(","));
    else url.searchParams.delete("m");
    window.history.replaceState(null, "", url);
  }, [selected]);

  const toggle = (id: string, on?: boolean) =>
    setSelected((prev) => {
      const next = new Set(prev);
      const turnOn = on ?? !prev.has(id);
      if (turnOn) withRequirements(id, next);
      else withoutDependents(id, next);
      return next;
    });

  const chosen = useMemo(() => ALL_MODULES.filter((m) => selected.has(m.id)), [selected]);
  const fiscalOn = selected.has(FISCAL_ID);

  const subtotal = CORE.price + chosen.reduce((s, m) => s + m.price, 0);
  const pct = DISCOUNTS.find((d) => chosen.length >= d.min)?.pct ?? 0;
  const discount = Math.round((subtotal * pct) / 100);
  const total = subtotal - discount;
  const weeks = CORE.weeks + chosen.reduce((s, m) => s + m.weeks, 0);
  const nextTier = [...DISCOUNTS].reverse().find((d) => chosen.length < d.min);

  const waText = [
    "Olá, Matheus! Vi a proposta do novo sistema da Chocolate Araucária. Montei assim:",
    "",
    `• ${CORE.name}`,
    ...chosen.map((m) => `• ${m.name}`),
    "",
    `Emissão de nota fiscal: ${fiscalOn ? "com" : "sem"}`,
    `Total: ${brl(total)}${pct ? ` (com ${pct}% de desconto)` : ""} · ${weeksLabel(weeks)}`,
  ].join("\n");

  return (
    <div className="builder">
      {/* Seletor com/sem nota fiscal */}
      <div className="nf" data-reveal>
        <div>
          <div className="eyebrow">Emissão de nota fiscal pelo sistema</div>
          <p>Com a opção ligada, o sistema emite a NF-e direto do pedido. Sem ela, a nota continua sendo emitida por fora.</p>
        </div>
        <div className="seg" role="radiogroup" aria-label="Emissão de nota fiscal pelo sistema">
          <button type="button" role="radio" aria-checked={!fiscalOn} className={!fiscalOn ? "on" : ""} onClick={() => toggle(FISCAL_ID, false)}>
            Sem nota fiscal
          </button>
          <button type="button" role="radio" aria-checked={fiscalOn} className={fiscalOn ? "on" : ""} onClick={() => toggle(FISCAL_ID, true)}>
            Com nota fiscal <span>+{brl(byId.get(FISCAL_ID)!.price)}</span>
          </button>
        </div>
      </div>

      {/* Núcleo */}
      <div className="group" data-reveal>
        <div className="group-head">
          <h3>Base</h3>
          <span className="eyebrow">Obrigatório</span>
        </div>
        <ul className="mods">
          <ModuleCard m={CORE} on locked />
        </ul>
      </div>

      {GROUPS.map((g) => (
        <div className="group" key={g.id} data-reveal>
          <div className="group-head">
            <h3>{g.title}</h3>
            <span className="eyebrow">
              {g.modules.filter((m) => selected.has(m.id)).length} de {g.modules.length}
            </span>
          </div>
          <ul className="mods">
            {g.modules.map((m) => (
              <ModuleCard key={m.id} m={m} on={selected.has(m.id)} onToggle={() => toggle(m.id)} />
            ))}
          </ul>
        </div>
      ))}

      {/* Resumo */}
      <div className="summary" id="resumo" data-reveal>
        <div className="sum-list">
          <div className="eyebrow">Sua montagem</div>
          <ul>
            <li>
              <span>{CORE.name}</span>
              <b>{brl(CORE.price)}</b>
            </li>
            {chosen.map((m) => (
              <li key={m.id}>
                <span>{m.name}</span>
                <b>{brl(m.price)}</b>
              </li>
            ))}
          </ul>
          {chosen.length === 0 && <p className="fine">Marque os módulos acima para somar ao núcleo.</p>}
        </div>

        <div className="sum-total">
          {pct > 0 && (
            <div className="row">
              <span>Subtotal</span>
              <s>{brl(subtotal)}</s>
            </div>
          )}
          {pct > 0 && (
            <div className="row">
              <span>Desconto de {pct}% ({chosen.length} módulos)</span>
              <b>− {brl(discount)}</b>
            </div>
          )}
          <div className="eyebrow">Investimento</div>
          <div className="price">{brl(total)}</div>
          <div className="row">
            <span>Prazo estimado</span>
            <b>
              {weeksLabel(weeks)} · {monthsLabel(weeks)}
            </b>
          </div>
          <div className="row">
            <span>Nota fiscal pelo sistema</span>
            <b>{fiscalOn ? "Com emissão" : "Sem emissão"}</b>
          </div>
          {nextTier && (
            <p className="tier">
              Marcando {nextTier.min - chosen.length} {nextTier.min - chosen.length === 1 ? "módulo" : "módulos"} a mais, o desconto vai para{" "}
              {nextTier.pct}%.
            </p>
          )}
          <div className="pay">
            <div>
              <b>20% de entrada</b>
              <span>{brl(Math.round(total * 0.2))} para começar</span>
            </div>
            <div>
              <b>Restante: {brl(total - Math.round(total * 0.2))}</b>
              <span>pago por entrega de cada módulo ou parcelado no cartão ou boleto</span>
            </div>
          </div>
          <p className="fine">
            Mais o custo mensal de hospedagem, ferramentas e suporte, definido depois de fechar os módulos. Nunca passa de{" "}
            {brl(MONTHLY.cap)}/mês.
          </p>
          <a className="btn" href={wa(waText)} target="_blank" rel="noopener noreferrer">
            Aprovar esta montagem
          </a>
        </div>
      </div>

      {/* Barra fixa enquanto o cliente monta */}
      <div className="bar" aria-live="polite">
        <div className="bar-info">
          <span className="eyebrow">{chosen.length + 1} {chosen.length ? "módulos" : "módulo"}</span>
          <b>{brl(total)}</b>
          <span className="bar-time">{weeksLabel(weeks)}</span>
        </div>
        <div className="bar-nf">
          <span className="eyebrow">NF</span>
          <button
            type="button"
            role="switch"
            aria-checked={fiscalOn}
            aria-label="Emissão de nota fiscal pelo sistema"
            className={`switch ${fiscalOn ? "on" : ""}`}
            onClick={() => toggle(FISCAL_ID)}
          >
            <span />
          </button>
        </div>
        <a className="btn btn-sm" href="#resumo">
          Ver resumo
        </a>
      </div>
    </div>
  );
}

function ModuleCard({ m, on, locked, onToggle }: { m: Module; on: boolean; locked?: boolean; onToggle?: () => void }) {
  const reqNames = m.requires?.map((r) => byId.get(r)?.name).filter(Boolean);
  return (
    <li className={`mod ${on ? "is-on" : ""} ${locked ? "is-locked" : ""}`}>
      <label className="mod-main">
        <input type="checkbox" checked={on} disabled={locked} onChange={onToggle} />
        <span className="box" aria-hidden>
          {locked ? <Lock size={13} /> : on ? <Check size={14} strokeWidth={2.5} /> : <Plus size={14} />}
        </span>
        <span className="mod-body">
          <span className="mod-title">
            {m.name}
            {m.badge && <em className={`badge ${m.badge === "a confirmar" ? "warn" : ""}`}>{m.badge}</em>}
          </span>
          <span className="mod-sum">{m.summary}</span>
          {m.note && <span className="mod-note">{m.note}</span>}
          {reqNames?.length ? <span className="mod-note">Inclui junto: {reqNames.join(", ")}</span> : null}
        </span>
        <span className="mod-price">
          <b>{brl(m.price)}</b>
          <span>{weeksLabel(m.weeks)}</span>
        </span>
      </label>
      <details>
        <summary>
          O que inclui <ChevronDown size={14} />
        </summary>
        <ul>
          {m.includes.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </details>
    </li>
  );
}
