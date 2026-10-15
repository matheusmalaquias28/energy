import type { LocalBlockData } from "./local-block";

export interface LpCityPage {
  slug: string;
  cidade: string;
  estado: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  /** Conteúdo que só vale para esta cidade */
  local: LocalBlockData;
  faq: { q: string; a: string }[];
}

export const lpCityPages: LpCityPage[] = [
  {
    slug: "sao-paulo",
    cidade: "São Paulo",
    estado: "SP",
    metaTitle: "Criação de Landing Pages em São Paulo | Design e Desenvolvimento — Energy",
    metaDescription:
      "Landing pages profissionais em São Paulo para empresas que investem em tráfego pago. Design estratégico, copy orientada à conversão e desenvolvimento responsivo. Solicite um orçamento.",
    heroLead:
      "No mercado paulistano, o custo por clique é alto e a concorrência é implacável. Uma página genérica desperdiça cada real investido em anúncios. Criamos landing pages que fazem o visitante avançar — da atenção para a ação.",
    local: {
      heading: "Campanhas segmentadas pedem páginas segmentadas",
      paragraphs: [
        "Em São Paulo o clique é caro porque todo mundo anuncia. Segmentar a campanha por região, por exemplo só a Zona Sul ou só o eixo Paulista–Faria Lima, reduz desperdício, mas só funciona se a landing page conversar com quem chegou: endereço, área de atendimento e oferta coerentes com o anúncio.",
        "Para negócios com várias unidades, uma página por unidade, com endereço, horários e equipe reais, costuma converter melhor do que mandar todo mundo para a mesma página. Quem atende também o ABC ou Guarulhos precisa dizer isso logo no primeiro bloco.",
        "Em São Paulo, a Energy criou o site institucional da Rastro Collect, que leva máquinas autônomas de boosters de TCG para shoppings.",
      ],
      places: ["Zona Sul", "Faria Lima e Itaim", "Avenida Paulista", "Pinheiros", "ABC Paulista"],
      cases: ["Rastro Collect"],
    },
    faq: [
      {
        q: "Vale fazer uma landing page por região de São Paulo?",
        a: "Se a campanha é segmentada por região e você atende essas regiões de forma diferente, sim. Uma página para a Zona Sul com o endereço da unidade de Moema converte melhor do que uma página genérica para a cidade toda. Se o atendimento é igual em toda SP, uma página basta.",
      },
      {
        q: "Vocês têm cliente em São Paulo?",
        a: "Sim. Criamos o site institucional da Rastro Collect, empresa que opera máquinas autônomas de cards colecionáveis em shoppings.",
      },
      {
        q: "Quanto tempo leva para criar?",
        a: "O cronograma é definido antes do início, com etapas e aprovações claras. Trabalhamos com prazos realistas que garantem qualidade na entrega.",
      },
      {
        q: "Vocês fazem a copy também?",
        a: "Sim. A copy pode fazer parte do projeto e é construída considerando sua oferta, público e objetivo de conversão — não é texto genérico.",
      },
      {
        q: "A landing page funciona para Google Ads e Meta Ads?",
        a: "Sim. A estrutura é pensada para converter visitantes vindos de campanhas pagas, com carregamento rápido, hierarquia visual clara e chamadas para ação otimizadas.",
      },
      {
        q: "A entrega inclui desenvolvimento ou só o design?",
        a: "Inclui tudo: estratégia, copy, design e desenvolvimento responsivo. A página sai pronta para ir ao ar e receber tráfego.",
      },
    ],
  },
  {
    slug: "belo-horizonte",
    cidade: "Belo Horizonte",
    estado: "MG",
    metaTitle: "Criação de Landing Pages em Belo Horizonte | Design e Desenvolvimento — Energy",
    metaDescription:
      "Landing pages em Belo Horizonte com design profissional e foco em conversão. Para empresas que precisam transformar tráfego pago em leads e vendas. Solicite um orçamento sem compromisso.",
    heroLead:
      "BH tem um mercado digital competitivo e consumidores exigentes. Uma landing page mediana não converte. Criamos páginas que transmitem confiança desde o primeiro segundo e conduzem o visitante para a ação.",
    local: {
      heading: "Do anúncio ao agendamento, sem atrito",
      paragraphs: [
        "Clínicas, consultórios, escolas e prestadores de serviço de BH que anunciam no Google e no Instagram dependem de agendamento. Para esse tipo de negócio, a landing page precisa tirar as dúvidas que travam o contato (onde fica, se atende convênio, como agendar) e levar direto para o WhatsApp ou para a agenda.",
        "Outra particularidade é a região metropolitana: muita gente que pesquisa por BH mora ou trabalha em Nova Lima, Contagem ou Betim. A página precisa dizer com clareza onde você atende, para não pagar por cliques de quem não pode virar cliente.",
      ],
      places: ["Savassi", "Lourdes", "Funcionários", "Nova Lima", "Contagem"],
    },
    faq: [
      {
        q: "Landing page funciona para clínica que agenda pelo WhatsApp?",
        a: "Funciona bem. A página explica especialidades, localização e convênios e tem um botão de WhatsApp com mensagem pronta, para o paciente chegar ao atendimento já dizendo o que procura. O clique no botão pode ser medido como conversão no Google Ads e no Meta Ads.",
      },
      {
        q: "Minha campanha deve incluir a região metropolitana de BH?",
        a: "Só se você atende essas cidades. Se atende, a página deixa isso claro logo no início; se não atende, a campanha deve excluir essas regiões, e a página reforça onde fica o atendimento.",
      },
      {
        q: "Vocês fazem copy e desenvolvimento além do design?",
        a: "Sim. O projeto é entregue completo: estratégia, copy, design e código. Pronto para receber tráfego pago ou orgânico.",
      },
      {
        q: "Qual o prazo médio de entrega?",
        a: "O prazo é definido antes do início com etapas de aprovação claras. O cronograma depende da complexidade do projeto.",
      },
      {
        q: "A página funciona para Google Ads e campanhas no Instagram?",
        a: "Sim. A estrutura é otimizada para converter visitantes vindos de mídia paga — com carregamento rápido, hierarquia de informação correta e CTAs estratégicos.",
      },
      {
        q: "Atendem presencialmente em BH ou é remoto?",
        a: "O processo é remoto. A Energy fica em Vila Velha (ES) e trabalha com clientes de BH por videochamada, com aprovações online.",
      },
    ],
  },
  {
    slug: "curitiba",
    cidade: "Curitiba",
    estado: "PR",
    metaTitle: "Criação de Landing Pages em Curitiba | Design e Desenvolvimento — Energy",
    metaDescription:
      "Landing pages em Curitiba com design profissional e foco em conversão. Para empresas que investem em tráfego pago e precisam de páginas que realmente convertem.",
    heroLead:
      "Curitiba tem um dos mercados digitais mais maduros do Brasil. Consumidores curitibanos pesquisam, comparam e exigem qualidade antes de decidir. Sua landing page precisa estar à altura dessa exigência.",
    local: {
      heading: "Para quem clica, lê e volta depois",
      paragraphs: [
        "O consumidor de Curitiba compara antes de decidir, e isso aparece na campanha: muita gente clica, lê e volta dias depois. Uma landing page para esse público precisa de argumentos concretos (como funciona, prazos, garantias e provas reais) e de um jeito de manter contato com quem ainda não está pronto, como um material para baixar ou uma lista de espera.",
        "Para indústrias da CIC e de São José dos Pinhais, a landing page costuma servir a campanhas de geração de cotação: catálogo resumido, aplicações do produto e um formulário que já pergunta o que o time comercial precisa saber.",
      ],
      places: ["Batel", "Centro Cívico", "CIC", "São José dos Pinhais", "Água Verde"],
    },
    faq: [
      {
        q: "Como captar quem ainda está comparando opções?",
        a: "Com uma oferta intermediária na própria página: um material para baixar, um diagnóstico ou uma demonstração. Assim você guarda o contato de quem ainda não está pronto e retoma a conversa depois.",
      },
      {
        q: "Curitiba tem muitas startups — vocês têm experiência com esse perfil?",
        a: "Sim. A Energy criou a landing page da Cashflow, uma plataforma SaaS, e sabe como apresentar um produto técnico de forma clara para quem vai assinar.",
      },
      {
        q: "O projeto inclui copy e desenvolvimento?",
        a: "Sim, a entrega é completa. Estratégia, copy, design e desenvolvimento responsivo — pronto para receber tráfego.",
      },
      {
        q: "Qual o prazo médio de entrega?",
        a: "Definimos o cronograma antes do início do projeto, com etapas e aprovações claras. Projetos mais simples são entregues mais rápido; projetos maiores têm prazo proporcional.",
      },
      {
        q: "A página funciona para Google Ads e Meta Ads?",
        a: "Sim. A estrutura da landing page é pensada especificamente para converter visitantes vindos de campanhas pagas.",
      },
      {
        q: "Vocês trabalham com empresas fora de Curitiba também?",
        a: "Sim. A Energy fica em Vila Velha (ES) e o processo é remoto, então atendemos empresas de todo o Brasil com a mesma qualidade e atenção.",
      },
    ],
  },
  {
    slug: "porto-alegre",
    cidade: "Porto Alegre",
    estado: "RS",
    metaTitle: "Criação de Landing Pages em Porto Alegre | Design e Desenvolvimento — Energy",
    metaDescription:
      "Landing pages em Porto Alegre com foco em conversão. Design profissional, copy estratégica e desenvolvimento responsivo para empresas que investem em tráfego pago.",
    heroLead:
      "Porto Alegre tem um mercado de serviços maduro e consumidores que valorizam consistência e credibilidade. Uma landing page bem construída é o diferencial entre ser escolhido ou ser ignorado.",
    local: {
      heading: "A capital e a região metropolitana na mesma campanha",
      paragraphs: [
        "Para muitas empresas, Porto Alegre e a região metropolitana formam um mercado só: quem atende na capital costuma atender também Canoas, Novo Hamburgo e Gravataí. A landing page precisa deixar a área de atendimento clara, para que a campanha segmentada por região não pague clique de quem está fora dela.",
        "No ecossistema de tecnologia, com empresas ligadas ao Tecnopuc e ao Zenit, a landing page costuma servir a pedidos de demonstração: o visitante precisa entender o produto em poucos segundos e marcar uma conversa sem preencher um formulário enorme.",
      ],
      places: ["Moinhos de Vento", "Centro Histórico", "4º Distrito", "Canoas", "Novo Hamburgo"],
    },
    faq: [
      {
        q: "O mercado gaúcho é exigente — como vocês adaptam a estratégia?",
        a: "O consumidor de Porto Alegre é criterioso. A estratégia considera clareza de oferta, prova social relevante e argumentação sólida — não apelos genéricos. Cada seção é pensada para construir confiança antes de pedir a ação.",
      },
      {
        q: "Vale fazer landing page para pedido de demonstração de software?",
        a: "Vale. A página mostra o problema que o produto resolve, como ele funciona e para quem é, e pede só o essencial para agendar a demonstração. Formulário curto e prova concreta convertem mais do que uma lista longa de funcionalidades.",
      },
      {
        q: "Vocês entregam copy e código também?",
        a: "Sim. O projeto inclui estratégia, copy, design e desenvolvimento. Entregamos a página pronta para receber tráfego.",
      },
      {
        q: "Quanto tempo leva para ficar pronta?",
        a: "O prazo é definido antes do início, com etapas e aprovações claras. Projetos menos complexos saem mais rápido; projetos maiores têm cronograma proporcional.",
      },
      {
        q: "A página está otimizada para Google Ads e Meta Ads?",
        a: "Sim. A estrutura é projetada para converter visitantes de campanhas pagas — carregamento rápido, hierarquia visual clara e chamadas para ação estratégicas.",
      },
      {
        q: "Atendem empresas de todos os setores?",
        a: "Sim. A estratégia muda conforme o setor e o jeito de comprar do seu cliente: serviços B2B, clínicas, varejo, imóveis e tecnologia pedem argumentos e chamadas diferentes.",
      },
    ],
  },
  {
    slug: "vila-velha",
    cidade: "Vila Velha",
    estado: "ES",
    metaTitle: "Criação de Landing Pages em Vila Velha | Design e Desenvolvimento — Energy",
    metaDescription:
      "Landing pages em Vila Velha para empresas que precisam converter tráfego em clientes. Design profissional, copy estratégica e desenvolvimento responsivo. Orçamento sem compromisso.",
    heroLead:
      "Vila Velha é um dos mercados que mais crescem no Espírito Santo. Empresas locais que estruturam sua presença digital agora saem na frente antes que a concorrência perceba. Criamos landing pages que trabalham por você 24 horas por dia.",
    local: {
      heading: "Landing pages feitas em Vila Velha",
      paragraphs: [
        "A Energy é de Vila Velha. Foi daqui que criamos a landing page da Cashflow, plataforma que reúne vendas de checkouts, campanhas de Meta Ads e controle financeiro para quem opera várias ofertas low ticket. É uma página feita para transformar visitante em assinante, com a oferta explicada em blocos curtos e chamadas para ação ao longo de toda a rolagem.",
        "Para negócios locais, a campanha muitas vezes mira bairros específicos, como Praia da Costa, Itaparica ou a Glória, e a landing page precisa confirmar logo de cara que você atende ali, com endereço, mapa e WhatsApp.",
      ],
      places: ["Praia da Costa", "Itaparica", "Glória", "Centro", "Grande Vitória"],
      cases: ["Cashflow"],
    },
    faq: [
      {
        q: "A Energy fica em Vila Velha?",
        a: "Sim, a Energy é sediada em Vila Velha (ES). O processo é feito online, por videochamada e WhatsApp, o que agiliza as aprovações para clientes daqui e de outras cidades.",
      },
      {
        q: "Vocês já fizeram landing page para SaaS ou produto digital?",
        a: "Sim. Criamos a landing page da Cashflow, plataforma de gestão para operações low ticket, com foco em converter visitantes em assinantes.",
      },
      {
        q: "Quais tipos de negócio de Vila Velha vocês atendem?",
        a: "Clínicas, imobiliárias, prestadores de serviço, comércio local, produtos digitais e negócios em expansão. A estratégia é adaptada para cada realidade.",
      },
      {
        q: "O projeto inclui design, copy e desenvolvimento?",
        a: "Sim. Entregamos o projeto completo: estratégia, copy, design e código responsivo. Pronto para ir ao ar e receber visitantes.",
      },
      {
        q: "A página funciona para anúncios no Google e Instagram?",
        a: "Sim. A estrutura da landing page é otimizada para receber tráfego de campanhas pagas e converter visitantes em leads ou contatos.",
      },
      {
        q: "Quanto tempo leva para criar a página?",
        a: "O prazo é definido antes do início do projeto, com etapas de aprovação claras. Trabalhamos com cronogramas realistas e entrega de qualidade.",
      },
    ],
  },
  {
    slug: "vitoria",
    cidade: "Vitória",
    estado: "ES",
    metaTitle: "Criação de Landing Pages em Vitória | Design e Desenvolvimento — Energy",
    metaDescription:
      "Landing pages em Vitória com design profissional e foco em conversão. Para empresas que investem em mídia paga e precisam de páginas que transformam cliques em clientes.",
    heroLead:
      "Capital do Espírito Santo, Vitória concentra o maior volume de negócios do estado. Empresas que querem captar clientes pelo digital precisam de páginas que transmitam autoridade e conduzam à ação — não de templates genéricos.",
    local: {
      heading: "Uma página para cada público da capital",
      paragraphs: [
        "A Energy fica em Vila Velha, na mesma Grande Vitória, e acompanha o mercado da capital de perto. Em Vitória, campanhas pagas costumam mirar públicos bem diferentes: o executivo da Enseada do Suá, o paciente que procura uma clínica na Praia do Canto, a família de Jardim Camburi. Cada um pede uma página própria, com oferta e linguagem certas.",
        "Como a Grande Vitória é compacta, muita empresa da capital atende também Vila Velha, Serra e Cariacica. A landing page deixa isso claro, e a campanha pode ser segmentada para a região metropolitana inteira sem perder relevância.",
      ],
      places: ["Enseada do Suá", "Praia do Canto", "Jardim Camburi", "Bento Ferreira", "Grande Vitória"],
    },
    faq: [
      {
        q: "Vocês conhecem o mercado de Vitória e do Espírito Santo?",
        a: "Sim. A Energy é de Vila Velha, na Grande Vitória, e conhece o mercado capixaba de perto. O processo é online, mas falamos a mesma língua do seu cliente.",
      },
      {
        q: "Uma landing page serve para toda a Grande Vitória?",
        a: "Serve, se o seu atendimento é igual em toda a região. Se você tem unidades ou ofertas diferentes por cidade, vale uma página por público, cada uma ligada à campanha certa.",
      },
      {
        q: "O projeto inclui copy, design e desenvolvimento?",
        a: "Sim, tudo. Estratégia, copy, design e desenvolvimento responsivo — entregue pronto para receber tráfego pago ou orgânico.",
      },
      {
        q: "Quanto tempo leva para entregar?",
        a: "Definimos o prazo antes do início, com fases e aprovações claras. O cronograma é realista e cumprido.",
      },
      {
        q: "A landing page funciona para campanhas no Google Ads e Meta?",
        a: "Sim. A estrutura é projetada para converter visitantes de mídia paga — velocidade de carregamento, hierarquia de informação e CTAs pensados para esse tipo de tráfego.",
      },
      {
        q: "Atendem empresas de quais setores?",
        a: "Serviços B2B, imóveis, clínicas, comércio, tecnologia e outros. A estratégia é adaptada para o comportamento de compra do seu público.",
      },
    ],
  },
  {
    slug: "brasilia",
    cidade: "Brasília",
    estado: "DF",
    metaTitle: "Criação de Landing Pages em Brasília | Design e Desenvolvimento — Energy",
    metaDescription:
      "Landing pages em Brasília para empresas que precisam transmitir credibilidade e converter tráfego em clientes. Design profissional, copy estratégica e desenvolvimento completo.",
    heroLead:
      "Brasília tem o maior PIB per capita do Brasil e um mercado formado por governo, setor privado e terceiro setor. Credibilidade e profissionalismo na página não são opcionais — são o filtro que define quem avança para uma conversa comercial.",
    local: {
      heading: "Público pequeno, qualificado e criterioso",
      paragraphs: [
        "Em Brasília, muita campanha mira um público pequeno e qualificado: gestores, advogados, servidores e empresários que decidem com base em credibilidade. Para esse público, a landing page funciona melhor quando é sóbria e objetiva, com quem é a empresa, o que entrega, provas concretas e um caminho claro para agendar uma reunião.",
        "A geografia também conta. Plano Piloto, Águas Claras, Taguatinga e o Entorno têm públicos e distâncias bem diferentes, e campanhas de negócios locais rendem mais quando a página e o anúncio falam da mesma região.",
      ],
      places: ["Plano Piloto", "Setor Comercial Sul", "Lago Sul", "Águas Claras", "Taguatinga"],
    },
    faq: [
      {
        q: "Como vocês adaptam a página ao mercado do Distrito Federal?",
        a: "Considerando o que o mercado de Brasília tem de particular: muitos tomadores de decisão, necessidade de credibilidade institucional e compras mais formais em vários segmentos. A página prioriza clareza, provas concretas e um caminho direto para reunião.",
      },
      {
        q: "Landing page serve para empresas que vendem para o governo?",
        a: "Sim. Uma landing page bem construída serve como ponto de contato profissional para qualquer visitante — incluindo gestores públicos que pesquisam fornecedores. A página transmite credibilidade antes de qualquer reunião.",
      },
      {
        q: "Atendem empresas de todo o DF?",
        a: "Sim. A Energy fica em Vila Velha (ES) e atende Brasília, as regiões administrativas e o Entorno de forma remota, por videochamada e aprovações online.",
      },
      {
        q: "O projeto inclui copy, design e desenvolvimento?",
        a: "Sim, tudo. Estratégia, copy, design e desenvolvimento responsivo. A página sai pronta para receber tráfego e converter visitantes.",
      },
      {
        q: "A página funciona para Google Ads e LinkedIn Ads?",
        a: "Sim. A estrutura é otimizada para converter visitantes de qualquer fonte de tráfego pago — Google, Meta, LinkedIn ou qualquer outra plataforma.",
      },
      {
        q: "Qual o prazo de entrega?",
        a: "Definimos o cronograma antes de começar, com etapas e aprovações claras. O prazo depende da complexidade e do escopo do projeto.",
      },
    ],
  },
];

export function getLpCityPage(slug: string): LpCityPage | undefined {
  return lpCityPages.find((p) => p.slug === slug);
}
