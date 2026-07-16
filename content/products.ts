import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    slug: "shipsafe-ai",
    name: "ShipSafe AI",
    eyebrow: "Security system for AI-built apps",
    summary:
      "A Notion-based pre-launch security operating system for indie developers shipping with AI.",
    description:
      "ShipSafe gives Codex, Claude Code, and Cursor a structured workflow to audit a repository, document evidence, propose fixes, wait for approval, retest, and produce a launch-readiness report.",
    problem:
      "Vibe-coded products can move from idea to production in days, while missing authorization checks, exposed secrets, unsafe AI routes, dependency risks, and deployment mistakes remain easy to overlook.",
    sellingPoints: [
      "A repeatable read-only audit workflow instead of a vague ‘check security’ prompt.",
      "Agent kits for Codex, Claude Code, and Cursor, plus a Node.js installer.",
      "Notion control center for findings, approvals, fix tasks, retests, and reports.",
      "Coverage across authentication, authorization, injection, secrets, AI abuse, privacy, and deployment hardening.",
    ],
    externalUrl: "https://matejbendik.gumroad.com/l/shipsafeai",
    gumroadUrl: "https://matejbendik.gumroad.com/l/shipsafeai",
    images: [
      {
        src: "https://public-files.gumroad.com/ezazw1i7hi9knaa9i6ukvqrvl2es",
        alt: "ShipSafe AI product cover",
      },
    ],
    featured: true,
    status: "active",
    metrics: [
      { value: "3", label: "AI agent kits" },
      { value: "20+", label: "security risk areas" },
      { value: "1", label: "launch-readiness workflow" },
    ],
    seo: {
      title: "ShipSafe AI — Pre-launch security audits for AI-built apps",
      description:
        "A structured pre-launch security workflow for indie developers using Codex, Claude Code, Cursor, and other AI coding tools.",
    },
  },
  {
    slug: "frontend-toolkit",
    name: "The Frontend Toolkit",
    eyebrow: "Curated developer resource library",
    summary:
      "A practical Notion database that keeps the best frontend resources organized and ready to use.",
    description:
      "The Frontend Toolkit brings UI libraries, JavaScript packages, repositories, icons, fonts, and online tools into one curated workspace for modern frontend developers.",
    problem:
      "Useful frontend resources are usually scattered across bookmarks, notes, social feeds, and forgotten browser tabs right when a project needs them.",
    sellingPoints: [
      "Curated resources instead of an unfiltered link dump.",
      "Clear categories for faster discovery during real project work.",
      "A Notion-native library that is easy to search, duplicate, and extend.",
      "Useful for developers learning the ecosystem and experienced builders refining their workflow.",
    ],
    externalUrl: "https://matejbendik.gumroad.com/l/thefrontendtoolkit",
    gumroadUrl: "https://matejbendik.gumroad.com/l/thefrontendtoolkit",
    images: [
      {
        src: "https://public-files.gumroad.com/og3fzq7tbu4usz2zclctaxxzy8al",
        alt: "The Frontend Toolkit product cover",
      },
    ],
    featured: true,
    status: "maintained",
    metrics: [
      { value: "1", label: "organized workspace" },
      { value: "7+", label: "resource categories" },
      { value: "Free", label: "to start using" },
    ],
    seo: {
      title: "The Frontend Toolkit — Curated resources for developers",
      description:
        "A curated Notion database of frontend libraries, tools, repositories, icons, fonts, and inspiration.",
    },
  },
  {
    slug: "treasure-useful-websites",
    name: "Treasure of 500+ Useful Websites",
    eyebrow: "A field guide to the useful web",
    summary:
      "More than 500 handpicked websites for developers, designers, and people who build on the internet.",
    description:
      "Treasure organizes useful websites across design, development, learning, SEO, browser extensions, and creative resources so the right tool is easier to find.",
    problem:
      "The web is full of excellent tools, but discovery is noisy and the best resources disappear into bookmark folders that are rarely opened again.",
    sellingPoints: [
      "More than 500 resources collected into a browsable Notion library.",
      "Categories spanning icons, fonts, colors, stock assets, CSS, SEO, and inspiration.",
      "Built for developers, designers, beginners, and independent creators.",
      "A reusable reference library rather than another temporary list of links.",
    ],
    externalUrl: "https://matejbendik.gumroad.com/l/treasure",
    gumroadUrl: "https://matejbendik.gumroad.com/l/treasure",
    images: [
      {
        src: "https://public-files.gumroad.com/iq1svqiudcjx96ehtgawwva97ngc",
        alt: "Treasure of 500+ Useful Websites product cover",
      },
    ],
    featured: true,
    status: "maintained",
    metrics: [
      { value: "500+", label: "useful websites" },
      { value: "10", label: "core categories" },
      { value: "2", label: "available editions" },
    ],
    seo: {
      title: "Treasure of 500+ Useful Websites",
      description:
        "A curated Notion library of 500+ useful websites and resources for developers, designers, and creators.",
    },
  },
  {
    slug: "code-snippets-manager",
    name: "Code Snippets Manager",
    eyebrow: "Your reusable code library",
    summary:
      "A structured Notion workspace for keeping useful code close, searchable, and ready for the next project.",
    description:
      "Code Snippets Manager gives algorithms, functions, patterns, and small solutions a permanent home instead of leaving them buried in old repositories and browser history.",
    problem:
      "Developers repeatedly solve the same small problems because the useful snippet from the last project is difficult to find and has no context attached to it.",
    sellingPoints: [
      "Organize snippets by language, category, purpose, and project context.",
      "Keep explanations beside the code so a snippet remains useful later.",
      "Search one personal library instead of old repositories and forgotten tabs.",
      "Customize the taxonomy as your stack and coding habits evolve.",
    ],
    externalUrl: "https://matejbendik.gumroad.com/l/codesnippetsmanager",
    gumroadUrl: "https://matejbendik.gumroad.com/l/codesnippetsmanager",
    images: [
      {
        src: "https://public-files.gumroad.com/4rjmeh7097d0ji7ib51w1d6w3qbp",
        alt: "Code Snippets Manager product cover",
      },
    ],
    featured: true,
    status: "maintained",
    metrics: [
      { value: "1", label: "searchable code library" },
      { value: "∞", label: "custom categories" },
      { value: "Notion", label: "native workflow" },
    ],
    seo: {
      title: "Code Snippets Manager — A searchable code library in Notion",
      description:
        "Organize reusable code snippets, patterns, and explanations in a flexible Notion workspace.",
    },
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
