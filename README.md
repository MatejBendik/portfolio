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
- Replace `public/images/matej-bendik.webp` to update the primary portrait.

Production is designed for Vercel with `matejbendik.com` as the canonical domain.
