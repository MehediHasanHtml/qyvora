import { renderOg, ogSize } from "@/lib/og";
import { getPost, posts } from "@/lib/content/posts";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Qyvora Studio insights article";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOg({ eyebrow: post?.category ?? "Insights", title: post?.title ?? "Qyvora Studio Insights" });
}
