# Turn 2 — Missing lead paradox validation

**Date:** 2026-08-21  
**Turn 1:** `research/full/2026-08-21-missing-lead-paradox-turn1.md`  
**Candidate:** `C-VT-005`  
**Lane:** VOCABULARY TRAPDOOR  
**Primary domain:** PHYSICAL WORLD & SPACE

## Verdict

```yaml
verdict: SURVIVES_WITH_CORRECTIONS
confidence_change: lower on hidden-reservoir necessity; unchanged on mineral-physics result
novelty_status: KNOWN FIELD
material_corrections:
  - The 2026 Pb-S paper does not detect a hidden mantle reservoir and does not close Earth's Pb isotope mass balance. It predicts a physically plausible host using first-principles structure and melting calculations.
  - The paper explicitly works under the assumption of a chondritic bulk silicate Earth. That assumption is load-bearing.
  - A 2023 global Pb-isotope reassessment argues that differentiated evolution paths, source mixing, gravitational differentiation and subduction-led remixing can substantially reframe the first Pb paradox. A single large hidden reservoir is therefore not uniquely required by current data.
  - Extremely unradiogenic Pb in mantle peridotites and sulfide inclusions is direct evidence that poorly sampled mantle components exist, but not evidence that they are volumetrically large enough to balance the whole silicate Earth.
  - Older core-sequestration arguments remain contested. A 2008 partitioning study argued Pb is not siderophile/chalcophile enough under its tested conditions to solve the problem by pumping Pb into the core; later work has defended stronger core partitioning under different conditions.
```

## Re-anchored answer

The classical first Pb paradox is real under the standard chondritic/simple-evolution framing: most accessible terrestrial Pb is more radiogenic than that model predicts. Direct samples also show that unusually unradiogenic Pb can survive in mantle residues and sulfides that ordinary basaltic melting undersamples.

The February 2026 result adds a useful mechanism. First-principles calculations predict Pb-S phases whose pressure-dependent stability could isolate Pb from U and Th for geological time and allow limited remobilization. But the result is conditional, not a discovery of the missing reservoir.

The strongest correction is that the *need* for one large hidden reservoir is model-dependent. A 2023 Earth-Science Reviews synthesis used modern global Pb datasets to build differentiated evolution paths for multiple bulk-silicate-Earth components and argued that source mixing, gravitational differentiation and subduction-led remixing can move much of the observed data to the radiogenic side of the geochron without treating every sample as evidence for one complementary hidden vault.

## Claim ledger

### 1. Accessible terrestrial Pb is too radiogenic under the classical chondritic model
**Status:** survives, with model dependence made explicit.

The 2023 global review still describes this as the first Pb paradox: present-day terrestrial reservoirs generally plot more radiogenically than carbonaceous-chondrite expectations. Its contribution is not to deny the observation but to change how the imbalance is interpreted.

Source: https://www.sciencedirect.com/science/article/pii/S0012825223001721

### 2. Unradiogenic mantle Pb exists
**Status:** survives.

Horoman peridotites contain exceptionally unradiogenic Pb and were interpreted as ancient depleted mantle domains that escaped complete homogenization. Abyssal peridotite sulfides likewise preserve very unradiogenic Pb; one 2012 Nature Geoscience paper argued that shielding inside silicates or residence in refractory mantle could keep this component from strongly entering normal oceanic basalts.

Sources:
- https://www.nature.com/articles/ngeo363
- https://www.nature.com/articles/ngeo1531

### 3. The core is the accepted destination for the missing Pb
**Status:** does not survive.

A 2008 Nature partitioning experiment concluded that Pb was not siderophile or chalcophile enough under its tested conditions to explain the mantle's high U/Pb ratio through core sequestration alone, and proposed volatile loss or a hidden deep-mantle reservoir as alternatives. Other later models have defended substantial core partitioning. Core sequestration is therefore one branch of the genealogy, not a settled answer.

Source: https://www.nature.com/articles/nature07375

### 4. The 2026 paper found the hidden reservoir
**Status:** rejected.

