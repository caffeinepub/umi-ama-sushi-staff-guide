# Umi - AMA Sushi Staff Guide

## Current State

The app is a staff education platform for AMA Sushi at Rosewood Miramar Beach. It features an AI guide named Umi who operates in three modes: Study, Quiz, and Chat. The full menu knowledge base is embedded, covering Zensai, Mein Kosu, AMA Specialty Rolls, Classic Rolls, Dessert, dietary info, and beverage pairings.

There is no App.tsx yet — the frontend needs to be fully built (it was previously deployed but files are not present in this session).

## Requested Changes (Diff)

### Add
- A **Glossary tab** (or section) accessible from the main navigation alongside Study, Quiz, and Chat modes
- A curated list of Japanese culinary and service terms relevant to AMA Sushi, each with a concise, elegant definition. Terms to include (at minimum):
  - **Usuzukuri** — thin-sliced sashimi technique
  - **Binchotan** — white oak charcoal used for grilling
  - **Myoga** — Japanese ginger blossom with a floral, subtle bite
  - **Sake-kasu** — sake lees (byproduct of sake brewing) used as a marinade
  - **Dashi** — Japanese soup stock, typically made from kombu and bonito flakes
  - **Wakame** — a type of edible seaweed
  - **Ponzu** — citrus-based sauce, often soy-enhanced
  - **Tamari** — a Japanese soy sauce, typically gluten-free
  - **Mirin** — sweet rice wine used in cooking
  - **Nori** — dried seaweed sheets
  - **Tosaka** — decorative edible seaweed (red variety)
  - **Namasu** — pickled daikon and carrot salad
  - **Gomae** — sesame dressing used in Japanese cuisine
  - **Karaage** — Japanese-style fried chicken
  - **Kewpie** — Japanese-style mayonnaise made with rice vinegar and egg yolks
  - **Salamander** — high-heat overhead broiler used in professional kitchens
  - **Shiso** — Japanese perilla leaf, aromatic herb
  - **Yuzu** — Japanese citrus fruit with a tart, floral flavor
  - **Burdock (Gobo)** — earthy root vegetable common in Japanese cooking
  - **Arare** — small Japanese rice crackers/puffs
  - **Mochi** — sweet Japanese rice cake
  - **Jidori** — a premium free-range chicken breed from Japan
  - **Wagyu** — Japanese beef known for high marbling; A5 is the highest grade
  - **Junmai Daiginjo** — premium sake category, highly polished rice, no added alcohol
  - **Nigori** — unfiltered sake, cloudy and slightly sweet
  - **Kani** — Japanese word for crab
  - **Sunomono** — Japanese vinegared dish
  - **Zensai** — Japanese word for starters/small bites
  - **Mein Kosu** — main course (as used at AMA Sushi)
  - **Soy paper** — thin sheet made from soybeans, used as a nori alternative

- Search/filter functionality on the glossary so staff can quickly look up terms
- Alphabetical grouping or sorting

### Modify
- Main navigation to include the Glossary as a fourth mode alongside Study, Quiz, and Chat

### Remove
- Nothing

## Implementation Plan

1. Build the full App.tsx with four-tab navigation: Study, Quiz, Chat, Glossary
2. Create a `GlossaryTab` component with the full list of 30 terms, alphabetically sorted
3. Add a search input that filters terms by name or definition in real time
4. Style the glossary to feel consistent with Umi's refined, calm aesthetic — clean typography, readable entries
5. Apply deterministic `data-ocid` markers to all interactive elements (tabs, search input, glossary items)
6. Validate (typecheck, lint, build) and fix any errors
