// Tudo que muda de proposta para proposta fica aqui: datas, contatos e valores.

export const PROPOSAL = {
  client: "Carteira Z",
  preparedFor: "Rafael Zattar",
  issuedAt: "14 de outubro de 2026",
  validUntil: "21 de outubro de 2026",
  author: "Matheus Malaquias",
  agency: "Energy",
  energyWhatsapp: "5512997430172",
  energyInstagram: "https://instagram.com/energymidia",
  energySite: "https://energymidia.com.br",
  homeUrl: "https://rafael-zattar.vercel.app/",
};

/** Desconto extra para pagamento à vista no Pix, sobre o valor do pacote. */
export const PIX_OFF = 0.05;

/** Preço avulso de cada peça. A soma é o "de" riscado nos pacotes. */
export const PIECES = {
  home: { name: "Home Carteira Z", price: 997 },
  carteira: { name: "LP Carteira Z com VSL", price: 1100 },
  friends: { name: "LP Z Friends", price: 800 },
};

export type Plan = {
  id: "home" | "carteira" | "ecossistema";
  name: string;
  tagline: string;
  pieces: (keyof typeof PIECES)[];
  price: number;
  deadline: string;
  recommended?: boolean;
  items: string[];
  friendsNote: string;
};

export const PLANS: Plan[] = [
  {
    id: "home",
    name: "Home",
    tagline: "A página que você já viu, com os seus ajustes, no seu domínio.",
    pieces: ["home"],
    price: 997,
    deadline: "2 dias úteis",
    items: [
      "Home com direcionamento e autoridade",
      "Ajustes que você pediu, já aplicados",
      "Publicação no domínio da Carteira Z",
      "Pixel da Meta e Google Analytics",
      "SEO técnico e velocidade no celular",
    ],
    friendsNote: "Z Friends segue direto para a Hotmart",
  },
  {
    id: "carteira",
    name: "Home + Carteira Z",
    tagline: "A Home direciona, a página da Carteira Z vende.",
    pieces: ["home", "carteira"],
    price: 1800,
    deadline: "12 dias úteis",
    recommended: true,
    items: [
      "Tudo do plano Home",
      "LP de vendas da Carteira Z com VSL",
      "Botão de compra liberado no tempo do vídeo",
      "Prova: resultados das carteiras, imprensa, depoimentos",
      "Oferta, garantia e FAQ de objeções",
      "Checkout integrado, com UTMs preservadas",
    ],
    friendsNote: "Z Friends segue direto para a Hotmart",
  },
  {
    id: "ecossistema",
    name: "Ecossistema Z",
    tagline: "Os dois produtos com página própria, no mesmo padrão.",
    pieces: ["home", "carteira", "friends"],
    price: 2500,
    deadline: "15 dias úteis",
    items: [
      "Tudo do plano Home + Carteira Z",
      "LP enxuta do Z Friends, em uma rolagem",
      "Bônus do Grupo de Milhas em destaque",
      "Pixel na página antes da Hotmart",
    ],
    friendsNote: "Z Friends ganha LP própria antes da Hotmart",
  },
];

export const listPrice = (p: Plan) => p.pieces.reduce((s, k) => s + PIECES[k].price, 0);

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const wa = (text: string) => `https://wa.me/${PROPOSAL.energyWhatsapp}?text=${encodeURIComponent(text)}`;
