export type GlossaryTerm = {
  term: string;
  definition: string;
  relatedDishes?: string[];
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Arare",
    definition:
      "Small Japanese rice crackers or puffs, often used as a topping to add a delightful crunch and textural contrast to a dish.",
    relatedDishes: ["Thirty Below"],
  },
  {
    term: "Binchotan",
    definition:
      "A refined type of white oak charcoal prized in Japanese culinary tradition for its clean, steady, radiant heat and ability to impart a subtle, clean smokiness without harsh chemical flavors. Used to grill many of our proteins.",
    relatedDishes: [
      "Tori No Teriyaki",
      "Masumi American Wagyu",
      "Miyazaki A5 Wagyu Ribeye",
    ],
  },
  {
    term: "Burdock (Gobo)",
    definition:
      "An earthy, fibrous root vegetable deeply rooted in Japanese culinary tradition. When fried, it yields a wonderfully crisp texture with a slightly sweet, vegetal depth. Featured in the Tori No Teriyaki.",
    relatedDishes: ["Tori No Teriyaki"],
  },
  {
    term: "Dashi",
    definition:
      "The foundational soup stock of Japanese cuisine, most traditionally made from kombu (dried kelp) and katsuobushi (shaved dried bonito). It provides a delicate umami backbone that elevates every dish it touches. Forms the base of our miso soup.",
    relatedDishes: ["Miso Soup"],
  },
  {
    term: "Gomae",
    definition:
      "A style of Japanese dish in which ingredients — most often blanched greens — are dressed in a rich, fragrant sesame sauce. Our Spinach Gomae is seasoned with shoyu, sake, mirin, sugar, and sesame seeds.",
    relatedDishes: ["Spinach Gomae"],
  },
  {
    term: "Jidori",
    definition:
      "A premium Japanese-style free-range chicken known for its firm texture, clean flavor, and ethical raising standards. The name translates roughly to 'ground bird.' AMA uses Jidori Farms California chicken.",
    relatedDishes: ["Tori No Teriyaki", "Tori Karaage"],
  },
  {
    term: "Junmai Daiginjo",
    definition:
      "The highest classification of sake, brewed from rice polished to at least 50% of its original size and made with no added distilled alcohol. The result is exceptionally aromatic, refined, and silky — a sake that rewards contemplation.",
    relatedDishes: ["Gindara Kasuzuke", "Masumi American Wagyu"],
  },
  {
    term: "Kani",
    definition:
      "The Japanese word for crab. Present in several of our dishes, most notably the Kani Sunomono — a classic vinegared salad that celebrates the sweet, delicate flavor of Dungeness Crab.",
    relatedDishes: ["Kani Sunomono"],
  },
  {
    term: "Karaage",
    definition:
      "A beloved Japanese frying technique in which proteins — most commonly chicken — are marinated in a blend of soy, ginger, and sake, lightly coated in potato starch, and deep-fried until golden and irresistibly crisp outside while remaining juicy within.",
    relatedDishes: ["Tori Karaage"],
  },
  {
    term: "Kappa",
    definition:
      "A classic cucumber roll that is as pure as it is refreshing. The name is also shared with a mischievous Japanese water sprite from folklore, said to harbor a particular fondness for cucumbers.",
    relatedDishes: ["Kappa"],
  },
  {
    term: "Kewpie",
    definition:
      "A beloved Japanese-style mayonnaise crafted with egg yolks — rather than whole eggs — and rice vinegar, yielding a richer, tangier, and creamier profile than its Western counterparts. Used in several of our rolls and as a condiment.",
    relatedDishes: ["Tori Karaage", "Beneath the Waves", "The Pearl"],
  },
  {
    term: "Mirin",
    definition:
      "A sweet Japanese rice wine used extensively in Japanese cooking. Lower in alcohol than sake, it adds subtle sweetness, a gentle luster, and a glossy finish to sauces, marinades, and glazes. A cornerstone of our teriyaki preparations.",
    relatedDishes: ["Tori No Teriyaki", "Spinach Gomae", "Aburi Maguro"],
  },
  {
    term: "Mochi",
    definition:
      "A soft, pleasingly chewy Japanese rice cake made from pounded glutinous rice. Its subtle flavor and distinctive texture make it a versatile base for both savory and sweet preparations. Featured in our Okinawa Mochi Cake.",
    relatedDishes: ["Okinawa Mochi Cake"],
  },
  {
    term: "Myoga",
    definition:
      "A uniquely Japanese ginger blossom — not the root, but the bud — with a delicate floral character and a mildly peppery, refreshing edge. Used with care as a garnish and aromatic element in several dishes.",
    relatedDishes: ["Kanpachi Usuzukuri", "Gindara Kasuzuke"],
  },
  {
    term: "Namasu",
    definition:
      "A traditional Japanese pickled salad of finely julienned daikon radish and carrots, lightly dressed with rice vinegar to create a bright, cleansing counterpoint to richer dishes. It accompanies our Gindara Kasuzuke.",
    relatedDishes: ["Gindara Kasuzuke"],
  },
  {
    term: "Nigori",
    definition:
      "An unfiltered style of sake that retains a portion of its rice sediment after pressing. The result is a characteristically cloudy, creamy appearance with a sweeter, more full-bodied flavor — approachable and expressive.",
    relatedDishes: ["Kani Sunomono"],
  },
  {
    term: "Nori",
    definition:
      "The dried, pressed seaweed sheets that have become synonymous with sushi. Beyond their structural role in rolling, they contribute a briny, savory, and distinctly oceanic umami note that is irreplaceable.",
    relatedDishes: [
      "Hon-Maguro",
      "Masunosuke",
      "Kanpachi",
      "Negitoro",
      "Kappa",
      "Avocado",
      "Masumi American Wagyu",
    ],
  },
  {
    term: "Ponzu",
    definition:
      "A bright, citrus-forward Japanese sauce — traditionally a blend of yuzu or lemon juice, soy sauce, mirin, and rice vinegar. At AMA, it is often poured tableside, transforming service into a graceful, theatrical moment.",
    relatedDishes: [
      "Kanpachi Usuzukuri",
      "Masunozuke Usuzukuri",
      "Women of the Sea",
      "Thirty Below",
      "Fakuda",
    ],
  },
  {
    term: "Sake-kasu",
    definition:
      "The fragrant, nutrient-rich lees remaining after sake has been pressed. Dense with umami and complexity, sake-kasu is prized as a marinade that deeply perfumes and tenderizes proteins. Our Gindara Kasuzuke showcases this tradition beautifully.",
    relatedDishes: ["Gindara Kasuzuke"],
  },
  {
    term: "Salamander",
    definition:
      "A high-heat overhead broiler used in professional kitchens to caramelize, sear, glaze, or finish dishes with intense radiant heat from above. The Gindara Kasuzuke is grilled over a salamander to achieve its characteristic lacquered crust.",
    relatedDishes: ["Gindara Kasuzuke"],
  },
  {
    term: "Shiso",
    definition:
      "A fragrant Japanese perilla leaf revered as both an herb and a garnish. Its flavor is complex and singular — part mint, part basil, with a subtle anise note — and it brings a unique brightness to whatever it accompanies.",
    relatedDishes: ["Kanpachi Usuzukuri", "The Diver", "At Shore"],
  },
  {
    term: "Soy Paper",
    definition:
      "A thin, pliable, and subtly flavored sheet made from soybeans, used as a refined alternative to nori for wrapping rolls. It offers a more neutral flavor profile and a striking visual distinction. Featured in The Pearl.",
    relatedDishes: ["The Pearl"],
  },
  {
    term: "Sunomono",
    definition:
      "A Japanese vinegared dish or salad, typically light, refreshing, and palate-cleansing. The word translates to 'vinegar thing.' Our Kani Sunomono brings together Dungeness Crab and vinegar-cured cucumber in this tradition.",
    relatedDishes: ["Kani Sunomono"],
  },
  {
    term: "Tamari",
    definition:
      "A Japanese soy sauce traditionally brewed with little or no wheat, resulting in a richer, darker, and slightly less salty flavor than standard soy sauce. It is the preferred choice when a deeper, more rounded umami is desired.",
    relatedDishes: ["Kanpachi Usuzukuri", "Kaisou Salad", "Tori Karaage"],
  },
  {
    term: "Tosaka",
    definition:
      "A variety of edible decorative seaweed available in striking red and green forms, prized as much for its visual beauty as its pleasant texture. It is featured in the Kaisou Salad, contributing color, crunch, and a mild oceanic flavor.",
    relatedDishes: ["Kaisou Salad"],
  },
  {
    term: "Usuzukuri",
    definition:
      "A refined Japanese knife technique in which fish is sliced paper-thin at a precise angle, allowing the fish's natural texture, translucence, and delicate flavor to become the sole focus. Both of our sashimi starters are prepared in this tradition.",
    relatedDishes: ["Kanpachi Usuzukuri", "Masunozuke Usuzukuri"],
  },
  {
    term: "Wagyu",
    definition:
      "A Japanese breed of cattle celebrated worldwide for its extraordinary intramuscular fat marbling, which yields an unparalleled richness and tenderness. Grade A5 — the designation of our Miyazaki ribeye — is the pinnacle of this tradition.",
    relatedDishes: ["Masumi American Wagyu", "Miyazaki A5 Wagyu Ribeye"],
  },
  {
    term: "Wakame",
    definition:
      "A tender, mild-flavored edible seaweed that blooms a deep, vibrant green when rehydrated. It carries a subtle, ocean-fresh flavor and a pleasing silkiness. Used in our miso soup and Kaisou Salad.",
    relatedDishes: ["Miso Soup", "Kaisou Salad", "Kani Sunomono"],
  },
  {
    term: "Yuzu",
    definition:
      "A prized Japanese citrus fruit with a tart, extraordinarily aromatic flavor — somewhere between lemon, grapefruit, and mandarin, yet unmistakably its own. Its zest and juice are used throughout our menu in ponzu, yuzu salt, and miso sauces.",
    relatedDishes: [
      "Kanpachi Usuzukuri",
      "Masunozuke Usuzukuri",
      "Aburi Maguro",
    ],
  },
  {
    term: "Zensai",
    definition:
      "The Japanese word for starters or small bites — the equivalent of hors d'oeuvres in Western culinary tradition. It refers to the first course section of our menu, where the evening's flavors are introduced with intention and care.",
    relatedDishes: [
      "Kanpachi Usuzukuri",
      "Kaisou Salad",
      "Kani Sunomono",
      "Spinach Gomae",
      "Aburi Maguro",
    ],
  },
];

// Sorted alphabetically
export const GLOSSARY_SORTED = [...GLOSSARY_TERMS].sort((a, b) =>
  a.term.localeCompare(b.term),
);
