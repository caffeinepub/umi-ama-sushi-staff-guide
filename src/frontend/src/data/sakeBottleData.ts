export type SakeBottle = {
  id: string;
  name: string;
  category:
    | "Junmai Ginjo"
    | "Yamahai"
    | "Nigori"
    | "Junmai Daiginjo"
    | "Honjozo"
    | "Sparkling";
  prefecture: string;
  rice: string;
  polish?: string;
  abv?: string;
  smv?: string;
  acidity?: string;
  methodTags: string[];
  appearance?: string;
  nose: string;
  palate: string;
  story: string;
  bestWith: string;
  price: number;
  priceLabel?: string;
  guestOneLiner: string;
};

export const SAKE_BOTTLE_CATEGORIES = [
  "Junmai Ginjo",
  "Yamahai",
  "Nigori",
  "Junmai Daiginjo",
  "Honjozo",
  "Sparkling",
] as const;

export const SAKE_METHODS_GLOSSARY: { name: string; description: string }[] = [
  {
    name: "Yamahai",
    description:
      "Traditional brewing using naturally cultivated lactic bacteria rather than commercial cultures. Results in higher acidity, bolder umami, and more complex, sometimes earthy or smoky character. More wild and powerful than standard sake.",
  },
  {
    name: "Genshu",
    description:
      "Undiluted sake, typically 17\u201319% ABV. Adds richness, weight, and intensity to the final sake.",
  },
  {
    name: "Muroka",
    description:
      "Not charcoal-filtered. Retains more color, flavor complexity, and aroma than a filtered sake.",
  },
  {
    name: "Nigori",
    description:
      "Unfiltered or coarsely filtered, leaving rice solids in suspension. Cloudy appearance, creamy texture.",
  },
  {
    name: "Usu-nigori",
    description:
      "Lightly filtered nigori \u2014 hazy rather than opaque. More refined than standard nigori; lean and bright.",
  },
  {
    name: "Shizuku",
    description:
      "Gravity drip pressing \u2014 no mechanical pressure applied to the moromi (fermenting mash). Only the most delicate fraction of sake is collected. Maximum purity and finesse.",
  },
  {
    name: "White Koji (Shiroji)",
    description:
      "Extremely rare in sake. Produces citric acid instead of lactic acid \u2014 giving a wine-like, sharp, bright acidity. SMV of -40 appears sweet but white koji citric acid dominates.",
  },
  {
    name: "SMV (Sake Meter Value)",
    description:
      "Positive = drier. Negative = sweeter. Measures the relative density of sake compared to water, which directly corresponds to residual sugar. A SMV of -40 appears very sweet but white koji acidity can dominate the perception.",
  },
];

export const SAKE_BOTTLE_RICE_VARIETIES: {
  name: string;
  description: string;
}[] = [
  {
    name: "Yamada Nishiki",
    description:
      "The king of sake rice. Most widely used for premium sake due to its large grain and well-developed shinpaku starch core.",
  },
  {
    name: "Omachi",
    description:
      "Japan\u2019s oldest cultivated sake rice. Wild, complex, earthy. Difficult to grow and brew \u2014 rewards the patient brewer with extraordinary depth.",
  },
  {
    name: "Dewasansan",
    description:
      "Exclusive to Yamagata GI. Descendant of Omachi. Elegant and delicate \u2014 the variety that earned Yamagata Japan\u2019s first sake geographical indication.",
  },
  {
    name: "Shinriki",
    description:
      "A heirloom variety that nearly disappeared entirely. Bold, savoury, coastal character. Exported exclusively to the US in the Sacred Power expression.",
  },
  {
    name: "Gohyakumangoku",
    description:
      "Western Japan staple. Clean, crisp, dry. Large grain with well-defined starch core \u2014 produces clean, precise styles.",
  },
  {
    name: "Kura no Hana",
    description:
      "Miyagi native variety used in the Zankyo Super 7 and Reikyo Absolute 0. Rare outside Miyagi prefecture.",
  },
  {
    name: "Senbon Nishiki",
    description:
      "Hiroshima variety. Aromatic, strawberry-forward. The defining characteristic of Jikon\u2019s Senbon Nishiki expression.",
  },
];

