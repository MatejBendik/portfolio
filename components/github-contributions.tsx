import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionResponse = {
  total: Record<string, number>;
  contributions: Contribution[];
};

async function getContributions() {
  try {
    const response = await fetch(
      "https://github-contributions-api.jogruber.de/v4/MatejBendik?y=last",
      { next: { revalidate: 86_400 } },
    );

    if (!response.ok) return null;
    return (await response.json()) as ContributionResponse;
  } catch {
    return null;
  }
}

export async function GitHubContributions() {
  const data = await getContributions();
  const contributions = data?.contributions.slice(-371) ?? [];
  const total = data ? Object.values(data.total)[0] : null;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Open-source rhythm</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">GitHub contributions</h3>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {total === null ? "Public activity" : `${total} contributions · last 12 months`}
        </p>
      </div>

      {contributions.length > 0 ? (
        <div className="mt-8 overflow-x-auto pb-2" aria-label={`${total ?? "Recent"} GitHub contributions in the last year`}>
          <div className="grid min-w-[50rem] grid-flow-col grid-rows-7 gap-1">
            {contributions.map((day) => (
              <span
                key={day.date}
                title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                className="aspect-square min-w-2.5 border border-foreground/8 bg-foreground"
                style={{ opacity: [0.035, 0.2, 0.42, 0.68, 0.94][day.level] }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 flex min-h-32 items-center justify-center border border-dashed border-border text-sm text-muted-foreground">
          Contribution data is temporarily unavailable.
        </div>
      )}

      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
      >
        View @MatejBendik on GitHub
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}
