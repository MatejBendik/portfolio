import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="site-container flex min-h-[65svh] flex-col justify-center py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">404 / Off the map</p>
      <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">This page has not been shipped.</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">The link may be old, or the page never made it past the idea stage.</p>
      <Button asChild className="mt-8 w-fit rounded-full" variant="outline">
        <Link href="/"><ArrowLeft aria-hidden="true" /> Back home</Link>
      </Button>
    </section>
  );
}
