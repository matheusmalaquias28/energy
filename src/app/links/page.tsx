import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Globe, Share2, MessageCircle, BookOpen, Link2, Palette, Mail } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

export const metadata: Metadata = {
  title: "Links — Energy Midia",
  description:
    "Todos os links da Energy Midia: site, redes sociais, WhatsApp e portfólio.",
  alternates: {
    canonical: `${SITE_URL}/links`,
  },
  openGraph: {
    title: "Links — Energy Midia",
    description: "Todos os links da Energy Midia em um só lugar.",
    url: `${SITE_URL}/links`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const links = [
  {
    label: "Nosso site",
    description: "Conheça nossos serviços e portfólio",
    href: "https://energymidia.com.br",
    icon: Globe,
    highlight: true,
  },
  {
    label: "WhatsApp",
    description: "Fale com a gente agora mesmo",
    href: "https://wa.me/5512997430172",
    icon: MessageCircle,
    highlight: false,
  },
  {
    label: "Instagram",
    description: "@energymidia",
    href: "https://instagram.com/energymidia",
    icon: Share2,
    highlight: false,
  },
  {
    label: "LinkedIn",
    description: "Energy Midia no LinkedIn",
    href: "https://linkedin.com/company/energymidia",
    icon: Link2,
    highlight: false,
  },
  {
    label: "Blog",
    description: "Estratégia digital, sites e e-commerce",
    href: "https://energymidia.com.br/blog",
    icon: BookOpen,
    highlight: false,
  },
  {
    label: "Behance",
    description: "Nosso portfólio de design",
    href: "https://behance.net/matheusmalaquias",
    icon: Palette,
    highlight: false,
  },
  {
    label: "E-mail",
    description: "contato@energymidia.com.br",
    href: "mailto:contato@energymidia.com.br",
    icon: Mail,
    highlight: false,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-5 pt-32 pb-20">
      {/* Logo + bio */}
      <div className="flex flex-col items-center text-center mb-12 max-w-sm">
        <Image
          src="/logo-energy.svg"
          alt="Energy Midia"
          width={160}
          height={60}
          className="object-contain mb-6"
          priority
        />
        <p className="text-sm text-white/40 leading-relaxed">
          Agência digital especializada em sites, landing pages e e-commerces
          de alto nível.
        </p>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-3 w-full max-w-md">
        {links.map(({ label, description, href, icon: Icon, highlight }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 w-full rounded-2xl px-5 py-4 border transition-all duration-300 ${
                highlight
                  ? "bg-[#FE4101] border-[#FE4101] text-black hover:bg-[#e63a00] hover:border-[#e63a00]"
                  : "bg-white/[0.04] border-white/[0.08] text-white hover:bg-white/[0.08] hover:border-white/[0.15]"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  highlight ? "bg-black/15" : "bg-white/[0.06]"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${highlight ? "text-black" : "text-[#FE4101]"}`}
                  strokeWidth={2}
                />
              </span>

              <div className="flex-1 min-w-0 text-left">
                <p className={`text-sm font-semibold leading-tight ${highlight ? "text-black" : "text-white"}`}>
                  {label}
                </p>
                <p className={`text-xs mt-0.5 truncate ${highlight ? "text-black/60" : "text-white/35"}`}>
                  {description}
                </p>
              </div>

              <ArrowUpRight
                className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  highlight ? "text-black/60" : "text-white/30"
                }`}
                strokeWidth={2}
              />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-14 text-[11px] text-white/15 tracking-widest uppercase">
        energymidia.com.br
      </p>
    </main>
  );
}
