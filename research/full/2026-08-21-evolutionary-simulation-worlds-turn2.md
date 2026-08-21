# Turn 2 — Small worlds that can evolve into things we did not design

**Date:** 2026-08-21  
**Turn 1:** `research/full/2026-08-21-evolutionary-simulation-worlds-turn1.md`  
**Verdict:** `SURVIVES_WITH_CORRECTIONS`  
**Type:** user-directed side report  
**Normal Unasked pipeline:** unchanged; Miyake-events Turn 1 remains pending Turn 2  
**OWR authority:** research only; this does not authorize a roadmap or implementation change

## Validated answer

The smallest high-yield evolutionary simulation worth building in OWR is smaller than Turn 1 proposed.

Start with a pure semantic 2D ecology containing a few hundred asexual organisms, two renewable limiting resources, local depletion, finite energy, reproduction with mutation, death, and a very small heritable genome. Do not assign a fitness score. Survival and descendants are the fitness signal.

The first useful genome can be approximately four quantitative dimensions rather than six to ten:

1. **resource allocation** — a constrained tradeoff between efficiently exploiting resource A and resource B;
2. **movement investment** — faster search costs more energy;
3. **sensing investment** — better local information costs energy;
4. **offspring investment / reproduction threshold** — producing larger or better-provisioned offspring delays reproduction.

The exact implementation should remain revisable, but the design principle is stable: every useful trait must create a cost or tradeoff. A free advantage simply sweeps to fixation and removes the evolutionary problem.

Mixed limiting resources are unusually valuable because they can create **negative frequency-dependent selection** without scripted species or explicit niches. A classic Avida experiment found that a diverse pool of limiting resources was enough to generate adaptive radiation and maintain phenotypically and phylogenetically distinct groups even in a spatially homogeneous environment. Richness peaked at intermediate productivity. The mechanism is more useful than the exact digital-organism implementation: common resource-use strategies change the resource environment and create opportunities for rarer strategies.

This first world should not be described as open-ended evolution. Its trait dimensions and genotype–phenotype map are intentionally bounded. The initial target is **bounded but non-scripted eco-evolutionary emergence**: adaptive radiation, selective sweeps, coexistence, frequency-dependent cycling, evolutionary rescue, bottlenecks and extinction.

OWR's distinctive value is not a new evolutionary algorithm. It is causal historical experimentation. OWR can eventually establish one population history, checkpoint it, and branch the same population into different environmental futures. Evolutionary biology already uses concepts such as time-shift assays, ancestral comparisons and evolutionary rescue; OWR can make those manipulations first-class replay objects.

---

# Gate 1 — Does a tiny ecology really generate diversification?

## Result: yes, under stronger conditions than “mutation happens”

Turn 1 included spatial heterogeneity as a likely requirement for useful diversification. That was too strong.

Chow et al. (Science, 2004) evolved digital organisms under mixed limiting resources. Maximum species richness occurred at intermediate productivity even though the environment was spatially homogeneous. Frequency-dependent competition for different resources was sufficient to maintain distinct phenotypic and phylogenetic groups.

Source: https://pubmed.ncbi.nlm.nih.gov/15232105/

This gives Pressure Garden a cleaner first experiment:

```text
one arena
+ two renewable limiting resources
+ heritable specialization tradeoff
+ energetic cost of movement/sensing/reproduction
+ local resource depletion
+ mutation at reproduction
+ death
```

Spatial structure, seasons and barriers should be added only after the homogeneous system has been characterized. Otherwise an interesting result will have too many plausible causes.

### Why intermediate scarcity matters

Resource abundance can eliminate the cost of specialization: if everyone gets enough, differences do not strongly affect descendants. Extreme scarcity can instead collapse diversity before mutation and niche differentiation matter. Intermediate productivity can make exploitation strategy consequential while preserving enough population for alternatives to arise.

The correct outer-search question for OWR is therefore not “which creature is best?” It is something like:

> Across resource productivity, resource mixture, mutation rate and energetic tradeoffs, where do populations collapse, converge, coexist, branch into ecotypes or cycle?

