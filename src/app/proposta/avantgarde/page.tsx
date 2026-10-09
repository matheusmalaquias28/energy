import {
  AlignJustify,
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  CircleChevronDown,
  Play,
  VolumeX,
} from "lucide-react";
import RevealObserver from "./_components/RevealObserver";
import { CHANNEL, FAN_VIDEOS, IMG, PROJECTS, PROPOSAL, WA_HREF, thumb, watch } from "./data";

const TOTAL_SECTIONS = 6;
const n = (i: number) => `N.${String(i).padStart(2, "0")}/${TOTAL_SECTIONS}`;

/* Grade de thumbnails do fundo do hero: tudo vídeo real do canal. */
const HERO_WALL = [
  "4z7dc-Mjt6g", "PrVoQ2K7S2E", "6w-hj46vosM", "1BoMj9L4XB8",
  "JBoosSx4xyw", "9tRL8j8Lirk", "htpUIeyjRpE", "eFrcC3pV6PU",
  "tNuE81PbZRE", "VreW7bn45Og", "H3Wwefk2RZg", "dYoOcWHGIP8",
];

function WhatsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.47-.23-.36a9.43 9.43 0 1 1 7.99 4.41zm8.02-17.45A11.27 11.27 0 0 0 12.04.75C5.8.75.73 5.82.73 12.06c0 2 .52 3.94 1.51 5.65L.64 23.25l5.68-1.49a11.3 11.3 0 0 0 5.41 1.38h.01c6.24 0 11.31-5.07 11.31-11.31 0-3.02-1.18-5.86-3.31-8z" />
    </svg>
  );
}

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

/** Cada achado do diagnóstico vira um "código de falha", como no scanner. */
function Fault({ code, tag, title, children, fix, aside }: { code: string; tag: string; title: React.ReactNode; children: React.ReactNode; fix: string[]; aside?: React.ReactNode }) {
  return (
    <div className="fault" data-reveal>
      <div className="fault-id">
        <span className="dtc">{code}</span>
        <b>{tag}</b>
      </div>
      <div className={`fault-body ${aside ? "" : "single"}`}>
        <div>
          <h3>{title}</h3>
          {children}
          <div className="fix">
            <div className="label">Como fica</div>
            <ul>
              {fix.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
        {aside}
      </div>
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


function PhoneHomeNow() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-screen old">
          <div className="old-head">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.logo} alt="" />
            <AlignJustify size={16} color="#f07c1e" />
          </div>
          <div className="old-slide" style={{ backgroundImage: `url(${IMG.dyno992})` }}>
            <div className="old-yt">
              <span><Play size={14} fill="#fff" /></span>
            </div>
            <div className="old-title">Descubra a AvantGarde no YouTube</div>
            <div className="old-text">São diversos vídeos detalhando projetos, serviços e todo o know-how técnico da oficina…</div>
            <div className="old-btn">Acessar ao Canal</div>
            <div className="old-dots"><i className="on" /><i /><i /></div>
          </div>
          <div className="old-foot">
            <div className="old-social"><i /><i /></div>
            AvantGarde Performance &amp; Maintenance: Manutenção de Importados · Preparação · Dinamômetro 4x4 · Lounge
          </div>
          <div className="old-wa">Contato pelo WhatsApp</div>
        </div>
      </div>
      <p className="phone-cap">Reconstituição da home no celular.<br />Depois do carrossel, já é o rodapé.</p>
    </div>
  );
}

function PhonePorscheNow() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-screen old">
          <div className="old-head">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.logo} alt="" />
            <AlignJustify size={16} color="#f07c1e" />
          </div>
          <div className="old-hero" style={{ backgroundImage: `url(${IMG.dyno992})` }}>
            <div className="old-h1">Oficina especializada em Porsche</div>
            <div className="old-sub">Mais do que especialistas. Entusiastas de Porsche.</div>
            <div className="old-btn">Revisão e Manutenção</div>
            <div className="old-btn">Agendamento e Orçamento</div>
            <div className="old-glitch" aria-hidden>
              <ArrowUpRight size={30} strokeWidth={1.6} />
              <ArrowLeft size={30} strokeWidth={1.6} />
              <VolumeX size={30} strokeWidth={1.6} />
              <ChevronDown size={24} strokeWidth={1.6} />
              <AlignJustify size={30} strokeWidth={1.6} />
              <CircleChevronDown size={30} strokeWidth={1.6} />
            </div>
          </div>
        </div>
      </div>
      <p className="phone-cap">Página Porsche no celular.<br />Ícones soltos por cima da primeira tela.</p>
    </div>
  );
}

