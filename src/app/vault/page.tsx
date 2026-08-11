import type { Metadata } from "next";
import VaultClient from "./VaultClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

export const metadata: Metadata = {
  title: "Vault — Base de Conhecimento Digital",
  description:
    "Manuais, guias, ferramentas e conteúdo gratuito para empresas que levam o digital a sério. Checklists, templates e artigos para crescer no digital.",
  alternates: {
    canonical: `${SITE_URL}/vault`,
  },
  openGraph: {
    title: "Vault — Base de Conhecimento Digital | Energy",
    description:
      "Manuais, guias, ferramentas e conteúdo gratuito para empresas que levam o digital a sério.",
    url: `${SITE_URL}/vault`,
    type: "website",
  },
};

export default function VaultPage() {
  return <VaultClient />;
}
