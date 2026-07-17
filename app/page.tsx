import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { GitHubContributions } from "@/components/github-contributions";
import { Hero } from "@/components/hero";
import { PostList } from "@/components/post-list";
import { ProductList } from "@/components/product-list";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { VisitorGlobe } from "@/components/visitor-globe";
import { featuredProducts } from "@/content/products";
import { getAllPosts } from "@/lib/blog";
import { getAge, siteConfig } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const age = getAge();
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: "https://matejbendik.com",
    image: "https://matejbendik.com/images/matej-bendik-portrait.jpg",
    jobTitle: "Full-stack developer",
    homeLocation: { "@type": "Country", name: siteConfig.location },
    sameAs: Object.values(siteConfig.socials),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />

      <section className="site-container py-20 sm:py-28" aria-labelledby="selected-work">
        <Reveal className="mb-12 grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work / 01</p>
            <h2 id="selected-work" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Products I&apos;ve shipped.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-7 text-muted-foreground lg:justify-self-end">
            Focused tools and digital resources built from problems I wanted to solve for myself and other developers.
          </p>
        </Reveal>
        <ProductList products={featuredProducts} />
        <div className="mt-8 flex justify-end">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/products">View all products <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>

      <TracingBeam>
        <section className="border-y border-border bg-card" aria-labelledby="proof-and-path">
          <div className="site-container py-20 sm:py-28">
            <Reveal className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proof &amp; path / 02</p>
                <h2 id="proof-and-path" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                  The work behind the work.
                </h2>
              </div>
              <p className="max-w-lg text-lg leading-7 text-muted-foreground lg:justify-self-end">
                A public record of shipping, learning in teams, and turning technical practice into useful products.
              </p>
            </Reveal>

            <div className="grid overflow-hidden border border-border lg:grid-cols-[1.08fr_.92fr]">
              <Reveal className="min-w-0 p-6 sm:p-8 lg:border-r lg:border-border">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Experience</p>
                <h3 className="mt-2 mb-8 text-3xl font-semibold tracking-tight">Selected chapters</h3>
                <ExperienceTimeline />
              </Reveal>
              <Reveal delay={0.08} className="min-w-0 border-t border-border lg:border-t-0">
                <VisitorGlobe />
              </Reveal>
              <Reveal className="border-t border-border p-6 sm:p-8 lg:col-span-2">
                <Suspense fallback={<div className="h-48 animate-pulse bg-muted" />}>
                  <GitHubContributions />
                </Suspense>
              </Reveal>
            </div>
          </div>
        </section>
      </TracingBeam>

      <section className="border-y border-border bg-foreground text-background">
        <div className="site-container grid gap-12 py-20 sm:py-28 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/55">About / 03</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Developer by craft. Builder by instinct.</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:pt-14">
            <p className="max-w-2xl text-xl leading-8 text-background/72 sm:text-2xl sm:leading-9">
              I&apos;m a {age}-year-old computer science student from Slovakia. I care about clean engineering, useful products, thoughtful distribution, and building a life with more freedom to create.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-background/30 underline-offset-8 hover:decoration-background">
              Read my story <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <TracingBeam>
        <section className="site-container py-20 sm:py-28" aria-labelledby="latest-notes">
          <Reveal className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Writing / 04</p>
              <h2 id="latest-notes" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Notes from the work.</h2>
            </div>
            <p className="max-w-lg text-lg leading-7 text-muted-foreground lg:justify-self-end">
              Founder essays about security, products, disciplined building, and the life around the screen.
            </p>
          </Reveal>
          <PostList posts={posts} />
        </section>
      </TracingBeam>
    </>
  );
}
