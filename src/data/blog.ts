export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string[];
  faqs: BlogFaq[];
}

/**
 * Note: the original WordPress blog posts at dailydeserttours.com/blog/ only
 * ever shipped with their titles finished — the post bodies were still
 * Lorem Ipsum placeholder text. The copy below is original writing for this
 * rebuild, not a copy of the source (which had nothing to copy).
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "unique-cultural-experiences-in-morocco",
    title: "Unique Cultural Experiences in Morocco",
    excerpt:
      "Morocco is an ideal destination for active travelers and adventure seekers — but its richest moments are the quiet, human ones between the landmarks.",
    date: "2023-12-12",
    image: "/images/blog/unique-cultural-experiences-in-morocco.jpg",
    content: [
      "Morocco is an ideal destination for active travelers and adventure seekers, but the country's deepest impressions rarely come from a single monument. They come from a glass of mint tea poured three times for the right amount of froth, from a [Gnawa](https://en.wikipedia.org/wiki/Gnawa_music) rhythm played at dusk in a desert camp, or from a Berber family inviting you into their tent for bread still warm from the fire.",
      "In the Sahara, hospitality is a point of pride. Nomadic families who live far from any town will still stop what they're doing to share tea and conversation with a passing traveler. It's a tradition worth slowing down for, and one every [Daily Desert Tours itinerary](/trip) is built to make room for.",
      "In the medinas of Fes and Marrakech, culture shows up differently: in the rhythmic hammering of a coppersmith's workshop, the dye pits of a centuries-old tannery, or the call to prayer rolling across rooftops at sunset. Taking a guide who grew up in these streets changes what you notice — where a quick walk-through might just be alleys and stalls, a local perspective turns it into a living history lesson.",
      "Whichever region you explore, the throughline is the same: Morocco rewards travelers who leave room in their schedule for the unplanned conversation, the extra glass of tea, the detour into someone's family workshop. That's the kind of cultural experience no itinerary can fully script — only make space for.",
    ],
    faqs: [
      {
        question: "What is Gnawa music?",
        answer:
          "A spiritual, rhythmic music and ritual tradition brought to Morocco generations ago by West and Sub-Saharan African communities, still performed today, especially in desert regions like Khamlia near Merzouga.",
      },
      {
        question: "Is it normal to be invited for tea by strangers in Morocco?",
        answer:
          "Yes — hospitality is a genuine point of pride, especially among nomadic and rural Berber families, and an invitation for mint tea is a sincere gesture rather than a sales pitch.",
      },
      {
        question: "What's the best way to experience Fes's traditional crafts?",
        answer:
          "Walking the Fes el Bali medina with a local guide, who can point you toward working tanneries, metalworkers, and dye pits rather than tourist-facing storefronts.",
      },
    ],
  },
  {
    slug: "15-things-to-do-in-marrakech-and-around",
    title: "15 Things to Do in Marrakech and Around",
    excerpt:
      "Marrakech, one of the most vibrant and historically rich cities in Morocco, has enough packed into its medina and surroundings to fill a week.",
    date: "2023-12-12",
    image: "/images/blog/15-things-to-do-in-marrakech-and-around.jpg",
    content: [
      "Marrakech, one of the most vibrant and historically rich cities in Morocco, rewards travelers who mix the big landmarks with the smaller, stranger corners of the city. Here are fifteen ways to spend your time well.",
      "1. Get lost in the souks of the medina. 2. Watch the sun set over Jemaa el-Fna as the food stalls light up. 3. Visit the [Majorelle Garden](https://jardinmajorelle.com) and its cobalt-blue villa. 4. Explore the Bahia Palace's carved cedar ceilings. 5. Wander the Saadian Tombs. 6. Climb to a rooftop café for mint tea with a view of the Koutoubia Mosque. 7. Take a half-day trip into the Ourika Valley foothills of the Atlas Mountains.",
      "8. Visit a traditional hammam for a proper Moroccan scrub. 9. Browse the Ben Youssef Madrasa's tilework. 10. Shop for spices in the souk and learn to tell ras el hanout from a dozen other blends. 11. Take a day trip to the [UNESCO-listed kasbah of Aït Ben Haddou](https://whc.unesco.org/en/list/444/). 12. Try a home-style tagine away from the tourist strip. 13. Visit the Museum of Confluences or the Yves Saint Laurent Museum. 14. Watch the storytellers and musicians who still perform nightly in Jemaa el-Fna. 15. End your trip with a day tour into the Agafay Desert for sunset over the rocky plains just outside the city.",
      "Most of these fit easily into a Marrakech stopover on a longer desert itinerary — ask us to build a day or two of city time into any of our [southern Morocco tours](/trip/3-days-desert-tour-from-marrakech-to-merzouga).",
    ],
    faqs: [
      {
        question: "How many days do I need in Marrakech?",
        answer:
          "Three to four days covers the medina's major sites at a relaxed pace, with a day trip (Ourika Valley, Agafay Desert, or Aït Ben Haddou) added on.",
      },
      {
        question: "Is Jemaa el-Fna worth visiting more than once?",
        answer:
          "Yes — it changes character completely between afternoon and after dark, when food stalls, musicians, and storytellers take over the square.",
      },
      {
        question: "Can I visit the Sahara from Marrakech as a day trip?",
        answer:
          "Not comfortably — the dunes are too far for a single day. A [multi-day desert tour from Marrakech](/trip/3-days-desert-tour-from-marrakech-to-merzouga) is the realistic way to combine the city with the Sahara.",
      },
    ],
  },
  {
    slug: "explore-the-best-of-morocco-top-tours-for-every-type-of-traveler",
    title: "Explore the Best of Morocco: Top Tours for Every Type of Traveler",
    excerpt:
      "Morocco is a country rich in history, culture, and natural beauty — and the right itinerary depends entirely on the kind of trip you're after.",
    date: "2023-12-12",
    image: "/images/blog/explore-the-best-of-morocco-top-tours-for-every-type-of-traveler.jpg",
    content: [
      "Morocco is a country rich in history, culture, and natural beauty, which is exactly why one-size-fits-all itineraries rarely do it justice. The right tour depends on how much time you have, how much desert you want, and how many cities you're willing to trade for extra nights under the stars.",
      "If you have three days and want the classic postcard experience, a short desert loop from [Marrakech](/trip/3-days-desert-tour-from-marrakech-to-merzouga) or [Fes](/trip/3-days-desert-tour-from-fes-to-merzouga) to Merzouga hits the highlights: the High Atlas Mountains, a [UNESCO kasbah](https://whc.unesco.org/en/list/444/) or two, and a camel trek into the Erg Chebbi dunes for sunset.",
      "If you have a week or more, consider linking two imperial cities with the desert — [Fes to Marrakech](/trip/4-days-tour-from-fes-to-marrakech), or [Casablanca to Marrakech](/trip/12-days-grand-tour-from-casablanca) — so you get the medinas, the gorges, and the dunes without doubling back.",
      "Travelers with ten days or more can go further still, combining the Atlantic coast, the Rif Mountains and Chefchaouen's blue streets, all four imperial cities, and the Sahara in a single grand loop. Whatever your pace, every itinerary on this site can be adjusted to fit your dates, your group size, and the balance of culture versus desert you're after — just reach out and tell us what you're picturing.",
    ],
    faqs: [
      {
        question: "How many days should a first Morocco trip be?",
        answer:
          "A week is a comfortable minimum for combining one or two cities with the desert; three to four days works if you're focusing on just the Sahara loop.",
      },
      {
        question: "Can itineraries mix cities and desert time?",
        answer:
          "Yes — most of our tours are built around exactly that combination, and the balance can be adjusted toward more culture or more desert depending on what you want.",
      },
      {
        question: "Is ten days enough to see 'all' of Morocco?",
        answer:
          "Not literally all of it, but ten days comfortably covers a grand loop — coast, mountains, imperial cities, and the Sahara — without feeling rushed.",
      },
    ],
  },
  {
    slug: "best-time-to-visit-morocco",
    title: "Best Time to Visit Morocco: A Season-by-Season Guide",
    excerpt:
      "Morocco rewards travelers almost any month of the year — but knowing what each season actually feels like on the ground makes it easier to time your trip.",
    date: "2024-02-14",
    image: "/images/hero/hero-2.jpg",
    content: [
      "Morocco's size works in its favor: while the Sahara is baking in July, the Atlantic coast stays mild, and the High Atlas can still hold snow into April. There isn't one single \"best\" month so much as a best month for the kind of trip you're planning.",
      "Spring, from March to May, is generally considered the sweet spot for a desert-and-cities itinerary — daytime temperatures in Marrakech and the Sahara are warm rather than punishing, and nights in a desert camp are cool without being cold. Fall, from September to November, offers a near-mirror of the same conditions once the summer heat breaks.",
      "Summer (June–August) still works well for a trip built around the coast, the Rif Mountains, or [Chefchaouen](/blog/chefchaouen-blue-city-morocco), but afternoon temperatures in Merzouga and Zagora regularly climb past 40°C, which is worth planning around rather than fighting — most of our [desert itineraries](/trip) schedule dune activities for early morning or late afternoon for exactly this reason.",
      "Winter (December–February) is Morocco's quiet season: mild and pleasant in Marrakech and along the coast, genuinely cold at night in the desert and the Atlas passes. It's a good time for smaller crowds at sites like [Aït Ben Haddou](/blog/ait-ben-haddou-guide), as long as you pack for nighttime temperatures near freezing in the dunes.",
    ],
    faqs: [
      {
        question: "Is the Sahara too hot to visit in summer?",
        answer:
          "Daytime heat is intense, but many travelers still visit in summer by scheduling camel treks and dune activities for early morning or after sunset — evenings in the desert cool down quickly even in July and August.",
      },
      {
        question: "Does it snow in Morocco?",
        answer:
          "Yes — the High Atlas and Middle Atlas mountains regularly see snow in winter, sometimes as late as April at higher elevations, even though the desert and coast stay mild.",
      },
      {
        question: "What's the rainiest time of year?",
        answer:
          "Morocco's wetter months are generally November through March, concentrated in the north and along the coast; the Sahara itself sees very little rainfall year-round.",
      },
    ],
  },
  {
    slug: "sahara-desert-camp-first-night-in-merzouga",
    title: "Sahara Desert Camp: What to Expect on Your First Night in Merzouga",
    excerpt:
      "A night in a Berber desert camp is the emotional center of most Morocco itineraries — here's what actually happens between arriving at the dunes and waking to a Sahara sunrise.",
    date: "2024-04-02",
    image: "/images/tours/3-day-desert-tour-from-errachidia-to-fes/hero.jpg",
    content: [
      "For most travelers, the desert camp is the one night the whole trip is built around. It usually starts in the late afternoon: you leave your 4x4 at the edge of the Erg Chebbi dunes near Merzouga and continue by camel, following a Berber guide along a ridge line as the light turns gold.",
      "Camp itself is simpler than the word \"camp\" might suggest — a cluster of large canvas tents arranged around a communal dining tent, run on generators or solar power. Dinner is typically a tagine cooked over coals, often followed by Berber drummers playing around a fire once the sky is fully dark.",
      "The sky is the real event. With no light pollution for miles, a clear night in Merzouga shows a version of the Milky Way most travelers have never seen. Temperatures drop fast after sunset, even in warmer months, so a layer you can add before dinner is worth having within reach.",
      "Mornings start early, usually before sunrise, for the walk or camel ride back to meet your vehicle as the dunes turn pink and then gold. It's a short night by most trip standards, but it's consistently the one guests describe first when they talk about their trip afterward. Most of our [Sahara itineraries](/trip) include at least one camp night — check individual tour pages for which type of camp is included.",
    ],
    faqs: [
      {
        question: "Are desert camp toilets and showers private?",
        answer:
          "Most camps have shared, screened facilities near the tents rather than en-suite bathrooms — luxury camps on some itineraries add private facilities, so check the specific tour's inclusions if that matters to you.",
      },
      {
        question: "Is it cold at night in the desert camp?",
        answer: "Yes, even in summer, temperatures drop noticeably after sunset. Bringing a warm layer is worth it regardless of season.",
      },
      {
        question: "Do desert camps have electricity?",
        answer:
          "Most run on generators or solar power for lighting in the communal areas; don't expect to reliably charge devices in your tent overnight.",
      },
    ],
  },
  {
    slug: "fes-vs-marrakech-which-city-first",
    title: "Fes vs Marrakech: Which Moroccan City Should You Visit First?",
    excerpt:
      "Both cities anchor a Morocco itinerary, but they reward travelers differently — here's how to decide which one deserves your first days in the country.",
    date: "2024-06-18",
    image: "/images/tours/4-days-desert-tour-from-marrakech-to-fes/hero.jpg",
    content: [
      "Fes and Marrakech get compared constantly, and for good reason — they're Morocco's two most visited imperial cities, both built around a dense, walled medina, and both easy to reach by air. The differences show up once you're actually inside the walls.",
      "Fes el Bali, the old medina, is widely considered one of the best-preserved medieval cities in the Arab world and is largely closed to cars, so exploring it means walking narrow lanes past tanneries, metalworkers, and weavers still practicing centuries-old trades. It rewards travelers who want texture and history over polish.",
      "Marrakech is louder, warmer in feel, and easier to settle into on a first trip — Jemaa el-Fna, the Majorelle Garden, and a wider range of riads and restaurants make it a more forgiving base, especially since it's also a faster gateway to the Atlas Mountains and the Sahara than Fes.",
      "If you only have time for one, choose Fes for depth and craftsmanship, or Marrakech for ease and as a springboard into the desert. With more time, our [Fes to Marrakech](/trip/4-days-tour-from-fes-to-marrakech) and [Marrakech to Merzouga](/trip/3-days-desert-tour-from-marrakech-to-merzouga) itineraries are both built to let you do both without backtracking.",
    ],
    faqs: [
      {
        question: "Which city is better for first-time visitors to Morocco?",
        answer:
          "Marrakech is generally the easier first stop — more direct flights, a wider range of accommodation, and quicker access to the desert and the Atlas Mountains.",
      },
      {
        question: "Is Fes worth visiting if I'm short on time?",
        answer:
          "Yes, even a day inside Fes el Bali is worthwhile if you care about traditional crafts and architecture — it's a different, older feel than Marrakech's medina.",
      },
      {
        question: "Can I visit both Fes and Marrakech on one trip?",
        answer: "Yes — most multi-day itineraries link the two, either directly or via the desert, so you don't have to choose only one.",
      },
    ],
  },
  {
    slug: "moroccan-etiquette-and-customs-guide",
    title: "A First-Timer's Guide to Moroccan Etiquette and Customs",
    excerpt:
      "A little cultural awareness goes a long way in Morocco — here's what first-time visitors should know about dress, greetings, and everyday customs before they land.",
    date: "2024-08-05",
    image: "/images/tours/the-ultimate-moroccan-adventure-sea-mountains-deserts-in-10-days/hero.jpg",
    content: [
      "Morocco is an easygoing country for travelers, but a few customs are worth knowing before you land, especially outside the more touristed parts of Marrakech and Casablanca. None of this is complicated — it's mostly about dressing modestly, being patient, and following a few basic courtesies.",
      "Dress is the most common question: loose, lightweight clothing that covers shoulders and knees is comfortable in the heat and respectful in most settings, particularly in smaller towns, mosques (non-Muslims generally can't enter working mosques, with the Hassan II Mosque in Casablanca as a well-known exception that offers guided tours), and rural villages.",
      "Greetings matter — a simple \"salam\" (peace) or \"bonjour\" (French is widely spoken) goes further than jumping straight into a question, and it's normal for conversations, even transactional ones in a souk, to open with small talk. Bargaining is expected in souks and with unmetered taxis, but not in fixed-price shops, restaurants, or with your driver-guide.",
      "During Ramadan, many restaurants outside tourist hotels close during daylight hours, and it's considerate to avoid eating, drinking, or smoking visibly in public even if you're not fasting. Outside of that, hospitality runs in the other direction — being invited for tea by a Berber family, as many of our [desert tours](/trip) make room for, is a genuine gesture worth accepting.",
    ],
    faqs: [
      {
        question: "Do I need to cover my head as a woman traveling in Morocco?",
        answer:
          "No, headscarves aren't required for visitors, though modest clothing covering shoulders and knees is appreciated, especially outside major tourist areas.",
      },
      {
        question: "Is it rude not to bargain in the souks?",
        answer:
          "Not rude, but bargaining is the norm for unpriced goods in souks — starting around half the initial asking price and working up is a common approach.",
      },
      {
        question: "Can I drink alcohol in Morocco?",
        answer:
          "Alcohol is legal and available in many hotels, restaurants, and licensed shops, though it's not sold everywhere and is worth avoiding in public in more conservative areas.",
      },
    ],
  },
  {
    slug: "morocco-desert-tour-packing-list",
    title: "How to Pack for a Morocco Desert Tour: Essential Packing List",
    excerpt:
      "Desert days and desert nights ask for almost opposite wardrobes — here's what to actually pack for a multi-day Sahara tour.",
    date: "2024-10-21",
    image: "/images/tours/3-days-desert-tour-from-marrakech-to-merzouga/hero.jpg",
    content: [
      "Packing for a Morocco desert tour is really packing for two climates in one trip: hot, dry days and surprisingly cold desert nights. The biggest mistake first-time desert travelers make is packing only for the daytime heat and freezing after sunset.",
      "For daytime: loose, breathable, light-colored clothing, a wide-brimmed hat or scarf you can wrap around your face during a windy stretch on the dunes, sunglasses, and strong sunscreen — the sun reflecting off sand is more intense than it looks. Closed shoes are more useful than sandals once you're actually walking on hot sand.",
      "For camp nights: at least one warm layer, even in summer, plus long trousers for the camel ride back at sunrise when temperatures are at their lowest. A headlamp or small flashlight is genuinely useful, since camps typically run on generator or solar power with limited lighting after dinner.",
      "A few extras worth the space: a portable battery pack (charging isn't reliable at desert camps), a dust-proof bag for cameras and phones, and a reusable water bottle — hydration matters more than most people expect in dry desert air. If you're joining a [multi-day desert tour](/trip), your driver-guide can also tell you exactly what a given itinerary's camp setup includes.",
    ],
    faqs: [
      {
        question: "Do I need a sleeping bag for a Sahara desert camp?",
        answer:
          "Usually not — camps provide blankets and bedding, but bringing a light liner or extra layer is a good idea if you tend to feel the cold.",
      },
      {
        question: "Should I bring cash to the desert?",
        answer: "Yes — smaller towns and camps often don't take cards, so carrying Moroccan dirhams for tips, drinks, and small purchases is worth it.",
      },
      {
        question: "Are sandstorms common on desert tours?",
        answer:
          "They're occasional rather than routine, more likely in spring; a scarf or buff to cover your nose and mouth is a simple precaution worth packing regardless.",
      },
    ],
  },
  {
    slug: "ait-ben-haddou-guide",
    title: "The Ultimate Guide to Aït Ben Haddou: Morocco's Most Filmed Kasbah",
    excerpt:
      "Aït Ben Haddou has stood in for ancient Rome, Jerusalem, and Westeros — but the UNESCO-listed kasbah is worth visiting for its own sake, not just as a backdrop.",
    date: "2025-01-09",
    image: "/images/tours/3-days-tour-from-ouarzazate-to-merzouga/hero.jpg",
    content: [
      "Long before it appeared on screen, Aït Ben Haddou was a fortified ksar — a cluster of earthen kasbahs behind defensive walls — built along a former caravan route between the Sahara and Marrakech. Its rammed-earth architecture is largely unchanged, which is exactly why [UNESCO listed it as a World Heritage Site](https://whc.unesco.org/en/list/444/) in 1987.",
      "Film crews noticed the same qualities that got it UNESCO status: production designers have used it as a stand-in for ancient Rome, Jerusalem, and Egypt over several decades, and more recently for filming tied to Game of Thrones. A handful of families still live within the walls, part of why preservation has been ongoing rather than a one-time restoration.",
      "Most visitors cross the seasonal river on foot (or by mule when it's running higher) and climb through the ksar to a viewpoint at the top, the best spot for the wide shot everyone recognizes from photographs. Morning light works best for photography — the reddish clay walls are more dramatic before the midday sun flattens the color.",
      "Aït Ben Haddou sits on the route between Ouarzazate and Marrakech via the Tizi n'Tichka pass, which makes it a natural stop rather than a special detour on most southern Morocco itineraries — including our [Ouarzazate to Merzouga](/trip/3-days-tour-from-ouarzazate-to-merzouga) route.",
    ],
    faqs: [
      {
        question: "Is Aït Ben Haddou worth visiting if I've already seen other kasbahs?",
        answer:
          "Yes — its scale and preservation are unusual even by Morocco's standards, and it's one of the few ksars where you can walk all the way through rather than just view from outside.",
      },
      {
        question: "How long does a visit take?",
        answer: "Most travelers spend one to two hours walking through and up to the viewpoint, though it fits naturally into a longer day that also includes Ouarzazate.",
      },
      {
        question: "What movies were filmed at Aït Ben Haddou?",
        answer:
          "It has appeared in numerous productions over the decades, including Gladiator and Kingdom of Heaven, plus location work associated with Game of Thrones.",
      },
    ],
  },
  {
    slug: "camel-trekking-in-the-sahara-guide",
    title: "Camel Trekking in the Sahara: Everything You Need to Know",
    excerpt:
      "A camel trek into the Erg Chebbi dunes is the signature moment of a Sahara tour — here's what the ride actually feels like and how to prepare.",
    date: "2025-03-15",
    image: "/images/tours/immerse-yourself-in-morocco-9-days-of-history-culture-and-adventure/hero.jpg",
    content: [
      "For most travelers, camel trekking is less about the destination and more about the specific hour spent riding into the dunes as the light turns gold — it's usually timed for late afternoon, both for the temperature and for the photographs.",
      "Treks are typically led in a line by a Berber guide on foot, with each camel (technically a dromedary, with one hump) tied to the one in front. Rides into a Merzouga desert camp usually run 45 minutes to an hour each way, enough to feel the rhythm of the walk without being physically demanding.",
      "The ride itself has a rolling, side-to-side motion that takes a few minutes to get used to — most guides recommend holding the front of the saddle rather than gripping the reins, since the camel is being led rather than steered by the rider. Loose, comfortable clothing matters more than any special gear.",
      "If mobility, back problems, or motion sensitivity make riding difficult, most of our [desert camps](/trip) can also be reached by 4x4, so the camel trek is a highlight rather than a requirement — worth mentioning when you inquire about a specific itinerary.",
    ],
    faqs: [
      {
        question: "Is camel trekking safe for children or older travelers?",
        answer:
          "Generally yes, at a walking pace with an experienced guide — let us know ages or mobility concerns when booking so the right camp and vehicle access can be arranged.",
      },
      {
        question: "How long is a typical camel trek?",
        answer: "Most treks to a desert camp run 45 minutes to an hour each way, timed around sunset or sunrise.",
      },
      {
        question: "Is it uncomfortable to ride a camel?",
        answer:
          "It takes a few minutes to adjust to the motion, but most travelers find a short trek comfortable — longer multi-hour treks are a different, more demanding experience.",
      },
    ],
  },
  {
    slug: "chefchaouen-blue-city-morocco",
    title: "Chefchaouen: Why Morocco's Blue City Belongs on Your Itinerary",
    excerpt:
      "Tucked into the Rif Mountains, Chefchaouen's blue-washed medina has become one of Morocco's most photographed places — and one of its most relaxed.",
    date: "2025-05-30",
    image: "/images/hero/hero-3.jpg",
    content: [
      "Chefchaouen sits in the Rif Mountains in northern Morocco, far enough from the classic Marrakech–Fes–Sahara loop that it usually requires a deliberate detour rather than a stopover — which is part of why it still feels calmer than Morocco's more visited medinas.",
      "The blue paint that defines the town has a few competing origin stories — some tie it to Jewish refugees who settled there in the 1930s, others to older, more practical explanations like keeping mosquitoes away or symbolizing the sky — but no single account is definitively confirmed, and the town itself doesn't seem especially concerned with resolving the debate.",
      "Walking the medina is the whole point: narrow blue-and-white lanes climbing a hillside, doorways used as makeshift galleries by local artists, and a much slower pace of souk life than Fes or Marrakech. It's also known for handwoven wool goods and goat cheese sold in small shops around the main square, Plaza Uta el-Hammam.",
      "Because of its location, Chefchaouen pairs naturally with Tangier or a northern Morocco route rather than a desert-focused trip — if you're building an itinerary that includes the north, it's worth asking us to route a day or two through the Rif.",
    ],
    faqs: [
      {
        question: "Why is Chefchaouen painted blue?",
        answer:
          "There's no single confirmed explanation — theories range from a tradition brought by Jewish refugees in the 1930s to more practical reasons like insect deterrence — but the blue has become the town's defining feature regardless of its origin.",
      },
      {
        question: "How many days should I spend in Chefchaouen?",
        answer:
          "One full day covers the medina at a relaxed pace; two lets you add a hike to the nearby Rif foothills or the Spanish Mosque viewpoint above town.",
      },
      {
        question: "Is Chefchaouen easy to combine with a Sahara desert tour?",
        answer:
          "It's a long way from Merzouga, so it fits more naturally into a northern Morocco itinerary (with Tangier or Fes) than a desert-focused trip — ask us about routing if you want to include both.",
      },
    ],
  },
  {
    slug: "moroccan-cuisine-dishes-to-try",
    title: "Moroccan Cuisine: Dishes to Try Beyond Tagine and Couscous",
    excerpt:
      "Tagine and couscous get all the attention, but Moroccan food goes much further — here are the dishes worth ordering once you've had your first one of each.",
    date: "2025-07-11",
    image: "/images/tours/10-day-morocco-desert-adventure-from-marrakech-to-casablanca/hero.jpg",
    content: [
      "Tagine and couscous are the two dishes most visitors already know before they land, and both deserve their reputation — but they're really just the entry point into a much wider Moroccan table, shaped by Berber, Arab, Andalusian, and French influences layered over centuries.",
      "Harira, a tomato-based soup with lentils and chickpeas, is traditionally eaten to break the fast during Ramadan but is served year-round and makes an excellent starter on a cold desert evening. Rfissa — shredded flatbread under chicken, lentils, and a fenugreek-spiced broth — is a home-cooking dish worth asking for rather than expecting on every restaurant menu.",
      "Street food is its own category: msemen (a layered, pan-fried flatbread) and beghrir (a spongy, honeycomb-textured pancake) both show up at breakfast, while a Fes or Marrakech medina food stall is the place to try grilled sardines or a simple bowl of harira after dark.",
      "In the desert, dinner at a Berber camp is usually built around a tagine cooked slowly over coals, followed by mint tea poured from height — a presentation as much as a brewing method. It's a good place to ask questions about what you're eating; most driver-guides on our [Sahara desert tours](/trip) are happy to explain a dish's ingredients or origin.",
    ],
    faqs: [
      {
        question: "What is a tagine, exactly?",
        answer:
          "Both the name of the cone-shaped clay pot and the slow-cooked stew made in it — usually meat or vegetables with preserved lemon, olives, or dried fruit, cooked gently until tender.",
      },
      {
        question: "Is Moroccan food spicy?",
        answer:
          "Generally aromatic rather than hot — ras el hanout and other spice blends lean toward warmth and complexity, not heat, though harissa is available on the side if you want spice.",
      },
      {
        question: "What should vegetarians expect to eat in Morocco?",
        answer:
          "Vegetable tagines, lentil-based dishes like harira, and bread-based breakfasts are widely available, though it's worth confirming ingredients since broths sometimes use meat stock.",
      },
    ],
  },
  {
    slug: "sahara-desert-safety-heat-sun-tips",
    title: "Desert Safety Tips: How to Prepare for Sahara Heat and Sun",
    excerpt:
      "The Sahara's heat and sun are the two things most likely to catch first-time desert travelers off guard — here's how to stay comfortable and safe on a multi-day tour.",
    date: "2025-09-02",
    image: "/images/tours/4-days-desert-tour-from-ouarzazate/hero.jpg",
    content: [
      "The Sahara's dry heat is deceptive — because there's little humidity, it's easy to underestimate how much water and shade you actually need, especially in the exposed hour or two around midday. Most of the precautions below are simple, but easy to forget once you're distracted by the scenery.",
      "Hydration matters more than almost anything else: drink water steadily through the day rather than only when you feel thirsty, and add an electrolyte supplement if you're out during the hottest hours. Direct sun exposure adds up fast, so sunscreen reapplied every couple of hours, a hat, and sunglasses are worth treating as non-negotiable rather than optional.",
      "Timing helps as much as gear — most desert itineraries schedule camel treks and dune walks for early morning or the last hours before sunset specifically to avoid the punishing midday sun, which is also when the light is best for photos. If you're prone to heat sensitivity, ask your driver-guide about adjusting the day's pace.",
      "Desert nights bring the opposite risk: temperatures can drop sharply after sunset, so treat warm layers as part of your safety kit, not just comfort. If you're managing a health condition that heat could affect, it's worth mentioning it when you book so your itinerary and camp choice can be adjusted accordingly.",
    ],
    faqs: [
      {
        question: "How hot does the Sahara actually get?",
        answer:
          "Summer daytime temperatures in the Merzouga area regularly exceed 40°C (104°F), while nights — even in summer — can feel surprisingly cool once the sun is down.",
      },
      {
        question: "What's the biggest desert safety mistake first-time visitors make?",
        answer:
          "Underestimating water needs and sun exposure because the dry heat doesn't feel as intense as humid heat — hydration and shade need to be deliberate, not reactive.",
      },
      {
        question: "Is it safe to travel to the Sahara with a medical condition?",
        answer:
          "Many conditions are manageable with some planning — let us know when booking so we can suggest a pace, vehicle, and camp setup that works for you.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentBlogPosts(limit = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}
