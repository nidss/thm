# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single public page that renders **57 mobile screens** of the ThaiMove app (a Thai walk/run rewards app) inside a phone mockup, built from a Figma design. It is a design preview, not a real app — there is no backend, no auth, and all data is hardcoded in the screen components.

UI copy is Thai. Code comments in this repo are written in Thai; match that when editing existing files.

## Commands

```bash
npm run dev                    # dev server on :3000
npm run build                  # static export → out/
npx tsc --noEmit               # typecheck — this is the real pre-commit check
```

There are no tests and no test framework.

**`npm run lint` is broken** — the script is `next lint`, which Next 16 removed; it fails with "Invalid project directory provided, no such directory: .../lint". There is no ESLint config in the repo. Use `npx tsc --noEmit` instead, or fix/remove the script if linting is needed.

To preview the real static output (catches basePath and asset bugs that `next dev` hides):

```bash
npm run build && npx serve -l 4321 out
```

To reproduce the deployed build exactly, set the basePath the CI uses:

```bash
NEXT_PUBLIC_BASE_PATH=/thm npm run build
```

## Architecture

### Screen registry, not routes

There is exactly one Next.js route (`app/page.tsx`). All 57 screens are client components swapped inside a fake phone. Three files form the spine and must stay in sync:

| File | Role |
| --- | --- |
| `components/screenList.ts` | **Data only.** 57 entries: `slug`, `title`, `section`, Figma `node` id, `tab?`. Derives the `ScreenSlug` union type. |
| `components/registry.tsx` | Maps each `ScreenSlug` → its React component. |
| `components/nav.tsx` | `NavProvider` — history stack, `go()`/`back()`, URL hash sync. |

`screenList.ts` is deliberately component-free so `nav.tsx` can import slug types without pulling in every screen. Don't add component imports to it.

**Adding a screen:** add the entry to `SCREENS` in `screenList.ts`, write the component in the matching `components/screens/<section>.tsx` barrel, then wire it in `registry.tsx`. A slug missing from the registry renders a "ยังไม่ได้ทำหน้านี้" placeholder (see `Placeholder` in `PhoneFrame.tsx`) rather than crashing — useful while building, but it means a forgotten registry entry fails silently.

### Navigation

`NavProvider` keeps a stack of slugs. The top of the stack is the current screen. It syncs both ways with `window.location.hash` (`#/login`), so every screen is shareable by URL and the browser back button works. `direction` (1 forward / -1 back) drives the slide transition in `PhoneFrame`.

`PhoneFrame.tsx` owns the 360×780 device shell, the scroll container, and the `AnimatePresence` screen transition. It shows `FloatingMenu` only for the five slugs in its `TAB_BY_SLUG` map (dashboard, events, activity, ranking, rewards) — that map and `components/tabs.ts` must agree.

### Screen file organisation

Five original tab screens live in their own files (`DashboardScreen.tsx`, `EventsScreen.tsx`, …). The other 52 are grouped into per-section barrels: `auth.tsx`, `setup.tsx`, `home.tsx`, `rewards.tsx`, `draw.tsx`, `events.tsx`, `social.tsx`, `profile.tsx`, imported as namespaces in `registry.tsx`.

### Shared kit — check before writing new markup

- **`components/ui.tsx`** — `Screen`, `Block`, `AppBar`, `PageTitle`, `Button`, `Field`, `DarkField`, `DarkTextarea`, `Checkbox`, `Toggle`, `ListRow`, `Card`, `InfoCard`, `InlineAlert`, `OtpBoxes`, `BulletList`, `StrengthMeter`, `Tabs`, `DataRow`, `Pill`, `CenterDialog`, `Logo`.
  `Screen` + `Block` are the standard wrapper pair: `Screen` sets up the stagger container, each `Block` is one staggered child. `Button` takes a `to` prop (a `ScreenSlug`) to navigate.
  Two input styles exist on purpose: `Field` is the white-background one used only on Login/Signup; `DarkField` is the translucent one used everywhere else.
- **`components/motion.tsx`** — `listStagger`/`riseItem`/`popCard` variants, `easeOutSoft`, `springSoft`, plus `ProgressBar`, `CountUp`, `GrowBar`. All respect `prefers-reduced-motion`.
- **`components/Surface.tsx`** — `Img`/`FixedImg` (wrap `next/image` and prefix the src with `withBasePath`, so basePath is applied — do **not** hand-write `<img src="/img/...">`), the `IMAGES` manifest, and `GRADIENTS`/`GradientBlock` placeholders.
  Because `next.config.mjs` sets `images: { unoptimized: true }`, `next/image` does **not** prefix basePath itself (unlike `_next/*` assets, which get `assetPrefix`). Every `public/` asset must go through `withBasePath`, or it 404s on GitHub Pages under `/thm/`.

### Design tokens

Figma variables are mapped to Tailwind v4 `@theme` tokens in `app/globals.css` (`--color-ink`, `--color-primary`, `--color-surface`, `--color-hairline`, `--color-coral`, …). Use the token utilities (`bg-surface`, `text-primary`, `border-hairline`) rather than re-deriving raw hex or `rgba(255,255,255,0.06)` values.

Fonts load via `next/font` in `app/layout.tsx`: Anuphan for body (`font-anuphan`), Anton for condensed display headings (`font-display`).

## Assets

`components/icons.tsx` is **generated** from the 43 real Figma SVG exports, with hardcoded `stroke="white"` rewritten to `currentColor`. Do not hand-edit its paths — regenerate from new `.svg` files instead. Size and colour icons with classes: `className="size-6 text-primary"`.

The 15 real images live in `public/img` and are all referenced through the `IMAGES` manifest in `Surface.tsx`.

Known substitutions where no source file was supplied (documented in README): user/club avatars use `GradientBlock`; the ThaiMove logo is type-built in `ui.tsx`; the Facebook glyph in `auth.tsx` is hand-drawn; the icon set has no medal or calendar glyph, so the ชาเลนจ์ tab uses `icon/target` and กิจกรรม uses `icon/activity`; the commercial display font is substituted with Anton.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds with `NEXT_PUBLIC_BASE_PATH=/thm` and deploys to GitHub Pages at <https://nidss.github.io/thm/>. `next.config.mjs` uses `output: 'export'`, so anything requiring a server (route handlers, SSR, image optimization) will not work.

Do not add the Figma file URL to the repo — it was deliberately removed from the README in commit `29ba112`. Figma **node ids** (e.g. `198:2`) are fine and are kept in `screenList.ts` for design comparison.
