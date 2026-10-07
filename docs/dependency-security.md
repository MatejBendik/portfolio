# Dependency security review — 2026-10-07

Updated Next.js and eslint-config-next to 16.4.0, sharp to 0.35.5,
and refreshed dependencies within their existing major versions. The lockfile
includes the patched versions for all 77 Dependabot alerts open before this
change (6 critical, 32 high, 35 medium, 4 low).

The PostCSS override now requires 8.5.29. postcss-selector-parser is overridden
to ^7.1.6 to fix GHSA-rj75-hqrm-r3gf in @tailwindcss/typography's older dependency.

## Advisories without published fixes

These packages remain installed. They are not exposed to attacker-controlled
inputs in this application; dismissal is a reachability decision, not a patch.
Reassess if their use changes or upstream publishes a fix. Keep Dependabot enabled.

- **GHSA-vfj7-8cjw-p6xm — braces <=3.0.3 (high):** used by fast-glob /
  micromatch in ESLint and shadcn tooling. The site does not accept glob patterns
  from requests or execute this tooling on user input. Patterns are controlled
  by repository code/configuration. There is no patched npm release as of review.
- **GHSA-hp3w-g68c-fv3c — sprintf-js <=1.1.3 (medium):** comes from
  gray-matter → js-yaml 3 → argparse's CLI help formatter. lib/blog.ts reads
  committed content/blog/*.mdx with gray-matter; it does not use argparse's CLI
  or pass request-controlled format strings to sprintf. There is no patched
  npm release as of review.

A raw `pnpm audit` reports these two advisories; no global audit suppression is
configured. GitHub may retain fixed/dismissed alerts in its history.

## Validation

`pnpm test` passed (ESLint, TypeScript, production build).
Playwright: 27 passed, 2 skipped, 1 failed. The failure is the pre-existing
rolling contribution graph test hardcoding two July labels; on the October
review date the graph contains only one July label. No application code changed.
