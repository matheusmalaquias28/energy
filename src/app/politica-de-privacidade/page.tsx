import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { sectionBodyTitle, sectionTitle } from "@/lib/fonts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";
const UPDATED = "30 de setembro de 2026";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da Energy: site, formulários, cookies, Google Analytics e o aplicativo no Pinterest usado para importar imagens para outra ferramenta.",
  alternates: { canonical: `${SITE_URL}/politica-de-privacidade` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de Privacidade | Energy",
    description:
      "Como a Energy trata dados pessoais no site e no aplicativo conectado ao Pinterest.",
    url: `${SITE_URL}/politica-de-privacidade`,
    type: "website",
    locale: "pt_BR",
  },
};

const toc = [
  { id: "quem-somos", label: "Quem somos" },
  { id: "escopo", label: "A quem esta política se aplica" },
  { id: "dados-site", label: "Dados coletados no site" },
  { id: "formularios", label: "Formulários e comunicações" },
  { id: "cookies", label: "Cookies e Google Analytics" },
  { id: "pinterest", label: "Aplicativo no Pinterest" },
  { id: "bases-legais", label: "Finalidades e bases legais" },
  { id: "compartilhamento", label: "Compartilhamento" },
  { id: "transferencia", label: "Transferência internacional" },
  { id: "retencao", label: "Por quanto tempo guardamos" },
  { id: "seguranca", label: "Segurança" },
  { id: "direitos", label: "Seus direitos" },
  { id: "criancas", label: "Crianças e adolescentes" },
  { id: "terceiros", label: "Sites e serviços de terceiros" },
  { id: "alteracoes", label: "Alterações desta política" },
  { id: "contato", label: "Contato" },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 px-6 pb-16 pt-40 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">// Legal</p>
          <h1 className={`${sectionTitle} text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-white`}>
            Política de <span className="text-[#FE4101]">privacidade</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/45">
            Esta política explica, em linguagem direta, quais dados a Energy trata quando você usa o
            site, entra em contato conosco ou autoriza o aplicativo da Energy no Pinterest a puxar
            imagens para outra ferramenta.
          </p>
          <p className="mt-4 text-sm text-white/30">Última atualização: {UPDATED}</p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          <nav aria-label="Sumário" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/25">Nesta página</p>
            <ol className="space-y-2.5 text-sm text-white/40">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-white">
                    <span className="mr-2 text-white/20">{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-3xl space-y-14 text-[15px] leading-relaxed text-white/55">
            <Section id="quem-somos" title="1. Quem somos">
              <p>
                A controladora dos dados pessoais descritos nesta política é a <strong className="text-white/80">Energy</strong>{" "}
                (“Energy”, “nós”), responsável pelo site{" "}
                <a href={SITE_URL} className="text-white/80 underline decoration-white/20 underline-offset-4 hover:text-[#FE4101]">
                  energymidia.com.br
                </a>{" "}
                e pelo aplicativo conectado à plataforma Pinterest desenvolvido para importar imagens
                autorizadas pelo usuário para outra ferramenta.
              </p>
              <p>
                Canal de privacidade:{" "}
                <a href="mailto:contato@energymidia.com.br" className="text-white/80 hover:text-[#FE4101]">
                  contato@energymidia.com.br
                </a>
                .
              </p>
            </Section>

            <Section id="escopo" title="2. A quem esta política se aplica">
              <p>Esta política cobre:</p>
              <ul>
                <li>visitantes e clientes do site energymidia.com.br e de páginas vinculadas a ele;</li>
                <li>pessoas que enviam formulários, e-mails ou mensagens de WhatsApp para a Energy;</li>
                <li>
                  usuários que instalam, autorizam ou usam o aplicativo da Energy no Pinterest para
                  selecionar pins e transferir imagens para outra ferramenta.
                </li>
              </ul>
              <p>
                O tratamento observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD) e,
                quando o aplicativo acessa a API do Pinterest, também as regras dessa plataforma para
                desenvolvedores, inclusive a exigência de informar com clareza quais dados da conta são
                lidos e para quê.
              </p>
            </Section>

            <Section id="dados-site" title="3. Dados coletados no site">
              <p>Ao navegar no site, podemos tratar:</p>
              <ul>
                <li>
                  <strong className="text-white/75">Dados de navegação.</strong> Endereço IP, tipo de
                  navegador, sistema operacional, páginas visitadas, data e hora de acesso, origem da
                  visita e identificadores de cookies.
                </li>
                <li>
                  <strong className="text-white/75">Dados que você informa.</strong> Nome, telefone,
                  empresa e qualquer mensagem que você enviar pelo formulário de contato, e-mail ou
                  WhatsApp.
                </li>
                <li>
                  <strong className="text-white/75">Dados de projeto.</strong> Briefings, arquivos,
                  referências visuais e informações comerciais que você compartilhar para orçamento ou
                  execução de um trabalho.
                </li>
              </ul>
              <p>
                Não pedimos dados sensíveis (origem racial, saúde, biometria, convicção religiosa ou
                orientação sexual) para usar o site. Se um material de projeto contiver esse tipo de
                informação por iniciativa sua, ele será usado apenas para executar o que foi combinado.
              </p>
            </Section>

            <Section id="formularios" title="4. Formulários e comunicações">
              <p>
                O formulário de orçamento coleta nome, telefone e empresa para responder ao seu pedido.
                Esses dados servem para contato comercial, elaboração de proposta e registro do
                atendimento. Não usamos essa lista para vender cadastros a terceiros.
              </p>
              <p>
                Mensagens enviadas por e-mail ou WhatsApp ficam no histórico do atendimento pelo tempo
                necessário para concluir a conversa, cumprir obrigações legais e, se houver contrato,
                prestar o serviço contratado.
              </p>
            </Section>

            <Section id="cookies" title="5. Cookies e Google Analytics">
              <p>
                Usamos cookies e tecnologias semelhantes para o site funcionar e para entender, de forma
                agregada, como as páginas são usadas.
              </p>
              <ul>
                <li>
                  <strong className="text-white/75">Essenciais.</strong> Necessários para segurança,
                  carregamento e preferências básicas da sessão.
                </li>
                <li>
                  <strong className="text-white/75">Analíticos.</strong> O Google Analytics (tag{" "}
                  <span className="text-white/70">G-JJH6JXH7PP</span>) mede visitas, páginas e origem do
                  tráfego. O Google pode tratar esses dados conforme a própria política, inclusive em
                  servidores fora do Brasil.
                </li>
              </ul>
              <p>
                Você pode bloquear ou apagar cookies nas configurações do navegador. Se fizer isso,
                algumas funções do site podem deixar de funcionar como esperado. Também é possível usar
                o complemento de desativação do Google Analytics disponibilizado pelo Google.
              </p>
            </Section>

            <Section id="pinterest" title="6. Aplicativo no Pinterest">
              <p>
                A Energy desenvolve um aplicativo na plataforma Pinterest cuja função é{" "}
                <strong className="text-white/80">
                  puxar imagens que você autorizar e enviá-las para outra ferramenta
                </strong>
                . O objetivo é encurtar o caminho entre uma referência salva no Pinterest e o fluxo de
                trabalho em que essa imagem será usada — por exemplo, um ambiente de criação, organização
                de referências ou produção de conteúdo operado por você ou integrado ao aplicativo.
              </p>
              <p>
                A conexão acontece por autorização OAuth do Pinterest. Nada é lido da sua conta antes de
                você conceder as permissões na tela oficial do Pinterest. Você pode recusar ou revogar
                esse acesso a qualquer momento.
              </p>

              <h3 className={`${sectionBodyTitle} pt-2 text-base text-white`}>O que podemos acessar</h3>
              <p>Conforme as permissões que você aceitar, o aplicativo pode ler:</p>
              <ul>
                <li>identificador da conta, nome de usuário e dados básicos de perfil necessários para saber quem autorizou a conexão;</li>
                <li>quadros (boards): nome, descrição, identificador e indicação de privacidade, para você escolher de onde importar;</li>
                <li>
                  pins: título, descrição, link de destino, data, identificadores, quadro de origem e as
                  URLs ou arquivos de imagem e mídia que a API do Pinterest disponibilizar;
                </li>
                <li>metadados técnicos da mídia (como formato ou dimensões), quando a API os fornecer, apenas para concluir a transferência.</li>
              </ul>

              <h3 className={`${sectionBodyTitle} pt-2 text-base text-white`}>Para que usamos esses dados</h3>
              <ul>
                <li>mostrar seus quadros e pins dentro do aplicativo, para você selecionar o que deseja importar;</li>
                <li>baixar ou referenciar somente as imagens escolhidas e entregá-las à ferramenta de destino;</li>
                <li>guardar um registro técnico da importação (qual pin foi transferido, status, data e identificadores) para suporte, prevenção de abuso e continuidade do serviço;</li>
                <li>manter o token de acesso apenas enquanto a conexão estiver ativa, para executar os pedidos que você fizer.</li>
              </ul>

              <h3 className={`${sectionBodyTitle} pt-2 text-base text-white`}>O que não fazemos</h3>
              <ul>
                <li>não publicamos pins, comentários ou mensagens em seu nome;</li>
                <li>não seguimos contas, não alteramos quadros e não criamos conteúdo na sua conta, salvo se uma permissão de escrita for pedida no futuro e você a autorizar de forma explícita;</li>
                <li>não vendemos dados obtidos no Pinterest;</li>
                <li>não usamos seus pins para montar perfis publicitários nem os repassamos a anunciantes;</li>
                <li>não acessamos contas, quadros ou pins aos quais você não tenha acesso legítimo;</li>
                <li>não treinamos modelos de inteligência artificial de terceiros com o conteúdo da sua conta.</li>
              </ul>

              <h3 className={`${sectionBodyTitle} pt-2 text-base text-white`}>Ferramenta de destino</h3>
              <p>
                As imagens importadas seguem para a ferramenta ou ambiente que o próprio fluxo do
                aplicativo indicar. Essa ferramenta pode ser operada pela Energy ou por um serviço que
                você escolheu usar. A partir da entrega, o tratamento na ferramenta de destino segue a
                política daquele serviço, além desta. A Energy não amplia o uso das imagens para fins
                diferentes da importação que você pediu.
              </p>

              <h3 className={`${sectionBodyTitle} pt-2 text-base text-white`}>Revogação e exclusão</h3>
              <p>
                Você pode desconectar o aplicativo nas configurações da sua conta Pinterest (aplicativos
                conectados). A revogação impede novos acessos. Para apagar tokens, registros de
                importação e cópias que ainda estejam sob controle da Energy, escreva para{" "}
                <a href="mailto:contato@energymidia.com.br" className="text-white/80 hover:text-[#FE4101]">
                  contato@energymidia.com.br
                </a>{" "}
                com o assunto “Exclusão — app Pinterest”. Atendemos o pedido dentro do prazo da LGPD,
                salvo quando a guarda for exigida por lei.
              </p>
              <p>
                O Pinterest é um controlador independente da própria plataforma. O uso da sua conta
                também está sujeito à{" "}
                <a
                  href="https://policy.pinterest.com/pt-br/privacy-policy"
                  className="text-white/80 underline decoration-white/20 underline-offset-4 hover:text-[#FE4101]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Privacidade do Pinterest
                </a>{" "}
                e aos termos da API. A Energy usa os dados recebidos pela API somente para operar o
                serviço de importação descrito aqui e em conformidade com as diretrizes para
                desenvolvedores do Pinterest.
              </p>
            </Section>

            <Section id="bases-legais" title="7. Finalidades e bases legais">
              <p>Tratamos dados pessoais com base na LGPD, conforme o caso:</p>
              <ul>
                <li>
                  <strong className="text-white/75">Execução de contrato ou de procedimentos preliminares</strong>{" "}
                  — responder orçamentos, prestar serviços de design e desenvolvimento e operar a
                  importação de imagens que você solicitar.
                </li>
                <li>
                  <strong className="text-white/75">Consentimento</strong> — quando você autoriza o
                  aplicativo no Pinterest ou aceita cookies não essenciais, quando essa aceitação for
                  exigida.
                </li>
                <li>
                  <strong className="text-white/75">Legítimo interesse</strong> — medir audiência do
                  site, proteger o serviço contra abuso e melhorar páginas, sempre com o menor volume de
                  dados possível.
                </li>
                <li>
                  <strong className="text-white/75">Obrigação legal</strong> — guarda de registros e
                  documentos quando a lei exigir.
                </li>
              </ul>
            </Section>

            <Section id="compartilhamento" title="8. Compartilhamento">
              <p>Não vendemos dados pessoais. Podemos compartilhá-los apenas com:</p>
              <ul>
                <li>
                  <strong className="text-white/75">Operadores de infraestrutura</strong> — hospedagem,
                  e-mail e ferramentas usadas para manter o site e o aplicativo no ar;
                </li>
                <li>
                  <strong className="text-white/75">Google</strong> — para medição de audiência via
                  Google Analytics;
                </li>
                <li>
                  <strong className="text-white/75">Pinterest</strong> — quando você autoriza o
                  aplicativo, a autenticação e a leitura dos pins ocorrem pelos serviços do próprio
                  Pinterest;
                </li>
                <li>
                  <strong className="text-white/75">Ferramenta de destino</strong> — somente as imagens
                  e metadados necessários à importação que você iniciar;
                </li>
                <li>
                  <strong className="text-white/75">Autoridades</strong> — se houver obrigação legal,
                  ordem válida ou defesa de direito em processo.
                </li>
              </ul>
              <p>
                Prestadores recebem apenas o que for necessário para a função contratada e devem proteger
                os dados de acordo com a lei.
              </p>
            </Section>

            <Section id="transferencia" title="9. Transferência internacional">
              <p>
                Alguns operadores, como Google, Pinterest e provedores de hospedagem, podem processar
                dados fora do Brasil. Quando isso ocorre, a transferência segue a LGPD: cláusulas
                contratuais, países com grau de proteção adequado ou outra hipótese legal aplicável. O
                uso continua limitado às finalidades desta política.
              </p>
            </Section>

            <Section id="retencao" title="10. Por quanto tempo guardamos">
              <ul>
                <li>
                  <strong className="text-white/75">Leads e mensagens.</strong> Enquanto durar a
                  conversa comercial e, depois, pelo prazo necessário para eventual contrato, defesa de
                  direitos ou obrigação legal.
                </li>
                <li>
                  <strong className="text-white/75">Dados de projeto.</strong> Pelo tempo do contrato e
                  do suporte combinado, salvo pedido de exclusão que não conflite com dever legal.
                </li>
                <li>
                  <strong className="text-white/75">Tokens do Pinterest.</strong> Enquanto a conexão
                  estiver ativa. Após a revogação, são apagados ou inutilizados.
                </li>
                <li>
                  <strong className="text-white/75">Registros de importação.</strong> Pelo tempo
                  necessário para suporte, segurança e comprovação da operação, e depois eliminados ou
                  anonimizados.
                </li>
                <li>
                  <strong className="text-white/75">Logs e analytics.</strong> Conforme os prazos das
                  ferramentas utilizadas, em geral de forma agregada.
                </li>
              </ul>
            </Section>

            <Section id="seguranca" title="11. Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais proporcionais ao risco: conexão criptografada
                (HTTPS), controle de acesso aos sistemas, restrição de tokens do Pinterest ao serviço que
                precisa deles e limitação de quem na Energy pode ver dados de clientes. Nenhum sistema é
                livre de risco. Se identificarmos um incidente com risco relevante aos titulares,
                comunicaremos os afetados e a Autoridade Nacional de Proteção de Dados quando a LGPD
                exigir.
              </p>
            </Section>

            <Section id="direitos" title="12. Seus direitos">
              <p>Você pode solicitar, nos termos da LGPD:</p>
              <ul>
                <li>confirmação de que tratamos seus dados e acesso a eles;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
                <li>portabilidade, quando aplicável;</li>
                <li>informação sobre com quem compartilhamos seus dados;</li>
                <li>revogação do consentimento, sem efeito retroativo sobre tratamentos já feitos de forma lícita;</li>
                <li>oposição a tratamentos baseados em legítimo interesse, quando couber.</li>
              </ul>
              <p>
                Envie o pedido para{" "}
                <a href="mailto:contato@energymidia.com.br" className="text-white/80 hover:text-[#FE4101]">
                  contato@energymidia.com.br
                </a>
                . Podemos pedir uma confirmação simples de identidade para não entregar dados à pessoa
                errada. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados
                (ANPD).
              </p>
            </Section>

            <Section id="criancas" title="13. Crianças e adolescentes">
              <p>
                O site e o aplicativo no Pinterest não são dirigidos a crianças. Não coletamos
                intencionalmente dados de menores de 18 anos. Se você acredita que dados de uma criança
                foram enviados sem autorização de responsável, escreva para o e-mail de contato para que
                possamos apagá-los.
              </p>
            </Section>

            <Section id="terceiros" title="14. Sites e serviços de terceiros">
              <p>
                O site pode apontar para Instagram, LinkedIn, Behance, WhatsApp, Pinterest e outras
                páginas. Ao sair do energymidia.com.br, passa a valer a política do destino. O mesmo
                ocorre com a ferramenta que recebe as imagens importadas, quando ela não é operada pela
                Energy.
              </p>
            </Section>

            <Section id="alteracoes" title="15. Alterações desta política">
              <p>
                Podemos atualizar este texto quando o site, o aplicativo do Pinterest ou a lei mudarem. A
                data no topo da página indica a versão vigente. Mudanças relevantes sobre o uso de dados
                do Pinterest serão refletidas aqui antes ou no momento em que passarem a valer. O uso
                continuado do site ou do aplicativo depois da atualização indica ciência da nova versão.
              </p>
            </Section>

            <Section id="contato" title="16. Contato">
              <p>
                Dúvidas, pedidos de acesso ou exclusão — inclusive dados ligados ao aplicativo do
                Pinterest — podem ser enviados para:
              </p>
              <p>
                Energy
                <br />
                E-mail:{" "}
                <a href="mailto:contato@energymidia.com.br" className="text-white/80 hover:text-[#FE4101]">
                  contato@energymidia.com.br
                </a>
                <br />
                Site:{" "}
                <Link href="/" className="text-white/80 hover:text-[#FE4101]">
                  energymidia.com.br
                </Link>
              </p>
            </Section>
          </article>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      <h2 className={`${sectionTitle} text-[clamp(1.35rem,2vw,1.75rem)] leading-tight text-white`}>
        {title}
      </h2>
      {children}
    </section>
  );
}
