import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPostsIt, getBlogPostBySlugIt, getRelatedBlogPostsIt } from "@/data/blog.it";
import { toursIt, getFeaturedToursIt } from "@/data/tours.it";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { BlogCard } from "@/components/BlogCard";
import { TourCard } from "@/components/TourCard";
import { renderRichText } from "@/lib/richText";
import { overlapScore } from "@/lib/related";

export function generateStaticParams() {
  return blogPostsIt.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlugIt(slug);
  if (!post) return {};
  const image = post.image;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/it/blog/${post.slug}`,
      languages: { en: `/blog/${post.slug}`, it: `/it/blog/${post.slug}` },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/it/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: image, width: 1200, height: 800, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function ItBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlugIt(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedBlogPostsIt(post);

  const scoredTours = toursIt
    .map((tour) => ({
      tour,
      score: overlapScore(
        `${post.title} ${post.excerpt} ${post.content.flatMap((section) => section.body).join(" ")}`,
        `${tour.title} ${tour.summary} ${tour.departureCity} ${tour.highlights.join(" ")}`,
      ),
    }))
    .sort((a, b) => b.score - a.score);
  const relatedTours = (scoredTours[0]?.score ?? 0) > 0
    ? scoredTours.slice(0, 3).map((entry) => entry.tour)
    : getFeaturedToursIt(3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: `${siteConfig.url}${post.image}`,
    url: `${siteConfig.url}/it/blog/${post.slug}`,
    inLanguage: "it",
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/it/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[{ name: "Home", url: "/it" }, { name: "Blog", url: "/it/blog" }, { name: post.title, url: `/it/blog/${post.slug}` }]} />

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/it/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700">
          <ArrowLeft className="h-4 w-4" />
          Torna al blog
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wide text-terracotta-600">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          {post.updated && (
            <time dateTime={post.updated} className="text-night-400">
              Aggiornato il {new Date(post.updated).toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          )}
        </div>
        <h1 className="mt-2 font-display text-3xl font-semibold text-night-800 sm:text-4xl">{post.title}</h1>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill quality={90} sizes="100vw" className="object-cover" />
        </div>

        <div className="mt-8 space-y-8">
          {post.content.map((section, i) => (
            <div key={i}>
              <h2 className="font-display text-xl font-semibold text-night-800 sm:text-2xl">{section.heading}</h2>
              <div className="mt-3 space-y-4">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="leading-relaxed text-night-700">
                    {renderRichText(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-sand-200 pt-10">
          <FaqSection faqs={post.faqs} heading="Domande Frequenti" />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-50 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-night-800">Potrebbe interessarti anche</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} lang="it" />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedTours.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold text-night-800">Tour da pianificare intorno a questa storia</h2>
              <Link href="/it/trip" className="text-sm font-semibold text-terracotta-600 hover:text-terracotta-700">
                Sfoglia tutti i tour
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} lang="it" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
