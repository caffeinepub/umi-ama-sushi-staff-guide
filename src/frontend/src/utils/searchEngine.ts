import { COCKTAILS } from "@/data/cocktailData";
import { GLOSSARY_TERMS } from "@/data/glossaryData";
import { ALL_MENU_ITEMS } from "@/data/menuData";
import { SAKE_BOTTLES } from "@/data/sakeBottleData";
import { SAKES } from "@/data/sakeData";
import { WHITE_BURGUNDY_WINES } from "@/data/whiteBurgundyData";
import { WINE_BOTTLES } from "@/data/wineBottleData";
import { WINES } from "@/data/wineData";

export type SearchTab = "study" | "glossary";
export type StudySection =
  | "menu"
  | "wine"
  | "wine-bottle"
  | "sake"
  | "sake-bottle"
  | "white-burgundy"
  | "cocktail";

export type SearchResult = {
  id: string;
  category: string;
  label: string;
  sublabel: string;
  navigateTo: {
    tab: SearchTab;
    section?: StudySection;
  };
};

function normalize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matches(query: string, ...fields: (string | undefined)[]): boolean {
  const q = normalize(query);
  return fields.some((f) => f && normalize(f).includes(q));
}

function truncate(str: string, len = 70): string {
  if (!str) return "";
  return str.length > len ? `${str.slice(0, len).trimEnd()}…` : str;
}

const MAX_PER_CATEGORY = 5;

export function searchAll(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const results: SearchResult[] = [];

  // ── Menu items ──────────────────────────────────────────────────────────────
  const menuMatches: SearchResult[] = [];
  for (const item of ALL_MENU_ITEMS) {
    const dietaryStr = item.dietary.map((d) => d.name).join(" ");
    if (
      matches(query, item.name, item.description, item.ingredients, dietaryStr)
    ) {
      menuMatches.push({
        id: `menu-${item.name}`,
        category: "Menu",
        label: item.name,
        sublabel: truncate(item.description),
        navigateTo: { tab: "study", section: "menu" },
      });
      if (menuMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...menuMatches);

  // ── Wine by Glass ────────────────────────────────────────────────────────────
  const wineGlassMatches: SearchResult[] = [];
  for (const wine of WINES) {
    if (
      matches(
        query,
        wine.name,
        wine.region,
        wine.grapes,
        wine.tastingNotes,
        wine.guestOneLiner,
      )
    ) {
      wineGlassMatches.push({
        id: `wine-glass-${wine.id}`,
        category: "Wine by Glass",
        label: wine.name,
        sublabel: truncate(wine.guestOneLiner || wine.region),
        navigateTo: { tab: "study", section: "wine" },
      });
      if (wineGlassMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...wineGlassMatches);

  // ── Wine Bottles ─────────────────────────────────────────────────────────────
  const wineBottleMatches: SearchResult[] = [];
  for (const bottle of WINE_BOTTLES) {
    const tagsStr = (bottle.tags ?? []).join(" ");
    if (
      matches(
        query,
        bottle.name,
        bottle.vintage,
        bottle.region,
        bottle.grapes,
        bottle.profile,
        bottle.guestOneLiner,
        tagsStr,
      )
    ) {
      wineBottleMatches.push({
        id: `wine-bottle-${bottle.id}`,
        category: "Wine Bottles",
        label: bottle.vintage
          ? `${bottle.vintage} ${bottle.name}`
          : bottle.name,
        sublabel: truncate(bottle.guestOneLiner || bottle.region),
        navigateTo: { tab: "study", section: "wine-bottle" },
      });
      if (wineBottleMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...wineBottleMatches);

  // ── Sake by Glass ────────────────────────────────────────────────────────────
  const sakeGlassMatches: SearchResult[] = [];
  for (const sake of SAKES) {
    if (
      matches(
        query,
        sake.name,
        sake.classification,
        sake.region,
        sake.rice,
        sake.aroma,
        sake.palate,
        sake.guestOneLiner,
      )
    ) {
      sakeGlassMatches.push({
        id: `sake-glass-${sake.id}`,
        category: "Sake by Glass",
        label: sake.name,
        sublabel: truncate(sake.guestOneLiner || sake.classification),
        navigateTo: { tab: "study", section: "sake" },
      });
      if (sakeGlassMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...sakeGlassMatches);

  // ── Sake Bottles ─────────────────────────────────────────────────────────────
  const sakeBottleMatches: SearchResult[] = [];
  for (const bottle of SAKE_BOTTLES) {
    const methodStr = bottle.methodTags.join(" ");
    if (
      matches(
        query,
        bottle.name,
        bottle.prefecture,
        bottle.rice,
        methodStr,
        bottle.nose,
        bottle.palate,
        bottle.guestOneLiner,
      )
    ) {
      sakeBottleMatches.push({
        id: `sake-bottle-${bottle.id}`,
        category: "Sake Bottles",
        label: bottle.name,
        sublabel: truncate(bottle.guestOneLiner || bottle.prefecture),
        navigateTo: { tab: "study", section: "sake-bottle" },
      });
      if (sakeBottleMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...sakeBottleMatches);

  // ── White Burgundy ────────────────────────────────────────────────────────────
  const whiteBurgundyMatches: SearchResult[] = [];
  for (const wine of WHITE_BURGUNDY_WINES) {
    if (
      matches(
        query,
        wine.name,
        wine.appellation,
        wine.village,
        wine.tastingNotes,
        wine.guestOneLiner,
      )
    ) {
      whiteBurgundyMatches.push({
        id: `white-burgundy-${wine.id}`,
        category: "White Burgundy",
        label: wine.name,
        sublabel: truncate(wine.guestOneLiner || wine.appellation),
        navigateTo: { tab: "study", section: "white-burgundy" },
      });
      if (whiteBurgundyMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...whiteBurgundyMatches);

  // ── Cocktails ─────────────────────────────────────────────────────────────────
  const cocktailMatches: SearchResult[] = [];
  for (const cocktail of COCKTAILS) {
    const ingredientsStr = cocktail.ingredients.join(" ");
    if (
      matches(
        query,
        cocktail.name,
        cocktail.japaneseMeaning,
        cocktail.style,
        ingredientsStr,
        cocktail.description,
        cocktail.guestOneLiner,
      )
    ) {
      cocktailMatches.push({
        id: `cocktail-${cocktail.id}`,
        category: "Cocktails",
        label: cocktail.name,
        sublabel: truncate(cocktail.guestOneLiner || cocktail.style),
        navigateTo: { tab: "study", section: "cocktail" },
      });
      if (cocktailMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...cocktailMatches);

  // ── Glossary ──────────────────────────────────────────────────────────────────
  const glossaryMatches: SearchResult[] = [];
  for (const term of GLOSSARY_TERMS) {
    if (matches(query, term.term, term.definition)) {
      glossaryMatches.push({
        id: `glossary-${term.term}`,
        category: "Glossary",
        label: term.term,
        sublabel: truncate(term.definition, 70),
        navigateTo: { tab: "glossary" },
      });
      if (glossaryMatches.length >= MAX_PER_CATEGORY) break;
    }
  }
  results.push(...glossaryMatches);

  return results;
}
