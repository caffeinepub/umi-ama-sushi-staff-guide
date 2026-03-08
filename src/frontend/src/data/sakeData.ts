export type SakeClassification =
  | "Honjozo"
  | "Junmai"
  | "Tokubetsu Junmai"
  | "Junmai Ginjo"
  | "Junmai Daiginjo"
  | "Junmai Nigori";

export type Sake = {
  id: string;
  name: string;
  classification: SakeClassification;
  region: string;
  rice: string;
  milling: number; // percentage remaining
  abv: number;
  smv: number; // Sake Meter Value
  acidity: number;
  glassware: "Champagne flute" | "All-Purpose (AP)";
  glassPrice: number;
  carafePrice?: number;
  aroma: string;
  palate: string;
  sakeMaking: string;
  brewery: string;
  guestOneLiner: string;
  foodPairing: string;
  serveTemp?: string;
};

export type SakeClassificationInfo = {
  name: string;
  description: string;
  millingNote: string;
};

export const SAKE_CLASSIFICATIONS: SakeClassificationInfo[] = [
  {
    name: "Honjozo",
    description:
      "A small amount of distilled alcohol is added to the brew. Light, clean, and approachable — the most versatile category. Can be served chilled, at room temperature, or warmed.",
    millingNote: "Rice milled to at least 70% remaining",
  },
  {
    name: "Junmai",
    description:
      "Pure rice sake — no added alcohol. 'Jun' means pure; 'mai' means rice. Richer, more umami-forward character compared to Honjozo.",
    millingNote: "No minimum milling requirement",
  },
  {
    name: "Tokubetsu Junmai",
    description:
      "A 'special' designation Junmai — either milled further than standard Junmai (below 60% remaining) or brewed using a specially designated technique. More refined than standard Junmai.",
    millingNote: "Rice milled to 60% remaining or below",
  },
  {
    name: "Ginjo",
    description:
      "Fermented slowly at cold temperatures for an extended period. Typically fruity, aromatic, and elegant. A small amount of distilled alcohol may be added.",
    millingNote: "Rice milled to at least 60% remaining",
  },
  {
    name: "Junmai Ginjo",
    description:
      "Ginjo grade with no added alcohol. All the fruity aromatics and elegance of Ginjo, expressed in its purest form.",
    millingNote: "Rice milled to at least 60% remaining",
  },
  {
    name: "Daiginjo",
    description:
      "The most refined conventional category. Highly polished rice fermented slowly at cold temperatures. Delicate, complex, often floral. A small amount of distilled alcohol may be added.",
    millingNote: "Rice milled to at least 50% remaining",
  },
  {
    name: "Junmai Daiginjo",
    description:
      "The pinnacle of sake: Daiginjo with absolutely no added alcohol. Maximum refinement of flavor, aroma, and texture. The highest expression of the brewer's craft.",
    millingNote: "Rice milled to at least 50% remaining",
  },
  {
    name: "Nigori",
    description:
      "Unfiltered, or coarsely filtered. Cloudy from rice particles intentionally left in the brew. Creamy texture, typically richer on the palate — though some Nigori can finish surprisingly dry.",
    millingNote: "No milling standard — defined by filtration method",
  },
];

export const SAKE_LADDER = [
  {
    step: 1,
    name: "Ban Ryu Honjozo",
    descriptor: "Accessible, versatile, entry-point",
  },
  {
    step: 2,
    name: "Road to Osaka Nigori",
    descriptor: "Creamy, approachable, food-friendly",
  },
  {
    step: 3,
    name: "The Gentleman (Tokubetsu Junmai)",
    descriptor: "Dry, mineral, refined",
  },
  {
    step: 4,
    name: "Masumi Sparkling",
    descriptor: "Celebratory, unique, wine-like entry",
  },
  {
    step: 5,
    name: "Asian Beauty (Junmai Daiginjo)",
    descriptor: "Lush, aromatic, premium",
  },
  {
    step: 6,
    name: "IWA 5 Assemblage 3",
    descriptor: "Peak luxury, Champagne method, extraordinary",
  },
];

