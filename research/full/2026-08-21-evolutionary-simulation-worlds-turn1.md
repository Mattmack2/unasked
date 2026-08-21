# Turn 1 — Small worlds that can evolve into things we did not design

**Status:** TURN 1 FROZEN — NOT YET VALIDATED OR PUBLISHED  
**Date:** 2026-08-21  
**Type:** user-directed side report  
**Normal Unasked pipeline:** deliberately unchanged; Miyake-events Turn 1 remains pending Turn 2  
**Relevant project:** `Mattmack2/orrery-world-runtime`

## Research question

**What is the smallest, highest-yield simulation we could build now that can produce genuinely interesting ecological, evolutionary, or village-scale dynamics without scripting the outcomes? How do we create selection pressures that cause populations to adapt, diversify, collapse, cooperate, speciate, or change the environment that selects them? Which designs fit OWR especially well, and which interesting designs are likely to be missed because OWR/MAR and the Atlas have been built around fixed world families, explicit questions, bounded search, and human-legible outcomes?**

This Turn 1 deliberately separates three things that are often mixed together:

1. **evolution inside a world** — organisms reproduce with heritable variation and differential reproductive success;
2. **learning inside a lifetime** — one organism changes its behavior without changing the inherited population;
3. **outer search over worlds or agents** — an optimizer, QD system, LLM, or researcher chooses which designs to keep.

The first is the main target. OWR already has strong machinery for the third.

---

# Gate 0 — What OWR already makes easy, and what that biases us toward

OWR's durable architecture says:

> Worlds are programs. Runs are data. Traces are history. Cameras are interpretations.

Its first-class loop is world specification -> many headless runs -> anomaly/regime search -> canonical replication -> causal fork -> story extraction. World families are compilation units; ordinary runs vary parameters and seeds. Discovery and canonical execution are separate. The LLM is the architect/scientist, not the timestep. Search normally operates over fixed world structure, runtime parameters, and seeds.

Those are strong choices for causal experiments. They also produce several biases if we ask OWR to study evolution.

### Bias 1: fixed ontology

OWR wants the meaning of entities and fields to remain stable across runs. Biological evolution often creates new phenotypes, niches, symbioses, developmental strategies, social roles, or even new levels of individuality.

The way around this is **not** to let evolution rewrite WorldSpec. Instead, define a fixed *evolvable substrate* in WorldSpec and let genomes, morphologies, controllers, lineages, species clusters, cultural artifacts, and ecological structures exist as runtime state inside that substrate.

The world program stays fixed. The things that evolve do not.

### Bias 2: outer search looks like evolution but is not evolution

OWR/MAR and the Atlas naturally suggest parameter search, novelty search, MAP-Elites, regime discovery, and LLM-generated variants. Those can produce excellent creatures or worlds, but selection is external: the evaluator decides what survives.

For a genuinely Darwinian world, the organism should not receive a hidden score saying it is interesting, fast, complex, or useful. It should receive resources, constraints, competitors, mates, hazards, and consequences. Its realized fitness is observed afterward as survival and descendants.

### Bias 3: explicit questions can suppress unplanned novelty

OWR is optimized for executable questions: sweep the boundary, find the reversal, compare the intervention. Open-ended evolution is often valuable because the interesting question is only visible after a long run.

A useful evolutionary mode therefore needs **observables without a single objective**: lineage persistence, trait distributions, genotype novelty, niche occupancy, interaction networks, extinction/recovery, phenotype complexity, ecological activity, and major-transition indicators.

### Bias 4: cinematic selection favors short events

The computational-cinema layer wants reversals, thresholds, near misses, bottlenecks, and decisive moments. Evolution often produces a better story as a slow distributional change: a trait that was rare becomes common; a population splits into ecotypes; a parasite gradually forces hosts toward complexity; a constructed landscape changes what descendants need.

The director will need evolutionary-scale primitives such as lineage-rise, lineage-collapse, first successful mutation, niche invasion, diversification, convergence, trait sweep, evolutionary rescue, ecological succession, and ancestral-vs-descendant transplant.

### Bias 5: exact replay can obscure the statistical object

OWR rightly values canonical replay. Evolutionary systems remain stochastic even when a run is reproducible under a fixed seed. The scientific object is often the **distribution over histories**, not one canonical history.

The right use of OWR is therefore two-layered:

```text
many reproducible stochastic histories
→ classify regimes / lineage outcomes
→ promote representative or surprising histories
→ canonically replay those histories
→ fork them causally
```

### Bias 6: LLMs can make humanoid worlds look deeper than they are

Smallville demonstrated believable social behavior with 25 LLM agents, and Project Sid reported specialized roles, collective rules, and cultural/religious transmission with 10–1000+ agents in Minecraft. But current reviews of generative social simulation emphasize a validation problem: pretrained models can reproduce familiar social patterns from training data, appear plausible while being causally opaque, and become expensive and irreproducible at scale.

For OWR, this argues for a hybrid rule:

> **Use ordinary simulation for the causal metabolism of society. Use LLMs sparsely for semantic invention, negotiation, interpretation, or compression—not as the hidden physics of every timestep.**

This matches OWR's existing P8: the LLM is not the timestep.

OWR sources inspected:
- `orrery-world-runtime/README.md`
- `orrery-world-runtime/DESIGN.md`
- `orrery-world-runtime/IMPLEMENTATION_PLAN.md`

---

# Gate 1 — What tiny systems have already produced disproportionate emergence?

The useful comparison is not “which simulator is most realistic?” It is “which small rule sets repeatedly generate behavior their designers did not explicitly script?”

## 1. Tierra — tiny shared-compute ecology, unexpectedly rich arms races

Tierra's digital organisms were self-replicating programs sharing memory and compute. The environment produced parasites that deleted their own replication machinery and reused host code, followed by host immunity, parasite circumvention, hyperparasites, obligate cooperation, cheating, and other ecological strategies.

