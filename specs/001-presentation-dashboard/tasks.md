# Tasks: Weekly Presentation Dashboard

**Input**: Design documents from `/specs/001-presentation-dashboard/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md

**Tests**: Not explicitly requested — test tasks are omitted.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup

**Purpose**: Project initialization, dependency installation, and directory scaffolding

- [x] T001 Initialize Next.js 15 project with TypeScript and App Router in `./` (run `npx create-next-app@latest` with TypeScript, Tailwind CSS, App Router, `src/` directory enabled)
- [x] T002 Install runtime dependencies: `dexie`, `framer-motion`, `zustand`, `@codemirror/state`, `@codemirror/view`, `@codemirror/lang-markdown`, `@codemirror/theme-one-dark`, `react-markdown`, `remark-gfm`, `rehype-raw`, `next-intl`, `@heroicons/react`, `uuid`
- [x] T003 [P] Configure `next.config.ts` for static export (`output: 'export'`) and set base path if needed
- [x] T004 [P] Configure `tailwind.config.ts` with custom theme: neon palette (`#00f0ff`, `#ff00e5`, `#a8ff00`), dark backgrounds (`#0a0a0a`, `#111111`, `#1a1a1a`), wireframe borders (`#2a2a2a`, `#404040`), text colors (`#f5f5f5`, `#a3a3a3`, `#525252`), and 8px spacing scale
- [x] T005 [P] Set up global styles in `src/styles/globals.css` with Tailwind imports, dark-mode defaults, neon accent CSS variables, and base typography (system font stack)
- [x] T006 [P] Create directory scaffolding: `src/components/ui/`, `src/components/dashboard/`, `src/components/editor/`, `src/components/presentation/`, `src/components/navigation/`, `src/lib/db/`, `src/lib/i18n/`, `src/lib/store/`, `src/lib/utils/`, `src/types/`, `public/locales/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Define TypeScript interfaces for all entities in `src/types/index.ts`: `Presentation`, `Slide` (with `LayoutVariant` enum), `Media`, `UserPreferences` — matching data-model.md exactly
- [x] T008 Implement Dexie.js database schema and connection in `src/lib/db/index.ts`: define `ChronoAIDB` class extending Dexie, version 1 stores for `presentations`, `slides`, `media`, `preferences` with indexes per data-model.md
- [x] T009 [P] Implement presentation CRUD operations in `src/lib/db/presentations.ts`: `createPresentation()` (with default template slides), `getPresentation()`, `updatePresentation()`, `deletePresentation()` (cascade slides + orphaned media), `listPresentations()` (sorted by createdAt desc)
- [x] T010 [P] Implement slide CRUD operations in `src/lib/db/slides.ts`: `createSlide()`, `getSlide()`, `updateSlide()`, `deleteSlide()`, `listSlides(presentationId)` (sorted by order), `reorderSlides(presentationId, fromIndex, toIndex)` with batch transaction
- [x] T011 [P] Implement media CRUD operations in `src/lib/db/media.ts`: `storeMedia(file: File)` → saves blob + metadata, returns Media record; `getMedia(id)` → returns blob as object URL; `deleteMedia(id)`; `getStorageUsage()` → estimates IndexedDB quota usage
- [x] T012 [P] Implement UserPreferences CRUD in `src/lib/db/preferences.ts`: `getPreferences()` (auto-create singleton if missing), `updatePreferences(partial)` — always uses id `"user-prefs"`
- [x] T013 [P] Implement week calculation utilities in `src/lib/utils/week.ts`: `getCurrentWeek()` → `{ weekNumber, year, dateRangeStart, dateRangeEnd }`, `formatWeekLabel(weekNumber, year)` → "Week 9, 2026", `getWeekDateRange(weekNumber, year)` → Monday–Sunday ISO dates
- [x] T014 [P] Create Zustand editor store in `src/lib/store/editor-store.ts`: current presentation ID, current slide index, dirty flag, auto-save timer reference
- [x] T015 [P] Create Zustand navigation store in `src/lib/store/nav-store.ts`: active tab ID, scroll positions map (tab → scrollY), set/get scroll position per tab
- [x] T016 [P] Create Zustand preferences store in `src/lib/store/preferences-store.ts`: language (`en` | `zh`), persist to IndexedDB via `updatePreferences()`, hydrate on app load
- [x] T017 Build unified Markdown rendering pipeline in `src/lib/utils/markdown-renderer.tsx`: React component wrapping react-markdown with `remark-gfm`, `rehype-raw`, custom `rehype-media-resolver` plugin (resolves `media://uuid` → object URL via `getMedia()`), and neon-themed prose styling via Tailwind
- [x] T018 Build base UI design system components in `src/components/ui/`: `Button.tsx` (primary/secondary/icon variants, pressed state 0.8 opacity, disabled 0.4 opacity, 48px min height, neon accent), `Card.tsx` (dark surface bg, 16px padding, 12px border-radius, wireframe border), `Input.tsx` (dark bg, neon focus ring, 48px height, 16px font), `Dialog.tsx` (modal overlay with backdrop, slide-up animation), `IconButton.tsx` (44x44px touch target, Heroicon slot)

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 — Create a Weekly Presentation (Priority: P1) MVP

