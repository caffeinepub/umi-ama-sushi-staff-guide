import { Badge } from "@/components/ui/badge";
import {
  SAKE_BOTTLES,
  SAKE_BOTTLE_CATEGORIES,
  SAKE_BOTTLE_GUEST_GUIDANCE,
  SAKE_BOTTLE_QUICK_REF,
  SAKE_BOTTLE_RICE_VARIETIES,
  SAKE_METHODS_GLOSSARY,
  type SakeBottle,
} from "@/data/sakeBottleData";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Leaf,
  MapPin,
  Quote,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// Category → color mapping
const CATEGORY_COLORS: Record<
  string,
  { bg: string; text: string; border: string; badge: string }
> = {
  "Junmai Ginjo": {
    bg: "bg-rose/8",
    text: "text-rose",
    border: "border-rose/25",
    badge: "bg-rose/12 text-rose border-rose/25",
  },
  Yamahai: {
    bg: "bg-amber-500/8",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/25",
    badge:
      "bg-amber-100/80 text-amber-700 border-amber-300/60 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700/40",
  },
  Nigori: {
    bg: "bg-sky-500/8",
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-400/25",
    badge:
      "bg-sky-100/80 text-sky-700 border-sky-300/60 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-700/40",
  },
  "Junmai Daiginjo": {
    bg: "bg-gold/8",
    text: "text-gold",
    border: "border-gold/25",
    badge: "bg-gold/12 text-gold border-gold/25",
  },
  Honjozo: {
    bg: "bg-highlight/8",
    text: "text-highlight",
    border: "border-highlight/25",
    badge: "bg-highlight/12 text-highlight border-highlight/25",
  },
  Sparkling: {
    bg: "bg-cyan-500/8",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-400/25",
    badge:
      "bg-cyan-100/80 text-cyan-700 border-cyan-300/60 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-700/40",
  },
};

const METHOD_TAG_COLORS: Record<string, string> = {
  Yamahai:
    "bg-amber-100/80 text-amber-700 border-amber-300/60 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700/40",
  Genshu:
    "bg-orange-100/80 text-orange-700 border-orange-300/60 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-700/40",
  Muroka:
    "bg-emerald-100/80 text-emerald-700 border-emerald-300/60 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700/40",
  Nigori:
    "bg-sky-100/80 text-sky-700 border-sky-300/60 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-700/40",
  "Usu-Nigori":
    "bg-indigo-100/80 text-indigo-700 border-indigo-300/60 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-700/40",
  Shizuku:
    "bg-violet-100/80 text-violet-700 border-violet-300/60 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-700/40",
  "White Koji":
    "bg-lime-100/80 text-lime-700 border-lime-300/60 dark:bg-lime-900/20 dark:text-lime-300 dark:border-lime-700/40",
  Sparkling:
    "bg-cyan-100/80 text-cyan-700 border-cyan-300/60 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-700/40",
};

function formatPrice(price: number, priceLabel?: string): string {
  const formatted = price >= 1000 ? `$${price.toLocaleString()}` : `$${price}`;
  return priceLabel ? `${formatted} / ${priceLabel}` : formatted;
}

