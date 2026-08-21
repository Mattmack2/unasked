# Unasked blurb + side-feed research v1

**Date:** 2026-08-21

## Decision

Unasked's collapsed cards should be easier than the articles, not miniature versions of them. The reader should not need vocabulary learned while researching the topic just to decide whether to open it.

The right rail should also stop being mostly method documentation. It should become a **fictional side feed**: short, casual posts about things found in the reports. The side feed is explicitly part of Unasked, not a real person or an external social account.

## What the research says

### 1. The first message has to work before the reader knows the field

CDC's research-based Clear Communication Index recommends putting one main message first, using words the audience already uses, active voice, short chunks, and one idea per sentence. Its current plain-language guidance suggests about 20 words per sentence as a useful average rather than a hard ceiling.

Sources:
- https://www.cdc.gov/health-literacy/php/develop-materials/plain-language.html
- https://www.cdc.gov/ccindex/tool/description-examples-parta.html
- https://www.cdc.gov/ccindex/tool/page-7.html

A 2025 analysis of 1,241 NIHR plain-language summaries shows how easily experts fail this test: only 2.8% reached the study's `plain English` readability classification, and only 21.7% had jargon scores considered suitable for general comprehension. Writing a section called a plain-language summary does not make it plain.

Source:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11773280/

### 2. Plain language does not mean removing the interesting mechanism

A systematic review of plain-language-summary research treats accessibility and understanding as distinct aims and notes that good summaries still need to convey the study and its implications accurately. The answer is not cute analogy or vague simplification; it is to use ordinary words until a technical term actually buys precision, then define it immediately.

Sources:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9170105/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8717946/

### 3. Concrete beats abstract

Hu et al. (2025/26) analyzed roughly 15 million Twitter posts, more than 50,000 Reddit posts, and ran a preregistered controlled experiment. More concrete language predicted more retweeting/upvoting, and participants preferred the more concrete version of matched social posts.

For Unasked this means preferring:

> Three separate pieces of worked wood all point to 1021 CE.

Over:

> Multi-proxy chronological convergence demonstrates robust temporal synchronization.

Source:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13062457/

### 4. Interesting does not mean withholding the answer

A registered analysis of 8,977 headline experiments found a curved relationship between concreteness and selection: overly vague curiosity-gap headlines can lose to more informative headlines, while an already over-explained headline can benefit from leaving something to discover.

The useful rule is **answer one thing and open one thing**.

The card should tell the reader what happened. Its edge should reveal the more interesting implication or tension that makes the full report worth opening.

Sources:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11704130/
- https://journals.sagepub.com/doi/10.1177/1461444819863408

### 5. Social posts should behave like posts, not alternate abstracts

Research on science communication on Twitter/Instagram finds that interpersonal features — evaluation, questions, humor, emotion, references to others, and conversational framing — are associated with more dialogue-oriented communication. This does not mean manufacturing emotion. It means a side feed can naturally contain a reaction, one detail, a question, a connection, or a quote rather than requiring every post to summarize the paper.

Research on social sharing also supports using concrete details. X's own older creative guidance likewise emphasizes concise, conversational copy, though Unasked should not inherit its marketing/CTA incentives.

Sources:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7654796/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10552346/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13062457/
- https://business.x.com/content/dam/business-twitter/en/resources/downloadables/starter-kit-twitter-ads-1015.pdf

## New feed-card contract

The four reader-facing fields have different jobs and must not restate one another.

### HOOK

**Job:** give the reader a concrete reason to stop.

- Usually one sentence.
- Prefer a specific object, action, result, number, or contradiction.
- No unexplained specialist vocabulary.
- It may state the result directly. Do not manufacture a curiosity gap.
- Target: roughly 12–30 words.

### PLAIN

**Job:** let a smart reader with zero domain knowledge understand what is happening.

- One or two short sentences.
- Explain the mechanism with ordinary words.
- Technical terms only when necessary, defined where introduced.
- Do not assume the reader remembers an earlier report.
- Target: roughly 25–55 words.

### WHY

**Job:** state the mental-model change.

- One idea.
- Name what common assumption, framing, or boundary changes.
- Do not write `this is important because...` followed by a generic field-level benefit.
- Target: roughly 20–50 words.

### EDGE

**Job:** give the most interesting *take* enabled by the research.

This replaces the old `tangible edge = application` interpretation.

Choose **one**:

1. **Implication** — if this is true, what follows that is not obvious from the finding itself?
2. **Tension** — which two true things now sit awkwardly together?
3. **Connection** — what other report, field, system, or familiar situation becomes clearer?
4. **Counterfactual** — what would be different if a key condition changed?
5. **Use** — one specific real or plausible application that is more interesting than the generic field benefit.
6. **Unlocked question** — what better question can we ask now that we could not ask before?

Rules:
- It must add a proposition not already present in HOOK / PLAIN / WHY.
- One edge, not a list of applications.
- Prefer a concrete example or named comparison.
- It should still be worth reading if copied out of the card by itself.
- If no non-generic edge exists, the item is probably not ready for publication.
- Target: roughly 25–60 words.

## Quick editorial test

Read only HOOK + PLAIN + WHY + EDGE.

The card fails if:
- a non-specialist cannot explain the basic finding afterward;
- the same claim appears twice;
- removing EDGE loses nothing;
- EDGE says only `this could help researchers`, `this may have applications`, or another generic significance claim;
- technical vocabulary is used before the ordinary-language idea exists;
- the card feels like an abstract.

## Fictional side-feed contract

Data lives in `docs/side-feed.json`.

The visible account is **Unasked / @unasked_notes**, labeled `FICTIONAL SIDE FEED` in the interface so it cannot be mistaken for a real social account or the owner's personal voice.

A side post is allowed to be incomplete. Its job is to sound like someone posting the one thing they found worth saying, not like a publication bot.

### Allowed post modes

- `detail` — one concrete fact or number;
- `reaction` — a casual take on one result;
- `connection` — joins two reports or a report to a familiar system;
- `question` — a genuine question opened by the report;
- `quote` — a short line from an Unasked article or a properly attributed source;
- `summary` — occasionally summarize the report;
- `edge` — state the card's strongest implication in a more conversational way.

### Voice

- conversational and compact;
- ordinary words first;
- fragments are allowed when natural;
- no obligatory headline, CTA, hashtags, `new report` announcement, or conclusion;
- no fake personal history (`I spent all night...`, `when I was a kid...`);
- no pretending to be the owner;
- first-person stance may refer only to the fictional feed's present reaction (`still thinking about this`, `I like this framing`) and should be used sparingly;
- underclaim contested science even in casual copy.

### Mix

For each newly published report, normally add **2–3** side posts:

- at least one `detail`, `reaction`, or `edge`;
- no more than one `summary`;
- prefer different pieces of the report rather than paraphrasing the same result;
- add a `connection` post when a real cross-report pattern becomes visible;
- not every report needs all modes.

Keep posts under 280 characters by default. This is a creative constraint, not an attempt to reproduce X exactly.

## UI decision

Desktop right rail:

1. `SIDE FEED` first;
2. compact @unasked_notes identity + fictional label;
3. short post stream with tiny folio references;
4. method/evidence information moved below into a compact disclosure.

At widths where the right rail disappears, show the same side feed as a horizontally scrollable strip above the main dispatch feed so it remains useful on mobile.

The social surface should look native to the field-journal design: paper, rules, serif/mono type, no blue X clone, engagement counters, fake likes, fake follower counts, or copied platform chrome.