export const SAKE_BOTTLES: SakeBottle[] = [
  // ─── JUNMAI GINJO ───────────────────────────────────────────────────────────
  {
    id: "sacred-power",
    name: "Chiyonosono \u2018Sacred Power\u2019 Junmai Ginjo",
    category: "Junmai Ginjo",
    prefecture: "Kumamoto",
    rice: "Shinriki (revived heirloom)",
    polish: "55%",
    abv: "15.9%",
    smv: "+2.5",
    acidity: "1.5",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Grassy, herbaceous \u2014 lemongrass, hay, chamomile, tropical fruit, and a distinctive briny sea-spray note",
    palate:
      "Off-dry. Medium-high acidity. Medium-full body with a silky, velveteen texture. Kombu dashi, soft pear, tropical fruit, and a persistent savoury umami. The salinity is the signature. Medium-long finish.",
    story:
      "Made from 100% Shinriki rice \u2014 a heirloom variety that nearly disappeared entirely \u2014 and exported exclusively to the US in this form. Bold, savoury, coastal. One of the most distinctive junmai ginjo on the market.",
    bestWith: "Oysters, raw bar, Kanpachi Usuzukuri, calamari",
    price: 90,
    guestOneLiner:
      "Sacred Power is made from an heirloom rice that almost went extinct \u2014 it has this remarkable coastal salinity, like the sea itself is in the glass. Savoury, bold, and completely unique.",
  },
  {
    id: "moon-on-the-water",
    name: "Fukucho \u2018Moon on the Water\u2019 Junmai Ginjo",
    category: "Junmai Ginjo",
    prefecture: "Hiroshima",
    rice: "Yamada Nishiki / Hattannishiki",
    polish: "55%",
    abv: "16.5%",
    smv: "+3",
    acidity: "1.4",
    methodTags: ["Muroka"],
    appearance:
      "Clear, very pale green-tinged lemon. Unfined (no charcoal filtration).",
    nose: "Vibrant lime, melon, and pear with bold herbal undertones \u2014 fennel, white pepper, allspice. Soft yet aromatic.",
    palate:
      "Off-dry. Medium acidity with a mineral quality from Hiroshima\u2019s famously soft water. Medium-full body with a soft, rounded, almost weightless texture. Ripe cantaloupe, anise, and a clean mineral close. Medium-long finish.",
    story:
      "Brewed by Miho Imada \u2014 Japan\u2019s only female brewery owner-toji. Hiroshima is the birthplace of ginjo sake. Soft water demands exceptional fermentation control, and Imada-san masters it. Bottled without charcoal filtration to maximise aromatics.",
    bestWith: "Shellfish, lobster, scallops, Masunozuke Usuzukuri",
    price: 110,
    guestOneLiner:
      "Moon on the Water is brewed by Japan\u2019s only female brewery owner. Hiroshima invented ginjo sake, and this is the benchmark \u2014 with this extraordinary soft, weightless texture that comes from the region\u2019s uniquely soft water.",
  },
  {
    id: "pride-of-the-seashore",
    name: "Isojiman \u2018Pride of the Seashore\u2019 Junmai Ginjo",
    category: "Junmai Ginjo",
    prefecture: "Shizuoka",
    rice: "AAA Yamada Nishiki from Tojo, Hyogo",
    polish: "55%",
    abv: "15-16%",
    smv: "+5",
    acidity: "1.3",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Tropical fruit \u2014 apricot, pear, grapefruit \u2014 with an unusual and distinctive saline, oceanic lift. Restrained but defined.",
    palate:
      "Dry (SMV +5). Medium acidity. Light to medium body. Smooth, finely textured. Gentle umami, fresh acidity, and a definitive saline finish. Clean and precise. Medium length.",
    story:
      "The brewery uses a proprietary yeast propagated on seaweed \u2014 which is why this sake has a defining coastal salinity unlike anything else. They have sourced AAA Yamada Nishiki from the same Hyogo farm for over 30 years.",
    bestWith:
      "Sashimi, raw seafood, delicate white fish \u2014 the ultimate seafood sake",
    price: 105,
    guestOneLiner:
      "Pride of the Seashore uses a yeast cultivated on seaweed \u2014 which is why it has this extraordinary saline finish, like the ocean. It\u2019s the definitive sake for sashimi.",
  },
  {
    id: "100-poems",
    name: "Jinyu \u2018100 Poems\u2019 Junmai Ginjo",
    category: "Junmai Ginjo",
    prefecture: "Chiba",
    rice: "Akita Sake Komachi",
    polish: "55%",
    abv: "15.2%",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Medium intensity. Melon, soft cherry, plum, and a whisper of anise. Gentle and inviting.",
    palate:
      "Off-dry. Medium acidity. Medium body with a soft, smooth texture. Melon, plum, and anise with moderate depth. Clean, smooth finish. Medium length.",
    story:
      "Named for the Hyakunin Isshu \u2014 Japan\u2019s classic 100-poem anthology compiled in the 13th century. A brewery with over 300 years of history producing an accessible, broadly food-compatible sake.",
    bestWith:
      "Wide range \u2014 oysters, saut\u00e9ed scallops, lighter preparations",
    price: 82,
    guestOneLiner:
      "100 Poems is named for a classic Japanese poetry anthology \u2014 it\u2019s elegant, approachable, and works beautifully with almost anything on the menu. A wonderful starting point.",
  },
  {
    id: "jikon-senbon-nishiki",
    name: "Jikon Junmai Ginjo \u2018Senbon Nishiki\u2019",
    category: "Junmai Ginjo",
    prefecture: "Mie",
    rice: "Senbon Nishiki (Hiroshima)",
    polish: "55%",
    abv: "16%",
    smv: "+1",
    acidity: "~1.6",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Highly aromatic \u2014 candied strawberry, exotic tropical fruit, rose petal. Vibrant and fruit-forward.",
    palate:
      "Off-dry. Medium-high acidity (characteristic of Jikon\u2019s house style). Medium body, juicy and lively. Strawberry, stone fruit, and a bright, clean, slightly tart finish. Luminous and energetic. Medium-long.",
    story:
      "Jikon is a cult producer extraordinarily difficult to find \u2014 limit-one bottles at most specialist retailers. Lottery allocation in Japan. Toji Tadayoshi Onishi\u2019s meticulous koji work produces the house signature: luminous, strawberry-bright, electric acidity.",
    bestWith: "Light poultry, sushi, delicate preparations",
    price: 100,
    guestOneLiner:
      "Jikon is one of Japan\u2019s most sought-after sake breweries \u2014 allocation is lottery-only in Japan. This expression has the house signature: an electric brightness, candied strawberry, and this almost incandescent energy on the palate.",
  },
  {
    id: "sun-rise",
    name: "Toko Junmai Ginjo \u2018Sun Rise\u2019 Dewasansan",
    category: "Junmai Ginjo",
    prefecture: "Yamagata",
    rice: "Dewasansan (exclusive to Yamagata GI)",
    polish: "55%",
    abv: "15%",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Low to medium intensity. Grassy and floral \u2014 Granny Smith apple, melon, pear skin, cucumber. Clean, delicate freshness.",
    palate:
      "Off-dry. Medium acidity. Light to medium body. Very gentle and clean \u2014 white grape, melon, apple, and a touch of mineral. Soft, elegant, and whisper-light. Medium length.",
    story:
      "Made from Dewasansan rice \u2014 the variety that helped Yamagata earn Japan\u2019s first sake GI (geographical indication). One of Japan\u2019s oldest breweries, founded in 1579.",
    bestWith: "Delicate fish, sashimi, contemplative drinking",
    price: 98,
    guestOneLiner:
      "Sun Rise is made from Dewasansan rice \u2014 the variety that earned Yamagata Japan\u2019s first geographical indication, like a wine appellation. From a brewery founded in 1579. It\u2019s whisper-light and profoundly elegant.",
  },

  // ─── YAMAHAI ────────────────────────────────────────────────────────────────
  {
    id: "kikuhime-yamahai",
    name: "Kikuhime Yamahai Ginjo Genshu",
    category: "Yamahai",
    prefecture: "Ishikawa",
    rice: "AAA Yamada Nishiki from Yokowa",
    polish: "55%",
    abv: "18.5%",
    methodTags: ["Yamahai", "Genshu"],
    appearance:
      "Clear to slightly golden. Full viscosity from undiluted format.",
    nose: "Pronounced. Toasted nuts, dried apricot, fig, caramel, baking spice, banana, and earthy mushroom. Tertiary complexity with semi-aged character.",
    palate:
      "Off-dry. High acidity (Yamahai lactic). Full body. Powerful and rich \u2014 cream, hazelnut, vanilla, umami, minerality. The 18.5% ABV adds warmth without harshness. Long, complex finish.",
    story:
      "Kikuhime pioneered the Yamahai revival in the 1970s when the rest of the industry pursued lighter, cleaner styles. This bottle has aging potential of 10\u201320 years. A cellar-worthy sake.",
    bestWith: "Game, venison, rich braised dishes, aged cheeses",
    price: 320,
    guestOneLiner:
      "Kikuhime is the brewery that brought Yamahai back to Japan \u2014 this is their undiluted masterpiece at 18.5% ABV. It has the complexity of a great Burgundy and the aging potential of a premier cru. Nothing like it exists in the category.",
  },
  {
    id: "true-vision",
    name: "Mana 1751 Yamahai Tokubetsu Junmai \u2018True Vision\u2019",
    category: "Yamahai",
    prefecture: "Fukui",
    rice: "Gohyakumangoku",
    abv: "~17-18%",
    methodTags: ["Yamahai", "Genshu", "Muroka"],
    appearance:
      "Clear to very pale lemon \u2014 remarkably water-white for an unfined, undiluted sake.",
    nose: "Pronounced. Tart yogurt, mushroom, earthy honey, banana, black pepper, and steamed rice. Bold lactic character, yet precise and clean.",
    palate:
      "Off-dry. Very high acidity (pronounced lactic). Full body. Undiluted and powerful \u2014 tart yogurt, milk candy, black pepper, savoury spice. Long, bold, deeply satisfying finish.",
    story:
      "Toji Izumi-san is sake\u2019s most iconoclastic brewer. No blending between tanks in a non-vintage product is unheard of. Ferments with FK-3 \u2014 a rare locally developed Fukui yeast used by only 5 breweries in the world. Despite no filtration, it pours almost crystal clear. The single most terroir-expressive sake on this list.",
    bestWith: "Lamb, mapo tofu, richly spiced dishes, strong cheeses",
    price: 100,
    guestOneLiner:
      "True Vision is brewed with a yeast used by only five breweries on earth. The toji refuses to blend tanks, refuses to dilute, refuses to filter \u2014 and yet it pours almost perfectly clear. It\u2019s sake as a pure expression of a single place, a single season, a single brewer\u2019s vision.",
  },
  {
    id: "cowboy",
    name: "Shiokawa Yamahai Junmai Ginjo Genshu \u2018Cowboy\u2019",
    category: "Yamahai",
    prefecture: "Niigata",
    rice: "Niigata Shuzo Kotekimai",
    polish: "60%",
    abv: "16.9-19%",
    smv: "+3.5",
    acidity: "2.0",
    methodTags: ["Yamahai", "Genshu"],
    appearance: "Clear, pale gold. Viscous from undiluted genshu format.",
    nose: "Pronounced. Vanilla, cocoa, hickory smoke, caramel, musky fruit, straw, and steamed rice. Unlike any Niigata sake.",
    palate:
      "Off-dry. High acidity. Full body. Big, round, and rich \u2014 vanilla, smoke, salt, white pepper, tropical fruit, and deep umami. Long, smooth finish.",
    story:
      "Niigata is Japan\u2019s most famous sake prefecture \u2014 known for delicate, clean, dry sake called tanrei-karakuchi. Shiokawa brews the polar opposite, deliberately. No commercial yeast, no temperature control. A three-person family operation. One of sake\u2019s most individual expressions.",
    bestWith: "Steak, grilled meats, hearty dishes \u2014 a sake for the brave",
    price: 94,
    guestOneLiner:
      "Cowboy is a deliberate provocation. Niigata is famous for the most delicate sake in Japan \u2014 and this tiny three-person brewery makes the opposite on purpose. Smoky, meaty, and wildly individual. It\u2019s unlike anything else on the list.",
  },

  // ─── NIGORI ─────────────────────────────────────────────────────────────────
  {
    id: "road-to-osaka-bottle",
    name: "Daimon Tokubetsu Junmai Nigori \u2018Road to Osaka\u2019",
    category: "Nigori",
    prefecture: "Osaka",
    rice: "Gohyakumangoku",
    polish: "70%",
    abv: "15%",
    methodTags: ["Nigori"],
    appearance: "Hazy, pale lemon. Fine, uniform rice sediment.",
    nose: "White flowers, banana, citrus, blood orange. Lighter and more floral than many nigori.",
    palate:
      "Off-dry to medium sweet. Medium acidity. Medium body \u2014 notably lighter and more refined than a traditional thick nigori. Creamy texture with banana, citrus, water chestnut, and sweet rice confectionary. Medium finish.",
    story:
      "One of very few sake breweries remaining in Osaka \u2014 Japan\u2019s culinary capital. Toji Yasutaka Daimon is also a jazz musician; his philosophy of precision carries into the sake. A refined, lighter-bodied introduction to nigori.",
    bestWith:
      "Fried foods, crab preparations, spicy dishes \u2014 also on the BTG list",
    price: 78,
    guestOneLiner:
      "Road to Osaka is from one of the few breweries left in Osaka \u2014 Japan\u2019s street food capital. The toji is also a jazz musician. It\u2019s a lighter, more refined nigori than you might expect \u2014 elegant rather than thick and sweet.",
  },
  {
    id: "dreamy-clouds",
    name: "Rihaku Tokubetsu Junmai Nigori \u2018Dreamy Clouds\u2019",
    category: "Nigori",
    prefecture: "Shimane",
    rice: "Gohyakumangoku",
    polish: "59%",
    abv: "15%",
    methodTags: ["Usu-Nigori"],
    appearance:
      "Lightly hazy (usu-nigori) \u2014 pale lemon with fine sediment. More translucent than a standard nigori.",
    nose: "White flowers, raw pine nuts, honeydew, cream, and subtle toffee. Restrained and elegant for the style.",
    palate:
      "Off-dry. Pronounced acidity (unusual for nigori). Light to medium body \u2014 lean and bright, unlike a typical thick sweet nigori. Chewy texture from fine rice solids. Roasted nuts, dark plum, lemon curd, kabocha, citrus peel. Dry and fresh finish. Medium-long.",
    story:
      "Rihaku invented the dry, light-style nigori. This was Japan\u2019s first nigori brewed at Junmai Ginjo polishing level. It completely defies category expectations \u2014 lean, nutty, acidic, and dry where others are sweet and thick.",
    bestWith:
      "White fish, sushi, risotto, dishes that would be overwhelmed by a sweeter nigori",
    price: 120,
    guestOneLiner:
      "Dreamy Clouds invented the dry nigori category. It looks cloudy but drinks lean, nutty, and surprisingly dry \u2014 the opposite of what guests expect. Japan\u2019s first nigori made at ginjo polishing. A gateway sake for guests who think they don\u2019t like nigori.",
  },

  // ─── JUNMAI DAIGINJO ────────────────────────────────────────────────────────
  {
    id: "hamafukutsuru",
    name: "Hamafukutsuru Junmai Daiginjo",
    category: "Junmai Daiginjo",
    prefecture: "Hyogo (Nada)",
    rice: "Yamada Nishiki",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Classic daiginjo aromatics \u2014 melon, peach, pear, and persimmon. Clean and refined.",
    palate:
      "Off-dry. Medium acidity. Medium body. Elegant and clean \u2014 stone fruit, melon, and subtle umami. Balanced and polished. Medium-long finish.",
    story:
      "From Nada \u2014 Japan\u2019s most celebrated sake-producing region, responsible for a significant proportion of all premium sake. Made with local Yamada Nishiki in the classic, polished Nada style.",
    bestWith: "Omakase, sashimi, delicate preparations",
    price: 145,
    guestOneLiner:
      "Hamafukutsuru is from Nada \u2014 Japan\u2019s most famous sake region, the equivalent of Napa Valley. Classic, refined, and perfectly balanced daiginjo.",
  },
  {
    id: "bijofu-hina",
    name: "Hamakawa Shoten Bijofu Junmai Daiginjo \u2018Hina\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Kochi",
    rice: "Yamada Nishiki",
    polish: "50%",
    abv: "15%",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Elegant floral and tropical fruit \u2014 white peach, melon, and honeysuckle. Refined and feminine.",
    palate:
      "Off-dry. Medium acidity. Light to medium body. Smooth and silky \u2014 peach, melon, and clean rice notes. Kochi\u2019s signature bright acidity gives lift and clarity. Medium-long finish.",
    story:
      "The Junmai Daiginjo expression of the Bijofu (\u2018beautiful woman\u2019) brewery \u2014 the same producer whose Tokubetsu Junmai appears on the BTG list. \u2018Hina\u2019 is the premium expression \u2014 floral, refined, and food-forward.",
    bestWith: "White fish, light dishes, omakase",
    price: 120,
    guestOneLiner:
      "Hina is the premium expression from Bijofu \u2014 same brewery as our glass pour, taken to the daiginjo level. Kochi\u2019s bright acidity makes it one of the most food-friendly daiginjo on the list.",
  },
  {
    id: "jikon-omachi",
    name: "Jikon Junmai Daiginjo \u2018Tsukuto Omachi\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Mie",
    rice: "Omachi from Okayama",
    polish: "50%",
    abv: "16%",
    smv: "+1",
    acidity: "1.6",
    methodTags: [],
    appearance: "Clear, pale lemon with slight viscosity",
    nose: "Pronounced intensity. Luxuriant and complex \u2014 tropical fruit, lychee, stone fruit, white flowers, and earthy Omachi subtext. Jikon\u2019s signature brightness fully present.",
    palate:
      "Off-dry. High acidity (Jikon\u2019s defining character). Full body. Rich, round, and complex \u2014 Omachi delivers hazelnut, caramel, earthy depth, and melon, framed by Jikon\u2019s trademark luminous, tart finish. Very long.",
    story:
      "Omachi is Japan\u2019s oldest cultivated sake rice \u2014 wild, complex, and extremely difficult to brew. In Jikon\u2019s hands, with their electric house acidity and meticulous koji work, it becomes something layered and extraordinary. Global allocation is tiny \u2014 lottery-only in Japan. At $990 this reflects genuine rarity, not marketing.",
    bestWith: "Kaiseki, fine dining at its most elevated, a special occasion",
    price: 990,
    guestOneLiner:
      "The Jikon Omachi is one of the rarest sakes in the world \u2014 lottery allocation in Japan, tiny global distribution. Omachi is the oldest sake rice in Japan, wild and complex, and in Jikon\u2019s hands it becomes something electric and extraordinary. A once-in-a-career pour.",
  },
  {
    id: "southern-beauty",
    name: "Nanbu Bijin Junmai Daiginjo \u2018Southern Beauty\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Iwate",
    rice: "Gin Ginjo / Ginotome",
    polish: "40-50%",
    abv: "16%",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Peach, pear, plum, honeydew, white cherry, and honeyed apple. Floral and expressive.",
    palate:
      "Off-dry. Medium acidity. Medium body. Elegant and clean \u2014 peach cobbler, apple pie, wheat toast, creamy notes, large umami presence, and nougat on the finish. Long.",
    story:
      "IWC Champion Sake \u2014 perhaps the most decorated junmai daiginjo at this price point globally. Kosher and vegan certified. A genuine benchmark accessible to all guests regardless of dietary requirements.",
    bestWith: "Omakase, poultry, sashimi, wide range",
    price: 99,
    guestOneLiner:
      "Southern Beauty is the IWC Champion Sake \u2014 arguably the most awarded daiginjo at its price point in the world. Kosher and vegan certified. It\u2019s the bottle that converts people to sake.",
  },
  {
    id: "zankyo-super-7",
    name: "Niizawa Jozoten Junmai Daiginjo \u2018Zankyo Super 7\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Miyagi",
    rice: "Kura no Hana (Miyagi native)",
    polish: "7%",
    abv: "16%",
    smv: "0",
    acidity: "1.5",
    methodTags: [],
    appearance: "Clear, water-white, perfectly translucent. Slightly viscous.",
    nose: "Pronounced yet delicate. Grapefruit peel, young pear, grape, strawberry, and floral notes. The ginjo aroma is intentionally restrained \u2014 the rice speaks rather than the yeast.",
    palate:
      "Off-dry. Medium acidity. Medium-full body with extraordinary silky, velvety texture. Melon, peach, almond, and a fleeting \u2018firework\u2019 quality \u2014 explosive in the mouth, then gone almost instantly, leaving a quiet, resonant finish. Very long.",
    story:
      "The world\u2019s most polished commercially available sake at the time of release. The name Zankyo \u2014 reverberation \u2014 perfectly describes the lingering but elusive finish. Wine Advocate 98 points. Grammy Awards 2010 official sake. A technical and artistic masterpiece.",
    bestWith:
      "Delicate sashimi, shellfish \u2014 anything that will not compete with the sake",
    price: 2850,
    guestOneLiner:
      "Super 7 was the most polished sake in the world when it was released \u2014 350 hours of milling to reach 7%. Wine Advocate 98 points. The name means \u2018reverberation\u2019 \u2014 it explodes in the mouth and then vanishes, leaving this extraordinary lingering echo. One of 999 bottles.",
  },
  {
    id: "reikyo-absolute-0",
    name: "Niizawa Jozoten Junmai Daiginjo \u2018Reikyo Absolute 0\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Miyagi",
    rice: "Kura no Hana",
    polish: "0.85%",
    abv: "16%",
    smv: "0",
    acidity: "~1.4",
    methodTags: [],
    appearance: "Clear, diamond-bright. Ethereal translucency.",
    nose: "Delicate yet complex. Grape, strawberry, Asian pear, honeydew, and white flowers \u2014 quiet and whispering. The nose barely telegraphs what the palate reveals.",
    palate:
      "Off-dry. Medium acidity. Full body. Sweetness blooms from the very core of the rice, then vanishes instantly. A firework texture: incandescent in the mouth, then gone \u2014 leaving only a lingering, resonant whisper. Hauntingly quiet finish.",
    story:
      "The most highly polished sake ever produced \u2014 technically classified at 0% (the law now rounds up from 0.85%, making pre-2019 bottles the only ones ever legally labeled \u20180%\u2019). IWC Gold + Trophy 2023. Kura Master Platinum. 5,297 hours of milling \u2014 over 221 days. Each bottle packaged in a handmade wooden box requiring three days of craftsman work. An artefact as much as a sake. One of 999 bottles produced per year.",
    bestWith: "Kaiseki, the finest shellfish, blue cheese, or simply alone",
    price: 9995,
    guestOneLiner:
      "Absolute 0 is the most extraordinary bottle on the list \u2014 and arguably the most remarkable sake ever produced. 221 days of milling. One of 999 bottles. The box alone takes a craftsman three days to make. It doesn\u2019t drink like sake \u2014 it drinks like a whisper. A firework that disappears the moment it arrives.",
  },
  {
    id: "senkin-modern",
    name: "Senkin Omachi Junmai Daiginjo \u2018Modern\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Tochigi",
    rice: "Omachi",
    polish: "50%",
    abv: "15-16%",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Green apple, mango, honeydew, grape, bamboo, and simple syrup. Fresh, vivid, and modern.",
    palate:
      "Off-dry. Medium acidity. Medium body with a slightly effervescent quality. Melon, pear, grapefruit, grape, and young banana \u2014 multi-layered and quaffable. Bright umami and a clean, pure finish. Medium-long.",
    story:
      "\u2018Modern\u2019 refers to the innovative brewing methods used \u2014 inspired by wine rather than traditional sake. Omachi is Japan\u2019s oldest sake rice, adding earthy depth and complexity to the modern, fruit-forward profile. Exceptional value for a Junmai Daiginjo.",
    bestWith: "Wide range, gifting, new sake drinkers",
    price: 90,
    guestOneLiner:
      "Modern is the gateway to great sake \u2014 using Omachi, Japan\u2019s oldest rice, with winemaking-inspired techniques. Vibrant, layered, and extraordinary value for a Junmai Daiginjo. It\u2019s the bottle we recommend when a guest wants to understand what makes sake special.",
  },
  {
    id: "divine-droplets",
    name: "Toko Junmai Daiginjo \u2018Divine Droplets\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Yamagata",
    rice: "Dewasansan",
    methodTags: ["Shizuku"],
    appearance: "Clear, pale lemon. Exceptional clarity from shizuku method.",
    nose: "Pronounced intensity. Lychee, wild strawberry, grapefruit, white flowers, and elegance. Ultraluxe and fragrant.",
    palate:
      "Off-dry. Medium acidity. Light to medium body with extraordinary delicacy. Shizuku pressing means no mechanical pressure was applied \u2014 only gravity. Stone fruit, citrus, and a graceful, dry finish. Very long.",
    story:
      "The shizuku method means only the most delicate fraction of the sake is collected \u2014 the essence of Dewasansan rice in its purest form. From the same brewery as Sun Rise, but taken to its ultimate expression. One of Japan\u2019s oldest breweries, founded in 1579.",
    bestWith: "Omakase, delicate white fish, the most refined dishes",
    price: 174,
    guestOneLiner:
      "Divine Droplets is made using the shizuku method \u2014 no pressing at all, just gravity. The sake drips through the cloth by its own weight. It\u2019s the purest expression possible from a brewery founded 445 years ago. Extraordinary delicacy.",
  },
  {
    id: "demon-slayer",
    name: "Wakatake Onikoroshi Junmai Daiginjo \u2018Demon Slayer\u2019",
    category: "Junmai Daiginjo",
    prefecture: "Shizuoka",
    rice: "Yamada Nishiki / Gohyakumangoku / Aichinokaori",
    polish: "48-50%",
    abv: "16.5%",
    smv: "0",
    acidity: "1.5",
    methodTags: ["Genshu"],
    appearance: "Clear, pale lemon. Slightly viscous from genshu format.",
    nose: "Pronounced. Plum, melon, peach, cantaloupe, banana, and honey. Rich, ripe, and immediately inviting.",
    palate:
      "Off-dry. Medium acidity. Medium-full body (genshu richness). Silky, creamy texture. Tropical fruit \u2014 banana, peach, melon \u2014 with honey and a touch of anise. The 16.5% ABV adds warmth and depth. Crisp, dry, zesty finish. Long.",
    story:
      "One of the best-selling junmai daiginjo in the US \u2014 and deservedly so. The undiluted genshu style adds depth and texture rare at this price. Shizuoka yeast gives unusually high aromatics and silky texture. Also shows well slightly warmed.",
    bestWith:
      "Sushi, sashimi, oysters \u2014 and surprisingly also gently warmed",
    price: 98,
    guestOneLiner:
      "Demon Slayer is one of America\u2019s favourite premium sakes \u2014 undiluted, silky, rich, with tropical fruit and this beautiful warm depth. It\u2019s also one of the rare daiginjo that\u2019s worth trying slightly warmed \u2014 it transforms completely.",
  },

  // ─── HONJOZO ────────────────────────────────────────────────────────────────
  {
    id: "ban-ryu-bottle",
    name: "Eiko Fuji Honjozo \u2018Ban Ryu \u2014 10,000 Ways\u2019",
    category: "Honjozo",
    prefecture: "Yamagata",
    rice: "Local Yamagata table rice",
    polish: "65%",
    abv: "15.3%",
    smv: "+1",
    methodTags: [],
    nose: "Black currant, whisper of licorice, gentle cereal. Light, clean, versatile.",
    palate:
      "Minimal umami, crisp finish. Genuinely serves warm, room temperature, or chilled.",
    story:
      "Named for the 10,000 ways sake can differ \u2014 yeast, koji, timing, water. An honest, unpretentious sake from one of Yamagata\u2019s oldest family breweries (est. 1778, 13th generation).",
    bestWith: "Anything \u2014 its name is its promise",
    price: 70,
    guestOneLiner:
      "10,000 Ways is the most versatile sake we carry \u2014 it genuinely works at any temperature with any food. Named for the infinite variables that make every sake unique.",
  },
  {
    id: "atago-no-matsu",
    name: "Niizawa Jozoten Tokubetsu Honjozo \u2018Atago No Matsu\u2019",
    category: "Honjozo",
    prefecture: "Miyagi",
    rice: "Yamada Nishiki (Grade A, Hyogo)",
    polish: "60%",
    abv: "15.5%",
    smv: "+7",
    acidity: "1.6",
    methodTags: [],
    appearance: "Slightly golden hue",
    nose: "Honeysuckle, wild strawberry, tropical fruit, and herbal floral lift. Unusually expressive for a honjozo.",
    palate:
      "Dry (SMV +7). Medium-high acidity. Light to medium body. Dynamic and precise \u2014 tart wild strawberry, green herbs, raspberry, mild creaminess. Clean, dry finish. Medium length.",
    story:
      "The same brewery that produces the $2,850 Zankyo and $9,995 Reikyo uses Grade A Yamada Nishiki \u2014 rice normally reserved for premium daiginjo \u2014 in a honjozo sake. This reflects their philosophy of brewing the ultimate food sake at every price point. Outstanding value.",
    bestWith: "Oysters, fluke, scallops, delicate raw fish",
    price: 65,
    guestOneLiner:
      "Atago No Matsu is made by the same brewery as our $2,850 Zankyo \u2014 they use the finest Yamada Nishiki from Hyogo in a honjozo. Their philosophy is that every price point deserves the best rice. Extraordinary value, and one of the best food sakes on the list.",
  },
  {
    id: "sword-of-the-sun",
    name: "Takatenjin Tokubetsu Honjozo \u2018Sword of the Sun\u2019",
    category: "Honjozo",
    prefecture: "Shizuoka",
    rice: "Yamada Nishiki (koji) + Haenuki (main mash)",
    polish: "60%",
    abv: "15.5%",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Cucumber, Asian pear, marzipan, sweet almond, butter, and distinctive botanical notes \u2014 juniper, fresh herbs. Unique and compelling.",
    palate:
      "Off-dry. Medium acidity. Light to medium body. Melon, pear, banana, cucumber, and a butter-tinged sweetness balanced by clean acidity. Bright and refreshing with excellent depth for the grade. Medium-long finish.",
    story:
      "Technically milled to ginjo level but intentionally classified as Tokubetsu Honjozo to position it as a session sake. The brewery employees\u2019 own daily drink. The gin-like botanical character is unique in the sake world. Solar powered brewery (est. 1868).",
    bestWith: "Prawns, beets, salads, lighter fare",
    price: 74,
    guestOneLiner:
      "Sword of the Sun has this extraordinary gin-like quality \u2014 juniper, cucumber, marzipan \u2014 unlike anything else in sake. The brewery mills it to ginjo level but calls it honjozo so it\u2019s affordable enough to drink every day. It\u2019s what the staff drink.",
  },
  {
    id: "endless-summer",
    name: "Tensei Tokubetsu Honjozo \u2018Endless Summer\u2019",
    category: "Honjozo",
    prefecture: "Kanagawa",
    rice: "Gohyakumangoku",
    polish: "60%",
    abv: "15%",
    methodTags: [],
    appearance: "Clear, pale lemon",
    nose: "Fresh melon, apple, and a distinctive oceanic salinity \u2014 briny, coastal, and immediate.",
    palate:
      "Off-dry. Medium acidity. Light to medium body. Sessionable and lively \u2014 melon, apple, yeasty notes, and a defining salted melon finish with oceanic freshness. Clean and dry. Short to medium finish.",
    story:
      "From the Shonan coast of Kanagawa \u2014 Japan\u2019s surfer culture heartland. The brewery also operates a beer brewery, restaurants, a bakery, and an art gallery on site (est. 1872). Bright, briny, and built for enjoyment.",
    bestWith: "Ceviche, citrus dishes, aperitif \u2014 the summer sake",
    price: 90,
    guestOneLiner:
      "Endless Summer comes from the Shonan coast \u2014 Japan\u2019s surf culture \u2014 and you can taste it. Briny, fresh, with this beautiful salted melon quality. The perfect aperitif.",
  },

  // ─── SPARKLING ──────────────────────────────────────────────────────────────
  {
    id: "seaside-sparkling",
    name: "Fukucho \u2018Seaside\u2019 Junmai Sparkling",
    category: "Sparkling",
    prefecture: "Hiroshima",
    rice: "Nakate Shinsenbon + Hattannishiki",
    polish: "60-70%",
    abv: "13%",
    smv: "-40",
    methodTags: ["White Koji", "Sparkling"],
    appearance:
      "Lightly hazy from bottle fermentation sediment. Pale lemon with fine, persistent effervescence.",
    nose: "Elderflower, cedar, lemon, grapefruit, guava, and koji rice. White koji gives a citric brightness unlike any other sparkling sake.",
    palate:
      "Dry to off-dry (SMV -40 belies the actual tart character \u2014 white koji citric acid dominates). Very high acidity. Light body. Tight, fine bubbles. Grapefruit, lemon, yuzu \u2014 with creamy rice texture and a long, mineral, saline finish.",
    story:
      "Toji Miho Imada (the same female toji behind Moon on the Water) uses white koji \u2014 shiroji \u2014 which produces citric acid rather than the usual lactic acid. Combined with secondary bottle fermentation, this is closer to p\u00e9tillant naturel than most sparkling sake. A wine lover\u2019s sake.",
    bestWith: "Oysters, shellfish, seafood \u2014 ideally to open a meal",
    price: 90,
    priceLabel: "500ml",
    guestOneLiner:
      "Seaside is from the same toji as Moon on the Water \u2014 Miho Imada, Japan\u2019s only female brewery owner. She uses a rare white koji that creates a citric, wine-like acidity, then bottles it for secondary fermentation like Champagne. Extraordinary with our oysters and shellfish.",
  },
  {
    id: "the-gentleman-bottle",
    name: "Hamakawa Shoten Tokubetsu Junmai \u2018The Gentleman\u2019",
    category: "Sparkling",
    prefecture: "Kochi",
    rice: "Yamada Nishiki",
    polish: "60%",
    abv: "15%",
    methodTags: [],
    nose: "Off-dry, medium-high acidity (Kochi tradition), medium body, smooth and silky.",
    palate: "Balanced and food-forward, clean dry finish.",
    story:
      "The bottle format of the BTG pour \u2014 same producer, larger format. Kochi\u2019s bright acidity and food-focused style at its most accessible.",
    bestWith: "Wide range throughout the meal",
    price: 90,
    guestOneLiner:
      "The Gentleman by the bottle is the same beautiful sake as our glass pour \u2014 clean, bright, food-friendly, and one of the most reliable choices on the list for pairing throughout a meal.",
  },
];

