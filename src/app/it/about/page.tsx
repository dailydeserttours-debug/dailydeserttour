import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Users, Leaf, Compass, ClipboardList, HandHeart } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { contactInfo, stats, siteConfig } from "@/data/site";
import { aboutFaqsIt } from "@/data/site.it";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Un'agenzia di viaggi marocchina a conduzione familiare che condivide il deserto, le montagne e le medine che ci hanno formato — scopri la nostra storia.",
  alternates: { canonical: "/it/about", languages: { en: "/about", it: "/it/about" } },
};

const values = [
  {
    icon: Heart,
    title: "Un tocco familiare",
    body: "Trattiamo ogni ospite come parte della nostra famiglia marocchina allargata. Quando viaggi con noi, non sei solo un turista; sei un ospite benvenuto nella nostra terra.",
  },
  {
    icon: Sparkles,
    title: "Esperienza",
    body: "Decenni di esperienza tramandati da nostro padre — conosciamo i luoghi nascosti, gli angoli segreti e gli incontri unici che la maggior parte degli itinerari si perde.",
  },
  {
    icon: Users,
    title: "Personalizzazione",
    body: "Il tuo viaggio è unico, proprio come te. Ci prendiamo il tempo di capire i tuoi interessi e costruiamo itinerari su misura intorno ad essi.",
  },
  {
    icon: Leaf,
    title: "Sostenibilità",
    body: "Teniamo alle nostre comunità e diamo priorità a un turismo sostenibile. Sostenendo artigiani, attività locali e pratiche eco-compatibili, vogliamo preservare il patrimonio culturale del Marocco per le generazioni future.",
  },
];

const teamRoles = [
  {
    icon: Compass,
    title: "Guida",
    body: "Sulla strada con te, mostrandoti i percorsi e le tappe che una mappa da sola non può rivelare.",
  },
  {
    icon: ClipboardList,
    title: "Logistica e Pianificazione",
    body: "Costruiamo il percorso giorno per giorno, abbinando campi e hotel alle tue date e al tuo ritmo.",
  },
  {
    icon: HandHeart,
    title: "Ospitalità",
    body: "Gestiamo ogni richiesta e dettaglio prima del tuo arrivo, così il viaggio stesso scorre senza intoppi.",
  },
];

export default function ItAboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Chi è Daily Desert Tours",
          url: `${siteConfig.url}/it/about`,
          mainEntity: { "@id": `${siteConfig.url}/#organization` },
          inLanguage: "it",
        }}
      />

      <section className="bg-night-800 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-400">Chi siamo</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Scopri il Marocco Attraverso gli Occhi di una Tradizione Familiare
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Home", url: "/it" }, { name: "Chi siamo", url: "/it/about" }]} />

      <section className="mx-auto flex max-w-4xl justify-center gap-6 px-4 py-10 text-center sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-semibold text-terracotta-600 sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-night-500">Clienti Felici</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/about-hero.jpg"
            alt="Paesaggio del Marocco"
            fill
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-night-800">Un&rsquo;Eredità Familiare di Esplorazione</h2>
          <p className="mt-4 leading-relaxed text-night-600">
            Benvenuto a Daily Desert Tours, dove un amore profondo per la nostra terra incontra una vera passione per
            condividerla con il mondo. Come agenzia di viaggi a conduzione familiare, il nostro percorso è fatto di
            eredità, avventura e l&rsquo;impegno di mostrarti il vero spirito del Marocco.
          </p>
          <p className="mt-4 leading-relaxed text-night-600">
            L&rsquo;azienda è stata fondata da nostro padre, che ha trascorso la sua vita esplorando gli angoli
            nascosti del Marocco e facendo conoscere agli altri i suoi paesaggi, la sua storia e la sua ospitalità. I
            suoi figli continuano oggi questa missione, cresciuti come suoi compagni imparando l&rsquo;arte
            dell&rsquo;ospitalità e scoprendo i segreti dei tesori meglio custoditi del Marocco.
          </p>
        </div>
      </section>

      <section className="bg-sand-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-night-800">
            La Nostra Missione: Viaggi Immersivi e Su Misura
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-night-600">
            Da Daily Desert Tours crediamo che viaggiare debba essere più di una semplice lista di destinazioni da
            spuntare — dovrebbe significare connettersi davvero con un luogo e la sua gente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-night-800">Perché Viaggiare Con Noi?</h2>
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
            <h2 className="font-display text-3xl font-semibold text-white">Conosci il Nostro Team</h2>
            <p className="mt-4 leading-relaxed text-sand-200/90">
              Siamo un team affiatato di fratelli e sorelle, ognuno cresciuto con lo stesso padre, lo stesso deserto e
              la stessa convinzione che un buon viaggio dipenda davvero dalle persone che incontri lungo il percorso.
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
          <FaqSection faqs={aboutFaqsIt} heading="Domande Frequenti" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-night-800">
            Unisciti a Noi nella Tua Avventura Marocchina
          </h2>
          <p className="text-night-600">Pronto a esplorare il Marocco? Contattaci quando vuoi — di solito rispondiamo lo stesso giorno.</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-night-600">
            <span>{contactInfo.address}</span>
          </div>
          <Link
            href="/it/contact"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-terracotta-700"
          >
            Contattaci
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
