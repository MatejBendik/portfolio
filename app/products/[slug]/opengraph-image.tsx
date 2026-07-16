import { ImageResponse } from "next/og";
import { getProduct, products } from "@/content/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug) ?? products[0];

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0d0d0d", color: "#f5f5f5", padding: "64px" }}>
      <div style={{ display: "flex", fontSize: 22, textTransform: "uppercase", letterSpacing: "0.12em", color: "#aaa" }}>Product by Matej Bendík</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 86, lineHeight: 0.96, letterSpacing: "-0.055em", fontWeight: 700 }}>{product.name}</div>
        <div style={{ display: "flex", marginTop: 24, maxWidth: 900, fontSize: 28, lineHeight: 1.35, color: "#bbb" }}>{product.summary}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20 }}><span>{product.eyebrow}</span><span>matejbendik.com</span></div>
    </div>,
    size,
  );
}
