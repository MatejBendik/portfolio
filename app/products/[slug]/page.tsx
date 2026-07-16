import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/content/products";
import { SITE_URL, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      url: `/products/${product.slug}`,
      title: product.seo.title,
      description: product.seo.description,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.description,
    image: product.images.map((image) => image.src),
    url: `${SITE_URL}/products/${product.slug}`,
    brand: { "@type": "Person", name: siteConfig.name },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 2, name: product.name, item: `${SITE_URL}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <article>
        <header className="site-container py-12 sm:py-20">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to products
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{product.eyebrow}</p>
              <h1 className="mt-4 text-balance text-5xl leading-[.94] font-semibold tracking-[-0.055em] sm:text-7xl">{product.name}</h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">{product.summary}</p>
              <Button asChild size="lg" className="mt-8 rounded-full px-6">
                <a href={product.externalUrl} target="_blank" rel="noreferrer">
                  View product <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 border-y border-border">
              {product.metrics.map((metric) => (
                <div key={metric.label} className="border-r border-border py-5 pr-3 last:border-r-0 last:pl-4">
                  <p className="font-mono text-xl font-medium sm:text-2xl">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="border-y border-border bg-muted/40">
          <div className="site-container py-8 sm:py-12">
            <div className="relative aspect-[16/9] overflow-hidden border border-border bg-card">
              <Image src={product.images[0].src} alt={product.images[0].alt} fill priority sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover grayscale transition duration-700 hover:grayscale-0" />
            </div>
          </div>
        </div>

        <div className="site-container grid gap-16 py-20 sm:py-28 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The problem</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Built because the usual workflow was not enough.</h2>
          </div>
          <div>
            <p className="text-xl leading-8 text-muted-foreground">{product.problem}</p>
            <p className="mt-8 text-xl leading-8">{product.description}</p>
          </div>
        </div>

        <section className="border-y border-border" aria-labelledby="inside-heading">
          <div className="site-container grid gap-12 py-20 sm:py-24 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What&apos;s inside</p>
              <h2 id="inside-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Designed to be useful on day one.</h2>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {product.sellingPoints.map((point) => (
                <li key={point} className="flex gap-4 py-5 leading-7">
                  <Check className="mt-1 size-4 shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="site-container py-20 text-center sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Make {product.name} part of your workflow.</h2>
          <Button asChild size="lg" className="mt-8 rounded-full px-6">
            <a href={product.gumroadUrl} target="_blank" rel="noreferrer">Explore on Gumroad <ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </section>
      </article>
    </>
  );
}
