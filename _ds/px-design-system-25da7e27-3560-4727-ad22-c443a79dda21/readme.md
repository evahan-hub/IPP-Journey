# Bento — Adyen Design System (recreation)

**PX Design System** is a faithful, self-contained recreation of **Bento**, Adyen's internal design system, packaged so design agents can build well-branded Adyen interfaces, prototypes and assets. It ships the real design tokens, the Adyen webfonts, the full 16px icon set, reusable UI components, and an interactive recreation of the Customer Area (merchant dashboard).

Adyen is a global financial-technology platform: a single system for accepting payments (online, in-app and in-store), moving money, embedding financial products, and managing risk — used by enterprises worldwide. Its products share one visual language, and Bento is that language.

## Sources

Everything here is grounded in Adyen's open-source Bento monorepo — read it for anything this recreation doesn't cover:

- **Bento monorepo** — https://github.com/Adyen/bento
  - Design tokens (Style Dictionary YAML) — `packages/design-tokens`
  - Vue component library (the component inventory) — `packages/vue2`
  - UI assets / icons — `packages/ui-assets` (`icons-16/24/32/40`, `icons-pm` payment-method logos)
  - Webfonts — `packages/core/fonts`

The reader is encouraged to explore that repository to build higher-fidelity Adyen designs. Nothing in this project requires access to the repo — the values are captured here.

> **Naming:** to avoid recreating Adyen's proprietary product branding, the sample UI kit uses the placeholder product name **"Bento Pay"**. The only real brand glyph shipped is the Adyen "a" mark (`assets/icons/adyen-a-filled.svg`); no full Adyen logo/wordmark exists in the source, so none is reconstructed.

---

## Content fundamentals

How Bento product copy reads (drawn from component docs, labels and messages in the source):

- **Voice: clear, calm, operational.** Copy states facts and next actions — "Payout sent", "Verification required", "3 payments failed". No hype, no exclamation marks.
- **Second person, active voice.** Addresses the user as "you" and tells them what to do: "Upload a proof of address", "Retry or contact support".
- **Sentence case everywhere** — buttons, titles, labels, menu items ("Create payment", "Add filter", "View all"). Never Title Case, never ALL CAPS except tiny table-header eyebrows.
- **Concise, front-loaded.** Titles are short; the descriptive detail follows in a secondary line. Numbers and money are specific and tabular (`€1,284,930.00`).
- **Terminology is precise and domain-correct:** Authorised / Pending / Refused / Refunded / Chargeback; Payout, Balance, Dispute, Reference, PSP reference. British spelling ("Authorised", "colour" in docs).
- **No emoji.** Meaning is carried by icons and colour, never emoji.
- **Errors are constructive:** they name the problem and the remedy ("Enter a valid email address").

## Visual foundations

