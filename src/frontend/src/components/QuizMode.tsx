import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QUIZ_QUESTIONS, type QuizQuestion } from "@/data/quizData";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GlassWater,
  GraduationCap,
  RotateCcw,
  Shuffle,
  Trophy,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

type QuizState = "idle" | "answering" | "feedback" | "complete";
type QuizFocus = "menu" | "forbes" | "wine" | "mix";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestionPool(focus: QuizFocus): QuizQuestion[] {
  if (focus === "menu") {
    return shuffle(QUIZ_QUESTIONS.filter((q) => q.category === "menu")).slice(
      0,
      10,
    );
  }
  if (focus === "forbes") {
    return shuffle(QUIZ_QUESTIONS.filter((q) => q.category === "forbes")).slice(
      0,
      10,
    );
  }
  if (focus === "wine") {
    return shuffle(QUIZ_QUESTIONS.filter((q) => q.category === "wine")).slice(
      0,
      10,
    );
  }
  return shuffle(QUIZ_QUESTIONS).slice(0, 10);
}

const FOCUS_OPTIONS: {
  id: QuizFocus;
  label: string;
  sublabel: string;
  icon: typeof BookOpen;
}[] = [
  {
    id: "menu",
    label: "Menu Knowledge",
    sublabel: "Dishes, ingredients & pairings",
    icon: BookOpen,
  },
  {
    id: "forbes",
    label: "Forbes Standards",
    sublabel: "Five-Star service criteria",
    icon: Award,
  },
  {
    id: "wine",
    label: "Wine Program",
    sublabel: "Wines, regions & pairings",
    icon: GlassWater,
  },
  {
    id: "mix",
    label: "Mix of All",
    sublabel: "Full knowledge base",
    icon: Shuffle,
  },
];

