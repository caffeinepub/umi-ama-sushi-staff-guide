# Gooni — AMA Sushi Staff Education Platform

## Current State
The app has Study, Quiz, Chat, and Glossary tabs. Study Mode has sections for menu items, Wine Program, Sake Program, and White Burgundy. Quiz Mode supports categories: menu, forbes, wine, sake, white-burgundy, and mix. Chat Mode uses chatEngine.ts with keyword matching across all programs. Data lives in separate files: menuData.ts, wineData.ts, sakeData.ts, whiteBurgundyData.ts, quizData.ts, chatEngine.ts.

## Requested Changes (Diff)

### Add
- `src/frontend/src/data/cocktailData.ts` — full cocktail program data: 8 signature cocktails + 3 mocktails, signature spirits glossary, quick reference table, and guest guidance rules
- `src/frontend/src/components/CocktailSection.tsx` — Study Mode panel for the cocktail program with: spirit context cards, cocktail cards (name + Japanese meaning, style, glass, ingredients, garnish, service sequence, guest one-liner, dietary flags), mocktail section clearly marked, and a quick reference table
- Add 10 cocktail quiz questions as a new `"cocktail"` category in quizData.ts
- Add cocktail knowledge to chatEngine.ts (spirit lookups, cocktail detail queries, mocktail guidance, dietary flags like Henka/dairy)
- Add `"cocktail"` focus option to QuizMode.tsx FOCUS_OPTIONS grid
- Add Cocktail Program tab to StudyMode section tabs and render CocktailSection when active

### Modify
- `quizData.ts` — extend QuizQuestion category union to include `"cocktail"`
- `QuizMode.tsx` — add cocktail focus option with appropriate icon (e.g. GlassWater or Martini)
- `StudyMode.tsx` — add cocktail tab button and conditional rendering of CocktailSection
- `chatEngine.ts` — import cocktailData and add cocktail-specific response branches

### Remove
- Nothing removed

## Implementation Plan
1. Create cocktailData.ts with all cocktail/mocktail data, spirits glossary, and guidance rules
2. Create CocktailSection.tsx component with spirits context, cocktail cards, mocktail section, and quick reference
3. Add 10 cocktail quiz questions (category: "cocktail") to quizData.ts
4. Wire cocktailData into chatEngine.ts with response branches for spirit queries, cocktail detail, mocktail guidance, dietary (Henka dairy, Dashi allium), and fat-washing/service notes
5. Add cocktail tab to StudyMode and cocktail focus option to QuizMode
