# Unasked Design Language v2 — Field Journal

## Direction

Unasked should feel like a **research field journal that happens to be alive in a browser**: warm paper, dark ink, small editorial marks, clear section numbering, restrained red annotation, and enough digital interaction to make reading easier without turning the page into an app dashboard.

The reference image supplied by the owner is inspiration, not a template. We are borrowing the broader editorial family:

- warm off-white / paper substrate rather than white or SaaS chrome;
- typography-led hierarchy;
- mono / typewriter labels for metadata and navigation;
- serif reading text for long-form material;
- thin rules, dotted separators, folio numbers, stamps and marginalia;
- very little radius, glow, glass, gradient, or floating-card UI;
- texture subtle enough that text remains the dominant object;
- interaction expressed as annotation, reveal, underline, and editorial state rather than neon controls.

## Why this is current rather than retro cosplay

Recent web/design work has been moving toward tactile, human-crafted and print-referential interfaces as a reaction against frictionless AI-polished sameness. The useful lesson is not “make it vintage.” It is:

> **Give information a physical-feeling hierarchy and provenance without sacrificing web readability.**

The paper feeling must come from substrate, rules, typography, spacing and restrained grain—not from weak contrast.

## Readability contract

The reader is here for long-form material, so accessibility minima are a floor rather than the target.

- Normal text should comfortably exceed WCAG 2.x's 4.5:1 minimum contrast target.
- Secondary text may look quieter through size, placement and hierarchy, but must not become washed out.
- Texture must sit behind the page rather than compete with glyph edges.
- Long-form body copy should remain approximately 17–18px at desktop reading widths with generous line height.
- Metadata may be smaller, but repeated 8–9px muted text is not acceptable as the default reading language.
- Light and dark modes preserve the same editorial hierarchy; dark mode is not a separate neon/SaaS skin.

Current palette contrast against its base background is intentionally strong: light-mode secondary text is roughly 8:1; dark-mode secondary text roughly 9.8:1. The red annotation accents are above 6:1 in both modes.

## Palette

### Light — warm paper

```text
paper        #f0eadc
paper-deep   #e6dcc8
ink          #1c1813
ink-body     #2e2923
ink-soft     #4c443a
rule         #aa9d87
rule-dark    #746958
accent       #9a342b
wash         #f7f2e7
black-mark   #1c1813
```

### Dark — warm charcoal

```text
paper        #171512
paper-deep   #211e1a
ink          #f2eadc
ink-body     #ddd3c4
ink-soft     #c7bdaf
rule         #655d52
rule-dark    #8f8578
accent       #e27863
wash         #1c1916
black-mark   #f0e7d8
```

Do not use pure black/pure white by default. Dark mode should feel like ink reversed onto a warm archival charcoal sheet, with softened ivory text and the same oxide-red annotation language.

The site follows the operating-system theme on first visit. An explicit reader toggle overrides that choice and persists locally.

## Typography

No font dependency in v2.

- UI / metadata: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
- Headlines: `Georgia, 'Times New Roman', serif`
- Long-form: `Georgia, 'Times New Roman', serif`
- Small functional text may use system sans only when density requires it.

If the feed earns further work, a self-hosted type family can be evaluated later. Do not add a CDN font merely for polish.

## Page anatomy

### Left rail — Index

A quiet contents / domain index, not a social navigation bar.

- FEED
- SAVED
- domain filters
- short project statement

### Center — Dispatches

Feed items read as numbered research dispatches rather than tweets.

Each collapsed item exposes:

- folio number;
- domain;
- research mode / epistemic label;
- title;
- hook;
- **Plain version**;
- **Why this is interesting**;
- **Tangible edge** — one concrete present/future use;
- why it appeared;
- reading time and feedback controls.

The full article expands in place.

### Right rail — Method / legend

Keep small explanations for:

- what labels mean;
- current pending research state;
- two-pass validation;
- feedback export.

This is the analogue of editorial marginalia, not a dashboard.

## Article hierarchy

Default article modules are not rigid. Choose the grammar that fits the topic, but the reader should almost always get these three things early:

1. **The simple version** — a non-specialist explanation that does not patronize.
2. **Why this is interesting** — why the fact/mechanism changes a mental model or opens a useful question.
3. **The tangible edge** — where it is already used, what it now makes possible, or how it could change a real decision/practice.

Then go deep.

## Motion

Minimal:

- article reveal;
- underline / rule movement;
- tiny state changes on save / worth-it;
- no parallax, particle systems, or decorative scrolling effects in v2.

The content already supplies novelty. The UI should feel composed, not attention-seeking.
