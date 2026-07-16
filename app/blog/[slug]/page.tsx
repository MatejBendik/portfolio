import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { PostList } from "@/components/post-list";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { SITE_URL, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedPosts = getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug && candidate.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 2);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Person", name: siteConfig.name, url: SITE_URL },
    publisher: { "@type": "Person", name: siteConfig.name, url: SITE_URL },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 2, name: post.title, item: canonicalUrl },
    ],
  };
  const xShare = `https://x.com/intent/post?${new URLSearchParams({ text: post.title, url: canonicalUrl })}`;
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams({ url: canonicalUrl })}`;

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <header className="site-container max-w-5xl py-12 sm:py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to writing
        </Link>
        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
          <span>{post.tags.join(" · ")}</span>
        </div>
        <h1 className="mt-5 text-balance text-5xl leading-[.96] font-semibold tracking-[-0.055em] sm:text-7xl">{post.title}</h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-muted-foreground">{post.description}</p>
      </header>

      <div className="site-container grid max-w-5xl gap-10 pb-20 sm:pb-28 lg:grid-cols-[minmax(0,1fr)_9rem]">
        <div className="prose-founder max-w-3xl border-t border-border pt-10">
          <MdxContent source={post.content} />
        </div>
        <aside className="border-t border-border pt-5 lg:sticky lg:top-24 lg:h-fit" aria-label="Share article">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Share</p>
          <div className="mt-3 flex gap-4 lg:flex-col lg:gap-2">
            <a href={xShare} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline">X <ArrowUpRight className="size-3" /></a>
            <a href={linkedInShare} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline">LinkedIn <ArrowUpRight className="size-3" /></a>
          </div>
        </aside>
      </div>

      {relatedPosts.length ? (
        <section className="border-t border-border">
          <div className="site-container py-16 sm:py-20">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight">Keep reading</h2>
            <PostList posts={relatedPosts} />
          </div>
        </section>
      ) : null}
    </article>
  );
}
