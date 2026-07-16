import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug) ?? getAllPosts()[0];

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f7f7f5", color: "#111", padding: "64px", border: "1px solid #111" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20 }}><span>Matej Bendík / Notes</span><span>{post.tags.join(" · ")}</span></div>
      <div style={{ display: "flex", maxWidth: 1050, fontSize: 72, lineHeight: 1, letterSpacing: "-0.05em", fontWeight: 700 }}>{post.title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20 }}><span>{post.publishedAt}</span><span>matejbendik.com</span></div>
    </div>,
    size,
  );
}
