# Feature Specification: Weekly Presentation Dashboard

**Feature Branch**: `001-presentation-dashboard`
**Created**: 2026-02-26
**Status**: Draft
**Input**: User description: "Premium minimal dashboard and presentation deck with modern UI, neon accents, wireframe style, dark mode, bottom navigation, bilingual EN/CN, Heroicons, bento UI"

## Clarifications

### Session 2026-02-26

- Q: What content format does the slide body support? → A: Markdown with live preview, plus embedded images and videos.
- Q: What slide layout variants are available? → A: 5 layouts — Title + Body, Title Only (section divider), Full-bleed Media, Split (text left / media right), Quote. Content purpose: weekly work showcase (accomplishments at company + explorations/self-initiated projects).
- Q: Should new presentations start blank or with a template structure? → A: Template — pre-populate with section dividers (e.g., "Accomplishments", "Explorations") and empty content slides. User provides content to fill in each week.
- Q: Is data export (PDF, shareable link) needed for v1? → A: No — present directly from the app only. Export deferred to a future version.
- Q: How does presentation status transition (draft → complete)? → A: Manual only — user explicitly marks a presentation as complete via a button/toggle.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Create a Weekly Presentation (Priority: P1)

A user opens the dashboard and creates a new weekly presentation to showcase what they've been working on at the company and any self-initiated exploration projects. They are prompted with a clean editor where they can add slides using one of five layout variants: Title + Body, Title Only (section divider), Full-bleed Media, Split (text left / media right), or Quote. The presentation is automatically tagged with the current week and date range. The user can save their progress and return later to continue editing.

**Why this priority**: Creating presentations is the core purpose of the product. Without this capability, nothing else matters.

**Independent Test**: Can be fully tested by opening the app, tapping "New Presentation," adding 3 slides with content, saving, and verifying the presentation appears in the dashboard list with the correct week label.

**Acceptance Scenarios**:

1. **Given** the user is on the dashboard, **When** they tap the "create" action, **Then** a new presentation is initialized with the current week's date range pre-filled and a default template structure: a title slide, an "Accomplishments" section divider with an empty content slide, and an "Explorations" section divider with an empty content slide.
2. **Given** the user is editing a presentation, **When** they add a slide with a title and body text, **Then** the slide is saved automatically and appears in the slide navigator.
3. **Given** the user is adding a new slide, **When** they select a layout variant (e.g., Split or Full-bleed Media), **Then** the slide editor adapts to show the appropriate content zones for that layout.
4. **Given** the user has an in-progress presentation, **When** they leave the editor and return later, **Then** all previously entered content is preserved exactly as left.
5. **Given** the user is editing a slide, **When** they add content, **Then** the content renders in the wireframe-style visual language with neon accent colors on a dark background.
6. **Given** the user is editing a slide body, **When** they write Markdown syntax or embed an image/video, **Then** the content renders as formatted output in live preview alongside the editor.

---

### User Story 2 - Present a Weekly Deck (Priority: P1)

A user selects an existing presentation from the dashboard and enters full-screen presentation mode. They navigate through slides using swipe gestures or navigation controls. Each slide renders with smooth transitions and the premium dark-mode visual style. The presentation fills the screen with no UI chrome visible except minimal slide navigation.

**Why this priority**: Presenting is equally critical to creating — the tool must deliver a polished presentation experience to be useful.

**Independent Test**: Can be fully tested by selecting any saved presentation, entering present mode, swiping through all slides, and verifying full-screen rendering with transitions and no visible dashboard UI.

**Acceptance Scenarios**:

1. **Given** the user has a saved presentation, **When** they tap "Present" on the dashboard, **Then** the presentation enters full-screen mode starting from slide 1.
2. **Given** the user is in presentation mode, **When** they swipe left or tap the forward control, **Then** the next slide appears with a smooth transition animation.
3. **Given** the user is on the last slide, **When** they advance, **Then** the presentation ends and returns to the dashboard.
4. **Given** the user is presenting, **When** they swipe down or tap the close control, **Then** the presentation exits full-screen and returns to the dashboard at the same scroll position.

---

### User Story 3 - Browse and Manage Presentation History (Priority: P2)

