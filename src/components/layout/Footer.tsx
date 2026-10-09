import BrandLogo from "@/components/layout/BrandLogo";
import { FooterContactLink } from "@/components/contact/FooterContactLink";
import { brazilCities } from "@/data/cities";
import { localPages } from "@/data/local-pages";
import { lpCityPages } from "@/data/lp-city-pages";

export default function Footer() {
  const topCities = brazilCities.slice(0, 6);

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-16 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <BrandLogo className="h-8 w-auto sm:h-9" />
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Design que posiciona. Site que converte.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5">Serviços</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="/servicos/criacao-de-sites" className="hover:text-white transition-colors cursor-none link-hover">Sites Institucionais</a></li>
                <li><a href="/servicos/landing-page" className="hover:text-white transition-colors cursor-none link-hover">Landing Pages</a></li>
                <li><a href="/servicos/ecommerce" className="hover:text-white transition-colors cursor-none link-hover">E-commerces</a></li>
                <li><a href="/servicos/seo-para-empresas" className="hover:text-white transition-colors cursor-none link-hover">Consultoria de SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5">Cidades</h4>
              <ul className="space-y-3 text-sm text-white/40">
                {topCities.map((city) => (
                  <li key={city.slug}>
                    <a href={`/agencia/${city.slug}`} className="hover:text-white transition-colors cursor-none link-hover">
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5">Empresa</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors cursor-none link-hover">Sobre</a></li>
                <li><a href="#projetos" className="hover:text-white transition-colors cursor-none link-hover">Projetos</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors cursor-none link-hover">Blog</a></li>
                <li><FooterContactLink /></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5">Social</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors cursor-none link-hover">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-none link-hover">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-none link-hover">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* LP city pages — SEO internal links */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 mb-4">Landing Pages por cidade</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
            {lpCityPages.map((p) => (
              <a
                key={p.slug}
                href={`/landing-page/${p.slug}`}
                className="text-[11px] text-white/20 hover:text-white/50 transition-colors cursor-none"
              >
                Landing Page em {p.cidade}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/15 mb-4">Serviços por região</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {localPages.map((p) => (
              <a
                key={p.slug}
                href={`/local/${p.slug}`}
                className="text-[11px] text-white/20 hover:text-white/50 transition-colors cursor-none"
              >
                {p.serviceLabel} em {p.city}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col lg:flex-row justify-between gap-4 text-[11px] text-white/15 uppercase tracking-[0.15em]">
          <span>© 2026 Energy. Todos os direitos reservados.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/politica-de-privacidade" className="hover:text-white/40 transition-colors">
              Política de privacidade
            </a>
            <span>Design que trabalha por você.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
