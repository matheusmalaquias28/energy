// Tudo que muda de proposta para proposta fica aqui: datas, contatos e valores.

export const PROPOSAL = {
  client: "KP Imóveis",
  preparedFor: "Kleverson Passos e time KP",
  issuedAt: "1 de outubro de 2026",
  validUntil: "16 de outubro de 2026",
  briefingDate: "30 de setembro",
  author: "Matheus Malaquias",
  agency: "Energy",
  energyWhatsapp: "5512997430172",
  energyInstagram: "https://instagram.com/energymidia",
  energySite: "https://energymidia.com.br",
};

export type Plan = {
  id: "essencial" | "completa";
  name: string;
  tagline: string;
  price: number;
  weeks: string;
  recommended?: boolean;
  items: string[];
};

export const PLANS: Plan[] = [
  {
    id: "essencial",
    name: "Site novo",
    tagline: "A vitrine nova, com os leads organizados no painel.",
    price: 9000,
    weeks: "5 semanas",
    items: [
      "Home, listagem, página do imóvel e institucional",
      "Filtros claros, no celular e no computador",
      "Painel próprio para cadastro de imóveis",
      "Identificador único em cada imóvel",
      "Seleção de destaques da home",
      "Lead salvo no painel",
      "SEO técnico e endereços antigos mantidos",
    ],
  },
  {
    id: "completa",
    name: "Plataforma KP",
    tagline: "O site, o painel e a operação comercial num lugar só.",
    price: 12500,
    weeks: "7 semanas",
    recommended: true,
    items: [
      "Tudo do Site novo",
      "Site com 50 imóveis cadastrados pela Energy",
      "Kanban interno de leads do site",
      "Lead enviado para o WhatsApp dos SDRs",
      "Distribuição uniforme de leads entre SDRs",
      "Reatribuição se o lead não for aberto",
      "Gráfico de leads e métricas por imóvel",
      "Mapa real de imóveis, com filtros",
      "Cadastro de proprietário com aprovação",
      "Perfis de usuário e permissões",
      "Páginas de bairro para o Google",
    ],
  },
];

export const ADDON = {
  id: "cadastro",
  name: "Cadastro assistido dos 241 imóveis restantes",
  units: 241,
  price: 3500,
  weeks: "em paralelo, sem somar prazo",
};

export const MONTHLY = {
  name: "Hospedagem, manutenção e suporte",
  price: 590,
};

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
