# Unasked V2 — Discovery Topology and Field-Journal Interface Research

**Date:** 2026-08-21  
**Status:** Applied research / project amendment  
**Decision:** Broaden Unasked from a personalized serendipity feed into a lightweight personal horizon scanner and research field journal.

## Executive finding

The first version had the right two-pass research discipline but still framed the product too narrowly as “a feed of surprising things.” The stronger product is **a system for finding better questions before the reader knows the relevant vocabulary**.

Three adjacent traditions converge on that design:

1. **Frontier Research V3 / Orrery's later research topology:** import foundations, acquire vocabulary, preserve multiple candidate branches, treat expectation violations as research events, and separate permissive discovery from rigid promotion.
2. **Problem finding / horizon scanning:** valuable discovery often depends on finding the problem or weak signal worth investigating rather than solving a pre-specified question more efficiently.
3. **Editorial/tactile web design:** a quiet print-derived reading surface can make dense material feel intentional and navigable without flattening it into generic cards or an endless dashboard.

The implementation implication is deliberately modest: keep one scheduled researcher, files, Git, and two separated passes. Borrow Orrery's **topology**, not its multi-agent machinery.

---

## 1. What Orrery contributes without being replicated

The useful parts of the earlier Orrery research-discovery architecture are conceptual rather than infrastructural.

### Import before inventing

Orrery's “Stop Rediscovering the Wheel” research concluded that prior art had been entering too late. The important search is not merely “has anybody made something like my idea?” but “which fields have spent decades solving the underlying problem?” It made vocabulary grafting an explicit pre-ideation step and treated frontier position, not minutes spent, as the research gate.

Unasked should do the same for every serious item.

### Search over questions

Orrery moved from finding the best simulation seed toward searching **Question–World Pairs**: worlds in which an understandable question has a genuinely non-trivial answer. For Unasked the analogous unit is a **Question–Consequence Pair**:

> What is worth understanding, and what changes if we understand it?

That prevents technically impressive but consequence-free research from filling the feed.

### Keep a repertoire, not one optimum

Orrery used quality-diversity/stepping-stone ideas because the best descendant can emerge from a mediocre but unusual intermediate candidate. Unasked does not need a quality-diversity algorithm, but it does need the policy implication: generate several structurally different candidates, retain dormant promising ones, and avoid reducing selection to one “interestingness” number.

### Expectation violations deserve branches

A strong surprise is not simply a high-scoring item. When an expected relation fails, ask whether the failure exposes a missing dimension, measurement problem, or mechanism. Unasked therefore adds an `EXPECTATION VIOLATION` discovery lane.

### Flexible discovery; rigid promotion

Orrery's most transferable constitutional rule is “Chaos inside. Science at the boundary.” Unasked can roam during Turn 1, but publication must survive source ownership, evidence-class separation, genealogy, uncertainty, and a later adversarial pass.

### Story / Research / Inspector becomes progressive disclosure

Orrery's Observatory eventually separated “what happened?”, “what supports it?”, and “exactly how was it produced?” Unasked adapts that to:

1. **Field note:** plain version / why interesting / tangible edge.
2. **Article:** mechanism, history, evidence, consequences.
3. **Audit:** full Turn 1, Turn 2, sources, search lineage.

This is much closer to what the reader actually needs than either an executive-summary-only feed or a research dashboard.

---

## 2. The mature external vocabulary: problem finding + horizon scanning

The user's “I only know to research what I already know exists” concern has established relatives.

### Problem finding

Runco and Okuda's 1988 work treated **problem discovery** as a distinct part of creative performance. In their study, discovered-problem tasks elicited more responses than presented problems, and the unique variance of discovered-problem performance related to several measures of creative performance. A 1991 follow-up found a real-world problem-finding measure more predictive of creative accomplishments than standard divergent-thinking and problem-solving tasks.

That research is old and limited in population; it is not evidence that Unasked's exact architecture will work. But it establishes a useful conceptual distinction:

> Choosing the question can be a creative act separate from answering it.

### Horizon scanning and weak signals

Modern horizon scanning institutionalizes another part of the problem. The OECD's 2026 review of 129 international technology horizon-scanning exercises describes methods for detecting emerging and converging technologies and notes both AI-enabled analytics and the persistent difficulty of interpreting early signals. The UK's Defra case study is more operational: scanners captured weak signals daily, selected six novel signals every fortnight, and intentionally inspected fringe/subculture areas to diversify the signal pool.

