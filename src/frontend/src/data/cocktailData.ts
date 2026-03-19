export type Cocktail = {
  id: string;
  name: string;
  japaneseMeaning: string;
  style: string;
  glass: string;
  ingredients: string[];
  garnish: string;
  serviceSequence: string[];
  description: string;
  guestOneLiner: string;
  dietary: string[];
  isAlcoholic: boolean;
  staffNote?: string;
  serviceNote?: string;
};

export type SignatureSpirit = {
  name: string;
  description: string;
};

export const SIGNATURE_SPIRITS: SignatureSpirit[] = [
  {
    name: "Shibui Grain Select",
    description: "A Japanese-style whiskey, clean and approachable.",
  },
  {
    name: "Nikka Days",
    description:
      "A blended Japanese whisky designed to be light and accessible — ideal for non-whisky drinkers.",
  },
  {
    name: "Shitake Toki",
    description:
      "A shiitake mushroom-infused Japanese whisky, umami-forward with an earthy savory depth.",
  },
  {
    name: "Kikori",
    description: "A rice whisky from Japan — light, delicate, and refined.",
  },
  {
    name: "Nikka Coffey Gin",
    description:
      "A Japanese gin distilled in a Coffey still. Softer and more grain-forward than London Dry.",
  },
  {
    name: "Roku Gin",
    description:
      "Suntory's Japanese gin, featuring six Japanese botanicals including sakura flower, yuzu peel, and sencha tea.",
  },
  {
    name: "Bacardi / Kiyomi",
    description:
      "Bacardi rum paired with Kiyomi — an Okinawan rum made from local sugarcane. A dual-rum base.",
  },
  {
    name: "Haku Vodka",
    description:
      "Suntory's Japanese vodka made from white rice. Exceptionally smooth and delicate.",
  },
  {
    name: "Furikake",
    description:
      "A Japanese seasoning blend of sesame, seaweed, and salt — used as a cocktail garnish that slowly infuses into the drink.",
  },
  {
    name: "Shiso",
    description:
      "A Japanese herb in the mint family with a distinctive herbal, slightly anise-like flavor.",
  },
  {
    name: "Yuzu",
    description:
      "A Japanese citrus fruit — more aromatic and complex than lemon or lime, with a floral, tart character.",
  },
];

