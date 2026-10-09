"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { TourCard } from "@/components/TourCard";
import type { TourSummary } from "@/data/tours";
import { uiText, type Locale } from "@/data/i18n";

const durationTests = [() => true, (d: number) => d <= 4, (d: number) => d >= 5 && d <= 7, (d: number) => d >= 8];

export function TripExplorer({
  tours,
  cities,
  lang = "en",
}: {
  tours: TourSummary[];
  cities: string[];
  lang?: Locale;
}) {
  const t = uiText[lang].tripExplorer;
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<string>(t.allCities);
  const [durationIndex, setDurationIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tours.filter((tour) => {
      const matchesQuery =
        !q || tour.title.toLowerCase().includes(q) || tour.summary.toLowerCase().includes(q);
      const matchesCity = city === t.allCities || tour.departureCity === city;
      const matchesDuration = durationTests[durationIndex](tour.days);
      return matchesQuery && matchesCity && matchesDuration;
    });
  }, [tours, query, city, durationIndex, t.allCities]);

  return (
    <div>
      <h2 className="sr-only">{t.browseAndFilter}</h2>
      <div className="flex flex-col gap-3 rounded-2xl border border-sand-200 bg-white p-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-night-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-lg border border-sand-300 bg-sand-50 py-2.5 pl-10 pr-3 text-sm text-night-800 placeholder:text-night-400 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
          />
        </div>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-lg border border-sand-300 bg-sand-50 px-3 py-2.5 text-sm text-night-800 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
        >
          <option>{t.allCities}</option>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={durationIndex}
          onChange={(e) => setDurationIndex(Number(e.target.value))}
          className="rounded-lg border border-sand-300 bg-sand-50 px-3 py-2.5 text-sm text-night-800 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
        >
          {t.durations.map((label, i) => (
            <option key={label} value={i}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-night-500">{t.resultsFound(filtered.length)}</p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <TourCard key={tour.slug} tour={tour} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-sand-300 p-10 text-center text-night-500">
          {t.noResults}
        </div>
      )}
    </div>
  );
}
