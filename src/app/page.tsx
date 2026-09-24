import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sparkles, Leaf, CalendarClock, SlidersHorizontal, Star } from "lucide-react";
import { TourCard } from "@/components/TourCard";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { FaqSection } from "@/components/FaqSection";
import { tours, getFeaturedTours, destinations } from "@/data/tours";
import { getRecentBlogPosts } from "@/data/blog";
import { featureList, heroChapters, processSteps, reviews, homeFaqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Morocco Desert Tours | Private Sahara & Morocco Travel",
  description:
    "Private Morocco and Sahara desert tours from Marrakech, Fes, Casablanca, Tangier, Ouarzazate, and Agadir — camel trekking, desert camps, ancient kasbahs, and custom itineraries with a local driver-guide.",
  alternates: { canonical: "/" },
};

const featureIcons = [Sparkles, Compass, Leaf, CalendarClock, SlidersHorizontal, Star];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-terracotta-500" />
      <p className="text-sm font-medium text-terracotta-700">{children}</p>
    </div>
  );
}

export default function HomePage() {
  const featuredTours = getFeaturedTours(6);
  const recentPosts = getRecentBlogPosts(3);

  return (
    <>
      <HeroSlideshow chapters={heroChapters} />

      {/* Features */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>Why travel with us</Kicker>
            <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
              Built around the way you actually want to travel
            </h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featureList.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div key={feature.title} className="border-t border-sand-300 pt-5">
                  <Icon className="h-5 w-5 text-terracotta-600" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-night-800">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-night-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Kicker>Where we go</Kicker>
              <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
                Pick a city, we&rsquo;ll handle the route
              </h2>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
            >
              See every departure city
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {destinations.slice(0, 4).map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={`/images/tours/${destination.heroSlug}/hero.jpg`}
                  alt={destination.city}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/90 via-night-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg font-semibold text-white">{destination.city}</p>
                  <p className="text-xs text-sand-200/90">
                    {destination.tourCount} {destination.tourCount === 1 ? "itinerary" : "itineraries"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Kicker>Signature itineraries</Kicker>
              <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
                Featured Morocco &amp; desert tours
              </h2>
            </div>
            <Link
              href="/trip"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
            >
              See all {tours.length} itineraries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>How a trip comes together</Kicker>
            <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
              From a first message to a night in the dunes
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative pl-16">
                <span className="absolute left-0 top-0 font-display text-4xl font-semibold text-terracotta-300">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-night-800">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / testimonials */}
      <section className="bg-night-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-terracotta-400">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-sm font-medium">Trusted by travelers</p>
          </div>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
            A family-run agency, over a thousand happy clients
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              "Guests consistently tell us the desert camp and the guides are the highlight of their whole trip to Morocco.",
              "Families and solo travelers alike appreciate how flexible the itineraries are — nothing feels like a fixed bus tour.",
              "Repeat travelers often come back for a second region of Morocco after their first Sahara trip with us.",
            ].map((quote, i) => (
              <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-0.5 text-terracotta-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-sand-100/90">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs text-sand-300">Traveler feedback, summarized</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>Reviews</Kicker>
            <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
              What travelers tell us after the trip
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.trip} className="border-t border-sand-300 pt-5">
                <div className="flex gap-0.5 text-terracotta-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-night-700">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-xs text-night-500">{review.trip}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-night-400">Guest feedback, summarized from post-trip conversations.</p>
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker>From the journal</Kicker>
              <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
                Recent stories &amp; guides
              </h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700">
              Visit the blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {recentPosts.map((post) => (
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
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-night-800 group-hover:text-terracotta-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-night-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={homeFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta-600 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Contact us today and start your unforgettable journey through Morocco!
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-terracotta-700 shadow-lg transition-transform hover:scale-105"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
