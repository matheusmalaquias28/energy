"use client";

type SmartVideoPosterProps = {
  src: string;
  visible: boolean;
  fit?: "cover" | "contain";
  className?: string;
};

export default function SmartVideoPoster({
  src,
  visible,
  fit = "cover",
  className = "",
}: SmartVideoPosterProps) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      decoding="async"
      fetchPriority="high"
      className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-500 ${fitClass} ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