That is exactly the kind of regime map OWR's accepted M05 search plane is built to produce: fixed world program, parameter/seed fanout, sparse result rows, promotion, and canonical rerun.

---

# Gate 2 — Is “open-ended evolution” a realistic first objective?

## Result: no

Open-ended evolution remains a major unsolved artificial-life problem. Novelty alone is not enough; systems can continue changing while saturating in complexity or cycling through variants of the same effective solution.

A particularly useful failure comes from large-scale Lenia evolution. The experiments went through an early phase of diversity and creativity and then tended toward domination by fast-expanding patterns. The authors explicitly proposed mass conservation, energy constraints and environmental design as missing ingredients that might help sustain evolutionary activity.

Source: https://arxiv.org/abs/2304.05639

Flow-Lenia improves the substrate by conserving mass and localizing update-rule parameters so distinct forms can coexist and interact inside one world. It is scientifically and visually compelling, but it is not evidence that one can turn on a continuous cellular automaton and obtain indefinitely increasing complexity.

Source: https://arxiv.org/abs/2212.07906

The design implication is important for OWR:

- do not score “open-endedness” as a pass/fail property;
- track separate quantities: change, novelty, ecological diversity, lineage turnover, phenotype complexity and emergence of new units of selection;
- expect some dimensions to saturate while others continue;
- preserve stasis and collapse as results.

**What not to claim:** Pressure Garden is an open-ended artificial-life system. It is deliberately too constrained for that claim.

---

# Gate 3 — Does coevolution naturally create escalating complexity?

## Result: not reliably

Turn 1 ranked host–parasite coevolution highly because each population creates a moving target for the other. That part survives. The inference that this is a particularly reliable route to sustained complexity does not.

A 2022 review of 219 host–parasite coevolution models found qualitatively different outcomes depending especially on population dynamics and infection genetics. Systems can show directional arms races, fluctuating Red-Queen dynamics, stable polymorphism or stable monomorphism. Directional escalation cannot generally continue indefinitely because defensive and offensive traits carry fitness costs and physiological constraints.

Sources:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9305583/
- https://pubmed.ncbi.nlm.nih.gov/35030276/

This actually makes **Parasite Pond** more scientifically useful, but for a different reason. It is a compact experiment in endogenous moving fitness landscapes, frequency dependence and ecological feedback. It should follow the single-population resource ecology rather than replace it.

Useful OWR forks would include:

- freeze the host population but allow parasites to evolve;
- freeze parasite evolution while hosts evolve;
- remove resistance costs;
- change infection specificity;
- restore host or parasite lineages from an earlier checkpoint and perform a time-shift competition.

The last experiment can distinguish a one-way arms race from cyclic Red-Queen behavior better than looking at a single trait curve.

---

# Gate 4 — What is the best first pressure experiment?

## Result: evolutionary rescue is almost perfectly shaped for OWR

Evolutionary rescue occurs when adaptation prevents extinction during environmental deterioration. Its probability and aftermath depend on initial population size and variation, severity and rate of environmental change, and dispersal.

A 2024 experiment with *Pseudomonas fluorescens* compared abrupt and gradual increases in antibiotic stress. Populations could be rescued under both regimes, but faster deterioration caused larger long-term fitness and diversity costs. Further adaptation only partly restored ecological diversity.

Source: https://academic.oup.com/evolut/article/78/4/768/7465028

For OWR, the experiment is unusually clean:

```text
1. evolve Pressure Garden to a stable ecological regime
2. checkpoint exact population + environment
3. branch the checkpoint
4A. abrupt resource loss / toxin / climate pressure
4B. gradual version of the same total pressure
4C. no-change control
5. compare extinction, rescue, diversity, lineages and trait trajectories
```

Then perform reciprocal historical tests:

- put the ancestral population into the final stressed environment;
- put evolved descendants back into the ancestral environment;
- restore the population immediately before the mutation that founded a successful rescue lineage and prevent only that mutation;
- resurrect an extinct pre-pressure lineage after the ecosystem has changed;
- retain descendant genes but restore the ancestral environment, or vice versa.

