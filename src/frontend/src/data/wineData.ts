export type WineCategory = "champagne" | "white" | "rose" | "red";

export type Wine = {
  id: string;
  name: string;
  category: WineCategory;
  pronunciation?: string;
  region: string;
  grapes: string;
  glassware: "Champagne flute" | "Burgundy" | "Bordeaux" | "All-Purpose (AP)";
  glassPrice: number;
  bottlePrice: number;
  tastingNotes: string;
  winemaking: string;
  keyFacts: string;
  foodPairing?: string;
  guestOneLiner: string;
};

export const WINE_CATEGORIES: { id: WineCategory; label: string }[] = [
  { id: "champagne", label: "Champagne & Sparkling" },
  { id: "white", label: "White Wines" },
  { id: "rose", label: "Rosé" },
  { id: "red", label: "Red Wines" },
];

export const WINES: Wine[] = [
  {
    id: "fourny",
    name: "Vueve Fourny & Fils 'Grands Terroirs' Brut 1er Cru Champagne NV",
    category: "champagne",
    pronunciation: "Voove Fourknee",
    region: "Vertus, Champagne, France",
    grapes: "80% Chardonnay, 20% Pinot Noir",
    glassware: "Champagne flute",
    glassPrice: 30,
    bottlePrice: 120,
    tastingNotes:
      "Sleek and elegant with roundness, astonishing freshness and finesse. Fresh and fruity with perfect balance of liveliness.",
    winemaking:
      "7 months on lees without sulfite addition. Aged in bottle 2½ years before release. 40% reserve wines kept in oak casks. Non-vintage — blend of 3 consecutive vintages.",
    keyFacts:
      "Vertus Premier Cru. 30-year-old vines. Brown topsoil over chalk. Aged in 19th century cellars at constant low temperature. Guarantees no cork taste.",
    foodPairing: "Masunozuke Usuzukuri (King Salmon sashimi)",
    guestOneLiner:
      "A sleek, elegant Premier Cru Champagne — beautifully fresh with wonderful finesse. It's a perfect start to the evening.",
  },
  {
    id: "billecart",
    name: "Billecart-Salmon Extra Brut Le Rosé",
    category: "champagne",
    pronunciation: "bee-luh-kar sal-mohn",
    region: "Champagne, France",
    grapes: "45% Chardonnay, 35% Pinot Noir, 20% Meunier",
    glassware: "Champagne flute",
    glassPrice: 42,
    bottlePrice: 210,
    tastingNotes:
      "Precise and elegant. Fresh wild strawberries and raspberries with a refreshing, persistent finish. Creamy smoothness. Refreshing and floral aromas.",
    winemaking:
      "36 months lees aging. Malolactic fermentation in vats. 40% reserve wines. Extra-Brut dosage (very dry).",
    keyFacts:
      "Family-owned house since 1818 — founded by Elisabeth Salmon and Nicolas-François Billecart. Seven generations of family management. One of Champagne's most respected rosé producers.",
    guestOneLiner:
      "One of Champagne's most celebrated rosés — seven generations of family craftsmanship, with beautiful strawberry and raspberry notes and a creamy, elegant finish.",
  },
  {
    id: "krug",
    name: "MV Krug 'Grande Cuvée' Champagne, Reims, 171ème Édition",
    category: "champagne",
    pronunciation: "Krug Grand-cuvee",
    region: "Champagne, France",
    grapes: "45% Pinot Noir, 37% Chardonnay, 18% Meunier",
    glassware: "Champagne flute",
    glassPrice: 95,
    bottlePrice: 625,
    tastingNotes:
      "Pale gold with fine, lively bubbles. Aromas of flowers, ripe and candied citrus, almond paste and gingerbread. Flavors of almond paste, quince, lemon, limoncello, and dried fruits.",
    winemaking:
      "Blend of 131 wines from 12 different years (youngest 2015, oldest 2000). Seven years aging in Krug's cellars. Over 20 years of craftsmanship per edition.",
    keyFacts:
      "Founded 1843 by Joseph Krug. Considered the most prestigious winery in AOC Champagne. 171st re-creation of Grande Cuvée. Non-vintage.",
    guestOneLiner:
      "Krug Grande Cuvée is considered the pinnacle of Champagne — a blend of over 130 wines across 12 vintages, aged seven years in their historic cellars. It is truly incomparable.",
  },
  {
    id: "punta-crena",
    name: "Punta Crena Riviera Ligure di Ponente Vigneto Isasco, Liguria 2024",
    category: "white",
    region: "Liguria, Italy",
    grapes: "100% Vermentino",
    glassware: "All-Purpose (AP)",
    glassPrice: 25,
    bottlePrice: 100,
    tastingNotes:
      "Bright and expressive — crisp pear, white peach, citrus zest, fresh basil, almond, and a distinct sea-spray salinity. Medium-bodied, beautifully textured, vibrant acidity. Long, clean, intensely mineral finish.",
    winemaking:
      "4 months on lees. Traditional farming. Generally no malolactic fermentation. Red clay and gravel soils.",
    keyFacts:
      "Vineyards within 1,200 meters of the sea — ocean breezes keep grapes healthy. Ruffino family works exclusively with rare local varietals. Light, fun wines with no pretension. Serve with a slight chill.",
    guestOneLiner:
      "A beautiful Italian coastal white — Vermentino from Liguria with a wonderful sea-spray salinity and bright citrus freshness. Perfect with our lighter dishes.",
  },
  {
    id: "laporte",
    name: "Domaine Laporte Sancerre 'La Comtesse' Loire Valley 2023",
    category: "white",
    region: "Sancerre, Loire Valley, France",
    grapes: "100% Sauvignon Blanc",
    glassware: "All-Purpose (AP)",
    glassPrice: 30,
    bottlePrice: 120,
    tastingNotes:
      "Mineral and juicy, refreshing and crisp with a focused finish.",
    winemaking:
      "Low-pressure pneumatic pressing. Fermented with estate-specific yeast selections. Aged on lees in stainless steel tanks. Certified organic.",
    keyFacts:
      "South-facing hillside overlooking the village of Chavignol. Altitude 170–200m. Founded 1850 in Saint-Satur. The result of two renowned Sancerre families blending their heritage.",
    foodPairing: "Spinach Gomae",
    guestOneLiner:
      "A certified organic Sancerre from one of the Loire Valley's most storied estates — pure, mineral, and beautifully crisp. It's a classic.",
  },
  {
    id: "stolpman",
    name: "Stolpman 'Uni' Ballard Canyon 2022",
    category: "white",
    region: "Ballard Canyon, Santa Barbara County, California",
    grapes: "60% Chardonnay, 40% Roussanne",
    glassware: "Burgundy",
    glassPrice: 25,
    bottlePrice: 100,
    tastingNotes:
      "Orange blossom, honeysuckle, Meyer lemon, jasmine, tropical guava, pear, and marzipan. Creamy with richness from Roussanne.",
    winemaking:
      "Aged 9 months in 25% new / 75% neutral 500L French oak puncheons. Whole bunch crushed with 24 hours skin contact. Chardonnay harvested late September, Roussanne November 8–10. Only 1,750 cases produced.",
    keyFacts:
      "Founded by Tom & Marilyn Stolpman — inspired on their honeymoon in Napa. Vineyard manager Ruben 'the Grape Whisperer' Solorzano has run the estate since 1994 with a profit-sharing team program. Limestone soils near the ocean.",
    foodPairing: "Women of the Sea specialty roll",
    guestOneLiner:
      "A stunning Santa Barbara blend — Chardonnay's freshness lifted by the lush, decadent character of Roussanne. Creamy, aromatic, and absolutely captivating.",
  },
  {
    id: "presquile",
    name: "Presqu'ile 'Presqu'ile Vineyard' Chardonnay, Santa Maria Valley 2022",
    category: "white",
    pronunciation: "Press-KEEL",
    region: "Santa Maria Valley, Central Coast, California",
    grapes: "100% Chardonnay",
    glassware: "All-Purpose (AP)",
    glassPrice: 26,
    bottlePrice: 104,
    tastingNotes:
      "White peach, apple, toast, and salty sea air. Textured and nuanced. Something for every palate preference.",
    winemaking:
      "Native yeast fermentation. 11 months in 2000L Austrian oak barrels followed by 6 months in stainless steel. Sustainable and organic farming.",
    keyFacts:
      "Located in the heart of Santa Maria Valley. Nearly 30 hectares of organic, sustainably farmed vineyard plots. Each wine reflects its specific site. Cool-climate producer.",
    foodPairing: "Tori No Teriyaki (chicken thighs)",
    guestOneLiner:
      "A beautiful Santa Barbara Chardonnay — organic and sustainably farmed, with lovely texture and that signature salty sea air note that makes it so refreshing.",
  },
  {
    id: "pernot",
    name: "Paul Pernot Bourgogne Côte d'Or Chardonnay 2024",
    category: "white",
    region: "Bourgogne (Burgundy), France",
    grapes: "100% Chardonnay",
    glassware: "Burgundy",
    glassPrice: 55,
    bottlePrice: 220,
    tastingNotes:
      "White flowers (honeysuckle), citrus (lemon, grapefruit), stone fruits (peach, apple), flint, savory oak. Mineral-driven, elegant, fresh acidity. Medium-bodied with potential for creamy texture from oak.",
    winemaking:
      "Fermented and aged in barrel — only 5% new oak. Minimal batonnage. Short time in barrel. From two organically farmed vineyard parcels in Puligny.",
    keyFacts:
      "One of Puligny's largest estates at 20ha, but only 20% is bottled under the Pernot label. Grapes hand-picked. The 2024 vintage brings extra richness in a very small vintage. Technically adjacent to Puligny-Montrachet vineyards.",
    guestOneLiner:
      "A stunning Burgundy Chardonnay from one of Puligny's most respected families — elegant, mineral, and precise, with extraordinary quality for a Bourgogne appellation.",
  },
  {
    id: "ott",
    name: "Domaine OTT Château de Selle Côte de Provence 2023",
    category: "rose",
    region: "Côte de Provence, France",
    grapes: "55% Grenache, 25% Cinsault, 14% Mourvèdre, 6% Syrah",
    glassware: "All-Purpose (AP)",
    glassPrice: 34,
    bottlePrice: 144,
    tastingNotes:
      "Remarkably soft, revealing all the complexity of summer fruit. Silky texture evolving gently toward a chalky, mineral finish.",
    winemaking:
      "Juices fermented in vats, then matured in oak barrels. Limestone hillside vineyard. Organic farming since 2022.",
    keyFacts:
      "Domaines Ott founded in 1896 by Alsatian engineer Marcel Ott. Now owned and managed by Champagne Louis Roederer. Three distinct estates: Château Romassan (Bandol), Clos Mireille, and Château de Selle (both Côtes de Provence). Among the world's most prestigious rosés.",
    guestOneLiner:
      "Domaine OTT is one of the world's most celebrated Provençal rosés — silky, mineral, and beautifully restrained. Owned by Louis Roederer, it's crafted with the same precision as great Champagne.",
  },
  {
    id: "chanin",
    name: "Chanin 'Zotovich Vineyard' Pinot Noir, Sta. Rita Hills 2021",
    category: "red",
    region: "Zotovich Vineyard, Sta. Rita Hills, Santa Barbara, California",
    grapes: "100% Pinot Noir",
    glassware: "Burgundy",
    glassPrice: 36,
    bottlePrice: 144,
    tastingNotes:
      "Delicate pale color. Immediate bright red fruit, Asian spice, and succulent herbal notes. Playful, lifted, and fresh.",
    winemaking:
      "No commercial yeasts, bacteria, or enzymes. Focus on balance, finesse, and complexity. Vineyard-driven philosophy. Arnold Series oceanic sand soils contribute saline character.",
    keyFacts:
      "Winemaker Gavin Chanin named Forbes '30 Under 30' in Food & Wine. Trained at Au Bon Climat and Qupé under Jim Clendenen and Bob Lindquist.",
    foodPairing: "Tori Karaage (fried chicken karaage)",
    guestOneLiner:
      "A stunning Santa Barbara Pinot Noir from one of California's most exciting young winemakers — bright red fruit, Asian spice, and a beautiful saline freshness from the ocean-influenced vineyard.",
  },
  {
    id: "esmonin",
    name: "Frédéric Esmonin 'Les Hauts Pruliers' Nuits-Saint-Georges 2022",
    category: "red",
    region: "Nuits-Saint-Georges, Côte de Nuits, Burgundy, France",
    grapes: "100% Pinot Noir",
    glassware: "Bordeaux",
    glassPrice: 42,
    bottlePrice: 168,
    tastingNotes:
      "Supple texture, bright red fruits (cherry, strawberry), earthy notes (graphite, dried leaves), spices, hints of violet and black fruits. Bright, layered, with excellent length. Smooth with firm tannins developing on the finish. Captivating and romantic.",
    winemaking:
      "Aged 14–17 months in French oak barrels of varying age and toast. Village-level wines use 20% new oak. Gentle bladder press for fine extraction. Grapes picked only at ideal ripeness.",
    keyFacts:
      "Prestigious Côte de Nuits appellation. Grand cru and Lavaut Saint-Jacques Premier Cru wines see 80% new oak. Wines are blended across barrel ages for optimal balance.",
    guestOneLiner:
      "A beautiful village Burgundy from the prestigious Nuits-Saint-Georges appellation — supple, layered, and romantic. It opens up beautifully in the glass.",
  },
  {
    id: "serena",
    name: "La Serena Brunello di Montalcino 2020",
    category: "red",
    region: "Montalcino, Tuscany, Italy",
    grapes: "100% Sangiovese (Brunello clone)",
    glassware: "Bordeaux",
    glassPrice: 35,
    bottlePrice: 140,
    tastingNotes:
      "Ruby red. Ethereal, deep, and balanced nose with a wide, persistent bouquet and fine touches of fruit and spices. Elegant, soft, round and velvety on the palate.",
    winemaking:
      "Temperature-controlled stainless steel fermentation. Aged 3 years in French oak casks (20, 30, 40, and 70 hectoliter) plus 4 months in bottle.",
    keyFacts:
      "Montalcino is ~70 miles south of Florence with a warmer, drier climate than Chianti. The Brunello clone of Sangiovese is unique to this region. The 2019 vintage (previous) received 98 points from Wine Spectator and 5/5 stars from Decanter.",
    guestOneLiner:
      "Brunello di Montalcino is one of Italy's greatest wines — this is three years in French oak, then bottle-aged, with an incredibly silky, velvety texture. A true luxury in the glass.",
  },
  {
    id: "heitz",
    name: "Heitz Cellars Cabernet Sauvignon, Napa Valley 2021",
    category: "red",
    region: "Napa Valley, California",
    grapes: "100% Cabernet Sauvignon",
    glassware: "Bordeaux",
    glassPrice: 50,
    bottlePrice: 200,
    tastingNotes:
      "Fresh and juicy with red and black cherry, currant, applewood, and cedar. Structure turns taut through the finish with good energy.",
    winemaking:
      "8 months in neutral tank, then 2 years in 50% new French oak, then 18 months in bottle before release. Three-generation winemaking philosophy of restraint and balance.",
    keyFacts:
      "Heitz Cellar is one of Napa Valley's historic founding estates. Three generations of family winemaking. Classic characteristics: aromatic black and red fruit, sandalwood, cedar, herbs de Provence, soft tannins.",
    foodPairing: "Miyazaki A5 Wagyu Ribeye",
    guestOneLiner:
      "Heitz Cellar is one of Napa's great historic estates — three generations of family winemaking, aged nearly four years before release. It's a classic, beautifully structured Cabernet.",
  },
];

