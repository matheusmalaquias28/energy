import {
  BookOpen,
  Check,
  Eye,
  LayoutTemplate,
  Mail,
  MousePointerClick,
  PenLine,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";
import RevealObserver from "./_components/RevealObserver";
import ActionButtons from "./_components/ActionButtons";
import { PROPOSAL } from "./data";

const IMG = "/proposta/vanessa-veiga";

const TOTAL_SECTIONS = 6;
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

function Finding({
  id,
  tag,
  severity,
  title,
  children,
  fix,
  aside,
}: {
  id: string;
  tag: string;
  severity: "Crítico" | "Grave";
  title: React.ReactNode;
  children: React.ReactNode;
  fix: string[];
  aside?: React.ReactNode;
}) {
  return (
    <div className="finding" data-reveal>
      <div className="finding-id">
        {"// "}{id}
        <b>{tag}</b>
        <span className={`sev ${severity === "Grave" ? "warn" : ""}`}>{severity}</span>
      </div>
      <div className="finding-body">
        <div>
          <h3>{title}</h3>
          {children}
          <div className="fix" style={{ marginTop: 24 }}>
            <div className="label">O que fazemos</div>
            <ul>
              {fix.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="finding-aside">{aside}</div>
      </div>
    </div>
  );
}

function Evidence({
  src,
  alt,
  caption,
  width,
  height,
  variant,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  variant?: "dark" | "zoom" | "big" | "dark zoom";
}) {
  return (
    <figure className={`evidence ${variant ?? ""}`}>
      <div className="evidence-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
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

function MaintenanceShot() {
  return (
    <div className="browser">
      <div className="browser-bar">
        <i /><i /><i />
        <div className="browser-url">{PROPOSAL.site}</div>
      </div>
      <figure className="shot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/manutencao.png`} alt="Página inicial do site atual exibindo a mensagem de manutenção" width={943} height={459} />
      </figure>
    </div>
  );
}

function LatestProject() {
  return (
    <section className="case">
      <div className="wrap case-grid">
        <div className="case-copy" data-reveal>
          <span className="chip chip-accent">A mesma plataforma</span>
          <h2>Veredas: feito na plataforma que recomendamos.</h2>
          <p>
            Site institucional da Veredas, agência de talentos artísticos. Feito do zero pela Energy, na mesma plataforma que
            propomos para o seu: rápido, seguro e sem plugins para manter.
          </p>
          <ul className="case-tags">
            <li>Design do zero</li>
            <li>Plataforma moderna</li>
            <li>Pensado para o celular</li>
            <li>SEO desde o início</li>
          </ul>
          <a className="btn" href="https://www.veredas.art/" target="_blank" rel="noopener noreferrer">
            Ver o site no ar
          </a>
        </div>
        <div className="case-visual solo" data-reveal>
          <div className="browser case-browser">
            <div className="browser-bar">
              <i /><i /><i />
              <div className="browser-url">veredas.art</div>
            </div>
            <div className="case-screen">
              <video src="/videos/veredas-hero.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Página inicial do site da Veredas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookMock() {
  return (
    <div className="book-mocks" data-reveal>
      <div className="browser">
        <div className="browser-bar">
          <i /><i /><i />
          <div className="browser-url">{PROPOSAL.site}/livros/titulo-do-livro</div>
        </div>
        <div className="book">
          <div className="book-cover">
            <span>{PROPOSAL.client}</span>
            <b>Título do livro</b>
          </div>
          <div className="book-info">
            <span className="label">Livro</span>
            <h4>Título do livro</h4>
            <p>A sinopse, escrita por você, com o que o leitor vai encontrar nas páginas.</p>
            <div className="book-preview">
              <BookOpen size={15} /> Ler as primeiras páginas
            </div>
            <div className="book-buy">Comprar agora</div>
            <small>Pagamento direto no site, em poucos cliques.</small>
          </div>
        </div>
      </div>
      <div className="book-mail">
        <div className="book-mail-ico"><Mail size={16} /></div>
        <div>
          <b>Nova venda no seu site</b>
          <span>1× Título do livro · pagamento aprovado</span>
        </div>
      </div>
      <p className="mock-label">Exemplo simplificado da página do livro e do aviso de venda no seu e-mail.</p>
    </div>
  );
}

/* ─── Página ───────────────────────────────────────────── */

export default function PropostaVanessa() {
  return (
    <main className="vvp">
      <RevealObserver />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid-bg" />
        <div className="hero-inner">
          <div className="hero-tag">
            <span className="chip chip-accent">Análise</span>
            <span>Diagnóstico do site + Solução</span>
          </div>
          <div className="hero-brands">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-energy.svg" alt="Energy" style={{ height: 30 }} />
            <span className="x">×</span>
            <span style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, letterSpacing: "-.01em" }}>{PROPOSAL.client}</span>
          </div>
          <h1>
            Seu site existe. <em>Mas hoje ninguém consegue ver.</em>
          </h1>
          <p className="hero-lede">
            Reuni aqui a situação real do seu site, o que está por trás de cada problema e a solução que proponho para o seu
            novo site. No final, é só me dar o seu OK.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#analise">Ver a análise</a>
            <a className="btn btn-ghost" href="#solucao">Ir para a solução</a>
          </div>
          <div className="meta-grid">
            <div><div className="label">Preparada para</div><div className="v">{PROPOSAL.client}</div></div>
            <div><div className="label">Site analisado</div><div className="v">{PROPOSAL.site}</div></div>
            <div><div className="label">Data da análise</div><div className="v">{PROPOSAL.issuedAt}</div></div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <MaintenanceShot />
          <span className="stamp">É isso que o visitante vê hoje</span>
        </div>
      </section>

      {/* NÚMEROS */}
      <section style={{ padding: "56px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="stats" data-reveal>
            <div className="stat"><div className="n bad">0</div><p>páginas visíveis para quem acessa o site sem estar logado.</p></div>
            <div className="stat"><div className="n bad">1.202</div><p>comentários de robôs, hackers e golpistas acumulados no site.</p></div>
            <div className="stat"><div className="n bad">12</div><p>plugins com atualização pendente no painel.</p></div>
            <div className="stat"><div className="n bad">0</div><p>títulos, descrições e configurações básicas para o Google.</p></div>
          </div>
        </div>
      </section>

      {/* N.01 — CARTA */}
      <section className="sec">
        <div className="wrap">
          <div className="letter">
            <div className="sec-num" data-reveal>
              [{n(1)}]<span>&gt; Antes de tudo</span>
            </div>
            <div className="letter-body" data-reveal>
              <p>Oi, {PROPOSAL.firstName}!</p>
              <p>
                Sou o Matheus, desenvolvedor e fundador da Energy. Recebi os dados de acesso e entendi a sua situação atual com o
                site. Infelizmente, temos muitos casos parecidos de experiências ruins com outras empresas.
              </p>
              <p>
                O objetivo desta análise é te mostrar qual é a verdadeira situação do site hoje, sem rodeio, e como vamos
                remodelá-lo. Encontramos vários problemas e configurações inacabadas, e listo cada um logo abaixo, com o print do
                que vimos.
              </p>
              <div className="letter-sign">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/proposta/vanessa-veiga/matheus.webp" alt={PROPOSAL.author} />
                <div>
                  {PROPOSAL.author}
                  <span>Desenvolvedor e fundador · {PROPOSAL.agency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* N.02 — ANÁLISE */}
      <section className="sec sec-alt sec-tight" id="analise">
        <div className="wrap">
          <SecHead
            i={2}
            kicker="A análise"
            title="Cinco problemas que impedem o site de funcionar."
            intro="Do mais grave para o menos grave. Cada ponto vem com o print do que encontramos e o que vamos fazer para resolver."
          />

          <Finding
            id="001"
            tag="Página inicial"
            severity="Crítico"
            title="Quem acessa o site cai numa tela de manutenção."
            fix={[
              "Site novo, numa plataforma sem modo manutenção nem erro crítico.",
              "No ar para qualquer pessoa, no celular e no computador.",
              "Monitoramento para saber na hora se algo sair do ar.",
            ]}
            aside={
              <Evidence
                src={`${IMG}/manutencao.png`}
                alt="Tela de manutenção exibida na página inicial"
                caption="Página inicial, vista por um visitante"
                width={943}
                height={459}
                variant="big"
              />
            }
          >
            <p>
              Para os visitantes, a página inicial mostra só a mensagem de manutenção. Para quem entra como desenvolvedor, aparece
              um erro crítico. Na prática, nenhum visitante consegue consumir o conteúdo do site.
            </p>
          </Finding>

          <Finding
            id="002"
            tag="Páginas"
            severity="Crítico"
            title="Todas as páginas estão no modo “Privado”."
            fix={[
              "Páginas criadas do zero, públicas desde o primeiro dia.",
              "Nada de páginas de teste ou sobras de desenvolvimento.",
              "Conferimos, sem login, que tudo abre para qualquer pessoa.",
            ]}
            aside={
              <Evidence
                src={`${IMG}/paginas-privadas.png`}
                alt="Lista de páginas do painel, todas marcadas como Privado"
                caption="Painel · Páginas: Home, O que faço, Contato… todas privadas"
                width={287}
                height={364}
              />
            }
          >
            <p>
              Home, O que faço, Contato, Política de privacidade e até uma página chamada “Teste de slide”: todas estão como
              privadas. Só quem está logado no painel consegue ver.
            </p>
            <p className="quote">Você pagou por um site que somente quem está logado nele vê.</p>
          </Finding>

          <Finding
            id="003"
            tag="Segurança"
            severity="Crítico"
            title="Mais de 1.200 comentários de robôs, hackers e golpistas."
            fix={[
              "Site novo sem área de comentários aberta para robôs.",
              "Formulários com proteção contra spam.",
              "Contato chegando limpo, direto para você.",
            ]}
            aside={
              <Evidence
                src={`${IMG}/comentarios.png`}
                alt="Menu Comentários do painel com 1.202 pendentes"
                caption="Painel · 1.202 comentários"
                width={165}
                height={63}
                variant="dark zoom"
              />
            }
          >
            <p>
              Esse volume é danoso de várias formas: suja o site, abre brecha para golpes com o seu nome e, pior, pode ser a porta
              de entrada para uma invasão.
            </p>
          </Finding>

          <Finding
            id="004"
            tag="Manutenção"
            severity="Grave"
            title="12 plugins desatualizados."
            fix={[
              "Plataforma nova, sem plugins para manter atualizados.",
              "Menos peças soltas, menos portas para invasão.",
              "Fim da manutenção frequente que o WordPress exige.",
            ]}
            aside={
              <Evidence
                src={`${IMG}/plugins.png`}
                alt="Menu Plugins do painel com 12 atualizações pendentes"
                caption="Painel · 12 atualizações pendentes"
                width={143}
                height={43}
                variant="dark zoom"
              />
            }
          >
            <p>
              Plugins parados no tempo são a causa mais provável das páginas estarem em manutenção e do erro crítico. Também são
              uma das portas mais usadas em invasões de sites.
            </p>
          </Finding>

          <Finding
            id="005"
            tag="Google (SEO)"
            severity="Grave"
            title="Para o Google, o site praticamente não existe."
            fix={[
              "Título e descrição em todas as páginas.",
              "Estrutura de títulos (H1, H2…) que o Google entende.",
              "Sitemap e site enviado ao Google Search Console.",
              "Conteúdo organizado para o Google e o ChatGPT te encontrarem.",
            ]}
            aside={
              <Evidence
                src={`${IMG}/seo.png`}
                alt="Relatório de SEO mostrando título, descrição e H1 vazios e página fora do índice"
                caption="Título, descrição e H1 vazios · página fora do índice"
                width={781}
                height={599}
                variant="big"
              />
            }
          >
            <p>
              O SEO (Search Engine Optimization) são as configurações que fazem o site aparecer no Google. No seu site, elas não
              existem: sem título, sem descrição, nenhum título de seção e a página fora do índice.
            </p>
            <p style={{ marginTop: 14 }}>
              É como construir uma loja sem endereço: o Google tem dificuldade de encontrar, o cliente também, e o site tem
              baixíssimas chances de aparecer nas pesquisas. São configurações básicas, que não podiam ter sido ignoradas.
            </p>
          </Finding>

          <div className="source" data-reveal>
            <b>Como foi levantado</b>
            Análise parcial, feita em {PROPOSAL.issuedAt} com o acesso ao painel do site e visitas ao {PROPOSAL.site} sem login.
            No início do projeto fazemos a revisão completa, antes de mexer em qualquer coisa.
          </div>
        </div>
      </section>

      {/* N.03 — A SOLUÇÃO */}
      <section className="sec" id="solucao">
        <div className="wrap">
          <SecHead
            i={3}
            kicker="A solução"
            title="Minha recomendação: começar do zero, numa plataforma nova."
            intro="Os cinco problemas têm a mesma raiz. Em vez de remendar, trocamos a base do site."
          />

          <div className="duo" style={{ marginTop: 0 }}>
            <div className="box" data-reveal>
              <div className="label">Por que sair do WordPress</div>
              <p>
                Seu site foi construído no WordPress. É uma plataforma que funciona bem se configurada corretamente, mas exige
                manutenção frequente: plugins, atualizações e segurança. Foi justamente a falta disso que levou o site ao estado
                de hoje.
              </p>
            </div>
            <div className="box" data-reveal>
              <div className="label">Para onde vamos</div>
              <p>
                Migramos totalmente para uma plataforma mais barata e moderna, que acaba com esses problemas e bugs. É
                extremamente rápida e versátil, a mesma do projeto da Veredas.
              </p>
            </div>
          </div>

          <p className="pull" data-reveal style={{ marginTop: 56 }}>
            Queremos e vamos te entregar um site lindo. Mas não só isso: um site que é uma máquina de visibilidade para você na
            internet.
            <small>O objetivo do projeto</small>
          </p>

          <div className="features" style={{ marginTop: 48 }}>
            <Feature icon={<LayoutTemplate size={18} />} title="Do zero, com a sua cara">
              Um site que você se orgulha de compartilhar com os seus seguidores. Que impressiona e, principalmente, converte.
            </Feature>
            <Feature icon={<Search size={18} />} title="Encontrada no Google e no ChatGPT">
              Títulos, descrições e conteúdo organizados para as pessoas te acharem quando pesquisam, no Google ou no ChatGPT.
            </Feature>
            <Feature icon={<PenLine size={18} />} title="Painel exclusivo">
              Total liberdade para editar. Alinhamos antes o que você muda com frequência e criamos um painel só para isso.
            </Feature>
            <Feature icon={<Zap size={18} />} title="Rápido de verdade">
              A plataforma nova abre as páginas em instantes, sem o peso dos plugins do WordPress.
            </Feature>
            <Feature icon={<ShieldCheck size={18} />} title="Seguro, sem remendo">
              Sem plugins desatualizados, sem comentários de robôs e sem páginas esquecidas no modo privado.
            </Feature>
            <Feature icon={<Smartphone size={18} />} title="Pensado para o celular">
              A maioria das visitas vem do celular. Texto legível, botões fáceis de tocar e tudo funcionando na tela pequena.
            </Feature>
          </div>

          <div className="source" data-reveal>
            <b>Sobre as fotos</b>
            Visualmente, tive acesso a muito pouca coisa. Há poucas fotos no site atual, e elas podem ser reaproveitadas no novo.
          </div>
        </div>
      </section>

      <LatestProject />

      {/* N.04 — LIVROS */}
      <section className="sec sec-alt">
        <div className="wrap">
          <SecHead
            i={4}
            kicker="Seus livros"
            title="Seus livros à venda no próprio site."
            intro="A Carol me passou que você gostaria de vender seus livros dentro do site. Dá para incluir, sem intermediários."
          />
          <div className="book-grid">
            <BookMock />
            <div className="book-feats">
              <Feature icon={<Eye size={18} />} title="Página de cada livro">
                Capa, sinopse e uma prévia para o leitor conhecer o livro antes de comprar.
              </Feature>
              <Feature icon={<ShoppingBag size={18} />} title="Checkout integrado">
                O cliente compra direto no seu site, sem intermediários.
              </Feature>
              <Feature icon={<MousePointerClick size={18} />} title="Poucos cliques">
                Da escolha do livro ao pagamento aprovado, sem cadastro longo nem sair do site.
              </Feature>
              <Feature icon={<Mail size={18} />} title="Aviso no seu e-mail">
                Você vende e é notificada diretamente no seu e-mail, a cada venda.
              </Feature>
            </div>
          </div>
        </div>
      </section>

      {/* N.04 — COMO ACONTECE */}
      <section className="sec sec-alt">
        <div className="wrap">
          <SecHead
            i={5}
            kicker="Como acontece"
            title="Quatro etapas, com você atualizada em todas."
            intro="Começamos do zero, mas não do nada: tudo parte das suas respostas, e nada avança sem a sua aprovação."
          />
          <div className="steps">
            {[
              ["Etapa 01", "Perguntas", "Te enviamos algumas perguntas sobre você, o seu trabalho e o seu público. Você responde no seu tempo."],
              ["Etapa 02", "Documento do site", "Com as respostas, criamos um documento completo: todas as páginas, os textos e guias simplificados do layout. Você aprova."],
              ["Etapa 03", "Desenvolvimento", "Com o documento aprovado, começa o desenvolvimento visual e a construção. Você acompanha cada avanço."],
              ["Etapa 04", "Site no ar", "Lançamento configurado para o Google e o ChatGPT, com o painel pronto para você editar."],
            ].map(([k, t, d]) => (
              <div className="step" key={k} data-reveal>
                <div className="label">{k}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="timeline" data-reveal>
            <span className="label">Do início ao site no ar</span>
            <b>em média, até 20 dias</b>
          </div>
        </div>
      </section>

      {/* N.06 — ANTES E DEPOIS */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            i={6}
            kicker="O que muda"
            title="Hoje e depois do projeto, lado a lado."
            intro="Cada linha pode ser conferida por você no dia da entrega."
          />
          <div className="promise" data-reveal>
            <div className="promise-row head">
              <div className="k" />
              <div className="before">Hoje</div>
              <div className="after">Depois do projeto</div>
            </div>
            {[
              ["Página inicial", "Em manutenção", "No ar, para todos"],
              ["Páginas", "Privadas", "Públicas e revisadas"],
              ["Comentários de spam", "1.202", "Zero, com proteção"],
              ["Plataforma", "WordPress, 12 plugins atrasados", "Moderna, sem plugins"],
              ["Título e descrição", "Inexistentes", "Em todas as páginas"],
              ["Títulos de seção (H1–H6)", "0", "Estrutura completa"],
              ["Google", "Fora do índice", "Enviado ao Search Console"],
              ["Design", "Inacabado", "Do zero, aprovado por você"],
              ["Edição", "Painel do WordPress", "Painel exclusivo, simples"],
              ["Venda de livros", "Não existe", "Checkout no próprio site"],
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
              <div className="label">Sem promessa vazia</div>
              <p>
                Não prometemos primeira posição no Google: isso depende também de conteúdo, concorrência e tempo. Entregamos o site
                no ar, seguro e com tudo configurado para o Google conseguir te encontrar.
              </p>
            </div>
            <div className="box" data-reveal>
              <div className="label">Valores</div>
              <p>
                Ficam de fora desta página de propósito. Assim que você der o OK nessa linha, te mando tudo no seu WhatsApp, já com
                o escopo fechado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OK DA CLIENTE */}
      <section className="final">
        <div className="final-glow" />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="label" style={{ color: "var(--accent)" }}>O próximo passo</div>
          <h2>
            Seguimos nessa linha, <span className="accent">{PROPOSAL.firstName}?</span>
          </h2>
          <p>Se fizer sentido para você, é só me dar o OK. Os valores eu te mando no WhatsApp.</p>

          <div className="ok">
            <div className="label">Ao dar o OK, você concorda com esta linha</div>
            <ul>
              {[
                "Sair do WordPress e começar do zero, numa plataforma nova",
                "Perguntas, documento completo do site e só então o desenvolvimento",
                "Site configurado para ser encontrado no Google e no ChatGPT",
                "Painel exclusivo para você editar o que precisar",
                "Páginas dos livros com prévia e checkout integrado",
              ].map((t) => (
                <li key={t}><Check size={16} />{t}</li>
              ))}
            </ul>
            <p className="ok-note">
              O OK não é contrato nem pagamento: é só para eu saber que estamos alinhados. Valores e condições chegam no seu
              WhatsApp em seguida.
            </p>
            <ActionButtons />
          </div>

          <div className="sign">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/proposta/vanessa-veiga/matheus.webp" alt={PROPOSAL.author} className="avatar" />
            <div className="who">
              {PROPOSAL.author} · {PROPOSAL.agency}
              <span>Design que posiciona. Site que converte.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <span>Análise para {PROPOSAL.client} · {PROPOSAL.issuedAt}</span>
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
