import type { Metadata } from "next";
import { blogPostsIt, getRecentBlogPostsIt } from "@/data/blog.it";
import { FaqSection } from "@/components/FaqSection";
import { BlogCard } from "@/components/BlogCard";
import { blogFaqsIt } from "@/data/site.it";

export const metadata: Metadata = {
  title: "Blog di Viaggio e Guide sul Marocco",
  description:
    "Storie, guide e consigli per viaggiare in Marocco — itinerari a Marrakech, cultura del deserto del Sahara e consigli per pianificare un tour privato in Marocco.",
  alternates: { canonical: "/it/blog", languages: { en: "/blog", it: "/it/blog" } },
};

export default function ItBlogIndexPage() {
  const posts = getRecentBlogPostsIt(blogPostsIt.length);

  return (
    <>
      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Blog</h1>
          <p className="mt-4 text-sand-200/90">Storie e guide dalla strada, scritte dal nostro team.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="sr-only">Ultimi articoli</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} lang="it" />
          ))}
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection heading="Domande Frequenti sul Viaggio in Marocco" faqs={blogFaqsIt} />
        </div>
      </section>
    </>
  );
}
