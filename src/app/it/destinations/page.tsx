import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinationsIt } from "@/data/tours.it";
import { destinationsFaqsIt } from "@/data/site.it";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Città di Partenza e Destinazioni dei Tour in Marocco",
  description:
    "Ogni città da cui parte Daily Desert Tours — Marrakech, Fes, Casablanca, Tangeri, Ouarzazate, Agadir ed Errachidia — con gli itinerari privati disponibili da ciascuna.",
  alternates: { canonical: "/it/destinations", languages: { en: "/destinations", it: "/it/destinations" } },
};

export default function ItDestinationsIndexPage() {
  return (
    <>
      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Dove Andiamo</h1>
          <p className="mt-4 text-sand-200/90">
            Ogni itinerario privato su questo sito parte da una di queste città. Scegli quella più vicina a dove
            atterri, oppure chiedici di organizzare un percorso tra due di esse.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Home", url: "/it" }, { name: "Destinazioni", url: "/it/destinations" }]} />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinationsIt.map((destination) => (
            <Link
              key={destination.slug}
              href={`/it/destinations/${destination.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={`/images/tours/${destination.heroSlug}/hero.jpg`}
                  alt={destination.city}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold text-night-800 group-hover:text-terracotta-700">
                  {destination.city}
                </h2>
                <p className="mt-1 text-xs font-medium text-terracotta-600">{destination.tagline}</p>
                <p className="mt-2 text-sm text-night-500">
                  {destination.tourCount} {destination.tourCount === 1 ? "itinerario" : "itinerari"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={destinationsFaqsIt} heading="Domande Frequenti" />
        </div>
      </section>
    </>
  );
}