This is important because most of those interactions were not implemented as separate mechanics. They emerged from one scarce substrate: **code, memory, and CPU time were simultaneously organism, resource, and attack surface.**

For our purposes Tierra supplies one of the strongest design principles in the report:

> A small simulation gets deep when the same substrate supports survival, exploitation, cooperation, and inheritance.

Source: Dolson et al., “The Surprising Creativity of Digital Evolution,” Artificial Life 2020.  
https://direct.mit.edu/artl/article/26/2/274/93255/

## 2. Avida — natural selection you can interrogate experimentally

Avida isolates self-replicating programs in a controlled digital environment. Replication introduces mutations; faster or better-adapted lineages reproduce more. Researchers have used it for ecological specialization, speciation, host-parasite coevolution, complexity, evolvability, and evolutionary rescue.

The key methodological point is that **adaptation happens because inheritance + variation + differential reproduction are implemented**, not because a genetic algorithm assigns an external fitness score.

Host-parasite experiments are especially relevant. Coevolution produced substantially greater host complexity than controls without parasites, and selected for increased evolvability itself. Parasites provide a moving target: every successful defense changes the opportunity landscape for the enemy.

Sources:
- Anderson & Harmon, digital speciation in Avida: https://www.journals.uchicago.edu/doi/full/10.1086/674359
- Zaman et al., host-parasite coevolution and complexity: https://pmc.ncbi.nlm.nih.gov/articles/PMC4267771/
- Digital evolution for ecology review: https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2021.750779/full

## 3. Sugarscape — a village can be interesting before it becomes intelligent

Sugarscape is still one of the best warnings against overbuilding social agents. Its agents began with simple traits such as vision and metabolism, moved toward resources, consumed them, aged, reproduced, and died. Adding seasons produced migration and hibernation-like patterns; adding a second commodity produced trade; adding culture, mating, conflict, disease, and pollution produced much richer social dynamics.

The important lesson is that the agents did not need biographies, chain-of-thought, or rich language models for group-level structures to appear.

Source: Epstein & Axtell, *Growing Artificial Societies*, MIT Press/Brookings, 1996.  
https://direct.mit.edu/books/monograph/2503/

## 4. Polyworld — perhaps the closest classic ancestor to the thing the user is describing

Polyworld contains embodied agents with primitive actions such as movement, turning, eating, mating, attacking, and signaling. Neural structure and physiology are heritable. Actions consume energy; food replenishes it; reproduction is under agent control. In the normal regime there is no explicit fitness function beyond survival and reproduction.

The result is important for OWR because it shows a path between toy ecology and humanoid simulation: **give agents sensors, a small controller, an energy economy, mating, and enough heritable structure that behavior itself can evolve.**

Source: Yaeger/Polyworld overview and later neural-dynamics work.  
https://www.mdpi.com/2076-3263/7/3/49

## 5. Karl Sims — evolve morphology and control together

Karl Sims' 1994 virtual creatures evolved both articulated morphology and neural control. The resulting swimmers, walkers, jumpers, and competitors found strategies difficult to invent manually.

Its limitation for our purpose is equally important: many of those runs use an external objective such as locomotion performance. It is evolutionary computation, but less “natural” than an ecology where reproduction occurs inside the simulated world.

Source: https://www.karlsims.com/papers/siggraph94.pdf

## 6. Biomaker CA — tiny seeds, morphogenesis, resource competition, reproduction

Biomaker CA is a particularly strong modern reference. Plant-like organisms grow from seeds in a 2D cellular automaton, consume scarce nutrients, modify the environment, age, die, reproduce with variation, and form stable or unstable biomes. The environment itself changes as organisms grow and decompose.

This is closer to genuine ecological evolution than many creature-optimization demos because the population must continually reproduce to persist.

Source: Randazzo & Mordvintsev, Biomaker CA.  
https://arxiv.org/abs/2307.09320

## 7. Flow-Lenia — the best “how can so few equations look this alive?” example

Lenia is a continuous cellular automaton famous for localized moving structures that look organism-like. Flow-Lenia adds mass conservation and allows rule parameters to be localized with the moving matter, so multiple “species” governed by different local rule parameters can coexist in one world.

Recent work explicitly studies emergent evolutionary dynamics and adds environmental resources. In public examples, creatures lose mass and must ingest food to persist; adaptive-looking changes, movement toward resources, and division can emerge.

A related 2025 line of work uses curiosity-driven exploration of entire Flow-Lenia ecosystems with measures such as evolutionary activity, compression complexity, and multiscale entropy.

Flow-Lenia may be the **highest visual weirdness per line of underlying rule** in this report.

Sources:
- Flow-Lenia journal paper, Artificial Life 2025: https://direct.mit.edu/artl/article/31/2/228/130572/
- Google DeepMind publication page: https://deepmind.google/research/publications/106327/
- Flow-Lenia demos: https://sites.google.com/view/flowlenia/

## 8. DISHTINY — let individuality itself evolve

DISHTINY studies digital multicellularity. Cells can form kin groups, communicate, share resources, and reproduce groups. Runs have produced division of labor, resource sharing, offspring investment, patterned morphology, and adaptive apoptosis.

The important lesson is not “simulate cells.” It is that **the unit of selection can itself change**. A system can begin with independently reproducing individuals and later produce collectives that behave as higher-level organisms.

Sources:
- https://arxiv.org/abs/2104.10081
- https://arxiv.org/abs/2405.07241

## 9. Neural MMO — ecology without genetic evolution

Neural MMO is not primarily a Darwinian evolution platform, but it demonstrates that persistent resource competition, population scale, and multiple agent populations can create niche formation and spatial specialization. Larger populations increased exploration; distinct populations diverged spatially to reduce direct competition.

The useful lesson is that **competition can create its own curriculum** without an explicit “explore the map” objective.

Source: https://openai.com/index/neural-mmo/

