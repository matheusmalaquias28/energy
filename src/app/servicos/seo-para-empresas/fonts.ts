import { Inter, JetBrains_Mono, Manrope } from "next/font/google";

/** Títulos. */
export const seoDisplay = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--seo-font-display",
  display: "swap",
});

export const seoBody = Inter({
  subsets: ["latin"],
  variable: "--seo-font-body",
  display: "swap",
});

/** Números, URLs e custos por clique. */
export const seoMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--seo-font-mono",
  display: "swap",
});
