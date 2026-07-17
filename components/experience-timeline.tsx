import { ArrowUpRight, BriefcaseBusiness, Trophy } from "lucide-react";

const experience = [
  {
    period: "2025 — present",
    title: "Independent product builder",
    organization: "MatejBendik.com",
    description:
      "Building and shipping focused developer tools and digital products, including ShipSafe AI and The Frontend Toolkit.",
    icon: BriefcaseBusiness,
  },
  {
    period: "Nov 2025",
    title: "3rd place · €1,000 prize",
    organization: "Telekom Hackathon · What2Eat",
    description:
      "Built an AI meal-planning product in a five-person team over 24 hours, placing third among 69 teams.",
    icon: Trophy,
  },
  {
    period: "2024 — 2025",
    title: "Full-stack developer",
    organization: "LrnWithAI",
    description:
      "Co-built an AI learning platform with tests, flashcards and PDF-based study material generation using Next.js, Supabase and OpenAI.",
    icon: BriefcaseBusiness,
  },
  {
    period: "2021 — 2022",
    title: "1st county · 3rd national",
    organization: "ZENIT Web Developer",
    description:
      "Represented my school in two timed full-stack web development competitions, progressing from the regional round to a national podium finish.",
    icon: Trophy,
  },
] as const;

export function ExperienceTimeline() {
  return (
    <div className="divide-y divide-border">
      {experience.map((item) => (
        <article key={`${item.period}-${item.organization}`} className="group grid min-w-0 gap-4 py-6 first:pt-0 sm:grid-cols-[8.5rem_1fr]">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {item.period}
          </p>
          <div className="min-w-0">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center border border-border bg-background transition-colors group-hover:bg-foreground group-hover:text-background">
                <item.icon className="size-3.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.organization}</p>
              </div>
            </div>
            <p className="mt-4 max-w-xl break-words text-sm leading-6 text-muted-foreground sm:pl-11">
              {item.description}
            </p>
          </div>
        </article>
      ))}
      <a
        href="https://www.linkedin.com/in/matejbendik/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between py-5 text-sm font-medium"
      >
        Full profile on LinkedIn
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}
