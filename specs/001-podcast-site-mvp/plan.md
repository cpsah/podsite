# Implementation Plan: Podcast Website MVP

**Branch**: `001-podcast-site-mvp` | **Date**: 19 February 2026 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-podcast-site-mvp/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build a sleek, responsive podcast website with four static pages (Landing with one featured episode, Episodes with a 20-episode catalog, About, FAQ) using Next.js configured for static export. All episode data is mocked and embedded in the codebase, and audio playback uses a local mocked audio asset.

## Technical Context

**Language/Version**: TypeScript (Node.js 20+)  
**Primary Dependencies**: Next.js (App Router) + React (built-in via Next.js)  
**Storage**: N/A (static embedded content modules)  
**Testing**: `npm test` runs lint + production build (static export)  
**Target Platform**: Static hosting (HTML/CSS/JS) for current Chrome, Safari, Firefox
**Project Type**: web  
**Performance Goals**: Fast initial render on mobile; avoid heavy client JS for simple pages  
**Constraints**: Static export only; no database; mocked episodes embedded; mobile-first responsive UI  
**Scale/Scope**: 4 routes + not-found page; 20 mocked episodes; ≥5 FAQ items

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Gate Review (Pre-Research)

- **I. Static-First**: PASS — plan uses Next.js static export (`output: 'export'`) and deploys as static assets.
- **II. Minimal Dependencies**: PASS — only Next.js/React/TypeScript baseline; styling via CSS Modules; no DB/runtime.
- **III. Accessibility Baseline**: PASS — requires keyboard operability, visible focus, and labels for audio controls + navigation.
- **IV. Performance Baseline**: PASS — static pages, optimized assets in `public/`, avoid unnecessary JS.
- **V. Security Baseline**: PASS — no secrets; no user input processing beyond navigation.

### Gate Review (Post-Design)

- PASS — design artifacts keep the site static-only with embedded mocked content; no additional runtime services introduced.

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-site-mvp/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
web/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                 # Landing (featured episode)
│   ├── episodes/page.tsx        # Episodes list (20 mocked)
│   ├── about/page.tsx           # About
│   ├── faq/page.tsx             # FAQ
│   └── not-found.tsx            # Not found + link back to Landing
├── components/
│   ├── SiteHeader.tsx
│   ├── EpisodeCard.tsx
│   └── AudioPlayer.tsx
├── content/
│   ├── episodes.ts              # Embedded mocked episodes (exactly 20)
│   ├── show.ts                  # ShowInfo
│   └── faqs.ts                  # FAQ items (>= 5)
├── public/
│   ├── audio/teaser.mp3         # Mocked audio asset
│   └── images/                  # Optional episode/show images
├── next.config.ts               # Static export config
├── package.json
└── tsconfig.json
```

**Structure Decision**: Single Next.js static site in `web/` to keep repository-level docs/tools at root while delivering a self-contained static-exported site.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
