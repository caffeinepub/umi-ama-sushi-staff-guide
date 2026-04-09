import { Badge } from "@/components/ui/badge";
import {
  WINE_BOTTLES,
  WINE_BOTTLE_CATEGORIES,
  WINE_BOTTLE_GUEST_GUIDANCE,
  WINE_BOTTLE_QUICK_REF,
  type WineBottle,
  type WineBottleCategory,
} from "@/data/wineBottleData";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  MapPin,
  Quote,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CATEGORY_COLORS: Record<
  WineBottleCategory,
  { bg: string; text: string; border: string; badge: string }
> = {
  sparkling: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/30",
    badge: "bg-gold/15 text-gold border-gold/30",
  },
  white: {
    bg: "bg-highlight/8",
    text: "text-highlight",
    border: "border-highlight/25",
    badge: "bg-highlight/12 text-highlight border-highlight/25",
  },
  rosé: {
    bg: "bg-rose/10",
    text: "text-rose",
    border: "border-rose/30",
    badge: "bg-rose/15 text-rose border-rose/30",
  },
  red: {
    bg: "bg-red-950/10",
    text: "text-red-700 dark:text-red-400",
    border: "border-red-800/25 dark:border-red-600/25",
    badge:
      "bg-red-100/80 text-red-800 border-red-300/60 dark:bg-red-950/30 dark:text-red-300 dark:border-red-700/40",
  },
};

const TAG_COLORS: Record<string, string> = {
  "Grand Cru": "bg-gold/12 text-gold border-gold/30",
  "Prestige Cuvée":
    "bg-amber-100/80 text-amber-700 border-amber-300/60 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700/40",
  "Grower Champagne":
    "bg-emerald-100/80 text-emerald-700 border-emerald-300/60 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700/40",
  Biodynamic:
    "bg-lime-100/80 text-lime-700 border-lime-300/60 dark:bg-lime-900/20 dark:text-lime-300 dark:border-lime-700/40",
  "White Burgundy": "bg-highlight/12 text-highlight border-highlight/30",
  "At Peak": "bg-rose/12 text-rose border-rose/30",
};

function getTagColor(tag: string): string {
  for (const [key, val] of Object.entries(TAG_COLORS)) {
    if (tag.includes(key)) return val;
  }
  return "bg-secondary text-muted-foreground border-border";
}

