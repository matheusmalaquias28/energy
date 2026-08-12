import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import PreloaderRouter from "@/components/effects/PreloaderRouter";
import { ContactModalProvider } from "@/components/contact/contact-modal-context";
import { FloatingQuoteButton } from "@/components/contact/FloatingQuoteButton";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Energy — Design que posiciona. Site que converte.",
    template: "%s | Energy",
  },
  description:
    "Agência de criação de sites, landing pages e e-commerces com design de alto nível para médias e grandes empresas. Resultados reais desde o primeiro clique.",
  keywords: [
    "criação de sites",
    "agência digital",
    "landing page",
    "e-commerce",
    "loja virtual",
    "desenvolvimento web",
    "design de site",
    "site profissional",
    "agência de marketing digital",
  ],
  authors: [{ name: "Energy" }],
  creator: "Energy",
  publisher: "Energy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Energy",
    title: "Energy — Design que posiciona. Site que converte.",
    description:
      "Agência de criação de sites, landing pages e e-commerces com design de alto nível. Ativos digitais para empresas que não aceitam ser esquecidas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Energy — Design que posiciona. Site que converte.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy — Design que posiciona. Site que converte.",
    description:
      "Agência de criação de sites, landing pages e e-commerces com design de alto nível.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/favicon2.svg", type: "image/svg+xml" }],
    shortcut: "/favicon2.svg",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Energy",
      description: "Criação de sites, landing pages e e-commerces de alto nível.",
      inLanguage: "pt-BR",

    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Energy",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      description:
        "Agência especializada em criação de sites institucionais, landing pages de alta conversão e e-commerces para médias e grandes empresas.",
      areaServed: {
        "@type": "Country",
        name: "Brazil",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Design Digital",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sites Institucionais",
              description:
                "Sites robustos, elegantes e altamente performáticos para empresas que precisam transmitir autoridade e credibilidade.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Landing Pages",
              description:
                "Páginas desenhadas para maximizar conversão, com copy persuasivo, A/B testing e integração CRM.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-commerces",
              description:
                "Lojas virtuais com experiência de compra memorável, UX de checkout otimizado e integração ERP.",
            },
          },
        ],
      },
      sameAs: [],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} bg-[#121212] text-white antialiased overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <ContactModalProvider>
          <PreloaderRouter />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <FloatingQuoteButton />
        </ContactModalProvider>
      </body>
    </html>
  );
}
