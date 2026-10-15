import { FEATURED_PROJECTS, type FeaturedProject } from "./featured-projects";

/**
 * Conteúdo próprio de cada página de cidade: o que só vale para aquela cidade
 * e aquele serviço. Cases só entram com cliente real (nome em FEATURED_PROJECTS).
 */
export interface LocalBlockData {
  heading: string;
  paragraphs: string[];
  /** Bairros, polos e regiões citados no texto */
  places: string[];
  /** Nomes de projetos em FEATURED_PROJECTS */
  cases?: string[];
}

export function resolveCases(names: string[] = []): FeaturedProject[] {
  return names
    .map((name) => FEATURED_PROJECTS.find((p) => p.name === name))
    .filter((p): p is FeaturedProject => Boolean(p));
}
