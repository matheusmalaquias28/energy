/**
 * Imagem de compartilhamento padrão (src/app/opengraph-image.tsx). Páginas que definem `openGraph`
 * substituem o objeto inteiro do layout, então precisam repetir `images` para não ficar sem imagem.
 */
export const defaultOgImages = [
  { url: "/opengraph-image", width: 1200, height: 630, alt: "Energy — criação de sites, landing pages e e-commerces" },
];

/** Títulos que já trazem a marca não passam pelo template "%s | Energy" (evita "Energy | Energy"). */
export function pageTitle(title: string) {
  return /Energy/.test(title) ? { absolute: title } : title;
}
