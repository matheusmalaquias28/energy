"use client";

import { PROPOSAL } from "../data";

const wa = (text: string) => `https://wa.me/${PROPOSAL.energyWhatsapp}?text=${encodeURIComponent(text)}`;

export default function ActionButtons() {
  return (
    <div className="hero-actions no-print">
      <a
        className="btn"
        href={wa("Olá, Matheus! Li a análise do meu site e estou de acordo com o direcionamento. Pode seguir e me mandar os valores.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        Estou de acordo
      </a>
      <a
        className="btn btn-ghost"
        href={wa("Olá, Matheus! Li a análise do meu site. Antes de seguir, queria ajustar/perguntar o seguinte:")}
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero ajustar algo antes
      </a>
      <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
        Baixar em PDF
      </button>
    </div>
  );
}
