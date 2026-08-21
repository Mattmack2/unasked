# Turn 2 — IMO2020 shipping sulfur, clouds and warming

**Date:** 2026-08-21  
**Turn 1:** `research/full/2026-08-21-shipping-sulfur-clouds-turn1.md`  
**Candidate:** `C-EV-004`  
**Lane:** EXPECTATION VIOLATION  
**Primary domain:** EARTH & ENVIRONMENT  
**Story grammar:** HIDDEN MECHANISM

## Verdict

```yaml
verdict: SURVIVES_WITH_CORRECTIONS
confidence_change: none
novelty_status: KNOWN FIELD
material_corrections:
  - Keep the forcing magnitude as a range across methods rather than one canonical number. A 2024 four-model study found 0.057–0.089 W/m²; a 2025 ML observational analysis estimated 0.074 ± 0.005 W/m² over three low-cloud regions, while other model studies are higher.
  - Treat attribution of 2023 record warmth as a secondary consequence. IMO2020 probably contributed some warming, generally of order hundredths of a degree in current model estimates, but cannot explain the record year by itself.
  - Correct the Bay of Bengal lightning result: the 2025 observational study reports an 11% decline in lightning during 2020–2023 relative to climatology and estimates shipping contributed at least 17% of climatological lightning there.
  - Bound the "5%" ship-track result to the southeastern Atlantic closure study. Do not present 5% as a universal global fraction.
  - Do not use "geoengineering termination shock" as the neutral description of IMO2020. It is a framing used by one influential 2024 paper, not field-wide terminology.
  - Keep marine cloud brightening as a research connection, not as a conclusion that shipping proves MCB will be effective or safe.
important_omissions_added:
  - The observational ML forcing estimate explicitly says COVID-era changes cannot be fully separated and could make its estimate an upper bound.
  - A 2024 Nature Climate Change study found regional MCB efficacy is climate-state dependent and can create remote warming side effects.
  - IMO's own implementation record confirms the sulfur cap fell from 3.5% to 0.5% and shipping SOx emissions fell about 70% in the first year, while the regulation was adopted for substantial health and environmental benefits.
```

## Re-anchored question

**Did the 2020 cleanup of sulfur pollution from ships measurably alter marine clouds and expose some previously masked greenhouse warming—and what does the intervention actually teach us about aerosol–cloud forcing?**

## Validated answer

**Yes.** IMO2020 sharply reduced sulfur emissions from shipping, and multiple independent observational and modeling approaches find the expected atmospheric response: fewer sulfate particles, changes in cloud droplet properties, fewer visible ship tracks, reduced cloud brightening in susceptible regions, and a positive radiative forcing relative to the dirtier pre-2020 baseline.

The stronger lesson is experimental rather than rhetorical. Shipping had already functioned as a long-running natural experiment in aerosol–cloud interactions. IMO2020 abruptly changed the aerosol source, giving atmospheric scientists a rare before/after perturbation in the real climate system.

What remains uncertain is the exact global forcing, the fraction of recent temperature anomalies attributable to it, and how faithfully the shipping experiment transfers to deliberate marine cloud brightening.

---

# Claim ledger

## 1. IMO2020 sharply reduced sulfur emissions

**Status:** survives strongly.

The International Maritime Organization reduced the global sulfur limit in marine fuel from 3.5% to 0.5% on 1 January 2020. IMO later reported roughly a 70% reduction in total sulfur oxide emissions from shipping during the first year. Atmospheric studies commonly model or infer an SO2 reduction near 70–80%.

Sources:
- https://www.imo.org/en/ourwork/environment/pages/sulphur-oxides-%28sox%29-%E2%80%93-regulation-14.aspx
- https://www.imo.org/en/mediacentre/pressbriefings/pages/02-imo-2020.aspx

## 2. Sulfur-rich ship emissions brighten some marine clouds

**Status:** established mechanism.

Sulfate aerosol can increase cloud condensation nuclei, increasing droplet number and reducing mean droplet size at fixed liquid water. This can increase cloud reflectivity (the Twomey effect), with additional cloud adjustments that are more state dependent.

Visible ship tracks are the clearest examples, but diffuse aerosol perturbations can occur without a visible line.

Source:
- https://acp.copernicus.org/articles/24/13361/2024/

## 3. The sulfur cleanup produced a positive climate forcing

**Status:** survives, magnitude remains uncertain.

A 2024 multi-model study using four global climate models plus a chemical transport model estimated an effective radiative forcing from an 80% shipping SO2 reduction of **0.057 to 0.089 W/m²**, with a multi-model mean of 0.073 W/m².

