import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getPostBySlug, formatDate } from "@/data/blog-posts";
import { blogContent } from "@/lib/blog-content";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energymidia.com.br";

/** Página de serviço linkada no fim de cada post, pela categoria (links internos para as páginas que vendem). */
const serviceByCategory: Record<string, { href: string; label: string }> = {
  "SEO Local": { href: "/servicos/criacao-de-sites", label: "criação de sites" },
  Websites: { href: "/servicos/criacao-de-sites", label: "criação de sites" },
  Guias: { href: "/servicos/criacao-de-sites", label: "criação de sites" },
  "Marketing Digital": { href: "/servicos/landing-page", label: "criação de landing pages" },
  "E-commerce": { href: "/servicos/ecommerce", label: "criação de e-commerce" },
  SEO: { href: "/servicos/seo-para-empresas", label: "consultoria de SEO" },
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      locale: "pt_BR",
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post || !blogContent[slug]) notFound();

  const { default: PostContent } = await blogContent[slug]();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#matheus-malaquias`,
      name: "Matheus Malaquias",
      url: `${SITE_URL}/#sobre-nos`,
      jobTitle: "Fundador & Webdesigner",
      image: `${SITE_URL}/matheus-malaquias.jpg`,
      sameAs: ["https://behance.net/matheusmalaquias"],
    },
    publisher: {
      "@type": "Organization",
      name: "Energy",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: post.coverImage ? `${SITE_URL}${post.coverImage}` : `${SITE_URL}/blog/${slug}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  const relatedService = serviceByCategory[post.category];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />

      <main className="bg-[#0a0a0a] text-white min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-16 px-6 lg:px-16 border-b border-white/5">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white uppercase tracking-widest transition-colors mb-10"
            >
              <ArrowLeft size={12} />
              Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#FE4101]/70 border border-[#FE4101]/20 px-2 py-1">
                {post.category}
              </span>
              <span className="text-xs text-white/20">{post.readingTime} de leitura</span>
              <span className="text-xs text-white/20">{formatDate(post.publishedAt)}</span>
            </div>

            <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] text-white mb-6">
              {post.title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">{post.description}</p>
          </div>
        </section>

        {/* Cover image */}
        {post.coverImage && (
          <section className="px-6 lg:px-16 pt-10 pb-0">
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full aspect-[4/3] overflow-hidden border border-white/[0.06]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-3xl mx-auto prose-custom">
            <PostContent />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#111111] border border-white/5 p-10 lg:p-14">
              <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">
                // Pronto para começar?
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-4 leading-tight">
                Sua empresa merece um site que trabalha por você.
              </h2>
              <p className="text-white/40 leading-relaxed mb-8 max-w-lg">
                Criação de sites, landing pages e e-commerces com design de alto nível. Resposta em até 24 horas.
              </p>
              {relatedService && (
                <p className="text-white/40 text-sm mb-8">
                  Conheça nosso serviço de{" "}
                  <Link href={relatedService.href} className="text-white underline decoration-[#FE4101] underline-offset-4 hover:text-[#FE4101] transition-colors">
                    {relatedService.label}
                  </Link>
                  .
                </p>
              )}
              <Link
                href="/#contato"
                className="inline-flex items-center gap-3 bg-[#FE4101] text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-[#121212] transition-colors duration-300"
              >
                Solicitar proposta
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="pb-20 px-6 lg:px-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
                // Mais artigos
              </p>
              <div className="space-y-px bg-white/5">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex items-center justify-between gap-6 bg-[#0a0a0a] px-6 py-5 hover:bg-[#111111] transition-colors duration-300"
                  >
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300 leading-snug">
                      {p.title}
                    </span>
                    <ArrowLeft
                      size={14}
                      className="text-white/20 group-hover:text-[#FE4101] transition-colors duration-300 rotate-180 flex-shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
