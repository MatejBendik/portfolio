import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/content";
import { Reveal } from "@/components/reveal";

export function ProductList({
  products,
  prioritizeFirst = false,
}: {
  products: Product[];
  prioritizeFirst?: boolean;
}) {
  return (
    <div className="border-t border-border">
      {products.map((product, index) => (
        <Reveal key={product.slug} delay={Math.min(index * 0.04, 0.12)}>
          <Link
            href={`/products/${product.slug}`}
            className="group grid gap-7 border-b border-border py-8 sm:py-10 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(18rem,.72fr)] lg:items-center lg:gap-10"
          >
            <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {product.eyebrow}
              </p>
              <h3 className="mt-3 flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {product.name}
                <ArrowUpRight
                  className="size-6 -translate-x-1 translate-y-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                  aria-hidden="true"
                />
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                {product.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
                {product.metrics.slice(0, 2).map((metric) => (
                  <span key={metric.label}>
                    <strong className="font-medium text-foreground">{metric.value}</strong>{" "}
                    {metric.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-muted">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                loading={prioritizeFirst && index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover grayscale saturate-0 transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0 group-hover:saturate-100 group-focus-visible:grayscale-0 group-focus-visible:saturate-100"
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