## 10. LLM villages — good presentation, dangerous causal shortcut

Generative Agents/Smallville used 25 agents with memory, reflection, planning, and natural-language interaction. Project Sid scaled Minecraft societies to 10–1000+ LLM agents and reported specialization and norm/culture-like phenomena.

These systems matter because they show what is now possible visually and semantically. They are poor templates for the *causal core* of OWR unless we are specifically studying language-model behavior. A 2025/2026 critical review argues that generative ABMs often suffer from validation problems, data leakage from model training, stereotypes, stochasticity, and plausible-looking but weakly explanatory dynamics.

Sources:
- Smallville: https://arxiv.org/abs/2304.03442
- Project Sid: https://arxiv.org/abs/2411.00114
- Larooij & Törnberg 2026 review: https://pmc.ncbi.nlm.nih.gov/articles/PMC12627210/
- Zeng et al. 2026, “Too human to model”: https://www.nature.com/articles/s44260-026-00075-1

---

# Gate 2 — What makes evolution “natural” inside a simulation?

The minimum Darwinian core is simple:

```text
heredity
+ variation
+ differential reproduction
= evolution by natural selection
```

But that minimum often converges quickly to one boring optimum. The systems that remain interesting usually add **endogenous moving targets**.

## 2.1 No hidden fitness score

For the first OWR evolutionary trial, I would not assign organisms a fitness function.

They should have:
- energy or material;
- finite lifespan or mortality risk;
- reproduction costs;
- resource requirements;
- spatial competition;
- interactions with other organisms;
- heritable traits;
- mutation and possibly recombination.

“Fitness” is measured afterward as descendants or long-term lineage contribution.

This distinction matters. If the system says `reward = speed`, it will evolve speed. If faster movement consumes more energy and only helps when food is sparse or predators are nearby, speed becomes valuable only when ecology makes it valuable.

## 2.2 Tradeoffs are more important than trait count

An evolutionary world becomes much richer when every useful trait has a cost.

Examples:
- speed costs energy;
- large sensory radius costs metabolism;
- body size improves contest strength but increases food requirements;
- armor reduces predation but slows reproduction;
- large offspring survive better but reduce offspring count;
- broad diet lowers efficiency on any one food;
- high mutation rate finds adaptations quickly but carries mutational load;
- social information reduces search cost but creates vulnerability to copying bad behavior.

Without tradeoffs, one trait vector tends to dominate.

## 2.3 Spatial locality creates niches

A well-mixed population often collapses toward one best strategy. Spatial structure permits local adaptation, refuges, fronts, migration, kin clusters, resource monopolies, parasite hot spots, and partial reproductive isolation.

This is one reason a 2D world is disproportionately useful even when the “physics” is extremely simple.

## 2.4 Frequency-dependent selection prevents a permanent winner

If success depends partly on how common a strategy is, the environment never has one fixed optimum.

Rare prey colors may be harder for predators to learn. A parasite adapted to the dominant immune phenotype creates an advantage for rare immune variants. A common foraging strategy can deplete the resource it depends on. A social strategy can become exploitable once everyone adopts it.

A 2024 meta-analysis found frequency-dependent selection is widespread, though its direction and strength vary across empirical settings.

Source: https://onlinelibrary.wiley.com/doi/10.1111/ele.14477

## 2.5 Coevolution creates moving problems

Host-parasite experiments in Avida and even very small bit-string models show that parasites can push hosts toward increasing complexity and alter evolvability. The reason is structural: a successful host phenotype changes the parasite's opportunity; the parasite's response changes the host's opportunity again.

This is a much stronger engine for sustained novelty than a static predator with fixed behavior.

Source: https://journals.aps.org/pre/abstract/10.1103/PhysRevE.108.044407

## 2.6 Niche construction lets life change its own future selection

Organisms need not merely adapt to the environment. They can modify it.

Examples:
- paths reduce movement costs;
- nests alter survival;
- grazing changes vegetation;
- dams change water distribution;
- decomposition changes soil nutrients;
- storage changes seasonal scarcity;
- houses change winter mortality;
- pollution changes future resource yield.

If those modifications persist after the constructor dies, descendants inherit not only genes but an altered world: **ecological inheritance**.

This is especially attractive for OWR because the altered environment is causal state and can be checkpointed, forked, and replayed.

Sources:
- 2024 niche-construction overview: https://oecs.mit.edu/pub/xyn6l8i3/release/1/
- geo-evolutionary feedback review: https://www.sciencedirect.com/science/article/pii/S0169534724001198

## 2.7 Environmental change creates evolutionary rescue, collapse, or path dependence

If a population is placed under pressure, the interesting question is not merely whether mean fitness drops.

Possible outcomes include:
- extinction before adaptation;
- rescue by standing variation;
- rescue by a new mutation;
- phenotypic plasticity buying time;
- migration to refuge rather than adaptation;
- specialization that sacrifices old capabilities;
- demographic bottleneck that permanently reduces diversity;
- later recovery of population size without recovery of ecological diversity.

Experimental work with bacteria shows that abrupt and gradual deterioration can produce different rescue and diversity outcomes.

Source: https://academic.oup.com/evolut/article/78/4/768/7465028

## 2.8 Evolvability can itself evolve

Mutation rate, modularity, developmental mappings, recombination, and genotype structure affect which future phenotypes are reachable. Open-ended systems therefore become more interesting when the **generator of variation** is not completely fixed.

This should be a later experiment, not the first one, because changing mutation/development simultaneously makes causal interpretation harder.

Sources:
- Avida coevolution/evolvability: https://pmc.ncbi.nlm.nih.gov/articles/PMC4267771/
- 2026 genotype-phenotype perspective: https://academic.oup.com/evolut/article/80/2/301/8340360

---

# Gate 3 — The smallest simulation I would actually build in OWR

## Recommendation: **Pressure Garden**

