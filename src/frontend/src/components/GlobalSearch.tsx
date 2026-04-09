import {
  type SearchResult,
  type StudySection,
  searchAll,
} from "@/utils/searchEngine";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SearchTab = "study" | "glossary";

interface GlobalSearchProps {
  onNavigate: (tab: SearchTab, section?: StudySection) => void;
}

const CATEGORY_ORDER = [
  "Menu",
  "Wine by Glass",
  "Wine Bottles",
  "Sake by Glass",
  "Sake Bottles",
  "White Burgundy",
  "Cocktails",
  "Glossary",
];

export function GlobalSearch({ onNavigate }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchAll(query), [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchResult[]>();
    for (const result of results) {
      if (!map.has(result.category)) map.set(result.category, []);
      map.get(result.category)!.push(result);
    }
    // Return in canonical order
    const ordered: { category: string; items: SearchResult[] }[] = [];
    for (const cat of CATEGORY_ORDER) {
      if (map.has(cat)) {
        ordered.push({ category: cat, items: map.get(cat)! });
      }
    }
    return ordered;
  }, [results]);

  const hasResults = results.length > 0;
  const showDropdown = open && query.trim().length >= 2;

  const handleSelect = useCallback(
    (result: SearchResult) => {
      onNavigate(result.navigateTo.tab, result.navigateTo.section);
      setQuery("");
      setOpen(false);
      inputRef.current?.blur();
    },
    [onNavigate],
  );

  const handleClear = useCallback(() => {
    setQuery("");
    setOpen(false);
    inputRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xs"
      data-ocid="global-search.container"
    >
      {/* Input */}
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="search"
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search the menu, wines, sake…"
          aria-label="Search all content"
          data-ocid="global-search.input"
          className="w-full h-8 pl-8 pr-7 rounded-md bg-secondary/60 border border-border/60 font-sans text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-all duration-200"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            data-ocid="global-search.clear"
            className="absolute right-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full mt-2 left-0 right-0 z-[200] rounded-lg border border-border/80 bg-card shadow-xl overflow-hidden"
            style={{ maxHeight: "min(480px, 60vh)" }}
            data-ocid="global-search.dropdown"
          >
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "min(480px, 60vh)" }}
            >
              {!hasResults ? (
                <div className="px-4 py-6 text-center">
                  <p className="font-sans text-sm text-muted-foreground">
                    No results found for{" "}
                    <span className="text-foreground font-medium">
                      "{query}"
                    </span>
                  </p>
                  <p className="font-sans text-xs text-muted-foreground/60 mt-1">
                    Try a dish name, ingredient, wine region, or glossary term.
                  </p>
                </div>
              ) : (
                grouped.map(({ category, items }, groupIdx) => (
                  <div key={category}>
                    {/* Category header */}
                    <div
                      className={`px-4 py-2 flex items-center gap-2 sticky top-0 bg-card/95 backdrop-blur-sm z-10 ${
                        groupIdx > 0 ? "border-t border-border/40" : ""
                      }`}
                    >
                      <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold/80">
                        {category}
                      </span>
                      <span className="font-sans text-[10px] text-muted-foreground/50">
                        {items.length}
                      </span>
                    </div>

                    {/* Results */}
                    {items.map((result, idx) => (
                      <motion.button
                        key={result.id}
                        type="button"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15, delay: idx * 0.03 }}
                        onClick={() => handleSelect(result)}
                        data-ocid={`global-search.result.${result.id}`}
                        className="w-full text-left px-4 py-2.5 flex flex-col gap-0.5 hover:bg-secondary/60 focus:bg-secondary/60 focus:outline-none transition-colors duration-150 group"
                      >
                        <span className="font-sans text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-150 truncate">
                          {result.label}
                        </span>
                        {result.sublabel && (
                          <span className="font-sans text-xs text-muted-foreground truncate">
                            {result.sublabel}
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                ))
              )}

              {/* Footer hint */}
              {hasResults && (
                <div className="px-4 py-2 border-t border-border/40 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-muted-foreground/50">
                    {results.length} result{results.length !== 1 ? "s" : ""}
                  </span>
                  <span className="font-sans text-[10px] text-muted-foreground/50">
                    Esc to close
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
