# Gooni — Umi AMA Sushi Staff Training Platform

## Current State
The app is a full-stack staff training platform for AMA Sushi at Rosewood Miramar Beach. It features:
- **Study Mode**: Menu sections (Starters, Zensai, Mains, Specialty Rolls, Classic Rolls, Dessert) and a Wine Program tab with 13 wines
- **Quiz Mode**: Questions across menu, Forbes service standards, and wine categories
- **Chat Mode**: Umi chat engine with knowledge of menu items, Forbes standards, wine data, and glossary
- **Glossary Tab**: 30 Japanese culinary terms

The sake program is referenced only as beverage pairings inside menu items (menuData.ts). There is no dedicated sake data file, no Sake tab in Study Mode, no sake-specific quiz questions, and the chat engine has only a brief generic sake fallback response.

## Requested Changes (Diff)

### Add
- `src/frontend/src/data/sakeData.ts` — full sake program data: 6 sakes with classification, region, rice variety, milling %, SMV, ABV, acidity, aroma, palate, winemaking notes, brewery history, guest one-liner, food pairing, glassware, and pricing
- Sake fundamentals data: 8 classification definitions (Honjozo through Nigori), SMV explanation, rice milling % explanation, and the "Sake Ladder" (6-step progression)
- `src/frontend/src/components/SakeSection.tsx` — Study Mode panel for the sake program, styled to match WineSection
- 12 sake quiz questions in `quizData.ts` (new `"sake"` category), covering classifications, SMV, rice varietals, brewery facts, and guest scenario questions
- Robust sake-specific response handlers in `chatEngine.ts` covering: sake overview, individual sake lookups, classification questions, SMV, rice milling, sake ladder, food pairing, brewery history

### Modify
- `src/frontend/src/components/StudyMode.tsx` — add a "Sake Program" tab alongside the existing Wine Program tab; render `<SakeSection />` when active
- `src/frontend/src/data/chatEngine.ts` — replace the generic sake fallback with rich sake-specific handlers using `findSake()` and sake fundamentals knowledge
- `src/frontend/src/components/QuizMode.tsx` — include `"sake"` as a selectable quiz category option (alongside menu, forbes, wine)
- `src/frontend/src/data/quizData.ts` — add 12 sake questions with category `"sake"`

### Remove
- Nothing removed

## Implementation Plan
1. Create `sakeData.ts` with full type definitions, 6 sake entries, fundamentals, and `findSake()` utility
2. Add 12 sake quiz questions to `quizData.ts` with category `"sake"`
3. Update `chatEngine.ts` to import sakeData and handle: individual sake lookups, classification questions (junmai, daiginjo, nigori, honjozo, SMV, milling, etc.), sake ladder, sake program overview
4. Create `SakeSection.tsx` component mirroring WineSection's layout with sake-specific fields (SMV badge, milling %, rice varietal, sake ladder)
5. Update `StudyMode.tsx` to add a Sake Program tab and render `<SakeSection />`
6. Update `QuizMode.tsx` to include sake as a quiz category option
