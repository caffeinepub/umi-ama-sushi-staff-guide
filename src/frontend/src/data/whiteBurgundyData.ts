export type WhiteBurgundyWine = {
  id: string;
  name: string;
  appellation: string;
  village: "chablis" | "saint-aubin" | "chassagne" | "puligny" | "meursault";
  pronunciation?: string;
  grape: string;
  glassware: "Burgundy";
  tastingNotes: string;
  vintageCharacter: string;
  terroir: string;
  winemaking: string;
  estate: string;
  foodPairing: string;
  guestOneLiner: string;
};

export const WHITE_BURGUNDY_WINES: WhiteBurgundyWine[] = [
  {
    id: "tribut-chablis",
    name: "Domaine Laurent Tribut Chablis 1er Cru Beauroy 2022",
    appellation: "Chablis, Burgundy, France",
    village: "chablis",
    pronunciation: "Bo-rooy",
    grape: "100% Chardonnay",
    glassware: "Burgundy",
    tastingNotes:
      "Mineral backbone and well-balanced acidity give the wine structure and depth — accessible and expressive of its terroir.",
    vintageCharacter:
      "2022 was warm and very dry, with high acidity preserved. The wines show a lovely combination of freshness and minerality typical of Chablis, combined with fleshy, ripe stone and tree-fruit flavors.",
    terroir:
      "Kimmeridgian limestone foothills — giving Chablis' signature minerality along with a typical richness.",
    winemaking:
      "6 months in stainless steel vats + 12 months in old barrels. Hand-harvested. Fermented in enamel tanks to avoid ionic charges.",
    estate:
      "Laurent and his daughter Marie-Clotilde oversee 5 hectares. Laurent originally learned to make wine at the Dauvissat family (one of Chablis' most revered estates) — following many of the same practices. A family estate of the highest integrity.",
    foodPairing:
      "Lighter sashimi preparations, Kanpachi Usuzukuri, shellfish dishes",
    guestOneLiner:
      "This is a Premier Cru Chablis from one of the appellation's most principled producers — a family who learned their craft directly from the legendary Dauvissat estate. Pure, mineral, with beautiful Kimmeridgian limestone tension.",
  },
  {
    id: "hubert-lamy",
    name: "Hubert Lamy Saint-Aubin 1er Cru 'Les Frionnes' 2021",
    appellation: "Saint-Aubin, Burgundy, France",
    village: "saint-aubin",
    pronunciation: "lay free-ONN",
    grape: "100% Chardonnay",
    glassware: "Burgundy",
    tastingNotes:
      "Puligny-like in profile — combining tension, limestone minerality, subtle orchard fruit, and a dry, incisive close.",
    vintageCharacter:
      "2021 was defined by severe spring frosts, low yields, and cool-climate structure. Lower alcohol, high natural acidity, strongly mineral-driven — favoring tension and precision over richness.",
    terroir:
      "Limestone with very little topsoil. Cool and wind-exposed. Extreme high-density vine planting — far above Burgundian norms — forces deep rooting, naturally limits yields, and amplifies mineral tension.",
    winemaking:
      "Fermented in large-format 300–600L barrels and older wood. Aged in 10% new French oak. Minimal bâtonnage to preserve clarity and structure. Deliberately restrained in the cellar.",
    estate:
      "Known for extreme vine density that disciplines the vine and intensifies terroir expression. Winemaking deliberately restrained to let the vineyard speak. Considered one of the finest producers in Saint-Aubin.",
    foodPairing:
      "Delicate fish preparations, lighter zensai, ponzu-dressed dishes",
    guestOneLiner:
      "Hubert Lamy is the benchmark of Saint-Aubin — their vines are planted at extraordinary density, far beyond the Burgundian norm, which forces the roots deep into the limestone and produces a wine of remarkable precision and minerality.",
  },
  {
    id: "bachelet-monnot",
    name: "Bachelet-Monnot Chassagne-Montrachet 2022",
    appellation: "Chassagne-Montrachet, Burgundy, France",
    village: "chassagne",
    grape: "100% Chardonnay",
    glassware: "Burgundy",
    tastingNotes:
      "Well-balanced, elegant, complex. Quince, lemon curd, honey, ripe apple with a strong mineral backbone.",
    vintageCharacter:
      "2022 is widely considered an excellent White Burgundy vintage — ripe, concentrated fruit (melon, citrus, orchard) with vibrant acidity, good structure, and minerality. Rich yet fresh, age-worthy.",
    terroir:
      "6 parcels across Chassagne — lieu-dits La Canière, La Chêne, Les Benoîtes, Le Pot Bois, En Journoblot, Les Houlières. 30+ year old vines.",
    winemaking: "12 months in barrel (20% new oak) + 6 months in tank.",
    estate:
      "Brothers Marc and Alexandre Bachelet launched their domaine in 2005 from family land in Dezize-lès-Maranges. Celebrated for their precise, mineral-driven wines. Organic-leaning farming (lutte raisonnée), low yields, and careful cellar work.",
    foodPairing:
      "Gindara Kasuzuke (Black Cod), richer fish preparations, Aburi Maguro",
    guestOneLiner:
      "Bachelet-Monnot is one of Chassagne's most exciting young estates — two brothers farming six different parcels organically across the village, producing a wine of extraordinary complexity. Quince, honey, lemon curd, with a striking mineral backbone.",
  },
  {
    id: "ramonet-puligny",
    name: "Jean-Claude Ramonet Puligny-Montrachet 2021",
    appellation: "Puligny-Montrachet, Burgundy, France",
    village: "puligny",
    grape: "100% Chardonnay",
    glassware: "Burgundy",
    tastingNotes:
      "Bright and elegant with citrus oil, pear, and wet-stone tension showing classic Ramonet purity.",
    vintageCharacter:
      "2021 was challenging (April Frost, low yields), but the best producers crafted small quantities of fresh, elegant, and harmonious wines from a full range of climats.",
    terroir:
      "Grapes from vines planted in 1972, from the climat Les Nosroyes — located just below the Premier Cru vineyards of Puligny.",
    winemaking: "12–15 months in 10–15% new oak.",
    estate:
      "Founding legend of Burgundy. Pierre Ramonet purchased his first plot at Ruchottes-Chassagne in 1934 — one of the first estate-bottled white Burgundies ever imported into the US after Prohibition ended. The domaine gained legendary collector status among American importers and remains one of the most revered names in all of Burgundy.",
    foodPairing:
      "Masunozuke Usuzukuri (King Salmon sashimi), delicate preparations where minerality can shine",
    guestOneLiner:
      "Ramonet is one of Burgundy's founding legends — their estate-bottled wines were among the first white Burgundies imported into America after Prohibition. This Puligny shows everything that makes the village extraordinary: citrus oil, pear, and pure wet-stone minerality.",
  },
  {
    id: "chavy-chouet",
    name: "Chavy-Chouet Meursault 'Les Casse-Têtes' 2019",
    appellation: "Meursault, Burgundy, France",
    village: "meursault",
    pronunciation: "sha-VEE shoo-EH",
    grape: "100% Chardonnay",
    glassware: "Burgundy",
    tastingNotes:
      "Sophistication, structure, and assured elegance reflecting the character of the soil.",
    vintageCharacter:
      "2019 was warm, but the wines maintained freshness and precision, avoiding over-ripeness. Critics noted clarity of fruit, exuberant florality, and freshness — a particularly successful year for white Burgundies.",
    terroir:
      "'Casse-tête' means conundrum or puzzle in French — the name refers to the hardness of the soil and the challenge it posed to ancestors planting vines in this pebbly limestone ground.",
    winemaking: "12 months in French oak barrels (20% new).",
    estate:
      "Chavy-Chouet has over 7 generations of winemaking heritage. Hubert Chavy began estate-bottling in 1982 (previously sold grapes to négociants). His son Romaric took over in 2014 after studying at specialist winemaking schools internationally — elevating the estate's reputation by blending tradition with innovation.",
    foodPairing: "Miyazaki A5 Wagyu, richer main courses, Gindara Kasuzuke",
    guestOneLiner:
      "Meursault is Burgundy's most opulent white wine village, and Les Casse-Têtes — named for the puzzle-hard soil it was planted in — is a beautiful example of that richness. Seven generations of family craftsmanship, with beautiful freshness and elegance from the 2019 vintage.",
  },
];

