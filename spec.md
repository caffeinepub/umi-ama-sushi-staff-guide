# Gooni (Umi — AMA Sushi Staff Education)

## Current State
The app has Study, Quiz, Chat, and Glossary tabs. It knows the full AMA Sushi menu, Forbes Five-Star standards, and Japanese culinary glossary. Quiz mode covers Menu and Forbes categories. Chat mode (chatEngine.ts) answers questions about menu items, allergens, pairings, and Forbes standards.

## Requested Changes (Diff)

### Add
- **Wine data file** (`src/data/wineData.ts`) — 13 wines organized into 4 categories (Champagne & Sparkling, White Wines, Rosé, Red Wines) with full detail per wine: name, pronunciation, region, grapes, glassWine (flute / Burgundy / Bordeaux / AP), glassPrice, bottlePrice, tastingNotes, winemaking, keyFacts, foodPairing, guestOneLiner.
- **Wine tab** in Study Mode — a new tab section labeled "Wine" inside StudyMode that renders wine cards. Each card shows: name, pronunciation (if applicable), region, grape varieties, glass/bottle price, glassware, tasting notes, winemaking notes, key facts, food pairing (if listed), and the guest one-liner. Cards grouped by category with category headers.
- **Wine quiz questions** (12 new questions) added to `quizData.ts` with `category: "wine"` — drawn from the provided wine quiz question bank.
- **Quiz mode update** — the quiz focus prompt now offers "Menu Knowledge", "Forbes Service Standards", "Wine Program", or "Mix of All". Wine category questions are selectable.
- **Chat engine updates** — add wine-aware responses to `chatEngine.ts`:
  - Pronunciation queries ("how do you say", "pronounce")
  - Wine pairing queries ("what wine", "wine with", "suggest a wine")
  - Specific wine lookups by name
  - Price queries ("how much is", "price of")
  - Glassware queries ("what glass", "glassware for")
  - General wine program overview

### Modify
- `quizData.ts` — append 12 wine quiz questions.
- `chatEngine.ts` — extend with wine knowledge and response handlers.
- `StudyMode.tsx` — add "Wine" as a tab section that renders `WineSection` component.
- `QuizMode.tsx` — update category selector to include "Wine Program" option.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/data/wineData.ts` with all 13 wines and full detail.
2. Append 12 wine quiz questions to `quizData.ts` with `category: "wine"`.
3. Update `chatEngine.ts` with wine-related response logic.
4. Create `WineSection.tsx` component for rendering wine cards in Study Mode.
5. Update `StudyMode.tsx` to add a "Wine" section tab that renders `WineSection`.
6. Update `QuizMode.tsx` to include "Wine Program" as a quiz category filter option.
7. Validate (typecheck, lint, build).
