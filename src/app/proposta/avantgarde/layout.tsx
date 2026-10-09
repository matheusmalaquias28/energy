import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./proposta.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-avp-mono",
  display: "swap",
});

// Variável com eixo de largura: títulos levemente expandidos, com cara de motorsport.
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-avp-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "Proposta · AvantGarde · Energy" },
  description: "Proposta da Energy para o novo site da AvantGarde Performance & Maintenance.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: {
    title: "Proposta · AvantGarde",
    description: "O canal acelera toda semana. O site merece acompanhar.",
    siteName: "Energy",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PropostaAvantGardeLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${mono.variable} ${display.variable}`}>{children}</div>;
}
