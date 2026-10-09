"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { TourCard } from "@/components/TourCard";
import type { TourSummary } from "@/data/tours";

const durationBuckets = [
  { label: "All durations", test: () => true },
  { label: "3–4 Days", test: (d: number) => d <= 4 },
  { label: "5–7 Days", test: (d: number) => d >= 5 && d <= 7 },
  { label: "8+ Days", test: (d: number) => d >= 8 },
];

export function TripExplorer({ tours, cities }: { tours: TourSummary[]; cities: string[] }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All cities");
  const [durationIndex, setDurationIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tours.filter((tour) => {
      const matchesQuery =
        !q || tour.title.toLowerCase().includes(q) || tour.summary.toLowerCase().includes(q);
      const matchesCity = city === "All cities" || tour.departureCity === city;
      const matchesDuration = durationBuckets[durationIndex].test(tour.days);
      return matchesQuery && matchesCity && matchesDuration;
    });
  }, [tours, query, city, durationIndex]);

  return (
    <div>
      <h2 className="sr-only">Browse and filter all tours</h2>
      <div className="flex flex-col gap-3 rounded-2xl border border-sand-200 bg-white p-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-night-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tours (e.g. Merzouga, Fes, desert...)"
            className="w-full rounded-lg border border-sand-300 bg-sand-50 py-2.5 pl-10 pr-3 text-sm text-night-800 placeholder:text-night-400 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
          />
        </div>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-lg border border-sand-300 bg-sand-50 px-3 py-2.5 text-sm text-night-800 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
        >
          <option>All cities</option>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={durationIndex}
          onChange={(e) => setDurationIndex(Number(e.target.value))}
          className="rounded-lg border border-sand-300 bg-sand-50 px-3 py-2.5 text-sm text-night-800 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20"
        >
          {durationBuckets.map((bucket, i) => (
            <option key={bucket.label} value={i}>
              {bucket.label}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-night-500">
        {filtered.length} {filtered.length === 1 ? "tour" : "tours"} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-sand-300 p-10 text-center text-night-500">
          No tours match your filters — try widening your search.
        </div>
      )}
    </div>
  );
}