A user views their dashboard which displays all past weekly presentations in a bento-grid layout, organized chronologically with the most recent week at the top. Each card shows a preview thumbnail, week label, title, and slide count. The user can search, filter by date range, or scroll through their history. They can also duplicate, rename, or delete presentations.

**Why this priority**: As presentations accumulate weekly, organization and retrieval become essential for referencing past content and maintaining productivity.

**Independent Test**: Can be fully tested by creating 5+ presentations across different weeks, then verifying they appear in correct chronological order with accurate metadata, and testing search/filter/delete actions.

**Acceptance Scenarios**:

1. **Given** the user has multiple saved presentations, **When** they open the dashboard, **Then** presentations are displayed in a bento-grid layout sorted by most recent week first.
2. **Given** the dashboard is showing presentations, **When** the user types in the search field, **Then** results filter in real-time matching title or content keywords.
3. **Given** the user long-presses a presentation card, **When** the context menu appears, **Then** they can choose to duplicate, rename, or delete the presentation.
4. **Given** the user deletes a presentation, **When** they confirm the action, **Then** the presentation is removed and the grid re-flows smoothly.

---

### User Story 4 - Switch Language Between English and Chinese (Priority: P2)

A user toggles the interface language between English and Chinese. All navigation labels, button text, system messages, and placeholder text update immediately without reloading. The user's language preference is persisted across sessions. Presentation content itself remains in whatever language the user typed it in — only the interface chrome translates.

**Why this priority**: Bilingual support is a stated requirement and essential for the target user base, but the core create/present flow must work first.

**Independent Test**: Can be fully tested by switching language in settings, navigating all screens, and verifying every interface label renders correctly in the selected language.

**Acceptance Scenarios**:

1. **Given** the user is on any screen, **When** they change the language setting, **Then** all interface labels, buttons, and system text update to the selected language immediately.
2. **Given** the user selected Chinese, **When** they create a new presentation and type English content, **Then** the interface remains in Chinese while the content displays in English as typed.
3. **Given** the user sets a language preference, **When** they close and reopen the app, **Then** the previously selected language is restored.

---

### User Story 5 - Navigate via Bottom Navigation Bar (Priority: P3)

A user navigates between the primary sections of the app using a minimal bottom navigation bar. The bar contains 3-4 icon-based tabs (using Heroicons) with subtle labels. The active tab is highlighted with a neon accent. Navigation transitions are smooth and maintain scroll position within each tab.

**Why this priority**: Navigation structure supports all other features but is simpler to implement once the core screens exist.

**Independent Test**: Can be fully tested by tapping each navigation tab, verifying the correct screen loads, confirming the active state indicator matches, and checking that switching tabs preserves scroll position.

**Acceptance Scenarios**:

1. **Given** the user is on any screen, **When** they view the bottom of the viewport, **Then** a minimal navigation bar is visible with icon tabs and subtle labels.
2. **Given** the user taps a navigation tab, **When** the transition completes, **Then** the correct screen is displayed and the tapped tab shows an active neon accent indicator.
3. **Given** the user scrolled down on one tab, **When** they switch to another tab and return, **Then** the original scroll position is preserved.

---

### Edge Cases

