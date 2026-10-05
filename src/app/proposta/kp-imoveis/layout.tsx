import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./proposta.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-kpp-mono",
  display: "swap",
});

const MANROPE_CSS = "https://fonts.googleapis.com/css2?family=Manrope:wght@500..800&display=swap";

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
