import { WineSection } from "@/components/WineSection";
import { Badge } from "@/components/ui/badge";
import { MENU_SECTIONS } from "@/data/menuData";
import { AlertCircle, ChefHat, Info, Wine } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function StudyMode() {
  const [activeSection, setActiveSection] = useState<string>(
    MENU_SECTIONS[0].id,
  );

  const isWineSection = activeSection === "wine";
  const section = !isWineSection
    ? (MENU_SECTIONS.find((s) => s.id === activeSection) ?? MENU_SECTIONS[0])
    : null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 md:py-12"
      >
        <div className="flex items-center gap-3 mb-2">
          {isWineSection ? (
            <Wine className="w-5 h-5 text-gold" />
          ) : (
            <ChefHat className="w-5 h-5 text-gold" />
          )}
          <span className="text-sm tracking-widest uppercase font-sans text-muted-foreground">
            {isWineSection ? "Wine Program" : "Menu Study"}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          {isWineSection ? "Wine by the Glass" : "Study the Menu"}
        </h1>
        <p className="font-sans text-muted-foreground text-base leading-relaxed max-w-xl">
          {isWineSection
            ? "Our complete wine by the glass program — 13 selections spanning Champagne, white, rosé, and red wines. Tasting notes, winemaking details, pricing, glassware, and guest-facing descriptions."
            : "Explore each section of the AMA Sushi menu — ingredients, dietary information, beverage pairings, and the service notes that elevate every dish."}
        </p>
      </motion.div>

      {/* Section Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8 -mx-4 px-4 overflow-x-auto scrollbar-thin"
      >
        <div className="flex gap-2 min-w-max pb-1">
          {MENU_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              data-ocid="study.section.tab"
              onClick={() => setActiveSection(s.id)}
              className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200 whitespace-nowrap ${
                activeSection === s.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
          {/* Wine tab */}
          <button
            type="button"
            data-ocid="study.wine.tab"
            onClick={() => setActiveSection("wine")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200 whitespace-nowrap ${
              activeSection === "wine"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Wine className="w-3.5 h-3.5" />
            Wine Program
          </button>
        </div>
      </motion.div>

      {/* Section content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {isWineSection ? (
            <WineSection />
          ) : section ? (
            <>
              {/* Section heading */}
              <div className="mb-6">
                <h2 className="font-serif text-2xl text-foreground">
                  {section.label}
                </h2>
                {section.sublabel && (
                  <p className="font-sans text-sm text-muted-foreground mt-0.5">
                    {section.sublabel}
                  </p>
                )}
              </div>

              {/* Menu items */}
              <div className="grid grid-cols-1 gap-4">
                {section.items.map((item, idx) => (
                  <motion.article
                    key={item.name}
                    data-ocid={`study.menu_item.card.${idx + 1}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="bg-card rounded-lg shadow-card overflow-hidden"
                  >
                    <div className="p-5 md:p-6">
                      {/* Item header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-serif text-xl text-foreground leading-snug">
                            {item.name}
                          </h3>
                          {item.isSpecial && (
                            <Badge
                              variant="secondary"
                              className="mt-1 text-xs font-sans"
                            >
                              Special
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm text-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Ingredients */}
                      {item.ingredients && (
                        <div className="mb-4 p-3 bg-secondary/60 rounded-md">
                          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            Ingredients
                          </p>
                          <p className="font-sans text-sm text-foreground">
                            {item.ingredients}
                          </p>
                        </div>
                      )}

                      {/* Dietary */}
                      {item.dietary.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5 mb-2">
                            <AlertCircle className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="font-sans text-xs text-muted-foreground uppercase tracking-wide">
                              Dietary
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.dietary.map((d) => (
                              <span
                                key={d.name}
                                className={`inline-flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-full font-medium ${
                                  d.removable
                                    ? "bg-gold/15 text-foreground border border-gold/30"
                                    : "bg-destructive/10 text-destructive border border-destructive/20"
                                }`}
                              >
                                {d.name}
                                {d.removable && (
                                  <span className="text-muted-foreground font-normal">
                                    (CBR)
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                          <p className="font-sans text-xs text-muted-foreground mt-2">
                            <span className="font-medium">CBR</span> = Contains,
                            But Removable — can be omitted upon guest request.
                          </p>
                        </div>
                      )}

                      {/* Pairing */}
                      {item.pairing && (
                        <div className="flex items-start gap-2 p-3 bg-highlight/8 rounded-md border border-highlight/20">
                          <Wine className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                              Suggested Pairing
                            </p>
                            <p className="font-sans text-sm text-foreground">
                              {item.pairing}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Service note */}
                      {item.note && (
                        <div className="flex items-start gap-2 mt-3 p-3 bg-gold/10 rounded-md border border-gold/25">
                          <Info className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                              Service Note
                            </p>
                            <p className="font-sans text-sm text-foreground italic">
                              {item.note}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
