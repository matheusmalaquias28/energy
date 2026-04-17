"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EXPERTISE_VIDEO_ITEMS } from "@/data/expertise-videos";
import { sectionTitle } from "@/lib/fonts";

function HoverVideoTile({
  title,
  videoSrc,
  hideOverlay = false,
}: {
  title: string;
  videoSrc?: string;
  hideOverlay?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [intrinsicAspect, setIntrinsicAspect] = useState<string | null>(null);

  const hasVideo = Boolean(videoSrc?.trim());

  const play = () => {
    const v = videoRef.current;
    if (!v || !hasVideo) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const handleLoadedMetadata = (
    e: React.SyntheticEvent<HTMLVideoElement>,
  ) => {
    const v = e.currentTarget;
    if (!hideOverlay || !v.videoWidth || !v.videoHeight) return;
    setIntrinsicAspect(`${v.videoWidth} / ${v.videoHeight}`);
  };

  const containerStyle: CSSProperties | undefined =
    hideOverlay && intrinsicAspect
      ? { aspectRatio: intrinsicAspect }
      : undefined;

  const containerClass =
    "relative w-full cursor-pointer overflow-hidden rounded-2xl bg-neutral-300 " +
    (hideOverlay && intrinsicAspect ? "" : "aspect-square ") +
    (!hideOverlay ? "group" : "");

  const fitClass =
    hideOverlay && intrinsicAspect
      ? "object-contain"
      : "object-cover group-hover:scale-[1.03]";

  return (
    <div
      className={containerClass}
      style={containerStyle}
      onMouseEnter={() => {
        play();
      }}
      onMouseLeave={stop}
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          className={`absolute inset-0 h-full w-full opacity-100 transition-transform duration-500 ease-out ${fitClass}`}
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400"
          aria-hidden
        />
      )}

      {!hideOverlay ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
          aria-hidden
        />
      ) : null}
      <h3
        className={`pointer-events-none absolute bottom-0 left-0 p-5 text-left text-lg leading-tight text-white md:p-6 md:text-xl ${sectionTitle} font-bold ${
          hideOverlay ? "drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]" : ""
        }`}
      >
        {title}
      </h3>
    </div>
  );
}

export default function ExpertiseVideoStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["min(78vw, 1080px)", "100vw"],
  );
  const borderRadius = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-white/5 bg-[#0a0a0a] py-16 lg:py-28"
      aria-labelledby="expertise-video-heading"
    >
      <div className="flex w-full flex-col items-center">
        <motion.div
          className="origin-center bg-white px-6 py-12 text-black shadow-[0_40px_100px_rgba(0,0,0,0.35)] will-change-transform md:px-10 md:py-14 lg:px-14 lg:py-16"
          style={{
            width,
            borderRadius,
            scale,
          }}
        >
          <div className="mb-10 max-w-2xl md:mb-12">
            <ScrollReveal>
              <div className="flex max-w-2xl flex-col gap-[20px]">
                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                  ( Serviços & expertise )
                </p>
                <h2
                  id="expertise-video-heading"
                  className={`${sectionTitle} text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-neutral-950`}
                >
                  Potência em design digital
                </h2>
                <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                  Três frentes onde a Energy domina o processo — da identidade ao código e ao
                  movimento, com a mesma obsessão por detalhe.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.06}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {EXPERTISE_VIDEO_ITEMS.map((item) => (
                <HoverVideoTile
                  key={item.title}
                  title={item.title}
                  videoSrc={item.videoSrc}
                  hideOverlay={item.hideOverlay}
                />
              ))}
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
