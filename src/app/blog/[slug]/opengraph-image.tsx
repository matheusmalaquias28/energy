import { OG_SIZE, renderOgImage } from "@/lib/og";
import { getPostBySlug } from "@/data/blog-posts";

export const alt = "Artigo do blog da Energy";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return renderOgImage({
    eyebrow: post ? `Blog · ${post.category}` : "Blog",
    title: post?.title ?? "Blog da Energy",
    footer: "Energy · energymidia.com.br/blog",
  });
}
