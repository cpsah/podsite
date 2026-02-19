# Data Model: Podcast Website MVP

**Feature**: 001-podcast-site-mvp  
**Date**: 19 February 2026

This feature is static-only. Data is embedded at build time and rendered into pages.

## Entities

### Episode

Represents one podcast episode shown on Landing (featured) and Episodes (catalog).

**Fields**
- `id` (string): Stable unique identifier (e.g., `ep-001`). Required.
- `title` (string): Episode title. Required.
- `summary` (string): Short description used in lists and the featured hero. Required.
- `publishDate` (ISO-8601 date string): Used for deterministic ordering and featured selection. Required.
- `audioSrc` (string): Path to mocked audio asset (same asset may be reused). Required.
- `durationSeconds` (number): Optional.
- `coverImageSrc` (string): Optional path to cover image asset.
- `longDescription` (string): Optional.

**Validation / invariants**
- Exactly 20 episodes exist.
- `id` is unique across all episodes.
- `publishDate` is valid and comparable.
- Featured episode is the single episode with the most recent `publishDate`.
- Ordering on Episodes page is deterministic (e.g., descending by `publishDate`, then `id`).

### ShowInfo

Represents site-wide podcast identity.

**Fields**
- `title` (string): Podcast name. Required.
- `tagline` (string): Short descriptor. Required.
- `description` (string): Longer description for About and metadata. Required.
- `hostName` (string): Optional.
- `hostBio` (string): Optional.

**Validation / invariants**
- Present on About page.

### FAQItem

Represents one FAQ entry.

**Fields**
- `id` (string): Stable unique identifier. Required.
- `question` (string): Required.
- `answer` (string): Required.

**Validation / invariants**
- At least 5 FAQ items.
- `id` is unique.

## Relationships

- A ShowInfo has many Episodes.
- A ShowInfo has many FAQItems.

## State Transitions

- None. All data is static and embedded.
