import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/blog";
import type { BlogPost } from "@/types/content";

export function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="border-t border-border">
      {posts.map((post, index) => (
        <article key={post.slug} className="border-b border-border">
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-5 py-7 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:py-9"
          >
            <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
            <div>
              <h3 className="max-w-3xl text-xl font-medium tracking-tight sm:text-2xl">
                {post.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                {post.description}
              </p>
            </div>
            <div className="flex items-center gap-6 sm:justify-end">
              <span className="font-mono text-[11px] text-muted-foreground">
                {formatDate(post.publishedAt)} · {post.readingTime}
              </span>
              <ArrowUpRight
                className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
