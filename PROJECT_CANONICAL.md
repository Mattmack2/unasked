# Unasked — Project Canonical v3

## Product

**Unasked is a private personal horizon scanner and research field journal.**

Its job is to repeatedly surface **questions, fields, mechanisms, historical revisions, capability shifts, and plausible near-future consequences that the reader would not reliably think to search for on their own**.

The website is the reading surface. The real product is the discovery topology underneath it.

A good item should feel less like an executive memo and more like encountering an unusually good post, opening it, and discovering that there is a serious research artifact underneath.

## Durable decisions

### 1. Search for better questions, not merely interesting answers
The unit of discovery is a **Question–Consequence Pair**:

- **Question:** what is genuinely worth understanding?
- **Consequence:** if the answer is true, what changes in how the reader understands, decides, notices, or acts?

A technically impressive topic with no plausible consequence is usually a weak feed item.

### 2. Import intellectual foundations before inventing
Before claiming novelty, learn the vocabulary of the fields that already own the problem, reconstruct genealogy, and distinguish old ideas from changed enabling conditions.

A missing search term can hide an entire mature literature.

### 3. Two real epistemic passes
A finished Turn 1 report is frozen. A later scheduled invocation performs Turn 2: re-anchor on the question, check load-bearing claims, search for the strongest counterargument and negative result, record corrections, and decide whether the item survives.

The same invocation may begin the next Turn 1 only **after** the prior verdict is frozen. It may never validate material it generated in the same invocation.

### 4. Flexible discovery; rigid promotion
Discovery may branch, make analogies, follow weak signals, inspect failed dreams, and propose speculative connections.

Publication is stricter. Evidence classes, uncertainty, source ownership, genealogy, and validation status must survive inspection.

A retired candidate is a successful result.

### 5. Structured serendipity, not a personalized echo chamber
Known interests are seeds, not boundaries. The discovery system must maintain several genuinely different acquisition lanes, including a permanent MEMORY-BLIND lane and explicit domain-diversity pressure.

### 6. Do not reduce interestingness to one score
Surprise, usefulness, explanatory power, evidence strength, personal relevance, novelty, and future consequence are different dimensions. Preserve them as a repertoire rather than optimizing one scalar.

### 7. Reader-facing progressive disclosure is mandatory
Every published item has three depths:

1. **20–45 seconds:** a concrete hook plus `PLAIN`, `WHY`, and `EDGE`.
2. **5–10 minutes:** the actual article, including mechanism, history, examples, uncertainty, and consequence.
3. **Optional audit:** sources, Turn 1 research, Turn 2 validation, search/genealogy notes.

`PLAIN` must assume no specialist vocabulary. `WHY` states the mental-model change. `EDGE` makes one non-obvious move beyond the finding: an implication, tension, connection, counterfactual, specific use, or unlocked question.

Complex language is allowed where it earns precision. Complexity must never be the admission price for understanding why the item matters.

### 8. Tangibility is part of topic quality, but “edge” is broader than application
Every article should answer, where applicable:

- What is this in plain language?
- Why is this specifically interesting rather than merely notable?
- Where is it already tangible?
- What could someone do, notice, build, test, reinterpret, or anticipate differently because of it?
- What surprising implication, tension, connection, counterfactual, or better question follows from it?
- What becomes plausible next if the enabling trend continues?

The collapsed card should choose **one** strong edge rather than listing applications.

### 9. “New discovery” is an epistemic label, not marketing copy
Allowed discovery-status labels:

- `KNOWN FIELD`
- `NEW SYNTHESIS`
- `DISCOVERY CANDIDATE`
- `NO CLOSE MATCH FOUND`
- `NEW DISCOVERY`

`NEW DISCOVERY` is reserved for an original finding that has survived appropriate external/independent validation. Scheduled research should almost never assign it to itself.

