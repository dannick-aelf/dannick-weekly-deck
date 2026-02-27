# Implementation Plan: Weekly Presentation Dashboard

**Branch**: `001-presentation-dashboard` | **Date**: 2026-02-26 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-presentation-dashboard/spec.md`

## Summary

Build a premium minimal web dashboard for creating, storing, and presenting weekly work-showcase decks. The app features a dark-mode wireframe aesthetic with neon accents, a Markdown slide editor with image/video support, five slide layout variants, a bento-grid presentation library, full-screen presentation mode, bilingual EN/CN interface, and Heroicon-based bottom navigation. All data is stored client-side using IndexedDB. No backend, no auth, no export — present directly from the app.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Next.js 15 (App Router, static export), Tailwind CSS 4, Framer Motion, Zustand, Dexie.js, CodeMirror 6, react-markdown, next-intl, @heroicons/react
**Storage**: IndexedDB via Dexie.js (presentations, slides, media blobs)
**Testing**: Vitest + React Testing Library
**Target Platform**: Modern browsers (Chrome 110+, Safari 16+, Firefox 115+, Edge 110+), responsive 375px–1440px
**Project Type**: Web application (client-side SPA via Next.js static export)
**Performance Goals**: 60fps animations, <2s dashboard load, <1s presentation launch, <300ms slide transitions
**Constraints**: Offline-capable, <200ms language switch, no backend, all data local
**Scale/Scope**: Single user, 50+ presentations, ~10 slides per deck average

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Evidence |
|-----------|--------|----------|
| I. Design Minimalism | PASS | Wireframe style + neon accents on dark backgrounds. Constrained palette (3 neon + neutrals). 8px grid. Heroicons only. Bento UI with purposeful whitespace. |
| II. Content-First Architecture | PASS | Presentation is the first-class entity. Data model centers on Presentation → Slides. Template-based creation with section dividers. Week/date tagging automatic. |
| III. Presentation-Ready Output | PASS | Markdown renders identically in editor preview and presentation mode. Same rendering pipeline. No export step. Full-screen mode from dashboard. |
| IV. Temporal Organization | PASS | Presentations indexed by week number + date range. Dashboard sorted most-recent-first. Bento grid with week labels on cards. |
| V. Performance & Fluidity | PASS | 60fps target via Framer Motion (GPU-accelerated transforms). IndexedDB for fast local reads. Preloaded slides in presentation mode. Static export eliminates server round-trips. |

All gates pass. No violations to justify.

## Project Structure

### Documentation (this feature)

```text
specs/001-presentation-dashboard/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx                # Root layout: providers, fonts, bottom nav
│   ├── page.tsx                  # Dashboard: bento grid, search, current week
│   ├── editor/
│   │   └── [id]/
│   │       └── page.tsx          # Slide editor: markdown + preview + layouts
│   ├── present/
│   │   └── [id]/
│   │       └── page.tsx          # Full-screen presentation mode
│   └── settings/
│       └── page.tsx              # Settings: language toggle, preferences
├── components/
│   ├── ui/                       # Base design system (buttons, cards, inputs)
│   ├── dashboard/                # Bento grid, presentation card, search bar
│   ├── editor/                   # Markdown editor, slide navigator, layout picker
│   ├── presentation/             # Slide renderer, transition controller, controls
│   └── navigation/               # Bottom nav bar, tab icons
├── lib/
│   ├── db/                       # Dexie.js schema, CRUD operations, media storage
│   ├── i18n/                     # next-intl config, EN/CN message files
│   ├── store/                    # Zustand stores (editor state, nav state, preferences)
│   └── utils/                    # Week calculation, date formatting, slug generation
├── types/                        # TypeScript interfaces (Presentation, Slide, etc.)
└── styles/
    └── globals.css               # Tailwind imports, design tokens, neon palette

public/
└── locales/
    ├── en.json                   # English translations
    └── zh.json                   # Chinese translations

next.config.ts                    # Static export config
tailwind.config.ts                # Custom theme: neon colors, dark mode, 8px spacing
package.json
tsconfig.json
```

**Structure Decision**: Single Next.js project with static export (`output: 'export'`). No backend directory needed — all logic is client-side. The `src/` directory uses Next.js App Router conventions with route groups for dashboard, editor, presentation, and settings screens.

## Complexity Tracking

No constitution violations to justify. The architecture follows the simplest viable structure: a single Next.js project with client-side storage and no external dependencies.