These experiments make historical contingency observable instead of treating evolution as one animated trajectory.

---

# Gate 5 — Parametric traits or evolvable neural controllers?

## Result: use interpretable traits first; controller evolution is phase two

A richer controller increases the adjacent possible. A tiny neural network or mutable finite-state controller could evolve combinations of sensing, movement, avoidance and resource choice that were not individually parameterized.

That is exactly why it should not be first.

The first simulation needs to prove that OWR can correctly handle:

- birth and death;
- heritable mutation;
- dynamic entity populations;
- deterministic seeded histories;
- lineage recording;
- checkpoint/restore of a changing population;
- sparse evolutionary observables;
- counterfactual pressure forks.

A small explicit genotype makes unexpected outcomes easier to attribute to ecology rather than to a controller bug or opaque behavioral adaptation.

After that baseline, the next substrate can replace some behavioral traits with an evolvable controller while keeping metabolism and resource physics unchanged. A productive sequence is:

```text
quantitative traits
→ tiny state machine
→ tiny neural controller
→ evolvable sensor allocation
→ variable controller topology only if useful
```

This progression also permits a direct question: **when does added representational freedom create genuinely new ecological regimes rather than merely optimize the old ones more efficiently?**

---

# Gate 6 — Should mutation rate and evolvability themselves evolve?

## Result: yes later, but never as the first objective

Evolvability is not merely a computer-science metaphor. A 2019 Nature Reviews Genetics review summarizes multiple biological mechanisms that alter the production of heritable adaptive variation and notes mounting evidence that evolvability can itself evolve.

Source: https://www.nature.com/articles/s41576-018-0069-z

In 2025, Barnett, Meister and Rainey experimentally evolved localized hypermutation in bacteria. Lineage success depended on repeatedly switching between phenotypic states; localized mutability increased the probability of producing the required adaptive variants. The mutational mechanism itself subsequently changed with the frequency of environmental switching.

Source: https://pubmed.ncbi.nlm.nih.gov/39977489/

This strongly supports one of Turn 1's architecture-breaking ideas: mutation strategy can be runtime state rather than a fixed simulator constant.

But it should come after the baseline because measuring evolvability is difficult. A lineage with higher mutation rate can look “creative” while simply producing more deleterious noise. Later experiments could allow mutation rate, recombination rate or locus-specific mutability to evolve, while treating future adaptive potential as an observed consequence rather than a fitness objective.

---

# Gate 7 — Can the level of individuality itself emerge?

## Result: this is more plausible in a tiny model than Turn 1 gave it credit for

The strongest new idea in Turn 2 came from **ecological scaffolding**.

Black, Bourrat and Rainey showed with a mechanistic model that a minimal ecology containing patchy resources and between-patch dispersal can make collectives of cells participate in a Darwinian death–birth process. When dispersal timing is sufficiently long and new patches are founded by single cells, conditions can favour reproductive division of labour at the collective level.

Source: https://www.nature.com/articles/s41559-019-1086-9

This does not mean multicellularity automatically emerges from any patch model. The ecological lifecycle itself supplies scaffolding. But that is precisely why the design is useful.

### Proposed small world: Ecological Scaffolding Islands

```text
many finite resource patches
+ simple reproducing cells
+ cells alter local patch resources
+ periodic dispersal/founding events
+ no explicit “organism” above the cell
```

Sweep the ratio between:

- resource-consumption timescale;
- within-patch reproduction;
- dispersal interval;
- founder number.

Then ask whether selection starts operating on persistent patch-level collectives: do lineages develop complementary roles, reproductive specialization or group-level heredity?

This is exactly the kind of possibility a fixed human ontology may miss. The simulator can keep cells as canonical entities while the analysis layer asks whether a higher-level reproducing unit has appeared.

That suggests a broader OWR principle:

> **Do not require the WorldSpec entity type to equal the scientifically interesting unit of individuality.**

The unit of selection can be inferred from lineage, reproduction and causal dependence after the run.

---

# Gate 8 — How should villages use LLMs?

## Result: sparse semantic mutation is defensible; LLM-as-metabolism is not

