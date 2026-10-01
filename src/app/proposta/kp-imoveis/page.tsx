import {
  Check,
  ClipboardCheck,
  Fingerprint,
  House,
  ImageIcon,
  Layers,
  MapPin,
  Moon,
  Route,
  Shuffle,
  SlidersHorizontal,
  Star,
  Timer,
  Upload,
  Users,
  ChartColumn,
  ShieldCheck,
  X,
} from "lucide-react";
import RevealObserver from "./_components/RevealObserver";
import LeadSimulator from "./_components/LeadSimulator";
import PanelMock from "./_components/PanelMock";
import Investment from "./_components/Investment";
import ActionButtons from "./_components/ActionButtons";
import { KpLogo } from "./_components/KpLogo";
import { ADDON, PLANS, PROPOSAL, brl } from "./data";

const IMG_KLEVERSON = "https://www.kleversonpassos.com/assets/img/conteudo/banner26.jpg";
const IMG_438 = "https://b4.casteldigital.com.br/kleversonpassos/ig/il/imoveis/438/dji_0292-editar-2-17082595460716.jpg";

const TOTAL_SECTIONS = 11;
const n = (i: number) => `N.${String(i).padStart(2, "0")}/${TOTAL_SECTIONS}`;

function SecHead({ i, kicker, title, intro }: { i: number; kicker: string; title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <div className="sec-head" data-reveal>
      <div className="sec-num">
        [{n(i)}]<span>&gt; {kicker}</span>
      </div>
      <div>
        <h2 className="sec-title">{title}</h2>
        {intro && <p className="sec-intro">{intro}</p>}
      </div>
    </div>
  );
}

