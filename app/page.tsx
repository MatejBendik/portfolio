import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FounderMetrics } from "@/components/founder-metrics";
import { GitHubContributions, GitHubContributionsFallback } from "@/components/github-contributions";
import { Hero } from "@/components/hero";
import { PostList } from "@/components/post-list";
import { ProductList } from "@/components/product-list";
import { ProductSignal } from "@/components/product-signal";
import { ProjectShowcase } from "@/components/project-showcase";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { VisitorGlobe } from "@/components/visitor-globe";
import { WorkExperience } from "@/components/work-experience";
import { workExperiences } from "@/content/experience";
import { featuredProducts } from "@/content/products";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/blog";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import { getAge, siteConfig } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const age = getAge();
  const contributions = getCachedContributions("MatejBendik");
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
      <FounderMetrics />

      <section className="site-container relative overflow-hidden py-20 sm:py-28" aria-labelledby="selected-work">
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
        <ProductSignal />
        <ProductList products={featuredProducts} />
        <div className="mt-8 flex justify-end">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/products">View all products <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>

      <ProjectShowcase projects={projects} />

      <section className="border-y border-border bg-card" aria-labelledby="proof-and-path">
        <div className="site-container py-20 sm:py-28">
          <Reveal className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Proof &amp; path / 03</p>
              <h2 id="proof-and-path" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                The work behind the work.
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-7 text-muted-foreground lg:justify-self-end">
              A public record of shipping, learning in teams, and turning technical practice into useful products.
            </p>
          </Reveal>

          <Reveal className="grid overflow-hidden border border-border lg:grid-cols-[.38fr_.62fr]">
            <div className="border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Experience</p>
              <h3 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">Products, teams and competition pressure.</h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
                Open a role to see the work behind it. The component keeps each chapter compact while the details stay one click away.
              </p>
            </div>
            <div className="bg-background">
              <WorkExperience className="h-full px-6 py-2 sm:px-8" experiences={workExperiences} />
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
            <Reveal className="flex min-w-0 flex-col justify-center border border-border p-6 sm:p-8">
              <div className="mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Open-source rhythm</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">GitHub contributions</h3>
              </div>
              <Suspense fallback={<GitHubContributionsFallback />}>
                <GitHubContributions contributions={contributions} githubProfileUrl={siteConfig.socials.github} />
              </Suspense>
            </Reveal>
            <Reveal delay={0.06} className="min-w-0 overflow-hidden border border-border">
              <VisitorGlobe />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="site-container grid gap-12 py-20 sm:py-28 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/55">About / 04</p>
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

      <section className="site-container py-20 sm:py-28" aria-labelledby="latest-notes">
        <Reveal className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Writing / 05</p>
            <h2 id="latest-notes" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Notes from the work.</h2>
          </div>
          <p className="max-w-lg text-lg leading-7 text-muted-foreground lg:justify-self-end">
            Founder essays about security, products, disciplined building, and the life around the screen.
          </p>
        </Reveal>
        <PostList posts={posts} />
      </section>
    </>
  );
}
