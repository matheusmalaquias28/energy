// Tudo que muda nesta proposta fica aqui: datas, contatos, módulos, preços e prazos.

export const PROPOSAL = {
  client: "Chocolate Araucária",
  issuedAt: "11.11.2026",
  validUntil: "25.11.2026",
  author: "Matheus Malaquias",
  agency: "Energy",
  energyWhatsapp: "5512997430172",
  energyInstagram: "https://instagram.com/energymidia",
  energySite: "https://energymidia.com.br",
};

/** Custo mensal: faixa estimada; o valor exato depende dos módulos escolhidos. */
export const MONTHLY = {
  min: 500,
  max: 1800,
  items: [
    "Hospedagem em nuvem com backup diário",
    "Ferramentas que o sistema usa (API fiscal, e-mails e afins)",
    "Suporte direto comigo",
    "Atualizações de segurança e correções",
  ],
};

/** Desconto progressivo pela quantidade de módulos opcionais marcados. */
export const DISCOUNTS = [
  { min: 8, pct: 10 },
  { min: 4, pct: 5 },
];

export type Module = {
  id: string;
  name: string;
  price: number;
  weeks: number;
  summary: string;
  includes: string[];
  /** Módulos que entram junto quando este é marcado. */
  requires?: string[];
  badge?: "recomendado" | "a confirmar";
  note?: string;
};

export type Group = { id: string; title: string; modules: Module[] };

export const CORE: Module = {
  id: "nucleo",
  name: "Núcleo do sistema",
  price: 20000,
  weeks: 5,
  summary: "A base que substitui o sistema atual no dia a dia: acesso, cadastros, pedidos e estoque.",
  includes: [
    "Login seguro, perfis e permissões por tela (hoje são 61 perfis)",
    "Várias empresas e lojas num sistema só, sem cópias do sistema",
    "Registro de quem fez o quê (auditoria)",
    "Cadastros de produtos, matérias-primas, clientes, fornecedores e transportadoras",
    "Cadastros fiscais: NCM, CFOP, situação tributária, cidades IBGE e códigos EAN/DUN",
    "Pedidos B2B com o fluxo de etapas: comercial, crédito, produção, expedição, faturamento e entrega",
    "Tipos de pedido: normal, amostra, bonificado, troca, marca própria e abastecimento das lojas",
    "Ruptura, expedição, romaneio e canhotos",
    "Estoque de produto acabado e matéria-prima, com lote, validade e armazéns",
    "Rastreabilidade do lote até o cliente, para recall",
    "Notificações por e-mail nos pontos-chave do fluxo",
    "Migração dos dados atuais destes módulos e treinamento da equipe",
  ],
};

/** O módulo fiscal é ligado e desligado pelo seletor "com/sem emissão de nota fiscal". */
export const FISCAL_ID = "fiscal";

