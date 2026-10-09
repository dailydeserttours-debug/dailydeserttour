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

- `src/data/tours.ts` — the `Tour[]` array (every itinerary, day-by-day content, included/excluded lists) plus lookup helpers `getTourBySlug`, `getFeaturedTours`, `getRelatedTours`, `getTourFaqs`, and the derived `departureCities` list. This is the single source of truth for tour content; routes under `src/app/trip/` read from it and use `generateStaticParams` to pre-render one page per tour slug.
  - `getRelatedTours` ranks candidates using `overlapScore` from `src/lib/related.ts`, a word-overlap heuristic over tour text (with proper nouns like place names weighted 2x) — not just shared city/duration — so "related tours" on a trip page can surface itineraries that share themes/wording rather than only exact city matches.
  - `destinations` (also in this file) is *derived* from `departureCities`, not hand-authored: for each city it picks a hero tour, merges in hand-written copy from the local `destinationContent` map (falling back to generic copy for any city not in that map), and counts matching tours. `src/app/destinations/[slug]/page.tsx` reads from this derived array. Adding a new departure city to a tour automatically creates/updates its destination page; add an entry to `destinationContent` to give that city custom tagline/intro/highlights instead of the generic fallback.
- `src/data/blog.ts` — the `BlogPost[]` array (slug, excerpt, date, body paragraphs). Same static-generation pattern under `src/app/blog/[slug]/`.
- `src/data/site.ts` — global site config: `siteConfig` (name/tagline/url, used as `metadataBase`), `contactInfo`, `navLinks`, `footerLinks`, `socialLinks`, `featureList`, `stats`.

Adding or editing a tour/blog post means editing these arrays directly — there's no admin UI or content pipeline. Images for a tour live at `public/images/tours/<slug>/hero.jpg`, keyed by the `slug` field, so a new tour needs a matching image directory. Free-text content fields (tour/blog body paragraphs, FAQ answers) support an inline `[label](url)` link syntax rendered by `src/lib/richText.tsx`'s `renderRichText` — internal paths use `next/link`, `http...` URLs open in a new tab.

Routes of note:
- `src/app/trip/page.tsx` (server) renders static copy and delegates filtering to `src/app/trip/TripExplorer.tsx` (`"use client"`), which does in-memory search/city/duration filtering over the full `tours` array passed down as props — no server-side filtering or pagination.
- `src/app/trip/[slug]/page.tsx`, `src/app/blog/[slug]/page.tsx`, and `src/app/destinations/[slug]/page.tsx` are statically generated per-item pages (`generateStaticParams` + `generateMetadata`), calling `notFound()` for unknown slugs.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml`/`robots.txt` from the same `tours`/`blogPosts`/`siteConfig` data — new tour/blog entries are automatically included.
- `ContactForm.tsx` and `InquiryForm.tsx` submit directly from the browser to FormSubmit's AJAX endpoint (`https://formsubmit.co/ajax/<email>`, email from `contactInfo.email`) — there's no backend API route for these. This was deliberate: FormSubmit's AJAX endpoint rejects requests proxied through Vercel's serverless functions (works fine from a real browser, fails server-to-server from Vercel's IPs), so delivery must happen client-side. FormSubmit also requires a one-time manual "Activate Form" click (link emailed to the destination address) before the first real submission will deliver.
- Structured data: `src/lib/schema.ts` builds JSON-LD objects (`organizationSchema`, `breadcrumbSchema`, `faqSchema`; page files also inline one-off schemas like `TouristDestination`/`TouristTrip`), rendered via the `src/components/JsonLd.tsx` `<script>` wrapper. Only feed it trusted, statically-typed site data — never user input — since it injects via `dangerouslySetInnerHTML`.

Styling: Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`). The custom palette (`sand-*`, `terracotta-*`, `night-*`) and font variables (`--font-body`, `--font-display`, mapped from the Geist-replacement fonts loaded in `src/app/layout.tsx` via `next/font/google`) are defined in `src/app/globals.css` using `@theme inline`. Use these existing tokens rather than introducing new ad hoc colors.

Path alias: `@/*` maps to `src/*` (see `tsconfig.json`).
