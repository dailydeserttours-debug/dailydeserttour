import type { Metadata } from "next";
import { TripExplorer } from "@/components/TripExplorer";
import { FaqSection } from "@/components/FaqSection";
import { toursIt, departureCitiesIt } from "@/data/tours.it";
import { tripFaqsIt } from "@/data/site.it";

export const metadata: Metadata = {
  title: "Tour in Marocco e Itinerari nel Deserto del Sahara (3–12 Giorni)",
  description:
    "Sfoglia tutti gli itinerari Daily Desert Tours — tour privati di 3-12 giorni in Marocco e nel Sahara da Marrakech, Fes, Casablanca, Tangeri, Ouarzazate e Agadir, ogni viaggio personalizzabile sulle tue date.",
  alternates: { canonical: "/it/trip", languages: { en: "/trip", it: "/it/trip" } },
};

export default function ItTripListPage() {
  return (
    <>
      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Tutti i Tour e Itinerari in Marocco
          </h1>
          <p className="mt-4 text-sand-200/90">
            {toursIt.length} itinerari privati tra le città imperiali del Marocco, le montagne e il Sahara — ogni
            viaggio può essere personalizzato sulle tue date e sui tuoi interessi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <TripExplorer
          tours={toursIt.map(({ slug, title, departureCity, days, nights, summary }) => ({
            slug,
            title,
            departureCity,
            days,
            nights,
            summary,
          }))}
          cities={departureCitiesIt}
          lang="it"
        />
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={tripFaqsIt} heading="Domande Frequenti" />
        </div>
      </section>
    </>
  );
}
