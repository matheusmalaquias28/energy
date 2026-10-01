"use client";

import { useState } from "react";

const SDRS = ["SDR 01", "SDR 02", "SDR 03"];

// Imóveis reais do site atual; nomes e telefones fictícios, só para a simulação.
const SAMPLE_LEADS = [
  { name: "Helena S.", phone: "(27) 9 9812-••••", ref: "#438", prop: "Casa do Pôr do Sol · Ilha do Boi", origin: "Página do imóvel" },
  { name: "Ricardo M.", phone: "(27) 9 9744-••••", ref: "#1.350", prop: "Edifício Seven · Itapuã", origin: "Botão WhatsApp" },
  { name: "Paulo A.", phone: "(11) 9 8123-••••", ref: "#1.082", prop: "Casa · Alphaville Jacuhy", origin: "Mapa de imóveis" },
  { name: "Marina C.", phone: "(27) 9 9630-••••", ref: "#1.354", prop: "Cobertura Duplex · Praia do Canto", origin: "Página do imóvel" },
  { name: "Eduardo L.", phone: "(31) 9 9271-••••", ref: "#1.358", prop: "Cyan Ocean Front · Enseada do Suá", origin: "Google · busca orgânica" },
  { name: "Cláudia R.", phone: "(27) 9 9905-••••", ref: "#1.405", prop: "Apartamento · Jardim da Penha", origin: "Instagram · link da bio" },
];

type Delivered = { id: number; sdr: number; lead: (typeof SAMPLE_LEADS)[number]; time: string };

export default function LeadSimulator() {
  const [delivered, setDelivered] = useState<Delivered[]>([]);
  const [last, setLast] = useState<number | null>(null);

  const next = delivered.length;
  const nextLead = SAMPLE_LEADS[next % SAMPLE_LEADS.length];

  function send() {
    const sdr = next % SDRS.length; // rodízio uniforme
    const t = new Date();
    t.setHours(21, 12 + next * 3);
    const time = t.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    setDelivered((d) => [...d, { id: next, sdr, lead: nextLead, time }]);
    setLast(sdr);
  }

  function reset() {
    setDelivered([]);
    setLast(null);
  }

  const counts = SDRS.map((_, i) => delivered.filter((d) => d.sdr === i).length);

  return (
    <div className="sim" data-reveal>
      <div className="sim-head">
        <div>
          <div className="label">Simulação · como vai funcionar</div>
          <div style={{ marginTop: 6, fontSize: 15 }}>Envie leads de teste e veja o rodízio entre os SDRs.</div>
        </div>
        <span className="chip">Rodízio uniforme</span>
      </div>

      <div className="sim-grid">
        <div className="sim-form">
          <div className="label">Formulário no site</div>
          <div className="sim-prop">
            <div className="thumb" />
            <div className="t">
              <span className="mono gold" style={{ fontSize: 11 }}>KP {nextLead.ref}</span>
              <br />
              {nextLead.prop}
            </div>
          </div>
          <div className="sim-field">{nextLead.name}</div>
          <div className="sim-field">{nextLead.phone}</div>
          <button type="button" className="btn" onClick={send} style={{ width: "100%" }}>
            Enviar lead de teste
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={reset} disabled={!delivered.length} style={{ width: "100%", opacity: delivered.length ? 1 : 0.4 }}>
            Zerar simulação
          </button>
          <p className="dim" style={{ margin: 0, fontSize: 12.5 }}>
            Nomes e telefones fictícios. Imóveis do site atual.
          </p>
        </div>

        <div className="sim-sdrs" aria-live="polite">
          {SDRS.map((name, i) => {
            const msgs = delivered.filter((d) => d.sdr === i).slice(-2).reverse();
            return (
              <div key={name} className={`sdr ${last === i ? "hit" : ""}`}>
                <div className="sdr-top">
                  <div className="sdr-name">
                    <span className="sdr-avatar">{name.slice(-2)}</span>
                    WhatsApp {name}
                  </div>
                  <span className="sdr-count">{counts[i]} leads</span>
                </div>
                {msgs.length === 0 && <div className="sdr-empty">Aguardando lead</div>}
                {msgs.map((m) => (
                  <div key={m.id} className="wa-msg">
                    <b>Novo lead · KP Imóveis</b>
                    <br />
                    Nome: {m.lead.name}
                    <br />
                    WhatsApp: {m.lead.phone}
                    <br />
                    Imóvel: {m.lead.ref} · {m.lead.prop}
                    <br />
                    Origem: {m.lead.origin}
                    <span className="wa-btn">Abrir conversa com {m.lead.name.split(" ")[0]}</span>
                    <time>{m.time}</time>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sim-foot">
        <span>
          Total no painel: <b style={{ color: "var(--fg)" }}>{delivered.length}</b> leads salvos
        </span>
        <span>Próximo lead vai para: <b style={{ color: "var(--fg)" }}>{SDRS[next % SDRS.length]}</b></span>
      </div>
    </div>
  );
}
