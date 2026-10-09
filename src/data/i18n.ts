export type Locale = "en" | "it";

/**
 * Shared UI chrome strings (nav, footer, cards, forms-adjacent microcopy) that aren't
 * tour/blog content. Tour/blog/destination content lives in the `*.it.ts` sibling data
 * files instead, since it's per-item rather than a fixed dictionary.
 */
export const uiText = {
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      destinations: "Destinations",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    footerLinks: {
      privacy: "Privacy",
      terms: "Terms & Conditions",
    },
    header: {
      planMyTrip: "Plan My Trip",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    footer: {
      departingPrefix: "Private tours, tailor-made around your pace, departing",
      and: " and ",
      planATrip: "Plan a Trip",
      allTours: "All tours",
      fullyCustomItinerary: "Fully custom itinerary",
      destinationsHeading: "Destinations",
      allDestinations: "All destinations",
      company: "Company",
      startPlanningMyTrip: "Start planning my trip",
      allRightsReserved: "All rights reserved.",
      basedIn: "Based in Fès, Morocco — planning trips worldwide.",
    },
    tourCard: {
      days: "Days",
      nights: "Nights",
      viewItinerary: "View itinerary",
    },
    blogCard: {
      readArticle: "Read article",
    },
    whatsapp: {
      chatWithUs: "Chat with us on WhatsApp",
    },
    scrollTop: {
      backToTop: "Back to top",
    },
    tripExplorer: {
      browseAndFilter: "Browse and filter all tours",
      searchPlaceholder: "Search tours (e.g. Merzouga, Fes, desert...)",
      allCities: "All cities",
      durations: ["All durations", "3–4 Days", "5–7 Days", "8+ Days"],
      resultsFound: (n: number) => `${n} ${n === 1 ? "tour" : "tours"} found`,
      noResults: "No tours match your filters — try widening your search.",
    },
  },
  it: {
    nav: {
      home: "Home",
      tours: "Tour",
      destinations: "Destinazioni",
      about: "Chi siamo",
      blog: "Blog",
      contact: "Contatti",
    },
    footerLinks: {
      privacy: "Privacy",
      terms: "Termini e Condizioni",
    },
    header: {
      planMyTrip: "Pianifica il tuo viaggio",
      openMenu: "Apri il menu",
      closeMenu: "Chiudi il menu",
    },
    footer: {
      departingPrefix: "Tour privati, su misura per il tuo ritmo, con partenza da",
      and: " e ",
      planATrip: "Pianifica un viaggio",
      allTours: "Tutti i tour",
      fullyCustomItinerary: "Itinerario su misura",
      destinationsHeading: "Destinazioni",
      allDestinations: "Tutte le destinazioni",
      company: "Azienda",
      startPlanningMyTrip: "Inizia a pianificare il tuo viaggio",
      allRightsReserved: "Tutti i diritti riservati.",
      basedIn: "Con sede a Fès, Marocco — organizziamo viaggi in tutto il mondo.",
    },
    tourCard: {
      days: "Giorni",
      nights: "Notti",
      viewItinerary: "Vedi itinerario",
    },
    blogCard: {
      readArticle: "Leggi l'articolo",
    },
    whatsapp: {
      chatWithUs: "Scrivici su WhatsApp",
    },
    scrollTop: {
      backToTop: "Torna su",
    },
    tripExplorer: {
      browseAndFilter: "Sfoglia e filtra tutti i tour",
      searchPlaceholder: "Cerca tour (es. Merzouga, Fes, deserto...)",
      allCities: "Tutte le città",
      durations: ["Tutte le durate", "3–4 Giorni", "5–7 Giorni", "8+ Giorni"],
      resultsFound: (n: number) => `${n} tour ${n === 1 ? "trovato" : "trovati"}`,
      noResults: "Nessun tour corrisponde ai tuoi filtri — prova ad ampliare la ricerca.",
    },
  },
} as const;

export function localizeHref(href: string, lang: Locale): string {
  if (lang === "en") return href;
  if (href === "/") return "/it";
  return `/it${href}`;
}
