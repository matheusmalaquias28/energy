"use client";
import { useContactModal } from "@/components/contact/contact-modal-context";

export default function CityPageCTA({ city }: { city: string }) {
  const { openContactModal } = useContactModal();

  return (
    <button
      onClick={openContactModal}
      className="inline-flex items-center gap-3 bg-[#FE4101] text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-[#121212] transition-colors duration-300 cursor-none"
    >
      Solicitar proposta para {city}
      <span aria-hidden>→</span>
    </button>
  );
}
