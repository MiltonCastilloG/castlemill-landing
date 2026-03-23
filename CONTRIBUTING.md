# Contributing to castlemill-landing

This document describes how to work on the CastleMill landing page and how we keep project practices written down. **Treat it as a living guide:** when you add a workflow, folder, or convention, update the relevant section here in the same change (or in a follow-up PR if the scope is large).

For install, dev server, and static export to S3, see [README.md](README.md).

## Prerequisites

- Node.js and npm (versions aligned with what the team uses for Next.js 15; lockfile is `package-lock.json`).

## Local workflow

```bash
npm install
npm run dev
```

- App router entry: [app/](app/).
- Development URL: `http://localhost:3000` (default Next.js port).

## Checks before you open a PR

Run these locally; extend this list here when we add CI or new scripts.

| Command | Purpose |
|--------|---------|
| `npm run lint` | ESLint via Next.js |
| `npx tsc --noEmit` | TypeScript (no npm script yet—add one in `package.json` when convenient) |
| `npm run build` | Production build |

If you change static export behavior, also run `npm run export` and confirm output under `out/` as in the README.

## Project layout

| Path | Role |
|------|------|
| [app/](app/) | Next.js App Router: `layout.tsx`, `page.tsx`, global styles |
| [src/components/](src/components/) | UI components |
| [src/hooks/](src/hooks/) | React hooks (e.g. language + RxJS bridge) |
| [src/lib/](src/lib/) | Shared logic grouped by **domain folders** (not a flat dump of unrelated files) |

### Adding new `src/lib` modules

Prefer a dedicated subfolder per concern (e.g. `translation/`, future `analytics/`) with:

- **Internal files** — config, data, store, helpers as needed.
- **Barrel file** — `index.ts` re-exports the public API so app code imports from one path (e.g. `@/lib/translation` or `../lib/translation`).

Update the table in this section when you introduce a new top-level area under `src/lib/` or materially change `app/` / `src/` structure.

### Translation / i18n (`src/lib/translation`)

Current layout:

- `config.ts` — `Language` type, defaults, shared types.
- `text.ts` — copy per language.
- `store.ts` — RxJS `BehaviorSubject` for the active language (`language$`, `setLanguage`, etc.).
- `index.ts` — exports consumers should use (types, `getTranslationText`, store API).

When adding strings:

1. Extend `TranslationKey` and entries in `text.ts` for each language.
2. Use `getTranslationText` with `useLanguage()` (or the current language from the store) in components.

Document here if we later adopt a different i18n approach or move persistence (e.g. URL, cookie) into this module.

## Commits and pull requests

- Prefer focused changes: one logical concern per PR when practical.
- PR descriptions should explain **what** changed and **why** in plain language, especially for UX or export/hosting impact.
- If your change introduces a new command, folder convention, or review expectation, **update this file** so the next contributor sees it.

## Changelog-style notes (optional)

You can append short dated bullets below when useful for the team (remove or trim if it gets noisy).

- **2025-03-22** — Initial `CONTRIBUTING.md`; documented `src/lib/translation` barrel, store in `translation/store.ts`, and PR hygiene.
