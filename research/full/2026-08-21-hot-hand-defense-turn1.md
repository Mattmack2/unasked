# Turn 1 — A hot hand changes the defense, which changes what a hot hand looks like

**Status:** TURN 1 FROZEN — NOT YET VALIDATED OR PUBLISHED  
**Date:** 2026-08-21  
**Candidate:** C-BR-006  
**Lane:** BRIDGE  
**Primary domain:** SPORT & COMPETITION  
**Story grammar:** HIDDEN MECHANISM  
**Provisional evidence status:** ESTABLISHED DEBATE + CURRENT PLAYER-TRACKING RESULT  
**Provisional discovery status:** KNOWN FIELD

## Research question

**When a basketball player starts making shots, how much does the defense change the environment of the next shot—and does that mean the classic hot-hand question has partly been measured as though an adaptive opponent were not there?**

---

# 0. Candidate frontier

| ID | Lane | Domain | Candidate | Consequence | Strongest reason to reject |
|---|---|---|---|---|---|
| C01 | BRIDGE | SPORT & COMPETITION | Is the hot-hand problem partly an opponent-response problem? | Turns streak measurement into an endogenous strategic system rather than a sequence of independent attempts | Must not confuse defender response with proof the hot hand itself exists |
| C02 | FAILED DREAM | SOCIETY & INSTITUTIONS | Why are tontine-like longevity pools being reconsidered after centuries of stigma? | Old risk-sharing mechanism may become useful under modern governance and administration | Easy to drift into personal financial advice |
| C03 | VOCABULARY TRAPDOOR | CULTURE & CRAFT | How can a spoken language be transformed into whistles and remain linguistically open-ended? | Changes the intuitive model of which parts of speech actually carry language | Evergreen rather than current; may be more fascinating than consequential |
| C04 | WEAK SIGNAL | HUMAN PAST | Are quantitative microscopic marks becoming a practical proxy for technologies that rarely survive archaeologically? | Indirect traces could recover everyday technological transitions missed by artifact inventories | Needs a sharply bounded case rather than a method survey |
| C05 | EXPECTATION VIOLATION | EARTH & ENVIRONMENT | Is darkness becoming an actively managed habitat resource rather than merely absence of lighting? | Recasts lighting design as ecological resource allocation | Risks collapsing into familiar light-pollution coverage |
| C06 | MEMORY-BLIND | PHYSICAL WORLD & SPACE | Why do some deep-sea glass sponges build silica skeletons with optical and mechanical properties resembling engineered composites? | Could reveal biological design principles for brittle materials | Biomimicry consequence may be weaker than the intrinsic novelty |

C01 was selected. The domain is new to the published feed, but the stronger reason is conceptual: competitive performance is endogenous. A successful action can change the opponent's next action, which changes the distribution from which later performance is observed.

---

# 1. The original hot-hand result

The canonical 1985 paper by Gilovich, Vallone and Tversky asked whether a basketball player's chance of making a shot rises after previous makes. Their analyses of Philadelphia 76ers field goals, Boston Celtics free throws and a Cornell shooting experiment found no positive serial dependence strong enough to support the popular belief. They interpreted hot-hand belief as a misperception of randomness and the law of small numbers.

Source: https://www.sciencedirect.com/science/article/pii/0010028585900106

That result became a standard example in behavioral science.

The problem is that basketball attempts are not coin flips. Shot location, defensive pressure, fatigue, play selection, score, clock and tactical response can all change between attempts.

---

# 2. The statistical correction

Miller and Sanjurjo's 2018 *Econometrica* paper identified **streak selection bias** in a common method used to compare shooting after runs of makes with shooting after runs of misses.

In finite sequences, conditioning on a preceding streak can itself bias the expected comparison downward even when outcomes are generated independently. The authors showed that the canonical hot-hand study and related replications were vulnerable to this bias and reported that correcting it reversed the longstanding conclusion for the controlled shooting data.

Source: https://onlinelibrary.wiley.com/doi/abs/10.3982/ECTA14943

This did not establish that every apparent streak in game data is a genuine change in shooting ability. It showed that one influential reason for dismissing the hot hand was mathematically biased.

That correction still leaves a separate problem: game opponents adapt.

---

# 3. Defenders were already known to react

A 2014 PLOS ONE study used defensive metrics to ask whether NBA defenses respond to shooting streaks. It found that defensive pressure and shot difficulty tended to rise during hot streaks and fall during cold ones. The authors still did not find evidence that supposedly hot players had higher shooting percentages after accounting for defense, but the study established that the shot environment itself changes with recent outcomes.

Source: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0114184

A related experiment with 18 professional coaches and 20 players found that coaches tended to increase pressure on apparently hot players; players facing increased pressure became more likely to pass rather than shoot.

Source: https://pubmed.ncbi.nlm.nih.gov/25567138/

These results separate two questions that are often collapsed:

1. **Does a shooter's latent probability of success change after recent success?**
2. **Do opponents believe it changed strongly enough to alter the next possession?**

Question 2 can be true even if question 1 is false.

---

# 4. The 2026 player-tracking result

Kondur and Shen's 2026 *Journal of Sports Analytics* paper shifts the target from shooter performance to **defensive adaptation**.

The study merges play-by-play data with NBA spatial tracking. Public moment data limited the analysis to regular-season games from October 2015 through January 2016; the underlying movement dataset contained 632 games before final shot-level curation.

