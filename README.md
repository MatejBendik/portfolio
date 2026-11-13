# matejbendik.com

The personal home on the internet of Matej Bendík — a full-stack developer building and shipping useful digital products.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS v4 and shadcn/ui
- Motion for React
- Local MDX blog content
- Playwright and axe accessibility checks
- Vercel Analytics and Speed Insights

## Development

```bash
pnpm install
pnpm dev
```

The application uses a root-level Next.js structure: routes live in `app/`, reusable UI in `components/`, and typed local content in `content/`.

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test:e2e
pnpm audit --prod
```

## Content

- Edit product data in `content/products.ts`.
- Add posts as `.mdx` files in `content/blog/` using the existing frontmatter shape.
- Replace `public/images/matej-bendik-portrait.jpg` to update the primary portrait.

Production is designed for Vercel with `matejbendik.com` as the canonical domain.

## Travel globe

The homepage embeds the published [GlobeAlbum travel journal](https://globealbum.com/u/matejbendik).
It uses a square next to GitHub contributions on wide screens, a landscape frame below the graph
on tablets, and a square below it on phones. The iframe follows the portfolio's light/dark theme and loads lazily.
The previous anonymous visitor globe, presence heartbeat API, and their dependencies have been removed.

The Playwright suite checks the host integration with a stubbed iframe response. Live cross-origin
checks on 2026-11-13 separately verified both themes and photo gallery navigation at 1440, 820,
and 390 px viewport widths. No physical mobile device testing was performed.
