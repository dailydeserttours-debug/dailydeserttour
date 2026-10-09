import type { Metadata } from "next";
import { blogPosts, getRecentBlogPosts } from "@/data/blog";
import { FaqSection } from "@/components/FaqSection";
import { BlogCard } from "@/components/BlogCard";
import { blogFaqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Morocco Travel Blog & Trip Guides",
  description:
    "Stories, guides, and tips for traveling Morocco — Marrakech itineraries, Sahara desert culture, and advice for planning a private Morocco tour.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getRecentBlogPosts(blogPosts.length);

  return (
    <>
      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Blog</h1>
          <p className="mt-4 text-sand-200/90">Stories and guides from the road, written by our team.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="sr-only">Latest articles</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection heading="Morocco Travel FAQs" faqs={blogFaqs} />
        </div>
      </section>
    </>
  );
}
