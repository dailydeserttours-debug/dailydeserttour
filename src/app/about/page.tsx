import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Users, Leaf, Compass, ClipboardList, HandHeart } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { contactInfo, aboutFaqs, stats, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A family-owned Moroccan travel agency sharing the desert, mountains, and medinas that shaped us — read our story.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Heart,
    title: "A Family Touch",
    body: "We treat every guest like part of our extended Moroccan family. When you explore with us, you're not just a traveler; you're a welcomed guest in our homeland.",
  },
  {
    icon: Sparkles,
    title: "Expertise",
    body: "Decades of experience passed down from our father — we know the hidden gems, secret spots, and unique encounters most itineraries miss.",
  },
  {
    icon: Users,
    title: "Customization",
    body: "Your journey is unique, just like you. We take the time to understand your interests and craft personalized itineraries around them.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    body: "We cherish our communities and prioritize sustainable tourism. By supporting local artisans, businesses, and eco-friendly practices, we aim to preserve Morocco's cultural heritage for future generations.",
  },
];

const teamRoles = [
  {
    icon: Compass,
    title: "Guiding",
    body: "On the road with you, showing you the routes and stops a map alone won't reveal.",
  },
  {
    icon: ClipboardList,
    title: "Logistics & Planning",
    body: "Building the day-by-day route, matching camps and hotels to your dates and pace.",
  },
  {
    icon: HandHeart,
    title: "Hospitality",
    body: "Handling every inquiry and detail before you arrive, so the trip itself runs smoothly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Daily Desert Tours",
          url: `${siteConfig.url}/about`,
          mainEntity: { "@id": `${siteConfig.url}/#organization` },
        }}
      />

      <section className="bg-night-800 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-400">About</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Discover Morocco Through the Eyes of a Family Tradition
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />

      <section className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-semibold text-terracotta-600 sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-night-500">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/about-hero.jpg"
            alt="Morocco landscape"
            fill
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-night-800">A Family Legacy of Exploration</h2>
          <p className="mt-4 leading-relaxed text-night-600">
            Welcome to Daily Desert Tours, where a deep-rooted love for our homeland meets a genuine passion for
            sharing it with the world. As a family-owned travel agency, our journey is one of heritage, adventure,
            and a commitment to showing you the true spirit of Morocco.
          </p>
          <p className="mt-4 leading-relaxed text-night-600">
            The company was founded by our father, who spent his life exploring Morocco&rsquo;s hidden corners and
            introducing others to its landscapes, history, and hospitality. His children now continue this mission,
            having grown up as his companions learning the art of hospitality and uncovering the secrets of
            Morocco&rsquo;s best-kept treasures.
          </p>
        </div>
      </section>

      <section className="bg-sand-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-night-800">
            Our Mission: Immersive, Tailor-Made Journeys
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-night-600">
            At Daily Desert Tours, we believe that travel should be more than just ticking off destinations — it
            should be about truly connecting with a place and its people.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-night-800">Why Travel With Us?</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4 rounded-2xl border border-sand-200 bg-white p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-terracotta-50 text-terracotta-600">
                <value.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-night-800">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-night-600">{value.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-night-800 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white">Meet Our Team</h2>
            <p className="mt-4 leading-relaxed text-sand-200/90">
              We&rsquo;re a close-knit team of siblings, each of us shaped by the same father, the same desert, and the
              same belief that a good trip is really about the people you meet along the way.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {teamRoles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-terracotta-300">
                  <role.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{role.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sand-200/80">{role.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={aboutFaqs} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-night-800">
            Join Us on Your Moroccan Adventure
          </h2>
          <p className="text-night-600">Ready to explore Morocco? Reach us any time — we usually reply the same day.</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-night-600">
            <span>{contactInfo.address}</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-terracotta-700"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