/* ─── Página ───────────────────────────────────────────── */

export default function PropostaAvantGarde() {
  return (
    <main className="avp">
      <RevealObserver />

      {/* HERO */}
      <section className="hero">
        <div className="hero-wall" aria-hidden>
          {HERO_WALL.map((id) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={id} src={thumb(id, "mqdefault")} alt="" loading="eager" width={320} height={180} />
          ))}
        </div>
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <div className="hero-tag">
            <span className="chip chip-accent">Proposta</span>
            <span>Novo site · AvantGarde Performance &amp; Maintenance</span>
          </div>
          <div className="hero-brands">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-energy.svg" alt="Energy" className="energy" />
            <span className="x">×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.logo} alt="AvantGarde" className="logo-white avgd" />
          </div>
          <h1>
            O canal acelera toda semana. <em>O site ficou parado em 2018.</em>
          </h1>
          <p className="hero-lede">
            Gui, essa proposta foi feita por um inscrito. Acompanho o canal há anos, conheço a oficina pelos vídeos, e quando
            entrei no site senti falta de tudo aquilo que faz a AvantGarde ser referência.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#diagnostico">Ver o diagnóstico</a>
            <a className="btn btn-ghost" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              <WhatsIcon size={16} /> Falar comigo
            </a>
          </div>
          <div className="meta-grid">
            <div><div className="label">Preparada para</div><div className="v">{PROPOSAL.preparedFor}</div></div>
            <div><div className="label">Emitida em</div><div className="v">{PROPOSAL.issuedAt}</div></div>
            <div><div className="label">Feita por</div><div className="v">{PROPOSAL.author}, inscrito do canal</div></div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="strip">
        <div className="wrap">
          <div className="stats" data-reveal>
            <div className="stat"><div className="n">{CHANNEL.subs}</div><p>inscritos no Gui AvantGarde.</p></div>
            <div className="stat"><div className="n">{CHANNEL.views}</div><p>de visualizações no canal.</p></div>
            <div className="stat"><div className="n">{CHANNEL.videos}</div><p>vídeos publicados desde {CHANNEL.since}.</p></div>
            <div className="stat"><div className="n bad">0</div><p>vezes que o Gui aparece no site da oficina.</p></div>
          </div>
        </div>
      </section>

      {/* N.01 — RECADO */}
      <section className="sec">
        <div className="wrap">
          <SecHead i={1} kicker="Antes de tudo" title="Um recado de quem está do lado de cá da tela." />
          <div className="letter-grid">
            <div className="letter" data-reveal>
              <p>
                Fala, Gui. Antes de falar de site, um contexto: eu chego aqui como fã. Já vi a 992.2 GTS sair desbloqueada com 601
                hp, a despedida da C63S, o Avantrip rodando o Japão até o Daikoku Futo, o encontro com o Horácio Pagani e o Talkzam
                com o Clóvis de Barros.
              </p>
              <p>
                O que sempre me chamou atenção é que o canal não é só entretenimento. Ele ensina, opina sem medo e mostra a oficina
                por dentro. Em {CHANNEL.videos} vídeos, a AvantGarde virou uma referência de carro no Brasil.
              </p>
              <p>
                Aí eu entrei no avgd.com.br, o link que está no perfil do canal. Encontrei um carrossel, um preço de revisão de 2018
                e nenhuma menção a você. Quem sai de um vídeo de 140 mil views e cai ali sente a diferença na hora.
              </p>
              <p className="hl">
                Essa proposta é para o site ficar no mesmo nível do canal e da oficina.
              </p>
              <div className="letter-sign">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/proposta/avantgarde/matheus.webp" alt={PROPOSAL.author} />
                <div>
                  {PROPOSAL.author}
                  <span>Inscrito do canal · {PROPOSAL.agency}</span>
                </div>
              </div>
            </div>
            <div className="fan-videos">
              {FAN_VIDEOS.map((v) => (
                <a className="fan-vid" key={v.id} href={watch(v.id)} target="_blank" rel="noopener noreferrer" data-reveal>
                  <div className="img" style={{ backgroundImage: `url(${thumb(v.id, "mqdefault")})` }}>
                    <span className="play"><Play size={14} fill="currentColor" /></span>
                  </div>
                  <div className="tag">{v.tag}</div>
                  <div className="t">{v.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* N.02 — DIAGNÓSTICO */}
      <section className="sec sec-alt" id="diagnostico">
        <div className="wrap">
          <SecHead
            i={2}
            kicker="Scanner ligado"
            title="Passei o scanner no site. Estes são os códigos de falha."
            intro="Site visitado em 8 de outubro de 2026, no celular e no computador: home, Manutenção, Performance, páginas por marca, Portfólio e Contato."
          />

          <Fault
            code="P0001"
            tag="Home"
            title="A home é um carrossel de três slides e o rodapé."
            aside={<PhoneHomeNow />}
            fix={[
              "Home que conta a oficina inteira: serviços, projetos, canal, lounge e endereço.",
              "Primeira tela com vídeo da oficina e o agendamento a um toque.",
            ]}
          >
            <p>
              Os slides são YouTube, Intakes Eventuri e Oficina de Importados. Depois disso, acaba. No computador, a página inteira
              tem cerca de 775 px de altura, menos que uma tela. Não há serviços, projetos, marcas atendidas, depoimentos, mapa nem
              o lounge. E a home não tem título principal (H1) para o Google ler.
            </p>
          </Fault>

          <Fault
            code="P0002"
            tag="Marca"
            title="O maior ativo da AvantGarde não aparece no site."
            fix={[
              "Você e o canal na primeira dobra, com os números de verdade.",
              "Vídeos novos entrando no site sozinhos, sem ninguém publicar.",
              "Cada projeto com o vídeo dele do lado.",
            ]}
          >
            <p>
              São {CHANNEL.subs} inscritos e {CHANNEL.views} de visualizações, e o canal entra como um dos slides. Seu nome não aparece
              em nenhuma página. No rodapé há ícones de Facebook e Instagram, mas não do YouTube. Para quem conhece o canal, o site
              não parece da mesma empresa. Para quem não conhece, perde a prova de autoridade mais forte que vocês têm.
            </p>
          </Fault>

          <Fault
            code="P0003"
            tag="Visual"
            title="Um template de 2021 com fotos de 2016."
            fix={[
              "Design próprio, escuro, com fotos e vídeos grandes da oficina.",
              "Tipografia e cor com cara de AvantGarde, não de tema pronto.",
            ]}
          >
            <p>
              O site roda o tema Divi 4.9.6. As fotos das páginas Porsche e Performance foram enviadas, em sua maioria, entre 2016 e
              2017. Header branco com o logo em PNG pequeno, fotos escurecidas, títulos em caixa alta com espaçamento largo e texto
              justificado no celular. Nada disso combina com um 992 no dinamômetro.
            </p>
          </Fault>

          <Fault
            code="P0004"
            tag="Erros"
            title="Erros que o cliente vê antes de ligar."
            aside={<PhonePorscheNow />}
            fix={[
              "Revisão completa de texto, preço e datas antes de ir ao ar.",
              "Preços e projetos editáveis pelo time, num painel simples.",
            ]}
          >
            <KV
              rows={[
                ["Página Porsche, celular", <span key="a" className="bad">Ícones soltos sobre o título</span>],
                ["Revisão Porsche", <span key="b" className="bad">“R$ 580”, valor de maio de 2018</span>],
                ["Portfólio", "“Portifolio”, marcas datadas de 2020"],
                ["Texto do Portfólio", "“Aos poucos estamos expandindo…”"],
                ["Formulário de contato", "Botão em inglês: “Submit”"],
                ["Slide Eventuri", "Miniatura do vídeo não carrega"],
              ]}
            />
          </Fault>

          <Fault
            code="P0005"
            tag="Contato"
            title="Dois números de WhatsApp, e o botão flutuante vai para o fixo."
            fix={[
              "Um número só, o que o time realmente atende.",
              "Mensagem pronta com o carro e o serviço: “Quero revisar meu Macan 2.0”.",
              "Orçamento com nome e WhatsApp. Placa e chassi depois, na conversa.",
            ]}
          >
            <p>
              O botão verde que aparece em todas as páginas abre conversa com o (11) 5533-0303, o telefone fixo. A página de
              Portfólio informa outro WhatsApp, o (11) 96645-0128. Vale confirmar se o fixo tem WhatsApp Business: se não tiver, o
              botão principal do site está perdendo cliente.
            </p>
            <KV
              rows={[
                ["Botão flutuante", "(11) 5533-0303"],
                ["Página Portfólio", "(11) 96645-0128"],
                ["Formulário de orçamento", "Pede placa e chassi de 17 caracteres"],
              ]}
            />
          </Fault>

          <Fault
            code="P0006"
            tag="Por baixo do capô"
            title="O Google e o celular também sentem."
            fix={[
              "Site em avgd.com.br, com as páginas antigas redirecionadas.",
              "Dados de oficina para o Google: endereço, horário, marcas e avaliações.",
              "Zoom liberado, títulos certos, idioma em português.",
            ]}
          >
            <KV
              rows={[
                ["Endereço do site", "avgd.com.br redireciona para /AVGD/"],
                ["Resposta do servidor", <span key="s" className="bad">≈ 2,8 s no meu teste</span>],
                ["Página utilizável", "≈ 5 s no meu teste"],
                ["Zoom no celular", <span key="z" className="bad">Bloqueado</span>],
                ["Dados de oficina (schema)", "Nenhum"],
                ["Idioma declarado", "Inglês (en-US)"],
                ["Título principal da página Porsche", "Inclui “R$ 580,00” e “☎️ Telefone:”"],
              ]}
            />
          </Fault>
        </div>
      </section>

      {/* N.03 — O QUE JÁ EXISTE */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={3}
            kicker="Peças originais"
            title="O melhor já existe. Está escondido nas páginas internas."
            intro="Tudo abaixo está escrito no site de hoje, só que três cliques para dentro. No site novo, vira vitrine."
          />
          <div className="assets">
            {[
              ["// 001 · Equipamento", "Dinamômetro 4x4", "Na casa, para medir antes e depois de cada projeto. É o que dá credibilidade ao número."],
              ["// 002 · Pioneirismo", "Hunter WinAlign Elite", "A primeira alinhadora desse modelo no Brasil, segundo a página Conceito. Ao lado da balanceadora Roadforce."],
              ["// 003 · Diagnóstico", "Scanners oficiais", "Os mesmos de concessionárias Audi, Bentley, BMW, Jaguar, Lamborghini, Land Rover, Mercedes, Porsche e Volvo."],
              ["// 004 · Exclusividade", "Eventuri no Brasil", "Intakes da inglesa Eventuri trazidos com exclusividade pela AvantGarde. Hoje, um slide."],
            ].map(([k, t, d]) => (
              <div className="asset" key={k} data-reveal>
                <div className="label">{k}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>

          <div className="projects">
            {PROJECTS.map((p) => (
              <div className="proj" key={p.car} data-reveal>
                <div className="img" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="b">
                  <span className="stage">{p.stage}</span>
                  <div className="num">{p.n}<small>{p.unit}</small></div>
                  <h4>{p.car}</h4>
                  <p>{p.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="pull" data-reveal>
            Uma oficina com dinamômetro próprio e 1.153 vídeos não precisa convencer ninguém. Precisa só mostrar.
            <small>Minha leitura</small>
          </p>
        </div>
      </section>

      {/* N.04 — CAMINHO DO INSCRITO */}
      <section className="sec sec-alt">
        <div className="wrap">
          <SecHead
            i={4}
            kicker="Do vídeo à oficina"
            title="O inscrito já quer. O site precisa só não atrapalhar."
            intro="Um exemplo com o vídeo da 992.2 GTS: alguém com um 911 assiste, se empolga e vai atrás da oficina."
          />
          <div className="flow">
            <div className="flow-col now" data-reveal>
              <span className="chip">Hoje</span>
              <ol className="flow-steps">
                <li><span>Assiste a <b>992.2 GTS com 601 hp</b> no canal.</span></li>
                <li><span>Clica em <b>avgd.com.br</b> no perfil.</span></li>
                <li><span>Cai num <b>carrossel</b> que manda de volta para o YouTube.</span></li>
                <li><span>Procura remap de 911 e acha <b>fotos de 2017</b>.</span></li>
                <li><span>Toca no WhatsApp e cai no <b>telefone fixo</b>.</span></li>
              </ol>
              <div className="flow-time">
                <span className="label">Resultado</span>
                <span className="n bad">Fecha a aba e volta para o vídeo</span>
              </div>
            </div>
            <div className="flow-col next" data-reveal>
              <span className="chip chip-good">Com o site novo</span>
              <ol className="flow-steps">
                <li><span>Assiste a <b>992.2 GTS com 601 hp</b> no canal.</span></li>
                <li><span>O link leva direto à <b>página do projeto</b>.</span></li>
                <li><span>Vê o vídeo, os <b>números do dinamômetro</b> e o que foi feito.</span></li>
                <li><span>Escolhe <b>o carro dele</b> e o serviço.</span></li>
                <li><span>WhatsApp abre com <b>“Quero esse estágio no meu 911”</b>.</span></li>
              </ol>
              <div className="flow-time">
                <span className="label">Resultado</span>
                <span className="n good">Conversa começa sabendo o que ele quer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* N.05 — ESTÁGIOS */}
      <section className="sec sec-alt">
        <div className="wrap">
          <SecHead
            i={5}
            kicker="Como acontece"
            title="Quatro estágios, com vocês aprovando cada um."
            intro="O site atual segue no ar até o dia da troca. Nenhuma página sai do Google no caminho."
          />
          <div className="steps">
            {[
              ["Estágio 1", "Imersão", "Conversa com você e com o time: serviços que mais vendem, o que o cliente pergunta, o que o canal já mostrou."],
              ["Estágio 2", "Design", "Home, marca, projeto e agendamento desenhados e aprovados antes de qualquer código."],
              ["Estágio 3", "Construção", "Site, painel de projetos e integração com o canal e o WhatsApp. Link de teste para vocês usarem."],
              ["Estágio 4", "Lançamento", "Redirecionamento das páginas antigas, teste de velocidade e acompanhamento depois do ar."],
            ].map(([k, t, d]) => (
              <div className="step" key={k} data-reveal>
                <div className="label">{k}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* N.06 — DINAMÔMETRO */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={6}
            kicker="Antes e depois"
            title="Na mesma rampa, original contra preparado."
            intro="O que muda em cada ponto que apareceu no scanner."
          />
          <div className="promise" data-reveal>
            <div className="promise-row head">
              <div className="k" />
              <div className="before">Original</div>
              <div className="after">Preparado</div>
            </div>
            {[
              ["Home", "Carrossel de 3 slides", "Oficina, projetos e canal"],
              ["Você e o canal", "Não aparecem", "Na primeira tela"],
              ["Projetos", "Fotos de 2017", "Página com vídeo e dinamômetro"],
              ["Vídeos novos", "Fora do site", "Entram sozinhos"],
              ["WhatsApp", "Fixo e celular misturados", "Um número, mensagem pronta"],
              ["Preços e textos", "Revisão de 2018", "Editáveis pelo time"],
              ["Celular", "Zoom bloqueado, ícones soltos", "Pensado primeiro para o celular"],
              ["Google", "Sem dados de oficina", "Endereço, horário e marcas"],
              ["Endereço", "avgd.com.br/AVGD/", "avgd.com.br"],
            ].map(([k, b, a]) => (
              <div className="promise-row" key={k}>
                <div className="k">{k}</div>
                <div className="before">{b}</div>
                <div className="after">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="final">
        <div className="final-glow" />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="label accent">O próximo passo</div>
          <h2>
            O canal já é referência. <span className="accent">Bora deixar o site no mesmo estágio?</span>
          </h2>
          <p>
            Me chama no WhatsApp. Te mostro o caminho, os prazos e o investimento numa conversa rápida, do jeito que fizer
            sentido para a AvantGarde.
          </p>
          <div className="wa-preview" aria-hidden>
            <div className="bubble">
              {PROPOSAL.whatsappMessage}
              <time>agora ✓✓</time>
            </div>
          </div>
          <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">
            <WhatsIcon size={20} /> Quero saber mais
          </a>
          <div className="sign">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/proposta/avantgarde/matheus.webp" alt={PROPOSAL.author} className="avatar" />
            <div className="who">
              {PROPOSAL.author} · {PROPOSAL.agency}
              <span>Inscrito do canal. Design que posiciona, site que converte.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <span>Proposta para AvantGarde · {PROPOSAL.issuedAt}</span>
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
