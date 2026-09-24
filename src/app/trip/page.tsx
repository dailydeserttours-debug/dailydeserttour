import type { Metadata } from "next";
import { TripExplorer } from "./TripExplorer";
import { FaqSection } from "@/components/FaqSection";
import { tours, departureCities } from "@/data/tours";
import { tripFaqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Morocco Tours & Sahara Desert Itineraries (3–12 Days)",
  description:
    "Browse every Daily Desert Tours itinerary — private 3 to 12 day Morocco and Sahara desert tours from Marrakech, Fes, Casablanca, Tangier, Ouarzazate, and Agadir, each customizable to your dates.",
  alternates: { canonical: "/trip" },
};

export default function TripListPage() {
  return (
    <>
      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            All Morocco Tours &amp; Itineraries
          </h1>
          <p className="mt-4 text-sand-200/90">
            {tours.length} private itineraries across Morocco&rsquo;s imperial cities, mountains, and the Sahara —
            every trip can be customized to your dates and interests.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <TripExplorer
          tours={tours.map(({ slug, title, departureCity, days, nights, summary }) => ({
            slug,
            title,
            departureCity,
            days,
            nights,
            summary,
          }))}
          cities={departureCities}
        />
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={tripFaqs} />
        </div>
      </section>
    </>
  );
}