export const SAKE_BOTTLE_QUICK_REF = [
  {
    name: "Chiyonosono Sacred Power",
    category: "Junmai Ginjo",
    price: "$90",
    character: "Coastal salinity, Shinriki rice",
    bestWith: "Raw bar, sashimi",
  },
  {
    name: "Fukucho Moon on the Water",
    category: "Junmai Ginjo",
    price: "$110",
    character: "Female toji, soft water, unfined",
    bestWith: "Shellfish, lobster",
  },
  {
    name: "Isojiman Pride of Seashore",
    category: "Junmai Ginjo",
    price: "$105",
    character: "Seaweed yeast, saline",
    bestWith: "Sashimi, raw fish",
  },
  {
    name: "Jinyu 100 Poems",
    category: "Junmai Ginjo",
    price: "$82",
    character: "Approachable, 300yr brewery",
    bestWith: "Wide range",
  },
  {
    name: "Jikon Senbon Nishiki",
    category: "Junmai Ginjo",
    price: "$100",
    character: "Cult producer, strawberry",
    bestWith: "Light dishes, sushi",
  },
  {
    name: "Toko Sun Rise",
    category: "Junmai Ginjo",
    price: "$98",
    character: "Yamagata GI, 1579 brewery",
    bestWith: "Delicate fish",
  },
  {
    name: "Kikuhime Yamahai Genshu",
    category: "Yamahai",
    price: "$320",
    character: "18.5% ABV, 10-20yr cellar",
    bestWith: "Game, aged cheese",
  },
  {
    name: "Mana 1751 True Vision",
    category: "Yamahai",
    price: "$100",
    character: "FK-3 yeast, single-tank",
    bestWith: "Lamb, spiced dishes",
  },
  {
    name: "Shiokawa Cowboy",
    category: "Yamahai",
    price: "$94",
    character: "Smoky, 3-person brewery",
    bestWith: "Steak, grilled meats",
  },
  {
    name: "Daimon Road to Osaka",
    category: "Nigori",
    price: "$78",
    character: "Light refined nigori",
    bestWith: "Fried foods, crab",
  },
  {
    name: "Rihaku Dreamy Clouds",
    category: "Usu-Nigori",
    price: "$120",
    character: "Dry, lean \u2014 invented dry nigori",
    bestWith: "White fish, sushi",
  },
  {
    name: "Hamafukutsuru",
    category: "Junmai Daiginjo",
    price: "$145",
    character: "Classic Nada style",
    bestWith: "Omakase, sashimi",
  },
  {
    name: "Bijofu Hina",
    category: "Junmai Daiginjo",
    price: "$120",
    character: "Kochi acidity, floral",
    bestWith: "Light dishes",
  },
  {
    name: "Jikon Omachi",
    category: "Junmai Daiginjo",
    price: "$990",
    character: "Rarest allocation, electric",
    bestWith: "Kaiseki, occasions",
  },
  {
    name: "Nanbu Bijin Southern Beauty",
    category: "Junmai Daiginjo",
    price: "$99",
    character: "IWC Champion, vegan/kosher",
    bestWith: "Omakase, wide range",
  },
  {
    name: "Zankyo Super 7",
    category: "Junmai Daiginjo",
    price: "$2,850",
    character: "7% polish, WA 98pts",
    bestWith: "Delicate sashimi",
  },
  {
    name: "Reikyo Absolute 0",
    category: "Junmai Daiginjo",
    price: "$9,995",
    character: "0.85% polish, world record",
    bestWith: "Kaiseki, shellfish",
  },
  {
    name: "Senkin Modern Omachi",
    category: "Junmai Daiginjo",
    price: "$90",
    character: "Old rice, modern methods",
    bestWith: "Wide range",
  },
  {
    name: "Toko Divine Droplets",
    category: "Junmai Daiginjo",
    price: "$174",
    character: "Shizuku pressed, 1579",
    bestWith: "Omakase, white fish",
  },
  {
    name: "Wakatake Demon Slayer",
    category: "Junmai Daiginjo",
    price: "$98",
    character: "Genshu, tropical, also warm",
    bestWith: "Sushi, sashimi",
  },
  {
    name: "Eiko Fuji Ban Ryu",
    category: "Honjozo",
    price: "$70",
    character: "True versatility",
    bestWith: "Anything",
  },
  {
    name: "Atago No Matsu",
    category: "Tokubetsu Honjozo",
    price: "$65",
    character: "Daiginjo rice, exceptional value",
    bestWith: "Oysters, raw fish",
  },
  {
    name: "Takatenjin Sword of Sun",
    category: "Tokubetsu Honjozo",
    price: "$74",
    character: "Gin-like, botanical",
    bestWith: "Prawns, salads",
  },
  {
    name: "Tensei Endless Summer",
    category: "Tokubetsu Honjozo",
    price: "$90",
    character: "Briny, coastal, surfer culture",
    bestWith: "Aperitif, ceviche",
  },
  {
    name: "Fukucho Seaside Sparkling",
    category: "Junmai Sparkling",
    price: "$90/500ml",
    character: "White koji, bottle fermented",
    bestWith: "Oysters, shellfish",
  },
  {
    name: "Hamakawa Gentleman",
    category: "Tokubetsu Junmai",
    price: "$90",
    character: "Kochi acidity, food-forward",
    bestWith: "Wide range",
  },
];

