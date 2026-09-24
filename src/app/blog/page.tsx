import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts, getRecentBlogPosts } from "@/data/blog";
import { FaqSection } from "@/components/FaqSection";
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <time className="text-xs font-medium uppercase tracking-wide text-terracotta-600">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <h2 className="mt-2 font-display text-lg font-semibold text-night-800 group-hover:text-terracotta-700">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-night-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-600">
                  Read article
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
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
