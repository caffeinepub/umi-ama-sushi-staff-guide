import { Badge } from "@/components/ui/badge";
import {
  BURGUNDY_KEY_TERMS,
  BURGUNDY_VILLAGES,
  VILLAGE_POSITIONING,
  WHITE_BURGUNDY_WINES,
  type WhiteBurgundyWine,
} from "@/data/whiteBurgundyData";
import {
  BookOpen,
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

type VillageFilter =
  | "all"
  | "chablis"
  | "saint-aubin"
  | "chassagne"
  | "puligny"
  | "meursault";

const VILLAGE_FILTERS: { id: VillageFilter; label: string }[] = [
  { id: "all", label: "All Villages" },
  { id: "chablis", label: "Chablis" },
  { id: "saint-aubin", label: "Saint-Aubin" },
  { id: "chassagne", label: "Chassagne-Montrachet" },
  { id: "puligny", label: "Puligny-Montrachet" },
  { id: "meursault", label: "Meursault" },
];

// Village-based color theming
const VILLAGE_COLORS: Record<
  string,
  { bg: string; text: string; border: string; badge: string }
> = {
  chablis: {
    bg: "bg-highlight/8",
    text: "text-highlight",
    border: "border-highlight/25",
    badge: "bg-highlight/12 text-highlight border-highlight/25",
  },
  "saint-aubin": {
    bg: "bg-secondary/60",
    text: "text-muted-foreground",
    border: "border-border",
    badge: "bg-secondary text-muted-foreground border-border",
  },
  chassagne: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/30",
    badge: "bg-gold/15 text-gold border-gold/30",
  },
  puligny: {
    bg: "bg-gold/12",
    text: "text-gold",
    border: "border-gold/35",
    badge: "bg-gold/18 text-gold border-gold/35",
  },
  meursault: {
    bg: "bg-rose/8",
    text: "text-rose",
    border: "border-rose/25",
    badge: "bg-rose/12 text-rose border-rose/25",
  },
};

const VILLAGE_LABEL: Record<string, string> = {
  chablis: "Chablis",
  "saint-aubin": "Saint-Aubin",
  chassagne: "Chassagne-Montrachet",
  puligny: "Puligny-Montrachet",
  meursault: "Meursault",
};

