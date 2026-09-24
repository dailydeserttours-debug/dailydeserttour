export const siteConfig = {
  name: "Daily Desert Tours",
  tagline: "Your Moroccan Adventure Starts With Us",
  description:
    "Experience the thrill of our tours! Enjoy expert guides, breathtaking landscapes, and immersive cultural experiences. We prioritize safety and comfort, ensuring unforgettable memories.",
  url: "https://dailydeserttours.com",
};

export const contactInfo = {
  address: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  email: "info@dailydeserttours.com",
  phone: "+212 666-151703",
  phoneHref: "tel:+212666151703",
  whatsapp: "+212 666 151 703",
  whatsappHref: "https://wa.me/212666151703",
  secondaryPhone: "+34 664 714 047",
  hours: [
    { days: "Monday – Friday", time: "8:30 AM – 8:00 PM" },
    { days: "Saturday & Sunday", time: "9:30 AM – 9:30 PM" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=N+05,+Derb+Skallia,+Douh,+F%C3%A8s+30000,+Morocco&output=embed",
};

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "Twitter", href: "https://twitter.com/" },
  { name: "Instagram", href: "https://www.instagram.com/daily_desert_tours/" },
  { name: "Pinterest", href: "https://www.pinterest.com/" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/trip" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const featureList = [
  {
    title: "Tailored Experiences",
    description:
      "Every itinerary is shaped around your interests, pace, and the moments you actually want to remember.",
  },
  {
    title: "Expert Guides",
    description:
      "Our driver-guides grew up in these landscapes and share the stories maps can't show you.",
  },
  {
    title: "Eco-Friendly Practices",
    description:
      "We support local artisans, businesses, and sustainable tourism to help preserve Morocco's heritage.",
  },
  {
    title: "Flexible Booking",
    description:
      "Plans change — our itineraries and booking process are built to flex with you.",
  },
  {
    title: "Customizable Options",
    description:
      "From private departures to add-on excursions, your trip can be built exactly to your needs.",
  },
  {
    title: "Positive Reviews",
    description:
      "A track record of happy travelers who came for the desert and left with a second family.",
  },
];

export const stats = [
  { value: "100%", label: "A+ Results" },
  { value: "+1000", label: "Happy Clients" },
];

export const heroChapters = [
  {
    id: "sahara",
    image: "/images/hero/hero-1.jpg",
    alt: "A Berber guide leading two camels across the Erg Chebbi dunes at golden hour",
    location: "Merzouga · Morocco",
    kicker: "The Sahara",
    headline: ["Where silence", "becomes the journey"] as [string, string],
    body: "Private desert journeys shaped around your pace, your interests and the places you want to discover.",
    cta: { label: "Explore the Sahara", href: "/trip" },
  },
  {
    id: "morocco",
    image: "/images/blog/15-things-to-do-in-marrakech-and-around.jpg",
    alt: "Hot air balloons lifting off at dawn over the Marrakech palm grove, Atlas Mountains behind",
    location: "Private Morocco journeys",
    kicker: "Morocco",
    headline: ["A journey", "beyond the expected"] as [string, string],
    body: "From ancient medinas to remote landscapes, experience Morocco through the people and places that define it.",
    cta: { label: "Discover Morocco", href: "/trip" },
  },
  {
    id: "camp",
    image: "/images/tours/3-day-desert-tour-from-errachidia-to-fes/hero.jpg",
    alt: "A guest walking toward lantern-lit Berber tents at dusk in the Sahara",
    location: "Private desert camp · Merzouga",
    kicker: "Desert camp",
    headline: ["Under", "Moroccan skies"] as [string, string],
    body: "Sleep beneath the stars. Wake with the desert.",
    cta: { label: "Experience the desert", href: "/trip" },
  },
  {
    id: "culture",
    image: "/images/hero/hero-3.jpg",
    alt: "A cobalt-blue stairway lined with woven baskets and textiles in Chefchaouen",
    location: "Culture · heritage · discovery",
    kicker: "Culture",
    headline: ["The soul", "of Morocco"] as [string, string],
    body: "Ancient cities, living traditions and stories that stay with you.",
    cta: { label: "Explore our journeys", href: "/trip" },
  },
];

// Illustrative, composited guest feedback — not attributed to named individuals.
// Swap in a real reviews feed (Google Business Profile / TripAdvisor) once connected.
export const reviews = [
  {
    trip: "5-Day Merzouga Loop",
    quote: "The camel trek at sunset and the night in the desert camp were worth the whole trip on their own.",
  },
  {
    trip: "8-Day Grand Tour",
    quote:
      "Our guide adjusted the itinerary on day two so we could spend longer in Fes — that flexibility made the trip.",
  },
  {
    trip: "3-Day Desert Tour",
    quote: "Everything was arranged before we landed. We just had to show up and enjoy it.",
  },
  {
    trip: "Family trip, 6 days",
    quote:
      "Traveling with two kids, we worried about the long drives. The stops were paced well and the driver was patient the whole way.",
  },
  {
    trip: "Solo traveler, 4 days",
    quote: "Booked with two weeks' notice and they still built a private route around our dates.",
  },
  {
    trip: "Repeat travelers",
    quote: "We came back a year later to see the north after loving the south on our first trip.",
  },
];

export const homeFaqs = [
  {
    question: "Are your tours private or group tours?",
    answer:
      "Private. You travel in your own vehicle with a dedicated driver-guide — you won't be joined with other travelers or a fixed group.",
  },
  {
    question: "What's included in a typical desert tour?",
    answer:
      "Private transport with an English-speaking driver-guide, accommodation as specified in the itinerary, at least one night in a Berber desert camp with dinner and breakfast, and camel trekking in the dunes. See each tour's page for its full list.",
  },
  {
    question: "Can an itinerary be customized?",
    answer:
      "Yes. Every tour on this site is a starting point — dates, pace, and stops can be adjusted to fit your interests and group size.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "There's no fixed minimum. Share your travel dates with us and we'll tell you what's possible — even shorter-notice requests can often be accommodated.",
  },
  {
    question: "Do you offer airport pickup?",
    answer:
      "Most itineraries include pickup at the start of your trip from the nearest airport or your hotel — check the meeting point on the specific tour, or ask us when you inquire.",
  },
  {
    question: "Which cities can I start my tour from?",
    answer:
      "We run private tours departing from Marrakech, Fes, Casablanca, Tangier, Ouarzazate, and Agadir — pick whichever is closest to where you land.",
  },
];

export const tripFaqs = [
  {
    question: "How do I choose the right tour length?",
    answer:
      "3–4 days covers a classic Sahara loop, 5–7 days lets you combine the desert with a second region (mountains or coast), and 8+ days works well for a full grand tour across several imperial cities plus the desert.",
  },
  {
    question: "Do all tours include a desert camp stay?",
    answer:
      "The large majority include at least one night in a Sahara desert camp with camel trekking — check each tour's inclusions to confirm, since a few city- and coast-focused itineraries are structured differently.",
  },
  {
    question: "Can two tours be combined or extended?",
    answer:
      "Yes — treat these itineraries as starting points. Tell us the regions and pace you want and we'll adjust the route, add nights, or combine elements from more than one tour.",
  },
  {
    question: "What's the difference between the tours by departure city?",
    answer:
      "The route and highlights change based on where you start — a tour from Fes leans toward the north and Middle Atlas, while one from Marrakech or Ouarzazate reaches the dunes faster via the High Atlas and kasbah route.",
  },
];

export const destinationsFaqs = [
  {
    question: "How do I pick a departure city?",
    answer: "Whichever city you land in — most travelers start from Marrakech, Fes, or Casablanca since those have the most international flights.",
  },
  {
    question: "Which city is closest to the Sahara?",
    answer: "Errachidia and Ouarzazate offer the shortest routes to Merzouga and the Erg Chebbi dunes; Marrakech and Fes are a day or so further.",
  },
  {
    question: "Can I start in one city and finish in another?",
    answer: "Yes — many of our itineraries begin and end in different cities so you don't have to backtrack. Tell us your arrival and departure points and we'll route accordingly.",
  },
];

export const aboutFaqs = [
  {
    question: "Is Daily Desert Tours a local, family-owned company?",
    answer:
      "Yes. The company was founded by our father, and his children now run day-to-day guiding, logistics, and hospitality.",
  },
  {
    question: "Do you only operate desert tours, or other regions too?",
    answer:
      "Both — our itineraries cover the Sahara as well as the Atlas Mountains, the Atlantic coast, and Morocco's imperial cities, not just the desert.",
  },
  {
    question: "What makes your guides different from a standard tour operator?",
    answer:
      "Our driver-guides grew up in the landscapes they show you, so an itinerary becomes a set of personal introductions rather than a fixed checklist of stops.",
  },
  {
    question: "Do you support local communities and sustainable tourism?",
    answer:
      "Yes — we prioritize supporting local artisans and businesses and favor sustainable practices to help preserve Morocco's cultural heritage.",
  },
];

export const contactFaqs = [
  {
    question: "What's the fastest way to reach you?",
    answer: "WhatsApp or phone during office hours get the quickest response; email and the contact form work well for detailed itinerary requests.",
  },
  {
    question: "How quickly do you reply to inquiries?",
    answer: "We usually reply the same day.",
  },
  {
    question: "What are your office hours?",
    answer: "Monday–Friday 8:30 AM–8:00 PM, and Saturday–Sunday 9:30 AM–9:30 PM.",
  },
  {
    question: "Do your guides speak English?",
    answer: "Yes — every private tour includes an English-speaking driver-guide.",
  },
];

export const blogFaqs = [
  {
    question: "What's the best time of year to visit Morocco?",
    answer:
      "Spring (March–May) and fall (September–November) are the most comfortable months — the Sahara is extremely hot in midsummer and the High Atlas can be cold in winter.",
  },
  {
    question: "Do I need a visa to visit Morocco?",
    answer:
      "Requirements vary by nationality. Many travelers from the EU, US, UK, and Canada can enter visa-free for tourist stays, but check your own country's current requirements before booking.",
  },
  {
    question: "What currency is used in Morocco?",
    answer: "The Moroccan Dirham (MAD). Cash is still useful in medinas and rural areas, alongside cards in cities.",
  },
  {
    question: "Is Morocco safe for travelers?",
    answer:
      "Morocco is a popular and generally safe destination for travelers, including solo travelers — as anywhere, normal precautions around belongings and busy areas apply.",
  },
];

export const processSteps = [
  {
    title: "Tell us your dates",
    description:
      "Share when you're traveling, where you land, and what you want out of Morocco — dunes, cities, coast, or all three.",
  },
  {
    title: "We shape the itinerary",
    description:
      "A driver-guide builds the route around your pace, swapping stops or adding nights wherever you want more time.",
  },
  {
    title: "Travel with your guide",
    description:
      "One vehicle, one guide, no fixed groups — from airport pickup to your last night under the stars.",
  },
];
