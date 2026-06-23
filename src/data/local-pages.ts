export type ServiceType = "sites" | "ecommerce" | "landing-page" | "sites-imobiliarios";

export interface LocalFaq {
  q: string;
  a: string;
}

export interface LocalPageData {
  slug: string;
  service: ServiceType;
  serviceLabel: string;
  city: string;
  region: string;
  state: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  marketContext: string;
  serviceDetails: {
    title: string;
    desc: string;
    tags: string[];
  }[];
  whyLocal: string;
  faqs: LocalFaq[];
}

export const localPages: LocalPageData[] = [
  /* ─────────────────────────────────────────────
     CAMPOS DO JORDÃO — SITES INSTITUCIONAIS
  ───────────────────────────────────────────── */
  {
    slug: "criacao-de-sites-campos-do-jordao",
    service: "sites",
    serviceLabel: "Sites Institucionais",
    city: "Campos do Jordão",
    region: "Serra da Mantiqueira",
    state: "SP",
    h1: "Criação de Sites em Campos do Jordão",
    metaTitle: "Criação de Sites em Campos do Jordão | Agência Energy",
    metaDescription:
      "Criação de sites profissionais em Campos do Jordão. Sites institucionais com design exclusivo, SEO técnico e performance 95+ para empresas da serra. Solicite um orçamento.",
    keywords: [
      "criação de sites campos do jordão",
      "agência de sites campos do jordão",
      "site profissional campos do jordão",
      "desenvolvimento de site campos do jordão",
      "site para empresa campos do jordão",
    ],
    intro:
      "Campos do Jordão é um mercado único no Brasil: uma cidade de alto poder aquisitivo, com forte presença turística e um público que valoriza qualidade acima de preço. Empresas locais que investem em um site profissional chegam primeiro nesse mercado exigente.",
    marketContext:
      "Com mais de 700 mil turistas por ano e um dos maiores festivais de inverno do Brasil, Campos do Jordão atrai clientes que pesquisam online antes de visitar presencialmente. Pousadas, restaurantes, ateliês, imobiliárias e prestadores de serviço que têm um site profissional capturam essa demanda antes mesmo da chegada do turista à cidade.",
    serviceDetails: [
      {
        title: "Sites para Turismo e Hospedagem",
        desc: "Pousadas, chalés e hotéis boutique precisam de sites que transmitam a experiência antes da reserva. Design imersivo, galeria de fotos otimizada, integração com sistema de reservas e SEO para capturar turistas que pesquisam hospedagem na serra.",
        tags: ["Integração de reservas", "Galeria imersiva", "SEO para turismo", "Mobile first"],
      },
      {
        title: "Sites para Comércio e Serviços Locais",
        desc: "Restaurantes, ateliês, lojas de artesanato e prestadores de serviço locais que investem em presença digital profissional capturam o cliente ainda no planejamento da viagem — antes que ele nem chegue à cidade.",
        tags: ["SEO local", "Google Business integrado", "Menu e cardápio", "CMS fácil de usar"],
      },
      {
        title: "Sites Corporativos e Imobiliários",
        desc: "Empresas estabelecidas em Campos do Jordão que precisam transmitir autoridade para um público de alta renda. Design premium, performance máxima e copy estratégico para um mercado que julga pelo detalhe.",
        tags: ["Design premium", "Performance 95+", "Copy estratégico", "Gestão de conteúdo"],
      },
    ],
    whyLocal:
      "O público de Campos do Jordão — tanto o morador quanto o turista — tem alto poder aquisitivo e toma decisões com base na qualidade percebida. Um site mal feito não apenas não gera clientes: ativamente afasta quem você mais quer atrair.",
    faqs: [
      {
        q: "Preciso estar em Campos do Jordão para contratar a agência?",
        a: "Não. Todo o processo é 100% remoto: briefing por videochamada, aprovações por e-mail ou WhatsApp e entrega digital. Atendemos empresas em toda a Serra da Mantiqueira e região.",
      },
      {
        q: "Quanto tempo leva para criar um site para minha pousada ou restaurante?",
        a: "Sites institucionais ficam prontos em 3 a 6 semanas a partir do briefing aprovado. Para projetos com sistema de reservas, o prazo pode ser de 4 a 8 semanas dependendo da integração.",
      },
      {
        q: "O site vai aparecer quando turistas pesquisarem no Google?",
        a: "Todos os nossos projetos incluem SEO técnico completo. Além disso, orientamos sobre Google Business Profile e estratégia de palavras-chave para turismo, o que acelera o posicionamento orgânico.",
      },
      {
        q: "Posso atualizar o site depois — trocar fotos, adicionar pacotes?",
        a: "Sim. Todo projeto inclui CMS integrado. Você atualiza fotos, textos, preços e pacotes sem precisar chamar um desenvolvedor.",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     CAMPOS DO JORDÃO — E-COMMERCE
  ───────────────────────────────────────────── */
  {
    slug: "criacao-de-ecommerce-campos-do-jordao",
    service: "ecommerce",
    serviceLabel: "E-commerce",
    city: "Campos do Jordão",
    region: "Serra da Mantiqueira",
    state: "SP",
    h1: "Criação de E-commerce em Campos do Jordão",
    metaTitle: "Criação de E-commerce em Campos do Jordão | Loja Virtual — Energy",
    metaDescription:
      "Criação de e-commerce e lojas virtuais em Campos do Jordão. Venda queijos, vinhos, artesanato e produtos da serra para todo o Brasil com uma loja online profissional.",
    keywords: [
      "criação de ecommerce campos do jordão",
      "loja virtual campos do jordão",
      "vender online campos do jordão",
      "e-commerce campos do jordão",
      "loja online serra da mantiqueira",
    ],
    intro:
      "Os produtos de Campos do Jordão têm fãs no Brasil inteiro. Queijos artesanais, vinhos da serra, mel, fondue, artesanato europeu — há uma demanda reprimida de consumidores que visitaram a cidade e querem continuar comprando de volta em casa. Um e-commerce bem feito transforma esse apego em receita recorrente.",
    marketContext:
      "O turista que visita Campos do Jordão leva uma experiência para casa — mas frequentemente quer repetir essa experiência depois. Produtores e comerciantes locais que vendem online para quem já conheceu a cidade têm uma vantagem enorme: não precisam convencer o cliente da qualidade. Ele já viveu. O e-commerce é o canal de reconversão perfeito.",
    serviceDetails: [
      {
        title: "E-commerce para Produtores Locais",
        desc: "Queijarias, vinícolas, ateliês e produtores artesanais de Campos do Jordão que vendem para turistas têm um público naturalmente fidelizado. Um e-commerce profissional transforma essa fidelidade em vendas recorrentes para todo o Brasil.",
        tags: ["Frete integrado (Melhor Envio)", "Pix + Cartão", "Catálogo de produtos", "Gestão de estoque"],
      },
      {
        title: "Loja Virtual para Comércio de Moda e Decoração",
        desc: "Lojas de moda, decoração alpina e artesanato com público turístico têm potencial enorme de vendas online. Criamos lojas com experiência de compra imersiva que reproduz o ambiente acolhedor da cidade.",
        tags: ["Design imersivo", "Lookbook integrado", "UX mobile-first", "Instagram Shopping"],
      },
      {
        title: "E-commerce para Turismo e Experiências",
        desc: "Venda pacotes de hospedagem, passeios, jantares especiais e experiências gastronômicas com checkout simplificado e integração com sistemas de reserva.",
        tags: ["Venda de pacotes", "Reservas online", "Pagamento parcelado", "Confirmação automática"],
      },
    ],
    whyLocal:
      "Campos do Jordão tem um dos mais altos índices de recompra por reconhecimento de marca do turismo brasileiro. Quem visita, ama. Quem ama, quer comprar de novo. Um e-commerce transforma esse sentimento em canal de vendas permanente — muito além da temporada.",
    faqs: [
      {
        q: "Vale a pena criar um e-commerce para produtos de Campos do Jordão?",
        a: "Sim, especialmente para produtos com identidade geográfica forte como queijos, vinhos e artesanato. O turista que visita a cidade cria um vínculo emocional com os produtos locais e frequentemente busca formas de comprar novamente depois da viagem.",
      },
      {
        q: "Como funciona o frete para vender produtos perecíveis como queijos e vinhos?",
        a: "Integramos o e-commerce com plataformas como Melhor Envio e transportadoras especializadas em produtos perecíveis. Também orientamos sobre embalagem adequada e comunicação com o cliente sobre prazos e condições de transporte.",
      },
      {
        q: "Consigo vender para o Brasil inteiro?",
        a: "Sim. O e-commerce que desenvolvemos opera em todo o território nacional com cálculo de frete automático por CEP, múltiplas transportadoras e gestão centralizada de pedidos.",
      },
      {
        q: "Quanto tempo leva para ter a loja online no ar?",
        a: "E-commerces com catálogo padrão ficam prontos em 6 a 10 semanas. Para projetos com integrações específicas (reservas, ERP), o prazo pode ser um pouco maior. Sempre apresentamos cronograma detalhado na proposta.",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     CAMPOS DO JORDÃO — LANDING PAGES
  ───────────────────────────────────────────── */
  {
    slug: "criacao-de-landing-page-campos-do-jordao",
    service: "landing-page",
    serviceLabel: "Landing Pages",
    city: "Campos do Jordão",
    region: "Serra da Mantiqueira",
    state: "SP",
    h1: "Landing Page para Empresas em Campos do Jordão",
    metaTitle: "Landing Page Campos do Jordão | Alta Conversão — Energy",
    metaDescription:
      "Criação de landing pages de alta conversão para empresas de Campos do Jordão. Capture leads, venda pacotes e converta campanhas em clientes reais. Solicite uma proposta.",
    keywords: [
      "landing page campos do jordão",
      "criação de landing page campos do jordão",
      "página de vendas campos do jordão",
      "captura de leads campos do jordão",
      "marketing digital campos do jordão",
    ],
    intro:
      "Em Campos do Jordão, a temporada de inverno, o Festival de Inverno e os feriados prolongados geram picos de demanda previsíveis. Empresas que investem em landing pages específicas para cada campanha convertem muito mais do que as que mandam tráfego para a homepage.",
    marketContext:
      "O turista que planeja uma viagem a Campos do Jordão pesquisa muito antes de reservar: hospedagem, restaurantes, passeios, pacotes. Empresas com landing pages otimizadas para essas buscas capturam esse visitante quando ele está no momento exato da decisão — muito antes da temporada chegar.",
    serviceDetails: [
      {
        title: "Landing Pages para Temporadas e Festas",
        desc: "Festival de Inverno, Natal Luz, réveillon, feriados prolongados — cada temporada é uma oportunidade de campanha. Criamos landing pages sazonais que convertem o tráfego de busca e social em reservas reais.",
        tags: ["Copy sazonal", "Countdown timer", "Reserva online", "Integração WhatsApp"],
      },
      {
        title: "Páginas de Captura para Turismo",
        desc: "Pousadas, chalés e operadoras de turismo que investem em Google Ads e Meta Ads precisam de uma página de destino que converta. Cada clique no anúncio é um custo — sem landing page otimizada, você está pagando para educar o cliente do concorrente.",
        tags: ["Alta taxa de conversão", "A/B testing", "Velocidade máxima", "Mobile otimizado"],
      },
      {
        title: "Landing Pages para Serviços e Eventos",
        desc: "Jantares especiais, wine dinners, noites temáticas, cursos e workshops. Páginas focadas em converter inscrições e reservas com urgência, prova social e checkout simplificado.",
        tags: ["Inscrições online", "Pagamento integrado", "Limite de vagas", "E-mail automático"],
      },
    ],
    whyLocal:
      "Campos do Jordão tem sazonalidade marcante. Quem não aparece nos resultados durante o planejamento da viagem simplesmente não existe para o turista. Landing pages bem construídas garantem que a sua empresa seja a primeira encontrada — e a escolhida.",
    faqs: [
      {
        q: "Preciso de uma landing page separada para cada campanha?",
        a: "Idealmente sim. Uma landing page por campanha aumenta significativamente a taxa de conversão porque o conteúdo é 100% alinhado com o anúncio. Mas podemos criar uma estrutura de templates que agiliza a criação de novas páginas para cada temporada.",
      },
      {
        q: "A landing page funciona com Google Ads e Meta Ads?",
        a: "Sim. Desenvolvemos landing pages otimizadas para tráfego pago, com velocidade máxima (fundamental para qualidade do anúncio no Google) e copy alinhado com a mensagem do anúncio.",
      },
      {
        q: "Quanto tempo leva para criar uma landing page?",
        a: "Landing pages ficam prontas em 7 a 14 dias úteis. Para campanhas sazonais, recomendamos solicitar com pelo menos 3 semanas de antecedência.",
      },
      {
        q: "Posso medir quantos leads a página gerou?",
        a: "Sim. Todo projeto inclui configuração de analytics e rastreamento de conversões — você vê exatamente quantos formulários foram preenchidos, de onde vieram os visitantes e qual a taxa de conversão.",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     VILA VELHA — SITES INSTITUCIONAIS
  ───────────────────────────────────────────── */
  {
    slug: "criacao-de-sites-vila-velha",
    service: "sites",
    serviceLabel: "Sites Institucionais",
    city: "Vila Velha",
    region: "Grande Vitória",
    state: "ES",
    h1: "Criação de Sites em Vila Velha",
    metaTitle: "Criação de Sites em Vila Velha | Agência Energy",
    metaDescription:
      "Criação de sites profissionais em Vila Velha (ES). Sites institucionais com design exclusivo, SEO técnico e alta performance para empresas da Grande Vitória. Solicite um orçamento.",
    keywords: [
      "criação de sites vila velha",
      "agência de sites vila velha",
      "site profissional vila velha",
      "desenvolvimento de site vila velha es",
      "site para empresa vila velha",
    ],
    intro:
      "Vila Velha é a cidade mais populosa do Espírito Santo e um dos mercados comerciais mais movimentados da Grande Vitória. Com forte presença de comércio, serviços, saúde e gastronomia, empresas locais que investem em um site profissional se destacam num mercado onde a concorrência ainda subestima a presença digital.",
    marketContext:
      "Com mais de 500 mil habitantes e bairros consolidados como Praia da Costa, Itapoã e Centro, Vila Velha concentra um mercado consumidor exigente e bem conectado. O comportamento do consumidor capixaba moderno começa pelo Google — e empresas sem site profissional simplesmente não entram na lista de opções de quem pesquisa antes de comprar.",
    serviceDetails: [
      {
        title: "Sites para Comércio e Varejo",
        desc: "Lojas, redes locais e centros comerciais de Vila Velha precisam de sites que funcionem como vitrine digital 24 horas. Design atrativo, catálogo de produtos, integração com WhatsApp e SEO para buscas locais.",
        tags: ["Catálogo online", "SEO local", "WhatsApp integrado", "Mobile first"],
      },
      {
        title: "Sites para Clínicas e Saúde",
        desc: "Vila Velha tem uma das maiores concentrações de clínicas médicas, odontológicas e estéticas do Espírito Santo. Sites profissionais para esse setor precisam transmitir credibilidade, facilitar o agendamento e aparecer nas buscas de quem procura especialistas na cidade.",
        tags: ["Agendamento online", "Credibilidade médica", "SEO para saúde", "LGPD compliant"],
      },
      {
        title: "Sites Corporativos e de Serviços",
        desc: "Escritórios de advocacia, contabilidade, engenharia e demais prestadores de serviços B2B que precisam de um site que comunique autoridade e gere leads qualificados no mercado da Grande Vitória.",
        tags: ["Design premium", "Formulário de contato", "Performance 95+", "Copy estratégico"],
      },
    ],
    whyLocal:
      "Vila Velha cresce em ritmo acelerado — novos bairros, novos shoppings, nova rota de metrô. O mercado está em expansão e o consumidor está online. Empresas que investem em presença digital agora se consolidam antes que a concorrência perceba o movimento.",
    faqs: [
      {
        q: "Preciso estar fisicamente em Vila Velha para contratar a agência?",
        a: "Não. Todo o processo é 100% remoto: briefing por videochamada, aprovações por e-mail ou WhatsApp e entrega digital. Atendemos empresas em Vila Velha, Vitória, Serra e toda a Grande Vitória.",
      },
      {
        q: "Quanto tempo leva para criar um site profissional para minha empresa?",
        a: "Sites institucionais ficam prontos em 3 a 6 semanas a partir do briefing aprovado. O prazo varia de acordo com a complexidade do projeto e a velocidade de aprovação do cliente.",
      },
      {
        q: "O site vai aparecer no Google para buscas em Vila Velha?",
        a: "Todos os projetos incluem SEO técnico completo e orientação sobre Google Business Profile. O posicionamento orgânico se consolida ao longo do tempo, mas a base técnica correta acelera significativamente esse processo.",
      },
      {
        q: "Posso atualizar o site sozinho depois de pronto?",
        a: "Sim. Todo projeto inclui CMS integrado para que você possa atualizar textos, fotos e informações sem precisar de um desenvolvedor.",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     VITÓRIA — SITES INSTITUCIONAIS
  ───────────────────────────────────────────── */
  {
    slug: "criacao-de-sites-vitoria",
    service: "sites",
    serviceLabel: "Sites Institucionais",
    city: "Vitória",
    region: "Grande Vitória",
    state: "ES",
    h1: "Criação de Sites em Vitória",
    metaTitle: "Criação de Sites em Vitória (ES) | Agência Energy",
    metaDescription:
      "Criação de sites profissionais em Vitória, capital do Espírito Santo. Sites institucionais com design de alto nível, SEO técnico e performance máxima para empresas capixabas. Solicite uma proposta.",
    keywords: [
      "criação de sites vitória es",
      "agência de sites vitória",
      "site profissional vitória espírito santo",
      "desenvolvimento de site vitória es",
      "site para empresa vitória",
    ],
    intro:
      "Vitória é a capital do Espírito Santo e o centro financeiro, corporativo e cultural da Grande Vitória. Com um dos maiores PIBs per capita entre as capitais brasileiras e uma economia diversificada entre porto, mineração, serviços e tecnologia, é um mercado onde a qualidade da presença digital faz diferença real.",
    marketContext:
      "A capital capixaba concentra as sedes das principais empresas do estado, escritórios de advocacia de alto padrão, clínicas especializadas e um setor de serviços B2B muito ativo. O cliente corporativo de Vitória pesquisa fornecedores no Google, avalia o site antes de agendar reunião e descarta fornecedores com presença digital precária antes mesmo do primeiro contato.",
    serviceDetails: [
      {
        title: "Sites Corporativos de Alto Padrão",
        desc: "Vitória tem um mercado B2B sofisticado — escritórios de advocacia, consultorias, engenharias e gestoras que precisam de um site que transmita autoridade imediata. Design premium, copy estratégico e performance impecável para um público que julga pelo detalhe.",
        tags: ["Design premium", "Copy B2B", "Performance máxima", "Identidade visual integrada"],
      },
      {
        title: "Sites para Startups e Tecnologia",
        desc: "O ecossistema de inovação de Vitória cresce com programas como o ES Tech Hub. Startups e empresas de tecnologia precisam de sites que comuniquem modernidade, produto e proposta de valor de forma clara e convincente para investidores e clientes.",
        tags: ["Startup-ready", "Product storytelling", "Captação de leads", "Integração de CRM"],
      },
      {
        title: "Sites para Gastronomia e Hospitalidade",
        desc: "Vitória tem uma das melhores cenas gastronômicas do Brasil. Restaurantes, bares e hotéis que investem em presença digital profissional capturam o cliente antes da decisão — quando ele ainda está pesquisando onde jantar ou se hospedar.",
        tags: ["Cardápio online", "Reservas", "Galeria profissional", "SEO gastronômico"],
      },
    ],
    whyLocal:
      "O mercado de Vitória é disputado, sofisticado e crescente. Uma empresa sem site de qualidade equivale a um escritório sem recepção — o cliente percebe antes de entrar. Investir em presença digital de alto nível em Vitória é investir na credibilidade que o mercado capixaba exige.",
    faqs: [
      {
        q: "Vocês atendem empresas em Vitória de forma remota?",
        a: "Sim. Todo o processo — briefing, desenvolvimento, aprovações e entrega — é 100% remoto. Atendemos empresas em Vitória, Vila Velha, Serra, Cariacica e toda a Grande Vitória.",
      },
      {
        q: "Qual o prazo para criar um site corporativo em Vitória?",
        a: "Sites corporativos ficam prontos em 4 a 8 semanas. Projetos com funcionalidades específicas como área do cliente, integração com ERP ou sistemas de cotação podem levar mais tempo, dependendo da complexidade.",
      },
      {
        q: "O site vai gerar leads de empresas da Grande Vitória?",
        a: "A geração de leads orgânicos depende da combinação de SEO bem feito e conteúdo relevante. Configuramos toda a base técnica e orientamos sobre estratégia de conteúdo para que o site capture buscas qualificadas da região.",
      },
      {
        q: "Trabalham com identidade visual ou apenas desenvolvimento de site?",
        a: "Trabalhamos com o projeto completo: desde identidade visual e branding até o desenvolvimento e a entrega do site. Caso já tenha marca definida, adaptamos o projeto ao seu padrão visual existente.",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     SERRA — SITES INSTITUCIONAIS
  ───────────────────────────────────────────── */
  {
    slug: "criacao-de-sites-serra-es",
    service: "sites",
    serviceLabel: "Sites Institucionais",
    city: "Serra",
    region: "Grande Vitória",
    state: "ES",
    h1: "Criação de Sites em Serra (ES)",
    metaTitle: "Criação de Sites em Serra (ES) | Agência Energy",
    metaDescription:
      "Criação de sites profissionais em Serra, ES. Sites institucionais para indústrias, comércio e serviços da Grande Vitória com design exclusivo, SEO técnico e alta performance.",
    keywords: [
      "criação de sites serra es",
      "agência de sites serra espírito santo",
      "site profissional serra es",
      "desenvolvimento de site serra es",
      "site para empresa serra es",
    ],
    intro:
      "Serra é o maior polo industrial do Espírito Santo — sede de empresas como ArcelorMittal, Nestlé e dezenas de indústrias de médio porte. É também um dos municípios com maior crescimento populacional da Grande Vitória, com comércio e serviços em expansão acelerada. Empresas que investem em presença digital agora chegam primeiro num mercado que ainda está se formando.",
    marketContext:
      "A Serra divide-se entre um polo industrial consolidado e bairros residenciais em rápida expansão. Comércio local, clínicas, escolas, prestadores de serviços e fornecedores industriais competem por um público crescente e cada vez mais conectado. Empresas com site profissional e bem posicionado no Google têm vantagem real sobre concorrentes que ainda dependem exclusivamente de indicação.",
    serviceDetails: [
      {
        title: "Sites para Indústria e B2B",
        desc: "Fornecedores industriais, distribuidoras e empresas B2B de Serra precisam de sites que comuniquem capacidade técnica, portfólio de clientes e credibilidade corporativa. O site é frequentemente o primeiro ponto de contato do comprador antes de uma licitação ou cotação.",
        tags: ["Portfólio técnico", "Certificações e normas", "Formulário de cotação", "B2B focado"],
      },
      {
        title: "Sites para Comércio Local e Serviços",
        desc: "Com bairros como Laranjeiras, Jacaraípe e Carapina em expansão, Serra concentra um mercado de varejo e serviços locais em crescimento. Sites com SEO local bem configurado capturam buscas de moradores que procuram comércio e serviços próximos.",
        tags: ["SEO local", "Google Maps integrado", "WhatsApp direto", "Mobile first"],
      },
      {
        title: "Sites para Saúde e Educação",
        desc: "Clínicas médicas, odontológicas, escolas e centros de treinamento em Serra atendem uma população crescente que busca serviços de qualidade cada vez mais perto de casa. Um site profissional com agendamento e informações claras converte mais do que qualquer panfleto.",
        tags: ["Agendamento online", "SEO para saúde", "Página por especialidade", "Credibilidade"],
      },
    ],
    whyLocal:
      "Serra ainda está em formação como mercado digital — o que é uma vantagem estratégica para quem age agora. Enquanto a maioria dos concorrentes não investiu em presença digital de qualidade, uma empresa com site profissional e SEO bem feito pode dominar as buscas locais com muito mais facilidade do que em mercados mais disputados.",
    faqs: [
      {
        q: "Atendem empresas industriais e B2B em Serra?",
        a: "Sim. Temos experiência em criar sites para empresas industriais, fornecedoras e prestadoras de serviço B2B, com foco em comunicar capacidade técnica, portfólio e gerar leads qualificados para equipes comerciais.",
      },
      {
        q: "Quanto tempo leva para criar o site da minha empresa em Serra?",
        a: "Sites institucionais ficam prontos em 3 a 6 semanas. Para projetos B2B com portfólio técnico extenso ou integrações específicas, o prazo pode variar — sempre apresentamos cronograma detalhado na proposta.",
      },
      {
        q: "O site vai aparecer no Google para quem pesquisa em Serra?",
        a: "Todos os projetos incluem SEO técnico completo, configuração do Google Business Profile e orientação de estratégia de palavras-chave para buscas locais de Serra e Grande Vitória.",
      },
      {
        q: "Trabalham com empresas de qualquer setor em Serra?",
        a: "Sim. Atendemos desde indústrias e fornecedoras B2B até comércio local, clínicas, escritórios e prestadores de serviço. O projeto é sempre adaptado ao setor, ao público e ao objetivo de negócio.",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     VALE DO PARAÍBA — SITES IMOBILIÁRIOS
  ───────────────────────────────────────────── */
  {
    slug: "criacao-de-sites-imobiliarios-vale-do-paraiba",
    service: "sites-imobiliarios",
    serviceLabel: "Sites Imobiliários",
    city: "Vale do Paraíba",
    region: "Vale do Paraíba",
    state: "SP",
    h1: "Criação de Sites Imobiliários no Vale do Paraíba",
    metaTitle: "Sites para Imobiliárias no Vale do Paraíba | Energy",
    metaDescription:
      "Criação de sites para imobiliárias e corretores no Vale do Paraíba. Sites com integração de portais, busca de imóveis e SEO local para São José dos Campos, Taubaté, Jacareí e região.",
    keywords: [
      "site para imobiliária vale do paraíba",
      "criação de sites imobiliários vale do paraíba",
      "site imobiliário são josé dos campos",
      "site para corretor vale do paraíba",
      "site imobiliário taubaté",
      "desenvolvimento site imobiliária vale do paraíba",
    ],
    intro:
      "O Vale do Paraíba é um dos mercados imobiliários mais ativos do interior paulista. Com cidades como São José dos Campos, Taubaté e Jacareí em expansão constante, imobiliárias e corretores que investem em um site profissional com boa integração e SEO local saem na frente numa disputa que começa sempre no Google.",
    marketContext:
      "O comprador de imóveis no Vale do Paraíba pesquisa online por meses antes de fechar negócio. Cidades como São José dos Campos atraem profissionais da Embraer, Petrobrás e indústria automotiva com alto poder aquisitivo. Taubaté, Jacareí e Pindamonhangaba recebem demanda crescente de paulistanos em busca de qualidade de vida. Um site imobiliário bem construído e bem posicionado no Google captura essa demanda consistentemente.",
    serviceDetails: [
      {
        title: "Portal de Imóveis Completo",
        desc: "Site com busca avançada de imóveis por tipo, bairro, faixa de preço e características. Fichas de imóveis completas com fotos em alta resolução, tour virtual, planta baixa e formulário de contato direto com o corretor responsável.",
        tags: ["Busca avançada", "Tour virtual 360°", "Fichas completas", "CRM integrado"],
      },
      {
        title: "SEO para Imobiliárias — Vale do Paraíba",
        desc: "Estratégia de posicionamento para as principais buscas da região: 'imóveis em São José dos Campos', 'apartamentos em Taubaté', 'casas à venda Jacareí'. Cada cidade e tipo de imóvel tem sua página otimizada para aparecer nos resultados locais.",
        tags: ["Páginas por cidade", "Schema imobiliário", "SEO local", "Google Maps integrado"],
      },
      {
        title: "Integração com Portais Imobiliários",
        desc: "Sincronização automática do catálogo de imóveis com Viva Real, Zap Imóveis e OLX. Publique uma vez, apareça em todos os portais. Gestão centralizada com painel administrativo intuitivo para corretores.",
        tags: ["Viva Real", "Zap Imóveis", "OLX Imóveis", "Atualização automática"],
      },
      {
        title: "Landing Pages por Empreendimento",
        desc: "Páginas de venda dedicadas para cada lançamento ou empreendimento. Copy focado em conversão, formulário de interesse, planta do empreendimento e galeria. Integração com campanhas de Google Ads e Meta Ads.",
        tags: ["Lançamentos", "Alta conversão", "Captação de leads", "Tráfego pago"],
      },
    ],
    whyLocal:
      "O mercado imobiliário do Vale do Paraíba é disputado por imobiliárias locais e pelos grandes portais nacionais. Um site bem construído, com SEO forte para termos locais, posiciona sua imobiliária acima dos portais genéricos para buscas específicas da região — onde a intenção de compra é mais alta.",
    faqs: [
      {
        q: "O site vai aparecer para quem pesquisa imóveis em São José dos Campos ou Taubaté?",
        a: "Sim, esse é o objetivo central. Criamos páginas específicas para cada cidade da região com conteúdo e SEO otimizados para as principais buscas imobiliárias locais. O posicionamento orgânico leva alguns meses para se consolidar, mas é o canal com melhor custo por lead no longo prazo.",
      },
      {
        q: "Como funciona a integração com Zap Imóveis e Viva Real?",
        a: "Desenvolvemos a integração via API para que os imóveis cadastrados no painel do seu site sejam publicados automaticamente nos portais parceiros. Isso elimina o trabalho de publicação manual e mantém todas as informações atualizadas.",
      },
      {
        q: "Consigo gerenciar os imóveis e atualizar fotos sem precisar de um desenvolvedor?",
        a: "Sim. O painel administrativo foi pensado para corretores e gestores sem conhecimento técnico. Você adiciona, edita e remove imóveis, atualiza preços e fotos pelo painel — em poucos cliques.",
      },
      {
        q: "O site funciona para imobiliária que atende várias cidades do Vale?",
        a: "Perfeitamente. Criamos estrutura com filtros por cidade e bairro, e cada cidade tem sua própria página de categoria otimizada para SEO. Isso permite que a imobiliária apareça nas buscas de São José dos Campos, Taubaté, Jacareí e qualquer outra cidade do Vale.",
      },
      {
        q: "Quanto custa criar um site para imobiliária no Vale do Paraíba?",
        a: "O investimento varia com a quantidade de imóveis, integrações necessárias e funcionalidades. Sites imobiliários profissionais com portal completo partem de R$ 12.000. Apresentamos proposta detalhada após uma conversa para entender suas necessidades específicas.",
      },
    ],
  },
];

export function getLocalPageBySlug(slug: string): LocalPageData | undefined {
  return localPages.find((p) => p.slug === slug);
}
