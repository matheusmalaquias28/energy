import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./proposta.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-vvp-mono",
  display: "swap",
});

const MANROPE_CSS = "https://fonts.googleapis.com/css2?family=Manrope:wght@500..800&display=swap";

export const metadata: Metadata = {
  title: { absolute: "Análise do site · Vanessa Veiga · Energy" },
  description: "Análise do site atual da Vanessa Veiga e o direcionamento da Energy para o novo projeto.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: {
    title: "Análise do site · Vanessa Veiga",
    description: "O que está acontecendo com o site hoje e como vamos remodelá-lo.",
    siteName: "Energy",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PropostaVanessaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Manrope via link: o next/font/google falha no build da Vercel com essa fonte */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={MANROPE_CSS} precedence="default" />
      <div className={mono.variable}>{children}</div>
    </>
  );
}
