import { Anton, Manrope, Urbanist } from "next/font/google";

/** Apenas na Hero (título principal). */
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/** Hero — linhas brancas em maiúsculas. */
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

/** Demais títulos do site: Urbanist + letter-spacing mais fechado. */
export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const sectionTitle = `${urbanist.className} font-semibold tracking-[-0.04em]`;

/** Números / destaques grandes (ex.: stats no bento). */
export const sectionDisplay = `${urbanist.className} font-bold tracking-[-0.04em]`;

/** Títulos de pergunta / item (texto corrido, tracking um pouco mais aberto). */
export const sectionBodyTitle = `${urbanist.className} font-medium tracking-[-0.03em]`;