export const SAKE_BOTTLE_GUEST_GUIDANCE = [
  {
    scenario: "Guest wants to start exploring sake",
    recommendation:
      "Senkin Modern Omachi ($90), Nanbu Bijin Southern Beauty ($99), or Wakatake Demon Slayer ($98) \u2014 all reward curiosity without demanding prior knowledge.",
    bottles: ["senkin-modern", "southern-beauty", "demon-slayer"],
  },
  {
    scenario: "Guest knows and loves sake",
    recommendation:
      "Jikon Senbon Nishiki ($100), Toko Divine Droplets ($174), or Mana 1751 True Vision ($100) \u2014 producers and expressions that reward knowledge.",
    bottles: ["jikon-senbon-nishiki", "divine-droplets", "true-vision"],
  },
  {
    scenario: "Guest wants the most unique experience on the list",
    recommendation:
      "Mana 1751 True Vision (FK-3 yeast, single-tank), Shiokawa Cowboy (anti-Niigata), or Fukucho Seaside Sparkling (white koji) \u2014 all defy category expectations.",
    bottles: ["true-vision", "cowboy", "seaside-sparkling"],
  },
  {
    scenario: "Guest is celebrating something extraordinary",
    recommendation:
      "Zankyo Super 7 ($2,850) \u2014 the accessible pinnacle. For the truly extraordinary occasion: Reikyo Absolute 0 ($9,995).",
    bottles: ["zankyo-super-7", "reikyo-absolute-0"],
  },
  {
    scenario: "Guest wants something to pair throughout dinner",
    recommendation:
      "The Gentleman (Hamakawa, $90) or Eiko Fuji Ban Ryu ($70) \u2014 both designed to work with virtually any food at any temperature.",
    bottles: ["the-gentleman-bottle", "ban-ryu-bottle"],
  },
  {
    scenario: "Wine drinker being introduced to sake",
    recommendation:
      "Fukucho Moon on the Water (wine-like, unfined, herbal), Fukucho Seaside Sparkling (Champagne method, citric), or Rihaku Dreamy Clouds (dry, nutty \u2014 nothing like what they expect from nigori).",
    bottles: ["moon-on-the-water", "seaside-sparkling", "dreamy-clouds"],
  },
];

