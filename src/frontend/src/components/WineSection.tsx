import { Badge } from "@/components/ui/badge";
import { WINES, WINE_CATEGORIES, type WineCategory } from "@/data/wineData";
import {
  ChevronDown,
  ChevronUp,
  GlassWater,
  Grape,
  MapPin,
  Quote,
  UtensilsCrossed,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CATEGORY_COLORS: Record<
  WineCategory,
  { bg: string; text: string; border: string; badge: string }
> = {
  champagne: {
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
  rose: {
    bg: "bg-rose/10",
    text: "text-rose",
    border: "border-rose/30",
    badge: "bg-rose/15 text-rose border-rose/30",
  },
  red: {
    bg: "bg-destructive/8",
    text: "text-destructive",
    border: "border-destructive/25",
    badge: "bg-destructive/12 text-destructive border-destructive/25",
  },
};

const GLASSWARE_BADGE_COLORS: Record<string, string> = {
  "Champagne flute": "bg-gold/10 text-gold border-gold/25",
  Burgundy: "bg-highlight/10 text-highlight border-highlight/25",
  Bordeaux: "bg-destructive/10 text-destructive border-destructive/25",
  "All-Purpose (AP)": "bg-secondary text-muted-foreground border-border",
};

function WineCard({
  wine,
  index,
}: { wine: (typeof WINES)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const colors = CATEGORY_COLORS[wine.category];
  const glassBadge =
    GLASSWARE_BADGE_COLORS[wine.glassware] ??
    GLASSWARE_BADGE_COLORS["All-Purpose (AP)"];

  return (
    <motion.article
      data-ocid={`wine.card.${index}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index - 1) * 0.05 }}
      className="bg-card rounded-lg shadow-card overflow-hidden"
    >
      <div className="p-5 md:p-6">
        {/* Header row */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl text-foreground leading-snug mb-1">
              {wine.name}
            </h3>
            {wine.pronunciation && (
              <p className="font-sans text-xs text-muted-foreground italic">
                Pronounced:{" "}
                <span className="text-gold font-medium not-italic">
                  {wine.pronunciation}
                </span>
              </p>
            )}
          </div>
          {/* Price block */}
          <div className="flex-shrink-0 text-right">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl text-gold font-medium">
                ${wine.glassPrice}
              </span>
              <span className="font-sans text-xs text-muted-foreground">
                /glass
              </span>
            </div>
            <div className="font-sans text-xs text-muted-foreground">
              ${wine.bottlePrice} bottle
            </div>
          </div>
        </div>

        {/* Region + Grapes + Glassware row */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full border ${glassBadge}`}
          >
            <GlassWater className="w-3 h-3" />
            {wine.glassware}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <MapPin className="w-3 h-3" />
            {wine.region}
          </span>
        </div>

        {/* Grapes */}
        <div className="flex items-start gap-2 mb-4">
          <Grape className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="font-sans text-sm text-foreground">{wine.grapes}</p>
        </div>

        {/* Tasting Notes */}
        <div className="mb-4 p-3 bg-secondary/60 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Tasting Notes
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {wine.tastingNotes}
          </p>
        </div>

        {/* Expandable section: Winemaking + Key Facts */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors duration-150 mb-3"
          aria-expanded={expanded}
        >
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
          {expanded ? "Hide" : "Show"} Winemaking &amp; Key Facts
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
                    Winemaking
                  </p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {wine.winemaking}
                  </p>
                </div>
                <div className="p-3 bg-secondary/40 rounded-md">
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Key Facts
                  </p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {wine.keyFacts}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Food Pairing at AMA */}
        {wine.foodPairing && (
          <div
            className={`flex items-start gap-2 p-3 rounded-md border mb-4 ${colors.bg} ${colors.border}`}
          >
            <UtensilsCrossed
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`}
            />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                Pairs with at AMA
              </p>
              <p className="font-sans text-sm text-foreground">
                {wine.foodPairing}
              </p>
            </div>
          </div>
        )}

        {/* Guest One-Liner */}
        <div
          className={`flex items-start gap-3 p-3 rounded-md border ${colors.bg} ${colors.border}`}
        >
          <Quote className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
          <p className="font-serif text-sm text-foreground italic leading-relaxed">
            "{wine.guestOneLiner}"
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function WineSection() {
  const [activeCategory, setActiveCategory] = useState<WineCategory | "all">(
    "all",
  );

  const filtered =
    activeCategory === "all"
      ? WINES
      : WINES.filter((w) => w.category === activeCategory);

  // Build a flat index for data-ocid across the filtered list
  const winesByCategory =
    activeCategory === "all"
      ? WINE_CATEGORIES.map((cat) => ({
          ...cat,
          wines: WINES.filter((w) => w.category === cat.id),
        }))
      : [
          {
            id: activeCategory,
            label:
              WINE_CATEGORIES.find((c) => c.id === activeCategory)?.label ?? "",
            wines: filtered,
          },
        ];

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="mb-8 -mx-4 px-4 overflow-x-auto scrollbar-thin">
        <div className="flex gap-2 min-w-max pb-1">
          <button
            type="button"
            data-ocid="wine.category.tab"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            All Wines
          </button>
          {WINE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              data-ocid="wine.category.tab"
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

      {/* Wine Cards grouped by category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          {winesByCategory.map((group) => {
            if (group.wines.length === 0) return null;
            // Compute flat index across all wines (for stable data-ocid)
            const startIdx =
              activeCategory === "all"
                ? WINES.findIndex((w) => w.id === group.wines[0].id) + 1
                : 1;
            return (
              <div key={group.id}>
                {/* Category heading (only show in "all" view) */}
                {activeCategory === "all" && (
                  <div className="mb-5 flex items-center gap-4">
                    <h3 className="font-serif text-2xl text-foreground">
                      {group.label}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                    <Badge
                      variant="secondary"
                      className="font-sans text-xs shrink-0"
                    >
                      {group.wines.length}{" "}
                      {group.wines.length === 1 ? "wine" : "wines"}
                    </Badge>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4">
                  {group.wines.map((wine, i) => (
                    <WineCard key={wine.id} wine={wine} index={startIdx + i} />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Quick Reference Table */}
      {activeCategory === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 bg-card rounded-lg shadow-card overflow-hidden"
        >
          <div className="p-5 md:p-6 border-b border-border">
            <h3 className="font-serif text-xl text-foreground">
              Quick Reference
            </h3>
            <p className="font-sans text-sm text-muted-foreground mt-1">
              Prices and glassware at a glance
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
                    Type
                  </th>
                  <th className="text-right px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    Glass
                  </th>
                  <th className="text-right px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    Bottle
                  </th>
                </tr>
              </thead>
              <tbody>
                {WINES.map((wine, i) => (
                  <tr
                    key={wine.id}
                    className={`border-b border-border/50 hover:bg-secondary/40 transition-colors ${
                      i % 2 === 0 ? "" : "bg-secondary/20"
                    }`}
                  >
                    <td className="px-5 py-3 text-foreground font-medium leading-snug">
                      <span className="line-clamp-2">{wine.name}</span>
                    </td>
                    <td className="px-3 py-3 hidden sm:table-cell">
                      <span
                        className={`inline-block text-xs px-2 py-0.5 rounded-full border capitalize ${
                          CATEGORY_COLORS[wine.category].badge
                        }`}
                      >
                        {wine.category === "rose"
                          ? "Rosé"
                          : wine.category.charAt(0).toUpperCase() +
                            wine.category.slice(1)}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right text-gold font-medium">
                      ${wine.glassPrice}
                    </td>
                    <td className="px-5 py-3 text-right text-muted-foreground">
                      ${wine.bottlePrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}