Unasked should not copy a government foresight process. The transferable move is:

- scan outside the obvious center;
- treat weak signals as nominations, not conclusions;
- periodically force genuinely foreign neighborhoods;
- turn a signal into a deeper mechanism/history question before publishing.

This motivates the `WEAK SIGNAL` lane and the permanent `MEMORY-BLIND` lane.

---

## 3. Topic grammar: from subject categories to reasons a topic is worth encountering

A flat list of domains is insufficient. The same scientific paper can be boring or transformative depending on what changed.

Unasked v2 therefore classifies a candidate by **story grammar** as well as subject:

### CAPABILITY SHIFT
Something materially became possible, cheap, measurable, recoverable, or controllable.

Research question: *what old boundary just moved, what evidence proves it moved, and what previously blocked work can now be attempted?*

### RECEIVED WISDOM UNDER REVIEW
A familiar explanation, historical character, etymology, scientific rule of thumb, or public narrative becomes less secure under better source criticism or new evidence.

Research question: *what is the source genealogy, why did one version dominate, and what survives serious revision?*

### HIDDEN MECHANISM
An apparently simple outcome has a causal structure most people do not see.

Research question: *what mechanism produces the result, what competing mechanisms exist, and where does knowing it become useful?*

### CROSS-DOMAIN BRIDGE
One field already formalized a problem another field is rediscovering.

Research question: *is the analogy structural enough to transfer a method or mental model, or merely rhetorically attractive?*

### FAILED DREAM REVIVAL
A historically compelling approach failed because of a specific bottleneck that may have moved.

Research question: *did the actual cause of death disappear, or are we merely excited by a shinier implementation?*

### NEAR FUTURE
A bounded future picture assembled from today's capabilities and remaining blockers.

Research question: *what is already here, what must still change, and what would falsify the timeline or scenario?*

### DISCOVERY CANDIDATE
The research process itself reveals a plausible new connection or hypothesis.

Research question: *what exactly is inferred, what evidence would distinguish it from a clever story, and what independent validation is needed?*

This is where genuinely new discoveries can emerge, but it is also where epistemic restraint matters most.

---

## 4. Tangibility is not an optional “applications” paragraph

The strongest amendment from v1 is that every item must connect abstract understanding to a tangible consequence.

The reader-facing article starts with:

### The simple version
Explain the core idea without assuming field vocabulary.

### Why this is interesting
State the mental-model delta. What is surprising, newly possible, historically revised, or structurally useful here?

### Where it becomes tangible
Give concrete present uses, changed decisions, observable examples, or a near-term experiment. If there is no honest tangible edge, say so rather than manufacturing one.

The body can then become technically dense. This sequence lets the reader know *why the complexity is worth paying for* before encountering it.

---

## 5. Visual research: the “paper feel” is a reading model, not just beige CSS

The supplied reference image belongs to a broader print/editorial/tactile digital design family rather than a unique visual invention.

Recent examples support several recurring moves:

- Lynn Fisher's 2025 portfolio refresh explicitly used a narrow content container inspired by printed paperback books, subtle paper texture, and chapter-like headers.
- W–E Studio/Decimal's 2025 Aaino work deliberately translated the pace, rhythm, spread logic, and tactility of print into a digital editorial system while keeping screen-native motion restrained and purposeful.
- Framer's 2025 design-trend survey noted the continued return of grain, faded palettes, and nostalgic/hand-crafted visual texture as a counterweight to homogeneous minimal interfaces.

The useful lesson is not “make it vintage.” It is:

> **Use the physical logic of a research notebook, monograph, dossier, or field journal to organize attention.**

### Unasked design decision

The v2 viewer becomes a **living field journal**:

- warm ecru paper, sampled approximately from the user's reference;
- near-black ink rather than pure black;
- muted oxide-red annotation/folio accent;
- subtle generated grain with no image dependency;
- serif body/headline typography + monospace labels/metadata;
- thin ruled and dotted separators;
- square/rectangular controls rather than rounded SaaS pills;
- left rail as contents/index;
- center column as dispatches;
- right rail as method/epistemic legend;
- no glassmorphism, neon, dark-mode default, giant rounded cards, or dashboard chrome.