The humanoid-village idea remains worth pursuing, but later than the ecological work.

A 2026 systematic review of 35 generative agent-based-model studies identifies validation as the central unresolved problem. LLM agents can look behaviorally plausible while remaining difficult to calibrate, interpret and reproduce. The review explicitly notes the possibility that apparent emergent social patterns are reproduced from the model's training data rather than generated by the simulated mechanism.

Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12627210/

That makes a village of dozens of fully LLM-driven residents a poor scientific starting point for “what naturally evolves?” Believability is not emergence.

A better OWR village would have explicit causal metabolism:

- food and material stocks;
- production and maintenance tasks;
- locations and travel time;
- weather and seasons;
- health and mortality;
- kinship and household obligations;
- skill acquired through practice;
- storage, trade and sharing;
- copying and forgetting of practices.

Do **not** encode occupations such as `farmer`, `builder`, `merchant`, `leader` or `priest` as fundamental types. If specialization appears, infer it from repeated behavior, skill, dependency networks and social recognition.

Use an LLM only at moments where the state space is intrinsically semantic. For example, an agent may occasionally propose a tool, rule, story, ritual or bargaining convention. The proposal must compile into a structured artifact with explicit costs, prerequisites and effects. It can then spread, mutate or disappear under ordinary simulated consequences.

This turns the LLM into a **cultural mutation operator**, not the hidden social physics.

---

# Gate 9 — What should OWR build versus rent?

## Result: build the first kernel; rent exotic substrates later

Existing artificial-life frameworks already cover several hard domains:

- **Avida** is a mature digital-evolution system with instruction-level organisms and strong experimental precedent for resource competition and complex-feature evolution.
- **Aevol** is designed for long-run genome evolution with mutation, competition and genetic architecture.
- **MABE/MABE2** is a modular evolutionary-computation framework that separates worlds, genomes, brains and optimizers.
- **DISHTINY** was designed to investigate major evolutionary transitions and multicellular-like cooperation.
- **Flow-Lenia** supplies a continuous self-organizing morphological substrate that would be expensive and scientifically pointless for OWR to recreate merely for ownership.

OWR should not become a general artificial-life engine.

The first Pressure Garden kernel is worth implementing natively because its scientific value comes from OWR's existing causal semantics: exact history, checkpoints, interventions, sparse search and replay. Its mechanics are simple enough that an external ALife framework would add more impedance than capability.

Specialist substrates should later sit behind the same external-discovery philosophy OWR already uses for physics and acceleration. If a Flow-Lenia or DISHTINY run is scientifically valuable, OWR's role can be experiment specification, provenance, intervention mapping, sparse result ingestion and canonical evidence—not ownership of the cellular automaton.

---

# Gate 10 — What OWR can actually do now

Turn 1 treated OWR at the architectural level. Turn 2 inspected the current repository.

The project has already accepted M05, and `src/orrery_world/search.py` implements a deterministic hierarchical search plane with parameter/seed work items, sparse results, promotion and canonical replication. `MAX_SEARCH_WORK_ITEMS` is currently 100,000. This is a real outer-search facility, not just a roadmap idea.

WorldSpec v1 already supports `entity_map` components whose entity IDs are runtime semantic IDs and whose records follow a fixed declared schema. This is compatible with a dynamic population **in principle**, but no claim is made that birth/death evolutionary semantics already exist. A new trusted behavior module would need to own those semantics.

The existing `sentinel_resource` behavior is deliberately narrow: two policies contest a conserved resource pool. It demonstrates the trusted behavior seam, canonical fields, declared RNG consumers and deterministic semantic mutation, but it is not an evolutionary substrate.

Important distinction:

> **M05 can fan out many runs. It does not make one long evolutionary run cheap.**

Millions of organism updates or generations are an inner-loop throughput problem. Pressure Garden should therefore begin small enough to run in the reference semantic lane and only earn acceleration after profiling.

Current M06 evidence is another reason not to couple the first experiment to Madrona. The pending architecture replan recommends treating the external discovery seam as durable while Madrona remains a native-Linux-only optional accelerator and non-blocking for v0.1. Genesis has specialist evidence, but neither is required for this first ecology.

