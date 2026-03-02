import { GLOSSARY_TERMS } from "./glossaryData";
import { ALL_MENU_ITEMS, MENU_SECTIONS, type MenuItem } from "./menuData";

type ChatResponse = {
  text: string;
};

function normalize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function findMenuItem(query: string): MenuItem | undefined {
  const q = normalize(query);
  return ALL_MENU_ITEMS.find((item) => {
    const name = normalize(item.name);
    return (
      q.includes(name) ||
      name.includes(q.replace(/what.*(is|are|in)\s+/g, "").trim())
    );
  });
}

function findGlossaryTerm(
  query: string,
): (typeof GLOSSARY_TERMS)[number] | undefined {
  const q = normalize(query);
  return GLOSSARY_TERMS.find((t) => {
    const term = normalize(t.term);
    return (
      q.includes(term) ||
      term.includes(q.replace(/what\s+(is|are)\s+/g, "").trim())
    );
  });
}

function formatDietary(item: MenuItem): string {
  if (!item.dietary.length) return "This dish contains no listed allergens.";
  const parts = item.dietary.map((d) =>
    d.removable ? `${d.name} (CBR — can be omitted upon request)` : d.name,
  );
  return `The allergens present are: ${parts.join(", ")}.`;
}

function formatPairing(item: MenuItem): string {
  if (!item.pairing)
    return "There is no specific beverage pairing listed for this dish — your sommelier can advise further.";
  return `We recommend pairing it with ${item.pairing}.`;
}

function isSafeFor(item: MenuItem, allergen: string): string {
  const found = item.dietary.find((d) =>
    normalize(d.name).includes(normalize(allergen)),
  );
  if (!found) {
    return `${item.name} does not list ${allergen} as a primary allergen, which is promising. However, please always confirm with the kitchen for guests with genuine allergies — cross-contamination in a professional kitchen is always a consideration.`;
  }
  if (found.removable) {
    return `${item.name} contains ${found.name}, but it is marked CBR — it can be omitted upon request. Please confirm with the kitchen before advising the guest that the modification is confirmed.`;
  }
  return `${item.name} contains ${found.name} as a core ingredient, which cannot be removed. I would advise recommending an alternative dish to a guest with this allergy, and please do escalate to the chef for any serious allergy concern.`;
}

