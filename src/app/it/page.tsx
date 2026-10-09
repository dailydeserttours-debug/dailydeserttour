import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour del Deserto del Marocco | Viaggi Privati nel Sahara",
  description:
    "Tour privati in Marocco e nel Sahara da Marrakech, Fes, Casablanca, Tangeri, Ouarzazate e Agadir — trekking in cammello, campi nel deserto, antiche kasbah e itinerari su misura con una guida-autista locale.",
  alternates: {
    canonical: "/it",
    languages: { en: "/", it: "/it" },
  },
};

export default function ItHomePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-night-800 sm:text-4xl">
        Tour del Deserto del Marocco
      </h1>
      <p className="mt-4 leading-relaxed text-night-600">
        La versione italiana completa del sito è in arrivo a breve.
      </p>
    </section>
  );
}
