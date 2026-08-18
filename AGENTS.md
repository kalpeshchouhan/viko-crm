<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project state

This is a Next.js 16 (App Router) CRM project, currently at the create-next-app
scaffold stage — `app/page.tsx` and `app/layout.tsx` still hold the default
starter content. No CRM domain features, API routes, data layer, or tests
exist yet. A full library of shadcn/ui primitives has been installed in
`components/ui/` in anticipation of building the UI, but nothing in `app/`
consumes them yet.

## Commands

- `pnpm dev` — start the dev server (Turbopack, via `next dev`)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)

No test runner is configured — there are no tests in the repo yet.

Package manager is pnpm (`packageManager: pnpm@11.7.0` in package.json); use
`pnpm`, not `npm`/`yarn`.

## UI components (shadcn/ui)

`components.json` configures the shadcn CLI for this project:
- style: `base-nova`, base color `neutral`, icon library `lucide`, no Tailwind prefix
- path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`, `@/lib/utils` (`cn` helper)

`components/ui/` already contains the full shadcn component set (dialogs,
forms, tables, sidebar, charts via `recharts`, command palette via `cmdk`,
etc.) — check there before adding a new dependency for common UI needs.
Add new shadcn components with the `shadcn` CLI rather than hand-rolling them,
to keep them consistent with the installed set.

Styling is Tailwind CSS v4 (`@tailwindcss/postcss`, no `tailwind.config.*` —
config lives in `app/globals.css` via `@theme`/CSS variables, per Tailwind v4
conventions).

## TypeScript

Path alias `@/*` maps to the repo root (see `tsconfig.json`). `strict` mode
is on.
