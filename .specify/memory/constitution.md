<!--
Sync Impact Report
==================
Version change: N/A → 1.0.0 (initial ratification)
Modified principles: None (initial creation)
Added sections:
  - Core Principles (5 principles)
  - Design Standards
  - Development Workflow
  - Governance
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ compatible (Constitution Check section is dynamic)
  - .specify/templates/spec-template.md ✅ compatible (user stories align with Content-First principle)
  - .specify/templates/tasks-template.md ✅ compatible (phased approach supports weekly cadence)
  - .specify/templates/checklist-template.md ✅ compatible (generic structure adapts to principles)
Follow-up TODOs: None
-->

# ChronoAI Weekly Presentation Constitution

## Core Principles

### I. Design Minimalism

Every visual element MUST earn its place on screen. The dashboard and presentation deck follow a premium, high-level, minimal aesthetic where whitespace is a feature, not waste. Components MUST use restrained color palettes, clean typography hierarchies, and purposeful spacing. Decorative elements are prohibited unless they directly enhance content comprehension. The interface MUST feel polished and executive-grade at all times.

**Rationale**: A presentation tool is judged by its output. Premium minimalism ensures every deck looks professional without effort from the user.

### II. Content-First Architecture

Weekly presentation content is the primary artifact. All system design decisions MUST prioritize how content is created, stored, retrieved, and displayed. The data model MUST treat each weekly presentation as a first-class entity with clear metadata (week number, date range, title, status). Navigation, search, and organization features MUST revolve around the weekly content lifecycle.

**Rationale**: The system exists to serve the presentations. Infrastructure that does not directly support content creation or delivery is overhead.

### III. Presentation-Ready Output

What you see in the dashboard MUST be what you present. There MUST be zero friction between editing a deck and presenting it — no export steps, no rendering delays, no format conversion. The presentation view MUST support full-screen display with smooth slide transitions. Content MUST render identically in edit mode and present mode.

**Rationale**: A weekly cadence demands speed. Any friction in the create-to-present pipeline compounds into lost time every single week.

### IV. Temporal Organization

The weekly cadence is the fundamental organizing principle. Presentations MUST be indexed by week and easily navigable in chronological order. The dashboard MUST surface the current week's presentation prominently while providing rapid access to historical weeks. Users MUST be able to compare or reference past presentations without leaving the current workflow.

**Rationale**: Weekly presentations are inherently temporal. The system must reflect this rhythm in every interaction pattern.

### V. Performance & Fluidity

All transitions and animations MUST target 60fps. Initial dashboard load MUST complete within 2 seconds on standard connections. Slide transitions MUST feel immediate and polished. No loading spinners during the presentation flow — content MUST be preloaded. The experience MUST feel native-app smooth, not web-app sluggish.

**Rationale**: A premium tool that stutters or lags during a live presentation destroys user confidence and audience attention.

## Design Standards

All UI components MUST adhere to mobile-first responsive design while prioritizing the desktop presentation experience. The design system MUST include:

- A constrained color palette (maximum 3 primary colors plus neutrals)
- A typographic scale based on an 8px grid system
- Consistent elevation and shadow language for depth hierarchy
- Dark mode support as a first-class feature (presentations happen in dimly lit rooms)
- Touch targets meeting 44x44px minimum for any interactive element
- Skeleton loading states for any content that takes longer than 200ms to appear

All animations MUST respect the `prefers-reduced-motion` media query. Contrast ratios MUST meet WCAG 2.1 AA standards at minimum.

## Development Workflow

All features MUST be specified before implementation begins. The development process follows this sequence:

1. **Specify**: Define user stories with acceptance scenarios via `/speckit.specify`
2. **Plan**: Produce implementation plan with technical context via `/speckit.plan`
3. **Task**: Break plan into phased, parallelizable tasks via `/speckit.tasks`
4. **Implement**: Execute tasks in phase order via `/speckit.implement`
5. **Validate**: Run checklists to verify principle compliance via `/speckit.checklist`

Each weekly presentation feature increment MUST be independently deployable. Breaking changes to the presentation data model MUST include migration paths for existing stored presentations.

## Governance

This constitution is the authoritative reference for all design and development decisions in the ChronoAI Weekly Presentation project. When conflicts arise between convenience and constitution principles, the constitution prevails.

**Amendment Process**: Any principle change MUST be documented with rationale, approved explicitly, and accompanied by a migration plan if existing work is affected. Version increments follow semantic versioning (MAJOR for principle removals/redefinitions, MINOR for additions/expansions, PATCH for clarifications).

**Compliance Review**: All pull requests and code reviews MUST verify alignment with these principles. The `/speckit.checklist` command SHOULD be used to generate compliance checklists for significant features.

**Version**: 1.0.0 | **Ratified**: 2026-02-26 | **Last Amended**: 2026-02-26
