import { Badge } from "@/components/ui/badge";
import {
  SAKES,
  SAKE_CLASSIFICATIONS,
  SAKE_LADDER,
  type Sake,
  smvLabel,
} from "@/data/sakeData";
import {
  ChevronDown,
  ChevronUp,
  Droplets,
  Flame,
  MapPin,
  Quote,
  UtensilsCrossed,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// Classification → color mapping
const CLASSIFICATION_COLORS: Record<
  string,
  { bg: string; text: string; border: string; badge: string }
> = {
  Honjozo: {
    bg: "bg-highlight/8",
    text: "text-highlight",
    border: "border-highlight/25",
    badge: "bg-highlight/12 text-highlight border-highlight/25",
  },
  Junmai: {
    bg: "bg-secondary/60",
    text: "text-muted-foreground",
    border: "border-border",
    badge: "bg-secondary text-muted-foreground border-border",
  },
  "Tokubetsu Junmai": {
    bg: "bg-gold/8",
    text: "text-gold",
    border: "border-gold/25",
    badge: "bg-gold/12 text-gold border-gold/25",
  },
  "Junmai Ginjo": {
    bg: "bg-rose/8",
    text: "text-rose",
    border: "border-rose/25",
    badge: "bg-rose/12 text-rose border-rose/25",
  },
  "Junmai Daiginjo": {
    bg: "bg-destructive/8",
    text: "text-destructive",
    border: "border-destructive/25",
    badge: "bg-destructive/10 text-destructive border-destructive/20",
  },
  "Junmai Nigori": {
    bg: "bg-secondary/60",
    text: "text-foreground",
    border: "border-border",
    badge: "bg-secondary text-foreground border-border",
  },
};

function smvBadgeClass(smv: number): string {
  if (smv <= -5)
    return "bg-amber-100/80 text-amber-800 border-amber-300/60 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-700/40";
  if (smv >= 4)
    return "bg-emerald-100/80 text-emerald-800 border-emerald-300/60 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700/40";
  return "bg-secondary text-muted-foreground border-border";
}

function SakeCard({ sake, index }: { sake: Sake; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const colors =
    CLASSIFICATION_COLORS[sake.classification] ?? CLASSIFICATION_COLORS.Junmai;

  return (
    <motion.article
      data-ocid={`sake.sake_card.${index}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index - 1) * 0.05 }}
      className="bg-card rounded-lg shadow-card overflow-hidden"
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl text-foreground leading-snug mb-1.5">
              {sake.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {/* Classification badge */}
              <span
                className={`inline-flex items-center text-xs font-sans px-2.5 py-1 rounded-full border font-medium ${colors.badge}`}
              >
                {sake.classification}
              </span>
              {/* SMV badge */}
              <span
                className={`inline-flex items-center text-xs font-sans px-2.5 py-1 rounded-full border font-medium ${smvBadgeClass(sake.smv)}`}
              >
                SMV {sake.smv > 0 ? "+" : ""}
                {sake.smv} · {smvLabel(sake.smv)}
              </span>
            </div>
          </div>

          {/* Price block */}
          <div className="flex-shrink-0 text-right">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl text-gold font-medium">
                ${sake.glassPrice}
              </span>
              <span className="font-sans text-xs text-muted-foreground">
                /glass
              </span>
            </div>
            {sake.carafePrice && (
              <div className="font-sans text-xs text-muted-foreground">
                ${sake.carafePrice} carafe
              </div>
            )}
          </div>
        </div>

        {/* Specs row */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <MapPin className="w-3 h-3" />
            {sake.region}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <Droplets className="w-3 h-3" />
            {sake.glassware}
          </span>
        </div>

        {/* Rice + Technical specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <div className="p-2.5 bg-secondary/50 rounded-md">
            <p className="font-sans text-xs text-muted-foreground mb-0.5">
              Rice
            </p>
            <p className="font-sans text-xs text-foreground font-medium leading-tight">
              {sake.rice}
            </p>
          </div>
          <div className="p-2.5 bg-secondary/50 rounded-md">
            <p className="font-sans text-xs text-muted-foreground mb-0.5">
              Milling
            </p>
            <p className="font-sans text-xs text-foreground font-medium">
              {sake.milling}% remaining
            </p>
          </div>
          <div className="p-2.5 bg-secondary/50 rounded-md">
            <p className="font-sans text-xs text-muted-foreground mb-0.5">
              ABV
            </p>
            <p className="font-sans text-xs text-foreground font-medium">
              {sake.abv}%
            </p>
          </div>
          <div className="p-2.5 bg-secondary/50 rounded-md">
            <p className="font-sans text-xs text-muted-foreground mb-0.5">
              Acidity
            </p>
            <p className="font-sans text-xs text-foreground font-medium">
              {sake.acidity}
            </p>
          </div>
        </div>

        {/* Aroma */}
        <div className="mb-3 p-3 bg-secondary/60 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Aroma
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {sake.aroma}
          </p>
        </div>

        {/* Palate */}
        <div className="mb-4 p-3 bg-secondary/40 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Palate
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {sake.palate}
          </p>
        </div>

        {/* Expandable: Sake Making + Brewery + Serve Temp */}
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
          {expanded ? "Hide" : "Show"} Sake Making &amp; Brewery Notes
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
                    Sake Making
                  </p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {sake.sakeMaking}
                  </p>
                </div>
                <div className="p-3 bg-secondary/40 rounded-md">
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Brewery
                  </p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {sake.brewery}
                  </p>
                </div>
                {sake.serveTemp && (
                  <div
                    className={`flex items-start gap-2 p-3 rounded-md border ${colors.bg} ${colors.border}`}
                  >
                    <Flame
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`}
                    />
                    <div>
                      <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                        Serve Temperature
                      </p>
                      <p className="font-sans text-sm text-foreground">
                        {sake.serveTemp}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Food Pairing */}
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
              {sake.foodPairing}
            </p>
          </div>
        </div>

        {/* Guest One-Liner */}
        <div
          className={`flex items-start gap-3 p-3 rounded-md border ${colors.bg} ${colors.border}`}
        >
          <Quote className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
          <p className="font-serif text-sm text-foreground italic leading-relaxed">
            "{sake.guestOneLiner}"
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function SakeSection() {
  return (
    <div className="w-full" data-ocid="sake.section.panel">
      {/* Sake Ladder */}
      <motion.div
        data-ocid="sake.ladder.panel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-10 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <div className="p-5 md:p-6 border-b border-border">
          <h3 className="font-serif text-xl text-foreground">
            The Sake Ladder
          </h3>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            Guide guests from approachable to extraordinary — use this
            progression to match any palate or occasion.
          </p>
        </div>
        <div className="p-5 md:p-6">
          <div className="space-y-0">
            {SAKE_LADDER.map((step, i) => {
              const isLast = i === SAKE_LADDER.length - 1;
              return (
                <div key={step.step} className="flex items-stretch gap-4">
                  {/* Step indicator + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-bold flex-shrink-0 ${
                        isLast
                          ? "bg-gold text-background"
                          : step.step <= 2
                            ? "bg-secondary text-muted-foreground border border-border"
                            : step.step <= 4
                              ? "bg-highlight/15 text-highlight border border-highlight/30"
                              : "bg-gold/15 text-gold border border-gold/30"
                      }`}
                    >
                      {step.step}
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-border my-1 min-h-[1.5rem]" />
                    )}
                  </div>
                  {/* Content */}
                  <div
                    className={`pb-5 ${isLast ? "pb-0" : ""} flex-1 min-w-0`}
                  >
                    <p className="font-sans text-sm text-foreground font-semibold leading-tight">
                      {step.name}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">
                      {step.descriptor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Sake Classifications */}
      <motion.div
        data-ocid="sake.classifications.panel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mb-10 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <div className="p-5 md:p-6 border-b border-border">
          <h3 className="font-serif text-xl text-foreground">
            Sake Classifications
          </h3>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            From lightest to most refined — know the grades before you pour.
          </p>
        </div>
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SAKE_CLASSIFICATIONS.map((cls) => (
              <div
                key={cls.name}
                className="p-3.5 bg-secondary/40 rounded-md border border-border/60"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="font-sans text-sm text-foreground font-semibold leading-tight">
                    {cls.name}
                  </p>
                  <Badge
                    variant="outline"
                    className="font-sans text-xs shrink-0 leading-none"
                  >
                    {cls.millingNote.split(" ")[0] === "Rice"
                      ? cls.millingNote
                          .replace("Rice milled to at least ", "≥")
                          .replace("Rice milled to ", "")
                          .replace(" or below", "↓")
                      : cls.millingNote.includes("No milling")
                        ? "Unfiltered"
                        : cls.millingNote.replace(
                            "No minimum milling requirement",
                            "No min",
                          )}
                  </Badge>
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {cls.description}
                </p>
                <p className="font-sans text-xs text-gold/80 mt-1.5 italic">
                  {cls.millingNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sake Cards */}
      <div className="space-y-4">
        <div className="mb-5 flex items-center gap-4">
          <h3 className="font-serif text-2xl text-foreground">By the Glass</h3>
          <div className="flex-1 h-px bg-border" />
          <Badge variant="secondary" className="font-sans text-xs shrink-0">
            {SAKES.length} sakes
          </Badge>
        </div>
        {SAKES.map((sake, i) => (
          <SakeCard key={sake.id} sake={sake} index={i + 1} />
        ))}
      </div>

      {/* Quick Reference Table */}
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
            Prices and classifications at a glance
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Sake
                </th>
                <th className="text-left px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden sm:table-cell">
                  Style
                </th>
                <th className="text-right px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Glass
                </th>
                <th className="text-right px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Carafe
                </th>
              </tr>
            </thead>
            <tbody>
              {SAKES.map((sake, i) => (
                <tr
                  key={sake.id}
                  className={`border-b border-border/50 hover:bg-secondary/40 transition-colors ${
                    i % 2 === 0 ? "" : "bg-secondary/20"
                  }`}
                >
                  <td className="px-5 py-3 text-foreground font-medium leading-snug">
                    <span className="line-clamp-2">{sake.name}</span>
                  </td>
                  <td className="px-3 py-3 hidden sm:table-cell">
                    <span
                      className={`inline-block text-xs px-2 py-0.5 rounded-full border ${
                        (
                          CLASSIFICATION_COLORS[sake.classification] ??
                          CLASSIFICATION_COLORS.Junmai
                        ).badge
                      }`}
                    >
                      {sake.classification}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right text-gold font-medium">
                    ${sake.glassPrice}
                  </td>
                  <td className="px-5 py-3 text-right text-muted-foreground">
                    {sake.carafePrice ? `$${sake.carafePrice}` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