export const SAKES: Sake[] = [
  {
    id: "masumi-sparkling",
    name: "Masumi Sparkling 'Origarami' Junmai Ginjo",
    classification: "Junmai Ginjo",
    region: "Suwa, Nagano Prefecture, Japan",
    rice: "Yamadanishiki",
    milling: 55,
    abv: 12,
    smv: -45,
    acidity: 3,
    glassware: "Champagne flute",
    glassPrice: 32,
    aroma:
      "Green apple, pear, white flowers, light yogurt and lactic notes — fresh and celebratory",
    palate:
      "Fine mousse, wine-like acidity, light sweetness, savory umami finish. Creamy yet refreshing — the bubbles contrast beautifully with the richness of the lees.",
    sakeMaking:
      "Naturally carbonated by finishing fermentation inside the bottle — the same concept as pét-nat wine. Slightly cloudy from fine rice lees (origarami) intentionally left in. Sokujo brewing method.",
    brewery:
      "Miyasaka Brewing Company, established 1662 in Suwa, Nagano. Renowned for discovering Yeast No. 7 — now a cornerstone yeast used by breweries across Japan. Served deeply chilled. Available year-round in limited quantities.",
    guestOneLiner:
      "This is our sparkling sake — naturally carbonated in the bottle, like a pét-nat wine, with fine rice lees left in for a creamy texture. Apple, pear, white flowers, and a beautifully refreshing mousse.",
    foodPairing: "Edamame, lighter Zensai starters",
    serveTemp: "Deeply chilled",
  },
  {
    id: "ban-ryu",
    name: "Ban Ryu Honjozo '10,000 Ways'",
    classification: "Honjozo",
    region: "Tsuruoka City, Yamagata Prefecture, Japan",
    rice: "Tsuyahime",
    milling: 65,
    abv: 15.3,
    smv: 1,
    acidity: 1,
    glassware: "All-Purpose (AP)",
    glassPrice: 14,
    carafePrice: 30,
    aroma:
      "Steamed rice, toasted grain, rice cracker, subtle melon, light banana, white pepper, faint herbal freshness",
    palate:
      "Clean entry, light sweetness balanced by dryness, mild rice umami, soft grain, slight nutty character. Smooth, medium-light body, crisp structure. Clean and dry finish, short to medium.",
    sakeMaking:
      "'Ban Ryu' means 10,000 ways — an expression for the countless variables that define a sake: the yeast, the koji, the timing, the water. This is the flagship product of the brewery.",
    brewery:
      "Fuji Brewery, founded 1778. Now managed by 13th-generation Ariyoshi Kato. Head brewer Kodai Kato is one of the youngest Toji (master brewers) in Japan to win a gold medal at the National Japan Sake Competition. Embodies the Yamagata style: light, clean, delightfully fruity.",
    guestOneLiner:
      "Our most approachable sake — clean, dry, and beautifully food-friendly. It can be served chilled, at room temperature, or even warmed. Perfect for guests exploring sake for the first time.",
    foodPairing: "Wide range — suitable across most of the menu",
    serveTemp: "Chilled, room temperature, or warmed",
  },
  {
    id: "bijofu",
    name: "Hamakawa Shoten Bijofu Tokubetsu Junmai 'The Gentleman'",
    classification: "Tokubetsu Junmai",
    region: "Village of Tano, Kochi Prefecture, Shikoku, Japan",
    rice: "Matsuyama Mii",
    milling: 60,
    abv: 15,
    smv: 4,
    acidity: 1.4,
    glassware: "All-Purpose (AP)",
    glassPrice: 21,
    carafePrice: 44,
    aroma:
      "Fresh and bright, fruit-driven but not overly aromatic. Underripe banana, passion fruit, lime zest, fresh mint, pear, light citrus.",
    palate:
      "Soft and smooth entry, subtle fruit sweetness. Medium-light body with citrus and tropical fruit notes, gentle rice umami. Crisp, dry finish with a slight spicy and mineral edge. Light, precise, and refreshing rather than earthy or heavy — exceptionally food-friendly.",
    sakeMaking:
      "Uses Matsuyama Mii rice milled to 60% and water drawn from an underground river flowing beneath the brewery. Described as 'almost water-like — a sake that drinks wet dry.'",
    brewery:
      "Located on a strip of land half a mile wide between the Pacific Ocean and the mountains of southern Kochi — one of the most remote regions in Japan. Despite its remoteness, Bijofu has become internationally acclaimed. Multiple gold medals at Japan's National Sake Competition in 2017 alone.",
    guestOneLiner:
      "We call this one 'The Gentleman' — it's incredibly precise and refined, almost water-like in its elegance. Crisp, dry, mineral, brewed with underground river water in one of Japan's most remote coastal villages.",
    foodPairing: "Kanpachi Usuzukuri, Kaisou Salad, Kani Sunomono, Miso Soup",
  },
  {
    id: "asian-beauty",
    name: "Sumikawa Shuzojo Junmai Daiginjo 'Asian Beauty'",
    classification: "Junmai Daiginjo",
    region: "Hagi, Yamaguchi Prefecture, Japan",
    rice: "Yamada Nishiki",
    milling: 60,
    abv: 16,
    smv: 6,
    acidity: 1.5,
    glassware: "All-Purpose (AP)",
    glassPrice: 37,
    carafePrice: 76,
    aroma:
      "Strawberry, melon, papaya, tropical fruit bouquet. Lush fruit aromatics, beautifully balanced rather than sweet.",
    palate:
      "Soft and slightly off-dry entry. Medium-full body, silky and dense texture. Bright acidity keeps the finish lively. Clean, lightly crisp with lingering fruit. A more expressive Daiginjo — wonderful with food, not only for sipping.",
    sakeMaking:
      "Yamada Nishiki rice fermented very slowly at cold temperatures to develop elegant fruit aromas while maintaining silky texture. Serve well chilled (8–10°C / 46–50°F).",
    brewery:
      "Sumikawa Shuzojo, founded 1921 in Hagi, Yamaguchi. Known for elegant, aromatic sakes with a modern, fruit-forward profile that maintains balance and acidity.",
    guestOneLiner:
      "This is a premium Junmai Daiginjo with a beautiful tropical fruit character — melon, strawberry, papaya — and a silky, lively finish. It's more expressive and full-bodied than most Daiginjo, which makes it wonderful with food.",
    foodPairing: "Specialty rolls, lighter Zensai",
    serveTemp: "Well chilled (8–10°C / 46–50°F)",
  },
  {
    id: "iwa5",
    name: "Iwa 5 Junmai Daiginjo 'Assemblage 3'",
    classification: "Junmai Daiginjo",
    region: "Tateyama, Toyama Prefecture, Japan",
    rice: "Yamada Nishiki, Omachi, Gohyakumangoku (blended)",
    milling: 65,
    abv: 15,
    smv: -1.5,
    acidity: 1,
    glassware: "All-Purpose (AP)",
    glassPrice: 110,
    carafePrice: 224,
    aroma:
      "Complex and layered. White grape, melon, lychee, mint, rosemary, honey, mineral notes. Very expressive and wine-like compared to traditional sake.",
    palate:
      "Silky and elegant entry, medium body. Mid-palate: pear, apple, lemon zest, almond, herbal notes. Pronounced acidity, layered umami. Long, mineral, slightly savory finish.",
    sakeMaking:
      "Multiple small Junmai Daiginjo batches, each with a different rice variety, yeast strain, fermentation style, and tank character — then blended like a Champagne assemblage. Aged 15 months before release. Created by the former cellar master of Dom Pérignon.",
    brewery:
      "Shiraiwa K.K. — founded only in 2019, yet immediately one of the most talked-about luxury sake projects in the world. Located on the coast of the Sea of Japan in Toyama Prefecture.",
    guestOneLiner:
      "IWA 5 is our most extraordinary sake — created by the former cellar master of Dom Pérignon. It's crafted like Champagne, blending dozens of individual sake batches into one perfectly layered assemblage. Aged 15 months, it's wine-like in its complexity.",
    foodPairing:
      "Gindara Kasuzuke (Black Cod), Masumi American Wagyu, Miyazaki A5 Wagyu Ribeye",
  },
  {
    id: "road-to-osaka",
    name: "Daimon Tokubetsu Junmai Nigori 'Road to Osaka'",
    classification: "Junmai Nigori",
    region: "Katano, Osaka Prefecture, Japan",
    rice: "Gohyakumangoku",
    milling: 40,
    abv: 15,
    smv: 4,
    acidity: 1.6,
    glassware: "All-Purpose (AP)",
    glassPrice: 16,
    carafePrice: 34,
    aroma:
      "More aromatic complexity than typical nigori. White flowers, banana, citrus peel, light melon, sweet rice confectionery. Fresh and delicate rather than heavy or yogurt-like.",
    palate:
      "Creamy texture from rice lees, gentle sweetness. Mid-palate: banana, blood orange citrus, rice pudding. Smooth and lightly viscous. Surprisingly dry finish for a nigori, with light citrus freshness.",
    sakeMaking:
      "Brewed as a traditional Junmai, then left unfiltered — rice particles remain, creating the characteristic cloudy appearance and creamy texture. Gohyakumangoku rice has a large grain with a well-defined shinpaku starch core, producing clean, crisp styles.",
    brewery:
      "Daimon Shuzo, founded 1826 near the Ikoma Mountains in Osaka. Run today by 6th-generation brewer Yasutaka Daimon. Known for blending traditional brewing with modern global sake education. Osaka has historically been Japan's center of food trading and culinary culture — this sake was designed to pair with a wide variety of foods.",
    guestOneLiner:
      "This is our nigori — it's unfiltered, so it's slightly cloudy with a beautiful creamy texture from the rice. Despite that creaminess, it's surprisingly dry with a fresh citrus finish. A wonderful bridge for guests who enjoy white wine.",
    foodPairing: "Kani Sunomono (Dungeness Crab), broader menu pairing",
  },
];

