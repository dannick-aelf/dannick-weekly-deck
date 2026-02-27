# Data Model: Weekly Presentation Dashboard

**Branch**: `001-presentation-dashboard` | **Date**: 2026-02-26

## Entity Relationship

```text
Presentation (1) ──── (N) Slide
Slide (N) ──── (N) Media (via mediaIds reference)
UserPreferences (singleton)
```

## Entities

### Presentation

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | string (uuid) | PK, auto-generated | |
| title | string | max 200 chars | Defaults to "Week {N} — {dateRange}" |
| weekNumber | number | indexed | ISO week number (1-53) |
| year | number | indexed | Year component for unique week identification |
| dateRangeStart | string (ISO date) | required | Monday of the week |
| dateRangeEnd | string (ISO date) | required | Sunday of the week |
| status | enum: "draft" \| "complete" | default "draft" | User-toggled manually |
| slideCount | number | computed on save | Denormalized for dashboard display |
| createdAt | string (ISO datetime) | auto-set, indexed | |
| updatedAt | string (ISO datetime) | auto-updated | |

**Indexes**: `[weekNumber+year]` (compound), `createdAt`, `status`

**Validation rules**:
- `title` must not be empty
- `weekNumber` must be 1–53
- `dateRangeStart` must be a Monday
- `dateRangeEnd` must be the following Sunday
- `status` transitions: draft ↔ complete (bidirectional, user-initiated only)

### Slide

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | string (uuid) | PK, auto-generated | |
| presentationId | string (uuid) | FK → Presentation.id, indexed | |
| order | number | required, ≥ 0 | Position within presentation |
| title | string | max 200 chars, optional | Empty for some layouts |
| bodyMarkdown | string | optional | Raw Markdown content |
| layoutVariant | enum | required, default "title-body" | See Layout Variants |
| sectionTag | string | optional | e.g., "Accomplishments", "Explorations" |
| accentColor | string | optional, hex format | Overrides default neon accent |
| mediaIds | string[] | optional | References to Media.id for embedded content |
| createdAt | string (ISO datetime) | auto-set | |
| updatedAt | string (ISO datetime) | auto-updated | |

**Indexes**: `presentationId`, `[presentationId+order]` (compound)

**Layout Variants** (enum values):

| Value | Description | Content Zones |
|-------|-------------|---------------|
| `title-body` | Title on top, Markdown body below | title + bodyMarkdown |
| `title-only` | Section divider, large centered title | title only |
| `full-bleed-media` | Single image or video fills the slide | title (overlay, optional) + single mediaId |
| `split` | Text left, media right (50/50) | title + bodyMarkdown (left) + single mediaId (right) |
| `quote` | Large centered quote with attribution | bodyMarkdown (as quote) + title (as attribution) |

### Media

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | string (uuid) | PK, auto-generated | |
| blob | Blob | required, NOT indexed | Raw binary data |
| mimeType | string | required | e.g., "image/png", "video/mp4" |
| filename | string | required | Original filename |
| size | number | required | Bytes |
| createdAt | string (ISO datetime) | auto-set | |

**Indexes**: `id` only. Binary `blob` field is never indexed (Dexie best practice for performance).

**Size limits**:
- Individual file: warn at 50MB, hard limit at 100MB
- Total storage: warn when IndexedDB usage exceeds 80% of browser quota

### UserPreferences

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | string | PK, always "user-prefs" | Singleton record |
| language | enum: "en" \| "zh" | default "en" | Interface language |
| lastActiveTab | string | optional | Bottom nav tab ID |
| lastEditedPresentationId | string | optional | Resume editing |
| createdAt | string (ISO datetime) | auto-set | |
| updatedAt | string (ISO datetime) | auto-updated | |

## Dexie.js Schema Definition

```typescript
interface ChronoAIDB extends Dexie {
  presentations: Table<Presentation>;
  slides: Table<Slide>;
  media: Table<Media>;
  preferences: Table<UserPreferences>;
}

const db = new Dexie('chronoai-weekly') as ChronoAIDB;

db.version(1).stores({
  presentations: 'id, [weekNumber+year], createdAt, status',
  slides: 'id, presentationId, [presentationId+order]',
  media: 'id',
  preferences: 'id',
});
```

## State Transitions

### Presentation Status

```text
                ┌──────────────┐
   (create) ──▶ │    draft     │ ◀── (revert)
                └──────┬───────┘
                       │ (user toggles)
                       ▼
                ┌──────────────┐
                │   complete   │
                └──────────────┘
```

- **draft → complete**: User taps "Mark Complete" toggle. No validation gates — user decides when the deck is done.
- **complete → draft**: User taps toggle again. Presentation becomes editable with draft status.
- **delete**: Available from any status. Requires confirmation. Cascades to all slides and orphaned media.

### Slide Ordering

When a slide is reordered (drag-and-drop):
1. Remove slide from current position
2. Insert at new position
3. Re-index all `order` values in the presentation (0-based, contiguous)
4. Batch update via single Dexie transaction

## Default Presentation Template

When a user creates a new presentation, the system generates:

| Order | Layout | Title | Section Tag |
|-------|--------|-------|-------------|
| 0 | title-only | "Week {N}: {dateRange}" | — |
| 1 | title-only | "Accomplishments" | "Accomplishments" |
| 2 | title-body | *(empty)* | "Accomplishments" |
| 3 | title-only | "Explorations" | "Explorations" |
| 4 | title-body | *(empty)* | "Explorations" |
