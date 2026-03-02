export type DietaryItem = {
  name: string;
  removable: boolean; // CBR = true
};

export type MenuItem = {
  name: string;
  description: string;
  ingredients?: string;
  dietary: DietaryItem[];
  pairing?: string;
  note?: string;
  isSpecial?: boolean;
};

export type MenuSection = {
  id: string;
  label: string;
  sublabel?: string;
  items: MenuItem[];
};

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "starters",
    label: "Complimentary Starters",
    sublabel: "A gift from the chef",
    items: [
      {
        name: "Edamame",
        description:
          "Steamed whole soybeans finished with fine sea salt — a warm welcome from the kitchen.",
        ingredients: "Soybeans, sea salt",
        dietary: [{ name: "Soy", removable: false }],
        pairing: "Masumi Junmai Ginjo Sparkling 'Origarami', Nagano",
        note: "Introduce to guests as a complimentary gift from the chef — present it warmly and with care.",
      },
      {
        name: "Miso Soup",
        description:
          "A classic Japanese soul-warmer made with house dashi, silken tofu, wakame seaweed, and earthy shiitake mushrooms.",
        ingredients:
          "Wakame, tofu, shiitake mushrooms, fish stock, bonito, dashi",
        dietary: [
          { name: "Soy", removable: false },
          { name: "Fish", removable: false },
        ],
        pairing:
          "Hamakawa Shoten Bijofu Tokubetsu Junmai 'The Gentleman', Kochi",
        note: "Traditionally sipped directly from the bowl — mention this gracefully to guests and ensure spoons are available.",
        isSpecial: true,
      },
    ],
  },
  {
    id: "zensai",
    label: "Zensai",
    sublabel: "Small Bites & Starters",
    items: [
      {
        name: "Kanpachi Usuzukuri",
        description:
          "Cold-smoked Sakura amberjack sliced paper-thin in the usuzukuri tradition — accompanied by a shredded daikon and shiso salad, myoga, yuzu salt, tamari yuzu ponzu, fried pumpkin, and micro wasabi.",
        ingredients:
          "Cold-smoked Sakura amberjack (5 pcs), shredded daikon, shiso, myoga, yuzu salt, tamari yuzu ponzu, fried pumpkin, micro wasabi",
        dietary: [
          { name: "Fish", removable: false },
          { name: "Allium", removable: true },
          { name: "Soy", removable: true },
          { name: "Shellfish", removable: true },
        ],
        pairing:
          "Hamakawa Shoten Bijofu Tokubetsu Junmai 'The Gentleman', Kochi",
        note: "To describe to guests: 'Our Kanpachi Usuzukuri features cold-smoked amberjack sliced paper-thin, accompanied by a refreshing shiso and daikon salad and finished with our house yuzu ponzu — an elegant, bright way to begin the evening.'",
      },
      {
        name: "Masunozuke Usuzukuri",
        description:
          "New Zealand King Salmon sashimi sliced usuzukuri-style, accompanied by a lemon and onion chutney, caramelized lemon peel, beach mushrooms, yuzu ponzu, and micro greens.",
        ingredients:
          "New Zealand King Salmon (5 pcs), lemon & onion chutney, caramelized lemon peel, beach mushrooms, yuzu ponzu, micro greens",
        dietary: [
          { name: "Fish", removable: false },
          { name: "Allium", removable: true },
          { name: "Gluten", removable: true },
          { name: "Soy", removable: true },
        ],
        pairing: "Fourny & Fils 'Grands Terroirs' Brut 1er Cru Champagne",
      },
      {
        name: "Kaisou Salad",
        description:
          "A refreshing seaweed salad of wakame and red Tosaka, with marinated cucumber and sesame seeds, dressed with a sweet vinegar blend of rice vinegar, tamari, mirin, sugar, and sesame oil.",
        ingredients:
          "Wakame, red Tosaka seaweed, marinated cucumber, sesame seeds, sweet vinegar dressing (rice vinegar, tamari, mirin, sugar, sesame oil)",
        dietary: [
          { name: "Sesame seeds", removable: true },
          { name: "Soy", removable: false },
          { name: "Sesame oil", removable: false },
        ],
        pairing:
          "Hamakawa Shoten Bijofu Tokubetsu Junmai 'The Gentleman', Kochi",
      },
      {
        name: "Kani Sunomono",
        description:
          "A delicate Japanese vinegared salad of Dungeness Crab with vinegar-cured cucumber and wakame, dressed with a classic Tosazu vinegar.",
        ingredients:
          "Dungeness Crab, vinegar-cured cucumber, wakame, Tosazu dressing (vinegar, dashi, sugar, soy sauce)",
        dietary: [
          { name: "Shellfish", removable: false },
          { name: "Soy", removable: false },
          { name: "Gluten-Wheat", removable: false },
        ],
        pairing: "Daimon Tokubetsu Junmai Nigori 'Road to Osaka', Osaka",
      },
      {
        name: "Spinach Gomae",
        description:
          "Wilted spinach dressed in a traditional sesame gomae sauce of shoyu, sake, mirin, sugar, and sesame seeds — a simple expression of Japanese home cooking elevated.",
        ingredients:
          "Wilted spinach, sesame seeds, sesame dressing (shoyu, sake, mirin, sugar)",
        dietary: [
          { name: "Sesame", removable: true },
          { name: "Soy", removable: false },
          { name: "Gluten", removable: false },
          { name: "Alcohol", removable: false },
        ],
        pairing:
          "Sauvignon Blanc, Domaine Laporte 'La Comtesse' Sancerre Loire Valley 2022",
      },
      {
        name: "Aburi Maguro",
        description:
          "Soy-marinated tuna seared with a flame torch, served over wilted spinach with a yuzu miso sauce of eggs, miso, sugar, yuzu, and mirin, alongside pickled vegetables.",
        ingredients:
          "Soy-marinated seared tuna, spinach, yuzu miso sauce (eggs, miso, sugar, yuzu, mirin), pickled vegetables",
        dietary: [
          { name: "Egg", removable: true },
          { name: "Gluten", removable: true },
          { name: "Fish", removable: false },
          { name: "Soy", removable: false },
          { name: "Alcohol", removable: true },
        ],
        pairing: "Timorasso, La Colombera 'Derthona' Colli Tortonesi 2022",
      },
    ],
  },
  {
    id: "mains",
    label: "Mein Kosu",
    sublabel: "Main Courses",
    items: [
      {
        name: "Gindara Kasuzuke",
        description:
          "Black cod marinated overnight in sake-kasu — the fragrant lees of sake production — then grilled over a salamander broiler to achieve a caramelized, lacquered surface. Accompanied by pickled myoga and namasu.",
        ingredients:
          "Sake-kasu marinated black cod, myoga (pickled ginger sprouts), namasu (pickled daikon + carrots)",
        dietary: [
          { name: "Fish", removable: false },
          { name: "Alcohol", removable: false },
          { name: "Soy", removable: false },
        ],
        pairing: "Iwa 5 Junmai Daiginjo 'Assemblage 3', Toyama",
      },
      {
        name: "Tori No Teriyaki",
        description:
          "Jidori Farms California chicken thighs glazed in a classic teriyaki sauce, served with marinated eggplant, blistered shishito peppers grilled on binchotan charcoal, and crispy fried burdock root.",
        ingredients:
          "Jidori chicken thighs (2 pcs), marinated eggplant, shishito peppers, fried burdock, teriyaki sauce (shoyu, sake, mirin, sugar, ginger)",
        dietary: [
          { name: "Soy", removable: true },
          { name: "Alcohol", removable: true },
          { name: "Sesame", removable: true },
          { name: "Shellfish", removable: true },
        ],
        pairing:
          "Chardonnay, Presqu'ile Vineyard, Santa Maria Valley California 2022",
      },
      {
        name: "Tori Karaage",
        description:
          "Japanese-style fried chicken marinated in tamari, sake, and fresh ginger, coated in potato starch and gluten-free tempura flour, fried to a golden crisp. Served with tender broccoli and house kewpie mayo.",
        ingredients:
          "Jidori chicken, broccoli, kewpie mayo; marinade: tamari, sake, ginger, potato starch, GF tempura flour",
        dietary: [
          { name: "Soy", removable: false },
          { name: "Alcohol", removable: false },
          { name: "Sesame oil", removable: false },
          { name: "Allium", removable: false },
          { name: "Egg", removable: false },
          { name: "Shellfish", removable: false },
        ],
        pairing: "Pinot Noir, Chanin 'Zotovich Vineyard' Sta. Rita Hills 2021",
      },
      {
        name: "Masumi American Wagyu",
        description:
          "American Wagyu from local farms, glazed with a house teriyaki and grilled over binchotan charcoal. Served with peppery watercress, toasted nori, and crispy fried Brussels sprouts.",
        ingredients:
          "American Wagyu (local farms), teriyaki glaze (tamari, sugar, mirin), watercress, nori, fried Brussels sprouts",
        dietary: [
          { name: "Soy", removable: true },
          { name: "Alcohol", removable: true },
          { name: "Shellfish", removable: true },
        ],
        pairing: "Iwa 5 Junmai Daiginjo 'Assemblage 3', Toyama",
      },
      {
        name: "Miyazaki A5 Wagyu Ribeye",
        description:
          "Five ounces of the finest Miyazaki A5 wagyu — the pinnacle of Japanese beef — grilled over binchotan and presented on a hot stone with watercress, shredded nori, seaweed salt, and a rich sumiso sauce.",
        ingredients:
          "5 oz Miyazaki A5 wagyu ribeye, watercress, shredded nori, seaweed salt, sumiso sauce (egg, miso, sugar, mirin)",
        dietary: [
          { name: "Soy", removable: true },
          { name: "Egg", removable: true },
          { name: "Alcohol", removable: true },
          { name: "Gluten", removable: true },
        ],
        pairing: "Cabernet Sauvignon, Heitz Cellar Napa Valley 2018",
      },
    ],
  },
  {
    id: "specialty-rolls",
    label: "AMA Specialty Rolls",
    sublabel: "Signature Creations",
    items: [
      {
        name: "Women of the Sea",
        description:
          "Spicy tuna and cucumber inside, topped with King Salmon, a thin lemon slice, and micro wasabi. Served with ponzu.",
        ingredients:
          "Inside: spicy tuna, cucumber; top: King Salmon, thin lemon, micro wasabi; served with ponzu",
        dietary: [
          { name: "Fish", removable: false },
          { name: "Soy", removable: true },
          { name: "Allium", removable: true },
          { name: "Egg", removable: true },
          { name: "Sesame oil", removable: true },
        ],
        pairing:
          "Chardonnay/Roussanne, Stolpman 'Uni' Ballard Canyon California 2022",
      },
      {
        name: "Thirty Below",
        description:
          "Dungeness Crab, avocado, and cucumber inside, crowned with spicy tuna and arare rice puffs for crunch. Served with ponzu.",
        ingredients:
          "Inside: Dungeness Crab, avocado, cucumber; top: spicy tuna, arare (rice puffs); served with ponzu",
        dietary: [
          { name: "Shellfish", removable: false },
          { name: "Allium", removable: false },
          { name: "Sesame oil", removable: false },
          { name: "Egg", removable: false },
          { name: "Soy", removable: true },
        ],
      },
      {
        name: "Seaside",
        description:
          "A clean, elegant roll of Dungeness Crab, ripe avocado, and cool cucumber. Served with soy sauce.",
        ingredients: "Dungeness Crab, avocado, cucumber; served with soy sauce",
        dietary: [
          { name: "Shellfish", removable: false },
          { name: "Egg", removable: true },
        ],
      },
      {
        name: "The Diver",
        description:
          "Six pieces featuring deep-fried soft-shell blue crab and Dungeness Crab, with avocado, carrots, cucumber, shiso, and radish sprouts. Served with soy sauce.",
        ingredients:
          "Deep-fried soft-shell blue crab, Dungeness Crab, avocado, carrots, cucumber, shiso, radish sprouts (6 pcs); served with soy sauce",
        dietary: [
          { name: "Shellfish", removable: false },
          { name: "Egg", removable: true },
        ],
      },
      {
        name: "At Shore",
        description:
          "A beautiful vegetarian roll of avocado, carrots, cucumber, fragrant shiso, and delicate radish sprouts. Served with soy sauce.",
        ingredients:
          "Avocado, carrots, cucumber, shiso, radish sprouts; served with soy sauce",
        dietary: [],
      },
      {
        name: "Beneath the Waves",
        description:
          "Crispy shrimp tempura with avocado, radish sprouts, and kewpie mayo. Served with soy sauce.",
        ingredients:
          "Shrimp tempura, avocado, radish sprouts, kewpie mayo; served with soy sauce",
        dietary: [
          { name: "Shellfish", removable: false },
          { name: "Soy bean oil", removable: false },
          { name: "Egg", removable: true },
        ],
      },
      {
        name: "Ocean Whistle",
        description:
          "Dungeness Crab, avocado, and cucumber inside, draped with seared soy-marinated tuna and sliced avocado on top. Served with soy sauce.",
        ingredients:
          "Inside: Dungeness Crab, avocado, cucumber; top: seared soy-marinated tuna, sliced avocado; served with soy sauce",
        dietary: [
          { name: "Shellfish", removable: false },
          { name: "Egg", removable: false },
          { name: "Soy", removable: true },
        ],
      },
      {
        name: "Fakuda",
        description:
          "Spicy tuna inside, crowned with cold-smoked kanpachi, jalapeño, and a touch of sriracha heat. Served with ponzu.",
        ingredients:
          "Inside: spicy tuna; top: smoked kanpachi (amberjack), jalapeño, sriracha; served with ponzu",
        dietary: [
          { name: "Sesame oil", removable: true },
          { name: "Egg", removable: true },
          { name: "Allium", removable: true },
        ],
      },
      {
        name: "The Pearl",
        description:
          "Tempura-battered Maine lobster, avocado, and radish sprouts with kewpie mayo, elegantly wrapped in soy paper. Served with soy sauce.",
        ingredients:
          "Tempura-battered Maine lobster, avocado, radish sprouts, kewpie mayo, soy paper; served with soy sauce",
        dietary: [
          { name: "Egg", removable: false },
          { name: "Shellfish", removable: false },
          { name: "Soy bean oil", removable: false },
        ],
      },
    ],
  },
  {
    id: "classic-rolls",
    label: "Classic Rolls",
    sublabel: "Timeless Expressions",
    items: [
      {
        name: "Hon-Maguro",
        description:
          "Premium Bluefin Tuna sourced from Mexico or Spain, paired with vinegared sushi rice and nori.",
        ingredients: "Bluefin Tuna (Mexico or Spain), vinegared rice, nori",
        dietary: [{ name: "Fish", removable: false }],
      },
      {
        name: "Masunosuke",
        description:
          "Pristine New Zealand King Salmon with vinegared sushi rice and nori.",
        ingredients: "King Salmon, vinegared rice, nori",
        dietary: [{ name: "Fish", removable: false }],
      },
      {
        name: "Kanpachi",
        description:
          "Cold-smoked amberjack with vinegared sushi rice and nori — a signature preparation.",
        ingredients: "Cold smoked amberjack, vinegared rice, nori",
        dietary: [{ name: "Fish", removable: false }],
      },
      {
        name: "Negitoro",
        description:
          "Minced toro (fatty Bluefin belly from Baja California) with green onions, vinegared rice, and nori — rich and deeply satisfying.",
        ingredients:
          "Minced Toro (fatty tuna, Baja California), green onions, vinegared rice, nori",
        dietary: [{ name: "Allium", removable: true }],
      },
      {
        name: "Kappa",
        description:
          "The classic cucumber roll — clean, cool, and refreshing. Named for the Japanese water sprite said to love cucumbers.",
        ingredients: "Cucumber, vinegared rice, nori",
        dietary: [],
      },
      {
        name: "Avocado",
        description:
          "Ripe Carpinteria avocado with vinegared sushi rice and nori — creamy, simple, perfect.",
        ingredients: "Carpinteria avocado, vinegared rice, nori",
        dietary: [],
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    sublabel: "Sweet Endings",
    items: [
      {
        name: "Okinawa Mochi Cake",
        description:
          "Pan-seared butter mochi cake served alongside Okinawa brown sugar ice cream and an Okinawa sugar crumble, with Asian apple compote and apple caramel sauce poured tableside.",
        ingredients:
          "Butter mochi cake, Okinawa sugar ice cream, Okinawa sugar crumble, Asian apple compote, apple caramel sauce",
        dietary: [
          { name: "Gluten", removable: true },
          { name: "Dairy", removable: false },
          { name: "Eggs", removable: false },
          { name: "Nuts", removable: true },
        ],
        note: "The apple caramel sauce is poured tableside — prepare the presentation and make it a moment for the guest.",
      },
      {
        name: "Intense Chocolate Soba",
        description:
          "A study in chocolate: 68% Peruvian chocolate mousse, chocolate sorbet, crispy buckwheat tuile, buckwheat praline, and caramelized buckwheat with fleur de sel.",
        ingredients:
          "68% Peruvian chocolate mousse, chocolate sorbet, crispy buckwheat tuile, buckwheat praline, caramelized buckwheat, fleur de sel",
        dietary: [
          { name: "Dairy", removable: false },
          { name: "Eggs", removable: false },
        ],
      },
      {
        name: "Matcha Roll Cake",
        description:
          "A delicate matcha roll cake filled with vanilla mousse and raspberry compote, finished with gelatin glaze — available for special occasions.",
        ingredients: "Matcha roll, vanilla mousse, raspberry compote, gelatin",
        dietary: [
          { name: "Dairy", removable: false },
          { name: "Egg", removable: false },
        ],
        isSpecial: true,
        note: "Available for special occasions — please confirm availability with the kitchen.",
      },
    ],
  },
];

// Flat lookup map for chat mode
export const MENU_ITEM_MAP = new Map<string, MenuItem>();
for (const section of MENU_SECTIONS) {
  for (const item of section.items) {
    MENU_ITEM_MAP.set(item.name.toLowerCase(), item);
  }
}

export const ALL_MENU_ITEMS: MenuItem[] = MENU_SECTIONS.flatMap((s) => s.items);