This research does not change or bypass the current OWR owner-decision gate.

---

# Gate 11 — Minimal telemetry that preserves evolutionary explanation

Per-agent per-tick traces will become enormous and are unnecessary for most runs.

The first evolutionary result plane should preserve:

### Every birth/death event

```text
agent_id
parent_id
tick
birth_or_death
cause_if_known
genome_digest
mutation_delta_digest
```

The complete genome need only be retained for periodic samples and promoted lineages if deterministic reconstruction can recover intermediate descendants.

### Periodic population snapshots

- population size;
- resource totals and spatial moments;
- mean/variance/quantiles of each trait;
- diversity metrics;
- lineage frequencies;
- reproduction and mortality rates;
- ecological activity / resource-use mix;
- provisional ecotype clusters computed offline.

### Promoted lineage history

For a lineage implicated in rescue, diversification or collapse, retain full ancestry and mutations so OWR can fork before a candidate causal mutation.

### No hard-coded species IDs

In an asexual quantitative-trait world, use `lineage`, `genotype cluster` or `ecotype`. Species-like grouping should be an analytical result, not simulator truth.

### Event candidates

- first persistent diversification;
- selective sweep;
- extinction / near-extinction;
- evolutionary rescue;
- lineage turnover;
- stable coexistence;
- regime shift;
- trait reversal;
- invasion by rare strategy;
- convergence of unrelated lineages;
- emergence of higher-level reproductive unit.

This gives the eventual computational-cinema layer evolutionary-scale events without retaining every mundane movement step.

---

# Gate 12 — Suggestions that OWR/MAR/Atlas are unusually likely to miss

These survive Turn 2 because each weakens a built-in assumption rather than merely adding a new world theme.

## 1. Ecological Scaffolding Islands

Do not design multicellular organisms. Design patch lifecycles and ask whether a higher-level individual emerges because the ecology makes patches reproduce as coherent units.

## 2. Ghost ecology

Corpses, abandoned structures, depleted soils, waste, toxins and paths persist after lineages vanish. Extinction does not erase causal influence. A dead species can continue selecting its successors.

## 3. Evolutionary memory ablation

Separate inherited genome from inherited environment. Take an evolved population and:

- keep descendant genes but erase ancestor-made environmental structure;
- keep the modified environment but restore ancestral genes;
- erase culture but preserve material infrastructure;
- erase infrastructure but preserve cultural memory.

The resulting fork measures which inheritance channel actually carries adaptation.

## 4. Lineage archaeology / exaptation test

Search ancestry for a mutation that was neutral or mildly harmful when it appeared but later became necessary after the environment changed. Fork immediately before it, prohibit that mutation only, and measure what historical possibilities disappear.

Avida's classic work on complex-feature evolution makes this plausible: complex functions can depend on chains of prior mutations that were not individually selected because they pointed toward the eventual feature.

## 5. Anti-goal discovery

Run outer search without naming a human-desired story. Reject only worlds that are dead, numerically broken or almost static. Preserve worlds showing sustained ecological activity, lineage turnover or unexplained multi-scale structure. Interpret them afterward.

This is deliberately hostile to Atlas's tendency to generate an explicit interesting question first.

## 6. Evolve what counts as a sensor

Rather than evolving only policy weights, allow organisms to allocate finite sensing capacity among resource gradients, neighbors, toxins, light, temperature or signals. Evolution changes the information available to the controller itself.

## 7. Culture that is parasitic on its hosts

A practice can spread because it is easy to copy or increases its own transmission while reducing bearer resources or reproduction. Genes and cultural artifacts then have distinct lineage trees and potentially conflicting fitness interests.

## 8. Alien-physics transplant

After a population has evolved, fork it into a world where one deep environmental regularity changes: resource diffusion, conservation, terrain connectivity, season periodicity or reproduction timing. Which adaptations are robust to a change in “physics,” and which reveal that evolution overfit the old world?

## 9. The pressure evolves too

Do not schedule a stronger predator or toxin. Let another reproducing population, ecosystem engineer or cultural practice create the pressure. The designer supplies interaction rules; the adversary supplies the changing environment.

