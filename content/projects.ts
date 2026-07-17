export type Project = {
  name: string;
  category: string;
  period: string;
  description: string;
  outcome: string;
  technologies: string[];
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
};

export const projects: Project[] = [
  {
    name: "MakeDock",
    category: "Independent utility",
    period: "2026",
    description:
      "A free browser tool for composing polished macOS-style dock images, reordering apps, choosing a theme, and exporting the result.",
    outcome: "Shipped live",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Open MakeDock", href: "https://makedock.vercel.app", external: true },
      { label: "Source", href: "https://github.com/MatejBendik/MakeDock", external: true },
    ],
  },
  {
    name: "What2Eat",
    category: "Telekom Hackathon",
    period: "2025",
    description:
      "An AI meal-planning product built by a five-person team in 24 hours, combining onboarding, user preferences, saved data, and generated meal ideas.",
    outcome: "3rd of 69 · €1,000 prize",
    technologies: ["Next.js", "Supabase", "OpenAI"],
    links: [{ label: "Read the story", href: "/blog/the-hackathon-we-won" }],
  },
  {
    name: "LrnWithAI",
    category: "Bachelor project",
    period: "2024–2025",
    description:
      "A collaborative learning workspace for notes, classes, tests, flashcards, public profiles, and AI-generated study material from PDFs.",
    outcome: "Full-stack collaboration",
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    links: [{ label: "View source", href: "https://github.com/LrnWithAI/platform", external: true }],
  },
];
