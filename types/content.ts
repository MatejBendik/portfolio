export type ProductMetric = {
  value: string;
  label: string;
};

export type ProductTestimonial = {
  quote: string;
  name: string;
  handle?: string;
  sourceUrl: string;
};

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  problem: string;
  sellingPoints: string[];
  externalUrl: string;
  gumroadUrl: string;
  images: { src: string; alt: string }[];
  featured: boolean;
  status: "active" | "maintained" | "archived";
  metrics: ProductMetric[];
  testimonials?: ProductTestimonial[];
  seo: { title: string; description: string };
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  coverImage?: string;
  draft: boolean;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  readingTime: string;
  content: string;
};
