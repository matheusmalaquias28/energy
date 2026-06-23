import type { Metadata } from "next";
import ServicePageCTA from "@/components/ui/ServicePageCTA";
import FaqAccordion from "@/components/ui/FaqAccordion";

const SITE_URL = "https://energymidia.com.br";

export const metadata: Metadata = {
  title: "Criação de E-commerce e Lojas Virtuais | Energy",
  description:
    "Desenvolvimento de e-commerce e lojas virtuais com UX de alto nível, checkout otimizado e integração com ERP, meios de pagamento e marketplaces. Venda mais com uma loja que foi feita para vender.",
  keywords: [
    "criação de ecommerce",
    "criar loja virtual",
    "desenvolvimento de ecommerce",
    "loja online profissional",
    "agência ecommerce",
    "loja virtual profissional",
    "criar ecommerce do zero",
  ],
  alternates: { canonical: `${SITE_URL}/servicos/ecommerce` },
  openGraph: {
    title: "Criação de E-commerce e Lojas Virtuais | Energy",
    description:
      "E-commerces com UX de alto nível, checkout otimizado e integração completa. Lojas que vendem de verdade.",
    url: `${SITE_URL}/servicos/ecommerce`,
    type: "website",
    locale: "pt_BR",
  },
};

const deliverables = [
  {
    num: "01",
    title: "UX de produto e jornada de compra",
    desc: "A experiência de compra começa na página de categoria e termina na confirmação do pedido. Projetamos cada etapa para reduzir fricção, aumentar confiança e maximizar conversão.",
    tags: ["Arquitetura de informação", "Filtros inteligentes", "Página de produto otimizada", "UX de checkout"],
  },
  {
    num: "02",
    title: "Checkout de alta conversão",
    desc: "Abandono de carrinho é o maior problema do e-commerce brasileiro. Checkout de uma página, múltiplas formas de pagamento, endereço por CEP e resumo do pedido claro reduzem esse abandono dramaticamente.",
    tags: ["Checkout 1 página", "Pix + Cartão + Boleto", "CEP automático", "Transparente"],
  },
  {
    num: "03",
    title: "Integrações essenciais",
    desc: "Meios de pagamento, cálculo de frete, nota fiscal, estoque e ERP conectados. A loja funciona como uma operação real — não como um site estático com formulário de pedido.",
    tags: ["Mercado Pago / PagSeguro", "Melhor Envio / Correios", "NFe automática", "ERP integrado"],
  },
  {
    num: "04",
    title: "Performance e SEO de produto",
    desc: "Lojas lentas perdem vendas. Cada página de produto é otimizada para velocidade, com schema de produto, avaliações estruturadas e rich results no Google Shopping.",
    tags: ["PageSpeed 90+", "Schema de produto", "Google Shopping", "Rich results"],
  },
  {
    num: "05",
    title: "Gestão de catálogo e estoque",
    desc: "Painel administrativo para cadastrar produtos, gerenciar estoque, configurar variações (tamanho, cor, modelo), controlar promoções e acompanhar pedidos — tudo sem código.",
    tags: ["Painel intuitivo", "Variações de produto", "Controle de estoque", "Gestão de pedidos"],
  },
  {
    num: "06",
    title: "Analytics e recuperação de vendas",
    desc: "Veja quais produtos vendem mais, de onde vêm os clientes, qual é a taxa de abandono e quanto cada canal gera. Além disso, configuramos e-mails de recuperação de carrinho abandonado.",
    tags: ["GA4 + Meta Pixel", "Recuperação de carrinho", "Funil de vendas", "Relatórios"],
  },
];

const segments = [
  { title: "Moda e vestuário", desc: "Lojas com lookbook, grade de tamanhos, guia de medidas e experiência de produto que substitui a vitrine física." },
  { title: "Alimentação e bebidas", desc: "E-commerces para queijeiras, vinícolas, cafeterias e produtores artesanais que vendem para todo o Brasil." },
  { title: "Beleza e cosméticos", desc: "Lojas com recomendação de produto, depoimentos com foto e programa de fidelidade integrado." },
  { title: "Eletrônicos e tecnologia", desc: "Catálogos grandes com filtros avançados, comparação de produtos e especificações técnicas detalhadas." },
  { title: "Decoração e casa", desc: "Ambientações imersivas, galeria de produto em contexto real e cálculo de frete para itens de grande volume." },
  { title: "Produtos locais e artesanais", desc: "Para produtores locais que querem vender para clientes que já conhecem a marca — e para quem ainda não conhece." },
];

