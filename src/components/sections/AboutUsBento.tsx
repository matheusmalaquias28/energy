"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GradientBorderBox from "@/components/ui/GradientBorderBox";
import { sectionBodyTitle, sectionDisplay, sectionTitle } from "@/lib/fonts";
import { GlobeVV } from "@/components/effects/GlobeVV";
import AboutSoftwareMarquee from "@/components/sections/AboutSoftwareMarquee";
import SmartVideoPoster from "@/components/ui/SmartVideoPoster";
import { useSmartVideo } from "@/hooks/useSmartVideo";

const ABOUT_FOUNDER_IMAGE = "/matheus-malaquias.jpg";
const ABOUT_SIDE_VIDEO = "/videos/melted2.mp4";

const stats = [
  {
    value: "13+",
    label: "Anos de experiência",
    sub: "Em agência e projetos digitais de alto impacto.",
  },
  {
    value: "4+",
    label: "Países atendidos",
    sub: "Projetos e acompanhamento para marcas em diferentes mercados e fusos.",
  },
  {
    value: "350+",
    label: "Clientes satisfeitos",
    sub: "Marcas que confiam na nossa entrega e acompanhamento.",
  },
] as const;

export default function AboutUsBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sideVideoActive, setSideVideoActive] = useState(false);
  const { videoRef, allowPlayback, posterSrc, safePlay, safePause } = useSmartVideo({
    src: ABOUT_SIDE_VIDEO,
  });

  const showSideVideo = allowPlayback && sideVideoActive;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onEnded = () => {
      safePause();
      setSideVideoActive(false);
    };
    const video = videoRef.current;
    video?.addEventListener("ended", onEnded);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          if (video?.ended) return;
          setSideVideoActive(true);
          safePlay();
        } else {
          setSideVideoActive(false);
          safePause();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(section);

    return () => {
      io.disconnect();
      video?.removeEventListener("ended", onEnded);
    };
  }, [safePlay, safePause, videoRef]);

  return (
    <section
      ref={sectionRef}
      id="sobre-nos"
      className="border-b border-white/5 bg-[#0a0a0a] py-20 lg:py-28"
      aria-labelledby="about-bento-heading"
    >
      <div className="mx-auto w-full max-w-[80vw]">
        <ScrollReveal>
          <div className="mb-10 space-y-3 md:mb-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
              ( Sobre nós )
            </p>
            <h2
              id="about-bento-heading"
              className={`${sectionTitle} max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-white`}
            >
              Quem somos e como{" "}
              <span className="text-[#FE4101]">trabalhamos</span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
              Números que resumem a nossa trajetória.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 lg:items-stretch">
          <div className="flex flex-col gap-5 lg:col-span-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <GradientBorderBox className="flex-1">
                  <div className="flex flex-col gap-3 p-6 md:p-7">
                    <span
                      className={`${sectionDisplay} text-4xl leading-none text-white md:text-5xl`}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                      {stat.label}
                    </span>
                    <p className="text-sm leading-relaxed text-white/40">{stat.sub}</p>
                  </div>
                </GradientBorderBox>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.12} className="flex lg:col-span-8">
            <GradientBorderBox className="w-full min-h-[320px] md:min-h-[400px] lg:min-h-[520px]">
              <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[inherit] md:min-h-[400px] lg:min-h-[520px]">
                <GlobeVV />
              </div>
            </GradientBorderBox>
          </ScrollReveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-10 lg:gap-6 lg:items-stretch">
          <ScrollReveal delay={0.06} className="lg:col-span-7">
            <GradientBorderBox className="h-full min-h-0">
              <div className="flex flex-col gap-6 p-5 md:flex-row md:gap-8 md:p-7 lg:p-8">
                <div className="relative w-full shrink-0 overflow-hidden rounded-xl bg-white/[0.03] md:max-w-[min(42%,320px)] md:basis-[42%] lg:max-w-none lg:basis-[45%]">
                  <div className="relative aspect-[3/4] w-full min-h-[260px] md:min-h-[min(360px,50vh)]">
                    <Image
                      src={ABOUT_FOUNDER_IMAGE}
                      alt="Matheus Malaquias"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" aria-hidden />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <p className={`${sectionDisplay} text-lg text-white md:text-xl`}>
                        Matheus Malaquias
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
                        Fundador & Webdesigner
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-white/45">
                        À frente da visão estratégica e do padrão visual da Energy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 pt-1 md:pt-0">
                  <h3
                    className={`${sectionTitle} text-[clamp(1.25rem,2.2vw,1.65rem)] leading-[1.15] text-white`}
                  >
                    O melhor site é aquele que vende.
                  </h3>
                  <div className={`${sectionBodyTitle} flex flex-col gap-4 text-sm leading-relaxed text-white/45 md:text-base`}>
                    <p>
                      Na Energy, acreditamos que um site não existe para ganhar elogios. Ele existe para
                      gerar resultados. Cada escolha de design, cada seção e cada botão precisam ter um
                      propósito: transformar visitantes em clientes.
                    </p>
                    <p>
                      Antes de pensar em cores ou animações, pensamos em estratégia. Entendemos o negócio,
                      o comportamento do público e construímos uma experiência que inspira confiança e
                      facilita a tomada de decisão.
                    </p>
                    <p>
                      A tecnologia mudou a forma de criar sites, e nós acompanhamos essa evolução.
                      Utilizamos inteligência artificial e ferramentas modernas para acelerar processos,
                      mas as decisões mais importantes continuam sendo guiadas por estratégia, experiência
                      e visão de mercado.
                    </p>
                    <p>
                      No fim, nosso objetivo é simples: desenvolver sites que representem o potencial da
                      sua empresa e trabalhem todos os dias para gerar novas oportunidades de negócio.
                    </p>
                  </div>
                </div>
              </div>
            </GradientBorderBox>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <GradientBorderBox className="h-full min-h-[200px]">
              <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-[inherit] md:min-h-[240px]">
                {posterSrc ? (
                  <SmartVideoPoster src={posterSrc} visible={!showSideVideo} fit="cover" />
                ) : null}
                <video
                  ref={videoRef}
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
                    showSideVideo ? "opacity-100" : "opacity-0"
                  }`}
                  src={ABOUT_SIDE_VIDEO}
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Vídeo complementar"
                />
              </div>
            </GradientBorderBox>
          </ScrollReveal>
        </div>

        <div className="relative left-1/2 mt-14 w-screen max-w-[100vw] -translate-x-1/2">
          <AboutSoftwareMarquee />
        </div>
      </div>
    </section>
  );
}
