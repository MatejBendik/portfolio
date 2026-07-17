import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { Reveal } from "@/components/reveal";

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <section className="border-y border-border bg-card" aria-labelledby="selected-projects">
      <div className="site-container py-20 sm:py-28">
        <Reveal className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected projects / 02</p>
            <h2 id="selected-projects" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Built to work in the real world.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-7 text-muted-foreground lg:justify-self-end">
            Three collaborative and independent builds shaped by real users, deadlines, and product decisions.
          </p>
        </Reveal>

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.04}>
              <article className="group grid gap-6 border-b border-border px-1 py-8 transition-colors hover:bg-muted/35 sm:px-5 sm:py-10 lg:grid-cols-[4rem_1fr_1.15fr_auto] lg:items-start">
                <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.category} · {project.period}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
                  <p className="mt-3 text-sm font-medium">{project.outcome}</p>
                </div>

                <div>
                  <p className="max-w-xl text-base leading-7 text-muted-foreground">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology} className="font-mono text-[11px] text-muted-foreground">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-3 lg:max-w-36 lg:flex-col lg:items-end">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
