export type WineBottleCategory = "sparkling" | "white" | "rosé" | "red";

export type WineBottle = {
  id: string;
  name: string;
  vintage: string;
  category: WineBottleCategory;
  region: string;
  country: string;
  grapes: string;
  price: string;
  profile: string;
  story: string;
  bestWith: string;
  guestOneLiner: string;
  tags?: string[];
};

export const WINE_BOTTLE_CATEGORIES: {
  id: WineBottleCategory;
  label: string;
  color: string;
}[] = [
  { id: "sparkling", label: "Sparkling", color: "amber" },
  { id: "white", label: "White", color: "emerald" },
  { id: "rosé", label: "Rosé", color: "rose" },
  { id: "red", label: "Red", color: "red" },
];

export const WINE_BOTTLES: WineBottle[] = [
  // ── SPARKLING ──────────────────────────────────────────────────────────────
  {
    id: "delamotte-blanc-de-blancs",
    name: "Delamotte Blanc de Blancs",
    vintage: "NV",
    category: "sparkling",
    region: "Le Mesnil-sur-Oger, Côte des Blancs",
    country: "France",
    grapes: "100% Chardonnay",
    price: "$85 (375ml)",
    profile:
      "Pale lemon-gold, fine bead. Charred citrus, gunflint, sourdough, lemon curd, white peach, nougat, and brioche. Dry, high acidity, medium-full body with a creamy pillowy mousse. Lemon pith, pear, toasted brioche, and chalk on a long saline mineral finish.",
    story:
      "Delamotte is the sister house to the legendary Salon — when Salon doesn't declare a vintage, Delamotte has first access to those Grand Cru Côte des Blancs grapes. This is essentially Salon-quality fruit in a more accessible format. A textbook blanc de blancs of finesse and chalkiness. Lees aging: 4 years.",
    bestWith:
      "Oysters, shellfish, lighter sashimi — the definitive aperitif Champagne",
    guestOneLiner:
      "Delamotte is the sister house to Salon — one of Champagne's most legendary names. When Salon doesn't declare a vintage, these grapes go here. It's one of the most pure, chalky blanc de blancs you'll find at this price.",
    tags: ["Blanc de Blancs", "Grand Cru", "Sister to Salon"],
  },
  {
    id: "krug-grand-cuvee",
    name: "Krug 'Grand Cuvée'",
    vintage: "NV",
    category: "sparkling",
    region: "Reims",
    country: "France",
    grapes: "~44% Pinot Noir, ~37% Chardonnay, ~19% Meunier",
    price: "$255 (375ml)",
    profile:
      "Deep golden, fine and persistent bead. Pronounced intensity — ripe citrus, stone fruit, marzipan, gingerbread, dried flowers, hazelnut, and brioche. Full body, exceptional layers — nougat, barley sugar, orange peel, almond, honey, and a long saline chalk-driven finish.",
    story:
      "Krug is one of the world's great prestige cuvées — blended from over 100 individual wines spanning more than a decade, each numbered Edition is a distinct release. Fermented in small oak barrels — a rarity in Champagne that adds texture and complexity. The most complex non-vintage Champagne produced.",
    bestWith:
      "Any occasion, lobster, rich seafood, fine dining throughout a meal",
    guestOneLiner:
      "Krug is one of Champagne's great icons — blended from over a hundred different wines spanning more than a decade. Fermented in small oak barrels, which almost no one does in Champagne. It's endlessly complex.",
    tags: ["Prestige Cuvée", "Oak Fermented", "Multi-Vintage Blend"],
  },
  {
    id: "billecart-salmon-brut-rose",
    name: "Billecart-Salmon Brut Rosé",
    vintage: "NV",
    category: "sparkling",
    region: "Mareuil-sur-Aÿ",
    country: "France",
    grapes: "~45% Chardonnay, ~35% Pinot Noir, ~20% Meunier",
    price: "$115 (375ml) / $195 (750ml)",
    profile:
      "Delicate pale salmon, fine bead. Wild strawberry, raspberry, peach, rose petal, hibiscus, and brioche. Dry, high acidity, light to medium body. Silky and precise — strawberry, cranberry, red currant, mandarin zest, fresh mint, and chalk on a long clean finish.",
    story:
      "Billecart-Salmon pioneered rosé Champagne when they released it in 1954. Year in, year out one of the most consistently excellent rosés in the category — restrained, dry, and refined without any sweetness. Established 1818, dosage: ~5g/L.",
    bestWith: "Salmon, tuna, lighter red meat, versatile throughout a meal",
    guestOneLiner:
      "Billecart-Salmon is the benchmark rosé Champagne — they pioneered the style in 1954. It's restrained, dry, and precise, with beautiful wild strawberry and rose petal character.",
    tags: ["Rosé Champagne", "Pioneer 1954", "Very Dry"],
  },
  {
    id: "bisol-prosecco",
    name: "Bisol Prosecco",
    vintage: "NV",
    category: "sparkling",
    region: "Valdobbiadene",
    country: "Italy",
    grapes: "Glera",
    price: "$70",
    profile:
      "Pale straw, fine lively perlage. Green apple, pear, white peach, wisteria, citrus, and aromatic herb. Off-dry, medium acidity, light to medium body, creamy mousse. Crisp apple, pear, citrus, and thyme with a saline mineral close.",
    story:
      "From the founding family of Prosecco Superiore DOCG — Bisol has farmed the Valdobbiadene hills since 1542. An honest, refreshing aperitif at an approachable price. Charmat (tank) method.",
    bestWith: "Aperitif, lighter starters, casual celebrations",
    guestOneLiner:
      "Bisol is from the founding family of Prosecco Superiore — they've been farming Valdobbiadene since 1542. Fresh, delicate, and perfect as an aperitif.",
    tags: ["Prosecco", "Charmat Method", "Family Estate 1542"],
  },
  {
    id: "schramsberg-blanc-de-blancs-2021",
    name: "Schramsberg Blanc de Blancs",
    vintage: "2021",
    category: "sparkling",
    region: "North Coast",
    country: "USA",
    grapes: "100% Chardonnay",
    price: "$96",
    profile:
      "Pale gold, fine persistent bead. Granny Smith apple, lemon-lime, toasted almond, fresh brioche, pineapple, and orange blossom. Dry, high acidity, medium body — vibrant and focused with Meyer lemon, tart apple, kaffir lime, and a clean mineral finish.",
    story:
      "America's original Chardonnay sparkling wine — made famous when President Nixon served it at the historic 'Toast to Peace' in Beijing in 1972. The 2021 represents the 57th bottling of this cuvée. Consistently one of California's finest sparklings. Méthode Traditionnelle, ~2 years on lees.",
    bestWith: "Oysters, shellfish, lighter starters",
    guestOneLiner:
      "Schramsberg is America's original sparkling wine — Nixon served it at the Toast to Peace with China in 1972. The 57th vintage of this cuvée. A genuine California icon.",
    tags: [
      "Blanc de Blancs",
      "California",
      "Méthode Traditionnelle",
      "57th Vintage",
    ],
  },
  {
    id: "taittinger-la-francaise",
    name: "Taittinger Brut 'La Française'",
    vintage: "NV",
    category: "sparkling",
    region: "Reims",
    country: "France",
    grapes: "~40% Chardonnay, ~35% Pinot Noir, ~25% Meunier",
    price: "$105",
    profile:
      "Pale gold, fine lively bead. Fresh and vibrant — citrus, green apple, white peach, honeysuckle, and subtle brioche. Dry, high acidity, light to medium body. Elegant — apple, pear, citrus pith, and mineral. Medium-long finish.",
    story:
      "La Française has the highest Chardonnay proportion of any major house NV — giving it a characteristic lightness and finesse. A reliable, elegant, crowd-pleasing Champagne. Family-owned. Lees aging: 3 years.",
    bestWith: "Aperitif, oysters, lighter starters",
    guestOneLiner:
      "Taittinger uses more Chardonnay than almost any other major house — which gives La Française this beautiful delicacy and freshness. Elegant, reliable, and universally crowd-pleasing.",
    tags: ["High Chardonnay Proportion", "Family-Owned", "Crowd-Pleasing"],
  },
  {
    id: "delavenne-tradition-grand-cru",
    name: "Delavenne & Fils 'Tradition' Brut Grand Cru",
    vintage: "NV",
    category: "sparkling",
    region: "Bouzy & Ambonnay, Grand Cru",
    country: "France",
    grapes: "60% Pinot Noir, 40% Chardonnay",
    price: "$120",
    profile:
      "Pale gold, fine bead. Apple fritter, green apple, lemon drop, and brioche. No MLF gives a notably taut, apple-fresh character. Medium body — apple, pear, citrus, pie crust, and limestone minerality. Medium-long finish.",
    story:
      "A grower Champagne from one of the region's most authentic producers — 100% Grand Cru Bouzy and Ambonnay, four generations of family ownership, organic farming, no fining, no filtration. The absence of malolactic fermentation gives striking freshness rarely found at this price. Lees aging: 36+ months.",
    bestWith:
      "Oysters, aged cheese, wine enthusiasts who appreciate authenticity",
    guestOneLiner:
      "Delavenne is a grower Champagne — the family owns their Grand Cru vineyards in Bouzy and Ambonnay. No malolactic fermentation, no fining, no filtration. For guests who love wine, this is one of the most authentic and interesting bottles on the list.",
    tags: [
      "Grower Champagne",
      "Grand Cru",
      "No MLF",
      "Organic",
      "No Fining/Filtration",
    ],
  },
  {
    id: "dom-perignon-2013",
    name: "Dom Pérignon Brut",
    vintage: "2013",
    category: "sparkling",
    region: "Épernay",
    country: "France",
    grapes: "51% Chardonnay, 49% Pinot Noir",
    price: "$475",
    profile:
      "Bright silver-straw, fine pinpoint mousse. Powdery white flowers, smoky wet stone, preserved citrus, pastry dough. Opens to stone fruit, tangerine oil, toasted brioche, almond, and clear honey. Dry, high acidity, medium-full body — crystalline, vivid, saline mineral finish. Very long.",
    story:
      "Wine Spectator 96, Wine Advocate 95. The 2013 is considered by many critics the finest Dom Pérignon of the decade — defined by a long cool growing season and Champagne's last October harvest. Vinous called it among Champagne's 'greatest decade.' Still developing and best enjoyed 2025–2040. Source: 17 Grand Crus.",
    bestWith:
      "The most elevated food pairings — lobster, fine seafood, or as the centerpiece of a meal",
    guestOneLiner:
      "The 2013 Dom Pérignon is considered by many critics the finest of the decade — a long cool growing season and late October harvest. Wine Spectator 96. Still developing beautifully and will continue for many years.",
    tags: [
      "Prestige Cuvée",
      "Vintage Only",
      "WS 96",
      "WA 95",
      "Finest of Decade",
    ],
  },
  {
    id: "belle-epoque-rose-2013",
    name: "Perrier-Jouët Brut Rosé 'Belle Époque'",
    vintage: "2013",
    category: "sparkling",
    region: "Épernay",
    country: "France",
    grapes: "50% Chardonnay, 45% Pinot Noir, 5% Meunier",
    price: "$670",
    profile:
      "Shimmering pastel salmon-pink. Candied strawberry, ripe raspberry, rose petal, peony, orange zest, fresh bread, and oyster shell mineral. Dry, high acidity, medium-full body — wild strawberries, white peach, grilled plum, lemon curd, and toasted brioche. Pillowy mousse, saline finish. Very long.",
    story:
      "Belle Époque Rosé is one of Champagne's most iconic prestige cuvées — only produced in exceptional years. The Art Nouveau bottle designed by Émile Gallé is world-famous. A wine as beautiful to look at as to drink. The 2013 is at its peak.",
    bestWith:
      "The most special occasions — lobster, fine sashimi, celebration dinners",
    guestOneLiner:
      "Belle Époque is one of Champagne's most iconic bottles — the Art Nouveau anemone design by Émile Gallé is a work of art in itself. Only produced in exceptional years, and 2013 is considered one of the finest.",
    tags: [
      "Prestige Cuvée",
      "Rosé Champagne",
      "Art Nouveau Bottle",
      "Vintage Only",
    ],
  },
  {
    id: "ruinart-brut-rose",
    name: "Ruinart Brut Rosé",
    vintage: "NV",
    category: "sparkling",
    region: "Reims",
    country: "France",
    grapes: "55% Pinot Noir, 45% Chardonnay",
    price: "$205",
    profile:
      "Deep pomegranate-coral pink. Pomegranate, dark cherry, raspberry, wild strawberry, blood orange, and rooibos. Medium-full body — cranberry, macerated raspberry, poached apricot, tangerine zest, and dried thyme on a long saline finish. Well-structured.",
    story:
      "Ruinart is the world's oldest Champagne house, founded in 1729. A bold, fruit-driven rosé with Pinot Noir dominance — more structured and vinous than Billecart's more delicate style. A versatile food Champagne. Reserve wines: 25–30%.",
    bestWith: "Salmon, duck, red meat — a rosé Champagne built for food",
    guestOneLiner:
      "Ruinart is the world's oldest Champagne house — founded in 1729. Their rosé is bolder and more structured than most, driven by Pinot Noir with real depth and a long saline finish. Exceptional with food.",
    tags: ["Rosé Champagne", "Oldest Champagne House 1729", "Bold Structure"],
  },

  // ── WHITE ──────────────────────────────────────────────────────────────────
  {
    id: "hall-sauvignon-blanc-2020",
    name: "Hall Sauvignon Blanc",
    vintage: "2020",
    category: "white",
    region: "Napa Valley",
    country: "USA",
    grapes: "Sauvignon Blanc",
    price: "$40 (375ml)",
    profile:
      "Grapefruit, melon, quince, white peach, green mango. Dry, high acidity, light to medium body. Lively, focused, clean mineral finish.",
    story:
      "A clean, bright Sauvignon Blanc from Napa Valley in a convenient half-bottle format. Unoaked, stainless steel.",
    bestWith: "Fish, salads, lighter preparations",
    guestOneLiner:
      "Hall's Sauvignon Blanc is clean, bright, and a beautiful by-the-glass alternative in half-bottle format — grapefruit, melon, and a crisp mineral finish.",
    tags: ["Half Bottle", "Unoaked", "Stainless Steel"],
  },
  {
    id: "fevre-chablis-domaine-2021",
    name: "Domaine William Fèvre Chablis 'Domaine'",
    vintage: "2021",
    category: "white",
    region: "Chablis",
    country: "France",
    grapes: "100% Chardonnay",
    price: "$45 (375ml)",
    profile:
      "Pale lemon-green. Flint, green apple, lemon zest, white flowers, and saline iodine. Dry, high acidity, light to medium body. Taut, focused — citrus, pear, green apple, and oyster-shell minerality with a long chalk-driven saline finish.",
    story:
      "2021 was devastated by spring frost — tiny yields but exceptional intensity. Fèvre hand-harvests — rare in Chablis. The 'Domaine' label means estate fruit only. An authentic, food-driven Chablis from Kimmeridgian limestone soils. Owned by Rothschild.",
    bestWith:
      "Oysters, shellfish, raw fish — Chablis and oysters is one of wine's great pairings",
    guestOneLiner:
      "William Fèvre is one of Chablis' most respected estates — hand-harvested, estate fruit, pure Kimmeridgian minerality. There's almost nothing better with our shellfish.",
    tags: [
      "Chablis",
      "Kimmeridgian Limestone",
      "Half Bottle",
      "Hand-Harvested",
    ],
  },
  {
    id: "brander-au-naturel-2021",
    name: "Brander Sauvignon Blanc 'Au Naturel'",
    vintage: "2021",
    category: "white",
    region: "Los Olivos District",
    country: "USA",
    grapes: "100% estate Sauvignon Blanc",
    price: "$74",
    profile:
      "Pale lemon. White peach, chamomile, pear, apricot, mint, and melon. Dry, high acidity, medium body with a creamy sur-lie texture. Cut grass, pear, tangerine, and crushed stone. Racy and mineral, long focused finish.",
    story:
      "Inspired by a close friendship with the late Loire master Didier Dagueneau. Fred Brander spearheaded the creation of the Los Olivos District AVA — this is its benchmark Sauvignon Blanc. 8 months sur lie in stainless steel. 92 Vinous, 91 Jeb Dunnuck.",
    bestWith: "Goat cheese, fish, lighter preparations",
    guestOneLiner:
      "Au Naturel was inspired by Didier Dagueneau — one of the Loire's greatest masters. It has that same mineral, racy precision, but from Santa Barbara. A serious Sauvignon Blanc.",
    tags: ["Sur Lie", "Los Olivos AVA", "Loire-Inspired", "92 Vinous"],
  },
  {
    id: "groth-sauvignon-blanc-2021",
    name: "Groth Sauvignon Blanc",
    vintage: "2021",
    category: "white",
    region: "Napa Valley",
    country: "USA",
    grapes: "Sauvignon Blanc",
    price: "$80",
    profile:
      "Grapefruit, white peach, melon, lemon zest. Clean, crisp, food-friendly.",
    story:
      "Groth produces one of Napa's cleanest, most precise Sauvignon Blancs — food-forward and beautifully made.",
    bestWith: "Light dishes, fish, salads",
    guestOneLiner:
      "Groth makes one of Napa's cleanest, most precise Sauvignon Blancs — bright, food-friendly, and beautiful with our lighter dishes.",
    tags: ["Napa Valley", "Clean & Crisp"],
  },
  {
    id: "shared-notes-les-lecons-2021",
    name: "Shared Notes 'Les Leçons des Maîtres'",
    vintage: "2021",
    category: "white",
    region: "Russian River Valley",
    country: "USA",
    grapes: "Sauvignon Blanc",
    price: "$155",
    profile:
      "Pronounced intensity. Ripe white peach, melon, citrus blossom, lemon curd, and a complex textural richness. Dry, medium-full body — stone fruit, citrus zest, mineral, creamy mid-palate. Long and layered.",
    story:
      "Les Leçons des Maîtres ('The Lessons of the Masters') pushes Sauvignon Blanc into serious fine wine territory from Russian River Valley — textured, complex, and closer to a great white Bordeaux than a typical California Sauvignon.",
    bestWith: "Seafood, cream sauces, richer fish preparations",
    guestOneLiner:
      "Les Leçons des Maîtres pushes Sauvignon Blanc into serious fine wine territory from Russian River Valley — textured, complex, and closer to a great white Bordeaux than a typical California Sauvignon.",
    tags: ["Russian River Valley", "Serious Sauvignon Blanc", "Textured"],
  },
  {
    id: "love-terroir-chenin-blanc-2019",
    name: "Love & Terroir Chenin Blanc 'Jurassic Park Vineyard'",
    vintage: "2019",
    category: "white",
    region: "Santa Ynez Valley",
    country: "USA",
    grapes: "Chenin Blanc",
    price: "$78",
    profile:
      "Pale gold. Quince, white peach, beeswax, dried apricot, and chamomile. Off-dry to dry, medium acidity, medium-full body. Waxy texture — stone fruit, apple skin, honey, savoury mineral. Medium-long finish.",
    story:
      "Chenin Blanc is extremely rare in California. The Jurassic Park Vineyard's ancient fossiliferous soils give it unusual depth — a textural, contemplative white for adventurous guests.",
    bestWith: "Pork, aged cheeses, adventurous guests",
    guestOneLiner:
      "Chenin Blanc is one of California's rarest varieties, and the Jurassic Park Vineyard produces something genuinely extraordinary — waxy, honeyed, with ancient fossil soils giving it a unique depth. For guests who want something they've never tried.",
    tags: [
      "Chenin Blanc",
      "Rare Variety",
      "Jurassic Park Vineyard",
      "Ancient Soils",
    ],
  },
  {
    id: "tatomer-gruner-veltliner-2020",
    name: "Tatomer Grüner Veltliner 'Meeresboden'",
    vintage: "2020",
    category: "white",
    region: "Santa Barbara",
    country: "USA",
    grapes: "Grüner Veltliner",
    price: "$72",
    profile:
      "Pale lemon. White pepper, citrus, grapefruit, green herbs, and mineral backbone. Dry, high acidity, light to medium body. Lime zest, green herbs, white pepper, mineral grip.",
    story:
      "Graham Tatomer trained in Austria's Wachau and brought Grüner Veltliner to Santa Barbara — where the cool coastal climate replicates Alpine growing conditions. 'Meeresboden' means sea floor — referencing ancient marine soils.",
    bestWith:
      "Sushi, vegetable dishes, asparagus — white pepper and Grüner is a classic pairing",
    guestOneLiner:
      "Graham Tatomer trained in Austria's Wachau and brought Grüner Veltliner back to California. The sea floor soils and cool Santa Barbara climate make it taste startlingly authentic — that signature white pepper character is unmistakable.",
    tags: [
      "Grüner Veltliner",
      "Austrian-Trained",
      "Sea Floor Soils",
      "White Pepper",
    ],
  },
  {
    id: "selbach-oster-riesling-kabinett-2021",
    name: "Selbach-Oster Riesling Kabinett 'Zeltinger Sonnenuhr'",
    vintage: "2021",
    category: "white",
    region: "Mosel",
    country: "Germany",
    grapes: "Riesling",
    price: "$80",
    profile:
      "Pale lemon, green tinge. Green apple, lime, peach, white flowers, and slate minerality. Pure and ethereal. Off-dry, high acidity, light body. Delicate, racy, and precise — citrus, stone fruit, mineral tension. Low alcohol (~8–9%) and natural sweetness in perfect equilibrium. Long, clean finish.",
    story:
      "One of the Mosel's most respected producers on one of its finest premier cru-equivalent vineyards. Kabinett is the lightest German Prädikat — barely alcoholic, endlessly refreshing, and one of the most food-friendly whites in the world. Cellars for 10+ years.",
    bestWith:
      "Any food, aperitif — one of the world's great food wines regardless of cuisine",
    guestOneLiner:
      "Selbach-Oster's Kabinett is barely 9% alcohol with this beautiful natural sweetness perfectly balanced by slate minerality. It's one of the most food-friendly wines in the world — works with almost anything on the menu.",
    tags: [
      "Riesling",
      "Kabinett",
      "Mosel",
      "Low Alcohol",
      "Food-Friendly",
      "Slate Terroir",
    ],
  },
  {
    id: "alzipratu-vermentino-2021",
    name: "Domaine Alzipratu Vermentino 'Corse Calvi'",
    vintage: "2021",
    category: "white",
    region: "Calvi, Corsica",
    country: "France",
    grapes: "Vermentino",
    price: "$76",
    profile:
      "Pale straw-gold. White flowers, citrus blossom, lemon, grapefruit, almond, and herbal notes. Dry, medium acidity, medium body with a slight bitter almond finish. Citrus, stone fruit, gentle saline close.",
    story:
      "A distinctive, terroir-driven choice from one of Corsica's most respected estates. Granite soils, Mediterranean sunshine, and sea winds give Corsican Vermentino an aromatic intensity rarely found elsewhere. A great conversation piece.",
    bestWith: "Seafood, charcuterie, adventurous guests",
    guestOneLiner:
      "Corsican Vermentino is something very few guests have encountered — granite soils, sea winds, and intense Mediterranean sunshine give it this unique aromatic character with a beautiful bitter almond finish.",
    tags: ["Vermentino", "Corsica", "Granite Soils", "Rare Find"],
  },
  {
    id: "regis-jouan-sancerre-2021",
    name: "Domaine Régis Jouan Sancerre",
    vintage: "2021",
    category: "white",
    region: "Sancerre, Loire Valley",
    country: "France",
    grapes: "100% Sauvignon Blanc",
    price: "$85",
    profile:
      "Pale lemon. Gooseberry, white currant, citrus, fresh herbs, and classic flinty struck-match minerality. Dry, high acidity, light to medium body. Focused and vibrant — grapefruit, lime, green herb, and a long minerally saline finish.",
    story:
      "Classic Sancerre from flint (silex) and limestone soils — the benchmark against which all Sauvignon Blanc is judged. Gooseberry, struck flint, and beautiful Loire mineral clarity.",
    bestWith: "Goat cheese, shellfish, lighter fish",
    guestOneLiner:
      "Classic Sancerre — this is the benchmark against which all Sauvignon Blanc is judged. Gooseberry, struck flint, and that beautiful Loire mineral clarity.",
    tags: ["Sancerre", "Sauvignon Blanc", "Flint Soils", "Loire Valley"],
  },
  {
    id: "le-roi-des-pierres-silex-2021",
    name: "Le Roi des Pierres 'Silex' Sancerre",
    vintage: "2021",
    category: "white",
    region: "Sancerre, Loire Valley",
    country: "France",
    grapes: "100% Sauvignon Blanc",
    price: "$90",
    profile:
      "Pale lemon. Struck flint, gun smoke, white currant, lime zest, crystalline mineral purity. More textured and complex than a standard Sancerre. Dry, high acidity, medium body. Flinty, taut and linear — very persistent.",
    story:
      "Silex soils are the most coveted in Sancerre, producing wines of exceptional mineral depth. Le Roi des Pierres — 'King of Stones' — offers more structure and aging potential than standard Sancerre.",
    bestWith: "Oysters, fish, aged goat cheese",
    guestOneLiner:
      "Le Roi des Pierres translates to King of Stones — it's grown on Sancerre's rarest flint soils, giving it this extraordinary smoky, gunpowder minerality. One of the most compelling Sancerres you'll find.",
    tags: [
      "Sancerre",
      "Silex Soils",
      "King of Stones",
      "Exceptional Minerality",
    ],
  },
  {
    id: "rocca-del-principe-fiano-2019",
    name: "Rocca del Principe Fiano di Avellino",
    vintage: "2019",
    category: "white",
    region: "Avellino DOCG, Campania",
    country: "Italy",
    grapes: "100% Fiano",
    price: "$85",
    profile:
      "Golden lemon. Hazelnut, toasted almond, white peach, apricot, honey, and smoky earthy depth. Developing beautifully. Dry, medium-high acidity, medium-full body. Rich and textured — stone fruit, roasted nuts, yellow flowers, long mineral and slightly smoky finish.",
    story:
      "Fiano di Avellino is one of Italy's greatest white wines — often compared to White Burgundy in complexity and aging capacity. Rocca del Principe is among the variety's top producers. The 2019 is at its peak.",
    bestWith: "Pork, aged cheese, guests who want an alternative to Chardonnay",
    guestOneLiner:
      "Fiano di Avellino is southern Italy's greatest white wine — often compared to White Burgundy. This is at its peak at 5 years, with this beautiful hazelnut and smoked almond character. For guests who've never experienced it, it's a revelation.",
    tags: ["Fiano", "Campania", "White Burgundy Alternative", "At Peak"],
  },
  {
    id: "monteleone-etna-bianco-2022",
    name: "Monteleone Carricante 'Etna Bianco'",
    vintage: "2022",
    category: "white",
    region: "Mount Etna (East Slope)",
    country: "Italy",
    grapes: "100% Carricante",
    price: "$82",
    profile:
      "Pale gold. Citrus blossom, lemon pith, white peach, fennel, and volcanic mineral — saline and stony. Dry, high acidity, medium body. Taut and mineral — lemon zest, stone fruit, sea spray, and a long volcanic mineral finish.",
    story:
      "Etna Bianco is one of Italy's most exciting wine regions — ancient Carricante vines on 1,000-year-old volcanic soils at altitude. The 2022 vintage was superb on Etna. Exceptional aging potential.",
    bestWith:
      "Crudo, seafood, fish — the salinity and minerality are extraordinary with raw preparations",
    guestOneLiner:
      "Mount Etna is one of Italy's most exciting wine regions right now — ancient vines on thousand-year-old volcanic soils. The Carricante has this extraordinary volcanic mineral character unlike anything else on the list.",
    tags: ["Etna Bianco", "Volcanic Soils", "Carricante", "Ancient Vines"],
  },
  {
    id: "capensis-silene-2019",
    name: "Capensis Chardonnay 'Silene'",
    vintage: "2019",
    category: "white",
    region: "Stellenbosch",
    country: "South Africa",
    grapes: "Chardonnay",
    price: "$98",
    profile:
      "Pale to medium gold. White peach, lemon curd, toasted hazelnut, crème fraîche, subtle floral lift. Dry, medium-high acidity, medium-full body. Creamy yet fresh — stone fruit, citrus, toasted oak, clean mineral finish.",
    story:
      "Capensis is a prestige South African Chardonnay project designed to compete with White Burgundy. A joint venture between Jackson Family Wines and Graham Beck. A great conversation piece as a Côte de Beaune alternative.",
    bestWith: "Fish, chicken, guests interested in South African wine",
    guestOneLiner:
      "Capensis was created specifically to compete with White Burgundy — from Stellenbosch, a collaboration between Jackson Family Wines and Graham Beck. It's Burgundian in spirit and remarkably successful.",
    tags: [
      "South Africa",
      "Burgundian Style",
      "White Burgundy Alternative",
      "Prestige Project",
    ],
  },
  {
    id: "laroche-saint-martin-2022",
    name: "Domaine Laroche Chablis 'Saint Martin'",
    vintage: "2022",
    category: "white",
    region: "Chablis",
    country: "France",
    grapes: "100% Chardonnay",
    price: "$102",
    profile:
      "Pale lemon-green. Green apple, lemon, chalk-flint mineral. Dry, high acidity, light to medium body. Crisp, pure, saline — classic unoaked Chablis. Medium-long finish.",
    story:
      "Named for the patron saint of Chablis, whose cloak is said to be buried beneath the town's church. Laroche is one of Chablis' largest estate owners — reliable and authentic. Unoaked stainless steel.",
    bestWith: "Oysters, white fish, shellfish",
    guestOneLiner:
      "Saint Martin is named for the patron saint of Chablis — pure, mineral, and unoaked. The definitive style of the appellation.",
    tags: ["Chablis", "Unoaked", "Patron Saint"],
  },
  {
    id: "au-bon-climat-sanford-benedict-2018",
    name: "Au Bon Climat Chardonnay 'Sanford & Benedict'",
    vintage: "2018",
    category: "white",
    region: "Sta. Rita Hills",
    country: "USA",
    grapes: "Chardonnay",
    price: "$90",
    profile:
      "Medium gold. White peach, nectarine, hazelnut, crème brûlée, toasted oak, and honeyed complexity. Dry, medium-high acidity, medium-full body. Rich and textured — stone fruit, lemon curd, toasted nut, butter, long minerally finish.",
    story:
      "Sanford & Benedict is one of California's most historically important vineyards — planted in 1971, it helped establish Sta. Rita Hills. Jim Clendenen was one of California's great winemakers. At 6 years this is at peak drinking.",
    bestWith: "Salmon, lobster, scallops",
    guestOneLiner:
      "Sanford & Benedict is one of California's most historic vineyards — planted in 1971 by the founders of Sta. Rita Hills. Jim Clendenen's final vintages from this site are something very special.",
    tags: ["Sta. Rita Hills", "Historic Vineyard", "Jim Clendenen", "At Peak"],
  },
  {
    id: "brewer-clifton-3d-2018",
    name: "Brewer-Clifton Chardonnay '3-D Vineyard'",
    vintage: "2018",
    category: "white",
    region: "Sta. Rita Hills",
    country: "USA",
    grapes: "Chardonnay",
    price: "$130",
    profile:
      "Medium gold. Ripe yellow peach, toasted hazelnut, lemon curd, crème brûlée, white flowers, smoky mineral. Rich and evolved. Dry, medium-high acidity, full body. Generous and creamy — stone fruit, toasted oak, vanilla, lemon meringue, long mineral finish.",
    story:
      "Greg Brewer is Sta. Rita Hills royalty — his single-vineyard Chardonnays are among California's finest. At 6 years in a beautiful drinking window.",
    bestWith: "Lobster, scallops, rich fish preparations",
    guestOneLiner:
      "Greg Brewer makes the definitive Sta. Rita Hills Chardonnay — this is his single-block 3-D site at 6 years old, rich and complex, drinking at its absolute peak.",
    tags: ["Sta. Rita Hills", "Single Vineyard", "Greg Brewer", "At Peak"],
  },
  {
    id: "liquid-farm-white-hill-2019",
    name: "Liquid Farm 'White Hill'",
    vintage: "2019",
    category: "white",
    region: "Sta. Rita Hills",
    country: "USA",
    grapes: "Chardonnay",
    price: "$110",
    profile:
      "Medium gold. White peach, Meyer lemon, nectarine, toasted almond, crème fraîche, and chalky mineral. Dry, high acidity, medium-full body. Focused and linear — stone fruit, citrus, toasted hazelnut, long mineral finish.",
    story:
      "Liquid Farm's White Hill is consistently one of Sta. Rita Hills' best expressions — pure, mineral, and focused. Built around the vineyard rather than the winemaker.",
    bestWith: "Halibut, scallops, fine seafood",
    guestOneLiner:
      "Liquid Farm's White Hill is consistently one of Sta. Rita Hills' best expressions — pure, mineral, and focused. Built around the vineyard rather than the winemaker.",
    tags: ["Sta. Rita Hills", "Vineyard-Driven", "Pure & Mineral"],
  },
  {
    id: "racines-chardonnay-2018",
    name: "Racines Chardonnay",
    vintage: "2018",
    category: "white",
    region: "Sta. Rita Hills",
    country: "USA",
    grapes: "Chardonnay",
    price: "$158",
    profile:
      "Medium gold. Yellow peach, Granny Smith apple, hazelnut, beeswax, lemon curd, stony reductive mineral note. Dry, high acidity, medium-full body. Taut and precise with a creamy texture — stone fruit, citrus zest, toasted nut, very long saline mineral finish. Burgundian in structure.",
    story:
      "From Sashi Moorman and former sommelier Rajat Parr — one of California's most serious Chardonnay projects, inspired directly by White Burgundy. The 2018 Sta. Rita Hills vintage was exceptional. At peak.",
    bestWith: "Abalone, white fish, the finest seafood preparations",
    guestOneLiner:
      "Racines was created by Rajat Parr — one of America's most celebrated sommeliers — specifically to make California Chardonnay that competes with White Burgundy. The 2018 is at its absolute peak.",
    tags: ["Sta. Rita Hills", "Rajat Parr", "White Burgundy Rival", "At Peak"],
  },
  {
    id: "flowers-chardonnay-2021",
    name: "Flowers Chardonnay",
    vintage: "2021",
    category: "white",
    region: "Sonoma Coast",
    country: "USA",
    grapes: "Chardonnay",
    price: "$110",
    profile:
      "Pale to medium gold. White peach, lemon curd, fresh brioche, saline and mineral-driven. Dry, high acidity, medium body. Elegant and focused — stone fruit, citrus, toasted nut, long coastal mineral finish.",
    story:
      "Flowers' vineyards sit just miles from the Pacific Ocean — one of California's most extreme growing environments — producing a Chardonnay of great freshness and saline minerality.",
    bestWith: "Light seafood, halibut, crab",
    guestOneLiner:
      "Flowers' vineyards sit just miles from the Pacific Ocean — one of California's most extreme growing environments. The resulting Chardonnay has a freshness and saline minerality that's unlike anything from further inland.",
    tags: ["Sonoma Coast", "Extreme Coastal", "Saline & Mineral"],
  },
  {
    id: "far-niente-chardonnay-2021",
    name: "Far Niente Chardonnay",
    vintage: "2021",
    category: "white",
    region: "Napa Valley",
    country: "USA",
    grapes: "Chardonnay",
    price: "$150",
    profile:
      "Pale to medium gold. Ripe pear, white peach, vanilla, toasted oak, crème brûlée, hint of tropical fruit. Dry, medium acidity, full body. Opulent and creamy — stone fruit, vanilla, toasted nut, lemon curd, long buttery finish.",
    story:
      "Far Niente makes one of Napa's most iconic and consistently beloved Chardonnays — rich, generous, and beautifully made. The winery dates to 1885 and the quality has never wavered.",
    bestWith: "Lobster, crab, richly prepared seafood",
    guestOneLiner:
      "Far Niente makes one of Napa's most iconic and consistently beloved Chardonnays — rich, generous, and beautifully made. The winery dates to 1885 and the quality has never wavered.",
    tags: ["Napa Valley", "Icon", "Opulent", "Est. 1885"],
  },
  {
    id: "kistler-les-noisetiers-2021",
    name: "Kistler Vineyards Chardonnay 'Les Noisetiers'",
    vintage: "2021",
    category: "white",
    region: "Sonoma Coast",
    country: "USA",
    grapes: "Chardonnay",
    price: "$185",
    profile:
      "Pale to medium gold. White peach, hazelnut, lemon cream, toasted oak, cooling coastal minerality. Dry, high acidity, medium-full body. Silky and focused — stone fruit, citrus, roasted nut, very long mineral-driven finish.",
    story:
      "Kistler is the gold standard for California Chardonnay. The name Les Noisetiers means hazelnut trees — which perfectly describes the wine.",
    bestWith: "Scallops, halibut, fine seafood",
    guestOneLiner:
      "Kistler is the gold standard for California Chardonnay — the name they gave this cuvée, Les Noisetiers, means hazelnut trees, which perfectly describes the wine. Among California's finest.",
    tags: ["Sonoma Coast", "Gold Standard", "Les Noisetiers = Hazelnut Trees"],
  },
  {
    id: "peter-michael-belle-cote-2019",
    name: "Peter Michael Chardonnay 'Belle Côte'",
    vintage: "2019",
    category: "white",
    region: "Knights Valley",
    country: "USA",
    grapes: "Chardonnay",
    price: "$285",
    profile:
      "Medium gold. White peach, Meyer lemon, hazelnut, crème fraîche, toasted brioche, beeswax, and smoky mineral complexity. Grand cru-level aromatics. Dry, high acidity, full body. Rich yet precise — stone fruit, lemon curd, toasted oak, nougat, very long mineral saline finish.",
    story:
      "Peter Michael is one of the handful of California producers who consistently produces Chardonnay at Grand Cru White Burgundy quality. Belle Côte grows on volcanic Knights Valley soils at 1,200–1,500 feet elevation — elevation, cool nights, and volcanic minerals produce extraordinary complexity. Holds for another 5+ years.",
    bestWith:
      "The finest seafood preparations, omakase — a special occasion wine",
    guestOneLiner:
      "Peter Michael Belle Côte is California's answer to Grand Cru White Burgundy — volcanic soils at 1,500 feet elevation, extraordinary complexity and aging potential. One of the finest Chardonnays produced anywhere in the world.",
    tags: [
      "Knights Valley",
      "Grand Cru Quality",
      "Volcanic Soils",
      "Altitude",
      "Aging Potential",
    ],
  },
  {
    id: "maltroye-chassagne-montrachet-2020",
    name: "Château de la Maltroye Chassagne-Montrachet 1er Cru",
    vintage: "2020",
    category: "white",
    region: "Chassagne-Montrachet, Côte de Beaune",
    country: "France",
    grapes: "Chardonnay",
    price: "$198",
    profile:
      "Medium gold. White peach, toasted hazelnut, lemon curd, brioche, and limestone mineral depth. Elegant and composed. Dry, high acidity, medium-full body. Rich yet precise — stone fruit, toasted oak, citrus, very long mineral finish.",
    story:
      "Chassagne-Montrachet Premier Cru is some of White Burgundy's most reliable and complex territory. De la Maltroye is a respected estate — generous and structured at the same time.",
    bestWith: "Lobster, white fish, fine seafood",
    guestOneLiner:
      "Chassagne-Montrachet Premier Cru is some of White Burgundy's most reliable and complex territory. De la Maltroye is a respected estate — generous and structured at the same time.",
    tags: [
      "White Burgundy",
      "Premier Cru",
      "Chassagne-Montrachet",
      "Côte de Beaune",
    ],
  },
  {
    id: "leflaive-puligny-montrachet-2019",
    name: "Domaine Leflaive Puligny-Montrachet",
    vintage: "2019",
    category: "white",
    region: "Puligny-Montrachet, Côte de Beaune",
    country: "France",
    grapes: "Chardonnay",
    price: "$496",
    profile:
      "Medium gold, luminous. White flowers, lemon verbena, white peach, toasted hazelnut, crushed limestone, and haunting ethereal mineral purity. Pronounced intensity, evolving. Dry, high acidity, full body. Silky yet taut — stone fruit, lemon cream, toasted nut, honey, very long electric saline mineral finish. Extraordinary length and precision.",
    story:
      "Domaine Leflaive is the greatest name in White Burgundy. Even at village level, their Puligny-Montrachet is produced with the same care and biodynamic philosophy as their Bâtard-Montrachet Grand Cru. The 2019 vintage in Burgundy was exceptional. A genuinely rare and important wine.",
    bestWith:
      "The most refined dishes, or savoured alone — this is a wine that deserves attention",
    guestOneLiner:
      "Domaine Leflaive is the greatest name in White Burgundy — their village Puligny-Montrachet is made with the same biodynamic care as their Grand Cru. The 2019 is exceptional. This is one of the world's truly great white wines.",
    tags: [
      "White Burgundy",
      "Puligny-Montrachet",
      "Domaine Leflaive",
      "Biodynamic",
      "Greatest Estate",
    ],
  },

  // ── ROSÉ ───────────────────────────────────────────────────────────────────
  {
    id: "berne-inspiration-2021",
    name: "Château de Berne 'Inspiration'",
    vintage: "2021",
    category: "rosé",
    region: "Côtes de Provence",
    country: "France",
    grapes: "Classic Provence blend",
    price: "$84",
    profile:
      "Very pale salmon-pink. Strawberry, peach, citrus blossom, herbs. Dry, light body, clean mineral finish. Classic Provence pale rosé.",
    story:
      "A classic Provence rosé in the signature pale style — delicate, dry, and refreshing. Perfect as an aperitif or alongside lighter dishes.",
    bestWith: "Aperitif, lighter starters, a warm California evening",
    guestOneLiner:
      "A classic Provence rosé in the signature pale style — delicate, dry, and refreshing. Perfect as an aperitif or alongside our lighter dishes.",
    tags: ["Provence Rosé", "Pale Style", "Classic Aperitif"],
  },
  {
    id: "spinetta-rosato-casanova-2021",
    name: "La Spinetta 'Il Rosé di Casanova'",
    vintage: "2021",
    category: "rosé",
    region: "Tuscany",
    country: "Italy",
    grapes: "Sangiovese",
    price: "$75",
    profile:
      "Pale salmon with copper tints. Wild strawberry, rose petal, orange zest, and savoury Sangiovese mineral note. Dry, high acidity, light to medium body. More savoury and structured than Provence rosé — red berry, citrus, dry Sangiovese finish.",
    story:
      "La Spinetta makes wine in both Piedmont and Tuscany. Their Sangiovese rosé has real structure and savouriness that Provence rosé cannot match — beautiful with heavier fish and lighter meat dishes.",
    bestWith: "Salmon, pork, dishes that need a rosé with backbone",
    guestOneLiner:
      "La Spinetta makes wine in both Piedmont and Tuscany — their Sangiovese rosé has real structure and savouriness that Provence rosé can't match. Beautiful with our heavier fish and lighter meat dishes.",
    tags: ["Tuscany", "Sangiovese Rosé", "Structured", "La Spinetta"],
  },
  {
    id: "liquid-farm-vogelzang-2021",
    name: "Liquid Farm 'Vogelzang Vineyard'",
    vintage: "2021",
    category: "rosé",
    region: "Happy Canyon",
    country: "USA",
    grapes: "Rosé blend",
    price: "$80",
    profile:
      "Pale to medium salmon. Red cherry, peach, citrus, floral character. Dry, high acidity, light to medium body. Crisp, vibrant, clean mineral finish.",
    story:
      "Liquid Farm brings their Sta. Rita Hills precision to rosé — the Vogelzang Vineyard in Happy Canyon gives it a riper, more generous character. A beautiful California expression.",
    bestWith: "Wide range — a versatile California rosé",
    guestOneLiner:
      "Liquid Farm brings their Sta. Rita Hills precision to rosé — the Vogelzang Vineyard in Happy Canyon gives it a riper, more generous character. A beautiful California expression.",
    tags: ["California Rosé", "Happy Canyon", "Liquid Farm", "Versatile"],
  },

  // ── RED ────────────────────────────────────────────────────────────────────
  {
    id: "abc-knox-alexander-pn",
    name: "Au Bon Climat Pinot Noir 'Knox Alexander'",
    vintage: "2019",
    category: "red",
    region: "Santa Maria Valley",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$125",
    profile:
      "Medium ruby, developing garnet. Black cherry, blackberry, dried flowers, earth, forest floor, cinnamon, and smoky oak. Dry, high acidity, medium body. Fine-grained tannins. Black cherry, plum, dried herbs, earth, and a long elegant spiced finish.",
    story:
      "Jim Clendenen's Knox Alexander is one of California's great single-vineyard Pinots — a tribute to the style's spiritual home in Santa Maria. Knox Alexander Vineyard is ABC's flagship single-vineyard Pinot. At 5 years this is at peak drinking.",
    bestWith: "Duck, salmon, mushroom preparations",
    guestOneLiner:
      "Knox Alexander is Jim Clendenen's tribute to the greatest Pinot Noir in Santa Maria Valley — earthy, complex, and unmistakably Burgundian in spirit. One of California's truly great Pinots.",
    tags: ["At Peak", "Burgundian", "Single Vineyard"],
  },
  {
    id: "brewer-clifton-pn",
    name: "Brewer-Clifton Pinot Noir",
    vintage: "2021",
    category: "red",
    region: "Sta. Rita Hills",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$95",
    profile:
      "Medium ruby-garnet. Raspberry, wild strawberry, red cherry, violet, dried rose, cooling mineral. Dry, high acidity, medium body. Silky tannins. Vibrant red fruit, dried herbs, earthy notes, long mineral finish.",
    story:
      "Greg Brewer makes arguably the most consistently exciting Sta. Rita Hills Pinots — a region defined by its east-west transverse mountain gap that allows direct Pacific influence, creating intense, mineral, Burgundian-spirit wines. The 2021 was a superb vintage in this region.",
    bestWith: "Tuna, duck, richer fish preparations",
    guestOneLiner:
      "Greg Brewer makes arguably the most consistently exciting Sta. Rita Hills Pinots — bright, precise, and beautifully mineral. The 2021 was a superb vintage in this region.",
    tags: ["Bright", "Mineral", "Sta. Rita Hills"],
  },
  {
    id: "donnachadh-pn",
    name: "Donnachadh Pinot Noir, Estate",
    vintage: "2021",
    category: "red",
    region: "Sta. Rita Hills",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$90",
    profile:
      "Medium ruby. Red cherry, raspberry, dried rose, earth, and mineral saline note. Dry, high acidity, light to medium body. Pure red fruit with an elegant mineral-driven finish.",
    story:
      "Donnachadh is a small estate producer in Sta. Rita Hills — a focused, honest expression of the appellation without the premium pricing of larger names. Beautifully food-friendly and approachable.",
    bestWith: "Salmon, mushroom, lighter preparations",
    guestOneLiner:
      "Donnachadh is a small estate Sta. Rita Hills Pinot — honest, focused, and beautifully food-friendly at an exceptional price for the appellation.",
    tags: ["Estate", "Pure", "Food-Friendly"],
  },
  {
    id: "seasmoke-southing-pn",
    name: "Seasmoke Pinot Noir 'Southing'",
    vintage: "2020",
    category: "red",
    region: "Sta. Rita Hills",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$200",
    profile:
      "Medium ruby-garnet. Black cherry, blackberry, espresso, dark chocolate, dried flowers, and mineral-coastal note. Rich and complex. Dry, high acidity, medium-full body. Silky tannins. Dark fruit, earth, spice, and a long complex mineral finish. Serious and age-worthy.",
    story:
      "Seasmoke is one of Sta. Rita Hills' top estates — their Southing bottling (from the southern portion of the vineyard) consistently earns serious critical acclaim. A benchmark California Pinot of structure, depth, and elegance.",
    bestWith: "Duck, lamb, game preparations",
    guestOneLiner:
      "Seasmoke Southing is one of California's benchmark Pinot Noirs — a prized Sta. Rita Hills estate with the depth and structure to age. Dark cherry, espresso, and extraordinary mineral complexity.",
    tags: ["Special Occasion", "Age-Worthy", "Critical Acclaim"],
  },
  {
    id: "failla-pn",
    name: "Failla Pinot Noir",
    vintage: "2021",
    category: "red",
    region: "Sonoma Coast",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$90",
    profile:
      "Medium ruby. Red cherry, raspberry, dried herbs, earthy forest floor, cool coastal minerality. Dry, high acidity, light to medium body. Elegant and precise — red berry, earth, long saline mineral finish.",
    story:
      "Failla is Ehren Jordan's Sonoma Coast project — wines of remarkable purity and cool-climate precision. Jordan makes wines that speak of their site rather than the winemaker.",
    bestWith: "Salmon, halibut, mushroom",
    guestOneLiner:
      "Failla is among Sonoma Coast's most trusted producers — Ehren Jordan makes wines of remarkable purity and cool-climate precision. Clean, food-friendly, and elegant.",
    tags: ["Elegant", "Cool-Climate", "Food-Friendly"],
  },
  {
    id: "crossbarn-pn",
    name: "Crossbarn by Paul Hobbs Pinot Noir",
    vintage: "2020",
    category: "red",
    region: "Sonoma Coast",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$85",
    profile:
      "Medium ruby. Red cherry, strawberry, vanilla, gentle oak spice. Dry, medium-high acidity, medium body. Soft tannins. Red fruit, vanilla, smooth clean finish.",
    story:
      "Crossbarn is Paul Hobbs' approachable second label — consistently clean and reliable Sonoma Coast Pinot. Paul Hobbs is one of California's most celebrated winemakers, and Crossbarn captures his precision at a more accessible price point.",
    bestWith: "Wide range — an approachable, crowd-pleasing Pinot",
    guestOneLiner:
      "Crossbarn is Paul Hobbs' approachable tier — consistently clean and reliable Sonoma Coast Pinot. A great choice for guests who enjoy Pinot without needing maximum complexity.",
    tags: ["Approachable", "Crowd-Pleaser"],
  },
  {
    id: "dumol-wester-reach-pn",
    name: "DuMol Pinot Noir 'Wester Reach'",
    vintage: "2018",
    category: "red",
    region: "Russian River Valley",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$110",
    profile:
      "Medium ruby-garnet. Dark cherry, wild strawberry, dried rose, earth, coffee, and subtle spice. Complex and evolving. Dry, high acidity, medium body. Silky tannins. Dark cherry, plum, earth, and a long elegant finish.",
    story:
      "DuMol is Russian River Valley at its best — small-production, vineyard-driven, Burgundian in philosophy. The Wester Reach is their flagship RRV Pinot. The 2018 is hitting its stride at 6 years — complex, evolving, and drinking at its absolute peak.",
    bestWith: "Duck, mushroom, richer fish",
    guestOneLiner:
      "DuMol is Russian River Valley at its finest — small-production, Burgundian, and deeply terroir-driven. The Wester Reach at 6 years old is at its absolute peak.",
    tags: ["At Peak", "Burgundian", "Small Production"],
  },
  {
    id: "kistler-rrv-pn",
    name: "Kistler Vineyards Pinot Noir",
    vintage: "2019",
    category: "red",
    region: "Russian River Valley",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$185",
    profile:
      "Medium ruby-garnet. Wild cherry, raspberry, dried violet, forest floor, smoky mineral complexity. Dry, high acidity, medium body. Fine silky tannins. Red and dark fruit, earth, long mineral finish. Exceptional balance and length.",
    story:
      "Kistler is the gold standard for California Burgundian wines — their Pinots share the same precision as their legendary Chardonnays. Small production, vineyard-driven, and among the finest California Pinot Noirs produced.",
    bestWith: "Duck, salmon, mushroom truffle preparations",
    guestOneLiner:
      "Kistler's Pinots share the same Burgundian precision as their legendary Chardonnays — among the finest California Pinot Noirs produced. Wild cherry, forest floor, and extraordinary elegance.",
    tags: ["Pinnacle", "Burgundian", "Collector"],
  },
  {
    id: "penner-ash-pn",
    name: "Penner-Ash Estate Pinot Noir",
    vintage: "2019",
    category: "red",
    region: "Willamette Valley",
    country: "USA",
    grapes: "100% Pinot Noir",
    price: "$120",
    profile:
      "Medium ruby. Red cherry, raspberry, violet, dried herbs, cool earthy note. Dry, high acidity, medium body. Silky tannins. Red fruit, earth, mushroom, long clean mineral finish.",
    story:
      "Lynn Penner-Ash is one of Oregon's most respected winemakers. The Willamette Valley's cool climate produces Pinot Noir of finesse that sits beautifully between California's ripeness and Burgundy's restraint. A great alternative to Burgundy for discerning guests.",
    bestWith: "Salmon, mushroom, lighter red meat",
    guestOneLiner:
      "Penner-Ash is one of Oregon's most respected Pinot Noir producers — the Willamette Valley gives it a cool-climate elegance that sits between California and Burgundy. Beautiful with our salmon.",
    tags: ["Oregon", "Cool-Climate", "Burgundian Elegance"],
  },
  {
    id: "duseigneur-cndp",
    name: "Domaine Duseigneur 'Matteo' Châteauneuf-du-Pape",
    vintage: "2019",
    category: "red",
    region: "Châteauneuf-du-Pape",
    country: "France",
    grapes: "Grenache-dominant blend",
    price: "$110",
    profile:
      "Deep ruby-garnet. Black cherry, garrigue (lavender, thyme, rosemary), leather, licorice, and warm spice. Dry, medium acidity, full body. Soft ripe tannins. Dark fruit, dried herbs, black pepper, long warm earthy finish.",
    story:
      "Châteauneuf-du-Pape is one of the Rhône's most celebrated appellations — Grenache-dominant, warm, herbal, and deeply Provençal. The 2019 Southern Rhône vintage was exceptional — generous fruit balanced with the classic garrigue character.",
    bestWith: "Lamb, game, hearty preparations",
    guestOneLiner:
      "Châteauneuf-du-Pape is one of France's great Southern Rhône appellations — garrigue herbs, dark cherry, black pepper, and that warm Provençal earthiness. The 2019 was an exceptional vintage.",
    tags: ["Southern Rhône", "Full-Bodied", "Exceptional Vintage"],
  },
  {
    id: "vietti-perbacco-nebbiolo",
    name: "Vietti Nebbiolo 'Perbacco'",
    vintage: "2020",
    category: "red",
    region: "Langhe, Piedmont",
    country: "Italy",
    grapes: "100% Nebbiolo",
    price: "$85",
    profile:
      "Pale ruby with orange-garnet rim. Red cherry, raspberry, rose petal, dried violet, tar, and earthy truffle-like depth. Dry, high acidity, medium body. Fine but firm tannins. Red fruit, earth, dried flowers, long mineral finish.",
    story:
      "Vietti is one of Barolo's most prestigious estates. Perbacco is their entry-level Nebbiolo — the grape at its most accessible, before the full Barolo DOCG structure. The rose petal and tar signature is unmistakably Piedmontese.",
    bestWith: "Truffle, mushroom, fine pasta preparations",
    guestOneLiner:
      "Perbacco is Nebbiolo from one of Barolo's greatest estates — Vietti — at its most accessible. Rose petal, tar, and that unmistakable Piedmontese earthiness. A beautiful introduction to the greatest grape of northern Italy.",
    tags: ["Italian", "Nebbiolo", "Food-Friendly"],
  },
  {
    id: "braida-montebruna-barbera",
    name: "Braida Barbera d'Asti 'Montebruna'",
    vintage: "2019",
    category: "red",
    region: "Piedmont",
    country: "Italy",
    grapes: "100% Barbera",
    price: "$98",
    profile:
      "Deep ruby-purple. Black cherry, blueberry, violet, mocha, and freshness from naturally high acidity. Dry, very high acidity, medium-full body. Grippy but fine tannins. Black cherry, plum, chocolate, long vivid energetic finish.",
    story:
      "Braida transformed Barbera d'Asti from a rustic everyday wine into serious fine wine. The estate's founder elevated the grape's profile in the 1980s, demonstrating that Barbera's extraordinary natural acidity — among the highest of any red variety — made it one of the world's great food wines.",
    bestWith:
      "Beef, pasta, pizza — its high acidity cuts through almost anything",
    guestOneLiner:
      "Braida transformed Barbera from a rustic everyday wine into something serious and celebrated. Montebruna has extraordinary natural acidity — more than almost any red wine in the world — which makes it one of the most versatile food wines on our list.",
    tags: ["Italian", "High Acidity", "Food Wine"],
  },
  {
    id: "gaja-dagromis-barolo",
    name: "Gaja Barolo 'Dagromis'",
    vintage: "2018",
    category: "red",
    region: "Barolo DOCG, Piedmont",
    country: "Italy",
    grapes: "100% Nebbiolo",
    price: "$270",
    profile:
      "Medium garnet-ruby with developing orange-brick rim. Black cherry, dried rose, tar, licorice, earth, truffle, and complex secondary spice. Dry, high acidity, full body. Fine grippy tannins, integrating beautifully. Dark cherry, earth, tobacco, dried herbs, very long complex finish.",
    story:
      "Gaja is Italy's most internationally celebrated wine producer. Dagromis is their entry-level Barolo — but from the world's most celebrated Italian producer, that means something extraordinary. 2018 was a benchmark Barolo vintage. At 6 years this wine is drinking beautifully.",
    bestWith: "Truffles, aged cheese, braised beef — Barolo's classic pairings",
    guestOneLiner:
      "Gaja is Italy's most celebrated wine producer, and Dagromis is their Barolo — 2018 was one of the great Barolo vintages, and at 6 years old this is drinking beautifully. Tar, rose, truffle, and extraordinary complexity.",
    tags: ["Barolo", "Italian Icon", "At Peak", "Benchmark Vintage"],
  },
  {
    id: "turley-ueberroth-zin",
    name: "Turley Zinfandel 'Ueberroth Vineyard'",
    vintage: "2020",
    category: "red",
    region: "Paso Robles",
    country: "USA",
    grapes: "100% Zinfandel (old-vine)",
    price: "$140",
    profile:
      "Deep ruby-purple. Blackberry jam, ripe plum, dried fig, chocolate, cinnamon, and white pepper. Dry, medium acidity, full body. Ripe soft tannins. Black fruit, dried fig, mocha, long warming finish.",
    story:
      "Turley is California's foremost Zinfandel specialist — their Ueberroth old-vine Paso Robles bottling is one of the richest, most generous expressions of the variety. Old vines produce concentrated, complex fruit that new vines cannot match.",
    bestWith: "BBQ, game, guests who love bold, generous reds",
    guestOneLiner:
      "Turley is California's foremost Zinfandel specialist — their Ueberroth old-vine Paso Robles bottling is rich, generous, and deeply satisfying. If you want the most hedonistic red on the list, this is it.",
    tags: ["Old Vine", "Bold", "Hedonistic"],
  },
  {
    id: "qupe-sawyer-lindquist-syrah",
    name: "Qupé Syrah 'Sawyer Lindquist Vineyard'",
    vintage: "2016",
    category: "red",
    region: "Edna Valley",
    country: "USA",
    grapes: "100% Syrah",
    price: "$120",
    profile:
      "Medium-deep ruby, developing garnet. Black pepper, olive, smoked meat, blackberry, dried herbs, and Northern Rhône-like garrigue. Complex and developing beautifully. Dry, medium-high acidity, medium-full body. Fine mature tannins. Dark fruit, black olive, smoked meat, pepper, very long earthy finish.",
    story:
      "Qupé is California's original cool-climate Syrah pioneer — Bob Lindquist created the template for California Northern Rhône-style Syrah. The Sawyer Lindquist Vineyard in Edna Valley is his definitive site. The 2016 is at its absolute peak at 8 years old.",
    bestWith: "Lamb, game, smoked preparations",
    guestOneLiner:
      "Bob Lindquist pioneered cool-climate California Syrah — this is the Sawyer Lindquist Vineyard at 8 years old, drinking at its absolute peak. Black pepper, olive, smoked meat — it's Northern Rhône in California.",
    tags: ["At Peak", "Northern Rhône Style", "Pioneer"],
  },
  {
    id: "frogs-leap-merlot",
    name: "Frog's Leap Merlot",
    vintage: "2019",
    category: "red",
    region: "Napa Valley",
    country: "USA",
    grapes: "100% Merlot",
    price: "$98",
    profile:
      "Medium-deep ruby. Black cherry, plum, mocha, dried herbs, restrained earthy note. Dry, medium acidity, medium-full body. Soft tannins. Dark cherry, plum, vanilla, clean food-friendly finish.",
    story:
      "Frog's Leap is one of Napa's most respected certified organic producers. Their Merlot is deliberately restrained and food-oriented — without the over-ripe jamminess of many Napa reds. Elegant, honest, and beautifully crafted.",
    bestWith: "Wide range — a restrained, food-oriented Merlot",
    guestOneLiner:
      "Frog's Leap is one of Napa's most respected certified organic producers — their Merlot is restrained and food-oriented, without the over-ripe jamminess of many Napa reds. Elegant and honest.",
    tags: ["Certified Organic", "Restrained", "Food-Friendly"],
  },
  {
    id: "shafer-td9-merlot",
    name: "Shafer Merlot 'TD-9'",
    vintage: "2018",
    category: "red",
    region: "Napa Valley",
    country: "USA",
    grapes: "Merlot-dominant Bordeaux blend",
    price: "$140",
    profile:
      "Deep ruby. Black cherry, plum, mocha, dark chocolate, vanilla, cedar. Dry, medium acidity, full body. Plush ripe tannins. Dark fruit, chocolate, spice, long silky finish.",
    story:
      "Shafer is one of Napa's most consistent and celebrated producers — their TD-9 is a generous, polished Merlot-dominant Bordeaux blend. Shafer's reputation for quality across their range is unmatched.",
    bestWith: "Steak, duck, hearty preparations",
    guestOneLiner:
      "Shafer is one of Napa's most consistent producers, and TD-9 is their generous, polished Merlot-led blend — rich, smooth, and beautifully made.",
    tags: ["Napa", "Rich", "Polished"],
  },
  {
    id: "austin-hope-cab",
    name: "Austin Hope Cabernet Sauvignon",
    vintage: "2021",
    category: "red",
    region: "Paso Robles",
    country: "USA",
    grapes: "100% Cabernet Sauvignon",
    price: "$114",
    profile:
      "Deep ruby-purple. Black currant, dark cherry, chocolate, vanilla, cedar. Dry, medium acidity, full body. Ripe plush tannins. Dark fruit, mocha, vanilla, long smooth finish.",
    story:
      "Austin Hope is one of Paso Robles' most consistently enjoyable and widely embraced Cabernets — bold, approachable, and generously made. An excellent entry point for guests who love Cabernet Sauvignon.",
    bestWith: "Steak, charcuterie — the accessible Paso Cabernet option",
    guestOneLiner:
      "Austin Hope is one of Paso Robles' most consistent and widely enjoyed Cabernets — bold, approachable, and generous. A crowd-pleaser at a very fair price.",
    tags: ["Accessible", "Bold", "Value"],
  },
  {
    id: "justin-isosceles",
    name: "Justin Cabernet Sauvignon 'Isosceles'",
    vintage: "2019",
    category: "red",
    region: "Paso Robles",
    country: "USA",
    grapes: "Cabernet Sauvignon-dominant Bordeaux blend",
    price: "$190",
    profile:
      "Deep ruby. Black currant, dark cherry, cassis, cedar, tobacco, complex earthy note. More structured than entry-level Justin. Dry, medium-high acidity, full body. Firm fine tannins. Dark fruit, graphite, cedar, very long complex finish.",
    story:
      "Justin is Paso Robles' most internationally recognised estate. Isosceles is their flagship Bordeaux blend — Cabernet Sauvignon dominant with Merlot and Cabernet Franc for added complexity. Consistently one of Paso's most acclaimed wines.",
    bestWith: "Steak, lamb, special occasions",
    guestOneLiner:
      "Isosceles is Justin's flagship — consistently one of Paso Robles' most acclaimed wines. The Bordeaux blend adds Merlot and Cab Franc for complexity, and the 2019 is a serious, structured wine.",
    tags: ["Flagship", "Structured", "Paso Icons"],
  },
  {
    id: "aperture-cab",
    name: "Aperture Cabernet Sauvignon",
    vintage: "2019",
    category: "red",
    region: "Alexander Valley",
    country: "USA",
    grapes: "100% Cabernet Sauvignon",
    price: "$144",
    profile:
      "Deep ruby. Black currant, plum, dark chocolate, cassis, distinctive graphite mineral. Dry, medium-high acidity, full body. Fine structured tannins. Dark fruit, cedar, tobacco, long complex finish.",
    story:
      "Jesse Katz trained as assistant winemaker at Screaming Eagle — one of California's most iconic estates. Aperture is his own Alexander Valley project, bringing Bordeaux-like structure and precision to exceptional fruit. Among California's most talented young winemakers.",
    bestWith: "Prime beef — a serious Cabernet for serious occasions",
    guestOneLiner:
      "Jesse Katz trained at Screaming Eagle and brings that precision to his own Alexander Valley Cabernet. Aperture is polished, structured, and genuinely impressive — graphite, cassis, and beautiful Bordeaux-like elegance.",
    tags: ["Elegant", "Bordeaux-Style", "Young Winemaker"],
  },
  {
    id: "dunn-howell-mountain-cab",
    name: "Dunn Vineyards Cabernet Sauvignon",
    vintage: "2017",
    category: "red",
    region: "Howell Mountain, Napa Valley",
    country: "USA",
    grapes: "100% Cabernet Sauvignon",
    price: "$348",
    profile:
      "Deep ruby-garnet. Cassis, dark cherry, graphite, earth, cedar, dried herbs, and iron. Austere and classic. Dry, high acidity, full body. Firm structured tannins still holding power at 7 years. Dark fruit, graphite, earth, tobacco, very long complex mineral finish. Serious and age-worthy.",
    story:
      "Randy Dunn is one of Napa's most celebrated and legendary winemakers — his Howell Mountain Cabernets are built the old-school way, for decades of cellaring. The 2017 is still improving and is best enjoyed 2025–2035. A serious wine for serious occasions.",
    bestWith:
      "Aged cheese, game, the most serious food preparations — or cellared further",
    guestOneLiner:
      "Randy Dunn is one of Napa's legends — he makes Cabernet the old-school way, built for 20 to 30 years of aging. The 2017 Howell Mountain is powerful, structured, and austere. It will outlast almost anything else on this list.",
    tags: ["Age-Worthy", "Old-School", "Napa Legend", "Best 2025-2035"],
  },
  {
    id: "joseph-phelps-cab",
    name: "Joseph Phelps Cabernet Sauvignon",
    vintage: "2019",
    category: "red",
    region: "Napa Valley",
    country: "USA",
    grapes: "100% Cabernet Sauvignon",
    price: "$185",
    profile:
      "Deep ruby. Cassis, black cherry, vanilla, cedar, tobacco, polished oak. Dry, medium-high acidity, full body. Fine well-integrated tannins. Dark fruit, graphite, cedar, long elegant finish.",
    story:
      "Joseph Phelps created Insignia — California's first Meritage and one of its most iconic wines. Their estate Cabernet reflects the same precision and balance that defines the Insignia program, at a more accessible price. Now owned by Freemark Abbey.",
    bestWith: "Prime cuts, lamb, serious red meat",
    guestOneLiner:
      "Joseph Phelps created Insignia — California's first Meritage. This is their estate Cabernet, made with the same precision and balance at a more accessible price. A classic Napa expression.",
    tags: ["Classic Napa", "Balanced", "Prestigious"],
  },
  {
    id: "opus-one",
    name: "Opus One",
    vintage: "2019",
    category: "red",
    region: "Oakville, Napa Valley",
    country: "USA",
    grapes: "Cabernet Sauvignon-dominant Bordeaux blend",
    price: "$698",
    profile:
      "Deep ruby, almost opaque. Cassis, black cherry, dark chocolate, cedar, graphite, and tobacco leaf. Extraordinarily complex — combining Napa ripeness with Bordeaux precision. Dry, high acidity, full body. Fine perfectly integrated tannins. Dark fruit, graphite, mocha, cedar, very long complex seamless finish. Extraordinary length.",
    story:
      "Opus One is one of the most celebrated wines in the world — the historic 1979 Franco-American collaboration between Robert Mondavi and Baron Philippe de Rothschild of Château Mouton Rothschild. The benchmark for Napa Valley's finest. The 2019 is considered exceptional.",
    bestWith:
      "The most elevated food pairings, prime beef, or as a centrepiece occasion wine",
    guestOneLiner:
      "Opus One is one of the most famous wines in the world — the 1979 collaboration between Robert Mondavi and Baron Philippe de Rothschild of Château Mouton. Napa ripeness meets Bordeaux precision. The 2019 is extraordinary.",
    tags: ["World-Class", "Icon", "Celebration", "Franco-American"],
  },
  {
    id: "robert-craig-affinity",
    name: "Robert Craig Cabernet Sauvignon 'Affinity'",
    vintage: "2018",
    category: "red",
    region: "Napa Valley",
    country: "USA",
    grapes: "Cabernet Sauvignon-dominant",
    price: "$125",
    profile:
      "Deep ruby. Black currant, plum, cedar, dried herbs, and mineral note. Clean and focused. Dry, medium-high acidity, full body. Structured tannins. Dark fruit, graphite, tobacco, long clean finish.",
    story:
      "Robert Craig is a mountain vineyard specialist — their Affinity blends fruit from multiple Napa mountain sources for consistent complexity and structure. Consistently over-delivers on quality for the price.",
    bestWith:
      "Steak, lamb — a structured, food-driven Napa Cabernet at an excellent price",
    guestOneLiner:
      "Robert Craig consistently over-delivers on quality for the price — mountain-sourced Napa Cabernet with real structure and elegance. One of the best value Napa Cabernets on the list.",
    tags: ["Value", "Mountain-Sourced", "Food-Driven"],
  },
  {
    id: "shafer-one-point-five",
    name: "Shafer Cabernet Sauvignon 'One Point Five'",
    vintage: "2019",
    category: "red",
    region: "Stags Leap District, Napa Valley",
    country: "USA",
    grapes: "100% Cabernet Sauvignon",
    price: "$210",
    profile:
      "Deep ruby. Black currant, dark cherry, cedar, graphite, tobacco, polished oak. Quintessential Stags Leap elegance. Dry, medium-high acidity, full body. Fine silky tannins — Stags Leap's signature. Dark fruit, graphite, cedar, very long elegant complex finish.",
    story:
      "Stags Leap District is famous for producing Napa's most elegant, structured Cabernets — described as the 'iron fist in a velvet glove.' One Point Five is Shafer's second wine to their iconic Hillside Select but remains one of the district's finest expressions.",
    bestWith: "Prime beef, lamb — the definitive Stags Leap experience",
    guestOneLiner:
      "One Point Five is Shafer's Stags Leap Cabernet — Stags Leap is famous for the most elegant Cabernet in Napa Valley, described as an 'iron fist in a velvet glove.' This is quintessential Napa elegance.",
    tags: ["Stags Leap", "Iron Fist Velvet Glove", "Elegant"],
  },
  {
    id: "castiglion-del-bosco-brunello",
    name: "Castiglion del Bosco Brunello di Montalcino",
    vintage: "2017",
    category: "red",
    region: "Montalcino, Tuscany",
    country: "Italy",
    grapes: "100% Sangiovese Grosso (Brunello)",
    price: "$170",
    profile:
      "Medium garnet with developing brick-orange rim. Dried cherry, rose petal, leather, tobacco, iron, earth, and classic Brunello herbal complexity. Dry, high acidity, full body. Firm fine-grained tannins, now integrating at 7 years. Dark cherry, dried herbs, tobacco, very long earthy complex finish.",
    story:
      "Brunello di Montalcino legally requires 5 years of aging before release — among the strictest requirements of any Italian appellation. Castiglion del Bosco is a prestige Montalcino estate owned by Massimo Ferragamo. The 2017 vintage was excellent and generous — now drinking beautifully at 7 years.",
    bestWith: "Game, aged cheese, truffle, braised preparations",
    guestOneLiner:
      "Brunello di Montalcino legally can't be released for five years — by law it must be aged for two years in large oak. This one from Castiglion del Bosco, owned by Massimo Ferragamo, is extraordinary — dried cherry, leather, iron, and that haunting Brunello complexity.",
    tags: ["Brunello", "Italian Classic", "Ferragamo", "Age-Worthy"],
  },
  {
    id: "sassicaia-2019",
    name: "Tenuta San Guido 'Sassicaia'",
    vintage: "2019",
    category: "red",
    region: "Bolgheri, Tuscany",
    country: "Italy",
    grapes: "85% Cabernet Sauvignon, 15% Cabernet Franc",
    price: "$650",
    profile:
      "Deep ruby-garnet, still vibrant. Cassis, black cherry, cedar, graphite, tobacco, dried herbs, and warm Mediterranean earthiness. Bordeaux-like precision with Italian soul. Dry, high acidity, full body. Fine structured tannins, integrating. Dark fruit, graphite, cedar, herbs, very long complex mineral finish. Extraordinary length.",
    story:
      "Sassicaia is the wine that created the Super Tuscan category — and remains its undisputed king. The estate has its own DOC — the Bolgheri Sassicaia DOC — the only single-estate DOC in all of Italy, created specifically for this wine. 2019 is considered one of Bolgheri's finest recent vintages.",
    bestWith: "Prime beef, truffle, the most elevated preparations",
    guestOneLiner:
      "Sassicaia invented the Super Tuscan category — it's so exceptional that Italy created a special DOC for this single estate, the only one of its kind in the country. Cassis, graphite, cedar, and Mediterranean herbs. The 2019 is one of the great recent vintages.",
    tags: ["Super Tuscan", "Italian Icon", "Single-Estate DOC", "World-Class"],
  },
];

