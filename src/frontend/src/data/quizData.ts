export type QuizQuestion = {
  id: number;
  type: "multiple-choice" | "true-false" | "scenario";
  category:
    | "menu"
    | "forbes"
    | "wine"
    | "sake"
    | "white-burgundy"
    | "cocktail"
    | "sake-bottle"
    | "wine-bottle";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: "multiple-choice",
    category: "menu",
    question:
      "What does CBR mean when you see it next to a dietary allergen on our menu?",
    options: [
      "Cannot Be Removed",
      "Contains, But Removable",
      "Carefully Balanced Recipe",
      "Cross-Contamination Risk",
    ],
    correctIndex: 1,
    explanation:
      "CBR stands for 'Contains, But Removable.' This means the allergen is present in the dish as written, but can be omitted or modified upon a guest's request. Always confirm with the kitchen when a guest has a genuine allergy.",
  },
  {
    id: 2,
    type: "multiple-choice",
    category: "menu",
    question: "The Kanpachi Usuzukuri features which type of fish?",
    options: ["Bluefin Tuna", "King Salmon", "Sakura Amberjack", "Black Cod"],
    correctIndex: 2,
    explanation:
      "The Kanpachi Usuzukuri features cold-smoked Sakura amberjack, sliced paper-thin in the usuzukuri style. 'Kanpachi' is the Japanese word for amberjack. It is served with shredded daikon, shiso, myoga, and tamari yuzu ponzu.",
  },
  {
    id: 3,
    type: "multiple-choice",
    category: "menu",
    question:
      "Which charcoal is used to grill the Tori No Teriyaki and our Wagyu dishes?",
    options: [
      "Mesquite charcoal",
      "Binchotan charcoal",
      "Lump hardwood charcoal",
      "Briquette charcoal",
    ],
    correctIndex: 1,
    explanation:
      "Binchotan is a refined Japanese white oak charcoal prized for its clean, steady radiant heat. It imparts a subtle smokiness without the harsh chemical flavors of treated charcoal, making it ideal for delicate proteins.",
  },
  {
    id: 4,
    type: "true-false",
    category: "menu",
    question:
      "Miso soup is traditionally served with a spoon and should not be sipped directly from the bowl.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation:
      "False. Miso soup is traditionally sipped directly from the bowl in Japanese culture — the bowl is held in both hands and the soup is brought to the lips. At AMA, we honor this tradition by mentioning it to guests, while ensuring spoons are available for those who prefer them.",
  },
  {
    id: 5,
    type: "scenario",
    category: "menu",
    question:
      "A guest mentions they have a severe shellfish allergy and asks for a recommendation from the specialty rolls. Which of the following is the safest option?",
    options: ["Thirty Below", "The Pearl", "Women of the Sea", "Ocean Whistle"],
    correctIndex: 2,
    explanation:
      "The Women of the Sea contains no shellfish as a primary allergen — it features spicy tuna, cucumber, King Salmon, and micro wasabi. The other options contain Dungeness Crab, Maine lobster, or Dungeness Crab respectively, which are shellfish. However, always escalate serious allergy inquiries to the chef.",
  },
  {
    id: 6,
    type: "multiple-choice",
    category: "menu",
    question:
      "The Gindara Kasuzuke is black cod marinated in what key ingredient?",
    options: ["Miso paste", "Sake-kasu", "Teriyaki glaze", "Yuzu miso"],
    correctIndex: 1,
    explanation:
      "The Gindara Kasuzuke is marinated in sake-kasu — the fragrant lees left over after sake is pressed. This rich, complex ingredient deeply perfumes and tenderizes the black cod before it is grilled over the salamander, creating its signature caramelized crust.",
  },
  {
    id: 7,
    type: "multiple-choice",
    category: "menu",
    question:
      "Which beverage pairing is recommended with the Miyazaki A5 Wagyu Ribeye?",
    options: [
      "Iwa 5 Junmai Daiginjo 'Assemblage 3', Toyama",
      "Masumi Junmai Ginjo Sparkling 'Origarami', Nagano",
      "Cabernet Sauvignon, Heitz Cellar Napa Valley 2018",
      "Pinot Noir, Chanin 'Zotovich Vineyard' Sta. Rita Hills 2021",
    ],
    correctIndex: 2,
    explanation:
      "The Miyazaki A5 Wagyu Ribeye pairs with Cabernet Sauvignon, Heitz Cellar Napa Valley 2018. The structured tannins and dark fruit of a classic Napa Cabernet provide an elegant counterpoint to the extraordinary richness of A5 wagyu.",
  },
  {
    id: 8,
    type: "multiple-choice",
    category: "menu",
    question: "What is 'usuzukuri' as it relates to our sashimi preparations?",
    options: [
      "A type of Japanese marinade using citrus and soy",
      "A style of smoking fish over cherry wood",
      "A knife technique for slicing fish paper-thin",
      "A pickling method using rice vinegar",
    ],
    correctIndex: 2,
    explanation:
      "Usuzukuri is a refined Japanese knife technique for slicing fish paper-thin at a precise angle. This technique allows the fish's natural texture, translucence, and delicate flavor to take center stage. Both our Kanpachi Usuzukuri and Masunozuke Usuzukuri are prepared in this tradition.",
  },
  {
    id: 9,
    type: "true-false",
    category: "menu",
    question:
      "The Edamame served at AMA is a complimentary item from the chef.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "True. Edamame is a complimentary gift from the chef. When introducing it to guests, do so with warmth: acknowledge that it comes with the chef's compliments and let the gesture set the tone for genuine hospitality throughout the meal.",
  },
  {
    id: 10,
    type: "multiple-choice",
    category: "menu",
    question:
      "The Okinawa Mochi Cake features a tableside presentation. What is poured tableside?",
    options: ["Warm matcha", "Apple caramel sauce", "Ponzu", "Yuzu miso sauce"],
    correctIndex: 1,
    explanation:
      "The apple caramel sauce is poured tableside over the Okinawa Mochi Cake. This creates a theatrical, memorable moment for the guest. Prepare the presentation thoughtfully — like the ponzu service, it is an opportunity to demonstrate gracious, attentive hospitality.",
  },
  {
    id: 11,
    type: "multiple-choice",
    category: "menu",
    question: "Which roll is fully vegetarian with no animal products?",
    options: ["Seaside", "Kappa", "Beneath the Waves", "At Shore"],
    correctIndex: 3,
    explanation:
      "At Shore is our vegetable roll — avocado, carrots, cucumber, shiso, and radish sprouts — with no listed allergens or animal products. The Kappa roll is cucumber only and also suitable, but At Shore is the more complete vegetable offering. Note: always confirm with the kitchen regarding shared preparation surfaces.",
  },
  {
    id: 12,
    type: "scenario",
    category: "menu",
    question:
      "A guest asks you to describe the Miyazaki A5 Wagyu Ribeye. Which response best reflects Umi's service philosophy?",
    options: [
      "'It's our most expensive item — a Japanese steak with lots of fat.'",
      "'It's really popular. It comes with some greens and sauce.'",
      "'Our Miyazaki A5 Wagyu Ribeye is the pinnacle of Japanese beef — graded A5, the highest designation in Japan. Grilled over binchotan charcoal and presented on a hot stone with watercress, nori, and seaweed salt, it is an extraordinary expression of wagyu at its finest.'",
      "'It's like a regular steak but more marbled — served with some condiments.'",
    ],
    correctIndex: 2,
    explanation:
      "The third response embodies Umi's voice — precise, warm, and knowledgeable. It explains the significance of A5 designation, the preparation technique (binchotan), and the accompaniments, giving the guest both the technical context and the poetry of the dish.",
  },
  {
    id: 13,
    type: "multiple-choice",
    category: "menu",
    question: "Yuzu, used in our ponzu and yuzu salt, is best described as:",
    options: [
      "A type of Japanese pickled plum",
      "A Japanese citrus fruit with a floral, complex aroma between lemon, grapefruit, and mandarin",
      "A fermented soybean paste used in sauces",
      "A Japanese rice wine used in cooking",
    ],
    correctIndex: 1,
    explanation:
      "Yuzu is a prized Japanese citrus fruit with a tart, extraordinarily aromatic flavor that sits somewhere between lemon, grapefruit, and mandarin — yet is unmistakably its own. Its zest and juice are used in our ponzu, yuzu salt, and yuzu miso preparations throughout the menu.",
  },
  {
    id: 14,
    type: "multiple-choice",
    category: "menu",
    question:
      "Which sake classification appears on our menu paired with the Gindara Kasuzuke?",
    options: ["Junmai Ginjo", "Tokubetsu Junmai", "Junmai Daiginjo", "Nigori"],
    correctIndex: 2,
    explanation:
      "Iwa 5 Junmai Daiginjo 'Assemblage 3' from Toyama is recommended with the Gindara Kasuzuke. Junmai Daiginjo is the highest grade of sake, brewed with rice polished to at least 50% of its original size and no added alcohol — exceptionally aromatic and refined, a fitting companion to the elegant black cod.",
  },
  {
    id: 15,
    type: "scenario",
    category: "menu",
    question:
      "A guest with an egg allergy is interested in the Women of the Sea roll. How should you advise them?",
    options: [
      "Tell them it is completely safe as eggs are not an ingredient.",
      "Advise them that egg is listed as CBR — it is present but can be removed upon request — and confirm with the kitchen before proceeding.",
      "Recommend they order a different roll without mentioning the allergen.",
      "Tell them sushi never contains egg so they have nothing to worry about.",
    ],
    correctIndex: 1,
    explanation:
      "The Women of the Sea lists Egg as CBR (Contains, But Removable). The correct approach is to clearly explain this to the guest, confirm that the modification is possible, and always verify with the kitchen before the order is placed. Guest safety is paramount — never make assumptions about allergens.",
  },
  {
    id: 16,
    type: "multiple-choice",
    category: "forbes",
    question:
      "According to Forbes Five-Star standards, within how many seconds must a guest's beverage be refilled?",
    options: ["15 seconds", "30 seconds", "60 seconds", "2 minutes"],
    correctIndex: 1,
    explanation:
      "Beverages must never be empty for more than 30 seconds — water, wine, sake, all beverages are monitored and refilled proactively. This is a hard Forbes standard. A guest must never need to signal for a refill.",
  },
  {
    id: 17,
    type: "multiple-choice",
    category: "forbes",
    question:
      "Within how many minutes of being seated must cocktail service be offered to guests?",
    options: ["30 seconds", "1 minute", "3 minutes", "5 minutes"],
    correctIndex: 1,
    explanation:
      "Cocktail service must be offered within 1 minute of guests being seated — this is a hard Forbes standard. Failing to offer within this window is a direct negative mark.",
  },
  {
    id: 18,
    type: "true-false",
    category: "forbes",
    question:
      "True or False: You may clear a guest's plate as soon as they finish eating.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation:
      "False. All guests at the table must be cleared simultaneously — only after every guest has finished eating. Clearing a single guest early is a Forbes failure point. It makes guests who are still eating feel rushed.",
  },
  {
    id: 19,
    type: "multiple-choice",
    category: "forbes",
    question:
      "What percentage of a Forbes restaurant score is based on service?",
    options: ["50%", "60%", "75%", "90%"],
    correctIndex: 2,
    explanation:
      "75% of a Forbes restaurant score is based on service; only 25% is based on physical facilities. This underscores why every service interaction — from greeting to farewell — is of paramount importance.",
  },
  {
    id: 20,
    type: "scenario",
    category: "forbes",
    question:
      "A guest requests a dish that is not on the AMA Sushi menu. What is the Forbes-aligned response?",
    options: [
      "Politely decline immediately and redirect to the menu.",
      "React graciously and explore the possibility with the kitchen before declining.",
      "Tell the guest that off-menu requests are not permitted.",
      "Offer a similar menu item as a substitute without checking with the kitchen.",
    ],
    correctIndex: 1,
    explanation:
      "Never immediately refuse an off-menu request. The Forbes standard is to react graciously and accommodatingly — always explore the possibility with the kitchen before declining. This reflects genuine hospitality and care for the guest's experience.",
  },
  {
    id: 21,
    type: "true-false",
    category: "forbes",
    question:
      "True or False: A guest's bar check should be automatically transferred to their dining bill — the guest should never be asked to manage this.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "True. Bar checks transfer automatically to the restaurant bill — the guest is never asked to manage this. This seamless transition is a mark of discreet, anticipatory service.",
  },
  {
    id: 22,
    type: "multiple-choice",
    category: "forbes",
    question:
      "What must be offered to all guests proactively, without waiting to be asked?",
    options: [
      "Chopsticks and fork",
      "Still and sparkling bottled water",
      "The dessert menu",
      "Complimentary edamame",
    ],
    correctIndex: 1,
    explanation:
      "Bottled still and sparkling water must be offered to all guests proactively — never wait to be asked. This is a Forbes hard standard. Edamame is also complimentary, but water is the specific Forbes proactive standard.",
  },
  {
    id: 23,
    type: "scenario",
    category: "forbes",
    question:
      "Name two service behaviors that Forbes inspectors flag as hard failure points:",
    options: [
      "Forgetting to offer dessert; using the wrong fork",
      "Beverages left empty over 30 seconds; guests clearing their own plates",
      "Beverages left empty over 30 seconds; staff chatting in guest earshot",
      "Taking too long with the check; menu not memorized",
    ],
    correctIndex: 2,
    explanation:
      "Hard Forbes failure points include: beverages left empty for more than 30 seconds, guests having to signal for attention, staff chatting in guest earshot, and clearing guests at different times. Option C captures two of the most commonly cited failures.",
  },
  {
    id: 24,
    type: "multiple-choice",
    category: "forbes",
    question:
      "Forbes specifically credits staff for something many restaurants overlook. What is it?",
    options: [
      "Describing every dish in detail",
      "Addressing guests by name",
      "Offering a dessert recommendation",
      "Refilling water before it's empty",
    ],
    correctIndex: 1,
    explanation:
      "Forbes actively credits staff for addressing guests by name when known. It is a small but powerful signal of personalized, attentive hospitality that distinguishes Five-Star service from merely good service.",
  },
  {
    id: 25,
    type: "multiple-choice",
    category: "forbes",
    question:
      "Within how many minutes of the reservation time must a reserved table be ready for guests?",
    options: ["1 minute", "3 minutes", "5 minutes", "10 minutes"],
    correctIndex: 2,
    explanation:
      "Tables must be ready within five minutes of the appointed reservation time. This is a Forbes standard. A guest arriving to find their table not ready reflects poor preparation and sets a negative tone for the entire experience.",
  },
  {
    id: 26,
    type: "multiple-choice",
    category: "wine",
    question:
      "What grape varieties are in the Billecart-Salmon Extra Brut Rosé?",
    options: [
      "50% Chardonnay, 30% Pinot Noir, 20% Meunier",
      "45% Chardonnay, 35% Pinot Noir, 20% Meunier",
      "60% Pinot Noir, 30% Chardonnay, 10% Meunier",
      "40% Pinot Noir, 40% Chardonnay, 20% Meunier",
    ],
    correctIndex: 1,
    explanation:
      "The Billecart-Salmon Extra Brut Rosé is 45% Chardonnay, 35% Pinot Noir, and 20% Meunier. This balance gives it structure from Pinot Noir, elegance from Chardonnay, and roundness from Meunier. It has been aged 36 months on lees — exceptionally long for a rosé Champagne.",
  },
  {
    id: 27,
    type: "multiple-choice",
    category: "wine",
    question:
      "How many individual wines are blended in the Krug Grande Cuvée 171ème Édition?",
    options: [
      "Over 50 wines from 6 vintages",
      "Over 100 wines from 10 vintages",
      "131 wines from 12 different years",
      "150 wines from 15 different years",
    ],
    correctIndex: 2,
    explanation:
      "The Krug Grande Cuvée 171ème blends 131 individual wines from 12 different years — the youngest from 2015 and the oldest from 2000. This extraordinary complexity requires over 20 years of craftsmanship per edition, and the wine then ages seven years in Krug's cellars before release.",
  },
  {
    id: 28,
    type: "multiple-choice",
    category: "wine",
    question: "What is the correct pronunciation of Presqu'ile Winery?",
    options: ["Pres-KWEEL", "Press-KEEL", "Pres-KEY-lay", "Pre-SKWI-lee"],
    correctIndex: 1,
    explanation:
      "Presqu'ile is pronounced Press-KEEL. It is a Santa Maria Valley producer making organic and sustainably farmed Chardonnay. Their wine is fermented with native yeasts and aged in large-format Austrian oak, giving it a textured, nuanced character with a signature salty sea air quality.",
  },
  {
    id: 29,
    type: "true-false",
    category: "wine",
    question:
      "True or False: The Domaine OTT Château de Selle rosé has been farmed organically since 2022.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "True. Domaine OTT transitioned to organic farming at Château de Selle in 2022. The estate was founded in 1896 and is now owned by Champagne Louis Roederer, which brings the same standard of precision to this Provençal rosé that they apply to their Champagne house.",
  },
  {
    id: 30,
    type: "multiple-choice",
    category: "wine",
    question:
      "What makes the Stolpman 'Uni' unusual compared to other white wines on our list?",
    options: [
      "It is 100% Roussanne fermented without oak",
      "It is a blend of Chardonnay and Roussanne, with 24 hours skin contact — only 1,750 cases produced",
      "It is fermented with wild yeast in concrete tanks",
      "It is the only wine on the list from Napa Valley",
    ],
    correctIndex: 1,
    explanation:
      "The Stolpman 'Uni' is a 60/40 blend of Chardonnay and Roussanne — the Roussanne brings lushness, floral complexity, and texture that makes this wine unlike any other white on our list. It also undergoes 24 hours of skin contact during winemaking, adding depth. Only 1,750 cases are produced.",
  },
  {
    id: 31,
    type: "multiple-choice",
    category: "wine",
    question:
      "Which wine pairs with the Miyazaki A5 Wagyu Ribeye, and why does it work?",
    options: [
      "Krug Grande Cuvée — the bubbles cut through the fat",
      "Paul Pernot Bourgogne Chardonnay — the mineral acidity balances the richness",
      "Heitz Cellars Cabernet Sauvignon — the structure and tannin stand up to the richness of A5 wagyu",
      "Chanin Pinot Noir — the light body contrasts beautifully with the wagyu",
    ],
    correctIndex: 2,
    explanation:
      "The Heitz Cellars Cabernet Sauvignon pairs with the Miyazaki A5 Wagyu Ribeye. The structure, tannin, and dark fruit of a classic Napa Cabernet provide an elegant counterpoint to the extraordinary fat and richness of A5 wagyu. Lighter wines would be overwhelmed by the wagyu's intensity.",
  },
  {
    id: 32,
    type: "multiple-choice",
    category: "wine",
    question:
      "What is the correct glassware for the Chanin Zotovich Pinot Noir?",
    options: [
      "Champagne flute",
      "Bordeaux glass",
      "Burgundy glass",
      "All-Purpose glass",
    ],
    correctIndex: 2,
    explanation:
      "The Chanin Zotovich Pinot Noir is served in a Burgundy glass. The wide bowl allows the delicate red fruit, Asian spice, and herbal notes to open up and express themselves fully. Burgundy glasses are used for all our Pinot Noir selections and for wines where aromatic complexity is a central feature.",
  },
  {
    id: 33,
    type: "multiple-choice",
    category: "wine",
    question:
      "Which white wine on our list is certified organic and comes from a south-facing hillside above the village of Chavignol?",
    options: [
      "Punta Crena Vermentino",
      "Presqu'ile Chardonnay",
      "Domaine Laporte Sancerre 'La Comtesse'",
      "Paul Pernot Bourgogne Chardonnay",
    ],
    correctIndex: 2,
    explanation:
      "The Domaine Laporte Sancerre 'La Comtesse' is certified organic, sourced from a south-facing hillside at 170–200 meters altitude overlooking Chavignol. It is fermented with estate-specific yeasts and aged on lees in stainless steel, yielding a pure, mineral Sauvignon Blanc.",
  },
  {
    id: 34,
    type: "multiple-choice",
    category: "wine",
    question:
      "How long does the Heitz Cellars Cabernet Sauvignon age before release?",
    options: [
      "8 months in French oak only",
      "2 years in oak then released immediately",
      "8 months neutral tank + 2 years French oak + 18 months in bottle — approximately 4 years total",
      "1 year in French oak + 1 year in bottle",
    ],
    correctIndex: 2,
    explanation:
      "The Heitz Cellars Cabernet ages in three stages: 8 months in a neutral tank, then 2 years in 50% new French oak, then 18 months in bottle before release — approximately 4 years of aging in total. This extended aging reflects the three-generation family philosophy of restraint, balance, and patience.",
  },
  {
    id: 35,
    type: "multiple-choice",
    category: "wine",
    question:
      "Which Champagne is the most prestigious on our list, and what is its price by the glass?",
    options: [
      "Billecart-Salmon Extra Brut Rosé at $42",
      "Vueve Fourny & Fils Brut 1er Cru at $30",
      "Krug Grande Cuvée at $95",
      "Krug Grande Cuvée at $85",
    ],
    correctIndex: 2,
    explanation:
      "The Krug Grande Cuvée is considered the most prestigious Champagne on our list — and one of the most prestigious in the world. Founded in 1843 by Joseph Krug, it is regarded as the pinnacle of the Champagne appellation. It is priced at $95 per glass and $625 per bottle.",
  },
  {
    id: 36,
    type: "multiple-choice",
    category: "wine",
    question:
      "The La Serena Brunello di Montalcino uses which grape variety, and what is unique about it?",
    options: [
      "100% Nebbiolo — it is the grape unique to Piedmont",
      "100% Sangiovese — specifically the Brunello clone, unique to the Montalcino region",
      "A blend of Sangiovese and Canaiolo — the classic Chianti blend",
      "100% Primitivo — a Southern Italian grape also known as Zinfandel",
    ],
    correctIndex: 1,
    explanation:
      "Brunello di Montalcino is made from 100% Sangiovese — specifically the Brunello clone, which is unique to the Montalcino region of Tuscany. This clone produces wines of exceptional depth, structure, and longevity. La Serena ages the wine 3 years in French oak casks plus 4 months in bottle before release.",
  },
  {
    id: 37,
    type: "scenario",
    category: "wine",
    question:
      "A guest asks for a lighter, refreshing white to start their meal. Which two wines would you suggest, and how would you describe them?",
    options: [
      "Paul Pernot Bourgogne and Stolpman 'Uni' — both are rich, complex whites",
      "Punta Crena Vermentino or Domaine Laporte Sancerre — describe the minerality, freshness, and coastal character",
      "Heitz Cabernet and Chanin Pinot Noir — light reds are ideal starters",
      "Krug Grande Cuvée — Champagne is always the best way to start",
    ],
    correctIndex: 1,
    explanation:
      "The Punta Crena Vermentino ($25/glass) and Domaine Laporte Sancerre ($30/glass) are the ideal lighter, refreshing whites to open a meal. The Vermentino has bright citrus, sea-spray salinity, and vibrant acidity from coastal Liguria. The Sancerre is pure, mineral, and crisp from an organic Loire Valley estate. Both are elegant and food-friendly starters.",
  },

  // ── SAKE ──────────────────────────────────────────────────────────────────
  {
    id: 38,
    type: "multiple-choice",
    category: "sake",
    question: "What does 'Junmai' mean in sake terminology?",
    options: [
      "Rice polished to 50% — the highest grade",
      "Pure rice sake — no distilled alcohol added",
      "Unfiltered sake with rice particles remaining",
      "Sake fermented at cold temperatures for fruity aromatics",
    ],
    correctIndex: 1,
    explanation:
      "'Jun' means pure, 'mai' means rice. Junmai sake is brewed from rice, water, yeast, and koji — with no added distilled alcohol. This results in a richer, more umami-forward flavor profile compared to Honjozo. All classifications with 'Junmai' in the name share this characteristic.",
  },
  {
    id: 39,
    type: "multiple-choice",
    category: "sake",
    question:
      "A guest asks for the driest sake on the list. Which do you recommend?",
    options: [
      "Masumi Sparkling Origarami (SMV -45)",
      "IWA 5 Assemblage 3 (SMV -1.5)",
      "Asian Beauty Junmai Daiginjo (SMV +6)",
      "Road to Osaka Nigori (SMV +4)",
    ],
    correctIndex: 2,
    explanation:
      "The Asian Beauty Junmai Daiginjo has an SMV of +6 — the highest positive value on the list, making it the driest. The Gentleman (Tokubetsu Junmai) and Road to Osaka Nigori are both SMV +4. The Masumi Sparkling at SMV -45 is the sweetest on the list by a wide margin.",
  },
  {
    id: 40,
    type: "multiple-choice",
    category: "sake",
    question:
      "What makes IWA 5 'Assemblage 3' unique compared to all other sakes on our list?",
    options: [
      "It is the only naturally carbonated sake on the list",
      "It is brewed exclusively with Yamadanishiki rice, the king of sake rice",
      "It was created by the former cellar master of Dom Pérignon, blended like Champagne from multiple batches, and aged 15 months",
      "It is the only Nigori sake on the list — unfiltered with rice particles",
    ],
    correctIndex: 2,
    explanation:
      "IWA 5 is extraordinary for three interconnected reasons: it was created by Richard Geoffroy, the former cellar master of Dom Pérignon; it is assembled from dozens of individual sake batches like a Champagne cuvée; and it is aged 15 months before release. Shiraiwa K.K. was founded only in 2019, yet immediately became one of the world's most talked-about luxury sake projects.",
  },
  {
    id: 41,
    type: "multiple-choice",
    category: "sake",
    question:
      "What is a Nigori sake, and how would you describe it to a guest?",
    options: [
      "A sake fermented twice, resulting in higher alcohol content",
      "A sparkling sake naturally carbonated in the bottle",
      "An unfiltered sake — rice particles remain, creating cloudiness and a creamy texture",
      "A sake aged in wood barrels for added complexity",
    ],
    correctIndex: 2,
    explanation:
      "Nigori sake is left unfiltered (or coarsely filtered), so rice particles remain in the brew — creating its characteristic cloudy appearance and creamy texture. To guests, you might say: 'Our nigori is slightly cloudy from the rice particles left in — it has a beautiful creamy texture, though the Road to Osaka finishes surprisingly dry with a fresh citrus character.'",
  },
  {
    id: 42,
    type: "multiple-choice",
    category: "sake",
    question:
      "What does SMV stand for, and what does a positive number indicate?",
    options: [
      "Sake Milling Value — higher numbers mean more rice has been polished away",
      "Sake Meter Value — a positive number indicates the sake is drier",
      "Sake Meter Value — a positive number indicates the sake is sweeter",
      "Standard Mash Volume — a measure of fermentation intensity",
    ],
    correctIndex: 1,
    explanation:
      "SMV stands for Sake Meter Value. It measures the relative density of the sake compared to water — which corresponds to sweetness/dryness. Positive numbers indicate drier sake (less residual sugar). Negative numbers indicate sweeter sake. Our range spans from -45 (Masumi Sparkling — very sweet) to +6 (Asian Beauty — noticeably dry).",
  },
  {
    id: 43,
    type: "multiple-choice",
    category: "sake",
    question:
      "Which sake on our list is naturally carbonated in the bottle, similar to pét-nat wine?",
    options: [
      "IWA 5 Junmai Daiginjo 'Assemblage 3'",
      "Ban Ryu Honjozo '10,000 Ways'",
      "Masumi Sparkling 'Origarami' Junmai Ginjo",
      "Road to Osaka Nigori",
    ],
    correctIndex: 2,
    explanation:
      "The Masumi Sparkling 'Origarami' is naturally carbonated by finishing fermentation inside the bottle — the same method used in pét-nat winemaking. Fine rice lees (origarami) are intentionally left in, creating its characteristic light cloudiness and creamy mousse texture. It is made by Miyasaka Brewing Company, established 1662.",
  },
  {
    id: 44,
    type: "multiple-choice",
    category: "sake",
    question:
      "The Masumi Sparkling has an SMV of -45. What does this tell you about the sake?",
    options: [
      "It is the driest sake on the list — the high negative value means it's very tannic",
      "It is very sweet — the sweetest on the list. This balances the effervescence and lactic notes from the rice lees",
      "It has no residual sugar — -45 refers to the carbonation level, not sweetness",
      "It is a neutral sake — the -45 refers to the fermentation temperature used",
    ],
    correctIndex: 1,
    explanation:
      "A very low (highly negative) SMV means the sake is very sweet. At -45, the Masumi Sparkling is by far the sweetest on our list. This sweetness is intentional — it balances the vivacious effervescence and the lactic, creamy notes from the rice lees, creating a beautifully refreshing, celebratory glass.",
  },
  {
    id: 45,
    type: "multiple-choice",
    category: "sake",
    question:
      "Which rice variety is used in both the IWA 5 Assemblage 3 and Masumi Sparkling, and why is it significant?",
    options: [
      "Tsuyahime — a Yamagata table rice prized for sweetness and umami",
      "Gohyakumangoku — a large-grain rice producing clean, crisp styles",
      "Yamada Nishiki — known as the 'king of sake rice,' prized for premium brewing",
      "Matsuyama Mii — a rare rice grown near underground river water sources",
    ],
    correctIndex: 2,
    explanation:
      "Yamada Nishiki is considered the 'king of sake rice.' It is prized for its large, starchy grain with a well-defined shinpaku (starchy core), low protein content, and resistance to crumbling during polishing. It is the preferred rice for premium Daiginjo-class sakes throughout Japan. IWA 5 uses it as one of three blended rice varieties; Masumi Sparkling uses it as its sole rice variety.",
  },
  {
    id: 46,
    type: "scenario",
    category: "sake",
    question:
      "A guest is enjoying their first sake ever and asks for your recommendation. What do you pour and why?",
    options: [
      "IWA 5 Assemblage 3 — it is the most complex and will show them the full range",
      "Ban Ryu Honjozo — clean, light, approachable, can be served at any temperature, widest food pairing range",
      "Masumi Sparkling — the bubbles make it the most approachable for a first-timer",
      "Asian Beauty Junmai Daiginjo — the tropical fruit notes are easy to understand",
    ],
    correctIndex: 1,
    explanation:
      "Ban Ryu Honjozo is ideal for a first-time sake guest: it is light, clean, and approachable; it can be served chilled, at room temperature, or warmed; and it pairs with almost anything on the menu. You might say: 'Our most approachable sake — clean, dry, and beautifully food-friendly. It can be served any way you like, and it pairs wonderfully with everything this evening.'",
  },
  {
    id: 47,
    type: "multiple-choice",
    category: "sake",
    question:
      "What does a lower rice milling percentage indicate about a sake's quality?",
    options: [
      "More bran and protein remain on the grain, resulting in earthier, heavier flavors",
      "More of the outer grain has been polished away, leaving only the pure starchy core — resulting in more delicate, refined sake",
      "The sake was fermented at lower temperatures, producing sweeter flavors",
      "The sake contains more added alcohol, making it lighter and less expensive",
    ],
    correctIndex: 1,
    explanation:
      "Rice milling percentage refers to how much of the original grain remains after polishing. A lower number means more has been polished away — leaving only the pure, starchy shinpaku core. This core ferments more cleanly and produces more delicate, aromatic, refined sake. For context: Daiginjo requires at least 50% to be polished away; Honjozo requires at least 30%.",
  },
  {
    id: 48,
    type: "multiple-choice",
    category: "sake",
    question:
      "Which brewery discovered Yeast No. 7, now used by breweries across Japan?",
    options: [
      "Fuji Brewery — makers of Ban Ryu '10,000 Ways'",
      "Daimon Shuzo — makers of Road to Osaka Nigori",
      "Miyasaka Brewing Company — makers of Masumi Sparkling",
      "Sumikawa Shuzojo — makers of Asian Beauty",
    ],
    correctIndex: 2,
    explanation:
      "Miyasaka Brewing Company, established in 1662 in Suwa, Nagano Prefecture, is renowned for discovering Yeast No. 7 — a cornerstone yeast now used by breweries throughout Japan to achieve clean, reliable fermentation. Their flagship sake on our list is the Masumi Sparkling 'Origarami' Junmai Ginjo.",
  },
  {
    id: 49,
    type: "true-false",
    category: "sake",
    question:
      "True or False: IWA 5 was founded over 100 years ago and is one of Japan's oldest breweries.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation:
      "False. Shiraiwa K.K. — the company behind IWA 5 — was founded only in 2019. Despite being one of the newest breweries on our list, it immediately became one of the most talked-about luxury sake projects in the world, thanks to its founder Richard Geoffroy, the former cellar master of Dom Pérignon. Compare this to Ban Ryu's Fuji Brewery (founded 1778) or Masumi's Miyasaka (founded 1662).",
  },

  // ── WHITE BURGUNDY ────────────────────────────────────────────────────────
  {
    id: 50,
    type: "multiple-choice",
    category: "white-burgundy",
    question:
      "What is the correct pronunciation of the Chablis Premier Cru vineyard Beauroy?",
    options: ["Boh-WA", "Bay-ROY", "Bo-rooy", "BOW-roo-ee"],
    correctIndex: 2,
    explanation:
      "Beauroy is pronounced Bo-rooy — this is the Premier Cru climat of the Laurent Tribut Chablis on our list. Knowing the pronunciation gives guests confidence that you understand the wine and its origins.",
  },
  {
    id: 51,
    type: "multiple-choice",
    category: "white-burgundy",
    question:
      "What is Kimmeridgian limestone, and which wine on our White Burgundy list comes from it?",
    options: [
      "A volcanic rock unique to Burgundy — the Ramonet Puligny",
      "Ancient seabed limestone found in Chablis — the Tribut Chablis 1er Cru Beauroy",
      "A type of clay found in Meursault — the Chavy-Chouet",
      "Chalky limestone found throughout Burgundy — all five wines",
    ],
    correctIndex: 1,
    explanation:
      "Kimmeridgian limestone is ancient seabed limestone — it gives Chablis its signature razor-sharp mineral tension and chalky character. The Laurent Tribut Chablis 1er Cru Beauroy comes specifically from Kimmeridgian limestone foothills.",
  },
  {
    id: 52,
    type: "multiple-choice",
    category: "white-burgundy",
    question:
      "What does 'casse-tête' mean in French, and why is it the name of the Meursault on our list?",
    options: [
      "It means 'stone head' — referring to the hardness of the Meursault producer's style",
      "It means 'conundrum' or 'puzzle' — referring to the hardness of the pebbly limestone soil that challenged those who first planted it",
      "It means 'broken ridge' — the name of the slope where the vines are planted",
      "It means 'warm head' — referencing the unusually warm 2019 vintage",
    ],
    correctIndex: 1,
    explanation:
      "'Casse-tête' means conundrum or puzzle in French. The name of the Chavy-Chouet Meursault 'Les Casse-Têtes' refers to the hardness of the pebbly limestone soil — it was a challenge (a puzzle) for ancestors who first planted vines there.",
  },
  {
    id: 53,
    type: "multiple-choice",
    category: "white-burgundy",
    question:
      "Hubert Lamy plants their vines at unusually high density. Why, and what is the effect on the wine?",
    options: [
      "Higher density is required by Burgundian law for Premier Cru designations",
      "High density forces roots deep into the limestone, naturally limits yields, and amplifies mineral tension in the wine",
      "Dense planting creates a warmer microclimate, producing richer, more opulent wines",
      "High density is purely traditional — there is no measurable impact on the wine",
    ],
    correctIndex: 1,
    explanation:
      "Hubert Lamy plants at extraordinary density — far above Burgundian norms. This disciplines the vine, forces roots to compete and plunge deep into the limestone for nutrients, naturally limits yields, and produces a wine of exceptional precision and mineral tension.",
  },
  {
    id: 54,
    type: "scenario",
    category: "white-burgundy",
    question:
      "A guest is considering the Puligny-Montrachet. What story do you tell about Ramonet?",
    options: [
      "'Ramonet is a very old Burgundy estate — one of the biggest in the region.'",
      "'Pierre Ramonet purchased his first vineyard plot in 1934 — and it became one of the first estate-bottled white Burgundies imported into America after Prohibition. The domaine gained legendary collector status.'",
      "'The Ramonet family has farmed in Puligny since the 17th century and holds several Grand Cru plots.'",
      "'Ramonet is best known for their red Burgundy — the Puligny is a newer addition to their portfolio.'",
    ],
    correctIndex: 1,
    explanation:
      "The Ramonet story is compelling and memorable: Pierre Ramonet purchased his first plot at Ruchottes-Chassagne in 1934. The estate's wines became one of the first estate-bottled white Burgundies ever imported to the US after Prohibition, gaining legendary collector status that endures today.",
  },
  {
    id: 55,
    type: "multiple-choice",
    category: "white-burgundy",
    question:
      "What does 1er Cru mean in Burgundy, and why does it matter for the wines on our list?",
    options: [
      "It means the wine is from the first vintage the estate ever produced",
      "It is the highest classification in Burgundy, above Grand Cru",
      "It is the second-highest classification — a specifically named vineyard plot of exceptional terroir, below Grand Cru",
      "It means the wine is produced by the first generation of a family estate",
    ],
    correctIndex: 2,
    explanation:
      "Premier Cru (1er Cru) is the second-highest classification in Burgundy, below Grand Cru. It designates a specific, named vineyard plot of proven exceptional terroir. On our list, both the Tribut Chablis and the Hubert Lamy Saint-Aubin are Premier Cru wines.",
  },
  {
    id: 56,
    type: "multiple-choice",
    category: "white-burgundy",
    question:
      "What is lutte raisonnée farming, as practiced by Bachelet-Monnot for their Chassagne-Montrachet?",
    options: [
      "Fully certified biodynamic farming using lunar calendar planting cycles",
      "100% organic farming with annual certification by a governing body",
      "Organic-leaning farming that avoids chemicals and pesticides without full organic certification — 'reasoned struggle'",
      "Conventional farming with targeted pesticide use approved by the Burgundy appellation board",
    ],
    correctIndex: 2,
    explanation:
      "Lutte raisonnée means 'reasoned struggle' — it describes sustainable farming that avoids chemicals and pesticides, but stops short of full organic certification. Bachelet-Monnot practices lutte raisonnée across their six Chassagne parcels, reflecting their commitment to honest, land-respecting winemaking.",
  },
  {
    id: 57,
    type: "scenario",
    category: "white-burgundy",
    question:
      "A guest wants the richest, most opulent style of white Burgundy on our list. What do you pour?",
    options: [
      "The Tribut Chablis 1er Cru — Chablis is the fullest-bodied Burgundy village",
      "The Hubert Lamy Saint-Aubin — its Puligny-like profile is the richest on the list",
      "The Chavy-Chouet Meursault 'Les Casse-Têtes' — Meursault is Burgundy's most opulent white wine village",
      "The Bachelet-Monnot Chassagne-Montrachet — Chassagne is richer than Meursault",
    ],
    correctIndex: 2,
    explanation:
      "For richness and opulence, Meursault is the answer. It is Burgundy's most opulent white wine village — known for hazelnut, butter, and stone fruit. The Chavy-Chouet 'Les Casse-Têtes' is a beautiful example of that richness with seven generations of family heritage behind it.",
  },
  {
    id: 58,
    type: "multiple-choice",
    category: "white-burgundy",
    question:
      "What makes the Hubert Lamy Saint-Aubin a particularly exciting value on our White Burgundy list?",
    options: [
      "It is the least expensive wine on the list and comes from a very obscure, low-profile appellation",
      "Saint-Aubin is adjacent to Puligny-Montrachet; Lamy's wine is Puligny-like in profile — Premier Cru quality at a fraction of the Puligny price",
      "Saint-Aubin is considered superior to Puligny-Montrachet but sells for less due to lower name recognition",
      "The wine is priced below market value because Hubert Lamy is a young estate with no track record",
    ],
    correctIndex: 1,
    explanation:
      "Saint-Aubin sits adjacent to Puligny-Montrachet on the Côte de Beaune. Hubert Lamy's 'Les Frionnes' is described as 'Puligny-like in profile' — combining the tension, limestone minerality, and incisive close of Puligny — but at a Saint-Aubin price. This is the value story to tell guests who want Puligny character on a more accessible budget.",
  },
  {
    id: 59,
    type: "true-false",
    category: "white-burgundy",
    question:
      "True or False: The 2021 Burgundy vintage was abundant and rich, with excellent yields throughout the region.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation:
      "False. The 2021 Burgundy vintage was defined by severe spring frosts that dramatically reduced yields — it was a very challenging growing year. The wines from producers who succeeded (like Hubert Lamy and Ramonet) are lean, high in acidity, and strongly mineral-driven — precision over richness. It is not a vintage of abundance.",
  },
  {
    id: 60,
    type: "multiple-choice",
    category: "cocktail",
    question:
      "What does Komorebi mean, and what makes it designed for non-whisky drinkers?",
    options: [
      "Cherry blossom petals — it uses light Haku vodka with pineapple",
      "Sunlight filtering through leaves — it uses light Nikka Days whisky with tropical pineapple mango cordial, making it approachable and fruit-forward",
      "Scent of the earth — made with shiitake-infused whisky and umami notes",
      "Wind and flower — a gin-based cocktail with Roku and lychee",
    ],
    correctIndex: 1,
    explanation:
      "Komorebi means sunlight filtering through leaves. It was specifically designed for non-whisky drinkers, using Nikka Days — a light, blended Japanese whisky — with a pineapple mango cordial. Approachable, fruit-forward, and refreshing.",
  },
  {
    id: 61,
    type: "multiple-choice",
    category: "cocktail",
    question:
      "What is fat-washing, and which AMA cocktail uses this technique?",
    options: [
      "A filtration technique that removes impurities — used in the Dashi martini",
      "A technique where fat is blended with a spirit then frozen and removed, leaving its flavor behind — used in Kohaku Yume with Kikori whisky",
      "A method of aging spirits in butter-washed barrels — used in the Daichi No Kaori",
      "A Japanese distillation technique — used in all whisk(e)y cocktails on the menu",
    ],
    correctIndex: 1,
    explanation:
      "Fat-washing is a bartending technique where butter or fat is blended with a spirit, then frozen — the fat solidifies and is removed, leaving its flavor behind in the liquid. Kohaku Yume uses fat-washed Kikori rice whisky, giving the old fashioned its characteristic buttery richness.",
  },
  {
    id: 62,
    type: "scenario",
    category: "cocktail",
    question:
      "A guest says they don't drink alcohol. What are their three options and how do you briefly describe them?",
    options: [
      "Fūryū (dragon fruit & ginger), Yōka (mango pineapple soda), Hakuro (yuzu & shiso with furikake) — all crafted with the same care as our cocktail menu",
      "Dashi (umami martini), Henka (warm milk punch), Odaya (rum sour) — all available as mocktail versions upon request",
      "We only have still or sparkling water for non-drinkers",
      "Komorebi and Ryū No Shizuku are our lowest-alcohol options and suitable for guests who don't drink",
    ],
    correctIndex: 0,
    explanation:
      "The three dedicated mocktails are Fūryū (dragon fruit, ginger, and lime), Yōka (mango, pineapple, lemon, and soda), and Hakuro (yuzu and shiso over pebble ice, topped with furikake). All are independently crafted — never position them as lesser options.",
  },
  {
    id: 63,
    type: "multiple-choice",
    category: "cocktail",
    question:
      "What is the service sequence for the Dashi martini, and why does it matter?",
    options: [
      "Shake and pour directly into the martini glass; the green onion oil is added in the kitchen before service",
      "Stir, strain into a sidecar, present at the table, pour into the martini glass in front of the guest, add 3–5 drops of green onion oil tableside — it is a deliberate service moment",
      "Build in the glass at the bar and present with the sidecar as a garnish holder",
      "Serve at room temperature without ice — the miso vermouth should not be chilled",
    ],
    correctIndex: 1,
    explanation:
      "The Dashi is a tableside service moment: stir, strain into the sidecar, present at the table with the martini glass, pour in front of the guest, then add 3–5 drops of green onion oil. The theater of this service elevates the experience and gives staff an opportunity to tell the story of this miso-inspired martini.",
  },
  {
    id: 64,
    type: "multiple-choice",
    category: "cocktail",
    question:
      "Which cocktail is best enjoyed at the beginning or end of the meal, and why?",
    options: [
      "Kohaku Yume — the old fashioned format is a classic aperitif",
      "Fūka — equal-parts cocktails are designed to open the palate",
      "Henka — it is a warm milk punch served in a Japanese teapot, best shared and pairs beautifully with dessert",
      "Dashi — its savory miso character makes it ideal as a palate cleanser",
    ],
    correctIndex: 2,
    explanation:
      "Henka is a warm milk punch served in a transparent glass teapot with mini glasses — a sharing experience. It is recommended at the beginning of the meal as an aperitif or at the end paired with dessert. Its warmth and light strawberry and green tea flavors make it perfect for both moments.",
  },
  {
    id: 65,
    type: "multiple-choice",
    category: "cocktail",
    question:
      "What Prohibition-era classic inspired Fūka, and what makes our version different?",
    options: [
      "The Martini — we substitute lychee for olive brine and use Roku gin",
      "The Manhattan — we substitute lychee for sweet vermouth",
      "The Last Word — we substitute lychee liqueur for maraschino and use Roku, a Japanese gin with sakura and yuzu botanicals",
      "The Bee's Knees — we substitute Green Chartreuse for honey syrup",
    ],
    correctIndex: 2,
    explanation:
      "The Last Word is a classic equal-parts cocktail from the 1920s Detroit Athletic Club — gin, green Chartreuse, maraschino, and lime. Fūka substitutes lychee liqueur for maraschino and uses Roku gin, featuring six Japanese botanicals. It is complex, balanced, and a wonderful story to share with guests.",
  },
  {
    id: 66,
    type: "multiple-choice",
    category: "cocktail",
    question:
      "What does Daichi No Kaori mean, and what gives it its distinctive savory quality?",
    options: [
      "Amber Dream — fat-washed Kikori and cacao liqueur create a rich, sweet finish",
      "Scent of the Earth — shiitake-infused Toki whisky and locally sourced date amaro create a umami, earthy, mushroom finish",
      "Dragon's Drop — fresh dragon fruit juice and house-made ginger syrup give it a fruity savory character",
      "Calm — Okinawan rum and shiso syrup create a savory herbal flavor",
    ],
    correctIndex: 1,
    explanation:
      "Daichi No Kaori means Scent of the Earth. Its savory, umami quality comes from Shitake Toki — a shiitake mushroom-infused Japanese whisky — combined with locally sourced date amaro. The result is an earthy highball with date and honey on entry and a distinctive mushroom finish.",
  },
  {
    id: 67,
    type: "true-false",
    category: "cocktail",
    question:
      "Which cocktail on the AMA menu contains dairy and must be flagged for guests with dairy restrictions?",
    options: [
      "Henka — the warm milk punch contains dairy",
      "Odaya — the furikake garnish contains dairy",
    ],
    correctIndex: 0,
    explanation:
      "Henka (Change/Transformation) is the warm milk punch — it is a dairy-containing cocktail and must be flagged for guests with dairy allergies or restrictions. No other cocktail on the list contains dairy.",
  },
  {
    id: 68,
    type: "true-false",
    category: "cocktail",
    question:
      "True or False: The mocktails at AMA are simplified versions of the cocktails with fewer ingredients, designed as lower-priority alternatives.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation:
      "False. The three mocktails — Fūryū, Yōka, and Hakuro — are independently crafted with their own flavor profiles and designed to be equally enjoyable. They are never positioned as lesser options. All three are made with the same attention and care as the alcoholic menu.",
  },
  {
    id: 69,
    type: "multiple-choice",
    category: "cocktail",
    question: "What is furikake, and which cocktails use it as a garnish?",
    options: [
      "A Japanese citrus salt — used on the rim of Komorebi and Ryū No Shizuku",
      "A Japanese seasoning blend of sesame, seaweed, and salt — used on Odaya and Hakuro, where it slowly infuses into the drink",
      "A shiso-based powder used on Dashi and Kohaku Yume",
      "A dried mushroom dust used exclusively on Daichi No Kaori",
    ],
    correctIndex: 1,
    explanation:
      "Furikake is a Japanese seasoning blend of sesame seeds, seaweed, and salt — traditionally used as a rice topping. At AMA, it is used as a garnish on Odaya (the rum sour) and Hakuro (the yuzu shiso mocktail), where it slowly infuses into the drink over time, adding a subtle savory dimension.",
  },
  {
    id: 70,
    type: "multiple-choice",
    category: "sake-bottle",
    question: "What makes the Reikyo Absolute 0 technically unique?",
    options: [
      "It is brewed at sub-zero temperatures and uses synthetic yeast",
      "It has been polished to 0.85% — 99.15% of the grain removed over 221 days of milling",
      "It is the oldest sake in continuous production in Japan",
      "It uses a wild koji strain found only in Miyagi prefecture",
    ],
    correctIndex: 1,
    explanation:
      "The Reikyo Absolute 0 was milled over 5,297 hours (221 days) to reach 0.85% remaining grain — the most polished sake ever produced. Japanese law now rounds up from 0.85%, so it must be labeled 1%. Only pre-2019 bottles were legally labeled '0%'. It is aged at -5°C and produced in 999 bottles per year.",
  },
  {
    id: 71,
    type: "multiple-choice",
    category: "sake-bottle",
    question:
      "Which two sakes on the bottle list are from the same toji, and what connects them?",
    options: [
      "Jikon Senbon Nishiki and Jikon Omachi — both by Toji Tadayoshi Onishi of Kiyasho Shuzo",
      "Zankyo Super 7 and Reikyo Absolute 0 — both by Niizawa Jozoten in Miyagi",
      "Fukucho Moon on the Water and Fukucho Seaside Sparkling — both by Miho Imada, Japan's only female brewery owner-toji",
      "Toko Sun Rise and Toko Divine Droplets — both from the same Yamagata brewery",
    ],
    correctIndex: 2,
    explanation:
      "Miho Imada is Japan's only female brewery owner-toji, responsible for both Fukucho Moon on the Water (Junmai Ginjo) and Fukucho Seaside Sparkling. The Seaside uses rare white koji for its wine-like citric acidity and is secondary bottle-fermented like Champagne. Both come from Hiroshima — the birthplace of ginjo sake.",
  },
  {
    id: 72,
    type: "multiple-choice",
    category: "sake-bottle",
    question:
      "What is the shizuku method and which sake on the bottle list uses it?",
    options: [
      "A double-distillation technique for higher ABV — used in Kikuhime Yamahai Genshu",
      "Extended cold fermentation over winter — used in Zankyo Super 7",
      "Gravity drip pressing — no mechanical pressure, only gravity collects the sake — used in Toko Divine Droplets",
      "An ancient pressing technique using heated rice bags — used in Mana 1751 True Vision",
    ],
    correctIndex: 2,
    explanation:
      "Shizuku means gravity drip pressing — the sake drips through the cloth by its own weight, with no mechanical pressure applied to the moromi. Only the most delicate fraction of sake is collected, resulting in maximum purity and finesse. Used in Toko Divine Droplets from the same brewery (founded 1579) that makes Sun Rise.",
  },
  {
    id: 73,
    type: "true-false",
    category: "sake-bottle",
    question:
      "The Reikyo Absolute 0 is currently legally permitted to be labeled 0% polishing ratio.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation:
      "False. Japanese law now rounds up from 0.85%, so the Reikyo Absolute 0 must be labeled as 1% polishing ratio. Only bottles produced before 2019 were ever legally labeled '0%'. The name refers to the absolute zero temperature (-5°C) at which the sake is aged, not to a literal 0% polish under current law.",
  },
  {
    id: 74,
    type: "multiple-choice",
    category: "sake-bottle",
    question:
      "What is Yamahai, and which of these best describes the style difference compared to standard sake?",
    options: [
      "A blending technique combining multiple vintages for consistency — results in a lighter, cleaner style",
      "A traditional method using naturally cultivated lactic bacteria — results in higher acidity, bolder umami, and more complex, earthy or smoky character",
      "A cold-filtration process that removes color and sediment — creates a cleaner, more delicate sake",
      "A pasteurization method used to stabilize sake for long shipping — no flavor impact",
    ],
    correctIndex: 1,
    explanation:
      "Yamahai uses naturally cultivated lactic bacteria rather than commercial starter cultures. It produces higher acidity and bolder umami — sometimes earthy, smoky, or wild in character. Like the difference between a natural wine and a conventionally made wine. On this list: Kikuhime, Mana 1751 True Vision, and Shiokawa Cowboy are all Yamahai.",
  },
  {
    id: 75,
    type: "multiple-choice",
    category: "sake-bottle",
    question: "What makes the Jikon Omachi at $990 worth the price?",
    options: [
      "It is the oldest sake brewery in Japan and uses ancient wooden fermentation tanks",
      "Omachi is Japan's oldest sake rice — wild, complex, and difficult to brew — combined with Jikon's lottery-only allocation and electric house acidity",
      "It has the highest ABV of any bottle on the list and is aged for over 20 years",
      "It won the IWC Champion Sake award five consecutive years",
    ],
    correctIndex: 1,
    explanation:
      "Omachi is Japan's oldest cultivated sake rice — wild, complex, and extremely difficult to grow and brew. Jikon is a cult producer with lottery-only allocation in Japan and tiny global distribution. Their house signature — luminous, electric acidity from meticulous koji work — combined with Omachi's earthy depth and hazelnut-caramel complexity makes this a genuinely irreplicable expression. The price reflects rarity, not marketing.",
  },
  {
    id: 76,
    type: "multiple-choice",
    category: "sake-bottle",
    question:
      "What is white koji (shiroji) and which sake on the bottle list uses it?",
    options: [
      "A red-pigmented koji that produces fruity esters — used in Jikon Senbon Nishiki",
      "An extremely rare koji that produces citric acid rather than lactic acid — giving wine-like, sharp, bright acidity — used in Fukucho Seaside Sparkling",
      "A genetically modified koji strain developed for consistency — used in Nanbu Bijin Southern Beauty",
      "A yellow koji variant that produces more sweetness — used in Rihaku Dreamy Clouds",
    ],
    correctIndex: 1,
    explanation:
      "White koji (shiroji) is extremely rare in sake production. Instead of producing lactic acid like standard koji, it produces citric acid — giving a wine-like, sharp, bright acidity. Fukucho Seaside Sparkling uses white koji plus secondary bottle fermentation (méthode champenoise-style), making it closer to pétillant naturel than typical sparkling sake. The SMV of -40 appears sweet on paper but the citric acid dominates.",
  },
  {
    id: 77,
    type: "multiple-choice",
    category: "sake-bottle",
    question:
      "Atago No Matsu costs $65. Zankyo Super 7 costs $2,850. Both are from the same brewery. What does this tell you about Niizawa Jozoten?",
    options: [
      "The brewery prices inconsistently due to marketing decisions, not quality differences",
      "Niizawa Jozoten uses their best Yamada Nishiki rice only for their flagship bottles",
      "Niizawa Jozoten applies the same philosophy at every price point — using Grade A Yamada Nishiki even in their honjozo, believing every guest deserves the best rice",
      "The Atago No Matsu is a different label purchased by Niizawa Jozoten",
    ],
    correctIndex: 2,
    explanation:
      "Niizawa Jozoten uses Grade A Yamada Nishiki — the variety normally reserved for premium daiginjo — even in their $65 Tokubetsu Honjozo. Their philosophy is that every price point deserves the best rice. The Atago No Matsu is one of the best values on the list: same brewery, same ingredient standards as the $2,850 Zankyo and $9,995 Reikyo.",
  },
  {
    id: 78,
    type: "scenario",
    category: "sake-bottle",
    question:
      "A guest tells you they've tried sake before and always found it sweet and thick — they don't think they like it. Which bottle would you guide them toward first, and why?",
    options: [
      "Kikuhime Yamahai Genshu — it's full-bodied and rich, which shows sake's true complexity",
      "Rihaku Dreamy Clouds — it invented the dry nigori category; it looks cloudy but drinks lean, nutty, and surprisingly dry, the opposite of what they expect",
      "Fukucho Seaside Sparkling — the white koji and bottle fermentation make it the most unique expression on the list",
      "Jikon Omachi — the electric acidity and complexity will immediately change their mind about sake",
    ],
    correctIndex: 1,
    explanation:
      "Rihaku Dreamy Clouds is the ideal answer for a guest who thinks they don't like sake. It invented the dry, light-style nigori — and it defies every expectation: lean, nutty, acidic, and dry where others are sweet and thick. It was Japan's first nigori brewed at Junmai Ginjo polishing level. Alternatively, Isojiman Pride of the Seashore (SMV +5, clean, saline) is excellent for guests who want dry precision.",
  },
  {
    id: 79,
    type: "multiple-choice",
    category: "sake-bottle",
    question:
      "Which sake on the bottle list was the Grammy Awards official sake in 2010?",
    options: [
      "Reikyo Absolute 0 — for its extraordinary craftsmanship",
      "Jikon Omachi — for its rarity and prestige",
      "Zankyo Super 7 — Niizawa Jozoten",
      "Kikuhime Yamahai Genshu — for its aging potential",
    ],
    correctIndex: 2,
    explanation:
      "The Zankyo Super 7 from Niizawa Jozoten was the Grammy Awards 2010 official sake. It was also the world's most polished commercially available sake at release (7% remaining grain, 350 hours of milling) and received Wine Advocate 98 points. The name Zankyo means 'reverberation' — describing the lingering but elusive finish.",
  },

  // ── WINE BOTTLE QUESTIONS ──────────────────────────────────────────────────
  {
    id: 80,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "Delamotte Blanc de Blancs is often described as Salon-quality fruit. What is the relationship between Delamotte and Salon?",
    options: [
      "Delamotte is a négociant that purchases Salon's excess grapes",
      "Salon and Delamotte are owned by the same group — when Salon doesn't declare a vintage, Delamotte has first access to those Grand Cru grapes",
      "Delamotte is a previous name for Salon, now rebranded for export markets",
      "Both houses share the same caves but use different winemaking teams",
    ],
    correctIndex: 1,
    explanation:
      "Delamotte is the sister house to the legendary Salon — owned by the same group. When Salon doesn't declare a vintage (which it does only in exceptional years), Delamotte has first access to those Grand Cru Côte des Blancs grapes. This makes Delamotte a remarkable value — essentially Salon-quality fruit in a more accessible and consistently available format.",
  },
  {
    id: 81,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "Krug Grand Cuvée is fermented in small oak barrels. Why is this unusual for Champagne?",
    options: [
      "Oak barrels are prohibited under AOC law for non-vintage Champagnes",
      "Oak fermentation adds cost — most Champagne houses ferment in stainless steel to preserve freshness and control costs",
      "Oak barrels only work with Pinot Noir, not Chardonnay-dominant blends",
      "The small barrels reduce the amount of yeast contact during fermentation",
    ],
    correctIndex: 1,
    explanation:
      "The vast majority of Champagne is fermented in temperature-controlled stainless steel tanks, which preserves freshness, consistency, and reduces cost. Krug is one of only a handful of houses that ferments in small oak barrels — a labour-intensive, expensive method that adds texture, richness, and complexity. It is a signature of Krug's philosophy of treating each harvest wine individually.",
  },
  {
    id: 82,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "In what year did Billecart-Salmon pioneer rosé Champagne, and why is this historically significant?",
    options: [
      "1818 — the year the house was founded",
      "1945 — immediately after World War II, when celebrations required new styles",
      "1954 — making it one of the earliest commercially released rosé Champagnes from a major house",
      "1972 — the year President Nixon served Champagne in Beijing",
    ],
    correctIndex: 2,
    explanation:
      "Billecart-Salmon pioneered rosé Champagne when they released it in 1954 — one of the earliest commercial rosé Champagnes from any major house. They established the benchmark style: restrained, dry, and precise, with pale salmon colour and delicate wild strawberry character. Their commitment to very low dosage (~5g/L) ensures the wine is never sweet.",
  },
  {
    id: 83,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "What do the scores Wine Spectator 96 and Wine Advocate 95 refer to on the bottle list, and what vintage earned them?",
    options: [
      "The 2008 Dom Pérignon — considered a decade-defining vintage for acidity",
      "The 2013 Dom Pérignon — defined by a long cool growing season and Champagne's last October harvest",
      "The 2013 Perrier-Jouët Belle Époque Rosé — for its Art Nouveau bottle and prestige",
      "The Krug Grand Cuvée 167th Edition — for its multi-decade blending complexity",
    ],
    correctIndex: 1,
    explanation:
      "The 2013 Dom Pérignon earned Wine Spectator 96 and Wine Advocate 95 points — and is considered by many critics the finest Dom Pérignon of the decade. The vintage was defined by a long, cool growing season and Champagne's last October harvest. Vinous described it among Champagne's 'greatest decade.' It is still developing and best enjoyed 2025–2040.",
  },
  {
    id: 84,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "Ruinart is the world's oldest Champagne house. In what year was it founded?",
    options: ["1743", "1729", "1772", "1818"],
    correctIndex: 1,
    explanation:
      "Ruinart was founded in 1729 — making it the world's oldest Champagne house. Their Brut Rosé is notably bolder and more structured than the delicate Billecart-Salmon style — driven by 55% Pinot Noir, it shows pomegranate, dark cherry, and a long saline finish. It is a rosé Champagne built for food rather than aperitif.",
  },
  {
    id: 85,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "What is the defining soil type of Chablis, and why does it make the wine ideal with shellfish?",
    options: [
      "Volcanic basalt — gives Chablis its characteristic gunflint minerality and power",
      "Granitic sand — free-draining soils that produce wines of unusual lightness",
      "Kimmeridgian limestone — ancient marine sediment rich in fossilised oyster shells, which gives Chablis a saline, oyster-shell minerality",
      "Clay and limestone — the same as the Côte d'Or, but at cooler northern temperatures",
    ],
    correctIndex: 2,
    explanation:
      "Chablis is grown on Kimmeridgian limestone — ancient marine sediment full of fossilised oyster shells and micro-organisms. This soil type gives Chablis its signature saline, oyster-shell minerality and chalky texture. The affinity with actual oysters is both sensory (the wine mirrors the iodine-saline character of raw shellfish) and geological (the soil once was seabed).",
  },
  {
    id: 86,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "The Delavenne & Fils Tradition Brut Grand Cru undergoes no malolactic fermentation (MLF). What effect does this have on the wine's character?",
    options: [
      "It makes the wine sweeter and rounder by retaining more residual sugar",
      "It preserves higher acidity and gives the wine a fresh, taut, apple-crisp character rather than a creamy, softened style",
      "It allows longer lees aging and creates more brioche complexity",
      "It reduces sulphur levels, making the wine suitable for guests with sensitivities",
    ],
    correctIndex: 1,
    explanation:
      "Malolactic fermentation (MLF) converts sharp malic acid into softer lactic acid, producing the characteristic creamy, buttery quality found in many Champagnes. Delavenne deliberately avoids MLF, which preserves the naturally high acidity and gives the wine a notably taut, fresh, apple-crisp character. Combined with Grand Cru fruit, no fining, and no filtration, the result is a Champagne of uncommon authenticity and vibrancy.",
  },
  {
    id: 87,
    type: "scenario",
    category: "wine-bottle",
    question:
      "A guest is choosing between the Selbach-Oster Riesling Kabinett and a Chablis. They want the best possible food wine at the table that will work with everything being ordered. Which would you recommend and why?",
    options: [
      "The Chablis — it is French, more prestigious, and more familiar to most guests",
      "The Selbach-Oster Riesling Kabinett — barely 9% alcohol, its natural sweetness is perfectly balanced by slate minerality, and it is one of the most genuinely food-friendly wines in the world",
      "Neither — ask them to choose a Champagne instead, as bubbles work with everything",
      "The Chablis — unoaked Chardonnay is always a safer choice than Riesling for pairing",
    ],
    correctIndex: 1,
    explanation:
      "The Selbach-Oster Riesling Kabinett is the ideal answer. At barely 8–9% ABV with natural sweetness balanced by Mosel slate minerality, it has an almost magical versatility with food. The low alcohol means it doesn't overpower delicate raw fish; the acidity cuts through richness; the touch of sweetness bridges spice and umami. Chablis is excellent, but the Kabinett's range across all food types is exceptional.",
  },
  {
    id: 88,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "Graham Tatomer trained in Austria's Wachau before bringing Grüner Veltliner to California. What does 'Meeresboden' mean in German, and what does it refer to?",
    options: [
      "Sea floor — referencing the ancient marine sediment soils of Santa Barbara",
      "Morning mist — referencing the Pacific fog that rolls into the vineyards",
      "Tidal wave — a reference to the intensity and power of the wine",
      "Sea breeze — referencing the ocean winds that cool the vineyard",
    ],
    correctIndex: 0,
    explanation:
      "'Meeresboden' means sea floor in German. Tatomer uses it to reference the ancient marine soils beneath the Santa Barbara vineyard — the same geological connection that gives Chablis its oyster-shell character. The cool coastal climate of Santa Barbara replicates the Alpine growing conditions of Austria's Wachau, making Grüner Veltliner's signature white pepper and mineral character authentic to the site.",
  },
  {
    id: 89,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "Domaine Leflaive Puligny-Montrachet is the most expensive white wine on the bottle list. What farming philosophy do they follow, and why does it matter?",
    options: [
      "Organic farming — no synthetic pesticides, but conventional cellar practices",
      "Lutte raisonnée — reasoned struggle, the most common approach in Burgundy",
      "Biodynamic farming — a holistic approach treating the estate as a living system, following lunar calendars and using natural preparations",
      "Conventional farming — the estate believes modern winemaking outweighs farming philosophy",
    ],
    correctIndex: 2,
    explanation:
      "Domaine Leflaive practices biodynamic farming — a holistic system that treats the entire estate as a living organism, following lunar calendars for vineyard work and using natural herbal and mineral preparations. This philosophy is believed to deepen the expression of terroir and improve soil health. Leflaive converted to biodynamics under Anne-Claude Leflaive and is considered one of Burgundy's great ambassadors for the method. Even at village level, their wines carry the same care and philosophy as their Grand Cru bottlings.",
  },
  {
    id: 90,
    type: "scenario",
    category: "wine-bottle",
    question:
      "A guest says: 'I love Champagne but I want something really special — not just any bottle.' Which bottle would you present, and what would you say?",
    options: [
      "Billecart-Salmon Brut Rosé — 'This is the benchmark rosé Champagne, they pioneered the style in 1954'",
      "Taittinger La Française — 'This is one of the most reliable and crowd-pleasing Champagnes produced'",
      "Dom Pérignon 2013 — 'Many critics consider this the finest Dom Pérignon of the decade — a long cool growing season and Champagne's last October harvest. Wine Spectator 96. Still developing beautifully.'",
      "Bisol Prosecco — 'From the founding family of Prosecco Superiore, farming since 1542'",
    ],
    correctIndex: 2,
    explanation:
      "For a guest who wants something truly special, the Dom Pérignon 2013 is the standout answer — it carries iconic recognition, exceptional critical scores (WS 96, WA 95), and a compelling vintage story. The 2013 is considered by many critics the finest Dom Pérignon of the decade. Belle Époque Rosé ($670) is equally impressive for guests who want something visually spectacular — the Art Nouveau anemone bottle designed by Émile Gallé is a conversation piece in itself.",
  },
  {
    id: 91,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "The Perrier-Jouët Belle Époque Rosé bottle features a famous Art Nouveau design. Who designed it, and what is depicted?",
    options: [
      "Alphonse Mucha — his signature flowing Art Nouveau figures in pastel tones",
      "Henri de Toulouse-Lautrec — a depiction of Parisian cabaret life",
      "Émile Gallé — an iconic anemone flower design that has become one of Champagne's most recognisable bottles",
      "Gustav Klimt — a gold-leaf pattern inspired by his Vienna Secession paintings",
    ],
    correctIndex: 2,
    explanation:
      "The Belle Époque bottle was designed by Émile Gallé, the renowned French Art Nouveau glassmaker, and features an anemone flower design that has become one of the most iconic in the world of Champagne. The bottle is as much a work of art as the wine inside. Belle Époque Rosé is only produced in exceptional years — and 2013 is considered one of the finest of the decade.",
  },

  // ── RED WINE BOTTLE QUESTIONS ──────────────────────────────────────────────
  {
    id: 92,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "What makes the 2016 Qupé Sawyer Lindquist Syrah particularly special, and where is it from?",
    options: [
      "Napa Valley at 6 years old — a warm-climate Syrah at its peak",
      "Edna Valley, California's original cool-climate Syrah pioneer, at 8 years and absolute peak",
      "Russian River Valley, a bold new-world Syrah with northern Rhône character",
      "Paso Robles, a generous warm-climate Syrah from old vines",
    ],
    correctIndex: 1,
    explanation:
      "California's original cool-climate Syrah pioneer — from Edna Valley, not Napa. Bob Lindquist created the Northern Rhône template for California. At 8 years old it is drinking at absolute peak.",
  },
  {
    id: 93,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "What is a Super Tuscan and which wine on our list invented the category?",
    options: [
      "A Chianti with extra aging — Brunello di Montalcino from Castiglion del Bosco",
      "A Tuscan wine made outside traditional DOC rules using Cabernet or Merlot — Sassicaia from Bolgheri",
      "A premium Sangiovese from outside Chianti — Castiglion del Bosco",
      "A modern Barolo using French oak — Gaja Dagromis",
    ],
    correctIndex: 1,
    explanation:
      "A Tuscan wine made outside traditional DOC rules — typically using Cabernet Sauvignon or Merlot. Sassicaia from Bolgheri created the category and has its own single-estate DOC — the only one in all of Italy.",
  },
  {
    id: 94,
    type: "scenario",
    category: "wine-bottle",
    question:
      "Randy Dunn's Howell Mountain Cabernet is described as old-school and austere. What does that mean for a guest?",
    options: [
      "It is a lighter style, perfect for guests who prefer delicate wines",
      "It is built for 20–30 years of aging — more structured and tannic than modern Napa Cabs, best with food and serious occasions",
      "It is a sweet, approachable style with soft tannins — ideal for all guests",
      "It is a sparkling wine served as a finale",
    ],
    correctIndex: 1,
    explanation:
      "Built for 20 to 30 years of aging — more structured and tannic than modern Napa Cabernets. Best with food and serious occasions. Best enjoyed 2025–2035.",
  },
  {
    id: 95,
    type: "multiple-choice",
    category: "wine-bottle",
    question: "Who created Opus One and when was it established?",
    options: [
      "Robert Parker and Baron Rothschild, 1985",
      "Robert Mondavi and Baron Philippe de Rothschild of Château Mouton — established 1979",
      "Warren Winiarski and Émile Peynaud — established 1976",
      "Jess Jackson and Domaine Leflaive — established 1982",
    ],
    correctIndex: 1,
    explanation:
      "Robert Mondavi and Baron Philippe de Rothschild of Château Mouton — established 1979. One of wine's great historic Franco-American collaborations and now one of the most recognised wine labels in the world.",
  },
  {
    id: 96,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "What is the difference between Vietti Perbacco and Gaja Dagromis, and which grape do they share?",
    options: [
      "Both are Barbera from Piedmont — Perbacco is lighter, Dagromis is fuller",
      "Both are Nebbiolo from Piedmont — Perbacco is accessible Langhe Nebbiolo, Dagromis is full Barolo DOCG from Italy's most celebrated producer",
      "Perbacco is Barbera, Dagromis is Sangiovese — they share no grape",
      "Both are Brunello — Perbacco from Montalcino, Dagromis from Bolgheri",
    ],
    correctIndex: 1,
    explanation:
      "Both are 100% Nebbiolo from Piedmont. Perbacco is an approachable Langhe Nebbiolo — the grape before the full Barolo DOCG structure. Dagromis is a full Barolo DOCG from Italy's most celebrated producer.",
  },
  {
    id: 97,
    type: "scenario",
    category: "wine-bottle",
    question:
      "Braida Montebruna is described as having extraordinary natural acidity. Why does that matter for food pairing?",
    options: [
      "High acidity makes it difficult to pair — it only works with aged cheese",
      "Very high natural acidity acts as a palate cleanser, cutting through rich and fatty dishes — making it one of the most versatile food wines on the list",
      "High acidity means it needs to be served very cold to be enjoyable",
      "It only pairs with raw fish preparations",
    ],
    correctIndex: 1,
    explanation:
      "Very high natural acidity acts as a palate cleanser — it cuts through rich, fatty, or tomato-based dishes. Barbera's extraordinary natural acidity makes Braida Montebruna one of the most versatile food wines on the list.",
  },
  {
    id: 98,
    type: "multiple-choice",
    category: "wine-bottle",
    question: "What makes Sassicaia unique in Italian wine law?",
    options: [
      "It requires 10 years of aging before release — the longest of any Italian wine",
      "It has its own DOC — the Bolgheri Sassicaia DOC — the only single-estate DOC in all of Italy, created specifically for this wine",
      "It is the only Italian wine permitted to use French oak barrels exclusively",
      "It is produced using a secret blend of 12 grape varieties unique to the estate",
    ],
    correctIndex: 1,
    explanation:
      "It has its own DOC — the Bolgheri Sassicaia DOC — the only single-estate DOC in all of Italy, created specifically for this wine. It was so exceptional that Italian wine law had to bend to accommodate it.",
  },
  {
    id: 99,
    type: "scenario",
    category: "wine-bottle",
    question:
      "A guest wants a Pinot Noir that drinks like Burgundy. What do you recommend and why?",
    options: [
      "Austin Hope Cabernet — it has French oak aging similar to Burgundy",
      "Penner-Ash Willamette Valley for cool-climate elegance between California and Burgundy; or DuMol Wester Reach for RRV at its Burgundian best; for the pinnacle, Kistler RRV",
      "Turley Zinfandel — its acidity is similar to Burgundy",
      "Shafer One Point Five — Stags Leap is the closest Napa sub-appellation to Burgundy in style",
    ],
    correctIndex: 1,
    explanation:
      "Penner-Ash Willamette Valley for cool-climate elegance that sits between California and Burgundy. DuMol Wester Reach for Russian River Valley at its most Burgundian. For the pinnacle, Kistler RRV shares the same biodynamic, terroir-driven philosophy as top Burgundy.",
  },
  {
    id: 100,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "What sub-appellation is the Shafer One Point Five from, and what is it famous for?",
    options: [
      "Russian River Valley — famous for Pinot Noir and fog-driven cool climate",
      "Stags Leap District — known for producing Napa's most elegant Cabernets, the 'iron fist in a velvet glove'",
      "Howell Mountain — known for powerful, austere, mountain-grown Cabernets",
      "Oakville — home of Opus One and the most prestigious Cabernet terroir",
    ],
    correctIndex: 1,
    explanation:
      "Stags Leap District — known for producing Napa's most elegant Cabernets, described as an 'iron fist in a velvet glove.' Shafer's Hillside Select and One Point Five are benchmark wines from this distinguished sub-appellation.",
  },
  {
    id: 101,
    type: "multiple-choice",
    category: "wine-bottle",
    question:
      "Brunello di Montalcino has strict aging requirements by law. What are they, and who owns Castiglion del Bosco?",
    options: [
      "Minimum 3 years, 1 year in oak — owned by the Antinori family",
      "Minimum 5 years before release, including at least 2 years in large Slavonian oak — owned by Massimo Ferragamo",
      "Minimum 7 years, no oak requirement — owned by Gaja",
      "Minimum 2 years, 6 months in barrique — owned by the Frescobaldi family",
    ],
    correctIndex: 1,
    explanation:
      "Brunello di Montalcino legally requires a minimum of 5 years before release — including at least 2 years in large Slavonian oak. Castiglion del Bosco is owned by Massimo Ferragamo — one of Montalcino's most prestigious estates.",
  },
];