A 2025 observational machine-learning study estimated **+0.074 ± 0.005 W/m²** from changes in shortwave low-cloud radiative effect across three major low-cloud shipping regions. The authors also stress low detectability because cloud variability is large, and they cannot completely separate COVID-era effects; they therefore note the estimate could be an upper limit.

Other model studies are higher: UKESM1 estimated **0.139 ± 0.019 W/m²**, while a 2024 satellite/model study estimated **0.2 ± 0.11 W/m² over the global ocean**. The literature is therefore converging on the sign and broad order of magnitude more strongly than on one precise number.

Sources:
- https://acp.copernicus.org/articles/24/13361/2024/
- https://www.nature.com/articles/s43247-024-01911-9
- https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024EF005011
- https://www.nature.com/articles/s43247-024-01442-3

## 4. IMO2020 explains the exceptional warmth of 2023

**Status:** does not survive as a strong attribution claim.

Several studies conclude IMO2020 plausibly contributed. UKESM1 simulations estimate about **0.046 ± 0.010°C** global annual surface warming averaged across 2020–2029 and say the intervention helps explain 2023 but cannot account for it fully. Another model synthesis estimates around +0.04 K realized by 2023.

Other attribution work describes shipping-sulfur cleanup as only a few hundredths of a degree globally and insufficient to explain the abrupt 2023 sea-surface-temperature jump. Gavin Schmidt's 2024 Nature commentary likewise judged sulfur cleanup unlikely to explain anything close to the full anomaly.

**Verdict:** retain as context only. The article should not be about solving the mystery of 2023.

Sources:
- https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024EF005011
- https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL109077
- https://www.nature.com/articles/s43247-024-01391-x
- https://www.nature.com/articles/d41586-024-00816-z

## 5. Lightning changed after the sulfur regulation

**Status:** survives with numerical correction.

A 2025 npj Climate and Atmospheric Science paper used lightning-location and satellite cloud observations over the Bay of Bengal. It reports that the 2020 rule reduced SO2 emissions there by about 66%, coincident with lower cloud tops, reduced ice water, larger low-cloud droplets and an **11% decline in lightning frequency during 2020–2023 relative to climatology**. The authors estimate shipping emissions contributed at least 17% to climatological lightning frequency in the studied region.

This is useful because it shows the perturbation was not limited to visually obvious low-cloud tracks. It is still one regional observational attribution study, not a global lightning law.

Source:
- https://www.nature.com/articles/s41612-025-01256-w

## 6. Visible ship tracks represent only a small fraction of ship aerosol forcing

**Status:** survives as a regional result, not a universal constant.

A 2025 Communications Earth & Environment closure study in the southeastern Atlantic found detectable ship tracks represented only around **5%** of total aerosol indirect forcing from ship emissions in that study. Most forcing appeared to come from aerosol diffusion that did not produce readily detectable tracks.

The general lesson is robust: visible tracks are a selection-biased subset of the cloud response. The specific 5% value should remain geographically and methodologically bounded.

Source:
- https://www.nature.com/articles/s43247-025-02825-w

## 7. The natural experiment provides direct evidence for marine cloud brightening

**Status:** useful analogy, incomplete transfer.

Shipping demonstrates that adding aerosol can brighten susceptible marine clouds and that removing it can reverse part of the effect. It also demonstrates large state dependence and low signal detectability.

But proposed MCB usually involves deliberately generated sea-salt particles with controlled size distributions and deployment locations, not sulfate-rich combustion plumes with co-emitted pollutants. A 2024 Nature Climate Change study further found that the efficacy and remote side effects of regional MCB can change as the background climate warms.

**Verdict:** shipping is an empirical constraint on aerosol–cloud sensitivity, not a field trial proving MCB safety or efficacy.

Source:
- https://www.nature.com/articles/s41558-024-02046-7

## 8. Cleaning sulfur pollution was a climate-policy mistake

**Status:** reject.

The sulfur cap was an air-quality intervention with substantial health and environmental benefits. IMO cited expected reductions in premature deaths and respiratory harm, and reported major reductions in ship SOx emissions after implementation.

The physical climate lesson is that short-lived aerosol pollution had been masking a fraction of warming caused by long-lived greenhouse gases. Removing the mask exposes warming quickly; it does not make the mask a desirable climate strategy.

Sources:
- https://www.imo.org/en/mediacentre/pressbriefings/pages/19-implementation-of-sulphur-2020-limit-.aspx
- https://www.imo.org/en/mediacentre/pressbriefings/pages/02-imo-2020.aspx

---

# What changed in Turn 2

