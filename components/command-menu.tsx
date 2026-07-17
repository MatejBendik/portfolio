"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, FileText, Package, Search, UserRound } from "lucide-react";
import { products } from "@/content/products";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const routes = [
  { label: "Products", href: "/products", icon: Package },
  { label: "Blog", href: "/blog", icon: FileText },
  { label: "About", href: "/about", icon: UserRound },
];

const socials = [
  { label: "X / Twitter", href: siteConfig.socials.x },
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "Gumroad", href: siteConfig.socials.gumroad },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "Instagram", href: siteConfig.socials.instagram },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function navigate(href: string, external = false) {
    setOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    router.push(href);
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="hidden h-9 gap-3 rounded-full border border-border bg-muted/55 px-3.5 text-muted-foreground hover:bg-muted sm:inline-flex"
      >
        <Search aria-hidden="true" className="size-4" />
        <span className="border-l border-border pl-3 font-mono text-xs tracking-wide">⌘K</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Go anywhere…" />
          <CommandList>
            <CommandEmpty>No result found.</CommandEmpty>
            <CommandGroup heading="Navigate">
              {routes.map((item) => (
                <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                  <item.icon aria-hidden="true" />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Products">
              {products.map((product) => (
                <CommandItem
                  key={product.slug}
                  onSelect={() => navigate(`/products/${product.slug}`)}
                >
                  <Package aria-hidden="true" />
                  {product.name}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Elsewhere">
              {socials.map((social) => (
                <CommandItem
                  key={social.href}
                  onSelect={() => navigate(social.href, true)}
                >
                  <ExternalLink aria-hidden="true" />
                  {social.label}
                  <CommandShortcut>↗</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
