import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  ["X", siteConfig.socials.x],
  ["GitHub", siteConfig.socials.github],
  ["Gumroad", siteConfig.socials.gumroad],
  ["LinkedIn", siteConfig.socials.linkedin],
  ["Instagram", siteConfig.socials.instagram],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="site-container py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Build. Ship. Learn. Repeat.
            </p>
            <p className="mt-4 max-w-xl text-2xl font-medium tracking-tight sm:text-3xl">
              Building useful products from Slovakia for the open internet.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {socialLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Matej Bendík.</p>
          <div className="flex gap-4">
            <Link href="/rss.xml" className="hover:text-foreground">RSS</Link>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