**Goal**: User can create a new weekly presentation from a template, add/edit/reorder slides with 5 layout variants, write Markdown with live preview, embed images/videos, and auto-save

**Independent Test**: Open app → tap "New Presentation" → verify template slides (title, Accomplishments, Explorations) appear → add 3 slides with Markdown content and an image → leave and return → verify all content preserved

### Implementation for User Story 1

- [x] T019 [P] [US1] Build layout picker component in `src/components/editor/LayoutPicker.tsx`: grid of 5 layout variant options (title-body, title-only, full-bleed-media, split, quote) with Heroicon illustrations, neon highlight on selected, returns selected `LayoutVariant`
- [x] T020 [P] [US1] Build slide navigator sidebar in `src/components/editor/SlideNavigator.tsx`: vertical list of slide thumbnails with order numbers, active slide highlighted with neon border, "Add Slide" button at bottom, drag handle for reorder, section tag badges (Accomplishments/Explorations)
- [x] T021 [P] [US1] Build CodeMirror 6 Markdown editor component in `src/components/editor/MarkdownEditor.tsx`: dark theme matching wireframe aesthetic, Markdown syntax highlighting, configurable height, onChange callback emitting raw Markdown string, placeholder text
- [x] T022 [P] [US1] Build media upload component in `src/components/editor/MediaUploader.tsx`: file picker (accept images + videos), stores file via `storeMedia()`, inserts Markdown reference (`![alt](media://uuid)` for images, `<video src="media://uuid">` for videos) at cursor position, shows upload progress, warns if file >50MB
- [x] T023 [US1] Build slide editor content area in `src/components/editor/SlideEditorContent.tsx`: renders different editing UIs based on `layoutVariant` — title-body: title input + split markdown/preview; title-only: large centered title input; full-bleed-media: media upload zone + optional overlay title; split: title + markdown left + media right; quote: quote textarea + attribution input
- [x] T024 [US1] Build slide editor page in `src/app/editor/[id]/page.tsx`: loads presentation by ID from Dexie, renders `SlideNavigator` (left) + `SlideEditorContent` (center) + `MarkdownPreview` (right for applicable layouts), title input for presentation name, week/date display (read-only), back button to dashboard
- [x] T025 [US1] Implement auto-save logic in `src/lib/utils/auto-save.ts`: debounced save (500ms after last edit), calls `updateSlide()` and `updatePresentation()` (updatedAt + slideCount), visual indicator (saved/saving) in editor UI, integrate with editor store dirty flag
- [x] T026 [US1] Implement default presentation template creation in `src/lib/db/presentations.ts`: `createPresentation()` generates 5 template slides per data-model.md (title slide with "Week N: dateRange", Accomplishments divider + empty body, Explorations divider + empty body), auto-tags with current week
- [x] T027 [US1] Implement slide drag-and-drop reorder in `src/components/editor/SlideNavigator.tsx`: drag handle on each thumbnail, visual drop indicator, calls `reorderSlides()` on drop, animated re-flow via Framer Motion `Reorder` component

