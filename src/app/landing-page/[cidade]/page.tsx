import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lpCityPages, getLpCityPage } from "@/data/lp-city-pages";
import { ScrollReveal } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/ScrollReveal";
import { Marquee } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Marquee";
import { Problema } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Problema";
import { Recursos } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Recursos";
import { UseCases } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/UseCases";
import { GalleryMarquee } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/GalleryMarquee";
import { Galeria } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Galeria";
import { Como } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Como";
import { Comparativo } from "@/components/sites/iamaisgen-br-36c19ba4/root-8a5edab2/Comparativo";
import { CityHero } from "@/components/lp-cidade/Hero";
import { CityFaq } from "@/components/lp-cidade/Faq";
import { CityCtaFinal } from "@/components/lp-cidade/CtaFinal";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

export async function generateStaticParams() {
  return lpCityPages.map((p) => ({ cidade: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await props.params;
  const city = getLpCityPage(cidade);
  if (!city) return {};

  const url = `${SITE_URL}/landing-page/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      type: "website",
      locale: "pt_BR",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

export default async function LandingPageCidadePage(props: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await props.params;
  const city = getLpCityPage(cidade);
  if (!city) notFound();

  const pageUrl = `${SITE_URL}/landing-page/${city.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${pageUrl}/#service`,
      name: `Energy — Landing Pages em ${city.cidade}`,
      url: pageUrl,
      description: city.metaDescription,
      areaServed: {
        "@type": "City",
        name: city.cidade,
        containedInPlace: {
          "@type": "State",
          name: city.estado,
          containedInPlace: { "@type": "Country", name: "Brazil" },
        },
      },
      provider: {
        "@type": "Organization",
        name: "Energy",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      serviceType: "Criação de Landing Pages",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Landing Pages em ${city.cidade}`,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Landing Page de Alta Conversão",
              description:
                "Landing page estratégica com copy, design profissional e desenvolvimento responsivo, otimizada para campanhas de tráfego pago.",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Landing Pages",
          item: `${SITE_URL}/servicos/landing-page`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `Landing Pages em ${city.cidade}`,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="iagen">
        <ScrollReveal />
        <CityHero city={city} />
        <Marquee />
        <Problema />
        <Recursos />
        <UseCases />
        <GalleryMarquee />
        <Galeria />
        <Como />
        <Comparativo />
        <CityFaq city={city} />
        <CityCtaFinal city={city} />
      </div>
    </>
  );
}
