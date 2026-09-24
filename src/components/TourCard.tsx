import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowUpRight } from "lucide-react";
import type { Tour } from "@/data/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/trip/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={`/images/tours/${tour.slug}/hero.jpg`}
          alt={tour.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-terracotta-600">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {tour.days} Days / {tour.nights} Nights
          </span>
          <span className="flex items-center gap-1 text-night-500">
            <MapPin className="h-3.5 w-3.5" />
            {tour.departureCity}
          </span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-night-800 group-hover:text-terracotta-700">
          {tour.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-night-600">{tour.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-600">
          View itinerary
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
