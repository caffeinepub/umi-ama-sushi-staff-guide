import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GLOSSARY_SORTED } from "@/data/glossaryData";
import { BookOpen, Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

export function GlossaryTab() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return GLOSSARY_SORTED;
    const q = search.toLowerCase();
    return GLOSSARY_SORTED.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    );
  }, [search]);

  // Group by first letter
  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const term of filtered) {
      const letter = term.term[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(term);
    }
    return map;
  }, [filtered]);

  const letters = Array.from(grouped.keys()).sort();

  // Flat index for data-ocid
  const flatIndexMap = useMemo(() => {
    const m = new Map<string, number>();
    GLOSSARY_SORTED.forEach((t, i) => m.set(t.term, i + 1));
    return m;
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 md:py-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-5 h-5 text-gold" />
          <span className="text-sm tracking-widest uppercase font-sans text-muted-foreground">
            Reference Guide
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          Japanese Culinary Glossary
        </h1>
        <p className="font-sans text-muted-foreground text-base leading-relaxed max-w-xl">
          A curated reference of Japanese culinary terms to deepen your
          knowledge and help you speak with confidence and precision at the
          table.
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative mb-8"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          data-ocid="glossary.search_input"
          type="search"
          placeholder="Search terms or definitions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11 font-sans bg-card border-border focus:ring-ring text-foreground placeholder:text-muted-foreground"
        />
      </motion.div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-ocid="glossary.empty_state"
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 mb-5 rounded-full bg-muted flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="font-serif text-xl text-foreground mb-2">
              No terms found
            </p>
            <p className="font-sans text-sm text-muted-foreground max-w-xs">
              Try a different search — perhaps a dish name, technique, or
              ingredient.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-10"
          >
            {letters.map((letter, letterIdx) => (
              <motion.div
                key={letter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: letterIdx * 0.04 }}
              >
                {/* Letter heading */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-serif text-4xl text-gold leading-none select-none">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Terms grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {grouped.get(letter)!.map((term) => {
                    const idx = flatIndexMap.get(term.term) ?? 0;
                    return (
                      <motion.article
                        key={term.term}
                        data-ocid={`glossary.item.${idx}`}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="group bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-shadow duration-200"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-serif text-lg text-foreground leading-tight">
                            {term.term}
                          </h3>
                        </div>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                          {term.definition}
                        </p>
                        {term.relatedDishes &&
                          term.relatedDishes.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
                              {term.relatedDishes.map((dish) => (
                                <Badge
                                  key={dish}
                                  variant="secondary"
                                  className="text-xs font-sans py-0.5 px-2 bg-secondary text-secondary-foreground"
                                >
                                  {dish}
                                </Badge>
                              ))}
                            </div>
                          )}
                      </motion.article>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Term count */}
      {filtered.length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center font-sans text-xs text-muted-foreground mt-10"
        >
          {filtered.length} {filtered.length === 1 ? "term" : "terms"}
          {search ? ` matching "${search}"` : " in this glossary"}
        </motion.p>
      )}
    </div>
  );
}
