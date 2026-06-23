"use client";
import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/contact-modal-context";

export default function ServicePageCTA({ label = "Solicitar proposta" }: { label?: string }) {
  const { openContactModal } = useContactModal();
  return (
    <button
      onClick={openContactModal}
      className="group inline-flex items-center gap-3 bg-[#FE4101] text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-[#121212] transition-colors duration-300 cursor-none"
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} aria-hidden />
    </button>
  );
}
