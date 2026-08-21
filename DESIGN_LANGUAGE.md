# Unasked Design Language v3 — Field Journal

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

The useful design principle is not “make it vintage.” It is:

> **Give information a physical-feeling hierarchy and provenance without sacrificing web readability.**

The paper feeling must come from substrate, rules, typography, spacing and restrained grain—not from weak contrast.

## Readability contract

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

No font dependency in v3.

- UI / metadata: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
- Headlines: `Georgia, 'Times New Roman', serif`
- Long-form: `Georgia, 'Times New Roman', serif`
- Side-feed post text: serif body with mono identity / references

Do not add a CDN font merely for polish.

## Page anatomy

### Left rail — Index

A quiet contents / domain index, not a social navigation bar.

- DISPATCHES
- SAVED
- domain filters
- short project statement

### Center — Dispatches

Feed items read as numbered research dispatches rather than social cards.

Each collapsed item exposes:

- folio number;
- domain / story grammar / reading time;
- title;
- short concrete hook;
- **PLAIN** — what is happening, with zero assumed field knowledge;
- **WHY** — the mental-model change;
- **EDGE** — one sharp implication, tension, connection, counterfactual, use, or unlocked question;
- evidence/discovery labels;
- feedback controls.

`WHY THIS APPEARED` remains stored metadata but is no longer required on the normal collapsed reading surface. It is useful for the research system; it is not usually useful enough to compete with the report itself.

The full article expands in place.

### Right rail — Side feed first, method second

The right rail is now useful content rather than mostly documentation.

At the top:

```text
SIDE FEED
Unasked  @unasked_notes
FICTIONAL SIDE FEED
```

Posts are intentionally tweet-like in behavior, not in visual imitation:

- one thought at a time;
- casual, concrete language;
- can be a detail, reaction, quote, question, edge, summary or connection;
- tiny folio references can jump to the related dispatch;
- no fake likes, replies, follower counts, avatars of fake people, blue-brand clone, or engagement chrome.

The side feed should still look like Unasked: warm paper, ink, dotted rules, serif post text, mono metadata.

Below it, method/evidence information moves into a compact disclosure. The method remains available without owning the most valuable sidebar space.

### Narrow screens

At widths where the right rail disappears, render the same side-feed data as a horizontally scrollable strip above the main dispatch list.

This is important: the side feed is content, so it should not vanish simply because the reader is on a phone or narrower browser.

## Card hierarchy

The collapsed card is an entrance, not an abstract.

The visual hierarchy should reinforce the short-form content contract:

1. title;
2. hook;
3. PLAIN / WHY / EDGE rows;
4. epistemic labels;
5. controls.

The quick rows should be easy to scan. `EDGE` receives slightly stronger visual emphasis because it is where the research makes its most interesting move beyond the finding, but it should not become a marketing callout.

## Article hierarchy

Article structure is flexible. The reader should get the core idea early, but `The simple version`, `Why this is interesting`, and `Where it becomes tangible` are optional tools rather than fixed headings.

Then go as deep as the evidence earns.

## Motion

Minimal:

- article reveal;
- underline / rule movement;
- tiny state changes on save / worth-it;
- horizontal side-feed scrolling on narrow screens;
- no parallax, particle systems, or decorative scrolling effects.

The content supplies novelty. The UI should feel composed, not attention-seeking.
