import { cn } from "@/lib/utils";

export function GridAndDotBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_78%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_78%,transparent)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_4%,black_88%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_22%,transparent)_1px,transparent_1.5px)] bg-[size:40px_40px] [background-position:20px_20px] [mask-image:radial-gradient(ellipse_82%_72%_at_48%_38%,black,transparent)]" />
    </div>
  );
}
