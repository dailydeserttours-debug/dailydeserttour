import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sparkles, Leaf, CalendarClock, SlidersHorizontal, Star } from "lucide-react";
import { TourCard } from "@/components/TourCard";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { FaqSection } from "@/components/FaqSection";
import { toursIt, getFeaturedToursIt, destinationsIt } from "@/data/tours.it";
import { getRecentBlogPostsIt } from "@/data/blog.it";
import { featureListIt, heroChaptersIt, processStepsIt, reviewsIt, homeFaqsIt } from "@/data/site.it";

export const metadata: Metadata = {
  title: "Tour del Deserto del Marocco | Viaggi Privati nel Sahara",
  description:
    "Tour privati in Marocco e nel Sahara da Marrakech, Fes, Casablanca, Tangeri, Ouarzazate e Agadir — trekking in cammello, campi nel deserto, antiche kasbah e itinerari su misura con una guida-autista locale.",
  alternates: { canonical: "/it", languages: { en: "/", it: "/it" } },
};

const featureIcons = [Sparkles, Compass, Leaf, CalendarClock, SlidersHorizontal, Star];

function Kicker({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-terracotta-500" />
      <p className="text-sm font-medium text-terracotta-700">{children}</p>
    </div>
  );
}

export default function ItHomePage() {
  const featuredTours = getFeaturedToursIt(6);
  const recentPosts = getRecentBlogPostsIt(3);

  return (
    <>
      <HeroSlideshow chapters={heroChaptersIt} />

      {/* Features */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Kicker center>Perché viaggiare con noi</Kicker>
            <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
              Pensato per come vuoi davvero viaggiare
            </h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featureListIt.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div key={feature.title} className="border-t border-sand-300 pt-5">
                  <Icon className="h-5 w-5 text-terracotta-600" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-night-800">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-night-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Kicker>Dove andiamo</Kicker>
              <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
                Scegli una città, al percorso pensiamo noi
              </h2>
            </div>
            <Link
              href="/it/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
            >
              Vedi tutte le città di partenza
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {destinationsIt.slice(0, 4).map((destination) => (
              <Link
                key={destination.slug}
                href={`/it/destinations/${destination.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={`/images/tours/${destination.heroSlug}/hero.jpg`}
                  alt={destination.city}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/90 via-night-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg font-semibold text-white">{destination.city}</p>
                  <p className="text-xs text-sand-200/90">
                    {destination.tourCount} {destination.tourCount === 1 ? "itinerario" : "itinerari"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Kicker>Itinerari esclusivi</Kicker>
              <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
                Tour in evidenza in Marocco e nel deserto
              </h2>
            </div>
            <Link
              href="/it/trip"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
            >
              Vedi tutti i {toursIt.length} itinerari
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} lang="it" />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>Come nasce un viaggio</Kicker>
            <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
              Dal primo messaggio a una notte tra le dune
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {processStepsIt.map((step, i) => (
              <div key={step.title} className="relative pl-16">
                <span className="absolute left-0 top-0 font-display text-4xl font-semibold text-terracotta-300">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-night-800">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / testimonials */}
      <section className="bg-night-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-terracotta-400">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-sm font-medium">La fiducia dei viaggiatori</p>
          </div>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Un&rsquo;agenzia a conduzione familiare, oltre mille clienti felici
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              "I nostri ospiti ci dicono spesso che il campo nel deserto e le guide sono il momento più bello dell'intero viaggio in Marocco.",
              "Famiglie e viaggiatori singoli apprezzano entrambi la flessibilità degli itinerari — niente sembra un tour in pullman prestabilito.",
              "Molti viaggiatori tornano per scoprire un'altra regione del Marocco dopo il loro primo viaggio nel Sahara con noi.",
            ].map((quote, i) => (
              <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-sm leading-relaxed text-sand-100/90">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs text-sand-300">
                  Testimonianza illustrativa, scritta per riflettere i commenti più comuni degli ospiti — non una recensione verificata
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>Recensioni</Kicker>
            <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
              Cosa ci raccontano i viaggiatori dopo il viaggio
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviewsIt.map((review) => (
              <div key={review.trip} className="border-t border-sand-300 pt-5">
                <blockquote className="text-sm leading-relaxed text-night-700">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-xs text-night-500">{review.trip}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-night-400">
            Testimonianza illustrativa, scritta per riflettere i commenti più comuni degli ospiti — non proveniente da
            una piattaforma di recensioni live.
          </p>
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker>Dal diario di viaggio</Kicker>
              <h2 className="mt-3 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
                Storie e guide recenti
              </h2>
            </div>
            <Link href="/it/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700">
              Vai al blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/it/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-night-800 group-hover:text-terracotta-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-night-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={homeFaqsIt} heading="Domande Frequenti" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta-600 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Pronti quando vuoi tu — dicci dove vuoi andare.
          </h2>
          <p className="max-w-xl text-sm text-white/90">
            Nessuna pressione, nessun pacchetto fisso — scrivici le tue date e le tue idee e costruiremo il viaggio da
            lì.
          </p>
          <Link
            href="/it/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-terracotta-700 shadow-lg transition-transform hover:scale-105"
          >
            Inizia a pianificare il tuo viaggio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
