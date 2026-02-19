# Research: Podcast Website MVP

**Feature**: 001-podcast-site-mvp  
**Date**: 19 February 2026

This document resolves technical choices needed to implement the spec while honoring the Podsite Constitution (static-first, minimal deps, accessibility + performance baselines).

## Decisions

### 1) Next.js routing + static export

**Decision**: Use Next.js App Router and a fully static export build (`output: 'export'`).

**Rationale**:
- Fits the constitution’s Static-First requirement (deployable as static assets).
- App Router offers simple file-based routing for `/`, `/episodes`, `/about`, `/faq`, and 404.

**Alternatives considered**:
- Pages Router: workable, but App Router is the current default and offers built-in 404 conventions.
- SPA-only routing: rejected due to deep-linking constraints on static hosts.

### 2) Project layout

**Decision**: Place the Next.js app in `web/` to avoid conflicts with existing repository docs/tools at the repo root.

**Rationale**:
- Keeps `.specify/` and `specs/` intact and avoids tooling that assumes an empty directory.
- Makes the site a clearly isolated deliverable.

**Alternatives considered**:
- Create the Next.js app at repo root: rejected because the repo is already non-empty and bootstrapping tools may fail or overwrite.

### 3) Language and typing

**Decision**: TypeScript.

**Rationale**:
- Improves correctness for mocked content schemas (Episode/FAQ/ShowInfo).
- Reduces regressions when refactoring page components.

**Alternatives considered**:
- JavaScript: rejected due to weaker guarantees around the fixed, spec-driven content model.

### 4) Data strategy (no database)

**Decision**: Embed mocked content as static modules (e.g., `web/content/episodes.ts`, `web/content/faqs.ts`, `web/content/show.ts`).

**Rationale**:
- Meets the “no databases” constraint.
- Deterministic across reloads by construction.

**Alternatives considered**:
- JSON files loaded at runtime: rejected because it adds parsing/IO surface and doesn’t improve determinism.

### 5) Featured episode selection

**Decision**: The featured episode is the single most recently published episode (max `publishDate`).

**Rationale**:
- Matches spec acceptance criteria and avoids a second “featured flag” source of truth.

**Alternatives considered**:
- Explicit `isFeatured` flag: rejected to prevent drift between publish date ordering and featured selection.

### 6) Audio playback (mocked)

**Decision**: Ship one small, local audio asset (e.g., `web/public/audio/teaser.mp3`) and point each episode’s `audioSrc` to it.

**Rationale**:
- Satisfies “mocked audio” without pulling any real feed.
- Keeps the demo reliable offline and on static hosts.
- Aligns with browser autoplay rules (play starts on user gesture).

**Alternatives considered**:
- External audio URLs: rejected (not self-contained; risks breaking).
- Generating audio with WebAudio: rejected (more JS, more complexity).

### 7) Styling approach

**Decision**: Use CSS Modules + a small set of CSS variables in a global stylesheet for theme tokens.

**Rationale**:
- Honors “minimal dependencies” (no utility CSS framework required).
- Enables sleek, responsive layout with modern CSS.

**Alternatives considered**:
- Tailwind CSS: rejected to keep dependencies smaller unless later justified.

### 8) Images

**Decision**: Use static assets in `public/` and standard `<img>` elements (or configure Next Image as unoptimized if used).

**Rationale**:
- Static export compatibility.
- Predictable behavior on static hosts.

**Alternatives considered**:
- Server-side image optimization: rejected (violates static-first).

### 9) Testing / quality gate

**Decision**: Ensure `npm test` runs lint + a production build suitable for static export.

**Rationale**:
- Matches constitution workflow requirements.
- Keeps tooling minimal.

**Alternatives considered**:
- Add a full E2E stack (Playwright): deferred unless needed; would add weight.