## 10. Measure individuality after the run

Keep canonical entities small and simple. Infer candidate higher-level individuals from repeated co-reproduction, resource sharing, lineage covariance and causal dependence. This allows the analysis to discover that the relevant unit is a colony, patch, household or symbiotic pair rather than an entity type selected in advance.

---

# Revised experimental ladder

## Phase E0 — Evolution kernel

Pure semantic runtime. Asexual birth/death, mutation, energy, two resources, tiny explicit genome, lineage tracking. Prove deterministic replay and checkpoint restoration for a changing population.

## Phase E1 — Pressure Garden regime map

Sweep productivity, resource mixture, mutation rate and tradeoff strength over many seeds. Find collapse, monomorphism, coexistence, ecotype branching and cycling.

## Phase E2 — Evolutionary rescue

Promote one stable ecology, checkpoint it, fork abrupt vs gradual pressure and controls, then perform ancestral/descendant transplants.

## Phase E3 — Ecological inheritance

Persistent environmental modification: waste, nutrient depletion, trails, burrows, structures or habitat change. Add memory-ablation forks.

## Phase E4 — Parasite Pond

Two evolving populations with explicit costs and specificity. Search arms-race, Red-Queen, coexistence and collapse regimes rather than scoring “complexity.”

## Phase E5 — Behavioral adjacent possible

Replace some quantitative behavior with a small evolvable state machine/neural controller and evolvable sensing allocation.

## Phase E6 — Evolvability and reproduction

Allow mutation strategy, recombination, offspring investment or reproductive mode to evolve.

## Phase E7 — Ecological Scaffolding Islands

Ask whether environmental lifecycle creates a higher-level unit of selection.

## Phase E8 — Culture / village

Explicit causal economy and ecology first. LLM calls only as sparse semantic mutation/negotiation events that lower to structured runtime artifacts.

## Phase E9 — Specialist ALife substrates

Flow-Lenia, Aevol/Avida-like digital genomes, DISHTINY-like major-transition systems, or future specialist backends connected through OWR's external experiment/provenance seam when they answer a question the native substrate cannot.

---

# Semantic bank

