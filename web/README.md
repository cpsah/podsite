# Podsite - Modern Podcast Website

A sleek, modern podcast website built with Next.js, featuring a featured episode landing page, episodes catalog, about page, and FAQ.

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables
- **Deployment**: Static Site Export (no server required)

## Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

Create an optimized static build:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

### Preview Production Build

After building, you can preview the static build locally. Since this is a static export, you can use any static file server. For example:

```bash
npx serve@latest out
```

### Quality Checks

Run linting and build checks:

```bash
npm test
```

This command runs ESLint and builds the project to catch any errors.

## Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Landing page (featured episode)
│   ├── episodes/           # Episodes catalog page
│   ├── about/              # About page
│   ├── faq/                # FAQ page
│   └── not-found.tsx       # Custom 404 page
├── components/             # Reusable React components
│   ├── AudioPlayer.tsx     # Audio player with play/pause
│   ├── EpisodeCard.tsx     # Episode display card
│   └── SiteHeader.tsx      # Site navigation header
├── content/                # Static content (embedded data)
│   ├── types.ts            # TypeScript types
│   ├── episodes.ts         # 20 mocked podcast episodes
│   ├── show.ts             # Podcast show information
│   └── faqs.ts             # FAQ items
└── public/                 # Static assets
    └── audio/              # Audio files
```

## Features

- **Featured Episode**: Landing page showcases the most recent episode
- **Episodes Catalog**: Browse all 20 mocked episodes with audio players
- **About Page**: Learn about the podcast
- **FAQ Page**: Answers to common questions
- **Responsive Design**: Mobile-first design that works on all devices
- **Accessibility**: Keyboard navigable with skip links and focus indicators
- **Static Export**: No server required, deploy anywhere

## Mocked Data

This is a demo site with mocked podcast content:
- 20 episodes with sample metadata
- Single mocked audio file (teaser.mp3) shared by all episodes
- Show information and FAQs

For a production podcast, replace the content in `content/` with real data.

## Custom Audio

To add a real audio file:
1. Place your MP3 file in `public/audio/teaser.mp3`
2. Or update episode audioSrc paths in `content/episodes.ts` to point to your audio files

## License

MIT

