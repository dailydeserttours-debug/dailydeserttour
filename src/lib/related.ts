const STOPWORDS = new Set([
  "this", "that", "with", "from", "have", "your", "about", "into", "then", "than",
  "just", "most", "some", "more", "also", "when", "what", "where", "which", "while",
  "their", "there", "these", "those", "been", "were", "will", "would", "could",
  "morocco", "moroccan", "tour", "tours", "desert", "private", "day", "days", "night", "nights",
  "sahara", "berber", "camel", "camels", "dunes", "valley", "mountains", "atlas",
  "guide", "guides", "guided", "trip", "trips", "itinerary", "itineraries",
  "experience", "experiences", "travel", "travelers", "traveler", "traveling",
  "visit", "explore", "exploring", "journey", "journeys", "adventure", "adventures",
  "city", "cities", "culture", "cultural", "local", "region", "beautiful", "amazing",
  "unique", "breathtaking", "stunning", "unforgettable", "incredible",
]);

/** A capitalized word in the source text (Merzouga, Chefchaouen, Fes...) is very likely a
 * place name — real signal for relatedness — so matches on it count double versus a shared
 * generic lowercase word, which keeps ubiquitous vocabulary from dominating the score. */
function extractWords(text: string): { all: Set<string>; proper: Set<string> } {
  const all = new Set<string>();
  const proper = new Set<string>();
  const tokens = text.match(/[A-Za-z0-9']+/g) ?? [];
  for (const raw of tokens) {
    const lower = raw.toLowerCase();
    if (lower.length <= 3 || STOPWORDS.has(lower)) continue;
    all.add(lower);
    if (/^[A-Z]/.test(raw)) proper.add(lower);
  }
  return { all, proper };
}

/** Counts shared significant words between two texts — a lightweight content-similarity score. */
export function overlapScore(a: string, b: string): number {
  const wordsA = extractWords(a);
  const wordsB = extractWords(b);
  let score = 0;
  for (const word of wordsA.all) {
    if (wordsB.all.has(word)) {
      score += wordsA.proper.has(word) || wordsB.proper.has(word) ? 2 : 1;
    }
  }
  return score;
}
