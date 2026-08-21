# Unasked Content Grammar v3

## Principle

Unasked is not a feed of “interesting facts.” A good item contains a **mental-model delta** and at least one **sharp consequence, tension, connection, or unlocked question**.

The research can be difficult. The reading surface must make it possible to enter at three depths:

```text
20–45 seconds  -> understand the basic finding and why it is interesting
5–10 minutes   -> understand how it works, evidence, caveats and research movement
optional        -> inspect deeper sources / research artifacts
```

The collapsed card must be written for a smart reader who has **none of the specialist vocabulary the researcher just acquired**.

## Writing layer

`VOICE_AND_AUTHORSHIP.md` governs article prose. `research/BLURB_AND_SIDE_FEED_RESEARCH_V1.md` governs the current short-form rationale.

The article writer begins from the frozen Turn 2 semantic bank rather than a generic topic prompt. The feed-card writer also begins from that bank, but must translate it again for a zero-context reader.

Do not assume that because a term was explained in the article it is safe in the card.

## Feed-card contract

The four reader-facing fields have different jobs. Repetition across them is a failure.

### HOOK — stop on one concrete thing

Usually one sentence.

Prefer:
- a specific object or action;
- a named result;
- a useful number;
- a contradiction a reader can understand immediately.

Avoid:
- unexplained domain vocabulary;
- field-level abstractions;
- vague curiosity-gap language;
- `researchers discovered something surprising...`.

Target: about 12–30 words.

### PLAIN — explain what is happening

One or two short sentences using ordinary words.

- Explain the actual mechanism or finding.
- Introduce a technical term only when it earns precision, then define it immediately.
- The reader should not need another report, a glossary, or the article to understand the basic claim.
- Do not use an analogy that removes the mechanism.

Target: about 25–55 words.

### WHY — name the mental-model change

One idea only.

Answer one:
- Which assumption is now weaker?
- Which boundary moved?
- What hidden mechanism changes the interpretation?
- What became measurable or possible?
- Which familiar story now needs a different frame?

Do not write generic significance language such as `this could transform the field`.

Target: about 20–50 words.

### EDGE — make one interesting move beyond the finding

`EDGE` no longer means only `where it becomes tangible`.

It is the strongest non-obvious take the validated research earns. Pick **one** form:

- **Implication** — what follows if the finding is true?
- **Tension** — which two true things now sit awkwardly together?
- **Connection** — what other report, field, system, or familiar situation becomes clearer?
- **Counterfactual** — what changes if one condition is removed or reversed?
- **Use** — one specific present or plausible use, not a generic application list.
- **Unlocked question** — what better question can now be asked?

Rules:
- EDGE must add a new proposition not already in HOOK / PLAIN / WHY.
- One edge, never a list.
- Prefer a concrete example, named comparison, or causal consequence.
- It should still be interesting if copied out of the card by itself.
- If the best edge is merely `this may have applications`, the candidate is probably not publication-ready.

Target: about 25–60 words.

## Short-form quality gate

Read only `title + hook + plain + why + edge`.

The card fails if:
- a non-specialist cannot explain the basic finding afterward;
- specialist terms appear before the ordinary-language idea;
- two fields make the same point;
- removing EDGE loses nothing;
- EDGE is a list of uses;
- a vague question is used where a direct statement would be clearer;
- the result reads like a research abstract rather than an entrance to the research.

Research guidance behind this gate is preserved in `research/BLURB_AND_SIDE_FEED_RESEARCH_V1.md`.

## Side-feed grammar

`docs/side-feed.json` is a separate short-form surface, not another summary column.

Visible identity:

```text
Unasked
@unasked_notes
FICTIONAL SIDE FEED
```

This makes clear that the stream is generated editorial material, not the owner's account and not a real external social profile.

### Allowed modes

- `detail` — one concrete fact, number, quote fragment, or mechanism;
- `reaction` — a casual take on one point;
- `connection` — connects two reports or a report to a familiar system;
- `question` — a genuine question the result opens;
- `quote` — a short line from Unasked or an attributed source;
- `summary` — occasional whole-report compression;
- `edge` — a conversational version of a strong implication.

### Side-feed rules

