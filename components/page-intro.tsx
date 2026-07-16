import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <header className={cn("site-container py-16 sm:py-24", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl text-balance text-5xl leading-[0.96] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">
        {title}
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{description}</p>
    </header>
  );
}