If the requirement is **smallest + visually legible + genuinely evolutionary + easy to instrument + naturally compatible with OWR**, I would build this before a humanoid village.

### World

A small 2D continuous or tiled environment with:
- renewable food patches;
- a temperature/moisture field or seasonal gradient;
- obstacles/terrain that affect movement;
- a few hundred mobile organisms;
- no predator in v1.

### Organism genome

Start with only 6–10 heritable continuous traits, for example:
- body size;
- movement speed;
- turn agility;
- sensory radius;
- basal metabolism;
- food preference / digestive efficiency;
- reproduction threshold;
- offspring investment;
- optional stress tolerance;
- optional tendency to follow/avoid conspecifics.

Traits must carry physical/resource costs.

### Controller

Do **not** start with an LLM.

Either:
1. a tiny fixed sensorimotor rule whose parameters are inherited; or
2. a very small heritable neural controller.

The second permits qualitatively new behavior but makes interpretation harder. I would begin with parameterized behavior, then upgrade the controller if the world converges too quickly.

### Life cycle

```text
sense local environment
→ move / turn / eat
→ pay metabolic cost
→ accumulate energy
→ reproduce locally when threshold is reached
→ offspring inherits mutated genome
→ die from starvation / age / hazard
```

No scalar fitness is fed back to organisms.

### Why it is enough

This world can already produce:
- local adaptation;
- migration;
- boom/bust cycles;
- trait sweeps;
- specialization;
- generalist/specialist coexistence;
- founder effects;
- bottlenecks;
- evolutionary rescue;
- extinction;
- possibly stable polymorphisms if resources differ spatially.

### Pressure interventions

After a stable ecology forms, use OWR checkpoints to branch the same history into:
- gradual drought;
- abrupt drought;
- food patch fragmentation;
- new toxin in one resource;
- shrinking habitable corridor;
- seasonal variability;
- increased movement cost;
- novel resource type.

Then ask:

**Does the population adapt, move, diversify, or die?**

The critical improvement over a generic evolution demo is OWR's counterfactual machinery. We can fork one established ecosystem at the same pre-pressure state and change exactly one pressure.

### Best OWR-native causal tests

1. **Ancestral transplant** — take the ancestor genotype and place it into the evolved environment.
2. **Descendant transplant** — place the evolved genotype into the ancestral environment.
3. **Common garden** — compare ancestral and descendant lineages under identical conditions.
4. **Pressure removal** — after adaptation, revert the environmental pressure and see whether the lineage retains costly adaptations.
5. **Mutation replay** — branch immediately before a historically important birth and suppress or alter that mutation.
6. **Rescue attribution** — determine whether survival came from standing variation, a new mutation, migration, or plasticity.

This is unusually well matched to OWR's identity, checkpoint, and causal-fork contracts.

---

# Gate 4 — Small simulations worth building after Pressure Garden

## A. Parasite Pond — probably the smallest deep-evolution experiment

### Core

Hosts carry a short heritable defense/recognition program. Parasites carry a short heritable attack/recognition program. Infection requires a partial match; parasites reproduce through successful infection; defenses cost hosts energy or reproductive rate.

### Why it is interesting

The fitness landscape moves every time one population changes. This can generate Red-Queen dynamics, cycling, specialization, extinction, and possibly increasing complexity.

### OWR story candidates

- first defense that breaks a dominant parasite;
- parasite counter-adaptation;
- population crash after a once-good defense becomes common;
- a rare lineage surviving because it was initially worse against the old parasite;
- removing the parasite in a causal fork and measuring whether complexity stops increasing.

### Why it may beat predators

A fixed predator is an environmental pressure. An evolving parasite is a **pressure that remembers the population's past through its own genome**.

That is a stronger engine for historical contingency.

---

## B. Living Landscape — niche construction as evolution's memory

### Core

Organisms can alter one persistent environmental field:
- dig channels;
- compact paths;
- fertilize soil;
- build shelter;
- deposit waste;
- change vegetation.

The environmental modification persists across generations.

### Key question

**When does a behavior initially selected because it helps an individual begin to reshape the selection pressures on its descendants or other species?**

### OWR-specific advantage

A checkpoint stores both the population and the constructed landscape. We can create a counterfactual where descendants inherit the same genes but not the constructed environment, or the environment but not the descendant genes.

That cleanly separates genetic inheritance from ecological inheritance.

---

## C. Village of Inheritance — humanoids without making an LLM the physics engine

This is the strongest village design I found.

### Causal substrate

Each villager has:
- hunger/energy;
- health;
- location;
- household/kin links;
- inventory;
- skill levels;
- beliefs or cultural traits encoded structurally;
- trust/reputation links;
- limited local knowledge.

The village has:
- food production;
- wood/stone;
- storage;
- weather/seasons;
- shelters;
- paths;
- common-pool resources;
- simple trade/gift transfer;
- birth/death or generational turnover.

### Cultural evolution rather than only genetic evolution

Villagers can:
- copy a technique;
- innovate a variation;
- refine an existing technique;
- forget a technique;
- preferentially copy kin, neighbors, successful people, prestigious people, or the majority;
- teach children/apprentices.

Cultural-evolution models show that even very small move sets—innovate, observe, refine, exploit—can generate nontrivial accumulation and convergence/diversity tradeoffs.

Sources:
- PLOS Computational Biology 2024 refinement model: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1012436
- social-network architecture and cumulative culture: https://pmc.ncbi.nlm.nih.gov/articles/PMC7944107/

### Sparse LLM layer

An LLM should only be called when a semantically open event occurs, for example:
- naming a newly invented tool;
- proposing a new norm;
- negotiating a dispute;
- composing a ritual/story that may spread;
- compressing remembered history into a transmitted narrative.

The output becomes a **structured cultural artifact** with an ID and causal effects. It can spread, mutate, disappear, or become institutionalized.

This prevents the simulation from becoming “the LLM already knows what villages do.”

