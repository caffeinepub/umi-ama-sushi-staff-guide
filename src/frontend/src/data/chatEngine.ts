import { GLOSSARY_TERMS } from "./glossaryData";
import { ALL_MENU_ITEMS, MENU_SECTIONS, type MenuItem } from "./menuData";
import {
  SAKES,
  SAKE_CLASSIFICATIONS,
  SAKE_LADDER,
  findSake,
  smvLabel,
} from "./sakeData";
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

  // Default fallback
  return {
    text: "That is a thoughtful question. I am best equipped to assist with details about our menu items — ingredients, allergens, beverage pairings, preparation techniques, Japanese culinary terms, service guidance, and our wine program. Please feel free to ask about any specific dish, wine, ingredient, or technique, and I will offer everything I know.",
  };
}
