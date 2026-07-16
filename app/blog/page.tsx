import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Founder essays about products, security, development, discipline, and building an independent life.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageIntro
        eyebrow="Blog / Field notes"
        title="Ideas that deserve a permanent URL."
        description="Notes from building products, learning in public, working with discipline, and creating a life around useful work."
      />
      <section className="site-container pb-24 sm:pb-32" aria-label="All articles">
        {posts.length ? (
          <PostList posts={posts} />
        ) : (
          <p className="border-y border-border py-16 text-muted-foreground">The first note is being written.</p>
        )}
      </section>
    </>
  );
}