export const WINE_BOTTLE_QUICK_REF: {
  name: string;
  vintage: string;
  category: string;
  price: string;
  keyCharacter: string;
  bestWith: string;
}[] = WINE_BOTTLES.map((w) => ({
  name: w.name,
  vintage: w.vintage,
  category: w.category.charAt(0).toUpperCase() + w.category.slice(1),
  price: w.price,
  keyCharacter: w.tags?.[0] ?? "",
  bestWith: w.bestWith.split(" — ")[0],
}));

export const WINE_BOTTLE_GUEST_GUIDANCE: {
  scenario: string;
  recommendation: string;
  rationale: string;
}[] = [
  {
    scenario: "Guest wants an aperitif Champagne",
    recommendation: "Delamotte Blanc de Blancs or Taittinger La Française",
    rationale:
      "Both are elegant, precise, and perfectly balanced to open a meal — chalky and light without weight.",
  },
  {
    scenario: "Guest is celebrating something special",
    recommendation: "Dom Pérignon 2013 or Belle Époque Rosé",
    rationale:
      "Dom Pérignon for the most iconic; Belle Époque for something visually spectacular — the Art Nouveau bottle alone is an occasion.",
  },
  {
    scenario: "Guest loves White Burgundy",
    recommendation:
      "Domaine Leflaive Puligny-Montrachet or Chassagne-Montrachet 1er Cru",
    rationale:
      "The real thing from the source — Leflaive is the greatest name in White Burgundy, and Chassagne 1er Cru is reliable and complex.",
  },
  {
    scenario: "Guest wants the finest California Chardonnay",
    recommendation: "Peter Michael Belle Côte or Racines by Rajat Parr",
    rationale:
      "Peter Michael for the most complex and Grand Cru-quality; Racines for the most Burgundian structure and precision.",
  },
  {
    scenario: "Guest is a Sauvignon Blanc drinker wanting something serious",
    recommendation: "Brander Au Naturel or Les Leçons des Maîtres",
    rationale:
      "Au Naturel is Loire-inspired with Loire master Dagueneau as its guiding spirit; Les Leçons is textured and closer to a white Bordeaux.",
  },
  {
    scenario: "Guest wants something unusual and adventurous",
    recommendation:
      "Tatomer Grüner Veltliner, Alzipratu Vermentino, or Love & Terroir Chenin Blanc",
    rationale:
      "Austrian grape in California, Corsican granite-driven whites, and the extraordinary Jurassic Park Vineyard — all defy expectations.",
  },
  {
    scenario: "Guest loves minerality and wants the best food wine",
    recommendation: "Selbach-Oster Riesling Kabinett",
    rationale:
      "Barely 9% alcohol with natural sweetness balanced by slate minerality. Works with virtually every dish on the menu.",
  },
  {
    scenario: "Guest wants a grower Champagne for wine enthusiasts",
    recommendation: "Delavenne & Fils Tradition Brut Grand Cru",
    rationale:
      "Grand Cru Bouzy and Ambonnay, no MLF, no fining, no filtration — four generations of family ownership. Authenticity at every level.",
  },
  {
    scenario: "Guest wants a Pinot Noir",
    recommendation:
      "Crossbarn ($85) for accessibility, Brewer-Clifton ($95) or Failla ($90) for quality and precision, Seasmoke Southing ($200) for a special occasion, Kistler ($185) for the pinnacle",
    rationale:
      "Crossbarn is the approachable entry point; Brewer-Clifton and Failla offer precision and terroir clarity; Seasmoke Southing has the depth and structure for special occasions; Kistler is the Burgundian pinnacle.",
  },
  {
    scenario: "Guest wants a Cabernet Sauvignon",
    recommendation:
      "Austin Hope ($114) for approachability, Robert Craig ($125) for value, Aperture ($144) for elegance, Shafer One Point Five ($210) for the definitive Stags Leap experience, Opus One ($698) for the most celebrated",
    rationale:
      "Escalate along the spectrum of complexity and occasion — from generous Paso Robles to the world-class elegance of Opus One.",
  },
  {
    scenario: "Guest wants the most extraordinary red on the list",
    recommendation:
      "Opus One ($698) for accessible greatness, Sassicaia ($650) for Italian grandeur, Dunn Howell Mountain ($348) for age-worthy old-school power",
    rationale:
      "Opus One is world-famous and combines Napa ripeness with Bordeaux precision. Sassicaia invented the Super Tuscan category and has its own DOC. Dunn is built for 20–30 years of cellaring.",
  },
  {
    scenario: "Guest wants an Italian red",
    recommendation:
      "Vietti Perbacco ($85) for approachable Nebbiolo, Braida Montebruna ($98) for the greatest food Barbera, Gaja Dagromis ($270) for serious Barolo, Castiglion del Bosco Brunello ($170) for the classic, Sassicaia ($650) for the icon",
    rationale:
      "Move from accessible northern Italian varieties to the great regional appellations — Barolo, Brunello, and the Super Tuscan king.",
  },
  {
    scenario: "Guest wants a bold, generous red",
    recommendation:
      "Turley Ueberroth Zinfandel ($140) is the most hedonistic on the list, Shafer TD-9 ($140) for polished Napa Merlot, Seasmoke Southing ($200) for a Pinot with surprising depth",
    rationale:
      "Turley old-vine Zinfandel delivers maximum generosity and fruit concentration. Shafer TD-9 is smooth and polished. Seasmoke Southing proves Pinot can be rich and complex.",
  },
  {
    scenario: "Guest wants a red that works with fish",
    recommendation:
      "Failla Pinot Noir ($90) or Donnachadh ($90) — both pair beautifully with salmon and halibut; Penner-Ash Oregon Pinot ($120) is also excellent with salmon",
    rationale:
      "Light-bodied, high-acid Pinot Noirs with delicate tannins are the rare reds that complement fish without overwhelming them — especially salmon.",
  },
];

export function findWineBottle(query: string): WineBottle | undefined {
  const q = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
  return WINE_BOTTLES.find((w) => {
    const name = w.name.toLowerCase().replace(/[^a-z0-9\s]/g, "");
    const id = w.id.replace(/-/g, " ");
    return (
      q.includes(name) ||
      name
        .split(" ")
        .filter((p) => p.length > 4)
        .some((p) => q.includes(p)) ||
      q.includes(id)
    );
  });
}