### 10. Foundations compound; frontier signals refresh
Durable field vocabulary, historical lessons, and known failure modes should accumulate. Volatile capabilities, weak signals, current results, and forecasts should be timestamped and periodically refreshed.

### 11. Git is enough database for v3
Markdown and small JSON files remain canonical. Git preserves full research, validation, publication, rejection history, topic diversity, candidate lineage, short-form cards, and the fictional side feed.

### 12. External social-platform integration remains deferred; an internal fictional side feed is part of the reader
The standalone reader is stable, inspectable, and under the user's control. X/Twitter or another external publishing surface may be added later only if the content loop proves valuable enough to justify the maintenance burden.

The website may contain a clearly labeled **fictional side feed** (`Unasked / @unasked_notes`) that behaves like someone casually posting things learned from the reports. It is editorial content, not a real social profile, not the owner's voice, and not an engagement-metric simulation.

### 13. The reader remains final taste authority
Automation may publish low-stakes curiosity pieces that pass the research protocol, but behavioral feedback must remain inspectable and reversible. It may diversify selection; it must not silently narrow the horizon.

### 14. Public prose is research-first, not humanizer-first
Unasked articles are normally LLM-written. Do not disguise that by injecting fake quirks or optimizing detectors. Freeze the validated semantic payload first, draft from that specific material, then perform a bounded local prose audit under `VOICE_AND_AUTHORSHIP.md`. Whole-document “make it human” rewrites are disfavored.

The primary reader's spontaneous conversational style may inform readability preferences, but obvious pasted prompts/work orders and uncertain-source text must not be treated as author voice.

### 15. Short-form surfaces are written separately from the article
A correct article does not automatically produce a good card or social post.

Feed cards and side-feed posts must be generated from the validated semantic bank with their own constraints in `CONTENT_GRAMMAR.md` and `research/BLURB_AND_SIDE_FEED_RESEARCH_V1.md`.

The card optimizes for immediate understanding and a real reason to continue. The side feed optimizes for one concrete thought worth saying. Neither should read like a paper abstract.

## Content territory

Unasked is intentionally broad. Primary domains include:

- computation & technology
- life & medicine
- physical world & space
- human past
- sport & competition
- society & institutions
- culture & craft
- earth & environment
- futures

The system should prefer **structural relevance** over topical familiarity.

## Strong recurring story grammars

A valid item may be:

- a **CAPABILITY SHIFT** — something materially became possible, cheap, measurable, recoverable, or controllable;
- **RECEIVED WISDOM UNDER REVIEW** — a familiar historical/scientific story becomes less certain under better evidence;
- a **HIDDEN MECHANISM** — an everyday outcome has a non-obvious causal structure;
- a **CROSS-DOMAIN BRIDGE** — one field already formalized a problem another field is rediscovering;
- a **FAILED DREAM REVIVAL** — an old compelling idea deserves reinspection because its old blocker moved;
- a **NEAR FUTURE** — a bounded forecast assembled from present capabilities and remaining bottlenecks;
- a **DISCOVERY CANDIDATE** — the research itself reveals a plausible connection/question that does not yet have enough evidence to call established.

News is a trigger, not a required format.

## Success condition

After 30 validated feed items, a meaningful fraction should produce reactions like:

- “I didn't know this field or term existed.”
- “I knew the pieces but not that they connected.”
- “I would never have searched for this.”
- “That changes how I interpret something familiar.”
- “That edge is the part I want to think about.”
- “I want to follow this frontier now.”

If the feed is accurate but mostly produces “interesting, I guess,” the discovery policy failed.

## Explicit non-goals

- generic news digest
- engagement-maximizing recommender
- public social network
- automatic external social-media posting
- fake engagement counters or fake social proof
- one universal taste/interestingness model
- unsupported novelty claims
- speculative futures presented as forecasts with false precision
- a large multi-agent research platform
- reproducing Orrery's runtime architecture
- infrastructure whose value is not visible in the reading experience
