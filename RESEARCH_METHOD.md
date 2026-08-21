# Unasked Research Method v2

This is a single-agent, artifact-driven adaptation of Frontier Research V3, Frontier Part Two, and the useful discovery mechanics from the earlier Orrery research system.

The goal is not to imitate Orrery's multi-agent runtime. It is to preserve its **research topology** with the tools actually available here.

## Hourly pipeline

```text
bootstrap:
    TURN 1 for A -> freeze A

next scheduled invocation:
    TURN 2 for A -> publish / retire A
    TURN 1 for B -> freeze B

next:
    TURN 2 for B -> publish / retire B
    TURN 1 for C -> freeze C
```

No item may be researched and validated in the same scheduled invocation.

---

# Turn 1 — Discover + Research

## 1. Reconstruct the local frontier

Read:

- `PROJECT_CANONICAL.md`
- `TOPIC_DISCOVERY.md`
- `CONTENT_GRAMMAR.md`
- `VOICE_AND_AUTHORSHIP.md`
- `state/topic-ledger.json`
- `state/candidate-archive.json`
- recent feed metadata

Use recent material for deduplication and domain balance, not as a requirement to stay nearby.

## 2. Candidate frontier

Generate approximately six candidates using the six discovery lanes. At least one must be MEMORY-BLIND.

Neutralize them as `C01`…`C06` before selection. Preserve promising unselected candidates as `DORMANT` rather than discarding all traces.

## 3. Vocabulary graft

Before committing, search for the fields that own the underlying problems. Capture terminology that changes search quality.

## 4. Foundation / genealogy

For the selected question, identify:

- problem-owning fields;
- canonical vocabulary;
- established frameworks;
- important ancestors;
- known failure modes;
- major disagreements;
- unresolved questions.

Do not rediscover mature work and call it new.

## 5. Failed dreams / capability shift when relevant

Ask:

- what did people previously want?
- what was built?
- why did it stall?
- which exact constraint moved?
- could essentially the same capability have worked in 2019? 2023?
- if the alleged enabler is removed, does the experience/capability collapse or merely become more expensive?

## 6. Research

Prefer proposition-owning sources. Separate:

- FOUNDATION / MATURE
- CURRENT / OPERATIONAL
- FRONTIER / PRELIMINARY
- practitioner report
- model inference

Preserve negative results and contradictions.

A Turn 1 report should normally contain:

1. destination / question;
2. candidate origin and why selected;
3. **simple explanation**;
4. **why this is interesting**;
5. **tangible present/future consequence**;
6. foundation map;
7. vocabulary graft;
8. genealogy / failed dreams where useful;
9. current frontier / why now;
10. real examples;
11. strongest competing explanation or caveat;
12. what is established vs inferred;
13. cheap falsification / reversal conditions;
14. 5–10 conclusions that changed the answer;
15. source list.

Save as `research/full/YYYY-MM-DD-slug-turn1.md` and set automation state to `TURN1_READY`.

Do not publish it yet.

---

# Turn 2 — Validate + Package

Start from the original question, not the report's rhetoric.

## 1. Claim ledger

For load-bearing claims ask:

- what evidence would establish this?
- does the cited source establish exactly that?
- is the source current enough?
- what is the best counterevidence?
- if false, does the piece survive?

## 2. Fresh adversarial search

Target:

- strongest counterargument;
- stale current facts;
- failed replications / negative results;
- alternate genealogies;
- evidence that the “changed bottleneck” did not really change;
- simpler explanations;
- novelty overclaim.

Do not broadly repeat Turn 1 unless a critical defect requires it.

## 3. Validation delta

```yaml
verdict: SURVIVES | SURVIVES_WITH_CORRECTIONS | RESEARCH_BRANCH_REQUIRED | RETIRE
material_corrections: []
confidence_change: none | lower | higher
important_omissions_added: []
novelty_status:
```

## 4. Freeze the semantic bank

Before writing reader-facing prose, freeze a compact semantic bank containing the validated answer, mental-model delta, why it is interesting, tangible examples, unusual/source-specific details, new vocabulary, strongest caveat, established-vs-inferred split, Turn 2 corrections, and explicit claims not to make.

This is Unasked's substitute for the human observation/source bank in the authorship-first writing research.

## 5. Package for progressive disclosure

If it survives, write the article using the appropriate grammar from `CONTENT_GRAMMAR.md` and the prose policy in `VOICE_AND_AUTHORSHIP.md`. Draft from the frozen semantic bank, not from a generic topic prompt. After drafting, perform one bounded local synthetic-pattern review; do not globally rewrite the document to “sound human.”

The feed record must expose before expansion:

- primary domain;
- story grammar;
- evidence status;
- discovery status;
- hook;
- simple version;
- why interesting;
- one tangible edge;
- why it appeared.

The expanded article defaults to 900–1,800 words, but length follows the idea.

## 6. Discovery candidates

If the research itself produces a potentially novel synthesis, do **not** smuggle it into a normal article as fact. Record it as a `DISCOVERY_CANDIDATE` with prior-art footprint and a cheap discriminating test.

Only bounded novelty language is allowed.

---

# Research substrate vs reading surface

The full report is allowed to be technical, expansive and ugly.

The reader-facing item should feel like:

> I found something strange and useful; here is the easy entrance, here is why you should care, here is the real mechanism, and here is how far the evidence actually goes.

Not:

> Executive Summary: Key Findings and Strategic Implications.
