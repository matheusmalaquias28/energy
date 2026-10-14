import type { Metadata } from "next";
import { defaultOgImages } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
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
    images: defaultOgImages,
    title: "Vault — Base de Conhecimento Digital | Energy",
    description:
      "Manuais, guias, ferramentas e conteúdo gratuito para empresas que levam o digital a sério.",
    url: `${SITE_URL}/vault`,
    type: "website",
  },
};

export default function VaultPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Vault", path: "/vault" }])} />
      <h1 className="sr-only">Vault — Base de Conhecimento Digital</h1>
      <VaultClient />
    </>
  );
}
