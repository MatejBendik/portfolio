import Image from "next/image";
import Link from "next/link";
import { CommandMenu } from "@/components/command-menu";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Matej Bendík, home">
          <span className="relative size-8 overflow-hidden rounded-full border border-border bg-muted">
            <Image
              src="/images/matej-bendik-portrait.jpg"
              alt=""
              fill
              loading="eager"
              sizes="32px"
              className="object-cover object-[center_20%]"
            />
          </span>
          <span className="text-sm font-semibold tracking-tight">Matej Bendík</span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="mr-2 hidden items-center sm:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <CommandMenu />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