function Finding({ id, tag, title, children, fix, aside, after }: { id: string; tag: string; title: React.ReactNode; children: React.ReactNode; fix?: string[]; aside?: React.ReactNode; after?: React.ReactNode }) {
  return (
    <div className="finding" data-reveal>
      <div className="finding-id">
        {"// "}{id}
        <b>{tag}</b>
      </div>
      <div className={`finding-body ${aside || fix ? "" : "single"}`}>
        <div>
          <h3>{title}</h3>
          {children}
        </div>
        {(aside || fix) && (
          <div style={{ display: "grid", gap: 16 }}>
            {aside}
            {fix && (
              <div className="fix">
                <div className="label">O que fazemos</div>
                <ul>
                  {fix.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      {after && <div className="finding-after">{after}</div>}
    </div>
  );
}

function SpeedMatters() {
  return (
    <div className="why">
      <div className="label">Por que isso importa</div>
      <h4>Site lento perde visita, posição no Google e venda.</h4>
      <div className="why-grid">
        <div>
          <div className="n">53%</div>
          <p>das visitas no celular desistem se a página leva mais de 3 s para abrir.</p>
          <small>Google</small>
        </div>
        <div>
          <div className="n">+8,4%</div>
          <p>de conversão com o site apenas 0,1 s mais rápido no celular.</p>
          <small>Deloitte</small>
        </div>
      </div>
      <p className="why-foot">E o Google usa a velocidade para decidir quem aparece primeiro na busca.</p>
    </div>
  );
}

function Gauge({ value, label }: { value: number; label: string }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const color = value >= 90 ? "var(--good)" : value >= 50 ? "#ffb24a" : "var(--bad)";
  return (
    <div className="gauge">
      <svg viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
        <circle
          cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`} transform="rotate(-90 50 50)"
        />
        <text x="50" y="57" textAnchor="middle" fill={color} fontSize="24" fontWeight="600" fontFamily="var(--sans)">{value}</text>
      </svg>
      <div className="lbl">{label}</div>
    </div>
  );
}

function Feature({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="feature" data-reveal>
      <div className="ico">{icon}</div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

const KV = ({ rows }: { rows: [string, React.ReactNode][] }) => (
  <div className="kv">
    {rows.map(([k, v]) => (
      <div key={k}>
        <span>{k}</span>
        <span>{v}</span>
      </div>
    ))}
  </div>
);

/* ─── Mockups ──────────────────────────────────────────── */

function PhoneOverlays() {
  return (
    <div>
      <div className="phone">
        <div className="phone-screen">
          <div style={{ height: "46%", backgroundImage: `url(${IMG_438})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(.55)" }} />
          <div style={{ padding: 12, fontSize: 11, color: "rgba(255,255,255,.4)" }}>Casa do Pôr do Sol · #438</div>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)" }} />
          <div style={{ position: "absolute", left: "8%", right: "8%", top: "16%", background: "#fff", color: "#222", borderRadius: 6, padding: "16px 14px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,.5)" }}>
            <KpLogo className="popup-logo" />
            <div style={{ fontWeight: 700, fontSize: 14, marginTop: 6, letterSpacing: ".04em" }}>NÃO VÁ AGORA!</div>
            <div style={{ fontSize: 10.5, color: "#666", marginTop: 4 }}>Cadastre-se para receber novidades direto no seu email.</div>
            <div style={{ height: 22, border: "1px solid #ddd", borderRadius: 3, marginTop: 8 }} />
            <div style={{ height: 22, border: "1px solid #ddd", borderRadius: 3, marginTop: 6 }} />
          </div>
          <div style={{ position: "absolute", left: 8, right: 64, bottom: 10, background: "#fff", color: "#333", borderRadius: 6, padding: 10, fontSize: 9.5, lineHeight: 1.4, boxShadow: "0 6px 20px rgba(0,0,0,.4)" }}>
            Utilizamos cookies para oferecer melhor experiência, melhorar o desempenho, analisar como você interage em nosso site...
            <div style={{ marginTop: 6, textAlign: "right" }}>
              <span style={{ background: "#0b2545", color: "#fff", padding: "3px 8px", borderRadius: 3, fontSize: 9 }}>aceito cookies</span>
            </div>
          </div>
          <div style={{ position: "absolute", right: 12, bottom: 16, width: 42, height: 42, borderRadius: "50%", background: "#25d366", boxShadow: "0 6px 16px rgba(0,0,0,.4)" }} />
        </div>
      </div>
      <p className="phone-cap">Reconstituição da página #438 no celular.<br />Três camadas sobre o imóvel.</p>
    </div>
  );
}

function HomeMock() {
  return (
    <div className="browser" data-reveal>
      <div className="browser-bar">
        <i /><i /><i />
        <div className="browser-url">kleversonpassos.com</div>
      </div>
      <div className="kp-home">
        <div className="kp-home-photo" style={{ backgroundImage: `url(${IMG_KLEVERSON})` }} />
        <div className="kp-nav">
          <KpLogo />
          <span className="links">Comprar</span>
          <span className="links">Lançamentos</span>
          <span className="links">Mapa</span>
          <span className="links">Anuncie seu imóvel</span>
          <span className="links">Kleverson</span>
          <span className="sp" />
          <span className="wa">Falar no WhatsApp</span>
        </div>
        <div className="kp-hero-copy">
          <div className="kp-eyebrow">KP Imóveis · Kleverson Passos</div>
          <h3>Imóveis de alto padrão no Espírito Santo, escolhidos um a um.</h3>
          <p>Casas, coberturas e lançamentos em Vitória, Vila Velha, Serra e Guarapari.</p>
          <div className="kp-sign">Kleverson Passos, fundador · Melhor corretor em vendas do Brasil, 2024</div>
        </div>
        <div className="kp-tabs" style={{ marginTop: 34 }}>
          <span className="on">Comprar</span>
          <span>Lançamentos</span>
          <span>Frente-mar</span>
        </div>
        <div className="kp-search">
          <div className="kp-field"><small>Tipo</small><span>Apartamento</span></div>
          <div className="kp-field"><small>Cidade ou bairro</small><span>Praia do Canto, Vitória</span></div>
          <div className="kp-field"><small>Faixa de preço</small><span>R$ 2 mi a R$ 5 mi</span></div>
          <div className="kp-field"><small>Quartos</small><span>4 ou mais</span></div>
          <div className="kp-go">Buscar</div>
        </div>
      </div>
    </div>
  );
}

function PropertyMock() {
  return (
    <div>
      <div className="browser" data-reveal>
        <div className="browser-bar">
          <i /><i /><i />
          <div className="browser-url">kleversonpassos.com/imovel/casa-vitoria-ilha-do-boi…</div>
        </div>
        <div className="kp-prop">
          <div className="kp-gallery">
            <div style={{ backgroundImage: `url(${IMG_438})` }} />
            <div style={{ backgroundImage: `url(${IMG_438})`, backgroundPosition: "80% 70%", filter: "saturate(.8)" }} />
            <div className="more">Ver todas as fotos</div>
          </div>
          <div className="kp-prop-body">
            <div>
              <span className="kp-ref">KP #438 · Pronto para morar</span>
              <h3>Casa do Pôr do Sol</h3>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.6)" }}>Ilha do Boi, Vitória · Frente para o mar</div>
              <div className="kp-specs">
                <div><b>4</b><span>quartos</span></div>
                <div><b>3</b><span>suítes</span></div>
                <div><b>8</b><span>vagas</span></div>
                <div><b>980</b><span>m² total</span></div>
              </div>
            </div>
            <div className="kp-aside">
              <span className="label">Valor</span>
              <div className="kp-price">R$ 11.990.000</div>
              <div className="kp-cta wa">Falar sobre este imóvel</div>
              <div className="kp-cta out">Agendar visita</div>
            </div>
          </div>
        </div>
      </div>
      <p className="mock-label">Exemplo simplifcado da página do imóvel: galeria grande, ficha clara e contato que já cita o código.</p>
    </div>
  );
}

function MapMock() {
  const clusters = [
    { x: 430, y: 92, n: 41, l: "Serra" },
    { x: 520, y: 222, n: 131, l: "Vitória" },
    { x: 470, y: 305, n: 48, l: "Vila Velha" },
    { x: 352, y: 448, n: 21, l: "Guarapari" },
  ];
  const pins = [
    [170, 230], [205, 250], [120, 300], [300, 160], [250, 380],
  ];
  return (
    <div>
      <div className="browser" data-reveal>
        <div className="browser-bar">
          <i /><i /><i />
          <div className="browser-url">kleversonpassos.com/mapa</div>
        </div>
        <div className="kp-map">
          <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <rect width="800" height="500" fill="#0b1116" />
            <path d="M0,0 L520,0 C500,60 545,110 520,150 C500,185 468,200 468,232 C468,262 500,282 490,322 C480,362 448,382 438,422 C428,462 410,482 402,500 L0,500 Z" fill="#161a1e" />
            <ellipse cx="520" cy="224" rx="46" ry="28" fill="#161a1e" />
            <g stroke="#20262b" strokeWidth="1.5" fill="none">
              <path d="M40,120 C160,140 260,100 420,96" />
              <path d="M60,260 C180,240 300,250 462,236" />
              <path d="M120,420 C220,400 300,430 400,446" />
              <path d="M300,0 C310,140 280,300 330,500" />
            </g>
            {pins.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="6" fill="#c3a377" stroke="#0b1116" strokeWidth="2" />
            ))}
            {clusters.map((c) => {
              const r = 14 + Math.sqrt(c.n) * 1.6;
              return (
                <g key={c.l}>
                  <circle cx={c.x} cy={c.y} r={r + 6} fill="rgba(195,163,119,.16)" />
                  <circle cx={c.x} cy={c.y} r={r} fill="#c3a377" stroke="#0b1116" strokeWidth="2" />
                  <text x={c.x} y={c.y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#141008" fontFamily="var(--sans)">{c.n}</text>
                  <text x={c.x - r - 10} y={c.y + 5} textAnchor="end" fontSize="13" fill="rgba(255,255,255,.6)" fontFamily="var(--sans)">{c.l}</text>
                </g>
              );
            })}
            <text x="700" y="250" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,.22)" letterSpacing="4" fontFamily="var(--sans)">OCEANO</text>
          </svg>
          <div className="kp-map-filters">
            <span className="on">Frente-mar</span>
            <span>Casas</span>
            <span>Coberturas</span>
            <span>Até R$ 5 mi</span>
          </div>
          <div className="kp-map-card">
            <div className="img" style={{ backgroundImage: `url(${IMG_438})` }} />
            <div className="b">
              <span className="mono gold" style={{ fontSize: 10.5 }}>KP #438</span>
              <div style={{ fontWeight: 600, marginTop: 2 }}>Casa do Pôr do Sol</div>
              <div style={{ color: "rgba(255,255,255,.55)" }}>Ilha do Boi · R$ 11,99 mi</div>
            </div>
          </div>
        </div>
      </div>
      <p className="mock-label">Exemplo simplifcado do mapa de imóveis: agrupado por região, com os mesmos filtros da busca. Contagens do site atual.</p>
    </div>
  );
}

function LatestProject() {
  return (
    <section className="case">
      <div className="wrap case-grid">
        <div className="case-copy" data-reveal>
          <span className="chip chip-accent">Último projeto entregue</span>
          <h2>Above Imobiliária: alto padrão em Campos do Jordão.</h2>
          <p>
            O site mais recente que a Energy entregou para uma imobiliária de alto padrão. Mesmo público e o mesmo nível de imóvel
            da KP: é a referência de acabamento do que propomos aqui.
          </p>
          <ul className="case-tags">
            <li>Design autoral</li>
            <li>Vitrine de imóveis</li>
            <li>Blog para o Google</li>
            <li>Pensado para o celular</li>
          </ul>
          <a className="btn" href="https://aboveimobiliaria.com.br/" target="_blank" rel="noopener noreferrer">
            Ver o site no ar
          </a>
        </div>
        <div className="case-visual" data-reveal>
          <div className="browser case-browser">
            <div className="browser-bar">
              <i /><i /><i />
              <div className="browser-url">aboveimobiliaria.com.br</div>
            </div>
            <div className="case-screen">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/proposta/kp-imoveis/above-desktop.webp" alt="Página inicial do site da Above Imobiliária" loading="lazy" width={1200} height={7500} />
            </div>
          </div>
          <div className="case-phone">
            <div className="case-phone-screen">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/proposta/kp-imoveis/above-mobile.webp" alt="Site da Above Imobiliária no celular" loading="lazy" width={390} height={9000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Página ───────────────────────────────────────────── */

export default function PropostaKP() {
  const completa = PLANS.find((p) => p.id === "completa")!;

  return (
    <main className="kpp">
      <RevealObserver />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid-bg" />
        <div className="hero-inner">
          <div className="hero-tag">
            <span className="chip chip-accent">Proposta</span>
            <span>Novo site + Plataforma comercial</span>
          </div>
          <div className="hero-brands">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-energy.svg" alt="Energy" style={{ height: 30 }} />
            <span className="x">×</span>
            <KpLogo />
          </div>
          <h1>
            291 imóveis de alto padrão, <em>mas o site não passa essa sensação.</em>
          </h1>
          <p className="hero-lede">
            Reunimos nessa proposta todos os pontos de melhoria e novas funcionalidades para o site, tudo para comunicar com o
            público de alto poder aquisitivo e aumentar a eficiência do time comercial.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#plano">Ver o plano</a>
            <a className="btn btn-ghost" href="#investimento">Ir para o investimento</a>
          </div>
          <div className="meta-grid">
            <div><div className="label">Preparada para</div><div className="v">{PROPOSAL.preparedFor}</div></div>
            <div><div className="label">Emitida em</div><div className="v">{PROPOSAL.issuedAt}</div></div>
            <div><div className="label">Válida até</div><div className="v">{PROPOSAL.validUntil}</div></div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/proposta/kp-imoveis/kleverson.webp"
          alt="Kleverson Passos, fundador da KP Imóveis"
          className="hero-photo"
          width={1500}
          height={1800}
          fetchPriority="high"
        />
      </section>

      <LatestProject />

      <section style={{ padding: "56px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="stats" data-reveal>
            <div className="stat"><div className="n bad">38<small>/100</small></div><p>nota de desempenho no celular, no teste oficial do Google.</p></div>
            <div className="stat"><div className="n bad">13,8<small>s</small></div><p>para a primeira imagem carregar, no celular, o ideal é no máximo 2 segundos.</p></div>
            <div className="stat"><div className="n bad">0</div><p>leads do site enviados sozinhos ao WhatsApp de um SDR.</p></div>
            <div className="stat"><div className="n">291</div><p>imóveis no ar: casas, apartamentos, terrenos e lançamentos.</p></div>
          </div>
        </div>
      </section>

      {/* N.01 — O QUE OUVIMOS */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={1}
            kicker="O que ouvimos"
            title="O site não acompanha mais o tamanho da KP."
            intro="Resumo da conversa com o time comercial. Cada ponto abaixo virou uma decisão nesta proposta."
          />
          <div className="heard">
            {[
              ["01", "Já estamos querendo mudar o site", "O site foi feito numa plataforma pronta de imobiliárias. Funciona, mas não parece a KP de hoje e não deixa ir além do modelo."],
              ["02", "Não existe automação", "Quem preenche o formulário vai para o painel do site. O SDR precisa entrar, copiar os dados e chamar no WhatsApp."],
              ["03", "Está lento", "No celular, a home demora para aparecer. Para imóvel de alto padrão, a primeira impressão é a página."],
              ["04", "Os clientes chegam à noite", "Boa parte do público é mais velho e navega à noite. Fundo escuro, letra maior e contraste certo cansam menos a vista."],
              ["05", "O imóvel merece mais", "Uma casa de R$ 11,9 milhões pede uma página à altura: fotos grandes, ficha clara e contato em um toque."],
              ["06", "KP é Kleverson Passos", "A marca é o nome do fundador. O site novo coloca o Kleverson na frente, como quem escolhe cada imóvel. Pessoas conectam com pessoas."],
            ].map(([k, t, d]) => (
              <div className="card" key={k} data-reveal>
                <div className="label">{"// "}{k}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>

          <p className="pull" data-reveal>
            O melhor do site atual foi construído fora dele: o portfólio, o nome do Kleverson e a reputação. O site novo só precisa
            mostrar isso, rápido.
            <small>Nossa leitura</small>
          </p>

          <div className="assets">
            {[
              ["// 001 · Reconhecimento", "Melhor corretor em vendas do Brasil", "Prêmio Xeque Mate 2024, entregue em São Paulo. Vai para a home, com a foto do Kleverson."],
              ["// 002 · Volume", "R$ 130 milhões em vendas", "VGV de 2024, segundo A Gazeta. Hoje esse número não aparece no site."],
              ["// 003 · Portfólio", "De R$ 1,1 mi a R$ 33,1 mi", "Só na home de hoje: frente-mar, coberturas, condomínios e lançamentos. Estoque de sobra para vitrine."],
              ["// 004 · Endereços", "Links que já dizem o que é", "“casa-vitoria-ilha-do-boi-4-quartos…”: os endereços atuais são bons. Ficam, com redirecionamento."],
            ].map(([k, t, d]) => (
              <div className="asset" key={k} data-reveal>
                <div className="label">{k}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>

          <div className="source" data-reveal>
            <b>Como foi levantado</b>
            Site kleversonpassos.com visitado em 1 de outubro de 2026, no celular e no computador. PageSpeed Insights do Google
            (Lighthouse), perfil celular. Conversa com o time comercial em {PROPOSAL.briefingDate}.{" "}
            <a href="https://www.sucessosa.com.br/noticia/kleverson-passos-o-melhor-corretor-de-imoveis-em-vendas-do-brasil" target="_blank" rel="noopener noreferrer">Revista Sucesso SA</a> e{" "}
            <a href="https://www.agazeta.com.br/colunas/abdo-filho/emeg-compra-parte-da-imobiliaria-de-kleverson-passos-0325" target="_blank" rel="noopener noreferrer">A Gazeta</a>.
          </div>
        </div>
      </section>

      {/* N.02 — DESEMPENHO */}
      <section className="sec sec-alt sec-tight">
        <div className="wrap">
          <SecHead
            i={2}
            kicker="Por que demora"
            title="No celular, a página inicial leva 13,8 s para carregar inteira."
            intro="Notas do teste oficial do Google, no celular, de 0 a 100. Vamos repetir o mesmo teste no dia da entrega, na frente de vocês."
          />
          <div className="gauges" data-reveal style={{ marginBottom: 40 }}>
            <Gauge value={38} label="Velocidade" />
            <Gauge value={68} label="Acessibilidade" />
            <Gauge value={77} label="Boas práticas" />
            <Gauge value={85} label="SEO (Google)" />
          </div>

          <Finding
            id="001"
            tag="Velocidade"
            title="Fotos pesadas e anúncios carregando antes do conteúdo."
            fix={["Fotos leves, no tamanho certo para cada tela.", "Ferramentas de anúncio carregam depois do conteúdo.", "Meta: abrir em menos de 2,5 s no celular."]}
            after={<SpeedMatters />}
          >
            <p>
              Quem abre o site no celular passa 4 segundos olhando uma tela vazia, e quase 14 até a foto principal aparecer. É a
              primeira impressão de um imóvel de alto padrão.
            </p>
            <KV
              rows={[
                ["Algo aparece na tela", "4,2 s"],
                ["A foto principal aparece", <span key="f" style={{ color: "var(--bad)" }}>13,8 s</span>],
                ["Tela sem responder ao toque", "1,1 s"],
                ["Layout sem pular durante o carregamento", <span key="c" style={{ color: "var(--good)" }}>Já está certo</span>],
              ]}
            />
          </Finding>

          <Finding
            id="002"
            tag="Tela cheia"
            title="Na página do imóvel, três avisos disputam a mesma tela."
            aside={<PhoneOverlays />}
          >
            <p>
              Ao abrir a Casa do Pôr do Sol (#438), aparecem juntos: o aviso de cookies, uma janela “Não vá agora!” pedindo e-mail e
              a bolha do WhatsApp. A casa de R$ 11,9 milhões fica atrás de tudo. Para quem tem mais idade e lê no celular à noite,
              fechar três janelas é onde a visita termina.
            </p>
            <div className="fix" style={{ marginTop: 24 }}>
              <div className="label">O que fazemos</div>
              <ul>
                <li>Aviso de cookies discreto, uma vez só.</li>
                <li>Sem janela de saída por cima do imóvel.</li>
                <li>Botão fixo com texto: “Falar sobre este imóvel”.</li>
              </ul>
            </div>
          </Finding>
        </div>
      </section>

      {/* N.03 — LEADS */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={3}
            kicker="O caminho do lead"
            title="Hoje o lead chega. Mas o time comercial tem que ir atrás das informações."
            intro={
              <>
                O formulário do imóvel pede referência, mensagem, nome, e-mail e telefone, e guarda tudo no painel da plataforma.
                Nenhum SDR é avisado. E todo botão de WhatsApp do site vai para o mesmo número, o (27) 99970-2105.
              </>
            }
          />
          <div className="flow">
            <div className="flow-col now" data-reveal>
              <span className="chip">Como é hoje</span>
              <ol className="flow-steps">
                <li><span>Cliente preenche <b>5 campos</b> às 21h.</span></li>
                <li><span>O lead fica <b>salvo no painel</b> do site.</span></li>
                <li><span>No outro dia o time precisa <b>abrir o painel </b>e chamar o lead manualmente no whatsapp</span></li>
                <li><span>Copia nome e telefone, <b>um por um</b>.</span></li>
                <li><span>Abre o WhatsApp e chama, <b>sem saber de onde veio</b>.</span></li>
              </ol>
              <div className="flow-time">
                <span className="label">Até o 1º contato</span>
                <span className="n" style={{ color: "var(--bad)" }}>pode levar horas, e não é culpa do comercial</span>
              </div>
            </div>
            <div className="flow-col next" data-reveal>
              <span className="chip" style={{ borderColor: "rgba(62,207,142,.5)", color: "var(--good)" }}>Como fica</span>
              <ol className="flow-steps">
                <li><span>Cliente deixa <b>nome e WhatsApp</b>, 2 campos.</span></li>
                <li><span>Lead <b>salvo no painel</b>, com imóvel e origem.</span></li>
                <li><span>Em segundos, mensagem no <b>WhatsApp do SDR da vez</b>.</span></li>
                <li><span>Um toque em “Abrir conversa”, <b>já falando do imóvel certo</b>.</span></li>
                <li><span>Lead ainda não foi chamado? <b>Time é notificado novamente</b>.</span></li>
              </ol>
              <div className="flow-time">
                <span className="label">Até o 1º contato</span>
                <span className="n" style={{ color: "var(--good)" }}>Agora leva minutos</span>
              </div>
            </div>
          </div>

          <LeadSimulator />

          <div className="features" style={{ marginTop: 40 }}>
            <Feature icon={<Shuffle size={18} />} title="Rodízio uniforme">
              Cada lead vai para um SDR, na ordem. No fim do mês, todos receberam a mesma quantidade.
            </Feature>
            <Feature icon={<Route size={18} />} title="Regras quando quiser">
              Lançamentos para um SDR, São Paulo para outro, acima de R$ 10 mi direto para o Kleverson. Configurável no painel.
            </Feature>
            <Feature icon={<Timer size={18} />} title="Reatribuição automática">
              Se o SDR não abrir o lead no prazo, ele é notificado novamente. Nenhum cliente fica esperando.
            </Feature>
            
            <Feature icon={<ClipboardCheck size={18} />} title="Funil no painel">
              Cada lead com status: novo, em contato, visita, proposta, vendido. Com histórico.
            </Feature>
            <Feature icon={<ChartColumn size={18} />} title="De onde veio">
              Google, Instagram, anúncio, mapa ou página do imóvel: a origem chega junto, para saber o que dá venda.
            </Feature>
          </div>
        </div>
      </section>

      {/* N.04 — GOOGLE */}
      <section className="sec sec-alt">
        <div className="wrap">
          <SecHead
            i={4}
            kicker="Achado no Google"
            title="O Google lê o site com pouca informação."
            intro="Quem procura imóvel de luxo em Vitória começa no Google. Estes são os pontos que hoje fazem a KP aparecer menos do que poderia."
          />
          <Finding
            id="001"
            tag="Título"
            title="O título principal da home fala com o proprietário, não com o comprador."
            fix={["Título da home para quem busca imóvel de alto padrão.", "Captação de proprietário numa página própria."]}
          >
            <p>
              O H1, o título que o Google usa para entender a página, é “Traga seu imóvel para a maior vitrine imobiliária de luxo
              do Espírito Santo”. O título da aba é “Kleverson Passos » Vitória / ES”. Nenhum dos dois diz “imóveis de alto padrão”.
            </p>
          </Finding>
          <Finding
            id="002"
            tag="Imagens"
            title="35 de 37 imagens da home sem descrição."
            fix={["Descrição gerada pelo cadastro: tipo, bairro e ambiente.", "Fotos em AVIF, no tamanho certo para cada tela."]}
          >
            <p>
              O Google Imagens e os leitores de tela não sabem o que há nelas. Na página da Casa do Pôr do Sol, são 12 de 17 sem
              descrição. Para um negócio que vende pela foto, é tráfego deixado na mesa.
            </p>
          </Finding>
          <Finding
            id="003"
            tag="Código"
            title="Cada imóvel é descrito ao Google como “Produto”."
            fix={["RealEstateListing em cada imóvel, com área, quartos e preço.", "RealEstateAgent com o Kleverson na home.", "Sitemap com os 291 imóveis, atualizado sozinho."]}
          >
            <p>
              O código estruturado (schema) da página do imóvel usa o tipo genérico Product, o mesmo de um tênis. Existe tipo
              próprio para anúncio de imóvel, com endereço, área, quartos e preço.
            </p>
          </Finding>
          <Finding
            id="004"
            tag="Bairros"
            title="O bairro tem página. Mas é só uma lista."
            aside={
              <KV
                rows={[
                  ["Vitória", "131 imóveis"],
                  ["Vila Velha", "48 imóveis"],
                  ["Serra", "41 imóveis"],
                  ["Praia do Canto", "37 imóveis"],
                  ["Alphaville Jacuhy", "27 imóveis"],
                  ["Guarapari", "21 imóveis"],
                  ["Enseada do Suá", "21 imóveis"],
                ]}
              />
            }
          >
            <p>
              O próprio site mostra onde está o estoque, nas buscas populares da home. A página da Praia do Canto existe, com título
              certo, mas sem um parágrafo sobre o bairro: o único texto é a bio do rodapé, igual em todas as páginas. Para disputar
              “apartamento de luxo na Praia do Canto”, ela precisa de conteúdo próprio, mapa e os imóveis dali.
            </p>
            <div className="fix" style={{ marginTop: 24 }}>
              <div className="label">O que fazemos</div>
              <ul>
                <li>Páginas de bairro e condomínio, com texto e mapa próprios.</li>
                <li>Endereços atuais mantidos, com redirecionamento 301.</li>
              </ul>
            </div>
          </Finding>
          <Finding
            id="005"
            tag="Mapa"
            title="O “Mapa de imóveis” é uma lista de links."
            fix={["Mapa real com os 291 imóveis.", "Os mesmos filtros da busca, no mapa."]}
          >
            <p>
              No rodapé, “mapa de imóveis” abre o /mapadosite/: 245 links em texto, sem mapa nenhum. Quem procura casa perto do mar
              quer ver onde ela fica.
            </p>
          </Finding>
        </div>
      </section>

      {/* N.05 — O NOVO SITE */}
      <section className="sec" id="plano">
        <div className="wrap">
          <SecHead
            i={5}
            kicker="O novo site"
            title="Uma vitrine à altura do que a KP vende."
            intro="Escura de propósito, para quem navega à noite. Letra grande, contraste alto e botões fáceis de tocar. O Kleverson na frente, como curador de cada imóvel."
          />
          

          <div className="features" style={{ marginTop: 48 }}>
            <Feature icon={<House size={18} />} title="Home com o Kleverson">
              Rosto, prêmio e números do fundador logo na primeira tela. Destaques escolhidos pelo time, não pela plataforma.
            </Feature>
            <Feature icon={<SlidersHorizontal size={18} />} title="Filtros claros">
              Tipo, cidade e bairro, preço, quartos, suítes, vagas, frente-mar e lançamento. Mostra quantos imóveis sobram antes de buscar.
            </Feature>
            <Feature icon={<ImageIcon size={18} />} title="Página do imóvel">
              Galeria em tela cheia, vídeo, ficha técnica, entorno no mapa e imóveis parecidos. O WhatsApp já sai com o código do imóvel.
            </Feature>
            <Feature icon={<MapPin size={18} />} title="Mapa de imóveis">
              Os 291 imóveis no mapa, agrupados por região. Toca no pino, vê foto, preço e o caminho para a página.
            </Feature>
            <Feature icon={<Upload size={18} />} title="Anuncie seu imóvel">
              O proprietário envia dados e fotos por um formulário. O imóvel entra numa fila e o time decide se publica.
            </Feature>
            <Feature icon={<Moon size={18} />} title="Leitura confortável">
              Fundo escuro sem ser preto puro, texto de 18 px, contraste AA e nada abrindo por cima do imóvel.
            </Feature>
          </div>

          <div className="mock-row">
            <PropertyMock />
            <MapMock />
          </div>
        </div>
      </section>

      {/* N.06 — PAINEL */}
      <section className="sec sec-alt">
        <div className="wrap">
          <SecHead
            i={6}
            kicker="O painel da KP"
            title="Um painel feito para o time, não para a plataforma."
            intro="O que hoje está espalhado, num lugar só. Cada pessoa com o próprio acesso. Troque o período no painel abaixo."
          />
          <PanelMock />
          <p className="mock-label">Dados ilustrativos. Imóveis do site atual.</p>

          <div className="features" style={{ marginTop: 48 }}>
            <Feature icon={<Layers size={18} />} title="Cadastro de imóveis">
              Formulário guiado, fotos arrastadas e otimizadas sozinhas, rascunho e publicar. Sem depender de ninguém.
            </Feature>
            <Feature icon={<Fingerprint size={18} />} title="Identificador KP">
              Código único em cada imóvel, como KP #438. O mesmo no site, no painel e na mensagem que chega ao SDR.
            </Feature>
            <Feature icon={<Star size={18} />} title="Destaques e filtros">
              Escolha e ordene os destaques da home arrastando. Crie e renomeie filtros e características sem programador.
            </Feature>
            <Feature icon={<Users size={18} />} title="Perfis e permissões">
              Admin, corretor e SDR, cada um com o que precisa ver. Histórico de quem alterou o quê.
            </Feature>
            <Feature icon={<ClipboardCheck size={18} />} title="Aprovação de imóveis">
              Envios de proprietários chegam numa fila. O time aprova, ajusta ou recusa, com um clique.
            </Feature>
            <Feature icon={<ChartColumn size={18} />} title="Leads e métricas">
              Gráfico de leads por dia, origem e SDR. Por imóvel: visitas, cliques no WhatsApp e leads do mês. Exporta em planilha.
            </Feature>
          </div>
        </div>
      </section>

      {/* N.07 — CADASTRO ASSISTIDO */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={7}
            kicker="Cadastro assistido · opcional"
            title="Os 241 imóveis restantes, prontos no dia do lançamento."
            intro="Cobrado à parte. Em vez do time da KP recadastrar imóvel por imóvel, a equipe Energy faz isso enquanto o site é construído."
          />
          <div className="assets" style={{ marginTop: 0 }}>
            {[
              ["// 001", "Fotos tratadas", "Recortadas, ordenadas e comprimidas. A capa certa em cada imóvel."],
              ["// 002", "Texto para o Google", "Título e descrição revisados, com bairro e diferencial na frente."],
              ["// 003", "Pino no mapa", "Endereço conferido e posicionado, para entrar no mapa de imóveis."],
              ["// 004", "Código e link", "Identificador KP e o endereço antigo redirecionado para o novo."],
            ].map(([k, t, d]) => (
              <div className="asset" key={k} data-reveal>
                <div className="label">{k}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="payback" data-reveal>
            <div><div className="label">Já incluso</div><div className="n">50 imóveis</div><p>A Plataforma KP já entrega o site com 50 imóveis cadastrados pela Energy.</p></div>
            <div><div className="label">Os {ADDON.units} imóveis restantes</div><div className="n">{brl(ADDON.price)}</div><p>Valor fechado para cadastrar o resto do estoque de hoje.</p></div>
            <div><div className="label">Prazo</div><div className="n">Em paralelo</div><p>Acontece durante a construção, sem atrasar o lançamento.</p></div>
          </div>
        </div>
      </section>

      {/* N.08 — COMO ACONTECE */}
      <section className="sec sec-alt">
        <div className="wrap">
          <SecHead
            i={8}
            kicker="Como acontece"
            title="Quatro etapas, com vocês aprovando cada uma."
            intro="O site atual segue no ar até o dia da troca. Nada sai do Google no meio do caminho."
          />
          <div className="steps">
            {[
              ["Etapa 01", "Briefing", "Coleta de informações sobre como funciona todo o fluxo atual e como podemos melhorar.", "1 semana"],
              ["Etapa 02", "Design", "Home, busca, imóvel, mapa e painel desenhados e aprovados antes de qualquer código.", "2 semanas"],
              ["Etapa 03", "Construção", "Site, painel e integração com o WhatsApp. Link de teste para o time usar de verdade.", "2 semanas"],
              ["Etapa 04", "Lançamento", "Redirecionamentos, testes de velocidade e treinamento do time. Depois, 30 dias de acompanhamento.", "2 semanas"],
            ].map(([k, t, d, w]) => (
              <div className="step" key={k} data-reveal>
                <div className="label">{k}</div>
                <h4>{t}</h4>
                <p>{d}</p>
                <div className="dur">{w}</div>
              </div>
            ))}
          </div>
          <div className="timeline" data-reveal>
            <span className="label">Do início ao site no ar</span>
            <b>cerca de {completa.weeks}</b>
          </div>
        </div>
      </section>

      {/* N.09 — PROMESSA */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={9}
            kicker="Nossa promessa"
            title="O que muda, medido no dia da entrega."
            intro="Mesmo teste, mesmo celular. Qualquer pessoa do time confere cada linha."
          />
          <div className="promise" data-reveal>
            <div className="promise-row head">
              <div className="k" />
              <div className="before">Hoje</div>
              <div className="after">No site novo</div>
            </div>
            {[
              ["Desempenho no celular", "38", "90 ou mais"],
              ["Maior imagem da home", "13,8 s", "Menos de 2,5 s"],
              ["Tela travada", "1.100 ms", "Menos de 200 ms"],
              ["Acessibilidade", "68", "95 ou mais"],
              ["Lead no WhatsApp do SDR", "Não chega", "Em segundos"],
              ["Distribuição de leads", "Manual", "Rodízio uniforme"],
              ["Métricas por imóvel", "Não existem", "Visitas, cliques e leads"],
              ["Mapa de imóveis", "245 links em texto", "Mapa real, com filtros"],
              ["Imagens sem descrição", "35 de 37", "Nenhuma"],
              ["Imóvel para o Google", "Product", "RealEstateListing"],
              ["Painel", "Da plataforma", "Próprio da KP"],
            ].map(([k, b, a]) => (
              <div className="promise-row" key={k}>
                <div className="k">{k}</div>
                <div className="before">{b}</div>
                <div className="after">{a}</div>
              </div>
            ))}
          </div>

          <div className="duo">
            <div className="box" data-reveal>
              <div className="label">A garantia</div>
              <p>
                Se a home não tirar 90 ou mais no teste de celular do Google no dia da entrega, seguimos trabalhando sem custo até
                tirar. Não prometemos número de vendas nem posição no Google: isso depende também de anúncio, estoque e mercado.
                Entregamos o site, o painel e o caminho do lead funcionando, com relatório.
              </p>
            </div>
            <div className="box" data-reveal>
              <div className="label">O rastreio continua</div>
              <p>
                Google Ads, Meta e Tag Manager seguem ativos, nas mesmas contas. Só passam a carregar depois que a página está
                pronta, e cada lead chega ao SDR com a origem marcada.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 64 }} data-reveal>
            <div className="label" style={{ color: "var(--accent)" }}>Uma venda paga o projeto</div>
          </div>
          <div className="payback" data-reveal>
            <div><div className="n">R$ 1,1 mi</div><p>o imóvel de menor valor na home hoje, em Jardim da Penha (#1.405).</p></div>
            <div><div className="n">≈ R$ 66 mil</div><p>de comissão nessa venda, com os 6% usuais de venda urbana.</p></div>
            <div><div className="n">{brl(completa.price)}</div><p>pela Plataforma KP completa. A venda mais simples da vitrine paga, e sobra.</p></div>
          </div>
        </div>
      </section>

      {/* N.10 — INVESTIMENTO */}
      <section className="sec sec-alt" id="investimento">
        <div className="wrap">
          <SecHead
            i={10}
            kicker="Investimento"
            title="Escopo, preço e prazo fechados."
            intro="Recomendamos a Plataforma KP: é ela que resolve o caminho do lead de ponta a ponta. Escolha abaixo e o total se atualiza."
          />
          <Investment />
        </div>
      </section>

      {/* N.11 — COMBINADO */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={11}
            kicker="Combinado"
            title="O combinado, por escrito."
            intro="Melhor deixar claro agora do que descobrir desalinhamento no meio do caminho."
          />
          <div className="terms">
            <div className="box yes" data-reveal>
              <div className="label" style={{ color: "var(--good)" }}>O que está incluso</div>
              <ul>
                {[
                  "Duas rodadas de ajuste em cada tela do design",
                  "Código, painel e dados da KP: tudo de vocês",
                  "Endereços atuais redirecionados, nada perdido no Google",
                  "Treinamento do time, gravado para quem entrar depois",
                  "Relatório de velocidade antes e depois",
                  "30 dias de suporte após o lançamento",
                ].map((t) => (
                  <li key={t}><Check size={16} />{t}</li>
                ))}
              </ul>
            </div>
            <div className="box no" data-reveal>
              <div className="label" style={{ color: "var(--fg-3)" }}>O que não entra aqui</div>
              <ul>
                {[
                  
                  "Domínio e contas de e-mail",
                  "Fotos, vídeos e tour dos imóveis",
                  "Gestão de anúncios e redes sociais",
                  "Funções novas fora deste escopo, orçadas à parte",
                ].map((t) => (
                  <li key={t}><X size={16} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="source" data-reveal style={{ marginTop: 16 }}>
            <b>Condições</b>
            Pagamento em 3 etapas: na assinatura, na aprovação do design e no lançamento. Ou à vista, com 8% de desconto. Ou em 6× no Pix, sem juros, ou 6× no cartão, com
            juros da operadora. Esta proposta vale até {PROPOSAL.validUntil}.
          </div>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="final">
        <div className="final-glow" />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="label" style={{ color: "var(--accent)" }}>O próximo passo</div>
          <h2>
            O portfólio, o nome e o time já existem. <span className="accent">Falta o site.</span>
          </h2>
         
          <ActionButtons />
          <div className="sign">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/matheus-malaquias.jpg" alt={PROPOSAL.author} className="avatar" />
            <div className="who">
              {PROPOSAL.author} · {PROPOSAL.agency}
              <span>Design que posiciona. Site que converte.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <span>Proposta para KP Imóveis · {PROPOSAL.issuedAt}</span>
          <span>
            <a href={PROPOSAL.energySite} target="_blank" rel="noopener noreferrer">energymidia.com.br</a>
            {" · "}
            <a href={PROPOSAL.energyInstagram} target="_blank" rel="noopener noreferrer">@energymidia</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
