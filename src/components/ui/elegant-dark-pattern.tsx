import type React from "react";
import { cn } from "@/lib/utils";

const ENERGY_ORANGE = "rgb(254, 65, 1)";
const ENERGY_ORANGE_FADE = "rgba(254, 65, 1, 0)";

const ORANGE_STREAK_MASKS = [
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
] as const;

interface DarkGradientBgProps {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  as?: "div" | "header" | "section";
  ambientAnimation?: boolean;
  id?: string;
}

export function DarkGradientBg({
  children,
  className,
  contentClassName,
  as: Tag = "div",
  ambientAnimation = false,
  id,
}: DarkGradientBgProps) {
  return (
    <Tag id={id} className={cn("relative min-h-screen w-full overflow-hidden bg-black", className)}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, rgb(0, 0, 0) 100%)",
            mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
            WebkitMask:
              "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        <div className={cn("absolute -inset-[20%]", ambientAnimation && "hero-sun-rays-layer")}>
          {ORANGE_STREAK_MASKS.map((mask, index) => (
            <div
              key={mask}
              className={cn(
                "absolute inset-0",
                ambientAnimation ? `hero-sun-ray hero-sun-ray--${index + 1}` : "opacity-25",
              )}
              style={{
                background: `linear-gradient(${ENERGY_ORANGE} 0%, ${ENERGY_ORANGE_FADE} 100%)`,
                mask,
                WebkitMask: mask,
                ...(!ambientAnimation ? { transform: "skewX(45deg)" } : {}),
              }}
            />
          ))}
        </div>

        <div
          className="hero-dot-grid absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {ambientAnimation ? (
          <div className="hero-sun-source" aria-hidden />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(254, 65, 1, 0.14) 0%, transparent 72%)",
            }}
          />
        )}

        <div className="hero-bg-vignette absolute inset-0" aria-hidden />
      </div>

      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </Tag>
  );
}
