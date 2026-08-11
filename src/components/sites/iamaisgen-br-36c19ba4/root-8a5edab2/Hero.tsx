import { DarkGradientBg } from "@/components/ui/elegant-dark-pattern";
import { LpContactButton } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/LpContactButton";

export function Hero() {
  return (
    <DarkGradientBg
      as="header"
      id="hero"
      ambientAnimation
      className="flex min-h-screen flex-col overflow-hidden"
      contentClassName="hero-content flex min-h-screen w-full flex-col items-center justify-center"
    >
      <h1 className="hero-title">
        <span className="hero-title-line hero-enter hero-enter--title-a">
          Seu anúncio traz o clique.
        </span>
        <span className="hero-title-sub hero-enter hero-enter--title-b">
          A página precisa trazer o cliente.
        </span>
      </h1>

      <div className="hero-inner flex w-full max-w-[min(1680px,96vw)] flex-col items-center px-6 text-center">
        <p className="hero-lead hero-enter hero-enter--lead">
          Landing pages estratégicas, rápidas e profissionais para empresas que precisam
          transformar visitantes em leads, contatos e vendas — sem depender de páginas
          genéricas que só parecem bonitas.
        </p>

        <div className="hero-ctas hero-enter hero-enter--ctas">
          <LpContactButton label="Quero minha Landing Page" className="min-w-[270px]" />
          <a href="#problema" className="btn-ghost">
            Como funciona
          </a>
        </div>

        <div className="hero-trust hero-enter hero-enter--trust">
          {["Projeto personalizado", "Estratégia + design + desenvolvimento", "Pronta para receber tráfego"].map(
            (item) => (
              <span key={item} className="hero-trust__item">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FE4101"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </DarkGradientBg>
  );
}
