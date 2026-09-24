export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  slug: string;
  title: string;
  departureCity: string;
  days: number;
  nights: number;
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  meetingPoint?: string;
  featured?: boolean;
}

/** Card/list-view fields only — use this for anything crossing a server→client boundary
 * (e.g. props into a "use client" component) so the full itinerary/highlights/included/
 * excluded text isn't serialized into the client bundle for pages that never render it. */
export type TourSummary = Pick<Tour, "slug" | "title" | "departureCity" | "days" | "nights" | "summary">;

// Most itineraries visit Erg Chebbi (Merzouga); a few visit Erg Chigaga (Zagora/M'Hamid) instead —
// pass the real dune field for the specific route rather than hedging with "or".
function standardIncluded(duneField: "Erg Chebbi" | "Erg Chigaga" = "Erg Chebbi") {
  return [
    "Private transport (4x4 or minivan) with an English-speaking driver-guide",
    "Accommodation as specified in the itinerary (hotels, riads, kasbahs)",
    "One or more nights in a Berber desert camp with dinner and breakfast",
    `Camel trekking in the ${duneField} dunes`,
    "All activities and guided visits mentioned in the itinerary",
  ];
}

const genericExcluded = [
  "International flights",
  "Visa fees",
  "Lunches and drinks not otherwise specified",
  "Monument and museum entrance fees",
  "Travel and medical insurance",
  "Tips and personal expenses",
];