### Emergent roles

Do not predeclare farmer, builder, merchant, priest, leader.

Give tasks different skill/resource requirements. Let repeated behavior produce competence and reputation. A “role” becomes a post-hoc cluster of what someone actually does.

That is much more interesting than asking an LLM to role-play a blacksmith because the prompt says `occupation: blacksmith`.

---

## D. Commons Village — institutions as a phenotype

A village shares a renewable resource such as forest, pasture, fish, or irrigation water.

Agents can harvest individually. Scarcity creates pressure. Agents can copy successful harvest strategies, innovate, sanction, vote, or adopt shared rules.

Agent-based common-pool research already shows that institutions can emerge from local dissatisfaction, copying, innovation, voting, and resource feedback.

Source: https://www.thecommonsjournal.org/article/10.18352/ijc.606/

The OWR version should make **institutions persistent causal objects**, not prose:

```text
rule_id
trigger
allowed / forbidden action
monitoring cost
sanction
membership
adoption history
```

Then the interesting history becomes institutional evolution under ecological stress.

---

## E. Major Transition — when a colony becomes an organism

Start with tiny independently reproducing agents. Let them attach to relatives, share resources, communicate locally, and sometimes reproduce as groups.

The question is whether selection can produce:
- division of labor;
- sterile helper roles;
- programmed cell death;
- group-level reproduction;
- policing of cheaters;
- persistent body patterns.

DISHTINY shows that digital systems can generate these transitions.

For OWR this would stress dynamic topology, lineage semantics, and “what counts as an entity?” in a productive way.

---

## F. Flow-Lenia Aquarium — rent a weird universe

Rather than reproduce Flow-Lenia inside OWR, a future specialist adapter could treat a Flow-Lenia simulation as a backend with:
- world parameters;
- localized species/rule parameters;
- resource fields;
- sparse activity metrics;
- promoted presentation traces.

The payoff is visual: self-organized creatures can look alive before we have authored any recognizable animal body.

The hard part is causal identity: defining an organism, birth, death, lineage, and intervention in a continuous field is less straightforward than with explicit agents.

This is an excellent **later** OWR stress test precisely because its ontology resists our usual object model.

---

# Gate 5 — How to put “pressure on a species” without scripting the answer

The pressure should change consequences, not directly change the desired trait.

Bad:

```text
if drought:
    reward drought_resistance += 10
```

Better:

```text
water availability falls
→ dehydration mortality rises
→ behaviors / physiology that reduce water loss leave more descendants
```

Useful pressure classes:

### Resource pressure
- lower total food;
- different resource distribution;
- new resource with different handling costs;
- pulsed abundance instead of constant abundance.

Likely outcomes: efficiency, migration, specialization, storage, cannibalism, dormancy.

### Climate/abiotic pressure
- temperature field shifts;
- rainfall becomes seasonal;
- habitat fragments;
- movement becomes expensive.

Likely outcomes: range shifts, local adaptation, rescue, extinction, generalist/specialist tradeoffs.

### Biotic pressure
- new predator;
- evolving parasite;
- new competitor;
- mutualist disappears.

Likely outcomes: arms races, mimicry, resistance, niche shifts, cooperation.

### Demographic pressure
- bottleneck;
- founder event;
- skewed sex ratio;
- migration corridor opens/closes.

Likely outcomes: drift, loss of diversity, rapid local differentiation.

### Social/cultural pressure
- seasonal shortage;
- common resource collapse;
- trade route disruption;
- information network fragmentation;
- disease.

Likely outcomes: institutions, storage, migration, network rewiring, cultural loss, specialization.

### Pressure generated by the population itself
This is the most interesting class.

- overharvesting causes scarcity;
- dense populations amplify disease;
- common defenses select for parasites that bypass them;
- roads change migration and trade;
- successful shelters increase local carrying capacity and then resource pressure;
- agriculture changes soil and settlement patterns.

Here the organisms manufacture the next problem.

---

# Gate 6 — How to tell whether something actually evolved

This is essential because a visual “adaptation” can come from at least four different mechanisms.

## Genetic evolution
Heritable genotype frequencies change across generations.

Evidence:
- genotype/allele/trait-frequency shift;
- ancestor/descendant performance difference in a common environment;
- lineage replacement;
- mutation linked to descendant success.

## Phenotypic plasticity
The same genotype expresses a different phenotype under different conditions.

Evidence:
- same genotype changes behavior/physiology without reproduction;
- effect disappears or changes when environment is restored.

## Individual learning
An agent changes its controller/memory during its lifetime.

Evidence:
- learned state changes while inherited genotype remains fixed;
- naive offspring do not inherit the behavior unless learning repeats.

## Cultural evolution
Information passes socially across individuals or generations.

Evidence:
- cultural artifact/trait lineage spreads independently of genetic lineage;
- naive individuals acquire it from others;
- traits mutate or go extinct through transmission dynamics.

An OWR world should log these as different state channels. Otherwise a pretty adaptation story can be causally wrong.

---

# Gate 7 — What OWR should record in an evolutionary world

Do not start by adding a giant “evolution framework” to OWR core. Prove one world first through the existing ordinary-code escape hatch.

The first trial needs a thin lineage/evolution event vocabulary.

## Per organism
- stable organism ID;
- birth tick;
- death tick and cause;
- parent ID(s);
- genotype hash;
- compact genotype fields;
- phenotype summary;
- lifetime reproduction count;
- inherited cultural IDs if any;
- learned-state summary if relevant.

## Per birth
- parent(s);
- offspring;
- mutation/recombination record;
- genotype before/after;
- location;
- inherited resources/culture.

## Population observables
- population size;
- trait distributions;
- genotype diversity;
- lineage diversity;
- lineage age/depth;
- births/deaths;
- resource consumption;
- niche occupancy;
- spatial clustering;
- interaction-network summaries;
- extinction/recovery;
- dominant-lineage turnover;
- rate of persistent novelty.

