import type { Metadata } from "next";
import "./proposta.css";

// Fraunces nos títulos (calor de confeitaria), Hanken Grotesk no corpo e nos números.
const FONTS_CSS =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..600&family=Hanken+Grotesk:wght@400..700&display=swap";

export const metadata: Metadata = {
  title: { absolute: "Proposta · Chocolate Araucária · Energy" },
  description: "Proposta da Energy para o novo sistema de gestão da Chocolate Araucária, montado por módulos.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: {
    title: "Proposta · Chocolate Araucária",
    description: "O novo sistema da fábrica, montado por módulos.",
    siteName: "Energy",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PropostaAraucariaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={FONTS_CSS} precedence="default" />
      {children}
    </>
  );
}