export const tours: Tour[] = [
  {
    slug: "3-day-desert-tour-from-errachidia-to-fes",
    title: "3-Day Desert Tour from Errachidia to Fes",
    departureCity: "Errachidia",
    days: 3,
    nights: 2,
    featured: true,
    summary:
      "A desert adventure combining natural beauty across the Moroccan Sahara: the Ziz Valley, authentic Berber culture, camel trekking at Erg Chebbi, and stargazing in desert camps, before crossing the Middle Atlas Mountains to historic Fes.",
    highlights: [
      "Scenic drive through the Ziz Valley",
      "Traditional Berber village and nomadic family visits",
      "Camel trekking at Erg Chebbi dunes at sunset",
      "Overnight desert camp stay under the stars",
      "Middle Atlas Mountains crossing",
      "Wild Barbary apes in the cedar forests of Azrou",
      "Stop in the alpine town of Ifrane, the \"Switzerland of Morocco\"",
      "Arrival in Fes",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Errachidia – Transfer to Merzouga Desert",
        description:
          "Arrival at Moulay Ali Cherif Airport followed by a scenic drive through the Ziz Valley, a lush corridor of palm trees and traditional villages. Evening arrival in Merzouga for hotel check-in and a traditional Moroccan dinner.",
      },
      {
        day: 2,
        title: "Explore Merzouga – Nomads – Camel Ride – Desert Camp",
        description:
          "Morning visit to Hassi Labied to study local irrigation systems, then Khamlia village to hear descendants of Sub-Saharan settlers perform soulful Gnawa music. Explore the M'ifis mineral mines and desert landscapes rich in fossils, then visit a nomadic Berber family for mint tea in a traditional tent. Afternoon camel trek across the dunes with a sunset pause and optional sandboarding, followed by live Berber drumming under a sky full of stars and a night in nomad-style tents.",
      },
      {
        day: 3,
        title: "Merzouga – Ziz Valley – Middle Atlas Mountains – Azrou – Ifrane – Fes",
        description:
          "Early sunrise over the golden dunes, then a return to Merzouga by camelback or 4x4. Journey north along the scenic Ziz Valley with photo stops and lunch. Afternoon cedar forest exploration to see wild Barbary macaques in their natural habitat, a break in Ifrane, and a late-afternoon drop-off at your hotel or riad in Fes.",
      },
    ],
    included: [
      "Private transport (4x4 or minivan) with driver",
      "Accommodation (luxury or standard options)",
      "1 night in a desert camp (standard or luxury)",
      "Camel ride in the Merzouga dunes",
      "Dinner and breakfast at the desert camp",
    ],
    excluded: ["Lunches and drinks", "Monument entrance fees", "Tips and personal expenses"],
    meetingPoint: "Moulay Ali Cherif Airport, Errachidia",
  },
  {
    slug: "desert-tour-from-errachidia-to-marrakech",
    title: "4-Day Desert Tour from Errachidia to Marrakech",
    departureCity: "Errachidia",
    days: 4,
    nights: 3,
    featured: true,
    summary:
      "Adventure and cultural authenticity from Errachidia to Marrakech, through oases, Berber villages, ancient kasbahs, and the Saharan dunes, with a camel ride into Erg Chebbi and a night in a luxury desert camp.",
    highlights: [
      "Ziz Valley scenic drive through palm-fringed canyons",
      "Authentic nomad encounters over mint tea",
      "Camel ride into the dunes of Erg Chebbi at sunset",
      "Desert camp with private tents, music, and a Berber-style feast",
      "Traditional markets of Rissani",
      "Todra and Dades Gorges",
      "Rose Valley & Kalaat M'Gouna",
      "Ouarzazate & the Atlas Film Studios",
      "Ait Ben Haddou Kasbah, a UNESCO World Heritage Site",
      "Tizi-n-Tichka Pass across the High Atlas",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Errachidia – Ziz Valley – Erfoud – Merzouga",
        description:
          "Driver pickup in Errachidia, then travel through the verdant Ziz Valley, one of Morocco's most stunning palm-filled canyons, with scenic photo stops. A brief rest in Erfoud, renowned for fossils and dates, precedes arrival at the majestic dunes of Erg Chebbi near Merzouga, with hotel check-in, a traditional dinner, and Berber music under the stars.",
      },
      {
        day: 2,
        title: "Explore the Sahara – Nomads – Khamlia – Camel Trek – Desert Camp",
        description:
          "Desert exploration begins in Khamlia, home to descendants of Sub-Saharan Africans known for Gnawa music. Off-road travel reaches nomadic families in traditional tents for mint tea, fresh bread, and perhaps a homemade Berber pizza for lunch. Afternoon camel trek into sunset-lit dunes, followed by a luxury desert camp with private en-suite tents, a candlelit dinner, and campfire music.",
      },
      {
        day: 3,
        title: "Merzouga – Rissani – Arfoud – Todgha Gorges – Dades Valley",
        description:
          "Sunrise over the dunes, breakfast, and a return camel ride. Rissani, a desert market town rich in heritage and home to Morocco's Alaouite dynasty, offers market exploration on market days. A fossil workshop visit in Arfoud precedes travel through palm groves to the Todgha Gorges, a photographer's dream with towering red rock walls. The winding Dades Valley features the \"Monkey Fingers\" rock formations before an evening hotel check-in.",
      },
      {
        day: 4,
        title: "Dades Valley – Kalaat M'Gouna – Ouarzazate – Ait Ben Haddou – Marrakech",
        description:
          "Westward travel through Kalaat M'Gouna's Valley of Roses, famed for its fragrant rose products and springtime festival. Skoura's palm groves lead to Ouarzazate for optional Atlas Studios visits, then the grand Kasbah of Ait Ben Haddou, with its earthen clay architecture and UNESCO recognition. The journey crosses the High Atlas Mountains via the Tizi-n-Tichka pass before arrival in Marrakech and traditional riad accommodation.",
      },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Errachidia",
  },
  {
    slug: "erg-chebbi-desert-tour-from-errachidia",
    title: "3-Day Erg Chebbi Desert Tour from Errachidia",
    departureCity: "Errachidia",
    days: 3,
    nights: 2,
    summary:
      "A short but rich tour through the heart of southern Morocco: the Ziz Valley, historic ksars, and local markets, en route to Erg Chebbi's dunes for camel rides, traditional music, and glamping under the stars.",
    highlights: [
      "The verdant Ziz Valley, a ribbon of green running through the desert",
      "The fossil capital of Erfoud and its ancient workshops",
      "The traditional souks of Rissani",
      "Camel ride through the golden dunes of Erg Chebbi at sunset",
      "Authentic desert hospitality in a Berber camp beneath the stars",
      "Visits to nomadic families for tea and tradition",
      "Gnawa music in Khamlia",
      "Sandboarding, campfire, and stargazing",
    ],
    itinerary: [
      {
        day: 1,
        title: "Errachidia – Ziz Valley – Erfoud – Rissani – Erg Chebbi",
        description:
          "Upon arrival in Errachidia and meeting your driver, travel south toward the Sahara along a scenic route through the lush palm groves and cliffs of the Ziz Valley, with a coffee break and fossil workshop visit in Erfoud. Rissani, rooted in Moroccan history, bursts with color on market days (Sunday, Tuesday, Thursday); visit the Mausoleum of Moulay Ali Cherif and enjoy a local lunch. By afternoon, camels carry you across the rippling dunes of Erg Chebbi for sunset, followed by dinner and Berber music around the campfire in a traditional luxury desert camp.",
      },
      {
        day: 2,
        title: "Full Day in the Erg Chebbi Desert",
        description:
          "A 4x4 adventure across the rocky plains and hidden trails of Erg Chebbi, visiting nomadic families for tea and a glimpse of desert life. Continue to Khamlia, where descendants of African slaves preserve their musical heritage through Gnawa rhythms, then return to Rissani's market before an afternoon camel ride. Gather around a fire under a canopy of stars for a Berber dinner prepared by your guides.",
      },
      {
        day: 3,
        title: "Erg Chebbi – Errachidia Airport Transfer",
        description:
          "Rise early for a breathtaking sunrise over the dunes. After breakfast in camp, try sandboarding or simply enjoy the peace of the desert. Mount your camel for the ride back to the edge of the dunes, where your driver transfers you back to Errachidia in time for your flight.",
      },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Errachidia",
  },
  {
    slug: "5-days-tour-from-ouarzazate-to-marrakech",
    title: "5 Days Tour from Ouarzazate to Marrakech",
    departureCity: "Ouarzazate",
    days: 5,
    nights: 4,
    featured: true,
    summary:
      "Southern Morocco's kasbah trail in five days: Aït Benhaddou, the Rose Valley, Todra Gorge, and a night in the Erg Chebbi dunes before the Tizi n'Tichka pass into Marrakech.",
    highlights: [
      "UNESCO-listed Aït Benhaddou and the preserved Kasbah Amridil",
      "The fragrant Rose Valley and towering cliffs of Dades Gorge",
      "The spectacular canyon of Todra Gorge",
      "Camel ride into the golden dunes of Erg Chebbi at sunset",
      "A traditional Berber desert camp with live music under the Milky Way",
      "The palm-lined Draa Valley and its kasbahs",
      "The High Atlas via the scenic Tizi n'Tichka Pass",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ouarzazate → Aït Benhaddou → Skoura → Rose & Dades Valleys → Todra Gorges",
        description:
          "The adventure begins in Ouarzazate with a visit to the legendary UNESCO-listed Aït Benhaddou kasbah, followed by Kasbah Amridil in Skoura and passage through the Valley of a Thousand Kasbahs and the fragrant Rose Valley. Reach Dades Gorge for photography before settling in near Todra Gorge, with an overnight stay in a local riad.",
      },
      {
        day: 2,
        title: "Todra Gorge → Erfoud → Merzouga Dunes",
        description:
          "A morning stroll beneath the sheer walls of Todra Gorge, then eastward travel through Tinghir to Erfoud, known for its fossil workshops and traditional irrigation systems. Afternoon arrival in Merzouga includes camel trekking across the dunes, culminating in a desert camp stay with Berber cuisine and drumming beneath the stars.",
      },
      {
        day: 3,
        title: "Merzouga Exploration",
        description:
          "A breathtaking sunrise over the dunes opens the day, followed by visits to nearby oases and Khamlia, home to Gnawa musicians. In the evening, meet a nomadic family and ride your camel back to camp for another night of music and warmth.",
      },
      {
        day: 4,
        title: "Merzouga → Rissani → Nkob → Draa Valley → Ouarzazate",
        description:
          "After sunrise and breakfast, travel to Rissani, where the traditional souk offers a vibrant window into local life. The route passes the quaint villages of Alnif and Nkob, rolling along the lush palm-lined Draa Valley, before arriving in Ouarzazate by evening.",
      },
      {
        day: 5,
        title: "Ouarzazate → Atlas Studios → Aït Benhaddou → Telouet → Marrakech",
        description:
          "Explore the famed film sets at Atlas Studios before returning to Aït Benhaddou for a deeper look, then cross to the ornate Telouet Kasbah, once the residence of the powerful Glaoui family. A scenic drive over Tizi n'Tichka Pass leads into Marrakech, where your desert adventure ends at your riad or hotel.",
      },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Ouarzazate",
  },
  {
    slug: "4-days-desert-tour-from-ouarzazate",
    title: "4 Days Desert Tour from Ouarzazate to Merzouga",
    departureCity: "Ouarzazate",
    days: 4,
    nights: 3,
    summary:
      "For explorers, photographers, and lovers of Berber culture: cinematic kasbahs, golden dunes, traditional Berber life, authentic cuisine, and a night under the stars in a luxury desert camp.",
    highlights: [
      "The UNESCO World Heritage Ksar of Ait Ben Haddou",
      "The beautifully preserved Kasbah Amridil in Skoura",
      "The Valley of Roses and Dades Gorge",
      "The towering cliffs of Todra Gorges",
      "Rissani and Erfoud, famous for dates and fossils",
      "Camel trek into the dunes of Erg Chebbi at sunset",
      "A night in a Berber tent under the Saharan stars",
      "Traditional desert villages and nomadic families",
      "The Draa Valley and remote villages on the return",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ouarzazate – Ait Ben Haddou – Skoura – Valley of Roses – Dades Valley – Todra Gorges",
        description:
          "Pickup in Ouarzazate and a scenic drive to the UNESCO-listed fortified village of Ait Ben Haddou, exploring its winding alleys and historic architecture, followed by Skoura's palm-dotted oasis and Kasbah Amridil. The route follows the legendary Road of a Thousand Kasbahs through the Valley of Roses toward Dades Valley and Todra Gorges, with an overnight stay in a local riad or hotel.",
      },
      {
        day: 2,
        title: "Todra Gorges – Tinjdad – Erfoud – Rissani – Merzouga Desert",
        description:
          "Explore the dramatic cliffs of Todra Gorges, then travel through Tinghir, Tinjdad, and the Oasis of Tafilalet, stopping at ancient underground irrigation channels (khettaras). In Erfoud, visit fossil workshops where ancient marine life is crafted into decor, then continue to Rissani, the historic seat of the Alaouite dynasty, before reaching Merzouga's dunes for a warm welcome with mint tea, a camel trek across the golden sands, sunset over Erg Chebbi, and a night in a luxury Berber tent.",
      },
      {
        day: 3,
        title: "Explore Merzouga Desert and Surroundings",
        description:
          "A 4x4 tour explores the twin oases of Merzouga and continues to Khamlia village, home to the Gnaoua people, descendants of African slaves known for their spiritual music. Excursions include the Mifiss mines, visits to nomadic families still living in the desert, and the arid black desert landscapes near Tissardmine, followed by a relaxed evening.",
      },
      {
        day: 4,
        title: "Merzouga – Rissani – N'Kob – Draa Valley – Agdez – Ouarzazate",
        description:
          "Wake early to catch the sunrise over the dunes, then journey back toward Ouarzazate through Rissani's traditional markets and the remote desert towns of Alnif and N'Kob. The route follows the vast palm groves of the Draa Valley, Morocco's longest river valley, exploring ancient kasbahs and date farms, with lunch in Agdez before returning by late afternoon.",
      },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Ouarzazate",
  },
  {
    slug: "10-day-desert-tour-from-agadir",
    title: "10-Day Desert Tour from Agadir",
    departureCity: "Agadir",
    days: 10,
    nights: 9,
    featured: true,
    summary:
      "A private itinerary for travelers eager to explore Morocco's iconic imperial cities, Marrakech, Rabat, Fes, and Meknes, while experiencing the magic of the Sahara Desert. Customizable to your interests and needs.",
    highlights: [
      "The Atlantic charm of Essaouira and its historic medina",
      "A guided city tour of Marrakech",
      "Casablanca's Hassan II Mosque and Rabat's Oudayas Kasbah",
      "Fes's labyrinthine old medina and traditional craftsmanship",
      "Crossing the Middle and High Atlas Mountains",
      "A camel trek and overnight in a luxury Sahara desert camp",
      "Ancient kasbahs and lush palm valleys",
      "Berber traditions in Taliouine and Taroudant",
      "The picturesque Draa Valley and Ait Benhaddou",
    ],
    itinerary: [
      { day: 1, title: "Agadir – Essaouira", description: "Explore Agadir's beach promenade, kasbah views, and souks, then travel to Essaouira, a charming Atlantic town blending Phoenician, Portuguese, Berber, and French influences, with a UNESCO-listed medina, ramparts, artisan shops, and harbor." },
      { day: 2, title: "Essaouira – Marrakech", description: "After a seaside morning, head inland toward Marrakech through forests of argan trees dotted with tree-climbing goats, visiting local women's cooperatives producing argan oil." },
      { day: 3, title: "Full-Day Marrakech Tour", description: "Visit the ornate Saadian Tombs, Bahia Palace, El Badi Palace ruins, and the Koutoubia Mosque, plus the Jewish Quarter. After lunch near Jemaa el-Fnaa square, discover the Majorelle and Menara Gardens and enjoy the evening's street performances." },
      { day: 4, title: "Marrakech – Casablanca", description: "Travel to Morocco's commercial capital, with its wide boulevards and Atlantic coastline. Visit the Hassan II Mosque, one of the largest in the world, before a relaxed evening stroll along the seaside Corniche." },
      { day: 5, title: "Casablanca – Rabat – Meknes – Fes", description: "Visit the royal Hassan Tower, the Mausoleum of Mohammed V, and the Andalusian-style Oudayas Kasbah in Rabat, then travel inland to Meknes for its grand gates, stables, and Moulay Ismail's mausoleum, before continuing to Fes." },
      { day: 6, title: "Fes – Azrou – Midelt – Imilchil", description: "Drive through the cedar forests of the Middle Atlas, passing Ifrane, Morocco's \"Little Switzerland.\" Stop in Azrou to meet wild Barbary macaques and continue to Midelt and on to Imilchil, a remote Berber village famous for its lakes and tribal traditions." },
      { day: 7, title: "Imilchil – Todgha Gorges – Merzouga Desert", description: "Travel through spectacular mountain scenery to the dramatic Todgha Gorges, then head southeast to Erfoud and Merzouga, gateway to the Sahara. Mount your camel and ride through the Erg Chebbi dunes to your luxury desert camp for a traditional dinner and live music under the stars." },
      { day: 8, title: "Merzouga – Rissani – Draa Valley – Ait Benhaddou", description: "Witness the Sahara sunrise, then return by camel to Merzouga village and visit Rissani's traditional market before continuing through Alnif and N'kob to the Draa Valley, admiring the palm groves and kasbahs en route to Ait Benhaddou, a UNESCO World Heritage Site." },
      { day: 9, title: "Ait Benhaddou – Taliouine – Taroudant", description: "Visit the kasbah known for its role in films like Gladiator and Game of Thrones, continue through Taznakht, renowned for Berber carpets, and stop in Taliouine, Morocco's saffron capital, before arriving in Taroudant, often called \"Little Marrakech.\"" },
      { day: 10, title: "Taroudant – Agadir (Tour End)", description: "Explore Taroudant's ancient walls, traditional souks, and laid-back atmosphere, then drive back to Agadir through the scenic Souss Valley, arriving in the afternoon to mark the end of your tour." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Agadir",
  },
  {
    slug: "6-days-desert-tour-from-agadir",
    title: "6-Day Desert Tour from Agadir to Merzouga and Marrakech",
    departureCity: "Agadir",
    days: 6,
    nights: 5,
    summary:
      "From the vibrant streets of Marrakech and the snow-capped High Atlas Mountains to the golden dunes of Merzouga, a journey combining iconic cities and enchanting desert landscapes.",
    highlights: [
      "Guided cultural exploration of Marrakech",
      "The scenic Tizi n'Tichka mountain pass",
      "The UNESCO-listed ksar of Ait Ben Haddou",
      "Ouarzazate's film studios and ancient kasbahs",
      "The dramatic landscapes of Dades and Todra Gorges",
      "Camel rides through the dunes of Merzouga",
      "Nomadic Berber families and Gnaoua musicians",
      "The market of Rissani and the palm groves of Erfoud",
      "The Draa Valley and Anti-Atlas Mountains",
      "The saffron capital of Taliouine and artisan town of Taznakht",
    ],
    itinerary: [
      { day: 1, title: "Agadir to Marrakech – Discover the Imperial Jewel", description: "A scenic drive from Agadir to Marrakech, followed by a guided city tour of the Saadian Tombs and the ornate Bahia Palace, the Majorelle and Menara Gardens, and Jemaa El-Fna square, where storytellers, musicians, and food stalls create a lively atmosphere. Overnight in a riad or hotel." },
      { day: 2, title: "Marrakech – Ait Ben Haddou – Ouarzazate – Dades Valley", description: "Travel east through the High Atlas via Tizi n'Tichka Pass, stopping at Ait Ben Haddou, a UNESCO World Heritage Site known for its earthen clay architecture and film history. Visit Ouarzazate's Atlas Film Studios and Taourirt Kasbah, then the Skoura oasis and Valley of Roses before reaching Dades Valley." },
      { day: 3, title: "Dades Valley – Todra Gorge – Merzouga Desert", description: "Begin with the towering rock cliffs of Todra Gorge, then continue through Tinghir with lunch in Touroug village. Pass through Erfoud, known for fossil workshops and date palms, before arriving in Merzouga near the Erg Chebbi dunes." },
      { day: 4, title: "Full Day in the Sahara – Desert Culture & Camel Trekking", description: "Visit desert nomads in their tents and explore the Mifis mines, then travel to Khamlia village for a live performance of traditional Gnaoua music. In the afternoon, ride a camel into the dunes for dinner, Berber music, and an overnight stay in a luxury tent under the stars." },
      { day: 5, title: "Merzouga – Rissani – Draa Valley – Ouarzazate", description: "Rise early for a magical Sahara sunrise, then explore Rissani's authentic market before continuing through the Anti-Atlas to Agdz, visiting the ancient Tamnougalt Kasbah and the endless date palms of the Draa Valley, concluding in Ouarzazate." },
      { day: 6, title: "Ouarzazate – Taznakht – Taliouine – Taroudant – Agadir", description: "Stop in Taznakht for handcrafted Berber rugs and Taliouine, the saffron capital of Morocco, then continue to Taroudant, a walled Berber city often called \"Little Marrakech,\" before arriving back in Agadir by late afternoon." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Agadir",
  },
  {
    slug: "3-days-tour-from-ouarzazate-to-merzouga",
    title: "3-Day Desert Tour from Ouarzazate to Merzouga",
    departureCity: "Ouarzazate",
    days: 3,
    nights: 2,
    summary:
      "An immersive desert escape with dramatic landscapes, off-road adventures, and rich Berber culture, revealing scenic mountain passes, remote Berber villages, ancient kasbahs, and the iconic dunes of Erg Chebbi.",
    highlights: [
      "The Valley of Roses and Dades Valley",
      "The dramatic Todra Gorges and palm groves",
      "Fossil workshops and ancient irrigation systems near Erfoud",
      "Camel trek across Erg Chebbi dunes at sunset",
      "Traditional music and cuisine at a desert camp in Merzouga",
      "The Draa Valley and historic caravan trails on the return",
    ],
    itinerary: [
      { day: 1, title: "Ouarzazate – Skoura Oasis – Valley of Roses – Dades Valley – Todra Gorges", description: "Morning pickup from your Ouarzazate accommodation, then travel through the palm-filled Skoura Oasis and the fragrant Valley of Roses. Scenic roads lead to Dades Valley for lunch and gorge exploration, with the evening spent at a local guesthouse near Todra Gorges." },
      { day: 2, title: "Todra Gorges – Erfoud – Merzouga (Sahara Desert)", description: "Explore the Todra Canyon, then travel through Tinjdad and the Tafilalt Oasis, stopping at Erfoud's fossil and marble workshops and traditional underground water channels, with a Berber lunch en route. Late-afternoon arrival at Erg Chebbi includes mint tea, camel trekking across the sands, and an evening of Berber music, dinner, and stargazing by the fire." },
      { day: 3, title: "Merzouga – Tazzarine – N'kob – Draa Valley – Agdz – Ouarzazate", description: "Sunrise over the dunes, then travel through rocky plateaus to Tazzarine, featured in the film Babel. Lunch in N'Kob, surrounded by ancient kasbahs, precedes the scenic route along former caravan trails through the Draa Valley's palm groves and mud-brick villages back to Ouarzazate." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Ouarzazate",
  },
  {
    slug: "5-days-tour-from-agadir-to-marrakech",
    title: "5-Day Tour from Agadir to Marrakech",
    departureCity: "Agadir",
    days: 5,
    nights: 4,
    summary:
      "Cultural discovery, scenic landscapes, and desert tranquility, with authentic Berber experiences, camel trekking, starry nights by the campfire, and a luxury desert camp at Erg Chigaga.",
    highlights: [
      "Personalized pick-up and private transport from Agadir",
      "The medieval charm and bustling markets of Taroudant",
      "The renowned saffron cooperative in Taliouine",
      "The traditional Berber carpet market in Taznakht",
      "Off-road adventure through Ilki National Park's salt flats",
      "Overnight stays in a luxury desert camp with en-suite facilities at Erg Chigaga",
      "Camel rides, sandboarding, and Berber cultural entertainment",
      "Nomadic villages and local Berber families",
      "A scenic drive through the Draa Valley and stops in Zagora and Agdz",
      "The film studios and kasbahs of Ouarzazate and Aït Ben Haddou",
      "The High Atlas Mountains via Tizi n'Tichka Pass",
    ],
    itinerary: [
      { day: 1, title: "Agadir – Taroudant – Foum Zguid – Erg Chigaga", description: "Depart Agadir to visit Taroudant's medina and markets, a saffron cooperative in Taliouine, and Taznakht's handmade carpet market, then an off-road adventure across the salt flats of Ilki National Park before arriving at the desert camp for a sunset camel ride, candlelit dinner, and music around the campfire." },
      { day: 2, title: "Erg Chigaga – Desert Activities and Off-Road Exploration", description: "Witness the sunrise over the dunes, then enjoy camel trekking, sandboarding, or relaxation, with an optional full-day camel trek and a traditional Berber picnic lunch, followed by dinner under starlit skies." },
      { day: 3, title: "Extended Camel Trekking Experience", description: "Continue exploring the Erg Chigaga dunes by camel, experiencing the solitude and beauty of the Sahara and the hospitality of your Berber hosts, with another overnight in the luxury desert tent." },
      { day: 4, title: "From M'Hamid to Zagora and Ouarzazate via Draa Valley", description: "Depart by 4x4 to M'Hamid, meeting nomadic families and exploring Berber villages, then travel through Zagora and the palm-lined Draa Valley to Ouarzazate for film studio visits and an overnight in a luxury kasbah near Aït Ben Haddou." },
      { day: 5, title: "Kasbah Visits and High Atlas Crossing to Marrakech", description: "Explore the iconic Aït Ben Haddou kasbah, a UNESCO World Heritage filming location, then Kasbah Glaoui, before crossing the High Atlas via Tizi n'Tichka Pass with photo stops of mountain-perched Berber villages, concluding in Marrakech." },
    ],
    included: standardIncluded("Erg Chigaga"),
    excluded: genericExcluded,
    meetingPoint: "Agadir",
  },
  {
    slug: "12-days-grand-tour-from-casablanca",
    title: "12 Days Grand Tour from Casablanca",
    departureCity: "Casablanca",
    days: 12,
    nights: 11,
    featured: true,
    summary:
      "The best of Morocco on a private grand tour stretching from the Atlantic coast to the heart of the Sahara and beyond, visiting four imperial cities, ancient kasbahs, vast palm oases, and scenic mountain passes, concluding in Marrakech.",
    highlights: [
      "Personalized airport pickup and transfers",
      "Hassan II Mosque and Slaoui Museum in Casablanca",
      "Guided exploration of Marrakech",
      "High Atlas Mountains crossing via Tizi n'Tichka Pass",
      "Aït Ben Haddou UNESCO site and Ouarzazate film studios",
      "Dades Valley hiking and Todra Gorge",
      "Camel rides and luxury Berber camp stays at Erg Chebbi",
      "Ramlia desert and local Berber culture",
      "Erfoud fossil sites and the Ziz Valley",
      "Barbary macaque encounters in cedar forests",
      "The medinas of Fes and Meknes",
      "Luxury hotel accommodation finale",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Casablanca", description: "Airport pickup and hotel check-in, with dinner and breakfast included." },
      { day: 2, title: "Casablanca Highlights and Transfer to Marrakech", description: "Visit the Hassan II Mosque, explore the Slaoui Museum, lunch at Rick's Café, then travel to Marrakech." },
      { day: 3, title: "Guided Tour of Marrakech", description: "Discover the Bahia Palace, Le Jardin Secret gardens, medina souks, and Jemaa el-Fna square." },
      { day: 4, title: "Marrakech to Ouarzazate via High Atlas", description: "Travel over Tizi n'Tichka Pass through Berber villages, visit the Aït Ben Haddou UNESCO site, and explore Ouarzazate's film studios." },
      { day: 5, title: "Ouarzazate to Dades Valley", description: "Experience the Skoura palm oasis, Kasbah Amridil, Rose Valley, and a guided hike in Dades Valley's gorges." },
      { day: 6, title: "Off-Road Adventure to Ramlia Desert", description: "Start at Todra Gorge with cliff views, encounter wild camels, enjoy a picnic lunch, and arrive at the Ramlia dunes for sunset." },
      { day: 7, title: "Ramlia to Merzouga via Paris-Dakar Route", description: "Explore ancient irrigation systems, share Berber family tea, visit the Ouzina children's literacy center and Khamlia village for Gnawa music, then camel trek to the Erg Chebbi camp." },
      { day: 8, title: "Merzouga to Midelt", description: "Sunrise over the dunes, visit the Rissani market, explore Erfoud's fossil deposits, and drive through the Ziz Valley's palm groves to Midelt." },
      { day: 9, title: "Midelt to Fes via Middle Atlas", description: "Travel through cedar forests with Barbary macaques, pass through Ifrane's alpine architecture, and arrive in Fes." },
      { day: 10, title: "Full-Day Guided Tour of Fes", description: "Explore medina alleys and souks, visit the world's oldest university, witness the leather tanneries, and attend a Moroccan culture lecture." },
      { day: 11, title: "Fes to Casablanca via Meknes", description: "Visit the American Fondouk veterinary clinic, tour the Meknes medina, explore Moulay Ismail's stables and historic madrassa, and return to Casablanca." },
      { day: 12, title: "Departure", description: "A relaxing morning followed by a private airport transfer based on your flight time." },
    ],
    included: [
      "Airport pickups and transfers",
      "Hotel accommodations throughout",
      "Dinner and breakfast daily",
      "Professional guided tours",
      "Camel trekking experiences",
      "Desert camp stays (luxury Berber camps)",
      "Vehicle transportation throughout",
    ],
    excluded: genericExcluded,
    meetingPoint: "Casablanca Airport",
  },
  {
    slug: "10-days-tour-from-casablanca",
    title: "10 Days itinerary tour from Casablanca",
    departureCity: "Casablanca",
    days: 10,
    nights: 9,
    summary:
      "Morocco's north-to-south classic in ten days: Rabat, blue-washed Chefchaouen, the Volubilis ruins, Fes's medina, a night in the Erg Chebbi dunes, and the Todra and Dades gorges, ending in Marrakech.",
    highlights: [
      "Airport pickup and transfers included",
      "The Hassan II Mosque in Casablanca",
      "Rabat's Hassan Tower and Oudayas Kasbah",
      "Chefchaouen, the \"Blue Pearl\" of Morocco",
      "Panoramic views of the Rif Mountains",
      "The ancient Roman ruins at Volubilis",
      "Meknes's imperial monuments",
      "Guided tours of Fes and Marrakech",
      "Middle Atlas Mountains and cedar forests",
      "Barbary macaques in Azrou",
      "Camel trekking and sunset views in the Erg Chebbi Desert",
      "Todra and Dades gorges",
      "Ouarzazate and Aït Benhaddou Kasbah",
      "The High Atlas Mountains at 2,260 meters",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Casablanca & Transfer to Rabat", description: "Your driver welcomes you at Mohamed V Airport and transfers you to visit the Hassan II Mosque, before continuing to Rabat for the night." },
      { day: 2, title: "Rabat Sightseeing and Journey to Chefchaouen via Ouazzane", description: "Tour Rabat's landmarks including the Hassan Tower, then drive through the Rif Mountains to Chefchaouen, stopping in Ouazzane for lunch." },
      { day: 3, title: "Chefchaouen to Fes via Volubilis and Meknes", description: "Explore Chefchaouen's blue streets, visit the Volubilis Roman ruins, and tour Meknes's imperial gates including Bab al-Mansour, before continuing to Fes." },
      { day: 4, title: "Full Day Guided Tour of Fes", description: "Explore the medina with a local guide, visit Al-Qarawiyyin University, the oldest existing university, see Borj Nord fortress, and the Chouara Tannery." },
      { day: 5, title: "Fes to Merzouga via Middle Atlas Mountains, Midelt, Ziz Valley, and Erfoud", description: "Cross the Middle Atlas visiting Ifrane and cedar forests, continue through the Ziz Valley and Erfoud to Merzouga for a camel trek into the golden dunes, sunset, and a traditional Berber dinner with music." },
      { day: 6, title: "Merzouga Desert 4×4 Excursion and Cultural Visit", description: "Explore the Sahara by 4x4, visit Khamlia, famous for its Gnawa music heritage, meet nomadic families, and explore the Srij Lake oasis, returning for sunset." },
      { day: 7, title: "Merzouga to Dades Valley via Todra Gorge", description: "Witness a spectacular desert sunrise, stop at the Rissani market, and journey to the dramatic Todra Gorge for short hikes and relaxation by the river, overnighting in Dades Valley." },
      { day: 8, title: "Dades Valley to Marrakech via Ouarzazate and High Atlas Mountains", description: "Travel through the Rose Valley, reach Ouarzazate to visit the Atlas Studios, explore the Aït Benhaddou Kasbah, and cross the High Atlas via Tizi n'Tichka Pass to Marrakech." },
      { day: 9, title: "Guided Tour of Marrakech", description: "See the 12th-century Koutoubia Mosque, explore the medina souks, visit the Bahia Palace and Majorelle Garden, view the Saadian Tombs, and finish at Jemaa el-Fna square." },
      { day: 10, title: "Departure Transfer from Marrakech or Casablanca", description: "Transfer to the airport for your onward journey, concluding your memorable tour." },
    ],
    included: [
      "Airport pickup and transfers",
      "All guided tours and cultural site visits",
      "Camel trekking in Merzouga",
      "Desert camp accommodation with meals",
      "4×4 desert excursions",
      "Accommodation throughout the journey",
    ],
    excluded: genericExcluded,
    meetingPoint: "Mohamed V Airport, Casablanca",
  },
  {
    slug: "7-days-tour-from-casablanca",
    title: "7 Days Morocco Tour from Casablanca",
    departureCity: "Casablanca",
    days: 7,
    nights: 6,
    summary:
      "The country's four imperial cities, Rabat, Meknes, Fes, and Marrakech, plus ancient caravan routes through the Sahara Desert with overnight desert camping, centuries-old kasbahs, and hidden oases.",
    highlights: [
      "The Hassan II Mosque with its 210-meter minaret",
      "Chefchaouen's blue-painted buildings and cobbled streets",
      "Fes' medieval medina, souks, and tanneries",
      "Sahara dunes, palm oases, ancient kasbahs",
      "Jemaa el-Fna, Africa's busiest public square",
    ],
    itinerary: [
      { day: 1, title: "Casablanca → Chefchaouen via Rabat", description: "Explore the Hassan II Mosque, Rabat's Chellah Necropolis, Bab Oudaia gate, Hassan Tower, and the Mausoleum of Mohamed V, then continue to Chefchaouen for a sunset hike to the abandoned Spanish Mosque." },
      { day: 2, title: "Chefchaouen → Fes via Volubilis & Meknes", description: "Visit the Volubilis Roman ruins, explore Meknes's Bab al-Mansour gate and the Mausoleum of Moulay Ismail, then ascend to the Merenid Tombs for city views at dusk before staying in a traditional riad in Fes." },
      { day: 3, title: "Full Day Fes Medina Exploration", description: "Enter through Bab Boujeloud gate, follow Talâa Kebira street, visit the Chouara Tannery, tour the 14th-century Al Attarine Madrasa and Al-Qarawiyyin University, with an optional Moroccan cooking class." },
      { day: 4, title: "Journey to Sahara – Erfoud, Merzouga & Erg Chebbi", description: "Travel through the Middle Atlas and cedar forests, stop in Midelt, traverse the Ziz Valley, reach Erfoud, then Merzouga for a camel ride through the Erg Chebbi dunes, desert camp dinner, and sunset viewing." },
      { day: 5, title: "Desert Village & Todra Gorge", description: "Sunrise sandboarding, a visit to Khemliya village for Gnawa musicians, the Rissani market, then Tinghir for Todra Gorge hiking and river relaxation, passing the Valley of a Thousand Kasbahs and Ouarzazate's film studios." },
      { day: 6, title: "Aït Benhaddou → Marrakech via High Atlas", description: "Tour the UNESCO-listed ksar of Aït Benhaddou, ascend the High Atlas via Tizi n'Tichka Pass with views of Mount Toubkal, and spend the evening in Marrakech at Jemaa el-Fna." },
      { day: 7, title: "Marrakech Cultural Immersion & Departure", description: "Explore the Koutoubia Mosque and gardens, wander the maze-like souks, visit the Ben Youssef Madrasa, then transfer to the airport in the evening." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Casablanca",
  },
  {
    slug: "8-days-tour-from-casablanca",
    title: "8 Days Tour from Casablanca",
    departureCity: "Casablanca",
    days: 8,
    nights: 7,
    summary:
      "Morocco's diverse landscapes across eight days: the blue-painted streets of Chefchaouen, ancient Roman ruins, and imperial cities before culminating in Marrakech, blending cultural discovery, natural beauty, and traditional hospitality.",
    highlights: [
      "Hassan II Mosque architectural tour in Casablanca",
      "Chefchaouen's blue-painted lanes",
      "Volubilis Roman ruins, a UNESCO World Heritage Site",
      "Meknes imperial gates and the Moulay Ismail Mausoleum",
      "Fes medina exploration with a local guide",
      "Camel trekking across Erg Chebbi dunes",
      "Todra Gorge hiking and Dades Valley",
      "Ouarzazate film studios and Aït Benhaddou",
      "Marrakech souks, Koutoubia Mosque, Majorelle Garden, and Jemaa el-Fna square",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Casablanca & Transfer to Chefchaouen", description: "A guided Hassan II Mosque visit, then northward to Chefchaouen, exploring its blue-washed buildings, a 15th-century kasbah, mint tea, and sunset from the abandoned Spanish Mosque." },
      { day: 2, title: "Chefchaouen to Fes via Volubilis & Meknes", description: "Morning exploration of Chefchaouen, then the Volubilis UNESCO ruins with their intricate mosaics, followed by Meknes's Bab al-Mansour gate and Mausoleum of Moulay Ismail before Fes riad accommodation." },
      { day: 3, title: "Guided Exploration of Fes", description: "A local guide-led medina tour with ornate mosaics and grand palaces, visiting the Al Quaraouiyine Mosque and University and the Bou Inania Madrasa." },
      { day: 4, title: "Fes to Merzouga via Middle Atlas Mountains", description: "Travel through the cedar forests of the Middle Atlas, spot Barbary macaques, traverse the Ziz Valley's palm groves, stop in Erfoud, then a sunset camel trek across the Erg Chebbi dunes to the desert camp." },
      { day: 5, title: "Merzouga to Dades Valley via Todra Gorge", description: "Early desert sunrise and sandboarding, a visit to Khemliya village and the Rissani market, then the dramatic Todra Gorge before settling in Dades Valley." },
      { day: 6, title: "Drive to Marrakech via Ouarzazate and Aït Benhaddou", description: "Journey through the Valley of a Thousand Kasbahs, pass the Kelâa M'Gouna rose gardens, visit the Ouarzazate film studio, tour Aït Benhaddou, and cross the High Atlas Mountains." },
      { day: 7, title: "Discover Marrakech with Local Guide", description: "\"Red City\" exploration including the Koutoubia Mosque, colorful souks, the Bahia Palace, Majorelle Garden, the Saadian Tombs, and Jemaa el-Fna square." },
      { day: 8, title: "Departure from Marrakech", description: "A final breakfast followed by an airport transfer, concluding the tour." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Casablanca",
  },
  {
    slug: "5-days-tour-from-casablanca",
    title: "Unforgettable 5 Days Tour From Casablanca",
    departureCity: "Casablanca",
    days: 5,
    nights: 4,
    summary:
      "A fast five days from Casablanca through Rabat and Fes to a night in the Merzouga dunes, then Todra Gorge and Ouarzazate's film studios before Marrakech.",
    highlights: [
      "Casablanca's iconic sites",
      "Rabat's royal heritage and coastal charm",
      "Fes' medina, ancient tanneries, and Al-Qarawiyyin University",
      "The Atlas Mountains, cedar forests, and mineral-rich Midelt",
      "Fossil workshops in Erfoud and lively markets in Rissani",
      "Camel trek and overnight in Merzouga's Sahara desert camp",
      "Khamlia village and a Berber family lunch",
      "The stunning Todra Gorge and Dades Valley",
      "Ouarzazate's film studios",
      "The Tizi n'Tichka mountain pass to Marrakech",
    ],
    itinerary: [
      { day: 1, title: "Casablanca – Rabat – Fes", description: "Explore Casablanca's landmarks, visit Rabat's cultural sites, then delve into Fes through the Royal Palace, Jewish Quarter, Al-Qarawiyyin University, renowned tanneries, and the Mausoleum of Idriss, with dinner and breakfast at a traditional riad." },
      { day: 2, title: "Fes – Azrou – Midelt – Erfoud – Rissani – Merzouga", description: "Cross the Atlas Mountains, visit cedar forests and Barbary macaques in Azrou, continue through mineral-rich Midelt and the Ziz Valley, explore Erfoud's fossil industries and Rissani's markets, ending the day in Merzouga." },
      { day: 3, title: "Merzouga Desert", description: "Visit Khamlia village for traditional Gnawa musicians, share lunch with a Berber family, then a camel trek through the dunes of Merzouga to your desert camp for a night under the stars." },
      { day: 4, title: "Merzouga – Rissani – Todra Gorge – Dades Gorge", description: "An early camel ride back to Merzouga village, visit Rissani's souk, hike Todra Gorge's canyon walls, and arrive at Dades Gorge for the night." },
      { day: 5, title: "Dades Gorge – Ouarzazate – Ait Ben Haddou – Marrakech", description: "Visit the film studios in Ouarzazate, drive via Tizi n'Tichka Pass with panoramic Atlas views, and arrive in Marrakech where the private tour concludes." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Casablanca",
  },
  {
    slug: "10-days-tour-from-tangier",
    title: "10-Day Desert Tour from Tangier through Morocco",
    departureCity: "Tangier",
    days: 10,
    nights: 9,
    summary:
      "Morocco's diverse landscapes, vibrant culture, and historic treasures: from coastal Tangier through the Rif Mountains to Chefchaouen, the imperial cities of Meknes and Fes, the Sahara Desert, and gorges and valleys, concluding in Marrakech.",
    highlights: [
      "Arrival and city tour of Tangier with panoramic views",
      "The blue-washed streets and artisan crafts of Chefchaouen",
      "UNESCO Roman ruins at Volubilis and imperial Meknes landmarks",
      "Fes' historic medina, tanneries, and Al-Qarawiyyin University",
      "Camel trekking and overnight desert camping in Merzouga's Erg Chebbi dunes",
      "4×4 desert excursions, Gnawa cultural encounters, and nomadic village visits",
      "The stunning Todra and Dades Gorges",
      "Ouarzazate film studios and the UNESCO-listed Ait Benhaddou Kasbah",
      "The High Atlas Mountains to Marrakech",
      "Marrakech's Majorelle Garden, Saadian Tombs, and lively souks",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Tangier & City Highlights", description: "A warm welcome at the port or airport, discovering the historic Kasbah, the vibrant medina, and panoramic views of the Strait of Gibraltar." },
      { day: 2, title: "Tangier to Chefchaouen via the Rif Mountains", description: "Travel through lush mountains, passing Tetouan before reaching Chefchaouen, wandering its tranquil blue streets and artisanal shops." },
      { day: 3, title: "Chefchaouen to Fes with stops at Volubilis and Meknes", description: "Journey toward Fes with stops at the Roman ruins of Volubilis and Meknes landmarks including the Bab El Mansour gate and the granaries of Sultan Moulay Ismail." },
      { day: 4, title: "Full-Day Guided Tour of Fes", description: "Navigate the medina maze, visit Al-Qarawiyyin University, observe traditional leather tanning, explore the Jewish Quarter, and enjoy panoramic views." },
      { day: 5, title: "Fes to Merzouga Desert via Ifrane and Midelt", description: "Depart through Ifrane, Azrou's cedar forests, and Midelt to the palm-lined Ziz Valley, then experience a camel trek into the Erg Chebbi dunes and a night in a traditional Berber desert camp." },
      { day: 6, title: "Merzouga Desert Exploration and 4×4 Adventure", description: "A magical desert sunrise, followed by 4x4 excursions visiting Gnawa villages, meeting nomadic families, exploring the Rissani market, sandboarding, and stargazing." },
      { day: 7, title: "Merzouga to Dades Gorges via Todra Gorge", description: "Journey through Rissani and Erfoud, continuing to the dramatic Todra Gorge before an overnight surrounded by the Dades Gorges." },
      { day: 8, title: "Dades Gorges to Marrakech via Ait Benhaddou", description: "Travel through the scenic Dades and Rose Valleys to Ouarzazate, visiting the UNESCO-listed Kasbah of Ait Benhaddou, then cross the High Atlas via Tizi n'Tichka Pass to Marrakech." },
      { day: 9, title: "Guided Tour of Marrakech", description: "Discover the Majorelle Gardens, the Koutoubia Mosque, the Saadian Tombs, and the Bahia Palace, then explore the souks and Jemaa el-Fnaa square." },
      { day: 10, title: "Departure from Marrakech", description: "Free time before your transfer to Marrakech Airport." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Tangier",
  },
  {
    slug: "6-days-tour-from-tangier",
    title: "6 Days Tour From Tangier",
    departureCity: "Tangier",
    days: 6,
    nights: 5,
    summary:
      "From Tangier's port through the Rif Mountains, historic medinas, desert adventure, and the Atlas range, concluding in Marrakech.",
    highlights: [
      "A scenic drive through the Rif Mountains to Chefchaouen",
      "Guided exploration of Fes' historic medina",
      "Passage across the Middle Atlas Mountains to the Merzouga desert",
      "A sunset camel trek in the Erg Chebbi dunes and a night in a desert camp",
      "The Todra Gorges and Dades Valley",
      "The UNESCO-listed Kasbah of Ait Ben Haddou",
      "The High Atlas Mountains via traditional Berber villages",
      "Arrival in vibrant Marrakech",
    ],
    itinerary: [
      { day: 1, title: "Tangier to Chefchaouen", description: "Journey to the picturesque blue town of Chefchaouen, exploring the Kasbah fortress, the Ethnographic Museum, and panoramic mountain views." },
      { day: 2, title: "Chefchaouen to Fes", description: "Visit the Royal Palace, the Jewish quarter, and the UNESCO World Heritage Medina featuring the Al Quaraouiyine Mosque and ancient tanneries." },
      { day: 3, title: "Fes to Merzouga Desert", description: "Cross the Middle Atlas Mountains, visiting Ifrane and cedar forests, then journey through the Ziz Valley before a camel caravan to Erg Chebbi for an overnight desert camp." },
      { day: 4, title: "Merzouga to Ouarzazate", description: "Sunrise viewing and a return for breakfast, then fossil workshops and the breathtaking Todra Gorges before passing through the Dades and Roses Valleys." },
      { day: 5, title: "Ouarzazate to Marrakech", description: "An optional film studios visit, then Ait Ben Haddou, a UNESCO World Heritage site featured in numerous films, before crossing the High Atlas via Tizi Ntichka Pass to Marrakech." },
      { day: 6, title: "Marrakech Departure", description: "A leisurely morning in Marrakech before an airport transfer." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "Tangier",
  },
  {
    slug: "8-days-tour-from-tangier",
    title: "8-Day Andalusian Morocco Tour from Tangier",
    departureCity: "Tangier",
    days: 8,
    nights: 7,
    summary:
      "A northern loop with no desert leg: Tangier's port and medina, Andalusian-influenced Tetouan, the blue lanes of Chefchaouen, the Volubilis Roman ruins, and the imperial cities of Meknes, Fez, and Rabat.",
    highlights: [
      "A panoramic city tour and cultural exploration of Tangier",
      "Tetouan, Morocco's most Andalusian-influenced city",
      "The iconic blue streets of Chefchaouen",
      "Meknes and its impressive Bab Mansour gate",
      "The vast Roman ruins of Volubilis",
      "A full-day guided tour of Fez's ancient medina",
      "Rabat, Morocco's capital, with its UNESCO-listed sites",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Tangier", description: "A panoramic drive around the city to take in its vibrant atmosphere before settling into your hotel." },
      { day: 2, title: "Full Day Tour of Tangier", description: "Visit the Kasbah, the tomb of the 14th-century traveler Ibn Battuta, the elegant Teatro Cervantes, the Grand Socco square, and the American Legation Museum." },
      { day: 3, title: "Tangier – Tetouan – Chefchaouen", description: "Discover Tetouan's Andalusian, Spanish, and modern architectural influences, then continue to Chefchaouen with its blue-and-white buildings and quaint alleys." },
      { day: 4, title: "Chefchaouen – Meknes – Volubilis – Fez", description: "Travel toward Fez with stops in Meknes, with its grand walls and gates, and Volubilis, Morocco's largest and best-preserved archaeological site." },
      { day: 5, title: "Full-Day Guided Tour of Fez", description: "Begin at Bab Boujloud Gate and visit the Bou Inania Medersa, the bustling souks, the Nejjarine Museum of Wooden Arts and Crafts, and the Al Quaraouiyine Mosque." },
      { day: 6, title: "Fez – Rabat", description: "A scenic drive to Rabat to explore the Kasbah of the Udayas, the Andalusian Gardens, the Hassan Tower, and the Mausoleum of Mohammed V." },
      { day: 7, title: "Rabat – Tangier", description: "Travel back to Tangier via highway, checking into your hotel for a restful evening." },
      { day: 8, title: "Departure from Tangier", description: "Transfer to Tangier Airport according to your flight schedule." },
    ],
    included: [
      "Private transport (4x4 or minivan) with an English-speaking driver-guide",
      "Accommodation as specified in the itinerary (hotels, riads)",
      "All activities and guided visits mentioned in the itinerary",
    ],
    excluded: genericExcluded,
    meetingPoint: "Tangier",
  },
  {
    slug: "8-days-tour-from-fes",
    title: "8 Days Tour from Fes",
    departureCity: "Fes",
    days: 8,
    nights: 7,
    summary:
      "An extended exploration of the Sahara Desert from Fes to Marrakech: the diverse landscapes of southeastern Morocco, Berber nomad traditions, ancient kasbahs, and vibrant culture.",
    highlights: [
      "A full-day guided exploration of Fes's UNESCO-listed Medina",
      "The Middle Atlas Mountains with cedar forests and Barbary macaques",
      "Sahara Desert camel trekking across Erg Chebbi dunes at sunset",
      "A traditional Berber desert camp overnight under the stars",
      "The Rissani market town and Erfoud fossil workshops",
      "The Todra Gorges and Dades Valley",
      "The Valley of Roses and Skoura oasis",
      "The Ouarzazate film studio and Ait Ben Haddou UNESCO Kasbah",
      "The High Atlas Mountains via the Tichka Pass",
      "Marrakech's Koutoubia Mosque, Saadian Tombs, Majorelle Gardens, and souks",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Fes", description: "A warm welcome and transfer to your hotel, with dinner included." },
      { day: 2, title: "Full Day Guided Tour of Fes", description: "Explore the UNESCO Medina, the Royal Palace's Golden Gate, the Jewish quarter, the tanneries, Al Quaraouiyine university, Nejjarine Square, and the souks." },
      { day: 3, title: "Fes to Merzouga via Middle Atlas Mountains", description: "A scenic drive through the Middle Atlas passing Ifrane, visiting Azrou's cedar forest for Barbary macaques, and traversing the Ziz Valley's palm groves before arriving in Merzouga near sunset." },
      { day: 4, title: "Exploring the Sahara Desert", description: "Explore the towering dunes of Erg Chebbi, visit a Berber nomadic family, take a desert oasis walk, then a sunset camel trek and an evening of Berber music, campfire, and stargazing." },
      { day: 5, title: "Merzouga to Dades Gorge via Rissani and Todra Gorges", description: "An early sunrise, then travel to the market town of Rissani, Erfoud's fossil capital, and the dramatic Todra Gorges, overnighting in Dades Valley." },
      { day: 6, title: "Dades Valley to Marrakech via Kasbahs and Ouarzazate", description: "Journey through the fragrant Valley of Roses and the Skoura oasis, visit the Ouarzazate film studio and the Ait Ben Haddou Kasbah, then cross the Tichka Pass through the High Atlas Mountains." },
      { day: 7, title: "Discover Marrakech", description: "A local guide leads you through the Koutoubia Mosque, the Saadian Tombs, the Majorelle Gardens, the Bahia Palace, and Jemaa el-Fnaa Square." },
      { day: 8, title: "Departure", description: "Transfer to Marrakech Airport for your onward journey." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "6-days-tour-from-fes",
    title: "6 Days Morocco tour from Fes",
    departureCity: "Fes",
    days: 6,
    nights: 5,
    summary:
      "A carefully curated journey blending history, art, gastronomy, and scenic beauty: the traditions of Fes, the blue alleys of Chefchaouen, the Roman ruins of Volubilis, and wellness experiences like a cooking class and hammam.",
    highlights: [
      "Fes's historic charm as one of the oldest Arab world cities",
      "Chefchaouen's magical blue town in the Rif Mountains",
      "Volubilis's majestic ruins and Meknes's imperial grandeur",
      "A traditional Moroccan cooking class",
      "A luxurious hammam and massage",
      "Authentic Moroccan riads",
      "Professional English-speaking guides and drivers",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Fes – A Warm Moroccan Welcome", description: "A warm welcome and transfer to an elegant riad, with an evening dinner featuring aromatic spices and rich local flavors." },
      { day: 2, title: "Full-Day Fes Exploration – Unraveling the Medina's Mysteries", description: "A guided discovery of the UNESCO-listed Fes el-Bali Medina, the Bou Inania Madrasa, world-renowned tanneries, and artisan quarters for leatherwork, pottery, and brassware." },
      { day: 3, title: "Day Trip to Chefchaouen – The Blue Pearl of Morocco", description: "Journey north through the Rif Mountains to Chefchaouen, wandering cobbled lanes, browsing artisan shops, and enjoying lunch in a traditional café." },
      { day: 4, title: "History Tour to Meknes & Volubilis – A Journey Through Time", description: "Explore Meknes's monumental gates and royal granaries, then Volubilis, once a thriving Roman city, viewing mosaics, columns, and bathhouses." },
      { day: 5, title: "Moroccan Cooking Class & Hammam Experience – A Day of Indulgence", description: "A hands-on Moroccan cooking workshop learning dishes like tagine, pastilla, or harira soup, followed by a traditional hammam bath and massage." },
      { day: 6, title: "Departure from Fes – Farewell to Morocco", description: "A relaxed morning before your driver transfers you to the airport." },
    ],
    included: [
      "Private transport (4x4 or minivan) with an English-speaking driver-guide",
      "Accommodation as specified in the itinerary (riads and hotels)",
      "A Moroccan cooking class",
      "A hammam and massage session",
      "All guided visits mentioned in the itinerary",
    ],
    excluded: genericExcluded,
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "7-days-tour-from-fes",
    title: "7 Days Tour from Fes",
    departureCity: "Fes",
    days: 7,
    nights: 6,
    summary:
      "From the alpine town of Ifrane through the sweeping dunes of the Sahara Desert, vibrant souks, historic kasbahs, and UNESCO World Heritage sites, with natural wonders and cultural discoveries throughout.",
    highlights: [
      "Cedar forest scenic drives in Ifrane and Azrou",
      "An authentic regional lunch in Zaida",
      "An overnight mountain stay in Midelt",
      "A sunset camel ride across Erg Chebbi dunes",
      "A traditional Berber dinner with live desert music",
      "A sunrise palm grove camel trek in Tafilalet",
      "Todra Gorges walking excursions",
      "The Rose Valley and Dades Valley",
      "The ancient Telouet Kasbah and High Atlas crossing",
      "Casablanca's Hassan II Mosque",
      "Rabat's Udaya Kasbah and Hassan Tower",
      "Meknes sightseeing and the Volubilis Roman ruins",
    ],
    itinerary: [
      { day: 1, title: "Fes to Midelt", description: "Departure through the scenic landscapes of Ifrane and Azrou, spotting wild monkeys, with lunch in Zaida before arriving at the peaceful mountain town of Midelt." },
      { day: 2, title: "Midelt to Merzouga Desert", description: "Travel through Errachidia and Rissani to Merzouga, including a camel ride across the Erg Chebbi dunes at sunset, with local cuisine and Berber music." },
      { day: 3, title: "Merzouga to Dades Gorges", description: "A sunrise camel trek back from the dunes, then a journey through the palm groves of Tafilalet and a walk amid the towering cliffs of Toudra Gorges before reaching Dades Gorges." },
      { day: 4, title: "Dades Gorges to Ait Ben Haddou", description: "Travel through the Rose and Dades valleys and the Skoura oasis, often called the Valley of a Thousand Kasbahs, to the UNESCO World Heritage site of Ait Ben Haddou." },
      { day: 5, title: "Ait Ben Haddou to Marrakech", description: "Revisit the Ait Ben Haddou kasbah, journey to the Telouet Kasbah, then cross the High Atlas Mountains via the Tizi-n-Tichka Pass to Marrakech." },
      { day: 6, title: "Marrakech to Rabat via Casablanca", description: "Explore Casablanca including Mohamed V Square and the Hassan II Mosque, then continue to Rabat to visit the Kasbah of Udaya and the Hassan Tower." },
      { day: 7, title: "Rabat to Fes via Meknes and Volubilis", description: "Marvel at the Volubilis Roman ruins, then visit Meknes to see the Mausoleum of Moulay Ismail and monumental gates like Bab El-Mansour." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "4-days-tour-from-fes-to-marrakech",
    title: "Perfect 4 Days Tour from Fes to Marrakech via Merzouga",
    departureCity: "Fes",
    days: 4,
    nights: 3,
    featured: true,
    summary:
      "A fascinating blend of imperial cities, striking landscapes, and authentic Berber culture, journeying from Fes to Marrakech via the Sahara Desert.",
    highlights: [
      "The scenic route from Fes to Marrakech through the Moroccan Sahara",
      "Camel rides across the magical dunes of Erg Chebbi",
      "A golden desert sunset and a Berber-style camp beneath the stars",
      "Connecting with local Berbers and desert life",
      "Iconic adobe kasbahs and the UNESCO-listed Ait Ben Haddou",
      "The High Atlas Mountains via the Tizi n'Tichka pass",
    ],
    itinerary: [
      { day: 1, title: "Fes → Ifrane → Azrou → Midelt → Ziz Valley → Merzouga", description: "After breakfast at your Fes riad, a driver-guide takes you through Ifrane, the alpine \"Switzerland of Morocco,\" and the cedar woodlands of Azrou to observe Barbary macaques. After lunch in Midelt, the landscape transforms into the Ziz Valley's lush palm groves and mud-brick villages, arriving at a Merzouga desert lodge by late afternoon." },
      { day: 2, title: "Merzouga Excursion → Camel Ride → Erg Chebbi Desert Camp", description: "A 4x4 desert excursion visits Khamlia village, where the Gnaoua people share their music and stories over tea, plus fossil hunting and dune exploration. The afternoon features a peaceful trek across the Erg Chebbi dunes with sunset viewing, dinner under the stars, and traditional Berber drumming around the campfire." },
      { day: 3, title: "Merzouga → Rissani → Tinghir Oasis → Todgha Gorges → Boumalne Dades", description: "Early risers can climb a dune for sunrise over the Sahara. The route includes Rissani, once a trading hub and home to the Alawite dynasty's founder, and Tinghir, a charming oasis town, before walking through palm groves to the Todgha Canyons, with sheer rock walls rising 400 meters high." },
      { day: 4, title: "Boumalne Dades → Rose Valley → Skoura → Ait Ben Haddou → Marrakech", description: "The journey traverses the Valley of the Roses, filled with the scent of blooming Damascus roses in spring, and a local distillery visit. The Skoura Oasis features the 17th-century Kasbah Amridil, and Ait Ben Haddou, a UNESCO World Heritage Site, has appeared in films including Gladiator and Game of Thrones. The tour concludes via the winding Tizi n'Tichka pass, arriving in Marrakech by early evening." },
    ],
    included: [
      "Driver-guide services throughout",
      "Accommodation as specified per day",
      "Dinner and breakfast daily",
      "Camel trekking experiences",
      "4x4 desert excursions",
      "Guided visits to cultural sites",
    ],
    excluded: genericExcluded,
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "5-days-tour-from-fes-to-marrakech",
    title: "5 Days Tour from Fes to Marrakech",
    departureCity: "Fes",
    days: 5,
    nights: 4,
    summary:
      "Fes to Marrakech in five days via the Sahara: the Middle Atlas cedar forests, a night camping in the Erg Chebbi dunes, Todra and Dades gorges, and Aït Ben Haddou.",
    highlights: [
      "The scenic Middle Atlas Mountains en route to the Sahara",
      "A camel trek through the dunes of Erg Chebbi at sunset",
      "A night in a traditional Berber desert camp under the stars",
      "The towering cliffs of Todgha Gorges and the Dades Valley",
      "The historic Ait Ben Haddou, a UNESCO World Heritage Site",
      "The Tizi n'Tichka Pass in the High Atlas Mountains",
      "The vibrant atmosphere of Marrakech's historic landmarks",
    ],
    itinerary: [
      { day: 1, title: "Fes – Ifrane – Azrou – Midelt – Errachidia – Erfoud – Merzouga Desert", description: "Journey through the Middle Atlas toward Merzouga via Ifrane and Azrou's cedar forest, with lunch in Midelt, then Erfoud and Merzouga, ending with a sunset trek into the Erg Chebbi dunes and camp dinner with Berber music." },
      { day: 2, title: "Merzouga – Tinghir – Todgha Gorges – Boumalne Dades", description: "Travel through desert landscapes to Tinghir, known for its palm groves and oasis, then the dramatic Todgha Gorges with 300-meter-high limestone cliffs, before crossing the Dades Valley to Boumalne Dades." },
      { day: 3, title: "Boumalne Dades – Rose Valley – Ouarzazate", description: "Visit cooperatives featuring traditional rose water distillation in the Valley of Roses, then Ouarzazate, the \"Hollywood of Africa,\" with its Atlas Film Studios." },
      { day: 4, title: "Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech", description: "Explore Ait Ben Haddou, a historic ksar and UNESCO site, then cross the High Atlas Mountains via the Tizi n'Tichka pass, passing Berber villages, before arriving in Marrakech." },
      { day: 5, title: "Explore Marrakech – End of Tour", description: "A local guide leads a cultural city tour visiting Jemaa el-Fnaa Square, the Koutoubia Mosque, Majorelle Garden, Bahia Palace, and Saadian Tombs." },
    ],
    included: [
      "All accommodations (desert camp, hotels, riads)",
      "All meals (dinner and breakfast daily)",
      "Camel trekking and desert camp experience",
      "Professional guide services",
      "Transportation throughout",
    ],
    excluded: genericExcluded,
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "10-days-grand-tour-from-marrakech",
    title: "10 Days Grand Tour from Marrakech",
    departureCity: "Marrakech",
    days: 10,
    nights: 9,
    summary:
      "The renowned Kasbah Trail: remote Berber villages in the High Atlas Mountains, the endless dunes of the Sahara, ancient kasbahs, UNESCO sites, imperial cities, and Chefchaouen, blending awe-inspiring nature with deep cultural discovery.",
    highlights: [
      "Crossing the High Atlas Mountains and Tizi n'Tichka Pass",
      "The UNESCO-listed Ait Ben Haddou",
      "An overnight in the scenic Dades Gorges",
      "A sunset camel trek through the Erg Chebbi dunes in Merzouga",
      "Sandboarding and campfire music under the stars",
      "Nomadic Berber families",
      "Fes and Chefchaouen's winding alleys",
      "The Roman ruins at Volubilis",
      "Imperial sites in Rabat and Casablanca",
      "Essaouira and vibrant Marrakech",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Marrakech", description: "Airport pickup and check-in at your riad or hotel in the medina, with the evening free to absorb the Red City's atmosphere." },
      { day: 2, title: "Marrakech to Dades Valley", description: "Ascend the High Atlas Mountains via scenic Berber villages and the Tizi n'Tichka pass, explore Ait Ben Haddou, then continue through Ouarzazate and the Valley of Roses to Boumalne Dades." },
      { day: 3, title: "Dades to Merzouga Desert", description: "Visit the dramatic Todra Gorges, travel through palm oases to Erfoud, then a camel ride into the Erg Chebbi dunes at sunset and a desert camp with dinner and drumming." },
      { day: 4, title: "Merzouga to Fes", description: "An early sunrise, then a journey north through Rissani and the Ziz Valley, lunch in Midelt, and cedar forests near Azrou before arriving in Fes." },
      { day: 5, title: "Fes City Tour", description: "A local guide-led exploration of the Royal Palace gates, the medieval Jewish quarter, historic mosques and madrasas, the Al-Qarawiyyin University, and the Chouara Tannery." },
      { day: 6, title: "Fes to Chefchaouen", description: "Travel northwest to Volubilis, then through the Rif Mountains to Chefchaouen, known for its blue-painted streets." },
      { day: 7, title: "Chefchaouen to Casablanca", description: "Head west to Rabat to visit the Hassan Tower and the Kasbah of the Udayas, then continue to Casablanca." },
      { day: 8, title: "Casablanca to Marrakech", description: "Visit the Hassan II Mosque, then travel to the Atlantic coast at Essaouira before returning inland to Marrakech." },
      { day: 9, title: "Marrakech City Tour", description: "A guided exploration of the Koutoubia Mosque, the Bahia Palace, the Saadian Tombs, the medina souks, Jemaa el-Fnaa square, and the Majorelle Garden." },
      { day: 10, title: "Departure", description: "Breakfast at your riad, then an airport transfer based on your flight time." },
    ],
    included: [
      "Accommodations (riads/hotels)",
      "Meals as specified in the itinerary",
      "Camel trekking",
      "Desert camp experience",
      "Local guided tours in Fes and Marrakech",
    ],
    excluded: genericExcluded,
    meetingPoint: "Marrakech",
  },
  {
    slug: "4-days-desert-tour-from-marrakech-to-fes",
    title: "4 Days Desert Tour from Marrakech to Fes",
    departureCity: "Marrakech",
    days: 4,
    nights: 3,
    featured: true,
    summary:
      "Marrakech to Fes in four days via the desert, with a free day in Merzouga to pick your own activities — sandboarding, quad biking, or just resting after the dunes — before heading north.",
    highlights: [
      "A scenic drive through the High Atlas Mountains via Tizi n'Tichka Pass",
      "A guided visit to Ait Ben Haddou, a UNESCO World Heritage Site",
      "Ouarzazate film studios and ancient kasbahs",
      "Camel rides in Zagora and Erg Chebbi dunes at Merzouga",
      "The Dades Valley and Todra Gorge",
      "A desert camp overnight with live music and campfire entertainment",
      "The Ziz Valley and Middle Atlas cedar forests",
      "A stop in alpine-style Ifrane en route to Fes",
    ],
    itinerary: [
      { day: 1, title: "Marrakech – Ait Ben Haddou – Skoura – Dades Valley", description: "Morning pickup from Marrakech, then travel through the High Atlas Mountains via the Tizi n'Tichka Pass to the legendary ksar of Ait Ben Haddou, followed by lunch in Ouarzazate and the lush oasis of Skoura and the Valley of Roses before Dades Valley." },
      { day: 2, title: "Dades – Tinghir – Todra Gorge – Erfoud – Merzouga", description: "Stop in the Berber town of Tinghir to walk through the Todra Oasis and Gorges, then continue through desert landscapes to Erfoud and Rissani, reaching Merzouga by afternoon for a camel caravan across the Erg Chebbi dunes and a desert camp with traditional dinner and Berber music." },
      { day: 3, title: "Merzouga Leisure Day – Activities & Relaxation", description: "A day to experience the desert at your own pace, with optional quad biking, sandboarding, or 4x4 dune excursions at your own expense, followed by dinner and an overnight stay in a local hotel/riad." },
      { day: 4, title: "Merzouga – Midelt – Ifrane – Fes", description: "Catch the sunrise over the dunes, then a scenic drive north toward Fes through the Ziz Valley, lunch in Midelt, the cedar forests of the Middle Atlas, and a stop in Ifrane before arriving in Fes by early evening." },
    ],
    included: [
      "Dinner and breakfast at all overnight accommodations (Days 1–3)",
      "Desert camp experience with entertainment",
      "Guided visits to major sites",
      "Accommodation throughout (hotel/guesthouse/desert camp)",
      "Transportation and camel rides",
    ],
    excluded: ["Optional desert activities on Day 3 (quad biking, sandboarding, 4x4 excursions) at your own expense"],
    meetingPoint: "Marrakech",
  },
  {
    slug: "3-days-desert-tour-from-fes-to-merzouga",
    title: "3 Days Desert Tour from Fes to Merzouga",
    departureCity: "Fes",
    days: 3,
    nights: 2,
    summary:
      "Morocco's natural beauty and cultural heritage, from the green cedar forests of the Middle Atlas to the golden dunes of the Sahara and the ancient kasbahs of southern Morocco, ending in Marrakech.",
    highlights: [
      "Barbary macaques and cedar forests in the Middle Atlas Mountains",
      "Camel trekking across Erg Chebbi dunes with sunset viewing",
      "A night under the stars at a Merzouga Sahara desert camp",
      "Tinghir's palm groves and Todgha Gorges",
      "The Road of a Thousand Kasbahs and Rose Valley",
      "The UNESCO-listed Ait Ben Haddou",
      "The High Atlas Mountains via the Tizi n'Tichka Pass",
    ],
    itinerary: [
      { day: 1, title: "Fes → Merzouga", description: "An early departure south through the fertile Saiss plains toward the Middle Atlas, stopping in Ifrane and Azrou's cedar forests, with lunch in Midelt and travel through the dramatic Ziz Valley. The evening includes a sunset camel trek and overnight camping with traditional tea, dinner, and live drumming." },
      { day: 2, title: "Merzouga → Dades Valley", description: "Sunrise viewing, breakfast, and a camel return, then a visit to Rissani, the cradle of the Alaouite dynasty, and Tinghir's green oasis with a walk along the Todgha river to dramatic canyons, continuing along the Road of a Thousand Kasbahs to a guesthouse in the Dades Valley." },
      { day: 3, title: "Dades Valley → Marrakech", description: "The scenic Valley of Roses with optional stops at rose cooperatives, the Skoura Oasis, and Ouarzazate, then Ait Ben Haddou, a fortified village featured in films including Gladiator and Game of Thrones, before crossing the High Atlas via Tizi n'Tichka Pass to Marrakech." },
    ],
    included: [
      "Professional English-speaking driver-guide",
      "Two nights accommodation (one Dades Valley lodge, one desert camp)",
      "Dinner and breakfast both nights",
      "Camel trekking experiences",
    ],
    excluded: genericExcluded,
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "8-days-tour-from-marrakech",
    title: "8 Days Tour from Marrakech",
    departureCity: "Marrakech",
    days: 8,
    nights: 7,
    summary:
      "A round-trip adventure from the vibrant streets of Marrakech to the snow-capped High Atlas Mountains, into the golden dunes of the Sahara, and through Fes before arriving in the enchanting blue town of Chefchaouen.",
    highlights: [
      "Marrakech's historic medina, colorful souks, and iconic landmarks",
      "The scenic High Atlas Mountains via Tizi n'Tichka pass",
      "The legendary Kasbah of Ait Ben Haddou, a UNESCO World Heritage Site",
      "The Valley of Roses and the Road of a Thousand Kasbahs",
      "The dramatic Todra Gorges and its lush palm oasis",
      "A camel trek and a night in a luxury Sahara desert camp",
      "Barbary macaques in the cedar forests near Ifrane",
      "The cultural and spiritual heritage of Fes",
      "The blue-hued beauty of Chefchaouen",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Marrakech", description: "A private driver greets you at Marrakech Airport and escorts you to your riad or hotel." },
      { day: 2, title: "Discovering Marrakech's Treasures", description: "Explore the city with a local guide, visiting the Majorelle Gardens, Koutoubia Mosque, Saadian Tombs, Bahia Palace, and Madrasa Ben Youssef, with an evening visit to Djemaa El Fna square." },
      { day: 3, title: "Marrakech – High Atlas – Ait Ben Haddou – Dades Valley", description: "Cross the High Atlas Mountains via Tizi n'Tichka pass, stop at Ait Ben Haddou, then continue through the Skoura Oasis and Rose Valley to Dades Valley." },
      { day: 4, title: "Dades – Todra Gorges – Merzouga Sahara", description: "A walk to the Todra Gorges, with dramatic limestone cliffs reaching up to 300 meters, then a camel caravan into the dunes at Merzouga just before sunset, with a luxury desert camp for the night." },
      { day: 5, title: "Merzouga – Ziz Valley – Midelt – Ifrane – Fes", description: "A desert sunrise and camel ride back, then travel through the Ziz Valley, lunch in Midelt, cedar forests near Azrou, and Ifrane, arriving in Fes by evening." },
      { day: 6, title: "Guided Tour of Fes – Drive to Chefchaouen", description: "A morning walking tour of Fes including the Royal Palace's golden gates, artisan quarters, Al Quaraouiyine University, Bou Inania Madrasa, and the famous tanneries, then an afternoon departure to Chefchaouen." },
      { day: 7, title: "Chefchaouen – Free Morning – Return to Fes", description: "A morning exploring Chefchaouen's peaceful blue streets and local cafés, with an option for a short hike to the Spanish Mosque, then an afternoon return to Fes." },
      { day: 8, title: "Transfer to Airport – Departure", description: "A driver transfers you to Fes Airport, or to Casablanca or Marrakech based on your travel plans." },
    ],
    included: [
      "Accommodations: luxury riads, boutique guesthouses, and a luxury desert camp",
      "Dinners and breakfasts as specified",
      "Guided tours in Marrakech and Fes",
      "Camel trekking in the Sahara",
    ],
    excluded: genericExcluded,
    meetingPoint: "Marrakech Airport",
  },
  {
    slug: "5-days-morocco-tour-from-marrakech-to-fes",
    title: "5 Days Morocco Tour from Marrakech to Fes",
    departureCity: "Marrakech",
    days: 5,
    nights: 4,
    summary:
      "From the colorful streets of Marrakech to the spiritual and cultural heart of Fes, traversing the High Atlas Mountains, ancient kasbahs, camel trekking through Erg Chebbi's dunes, and camping under the stars in the Sahara.",
    highlights: [
      "Crossing the High Atlas via Tizi n'Tichka Pass",
      "The UNESCO-listed Ksar Ait Ben Haddou",
      "Ouarzazate's cinema studios and Kasbah Amridil",
      "The Valley of Roses, Dades Valley, and Todra Gorges",
      "A camel trek in Erg Chebbi at sunset",
      "An overnight in a luxury or traditional desert camp with live Berber music",
      "The Ziz Valley and cedar forests",
      "Discovering Fes with a certified local guide",
    ],
    itinerary: [
      { day: 1, title: "Marrakech – Ait Ben Haddou – Ouarzazate", description: "Cross the High Atlas Mountains via Tizi n'Tichka pass to the historic Ksar Ait Ben Haddou, a UNESCO World Heritage Site, then continue to Ouarzazate with optional film studio visits." },
      { day: 2, title: "Ouarzazate – Kasbah Amridil – Dades Valley – Todra Gorge – Merzouga", description: "Visit the well-preserved Kasbah Amridil, drive through the Valley of Roses and Dades Valley, stop at the Todra Gorges, then reach Merzouga." },
      { day: 3, title: "Merzouga Region – Desert Villages – Camel Trek & Camp", description: "Explore the Gnawa village of Khamlia, meet nomadic families, enjoy a Berber pizza lunch, visit Rissani's souk, then mount camels for a sunset journey across the Erg Chebbi dunes to your desert camp." },
      { day: 4, title: "Merzouga – Ziz Valley – Midelt – Azrou Forest – Ifrane – Fes", description: "Watch the sunrise, then pass through Erfoud and Errachidia with a Ziz Valley viewpoint, continue to Midelt through cedar forests spotting Barbary macaques, and visit Ifrane before arriving in Fes." },
      { day: 5, title: "Full-Day Guided Tour of Fes", description: "A walking tour of the UNESCO-protected old medina covering the Karaouine Mosque and University and historic madrasas, the tanneries, artisan quarters, and the Mellah." },
    ],
    included: [
      "Dinner and breakfast daily",
      "Guided tours and activities as described",
      "Desert camp overnight experience",
      "Camel trekking",
    ],
    excluded: genericExcluded,
    meetingPoint: "Marrakech",
  },
  {
    slug: "3-days-private-desert-tour-from-marrakech-to-fes",
    title: "3 Days Private Desert Tour from Marrakech to Fes",
    departureCity: "Marrakech",
    days: 3,
    nights: 2,
    featured: true,
    summary:
      "Morocco's most iconic landscapes across the High Atlas Mountains, UNESCO-listed kasbahs, valleys, gorges, and the Sahara Desert, connecting the imperial cities of Marrakech and Fes.",
    highlights: [
      "Crossing the High Atlas Mountains via Tizi n'Tichka Pass",
      "The UNESCO Ksar of Ait Ben Haddou",
      "Ouarzazate and the Valley of Roses",
      "The Dades and Todra Gorges",
      "A camel ride in Erg Chebbi at sunset",
      "An overnight in a Berber desert camp",
      "Erfoud and the Ziz Valley",
      "A stop in Midelt and meeting Barbary macaques",
      "Ifrane, the \"Switzerland of Morocco\"",
      "Ending in the imperial city of Fes",
    ],
    itinerary: [
      { day: 1, title: "Marrakech – Ouarzazate – Ait Ben Haddou – Boumalne Dades", description: "A morning departure from Marrakech, ascending the Tizi n'Tichka pass through the High Atlas Mountains to the UNESCO World Heritage Site Ksar of Ait Ben Haddou, then Ouarzazate's film studios, the Oasis of Skoura, and the Valley of Roses before Dades Gorge." },
      { day: 2, title: "Boumalne Dades – Todra Gorges – Erfoud – Merzouga Desert Camp", description: "Travel toward Tinghir, then the Todra Gorges, with cliffs towering up to 300 meters, followed by Erfoud, the fossil capital of Morocco, and on to Merzouga, where camels carry you across the dunes of Erg Chebbi for a sunset trek and desert camp with Berber music." },
      { day: 3, title: "Merzouga Camp – Midelt – Ifrane – Fes", description: "A sunrise viewing over the dunes, breakfast, and a camel return, then the expansive Ziz Valley, lunch in Midelt, a cedar forest stop to meet Barbary macaques, and the charming town of Ifrane before arriving in Fes." },
    ],
    included: [
      "Dinner and breakfast on Days 1–2",
      "Camel trekking experiences",
      "Desert camp accommodation",
      "Traditional Berber music and campfire entertainment",
      "Guided visits to major sites",
    ],
    excluded: genericExcluded,
    meetingPoint: "Your riad or hotel in Marrakech",
  },
  {
    slug: "3-days-desert-tour-from-marrakech-to-merzouga",
    title: "3 Days Desert Tour from Marrakech to Merzouga",
    departureCity: "Marrakech",
    days: 3,
    nights: 2,
    featured: true,
    summary:
      "A compact yet immersive adventure through the High Atlas Mountains, cinematic kasbahs, lush valleys, dramatic gorges, and the golden dunes of Erg Chebbi.",
    highlights: [
      "Crossing the High Atlas via Tizi n'Tichka Pass with panoramic stops",
      "The UNESCO-listed Ait Ben Haddou kasbah",
      "Skoura and the Valley of Roses",
      "Kelaat M'Gouna for rose products",
      "The Todra Gorges with 300-meter canyon walls",
      "A fossil workshop in Erfoud",
      "A camel trek into the Erg Chebbi dunes at sunset",
      "A night in a traditional Berber desert camp",
      "Witnessing the desert sunrise",
      "Rissani, Alnif, and the Draa Valley oasis",
    ],
    itinerary: [
      { day: 1, title: "Marrakech – Ait Ben Haddou – Dades Gorge", description: "Departing early from Marrakech, ascend the High Atlas Mountains to Ksar Ait Ben Haddou, a UNESCO World Heritage Site, then follow the Road of a Thousand Kasbahs through Skoura and Kelaat M'Gouna to Dades Valley for the night, with local Berber cuisine." },
      { day: 2, title: "Dades Valley – Todra Gorges – Merzouga Desert", description: "Visit the Todra Gorges, where towering rock walls soar up to 300 meters and narrow to a canyon just 30 meters wide, then through Jorf's palm groves to Erfoud's fossil workshops, arriving in Merzouga for a camel trek across the Erg Chebbi dunes before sunset and an overnight in a desert tent with traditional music." },
      { day: 3, title: "Merzouga – Tizi N'Tfrkhine – Marrakech", description: "An early wake for the desert sunrise, a camelback return, then travel through the Tafilalet region and the historical town of Rissani, the remote villages of Alnif, Tazarine, and N'kob, the Anti-Atlas Mountains, and the Draa Valley's palm-lined oasis, with an Ouarzazate lunch stop before arriving in Marrakech." },
    ],
    included: [
      "Dinner and breakfast on Day 1",
      "Meals and traditional music experience on Day 2",
      "Breakfast on Day 3",
    ],
    excluded: genericExcluded,
    meetingPoint: "Marrakech",
  },
  {
    slug: "the-ultimate-10-day-morocco-tour-explore-ancient-medinas-timeless-landscapes",
    title: "The Ultimate 10-Day Morocco Desert Tour from Casablanca",
    departureCity: "Casablanca",
    days: 10,
    nights: 9,
    summary:
      "Culture, adventure, and relaxation across Marrakesh, the Sahara Desert, the Atlas Mountains, and coastal areas, with traditional music at desert campfires, Berber family stays, mountain hikes, and Essaouira seafood.",
    highlights: [
      "Camel rides across the Sahara dunes",
      "Sleeping in elegant Bedouin-style tents under the stars",
      "The Atlas Mountains",
      "Hiking among wildflowers in mountain foothills",
      "Jemaa el-Fna, the busiest square in Africa",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Casablanca", description: "Explore Morocco's largest city, including the Hassan II Mosque, an architectural marvel perched above the Atlantic, the Old Medina, Casablanca Cathedral, and Boulevard de la Corniche." },
      { day: 2, title: "Explore Rabat and Chefchaouen", description: "Discover Rabat's Chellah Necropolis, Kasbah des Oudaias, and Hassan Tower, then travel to Chefchaouen, the \"Blue City,\" ending at the abandoned Spanish Mosque for sunset views." },
      { day: 3, title: "Roman Ruins of Volubilis and Imperial Cities", description: "Visit Volubilis, a UNESCO-protected site with Morocco's best-preserved Roman ruins, then Meknes' Bab al-Mansour gate and Moulay Ismail's Mausoleum before arriving in Fes." },
      { day: 4, title: "Explore Fes Imperial City and Medieval Medina", description: "Navigate Fes el Bali through Bab Boujeloud gate, visit the Chouara Tannery and the Al-Qarawiyyin Mosque, founded in 859 CE." },
      { day: 5, title: "Into the Desert—Ifrane, Ziz Valley, and Sahara", description: "Ascend through the Middle Atlas Mountains, pass through the Ziz Valley's fortified ksars, and reach Merzouga and the Erg Chebbi dunes for a sunset camel trek." },
      { day: 6, title: "Exciting Desert Adventures Around Merzouga", description: "Explore Erg Chebbi by jeep, connect with nomads, visit the Gnawa House in Khemliya village, and try sandboarding or an ATV tour." },
      { day: 7, title: "Desert Towns, Oases, Todra Gorge, and Dades Valley", description: "Watch the sunrise over the dunes, visit Khemliya village and the Rissani market, explore Tinerhir's oasis, then descend to Todra Gorge's river before driving to Dades Valley." },
      { day: 8, title: "Dades Valley, Ouarzazate, Aït Benhaddou, and Marrakech", description: "Travel through the Valley of a Thousand Kasbahs, tour the Ouarzazate film studios, visit the Kasbah of Aït Benhaddou, and ascend the High Atlas via Tizi n'Tichka pass to Marrakech." },
      { day: 9, title: "Exploring the Red City", description: "Visit the Koutoubia Mosque, the Ben Youssef Madrasa, the Majorelle Gardens, Saadian Tombs, Bahia Palace, El Badi Palace, and Jemaa el-Fna." },
      { day: 10, title: "Return to Casablanca", description: "Return to Casablanca before catching your return flight." },
    ],
    included: [
      "Air-conditioned 4WD vehicle or minivan with fuel",
      "Qualified multilingual guide/driver",
      "Comprehensive sightseeing guidance",
      "8 nights in hotels/kasbahs/riads",
      "1 night in a Berber desert nomadic luxury camp",
      "1-hour camel ride (one per person)",
      "Meals as stated",
      "Sandboarding (free, optional)",
      "Traditional music live show in the desert",
    ],
    excluded: [
      "International airfare",
      "Visa charges",
      "Travel and medical insurance",
      "Personal expenses (shopping, laundry)",
      "Unlisted services or activities",
      "Emergency expenses",
    ],
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "the-ultimate-moroccan-adventure-sea-mountains-deserts-in-10-days",
    title: "The Ultimate Moroccan Adventure: Sea, Mountains & Deserts in 10 Days",
    departureCity: "Casablanca",
    days: 10,
    nights: 9,
    summary:
      "Ten days from Casablanca covering all four imperial cities, a night camping in the Erg Chebbi dunes, and the High Atlas — the full grand loop for travelers who want it all in one trip.",
    highlights: [
      "The intricate craftsmanship of the Hassan II Mosque",
      "The brilliant blue streets of Chefchaouen",
      "All four imperial cities: Rabat, Meknes, Fes, and Marrakech",
      "A camel ride over the dunes of the Sahara",
      "Sleeping under the stars in an elegant Bedouin-style tent",
      "The Atlas Mountains",
      "Jemaa el-Fna, the busiest square in Africa",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Casablanca", description: "Explore the Hassan II Mosque, the historic Old Medina, the Hobous district, and Boulevard de la Corniche." },
      { day: 2, title: "Explore Rabat and Chefchaouen", description: "Discover the Chellah Necropolis, Kasbah des Oudaias, Andalusian Gardens, and Hassan Tower, then continue to Chefchaouen, the \"Blue City.\"" },
      { day: 3, title: "Visit Roman Ruins of Volubilis and Imperial Cities of Meknes and Fes", description: "See the UNESCO-protected Roman city of Volubilis, then Meknes's Imperial City and medina before reaching Fes." },
      { day: 4, title: "Full Day To Explore the Imperial City and Medieval Medina", description: "Guided exploration of Fes el Bali, the Bab Boujeloude gate, vibrant souks, the Chouara Tannery, and the Al-Qarawiyyin Library and Mosque." },
      { day: 5, title: "Into the Desert: Ifrane, Ziz Valley and the Sahara Desert", description: "Ascend the Middle Atlas Mountains, stop in Midelt, the \"Apple City,\" descend through the Ziz Valley, then reach Merzouga for a camel ride to a Bedouin camp before sunset." },
      { day: 6, title: "Exciting Desert Adventures Around Merzouga", description: "Jeep exploration of Erg Chebbi's dunes, visiting local nomads and the Gnawa House in Khemliya village, with optional sandboarding or ATV tours." },
      { day: 7, title: "Desert Towns, Lush Oases, Todra Gorge and Dades Valley", description: "Explore Khemliya village, Rissani's market, Tinerhir's oasis, and the Todra Gorge, descending to the river's edge." },
      { day: 8, title: "Dades Valley, Ouarzazate, Aït Benhaddou and Marrakech", description: "Travel through the Valley of a Thousand Kasbahs, tour Ouarzazate's film studios, visit the Kasbah of Aït Benhaddou, ascend the High Atlas via Tizi n'Tichka pass with views of Mount Toubkal, and visit an argan oil cooperative before Marrakech." },
      { day: 9, title: "Exploring the Red City", description: "Visit the Koutoubia Mosque, the Ben Youssef Madrasa, the Majorelle Gardens, Saadian Tombs, Bahia Palace, El Badi Palace, and the Mellah, concluding at Jemaa el-Fna." },
      { day: 10, title: "Return to Casablanca", description: "A return journey to Casablanca with a refreshment stop before your return flight." },
    ],
    included: [
      "11 days air-conditioned 4WD vehicle or minivan",
      "Qualified multilingual local guide/driver",
      "Comprehensive sightseeing with guidance",
      "8 nights in hotels/kasbahs/riads",
      "1 night in a Berber desert nomadic luxury camp (private tent)",
      "1-hour camel ride (one per individual)",
      "Meals as specified",
      "Sandboarding (free and optional)",
      "Traditional music live performance in the desert",
    ],
    excluded: [
      "International airfare",
      "Visa charges",
      "Travel and medical insurance",
      "Personal expenses such as shopping and laundry",
      "Services not mentioned or promised",
      "Emergency expenses",
    ],
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "immerse-yourself-in-morocco-9-days-of-history-culture-and-adventure",
    title: "9 Days Grand Morocco Tour from Casablanca to Marrakech",
    departureCity: "Casablanca",
    days: 9,
    nights: 8,
    summary:
      "A tighter, nine-day version of the classic Casablanca grand loop — the same four imperial cities and a night in the Sahara dunes, condensed for travelers with a shorter window.",
    highlights: [
      "The Hassan II Mosque's intricate craftsmanship",
      "Chefchaouen's brilliant blue streets",
      "All four imperial cities",
      "Camel trekking over the Sahara dunes",
      "Sleeping under the stars in an elegant Bedouin-style tent",
      "The Atlas Mountains",
      "Jemaa el-Fna, Africa's busiest square",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Casablanca", description: "Explore the Hassan II Mosque, the Old Medina, the Hobous (New Medina), Casablanca Cathedral, and Boulevard de la Corniche." },
      { day: 2, title: "Explore Rabat and Chefchaouen", description: "Visit the Chellah Necropolis, Kasbah des Oudaias, and Hassan Tower in Rabat, then travel to Chefchaouen, the \"Blue City.\"" },
      { day: 3, title: "Roman Ruins of Volubilis and Imperial Cities", description: "Photograph the preserved Roman ruins of Volubilis, including the Labors of Hercules mosaics, then Meknes's Ville Impériale and Bab al-Mansour gate, before Fes." },
      { day: 4, title: "Full Day Exploring Fes", description: "Enter through the Bab Boujeloud gate onto Talâa Kebira, visiting vibrant souks, the Chouara Tannery, and the Al-Qarawiyyin Library and Mosque, founded in 859 CE." },
      { day: 5, title: "Into the Desert: Ifrane, Ziz Valley, and Sahara", description: "Journey south through the Middle Atlas, with a break in Midelt, then the Ziz Valley and Erfoud before Merzouga's dunes and a sunset camel trek to a Bedouin-style camp." },
      { day: 6, title: "Desert Towns, Oases, and Todra Gorge", description: "Sunrise, sandboarding or ATV rides, a visit to Khemliya village, the Rissani market, Tinerhir's oasis communities, and the Todra Gorge before Dades Valley." },
      { day: 7, title: "Dades Valley, Ouarzazate, Aït Benhaddou, and Marrakech", description: "Travel through the Valley of a Thousand Kasbahs and Kela'a M'gouna's rose fields, tour Ouarzazate, visit the Kasbah of Aït Benhaddou, and cross the High Atlas via Tizi n'Tichka pass to Marrakech." },
      { day: 8, title: "Exploring the Red City", description: "Visit the Koutoubia Mosque, the Ben Youssef Madrasa, the Majorelle Gardens, Saadian Tombs, Bahia Palace, El Badi Palace, and the Mellah, wandering the medina souks." },
      { day: 9, title: "Return to Casablanca", description: "A return trip to Casablanca with a refreshment stop before your return flight." },
    ],
    included: [
      "9-day air-conditioned 4WD vehicle or minivan",
      "Qualified multilingual local guide/driver",
      "Comprehensive sightseeing with guidance",
      "8 nights in hotels/kasbahs/riads",
      "1 night in a Berber desert luxury nomadic camp",
      "1-hour camel ride (one per individual)",
      "Meals as stated",
      "Sandboarding (free and optional)",
      "Traditional music live show in the desert",
    ],
    excluded: [
      "International airfare",
      "Visa charges",
      "Travel and medical insurance",
      "Personal expenses (shopping, laundry, etc.)",
      "Services not mentioned or promised by the agency",
      "Emergency expenses",
    ],
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
  {
    slug: "10-day-morocco-desert-adventure-from-marrakech-to-casablanca",
    title: "10-Day Morocco Desert Tour From Marrakech to Casablanca",
    departureCity: "Marrakech",
    days: 10,
    nights: 9,
    summary:
      "Sights, sounds, flavors, and experiences at a pace that's fun for all ages, with hands-on cooking, bustling souks, ancient medinas, a sunrise hot air balloon ride, and sandboarding.",
    highlights: [
      "A friendly treasure hunt through Marrakesh",
      "Jemaa el-Fná, the busiest square in Africa",
      "Sandboarding down the Erg Chebbi dunes",
      "Pottery and mosaic workshops in Fes",
      "Traditional cuisine with a local family",
    ],
    itinerary: [
      { day: 1, title: "Arrive in Marrakesh", description: "A private driver greets you at the airport for a hotel transfer, with optional exploration of Jemaa El Fna Square." },
      { day: 2, title: "Explore the Red City of Marrakesh", description: "Tour historic Medersas and grand palaces, visit souks, the medina, and gardens like Jardin Majorelle, with rooftop cafés and mint tea in the evening." },
      { day: 3, title: "Sunrise Hot Air Balloon Ride & Cooking Class", description: "A sunrise balloon ride over villages and desert landscapes with pastries mid-flight, then a cooking workshop at the Amal Center preparing a classic chicken tajine." },
      { day: 4, title: "Transfer to Boumalne Dades via Aït Benhaddou & Ouarzazate", description: "A journey through the High Atlas Mountains, an argan oil cooperative stop, the Aït Benhaddou Kasbah, and the Ouarzazate film studios, concluding in Boumalne Dades." },
      { day: 5, title: "Tinghir, Merzouga, Sandboarding, Camel Ride & Glamping", description: "The Todra Gorge, a 984-foot red limestone canyon, fossil artisans in Erfoud, the Erg Chebbi dunes, optional sandboarding, and a camel ride to a luxury desert camp with campfire and stargazing." },
      { day: 6, title: "Merzouga to Fes via Ziz Valley & the Middle Atlas Mountains", description: "The scenic Ziz Valley with hidden oases, lunch in Midelt, and cedar forests with Barbary macaques en route to Fes." },
      { day: 7, title: "Exploring the Imperial City and Medieval Medina", description: "Immerse in Fes's historic atmosphere, participate in a pottery and mosaic workshop, and experience authentic Moroccan cuisine with a local family." },
      { day: 8, title: "Fez to Chefchaouen via Volubilis, Explore the Blue City", description: "A stop at the Roman outpost of Volubilis, then arrival in Chefchaouen to explore the car-free medina and Outa El Hamam square." },
      { day: 9, title: "Chefchaouen to Casablanca via Rabat, Tour of Hassan II Mosque", description: "A quick Rabat visit, then Casablanca to tour the Hassan II Mosque, with dinner overlooking the ocean." },
      { day: 10, title: "Departure at Casablanca Airport", description: "A private driver provides an airport transfer, with optional breakfast and beach time if time permits." },
    ],
    included: [
      "Air-conditioned 4WD vehicle or minivan for 10 days",
      "Qualified multilingual local guide/driver",
      "Comprehensive sightseeing",
      "9 nights in hotels/kasbahs/riads",
      "1-hour camel ride (one per person)",
      "Specified meals",
      "Sandboarding (free, optional)",
      "Traditional desert music live show",
    ],
    excluded: [
      "International airfare",
      "Visa charges",
      "Travel and medical insurance",
      "Personal expenses (shopping, laundry, etc.)",
      "Services not mentioned by the agency",
      "Emergency expenses",
    ],
    meetingPoint: "Marrakech",
  },
  {
    slug: "in-9-days-taste-see-and-experience-morocco-a-sensory-travel-experience",
    title: "In 9 Days: Taste, See, and Experience Morocco: A Sensory Travel Experience",
    departureCity: "Casablanca",
    days: 9,
    nights: 8,
    summary:
      "A sensory journey through Morocco built around flavor, craft, and everyday life: souks, spice markets, a home-cooked meal, artisan workshops, and the country's most memorable landscapes from the Atlantic coast to the Sahara.",
    highlights: [
      "Casablanca's Hassan II Mosque and Corniche",
      "Rabat's imperial landmarks",
      "Fes's souks, spice markets, and artisan workshops",
      "A home-cooked Moroccan meal with a local family",
      "The Middle Atlas cedar forests",
      "Camel trekking and a night in a Sahara desert camp",
      "The Todra and Dades gorges",
      "Marrakech's medina and Jemaa el-Fna",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Casablanca", description: "Airport pickup and a first taste of Morocco with a visit to the Hassan II Mosque and an evening stroll along the Corniche." },
      { day: 2, title: "Casablanca to Rabat", description: "Explore Rabat's Kasbah of the Udayas, Hassan Tower, and Andalusian Gardens before continuing toward Fes." },
      { day: 3, title: "Fes Medina & Markets", description: "A guided walk through the souks and spice markets of Fes el Bali, with stops at artisan leather, ceramic, and metalwork workshops." },
      { day: 4, title: "Fes Home-Cooked Experience", description: "A home-cooked Moroccan meal with a local family, learning the flavors and techniques behind everyday dishes like tagine and harira." },
      { day: 5, title: "Fes to Merzouga via the Middle Atlas", description: "Cedar forests, Barbary macaques near Azrou, and the Ziz Valley's palm groves en route to the Sahara." },
      { day: 6, title: "Merzouga Desert Camp", description: "A camel trek into the Erg Chebbi dunes at sunset, dinner under the stars, and traditional Berber music around the campfire." },
      { day: 7, title: "Merzouga to Dades Valley via Todra Gorge", description: "A sunrise over the dunes, the Rissani market, and the dramatic Todra Gorge before the Dades Valley." },
      { day: 8, title: "Dades Valley to Marrakech via Ouarzazate", description: "The Valley of Roses, the Ouarzazate film studios, and Aït Ben Haddou, crossing the High Atlas via Tizi n'Tichka Pass to Marrakech." },
      { day: 9, title: "Marrakech & Departure", description: "A final walk through Marrakech's medina and Jemaa el-Fna before your onward transfer." },
    ],
    included: standardIncluded(),
    excluded: genericExcluded,
    meetingPoint: "N 05, Derb Skallia, Douh, Fès 30000, Morocco",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getFeaturedTours(limit = 6): Tour[] {
  const featured = tours.filter((tour) => tour.featured);
  return (featured.length ? featured : tours).slice(0, limit);
}

export function getRelatedTours(tour: Tour, limit = 3): Tour[] {
  const sameCity = tours.filter((t) => t.slug !== tour.slug && t.departureCity === tour.departureCity);
  if (sameCity.length >= limit) return sameCity.slice(0, limit);

  const similarDuration = tours.filter(
    (t) => t.slug !== tour.slug && !sameCity.includes(t) && Math.abs(t.days - tour.days) <= 1,
  );
  return [...sameCity, ...similarDuration].slice(0, limit);
}

export interface TourFaq {
  question: string;
  answer: string;
}

export function getTourFaqs(tour: Tour): TourFaq[] {
  return [
    {
      question: `How long is the ${tour.title}?`,
      answer: `This itinerary runs ${tour.days} days and ${tour.nights} nights, departing from ${tour.departureCity}.`,
    },
    {
      question: "Is this a private tour or a group tour?",
      answer:
        "It's private. You travel in your own vehicle with a dedicated driver-guide rather than joining a fixed group of strangers.",
    },
    {
      question: "Can the itinerary be adjusted?",
      answer:
        "Yes — dates, pace, and stops can be tailored to your interests. Send an inquiry and we'll adjust this route around you.",
    },
    {
      question: "What's included in this tour?",
      answer: `${tour.included.slice(0, 3).join(", ")}, plus everything else listed in the full inclusions below.`,
    },
    {
      question: "Where does the tour start and end?",
      answer: tour.meetingPoint
        ? `Pickup is from ${tour.meetingPoint}. Tell us your flight or hotel details and we'll confirm the exact meeting time.`
        : `This tour starts in ${tour.departureCity} — tell us your flight or hotel details and we'll confirm the exact pickup point and time.`,
    },
  ];
}

export const departureCities = Array.from(new Set(tours.map((tour) => tour.departureCity))).sort();

export interface Destination {
  city: string;
  slug: string;
  tourCount: number;
  heroSlug: string;
  tagline: string;
  intro: string;
  highlights: string[];
}

const destinationContent: Record<string, Pick<Destination, "tagline" | "intro" | "highlights">> = {
  Marrakech: {
    tagline: "Gateway to the High Atlas and the Sahara",
    intro:
      "Marrakech's walled medina and Jemaa el-Fna make it Morocco's most-visited city, and its position just north of the High Atlas makes it the most common starting point for a desert tour — most routes reach the first dunes within a day and a half.",
    highlights: ["Jemaa el-Fna and the medina souks", "Fast access to the High Atlas via the Tizi n'Tichka pass", "The widest choice of flights and riads"],
  },
  Fes: {
    tagline: "Morocco's imperial capital of craft and history",
    intro:
      "Fes el Bali is one of the best-preserved medieval medinas in the Arab world, and its position north of the Middle Atlas makes it a natural start for routes that cross cedar forests and the Ziz Valley on the way to Merzouga.",
    highlights: ["Fes el Bali, a car-free medieval medina", "Middle Atlas cedar forests en route to the desert", "A quieter, more traditional start than Marrakech"],
  },
  Casablanca: {
    tagline: "Morocco's largest city and main international gateway",
    intro:
      "Most international flights land in Casablanca, which makes it a practical starting point even though the city itself is more business capital than tourist medina. Departures from here typically link the Hassan II Mosque and Rabat with a longer loop toward Fes, the desert, and Marrakech.",
    highlights: ["Morocco's main international airport", "The Hassan II Mosque on the Atlantic", "Best suited to longer grand-tour itineraries"],
  },
  Tangier: {
    tagline: "Morocco's northern gateway on the Strait of Gibraltar",
    intro:
      "Tangier sits where the Mediterranean meets the Atlantic, a short ferry ride from Spain, which makes it a natural starting point for travelers arriving from Europe — it's also the closest major departure city to Chefchaouen's blue medina.",
    highlights: ["A short ferry crossing from mainland Spain", "The closest departure city to Chefchaouen", "A route north through the Rif Mountains"],
  },
  Ouarzazate: {
    tagline: "The door of the desert",
    intro:
      "Known locally as the \"door of the desert,\" Ouarzazate sits just south of the High Atlas on the route to Merzouga and Zagora, close enough to Aït Ben Haddou and the Atlas Film Studios to fold both into the first day of a tour.",
    highlights: ["One of the shortest routes into the Sahara dunes", "Aït Ben Haddou and the Atlas Film Studios nearby", "Fewer crowds than Marrakech or Fes"],
  },
  Agadir: {
    tagline: "Morocco's Atlantic beach city",
    intro:
      "Agadir is Morocco's main beach resort city, rebuilt in a modern grid after a 1960 earthquake, and works well as a starting point for travelers who want a few coastal days before or after heading inland toward the Anti-Atlas and the Sahara.",
    highlights: ["Atlantic beaches and a resort-town pace", "Direct flights from several European cities", "A route through the Anti-Atlas toward the desert"],
  },
  Errachidia: {
    tagline: "The traditional gateway to Merzouga",
    intro:
      "Errachidia sits along the Ziz Valley, historically one of the main routes into the Sahara, and remains one of the fastest ways to reach Merzouga and the Erg Chebbi dunes — many of our shortest desert tours depart from here.",
    highlights: ["The fastest route to Merzouga and Erg Chebbi", "The palm-lined Ziz Valley", "Ideal for short 2–3 day desert loops"],
  },
};

export const destinations: Destination[] = departureCities
  .map((city) => {
    const cityTours = tours.filter((tour) => tour.departureCity === city);
    const hero = cityTours.find((tour) => tour.featured) ?? cityTours[0];
    const content = destinationContent[city] ?? {
      tagline: "A private starting point for your Morocco tour",
      intro: `Every itinerary departing from ${city} is private and can be adjusted to your dates and interests.`,
      highlights: [],
    };
    return {
      city,
      slug: city.toLowerCase().replace(/\s+/g, "-"),
      tourCount: cityTours.length,
      heroSlug: hero.slug,
      ...content,
    };
  })
  .sort((a, b) => b.tourCount - a.tourCount);

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export interface DestinationFaq {
  question: string;
  answer: string;
}

export function getDestinationFaqs(destination: Destination): DestinationFaq[] {
  return [
    {
      question: `How many tours depart from ${destination.city}?`,
      answer: `${destination.tourCount} private ${destination.tourCount === 1 ? "itinerary departs" : "itineraries depart"} from ${destination.city} on this site, ranging from short desert loops to longer grand tours.`,
    },
    {
      question: `How far is ${destination.city} from the Sahara desert?`,
      answer:
        "Driving time varies by route, but most of our itineraries from this city reach the first dunes within a day or two of departure — check each tour's day-by-day itinerary for exact routing and driving times.",
    },
    {
      question: "Can I start in one city and end in another?",
      answer:
        "Yes — many of our itineraries begin and end in different cities. Tell us your arrival and departure points and we'll route accordingly.",
    },
  ];
}
