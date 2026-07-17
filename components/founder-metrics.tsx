const metrics = [
  { value: "4", label: "Products in the current portfolio" },
  { value: "€1,000", label: "Hackathon prize won with What2Eat" },
  { value: "100+", label: "Public GitHub contributions in the last year" },
] as const;

export function FounderMetrics() {
  return (
    <section className="border-b border-border" aria-label="Selected milestones">
      <div className="site-container grid sm:grid-cols-3">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="group border-b border-border px-6 py-6 transition-colors last:border-b-0 hover:bg-foreground hover:text-background sm:border-r sm:border-b-0 sm:last:border-r-0"
          >
            <p className="font-mono text-2xl font-medium tracking-tight">{metric.value}</p>
            <p className="mt-2 max-w-56 text-xs leading-5 text-muted-foreground transition-colors group-hover:text-background/65">
              {metric.label}
            </p>
            <span className="mt-5 block h-px w-8 bg-foreground transition-all duration-500 group-hover:w-full group-hover:bg-background/50" aria-hidden="true" />
            <span className="sr-only">Milestone {index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