export function QuizMode() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [quizState, setQuizState] = useState<QuizState>("idle");
  const [score, setScore] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(
    null,
  );
  const [quizFocus, setQuizFocus] = useState<QuizFocus>("mix");

  const current = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;
  const progress =
    questions.length > 0
      ? ((currentIdx + (quizState === "feedback" ? 1 : 0)) / questions.length) *
        100
      : 0;

  const handleStart = () => {
    const pool = buildQuestionPool(quizFocus);
    setQuestions(pool);
    setCurrentIdx(0);
    setSelectedIdx(null);
    setAnsweredCorrectly(null);
    setScore(0);
    setQuizState("answering");
  };

  const handleAnswer = useCallback(
    (idx: number) => {
      if (quizState !== "answering" || !current) return;
      setSelectedIdx(idx);
      const correct = idx === current.correctIndex;
      setAnsweredCorrectly(correct);
      if (correct) setScore((s) => s + 1);
      setQuizState("feedback");
    },
    [quizState, current],
  );

  const handleNext = () => {
    if (isLast) {
      setQuizState("complete");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedIdx(null);
      setAnsweredCorrectly(null);
      setQuizState("answering");
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setAnsweredCorrectly(null);
    setScore(0);
    setQuizFocus("mix");
    setQuestions([]);
    setQuizState("idle");
  };

  const getScoreMessage = () => {
    if (!questions.length) return "";
    const pct = score / questions.length;
    if (pct === 1) return "A perfect score — Umi is proud of you.";
    if (pct >= 0.8) return "Excellent work. You are ready for the floor.";
    if (pct >= 0.6)
      return "A solid foundation. A little more study will serve you well.";
    return "Keep studying — every expert begins as a student.";
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 md:py-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="w-5 h-5 text-gold" />
          <span className="text-sm tracking-widest uppercase font-sans text-muted-foreground">
            Knowledge Check
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          Quiz Mode
        </h1>
        <p className="font-sans text-muted-foreground text-base leading-relaxed">
          Test your knowledge of the AMA Sushi menu, Forbes Five-Star service
          standards, and Japanese culinary traditions. Ten questions, drawn from
          our full knowledge base.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Idle state */}
        {quizState === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-card rounded-xl p-8 shadow-card"
          >
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold/15 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-2">
                Ready to begin?
              </h2>
              <p className="font-sans text-muted-foreground text-sm max-w-xs mx-auto">
                You will be presented with 10 questions. Choose your focus below
                to tailor the quiz to what you want to practice.
              </p>
            </div>

            {/* Focus selector */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground text-center mb-4">
                What would you like to focus on?
              </p>
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                aria-label="Quiz focus"
              >
                {FOCUS_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = quizFocus === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={isSelected}
                      data-ocid={`quiz.focus.${opt.id}.toggle`}
                      onClick={() => setQuizFocus(opt.id)}
                      className={`flex flex-col items-center gap-2 rounded-lg border p-4 text-center transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
                        isSelected
                          ? "bg-gold/15 border-gold/40 text-gold shadow-sm"
                          : "bg-secondary/40 border-border text-muted-foreground hover:bg-secondary/70 hover:border-border/80"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isSelected ? "text-gold" : "text-muted-foreground"}`}
                      />
                      <span
                        className={`font-sans text-sm font-semibold leading-tight ${isSelected ? "text-gold" : "text-foreground"}`}
                      >
                        {opt.label}
                      </span>
                      <span
                        className={`font-sans text-xs leading-tight ${isSelected ? "text-gold/70" : "text-muted-foreground"}`}
                      >
                        {opt.sublabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleStart}
                data-ocid="quiz.start.primary_button"
                className="font-sans px-8"
              >
                Begin Quiz
              </Button>
            </div>
          </motion.div>
        )}

        {/* Answering / Feedback */}
        {(quizState === "answering" || quizState === "feedback") && current && (
          <motion.div
            key={`question-${currentIdx}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-sans text-xs text-muted-foreground">
                  Question {currentIdx + 1} of {questions.length}
                </span>
                <span className="font-sans text-xs text-muted-foreground font-medium">
                  Score: {score}
                </span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div
              data-ocid="quiz.question.card"
              className="bg-card rounded-xl p-6 md:p-8 shadow-card mb-4"
            >
              {/* Question type + category badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="text-xs font-sans uppercase tracking-wide"
                >
                  {current.type === "true-false"
                    ? "True / False"
                    : current.type === "scenario"
                      ? "Scenario"
                      : "Multiple Choice"}
                </Badge>
                <Badge
                  variant="outline"
                  className={`text-xs font-sans uppercase tracking-wide ${
                    current.category === "forbes"
                      ? "border-gold/40 text-gold bg-gold/10"
                      : current.category === "wine"
                        ? "border-highlight/40 text-highlight bg-highlight/10"
                        : "border-border text-muted-foreground"
                  }`}
                >
                  {current.category === "forbes"
                    ? "Forbes Standards"
                    : current.category === "wine"
                      ? "Wine Program"
                      : "Menu Knowledge"}
                </Badge>
              </div>

              <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6">
                {current.question}
              </p>

              {/* Options */}
              <div className="space-y-3">
                {current.options.map((option, optIdx) => {
                  let variant: "default" | "correct" | "incorrect" | "idle" =
                    "idle";
                  if (quizState === "feedback") {
                    if (optIdx === current.correctIndex) variant = "correct";
                    else if (optIdx === selectedIdx) variant = "incorrect";
                  }

                  return (
                    <motion.button
                      key={option}
                      type="button"
                      data-ocid={`quiz.answer.button.${optIdx + 1}`}
                      onClick={() => handleAnswer(optIdx)}
                      disabled={quizState === "feedback"}
                      whileHover={
                        quizState === "answering" ? { scale: 1.01 } : {}
                      }
                      whileTap={
                        quizState === "answering" ? { scale: 0.99 } : {}
                      }
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 font-sans text-sm ${
                        variant === "correct"
                          ? "bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-900/20 dark:border-emerald-700 dark:text-emerald-200"
                          : variant === "incorrect"
                            ? "bg-red-50 border-red-300 text-red-900 dark:bg-red-900/20 dark:border-red-700 dark:text-red-200"
                            : quizState === "feedback"
                              ? "bg-secondary/50 border-border text-muted-foreground opacity-60 cursor-default"
                              : "bg-secondary/60 border-border text-foreground hover:bg-accent hover:border-accent cursor-pointer"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-medium ${
                            variant === "correct"
                              ? "border-emerald-400 bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-200"
                              : variant === "incorrect"
                                ? "border-red-400 bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                                : "border-border bg-card text-muted-foreground"
                          }`}
                        >
                          {variant === "correct" ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : variant === "incorrect" ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            String.fromCharCode(65 + optIdx)
                          )}
                        </span>
                        {option}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Feedback */}
            <AnimatePresence>
              {quizState === "feedback" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className={`rounded-xl p-5 mb-4 border ${
                    answeredCorrectly
                      ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700"
                      : "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {answeredCorrectly ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p
                        className={`font-sans text-sm font-semibold mb-1 ${
                          answeredCorrectly
                            ? "text-emerald-800 dark:text-emerald-300"
                            : "text-amber-800 dark:text-amber-300"
                        }`}
                      >
                        {answeredCorrectly
                          ? "Correct — well done."
                          : "Not quite right."}
                      </p>
                      <p className="font-sans text-sm text-foreground leading-relaxed">
                        {current.explanation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next button */}
            {quizState === "feedback" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-end"
              >
                <Button
                  onClick={handleNext}
                  data-ocid="quiz.next.primary_button"
                  className="font-sans gap-2"
                >
                  {isLast ? "See Results" : "Next Question"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Complete */}
        {quizState === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-xl p-8 shadow-card text-center"
          >
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gold/15 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-serif text-3xl text-foreground mb-1">
              {score} / {questions.length}
            </h2>
            <p className="font-sans text-muted-foreground text-sm mb-2">
              {Math.round((score / questions.length) * 100)}% correct
            </p>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-6 mx-auto max-w-xs">
              <motion.div
                className="h-full bg-gold rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(score / questions.length) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
            </div>
            <p className="font-serif text-lg text-foreground italic mb-8">
              "{getScoreMessage()}"
            </p>
            <Button
              onClick={handleRestart}
              data-ocid="quiz.restart.secondary_button"
              variant="outline"
              className="font-sans gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
