import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { destinations, getDestinationBySlug, getDestinationFaqs, tours } from "@/data/tours";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { TourCard } from "@/components/TourCard";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  const title = `${destination.city} Desert Tours | Private Morocco Itineraries from ${destination.city}`;
  const description = `${destination.tagline}. ${destination.intro}`.slice(0, 160);
  const image = `/images/tours/${destination.heroSlug}/hero.jpg`;
  return {
    title,
    description,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      images: [{ url: image, width: 1600, height: 900, alt: destination.city }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const cityTours = tours.filter((tour) => tour.departureCity === destination.city);
  const faqs = getDestinationFaqs(destination);

  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.city,
    description: destination.intro,
    url: `${siteConfig.url}/destinations/${destination.slug}`,
    image: `${siteConfig.url}/images/tours/${destination.heroSlug}/hero.jpg`,
    includesAttraction: cityTours.map((tour) => ({
      "@type": "TouristTrip",
      name: tour.title,
      url: `${siteConfig.url}/trip/${tour.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={destinationSchema} />

      <section className="relative overflow-hidden bg-night-800">
        <div className="absolute inset-0">
          <Image
            src={`/images/tours/${destination.heroSlug}/hero.jpg`}
            alt={destination.city}
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night-900/95 via-night-900/50 to-night-900/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta-400">{destination.tagline}</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Tours from {destination.city}
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: destination.city, url: `/destinations/${destination.slug}` },
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <p className="leading-relaxed text-night-600">{destination.intro}</p>
        </div>
        {destination.highlights.length > 0 && (
          <div className="rounded-2xl border border-sand-200 bg-sand-50 p-5">
            <p className="text-sm font-semibold text-night-800">Why start here</p>
            <ul className="mt-3 space-y-2.5 text-sm text-night-600">
              {destination.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-night-800">
          {cityTours.length} {cityTours.length === 1 ? "itinerary" : "itineraries"} from {destination.city}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cityTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={faqs} />
        </div>
      </section>

      <section className="bg-terracotta-600 py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Not seeing the right fit from {destination.city}?
          </h2>
          <p className="text-sm text-white/90">Tell us your dates and interests — we&rsquo;ll build a private route around them.</p>
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
