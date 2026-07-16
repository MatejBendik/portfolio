import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogFrontmatter, BlogPost } from "@/types/content";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

function isFrontmatter(value: unknown): value is BlogFrontmatter {
  if (!value || typeof value !== "object") return false;
  const data = value as Partial<BlogFrontmatter>;
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.publishedAt === "string" &&
    Array.isArray(data.tags) &&
    data.tags.every((tag) => typeof tag === "string") &&
    typeof data.draft === "boolean"
  );
}

export function getAllPosts({ includeDrafts = false } = {}): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIRECTORY, file), "utf8");
      const { data, content } = matter(raw);

      if (!isFrontmatter(data)) {
        throw new Error(`Invalid blog frontmatter in ${file}`);
      }

      return {
        ...data,
        slug,
        content,
        readingTime: readingTime(content).text,
      };
    })
    .filter((post) => includeDrafts || !post.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
