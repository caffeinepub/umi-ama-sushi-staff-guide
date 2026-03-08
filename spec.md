# Gooni — Umi AMA Sushi Staff Education

## Current State
The app is a full-stack React + Motoko staff education tool called Umi. It has four tabs:
- **Study** — browsable menu sections, Wine Program section (WineSection.tsx), Sake Program section (SakeSection.tsx)
- **Quiz** — interactive quiz with category filtering (menu, forbes, wine, sake)
- **Chat** — freeform Q&A powered by chatEngine.ts
- **Glossary** — searchable Japanese culinary terms

Data files: menuData.ts, wineData.ts, sakeData.ts, quizData.ts, glossaryData.ts, chatEngine.ts.

The Wine Program tab covers 13 by-the-glass wines. There is no White Burgundy bottle program section.

## Requested Changes (Diff)

### Add
- **`src/data/whiteBurgundyData.ts`** — Data file with:
  - 5 White Burgundy bottle-format wines (Tribut Chablis, Hubert Lamy Saint-Aubin, Bachelet-Monnot Chassagne, Ramonet Puligny, Chavy-Chouet Meursault)
  - Each wine: id, name, appellation, village, pronunciation (if any), grape, bottlePrice, glassware, tastingNotes, vintageCharacter, terroir, winemaking, estate, foodPairing, guestOneLiner
  - Burgundy hierarchy context (5 villages with descriptions)
  - Key terms: 1er Cru, Climat, Kimmeridgian limestone, Lutte raisonnée, Bâtonnage
  - Village positioning guide (guest preference → wine recommendation)
  - `findWhiteBurgundy(query)` helper function

- **`src/components/WhiteBurgundySection.tsx`** — New component modeled after WineSection.tsx/SakeSection.tsx, displaying:
  - Intro header explaining bottle-format elevated pairings
  - Burgundy hierarchy context panel (collapsible or always-visible reference card showing villages north→south)
  - Key terms reference panel (collapsible)
  - Village positioning guide (quick reference table: guest preference → recommendation)
  - One card per wine with: name, appellation badge, pronunciation, bottle price, glassware, tasting notes, vintage character, terroir, winemaking, estate (expandable section), food pairing at AMA, guest one-liner

- **10 new quiz questions** (category: `"white-burgundy"`) added to quizData.ts covering:
  - Beauroy pronunciation (Bo-rooy)
  - Kimmeridgian limestone definition
  - Casse-tête meaning
  - Hubert Lamy vine density
  - Ramonet's historical story
  - 1er Cru definition
  - Lutte raisonnée
  - Richest village / best pour for opulence
  - Saint-Aubin value story
  - 2021 vintage truth/false

- **Chat engine handlers** in chatEngine.ts for:
  - White Burgundy general queries (village hierarchy, positioning)
  - Individual wine lookups via findWhiteBurgundy()
  - Burgundy key terms (1er Cru, Kimmeridgian, Bâtonnage, Lutte raisonnée, Climat)
  - Village-based recommendations ("richest", "crisp and mineral", "most prestigious", "value")

### Modify
- **StudyMode.tsx** — Add a "White Burgundy" tab button (with wine bottle icon) alongside the Wine Program and Sake Program tabs. When active, render `<WhiteBurgundySection />`. Update header text/description for this new section.
- **quizData.ts** — Add `"white-burgundy"` to the QuizQuestion category union type and add 10 new questions.
- **QuizMode.tsx** — Add "White Burgundy" as a selectable quiz category option.
- **chatEngine.ts** — Import whiteBurgundyData and add response handlers.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/data/whiteBurgundyData.ts` with all 5 wines, context data, helper function
2. Add 10 quiz questions to `src/data/quizData.ts` with category `"white-burgundy"` (update union type)
3. Create `src/components/WhiteBurgundySection.tsx` with full card layout
4. Update `StudyMode.tsx` to add White Burgundy tab and render the new section
5. Update `QuizMode.tsx` to include white-burgundy category filter
6. Update `chatEngine.ts` to import and handle White Burgundy queries
7. Validate (typecheck, lint, build)
