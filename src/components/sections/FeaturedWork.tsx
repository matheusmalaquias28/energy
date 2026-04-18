"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import type { FeaturedProject } from "@/data/featured-projects";
import { FEATURED_PROJECTS } from "@/data/featured-projects";
import { ArrowUpRight } from "lucide-react";
import { sectionTitle } from "@/lib/fonts";
import { useContactModal } from "@/components/contact/contact-modal-context";

function LastRowProjectSlot({
  project,
}: {
  project: FeaturedProject | null;
}) {
  if (!project) {
    return (
      <div
        className="flex h-[60vh] min-h-[280px] w-full min-w-0 items-center justify-center rounded-3xl border border-dashed border-white/[0.12] bg-white/[0.015]"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/25">
          Projeto em breve
        </span>
      </div>
    );
  }
  return (
    <ProjectCard project={project} priority={false} className="min-w-0" />
  );
}

export default function FeaturedWork() {
  const { openContactModal } = useContactModal();
  const projects = FEATURED_PROJECTS;
  /** Tudo após os dois destaques em container grande (largura total) */
  const restAfterFirstTwo = projects.slice(2);

  let middleProjects: FeaturedProject[] = [];
  let lastRowProjects: (FeaturedProject | null)[];

  if (restAfterFirstTwo.length === 0) {
    lastRowProjects = [];
  } else if (restAfterFirstTwo.length <= 3) {
    middleProjects = [];
    const padded: (FeaturedProject | null)[] = [...restAfterFirstTwo];
    while (padded.length < 3) padded.push(null);
    lastRowProjects = padded.slice(0, 3);
  } else {
    middleProjects = restAfterFirstTwo.slice(0, -3);
    lastRowProjects = restAfterFirstTwo.slice(-3);
  }

  return (
    <section
      id="projetos"
      className="w-full border-b border-white/5 bg-[#0a0a0a] py-28 lg:py-36"
    >
      <div className="w-full max-w-none px-6 lg:px-16">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                ( Featured Work )
              </p>
              <h2
                className={`${sectionTitle} max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-white`}
              >
                Projetos em{" "}
                <span className="text-[#FE4101]">destaque</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <button
              type="button"
              onClick={openContactModal}
              className="group inline-flex cursor-none items-center gap-2 border-b border-white/15 bg-transparent pb-1 text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors duration-300 hover:border-[#FE4101]/50 hover:text-white"
            >
              Todos os projetos
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="flex flex-col gap-4 lg:gap-5">
            {projects.length >= 1 ? (
              <ProjectCard
                project={projects[0]}
                priority
                size="featured"
                className="w-full min-w-0"
              />
            ) : null}

            {projects.length >= 2 ? (
              <ProjectCard
                project={projects[1]}
                priority={false}
                size="featured"
                className="w-full min-w-0"
              />
            ) : null}

            {middleProjects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                priority={false}
                className="w-full min-w-0"
              />
            ))}

            {lastRowProjects.length > 0 ? (
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
                {lastRowProjects.map((project, i) => (
                  <LastRowProjectSlot
                    key={
                      project?.name ?? `last-row-slot-${i}`
                    }
                    project={project}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="mt-8 text-sm text-white/35">
            Passe o mouse sobre o projeto para ver o vídeo em destaque.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