- Default to one thought per post.
- Keep posts under 280 characters unless a future design explicitly changes the constraint.
- Ordinary words first.
- No obligatory CTA, hashtag, headline, `new report` announcement, fake follower count, fake likes, or fake engagement statistics.
- Do not make every post a summary.
- Do not manufacture personal history or pretend to be the owner.
- Casual stance is allowed; fake biography is not.
- Underclaim contested findings even when the prose is conversational.

For each published report, normally create 2–3 side posts. At least one should be `detail`, `reaction`, or `edge`; no more than one should be `summary`. Add a `connection` when a real cross-report pattern emerges.

## Article structure

There is no mandatory article template.

Use headings only when they reduce cognitive load. `The simple version`, `Why this is interesting`, and `Where it becomes tangible` are optional tools, not required furniture. A short article may need none of them.

After drafting, run one local synthetic-pattern review and edit only the smallest spans that are generic, inflated, repetitive, or templated. No universal humanizer pass.

## Story grammars

Choose one primary grammar. This determines the likely research shape, not mandatory section headings.

### CAPABILITY SHIFT

Use when society can now measure, build, infer or control something materially better than before.

Useful questions:
- what was the old limit?
- what changed?
- how does it work?
- where is it already real?
- what does it newly make reachable?
- what bottleneck remains?

### RECEIVED WISDOM UNDER REVIEW

Use for history, science narratives, sports myths, institutional stories, etymologies and other culturally sticky claims.

Useful questions:
- what is the familiar story?
- what is the actual source chain?
- where does serious scholarship agree/disagree?
- why did the story harden?
- what can responsibly be said now?

### HIDDEN MECHANISM

Use when an unintuitive mechanism makes ordinary observations look different.

Useful questions:
- what observation needs explaining?
- what mechanism changes the interpretation?
- what are its boundary conditions?
- what is the strongest alternative explanation?

### CROSS-DOMAIN BRIDGE

Use when one field has vocabulary or machinery that clarifies another.

Useful questions:
- what is field A's problem?
- what mature concept from field B maps onto it?
- where does the analogy match exactly?
- where does it break?
- what useful test or question transfers?

### FAILED DREAM REVIVAL

Useful questions:
- what did people originally want?
- what was actually built?
- why did it stall?
- which constraint moved?
- which constraint did not?
- what can a 2026 version genuinely do now?

### NEAR FUTURE

This is a forecast, not a fact report.

Useful questions:
- which enabling pieces already exist?
- what still has to happen?
- what are 1–3 plausible futures rather than one prophecy?
- what are the bottlenecks, leading indicators and reversal conditions?

### DISCOVERY CANDIDATE

Use when Unasked itself finds a potentially non-obvious synthesis or question.

Useful questions:
- what is the candidate claim/question?
- what is its closest ancestor/prior art?
- what supports it?
- what pushes against it?
- what is the cheapest discriminating test?
- what novelty label is actually earned?

Never silently turn a synthesis into a scientific discovery.

## Epistemic / discovery labels

### Evidence status

- `ESTABLISHED` — mature or repeatedly supported foundation.
- `CURRENT RESULT` — current peer-reviewed or operational result.
- `FRONTIER` — recent/preliminary but credible direction.
- `CONTESTED` — serious disagreement is central to the piece.
- `FORECAST` — near-future inference.

### Discovery status

- `KNOWN FIELD` — established knowledge, perhaps new to the reader.
- `NEW SYNTHESIS` — Unasked is joining established pieces in a useful way.
- `DISCOVERY CANDIDATE` — a new hypothesis/question worth testing.
- `NO CLOSE MATCH FOUND` — bounded search found no close prior; not a universal novelty claim.
- `NEW DISCOVERY` — reserved for externally validated original discovery. Scheduled Unasked runs should almost never use this label by themselves.

## Domains

- `COMPUTATION & TECHNOLOGY`
- `LIFE & MEDICINE`
- `PHYSICAL WORLD & SPACE`
- `HUMAN PAST`
- `SPORT & COMPETITION`
- `SOCIETY & INSTITUTIONS`
- `CULTURE & CRAFT`
- `EARTH & ENVIRONMENT`
- `FUTURES`

A topic may have multiple tags but one primary domain.

## Diversity guardrail

Across any rolling eight published items:

- aim for at least five primary domains;
- no more than three may be `COMPUTATION & TECHNOLOGY`;
- at least two should originate outside the reader's recent active research neighborhoods;
- at least one should be explicitly memory-blind;
- do not satisfy diversity by publishing weak material.

This is a pressure, not a quota that overrides quality.