function WineBottleCard({
  bottle,
  index,
}: {
  bottle: WineBottle;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const colors = CATEGORY_COLORS[bottle.category];

  return (
    <motion.article
      data-ocid={`wine-bottle.bottle_card.${index}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index - 1) * 0.04 }}
      className="bg-card rounded-lg shadow-card overflow-hidden"
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h3 className="font-serif text-xl text-foreground leading-snug">
                {bottle.name}
              </h3>
              {bottle.vintage !== "NV" && (
                <span className="font-sans text-sm text-muted-foreground font-medium">
                  {bottle.vintage}
                </span>
              )}
              {bottle.vintage === "NV" && (
                <span className="font-sans text-xs text-muted-foreground italic">
                  Non-Vintage
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span
                className={`inline-flex items-center text-xs font-sans px-2.5 py-1 rounded-full border font-medium capitalize ${colors.badge}`}
              >
                {bottle.category}
              </span>
              {bottle.tags?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center text-xs font-sans px-2.5 py-1 rounded-full border font-medium ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex-shrink-0 text-right">
            <div className="font-serif text-2xl text-gold font-medium leading-none">
              {bottle.price.split(" ")[0]}
            </div>
            {bottle.price.includes("(") && (
              <div className="font-sans text-xs text-muted-foreground mt-0.5">
                {bottle.price.match(/\(.*?\)/)?.[0] ?? ""}
              </div>
            )}
          </div>
        </div>

        {/* Location + Grapes */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <MapPin className="w-3 h-3" />
            {bottle.region}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            {bottle.grapes}
          </span>
        </div>

        {/* Tasting Profile */}
        <div className="mb-4 p-3 bg-secondary/60 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Tasting Profile
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {bottle.profile}
          </p>
        </div>

        {/* Expandable: Story + Best With */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          data-ocid={`wine-bottle.story_toggle.${index}`}
          className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors duration-150 mb-3"
          aria-expanded={expanded}
        >
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
          {expanded ? "Hide" : "Show"} Producer Story &amp; Best With
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-secondary/40 rounded-md">
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    The Producer
                  </p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {bottle.story}
                  </p>
                </div>
                <div
                  className={`flex items-start gap-2 p-3 rounded-md border ${colors.bg} ${colors.border}`}
                >
                  <UtensilsCrossed
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`}
                  />
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      Best With
                    </p>
                    <p className="font-sans text-sm text-foreground">
                      {bottle.bestWith}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guest One-Liner */}
        <div
          className={`flex items-start gap-3 p-3 rounded-md border ${colors.bg} ${colors.border}`}
        >
          <Quote className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
          <p className="font-serif text-sm text-foreground italic leading-relaxed">
            &ldquo;{bottle.guestOneLiner}&rdquo;
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function WineBottleSection() {
  const [activeCategory, setActiveCategory] = useState<
    WineBottleCategory | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? WINE_BOTTLES
      : WINE_BOTTLES.filter((w) => w.category === activeCategory);

  const grouped =
    activeCategory === "all"
      ? WINE_BOTTLE_CATEGORIES.map((cat) => ({
          ...cat,
          bottles: WINE_BOTTLES.filter((w) => w.category === cat.id),
        }))
      : [
          {
            id: activeCategory,
            label:
              WINE_BOTTLE_CATEGORIES.find((c) => c.id === activeCategory)
                ?.label ?? "",
            bottles: filtered,
          },
        ];

  return (
    <div className="w-full" data-ocid="wine-bottle.section.panel">
      {/* Category Filter */}
      <div className="mb-8 -mx-4 px-4 overflow-x-auto scrollbar-thin">
        <div className="flex gap-2 min-w-max pb-1">
          <button
            type="button"
            data-ocid="wine-bottle.category.tab"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            All Wines
          </button>
          {WINE_BOTTLE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              data-ocid="wine-bottle.category.tab"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottle cards grouped by category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          {grouped.map((group) => {
            if (group.bottles.length === 0) return null;
            const catColors =
              CATEGORY_COLORS[group.id as WineBottleCategory] ??
              CATEGORY_COLORS.sparkling;
            return (
              <div key={group.id}>
                {activeCategory === "all" && (
                  <div className="mb-5 flex items-center gap-4">
                    <h3 className="font-serif text-2xl text-foreground">
                      {group.label}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                    <Badge
                      variant="secondary"
                      className={`font-sans text-xs shrink-0 border ${catColors.badge}`}
                    >
                      {group.bottles.length}{" "}
                      {group.bottles.length === 1 ? "bottle" : "bottles"}
                    </Badge>
                  </div>
                )}
                <div className="space-y-4">
                  {group.bottles.map((bottle) => {
                    const globalIdx = WINE_BOTTLES.indexOf(bottle) + 1;
                    return (
                      <WineBottleCard
                        key={bottle.id}
                        bottle={bottle}
                        index={globalIdx}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Quick Reference Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-12 mb-10 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <div className="p-5 md:p-6 border-b border-border">
          <h3 className="font-serif text-xl text-foreground">
            Quick Reference
          </h3>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            All bottles at a glance — category, price, and key character
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Wine
                </th>
                <th className="text-left px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden sm:table-cell">
                  Vintage
                </th>
                <th className="text-left px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden md:table-cell">
                  Category
                </th>
                <th className="text-right px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Price
                </th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden lg:table-cell">
                  Best With
                </th>
              </tr>
            </thead>
            <tbody>
              {WINE_BOTTLE_QUICK_REF.map((row, i) => {
                const catKey = row.category.toLowerCase() as WineBottleCategory;
                const catColor =
                  CATEGORY_COLORS[catKey] ?? CATEGORY_COLORS.sparkling;
                return (
                  <tr
                    key={`${row.name}-${i}`}
                    data-ocid={`wine-bottle.quick_ref.row.${i + 1}`}
                    className={`border-b border-border/50 hover:bg-secondary/40 transition-colors ${
                      i % 2 === 0 ? "" : "bg-secondary/20"
                    }`}
                  >
                    <td className="px-5 py-3 text-foreground font-medium leading-snug">
                      <span className="line-clamp-2">{row.name}</span>
                    </td>
                    <td className="px-3 py-3 text-muted-foreground hidden sm:table-cell">
                      {row.vintage}
                    </td>
                    <td className="px-3 py-3 hidden md:table-cell">
                      <span
                        className={`inline-block text-xs px-2 py-0.5 rounded-full border ${catColor.badge}`}
                      >
                        {row.category}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right text-gold font-semibold whitespace-nowrap">
                      {row.price}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground text-xs hidden lg:table-cell">
                      {row.bestWith}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Guest Guidance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        data-ocid="wine-bottle.guidance.panel"
        className="bg-card rounded-lg shadow-card overflow-hidden"
      >
        <div className="p-5 md:p-6 border-b border-border">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-gold" />
            <h3 className="font-serif text-xl text-foreground">
              Guest Guidance
            </h3>
          </div>
          <p className="font-sans text-sm text-muted-foreground">
            Scenario-based recommendations — guide any guest to the right bottle
            with confidence.
          </p>
        </div>
        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {WINE_BOTTLE_GUEST_GUIDANCE.map((item, i) => (
            <motion.div
              key={item.scenario}
              data-ocid={`wine-bottle.guidance.card.${i + 1}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.05, duration: 0.3 }}
              className="p-4 bg-secondary/40 rounded-lg border border-border/60"
            >
              <div className="flex items-start gap-2 mb-2">
                <Star className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-sm text-foreground font-semibold leading-snug">
                  {item.scenario}
                </p>
              </div>
              <p className="font-sans text-sm text-gold font-medium mb-1">
                {item.recommendation}
              </p>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                {item.rationale}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