export function generateResponse(userMessage: string): ChatResponse {
  const q = normalize(userMessage);

  // Greeting
  if (
    /^(hello|hi|hey|good morning|good evening|good afternoon|konnichiwa)/.test(
      q,
    )
  ) {
    return {
      text: "Good evening, and welcome. I am Umi — your guide through the AMA Sushi menu and the culinary traditions of Japan. How may I assist you today? You may ask me about any dish, ingredient, pairing, or technique, and I will do my best to serve you well.",
    };
  }

  // What is [term] — check glossary first
  const glossaryMatch = findGlossaryTerm(q);
  if (
    glossaryMatch &&
    (q.includes("what is") ||
      q.includes("what are") ||
      q.includes("explain") ||
      q.includes("define") ||
      q.includes("tell me about"))
  ) {
    const dishes =
      glossaryMatch.relatedDishes && glossaryMatch.relatedDishes.length > 0
        ? ` On our menu, you will find it featured in: ${glossaryMatch.relatedDishes.join(", ")}.`
        : "";
    return {
      text: `**${glossaryMatch.term}** — ${glossaryMatch.definition}${dishes}`,
    };
  }

  // What's in [dish] / ingredients
  if (
    q.includes("what") &&
    (q.includes("in") ||
      q.includes("ingredient") ||
      q.includes("made of") ||
      q.includes("contain"))
  ) {
    const item = findMenuItem(q);
    if (item) {
      return {
        text: `**${item.name}** is composed of: ${item.ingredients ?? item.description}\n\n${formatDietary(item)}${item.pairing ? `\n\nFor the ideal beverage accompaniment, we suggest: *${item.pairing}*.` : ""}`,
      };
    }
  }

  // Allergen / safe for
  if (
    q.includes("allerg") ||
    q.includes("safe for") ||
    q.includes("contain") ||
    q.includes("dietary")
  ) {
    // Check for specific allergen + dish
    const allergens = [
      "shellfish",
      "fish",
      "soy",
      "gluten",
      "egg",
      "dairy",
      "nut",
      "sesame",
      "allium",
      "alcohol",
    ];
    const mentionedAllergen = allergens.find((a) => q.includes(a));
    const item = findMenuItem(q);

    if (item && mentionedAllergen) {
      return { text: isSafeFor(item, mentionedAllergen) };
    }

    if (item) {
      return {
        text: `Regarding **${item.name}**: ${formatDietary(item)}\n\nRemember — CBR means the allergen is present but may be omitted upon request. For guests with genuine allergies, please always confirm with the kitchen before proceeding.`,
      };
    }

    // Shellfish allergy — recommend safe rolls
    if (
      mentionedAllergen === "shellfish" &&
      (q.includes("roll") || q.includes("recommend"))
    ) {
      const safeRolls = ALL_MENU_ITEMS.filter((item) => {
        const hasShellfish = item.dietary.find((d) =>
          normalize(d.name).includes("shellfish"),
        );
        return !hasShellfish;
      });
      const rollNames = safeRolls.map((r) => r.name).join(", ");
      return {
        text: `For a guest with a shellfish allergy, the following dishes do not list shellfish as an allergen: ${rollNames}.\n\nAs always, please confirm with the kitchen for any serious allergy, as cross-contamination is always possible in a professional kitchen environment.`,
      };
    }
  }

  // How to describe [dish] to a guest
  if (
    q.includes("describe") ||
    q.includes("how do i") ||
    q.includes("how to") ||
    q.includes("tell a guest")
  ) {
    const item = findMenuItem(q);
    if (item) {
      return {
        text: `When describing **${item.name}** to a guest, you might say:\n\n*"${item.description}"*\n\n${item.pairing ? `For beverage guidance, you can add: *'We recommend it with ${item.pairing}.'*` : ""}${item.note ? `\n\n${item.note}` : ""}`,
      };
    }
  }

  // What pairs with [dish]
  if (
    q.includes("pair") ||
    q.includes("drink") ||
    q.includes("beverage") ||
    q.includes("wine") ||
    q.includes("sake")
  ) {
    const item = findMenuItem(q);
    if (item) {
      return { text: `**${item.name}** — ${formatPairing(item)}` };
    }

    // General pairing info
    if (q.includes("sake") && !findMenuItem(q)) {
      return {
        text: "Our sake program spans Junmai Ginjo, Tokubetsu Junmai, Junmai Daiginjo, and Nigori styles, curated to complement each section of the menu. Junmai Daiginjo — rice polished to at least 50% — offers the most aromatic and refined expression, ideal alongside our seafood and wagyu dishes. Please refer to the specific pairing listed for each dish on the menu for the most precise recommendation.",
      };
    }
  }

  // CBR explanation
  if (q.includes("cbr")) {
    return {
      text: "CBR stands for 'Contains, But Removable.' When you see this designation next to an allergen on our menu, it means that the allergen is present in the standard preparation of the dish, but it can be omitted or adjusted upon the guest's request. Allergens listed without CBR are core ingredients that cannot be removed. When a guest has a genuine allergy, always confirm the modification with the kitchen — guest safety is paramount.",
    };
  }

  // Miso soup service
  if (q.includes("miso")) {
    const misoItem = ALL_MENU_ITEMS.find((i) => i.name === "Miso Soup");
    return {
      text: `Our **Miso Soup** is prepared with ${misoItem?.ingredients ?? "wakame, tofu, shiitake mushrooms, and a house dashi"}.\n\nA note on service: miso soup is traditionally sipped directly from the bowl in Japanese culture. When presenting it to guests, you may mention this gracefully — it is a lovely cultural touchpoint — while ensuring that spoons are available for those who prefer them.`,
    };
  }

  // Edamame service
  if (q.includes("edamame")) {
    return {
      text: "Edamame — steamed whole soybeans with sea salt — is a complimentary gift from the chef. When presenting it to guests, introduce it warmly: *'This is a complimentary welcome from our chef — gently steamed soybeans with sea salt, to begin your evening.'* It sets a tone of genuine generosity that guests always appreciate.\n\nDietary note: Edamame contains soy.",
    };
  }

  // Wagyu information
  if (q.includes("wagyu") || q.includes("a5")) {
    return {
      text: "Wagyu refers to a Japanese breed of cattle celebrated for its extraordinary intramuscular fat marbling, which yields an unparalleled richness and tenderness. We feature two wagyu preparations:\n\n**Masumi American Wagyu** — grilled over binchotan with a teriyaki glaze, watercress, and crispy Brussels sprouts. Paired with Iwa 5 Junmai Daiginjo.\n\n**Miyazaki A5 Wagyu Ribeye** — the pinnacle of Japanese beef, Grade A5 from Miyazaki, grilled over binchotan and presented on a hot stone with watercress, seaweed salt, and sumiso sauce. Paired with Heitz Cellar Cabernet Sauvignon, Napa Valley 2018.",
    };
  }

  // Binchotan
  if (q.includes("binchotan")) {
    return {
      text: "Binchotan is a refined type of white oak charcoal from Japan, prized for its clean, steady, and intensely radiant heat. Unlike ordinary charcoal, it produces almost no smoke or odor, allowing the natural flavors of the protein to be the focus while imparting the subtlest, most elegant smokiness. At AMA, we use binchotan for the Tori No Teriyaki, Masumi American Wagyu, and Miyazaki A5 Wagyu Ribeye.",
    };
  }

  // Tableside service
  if (q.includes("tableside") || q.includes("table side")) {
    return {
      text: "At AMA Sushi, we have two beloved tableside service moments:\n\n**Ponzu** — served with several of our sashimi and specialty rolls, ponzu is poured tableside. This is a graceful, theatrical gesture — present the vessel elegantly and pour with care.\n\n**Apple Caramel Sauce** — the warm sauce accompanying the Okinawa Mochi Cake is poured tableside. Prepare the presentation thoughtfully and make it a moment the guest will remember.",
    };
  }

  // Section listing
  if (
    q.includes("menu") &&
    (q.includes("section") || q.includes("what") || q.includes("show"))
  ) {
    const sections = MENU_SECTIONS.map(
      (s) => `**${s.label}** — ${s.items.map((i) => i.name).join(", ")}`,
    ).join("\n\n");
    return {
      text: `Our menu is organized into the following sections:\n\n${sections}`,
    };
  }

  // Specific item lookups without explicit intent markers
  const directItemLookup = findMenuItem(q);
  if (directItemLookup) {
    return {
      text: `**${directItemLookup.name}** — ${directItemLookup.description}\n\n*Ingredients:* ${directItemLookup.ingredients ?? "See menu"}\n\n*Dietary:* ${formatDietary(directItemLookup)}${directItemLookup.pairing ? `\n\n*Pairing:* ${directItemLookup.pairing}` : ""}${directItemLookup.note ? `\n\n*Service note:* ${directItemLookup.note}` : ""}`,
    };
  }

  // Glossary term lookup without intent
  if (glossaryMatch) {
    return {
      text: `**${glossaryMatch.term}** — ${glossaryMatch.definition}${glossaryMatch.relatedDishes?.length ? ` Featured in: ${glossaryMatch.relatedDishes.join(", ")}.` : ""}`,
    };
  }

  // Default fallback
  return {
    text: "That is a thoughtful question. I am best equipped to assist with details about our menu items — ingredients, allergens, beverage pairings, preparation techniques, Japanese culinary terms, and service guidance. Please feel free to ask about any specific dish, ingredient, or technique, and I will offer everything I know.",
  };
}
