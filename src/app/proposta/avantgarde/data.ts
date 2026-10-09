// Tudo que muda de proposta para proposta fica aqui: datas, contatos e números levantados.

export const PROPOSAL = {
  client: "AvantGarde",
  preparedFor: "Guilherme Lemmi e time AvantGarde",
  issuedAt: "8 de outubro de 2026",
  author: "Matheus Malaquias",
  agency: "Energy",
  energyWhatsapp: "5512997430172",
  energyInstagram: "https://instagram.com/energymidia",
  energySite: "https://energymidia.com.br",
  whatsappMessage: "Olá, eu vi a proposta da AvantGarde e gostaria de saber mais!",
};

export const WA_HREF = `https://wa.me/${PROPOSAL.energyWhatsapp}?text=${encodeURIComponent(PROPOSAL.whatsappMessage)}`;

/** Números do canal, levantados em 8/10/2026 na página "Sobre" do YouTube. */
export const CHANNEL = {
  url: "https://www.youtube.com/@guiavantgarde",
  subs: "733 mil",
  views: "105 mi",
  videos: "1.153",
  since: "abril de 2016",
};

export const SITE = "https://avgd.com.br/AVGD";

export const IMG = {
  logo: `${SITE}/wp-content/uploads/2018/11/avgdlogo2.png`,
  dyno992: `${SITE}/wp-content/uploads/2020/05/992Fogo2.jpg`,
  x6m: `${SITE}/wp-content/uploads/2017/06/X6MSTG2BG.jpg`,
  e63: `${SITE}/wp-content/uploads/2017/05/E63STG1BG.jpg`,
  c63: `${SITE}/wp-content/uploads/2017/05/C63STG2BG.jpg`,
};

export const thumb = (id: string, q: "maxresdefault" | "mqdefault" = "maxresdefault") => `https://i.ytimg.com/vi/${id}/${q}.jpg`;
export const watch = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export type Video = { id: string; title: string; tag: string };

/** Vídeos reais do canal, publicados nos últimos meses. */
export const FAN_VIDEOS: Video[] = [
  { id: "4z7dc-Mjt6g", tag: "Performance", title: "Transformamos a primeira 911 híbrida no carro mais legal do mundo · 992.2 GTS desbloqueada" },
  { id: "6w-hj46vosM", tag: "Garagem do Gui", title: "Vendi a Mercedes C63S!" },
  { id: "PrVoQ2K7S2E", tag: "Avantrip 2", title: "Fui no maior encontro de carros do Japão · Daikoku Futo" },
  { id: "1BoMj9L4XB8", tag: "Eventos", title: "Fui em um evento e encontrei o Horácio Pagani!" },
  { id: "H3Wwefk2RZg", tag: "Talkzam #42", title: "Conhecendo o lado filósofo do gearhead · Clóvis de Barros" },
  { id: "htpUIeyjRpE", tag: "Oficina", title: "Manutenção complicada ou medo exagerado? Audi RS7" },
];

/** Projetos publicados no próprio site da AvantGarde, página Performance. */
export const PROJECTS = [
  { car: "BMW X6M", stage: "Estágio 2", n: "704", unit: "hp", note: "Mais de 120 hp de ganho e 0-100 abaixo de 4 s.", img: IMG.x6m },
  { car: "Mercedes-AMG E63 S", stage: "Estágio 1", n: "≈700", unit: "cv", note: "107 kgfm no V8 4.0 M177.", img: IMG.e63 },
  { car: "Mercedes-AMG C63 S", stage: "Estágio 2+", n: "600", unit: "hp", note: "84 kgfm, escape de titânio e intake de carbono.", img: IMG.c63 },
  { car: "Porsche 992.2 GTS", stage: "Desbloqueada", n: "601", unit: "hp", note: "+60 hp na primeira 911 híbrida. Está no canal, não no site.", img: thumb("4z7dc-Mjt6g") },
];
