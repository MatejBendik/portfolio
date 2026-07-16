"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="sm:hidden" aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(22rem,90vw)]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigate</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col px-4 pb-8" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="border-b border-border py-5 text-2xl font-medium tracking-tight"
              >
                <span className="mr-4 font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
