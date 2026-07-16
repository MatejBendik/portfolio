import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProductList } from "@/components/product-list";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Digital products and tools built by Matej Bendík for developers and independent builders.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products / Selected work"
        title="Useful things, shipped."
        description="A focused collection of security workflows, developer resources, and digital tools built from real problems."
      />
      <section className="site-container pb-24 sm:pb-32" aria-label="Product collection">
        <ProductList products={products} prioritizeFirst />
      </section>
    </>
  );
}