It used first-principles structural prediction and melting-point calculations. PbS is predicted to remain refractory through mantle conditions, while PbS2 and PbS3 have different pressure-dependent stability and melting behavior. The paper explicitly says specific deep-Earth Pb-hosting phases have not been conclusively identified and investigates the hidden-reservoir mechanism **under the assumption of chondritic BSE**.

Source: https://www.nature.com/articles/s41467-026-69772-8

### 5. The 2026 mechanism is irrelevant because the paradox has been solved away
**Status:** also rejected.

The 2023 framework reduces the need for a simple global complementary reservoir, but it does not make Pb storage physics irrelevant. It still treats Earth's Pb evolution as incompletely constrained, and actual unradiogenic mantle components exist. Pressure-stable Pb-S phases could be one mechanism contributing to long-term heterogeneity even if they are not *the* missing reservoir.

## What changed from Turn 1

Turn 1 centered the question on whether Pb-S phases might be the missing physical reservoir. Turn 2 found that this formulation gives the 2026 paper too much authority over the premise.

The better conclusion is:

> **Isotope bookkeeping revealed that simple Earth models were incomplete. The 2026 paper adds a credible mineral-physics mechanism for one hidden-reservoir branch, while a 2023 global synthesis argues that more realistic differentiation and remixing may reduce how much hidden lead needs explaining in the first place.**

That is a better example of how planetary inference works: an observational imbalance, direct but sparse mantle clues, competing global histories, and a new mechanism can all be true at once.

## Frozen semantic bank

```yaml
question: Why is accessible terrestrial lead too radiogenic under the classical chondritic model, and what does the 2026 Pb-S result actually add?
validated_answer: The first Pb paradox is an isotope imbalance produced by comparing accessible terrestrial Pb with a simple chondritic evolution model. Unradiogenic Pb exists in poorly sampled mantle residues. A 2026 computational study predicts pressure-stable Pb-S phases that could store such Pb for geological time, but it does not detect the reservoir or prove one large hidden reservoir is required.
mental_model_delta: Isotope mass balance can reveal that a planetary model is incomplete without uniquely identifying what is missing. New mineral physics can make one solution physically plausible while better global evolution models simultaneously weaken the need for that solution.
tangible_examples:
  - 2008 Horoman peridotites with exceptionally unradiogenic Pb.
  - 2012 abyssal peridotite sulfides preserving unradiogenic Pb that ordinary basaltic melting undersamples.
  - 2026 first-principles prediction that PbS remains refractory through deep-mantle conditions.
unusual_or_specific_details:
  - The 2026 paper explicitly assumes a chondritic bulk silicate Earth.
  - Specific Pb-hosting mineral phases in the deep Earth have not been conclusively identified.
  - The 2023 global framework places much of the accessible data on differentiated Pb-evolution paths rather than interpreting every radiogenic sample as direct mass-balance evidence for one hidden reservoir.
new_vocabulary:
  - first Pb paradox
  - geochron
  - radiogenic lead
  - unradiogenic lead
  - bulk silicate Earth
  - HIMU
  - chalcophile
strongest_caveat: The size and even necessity of a single hidden unradiogenic reservoir depend on assumptions about Earth's starting composition and differentiation history. The 2026 Pb-S phases are computational predictions, not a sampled lower-mantle reservoir.
what_is_established:
  - U and Th decay generate radiogenic Pb isotopes
  - classical Pb isotope systematics show a first Pb paradox
  - exceptionally unradiogenic Pb occurs in some mantle peridotites and sulfides
what_is_inferred:
  - that pressure-stable Pb-S phases constitute a globally important reservoir
  - that their abundance closes the Pb isotope budget
  - that one hidden reservoir is required under all modern Pb-evolution models
what_changed_in_turn2:
  - shifted from 'candidate solution to a missing reservoir' to 'one physical mechanism inside a model-dependent family of explanations'
  - made the chondritic-BSE assumption explicit
  - elevated the 2023 dynamic-Earth framework as the strongest counterargument
what_not_to_claim:
  - scientists found Earth's missing lead
  - PbS has been directly identified as a large lower-mantle reservoir
  - the missing lead is definitely in the mantle rather than the core or lost during early Earth evolution
  - the classical paradox has one accepted solution
```
