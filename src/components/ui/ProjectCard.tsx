"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight } from "lucide-react";
import type { FeaturedProject } from "@/data/featured-projects";
import { sectionDisplay } from "@/lib/fonts";

const CURSOR_OFFSET = 18;

type ProjectCardProps = {
  project: FeaturedProject;
  className?: string;
  priority?: boolean;
  /** Dois primeiros em largura total: bloco mais alto */
  size?: "default" | "featured";
};

const sizeHeights: Record<NonNullable<ProjectCardProps["size"]>, string> = {
  default: "h-[60vh] min-h-[280px]",
  featured: "h-[78vh] min-h-[380px] sm:min-h-[420px]",
};

export default function ProjectCard({
  project,
  className = "",
  priority = false,
  size = "default",
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const alwaysVideo = Boolean(project.video && project.videoAlways);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!alwaysVideo || !videoRef.current) return;
    const v = videoRef.current;
    v.muted = true;
    v.play().catch(() => {});
  }, [alwaysVideo, project.video]);

  const handleEnter = (e: React.MouseEvent) => {
    setHovered(true);
    setCursor({ x: e.clientX, y: e.clientY });
    if (project.video && videoRef.current && !alwaysVideo) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMove = (e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current && !alwaysVideo) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const popup =
    mounted &&
    hovered &&
    createPortal(
      <div
        className="pointer-events-none fixed z-[9999] whitespace-nowrap rounded border border-neutral-200 bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-black shadow-[0_8px_30px_rgba(0,0,0,0.35)] will-change-transform"
        style={{
          left: cursor.x + CURSOR_OFFSET,
          top: cursor.y + CURSOR_OFFSET,
        }}
        aria-hidden
      >
        Ver projeto
      </div>,
      document.body,
    );

  return (
    <>
      {popup}
      <a
      href="#contato"
      className={`group relative block ${sizeHeights[size]} w-full cursor-none overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111] transition-[border-color,box-shadow] duration-500 hover:border-white/[0.14] hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)] ${className}`}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        priority={priority}
        className={`object-cover transition-transform duration-700 ease-out ${alwaysVideo ? "" : "group-hover:scale-[1.04]"}`}
      />

      {project.video ? (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          autoPlay={alwaysVideo}
          preload={alwaysVideo ? "auto" : "metadata"}
          className={`absolute inset-0 z-[1] h-full w-full object-cover ${alwaysVideo ? "opacity-100" : "transition-opacity duration-500 ease-out"}`}
          style={alwaysVideo ? undefined : { opacity: hovered ? 1 : 0 }}
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/85 via-black/25 to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none absolute right-5 top-5 z-[3] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-1">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FE4101] text-white shadow-lg">
          <ArrowUpRight size={18} strokeWidth={2} />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 z-[3] flex w-full flex-col items-start gap-4 p-6 md:p-8 lg:p-10">
        <div className="flex flex-wrap gap-2">
          {project.badges.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-2xl backdrop-saturate-150"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex w-full flex-col gap-1 text-left">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/45">
            {project.year}
          </span>
          <h3 className={`${sectionDisplay} text-2xl leading-tight text-white md:text-3xl lg:text-[2rem]`}>
            {project.name}
          </h3>
        </div>
      </div>
    </a>
    </>
  );
}
