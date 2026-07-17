"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { GridAndDotBackground } from "@/components/ui/grid-and-dot-background";
import { siteConfig } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border">
      <GridAndDotBackground />
      <div className="site-container relative z-10 grid min-h-[calc(100svh-4rem)] items-end gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.22fr)_minmax(22rem,.78fr)] lg:gap-16 lg:py-16">
        <div className="pb-2 lg:pb-6">
          <motion.a
            href="https://matejbendik.gumroad.com/l/shipsafeai"
            target="_blank"
            rel="noreferrer"
            {...enter(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] backdrop-blur-sm transition-colors hover:border-foreground"
          >
            <span className="size-1.5 rounded-full bg-foreground" />
            Currently building ShipSafe AI
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </motion.a>

          <motion.p
            {...enter(0.12)}
            className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground"
          >
            Full-stack developer · Slovakia
          </motion.p>
          <motion.h1
            {...enter(0.18)}
            className="mt-4 max-w-4xl text-balance text-[clamp(3.25rem,8vw,7.6rem)] leading-[0.88] font-semibold tracking-[-0.075em]"
          >
            I build and ship useful internet products.
          </motion.h1>
          <motion.p
            {...enter(0.26)}
            className="mt-7 max-w-xl text-balance text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8"
          >
            I&apos;m {siteConfig.shortName}, a developer turning small ideas into focused tools for builders, founders, and curious people.
          </motion.p>
          <motion.div {...enter(0.34)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/products">
                Explore products
                <ArrowDownRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <a href={siteConfig.socials.x} target="_blank" rel="noreferrer">
                Follow the journey
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.24)}
          className="relative mx-auto w-full max-w-[28rem] self-center lg:mx-0 lg:self-end"
        >
          <div className="absolute -inset-4 border border-border/80 bg-background/30 backdrop-blur-[2px]" />
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted">
            <Image
              src="/images/matej-bendik-portrait.jpg"
              alt="Portrait of Matej Bendík"
              fill
              priority
              sizes="(max-width: 1024px) 448px, 38vw"
              className="object-cover object-[center_24%] contrast-[1.03] transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.26),transparent_38%)]" />
            <span className="absolute right-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
              MB / 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
