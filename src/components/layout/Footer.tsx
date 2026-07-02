import BrandLogo from "@/components/layout/BrandLogo";
import { FooterContactLink } from "@/components/contact/FooterContactLink";

export default function Footer() {
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5">Serviços</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors cursor-none link-hover">Sites Institucionais</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-none link-hover">Landing Pages</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-none link-hover">E-commerces</a></li>
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

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between gap-4 text-[11px] text-white/15 uppercase tracking-[0.15em]">
          <span>© 2026 Energy. Todos os direitos reservados.</span>
          <span>Design que trabalha por você.</span>
        </div>
      </div>
    </footer>
  );
}
