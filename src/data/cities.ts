import type { LocalBlockData } from "./local-block";

export interface CityFaq {
  q: string;
  a: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  highlights: string[];
  businessContext: string;
  /** Conteúdo que só vale para esta cidade */
  local: LocalBlockData;
  /** Perguntas específicas da cidade (as gerais ficam no template) */
  faqs: CityFaq[];
}

export const brazilCities: CityData[] = [
  {
    slug: "sao-paulo",
    name: "São Paulo",
    state: "SP",
    intro:
      "No maior polo de negócios do Brasil, sua empresa precisa de um site que acompanhe o ritmo da cidade. A Energy cria ativos digitais para empresas paulistanas que querem ser encontradas, lembradas e escolhidas.",
    metaTitle: "Criação de Sites em São Paulo | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em São Paulo. Sites institucionais, landing pages e e-commerces com design de alto nível para empresas que querem resultado. Solicite uma proposta.",
    h1: "Criação de Sites em São Paulo",
    highlights: [
      "Maior mercado digital do Brasil",
      "Hub de startups e negócios",
      "Concorrência intensa em toda busca",
    ],
    businessContext:
      "São Paulo concentra os maiores orçamentos de marketing digital do país. Empresas que investem em presença digital de alta qualidade saem na frente numa cidade onde a concorrência é intensa e o consumidor exigente.",
    local: {
      heading: "Um site para cada São Paulo",
      paragraphs: [
        "Em São Paulo, a mesma busca muda de concorrência dependendo da região. Um escritório na Faria Lima, na Vila Olímpia ou na Berrini disputa atenção com consultorias do país inteiro. Uma loja em Pinheiros ou nos Jardins concorre com marcas que investem pesado em mídia. O atacado do Brás e do Bom Retiro vende para lojistas de outros estados. Por isso o projeto começa pela concorrência que o seu cliente vê no Google, não por um layout pronto.",
        "Na prática, isso significa páginas separadas para cada serviço e unidade que você tem de verdade, textos que respondem às perguntas do comprador e um site rápido no celular, porque boa parte das buscas acontece no trânsito ou entre uma reunião e outra.",
        "Em São Paulo, a Energy criou o site da Rastro Collect, que leva máquinas autônomas de cards colecionáveis para shoppings. A Energy é de Vila Velha (ES) e atende empresas paulistanas à distância, com reuniões por videochamada.",
      ],
      places: ["Faria Lima e Itaim Bibi", "Vila Olímpia e Berrini", "Pinheiros e Jardins", "Brás e Bom Retiro", "Avenida Paulista"],
      cases: ["Rastro Collect"],
    },
    faqs: [
      {
        q: "Vocês têm cliente em São Paulo?",
        a: "Sim. Criamos o site institucional da Rastro Collect, empresa que opera máquinas autônomas de boosters de TCG em shoppings. O site foi desenhado do zero, com UI/UX próprio e efeitos de scroll.",
      },
      {
        q: "Meu site precisa de uma página por bairro ou região de São Paulo?",
        a: "Só se você atende essas regiões de verdade e tem algo diferente a dizer sobre cada uma. Uma clínica com unidades em Moema e em Santana ganha com uma página por unidade, com endereço, equipe e horários. Dezenas de páginas iguais trocando só o nome do bairro tendem a ser ignoradas pelo Google.",
      },
      {
        q: "Meu público é B2B. O site precisa ser diferente?",
        a: "Sim. O comprador corporativo compara fornecedores antes de pedir reunião, muitas vezes junto com outras pessoas da empresa. O site precisa deixar claro para quem você trabalha, como é o processo e o que você entrega, com um caminho direto para agendar uma conversa.",
      },
      {
        q: "A Energy tem escritório em São Paulo?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende São Paulo de forma remota: briefing e apresentações por videochamada, aprovações por e-mail ou WhatsApp e entrega digital.",
      },
    ],
  },
  {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro",
    state: "RJ",
    intro:
      "A Cidade Maravilhosa tem um mercado cada vez mais digital. Empresas cariocas que investem em presença online de alto nível conquistam clientes antes mesmo da primeira ligação.",
    metaTitle: "Criação de Sites no Rio de Janeiro | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites no Rio de Janeiro. Sites institucionais, landing pages e e-commerces para empresas cariocas que querem crescer no digital. Peça uma proposta.",
    h1: "Criação de Sites no Rio de Janeiro",
    highlights: [
      "2ª maior economia do país",
      "Forte setor de turismo e serviços",
      "Crescimento acelerado do e-commerce",
    ],
    businessContext:
      "O Rio de Janeiro é um dos maiores mercados de serviços e turismo do Brasil. Empresas do setor imobiliário, hoteleiro, jurídico e de serviços encontram no digital sua principal fonte de novos clientes.",
    local: {
      heading: "Do Centro à Barra: mercados diferentes na mesma cidade",
      paragraphs: [
        "O Rio tem mercados bem distintos convivendo na mesma cidade. O Centro concentra escritórios ligados a óleo e gás, energia e direito. A Barra da Tijuca e o Recreio têm um setor imobiliário e de serviços que cresce em direção à Zona Oeste. Botafogo, Leblon e Ipanema reúnem clínicas, restaurantes e marcas que vendem estilo de vida. Cada um pede um tom diferente no site.",
        "Para negócios ligados ao turismo, o site também precisa falar com quem ainda não chegou: visitantes de outros estados e de fora do país que pesquisam antes da viagem. Isso pode significar versão em inglês ou espanhol, informação clara de localização e integração com reservas.",
        "A Energy é de Vila Velha (ES) e atende empresas cariocas à distância, com reuniões por videochamada e aprovações online.",
      ],
      places: ["Centro", "Barra da Tijuca e Recreio", "Botafogo", "Leblon e Ipanema", "Porto Maravilha"],
    },
    faqs: [
      {
        q: "Vale a pena ter o site em inglês para atender turistas no Rio?",
        a: "Para hotéis, pousadas, restaurantes, passeios e serviços que recebem estrangeiros, sim. Uma versão em inglês (e às vezes em espanhol) com as tags de idioma corretas permite aparecer nas buscas feitas de fora do Brasil.",
      },
      {
        q: "Minha empresa fica na Barra, mas atende o Rio todo. Como o site trata isso?",
        a: "O site informa o endereço real da sede e deixa claro quais regiões você atende. Páginas por região só fazem sentido quando há conteúdo diferente para cada uma, como unidades, equipes ou serviços específicos.",
      },
      {
        q: "Vocês fazem sites para escritórios de advocacia e consultorias?",
        a: "Sim. Nesses projetos o site explica as áreas de atuação com clareza, apresenta os profissionais e respeita as regras de publicidade de cada profissão, como o Provimento 205/2021 da OAB no caso da advocacia.",
      },
      {
        q: "A Energy tem escritório no Rio de Janeiro?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende o Rio de forma remota, com briefing e apresentações por videochamada e aprovações por e-mail ou WhatsApp.",
      },
    ],
  },
  {
    slug: "belo-horizonte",
    name: "Belo Horizonte",
    state: "MG",
    intro:
      "BH é uma das cidades com maior crescimento digital do Brasil. Empresas mineiras que apostam em design de alto nível chegam na frente num mercado que valoriza credibilidade e resultado.",
    metaTitle: "Criação de Sites em Belo Horizonte | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Belo Horizonte. Sites institucionais, landing pages e e-commerces para empresas de BH prontas para crescer no digital. Solicite um orçamento.",
    h1: "Criação de Sites em Belo Horizonte",
    highlights: [
      "Capital de Minas Gerais",
      "Polo de tecnologia e serviços",
      "Mercado B2B em expansão acelerada",
    ],
    businessContext:
      "Belo Horizonte consolida sua posição como polo de tecnologia e negócios no Sudeste. Empresas de advocacia, saúde, construção e varejo encontram no digital o caminho mais rápido para novos clientes.",
    local: {
      heading: "Da Savassi ao Barro Preto",
      paragraphs: [
        "Belo Horizonte tem uma economia de serviços forte e bem distribuída. Savassi, Lourdes e Funcionários concentram clínicas, escritórios e consultórios. O Barro Preto é conhecido pelo polo de moda. A comunidade de startups que ficou conhecida como San Pedro Valley colocou a cidade no mapa da tecnologia. O site de uma clínica em Lourdes e o de uma confecção do Barro Preto resolvem problemas bem diferentes.",
        "Na saúde, o site precisa explicar especialidades, convênios e formas de agendamento, e seguir as regras de publicidade dos conselhos profissionais. No varejo de moda, catálogo e WhatsApp costumam pesar mais que texto institucional. Para empresas de Nova Lima e da Vila da Serra que atendem a capital, o site deixa claro onde fica a sede e até onde vai o atendimento.",
        "A Energy é de Vila Velha (ES) e atende empresas de Belo Horizonte à distância, com reuniões por videochamada.",
      ],
      places: ["Savassi e Funcionários", "Lourdes", "Barro Preto", "Pampulha", "Nova Lima e Vila da Serra"],
    },
    faqs: [
      {
        q: "Vocês fazem sites para clínicas e consultórios em BH?",
        a: "Sim. Nesses projetos o site organiza especialidades, profissionais, convênios e agendamento, e respeita as regras de publicidade do CFM, do CFO ou do conselho da sua área.",
      },
      {
        q: "Minha empresa fica em Nova Lima, mas atende BH. O site consegue aparecer nas duas cidades?",
        a: "Sim, desde que o site e o Perfil da Empresa no Google tenham o endereço real e deixem claras as áreas atendidas. O conteúdo explica o que você faz para clientes de BH e da região metropolitana, sem precisar inventar um endereço na capital.",
      },
      {
        q: "Startup precisa de site institucional ou de landing page?",
        a: "Depende da fase. No começo, uma landing page bem feita costuma bastar para validar a oferta e captar os primeiros clientes. Quando a empresa já tem produto, time e clientes para mostrar, um site institucional ajuda em vendas, recrutamento e conversas com investidores.",
      },
      {
        q: "A Energy tem escritório em Belo Horizonte?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende BH de forma remota: briefing por videochamada, aprovações por e-mail ou WhatsApp e entrega digital.",
      },
    ],
  },
  {
    slug: "curitiba",
    name: "Curitiba",
    state: "PR",
    intro:
      "Curitiba é referência em qualidade e inovação. Empresas curitibanas que querem transmitir esse DNA de excelência precisam de um site que seja à altura da marca.",
    metaTitle: "Criação de Sites em Curitiba | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Curitiba. Sites institucionais, landing pages e e-commerces com design de alto nível para empresas paranaenses. Peça uma proposta.",
    h1: "Criação de Sites em Curitiba",
    highlights: [
      "Referência nacional em planejamento urbano",
      "Forte polo industrial e de serviços",
      "Alta renda per capita e consumo digital",
    ],
    businessContext:
      "Curitiba se destaca pela alta qualidade de vida e poder aquisitivo acima da média. O consumidor curitibano pesquisa antes de comprar — e empresas com presença digital forte capturam essa demanda primeiro.",
    local: {
      heading: "Um público que compara antes de decidir",
      paragraphs: [
        "Curitiba é conhecida no varejo como cidade-teste: muitas marcas lançam produtos primeiro aqui para ver como o consumidor reage. Isso diz muito sobre o público local, que compara, lê avaliações e desconfia de promessa exagerada. Um site para esse público precisa de informação concreta: o que você faz, como funciona, em quanto tempo e com que garantias.",
        "A economia também é diversa. O Batel e o Centro Cívico reúnem escritórios e serviços de alto padrão. A Cidade Industrial de Curitiba (CIC) e São José dos Pinhais concentram indústria e fornecedores. O Vale do Pinhão, programa de inovação da prefeitura, estimula o ecossistema de startups. Para empresas B2B da região, o site costuma ser o primeiro filtro antes de uma cotação.",
        "A Energy é de Vila Velha (ES) e atende empresas curitibanas à distância.",
      ],
      places: ["Batel", "Centro Cívico", "Cidade Industrial (CIC)", "São José dos Pinhais", "Água Verde"],
    },
    faqs: [
      {
        q: "Fornecedor industrial da CIC precisa de site?",
        a: "Precisa, e com um foco diferente do varejo: capacidade produtiva, certificações, setores atendidos, catálogo técnico e um formulário de cotação fácil de achar. Compradores industriais costumam pesquisar fornecedores antes do primeiro contato.",
      },
      {
        q: "O consumidor curitibano é mais exigente com sites?",
        a: "Ele tende a pesquisar bastante antes de decidir. Por isso o site precisa responder as dúvidas antes do contato: como funciona o serviço, prazos, área de atendimento e provas concretas do trabalho, como cases e avaliações reais.",
      },
      {
        q: "O site pode ajudar a recrutar profissionais de tecnologia?",
        a: "Sim. Uma página de carreiras com a cultura do time, as vagas abertas e o jeito de trabalhar ajuda a disputar profissionais num mercado de tecnologia ativo como o de Curitiba.",
      },
      {
        q: "A Energy tem escritório em Curitiba?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende Curitiba de forma remota, com reuniões por videochamada e aprovações online.",
      },
    ],
  },
  {
    slug: "porto-alegre",
    name: "Porto Alegre",
    state: "RS",
    intro:
      "Porto Alegre combina tradição e modernidade. Empresas gaúchas que investem em sites de alto nível constroem autoridade num mercado que valoriza credibilidade acima de tudo.",
    metaTitle: "Criação de Sites em Porto Alegre | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Porto Alegre. Sites institucionais, landing pages e e-commerces para empresas gaúchas que querem crescer. Solicite uma proposta.",
    h1: "Criação de Sites em Porto Alegre",
    highlights: [
      "Capital do maior polo agroindustrial do Sul",
      "Alta concentração de empresas de tecnologia",
      "Mercado consumidor exigente e digital",
    ],
    businessContext:
      "Porto Alegre tem uma das maiores concentrações de startups e empresas de tecnologia da região Sul. O mercado gaúcho valoriza qualidade, transparência e resultado — exatamente o que um site bem feito comunica.",
    local: {
      heading: "Tecnologia, serviços e informação sempre atualizada",
      paragraphs: [
        "Porto Alegre tem um mercado de serviços maduro e uma base de tecnologia ligada às universidades, com parques como o Tecnopuc, da PUCRS, e o Zenit, da UFRGS. O Moinhos de Vento e o Centro Histórico concentram escritórios, clínicas e comércio, e o 4º Distrito vem sendo ocupado por empresas criativas e de tecnologia.",
        "Depois das enchentes de maio de 2024, muitas empresas da cidade mudaram de endereço, de horário ou de forma de atendimento. Nesses casos, manter o site, o Perfil da Empresa no Google e os contatos iguais em todos os canais deixa de ser detalhe: é o que faz o cliente encontrar você no lugar certo.",
        "A Energy é de Vila Velha (ES) e atende empresas de Porto Alegre e da região metropolitana à distância.",
      ],
      places: ["Moinhos de Vento", "Centro Histórico", "4º Distrito", "Tecnopuc", "Região Metropolitana"],
    },
    faqs: [
      {
        q: "Minha empresa mudou de endereço. Como evitar que o Google mostre informação antiga?",
        a: "Atualize o endereço no site, no Perfil da Empresa no Google e nos principais diretórios ao mesmo tempo, com o mesmo nome, endereço e telefone. No site, a página de contato e os dados estruturados (Schema.org) passam a informar o endereço novo para os buscadores.",
      },
      {
        q: "Como deve ser o site de uma empresa de tecnologia?",
        a: "Ele precisa explicar o produto com clareza para quem compra, que nem sempre é técnico, sem perder a precisão que o público técnico espera. Isso costuma levar a páginas por solução, demonstrações e casos de uso concretos.",
      },
      {
        q: "O site precisa citar os municípios da região metropolitana que atendo?",
        a: "Se você atende Canoas, Gravataí, Novo Hamburgo ou outros municípios, o site deve deixar isso claro na página de serviços e no rodapé. Páginas específicas por cidade só valem a pena quando há algo concreto a dizer sobre cada uma.",
      },
      {
        q: "A Energy tem escritório em Porto Alegre?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende Porto Alegre de forma remota, com reuniões por videochamada e aprovações online.",
      },
    ],
  },
  {
    slug: "brasilia",
    name: "Brasília",
    state: "DF",
    intro:
      "Na capital do país, reputação é tudo. Empresas e escritórios em Brasília que investem em presença digital premium constroem autoridade onde o mercado mais observa.",
    metaTitle: "Criação de Sites em Brasília | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Brasília. Sites institucionais, landing pages e e-commerces para empresas e escritórios do DF que querem transmitir autoridade. Peça um orçamento.",
    h1: "Criação de Sites em Brasília",
    highlights: [
      "Maior renda per capita do Brasil",
      "Polo de serviços jurídicos e governamentais",
      "Mercado corporativo e B2B de alto valor",
    ],
    businessContext:
      "Brasília concentra escritórios de advocacia, consultorias, empresas de tecnologia e negócios ligados ao governo. Nesses mercados, a primeira impressão digital define se o cliente vai ou não agendar uma reunião.",
    local: {
      heading: "Endereço por sigla, compra formal e muita credibilidade",
      paragraphs: [
        "Brasília tem um jeito próprio de endereço: SCS, SRTVS, SHIS, quadras, blocos e conjuntos. Para o cliente e para o Google, isso precisa estar escrito do mesmo jeito no site, no Perfil da Empresa e nos dados estruturados. Senão, a empresa aparece no lugar errado do mapa ou some da busca local.",
        "O mercado também é particular. Há escritórios de advocacia e consultorias no Setor de Autarquias e no Setor Comercial Sul, empresas que vendem para o governo seguindo a Lei 14.133/2021, clínicas no Sudoeste e no Lago Sul, e comércio forte em Águas Claras e Taguatinga. Quem vende para órgãos públicos usa o site como vitrine de capacidade técnica, com certificações, áreas de atuação e canais formais de contato.",
        "A Energy é de Vila Velha (ES) e atende empresas do Distrito Federal à distância.",
      ],
      places: ["Setor Comercial Sul", "Setor de Autarquias", "Asa Sul e Asa Norte", "Lago Sul", "Águas Claras e Taguatinga"],
    },
    faqs: [
      {
        q: "Como colocar um endereço de Brasília no site sem confundir o Google?",
        a: "Use o endereço exatamente como aparece nos Correios e no Perfil da Empresa no Google, com setor, quadra, bloco e sala, e repita esse mesmo formato no rodapé, na página de contato e nos dados estruturados.",
      },
      {
        q: "Empresa que vende para o governo precisa de um site diferente?",
        a: "Precisa mostrar o que um comprador público costuma verificar: CNPJ, área de atuação, capacidade técnica, certificações e canais de contato formais. O site não substitui a documentação de uma licitação, mas passa credibilidade antes dela.",
      },
      {
        q: "Vocês atendem empresas de Águas Claras, Taguatinga e outras regiões administrativas?",
        a: "Sim. O atendimento é remoto para todo o Distrito Federal e o Entorno. O site deixa claro onde fica a empresa e quais regiões ela atende.",
      },
      {
        q: "A Energy tem escritório em Brasília?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende Brasília de forma remota, com briefing por videochamada e aprovações por e-mail ou WhatsApp.",
      },
    ],
  },
  {
    slug: "florianopolis",
    name: "Florianópolis",
    state: "SC",
    intro:
      "A Ilha da Magia é hoje um dos maiores hubs de startups do Brasil. Empresas floripenses que querem competir globalmente precisam de um site na mesma altura.",
    metaTitle: "Criação de Sites em Florianópolis | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Florianópolis. Sites institucionais, landing pages e e-commerces para startups e empresas de Floripa que querem escalar. Solicite uma proposta.",
    h1: "Criação de Sites em Florianópolis",
    highlights: [
      "Principal hub de startups do Sul do Brasil",
      "Alta concentração de empresas de tecnologia",
      "Forte setor de turismo e serviços digitais",
    ],
    businessContext:
      "Florianópolis é reconhecida internacionalmente como Silicon Island — um ecossistema de inovação vibrante. Startups e empresas tech que competem por investimento e clientes precisam de um site que transmita credibilidade e profissionalismo.",
    local: {
      heading: "Tecnologia o ano todo, turismo na temporada",
      paragraphs: [
        "Florianópolis tem duas economias que se cruzam. De um lado, empresas de software e startups ligadas à ACATE, ao Sapiens Parque e à UFSC. Do outro, pousadas, restaurantes e serviços que vivem da temporada de verão em lugares como Jurerê, Lagoa da Conceição e Campeche.",
        "Para quem vive do turismo, o site precisa estar pronto antes de dezembro e falar também com argentinos e uruguaios, que estão entre os visitantes estrangeiros mais frequentes da ilha. Uma versão em espanhol bem feita pode trazer reservas que um site só em português perde.",
        "Para empresas de tecnologia, o site é peça de venda e de recrutamento: explica o produto para o cliente e mostra a cultura do time para quem pode vir trabalhar com você. A Energy é de Vila Velha (ES) e atende Florianópolis à distância.",
      ],
      places: ["Centro", "Trindade", "Sapiens Parque", "Lagoa da Conceição", "Jurerê"],
    },
    faqs: [
      {
        q: "Vale a pena ter o site em espanhol para atender turistas em Florianópolis?",
        a: "Para hospedagem, gastronomia, passeios e aluguel por temporada, geralmente sim. O site ganha uma versão em espanhol com URLs e tags de idioma próprias, para aparecer quando o turista pesquisa ainda no país dele.",
      },
      {
        q: "Quando devo começar o site para a temporada de verão?",
        a: "Com folga. O ideal é o site estar no ar alguns meses antes de dezembro, para dar tempo de o Google indexar as páginas e de você ajustar textos e fotos antes do pico de buscas.",
      },
      {
        q: "Startup de Florianópolis precisa de site em inglês?",
        a: "Se você vende ou busca investimento fora do Brasil, sim. Nesse caso a versão em inglês não é tradução literal: é escrita para o cliente e o investidor de fora.",
      },
      {
        q: "A Energy tem escritório em Florianópolis?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende Florianópolis de forma remota, com reuniões por videochamada e aprovações online.",
      },
    ],
  },
  {
    slug: "salvador",
    name: "Salvador",
    state: "BA",
    intro:
      "Salvador está em plena transformação digital. Empresas baianas que investem em presença online profissional saem na frente num mercado em rápida evolução.",
    metaTitle: "Criação de Sites em Salvador | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Salvador. Sites institucionais, landing pages e e-commerces para empresas baianas prontas para crescer no digital. Peça uma proposta.",
    h1: "Criação de Sites em Salvador",
    highlights: [
      "Capital da Bahia",
      "Polo de turismo, comércio e serviços",
      "Crescimento digital acelerado",
    ],
    businessContext:
      "Salvador lidera o crescimento digital do Nordeste. Com o avanço do acesso à internet e a mudança no comportamento do consumidor, empresas que têm um site bem feito já saem com vantagem competitiva real.",
    local: {
      heading: "Um calendário que move a cidade",
      paragraphs: [
        "Salvador junta um centro de negócios moderno, na região do Caminho das Árvores e da Avenida Tancredo Neves, com bairros de comércio e serviços como Pituba, Barra e Rio Vermelho, e o Centro Histórico, onde turismo e cultura movem a economia. A Região Metropolitana ainda tem o Polo Industrial de Camaçari, com indústrias e fornecedores que vendem para o Brasil todo.",
        "O calendário pesa. Carnaval, verão e festas populares concentram picos de busca por hospedagem, restaurantes, passeios e serviços. Um site preparado com antecedência, com páginas para essas datas e informação clara de localização, captura essa demanda. Um site improvisado na véspera não aparece a tempo.",
        "A Energy é de Vila Velha (ES) e atende empresas de Salvador à distância.",
      ],
      places: ["Caminho das Árvores", "Pituba", "Barra e Rio Vermelho", "Centro Histórico", "Camaçari"],
    },
    faqs: [
      {
        q: "Como preparar o site para o Carnaval e o verão em Salvador?",
        a: "Com páginas específicas para essas datas publicadas com antecedência, informações de localização e acesso, horários especiais e um caminho direto para reserva ou contato. Assim o Google tem tempo de indexar e mostrar essas páginas quando as buscas aumentam.",
      },
      {
        q: "Fornecedor do Polo de Camaçari precisa de site?",
        a: "Sim. Compradores industriais pesquisam fornecedores antes de pedir cotação. O site precisa mostrar capacidade técnica, certificações, setores atendidos e um formulário de contato comercial fácil de achar.",
      },
      {
        q: "Meu negócio fica no Centro Histórico. Como aparecer para turistas?",
        a: "Com um Perfil da Empresa no Google completo e coerente com o site, fotos reais, horários atualizados e, se você recebe estrangeiros, uma versão do site em inglês ou espanhol.",
      },
      {
        q: "A Energy tem escritório em Salvador?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende Salvador de forma remota, com reuniões por videochamada e aprovações online.",
      },
    ],
  },
  {
    slug: "campinas",
    name: "Campinas",
    state: "SP",
    intro:
      "Campinas é o maior polo tecnológico do interior do Brasil. Empresas da região que querem capturar este mercado em expansão precisam de presença digital à altura.",
    metaTitle: "Criação de Sites em Campinas | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Campinas. Sites institucionais, landing pages e e-commerces para empresas campineiras que querem crescer no digital. Solicite um orçamento.",
    h1: "Criação de Sites em Campinas",
    highlights: [
      "Maior polo tecnológico do interior do Brasil",
      "Forte setor industrial e de serviços",
      "Região metropolitana com indústria e logística",
    ],
    businessContext:
      "Campinas concentra grandes empresas de tecnologia, indústrias e prestadores de serviço de alto valor. Num mercado B2B acirrado, o site é muitas vezes o primeiro — e único — ponto de contato com o cliente em potencial.",
    local: {
      heading: "Pesquisa, indústria e logística na mesma região",
      paragraphs: [
        "A Região Metropolitana de Campinas reúne universidades e centros de pesquisa como a Unicamp e o CPqD, indústrias em municípios como Paulínia, Hortolândia e Sumaré, e o Aeroporto de Viracopos, um dos principais terminais de carga do país. Grande parte das empresas da região vende para outras empresas, e o site costuma ser o primeiro contato do comprador.",
        "Em Campinas é comum a empresa atender a região inteira, de Valinhos e Vinhedo a Indaiatuba e Americana. O site precisa deixar isso claro sem criar uma página vazia para cada cidade: informa a sede real, explica a área de atendimento e mostra trabalhos feitos na região.",
        "A Energy é de Vila Velha (ES) e atende empresas de Campinas e região à distância.",
      ],
      places: ["Cambuí", "Taquaral", "Barão Geraldo", "Viracopos", "Paulínia e Hortolândia"],
    },
    faqs: [
      {
        q: "Minha empresa atende toda a Região Metropolitana de Campinas. Preciso de uma página por cidade?",
        a: "Normalmente não. Uma página de área de atendimento bem escrita, o endereço real da sede e trabalhos feitos na região funcionam melhor do que várias páginas iguais com o nome da cidade trocado, que o Google tende a ignorar.",
      },
      {
        q: "Empresa de base tecnológica precisa de um site diferente?",
        a: "Precisa explicar com clareza o que faz para quem compra, que nem sempre é técnico, e ao mesmo tempo mostrar profundidade para quem avalia. Isso costuma levar a páginas por solução ou aplicação, com linguagem de negócio e detalhes técnicos para quem quiser se aprofundar.",
      },
      {
        q: "Vocês fazem sites para empresas de logística da região de Viracopos?",
        a: "Sim. Para operadores logísticos e transportadoras, o site precisa mostrar estrutura, rotas, tipos de carga e certificações, com um formulário de cotação simples.",
      },
      {
        q: "A Energy tem escritório em Campinas?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende Campinas de forma remota, com reuniões por videochamada e aprovações online.",
      },
    ],
  },
  {
    slug: "recife",
    name: "Recife",
    state: "PE",
    intro:
      "O Porto Digital transformou Recife num dos maiores hubs de inovação do Brasil. Empresas recifenses que investem em digital de qualidade constroem vantagem real neste mercado.",
    metaTitle: "Criação de Sites em Recife | E-commerce e Landing Pages — Energy",
    metaDescription:
      "Agência de criação de sites em Recife. Sites institucionais, landing pages e e-commerces para empresas pernambucanas que querem se destacar no digital. Peça uma proposta.",
    h1: "Criação de Sites em Recife",
    highlights: [
      "Maior polo de tecnologia do Nordeste",
      "Sede do Porto Digital",
      "Ecossistema de inovação em expansão",
    ],
    businessContext:
      "Recife é referência nacional em tecnologia e inovação graças ao Porto Digital. Empresas e startups que fazem parte deste ecossistema precisam de uma presença digital que comunique credibilidade para clientes locais e nacionais.",
    local: {
      heading: "Porto Digital, polo médico e Suape",
      paragraphs: [
        "O Porto Digital transformou o Bairro do Recife num dos principais polos de tecnologia do país, com empresas de software, startups e centros de inovação. Ao mesmo tempo, a cidade tem um dos maiores polos médicos do Nordeste, concentrado em bairros como Ilha do Leite, Derby e Paissandu, e uma orla em Boa Viagem que reúne comércio, serviços e hotelaria.",
        "A Região Metropolitana também tem o Complexo de Suape, em Ipojuca, com indústria e logística ligadas ao porto. Para clínicas, empresas de tecnologia e fornecedores industriais, o site resolve problemas diferentes, e a estrutura do projeto muda de acordo com isso.",
        "A Energy é de Vila Velha (ES) e atende empresas do Recife à distância.",
      ],
      places: ["Bairro do Recife (Porto Digital)", "Boa Viagem", "Ilha do Leite e Derby", "Casa Forte", "Suape"],
    },
    faqs: [
      {
        q: "Vocês fazem sites para clínicas do polo médico do Recife?",
        a: "Sim. O site de uma clínica precisa mostrar especialidades e corpo clínico, explicar convênios e preparo para exames, facilitar o agendamento e seguir as regras de publicidade do conselho profissional.",
      },
      {
        q: "Empresa de software precisa de blog no site?",
        a: "Se o seu cliente pesquisa o problema antes de procurar um fornecedor, um blog com conteúdo técnico útil ajuda a ser encontrado e a ganhar confiança. Ele só funciona com publicação constante, então entra no projeto quando há quem escreva.",
      },
      {
        q: "Fornecedor que atende Suape precisa de site em inglês?",
        a: "Se você atende empresas estrangeiras ou operações internacionais no porto, uma versão em inglês das páginas principais ajuda o comprador a avaliar sua empresa sem intermediários.",
      },
      {
        q: "A Energy tem escritório no Recife?",
        a: "Não. A Energy fica em Vila Velha (ES) e atende o Recife de forma remota, com reuniões por videochamada e aprovações online.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return brazilCities.find((c) => c.slug === slug);
}