const faqs = [
  {
    q: "Qual a diferença entre e-commerce e loja em plataforma como Shopify?",
    a: "Plataformas como Shopify ou VTEX oferecem infraestrutura pronta com mensalidade. Desenvolvemos e-commerces sob medida — com design exclusivo, performance superior, sem limitações de template e sem taxa sobre vendas. Para operações maiores ou com identidade visual forte, o e-commerce sob medida entrega resultado que as plataformas não conseguem.",
  },
  {
    q: "Qual o prazo para criar uma loja virtual?",
    a: "E-commerces com catálogo padrão ficam prontos em 6 a 10 semanas. Para operações com integrações específicas (ERP, WMS, marketplace), o prazo pode ser de 8 a 16 semanas. Apresentamos cronograma detalhado na proposta.",
  },
  {
    q: "Quanto custa criar um e-commerce?",
    a: "O investimento varia com a quantidade de produtos, integrações necessárias e complexidade da operação. E-commerces profissionais partem de R$ 10.000. Apresentamos proposta detalhada após entendermos a sua operação.",
  },
  {
    q: "Vocês integram com marketplaces como Mercado Livre?",
    a: "Sim. Criamos integrações para publicar o catálogo automaticamente no Mercado Livre, Shopee, Amazon e outros marketplaces. Você gerencia tudo em um painel central — sem precisar atualizar cada canal manualmente.",
  },
  {
    q: "Como funciona o controle de estoque e pedidos?",
    a: "O painel administrativo centraliza todo o gerenciamento: estoque por produto e variação, status de pedidos, emissão de nota fiscal, comunicação com transportadoras e relatórios de vendas. Para operações maiores, integramos com o ERP que você já usa.",
  },
  {
    q: "Posso migrar minha loja atual para um e-commerce desenvolvido por vocês?",
    a: "Sim. Fazemos a migração completa de produtos, pedidos, clientes e histórico. O processo é planejado para minimizar o tempo de inatividade e garantir que nenhuma URL importante perca o posicionamento no Google.",
  },
];

export default function EcommercePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Criação de E-commerce e Lojas Virtuais",
    description: "Desenvolvimento de lojas virtuais com UX otimizado, checkout de alta conversão e integração com ERP, meios de pagamento e marketplaces.",
    provider: { "@type": "ProfessionalService", name: "Energy Midia", url: SITE_URL },
    areaServed: { "@type": "Country", name: "Brazil" },
    serviceType: "Desenvolvimento de E-commerce",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#0a0a0a] text-white">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="min-h-[72vh] flex flex-col justify-center px-6 lg:px-16 pt-40 pb-24 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto w-full">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
              // Serviço — E-commerce
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.02] text-white mb-8 max-w-5xl">
              Lojas virtuais que{" "}
              <span className="text-[#FE4101]">vendem de verdade.</span>
            </h1>
            <p className="text-white/50 leading-relaxed text-lg max-w-2xl mb-12">
              Desenvolvemos e-commerces com UX de alto nível, checkout otimizado e integração completa com pagamentos, frete e ERP. Uma loja que foi projetada para vender — não apenas para existir.
            </p>
            <ServicePageCTA label="Solicitar proposta de e-commerce" />
            <div className="mt-16 flex flex-wrap gap-3">
              {["UX de produto", "Checkout otimizado", "Integrações completas", "SEO de produto", "Google Shopping"].map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-white/20 border border-white/8 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Numbers ───────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/8">
            {[
              { val: "6–10", label: "Semanas do briefing à loja no ar" },
              { val: "90+", label: "Score PageSpeed em todas as lojas" },
              { val: "0%", label: "Taxa sobre vendas — você fica com tudo" },
              { val: "∞", label: "Produtos no catálogo — sem limitação" },
            ].map(({ val, label }) => (
              <div key={label} className="lg:px-10 first:pl-0 last:pr-0">
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FE4101] leading-none mb-2">{val}</p>
                <p className="text-xs text-white/30 leading-snug uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deliverables ──────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">// O que está incluso</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-3xl">
                Uma operação completa.{" "}
                <span className="text-[#FE4101]">Pronta para vender.</span>
              </h2>
            </div>
            <div className="border-t border-white/8">
              {deliverables.map((d, i) => (
                <div key={i} className="border-b border-white/8 py-10 grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-12 items-start px-0 lg:px-4">
                  <span className="text-xs text-white/20 uppercase tracking-widest pt-1 w-10">// {d.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{d.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-white/20 border border-white/8 px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/40 leading-relaxed text-sm lg:text-base">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Segments ──────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto">
            <div className="mb-16">
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">// Segmentos</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white max-w-3xl">
                Para qualquer produto.{" "}
                <span className="text-[#FE4101]">Qualquer mercado.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
              {segments.map((s) => (
                <div key={s.title} className="bg-[#0a0a0a] p-8">
                  <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-16 border-b border-white/5 bg-[#111111]">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs text-[#FE4101] uppercase tracking-widest mb-4 block">// Por que importa</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-white">
                Loja virtual feita para vender não é a mesma coisa que loja virtual bonita.
              </h2>
            </div>
            <p className="text-white/40 leading-relaxed text-base lg:text-lg">
              A maioria das lojas online falha porque foi construída com template genérico, checkout confuso ou integração mal feita. O cliente chega, não confia, não compra. Um e-commerce bem construído reduz abandono de carrinho, aumenta o ticket médio e transforma visitante em cliente recorrente.
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4 block">// Dúvidas frequentes</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white sticky top-32">
                Perguntas sobre{" "}
                <span className="text-[#FE4101]">e-commerce</span>
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-16">
          <div className="max-w-[90rem] mx-auto text-center">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">// Pronto para vender online?</p>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight text-white mb-6 max-w-4xl mx-auto">
              Vamos criar uma loja que{" "}
              <span className="text-[#FE4101]">realmente vende.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
              Resposta em até 24 horas. Conte sobre o seu produto e objetivo — vamos montar a proposta certa para a sua operação.
            </p>
            <ServicePageCTA label="Solicitar proposta de e-commerce" />
          </div>
        </section>

      </main>
    </>
  );
}