- What happens when a user tries to create a presentation for a week that already has one? The system allows multiple presentations per week, each clearly labeled with a creation timestamp.
- How does the system handle very long presentation titles? Titles are truncated with an ellipsis after 80 characters in card views but display in full in the editor.
- What happens when the user's device has no network connectivity? All presentation data is stored locally, so creating, editing, and presenting work fully offline. Sync (if implemented later) happens when connectivity returns.
- How does the system handle right-to-left text within Chinese content? Standard Chinese text flows left-to-right, matching the default layout direction. No RTL adjustments are needed.
- What happens when the user rapidly switches languages back and forth? Language switching is idempotent and stateless — each toggle applies the full language pack immediately with no cumulative side effects.
- What happens when a user embeds a very large image or video? Media files are stored locally alongside presentation data. Files exceeding the browser storage quota trigger a clear warning before the save fails, giving the user a chance to reduce file size or remove other content.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow users to create new weekly presentations with automatic week/date tagging.
- **FR-002**: System MUST provide a slide editor where users can add, edit, reorder, and delete slides within a presentation.
- **FR-003**: Each slide MUST support a title field and a Markdown body content field with live preview rendering. The body MUST support standard Markdown formatting (headings, bold, italic, lists, code blocks) plus embedded images and videos.
- **FR-004**: System MUST render all content in a dark-mode wireframe visual style with neon color accents.
- **FR-005**: System MUST provide a full-screen presentation mode with smooth slide-to-slide transitions.
- **FR-006**: System MUST persist all presentation data locally so the app functions fully offline.
- **FR-007**: System MUST display saved presentations in a bento-grid dashboard layout, sorted by most recent week.
- **FR-008**: System MUST support real-time search and filtering of presentations by title or content keywords.
- **FR-009**: System MUST allow users to duplicate, rename, and delete existing presentations.
- **FR-010**: System MUST support interface language switching between English and Chinese with immediate effect.
- **FR-011**: System MUST persist the user's language preference across sessions.
- **FR-012**: System MUST use Heroicons for all iconography throughout the interface.
- **FR-013**: System MUST provide a bottom navigation bar with 3-4 icon tabs for primary section navigation.
- **FR-014**: System MUST preserve scroll position when switching between navigation tabs.
- **FR-015**: System MUST auto-save presentation edits without requiring a manual save action.
- **FR-016**: System MUST display presentation metadata on dashboard cards: week label, title, slide count, and preview thumbnail.
- **FR-017**: System MUST offer five slide layout variants: Title + Body (default), Title Only (section divider), Full-bleed Media, Split (text left / media right), and Quote.
- **FR-018**: Each slide MUST support an optional section tag (e.g., "Accomplishments", "Explorations") to categorize content within the weekly showcase structure.
- **FR-019**: New presentations MUST be initialized from a default template containing: a title slide, an "Accomplishments" section divider with one empty content slide, and an "Explorations" section divider with one empty content slide. Users can add, remove, or reorder these sections freely.
- **FR-020**: System MUST provide a manual toggle for users to mark a presentation's status as "complete." Status transition is user-initiated only — the system MUST NOT change status automatically. Completed presentations MUST remain editable (status can be reverted to draft).

### Key Entities

- **Presentation**: A weekly showcase deck summarizing work accomplished at the company and self-initiated exploration projects. Attributes include title, week number, date range (start/end), creation timestamp, last modified timestamp, language metadata, slide count, and status (draft/complete).
- **Slide**: An individual page within a presentation. Attributes include order position, title, Markdown body content (supporting text formatting, embedded images, and embedded videos), layout variant (one of: Title + Body, Title Only, Full-bleed Media, Split, Quote), optional accent color override, and optional section tag (e.g., "Accomplishments", "Explorations").
- **User Preferences**: Persistent settings including selected interface language, last active navigation tab, and theme preferences.

## Assumptions

- The application is a web-based dashboard (responsive, mobile-first) rather than a native mobile app.
- Authentication is not required for the initial version — single-user local experience.
- "Wireframe style" means clean geometric layouts with visible structural lines, minimal fills, and prominent typography — not literally unfinished-looking wireframes.
- Neon accent colors include electric blue, cyan, magenta, and lime green on dark backgrounds (#0a0a0a to #1a1a1a range).
- Bento UI refers to a grid layout with cards of varying sizes (1x1, 2x1, 1x2) creating a magazine-style mosaic.
- Presentations are stored client-side (browser storage) with no backend/cloud sync in the initial version.
- No data export (PDF, shareable link) is included in v1. Presenting happens exclusively from within the app.
- The bottom navigation contains: Dashboard (home), New Presentation (create), and Settings (preferences).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can create a new weekly presentation and add their first slide in under 60 seconds.
- **SC-002**: Presentation mode launches within 1 second of tapping "Present" and all slide transitions complete within 300ms.
- **SC-003**: The dashboard loads and displays all presentation cards within 2 seconds, even with 50+ stored presentations.
- **SC-004**: Language switching completes instantly (under 200ms) with zero visible layout shift or flicker.
- **SC-005**: 100% of interface text is translated — no untranslated strings appear when switching between English and Chinese.
- **SC-006**: All interactive elements meet the 44x44px minimum touch target requirement.
- **SC-007**: The bento-grid layout renders correctly across screen widths from 375px (mobile) to 1440px (desktop).
- **SC-008**: Users can locate and open a specific past presentation from a library of 20+ decks in under 10 seconds using search or scroll.
