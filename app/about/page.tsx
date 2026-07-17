import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Dumbbell, MapPin, Trophy } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { getAge, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Matej Bendík — a full-stack developer, product builder, and computer science student based in Slovakia.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const age = getAge();
  const facts = [
    { icon: MapPin, label: "Based in", value: "Slovakia" },
    { icon: Trophy, label: "Milestone", value: "3rd place at Slovakia’s ZENIT web development competition" },
    { icon: Dumbbell, label: "Away from code", value: "Training consistently" },
    { icon: BookOpen, label: "Always doing", value: "Reading and taking notes" },
  ];

  return (
    <>
      <PageIntro
        eyebrow="About / The person behind the products"
        title="I want the work and the life around it to compound."
        description={`I’m Matej, a ${age}-year-old full-stack developer and computer science student building useful products from Slovakia.`}
      />

      <div className="site-container grid gap-12 pb-20 sm:pb-28 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div className="relative aspect-square overflow-hidden border border-border bg-muted">
            <Image src="/images/matej-bendik-portrait.jpg" alt="Portrait of Matej Bendík" fill loading="eager" sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-[center_22%]" />
          </div>
        </div>
        <div className="prose-founder border-t border-border pt-10">
          <p className="text-2xl leading-9 text-foreground">
            I am most interested in the point where engineering becomes a product: when code solves a clear problem, reaches another person, and earns a place in their workflow.
          </p>
          <p>
            I started by learning how websites work and turning small ideas into real interfaces. Competitions and hackathons taught me to work under constraints, communicate the value of a solution, and finish the path that matters instead of collecting unfinished features.
          </p>
          <h2>From developer to product builder</h2>
          <p>
            Shipping digital products made the work broader. The code still matters, but so do research, positioning, copy, distribution, support, and the discipline to improve something after launch. That combination is what I want to keep getting better at.
          </p>
          <p>
            Right now, I am building ShipSafe AI—a structured security workflow for developers shipping AI-built apps—and documenting what I learn from the process.
          </p>
          <h2>The habits behind the screen</h2>
          <p>
            Training gives me a reliable practice in consistency. Reading gives ideas enough time to connect. Sharing online makes the work less isolated and turns progress into conversations with people building their own things.
          </p>
          <p>
            The long-term goal is simple: build useful software and digital products, earn the freedom to work from anywhere, and keep a public record of the lessons that might help the next builder.
          </p>
          <a href={siteConfig.socials.x} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium">
            Follow what I’m building <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <section className="border-y border-border">
        <div className="site-container grid sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-border py-8 sm:border-r sm:px-6 lg:border-b-0 first:pl-0 last:border-r-0">
              <fact.icon className="size-5" aria-hidden="true" />
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{fact.label}</p>
              <p className="mt-2 text-sm leading-6">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