The site should feel archival without pretending to be an old document. It remains responsive, accessible, and obviously interactive.

---

## 6. Diversity policy

The user's recent activity is heavily technical, which makes “personalization from recent behavior” especially dangerous.

Unasked therefore treats subject interest as a **starting prior**, not the target distribution.

Primary domains:

- computation & technology
- life & medicine
- physical world & space
- human past
- sport & competition
- society & institutions
- culture & craft
- earth & environment
- futures

Rolling eight-item target:

- at least five primary domains;
- no more than three computation/technology items;
- at least two items substantially outside recently active neighborhoods;
- at least one MEMORY-BLIND item.

These are diversity guardrails, not quotas that force bad articles.

---

## 7. Discovery labels

The viewer should distinguish “cool topic” from “the research may actually have found something.”

### Evidence status

- `ESTABLISHED`
- `CURRENT RESULT`
- `FRONTIER`
- `CONTESTED`
- `FORECAST`

### Discovery status

- `KNOWN FIELD`
- `NEW SYNTHESIS`
- `DISCOVERY CANDIDATE`
- `NO CLOSE MATCH FOUND`
- `NEW DISCOVERY`

`NEW DISCOVERY` has a deliberately high bar: original result plus appropriate independent/external validation. A scheduled LLM research loop virtually never gets to self-award it.

A genuine new connection found during Turn 1 should be visibly exciting **because it remains a candidate**, not because the interface inflates it into a fact.

---

## 8. First v2 test: deep-time molecular history

To test whether the broadened system actually escapes the current tech neighborhood, the first v2 MEMORY-BLIND Turn 1 was deliberately selected from **human past / molecular archaeology** rather than software.

The candidate is palaeoproteomics from dental enamel: mass spectrometry can recover ancient protein fragments from periods and climates where recoverable DNA is often unavailable. A 2026 Nature paper recovered informative enamel proteins from six roughly 400,000-year-old *Homo erectus* specimens across China. A 2025 Nature paper recovered small enamel proteomes from African mammal fossils as old as roughly 18 million years, although the authors explicitly warn about sparse fragments, identification uncertainty, and sequence diagenesis.

This is a strong CAPABILITY SHIFT candidate because the important story is not “old tooth studied.” It is:

> **Parts of deep time that were morphologically visible but molecularly silent are becoming partially readable.**

The full Turn 1 is frozen separately and is intentionally not published until a later adversarial pass.

---

## 9. Decision

Adopt v2.

The architectural compression is:

```text
BROAD HORIZON
  weak signals / foreign domains / old failures / surprises / bridges
        ↓
CANDIDATE FRONTIER
  several question–consequence pairs; retain stepping stones
        ↓
TURN 1
  foundations → vocabulary → genealogy → current evidence → consequence
        ↓
FROZEN REPORT
        ↓ later invocation
TURN 2
  counterevidence → validation delta → publish or retire
        ↓
FIELD JOURNAL
  simple → why interesting → tangible → depth → audit
```

This gets meaningfully closer to Orrery's research-discovery behavior without pretending a single browser/scheduled agent has Orrery's parallel laboratories, deterministic research runtime, or independent empirical machinery.

---

## External sources consulted

- OECD, *Building capacity in technology horizon scanning: A guide for policymakers* (2026), DOI 10.1787/b4f0d383-en.
- UK Government Office for Science / Defra, *Weak signals and trend analysis: horizon scanning* (2025).
- Runco & Okuda, *Problem discovery, divergent thinking, and the creative process* (1988), DOI 10.1007/BF01538162.
- Okuda, Runco & Berger, *Creativity and the Finding and Solving of Real-World Problems* (1991), DOI 10.1177/073428299100900104.
- Lynn Fisher, *Case Study: lynnandtonic.com 2025 refresh* (2026).
- It's Nice That, *W–E studio and Decimal’s digital design system for Aaino mimics the tactility of print* (2025).
- Framer, *7 emerging web design trends for 2025*.
- Fu et al., *Enamel proteins from six Homo erectus specimens across China*, Nature (2026), DOI 10.1038/s41586-026-10478-8.
- Green et al., *Eighteen million years of diverse enamel proteomes from the East African Rift*, Nature (2025), DOI 10.1038/s41586-025-09040-9.
