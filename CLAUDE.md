# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

**Read `AGENTS.md` first, seriously.** This project runs Next.js 16, which has breaking changes vs. training data (App Router conventions, config, typed routes, etc.). Before touching routing, data fetching, metadata, or config, check the matching guide under `node_modules/next/dist/docs/` for the specific API — don't assume older Next.js patterns apply. Notably, page/layout prop types like `LayoutProps<"/">` (see `src/app/layout.tsx`) come from Next's generated typed-route types, not hand-written interfaces.

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, `eslint-config-next` core-web-vitals + typescript rulesets)

There is no test suite and no separate typecheck script configured — TypeScript is checked as part of `next build`.

## Architecture

This is a marketing/booking site for a Morocco desert tour operator, built on Next.js App Router with **no database or CMS** — all content lives in typed TypeScript data files under `src/data/`:

- `src/data/tours.ts` — the `Tour[]` array (every itinerary, day-by-day content, included/excluded lists) plus lookup helpers `getTourBySlug`, `getFeaturedTours`, and the derived `departureCities` list. This is the single source of truth for tour content; routes under `src/app/trip/` read from it and use `generateStaticParams` to pre-render one page per tour slug.
- `src/data/blog.ts` — the `BlogPost[]` array (slug, excerpt, date, body paragraphs). Same static-generation pattern under `src/app/blog/[slug]/`.
- `src/data/site.ts` — global site config: `siteConfig` (name/tagline/url, used as `metadataBase`), `contactInfo`, `navLinks`, `footerLinks`, `socialLinks`, `featureList`, `stats`.

Adding or editing a tour/blog post means editing these arrays directly — there's no admin UI or content pipeline. Images for a tour live at `public/images/tours/<slug>/hero.jpg`, keyed by the `slug` field, so a new tour needs a matching image directory.

Routes of note:
- `src/app/trip/page.tsx` (server) renders static copy and delegates filtering to `src/app/trip/TripExplorer.tsx` (`"use client"`), which does in-memory search/city/duration filtering over the full `tours` array passed down as props — no server-side filtering or pagination.
- `src/app/trip/[slug]/page.tsx` and `src/app/blog/[slug]/page.tsx` are statically generated per-item pages (`generateStaticParams` + `generateMetadata`), calling `notFound()` for unknown slugs.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml`/`robots.txt` from the same `tours`/`blogPosts`/`siteConfig` data — new tour/blog entries are automatically included.
- `src/app/api/contact/route.ts` and `src/app/api/inquire/route.ts` are stub `POST` handlers: they validate required fields and `console.log` the payload. Neither is wired to a real email provider yet (see the `TODO` comments) — don't assume form submissions actually go anywhere.

Styling: Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`). The custom palette (`sand-*`, `terracotta-*`, `night-*`) and font variables (`--font-body`, `--font-display`, mapped from the Geist-replacement fonts loaded in `src/app/layout.tsx` via `next/font/google`) are defined in `src/app/globals.css` using `@theme inline`. Use these existing tokens rather than introducing new ad hoc colors.

Path alias: `@/*` maps to `src/*` (see `tsconfig.json`).