## Species should initially be post-hoc

Do not define `species = red/blue/green` in WorldSpec unless the experiment needs it.

Cluster lineages after the run using phenotype/genotype/ecological criteria. If stable ecotypes repeatedly appear, that becomes evidence that “species-like” groupings are useful.

## Open-endedness metrics

The open-ended-evolution literature warns that simply running forever or generating endless random novelty is insufficient. Useful metric families include:
- persistent novelty;
- complexity potential;
- ecological interaction potential;
- lineage turnover;
- evolution of evolvability;
- appearance of new entity/interaction classes.

The MODES work explicitly proposes measurements for change, novelty, complexity, and ecological potential.

Source: https://direct.mit.edu/artl/article/25/1/50/2915/

These should be observables, not reward functions.

---

# Gate 8 — How OWR search should interact with natural evolution

OWR's outer search is still extremely useful, but it should search **for evolutionary regimes**, not directly evolve the organisms.

For Pressure Garden, search world-level parameters such as:
- resource patchiness;
- regeneration rate;
- mutation rate;
- seasonal amplitude;
- migration barriers;
- initial population diversity;
- tradeoff strengths;
- pressure timing;
- pressure rate;
- carrying capacity.

Classify outcomes such as:
- immediate extinction;
- evolutionary rescue;
- migration rescue;
- stable polymorphism;
- repeated boom/bust;
- diversification;
- dominance sweep;
- long-term coexistence;
- increasing lineage complexity.

Then canonically rerun representative worlds.

This preserves the difference between:

```text
outer discovery:
find worlds where evolution behaves interestingly

inner evolution:
organisms survive and reproduce because of the world itself
```

That distinction is probably the single most important architectural decision in this report.

---

# Gate 9 — Ideas our Atlas / MAR / current OWR framing is unusually likely to miss

This section is intentionally not “the best practical roadmap.” It is a collection of directions that are interesting because our existing machinery tends to search for explicit, legible, bounded questions inside fixed world ontologies.

## 1. Evolve the mutation operator

Most simulations let trait values evolve while mutation rate and mutation structure remain fixed. Let lineages evolve **how they generate variation**: mutation rate, correlated mutations, recombination, modularity, or developmental noise.

Then ask whether harsh or rapidly changing environments select not just for a phenotype but for **evolvability**.

## 2. Let “species” be something we discover, not something we instantiate

Begin with one population and continuous heritable variation. If groups become reproductively/ecologically distinct, cluster them afterward.

OWR's current semantic clarity makes us want to name entity types early. Resisting that impulse is itself an experiment.

## 3. Make the environment a hereditary channel

Genes pass through parents. Culture passes through minds. But a dam, burrow, road, poisoned pond, compost layer, or depleted forest can pass from one generation to another without being copied into anyone.

Track **ecological inheritance** explicitly.

## 4. Make corpses first-class causal objects

Most simulations delete the dead.

Instead, corpses:
- return nutrients;
- spread disease;
- become shelter;
- attract scavengers;
- obstruct movement;
- create fossil-like environmental memory.

A lineage can therefore change evolution after it is extinct.

## 5. Add parasites before predators

Predator/prey is intuitive, so Atlas is likely to generate it. Parasites are less visually obvious but may create stronger continual adaptation because their success depends on host-specific traits and they evolve on the same timescale.

The Avida literature suggests parasites can promote complexity and evolvability.

## 6. Let the reproductive system evolve

Do not permanently decide:
- sexual vs asexual;
- number of parents;
- mate choice;
- offspring number;
- parental investment;
- mutation rate.

Make at least some of those heritable strategies.

This can generate a transition in the **rules of lineage formation** without changing the global world rules.

## 7. Give organisms useless traits

Our search systems tend to remove dimensions that do not immediately affect an objective.

Biological evolution contains neutral variation and exaptation: a feature can be irrelevant now and useful after the environment changes.

Maintain some cheap neutral or weakly coupled traits so the system has latent variation to recruit later.

## 8. Evolve sensors, not just decisions

Most agent worlds decide what can be sensed, then evolve or learn the policy.

Let sensor range, modality, resolution, directionality, or cost evolve. A lineage may discover that *seeing different information* is more valuable than choosing better actions from the old information.

## 9. Let individuality move up a level

Start with cells/agents whose fitness is individual. Permit stable groups to reproduce or transmit group structure. Watch for division of labor, sterile helpers, policing, or group-level replication.

This directly attacks OWR's assumption that entity identity is obvious.

## 10. Run a historical-contingency farm

Take one checkpoint immediately before a single ordinary birth.

Create hundreds or thousands of branches differing only in one random mutation or one death. Run them for many generations and measure how far macroecological outcomes diverge.

This is OWR-native and much stranger than our normal parameter sweeps: **the parameter of interest is historical accident itself.**

## 11. Resurrect ancestors

Archive genotypes from earlier generations. Thousands of generations later, reintroduce an ancestor.

Possible outcomes:
- ancestor is hopelessly obsolete;
- ancestor exploits a niche descendants abandoned;
- parasites no longer recognize it;
- ecosystem collapses because old strategy bypasses modern dependencies.

Digital “resurrection ecology” is cheap and visually legible.

## 12. Let culture and genes disagree

In a village, a behavior can spread culturally even if it reduces biological reproduction, or enhance reproduction while spreading poorly.

Track two inheritance graphs:
- genetic lineage;
- cultural lineage.

Then ask when they reinforce or fight each other.

## 13. Make information itself a parasite

A cultural trait, rumor, ritual, tool design, or protocol can replicate because it is easy to copy rather than because it benefits its host.

This creates a village-scale analogue of biological parasitism without needing literal disease.

## 14. Hide the target from the discovery system

Run some worlds where the outer discovery evaluator receives only generic activity/diversity measures during search. Do not tell it the final human-interest question.