**Checkpoint**: User Story 1 fully functional — can create, edit, and auto-save weekly presentations with all 5 layouts

---

## Phase 4: User Story 2 — Present a Weekly Deck (Priority: P1)

**Goal**: User can enter full-screen presentation mode from any saved deck, navigate slides with swipe/tap/keyboard, see smooth transitions, and exit back to dashboard

**Independent Test**: Save a presentation with 5+ slides → tap "Present" → verify full-screen, no dashboard UI visible → swipe through all slides → verify transitions → press Escape → verify return to dashboard

### Implementation for User Story 2

- [x] T028 [P] [US2] Build slide renderer component in `src/components/presentation/SlideRenderer.tsx`: renders a single slide in presentation mode based on `layoutVariant` — uses the unified Markdown pipeline for body content, full-viewport sizing, neon accent colors, dark background, responsive font scaling
- [x] T029 [P] [US2] Build presentation controls overlay in `src/components/presentation/PresentationControls.tsx`: minimal forward/back arrows (Heroicons, semi-transparent, fade on idle after 3s), slide counter (e.g., "3 / 12"), close button (top-right), all with 44x44px touch targets
- [x] T030 [US2] Implement slide transition animations in `src/components/presentation/SlideTransition.tsx`: Framer Motion `AnimatePresence` with horizontal slide direction (left for forward, right for back), 300ms duration, GPU-accelerated transforms, respect `prefers-reduced-motion`
- [x] T031 [US2] Implement gesture navigation in `src/components/presentation/GestureHandler.tsx`: Framer Motion `useDrag` for swipe left (next) / swipe right (prev) / swipe down (exit), velocity threshold for activation, keyboard listeners for ArrowLeft/ArrowRight/Escape
- [x] T032 [US2] Build presentation mode page in `src/app/present/[id]/page.tsx`: loads all slides for presentation, preloads media object URLs, renders `SlideRenderer` + `SlideTransition` + `GestureHandler` + `PresentationControls`, enters fullscreen via Fullscreen API, hides bottom nav, stores dashboard scroll position before entering
- [x] T033 [US2] Implement slide preloading in `src/lib/utils/preload.ts`: on presentation entry, resolve all `media://uuid` references across all slides to object URLs, cache in memory map, pass to `SlideRenderer` for instant rendering with no load spinners

**Checkpoint**: User Stories 1 AND 2 complete — full create-to-present pipeline works

---

## Phase 5: User Story 3 — Browse and Manage Presentation History (Priority: P2)

**Goal**: Dashboard shows all presentations in a bento grid, sorted chronologically, with search/filter and management actions (duplicate, rename, delete, status toggle)

**Independent Test**: Create 5+ presentations across different weeks → verify bento grid order → search by title → long-press a card → test duplicate/rename/delete → verify grid re-flows

### Implementation for User Story 3

