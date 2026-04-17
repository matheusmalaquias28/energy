import type { ReactNode } from "react";

type GradientBorderBoxProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

/**
 * Borda fina com degradé cinza bem escuro (esquerda) → transparente (direita); interior escuro.
 */
export default function GradientBorderBox({
  children,
  className = "",
  innerClassName = "",
}: GradientBorderBoxProps) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-[#1c1c1c] to-transparent p-px ${className}`}
    >
      <div
        className={`h-full min-h-0 w-full rounded-[calc(1rem-1px)] bg-[#0a0a0a] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
