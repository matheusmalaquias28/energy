import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./proposta.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-rzp-mono",
  display: "swap",
});

// Mesmo par tipográfico da Home da Carteira Z.
const FONTS_CSS =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Manrope:wght@400..800&display=swap";

export const metadata: Metadata = {
  title: { absolute: "Orçamento · Carteira Z · Energy" },
  description: "Orçamento da Energy para a Home, a LP da Carteira Z com VSL e a LP do Z Friends.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: {
    title: "Orçamento · Carteira Z",
    description: "Home, Carteira Z com VSL e Z Friends: escopo, prazo e investimento.",
    siteName: "Energy",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PropostaRafaelZattarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fontes via link: o next/font/google falha no build da Vercel com a Manrope */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={FONTS_CSS} precedence="default" />
      <div className={mono.variable}>{children}</div>
    </>
  );
}