- **Colour.** A cool, professional base: near-white surfaces (`grey-100` #F4F5F6) and a dark navy ink (`grey-3200` #001222) for text and primary buttons. The signature accent is **Adyen green** (`green-900` #00D16A), used sparingly — the active-nav pill, positive deltas, brand mark. Each hue (grey, green, blue, yellow, orange, red, purple, sand) is a 34-step scale (100–3400). Product UI consumes **semantic aliases** (`--b-color-background-*`, `--b-color-label-*`, `--b-color-outline-*`, `--b-color-decorative-*`), never raw palette steps.
- **Type.** Two display/body families plus a mono. **Adyen Variable** for titles and larger text; **Adyen UI** for body & caption at ≤14px (crisper at small sizes); **Adyen Mono** for figures, references and code. Weights: 400 body, 500 stronger, 600 titles. Sizes step 12/14/16/18/20/24/32; line-heights are fixed px values, not ratios.
- **Spacing.** A 2px-based scale (`--b-spacer-*`, 0–64px). Dense but breathable; cards use 16px internal padding, layout gaps 16–24px.
- **Corner radius.** xs 2 · s 4 · **m 8** (buttons, inputs) · **l 12** (cards, modals) · xl 24. Nothing fully pill-shaped except the toggle track and status dots.
- **Borders.** 1px hairlines in `grey-400`/`grey-600` separate rows and outline cards and secondary buttons. Inputs use a `grey` (tertiary) 1px border that darkens on hover/focus, with a 0.5px outline on focus to thicken without shifting text.
- **Elevation.** Three ink-tinted shadows (`rgba(0,18,34,…)`): `low` for raised segments, `medium` for menus/popovers, `high` for modals/toasts. `*-border` variants add a 1px ring. Surfaces are mostly flat; elevation is reserved for things that float.
- **Backgrounds.** Flat colour only — no gradients, no photography behind UI, no textures. The app canvas is `secondary` (grey-100); cards sit on `primary` (white).
- **Motion.** Fast and functional. Durations 100/150/250ms; standard easing `cubic-bezier(0.2,0,0.4,0.9)`, plus enter/exit curves. Transitions apply to colour, background, box-shadow and small transforms (toggle handle, card expand). No bounce, no decorative animation.
- **Interaction states.** Hover = a one-step-darker background (`*-hover` tokens) or, for text/tertiary, dropping the underline. Active/pressed = the next step darker (`*-active`); controls do not shrink. Focus = a 3px `rgba(15,117,220,0.8)` focus ring. Disabled = `grey-200` fill / `grey-1300` label with `not-allowed` cursor.
- **Transparency & blur** are essentially unused; the scrim behind modals is the one exception (`rgba(0,18,34,0.5)`). No frosted-glass.
- **Cards** = white surface, 1px `grey-400` border, 12px radius, no shadow at rest; clickable cards darken their background on hover. This "outlined, not shadowed" card is a Bento signature.

## Iconography

- **One system: Bento UI-assets.** Outline SVGs on a consistent stroke, monochrome, designed to be tinted via CSS `color`. Shipped in `assets/icons/` (the full **16px** set, 431 icons); the source also has 24/32/40px grids and `icons-pm` payment-method logos.
- Consume them through the **`Icon`** component, which renders an SVG as a `mask` so it inherits `currentColor` — the same way Bento tints icons. Filled variants (`…-filled` / `…-fill`) exist for emphasis (e.g. `info-filled`, `checkmark-circle-fill`).
- Icons carry meaning alongside colour for status (`checkmark-circle`, `warning`, `cross-circle`). **No emoji, no Unicode-glyph icons.** Product/nav icons are prefixed (`nav-*`), and there are rich domain icons (payments, terminals, banking, risk).
- The only brand glyph is `adyen-a-filled.svg`.

---

## Index / manifest

Root:
- `styles.css` — the single entry point consumers link. Imports, in order: `tokens/fonts.css`, `tokens/palette.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/base.css`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills manifest (usable in Claude Code).
- `assets/fonts/` — Adyen Variable, Adyen UI (regular/medium/bold), Adyen Mono woff2.
- `assets/icons/` — 431 Bento 16px SVG icons.
- `tokens/` — token CSS (see above).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable React components (below).
- `ui_kits/customer-area/` — the Customer Area recreation.

## Components

React primitives, grouped by concern. Import from `window.PXDesignSystem_25da7e` after loading `_ds_bundle.js`. Each has a sibling `.d.ts` (props) and `.prompt.md` (usage).

- **core/** — `Icon`, `Button`, `IconButton`, `Link`, `Tag`, `Status`, `Chip`, `Avatar`, `Divider`
- **forms/** — `InputField`, `Textarea`, `Checkbox`, `RadioGroup`, `Toggle`, `SegmentedControl`, `SelectionCard`
- **feedback/** — `Alert`, `Toast`, `LoadingIndicator`, `EmptyState`, `Tooltip`
- **containers/** — `Card`, `Modal`
- **navigation/** — `Tabs`, `Pagination`, `Stepper`, `Menu`

### Coverage vs. the source

Bento's Vue library defines ~70 component families. This recreation implements the **most-used primitives** above (27 components) at high fidelity, which covers the vocabulary needed to build most Adyen screens. Larger composite families in the source that are **not** rebuilt here include: `data-grid` (full sortable/virtualised grid — this kit hand-builds a simple table instead), `filter-bar`, `date-picker` / `date-range-picker` / `date-time-picker`, `dropdown` (rich single/multi-select with variants), `file-uploader`, `header-with-views`, `navigation-menu` / `secondary-nav`, `rich-text-editor`, `summary-grid`, `timeline`, `country` / `currency` / `payment-method` pickers, `accordion`, `drawer`, `sidepanel`, `promo-banner`, `code-snippet`, `ai-tag`. Reach for the source repo when you need these.

### Intentional additions

- **`Icon`** — a thin wrapper that renders the Bento SVG assets as colourable glyphs. Bento (Vue) inlines SVGs at build time; in this browser-only, bundler-less environment a runtime `Icon` component is the equivalent, so it's added deliberately.

## UI kits

- **`ui_kits/customer-area/`** — interactive recreation of the Customer Area merchant dashboard (sidebar nav, Test/Live top bar, Home overview with metric cards, and a Payments list with tabs, filters, a data grid, pagination and a payment-detail modal). See its own `README.md`.

## Caveats

- Only the **Latin** masters of Adyen Variable/Mono are shipped; the source's Simplified/Traditional Chinese masters are omitted to keep the bundle light.
- Adyen Variable/UI/Mono are Adyen's proprietary fonts, copied from the public Bento repo. If you lack rights to use them, swap the `--b-font-family-*` tokens to a near-match (e.g. Inter / IBM Plex Sans + IBM Plex Mono).
- Component styling is recreated from the Bento SCSS token-for-token where read, but is a cosmetic reimplementation — not the production Vue components.
