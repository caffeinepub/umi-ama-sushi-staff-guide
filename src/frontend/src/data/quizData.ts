export type QuizQuestion = {
  id: number;
  type: "multiple-choice" | "true-false" | "scenario";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: "multiple-choice",
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
    question: "The Kanpachi Usuzukuri features which type of fish?",
    options: ["Bluefin Tuna", "King Salmon", "Sakura Amberjack", "Black Cod"],
    correctIndex: 2,
    explanation:
      "The Kanpachi Usuzukuri features cold-smoked Sakura amberjack, sliced paper-thin in the usuzukuri style. 'Kanpachi' is the Japanese word for amberjack. It is served with shredded daikon, shiso, myoga, and tamari yuzu ponzu.",
  },
  {
    id: 3,
    type: "multiple-choice",
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
    question: "Which roll is fully vegetarian with no animal products?",
    options: ["Seaside", "Kappa", "Beneath the Waves", "At Shore"],
    correctIndex: 3,
    explanation:
      "At Shore is our vegetable roll — avocado, carrots, cucumber, shiso, and radish sprouts — with no listed allergens or animal products. The Kappa roll is cucumber only and also suitable, but At Shore is the more complete vegetable offering. Note: always confirm with the kitchen regarding shared preparation surfaces.",
  },
  {
    id: 12,
    type: "scenario",
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
];
