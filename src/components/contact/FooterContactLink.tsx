"use client";

import { useContactModal } from "@/components/contact/contact-modal-context";

export function FooterContactLink() {
  const { openContactModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={openContactModal}
      className="hover:text-white transition-colors cursor-none link-hover text-left"
    >
      Contato
    </button>
  );
}
