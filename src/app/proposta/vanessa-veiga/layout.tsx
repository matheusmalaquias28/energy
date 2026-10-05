import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./proposta.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-vvp-mono",
  display: "swap",
});

const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-vvp-display",
  display: "swap",
});

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
  return <div className={`${mono.variable} ${display.variable}`}>{children}</div>;
}