```yaml
question: >
  What is the smallest simulation worth building in OWR if the aim is to let ecological
  and evolutionary structure emerge from pressure rather than scripting outcomes, and
  what later experiments could push from organisms toward coevolution, culture and new
  levels of individuality?

validated_answer: >
  Begin with a tiny asexual 2D resource ecology, not humanoid villagers. Two limiting
  renewable resources, heritable tradeoffs, finite energy, local depletion, reproduction,
  mutation and death are enough to create a meaningful possibility of adaptive radiation
  through frequency-dependent selection. Treat it as bounded eco-evolutionary emergence,
  not open-ended evolution. OWR's comparative advantage is checkpointed evolutionary
  history: branch one established population into alternate pressures and transplant
  ancestors and descendants across environments.

mental_model_delta: >
  Interesting evolution does not require a rich world. The environment becomes interesting
  when organisms change the selective conditions faced by other organisms. The minimal
  design problem is therefore not more traits or smarter agents; it is a small set of
  costly tradeoffs plus endogenous resource feedback and historical instrumentation.

tangible_examples:
  - identical checkpoint forked into abrupt vs gradual environmental deterioration
  - ancestor placed in descendant environment and descendant returned to ancestral environment
  - successful rescue mutation removed from its historical branch
  - extinct lineage resurrected into the later ecosystem
  - host and parasite histories crossed in time-shift experiments
  - constructed environment erased while descendant genes are preserved
  - ecological patch lifecycle altered to test emergence of collective individuality

unusual_or_specific_details:
  - Avida adaptive radiation occurred under mixed limiting resources even without spatial heterogeneity
  - richness peaked at intermediate resource productivity in that experiment
  - large-scale Lenia evolution showed early creativity followed by domination by fast-expanding forms
  - ecological scaffolding theory can generate collective-level Darwinian properties from patch lifecycle and dispersal timing
  - experimentally evolved localized hypermutation in 2025 shows evolvability itself can become selectable
  - LLM social simulations risk reproducing known social patterns from training data and mistaking them for emergence

new_vocabulary:
  - negative frequency-dependent selection
  - adaptive radiation
  - evolutionary rescue
  - Red Queen dynamics
  - time-shift assay
  - niche construction
  - ecological inheritance
  - ecological scaffolding
  - evolvability
  - exaptation
  - ecotype

strongest_caveat: >
  A small finite genome and fixed world cannot demonstrate indefinite open-ended evolution;
  apparent complexity can saturate or collapse, and later neural/LLM substrates make causal
  interpretation harder. The first experiment should optimize for explanatory leverage,
  not visual richness.

what_is_established:
  - heritable variation plus differential reproduction under resource constraints can create adaptive diversification
  - mixed limiting resources can create frequency-dependent diversification in digital evolution
  - evolutionary rescue differs under abrupt and gradual environmental deterioration
  - host-parasite coevolution can produce multiple regimes rather than inevitable escalation
  - ecological structure can change the effective level on which selection acts
  - current generative social simulations have substantial validation problems
  - OWR currently has accepted M05 sparse search and a WorldSpec entity-map schema suitable for a fixed evolvable substrate in principle

what_is_inferred:
  - the proposed four-dimension Pressure Garden genome is the best first OWR design
  - sparse LLM cultural mutation is preferable to fully LLM-driven villagers for this project's causal goals
  - Ecological Scaffolding Islands may be an especially high-value OWR experiment
  - OWR's greatest comparative advantage for ALife may be counterfactual evolutionary history rather than raw evolutionary throughput

what_changed_in_turn2:
  - reduced Pressure Garden from 6-10 traits to a much smaller interpretable genotype
  - removed spatial heterogeneity as a first-run requirement
  - stopped describing open-ended evolution as a plausible near-term objective
  - downgraded host-parasite coevolution as a guaranteed complexity generator
  - promoted evolutionary rescue as the first major pressure experiment
  - promoted ecological scaffolding / emergent individuality as a surprisingly small architecture-breaking experiment
  - clarified that accepted M05 outer-search throughput is distinct from within-run evolutionary throughput
  - made Madrona explicitly unnecessary for the first experiment given current OWR evidence

what_not_to_claim:
  - Pressure Garden will produce open-ended evolution
  - coevolution inevitably creates increasing complexity
  - emergent clusters in an asexual simulation are biological species
  - LLM villagers are evidence of natural social emergence merely because behavior looks plausible
  - current OWR already implements birth/death evolutionary semantics
  - M05 outer fanout proves OWR can cheaply simulate millions of generations inside one run
  - Madrona is required or presently qualified for the first evolutionary world
```

---

# Publication decision

**PUBLISH.**

The report survives because several independent lines of work support a much smaller and more experimentally useful design than the initial broad “ecosystem/village” idea. The major corrections improve falsifiability: begin with resource-driven frequency dependence, label the system as bounded, delay opaque controllers and LLM villages, and use OWR primarily for causal historical forks.

## Primary sources

- Chow et al., adaptive radiation from resource competition in digital organisms: https://pubmed.ncbi.nlm.nih.gov/15232105/
- Lenski et al., evolutionary origin of complex features in digital organisms: https://www.nature.com/articles/nature01568
- Large-scale Lenia open-ended evolution experiments: https://arxiv.org/abs/2304.05639
- Flow-Lenia: https://arxiv.org/abs/2212.07906
- Host-parasite coevolution review: https://pmc.ncbi.nlm.nih.gov/articles/PMC9305583/
- Evolutionary rescue under abrupt/gradual deterioration: https://academic.oup.com/evolut/article/78/4/768/7465028
- Ecological scaffolding and individuality: https://www.nature.com/articles/s41559-019-1086-9
- Evolvability review: https://www.nature.com/articles/s41576-018-0069-z
- Experimental evolution of evolvability: https://pubmed.ncbi.nlm.nih.gov/39977489/
- Generative ABM validation review: https://pmc.ncbi.nlm.nih.gov/articles/PMC12627210/
