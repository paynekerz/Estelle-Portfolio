# Estelle Lu — Portfolio

Portfolio site for Estelle Lu, Business & Systems Analyst. Built with Astro, React, and Tailwind CSS. Deployed to Vercel — pushing to `main` triggers a production deploy automatically.

---

## Prerequisites

You need **Node.js 22** and **Git**.

Check your current Node version:

```bash
node --version
# Should print v22.x.x
```

If it doesn't, install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) (Windows) or [nvm](https://github.com/nvm-sh/nvm) (Mac/Linux), then run:

```bash
nvm install 22
nvm use 22
```

---

## Setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd estelle-portfolio

# 2. Switch to the correct Node version (requires nvm)
nvm use

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). The page hot-reloads automatically when you save a file.

---

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Type-check all `.astro` files |
| `npx tsc --noEmit` | Type-check TypeScript files |

---

## Making Changes

**To update text, links, stats, or project content** — edit [`src/data/site.ts`](src/data/site.ts). All copy lives there. Components are pure templates and have no hardcoded strings.

**To update colors, fonts, or spacing** — edit the `@theme` block at the top of [`src/styles/global.css`](src/styles/global.css).

**To add or edit a section** — find the matching component in [`src/components/ui/`](src/components/ui/) for static sections or [`src/components/islands/`](src/components/islands/) for interactive ones.

---

## Project Structure

```
estelle-portfolio/
├── public/
│   ├── favicon.svg                        # Site icon
│   └── robots.txt                         # Search engine crawl rules
│
├── src/
│   ├── components/
│   │   ├── islands/                       # React components — used when a section
│   │   │   │                              # needs interactivity (state, events)
│   │   │   ├── WorkAccordion.tsx          # Expandable project rows
│   │   │   └── TestimonialCarousel.tsx    # Auto-advancing quote slider
│   │   │
│   │   └── ui/                            # Astro components — static HTML, zero JS
│   │       ├── Nav.astro                  # Fixed top nav, adds blur on scroll
│   │       ├── Hero.astro                 # Full-viewport header
│   │       ├── StatsStrip.astro           # 4-column stat row
│   │       ├── Marquee.astro              # Infinite scrolling tools ticker
│   │       ├── About.astro                # Bio, work pillars, skill chips
│   │       ├── Work.astro                 # Projects section (wraps WorkAccordion)
│   │       ├── Testimonials.astro         # Quote section (wraps TestimonialCarousel)
│   │       ├── Philosophy.astro           # Dashboard philosophy + numbered pillars
│   │       ├── Contact.astro              # CTA with LinkedIn + email buttons
│   │       ├── Footer.astro               # Bottom bar with name and copyright
│   │       └── GrainOverlay.astro         # Subtle fixed texture over the whole page
│   │
│   ├── data/
│   │   └── site.ts                        # Single source of truth for all copy
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro               # HTML shell: SEO tags, fonts, JSON-LD
│   │
│   ├── pages/
│   │   └── index.astro                    # The single page — imports every section
│   │
│   ├── styles/
│   │   └── global.css                     # Design tokens (@theme) + utility classes
│   │
│   └── env.d.ts                           # Astro TypeScript definitions
│
├── astro.config.mjs                       # Framework config (React, Tailwind, URL)
├── tsconfig.json                          # TypeScript config
├── package.json                           # Dependencies and npm scripts
├── vercel.json                            # Long-term cache headers for static assets
└── .nvmrc                                 # Tells nvm which Node version to use
```

---

## Deployment

This project deploys automatically via Vercel. Every branch gets a preview URL; merging to `main` pushes to production.

```
feature/my-change  →  Vercel preview URL (safe to share for review)
main               →  Production (https://estellelu.com)
```

Recommended workflow:

1. Create a branch: `git checkout -b feature/your-change`
2. Make your changes and commit
3. Push and open a pull request
4. Check the Vercel preview URL in the PR
5. Merge to `main` to deploy

---

## Stack

| Package | Version | Purpose |
|---|---|---|
| Astro | 6 | Framework, routing, static site build |
| React | 19 | Interactive islands (accordion, carousel) |
| Tailwind CSS | 4 | Utility CSS, CSS-first config |
| Motion | 11 | Animations inside React islands |
| Node.js | >=22.12.0 | Runtime |
