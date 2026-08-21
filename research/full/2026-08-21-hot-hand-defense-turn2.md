# Turn 2 — Hot-hand defense validation

**Date:** 2026-08-21  
**Turn 1:** `research/full/2026-08-21-hot-hand-defense-turn1.md`  
**Candidate:** `C-BR-006`  
**Lane:** BRIDGE  
**Primary domain:** SPORT & COMPETITION  
**Story grammar:** HIDDEN MECHANISM

## Verdict

```yaml
verdict: SURVIVES_WITH_CORRECTIONS
confidence_change: none
novelty_status: KNOWN FIELD
material_corrections:
  - The 2026 immediate-shot analysis does not literally show defenders moving closer after a make. Defender distance rises after both makes and misses as possessions reorganize; it rises less after a make than after a miss. The more direct tightening pattern appears in cumulative recent-success models.
  - The approximately three-to-five-shot memory window is an interpretation, not a directly identified cognitive memory span. Longer-window models fit better by AIC, and the authors themselves raise overfitting concerns before preferring a shorter effective horizon.
  - The strongest 2026 evidence is localized to closest-defender distance. Team-level average distance and defensive-hull results are weaker or statistically mixed.
  - The data cover only October 2015 through January 2016 because public optical tracking ends there. The result should not be silently generalized to the modern NBA.
  - The regressions control shooter identity, period, time remaining, shot distance and shot clock, but not defender identity, fatigue, communication, play type, screening action or matchup changes. The paper itself identifies several of these as future-work limitations.
  - Defensive adaptation does not establish a latent hot-hand effect. Modern results remain method-dependent: some difficulty-adjusted studies find a small positive effect, while a 2025/26 NBA study finds a reverse or cold-hand relationship.
important_omissions_added:
  - 2014 optical-tracking work already showed that players outperforming recent expectation face tighter defense, shoot farther away and take harder shots. The 2026 paper refines the response pattern rather than discovering strategic endogeneity.
  - A 2026 American Statistician state-space study finds no team momentum when offense and defense are modeled separately but a weak effect when modeled jointly, independently supporting the broader point that competitive performance can be coupled across opponents.
```

## Re-anchored question

**When a basketball player starts making shots, how much does the defense change the environment of the next shot—and does that mean the classic hot-hand question has partly been measured as though an adaptive opponent were not there?**

## Claim ledger

### 1. Basketball defenses react to recent shooting success
**Status:** survives.

Csapo and Raab (2014) found that defensive pressure and shot difficulty rose during hot streaks. Bocskocsky, Ezekowitz and Stein (2014) used more than 83,000 optical-tracking shots and reported that players outperforming recent expectation faced tighter defense, shot from farther away, took their team's next shot more often and attempted more difficult shots.

Sources:
- https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0114184
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2481494

### 2. The 2026 tracking paper finds asymmetric defensive response
**Status:** survives with wording correction.

Kondur and Shen use public NBA movement data from October 2015 through January 2016. Their regressions include shooter fixed effects plus period, seconds remaining, shot distance and shot-clock controls.

In the immediate-outcome model, defender distance increases after both makes and misses, plausibly because coverage reorganizes between possessions. The increase is smaller after makes than misses, so the result is relative tightening after success rather than literal monotonic closing immediately after every make.

Source: https://journals.sagepub.com/doi/10.1177/22150218261458601

### 3. More success over a recent short window predicts a closer primary defender
**Status:** survives; cognitive interpretation narrowed.

For a five-shot categorical model, cumulative made shots have a significant relationship with closest-defender distance (reported F-test p=0.002) and the fitted relationship is monotonically decreasing. Team-level metrics are less clean.

The paper describes the effective horizon as roughly three to five shots. This is not a direct measurement of defenders remembering exactly that many attempts. Longer-window models can fit better, and the authors explicitly note possible overfitting and use behavioral plausibility plus the shape of fitted effects to motivate the shorter interpretation.

### 4. Long hot streaks produce unlimited defensive escalation
**Status:** rejected.

Closest-defender response tightens over short streaks and then stabilizes or moves back toward baseline at longer streaks. Extreme streaks are rare, so tail estimates are uncertain.

### 5. The 2026 study isolates a psychological belief-updating mechanism
**Status:** too strong.

Spatial response is observable; its cognitive cause is not. The authors acknowledge that their metrics cannot distinguish conscious strategy from automatic or habitual response and that defender identity, fatigue and communication remain unmodeled.

### 6. Strategic adaptation proves the hot hand exists
**Status:** rejected.

Miller and Sanjurjo's finite-sample correction weakened a major statistical argument against hot-hand effects, especially in controlled shooting. It did not establish a universal in-game effect.

