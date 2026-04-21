import type { MetadataRoute } from "next";
import { brazilCities } from "@/data/cities";
import { blogPosts } from "@/data/blog-posts";
import { localPages } from "@/data/local-pages";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://energyagencia.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = brazilCities.map((city) => ({
    url: `${SITE_URL}/agencia/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogListPage: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const localServicePages: MetadataRoute.Sitemap = localPages.map((p) => ({
    url: `${SITE_URL}/local/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogListPage,
    ...blogPostPages,
    ...cityPages,
    ...localServicePages,
  ];
}
