"use client";

import { PROPOSAL } from "../data";

const wa = (text: string) => `https://wa.me/${PROPOSAL.energyWhatsapp}?text=${encodeURIComponent(text)}`;

export default function ActionButtons() {
  return (
    <div className="hero-actions no-print">
      <a className="btn" href={wa("Olá, Matheus! Li a proposta da KP e quero seguir. Vamos marcar a imersão?")} target="_blank" rel="noopener noreferrer">
        Aceitar proposta
      </a>
      <a className="btn btn-ghost" href={wa("Olá, Matheus! Li a proposta da KP e tenho uma dúvida antes de seguir:")} target="_blank" rel="noopener noreferrer">
        Tirar uma dúvida antes
      </a>
      <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
        Baixar em PDF
      </button>
    </div>
  );
}
