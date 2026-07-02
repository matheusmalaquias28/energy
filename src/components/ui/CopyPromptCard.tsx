"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyPromptCardProps {
  number: number;
  title: string;
  description: string;
  prompt: string;
}

export function CopyPromptCard({ number, title, description, prompt }: CopyPromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative border border-white/[0.08] bg-[#0d0d0d] overflow-hidden mb-6 group">
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FE4101] via-[#FE4101]/40 to-transparent" />

      <div className="p-6 lg:p-8">
        {/* number + title */}
        <div className="flex items-start gap-4 mb-4">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#FE4101]/40 text-[#FE4101] font-mono text-xs font-bold">
            {String(number).padStart(2, "0")}
          </span>
          <h3 className="text-white font-bold text-lg leading-snug pt-0.5">{title}</h3>
        </div>

        {/* description */}
        <p className="text-white/50 text-sm leading-relaxed mb-5 pl-12">{description}</p>

        {/* prompt box */}
        <div className="relative bg-[#060608] border border-white/[0.07] rounded-none">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FE4101]/60">
              // PROMPT
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest border transition-all duration-200 cursor-pointer"
              style={{
                color: copied ? "#22D3A5" : "rgba(255,255,255,0.35)",
                borderColor: copied ? "rgba(34,211,165,0.35)" : "rgba(255,255,255,0.08)",
                background: copied ? "rgba(34,211,165,0.06)" : "transparent",
              }}
            >
              {copied ? (
                <>
                  <Check size={10} />
                  Copiado
                </>
              ) : (
                <>
                  <Copy size={10} />
                  Copiar
                </>
              )}
            </button>
          </div>
          <p className="px-4 py-4 font-mono text-sm text-white/70 leading-relaxed whitespace-pre-wrap">
            {prompt}
          </p>
        </div>
      </div>
    </div>
  );
}
