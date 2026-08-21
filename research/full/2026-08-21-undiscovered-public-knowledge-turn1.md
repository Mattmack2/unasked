# Turn 1 Research — The Internet Can Know Something Nobody Has Written Down

**Status:** FROZEN SAMPLE TURN 1  
**Lane:** VOCABULARY TRAPDOOR  
**Seed:** research methods / discovery  
**Foreign vocabulary:** undiscovered public knowledge; literature-based discovery; complementary but disjoint literatures

## Question

Can useful knowledge be “public” even when nobody has explicitly stated the resulting connection—and is there a mature field for systematically finding those hidden bridges?

## Why selected

The phrase “unknown unknowns” is easy to leave mystical. This topic offers a much more concrete mechanism: separate communities can publish facts that become a new inference only when connected across disciplinary boundaries.

## Foundation

Information scientist Don R. Swanson developed the idea of **undiscovered public knowledge** in the 1980s. The core observation was that scientific specialization makes the literature manageable, but can also partition knowledge into bodies that are logically related while remaining bibliographically disconnected.

His famous example linked two medical literatures: one concerning dietary fish oil and another concerning Raynaud's syndrome. The intermediate physiological relationships were present in the literature, but the endpoint connection was not being directly articulated between the two research communities. Swanson proposed that fish oil might ameliorate Raynaud's syndrome; later work treated the example as a foundational benchmark for literature-based discovery, and a subsequent clinical study supported the hypothesis.

The important idea is not the medical claim itself. It is the structure:

```text
Literature A: A affects B
Literature C: B affects C

A and C scarcely interact

=> A may affect C
```

That became the classic **ABC model** of literature-based discovery (LBD).

## Vocabulary graft

- **undiscovered public knowledge (UPK):** knowledge latent in already-public information but not effectively known as a combined inference;
- **literature-based discovery (LBD):** systems/methods for identifying novel relationships across bodies of literature;
- **complementary but disjoint literatures:** corpora that contain pieces of a useful connection but do not substantially cite or overlap each other;
- **open discovery:** starting with one concept and searching for novel linked endpoints;
- **closed discovery:** testing/explaining a suspected relation between two endpoints by finding intermediate concepts.

## Genealogy

The problem predates LLMs by decades. Swanson's work was manual/computer-assisted information science. Later LBD systems used co-occurrence, controlled biomedical vocabularies, semantic predications, graph methods, and text mining.

This matters because “have an AI connect research fields” is not a new idea. What is new is the accessibility and breadth of the tooling available to a single person.

## Failed dream / changed bottleneck

### Historical ambition
Use the world's existing literature as a substrate for new hypothesis formation.

### Old bottlenecks
- specialist terminology;
- corpus access;
- entity normalization;
- brittle semantic extraction;
- huge candidate spaces;
- high human verification cost;
- tools that were mostly useful to domain experts.

### Changed bottlenecks
Broad search, cheap language-model synthesis, long contexts, embeddings/semantic retrieval, and tool-using agents make cross-domain candidate generation dramatically easier.

### Bottlenecks that did not disappear
- a plausible linguistic connection can be causally false;
- retrieval coverage is uneven;
- source quality varies;
- LLMs can create the very bridge they are supposedly discovering;
- candidate count can explode faster than human validation capacity.

## Current frontier implication

The most interesting application for a personal discovery feed is not “automatically discover medical treatments.” That is high-stakes and requires domain validation.

The safer and more general insight is that **question generation can deliberately search for structurally disconnected vocabularies**. A feed can ask: what mature field has a mechanism that solves a recurring problem in another field the reader cares about, even though the communities rarely use the same words?

Examples:

- software observability ↔ high-reliability organization anomaly reporting;
- creator workflows ↔ information foraging;
- game/simulation exploration ↔ optimal experimental design;
- ambient interfaces ↔ calm technology;
- visual procedural systems ↔ shape grammars / generative design.

These are hypotheses for search, not claims of novel discoveries.

## Strongest counterargument

Modern cross-domain “connection finding” can become a generator of seductive analogies. The more distant the fields, the easier it is to mistake shared vocabulary or metaphor for a transferable mechanism.

LBD's history is itself a warning: evaluation has been difficult, and reusing a few famous discovery cases as benchmarks can overstate general performance. The output therefore needs source-level verification and cheap falsification rather than treating cross-domain surprise as evidence.

## What is established

- Swanson introduced undiscovered public knowledge and the canonical Raynaud/fish-oil example in the 1980s.
- LBD became an established information-science research area with methods for connecting noninteracting literatures.
- Cross-literature discovery is a real, named problem rather than a new LLM-era invention.

## What is inferred for Unasked

- LBD is a useful conceptual ancestor for a personal unknown-unknown feed.
- Modern LLM/web tooling probably lowers the cost of candidate bridge generation enough to make a personal version practical.
- The valuable output for this project is likely *questions and mental-model bridges*, not automated scientific conclusions.

## Reversal / falsification

If cross-domain items repeatedly produce clever metaphors but few durable terms, useful follow-up searches, or mechanism-level insights, the LBD-inspired lane should be reduced or retired.

## Conclusions that changed the answer

1. “Unknown unknown” discovery has a mature ancestor: literature-based discovery.
2. Public information can be partitioned so that useful connections remain unstated.
3. The right product target is bridge *nomination*, not automatic truth discovery.
4. Vocabulary separation is itself a searchable signal.
5. LLMs lower candidate-generation cost but do not lower the need for verification.
6. A memory-blind cross-field lane is defensible as more than random novelty.

## Sources

1. Swanson DR. *Fish oil, Raynaud's syndrome, and undiscovered public knowledge.* Perspectives in Biology and Medicine. 1986;30(1):7–18. DOI: 10.1353/pbm.1986.0087. PubMed PMID 3797213.
2. Smalheiser NR. *Rediscovering Don Swanson: the Past, Present and Future of Literature-Based Discovery.* Journal of Data and Information Science. 2017. PMCID: PMC5771422.
3. Swanson DR. *Medical literature as a potential source of new knowledge.* Bulletin of the Medical Library Association. 1990;78(1):29–37. PMID 2403828.
4. Literature-based discovery evaluation critique: *Literature-based discovery: addressing the issue of the subpar evaluation methodology.* Bioinformatics. 2023;39(2):btad090.