Afterward inspect the long-lived regimes.

This is a direct control against Atlas/MAR's tendency to generate worlds around a pre-articulated interestingness target.

## 15. Treat extinction as a successful result

A world where every lineage dies after 30,000 generations because it gradually engineers an unsustainable environment may be more interesting than one with permanent diversity.

Do not make “population survives” a promotion prerequisite.

## 16. Evolve the ecology's currencies

Most simulations fix energy, food, or CPU time as the universal resource.

A stranger design lets organisms create new exchangeable intermediates—stored chemicals, constructed shelters, signals, tools, services. New currencies can create new niches without changing WorldSpec.

## 17. Build a world where the most important organism is not mobile

Plants, fungi, biofilms, reefs, or sessile ecosystem engineers can generate richer environmental feedback than another set of moving humanoids.

Biomaker CA is evidence that plant-like growth/reproduction can produce stable and unstable biomes with surprisingly little machinery.

---

# Gate 10 — A village design I would actually want to watch

## “The Valley”

A small population begins with no professions and only a few physical facts.

### Environment
- river/seasonal water;
- forest regrowth;
- wild food;
- temperature/season;
- buildable shelter;
- soil fertility;
- disease risk affected by crowding/water.

### Agents
- 40–100 villagers;
- hunger, health, fatigue;
- local perception;
- kin/social network;
- skills learned by practice;
- inventory;
- simple decision policy;
- cultural repertoire.

### Cultural artifacts
Examples:
- food-storage method;
- path/road convention;
- irrigation technique;
- tool design;
- sanitation practice;
- harvest norm;
- kinship rule;
- trade convention;
- ritual/calendar;
- governance rule.

Artifacts have costs and effects in the causal world. They can be copied, refined, recombined, forgotten, and distorted.

### Sparse LLM events
When an agent attempts `INNOVATE`, OWR can occasionally call an LLM to propose a bounded artifact from available materials and known concepts. The result must compile to structured mechanics before it enters the world.

Example:

```text
proposal: covered grain pit
requires: digging + clay + labor
capacity: 40
spoilage_multiplier: 0.6
construction_cost: ...
```

The LLM supplies semantic invention. OWR supplies causality.

If the invention is useless, it disappears.

### Why this is more interesting than Smallville for us

Smallville's agents can discuss a party because the underlying LLM already knows parties, invitations, romance, schedules, and social norms.

The Valley would ask whether a practice *persists because the simulated world rewards its consequences*.

That is much closer to the type of evidence OWR is designed to preserve.

### Long-run possibilities
- occupational specialization;
- prestige around scarce skills;
- knowledge loss after an expert dies;
- trade networks;
- seasonal migration;
- storage enabling population growth, which creates new scarcity;
- sanitation reducing disease, enabling density, which changes social network structure;
- institutions for common resources;
- technologies whose original purpose is forgotten but which persist culturally;
- conflicting genetic and cultural success.

I would not build this first. I would build Pressure Garden and a parasite world first so the lineage/evolution substrate is real before adding human semantics.

---

# Gate 11 — The three answers to “smallest, coolest simulation?”

There is no single winner because “coolest” can mean three different things.

## Smallest OWR-native experiment with real evolution

**Pressure Garden.**

A few hundred 2D organisms, 6–10 heritable traits, renewable resources, mutation, reproduction, death, and one pressure intervention.

Why: tiny implementation, readable causality, visually obvious, naturally supports OWR checkpoints/forks, and can answer real eco-evolutionary questions immediately.

## Smallest simulation likely to produce deep evolutionary surprise

**Host–parasite coevolution.**

It can be more abstract than Pressure Garden and still produce arms races, cycling, complexity, and evolving evolvability because each population creates the other's moving fitness landscape.

## Highest weirdness / visual emergence per rule

**Flow-Lenia / Particle-Lenia-style artificial life.**

These systems produce life-like forms and ecosystemic behavior from remarkably compact continuous/particle dynamics. They are less straightforward to instrument causally and would be better as a rented specialist substrate than as the first OWR evolution world.

---

# Gate 12 — Concrete OWR experiment ladder

This is not a roadmap commitment. It is a recommended research ladder if we decide to test this after the current release work.

### E0 — evolution kernel sentinel

One 2D population, one resource, mutation, reproduction, lineage logs.

Proof: a heritable trait under cost/benefit pressure changes across generations; common-garden replay confirms genetic rather than purely environmental change.

### E1 — Pressure Garden

Spatial resource heterogeneity + several costly traits.

Proof: at least two distinct evolutionary regimes across seeds/parameters.

### E2 — evolutionary rescue fork

Take one canonical stable ecology and branch gradual vs abrupt environmental deterioration.

Proof: extinction/rescue difference is attributable to the intervention and lineage history.

### E3 — parasite coevolution

Add a second evolving population whose success depends on host phenotype.

Proof: demonstrate frequency-dependent cycling or arms-race dynamics; compare parasite-removal fork.

### E4 — niche construction

One heritable behavior modifies persistent environment.

Proof: split descendant success into genetic vs inherited-environment effects using crossed checkpoint/transplant experiments.

### E5 — culture

Add a second inheritance channel independent of genes.

Proof: cultural lineage and genetic lineage can diverge.

### E6 — village

Only now add humanoid presentation, skills, artifacts, institutions, and sparse LLM invention.

### E7 — ontology stress

Flow-Lenia, major-transition collectives, evolving morphology, or evolving reproduction rules.

This ladder is appealing because each experiment attacks one new causal difficulty instead of starting with “simulate a civilization.”

---

# Provisional decision

The most valuable near-term idea is not “build a realistic ecosystem” or “put 1,000 LLM villagers in a map.”

It is to give OWR a **small endogenous evolutionary substrate** in which organisms reproduce inside the world and the outer search only discovers regimes.

