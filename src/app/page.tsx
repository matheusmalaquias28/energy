import Hero from "@/components/sections/Hero";
import ClientLogosMarquee from "@/components/sections/ClientLogosMarquee";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ExpertiseVideoStrip from "@/components/sections/ExpertiseVideoStrip";
import AboutUsBento from "@/components/sections/AboutUsBento";
import BrandTicker from "@/components/effects/BrandTicker";
import Positioning from "@/components/sections/Positioning";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
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
      <BrandTicker />
      <Positioning />
      <Services />
      <Differentials />
      <StrategicPartner />
      <Support />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
