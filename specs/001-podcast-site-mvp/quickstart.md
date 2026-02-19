# Quickstart: Podcast Website MVP

**Feature**: 001-podcast-site-mvp  
**Date**: 19 February 2026

This repo keeps product docs at the root. The Next.js site lives in `web/`.

## Prerequisites

- Node.js 20+
- npm 10+

## Install

```bash
cd web
npm install
```

## Run locally (dev)

```bash
cd web
npm run dev
```

Open the URL shown in the terminal.

## Test (quality gate)

```bash
cd web
npm test
```

Expectation: this runs lint + a production build appropriate for static export.

## Build static site

```bash
cd web
npm run build
```

Expectation: produces a static export output directory (commonly `web/out/`).

## Preview the static export

From the `web/` folder:

```bash
npx --yes serve@latest out
```

Or, if you prefer Python:

```bash
python -m http.server --directory out 3000
```

## Notes

- Episode data is mocked and embedded in the codebase; no external feeds.
- Audio playback uses a local mocked audio file referenced by all episodes.
