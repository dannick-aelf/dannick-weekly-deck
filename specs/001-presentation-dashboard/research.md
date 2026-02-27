# Research: Weekly Presentation Dashboard

**Branch**: `001-presentation-dashboard` | **Date**: 2026-02-26

## R1: Framework — Next.js 15 Static Export

**Decision**: Next.js 15 with App Router in static export mode (`output: 'export'`)

**Rationale**: Next.js provides the best developer experience for React apps with file-based routing, built-in TypeScript support, and a rich ecosystem. Static export mode generates a fully client-side SPA with no server requirements, meeting the offline-first constraint. The App Router provides clean URL structure for dashboard, editor, presentation, and settings routes.

**Alternatives considered**:
- **Vite + React Router**: Lighter build, but loses Next.js conventions, image optimization pipeline, and future extensibility (e.g., adding an API layer for cloud sync later).
- **Remix**: Strong server-side focus makes it a poor fit for a client-only app.
- **Astro**: Excellent for static content, but the app is highly interactive — Astro's partial hydration adds unnecessary complexity.

## R2: Client-Side Storage — Dexie.js (IndexedDB)

**Decision**: Dexie.js v4 as the IndexedDB wrapper for all persistent data.

**Rationale**: localStorage is capped at ~5MB, far too small for presentations with embedded images/videos. IndexedDB supports large binary blobs and Dexie.js provides a clean Promise-based API with live queries (reactive data binding). Media blobs are stored in a dedicated table without indexing the binary data itself, following Dexie best practices to avoid performance degradation.

**Alternatives considered**:
- **idb**: Thinner wrapper, but lacks live queries and the developer-friendly table API that Dexie provides. More boilerplate for CRUD operations.
- **localStorage**: 5MB limit rules it out for media-rich content.
- **OPFS (Origin Private File System)**: Good for large files but limited browser support and no reactive query layer.

**Storage architecture**:
- `presentations` table: metadata (title, week, dates, status). Indexed on `weekNumber`, `createdAt`.
- `slides` table: content per slide, foreign-keyed to presentation. Indexed on `presentationId`, `order`.
- `media` table: binary blobs (images, videos) stored as `Blob` objects. Indexed on `id` only — no binary indexing.

## R3: Markdown Editor — CodeMirror 6 + react-markdown

**Decision**: Split-pane editor with CodeMirror 6 (editing) and react-markdown + rehype (live preview).

**Rationale**: The user explicitly chose "Markdown with live preview," which maps to a split-pane pattern. CodeMirror 6 is the most performant browser-based code editor, built from scratch for modern browsers with a modular architecture. react-markdown provides extensible rendering with rehype plugins for custom styling. The same react-markdown pipeline renders in both editor preview and presentation mode, ensuring content looks identical everywhere (Constitution Principle III).

**Alternatives considered**:
- **MDXEditor**: Purpose-built for Markdown WYSIWYG, but adds Lexical as a dependency and the WYSIWYG approach conflicts with the user's choice of Markdown syntax editing.
- **Tiptap**: Excellent rich-text editor but Markdown is a secondary concern. Heavier bundle. Paid extensions for some features.
- **Monaco Editor**: VSCode's engine — overkill for Markdown editing, large bundle size.

**Media handling**:
- Images: User picks a file → stored as blob in IndexedDB `media` table → referenced via a custom Markdown extension `![alt](media://uuid)` → resolved to an object URL at render time.
- Videos: Same pattern using `<video src="media://uuid">` in Markdown.

## R4: State Management — Zustand

**Decision**: Zustand for application state management.

**Rationale**: Zustand is minimal (~1KB), has no boilerplate, supports middleware (persist, devtools), and integrates cleanly with React. Three stores cover the app's needs: editor store (current slide, dirty state), navigation store (active tab, scroll positions), and preferences store (language, theme — persisted to IndexedDB).

**Alternatives considered**:
- **React Context + useReducer**: Sufficient but verbose for multiple stores. No built-in persistence middleware.
- **Jotai**: Atomic state model adds unnecessary conceptual overhead for this scope.
- **Redux Toolkit**: Too heavy for a single-user client-side app.

## R5: Animation — Framer Motion

**Decision**: Framer Motion for all transitions and animations.

**Rationale**: Framer Motion provides declarative animation APIs, GPU-accelerated transforms, gesture support (swipe for slide navigation), layout animations (bento grid re-flow), and `AnimatePresence` for exit animations. It natively supports `prefers-reduced-motion` via the `useReducedMotion` hook. Essential for hitting the 60fps target (Constitution Principle V).

**Alternatives considered**:
- **CSS animations only**: Sufficient for simple transitions but lacks gesture integration, shared layout animations, and programmatic control needed for presentation mode.
- **React Spring**: Good physics-based animations but less ergonomic API than Framer Motion for component-level animations.

## R6: Internationalization — next-intl

**Decision**: next-intl for bilingual EN/CN support.

**Rationale**: next-intl is the leading i18n library for Next.js App Router. It supports static rendering, client-side switching, and provides `useTranslations` hooks. Message files are simple JSON. Language switching is instant because all translations are bundled at build time — no network requests needed, meeting the <200ms switch target.

**Alternatives considered**:
- **i18next + react-i18next**: More features (pluralization, namespaces) but heavier setup and not optimized for Next.js App Router.
- **Custom solution**: Simple enough for 2 languages but lacks the ergonomics and type safety of next-intl.

## R7: Styling — Tailwind CSS 4

**Decision**: Tailwind CSS 4 with a custom design token configuration.

**Rationale**: Tailwind provides utility-first styling that maps directly to the 8px grid system, supports dark mode as the default (via `darkMode: 'class'`), and enables rapid prototyping of the wireframe aesthetic. Custom theme extends the default with neon accent colors, the constrained palette, and presentation-specific utilities.

**Design tokens**:
- Background: `#0a0a0a` (deepest), `#111111`, `#1a1a1a` (surface)
- Neon accents: `#00f0ff` (cyan), `#ff00e5` (magenta), `#a8ff00` (lime)
- Text: `#f5f5f5` (primary), `#a3a3a3` (secondary), `#525252` (muted)
- Border/wireframe: `#2a2a2a` (subtle), `#404040` (emphasis)
- Spacing: 8px base unit (Tailwind's default spacing scale aligns)

## R8: Icons — @heroicons/react

**Decision**: @heroicons/react v2 (outline variant as primary, solid for active states).

**Rationale**: Direct requirement from the spec (FR-012). The official React package provides tree-shakeable SVG icon components. Outline variant for the wireframe aesthetic; solid variant for active/selected states in the bottom navigation bar.

## R9: Markdown Rendering Pipeline

**Decision**: Unified rendering pipeline using react-markdown + remark-gfm + rehype-raw + custom plugins.

**Rationale**: The same rendering function is used in both the editor preview pane and the full-screen presentation mode. This guarantees content renders identically (Constitution Principle III). Custom rehype plugins handle: `media://` URL resolution to IndexedDB object URLs, neon-themed code block styling, and responsive image/video sizing.

**Plugin stack**:
- `remark-gfm`: Tables, strikethrough, task lists
- `rehype-raw`: Allow HTML in Markdown (needed for `<video>` tags)
- Custom `rehype-media-resolver`: Resolves `media://uuid` references to object URLs
- Custom `rehype-neon-code`: Applies dark theme with neon syntax highlighting
