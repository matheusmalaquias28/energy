import Hero from "@/components/sections/Hero";
import ClientLogosMarquee from "@/components/sections/ClientLogosMarquee";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ExpertiseVideoStrip from "@/components/sections/ExpertiseVideoStrip";
import AboutUsBento from "@/components/sections/AboutUsBento";
import { GalleryMarquee } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/GalleryMarquee";
import { Como } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Como";
import StrategicPartner from "@/components/sections/StrategicPartner";
import Support from "@/components/sections/Support";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import type { Metadata } from "next";
import { homeFaqs } from "@/data/home-faq";
import { faqJsonLd } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <ClientLogosMarquee />
      <FeaturedWork />
      <ExpertiseVideoStrip />
      <AboutUsBento />
      <GalleryMarquee variant="home" />
      <StrategicPartner />
      <Como variant="home" />
      <Support />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