export const COCKTAILS: Cocktail[] = [
  {
    id: "ryu-no-shizuku",
    name: "RYŪ NO SHIZUKU",
    japaneseMeaning: "Dragon's Drop",
    style: "Whiskey Highball",
    glass: "Highball",
    ingredients: [
      "2oz Shibui Grain Select",
      "1oz Dragon fruit juice",
      "0.5oz Ginger syrup (house-made)",
      "0.5oz Lime juice",
    ],
    garnish: "Dry dragon fruit",
    serviceSequence: [
      "Prepare glass with ice",
      "Build cocktail in glass",
      "Lift ice 1–2 times to mix",
    ],
    description:
      "A very palatable whiskey cocktail made with fresh dragon fruit juice. The house-made ginger syrup adds a little kick and an extra layer of depth. Served as a highball.",
    guestOneLiner:
      "This is our dragon fruit whiskey highball — Shibui grain whiskey with fresh dragon fruit and house-made ginger syrup. It's bright, slightly spicy, and drinks very easily.",
    dietary: [],
    isAlcoholic: true,
  },
  {
    id: "komorebi",
    name: "KOMOREBI",
    japaneseMeaning: "Sunlight Through Leaves",
    style: "Tropical Whisky Highball",
    glass: "Highball",
    ingredients: [
      "1.5oz Nikka Days",
      "0.5oz Lemon",
      "1oz Pineapple mango cordial",
      "Top with soda",
    ],
    garnish: "Pineapple leaf, Dried mango",
    serviceSequence: [
      "Prepare glass with ice",
      "Build cocktail in glass",
      "Top with soda",
      "Lift ice 1–2 times to mix",
    ],
    description:
      "A tropical take on a highball cocktail featuring Nikka Days Whisky. Made specifically with non-whisky drinkers in mind — approachable, fruit-forward, and refreshing.",
    guestOneLiner:
      "Komorebi means sunlight filtering through leaves — it's our tropical whisky highball, made with Nikka Days and a pineapple mango cordial. It was designed specifically for guests who don't normally drink whisky.",
    dietary: [],
    isAlcoholic: true,
  },
  {
    id: "daichi-no-kaori",
    name: "DAICHI NO KAORI",
    japaneseMeaning: "Scent of the Earth",
    style: "Umami Highball",
    glass: "Highball",
    ingredients: [
      "1.5oz Shitake Toki (shiitake-infused whisky)",
      "0.25oz Date amaro (local)",
      "0.25oz Honey",
      "2 dashes Angostura bitters",
    ],
    garnish: "Shitake mushroom dust, Lemon twist",
    serviceSequence: [
      "Prepare glass with ice",
      "Build cocktail in glass",
      "Lift ice 1–2 times to mix",
    ],
    description:
      "A umami take on a traditional highball using locally sourced date amaro. Qualities of date and honey hit the palate initially, followed by a distinctive mushroom finish.",
    guestOneLiner:
      "Daichi No Kaori means 'scent of the earth' — it's a umami-forward highball made with shiitake-infused whisky and a local date amaro. It's earthy, a little sweet, with a savory mushroom finish unlike anything else on the menu.",
    dietary: [],
    isAlcoholic: true,
  },
  {
    id: "odaya",
    name: "ODAYA",
    japaneseMeaning: "Calm / Tranquil",
    style: "Rum Sour",
    glass: "Rocks glass with pebble ice",
    ingredients: [
      "1oz Bacardi",
      "1oz Kiyomi (Okinawan rum)",
      "1oz Yuzu (local)",
      "0.75oz Shiso syrup",
      "2 dashes Angostura bitters",
    ],
    garnish: "Furikake, Shiso leaf",
    serviceSequence: [
      "Fill glass with pebble ice",
      "Build cocktail in shaker",
      "Whip, shake, and strain into glass",
    ],
    description:
      "Using yuzu, shiso syrup, and Okinawan rum, this cocktail has a unique balance of citrus and herbal flavors with a distinct rum aroma. Furikake garnish adds a subtle savory Japanese dimension.",
    guestOneLiner:
      "Odaya means calm — it's a rum cocktail with local yuzu citrus and shiso syrup, which is a Japanese herb with a beautiful herbal quality. It's topped with furikake, a Japanese seasoning that slowly infuses into the drink.",
    dietary: [],
    isAlcoholic: true,
  },
  {
    id: "henka",
    name: "HENKA",
    japaneseMeaning: "Change / Transformation",
    style: "Warm Milk Punch",
    glass: "Transparent glass teapot + mini glasses",
    ingredients: [
      "10oz Milk punch (Haku vodka, green tea syrup, lemon, sochu)",
      "3oz Hot water",
      "Dried strawberries",
    ],
    garnish: "None (served in teapot)",
    serviceSequence: [
      "Take pre-heated bag out of sous vide",
      "Pour over dried strawberries in teapot",
      "Add 3oz hot water",
      "Remove strawberries from teapot before serving",
    ],
    description:
      "A homage to Japanese tea service, best enjoyed with company. Light acidity and strawberry flavors. Served warm. Best enjoyed at the beginning or end of the meal — pairs beautifully with dessert.",
    guestOneLiner:
      "Henka means transformation — this is our most theatrical cocktail. It's a warm milk punch served in a traditional Japanese teapot, made with Haku rice vodka and green tea. It's designed to be shared and pairs beautifully with dessert.",
    dietary: ["Contains Dairy"],
    isAlcoholic: true,
    serviceNote:
      "This is a tableside experience — present the teapot gracefully, explain the concept. It's a sharing moment.",
  },
  {
    id: "fuka",
    name: "FŪKA",
    japaneseMeaning: "Wind and Flower",
    style: "Last Word variation",
    glass: "Nick & Nora",
    ingredients: [
      "0.75oz Roku gin",
      "0.75oz Lychee liqueur",
      "0.75oz Green Chartreuse",
      "0.75oz Lime juice",
    ],
    garnish: "Lychee fruit",
    serviceSequence: [
      "Prep glass and lychee garnish",
      "Build in shaker",
      "Shake and double strain",
    ],
    description:
      "AMA's own twist on The Last Word — a Prohibition-era classic. Equal parts Roku gin, green Chartreuse, lychee liqueur, and fresh lime juice. Complex yet balanced with a hint of lychee.",
    guestOneLiner:
      "Fūka is our twist on The Last Word — a Prohibition-era cocktail that's equal parts gin, Chartreuse, and citrus. We've added lychee liqueur and use Roku, a Japanese gin with sakura and yuzu botanicals. It's complex, balanced, and very elegant.",
    dietary: [],
    isAlcoholic: true,
    staffNote:
      "The Last Word is a classic cocktail from the 1920s Detroit Athletic Club — equal parts format. Our version substitutes lychee for maraschino. A wonderful story to tell.",
  },
  {
    id: "dashi",
    name: "DASHI",
    japaneseMeaning: "Stock / Essence",
    style: "Umami Martini",
    glass: "Martini glass (served with sidecar)",
    ingredients: [
      "1.5oz Nikka Coffey Gin",
      "1.5oz Noilly Prat white miso vermouth",
    ],
    garnish: "3–5 drops of green onion oil (top)",
    serviceSequence: [
      "Stir",
      "Strain into sidecar",
      "Present with martini glass",
      "Top with 3–5 drops of green onion oil tableside",
    ],
    description:
      "A martini conceived to imitate miso soup. Nikka Coffey Gin, miso vermouth, and green onion oil — savory, elegant, and deeply Japanese.",
    guestOneLiner:
      "Dashi is our umami martini — it's designed to taste like a refined miso soup in cocktail form. Nikka Coffey Gin, miso-infused vermouth, and a few drops of green onion oil on top. It's one of the most unique things on the menu.",
    dietary: ["Contains allium (green onion oil)"],
    isAlcoholic: true,
    serviceNote:
      "Strain into sidecar at the table and pour into the martini glass in front of the guest. Add the green onion oil drops tableside. This is a service moment.",
  },
  {
    id: "kohaku-yume",
    name: "KOHAKU YUME",
    japaneseMeaning: "Amber Dream",
    style: "Old Fashioned",
    glass: "Rocks glass with large ice cube",
    ingredients: [
      "1.5oz Kikori fat-washed whiskey",
      "0.25oz Amaro Nonino",
      "0.25oz Cacao liqueur",
      "2 dashes Angostura bitters",
    ],
    garnish: "Orange twist",
    serviceSequence: [
      "Take chilled glass",
      "Add large ice cube",
      "Stir and strain",
      "Add orange twist",
    ],
    description:
      "An old fashioned style cocktail using Kikori — a light Japanese rice whisky — fat-washed for richness, then elevated with Amaro Nonino and cacao liqueur. Robust and buttery with light citrus and chocolate qualities.",
    guestOneLiner:
      "Kohaku Yume means amber dream — it's our old fashioned, made with Kikori rice whisky that's been fat-washed for extra richness, then layered with cacao and Amaro Nonino. It's buttery, slightly chocolatey, with a beautiful orange note.",
    dietary: [],
    isAlcoholic: true,
    staffNote:
      "Fat-washing is a technique where butter or fat is blended with spirits then frozen — the fat solidifies and is removed, leaving behind its flavor. Worth explaining if a guest asks why it's described as buttery.",
  },
  // Mocktails
  {
    id: "furyu",
    name: "FŪRYŪ",
    japaneseMeaning: "Elegance / Refined Taste",
    style: "Dragon Fruit Mocktail Highball",
    glass: "Highball",
    ingredients: ["1.5oz Dragon fruit", "0.5oz Ginger", "0.5oz Lime juice"],
    garnish: "Dry dragon fruit",
    serviceSequence: [
      "Prepare glass with ice",
      "Build cocktail in glass",
      "Lift ice 1–2 times to mix",
    ],
    description:
      "A light, refreshing dragon fruit mocktail with a gentle kick from ginger. The non-alcoholic counterpart to Ryū No Shizuku.",
    guestOneLiner:
      "Fūryū is our dragon fruit mocktail — dragon fruit, fresh ginger, and lime. Light, refreshing, and genuinely delicious. It's not an afterthought — it's designed to be just as enjoyable as our cocktail menu.",
    dietary: ["No alcohol"],
    isAlcoholic: false,
  },
  {
    id: "yoka",
    name: "YŌKA",
    japaneseMeaning: "Sunshine / Radiance",
    style: "Tropical Mocktail Highball",
    glass: "Highball",
    ingredients: ["1oz Mango/Pineapple", "0.5oz Lemon", "Top with soda"],
    garnish: "Pineapple leaf, Dried mango",
    serviceSequence: [
      "Prepare glass with ice",
      "Build cocktail in glass",
      "Top with soda",
      "Lift ice 1–2 times to mix",
    ],
    description:
      "A tropical mocktail with mango and pineapple as a highball with soda. The non-alcoholic counterpart to Komorebi.",
    guestOneLiner:
      "Yōka is our tropical mocktail — mango, pineapple, lemon, and soda. Fresh, bright, and beautifully presented. A wonderful choice for guests who prefer not to drink.",
    dietary: ["No alcohol"],
    isAlcoholic: false,
  },
  {
    id: "hakuro",
    name: "HAKURO",
    japaneseMeaning: "White Dew",
    style: "Yuzu Shiso Mocktail",
    glass: "Rocks glass with pebble ice",
    ingredients: ["2oz Yuzu", "1.5oz Shiso"],
    garnish: "Furikake, Shiso leaf",
    serviceSequence: [
      "Fill glass with pebble ice",
      "Whip, shake, and strain",
      "Top with furikake",
    ],
    description:
      "A light and refreshing mocktail with unique complexity from the combination of yuzu citrus and shiso herb. Topped with furikake that slowly infuses into the drink over time.",
    guestOneLiner:
      "Hakuro means white dew — it's yuzu and shiso without any alcohol, served over pebble ice with furikake on top. The furikake slowly infuses into the drink as you enjoy it, adding a savory dimension. It's quite beautiful.",
    dietary: ["No alcohol"],
    isAlcoholic: false,
  },
];

