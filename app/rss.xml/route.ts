import { getAllPosts } from "@/lib/blog";
import { SITE_URL, siteConfig } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = getAllPosts()
    .map(
      (post) => `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${SITE_URL}/blog/${post.slug}</link>
        <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
        <description>${escapeXml(post.description)}</description>
        <pubDate>${new Date(`${post.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>
      </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(siteConfig.name)}</title>
      <link>${SITE_URL}</link>
      <description>${escapeXml(siteConfig.description)}</description>
      <language>en</language>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
