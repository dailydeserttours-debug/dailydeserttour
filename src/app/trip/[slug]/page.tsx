import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, CheckCircle2, XCircle, Navigation } from "lucide-react";
import { InquiryForm } from "./InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { tours, getTourBySlug, getRelatedTours, getTourFaqs } from "@/data/tours";
import { contactInfo, siteConfig } from "@/data/site";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

function metaDescription(tour: { summary: string; departureCity: string; days: number; nights: number }) {
  const prefix = `${tour.days}-day private tour from ${tour.departureCity}: `;
  const budget = 155 - prefix.length;
  const body = tour.summary.length > budget ? `${tour.summary.slice(0, budget - 1).trimEnd()}…` : tour.summary;
  return `${prefix}${body}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  const description = metaDescription(tour);
  const image = `/images/tours/${tour.slug}/hero.jpg`;
  return {
    title: tour.title,
    description,
    alternates: { canonical: `/trip/${tour.slug}` },
    openGraph: {
      type: "website",
      title: tour.title,
      description,
      url: `${siteConfig.url}/trip/${tour.slug}`,
      images: [{ url: image, width: 1600, height: 900, alt: tour.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description,
      images: [image],
    },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const faqs = getTourFaqs(tour);
  const related = getRelatedTours(tour);
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    image: `${siteConfig.url}/images/tours/${tour.slug}/hero.jpg`,
    url: `${siteConfig.url}/trip/${tour.slug}`,
    touristType: "Private",
    provider: { "@id": `${siteConfig.url}/#organization` },
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        item: {
          "@type": "TouristAttraction",
          name: day.title,
          description: day.description,
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={tripSchema} />

      <section className="relative overflow-hidden bg-night-800">
        <div className="absolute inset-0">
          <Image
            src={`/images/tours/${tour.slug}/hero.jpg`}
            alt={tour.title}
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night-900/95 via-night-900/50 to-night-900/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-terracotta-300">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {tour.days} Days / {tour.nights} Nights
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Departs from {tour.departureCity}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {tour.title}
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Tours", url: "/trip" }, { name: tour.title, url: `/trip/${tour.slug}` }]} />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-12 lg:col-span-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-night-800">Overview</h2>
            <p className="mt-3 leading-relaxed text-night-600">{tour.summary}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-night-800">Highlights</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {tour.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-night-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-night-800">Day-by-Day Itinerary</h2>
            <ol className="mt-6 space-y-8 border-l-2 border-sand-200 pl-6">
              {tour.itinerary.map((day) => (
                <li key={day.day} className="relative">
                  <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-terracotta-600 text-[11px] font-bold text-white">
                    {day.day}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-night-800">{day.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-night-600">{day.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-night-800">
                <CheckCircle2 className="h-5 w-5 text-terracotta-600" />
                What&rsquo;s Included
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-night-600">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-night-800">
                <XCircle className="h-5 w-5 text-night-400" />
                What&rsquo;s Excluded
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-night-600">
                {tour.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-night-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {tour.meetingPoint && (
            <div className="flex items-start gap-3 rounded-2xl border border-sand-200 bg-sand-50 p-5">
              <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" />
              <div>
                <p className="text-sm font-semibold text-night-800">Meeting Point</p>
                <p className="mt-1 text-sm text-night-600">{tour.meetingPoint}</p>
              </div>
            </div>
          )}

          <FaqSection faqs={faqs} />
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <InquiryForm tripName={tour.title} />
          <div className="rounded-2xl border border-sand-200 bg-white p-5 text-sm text-night-600">
            <p className="font-semibold text-night-800">Prefer to talk it through?</p>
            <p className="mt-1">
              Call or WhatsApp us at{" "}
              <a href={contactInfo.whatsappHref} className="font-medium text-terracotta-600">
                {contactInfo.whatsapp}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${contactInfo.email}`} className="font-medium text-terracotta-600">
                {contactInfo.email}
              </a>
              .
            </p>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-50 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold text-night-800">
                More tours from {tour.departureCity}
              </h2>
              <Link
                href={`/destinations/${tour.departureCity.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
              >
                All {tour.departureCity} tours &amp; info
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedTour) => (
                <Link
                  key={relatedTour.slug}
                  href={`/trip/${relatedTour.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={`/images/tours/${relatedTour.slug}/hero.jpg`}
                      alt={relatedTour.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-medium text-terracotta-600">
                      {relatedTour.days} Days / {relatedTour.nights} Nights
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold leading-snug text-night-800 group-hover:text-terracotta-700">
                      {relatedTour.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
