import { Code2, Rocket, Trophy } from "lucide-react";
import type { ExperienceItemType } from "@/components/work-experience";

export const workExperiences: ExperienceItemType[] = [
  {
    id: "matejbendik",
    companyName: "MatejBendik.com",
    companyLogo: "/images/matej-bendik-portrait.jpg",
    companyWebsite: "https://matejbendik.com",
    positions: [
      {
        id: "independent-product-builder",
        title: "Independent Product Builder",
        employmentPeriod: { start: "2025" },
        employmentType: "Independent",
        description:
          "Building and shipping focused tools for developers and solo founders. Current work includes ShipSafe AI and a growing library of practical digital products.",
        icon: <Rocket />,
        skills: ["Product Engineering", "Next.js", "TypeScript", "Distribution"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "telekom-hackathon",
    companyName: "Telekom Hackathon",
    positions: [
      {
        id: "what2eat",
        title: "What2Eat · 3rd place from 69 teams",
        employmentPeriod: { start: "11.2025", end: "11.2025" },
        employmentType: "24-hour hackathon",
        description:
          "Built an AI meal-planning product in a five-person team and won a €1,000 prize. I worked across authentication, onboarding, user preferences, Supabase storage and AI-powered meal suggestions.",
        icon: <Trophy />,
        skills: ["Next.js", "Supabase", "OpenAI", "Teamwork"],
      },
    ],
  },
  {
    id: "lrnwithai",
    companyName: "LrnWithAI",
    companyWebsite: "https://github.com/LrnWithAI/platform",
    positions: [
      {
        id: "full-stack-developer",
        title: "Full-stack Developer",
        employmentPeriod: { start: "11.2024", end: "05.2025" },
        employmentType: "Bachelor project",
        description:
          "Co-built an AI learning platform with tests, flashcards and PDF-based study material generation. I implemented core learning flows and the Supabase-backed data layer.",
        icon: <Code2 />,
        skills: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
      },
    ],
  },
  {
    id: "zenit",
    companyName: "ZENIT Web Developer",
    positions: [
      {
        id: "zenit-national",
        title: "3rd place · Slovak national round",
        employmentPeriod: { start: "03.2022", end: "03.2022" },
        description:
          "Built a complete travel agency application under timed competition constraints, covering its database, admin interface, authentication and public frontend.",
        icon: <Trophy />,
        skills: ["PHP", "MySQL", "JavaScript", "CSS"],
      },
      {
        id: "zenit-county",
        title: "1st place · Košice county round",
        employmentPeriod: { start: "11.2021", end: "11.2021" },
        description:
          "Represented my high school and built a responsive full-stack car dealership website for the regional round.",
        icon: <Trophy />,
        skills: ["PHP", "MySQL", "JavaScript"],
      },
    ],
  },
];
