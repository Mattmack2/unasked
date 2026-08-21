# Build the pressure, not the outcome

The smallest evolutionary simulation worth building may need only a few hundred agents and two kinds of food.

Give each organism a small inherited genome, finite energy, reproduction with mutation, and death. Make efficient use of food A reduce efficiency on food B. Make faster movement consume more energy. Make better sensing cost something. Do not give the organisms a fitness score.

Fitness is what happens: some organisms leave more descendants than others.

This is enough to create a nontrivial possibility of diversification because the organisms change the environment that selects them. A common specialist depletes the resource it exploits best, increasing the relative opportunity available to rarer strategies. In a classic Avida experiment, a diverse pool of limiting resources produced adaptive radiation and maintained distinct phenotypic and phylogenetic groups even in a spatially homogeneous environment. Species richness peaked at intermediate productivity. [Chow et al., Science 2004](https://pubmed.ncbi.nlm.nih.gov/15232105/)

That result made the first design smaller. Turn 1 assumed we would probably want spatial heterogeneity and six to ten evolvable traits. Neither is necessary to establish the mechanism. Start with roughly four heritable dimensions: resource specialization, movement investment, sensing investment, and offspring investment. Add terrain, seasons, predators and richer controllers only after the simpler world has revealed what it can and cannot produce.

## What “natural evolution” means in a simulation

There are three different processes that are easy to confuse:

- an organism can **learn** during its lifetime;
- an outer optimizer can **search** across creature or world designs;
- a population can **evolve** because offspring inherit variation and some lineages reproduce more successfully than others.

OWR already does the second well. Its M05 search layer can fan out parameter and seed combinations, retain sparse results, promote candidates and rerun them canonically. That is useful for finding worlds in which evolution behaves differently, but it is not itself Darwinian evolution inside a world.

For the first ecology, the world program should remain fixed while genomes and populations change inside it. OWR's existing `entity_map` state shape is compatible with that distinction: the schema of an organism can stay fixed while runtime entity IDs and their field values vary. Birth, death and inheritance would still need a new behavior implementation; they are not current OWR features.

The first target should also **not** be called open-ended evolution. A four-parameter genome has a finite adjacent possible. Artificial-life systems with much richer substrates still struggle to sustain novelty indefinitely. Large-scale Lenia evolution, for example, produced an initial period of diversity and creativity and then tended toward domination by fast-expanding forms. Its authors pointed to environmental design, energy constraints and mass conservation as possible missing ingredients. [Chan 2023](https://arxiv.org/abs/2304.05639)

Flow-Lenia adds mass conservation and allows localized rule parameters to coexist inside one continuous world, making it a much more interesting substrate for intrinsic evolution. It remains a reason to rent a specialist artificial-life system later, not evidence that indefinite complexity comes for free. [Flow-Lenia](https://arxiv.org/abs/2212.07906)

A more useful first objective is **bounded but non-scripted eco-evolutionary emergence**: selective sweeps, stable coexistence, adaptive radiation, cycling, bottlenecks, rescue and extinction.

## The first OWR experiment should be evolutionary rescue

Let the tiny ecosystem evolve until it reaches a persistent regime. Checkpoint the exact population and environment. Then make several causal branches from the same history:

```text
A — no environmental change
B — abrupt resource loss
C — the same total resource loss introduced gradually
```

Evolutionary rescue is the case where adaptation prevents extinction under environmental deterioration. A 2024 experiment with *Pseudomonas fluorescens* found that abrupt versus gradual antibiotic deterioration produced different rescue outcomes: fast deterioration caused greater long-term fitness and diversity losses, and later adaptation did not fully restore the lost ecological diversity. [Evolution 2024](https://academic.oup.com/evolut/article/78/4/768/7465028)

OWR can turn that experimental logic into a reusable computational primitive. After a successful rescue, branch again:

- put the ancestor into the descendant's stressed environment;
- put the descendant back into the ancestral environment;
- restore history just before the mutation that founded the successful rescue lineage and suppress only that mutation;
- resurrect an extinct lineage in the later ecosystem;
- preserve descendant genes but restore the ancestral environment.

A normal ALife viewer can show that a lineage took over. A causal-history runtime can ask whether that lineage was necessary, whether another lineage would have rescued the population, and which part of the adaptation resides in the genome versus the environment.

This may be OWR's strongest contribution to artificial life. It does not need to outperform specialized evolutionary simulators at raw throughput. It needs to make **counterfactual evolutionary history** unusually easy to inspect.

## Coevolution is useful because the pressure can evolve

A parasite is more interesting than a fixed predator because its attack strategy can change in response to the host's defenses. The host then changes in response to the parasite. Neither side sees a stationary fitness landscape.

But coevolution does not imply an endless complexity arms race. A review of 219 host–parasite models found outcomes ranging from directional arms races to Red-Queen cycling, stable polymorphism and stable monomorphism. Population dynamics and the genetic details of infection can change the qualitative regime, and escalating offense and defense eventually encounter costs and constraints. [Buckingham & Ashby 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9305583/)

That correction makes a later **Parasite Pond** more useful. Its purpose is not to manufacture complexity. It is to let selection pressure become endogenous.

OWR could checkpoint host and parasite populations together, then freeze evolution on one side, cross historical host and parasite populations, or remove a defense cost. A host from generation 10,000 can be tested against parasites from generations 5,000, 10,000 and 15,000. The pattern distinguishes one-way escalation from cycling much better than watching one number rise.

## The environment can become another inheritance system

Genes are not the only thing descendants inherit.

Organisms can alter soil, paths, shelters, nutrient distributions, waste, toxins or resource patches. Later generations then inherit an environment partly produced by earlier generations. This is niche construction or ecological inheritance.

That suggests a **Living Landscape** world in which environmental modifications persist after their creators die. The useful OWR experiment is an inheritance ablation:

```text
descendant genes + descendant environment
descendant genes + ancestral environment
ancestral genes   + descendant environment
ancestral genes   + ancestral environment
```

The four branches separate genetic adaptation from adaptation carried by a constructed environment.

Corpses should probably persist too. A dead lineage can continue to affect nutrients, disease, shelter or obstacles. Extinction then stops reproduction without erasing causal influence. The result is a kind of **ghost ecology**: the current fitness landscape contains contributions from organisms that no longer exist.

## A stranger small simulation: let individuality emerge

One of the strongest Turn 2 findings came from research on **ecological scaffolding**.

Black, Bourrat and Rainey showed that a minimal ecology with patchy resources and between-patch dispersal can make collectives of cells acquire Darwinian-like properties. Under particular relationships between resource use and dispersal timing, and especially when new patches are founded by single cells, collective-level selection can favor reproductive division of labor. [Nature Ecology & Evolution 2020](https://www.nature.com/articles/s41559-019-1086-9)

This suggests a second small OWR world that is arguably stranger than humanoid villages:

```text
many finite resource islands
simple reproducing cells
local resource depletion
periodic dispersal / founding events
no explicit group organism
```

Sweep the timing of dispersal, resource exhaustion and reproduction. Then analyze whether patches start behaving like higher-level reproductive units.

The important design choice is **not to declare the group as the organism**. Keep cells as the simulator's entities. Infer afterward whether stable groups have developed heredity, reproductive specialization or causal dependence strong enough that the scientifically interesting individual is now the collective.

That reverses a normal simulation assumption: the simulator does not have to know in advance what the organism is.

## Villages should come later, and LLMs should not be the physics

A village of 40–100 humanoids can eventually be much richer than a pond of dots, but using an LLM as every villager's brain makes it difficult to tell what actually emerged from the simulation.

A 2026 systematic review of 35 generative agent-based-model studies found validation to be the central unresolved problem. LLM-driven agents can appear socially plausible while remaining hard to calibrate and interpret. The review specifically warns that a familiar-looking social pattern can be reproduced from the model's training data rather than generated by the simulated mechanism. [Larooij & Törnberg 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12627210/)

A useful OWR village should therefore have explicit causal metabolism: food, material stocks, locations, seasons, health, mortality, production, maintenance, kinship, storage, trade, practice and skill acquisition.

Do not create `farmer`, `builder`, `merchant`, `leader` and `priest` entity types. Let repeated work create skill, dependence and reputation. If one person becomes the settlement's builder, that should be an observation about history.

LLMs can still add something difficult to obtain from fixed rules. Use them rarely as a **cultural mutation operator**. An agent might propose a new tool, bargaining rule, ritual or story. Convert that proposal into a structured artifact with costs, prerequisites and effects. Then return to ordinary simulation. The invention survives only if people copy it or if it changes outcomes enough to persist.

Culture then becomes a second evolving lineage system. A cultural practice can spread independently of genes. It can even become parasitic: a practice that is exceptionally easy to transmit might spread while reducing the material or reproductive success of the people carrying it.

## Experiments our current discovery machinery is unusually likely to miss

These are deliberately not another list of attractive world themes. Each changes an assumption that OWR/MAR/Atlas normally wants fixed.

**Evolve evolvability.** Mutation rate or locus-specific mutability can itself become heritable. This is biologically real enough to be worth taking seriously: a 2025 bacterial experiment evolved localized hypermutation because lineages needed to switch repeatedly between phenotypic states. [Science 2025](https://pubmed.ncbi.nlm.nih.gov/39977489/) Do this later; observe future adaptive capacity rather than rewarding “evolvability” directly.

**Do not define species.** Start with one asexual population. Cluster genotypes, phenotypes and resource strategies after the run. Call the groups ecotypes unless a later reproductive model earns a stronger concept.

**Find exaptations in the lineage record.** Search for a mutation that was neutral or harmful when it arose but became necessary after later environmental change. Remove it from the historical branch and see which future possibilities disappear. Digital evolution has already shown that complex features can depend on contingent chains of earlier mutations rather than one monotonic climb. [Lenski et al. 2003](https://www.nature.com/articles/nature01568)

**Let organisms evolve what they can sense.** Allocate a finite sensory budget among food, toxins, neighbors, light or signals. Evolution changes the information available to behavior, not only the policy that consumes it.

**Search without a story target.** Reject only simulations that are dead, broken or nearly static. Keep worlds with sustained lineage turnover, ecological activity or unexplained multi-scale structure, then inspect them. This deliberately removes the question-generation system from the inner selection loop.

**Change the physics after evolution.** Transplant an evolved ecology into a branch with different resource diffusion, connectivity, season timing or conservation rules. Which traits were general adaptations, and which were an evolutionary overfit to one world's regularities?

**Let the unit of individuality move.** Infer candidate organisms from co-reproduction, resource sharing and lineage covariance rather than assuming the WorldSpec entity is the final unit of selection.

## What to build first

The research now gives a tighter ladder:

```text
E0  evolution kernel
E1  two-resource Pressure Garden
E2  abrupt-vs-gradual evolutionary rescue
E3  persistent environmental modification / ecological inheritance
E4  host–parasite coevolution
E5  small evolvable behavioral controller and sensor allocation
E6  evolvable mutation/reproduction strategy
E7  ecological-scaffolding islands / emergent individuality
E8  explicit causal village + cultural inheritance
E9  specialist substrates such as Flow-Lenia, Aevol/Avida or DISHTINY
```

The first implementation should be pure semantic simulation rather than Box2D, Genesis or Madrona. OWR already has deterministic semantic behaviors, dynamic entity-map-shaped state and an accepted sparse outer-search plane. A new evolutionary behavior is still required, and long inner evolutionary runs have a different performance profile from M05's many-run parameter sweeps. Acceleration should be earned by profiling rather than designed in from the start.

Current M06 work also gives no reason to make the experiment depend on Madrona. The pending OWR architecture replan treats the external discovery seam as the durable asset and Madrona as an optional native-Linux accelerator rather than the product itself.

The minimal interesting world is therefore not a tiny civilization. It is a population simple enough that every pressure is understandable, but rich enough that the organisms alter the conditions of one another's success. Once that works, villages become much more interesting because heredity, ecology, culture and history can all be layered on top without asking an LLM to fake the emergence for us.
