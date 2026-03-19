import { Badge } from "@/components/ui/badge";
import {
  COCKTAILS,
  type Cocktail,
  GUEST_GUIDANCE,
  SIGNATURE_SPIRITS,
} from "@/data/cocktailData";
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  GlassWater,
  Info,
  Leaf,
  Quote,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function CocktailCard({
  cocktail,
  index,
}: {
  cocktail: Cocktail;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const hasDairy = cocktail.dietary.some((d) =>
    d.toLowerCase().includes("dairy"),
  );
  const hasAllium = cocktail.dietary.some((d) =>
    d.toLowerCase().includes("allium"),
  );

  return (
    <motion.article
      data-ocid={`cocktail.cocktail_card.${index}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index - 1) * 0.05 }}
      className="bg-card rounded-lg shadow-card overflow-hidden"
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl text-foreground leading-snug">
              {cocktail.name}
            </h3>
            <p className="font-sans text-sm text-muted-foreground italic mt-0.5">
              {cocktail.japaneseMeaning}
            </p>
          </div>
          {!cocktail.isAlcoholic && (
            <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-300/60 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700/40 font-medium flex-shrink-0">
              <Leaf className="w-3 h-3" />
              Non-Alcoholic
            </span>
          )}
        </div>

        {/* Style + Glass badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center text-xs font-sans px-2.5 py-1 rounded-full border bg-rose/10 text-rose border-rose/30 font-medium">
            {cocktail.style}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <GlassWater className="w-3 h-3" />
            {cocktail.glass}
          </span>
        </div>

        {/* Ingredients */}
        <div className="mb-3 p-3 bg-secondary/60 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-2">
            Ingredients
          </p>
          <ul className="space-y-1">
            {cocktail.ingredients.map((ing) => (
              <li
                key={ing}
                className="font-sans text-sm text-foreground flex items-start gap-2"
              >
                <span className="text-rose mt-1 flex-shrink-0">·</span>
                {ing}
              </li>
            ))}
          </ul>
        </div>

        {/* Garnish */}
        <div className="mb-3 p-3 bg-secondary/40 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Garnish
          </p>
          <p className="font-sans text-sm text-foreground">
            {cocktail.garnish}
          </p>
        </div>

        {/* Service Sequence (expandable) */}
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
          {expanded ? "Hide" : "Show"} Service Sequence
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mb-3"
            >
              <div className="p-3 bg-secondary/40 rounded-md">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-2">
                  Service Sequence
                </p>
                <ol className="space-y-1.5">
                  {cocktail.serviceSequence.map((step, i) => (
                    <li
                      key={step}
                      className="font-sans text-sm text-foreground flex items-start gap-2.5"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose/15 text-rose text-xs font-sans font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dietary flags */}
        {(hasDairy || hasAllium) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {hasDairy && (
              <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20 font-medium">
                <AlertCircle className="w-3 h-3" />
                Contains Dairy
              </span>
            )}
            {hasAllium && (
              <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-gold/15 text-foreground border border-gold/30 font-medium">
                <AlertCircle className="w-3 h-3 text-gold" />
                Contains Allium
              </span>
            )}
          </div>
        )}

        {/* Staff Note */}
        {cocktail.staffNote && (
          <div className="flex items-start gap-2 mb-3 p-3 bg-secondary/50 rounded-md border border-border/60">
            <Info className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                Staff Note
              </p>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                {cocktail.staffNote}
              </p>
            </div>
          </div>
        )}

        {/* Service Note */}
        {cocktail.serviceNote && (
          <div className="flex items-start gap-2 mb-3 p-3 bg-gold/10 rounded-md border border-gold/25">
            <Sparkles className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                Tableside Service
              </p>
              <p className="font-sans text-sm text-foreground italic leading-relaxed">
                {cocktail.serviceNote}
              </p>
            </div>
          </div>
        )}

        {/* Guest One-Liner */}
        <div className="flex items-start gap-3 p-3 rounded-md border bg-gold/10 border-gold/25">
          <Quote className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
          <p className="font-serif text-sm text-foreground italic leading-relaxed">
            &ldquo;{cocktail.guestOneLiner}&rdquo;
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function CocktailSection() {
  const alcoholic = COCKTAILS.filter((c) => c.isAlcoholic);
  const mocktails = COCKTAILS.filter((c) => !c.isAlcoholic);

  return (
    <div className="w-full" data-ocid="cocktail.section.panel">
      {/* Signature Spirits */}
      <motion.div
        data-ocid="cocktail.spirits.panel"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-10 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <div className="p-5 md:p-6 border-b border-border">
          <h3 className="font-serif text-xl text-foreground">
            Signature Spirits & Ingredients
          </h3>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            Key spirits and Japanese ingredients that define the AMA cocktail
            program. Know these before you serve.
          </p>
        </div>
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SIGNATURE_SPIRITS.map((spirit) => (
              <div
                key={spirit.name}
                className="p-3.5 bg-secondary/40 rounded-md border border-border/60"
              >
                <p className="font-sans text-sm text-foreground font-semibold leading-tight mb-1">
                  {spirit.name}
                </p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {spirit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Signature Cocktails */}
      <div className="space-y-4 mb-10">
        <div className="mb-5 flex items-center gap-4">
          <h3 className="font-serif text-2xl text-foreground">
            Signature Cocktails
          </h3>
          <div className="flex-1 h-px bg-border" />
          <Badge variant="secondary" className="font-sans text-xs shrink-0">
            {alcoholic.length} cocktails
          </Badge>
        </div>
        {alcoholic.map((c, i) => (
          <CocktailCard key={c.id} cocktail={c} index={i + 1} />
        ))}
      </div>

      {/* Mocktails */}
      <div className="space-y-4 mb-10">
        <div className="mb-5 flex items-center gap-4">
          <h3 className="font-serif text-2xl text-foreground">Mocktails</h3>
          <div className="flex-1 h-px bg-border" />
          <Badge
            variant="outline"
            className="font-sans text-xs shrink-0 border-emerald-300/60 text-emerald-800 bg-emerald-100/80 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700/40"
          >
            Non-Alcoholic
          </Badge>
        </div>
        <p className="font-sans text-sm text-muted-foreground -mt-2 mb-4">
          Independently crafted with the same care and attention as the cocktail
          menu. Never position these as lesser options.
        </p>
        {mocktails.map((c, i) => (
          <CocktailCard
            key={c.id}
            cocktail={c}
            index={alcoholic.length + i + 1}
          />
        ))}
      </div>

      {/* Quick Reference Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mb-10 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <div className="p-5 md:p-6 border-b border-border">
          <h3 className="font-serif text-xl text-foreground">
            Quick Reference
          </h3>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            All 11 cocktails at a glance
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full font-sans text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Cocktail
                </th>
                <th className="text-left px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden sm:table-cell">
                  Style
                </th>
                <th className="text-left px-3 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium hidden md:table-cell">
                  Glass
                </th>
                <th className="text-center px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  Alcohol
                </th>
              </tr>
            </thead>
            <tbody>
              {COCKTAILS.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-border/50 hover:bg-secondary/40 transition-colors ${
                    i % 2 === 0 ? "" : "bg-secondary/20"
                  }`}
                >
                  <td className="px-5 py-3">
                    <p className="font-sans text-sm text-foreground font-medium leading-tight">
                      {c.name}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground italic">
                      {c.japaneseMeaning}
                    </p>
                  </td>
                  <td className="px-3 py-3 hidden sm:table-cell">
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full border bg-rose/10 text-rose border-rose/30">
                      {c.style}
                    </span>
                  </td>
                  <td className="px-3 py-3 hidden md:table-cell text-muted-foreground text-xs">
                    {c.glass}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {c.isAlcoholic ? (
                      <span className="font-sans text-xs text-muted-foreground">
                        Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-sans px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-300/60 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-700/40">
                        <Leaf className="w-2.5 h-2.5" />
                        No
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Guest Guidance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        data-ocid="cocktail.guidance.panel"
      >
        <div className="mb-5 flex items-center gap-4">
          <h3 className="font-serif text-2xl text-foreground">
            Guest Guidance
          </h3>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {GUEST_GUIDANCE.map((tip, i) => (
            <div
              key={tip.title}
              data-ocid={`cocktail.guidance.card.${i + 1}`}
              className="p-4 bg-card rounded-lg shadow-card border border-border"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose/15 text-rose text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-sans text-sm text-foreground font-semibold mb-1">
                    {tip.title}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
