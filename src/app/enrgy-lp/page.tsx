import { Hero } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Hero";
import { Marquee } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Marquee";
import { Problema } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Problema";
import { Recursos } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Recursos";
import { UseCases } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/UseCases";
import { GalleryMarquee } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/GalleryMarquee";
import { Galeria } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Galeria";
import { Como } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Como";
import { Comparativo } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Comparativo";
import { Faq } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Faq";
import { CtaFinal } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/CtaFinal";
import { ScrollReveal } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/ScrollReveal";

export default function EnrgyLp() {
  return (
    <div className="iagen">
      <ScrollReveal />
      <Hero />
      <Marquee />
      <Problema />
      <Recursos />
      <UseCases />
      <GalleryMarquee />
      <Galeria />
      <Como />
      <Comparativo />
      <Faq />
      <CtaFinal />
    </div>
  );
}
