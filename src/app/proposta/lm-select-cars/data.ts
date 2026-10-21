// Tudo que muda de proposta para proposta fica aqui: datas, contatos e valores.

export const PROPOSAL = {
  client: "LM Select Cars",
  issuedAt: "20.10.2026",
  validUntil: "27.10.2026",
  author: "Matheus Malaquias",
  agency: "Energy",
  energyWhatsapp: "5512997430172",
  energyInstagram: "https://instagram.com/energymidia",
  energySite: "https://energymidia.com.br",
  previewUrl: "https://lm-select-cars-tau.vercel.app/",
  previewLabel: "lm-select-cars-tau.vercel.app",
};

export const PRICE = {
  project: 3000,
  installments: 10,
  monthly: 50,
  deadline: "10 dias úteis",
};

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const wa = (text: string) => `https://wa.me/${PROPOSAL.energyWhatsapp}?text=${encodeURIComponent(text)}`;
