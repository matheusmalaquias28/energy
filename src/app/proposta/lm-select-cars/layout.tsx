import type { Metadata } from "next";
import "./proposta.css";

// Mesmo par tipográfico do site da LM: Saira com eixo de largura nos títulos, Hanken Grotesk no corpo.
const FONTS_CSS =
  "https://fonts.googleapis.com/css2?family=Saira:wdth,wght@100..125,300..600&family=Hanken+Grotesk:wght@400..700&display=swap";

export const metadata: Metadata = {
  title: { absolute: "Proposta · LM Select Cars · Energy" },
  description: "Proposta da Energy para o novo site da LM Select Cars, integrado ao RevendaMais.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: {
    title: "Proposta · LM Select Cars",
    description: "Mesmo sistema. Outra vitrine.",
    siteName: "Energy",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PropostaLmSelectCarsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={FONTS_CSS} precedence="default" />
      {children}
    </>
  );
}