export const BURGUNDY_VILLAGES = [
  {
    id: "chablis",
    name: "Chablis",
    description:
      "Northernmost. Unoaked or lightly oaked. Razor-sharp minerality, bright citrus, chalky Kimmeridgian limestone soil. Cool and lean.",
  },
  {
    id: "saint-aubin",
    name: "Saint-Aubin",
    description:
      "Côte de Beaune. Often described as Puligny's neighbor and value alternative. Limestone-driven, elegant, precise.",
  },
  {
    id: "meursault",
    name: "Meursault",
    description:
      "The richest, most opulent village. Known for hazelnut, butter, stone fruit. Fuller body than Puligny.",
  },
  {
    id: "chassagne",
    name: "Chassagne-Montrachet",
    description:
      "Complex, mineral, quince and honey. Often more structured than Puligny.",
  },
  {
    id: "puligny",
    name: "Puligny-Montrachet",
    description:
      "The benchmark white Burgundy village. Tension, wet-stone minerality, citrus oil, pear. Home to Le Montrachet, arguably the world's greatest white wine vineyard.",
  },
];

export const BURGUNDY_KEY_TERMS = [
  {
    term: "1er Cru (Premier Cru)",
    definition:
      "The second-highest classification in Burgundy, below Grand Cru. Specific named vineyard plots with exceptional terroir.",
  },
  {
    term: "Climat",
    definition:
      "A specific, precisely defined vineyard plot in Burgundy — a concept unique to the region.",
  },
  {
    term: "Kimmeridgian limestone",
    definition:
      "Ancient seabed limestone characteristic of Chablis, giving wines their signature mineral tension.",
  },
  {
    term: "Lutte raisonnée",
    definition:
      '"Reasoned struggle" — sustainable farming that avoids pesticides and chemicals without full organic certification.',
  },
  {
    term: "Bâtonnage",
    definition: "Stirring the lees in barrel to add richness and texture.",
  },
];