function SakeBottleCard({
  bottle,
  index,
}: {
  bottle: SakeBottle;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const colors =
    CATEGORY_COLORS[bottle.category] ?? CATEGORY_COLORS["Junmai Ginjo"];

  return (
    <motion.article
      data-ocid={`sake-bottle.bottle_card.${index}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index - 1) * 0.04 }}
      className="bg-card rounded-lg shadow-card overflow-hidden"
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl text-foreground leading-snug mb-2">
              {bottle.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center text-xs font-sans px-2.5 py-1 rounded-full border font-medium ${colors.badge}`}
              >
                {bottle.category}
              </span>
              {bottle.methodTags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center text-xs font-sans px-2.5 py-1 rounded-full border font-medium ${
                    METHOD_TAG_COLORS[tag] ??
                    "bg-secondary text-muted-foreground border-border"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Price block */}
          <div className="flex-shrink-0 text-right">
            <div className="font-serif text-2xl text-gold font-medium">
              {formatPrice(bottle.price, bottle.priceLabel)}
            </div>
          </div>
        </div>

        {/* Location + Rice pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <MapPin className="w-3 h-3" />
            {bottle.prefecture}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <Leaf className="w-3 h-3" />
            {bottle.rice}
          </span>
        </div>

        {/* Technical specs */}
        {(bottle.polish || bottle.abv || bottle.smv || bottle.acidity) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {bottle.polish && (
              <div className="p-2.5 bg-secondary/50 rounded-md min-w-[80px]">
                <p className="font-sans text-xs text-muted-foreground mb-0.5">
                  Polish
                </p>
                <p className="font-sans text-xs text-foreground font-medium">
                  {bottle.polish}
                </p>
              </div>
            )}
            {bottle.abv && (
              <div className="p-2.5 bg-secondary/50 rounded-md min-w-[80px]">
                <p className="font-sans text-xs text-muted-foreground mb-0.5">
                  ABV
                </p>
                <p className="font-sans text-xs text-foreground font-medium">
                  {bottle.abv}
                </p>
              </div>
            )}
            {bottle.smv && (
              <div className="p-2.5 bg-secondary/50 rounded-md min-w-[80px]">
                <p className="font-sans text-xs text-muted-foreground mb-0.5">
                  SMV
                </p>
                <p className="font-sans text-xs text-foreground font-medium">
                  {bottle.smv}
                </p>
              </div>
            )}
            {bottle.acidity && (
              <div className="p-2.5 bg-secondary/50 rounded-md min-w-[80px]">
                <p className="font-sans text-xs text-muted-foreground mb-0.5">
                  Acidity
                </p>
                <p className="font-sans text-xs text-foreground font-medium">
                  {bottle.acidity}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Appearance */}
        {bottle.appearance && (
          <div className="mb-3 p-3 bg-secondary/30 rounded-md">
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Appearance
            </p>
            <p className="font-sans text-sm text-foreground leading-relaxed">
              {bottle.appearance}
            </p>
          </div>
        )}

        {/* Nose */}
        <div className="mb-3 p-3 bg-secondary/60 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Nose
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {bottle.nose}
          </p>
        </div>

        {/* Palate */}
        <div className="mb-4 p-3 bg-secondary/40 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Palate
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {bottle.palate}
          </p>
        </div>

        {/* Expandable: Story + Best With */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          data-ocid={`sake-bottle.story_toggle.${index}`}
          className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors duration-150 mb-3"
          aria-expanded={expanded}
        >
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
          {expanded ? "Hide" : "Show"} Story &amp; Best With
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
                    The Story
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

        {/* Guest One-Liner — always visible */}
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

export function SakeBottleSection() {
  const [methodsOpen, setMethodsOpen] = useState(false);
  const [riceOpen, setRiceOpen] = useState(false);

  return (
    <div className="w-full" data-ocid="sake-bottle.section.panel">
      {/* ── Section 1: Methods & Foundations ───────────────────────────────── */}
      <motion.div
        data-ocid="sake-bottle.methods.panel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <button
          type="button"
          onClick={() => setMethodsOpen((v) => !v)}
          data-ocid="sake-bottle.methods.toggle"
          className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/30 transition-colors"
          aria-expanded={methodsOpen}
        >
          <div>
            <h3 className="font-serif text-xl text-foreground">
              Methods &amp; Foundations
            </h3>
            <p className="font-sans text-sm text-muted-foreground mt-0.5">
              Key brewing techniques and the SMV explained
            </p>
          </div>
          {methodsOpen ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          )}
        </button>
        <AnimatePresence>
          {methodsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-border">
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SAKE_METHODS_GLOSSARY.map((method) => (
                    <div
                      key={method.name}
                      className="p-3.5 bg-secondary/40 rounded-md border border-border/60"
                    >
                      <p className="font-sans text-sm text-foreground font-semibold mb-1">
                        {method.name}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Section 2: Rice Varieties ───────────────────────────────────────── */}
      <motion.div
        data-ocid="sake-bottle.rice.panel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mb-8 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <button
          type="button"
          onClick={() => setRiceOpen((v) => !v)}
          data-ocid="sake-bottle.rice.toggle"
          className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/30 transition-colors"
          aria-expanded={riceOpen}
        >
          <div>
            <h3 className="font-serif text-xl text-foreground">
              Rice Varieties
            </h3>
            <p className="font-sans text-sm text-muted-foreground mt-0.5">
              The 7 sake rice varietals represented on this list
            </p>
          </div>
          {riceOpen ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          )}
        </button>
        <AnimatePresence>
          {riceOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-border">
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SAKE_BOTTLE_RICE_VARIETIES.map((variety) => (
                    <div
                      key={variety.name}
                      className="p-3.5 bg-secondary/40 rounded-md border border-border/60"
                    >
                      <p className="font-sans text-sm text-foreground font-semibold mb-1">
                        {variety.name}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {variety.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Section 3: Bottle Cards grouped by category ─────────────────────── */}
      {SAKE_BOTTLE_CATEGORIES.map((category) => {
        const bottles = SAKE_BOTTLES.filter((b) => b.category === category);
        if (bottles.length === 0) return null;
        const colors =
          CATEGORY_COLORS[category] ?? CATEGORY_COLORS["Junmai Ginjo"];
        return (
          <div key={category} className="mb-10">
            <div className="mb-5 flex items-center gap-4">
              <h3 className="font-serif text-2xl text-foreground">
                {category}
              </h3>
              <div className="flex-1 h-px bg-border" />
              <Badge
                variant="secondary"
                className={`font-sans text-xs shrink-0 border ${colors.badge}`}
              >
                {bottles.length} bottle{bottles.length !== 1 ? "s" : ""}
              </Badge>
            </div>
            <div className="space-y-4">
              {bottles.map((bottle, _i) => {
                const globalIdx = SAKE_BOTTLES.indexOf(bottle) + 1;
                return (
                  <SakeBottleCard
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

      {/* ── Section 4: Quick Reference Table ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-4 mb-10 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <div className="p-5 md:p-6 border-b border-border">
          <h3 className="font-serif text-xl text-foreground">
            Quick Reference
          </h3>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            All 26 bottles at a glance — category, price, key character, and
            best pairings
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Sake
                </th>
                <th className="text-left px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden md:table-cell">
                  Category
                </th>
                <th className="text-right px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Price
                </th>
                <th className="text-left px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden lg:table-cell">
                  Key Character
                </th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden lg:table-cell">
                  Best With
                </th>
              </tr>
            </thead>
            <tbody>
              {SAKE_BOTTLE_QUICK_REF.map((row, i) => {
                const catColor =
                  CATEGORY_COLORS[row.category] ??
                  CATEGORY_COLORS["Junmai Ginjo"];
                return (
                  <tr
                    key={row.name}
                    data-ocid={`sake-bottle.quick_ref.row.${i + 1}`}
                    className={`border-b border-border/50 hover:bg-secondary/40 transition-colors ${
                      i % 2 === 0 ? "" : "bg-secondary/20"
                    }`}
                  >
                    <td className="px-5 py-3 text-foreground font-medium leading-snug">
                      <span className="line-clamp-2">{row.name}</span>
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
                    <td className="px-3 py-3 text-muted-foreground text-xs hidden lg:table-cell">
                      {row.character}
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

      {/* ── Section 5: Guest Guidance ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        data-ocid="sake-bottle.guidance.panel"
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
          {SAKE_BOTTLE_GUEST_GUIDANCE.map((item, i) => (
            <motion.div
              key={item.scenario}
              data-ocid={`sake-bottle.guidance.card.${i + 1}`}
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
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.recommendation}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