- [x] T034 [P] [US3] Build presentation card component in `src/components/dashboard/PresentationCard.tsx`: displays week label, title (truncated at 80 chars), slide count, status badge (draft/complete with neon color coding), preview thumbnail (first slide rendered as mini preview), "Present" quick-action button, long-press triggers context menu — card uses bento-compatible sizing (1x1 or 2x1)
- [x] T035 [P] [US3] Build bento grid layout component in `src/components/dashboard/BentoGrid.tsx`: responsive CSS grid with auto-placement, card sizes (1x1 standard, 2x1 for current week's deck), gap spacing per design system, Framer Motion `layoutId` for smooth re-flow on filter/delete, skeleton loading state while presentations load
- [x] T036 [P] [US3] Build search bar component in `src/components/dashboard/SearchBar.tsx`: pill-shaped input with Heroicon search icon (left), clear button (right, appears when text entered), real-time filtering (debounced 200ms), searches across presentation titles and slide body content via Dexie queries
- [x] T037 [P] [US3] Build context menu component in `src/components/ui/ContextMenu.tsx`: floating menu triggered by long-press or right-click, options list with Heroicons (DocumentDuplicateIcon, PencilIcon, TrashIcon), backdrop dismissal, Framer Motion scale-in animation, positioned relative to trigger element
- [x] T038 [US3] Implement presentation management actions in `src/lib/db/presentations.ts`: `duplicatePresentation(id)` — deep copy presentation + all slides + media references with new IDs and "(Copy)" title suffix; `renamePresentation(id, newTitle)`; `toggleStatus(id)` — flip draft ↔ complete
- [x] T039 [US3] Build dashboard page in `src/app/page.tsx`: loads presentations via `listPresentations()`, renders `SearchBar` (top) + `BentoGrid` with `PresentationCard` for each result, empty state component when no presentations exist (illustration + "Create your first deck" CTA), current week highlight, floating "+" create button
- [x] T040 [US3] Build delete confirmation dialog using `src/components/ui/Dialog.tsx`: "Delete [title]?" message, destructive red confirm button, cancel button, calls `deletePresentation()` with cascade on confirm

**Checkpoint**: Dashboard fully functional with search, management, and bento grid

---

## Phase 6: User Story 4 — Switch Language EN/CN (Priority: P2)

**Goal**: User can toggle interface language between English and Chinese, all UI text updates instantly, preference persists across sessions

**Independent Test**: Open settings → switch to Chinese → navigate all screens → verify every label is translated → close and reopen app → verify Chinese persists → switch back to English

### Implementation for User Story 4

- [x] T041 [P] [US4] Create English translation file in `public/locales/en.json`: all interface strings organized by section — dashboard (title, search placeholder, empty state, card labels), editor (slide actions, layout names, section tags, auto-save status), presentation (controls, slide counter), settings (language label, preferences), navigation (tab labels), common (confirm, cancel, delete, save)
- [x] T042 [P] [US4] Create Chinese translation file in `public/locales/zh.json`: mirror structure of `en.json` with accurate Simplified Chinese translations for all keys
- [x] T043 [US4] Set up next-intl configuration in `src/lib/i18n/config.ts` and `src/lib/i18n/request.ts`: define supported locales (`en`, `zh`), default locale (`en`), load messages from `public/locales/`, configure client-side locale switching without page reload
- [x] T044 [US4] Wire i18n provider into root layout in `src/app/layout.tsx`: wrap app with `NextIntlClientProvider`, read initial locale from preferences store (hydrated from IndexedDB), pass messages for current locale
- [x] T045 [US4] Build language toggle component in `src/components/ui/LanguageToggle.tsx`: segmented control or toggle switch showing "EN / 中文", active state with neon accent, calls preferences store `setLanguage()` which updates Zustand + persists to IndexedDB
- [x] T046 [US4] Build settings page in `src/app/settings/page.tsx`: language toggle, app info section, "Clear All Data" danger zone with confirmation dialog
- [x] T047 [US4] Replace all hardcoded strings across existing components with `useTranslations()` calls: dashboard page, editor page, presentation controls, navigation labels, dialog text, empty states, button labels

**Checkpoint**: Full bilingual support — every interface string translatable, preference persisted

---

## Phase 7: User Story 5 — Bottom Navigation Bar (Priority: P3)

**Goal**: Minimal bottom nav with 3 Heroicon tabs (Dashboard, Create, Settings), neon active indicator, smooth transitions, scroll position preservation

**Independent Test**: Tap each tab → verify correct page loads → verify active tab has neon indicator → scroll down on dashboard → switch to Settings → switch back → verify scroll position preserved

### Implementation for User Story 5

- [x] T048 [US5] Build bottom navigation bar component in `src/components/navigation/BottomNav.tsx`: fixed bottom, 3 tabs (HomeIcon → Dashboard, PlusCircleIcon → Create, Cog6ToothIcon → Settings), outline icons default, solid icon + neon underline for active tab, subtle labels below icons, 64px height + safe area padding, hidden during presentation mode
- [x] T049 [US5] Implement scroll position preservation in `src/components/navigation/BottomNav.tsx`: on tab switch, save current `window.scrollY` to nav store for outgoing tab, restore saved scrollY for incoming tab after route transition completes
- [x] T050 [US5] Integrate bottom nav into root layout in `src/app/layout.tsx`: render `BottomNav` as fixed element at viewport bottom, add bottom padding to page content to prevent nav overlap, conditionally hide when `present/` route is active, wire "Create" tab to trigger `createPresentation()` then navigate to editor

**Checkpoint**: All user stories complete — full app functional

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Quality improvements that affect multiple user stories

- [x] T051 [P] Implement skeleton loading states in `src/components/ui/Skeleton.tsx`: card skeleton for dashboard, slide skeleton for editor, shimmer animation (1.5s), used whenever Dexie queries are pending
- [x] T052 [P] Build empty state component in `src/components/ui/EmptyState.tsx`: centered icon (Heroicons InboxIcon), title, description, CTA button — used on dashboard (no presentations) and editor (no slides beyond template)
- [x] T053 [P] Implement `prefers-reduced-motion` support across all Framer Motion animations: wrap motion values with `useReducedMotion()` hook, disable transitions when active, fall back to instant state changes
- [x] T054 [P] Implement storage quota warning in `src/lib/utils/storage-warning.ts`: check `navigator.storage.estimate()` on media upload, show toast warning at 80% usage, block upload at 95% with clear message
- [x] T055 Responsive layout testing and adjustments across all pages: verify bento grid at 375px/768px/1024px/1440px breakpoints, verify editor split-pane collapses to stacked on mobile, verify presentation mode scales typography, verify bottom nav safe area on iOS
- [x] T056 Performance optimization pass: lazy-load editor route (`next/dynamic`), lazy-load CodeMirror bundle, optimize Dexie queries with `.limit()` for dashboard, verify Framer Motion animations use GPU-accelerated properties only (`transform`, `opacity`)
- [x] T057 Final accessibility pass: verify all interactive elements ≥44x44px touch targets, verify WCAG 2.1 AA contrast ratios on neon colors against dark backgrounds, add `aria-label` to icon-only buttons, verify keyboard navigation flow (tab order, focus indicators)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational — creates the core editing experience
- **User Story 2 (Phase 4)**: Depends on Foundational — can run in parallel with US1 (shared Markdown pipeline only)
- **User Story 3 (Phase 5)**: Depends on Foundational — benefits from US1 (presentations to display) but independently testable
- **User Story 4 (Phase 6)**: Depends on all prior stories being complete (needs all strings to exist before replacing them)
- **User Story 5 (Phase 7)**: Depends on Foundational — can start after Phase 2 but best after US3 (dashboard page exists)
- **Polish (Phase 8)**: Depends on all user stories being complete

### Recommended Execution Order

```text
Phase 1 (Setup)
    ↓
Phase 2 (Foundational)
    ↓
Phase 3 (US1: Create) ←── MVP checkpoint
    ↓
Phase 4 (US2: Present) ←── Core product complete
    ↓
Phase 5 (US3: Dashboard) ←── Full dashboard experience
    ↓
Phase 7 (US5: Bottom Nav) ←── Navigation structure
    ↓
Phase 6 (US4: Language) ←── i18n applied after all strings exist
    ↓
Phase 8 (Polish)
```

### Parallel Opportunities

- **Phase 1**: T003, T004, T005, T006 can all run in parallel after T001+T002
- **Phase 2**: T009, T010, T011, T012, T013, T014, T015, T016, T017 can run in parallel after T007+T008
- **Phase 3**: T019, T020, T021, T022 can run in parallel (different component files)
- **Phase 4**: T028, T029 can run in parallel
- **Phase 5**: T034, T035, T036, T037 can run in parallel
- **Phase 6**: T041, T042 can run in parallel
- **Phase 8**: T051, T052, T053, T054 can run in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 — Create presentations
4. **STOP and VALIDATE**: Create a presentation, add slides, verify auto-save
5. Deploy/demo if ready — the core creation experience works

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add User Story 1 → Create presentations (MVP!)
3. Add User Story 2 → Present decks → Core product complete
4. Add User Story 3 → Dashboard with search/manage
5. Add User Story 5 → Bottom navigation (before i18n so strings exist)
6. Add User Story 4 → Bilingual support (all strings now exist to translate)
7. Polish → Skeleton loaders, accessibility, performance

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- US4 (Language) is sequenced after US5 (Navigation) because i18n replacement is most efficient when all interface strings already exist