export function findSakeBottle(query: string): SakeBottle | undefined {
  const q = query.toLowerCase();
  return SAKE_BOTTLES.find(
    (b) =>
      q.includes(b.id) ||
      q.includes(b.name.toLowerCase()) ||
      (b.id === "sacred-power" &&
        (q.includes("sacred power") ||
          q.includes("chiyonosono") ||
          q.includes("shinriki"))) ||
      (b.id === "moon-on-the-water" &&
        (q.includes("moon on the water") ||
          q.includes("fukucho") ||
          (q.includes("moon") && q.includes("ginjo")))) ||
      (b.id === "pride-of-the-seashore" &&
        (q.includes("pride of the seashore") ||
          q.includes("isojiman") ||
          q.includes("seashore"))) ||
      (b.id === "100-poems" &&
        (q.includes("100 poems") ||
          q.includes("jinyu") ||
          q.includes("hundred poems"))) ||
      (b.id === "jikon-senbon-nishiki" &&
        (q.includes("jikon senbon") || q.includes("senbon nishiki"))) ||
      (b.id === "sun-rise" &&
        (q.includes("sun rise") ||
          (q.includes("toko") && q.includes("ginjo")) ||
          q.includes("dewasansan sake"))) ||
      (b.id === "kikuhime-yamahai" &&
        (q.includes("kikuhime") ||
          (q.includes("yamahai") &&
            q.includes("genshu") &&
            q.includes("ginjo")))) ||
      (b.id === "true-vision" &&
        (q.includes("true vision") ||
          q.includes("mana 1751") ||
          q.includes("mana sake"))) ||
      (b.id === "cowboy" &&
        (q.includes("cowboy sake") || q.includes("shiokawa"))) ||
      (b.id === "road-to-osaka-bottle" &&
        (q.includes("road to osaka") || q.includes("daimon"))) ||
      (b.id === "dreamy-clouds" &&
        (q.includes("dreamy clouds") || q.includes("rihaku"))) ||
      (b.id === "hamafukutsuru" &&
        (q.includes("hamafukutsuru") || q.includes("nada daiginjo"))) ||
      (b.id === "bijofu-hina" &&
        (q.includes("bijofu hina") ||
          q.includes("hina sake") ||
          (q.includes("bijofu") && q.includes("daiginjo")))) ||
      (b.id === "jikon-omachi" &&
        (q.includes("jikon omachi") || q.includes("tsukuto omachi"))) ||
      (b.id === "southern-beauty" &&
        (q.includes("southern beauty") || q.includes("nanbu bijin"))) ||
      (b.id === "zankyo-super-7" &&
        (q.includes("zankyo") ||
          q.includes("super 7") ||
          q.includes("reverberation sake"))) ||
      (b.id === "reikyo-absolute-0" &&
        (q.includes("reikyo") ||
          q.includes("absolute 0") ||
          q.includes("absolute zero sake"))) ||
      (b.id === "senkin-modern" &&
        (q.includes("senkin") || q.includes("senkin modern"))) ||
      (b.id === "divine-droplets" &&
        (q.includes("divine droplets") ||
          (q.includes("toko") && q.includes("daiginjo")) ||
          q.includes("shizuku sake"))) ||
      (b.id === "demon-slayer" &&
        (q.includes("demon slayer sake") ||
          q.includes("wakatake") ||
          q.includes("onikoroshi"))) ||
      (b.id === "ban-ryu-bottle" &&
        (q.includes("ban ryu bottle") ||
          (q.includes("eiko fuji") && q.includes("bottle")))) ||
      (b.id === "atago-no-matsu" &&
        (q.includes("atago no matsu") || q.includes("atago"))) ||
      (b.id === "sword-of-the-sun" &&
        (q.includes("sword of the sun") || q.includes("takatenjin"))) ||
      (b.id === "endless-summer" &&
        (q.includes("endless summer") || q.includes("tensei"))) ||
      (b.id === "seaside-sparkling" &&
        (q.includes("seaside") ||
          (q.includes("fukucho") && q.includes("sparkling")))) ||
      (b.id === "the-gentleman-bottle" &&
        (q.includes("gentleman bottle") ||
          (q.includes("the gentleman") && q.includes("bottle")))),
  );
}
