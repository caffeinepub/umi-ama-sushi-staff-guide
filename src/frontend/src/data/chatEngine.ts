import {
  COCKTAILS,
  GUEST_GUIDANCE,
  SIGNATURE_SPIRITS,
  findCocktail,
} from "./cocktailData";
import { GLOSSARY_TERMS } from "./glossaryData";
import { ALL_MENU_ITEMS, MENU_SECTIONS, type MenuItem } from "./menuData";
import {
  SAKE_BOTTLES,
  SAKE_BOTTLE_GUEST_GUIDANCE,
  SAKE_BOTTLE_RICE_VARIETIES,
  SAKE_METHODS_GLOSSARY,
  findSakeBottle,
} from "./sakeBottleData";
import {
  SAKES,
  SAKE_CLASSIFICATIONS,
  SAKE_LADDER,
  findSake,
  smvLabel,
} from "./sakeData";
import {
  BURGUNDY_KEY_TERMS,
  BURGUNDY_VILLAGES,
  VILLAGE_POSITIONING,
  WHITE_BURGUNDY_WINES,
  findWhiteBurgundy,
} from "./whiteBurgundyData";
import {
  WINE_BOTTLES,
  WINE_BOTTLE_GUEST_GUIDANCE,
  findWineBottle,
} from "./wineBottleData";
import { WINES, findWine } from "./wineData";

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

  // Forbes Five-Star standards
  if (
    q.includes("forbes") ||
    q.includes("five star") ||
    q.includes("five-star") ||
    q.includes("5 star")
  ) {
    return {
      text: "Forbes Five-Star status represents the pinnacle of the hospitality industry — a distinction earned by Rosewood Miramar Beach and upheld by every member of our team at AMA Sushi.\n\nForbes inspectors visit anonymously, evaluating against hundreds of objective criteria. **75% of the score is based on service; 25% on physical facilities.** This means our conduct — how we greet, serve, anticipate, and farewell each guest — is the heart of everything.\n\nThe eight standards every AMA team member must know:\n1. Anticipate, don't react — the guest must never have to ask\n2. All guests served simultaneously; all guests cleared simultaneously\n3. No beverage empty for more than 30 seconds\n4. Cocktail service offered within 1 minute of seating\n5. Use the guest's name — Forbes credits this\n6. Never immediately refuse an off-menu request — always try first\n7. Zero personal staff conversations within guest earshot\n8. Tables ready within 5 minutes of reservation time",
    };
  }

  // Beverage refill timing
  if (
    q.includes("30 seconds") ||
    q.includes("beverage refill") ||
    q.includes("refill") ||
    (q.includes("beverage") && q.includes("empty"))
  ) {
    return {
      text: "No beverage — water, wine, sake, or any other drink — should be empty for more than **30 seconds**. This is a hard Forbes standard. Proactive beverage monitoring means you are watching every glass at the table continuously, not waiting until a guest notices. A guest should never need to ask for a refill.",
    };
  }

  // Cocktail offer timing
  if (
    (q.includes("cocktail") &&
      (q.includes("when") ||
        q.includes("minute") ||
        q.includes("time") ||
        q.includes("offer"))) ||
    q.includes("1 minute") ||
    q.includes("one minute")
  ) {
    return {
      text: "Cocktail service must be offered within **1 minute** of guests being seated — this is a hard Forbes standard. Do not wait for guests to look around or signal. Approach the table with quiet attentiveness and offer the cocktail menu or ask for their preference promptly after they are settled.",
    };
  }

  // Simultaneous service and clearing
  if (
    q.includes("simultaneous") ||
    (q.includes("clear") &&
      (q.includes("plate") || q.includes("table") || q.includes("together"))) ||
    (q.includes("serve") && q.includes("together"))
  ) {
    return {
      text: "Forbes requires that **all guests at a table are served simultaneously, course by course**, and that **all guests are cleared simultaneously — only after every guest has finished eating**.\n\nClearing a single guest's plate while others are still eating is a direct Forbes failure point. It creates an uncomfortable dynamic and signals inattentiveness to the dining rhythm of the table. Wait until every guest has set down their utensils and appears finished before initiating a clear.",
    };
  }

  // Guest name usage
  if (
    (q.includes("guest") && q.includes("name")) ||
    q.includes("address by name") ||
    q.includes("use their name")
  ) {
    return {
      text: "Forbes specifically credits staff for **addressing guests by name** when known — this is something many restaurants overlook entirely. When a reservation is made under a name, use it naturally and warmly: *'Good evening, Mr. and Mrs. Chen — welcome to AMA.'* Do not overuse it to the point of awkwardness, but a genuine, personal acknowledgment at greeting and departure makes a lasting impression.",
    };
  }

  // Off-menu requests
  if (
    q.includes("off menu") ||
    q.includes("off-menu") ||
    q.includes("not on the menu") ||
    (q.includes("request") && q.includes("decline"))
  ) {
    return {
      text: "The Forbes standard is clear: **never immediately refuse an off-menu request.** React graciously and accommodatingly, and always explore the possibility with the kitchen before declining.\n\nEven if the kitchen ultimately cannot accommodate, the guest's experience is entirely different when they feel heard and respected. Your first response should always convey genuine willingness: *'Let me check with our chef for you — I want to see what we can do.'*",
    };
  }

  // Bar check transfer
  if (
    q.includes("bar check") ||
    q.includes("bar tab") ||
    (q.includes("transfer") && (q.includes("bill") || q.includes("check")))
  ) {
    return {
      text: "Bar checks should be **automatically transferred to the restaurant bill** — the guest is never asked to manage this transition. This seamless handling is a mark of discreet, anticipatory service. The guest should never be aware of any administrative effort required behind the scenes.",
    };
  }

  // Proactive water
  if (
    (q.includes("water") &&
      (q.includes("proactive") || q.includes("offer") || q.includes("ask"))) ||
    q.includes("still and sparkling") ||
    q.includes("bottled water")
  ) {
    return {
      text: "**Bottled still and sparkling water must be offered to all guests proactively** — never wait to be asked. This is among the first service actions after seating. Present both options clearly: *'May I offer you still or sparkling water this evening?'* Monitoring and refilling water throughout the meal is a continuous responsibility.",
    };
  }

  // Anticipate needs / hard failure points
  if (
    q.includes("anticipate") ||
    q.includes("failure point") ||
    q.includes("hard standard") ||
    (q.includes("signal") && q.includes("guest"))
  ) {
    return {
      text: "The foundational Forbes principle is: **anticipate, don't react.** A guest must never need to signal for a staff member — all needs should be foreseen and addressed before the guest is aware of them.\n\nHard failure points Forbes inspectors specifically flag include:\n- Beverages left empty for more than 30 seconds\n- Guests having to signal or look for staff\n- Staff chatting among themselves within guest earshot or view\n- Clearing plates at different times (before the full table has finished)\n- Tables not ready within 5 minutes of reservation time\n\nEach of these represents a visible break in the fabric of Five-Star service.",
    };
  }

  // Arrival / escort / greeting
  if (
    (q.includes("arrival") ||
      q.includes("greet") ||
      q.includes("escort") ||
      q.includes("seat")) &&
    q.includes("forbes")
  ) {
    return {
      text: "At arrival, Forbes standards require that staff **proactively approach the guest** — never waiting to be noticed. Guests are always **escorted to their table**, never simply pointed in a direction. Coat storage is offered proactively.\n\nThe greeting sets the entire tone of the meal. It must be warm, unhurried, and make the guest feel genuinely expected and welcomed.",
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

  // Pronunciation query
  if (
    q.includes("pronounce") ||
    q.includes("how do you say") ||
    q.includes("how to say")
  ) {
    const wine = findWine(q);
    if (wine) {
      if (wine.pronunciation) {
        return {
          text: `**${wine.name}** is pronounced: *${wine.pronunciation}*.\n\n${wine.guestOneLiner}`,
        };
      }
      return {
        text: `**${wine.name}** has no special pronunciation guidance — the name is spoken as written. Here is how you might describe it to a guest: *"${wine.guestOneLiner}"*`,
      };
    }
  }

  // Wine glassware query
  if (
    q.includes("glassware") ||
    (q.includes("glass") &&
      (q.includes("which") ||
        q.includes("what") ||
        q.includes("use") ||
        q.includes("serve")))
  ) {
    const wine = findWine(q);
    if (wine) {
      return {
        text: `**${wine.name}** is served in a **${wine.glassware}**. ${
          wine.glassware === "Champagne flute"
            ? "The narrow flute preserves the bubbles and channels the delicate aromas upward."
            : wine.glassware === "Burgundy"
              ? "The wide bowl of the Burgundy glass allows the aromatic complexity to fully express itself."
              : wine.glassware === "Bordeaux"
                ? "The taller Bordeaux glass is designed for full-bodied reds — it allows tannins to soften and the wine to breathe."
                : "The versatile All-Purpose glass suits this wine's balance of freshness and aromatic character."
        }`,
      };
    }
    // General glassware guide
    if (q.includes("wine") || q.includes("champagne")) {
      return {
        text: "We use four glass styles in our wine program:\n\n**Champagne flutes** — for all three Champagnes (Fourny, Billecart-Salmon, Krug)\n\n**Burgundy glasses** — for aromatic whites (Stolpman 'Uni', Paul Pernot Bourgogne) and the Chanin Pinot Noir\n\n**Bordeaux glasses** — for full-bodied reds (Frédéric Esmonin Nuits-Saint-Georges, La Serena Brunello, Heitz Cabernet)\n\n**All-Purpose glasses** — for the Punta Crena Vermentino, Domaine Laporte Sancerre, Presqu'ile Chardonnay, and Domaine OTT rosé",
      };
    }
  }

  // Wine price query
  if (
    (q.includes("how much") &&
      (q.includes("wine") || q.includes("glass") || q.includes("bottle"))) ||
    (q.includes("price") && findWine(q) !== undefined)
  ) {
    const wine = findWine(q);
    if (wine) {
      return {
        text: `**${wine.name}** is priced at **$${wine.glassPrice} per glass** and **$${wine.bottlePrice} per bottle**. It is served in a ${wine.glassware}.`,
      };
    }
  }

  // ── SAKE-SPECIFIC HANDLERS ─────────────────────────────────────────────────

  // Individual sake lookup
  const specificSake = findSake(q);
  if (
    specificSake &&
    (q.includes("sake") ||
      q.includes(specificSake.id) ||
      q.includes(specificSake.name.toLowerCase().split(" ")[0]))
  ) {
    const carafeNote = specificSake.carafePrice
      ? ` · Carafe: $${specificSake.carafePrice}`
      : " · No carafe available";
    const serveNote = specificSake.serveTemp
      ? `\n\n*Serve:* ${specificSake.serveTemp}`
      : "";
    return {
      text: `**${specificSake.name}**\n\n*Classification:* ${specificSake.classification}\n*Region:* ${specificSake.region}\n*Rice:* ${specificSake.rice} · *Milling:* ${specificSake.milling}% remaining\n*SMV:* ${specificSake.smv > 0 ? "+" : ""}${specificSake.smv} (${smvLabel(specificSake.smv)}) · *ABV:* ${specificSake.abv}% · *Acidity:* ${specificSake.acidity}\n*Glassware:* ${specificSake.glassware}\n*Price:* $${specificSake.glassPrice}/glass${carafeNote}\n\n*Aroma:* ${specificSake.aroma}\n\n*Palate:* ${specificSake.palate}\n\n*Food Pairing at AMA:* ${specificSake.foodPairing}${serveNote}\n\n*"${specificSake.guestOneLiner}"*`,
    };
  }

  // Sake classifications — explain what a term means
  if (
    q.includes("junmai daiginjo") ||
    q.includes("daiginjo") ||
    q.includes("junmai ginjo") ||
    q.includes("ginjo") ||
    q.includes("tokubetsu junmai") ||
    q.includes("honjozo") ||
    (q.includes("sake") && q.includes("classification"))
  ) {
    // Find specific classification
    const classMatch = SAKE_CLASSIFICATIONS.find((c) =>
      q.includes(c.name.toLowerCase()),
    );
    if (classMatch) {
      return {
        text: `**${classMatch.name}** — ${classMatch.description}\n\n*Milling:* ${classMatch.millingNote}\n\nOn our list: ${
          SAKES.filter((s) =>
            s.classification
              .toLowerCase()
              .includes(classMatch.name.toLowerCase()),
          )
            .map((s) => s.name)
            .join(", ") || "No exact match — see related classifications."
        }`,
      };
    }
    // General classifications overview
    return {
      text: `**Sake Classifications — from lightest to most refined:**\n\n${SAKE_CLASSIFICATIONS.map((c) => `**${c.name}** — ${c.description}`).join("\n\n")}`,
    };
  }

  // SMV explanation
  if (
    q.includes("smv") ||
    q.includes("sake meter") ||
    (q.includes("sweet") && q.includes("dry") && q.includes("sake")) ||
    (q.includes("sweetness") && q.includes("sake")) ||
    (q.includes("dryness") && q.includes("sake"))
  ) {
    return {
      text: "**Sake Meter Value (SMV)** measures the relative density of sake compared to water — which directly corresponds to sweetness or dryness.\n\n- **Positive numbers = drier** (less residual sugar)\n- **Negative numbers = sweeter** (more residual sugar)\n\nOn our list:\n\n| Sake | SMV | Character |\n|------|-----|-----------|\n| Masumi Sparkling | -45 | Very sweet |\n| IWA 5 Assemblage 3 | -1.5 | Very slightly sweet |\n| Ban Ryu Honjozo | +1 | Near-neutral |\n| The Gentleman | +4 | Dry |\n| Road to Osaka Nigori | +4 | Dry for a nigori |\n| Asian Beauty | +6 | Noticeably dry |\n\nFor guests who ask: 'Our driest sake is the Asian Beauty at SMV +6 — crisp and lively. Our sweetest is the Masumi Sparkling at -45, which balances beautifully with its natural effervescence.'",
    };
  }

  // Rice milling explanation
  if (
    (q.includes("milling") ||
      q.includes("polishing") ||
      q.includes("polished") ||
      q.includes("rice percent") ||
      q.includes("rice milling")) &&
    q.includes("sake")
  ) {
    return {
      text: "**Rice Milling in Sake:**\n\nThe milling percentage refers to how much of the original rice grain *remains* after polishing. The outer layers of a rice grain contain proteins and fats that can produce undesirable flavors when fermented — so the more that is polished away, the purer and more refined the resulting sake.\n\n- **Lower % = higher grade = more delicate flavor**\n\nMinimum milling requirements by classification:\n- Daiginjo: 50% remaining (50% polished away)\n- Ginjo: 60% remaining\n- Tokubetsu Junmai: 60% remaining\n- Honjozo: 70% remaining\n\nOn our list, the Road to Osaka Nigori is milled to just 40% remaining — one of the most refined millings on the list, despite being a Nigori style.",
    };
  }

  // Sake ladder
  if (
    (q.includes("sake ladder") ||
      q.includes("where to start") ||
      q.includes("recommend a sake") ||
      q.includes("which sake") ||
      q.includes("sake recommend")) &&
    q.includes("sake")
  ) {
    return {
      text: `**The Sake Ladder** — guide guests from approachable to premium:\n\n${SAKE_LADDER.map((s) => `**${s.step}. ${s.name}** — ${s.descriptor}`).join("\n")}\n\nFor first-time sake guests, begin at step 1 — Ban Ryu Honjozo. For guests comfortable with wine who want something expressive, step 5 or 6 is a natural entry into sake's premium range.`,
    };
  }

  // Sake program overview
  if (
    q.includes("sake program") ||
    q.includes("sake list") ||
    q.includes("sake menu") ||
    q.includes("sake by the glass") ||
    (q.includes("sake") &&
      (q.includes("selection") ||
        q.includes("all sake") ||
        q.includes("what sake")))
  ) {
    return {
      text: `Our sake program spans six curated selections:\n\n${SAKES.map((s) => `**${s.name}** — ${s.classification} · $${s.glassPrice}/glass${s.carafePrice ? ` · $${s.carafePrice}/carafe` : ""}`).join("\n")}\n\nClassifications range from Honjozo (approachable, versatile) to Junmai Daiginjo (the pinnacle of refinement). Styles include sparkling, dry, mineral, aromatic, and creamy Nigori. Please explore the Sake Program tab in Study Mode for full tasting notes and service details.`,
    };
  }

  // ── SAKE BOTTLE HANDLERS ───────────────────────────────────────────────────

  // Individual bottle lookup
  const specificBottle = findSakeBottle(q);
  if (
    specificBottle &&
    (q.includes("bottle") ||
      q.includes("sake") ||
      q.includes(specificBottle.id) ||
      q.includes(specificBottle.name.toLowerCase().split(" ")[0]))
  ) {
    const methodNote =
      specificBottle.methodTags.length > 0
        ? `\n*Methods:* ${specificBottle.methodTags.join(", ")}`
        : "";
    const polishNote = specificBottle.polish
      ? ` · *Polish:* ${specificBottle.polish}`
      : "";
    const abvNote = specificBottle.abv ? ` · *ABV:* ${specificBottle.abv}` : "";
    const smvNote = specificBottle.smv ? ` · *SMV:* ${specificBottle.smv}` : "";
    const acidNote = specificBottle.acidity
      ? ` · *Acidity:* ${specificBottle.acidity}`
      : "";
    const priceStr =
      specificBottle.price >= 1000
        ? `$${specificBottle.price.toLocaleString()}`
        : `$${specificBottle.price}`;
    const priceFull = specificBottle.priceLabel
      ? `${priceStr} / ${specificBottle.priceLabel}`
      : priceStr;
    return {
      text: `**${specificBottle.name}**\n\n*Category:* ${specificBottle.category} · *Prefecture:* ${specificBottle.prefecture}\n*Price:* ${priceFull}${methodNote}\n*Rice:* ${specificBottle.rice}${polishNote}${abvNote}${smvNote}${acidNote}\n\n*Nose:* ${specificBottle.nose}\n\n*Palate:* ${specificBottle.palate}\n\n*The Story:* ${specificBottle.story}\n\n*Best With:* ${specificBottle.bestWith}\n\n*"${specificBottle.guestOneLiner}"*`,
    };
  }

  // Sake bottle list overview
  if (
    q.includes("sake bottle") ||
    q.includes("bottle list") ||
    q.includes("sake by the bottle") ||
    q.includes("bottle program") ||
    (q.includes("bottle") && q.includes("sake"))
  ) {
    const byCategory = [
      "Junmai Ginjo",
      "Yamahai",
      "Nigori",
      "Junmai Daiginjo",
      "Honjozo",
      "Sparkling",
    ] as const;
    const grouped = byCategory
      .map((cat) => {
        const bottles = SAKE_BOTTLES.filter((b) => b.category === cat);
        if (bottles.length === 0) return "";
        return `**${cat}**\n${bottles
          .map(
            (b) =>
              `${b.name} — ${b.price >= 1000 ? `$${b.price.toLocaleString()}` : `$${b.price}`}${b.priceLabel ? ` / ${b.priceLabel}` : ""}`,
          )
          .join("\n")}`;
      })
      .filter(Boolean)
      .join("\n\n");
    return {
      text: `The AMA Sushi sake bottle program spans **${SAKE_BOTTLES.length} bottles** — from humble honjozo to the world\u2019s most technically extraordinary sake:\n\n${grouped}\n\nExplore the Sake Bottles tab in Study Mode for full tasting notes, stories, and guest guidance.`,
    };
  }

  // Yamahai bottles
  if (
    q.includes("yamahai") &&
    (q.includes("bottle") || q.includes("list") || q.includes("which"))
  ) {
    const yamahaiBottles = SAKE_BOTTLES.filter((b) =>
      b.methodTags.includes("Yamahai"),
    );
    const methodGloss = SAKE_METHODS_GLOSSARY.find((m) => m.name === "Yamahai");
    return {
      text: `**Yamahai** — ${methodGloss?.description ?? "Traditional brewing with naturally cultivated lactic bacteria."}\n\nYamahai bottles on the list:\n\n${yamahaiBottles.map((b) => `**${b.name}** ($${b.price}) — ${b.guestOneLiner}`).join("\n\n")}`,
    };
  }

  // Genshu bottles
  if (
    q.includes("genshu") &&
    (q.includes("bottle") ||
      q.includes("list") ||
      q.includes("which") ||
      q.includes("sake"))
  ) {
    const genshuBottles = SAKE_BOTTLES.filter((b) =>
      b.methodTags.includes("Genshu"),
    );
    const methodGloss = SAKE_METHODS_GLOSSARY.find((m) => m.name === "Genshu");
    return {
      text: `**Genshu** — ${methodGloss?.description ?? "Undiluted sake."}\n\nGenshu bottles on the list:\n\n${genshuBottles.map((b) => `**${b.name}** ($${b.price}) — ${b.guestOneLiner}`).join("\n\n")}`,
    };
  }

  // Nigori bottle guidance
  if (q.includes("nigori") && q.includes("bottle")) {
    const nigoriBottles = SAKE_BOTTLES.filter(
      (b) =>
        b.methodTags.includes("Nigori") ||
        b.methodTags.includes("Usu-Nigori") ||
        b.category === "Nigori",
    );
    return {
      text: `**Nigori on the bottle list:**\n\n${nigoriBottles.map((b) => `**${b.name}** ($${b.price}) — ${b.guestOneLiner}`).join("\n\n")}\n\nRihaku Dreamy Clouds invented the dry nigori category — lean, nutty, acidic, and dry rather than sweet and thick. Road to Osaka is a lighter, more refined standard nigori.`,
    };
  }

  // Shizuku method
  if (q.includes("shizuku")) {
    const shizukuBottle = SAKE_BOTTLES.find((b) =>
      b.methodTags.includes("Shizuku"),
    );
    const methodGloss = SAKE_METHODS_GLOSSARY.find((m) => m.name === "Shizuku");
    return {
      text: `**Shizuku** — ${methodGloss?.description ?? "Gravity drip pressing."}${shizukuBottle ? `\n\nThe only bottle on this list made using the shizuku method: **${shizukuBottle.name}** ($${shizukuBottle.price}).\n\n*"${shizukuBottle.guestOneLiner}"*` : ""}`,
    };
  }

  // White koji / shiroji
  if (q.includes("white koji") || q.includes("shiroji")) {
    const whiteKojiBottle = SAKE_BOTTLES.find((b) =>
      b.methodTags.includes("White Koji"),
    );
    const methodGloss = SAKE_METHODS_GLOSSARY.find(
      (m) => m.name === "White Koji (Shiroji)",
    );
    return {
      text: `**White Koji (Shiroji)** — ${methodGloss?.description ?? "Produces citric acid rather than lactic acid."}${whiteKojiBottle ? `\n\nThe only bottle on this list using white koji: **${whiteKojiBottle.name}** ($${whiteKojiBottle.price}).\n\n*"${whiteKojiBottle.guestOneLiner}"*` : ""}`,
    };
  }

  // Zankyo Super 7
  if (
    q.includes("zankyo") ||
    q.includes("super 7") ||
    q.includes("reverberation")
  ) {
    const zankyo = SAKE_BOTTLES.find((b) => b.id === "zankyo-super-7");
    if (zankyo) {
      return {
        text: `**${zankyo.name}** — $${zankyo.price.toLocaleString()}\n\n*Prefecture:* ${zankyo.prefecture} · *Rice:* ${zankyo.rice} · *Polish:* ${zankyo.polish}\n\n*Nose:* ${zankyo.nose}\n\n*Palate:* ${zankyo.palate}\n\n*The Story:* ${zankyo.story}\n\n*Best With:* ${zankyo.bestWith}\n\n*"${zankyo.guestOneLiner}"*`,
      };
    }
  }

  // Reikyo Absolute 0
  if (
    q.includes("reikyo") ||
    q.includes("absolute 0") ||
    q.includes("absolute zero sake")
  ) {
    const reikyo = SAKE_BOTTLES.find((b) => b.id === "reikyo-absolute-0");
    if (reikyo) {
      return {
        text: `**${reikyo.name}** — $${reikyo.price.toLocaleString()}\n\n*Prefecture:* ${reikyo.prefecture} · *Rice:* ${reikyo.rice} · *Polish:* ${reikyo.polish}\n\n*Nose:* ${reikyo.nose}\n\n*Palate:* ${reikyo.palate}\n\n*The Story:* ${reikyo.story}\n\n*Best With:* ${reikyo.bestWith}\n\n*"${reikyo.guestOneLiner}"*`,
      };
    }
  }

  // Jikon bottles
  if (
    q.includes("jikon") &&
    (q.includes("bottle") ||
      q.includes("sake") ||
      q.includes("omachi") ||
      q.includes("senbon"))
  ) {
    const jikonBottles = SAKE_BOTTLES.filter((b) => b.id.startsWith("jikon"));
    return {
      text: `**Jikon** is one of Japan\u2019s most coveted sake producers \u2014 lottery allocation in Japan, tiny global distribution.\n\nJikon bottles on this list:\n\n${jikonBottles.map((b) => `**${b.name}** ($${b.price >= 1000 ? b.price.toLocaleString() : b.price}) — ${b.guestOneLiner}`).join("\n\n")}`,
    };
  }

  // Most expensive / special occasion / celebrating
  if (
    q.includes("most expensive") ||
    q.includes("special occasion") ||
    (q.includes("celebrat") && q.includes("sake"))
  ) {
    const zankyo = SAKE_BOTTLES.find((b) => b.id === "zankyo-super-7");
    const reikyo = SAKE_BOTTLES.find((b) => b.id === "reikyo-absolute-0");
    return {
      text: `For an extraordinary occasion, the bottle list offers two pinnacle choices:\n\n**${zankyo?.name}** ($${zankyo?.price.toLocaleString()}) \u2014 Wine Advocate 98 points. 7% polishing ratio. 350 hours of milling. The name means \u2018reverberation.\u2019 One of 999 bottles.\n\n**${reikyo?.name}** ($${reikyo?.price.toLocaleString()}) \u2014 The most polished sake ever produced. 221 days of milling. Each bottle arrives in a handmade wooden box requiring three days of craftsman work. One of 999 bottles. It doesn\u2019t drink like sake \u2014 it drinks like a whisper.`,
    };
  }

  // Rice varieties (bottle context)
  if (
    (q.includes("rice variety") ||
      q.includes("sake rice") ||
      q.includes("rice varietal")) &&
    !q.includes("by the glass") &&
    !q.includes("btg")
  ) {
    return {
      text: `**Sake Rice Varieties on the Bottle List:**\n\n${SAKE_BOTTLE_RICE_VARIETIES.map((r) => `**${r.name}** \u2014 ${r.description}`).join("\n\n")}`,
    };
  }

  // ── WINE BOTTLE HANDLERS ──────────────────────────────────────────────────

  // Individual wine bottle lookup
  const specificWineBottle = findWineBottle(q);
  if (
    specificWineBottle &&
    (q.includes("bottle") ||
      q.includes("wine") ||
      q.includes(
        specificWineBottle.name
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .split(" ")[0],
      ))
  ) {
    return {
      text: `**${specificWineBottle.vintage !== "NV" ? `${specificWineBottle.vintage} ` : ""}${specificWineBottle.name}**\n\n*Category:* ${`${specificWineBottle.category.charAt(0).toUpperCase()}${specificWineBottle.category.slice(1)}`} · *Region:* ${specificWineBottle.region}\n*Grapes:* ${specificWineBottle.grapes} · *Price:* ${specificWineBottle.price}\n\n*Tasting Profile:* ${specificWineBottle.profile}\n\n*The Producer:* ${specificWineBottle.story}\n\n*Best With:* ${specificWineBottle.bestWith}\n\n*"${specificWineBottle.guestOneLiner}"*`,
    };
  }

  // Wine bottle by category — sparkling/champagne
  if (
    (q.includes("champagne bottle") ||
      q.includes("sparkling bottle") ||
      q.includes("bottles of champagne") ||
      (q.includes("champagne") && q.includes("bottle"))) &&
    !q.includes("by the glass")
  ) {
    const sparklingBottles = WINE_BOTTLES.filter(
      (w) => w.category === "sparkling",
    );
    return {
      text: `**Sparkling & Champagne \u2014 Bottle Program (${sparklingBottles.length} selections):**\n\n${sparklingBottles.map((w) => `**${w.vintage !== "NV" ? `${w.vintage} ` : ""}${w.name}** \u2014 ${w.price}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  // Wine bottle by category — white
  if (
    (q.includes("white wine bottle") ||
      q.includes("bottles of white") ||
      (q.includes("white") && q.includes("wine") && q.includes("bottle"))) &&
    !q.includes("by the glass")
  ) {
    const whiteBottles = WINE_BOTTLES.filter((w) => w.category === "white");
    return {
      text: `**White Wine Bottle Program (${whiteBottles.length} selections):**\n\n${whiteBottles.map((w) => `**${w.vintage} ${w.name}** \u2014 ${w.price} | ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  // Wine bottle by category — rosé
  if (
    (q.includes("rose bottle") ||
      q.includes("ros bottle") ||
      (q.includes("ros") && q.includes("bottle"))) &&
    !q.includes("by the glass")
  ) {
    const roseBottles = WINE_BOTTLES.filter((w) => w.category === "rosé");
    return {
      text: `**Rosé Bottle Program (${roseBottles.length} selections):**\n\n${roseBottles.map((w) => `**${w.vintage} ${w.name}** — ${w.price} | ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  // Wine bottle by category — red
  if (
    (q.includes("red wine bottle") ||
      q.includes("red bottles") ||
      q.includes("bottles of red") ||
      (q.includes("red") && q.includes("wine") && q.includes("bottle"))) &&
    !q.includes("by the glass")
  ) {
    const redBottles = WINE_BOTTLES.filter((w) => w.category === "red");
    return {
      text: `**Red Wine Bottle Program (${redBottles.length} selections):**\n\n${redBottles.map((w) => `**${w.vintage} ${w.name}** — ${w.price} | ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  // Wine bottle program overview
  if (
    q.includes("wine bottle program") ||
    q.includes("wine bottle list") ||
    (q.includes("wine") && q.includes("bottle") && q.includes("list")) ||
    (q.includes("wine") &&
      q.includes("bottle") &&
      (q.includes("program") || q.includes("all") || q.includes("selection")))
  ) {
    const sparkling = WINE_BOTTLES.filter((w) => w.category === "sparkling");
    const whites = WINE_BOTTLES.filter((w) => w.category === "white");
    const roses = WINE_BOTTLES.filter((w) => w.category === "rosé");
    const reds = WINE_BOTTLES.filter((w) => w.category === "red");
    return {
      text: `The AMA Sushi wine bottle program spans **${WINE_BOTTLES.length} selections** — from approachable California bottles to world-class icons:\n\n**Sparkling & Champagne (${sparkling.length})**\n${sparkling.map((w) => `${w.vintage !== "NV" ? `${w.vintage} ` : ""}*${w.name}* — ${w.price}`).join("\n")}\n\n**White Wines (${whites.length})**\n${whites.map((w) => `${w.vintage} *${w.name}* — ${w.price}`).join("\n")}\n\n**Rosé (${roses.length})**\n${roses.map((w) => `${w.vintage} *${w.name}* — ${w.price}`).join("\n")}\n\n**Red Wines (${reds.length})**\n${reds.map((w) => `${w.vintage} *${w.name}* — ${w.price}`).join("\n")}\n\nExplore the Wine Bottles tab in Study Mode for full tasting notes and guest guidance.`,
    };
  }

  // ── RED WINE BOTTLE SPECIFIC HANDLERS ────────────────────────────────────

  // Opus One specific query
  if (q.includes("opus one") || q.includes("opus 1")) {
    const opus = WINE_BOTTLES.find((w) => w.id === "opus-one");
    if (opus) {
      return {
        text: `**${opus.vintage} ${opus.name}** — ${opus.price}\n\n${opus.profile}\n\n${opus.story}\n\n*Best With:* ${opus.bestWith}\n\n*"${opus.guestOneLiner}"*`,
      };
    }
  }

  // Sassicaia specific query
  if (
    q.includes("sassicaia") ||
    q.includes("super tuscan") ||
    q.includes("bolgheri")
  ) {
    const sassicaia = WINE_BOTTLES.find((w) => w.id === "sassicaia-2019");
    if (sassicaia) {
      return {
        text: `**${sassicaia.vintage} ${sassicaia.name}** — ${sassicaia.price}\n\n${sassicaia.profile}\n\n${sassicaia.story}\n\n*Best With:* ${sassicaia.bestWith}\n\n*"${sassicaia.guestOneLiner}"*`,
      };
    }
  }

  // Dunn Howell Mountain specific query
  if (
    q.includes("dunn") ||
    q.includes("howell mountain") ||
    q.includes("randy dunn")
  ) {
    const dunn = WINE_BOTTLES.find((w) => w.id === "dunn-howell-mountain-cab");
    if (dunn) {
      return {
        text: `**${dunn.vintage} ${dunn.name}** — ${dunn.price}\n\n${dunn.profile}\n\n${dunn.story}\n\n*Best With:* ${dunn.bestWith}\n\n*"${dunn.guestOneLiner}"*`,
      };
    }
  }

  // Barolo — return Gaja Dagromis
  if (
    (q.includes("barolo") || q.includes("dagromis") || q.includes("gaja")) &&
    q.includes("bottle")
  ) {
    const dagromis = WINE_BOTTLES.find((w) => w.id === "gaja-dagromis-barolo");
    if (dagromis) {
      return {
        text: `**${dagromis.vintage} ${dagromis.name}** — ${dagromis.price}\n\n${dagromis.profile}\n\n${dagromis.story}\n\n*Best With:* ${dagromis.bestWith}\n\n*Barolo Aging Law:* Barolo must be aged a minimum of 3 years before release — 2 of which must be in oak. It is one of Italy's strictest production requirements.\n\n*"${dagromis.guestOneLiner}"*`,
      };
    }
  }

  // Brunello — return Castiglion del Bosco
  if (
    q.includes("brunello") ||
    q.includes("castiglion") ||
    q.includes("ferragamo")
  ) {
    const brunello = WINE_BOTTLES.find(
      (w) => w.id === "castiglion-del-bosco-brunello",
    );
    if (brunello) {
      return {
        text: `**${brunello.vintage} ${brunello.name}** — ${brunello.price}\n\n${brunello.profile}\n\n${brunello.story}\n\n*Best With:* ${brunello.bestWith}\n\n*Brunello Aging Law:* Brunello di Montalcino legally requires a minimum of 5 years before release — including 2 years in large Slavonian oak. One of Italy's most rigorous appellation rules.\n\n*"${brunello.guestOneLiner}"*`,
      };
    }
  }

  // Stags Leap — return Shafer One Point Five
  if (
    q.includes("stags leap") ||
    q.includes("one point five") ||
    q.includes("iron fist") ||
    q.includes("velvet glove")
  ) {
    const stagsLeap = WINE_BOTTLES.find(
      (w) => w.id === "shafer-one-point-five",
    );
    if (stagsLeap) {
      return {
        text: `**${stagsLeap.vintage} ${stagsLeap.name}** — ${stagsLeap.price}\n\n${stagsLeap.profile}\n\n${stagsLeap.story}\n\n*Best With:* ${stagsLeap.bestWith}\n\n*"${stagsLeap.guestOneLiner}"*`,
      };
    }
  }

  // Pinot Noir bottle guidance
  if (
    (q.includes("pinot noir") || q.includes("pinot")) &&
    q.includes("bottle") &&
    !q.includes("glass")
  ) {
    const pinotBottles = WINE_BOTTLES.filter(
      (w) => w.category === "red" && w.grapes.includes("Pinot Noir"),
    );
    return {
      text: `**Pinot Noir on the Bottle List (${pinotBottles.length} selections):**\n\n${pinotBottles.map((w) => `**${w.vintage} ${w.name}** — ${w.price} | ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}\n\n**Guest guidance:** Crossbarn ($85) for accessibility; Brewer-Clifton or Failla (both $90–95) for precision; Seasmoke Southing ($200) for a special occasion; Kistler ($185) for the pinnacle. Oregon option: Penner-Ash ($120) for guests who want Burgundian finesse.`,
    };
  }

  // Cabernet bottle guidance
  if (
    (q.includes("cabernet") || q.includes("cab sauv")) &&
    q.includes("bottle") &&
    !q.includes("glass")
  ) {
    const cabBottles = WINE_BOTTLES.filter(
      (w) =>
        w.category === "red" &&
        (w.grapes.includes("Cabernet") || w.id.includes("cab")),
    );
    return {
      text: `**Cabernet Sauvignon on the Bottle List (${cabBottles.length} selections):**\n\n${cabBottles.map((w) => `**${w.vintage} ${w.name}** — ${w.price} | ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}\n\n**Guest guidance:** Austin Hope ($114) for approachability; Robert Craig ($125) for mountain-sourced value; Aperture ($144) for Bordeaux-like elegance; Shafer One Point Five ($210) for Stags Leap's iron fist/velvet glove; Opus One ($698) for the world-class pinnacle.`,
    };
  }

  // Zinfandel — Turley
  if (q.includes("zinfandel") || q.includes("turley")) {
    const turley = WINE_BOTTLES.find((w) => w.id === "turley-ueberroth-zin");
    if (turley) {
      return {
        text: `**${turley.vintage} ${turley.name}** — ${turley.price}\n\n${turley.profile}\n\n${turley.story}\n\n*Best With:* ${turley.bestWith}\n\n*"${turley.guestOneLiner}"*`,
      };
    }
  }

  // Syrah — Qupé
  if (
    q.includes("syrah") ||
    q.includes("qupe") ||
    q.includes("sawyer lindquist") ||
    q.includes("bob lindquist")
  ) {
    const qupe = WINE_BOTTLES.find(
      (w) => w.id === "qupe-sawyer-lindquist-syrah",
    );
    if (qupe) {
      return {
        text: `**${qupe.vintage} ${qupe.name}** — ${qupe.price}\n\n${qupe.profile}\n\n${qupe.story}\n\n*Best With:* ${qupe.bestWith}\n\n*"${qupe.guestOneLiner}"*`,
      };
    }
  }

  // Champagne terminology
  if (
    q.includes("blanc de blancs") ||
    q.includes("blanc de noirs") ||
    q.includes("prestige cuvee") ||
    q.includes("prestige cuvee") ||
    q.includes("grower champagne") ||
    q.includes("rm champagne") ||
    q.includes("malolactic") ||
    (q.includes("mlf") && q.includes("champagne")) ||
    (q.includes("dosage") && q.includes("champagne"))
  ) {
    if (q.includes("blanc de blancs")) {
      return {
        text: "**Blanc de Blancs** \u2014 A Champagne made exclusively from white grapes, almost always 100% Chardonnay. Characterised by high acidity, chalk-driven minerality, citrus, and brioche \u2014 lighter and more precise than multi-grape blends.\n\nOn our wine bottle list:\n- **Delamotte Blanc de Blancs** ($85/375ml) \u2014 Sister house to Salon, Grand Cru C\u00f4te des Blancs fruit\n- **Schramsberg Blanc de Blancs 2021** ($96) \u2014 America\u2019s original Chardonnay sparkling wine, served at Nixon\u2019s Toast to Peace in 1972",
      };
    }
    if (q.includes("prestige cuvee")) {
      return {
        text: "**Prestige Cuv\u00e9e** \u2014 A Champagne house\u2019s finest bottling, produced only in exceptional declared years, from the best Grand Cru fruit, with extended lees aging.\n\nPrestige cuv\u00e9es on our wine bottle list:\n- **Dom P\u00e9rignon 2013** ($475) \u2014 Wine Spectator 96, considered finest of the decade\n- **Belle \u00c9poque Ros\u00e9 2013** ($670) \u2014 Art Nouveau bottle by \u00c9mile Gall\u00e9, only produced in exceptional years\n- **Krug Grand Cuv\u00e9e** ($255/375ml) \u2014 Blended from 100+ wines spanning 10\u201312 vintages",
      };
    }
    if (q.includes("grower champagne") || q.includes("rm champagne")) {
      return {
        text: "**Grower Champagne (RM \u2014 R\u00e9coltant-Manipulant)** \u2014 A Champagne produced by a grower who owns their own vines and makes wine from their own fruit, rather than purchasing grapes as large houses do.\n\nOn our bottle list: **Delavenne & Fils Tradition Brut Grand Cru** ($120) \u2014 100% Grand Cru Bouzy and Ambonnay, four generations of family ownership, organic farming, no fining, no filtration.",
      };
    }
    if (
      q.includes("malolactic") ||
      (q.includes("mlf") && q.includes("champagne"))
    ) {
      return {
        text: "**Malolactic fermentation (MLF)** converts sharp malic acid into softer lactic acid \u2014 producing the creamy, buttery quality found in most Champagnes. Delavenne & Fils deliberately skips MLF, giving their Grand Cru Champagne a notably taut, fresh, apple-crisp character that is distinctly different from the rounded, creamy style most guests know.",
      };
    }
    if (q.includes("dosage") && q.includes("champagne")) {
      return {
        text: "**Dosage** is the small amount of wine and sugar added to Champagne just before final corking to adjust sweetness. Lower dosage = drier, more mineral.\n\nOn our list:\n- Billecart-Salmon Brut Ros\u00e9: ~5g/L \u2014 very dry\n- Brut Champagnes (Taittinger, Ruinart, Delavenne): 7\u201312g/L \u2014 typical dry style",
      };
    }
  }

  // Dom P\u00e9rignon specific query
  if (q.includes("dom perignon") || q.includes("dom p")) {
    const dp = WINE_BOTTLES.find((w) => w.id === "dom-perignon-2013");
    if (dp) {
      return {
        text: `**${dp.vintage} ${dp.name}** \u2014 ${dp.price}\n\n${dp.profile}\n\n${dp.story}\n\n*"${dp.guestOneLiner}"*`,
      };
    }
  }

  // Belle \u00c9poque specific query
  if (
    q.includes("belle epoque") ||
    q.includes("belle") ||
    q.includes("perrier jouet")
  ) {
    const be = WINE_BOTTLES.find((w) => w.id === "belle-epoque-rose-2013");
    if (be) {
      return {
        text: `**${be.vintage} ${be.name}** \u2014 ${be.price}\n\n${be.profile}\n\n${be.story}\n\n*"${be.guestOneLiner}"*`,
      };
    }
  }

  // Leflaive / Puligny query
  if (q.includes("leflaive") || (q.includes("puligny") && q.includes("wine"))) {
    const lf = WINE_BOTTLES.find(
      (w) => w.id === "leflaive-puligny-montrachet-2019",
    );
    if (lf) {
      return {
        text: `**${lf.vintage} ${lf.name}** \u2014 ${lf.price}\n\n${lf.profile}\n\n${lf.story}\n\n*"${lf.guestOneLiner}"*`,
      };
    }
  }

  // Most expensive wine bottle
  if (
    q.includes("most expensive wine bottle") ||
    (q.includes("expensive") && q.includes("wine") && q.includes("bottle"))
  ) {
    const sorted = [...WINE_BOTTLES].sort((a, b) => {
      const aPrice = Number.parseFloat(a.price.replace(/[^0-9.]/g, ""));
      const bPrice = Number.parseFloat(b.price.replace(/[^0-9.]/g, ""));
      return bPrice - aPrice;
    });
    const top = sorted.slice(0, 3);
    return {
      text: `The three most prestigious bottles on the wine list:\n\n${top.map((w) => `**${w.vintage !== "NV" ? `${w.vintage} ` : ""}${w.name}** \u2014 ${w.price}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  // Wine bottle guest guidance
  if (
    q.includes("wine") &&
    q.includes("bottle") &&
    (q.includes("recommend") || q.includes("suggest") || q.includes("guidance"))
  ) {
    return {
      text: `**Wine Bottle Guest Guidance:**\n\n${WINE_BOTTLE_GUEST_GUIDANCE.map((g) => `**${g.scenario}**\n\u2192 *${g.recommendation}*\n${g.rationale}`).join("\n\n")}`,
    };
  }

  // Shellfish + wine bottle pairing
  if (
    q.includes("oyster") &&
    q.includes("wine") &&
    !q.includes("sake") &&
    !q.includes("glass")
  ) {
    return {
      text: "For oysters and shellfish, the definitive bottle choices are:\n\n**Delamotte Blanc de Blancs** ($85/375ml) \u2014 Chalky, saline, and mineral. The textbook aperitif Champagne.\n\n**Domaine William F\u00e8vre Chablis \u2018Domaine\u2019** ($45/375ml) \u2014 Pure Kimmeridgian minerality. Chablis and oysters is one of wine\u2019s greatest pairings.\n\n**Selbach-Oster Riesling Kabinett** ($80) \u2014 Low alcohol, slate minerality, perfectly balanced acidity.",
    };
  }

  // ── WHITE BURGUNDY HANDLERS ────────────────────────────────────────────────

  // Burgundy key terms — explain specific terminology
  const burgundyTermMatch = BURGUNDY_KEY_TERMS.find((t) =>
    q.includes(t.term.toLowerCase().replace(/[^a-z0-9\s]/g, "")),
  );
  const hasBurgundyTermQuery =
    q.includes("kimmeridgian") ||
    q.includes("lutte raisonnee") ||
    q.includes("lutte raisonnee") ||
    q.includes("batonnage") ||
    q.includes("batonnage") ||
    q.includes("climat") ||
    (q.includes("premier cru") && q.includes("burgundy")) ||
    (q.includes("1er cru") && q.includes("burgundy"));

  if (burgundyTermMatch || hasBurgundyTermQuery) {
    if (burgundyTermMatch) {
      return {
        text: `**${burgundyTermMatch.term}** — ${burgundyTermMatch.definition}`,
      };
    }
    return {
      text: `**Key Burgundy Terms:**\n\n${BURGUNDY_KEY_TERMS.map((t) => `**${t.term}** — ${t.definition}`).join("\n\n")}`,
    };
  }

  // Burgundy village hierarchy query
  if (
    q.includes("burgundy village") ||
    q.includes("burgundy hierarchy") ||
    q.includes("village style") ||
    q.includes("chablis vs") ||
    (q.includes("white burgundy") &&
      (q.includes("village") ||
        q.includes("region") ||
        q.includes("hierarchy") ||
        q.includes("difference")))
  ) {
    return {
      text: `**The White Burgundy Villages — North to South:**\n\n${BURGUNDY_VILLAGES.map((v) => `**${v.name}** — ${v.description}`).join("\n\n")}`,
    };
  }

  // Village recommendation by guest preference
  if (
    q.includes("white burgundy") &&
    (q.includes("crisp") ||
      q.includes("mineral") ||
      q.includes("richest") ||
      q.includes("most opulent") ||
      q.includes("most prestigious") ||
      q.includes("value") ||
      q.includes("recommend") ||
      q.includes("suggest"))
  ) {
    const positioningMatch = VILLAGE_POSITIONING.find((p) =>
      q.includes(p.preference.toLowerCase()),
    );
    if (positioningMatch) {
      return {
        text: `For a guest who wants **${positioningMatch.preference}**, we recommend: **${positioningMatch.recommendation}**.\n\n${VILLAGE_POSITIONING.map((p) => `*${p.preference}* → ${p.recommendation}`).join("\n")}`,
      };
    }
    return {
      text: `**Positioning the White Burgundy Villages for a Guest:**\n\n${VILLAGE_POSITIONING.map((p) => `*${p.preference}* → ${p.recommendation}`).join("\n")}\n\nAll five wines are presented in bottle format as elevated food pairings.`,
    };
  }

  // Individual White Burgundy wine lookup
  const specificWhiteBurgundy = findWhiteBurgundy(q);
  if (specificWhiteBurgundy) {
    const pronNote = specificWhiteBurgundy.pronunciation
      ? `\n\n*Pronunciation:* ${specificWhiteBurgundy.pronunciation}`
      : "";
    return {
      text: `**${specificWhiteBurgundy.name}**${pronNote}\n\n*Appellation:* ${specificWhiteBurgundy.appellation}\n*Grape:* ${specificWhiteBurgundy.grape}\n*Glassware:* ${specificWhiteBurgundy.glassware} glass\n*Format:* Bottle only — elevated food pairing\n\n*Tasting Notes:* ${specificWhiteBurgundy.tastingNotes}\n\n*Vintage Character:* ${specificWhiteBurgundy.vintageCharacter}\n\n*Terroir:* ${specificWhiteBurgundy.terroir}\n\n*Elevated Food Pairing at AMA:* ${specificWhiteBurgundy.foodPairing}\n\n*"${specificWhiteBurgundy.guestOneLiner}"*`,
    };
  }

  // White Burgundy program overview
  if (
    q.includes("white burgundy list") ||
    q.includes("white burgundy program") ||
    q.includes("burgundy bottles") ||
    q.includes("burgundy bottle program") ||
    (q.includes("white burgundy") &&
      (q.includes("all") ||
        q.includes("selection") ||
        q.includes("list") ||
        q.includes("program")))
  ) {
    return {
      text: `Our White Burgundy bottle program features five exceptional selections:\n\n${WHITE_BURGUNDY_WINES.map((w) => `**${w.name}** — ${w.appellation}\n*"${w.guestOneLiner}"*`).join("\n\n")}\n\nAll are presented in bottle format as elevated food pairings — from lean, mineral Chablis to opulent Meursault.`,
    };
  }

  // Wine pairing query — check wine data in addition to menu items
  if (
    q.includes("pair") ||
    q.includes("drink") ||
    q.includes("beverage") ||
    q.includes("wine") ||
    q.includes("sake")
  ) {
    // Check sake first if "sake" is in query
    if (q.includes("sake")) {
      const sakeMatch = findSake(q);
      if (sakeMatch) {
        const carafeNote = sakeMatch.carafePrice
          ? ` · Carafe: $${sakeMatch.carafePrice}`
          : "";
        return {
          text: `**${sakeMatch.name}** — *"${sakeMatch.guestOneLiner}"*\n\n*Pairs beautifully with:* ${sakeMatch.foodPairing}\n\nClassification: ${sakeMatch.classification} · SMV: ${sakeMatch.smv > 0 ? "+" : ""}${sakeMatch.smv} (${smvLabel(sakeMatch.smv)}) · $${sakeMatch.glassPrice}/glass${carafeNote}`,
        };
      }
    }

    const wine = findWine(q);
    if (wine) {
      const pairingNote = wine.foodPairing
        ? `At AMA, we suggest pairing it with **${wine.foodPairing}**. `
        : "";
      return {
        text: `**${wine.name}** — ${pairingNote}*"${wine.guestOneLiner}"*\n\nRegion: ${wine.region} · Grapes: ${wine.grapes} · Glass: $${wine.glassPrice} · Bottle: $${wine.bottlePrice}`,
      };
    }

    const item = findMenuItem(q);
    if (item) {
      return { text: `**${item.name}** — ${formatPairing(item)}` };
    }

    // General sake info fallback
    if (q.includes("sake")) {
      return {
        text: "Our sake program spans six curated selections — from the approachable Ban Ryu Honjozo ($14/glass) to the extraordinary IWA 5 Junmai Daiginjo ($110/glass), created by the former cellar master of Dom Pérignon.\n\nFor guests new to sake, begin with **Ban Ryu** — clean, versatile, and food-friendly. For guests who love aromatic whites, **Asian Beauty** or **The Gentleman** are natural bridges. For a celebration, the **Masumi Sparkling** is a beautiful choice.\n\nAsk me about any specific sake for full tasting notes and food pairing suggestions.",
      };
    }
  }

  // Wine program overview
  if (
    q.includes("wine program") ||
    (q.includes("wine") &&
      (q.includes("list") ||
        q.includes("by the glass") ||
        q.includes("selection") ||
        q.includes("menu")))
  ) {
    const champagnes = WINES.filter((w) => w.category === "champagne");
    const whites = WINES.filter((w) => w.category === "white");
    const roses = WINES.filter((w) => w.category === "rose");
    const reds = WINES.filter((w) => w.category === "red");

    const fmt = (wines: typeof WINES) =>
      wines.map((w) => `*${w.name}* — $${w.glassPrice}/glass`).join("\n");

    return {
      text: `Our wine by the glass program offers 13 selections across four categories:\n\n**Champagne & Sparkling**\n${fmt(champagnes)}\n\n**White Wines**\n${fmt(whites)}\n\n**Rosé**\n${fmt(roses)}\n\n**Red Wines**\n${fmt(reds)}`,
    };
  }

  // Wine category queries
  if (q.includes("champagne") || q.includes("sparkling")) {
    const champagnes = WINES.filter((w) => w.category === "champagne");
    return {
      text: `We offer three Champagnes by the glass:\n\n${champagnes.map((w) => `**${w.name}** — $${w.glassPrice}/glass | $${w.bottlePrice}/bottle\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  if (q.includes("white wine") || (q.includes("white") && q.includes("wine"))) {
    const whites = WINES.filter((w) => w.category === "white");
    return {
      text: `We offer ${whites.length} white wines by the glass:\n\n${whites.map((w) => `**${w.name}** — $${w.glassPrice}/glass\n${w.grapes} · ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  if (q.includes("rosé") || q.includes("rose wine") || q.includes("rose")) {
    const roses = WINES.filter((w) => w.category === "rose");
    return {
      text: `${roses.map((w) => `**${w.name}** — $${w.glassPrice}/glass | $${w.bottlePrice}/bottle\n${w.grapes} · ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  if (q.includes("red wine") || (q.includes("red") && q.includes("wine"))) {
    const reds = WINES.filter((w) => w.category === "red");
    return {
      text: `We offer ${reds.length} red wines by the glass:\n\n${reds.map((w) => `**${w.name}** — $${w.glassPrice}/glass\n${w.grapes} · ${w.region}\n*"${w.guestOneLiner}"*`).join("\n\n")}`,
    };
  }

  // Specific wine lookup — comprehensive description
  const specificWine = findWine(q);
  if (specificWine) {
    const pronNote = specificWine.pronunciation
      ? `\n\n*Pronunciation:* ${specificWine.pronunciation}`
      : "";
    const pairingNote = specificWine.foodPairing
      ? `\n\n*Pairs with at AMA:* ${specificWine.foodPairing}`
      : "";
    return {
      text: `**${specificWine.name}**${pronNote}\n\n*Region:* ${specificWine.region}\n*Grapes:* ${specificWine.grapes}\n*Glassware:* ${specificWine.glassware}\n*Price:* $${specificWine.glassPrice} per glass · $${specificWine.bottlePrice} per bottle\n\n*Tasting Notes:* ${specificWine.tastingNotes}${pairingNote}\n\n*"${specificWine.guestOneLiner}"*`,
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

  // Cocktail program overview
  if (
    q.includes("cocktail menu") ||
    q.includes("cocktail list") ||
    q.includes("cocktail program") ||
    q.includes("signature cocktail")
  ) {
    const alcoholic = COCKTAILS.filter((c) => c.isAlcoholic);
    const mocktails = COCKTAILS.filter((c) => !c.isAlcoholic);
    return {
      text: `The AMA cocktail program features **${alcoholic.length} signature cocktails** and **${mocktails.length} dedicated mocktails**, all deeply rooted in Japanese ingredients and culture.\n\n**Signature Cocktails:**\n${alcoholic.map((c) => `**${c.name}** *(${c.japaneseMeaning})* — ${c.style}`).join("\n")}\n\n**Mocktails:**\n${mocktails.map((c) => `**${c.name}** *(${c.japaneseMeaning})* — ${c.style}`).join("\n")}\n\nAsk me about any individual cocktail for full details, service sequences, and guest descriptions.`,
    };
  }

  // Mocktail guidance
  if (
    q.includes("no alcohol") ||
    q.includes("dont drink") ||
    q.includes("don't drink") ||
    q.includes("non-alcoholic") ||
    q.includes("nonalcoholic") ||
    q.includes("mocktail") ||
    q.includes("non alcoholic")
  ) {
    const mocktails = COCKTAILS.filter((c) => !c.isAlcoholic);
    return {
      text: `We have three dedicated mocktails crafted with the same care and attention as the full cocktail menu. They are never an afterthought — they are independently designed to be equally enjoyable.\n\n${mocktails.map((c) => `**${c.name}** *(${c.japaneseMeaning})*\n*"${c.guestOneLiner}"*`).join("\n\n")}\n\nAll three are presented beautifully and make excellent choices for any guest who prefers not to drink alcohol.`,
    };
  }

  // Fat-washing query
  if (
    q.includes("fat wash") ||
    q.includes("fat-wash") ||
    q.includes("fatwash")
  ) {
    return {
      text: "**Fat-washing** is a bartending technique where butter or fat is blended with a spirit, then placed in the freezer. The fat solidifies and is removed — leaving behind its richness and flavor in the liquid without any of the fat itself.\n\nAt AMA, this technique is used in the **Kohaku Yume** (Amber Dream) — our old fashioned. Kikori rice whisky is fat-washed before use, giving the cocktail its characteristic **buttery richness**. It is a wonderful story to share with guests who notice and ask about the texture.",
    };
  }

  // Henka / dairy flag
  if (
    (q.includes("henka") ||
      q.includes("milk punch") ||
      q.includes("teapot cocktail")) &&
    !q.includes("describe")
  ) {
    const henka = findCocktail("henka");
    if (henka) {
      return {
        text: `**${henka.name}** *(${henka.japaneseMeaning})* — ${henka.style}\n\n${henka.description}\n\n⚠️ **Dietary Note:** Henka contains **dairy** and must be flagged for any guest with a dairy allergy or intolerance.\n\n*Service:* ${henka.serviceNote}\n\n*"${henka.guestOneLiner}"*`,
      };
    }
  }

  // Dashi / allium flag
  if (
    q.includes("dashi cocktail") ||
    q.includes("miso martini") ||
    q.includes("umami martini") ||
    (q.includes("dashi") &&
      (q.includes("allium") ||
        q.includes("green onion") ||
        q.includes("service")))
  ) {
    const dashi = findCocktail("dashi cocktail");
    if (dashi) {
      return {
        text: `**${dashi.name}** *(${dashi.japaneseMeaning})* — ${dashi.style}\n\n${dashi.description}\n\n⚠️ **Dietary Note:** Contains **allium** (green onion oil). Please flag for guests with allium sensitivities.\n\n*Service Sequence:* ${dashi.serviceSequence.join(" → ")}\n\n*Service Note:* ${dashi.serviceNote}\n\n*"${dashi.guestOneLiner}"*`,
      };
    }
  }

  // Tableside service queries
  if (
    q.includes("tableside") ||
    q.includes("service moment") ||
    q.includes("theatrical") ||
    q.includes("dashi service") ||
    q.includes("henka service")
  ) {
    const tableside = COCKTAILS.filter((c) => c.serviceNote);
    return {
      text: `AMA has two cocktails with dedicated tableside service moments:\n\n${tableside.map((c) => `**${c.name}** *(${c.japaneseMeaning})*\n${c.serviceNote}`).join("\n\n")}\n\nThese are not just drinks — they are gracious, theatrical moments that define the AMA experience. Approach them with presence and intention.`,
    };
  }

  // Guest guidance — new to cocktails / recommend
  if (
    q.includes("new to cocktails") ||
    q.includes("dont drink whisky") ||
    q.includes("don't drink whisky") ||
    q.includes("recommend cocktail") ||
    q.includes("non-drinker") ||
    q.includes("what cocktail")
  ) {
    return {
      text: `${GUEST_GUIDANCE.map((g) => `**${g.title}**\n${g.body}`).join("\n\n")}`,
    };
  }

  // Signature spirit queries
  const spiritMatch = SIGNATURE_SPIRITS.find(
    (s) =>
      q.includes(s.name.toLowerCase()) ||
      (s.name === "Shibui Grain Select" && q.includes("shibui")) ||
      (s.name === "Nikka Days" &&
        (q.includes("nikka days") ||
          (q.includes("nikka") && q.includes("days")))) ||
      (s.name === "Nikka Coffey Gin" &&
        (q.includes("nikka coffey") || q.includes("coffey gin"))) ||
      (s.name === "Shitake Toki" &&
        (q.includes("shitake toki") ||
          q.includes("shiitake whisky") ||
          q.includes("toki"))) ||
      (s.name === "Kikori" && q.includes("kikori")) ||
      (s.name === "Roku Gin" && q.includes("roku")) ||
      (s.name === "Haku Vodka" && q.includes("haku")) ||
      (s.name === "Furikake" && q.includes("furikake")) ||
      (s.name === "Shiso" && q.includes("shiso")) ||
      (s.name === "Yuzu" &&
        q.includes("yuzu") &&
        !q.includes("ponzu") &&
        !q.includes("salt") &&
        !q.includes("miso")),
  );
  if (spiritMatch) {
    const cocktailsUsing = COCKTAILS.filter(
      (c) =>
        c.ingredients.some((ing) =>
          ing
            .toLowerCase()
            .includes(spiritMatch.name.toLowerCase().split(" ")[0]),
        ) ||
        c.garnish
          .toLowerCase()
          .includes(spiritMatch.name.toLowerCase().split(" ")[0]),
    );
    return {
      text: `**${spiritMatch.name}** — ${spiritMatch.description}${cocktailsUsing.length > 0 ? `\n\n*Featured in:* ${cocktailsUsing.map((c) => c.name).join(", ")}` : ""}`,
    };
  }

  // Individual cocktail lookup
  const cocktailMatch = findCocktail(q);
  if (cocktailMatch) {
    const dietaryNote =
      cocktailMatch.dietary.length > 0 &&
      cocktailMatch.dietary[0] !== "No alcohol"
        ? `\n\n⚠️ *Dietary:* ${cocktailMatch.dietary.join(", ")}`
        : "";
    const staffNoteText = cocktailMatch.staffNote
      ? `\n\n*Staff Note:* ${cocktailMatch.staffNote}`
      : "";
    const serviceNoteText = cocktailMatch.serviceNote
      ? `\n\n*Service Note:* ${cocktailMatch.serviceNote}`
      : "";
    return {
      text: `**${cocktailMatch.name}** *(${cocktailMatch.japaneseMeaning})*\n${cocktailMatch.style} | ${cocktailMatch.glass}\n\n*Ingredients:* ${cocktailMatch.ingredients.join(", ")}\n*Garnish:* ${cocktailMatch.garnish}\n\n*Service:* ${cocktailMatch.serviceSequence.join(" → ")}${dietaryNote}${staffNoteText}${serviceNoteText}\n\n*"${cocktailMatch.guestOneLiner}"*`,
    };
  }

  // Default fallback
  return {
    text: "That is a thoughtful question. I am best equipped to assist with details about our menu items — ingredients, allergens, beverage pairings, preparation techniques, Japanese culinary terms, service guidance, and our wine program. Please feel free to ask about any specific dish, wine, ingredient, or technique, and I will offer everything I know.",
  };
}