The first world should be Pressure Garden because it is easy to see, cheap to run, easy to fork, and scientifically interpretable. The second should probably be host-parasite coevolution because it introduces a moving endogenous selection pressure and is one of the strongest known mechanisms for sustained evolutionary novelty. The village should come later and should treat culture as a second inheritance system, with LLMs used sparsely to propose semantic artifacts rather than simulate every thought.

The deepest OWR-specific opportunity is causal evolutionary history.

Other ALife systems can show that populations change. OWR can make it unusually easy to ask:

- Which mutation actually rescued this population?
- Would the lineage survive without the landscape its ancestors built?
- Was this adaptation genetic, learned, or cultural?
- Did gradual pressure create an outcome that abrupt pressure would have destroyed?
- What happens if an extinct ancestor is reintroduced?
- Did parasites cause the complexity increase, or would it have happened anyway?
- How much of the final ecology was inevitable versus one historical accident?

Those are not just visually interesting worlds. They are **executable evolutionary histories with counterfactuals**.

---

# Turn 2 attack plan

Turn 2 should be adversarial rather than merely adding more examples.

1. Test whether Pressure Garden is actually minimal or whether even fewer traits/mechanics can create robust diversification without collapsing to one optimum.
2. Challenge the no-fitness-function preference: identify when endogenous selection is insufficient and outer minimal criteria/QD are necessary to avoid dead worlds.
3. Check how often ALife systems advertised as “open-ended” truly sustain novelty versus transient diversity or evaluator-defined novelty.
4. Examine Flow-Lenia's strongest evidence for intrinsic evolutionary dynamics and the limits of organism/lineage identity in a continuous field.
5. Evaluate how much host-parasite complexity results depend on Avida's hand-designed computational-resource structure.
6. Find negative results where ecological complexity, coevolution, or larger populations *failed* to increase complexity.
7. Compare simple parametric genomes, small neural controllers, developmental/genotype-phenotype encodings, and self-replicating code for OWR's first trial.
8. Determine the minimum telemetry needed to distinguish adaptation, plasticity, learning, drift, and cultural transmission.
9. Stress OWR compatibility: dynamic entity counts, trace volume, lineage storage, checkpoint cost, and whether world-family identity survives evolving morphology/controllers.
10. Challenge the proposed hybrid village design using the strongest recent critiques and successful alternatives in LLM social simulation.
11. Search for existing open-source substrates we could rent rather than reproduce, especially Flow-Lenia, Biomaker CA, Avida, Polyworld descendants, Neural MMO, MABE/DISHTINY, and JAX-based ALife systems.
12. Convert the best surviving designs into a small ranked set: immediate OWR-native, specialist-backend candidate, village candidate, and deliberately architecture-breaking candidate.

---

# Primary sources / references

## OWR authority
- `Mattmack2/orrery-world-runtime/README.md`
- `Mattmack2/orrery-world-runtime/DESIGN.md`
- `Mattmack2/orrery-world-runtime/IMPLEMENTATION_PLAN.md`

## Artificial life and digital evolution
- Flow-Lenia, Artificial Life 2025: https://direct.mit.edu/artl/article/31/2/228/130572/
- Flow-Lenia / DeepMind: https://deepmind.google/research/publications/106327/
- Flow-Lenia project: https://sites.google.com/view/flowlenia/
- Particle Lenia: https://google-research.github.io/self-organising-systems/particle-lenia/
- Biomaker CA: https://arxiv.org/abs/2307.09320
- Leniabreeder / QD: https://leniabreeder.github.io/
- ASAL: https://sakana.ai/asal/
- Karl Sims virtual creatures: https://www.karlsims.com/papers/siggraph94.pdf
- Avida digital ecology review: https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2021.750779/full
- Tierra/digital-evolution surprises: https://direct.mit.edu/artl/article/26/2/274/93255/
- Avida coevolution and evolvability: https://pmc.ncbi.nlm.nih.gov/articles/PMC4267771/
- Turing parasites minimal model: https://journals.aps.org/pre/abstract/10.1103/PhysRevE.108.044407
- DISHTINY multicellular life histories: https://arxiv.org/abs/2104.10081
- DISHTINY novelty/complexity case study: https://arxiv.org/abs/2405.07241
- MODES open-ended dynamics metrics: https://direct.mit.edu/artl/article/25/1/50/2915/
- 2024 OEE special issue intro: https://direct.mit.edu/artl/article/30/3/300/123431/

## Ecology / evolution mechanisms
- Frequency-dependent selection meta-analysis: https://onlinelibrary.wiley.com/doi/10.1111/ele.14477
- Eco-evolutionary dynamics in changing environments: https://academic.oup.com/jeb/article/37/6/579/7701271
- Evolutionary rescue and diversity: https://academic.oup.com/evolut/article/78/4/768/7465028
- Niche construction overview: https://oecs.mit.edu/pub/xyn6l8i3/release/1/
- Geo-evolutionary feedbacks: https://www.sciencedirect.com/science/article/pii/S0169534724001198
- Genotype-phenotype/evolvability perspective 2026: https://academic.oup.com/evolut/article/80/2/301/8340360

## Social / cultural simulation
- Sugarscape / Growing Artificial Societies: https://direct.mit.edu/books/monograph/2503/
- Generative Agents / Smallville: https://arxiv.org/abs/2304.03442
- Project Sid: https://arxiv.org/abs/2411.00114
- LLM social simulation validation review: https://pmc.ncbi.nlm.nih.gov/articles/PMC12627210/
- “Too human to model”: https://www.nature.com/articles/s44260-026-00075-1
- Cumulative culture + refinement: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1012436
- Social network architecture and cumulative culture: https://pmc.ncbi.nlm.nih.gov/articles/PMC7944107/
- Commons institutions ABM: https://www.thecommonsjournal.org/article/10.18352/ijc.606/
- Neural MMO: https://openai.com/index/neural-mmo/
