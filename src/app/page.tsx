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

export default function Home() {
  return (
    <main>
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
