import { BookOpen, GraduationCap, MessageCircle, Waves } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import { ChatMode } from "./components/ChatMode";
import { GlobalSearch } from "./components/GlobalSearch";
import { GlossaryTab } from "./components/GlossaryTab";
import { QuizMode } from "./components/QuizMode";
import { StudyMode } from "./components/StudyMode";
import type { StudySection } from "./utils/searchEngine";

type Tab = "study" | "quiz" | "chat" | "glossary";

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "study", label: "Study", icon: BookOpen },
  { id: "quiz", label: "Quiz", icon: GraduationCap },
  { id: "chat", label: "Chat", icon: MessageCircle },
  { id: "glossary", label: "Glossary", icon: Waves },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("study");
  const [studySection, setStudySection] = useState<StudySection | undefined>(
    undefined,
  );

  const handleSearchNavigate = useCallback(
    (tab: "study" | "glossary", section?: StudySection) => {
      setActiveTab(tab as Tab);
      if (section) setStudySection(section);
    },
    [],
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4">
          {/* Brand row */}
          <div className="flex items-center justify-between py-4 border-b border-border/50 gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-serif text-sm text-gold leading-none">
                  海
                </span>
              </div>
              <div>
                <h1 className="font-serif text-base leading-none text-foreground">
                  Umi
                </h1>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">
                  AMA Sushi · Rosewood Miramar Beach
                </p>
              </div>
            </div>
            <GlobalSearch onNavigate={handleSearchNavigate} />
            <span className="font-sans text-xs text-muted-foreground hidden lg:block shrink-0">
              Staff Education Guide
            </span>
          </div>

          {/* Tab navigation */}
          <nav className="flex gap-0" role="tablist">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const ocidMap: Record<Tab, string> = {
                study: "nav.study_mode.tab",
                quiz: "nav.quiz_mode.tab",
                chat: "nav.chat_mode.tab",
                glossary: "nav.glossary.tab",
              };
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  data-ocid={ocidMap[tab.id]}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 font-sans text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-xs">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "study" && (
                <StudyMode
                  requestedSection={studySection}
                  onSectionHandled={() => setStudySection(undefined)}
                />
              )}
              {activeTab === "quiz" && <QuizMode />}
              {activeTab === "chat" && <ChatMode />}
              {activeTab === "glossary" && <GlossaryTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} AMA Sushi · Rosewood Miramar Beach ·
            Staff Training Guide
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
