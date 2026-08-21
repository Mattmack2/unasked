# Research Trajectory and the Unknown-Unknown Problem

## What changed in the recent research pattern

The recent work did not merely accumulate answers. It repeatedly **changed the level at which the useful question was being asked**.

Early questions tended to begin close to an implementation or visible need: which architecture, which tool, how to make a system faster, how to make a visual result better, how to set up a workstation, how to use stronger and cheaper models efficiently.

The useful research repeatedly exposed a deeper problem-owning layer underneath those questions:

- “more compute / more runs” became **how should scarce experimental attention be allocated?**
- “better ideas” became **how should a system search a possibility space without collapsing everything into one score?**
- “summarize the giant report” became **separate epistemic search from epistemic transmission, then validate before compressing**
- “pick a visual style” became **what is the grammar that can generate many coherent visual dialects without freezing creativity?**
- “use multiple agents” became **where should authority, delegation, review, and expensive reasoning actually sit?**
- “install Linux tools” became **what operating environment minimizes recurring cognitive and operational friction?**

The common pattern is important: the best gains came after acquiring vocabulary from a field that already had a better version of the question.

## The actual bottleneck

A person can deliberately deepen only the questions they can currently formulate.

That creates a local-search problem:

```text
what I know
  -> questions I can name
      -> fields I know to search
          -> better answers inside those fields
```

The missing branch is:

```text
problems I care about
  -> vocabulary I do not yet have
      -> fields I do not know own those problems
          -> questions I would not have generated unaided
```

Unasked is built for that branch.

## Foundation fields worth importing into the product

### Serendipity-oriented recommender systems
The literature distinguishes relevance from novelty, diversity, and unexpectedness. An “accurate” recommender can become overspecialized and predictable; novelty alone can become irrelevant noise. This argues against a feed that simply mirrors recent interests.

### Exploratory search / information encountering
Some information needs evolve while searching rather than existing as a fixed query. That is closer to the desired experience than classic lookup search.

### Literature-based discovery
Don Swanson's “undiscovered public knowledge” is the strongest conceptual ancestor for the unknown-unknown ambition: separate bodies of public knowledge can imply a useful connection that neither body explicitly states.

### Computational creativity and open-ended search
These fields provide language for avoiding one-objective optimization and for maintaining multiple kinds of interesting possibility at once.

### Media archaeology / failed dreams
Old interfaces and systems are useful not as nostalgia but as a catalog of ambitions whose economic or technical bottlenecks may have moved.

## Vocabulary graft for Unasked

Terms worth keeping in the project's search vocabulary:

- **serendipity-oriented recommendation** — usefulness + relevance + unexpectedness, not randomness
- **overspecialization** — recommendation loops getting predictably narrow
- **information encountering** — useful information found without a preformed query
- **exploratory search** — search where the goal itself evolves through learning
- **berrypicking** — query and source choice evolve as useful pieces are found
- **undiscovered public knowledge** — useful inference latent across disconnected literatures
- **literature-based discovery (LBD)** — methods for finding those hidden cross-literature connections
- **open-endedness** — maintaining generative novelty rather than converging on one optimum
- **quality-diversity / illumination** — searching for many differently useful regions rather than only a global best
- **information foraging** — how people trade attention cost against information value
- **adjacent possible** — nearby possibilities made reachable by current state/capabilities
- **capability discontinuity** — a constraint changes enough that an old idea deserves reevaluation

## Unknown-unknown neighborhoods to mine

These are not a fixed content calendar. They are examples of problem-owning fields that sit one or two conceptual hops away from demonstrated interests:

- literature-based discovery and science-of-science
- information foraging and sensemaking
- calm technology and peripheral awareness
- high-reliability organizations and anomaly reporting
- morphological analysis and structured invention
- cybernetics / requisite variety / control under uncertainty
- active learning and optimal experimental design
- human factors and cognitive ergonomics
- media archaeology and forgotten interface paradigms
- sonification and cross-modal perception
- embodied cognition and tool use
- algorithmic curation / recommender-system diversity
- collective intelligence and prediction aggregation
- open-ended evolution and artificial life
- archival science / provenance / evidence lineage
- operations research around attention as a scarce resource

The point is not that these are all “the reader's interests.” The point is that they own mechanisms adjacent to recurring problems the reader has already cared about.

## Main project hypothesis

A personal feed can produce higher-value discovery than ordinary recommendation if it deliberately alternates between:

1. relevance-seeking bridges from known interests;
2. foreign-vocabulary acquisition;
3. failed-dream revival tests;
4. memory-blind exploration;
5. a second pass that can kill the candidate before it reaches the feed.

The hypothesis is falsifiable. Thirty published items are enough to begin judging whether this architecture produces useful surprise or merely ornate randomness.