Game-data results remain mixed. Bocskocsky et al. report roughly 1.2–2.4 percentage-point increases after controlling shot difficulty. Kondur and Shen's separate shot-difficulty paper, using 2014–15 NBA shot logs, reports the opposite: prior difficulty-adjusted success predicts worse subsequent performance across most specifications. The existence and size of a latent in-game hot state therefore remain method-dependent.

Sources:
- https://onlinelibrary.wiley.com/doi/abs/10.3982/ECTA14943
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2481494
- https://journals.sagepub.com/doi/10.1177/17479541251374788

### 7. Modeling offense and defense jointly can expose structure missed when they are separated
**Status:** supported at team level by a separate 2026 result.

Winkelmann and Michels use NBA play-by-play data from 2015/16–2018/19 in a state-space model. They find no momentum effect when offense and defense are modeled independently, but a weak effect in a joint model. This is not a replication of the individual hot-hand result, but it independently supports the causal-system point: competitive performance can depend on feedback between opponents.

Source: https://www.tandfonline.com/doi/10.1080/00031305.2025.2595980

## What Turn 2 changed

Turn 1 framed the 2026 result as evidence that recent success makes a defender close down the shooter. Turn 2 found that the immediate-shot coefficient is subtler, the short-memory interpretation is partly model judgment, and the team-wide response is weaker than the closest-defender result.

The broader conclusion became stronger because it does not depend on those psychological interpretations. Multiple datasets already show that recent success changes defense and shot selection. That makes NBA shot sequences endogenous even if the shooter's latent ability never changes.

## Semantic bank

```yaml
question: When a basketball player starts making shots, how much does the defense change the next-shot environment, and what does that do to hot-hand measurement?
validated_answer: Recent shooting success is associated with measurable changes in defensive pressure and shot environment. The strongest current tracking evidence is localized to the closest defender and short recent-success windows. This strategic response means observed post-streak shooting cannot be treated as a clean readout of shooter state. It does not prove that a latent hot hand exists.
mental_model_delta: In a competitive system, performance changes the environment that produces the next performance measurement. A shooting streak is therefore generated by coupled shooter, defender, shot-selection and play-calling processes rather than a fixed sequence of independent attempts.
why_interesting: The hot-hand debate is often posed as a question about serial correlation in a shooter's outcomes. Opponent adaptation makes that incomplete even before deciding whether the shooter's underlying state changes.
tangible_examples:
  - 2014 optical tracking: outperforming shooters faced tighter defense and attempted harder shots.
  - 2026 tracking: cumulative success over a five-shot model predicts smaller closest-defender distance; team-level metrics are weaker.
  - 2026 state-space work: weak team momentum appears only when offense and defense are modeled jointly.
unusual_or_specific_details:
  - The 2026 tracking dataset is only October 2015 through January 2016 because public movement data ended midseason.
  - Immediate defender distance rises after both makes and misses; the make-vs-miss result is relative asymmetry, not literal closing after each make.
  - Longer recent-shot windows fit better by AIC, but the authors suspect aggregation/overfitting and interpret the effective response horizon as shorter.
new_vocabulary:
  - streak selection bias
  - endogenous opponent response
  - shot difficulty
  - player tracking
  - state-space momentum model
strongest_caveat: Evidence that defenses react to success is stronger than evidence that the shooter's latent make probability rises after success. The two claims must remain separate.
what_is_established:
  - defensive pressure and shot selection can change with recent shooting performance
  - the classic finite-sequence hot-hand test has a known selection bias
  - recent tracking data show closest-defender behavior covaries with recent success after several contextual controls
what_is_inferred:
  - that defenders have a specific three-to-five-shot cognitive memory
  - that the observed response is consciously caused by hot-hand belief
  - that opponent response masks a specific true latent hot-hand effect
what_changed_in_turn2:
  - corrected immediate make/miss interpretation to relative asymmetry
  - demoted the short-memory claim from direct finding to model-supported interpretation
  - localized the strongest evidence to the closest defender
  - added newer evidence that latent hot-hand estimates still disagree even after difficulty adjustment
what_not_to_claim:
  - defenders close after every made shot
  - defenders consciously count the previous five shots
  - the 2026 data describe current NBA tactics
  - defensive adaptation proves the hot hand
  - Miller and Sanjurjo settled the in-game NBA debate
```

## Verdict rationale

The candidate survives because the robust claim is narrower than the psychology framing and more generally useful: **when success changes an opponent's behavior, later performance is measured in an environment partly caused by earlier performance.** Basketball provides unusually direct spatial evidence for that feedback.