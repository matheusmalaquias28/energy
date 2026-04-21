import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, formatDate } from "@/data/blog-posts";
import { ArrowUpRight } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energyagencia.com.br";

export const metadata: Metadata = {
  title: "Blog — Estratégia Digital, Sites e E-commerce",
  description:
    "Artigos sobre criação de sites, landing pages, e-commerce e SEO. Conteúdo prático para empresas que querem crescer no digital.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog Energy — Estratégia Digital, Sites e E-commerce",
    description:
      "Artigos sobre criação de sites, landing pages, e-commerce e SEO para empresas.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 lg:px-16 border-b border-white/5">
        <div className="max-w-[90rem] mx-auto">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-6">
            // Blog
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.02] text-white max-w-4xl">
            Conteúdo que{" "}
            <span className="text-[#FE4101]">educa e posiciona.</span>
          </h1>
          <p className="text-white/40 mt-6 text-lg max-w-xl leading-relaxed">
            Estratégia digital, design, e-commerce e SEO — tudo o que você precisa saber para crescer no digital.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#0a0a0a] p-8 lg:p-10 flex flex-col gap-6 hover:bg-[#111111] transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#FE4101]/70 border border-[#FE4101]/20 px-2 py-1">
                    {post.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/20">
                    {post.readingTime}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#FE4101] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-white/20">{formatDate(post.publishedAt)}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-[#FE4101] transition-colors duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
