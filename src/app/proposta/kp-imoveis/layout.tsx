import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./proposta.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-kpp-mono",
  display: "swap",
});

const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-kpp-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "Proposta · KP Imóveis · Energy" },
  description: "Proposta comercial da Energy para o novo site e a plataforma comercial da KP Imóveis.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: {
    title: "Proposta · KP Imóveis",
    description: "Novo site, painel próprio e leads direto no WhatsApp dos SDRs.",
    siteName: "Energy",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PropostaKpLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${mono.variable} ${display.variable}`}>{children}</div>;
}
