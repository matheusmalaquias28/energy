"use client";

import { AntiMetalButton } from "@/components/ui/anti-metal-button";
import { useContactModal } from "@/components/contact/contact-modal-context";

type LpContactButtonProps = {
  label: string;
  className?: string;
};

export function LpContactButton({ label, className }: LpContactButtonProps) {
  const { openContactModal } = useContactModal();

  return (
    <AntiMetalButton
      type="button"
      label={label}
      onClick={openContactModal}
      className={className}
    />
  );
}
