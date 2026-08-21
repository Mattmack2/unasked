# Topic Discovery v2 — Orrery-lite Question Frontier

## Goal

Select topics that maximize **useful surprise + mental-model change + tangible consequence**, not similarity to the reader's recent activity.

The unit of search is not “a topic that sounds interesting.” It is closer to a **Question–Consequence Pair**:

```text
Q = a question whose answer is genuinely non-obvious
C = a consequence that makes learning the answer worth the reader's time
```

A good feed item has both.

## What we are borrowing from the earlier Orrery discovery system

Orrery's strongest discovery mechanics were not “many agents.” They were:

- import foundations before ideation;
- acquire the vocabulary of problem-owning fields;
- search questions, not only artifacts;
- preserve diverse candidates / stepping stones rather than only one winner;
- treat expectation violations as reasons to reformulate the search;
- maintain genealogy and bounded novelty claims;
- keep a research diary / negative memory so dead ends are not rediscovered;
- separate free discovery from rigid evidentiary promotion;
- give the human a simple story view with deeper research/provenance beneath it.

Unasked can preserve those ideas without reproducing Orrery's multi-agent runtime.

## Primary domains

- COMPUTATION & TECHNOLOGY
- LIFE & MEDICINE
- PHYSICAL WORLD & SPACE
- HUMAN PAST
- SPORT & COMPETITION
- SOCIETY & INSTITUTIONS
- CULTURE & CRAFT
- EARTH & ENVIRONMENT
- FUTURES

Known interests are bridge seeds, not boundaries.

## Six discovery lanes

### 1. BRIDGE

Take a known or newly found problem and cross it with a field that uses different vocabulary.

Look for structural analogy, then actively search where the analogy breaks.

### 2. FAILED DREAM

Find a compelling older idea whose limiting constraint may have moved.

Ask the Orrery question:

> Which graveyard contains an idea whose cause of death no longer exists?

Search old failures caused by measurement, compute, authoring cost, materials, data, latency, interface burden, controllability, economics, regulation, or missing scientific knowledge.

### 3. VOCABULARY TRAPDOOR

Start from an underspecified curiosity and identify the technical or scholarly term that opens the actual literature.

A missing term can hide an entire mature field.

### 4. WEAK SIGNAL

Use horizon-scanning logic. Look for early but credible signals outside the dominant feed, then ask whether several fragments point to a larger change.

Signal sources can include:

- unusual new methods;
- capabilities crossing a practical threshold;
- results appearing in multiple previously separate fields;
- new instrumentation;
- new datasets becoming accessible;
- policy/legal changes that unlock or close a design space;
- fringe/subculture practice later appearing in institutions.

A weak signal is not a forecast by itself.

### 5. EXPECTATION VIOLATION

Start from a relationship people confidently expect and look for credible evidence that violates it.

Record:

```yaml
expected_relation:
observed_relation:
confidence:
possible_artifact_explanations:
possible_mechanism_explanations:
followup_question:
```

The anomaly matters only if it reveals a missing dimension or mechanism.

### 6. MEMORY-BLIND

Ignore the interest map. Scan broad science, history, sport, culture, institutions and the physical world for something intrinsically striking, then ask afterward whether it earns reading time.

This is a control against personalization becoming an echo chamber.

## Turn 1 candidate frontier

Generate a small repertoire, not twenty shallow ideas.

Default: 6 candidates, ideally one from each lane. Give them neutral IDs (`C01`…`C06`) before the selection pass.

For each candidate record:

```yaml
id:
primary_domain:
lane:
question:
consequence:
new_vocabulary: []
known_ancestors: []
why_now:
tangible_examples: []
possible_story_grammar:
strongest_reason_to_reject:
```

Then compare candidates as a **Pareto set**, not a scalar score, across:

- useful surprise;
- evidence availability;
- domain novelty relative to recent feed;
- mental-model delta;
- tangible consequence;
- freshness / changed capability when relevant;
- risk of being merely trivia;
- risk of being merely current news.

A modest candidate may remain in `state/candidate-archive.json` as a stepping stone even when it is not selected.

## Domain balance

Across a rolling eight published items:

- target 5+ primary domains;
- maximum 3 COMPUTATION & TECHNOLOGY items;
- at least 2 items should begin outside recent active research neighborhoods;
- at least 1 must be MEMORY-BLIND.

Do not publish weak material to satisfy a quota. If the frontier is thin, leave the slot empty.

## Selection test

A candidate is strong when several of these are true:

- It introduces vocabulary the reader plausibly would not have searched.
- It connects domains that usually do not talk.
- A historical bottleneck moved.
- It contains a serious expectation violation.
- It changes how a familiar fact should be interpreted.
- It exposes a new measurement capability.
- It makes a previously speculative application concrete.
- It changes a decision heuristic or way of watching the world.
- Good evidence exists.
- It is meaningfully unlike the last eight items.

## News rule

Current news is a **trigger**, not the product.

A current paper, launch, court ruling, sports result or excavation earns a report when it opens a deeper durable structure:

```text
trigger
  -> hidden field / mechanism / history
  -> why this matters now
  -> tangible consequence
```

## Novelty discipline

When Unasked itself appears to make a novel connection, create a novelty record:

```yaml
candidate:
search_scope:
queries:
closest_neighbors: []
apparent_difference:
coverage_limitations:
status: KNOWN | NEW_SYNTHESIS | DISCOVERY_CANDIDATE | NO_CLOSE_MATCH_FOUND
cheap_discriminating_test:
```

Do not use `NEW DISCOVERY` unless independent external validation actually earns it.

## Feedback

Keep dimensions separate:

- worth_it
- surprising
- new_vocabulary
- tangible
- want_more

Later preference learning may change sampling pressure. It may not eliminate domain diversity or MEMORY-BLIND.
