import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import PagePreloader from "@/components/effects/PagePreloader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Energy — Design que posiciona. Site que converte.",
  description: "Sites institucionais, landing pages e e-commerces com design de alto nível para médias e grandes empresas.",
  openGraph: {
    title: "Energy — Design que posiciona. Site que converte.",
    description: "Ativos digitais para empresas que não aceitam ser esquecidas.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} bg-[#121212] text-white antialiased overflow-x-hidden`}>
        <PagePreloader />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