The authors use three main spatial defensive metrics:

- distance from the shooter to the closest defender;
- average distance from all defenders to the shooter;
- area of the convex hull formed by the five defenders.

They then relate those measurements to recent shot history using fixed-effects regression models with game and shot context controls.

Source: https://journals.sagepub.com/doi/full/10.1177/22150218261458601

## Immediate make versus miss

The closest defender responds asymmetrically. Coverage tightens more after a make than it relaxes after a miss.

This means recent success changes the next observed shot environment even before asking whether the shooter is actually in a different performance state.

## Short memory

The clearest individual-defender response appears over a short recent window. As the shooter makes more of roughly the previous three to five attempts, closest-defender distance decreases.

The authors initially find smoother statistical fits over longer windows, but explicitly reject the interpretation that defenders are maintaining a precise ten-shot running count; they treat the pattern as more consistent with compressed recent history.

For the five-shot categorical model, cumulative success had a statistically significant relationship with closest-defender distance (`F-test p = 0.002`) and a monotonic decreasing trend.

## Individual and team responses are different

As the closest defender tightens, average team defender distance can move in the opposite direction. The authors interpret this as a redistribution of responsibility: the primary defender closes, while other defenders can change help position or return attention to other assignments.

That matters because a single scalar such as “defensive pressure” can hide coordinated spatial reorganization.

## Long streaks do not cause unlimited escalation

Defenders respond rapidly at the start of streaks, but the paper does not find indefinitely increasing pressure as streak length grows. Coverage stabilizes or can move back toward baseline at longer streak lengths.

The authors interpret this as bounded updating rather than panic.

---

# 5. The important causal distinction

The 2026 study is evidence that **recent outcomes predict later defensive positioning after controls**.

It is not evidence that:

- a hot shooter really has a higher latent make probability;
- defenders consciously count the last five shots;
- the defensive response is optimal;
- the defense causes the absence or presence of a measured hot-hand effect;
- the same relationships hold in the 2026 NBA.

The dataset is from one partial 2015–16 season. Extreme streaks are rare. Spatial distance does not reveal communication, assignment, fatigue or conscious belief. The authors themselves identify those limitations.

Turn 2 needs to attack the causal language aggressively.

---

# 6. Why this changes the measurement problem

Suppose a player's underlying shooting state improves from 40% to 48% for several possessions.

If defenders react by closing distance, changing shot selection, forcing passes or sending help, the observed field-goal percentage after the streak is not a clean measurement of that underlying 48% state. It is the output of:

```text
shooter state
+ recent outcomes
+ defender belief
+ defender adaptation
+ offensive counter-adaptation
+ resulting shot selection
```

The reverse is also possible. Defenders may tighten because they *believe* in streaks even when the shooter has no real persistent state change. In that case the hot-hand belief changes the game despite the hot hand itself being absent.

This is the bridge beyond basketball: in adversarial or strategic systems, observed performance after success can be confounded by the environment responding to success.

---

# 7. Genealogy of the question

The research sequence is useful because each stage changes a different assumption.

- **1985:** raw and experimental sequences appear to undermine hot-hand belief.
- **2014–15:** defenders and coaches demonstrably respond to perceived streaks, so game attempts are strategically endogenous.
- **2018:** a finite-sample selection bias reverses part of the classic statistical case against the hot hand.
- **2026:** spatial tracking shows that defensive adaptation is asymmetric, short-memory and locally concentrated around the closest defender.

The current question is therefore not well represented by `make after make > make after miss?` alone.

A better causal model needs shooter state and opponent response separately.

---

# 8. Turn 2 attack plan

The next pass should test:

1. How robust is the 2026 closest-defender result to shot type, shooter identity, defender identity and game context?
2. Does the paper's use of 2015–16 partial-season public tracking data introduce selection or historical-generalization problems?
3. Is the three-to-five-shot “memory window” directly identified or partly interpretive model selection?
4. Could changes in play calling, shot location or matchup assignment create the apparent defensive response?
5. Does newer hot-hand literature actually demonstrate performance persistence once shot difficulty and defense are modeled, or only weaken the old null result?
6. Can the broader endogenous-response conclusion be supported without overstating the psychology claims in the 2026 paper?

---

# 9. Provisional Turn 1 conclusion

The strongest current claim is not that defenders have finally proved the hot hand.

It is:

> **recent shooting success measurably changes defensive behavior, so game shooting sequences are generated by an adaptive system. Any estimate of a shooter's hot state that ignores opponent response risks mixing performance with the opponent's reaction to performance.**

That is already useful even if Turn 2 concludes that the 2026 psychology interpretation is too strong.

## Sources

- Gilovich, Vallone & Tversky (1985), *Cognitive Psychology*: https://www.sciencedirect.com/science/article/pii/0010028585900106
- Csapo & Raab (2014), PLOS ONE: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0114184
- Csapo et al. (2015), *Journal of Sports Sciences*: https://pubmed.ncbi.nlm.nih.gov/25567138/
- Miller & Sanjurjo (2018), *Econometrica*: https://onlinelibrary.wiley.com/doi/abs/10.3982/ECTA14943
- Kondur & Shen (2026), *Journal of Sports Analytics*: https://journals.sagepub.com/doi/full/10.1177/22150218261458601
