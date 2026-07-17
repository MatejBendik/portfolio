import { cn } from "@/lib/utils";

export function GridAndDotBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-y-0 left-1/2 w-[min(76rem,calc(100%-2.5rem))] -translate-x-1/2 opacity-45 [mask-image:radial-gradient(ellipse_78%_74%_at_50%_42%,black_28%,transparent_82%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_54%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_54%,transparent)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_17%,transparent)_1px,transparent_1.5px)] bg-[size:40px_40px] [background-position:20px_20px]" />
      </div>
    </div>
  );
}
