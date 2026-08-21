# Unasked Design Language v2 — Field Journal

## Direction

Unasked should feel like a **research field journal that happens to be alive in a browser**: warm paper, dark ink, small editorial marks, clear section numbering, restrained red annotation, and enough digital interaction to make reading easier without turning the page into an app dashboard.

The reference image supplied by the owner is inspiration, not a template. We are borrowing the broader editorial family:

- warm off-white / paper substrate rather than white or dark SaaS chrome;
- typography-led hierarchy;
- mono / typewriter labels for metadata and navigation;
- serif reading text for long-form material;
- thin rules, dotted separators, folio numbers, stamps and marginalia;
- very little radius, glow, glass, gradient, or floating-card UI;
- texture subtle enough that text remains the dominant object;
- interaction expressed as annotation, reveal, underline, and editorial state rather than neon controls.

## Why this is current rather than retro cosplay

Recent web/design work has been moving toward tactile, human-crafted and print-referential interfaces as a reaction against frictionless AI-polished sameness. Framer's 2025 trend survey highlights retro texture and overtly human-crafted imperfection; Lynn Fisher's 2025 refresh deliberately uses subtle paper texture and paperback-book chapter structure; recent editorial portfolio work continues to use warm paper, vintage texture and typography-led grids.

The useful lesson is not “make it vintage.” It is:

> **Give information a physical-feeling hierarchy and provenance without sacrificing web readability.**

## Palette

```text
paper        #ebe4d3
paper-deep   #e2d7c1
ink          #201b15
ink-soft     #5f574d
rule         #bdb09a
accent       #a33a2f   (annotation / section number / discovery signal)
wash         #f3edde
black-mark   #1c1813
```

The owner reference image is approximately in the same warm ecru family; we use a slightly more editorial/red-annotation direction so the result does not become a copy.

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