export const WINE_MAP = new Map<string, Wine>();
for (const wine of WINES) {
  WINE_MAP.set(wine.id, wine);
  WINE_MAP.set(wine.name.toLowerCase(), wine);
}

export function findWine(query: string): Wine | undefined {
  const q = query.toLowerCase();
  return WINES.find(
    (w) =>
      q.includes(w.name.toLowerCase()) ||
      q.includes(w.id) ||
      (w.id === "fourny" &&
        (q.includes("fourny") || q.includes("vueve") || q.includes("voove"))) ||
      (w.id === "billecart" &&
        (q.includes("billecart") || q.includes("salmon ros"))) ||
      (w.id === "krug" && q.includes("krug")) ||
      (w.id === "punta-crena" &&
        (q.includes("punta") ||
          q.includes("vermentino") ||
          q.includes("liguria"))) ||
      (w.id === "laporte" &&
        (q.includes("laporte") ||
          q.includes("sancerre") ||
          q.includes("comtesse"))) ||
      (w.id === "stolpman" && (q.includes("stolpman") || q.includes("uni"))) ||
      (w.id === "presquile" &&
        (q.includes("presquile") ||
          q.includes("presqu") ||
          q.includes("press-keel") ||
          q.includes("santa maria"))) ||
      (w.id === "pernot" &&
        (q.includes("pernot") ||
          q.includes("paul pernot") ||
          q.includes("bourgogne"))) ||
      (w.id === "ott" &&
        (q.includes(" ott") ||
          q.includes("chateau de selle") ||
          q.includes("provence ros"))) ||
      (w.id === "chanin" && (q.includes("chanin") || q.includes("zotovich"))) ||
      (w.id === "esmonin" &&
        (q.includes("esmonin") ||
          q.includes("nuits") ||
          q.includes("nuits-saint"))) ||
      (w.id === "serena" &&
        (q.includes("serena") ||
          q.includes("brunello") ||
          q.includes("montalcino"))) ||
      (w.id === "heitz" && (q.includes("heitz") || q.includes("heitz cellar"))),
  );
}
