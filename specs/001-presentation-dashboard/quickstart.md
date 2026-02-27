# Quickstart: Weekly Presentation Dashboard

**Branch**: `001-presentation-dashboard` | **Date**: 2026-02-26

## Prerequisites

- Node.js 20+ (LTS)
- npm 10+ or pnpm 9+

## Setup

```bash
# Clone and navigate to the project
cd weekly-presentation

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app opens at `http://localhost:3000`.

## Build for Production

```bash
# Generate static export
npm run build

# Preview the static build
npx serve out/
```

The `out/` directory contains the fully static site — deploy to any static hosting (Vercel, Netlify, GitHub Pages, S3, etc.).

## Project Structure

```text
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Dashboard
│   ├── editor/[id]/        # Slide editor
│   ├── present/[id]/       # Presentation mode
│   └── settings/           # Settings
├── components/             # React components
│   ├── ui/                 # Design system primitives
│   ├── dashboard/          # Bento grid, cards, search
│   ├── editor/             # Markdown editor, layout picker
│   ├── presentation/       # Slide renderer, controls
│   └── navigation/         # Bottom nav bar
├── lib/
│   ├── db/                 # IndexedDB (Dexie.js)
│   ├── i18n/               # Translations (EN/CN)
│   ├── store/              # Zustand state stores
│   └── utils/              # Helpers
├── types/                  # TypeScript interfaces
└── styles/                 # Global CSS, design tokens
```

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build (static export) |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest test suite |
| `npm run test:ui` | Run tests with UI |

## Usage Flow

1. **Dashboard**: The home screen shows a bento grid of all your weekly presentations. The current week is highlighted.
2. **Create**: Tap the "+" in the bottom nav to create a new deck. It starts with a title slide, an "Accomplishments" section, and an "Explorations" section.
3. **Edit**: Each slide has a Markdown editor (left) and live preview (right). Pick a layout variant from the layout picker. Embed images/videos by uploading them.
4. **Present**: Tap "Present" on any deck card to enter full-screen mode. Swipe or use arrow keys to navigate. Press Escape to exit.
5. **Settings**: Toggle interface language between English and Chinese. Mark presentations as complete.

## Data Storage

All data is stored in the browser's IndexedDB. No server, no cloud, no account needed. Data persists across browser sessions but is tied to the browser profile.

To clear all data: open browser DevTools → Application → IndexedDB → delete `chronoai-weekly`.

## Design System

- **Dark mode only**: Backgrounds range from `#0a0a0a` to `#1a1a1a`
- **Neon accents**: Cyan (`#00f0ff`), Magenta (`#ff00e5`), Lime (`#a8ff00`)
- **Typography**: System font stack, 8px grid spacing
- **Icons**: Heroicons (outline for default, solid for active states)
- **Touch targets**: 44x44px minimum on all interactive elements