export type GuestGuidance = {
  title: string;
  body: string;
};

export const GUEST_GUIDANCE: GuestGuidance[] = [
  {
    title: "For guests who don't drink alcohol",
    body: "Fūryū, Yōka, and Hakuro are three dedicated mocktails crafted with the same attention and care as the alcoholic menu. Never position them as lesser options — they are independently designed to be equally enjoyable.",
  },
  {
    title: "For guests new to Japanese spirits",
    body: "Start with Komorebi (Nikka Days) or Ryū No Shizuku (Shibui) — both are accessible, fruit-forward, and designed for approachability. Avoid leading with Dashi or Daichi No Kaori for guests unfamiliar with umami-forward cocktails.",
  },
  {
    title: "For guests who want something unique and conversation-worthy",
    body: "Henka (the teapot milk punch) and Dashi (the miso martini) are the two most distinctive and story-rich cocktails on the menu. Both reward explanation and create memorable tableside moments.",
  },
];

export function findCocktail(query: string): Cocktail | undefined {
  const q = query.toLowerCase();
  return COCKTAILS.find(
    (c) =>
      q.includes(c.name.toLowerCase()) ||
      q.includes(c.id) ||
      q.includes(c.japaneseMeaning.toLowerCase()) ||
      (c.id === "ryu-no-shizuku" &&
        (q.includes("ryu") ||
          q.includes("dragon drop") ||
          q.includes("dragon fruit whiskey") ||
          q.includes("shibui"))) ||
      (c.id === "komorebi" &&
        (q.includes("komorebi") ||
          q.includes("sunlight through leaves") ||
          q.includes("nikka days cocktail"))) ||
      (c.id === "daichi-no-kaori" &&
        (q.includes("daichi") ||
          q.includes("scent of the earth") ||
          q.includes("shiitake cocktail") ||
          q.includes("umami highball"))) ||
      (c.id === "odaya" &&
        (q.includes("odaya") ||
          q.includes("rum sour") ||
          q.includes("calm cocktail"))) ||
      (c.id === "henka" &&
        (q.includes("henka") ||
          q.includes("teapot") ||
          q.includes("milk punch") ||
          q.includes("transformation cocktail"))) ||
      (c.id === "fuka" &&
        (q.includes("fuka") ||
          q.includes("wind and flower") ||
          q.includes("last word") ||
          q.includes("lychee gin"))) ||
      (c.id === "dashi" &&
        (q.includes("dashi cocktail") ||
          q.includes("miso martini") ||
          q.includes("umami martini"))) ||
      (c.id === "kohaku-yume" &&
        (q.includes("kohaku") ||
          q.includes("amber dream") ||
          q.includes("old fashioned ama") ||
          q.includes("fat wash") ||
          q.includes("fat-wash") ||
          q.includes("kikori cocktail"))) ||
      (c.id === "furyu" &&
        (q.includes("furyu") ||
          q.includes("elegance mocktail") ||
          q.includes("dragon fruit mocktail"))) ||
      (c.id === "yoka" &&
        (q.includes("yoka") ||
          q.includes("sunshine mocktail") ||
          q.includes("tropical mocktail"))) ||
      (c.id === "hakuro" &&
        (q.includes("hakuro") ||
          q.includes("white dew") ||
          q.includes("yuzu shiso mocktail"))),
  );
}
