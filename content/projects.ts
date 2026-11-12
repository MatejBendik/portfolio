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
    name: "GlobeAlbum",
    category: "Travel collection",
    period: "2026",
    description:
      "A private travel collection that turns photos and places into a shareable, interactive dotted globe.",
    outcome: "MVP built",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Neon (PostgreSQL)", "Better Auth", "Cloudflare R2"],
    links: [
      { label: "Open GlobeAlbum", href: "https://globealbum.com", external: true },
      { label: "Source", href: "https://github.com/MatejBendik/GlobeAlbum", external: true },
    ],
  },
  {
    name: "Aktivity",
    category: "Party game",
    period: "2026",
    description:
      "A mobile-first party game for 2–6 teams sharing one phone. Describe, draw, or act out prompts in English or Slovak, with no accounts or registration required.",
    outcome: "Shipped live",
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "i18n"],
    links: [
      { label: "Play Aktivity", href: "https://aktivity.matejbendik.com", external: true },
      { label: "Source", href: "https://github.com/MatejBendik/activity-game", external: true },
    ],
  },
  {
    name: "MakeDock",
    category: "Independent utility",
    period: "2026",
    description:
      "A free browser tool for composing polished macOS-style dock images, reordering apps, choosing a theme, and exporting the result.",
    outcome: "Shipped live",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "dnd kit"],
    links: [
      { label: "Open MakeDock", href: "https://makedock.vercel.app", external: true },
      { label: "Source", href: "https://github.com/MatejBendik/MakeDock", external: true },
    ],
  },
  {
    name: "WatchParty",
    category: "Collaborative platform",
    period: "2026",
    description:
      "A shared viewing platform with synchronized playback, watch rooms, instant invites, and real-time chat for watching together from anywhere.",
    outcome: "Full-stack collaboration",
    technologies: ["Next.js", "NestJS", "AWS ECR", "AWS Fargate", "AWS Application Load Balancer", "AWS Cognito", "AWS DynamoDB", "AWS API Gateway (WebSocket)", "AWS Lambda"],
    links: [
      { label: "Open WatchParty", href: "https://watch-party-web.vercel.app", external: true },
      { label: "Source", href: "https://github.com/TeamLES/WatchParty", external: true },
    ],
  },
  {
    name: "LrnWithAI",
    category: "Bachelor project",
    period: "2024–2025",
    description:
      "A collaborative learning workspace for notes, classes, tests, flashcards, public profiles, and AI-generated study material from PDFs.",
    outcome: "Full-stack collaboration",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Supabase", "OpenAI API", "Zustand"],
    links: [{ label: "View source", href: "https://github.com/LrnWithAI/platform", external: true }],
  },
  {
    name: "What2Eat",
    category: "Telekom Hackathon",
    period: "2025",
    description:
      "An AI meal-planning product built by a five-person team in 24 hours, combining onboarding, user preferences, saved data, and generated meal ideas.",
    outcome: "3rd of 69 · €1,000 prize",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Supabase", "OpenAI API"],
    links: [
      { label: "Read the story", href: "/blog/the-hackathon-we-won" },
      { label: "Source", href: "https://github.com/TeamLES/hackathon-telekom-2025-What2Eat", external: true },
    ],
  },
];