The first version of the story was a policy irony: cleaner fuel, darker clouds, more warming.

The second pass made that framing feel too cheap.

The stronger story is that **a public-health regulation accidentally performed one of the world's largest real-world aerosol perturbation experiments**. The sign of the cloud response is now visible through several independent channels. The exact climate number remains difficult because clouds are noisy, background meteorology matters, and different models represent aerosol–cloud adjustments differently.

A second correction came from the photogenic evidence. It is easy to think the white ship tracks are the phenomenon. The 2025 southeastern Atlantic closure study suggests nearly the opposite: visible lines can be the small, easy-to-see tail of a much broader diffuse effect.

The lightning paper then widened the mechanism again. The perturbation can show up not only as cloud brightness but in deep-cloud structure and lightning frequency, at least in one heavily trafficked tropical corridor.

By the end of Turn 2, the exact fraction of 2023 warming attributable to shipping mattered less than it did at the start. The intervention is scientifically valuable even if that attribution remains unsettled.

---

# Semantic bank — frozen before article drafting

```yaml
question: Did the 2020 cleanup of sulfur pollution from ships measurably alter marine clouds and expose some previously masked greenhouse warming?
validated_answer: Yes. The sulfur cap sharply reduced ship SO2 emissions, multiple observational and model approaches detect corresponding cloud changes, and the removal of aerosol cooling produced a positive radiative forcing. Exact global magnitude and recent-temperature attribution remain uncertain.
mental_model_delta: Air pollution and greenhouse gases had been pushing climate in opposite directions. Cleaning short-lived sulfur pollution did not create the underlying warming; it removed part of a temporary cooling mask and simultaneously created a rare real-world experiment in aerosol-cloud physics.
why_interesting: The natural experiment lets researchers observe cloud responses across ship tracks, diffuse cloud fields and even regional lightning, while exposing how difficult it is to detect a known perturbation against natural cloud variability.
tangible_examples:
  - IMO sulfur limit fell from 3.5% to 0.5% in 2020; shipping SOx emissions fell about 70% in the first year.
  - Four-model 2024 ERF range 0.057–0.089 W/m².
  - 2025 ML observational estimate +0.074 ± 0.005 W/m² with low detectability and COVID confounding caveat.
  - 2025 Bay of Bengal study found an 11% decline in lightning after 2020 relative to climatology.
  - 2025 southeastern Atlantic study found visible ship tracks accounted for only ~5% of estimated ship aerosol indirect forcing in that region.
unusual_or_specific_details:
  - A known global emissions perturbation can still be difficult to detect in cloud radiative observations because cloud albedo and coverage vary so strongly naturally.
  - The visible ship-track fraction is strongly selection biased toward conditions that produce crisp satellite lines.
  - Lightning provides an independent observable of aerosol influence on deep cloud microphysics.
new_vocabulary:
  - cloud condensation nuclei
  - Twomey effect
  - aerosol effective radiative forcing
  - aerosol masking / unmasking
  - ship track
  - marine cloud brightening
strongest_caveat: The sign of the perturbation is more secure than its exact magnitude. Recent temperature anomalies cannot be cleanly assigned to IMO2020, and shipping emissions are an imperfect analogue for deliberate sea-salt cloud brightening.
what_is_established:
  - sulfur-rich ship emissions can alter marine cloud microphysics
  - IMO2020 sharply reduced shipping sulfur emissions
  - visible ship tracks declined after the regulation
  - removal of sulfate cooling creates positive radiative forcing relative to the pre-2020 baseline
what_is_inferred:
  - exact global forcing magnitude
  - fraction of 2023–2026 warmth attributable to IMO2020
  - how well shipping constrains operational marine cloud brightening
what_changed_in_turn2:
  - demoted 2023 attribution from central story to secondary context
  - corrected lightning magnitude and kept it regional
  - bounded the 5% visible-track result to the southeastern Atlantic
  - replaced policy-irony framing with natural-experiment framing
  - rejected 'termination shock' as neutral house language
what_not_to_claim:
  - that pollution was good for climate overall
  - that IMO2020 caused the 2023 global temperature record
  - that 5% is the global fraction of forcing represented by visible ship tracks
  - that the Bay of Bengal lightning result is global
  - that shipping proves marine cloud brightening is safe or effective
```

## Final verdict

**SURVIVES_WITH_CORRECTIONS.** The strongest article is not “cleaner ship fuel warmed the planet.” It is: **we deliberately removed a huge aerosol source, and the atmosphere responded in ways that expose both the reality and the stubborn uncertainty of aerosol–cloud climate forcing.**