export const GROUPS: Group[] = [
  {
    id: "fabrica",
    title: "Operação da fábrica",
    modules: [
      {
        id: "ficha",
        name: "Ficha técnica e receitas",
        price: 3000,
        weeks: 0.5,
        badge: "recomendado",
        summary: "Composição, informação nutricional e validade de cada produto.",
        includes: [
          "Ficha técnica completa do produto",
          "Composição de ingredientes e de embalagem",
          "Informação nutricional e validade",
          "Receitas com busca por ingrediente",
          "Fotos e relatório de códigos de barras",
        ],
      },
      {
        id: "producao",
        name: "Produção",
        price: 6500,
        weeks: 1.5,
        badge: "recomendado",
        requires: ["ficha"],
        summary: "Ordens de produção, programação e coberturas, ligadas às receitas e ao estoque.",
        includes: [
          "Ordens de produção (OP) e de transformação (OT)",
          "Reserva e separação de matéria-prima",
          "Programação semanal, diária e em quadro, gerando a lista de compras",
          "Coberturas: tanques, conchas e bateladas",
          "Entrada de produto acabado e etiquetas",
          "Custo detalhado por produto",
        ],
      },
      {
        id: "compras",
        name: "Compras",
        price: 4500,
        weeks: 1,
        badge: "recomendado",
        summary: "Da solicitação ao recebimento, com a nota do fornecedor importada pelo XML.",
        includes: [
          "Solicitação de compra e tomada de preços",
          "Pedido de compra, alteração e cancelamento",
          "Recebimento com lote e validade",
          "Importação do XML da nota de entrada, vinculada ao pedido",
          "Pendências por fornecedor e histórico de preços",
        ],
      },
      {
        id: "tabelas",
        name: "Tabelas de preço",
        price: 2000,
        weeks: 0.5,
        badge: "recomendado",
        summary: "As tabelas de venda da empresa, com ICMS e ST por estado.",
        includes: [
          "Tabelas de consumidor, atacado, funcionários, sazonais (Natal, Páscoa) e outras",
          "ICMS e IVA-ST por estado",
          "Gerar, reajustar e aplicar tabelas por categoria",
        ],
      },
    ],
  },
  {
    id: "comercial",
    title: "Comercial",
    modules: [
      {
        id: "crm",
        name: "CRM",
        price: 2000,
        weeks: 0.5,
        summary: "Funil de vendas simples, em quadro, recebendo leads automaticamente.",
        includes: [
          "Funil em quadro (kanban) com as etapas da venda",
          "Leads chegando por webhook (site, formulários, outras ferramentas)",
          "Carteira de clientes por vendedor",
          "Histórico e anotações por cliente",
        ],
      },
      {
        id: "redes",
        name: "Redes de varejo",
        price: 2500,
        weeks: 0.5,
        summary: "Contratos e verbas com as redes de supermercado.",
        includes: [
          "Contratos com as redes",
          "Verbas contratuais e avulsas, débitos e notas",
          "Posição e extrato de cada contrato",
        ],
      },
      {
        id: "portal",
        name: "Portal B2B do cliente",
        price: 3500,
        weeks: 0.5,
        requires: ["tabelas"],
        summary: "O cliente atacado faz o pedido sozinho, com a tabela de preço dele.",
        includes: [
          "Acesso do cliente com login próprio",
          "Catálogo com a tabela de preço daquele cliente",
          "Pedido entra direto no fluxo do sistema",
          "Meus pedidos e conta-corrente",
        ],
      },
      {
        id: "sac",
        name: "SAC e ocorrências",
        price: 1000,
        weeks: 0.5,
        summary: "Chamados de clientes organizados por área, com busca por lote.",
        includes: [
          "Chamados por área, com respostas padrão",
          "Busca do lote do produto reclamado",
          "Reabertura e encerramento",
        ],
      },
    ],
  },
  {
    id: "financeiro",
    title: "Financeiro e fiscal",
    modules: [
      {
        id: "financeiro",
        name: "Financeiro",
        price: 6500,
        weeks: 1,
        summary: "Contas a pagar e a receber, caixa e fluxo de caixa.",
        includes: [
          "Contas a pagar e a receber, baixa em lote e estorno",
          "Liberação de pagamentos",
          "Cobrança bancária, acordos e inadimplentes",
          "Contas bancárias, caixa e saldos",
          "Fluxo de caixa e relatórios mensais e anuais",
        ],
      },
      {
        id: FISCAL_ID,
        name: "Faturamento e emissão de nota fiscal",
        price: 5500,
        weeks: 1,
        summary: "O sistema emite a NF-e direto do pedido, sem digitar em outro lugar.",
        includes: [
          "Emissão de NF-e a partir do pedido, via API fiscal homologada",
          "DANFE em PDF e XML enviados ao cliente por e-mail",
          "Cancelamento e carta de correção",
          "Comissões de vendedores: cálculo, fechamento e extrato",
        ],
        note: "Usa uma API fiscal (Focus NFe, Nuvem Fiscal ou similar), que entra no custo mensal.",
      },
      {
        id: "protheus",
        name: "Integração com o Protheus",
        price: 4000,
        weeks: 0.5,
        badge: "a confirmar",
        summary: "Clientes, pedidos, notas e títulos sincronizados com o Protheus.",
        includes: ["Clientes e cidades", "Pedidos e notas", "Títulos financeiros"],
        note: "Só faz sentido se a empresa continuar usando o Protheus.",
      },
    ],
  },
  {
    id: "lojas",
    title: "Lojas físicas",
    modules: [
      {
        id: "retaguarda",
        name: "Retaguarda das lojas",
        price: 3500,
        weeks: 0.5,
        badge: "a confirmar",
        summary: "Preços, caixa e inventário de cada loja, no mesmo sistema da fábrica.",
        includes: [
          "Produtos e preços por loja",
          "Movimento e fechamento de caixa",
          "Venda a funcionários com desconto em folha",
          "Inventário com relatório de diferenças",
          "Análise e projeção de vendas por loja",
        ],
        note: "O sistema antigo tinha 6 lojas cadastradas. Hoje são cerca de 2, a confirmar.",
      },
      {
        id: "pdv",
        name: "PDV com NFC-e",
        price: 2500,
        weeks: 0.5,
        requires: ["retaguarda"],
        summary: "Troca do PDV com ECF, que foi extinto, por um PDV atual com NFC-e.",
        includes: [
          "Integração com um PDV de mercado já homologado",
          "Produtos e preços enviados do sistema para o caixa",
          "Vendas voltando para o sistema automaticamente",
        ],
      },
      {
        id: "chococard",
        name: "ChocoCard",
        price: 2000,
        weeks: 0.5,
        requires: ["retaguarda"],
        summary: "O programa de fidelidade, com pontos e resgates.",
        includes: [
          "Cadastro do cliente pelo CPF",
          "Crédito e débito de pontos nas compras",
          "Resgate e consulta de saldo",
        ],
      },
    ],
  },
  {
    id: "pessoas",
    title: "Pessoas e administração",
    modules: [
      {
        id: "rh",
        name: "RH",
        price: 2000,
        weeks: 0.5,
        summary: "Cadastro de funcionários e integração com o ponto eletrônico.",
        includes: [
          "Ficha completa do funcionário e cargos",
          "Integração com sistema de ponto (Pontomais, Tangerino ou similar)",
          "Vale-transporte e banco de currículos",
        ],
      },
      {
        id: "qualidade",
        name: "Documentos e qualidade",
        price: 1500,
        weeks: 0.5,
        summary: "POPs, documentos e termos, com controle de leitura.",
        includes: [
          "Procedimentos operacionais (POPs)",
          "Documentos por área: Anvisa, contratos, formulários",
          "Termos com confirmação de leitura por perfil",
        ],
      },
      {
        id: "administrativo",
        name: "Administrativo",
        price: 3000,
        weeks: 0.5,
        summary: "As rotinas de apoio que hoje estão espalhadas pelo sistema.",
        includes: [
          "Ativo fixo: cadastro, transferência e baixa",
          "Solicitações de serviço e requisições internas",
          "Ordens de coleta",
          "Comércio exterior",
          "Arquivos de arte final para gráficas",
        ],
      },
    ],
  },
  {
    id: "gestao",
    title: "Gestão e canais",
    modules: [
      {
        id: "painel",
        name: "Painel e alertas",
        price: 2500,
        weeks: 0.5,
        summary: "Os números do dia numa tela só e avisos automáticos. Substitui o ChocoAlerta.",
        includes: [
          "Painel com vendas, produção e faturamento do dia",
          "Vendas em unidades e em kg",
          "Alertas de pedidos atrasados e notas faltando",
          "Avisos no navegador e no celular, sem instalar programa",
        ],
      },
      {
        id: "loja",
        name: "Loja virtual",
        price: 3000,
        weeks: 0.5,
        summary: "Loja online em plataforma pronta, integrada ao estoque e aos pedidos.",
        includes: [
          "Loja em Shopify ou Nuvemshop",
          "Estoque e preços vindos do sistema",
          "Pedidos da loja entrando no sistema",
        ],
      },
    ],
  },
];

export const ALL_MODULES = GROUPS.flatMap((g) => g.modules);

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const wa = (text: string) => `https://wa.me/${PROPOSAL.energyWhatsapp}?text=${encodeURIComponent(text)}`;
