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

| Command                 | Purpose                                 |
| ----------------------- | --------------------------------------- |
| `npm run lint`          | ESLint across the repo (`eslint .`)     |
| `npm run format:check`  | Prettier formatting validation          |
| `npm test`              | Unit/component tests with Vitest        |
| `npm run test:coverage` | Coverage report + threshold enforcement |
| `npx tsc --noEmit`      | TypeScript type-check                   |
| `npm run build`         | Production build                        |

If you change static export behavior, also run `npm run export` and confirm output under `out/` as in the README.

### Coverage policy

Coverage is enforced with Vitest (`npm run test:coverage`) using V8 provider.

- Global thresholds: lines/statements `75`, functions `50`, branches `50`.
- `src/features/**/*.{ts,tsx}`: lines/statements `90`, functions `80`, branches `70`.
- `src/components/**/*.{ts,tsx}`: lines/statements `70`, functions `50`, branches `50`.

Scope notes:

- Included for coverage: `app/**/*.{ts,tsx}` and `src/**/*.{ts,tsx}`.
- Excluded from coverage: test files, barrel files (`index.ts`), and `src/test/**` helpers.

## Project layout

| Path                               | Role                                                                 |
| ---------------------------------- | -------------------------------------------------------------------- |
| [app/](app/)                       | Next.js App Router: `layout.tsx`, `page.tsx`, global styles          |
| [src/components/](src/components/) | UI components                                                        |
| [src/config/](src/config/)         | App-wide static configuration/constants (no runtime behavior)        |
| [src/hooks/](src/hooks/)           | React hooks (e.g. observable state helpers)                          |
| [src/features/](src/features/)     | Encapsulated features (state + behavior), including translation/i18n |

### Choosing `src/config` vs `src/features`

Use these rules when deciding where shared modules belong:

- Put app-wide static constants/config in `src/config/` (for example route maps, fixed limits, environment-independent constants).
- Keep `src/components/` focused on UI and component-local data/translations.
- Move a concern to `src/features/<name>/` once it gains behavior/state/hooks/services, even if it started as config.

### Adding new `src/features` modules

Prefer a dedicated subfolder per concern (e.g. `translation/`, future `analytics/`) with:

- **Internal files** — config/types, store, hooks, helpers as needed.
- **Barrel file** — `index.ts` re-exports the public API so app code imports from one path (e.g. `@/features/translation` or `../features/translation`).

Update the table in this section when you introduce a new top-level area under `src/features/` or materially change `app/` / `src/` structure.

### Translation / i18n (`src/features/translation`)

Current layout:

- `config.ts` — `Language` type, defaults, shared types.
- `store.ts` — RxJS `BehaviorSubject` for the active language (`language$`, `setLanguage`, etc.).
- `useTranslations.ts` — `useTranslations(translations)` hook that binds component-local dictionaries to the observable language.
- `index.ts` — public feature API (hooks + store).

When adding strings:

1. Create/extend a component-local `translations.ts` with a typed dictionary for that component’s keys.
2. Call `useTranslations(componentTranslations)` inside the component to access `t(key)` values.
3. For app-wide navigation labels, keep IDs/routes in `src/config/navigation/items.ts` and labels in `src/config/navigation/translations.ts`, then resolve labels via `useTranslations` in UI code.

Document here if we later adopt a different i18n approach or move persistence (e.g. URL, cookie) into this module.

### Theme color tokens

Color styling should use semantic Tailwind tokens instead of hardcoded palette shades where possible.

- Define/update semantic tokens in [tailwind.config.ts](tailwind.config.ts) under `theme.extend.colors`.
- Use `primary` tokens for global body/theme surfaces and shared body text roles.
- Use `secondary` tokens for footer-like/accent surfaces and matching UI surfaces.
- Prefer semantic classes (for example `bg-primary`, `dark:bg-primary-dark`, `border-secondary-border`, `dark:border-secondary-borderDark`) over raw classes like `bg-lime-50` / `dark:bg-teal-950`.
- Keep border tokens consistent with their surface role unless there is a clear, intentional design reason to diverge.
- When introducing a new color role, document its intent here in `CONTRIBUTING.md` in the same PR.

## Commits and pull requests

- Prefer focused changes: one logical concern per PR when practical.
- PR descriptions should explain **what** changed and **why** in plain language, especially for UX or export/hosting impact.
- If your change introduces a new command, folder convention, or review expectation, **update this file** so the next contributor sees it.

## Changelog-style notes (optional)

You can append short dated bullets below when useful for the team (remove or trim if it gets noisy).

- **2025-03-22** — Initial `CONTRIBUTING.md`; documented the translation feature pattern and PR hygiene.
