"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

interface Chapter {
  id: string;
  image: string;
  alt: string;
  location: string;
  kicker: string;
  headline: [string, string];
  body: string;
  cta: { label: string; href: string };
}

const CHAPTER_DURATION_MS = 7500;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroSlideshow({ chapters }: { chapters: Chapter[] }) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion || chapters.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % chapters.length), CHAPTER_DURATION_MS);
    return () => clearInterval(id);
  }, [reducedMotion, chapters.length]);

  const active = chapters[index];

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night-900" style={{ minHeight: "720px" }}>
      {/* Photography */}
      {chapters.map((chapter, i) => (
        <div
          key={chapter.id}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={chapter.image}
            alt={chapter.alt}
            fill
            preload={i === 0}
            quality={90}
            sizes="100vw"
            className={`object-cover ${
              !reducedMotion && i === index ? "animate-[kenburns_9s_ease-out_forwards]" : ""
            }`}
          />
        </div>
      ))}

      {/* Legibility gradients — anchored low, so the photograph stays the subject */}
      <div className="absolute inset-0 bg-gradient-to-t from-night-900/92 via-night-900/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-night-900/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-16">
        <div key={active.id} className={reducedMotion ? "" : "animate-[fadein_700ms_ease-out]"}>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-sand-200/75">{active.location}</p>

          <div className="mt-6 max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta-400">{active.kicker}</p>
            <h1 className="mt-3 font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              {active.headline[0]}
              <br />
              <span className="italic text-sand-100">{active.headline[1]}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand-100/85">{active.body}</p>

            <Link
              href={active.cta.href}
              className="mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:border-terracotta-400 hover:text-terracotta-300"
            >
              {active.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Chapter navigator */}
        <div className="mt-16 flex items-center gap-4">
          <span className="text-xs tabular-nums tracking-widest text-sand-300/70">
            {String(index + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
          </span>
          <div className="flex flex-1 gap-2">
            {chapters.map((chapter, i) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show the ${chapter.kicker} chapter`}
                aria-current={i === index}
                className={`h-px max-w-16 flex-1 transition-colors duration-300 ${
                  i === index ? "bg-white" : "bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