function WhiteBurgundyCard({
  wine,
  index,
}: {
  wine: WhiteBurgundyWine;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const colors = VILLAGE_COLORS[wine.village] ?? VILLAGE_COLORS["saint-aubin"];

  return (
    <motion.article
      data-ocid={`white-burgundy.card.${index}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index - 1) * 0.05 }}
      className="bg-card rounded-lg shadow-card overflow-hidden"
    >
      <div className="p-5 md:p-6">
        {/* Header row */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl text-foreground leading-snug mb-1.5">
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
          {/* Bottle Format Badge */}
          <div className="flex-shrink-0 text-right">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-sans px-3 py-1.5 rounded-full border font-medium ${colors.badge}`}
            >
              <GlassWater className="w-3 h-3" />
              Bottle Format
            </span>
          </div>
        </div>

        {/* Appellation + Village + Glassware badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full border font-medium ${colors.badge}`}
          >
            {VILLAGE_LABEL[wine.village]}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-highlight/10 text-highlight border border-highlight/25">
            <GlassWater className="w-3 h-3" />
            {wine.glassware} glass
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            <MapPin className="w-3 h-3" />
            {wine.appellation}
          </span>
        </div>

        {/* Grape */}
        <div className="flex items-start gap-2 mb-4">
          <Grape className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="font-sans text-sm text-foreground">{wine.grape}</p>
        </div>

        {/* Tasting Notes */}
        <div className="mb-3 p-3 bg-secondary/60 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Tasting Notes
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {wine.tastingNotes}
          </p>
        </div>

        {/* Vintage Character */}
        <div className="mb-4 p-3 bg-secondary/40 rounded-md">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Vintage Character
          </p>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {wine.vintageCharacter}
          </p>
        </div>

        {/* Expandable: Terroir + Winemaking + Estate */}
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
          {expanded ? "Hide" : "Show"} Terroir, Winemaking &amp; Estate
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
                    Terroir
                  </p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {wine.terroir}
                  </p>
                </div>
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
                    Estate
                  </p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {wine.estate}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Food Pairing at AMA */}
        <div
          className={`flex items-start gap-2 p-3 rounded-md border mb-4 ${colors.bg} ${colors.border}`}
        >
          <UtensilsCrossed
            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`}
          />
          <div>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
              Elevated Food Pairing at AMA
            </p>
            <p className="font-sans text-sm text-foreground">
              {wine.foodPairing}
            </p>
          </div>
        </div>

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

export function WhiteBurgundySection() {
  const [activeVillage, setActiveVillage] = useState<VillageFilter>("all");
  const [hierarchyOpen, setHierarchyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const filtered =
    activeVillage === "all"
      ? WHITE_BURGUNDY_WINES
      : WHITE_BURGUNDY_WINES.filter((w) => w.village === activeVillage);

  return (
    <div className="w-full">
      {/* Village Filter Tabs */}
      <div className="mb-6 -mx-4 px-4 overflow-x-auto scrollbar-thin">
        <div className="flex gap-2 min-w-max pb-1">
          {VILLAGE_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              data-ocid="white-burgundy.village.tab"
              onClick={() => setActiveVillage(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200 whitespace-nowrap ${
                activeVillage === filter.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Burgundy Hierarchy Panel */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-4 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <button
          type="button"
          data-ocid="white-burgundy.hierarchy.toggle"
          onClick={() => setHierarchyOpen((v) => !v)}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/30 transition-colors duration-150"
          aria-expanded={hierarchyOpen}
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-serif text-lg text-foreground">
                The Burgundy Hierarchy
              </h3>
              <p className="font-sans text-xs text-muted-foreground mt-0.5">
                North to South — Chablis to Chassagne
              </p>
            </div>
          </div>
          {hierarchyOpen ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          )}
        </button>

        <AnimatePresence>
          {hierarchyOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border">
                <div className="pt-4 space-y-0">
                  {BURGUNDY_VILLAGES.map((village, i) => {
                    const isLast = i === BURGUNDY_VILLAGES.length - 1;
                    const colors =
                      VILLAGE_COLORS[village.id] ??
                      VILLAGE_COLORS["saint-aubin"];
                    return (
                      <div
                        key={village.id}
                        className="flex items-stretch gap-4"
                      >
                        {/* Connector */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div
                            className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 border-2 ${colors.border} ${colors.bg}`}
                          />
                          {!isLast && (
                            <div className="w-px flex-1 bg-border my-1 min-h-[1rem]" />
                          )}
                        </div>
                        {/* Content */}
                        <div className={`pb-4 ${isLast ? "pb-0" : ""} flex-1`}>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className={`inline-block text-xs font-sans font-semibold px-2 py-0.5 rounded-full border ${colors.badge}`}
                            >
                              {village.name}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                            {village.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Key Terms Panel */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mb-8 bg-card rounded-lg shadow-card overflow-hidden"
      >
        <button
          type="button"
          data-ocid="white-burgundy.terms.toggle"
          onClick={() => setTermsOpen((v) => !v)}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/30 transition-colors duration-150"
          aria-expanded={termsOpen}
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-serif text-lg text-foreground">
                Key Burgundy Terms
              </h3>
              <p className="font-sans text-xs text-muted-foreground mt-0.5">
                Essential vocabulary for confident guest service
              </p>
            </div>
          </div>
          {termsOpen ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          )}
        </button>

        <AnimatePresence>
          {termsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border">
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BURGUNDY_KEY_TERMS.map((term) => (
                    <div
                      key={term.term}
                      className="p-3.5 bg-secondary/40 rounded-md border border-border/60"
                    >
                      <p className="font-sans text-sm text-foreground font-semibold mb-1.5">
                        {term.term}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {term.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Wine Cards */}
      <div className="mb-6 flex items-center gap-4">
        <h3 className="font-serif text-2xl text-foreground">
          {activeVillage === "all"
            ? "Bottle Program"
            : VILLAGE_LABEL[activeVillage]}
        </h3>
        <div className="flex-1 h-px bg-border" />
        <Badge variant="secondary" className="font-sans text-xs shrink-0">
          {filtered.length} {filtered.length === 1 ? "wine" : "wines"}
        </Badge>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeVillage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {filtered.map((wine, i) => (
            <WhiteBurgundyCard key={wine.id} wine={wine} index={i + 1} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Village Positioning Quick Reference — only shown in "All" view */}
      {activeVillage === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 bg-card rounded-lg shadow-card overflow-hidden"
        >
          <div className="p-5 md:p-6 border-b border-border">
            <h3 className="font-serif text-xl text-foreground">
              Village Positioning Guide
            </h3>
            <p className="font-sans text-sm text-muted-foreground mt-1">
              Match the guest's preference to the perfect village
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    Guest Preference
                  </th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-muted-foreground font-medium">
                    Recommendation
                  </th>
                </tr>
              </thead>
              <tbody>
                {VILLAGE_POSITIONING.map((row, i) => (
                  <tr
                    key={row.preference}
                    className={`border-b border-border/50 hover:bg-secondary/40 transition-colors ${
                      i % 2 === 0 ? "" : "bg-secondary/20"
                    }`}
                  >
                    <td className="px-5 py-3 text-foreground font-medium">
                      {row.preference}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">
                      {row.recommendation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottle Format Note */}
          <div className="p-5 md:p-6 border-t border-border bg-gold/5">
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-gold">Bottle Format:</span>{" "}
              These are elevated food pairings presented in bottle format — not
              available by the glass. Present them as a considered, distinctive
              choice for the table.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