export const VILLAGE_POSITIONING = [
  {
    preference: "Crisp and mineral",
    recommendation: "Chablis (Tribut) or Saint-Aubin (Lamy)",
  },
  {
    preference: "Classic White Burgundy elegance",
    recommendation: "Puligny-Montrachet (Ramonet)",
  },
  {
    preference: "Richness and complexity",
    recommendation: "Meursault (Chavy-Chouet) or Chassagne (Bachelet-Monnot)",
  },
  {
    preference: "Most prestigious name",
    recommendation: "Puligny-Montrachet (Ramonet)",
  },
  {
    preference: "Value for Premier Cru quality",
    recommendation:
      "Saint-Aubin (Lamy) — Puligny's neighbor at a fraction of the price",
  },
];

export const WHITE_BURGUNDY_MAP = new Map<string, WhiteBurgundyWine>();
for (const wine of WHITE_BURGUNDY_WINES) {
  WHITE_BURGUNDY_MAP.set(wine.id, wine);
  WHITE_BURGUNDY_MAP.set(wine.name.toLowerCase(), wine);
}

export function findWhiteBurgundy(
  query: string,
): WhiteBurgundyWine | undefined {
  const q = query.toLowerCase();
  return WHITE_BURGUNDY_WINES.find(
    (w) =>
      q.includes(w.id) ||
      q.includes(w.name.toLowerCase()) ||
      (w.id === "tribut-chablis" &&
        (q.includes("tribut") ||
          q.includes("beauroy") ||
          q.includes("bo-rooy"))) ||
      (w.id === "hubert-lamy" &&
        (q.includes("lamy") ||
          q.includes("frionnes") ||
          q.includes("les frionnes"))) ||
      (w.id === "bachelet-monnot" &&
        (q.includes("bachelet") || q.includes("monnot"))) ||
      (w.id === "ramonet-puligny" &&
        (q.includes("ramonet") || q.includes("jean-claude ramonet"))) ||
      (w.id === "chavy-chouet" &&
        (q.includes("chavy") ||
          q.includes("casse-tete") ||
          q.includes("casse tete") ||
          q.includes("casse têtes"))),
  );
}