export const SAKE_MAP = new Map<string, Sake>();
for (const sake of SAKES) {
  SAKE_MAP.set(sake.id, sake);
  SAKE_MAP.set(sake.name.toLowerCase(), sake);
}

export function findSake(query: string): Sake | undefined {
  const q = query.toLowerCase();
  return SAKES.find(
    (s) =>
      q.includes(s.name.toLowerCase()) ||
      q.includes(s.id) ||
      (s.id === "masumi-sparkling" &&
        (q.includes("masumi") ||
          q.includes("sparkling sake") ||
          q.includes("origarami"))) ||
      (s.id === "ban-ryu" &&
        (q.includes("ban ryu") ||
          q.includes("10000") ||
          q.includes("10,000") ||
          q.includes("honjozo"))) ||
      (s.id === "bijofu" &&
        (q.includes("bijofu") ||
          q.includes("gentleman") ||
          q.includes("hamakawa") ||
          q.includes("kochi sake") ||
          q.includes("the gentleman"))) ||
      (s.id === "asian-beauty" &&
        (q.includes("asian beauty") ||
          q.includes("sumikawa") ||
          q.includes("yamaguchi sake"))) ||
      (s.id === "iwa5" &&
        (q.includes("iwa 5") ||
          q.includes("iwa5") ||
          q.includes("assemblage") ||
          q.includes("dom perignon sake") ||
          q.includes("toyama"))) ||
      (s.id === "road-to-osaka" &&
        (q.includes("road to osaka") ||
          q.includes("nigori") ||
          q.includes("daimon") ||
          q.includes("osaka sake"))),
  );
}

export function smvLabel(smv: number): string {
  if (smv <= -10) return "Very sweet";
  if (smv < 0) return "Slightly sweet";
  if (smv === 0) return "Neutral";
  if (smv <= 2) return "Near-neutral / off-dry";
  if (smv <= 4) return "Dry";
  return "Very dry";
}
