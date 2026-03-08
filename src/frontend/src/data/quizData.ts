export type QuizQuestion = {
  id: number;
  type: "multiple-choice" | "true-false" | "scenario";
  category: "menu" | "forbes" | "wine" | "sake" | "white-burgundy";
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
];
