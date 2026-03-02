import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateResponse } from "@/data/chatEngine";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  role: "user" | "umi";
  text: string;
  timestamp: Date;
};

const SUGGESTED_QUESTIONS = [
  "What's in the Kanpachi Usuzukuri?",
  "How do I describe the Wagyu to a guest?",
  "What does CBR mean?",
  "Which rolls are safe for a shellfish allergy?",
  "What is binchotan charcoal?",
  "What pairs with the Gindara Kasuzuke?",
];

function formatResponse(text: string): React.ReactNode {
  // Handle **bold** markdown
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    const key = `part-${i}-${part.slice(0, 8)}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={key} className="italic text-foreground">
          {part.slice(1, -1)}
        </em>
      );
    }
    // Handle newlines
    return part.split("\n").map((line, lineIdx, arr) => {
      const lineKey = `${key}-line-${line.slice(0, 6)}-${lineIdx}`;
      return (
        <span key={lineKey}>
          {line}
          {lineIdx < arr.length - 1 && <br />}
        </span>
      );
    });
  });
}

let messageCounter = 0;

export function ChatMode() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: ++messageCounter,
      role: "umi",
      text: "Good evening. I am Umi — your guide to the AMA Sushi menu and the culinary traditions of Japan. How may I assist you today?\n\nYou are welcome to ask about any dish, ingredient, beverage pairing, allergen, or service technique. I am here to help you serve our guests with knowledge and confidence.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMessage: Message = {
        id: ++messageCounter,
        role: "user",
        text: text.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsTyping(true);

      // Simulate typing delay for natural feel
      const delay = 600 + Math.random() * 500;
      setTimeout(() => {
        const response = generateResponse(text.trim());
        setMessages((prev) => [
          ...prev,
          {
            id: ++messageCounter,
            role: "umi",
            text: response.text,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, delay);
    },
    [isTyping],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-4 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 md:py-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <MessageCircle className="w-5 h-5 text-gold" />
          <span className="text-sm tracking-widest uppercase font-sans text-muted-foreground">
            Ask Anything
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          Chat with Umi
        </h1>
        <p className="font-sans text-muted-foreground text-base leading-relaxed max-w-xl">
          Ask Umi anything about our menu, ingredients, service philosophy, or
          Japanese culinary traditions. She speaks with clarity, warmth, and
          precision.
        </p>
      </motion.div>

      {/* Suggested questions */}
      {messages.length === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-5"
        >
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-3">
            Suggested questions
          </p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                type="button"
                key={q}
                onClick={() => sendMessage(q)}
                className="font-sans text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-accent text-secondary-foreground hover:text-accent-foreground border border-border transition-colors duration-150"
              >
                {q}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Messages */}
      <div className="flex-1 space-y-4 mb-4 min-h-0">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "umi" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
              )}
              <div
                className={`max-w-[85%] md:max-w-[78%] rounded-xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-card text-card-foreground shadow-card rounded-tl-sm"
                }`}
              >
                <p className="font-sans text-sm leading-relaxed whitespace-pre-wrap">
                  {formatResponse(message.text)}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-gold" />
              </div>
              <div className="bg-card shadow-card rounded-xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1.5 items-center">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                      transition={{
                        duration: 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        onSubmit={handleSubmit}
        className="flex gap-2 items-end sticky bottom-0 pb-4 pt-2 bg-background"
      >
        <Textarea
          ref={textareaRef}
          data-ocid="chat.input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Umi anything about our menu…"
          rows={1}
          className="resize-none font-sans text-sm flex-1 min-h-[44px] max-h-[120px] bg-card border-border rounded-xl py-3 px-4 focus:ring-ring placeholder:text-muted-foreground"
          style={{ fieldSizing: "content" } as React.CSSProperties}
        />
        <Button
          data-ocid="chat.submit_button"
          type="submit"
          disabled={!input.trim() || isTyping}
          size="icon"
          className="h-11 w-11 rounded-xl flex-shrink-0"
        >
          <Send className="w-4 h-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </motion.form>
    </div>
  );
}
