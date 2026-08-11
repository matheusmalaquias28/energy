"use client";

import { useContactModal } from "@/components/contact/contact-modal-context";
import { AntiMetalButton } from "@/components/ui/anti-metal-button";

export function FloatingQuoteButton() {
  const { openContactModal, open } = useContactModal();

  if (open) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[90] sm:bottom-6 sm:right-6">
      <AntiMetalButton
        type="button"
        label="Solicitar orçamento"
        onClick={openContactModal}
        aria-label="Solicitar orçamento"
        className="pointer-events-auto cursor-pointer shadow-[0_8px_32px_rgba(254,65,1,0.22),0_4px_16px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}
