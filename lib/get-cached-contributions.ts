import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getCachedContributions = unstable_cache(
  async (username: string) => {
    const url = `${process.env.GITHUB_CONTRIBUTIONS_API_URL || `https://github-contributions-api.jogruber.de`}/v4/${username}?y=2026`

    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const res = await fetch(url)
        if (!res.ok) continue

        const data = (await res.json()) as GitHubContributionsResponse
        if (Array.isArray(data.contributions)) {
          return data.contributions
        }
      } catch {
        // Retry once and degrade gracefully if the public API is unavailable.
      }
    }

    return []
  },
  ["github-contributions-2026-v1"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
