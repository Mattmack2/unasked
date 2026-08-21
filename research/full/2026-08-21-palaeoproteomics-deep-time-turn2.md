# Turn 2 — Palaeoproteomics deep-time validation

**Date:** 2026-08-21  
**Turn 1:** `research/full/2026-08-21-palaeoproteomics-deep-time-turn1.md`  
**Candidate:** `C-MB-001`  
**Lane:** MEMORY-BLIND  
**Primary domain:** HUMAN PAST  
**Story grammar:** CAPABILITY SHIFT

## Verdict

```yaml
verdict: SURVIVES_WITH_CORRECTIONS
confidence_change: none
material_corrections:
  - Replace any simple protein-vs-DNA age cutoff with a preservation-regime comparison. Exceptional cold-environment DNA reaches roughly 1–2 Ma; proteins are not simply "older than DNA" in every setting.
  - Treat enamel as a low-bandwidth archive that works on selected specimens, not a uniformly practical molecular layer across fossil collections.
  - Keep the Homo erectus / Denisovan connection as a specific evolutionary hypothesis supported by a shared AMBN variant, not proof of genome-scale introgression.
  - Describe acid etching as micro-destructive/minimally destructive, not non-destructive. Conservation costs remain real.
  - Demote "persistent molecular optionality" from DISCOVERY_CANDIDATE to a plausible archival principle. No clean case was found in the bounded Turn 2 search where later reanalysis of an old palaeoproteomic raw dataset materially changed a historical conclusion.
important_omissions_added:
  - A 2025 enamel-contamination experiment shows that modern contamination can suppress endogenous peptide recovery even when the contaminating proteins are not themselves identified.
  - Modern palaeoproteomic papers increasingly deposit raw spectra in ProteomeXchange/PRIDE, making future reanalysis technically possible.
  - Conservation research in 2026 emphasizes that acid etching still causes measurable irreversible enamel alteration and may require removing a tooth from its socket.
novelty_status: KNOWN FIELD
```

## Re-anchored question

**Are ancient tooth-enamel proteins becoming a practical molecular archive for periods where recoverable DNA is often unavailable, and what new historical/evolutionary questions does that make answerable?**

### Validated answer

**Yes, on selected specimens and with much lower information bandwidth than DNA.** Dental-enamel palaeoproteomics is now a real molecular method rather than an isolated proof of concept. It can recover sex-linked peptides, taxonomically or phylogenetically useful amino-acid variants, and other sequence information from fossils whose DNA is absent or uninformative. Recent work also shows surprisingly deep preservation in enamel.

The useful mental model is not a ladder where DNA stops at one age and proteins begin. Preservation depends on temperature, substrate, burial history and molecule. Ancient DNA has exceptional records approaching two million years in Arctic sediment and roughly 430,000-year hominin nuclear DNA at Sima de los Huesos. Enamel proteins nevertheless open a much deeper, lower-bandwidth channel in some settings, including identifiable fragments from Early Miocene mammals around 16–18 Ma in the warm Turkana Basin.

---

# 1. Claim ledger

## Claim A — enamel can preserve usable molecular sequence information far into deep time

**What would establish it:** authenticated endogenous peptides from very old enamel, with controls, sequence-specific evidence and explicit uncertainty.

**Evidence:** Green et al. (Nature, 2025) recovered enamel-derived peptide fragments from Early Miocene rhinocerotid and proboscidean fossils around 16–18 Ma in the Turkana Basin. Their filtering began with more than 400 FDR-passing peptide matches, narrowed to roughly 130 clade-matching putative fossil peptides, and then to 19 high-confidence fossil-derived fragments. They explicitly report declining peptide abundance with age, site-specific preservation, sparse fragments and uncertainty in fragment identification and sequence diagenesis.

**Counterevidence / boundary:** this is not a uniform 18 Ma archive. Several sampled fossils/sites yielded ambiguous or no high-confidence fragments, and the paper's deepest confident information is sparse.

**Verdict:** SURVIVES. The archive metaphor is acceptable only if described as sparse and specimen-dependent.

## Claim B — palaeoproteomics extends molecular work beyond many practical aDNA settings

**What would establish it:** credible protein recovery where DNA is unavailable or difficult, without implying a universal molecular age boundary.

**Counterevidence:** DNA itself has exceptional preservation. Nature reported environmental DNA from roughly 2 Ma Greenland sediment, and nuclear DNA from approximately 430 ka Sima de los Huesos hominins. The simple phrase "past the DNA limit" is therefore too crude.

**Verdict:** SURVIVES WITH CORRECTION. Use **preservation regime**, not a universal chronological cutoff.

## Claim C — current hominin studies recover biologically/evolutionarily useful information

**Evidence:**

- Fu et al. (Nature, 2026) recovered enamel proteins from six roughly 400 ka H. erectus specimens across three Chinese sites, sexed five as male and one as female, and identified two shared AMBN variants. The shared AMBN(M273V) variant also occurs in Denisovans.
- Madupe et al. (Cell, 2026) used acid etching on 23 H. naledi specimens representing at least 20 individuals. They found no convincing male marker in the analysed set, no recovered sequence variability across the sampled group, and two amino-acid substitutions of evolutionary interest.

**Boundary:** the H. erectus paper treats gene flow from populations related to these H. erectus as a plausible model/candidate explanation. A shared protein variant is not genome-wide proof of introgression. The H. naledi result is "no confidently identified male markers in the analysed sample," not "the assemblage was all female."

**Verdict:** SURVIVES.

## Claim D — micro-destructive sampling materially improves feasibility for rare specimens

**Evidence:** the H. naledi study reports that acid etching can recover protein information comparable to conventional destructive sampling and argues that it can make preliminary screening of rare specimens more acceptable.

**Counterevidence:** a 2026 conservation/methods study emphasizes that acid etching still removes measurable enamel, creates irreversible microscopic change, and may require a tooth to be taken out of its socket. Museum approval remains collection- and specimen-specific.

**Verdict:** SURVIVES WITH CORRECTION. Say **micro-destructive** and describe the tradeoff.

## Claim E — contamination/authentication remain limiting

**Fresh evidence:** Fagernäs et al. (Scientific Reports, 2025) artificially contaminated Pleistocene rhinoceros enamel. The contaminating proteins were not unambiguously detected under typical enamel workflows, yet contamination significantly reduced endogenous peptide/protein recovery and altered recovered proteomic information. Water/bleach washes improved recovery.

This is a useful adversarial result because it shows a failure mode that can be analytically invisible while still costing information.

**Verdict:** STRONGLY SURVIVES.

## Claim F — archived raw spectra can become materially more informative later

**Evidence for plausibility:** the 2022 Chemical Reviews field review argues that growth in sequence databases, modification knowledge and search methods should make reanalysis of previous samples increasingly productive, and recommends raw-data publication. Modern studies deposit data in ProteomeXchange/PRIDE; the 2026 H. erectus paper itself references and compares multiple older palaeoproteomic datasets from PRIDE.

**Missing evidence:** bounded Turn 2 search did not locate a clean, well-documented ancient-enamel case where later reanalysis of the same raw spectra materially changed an accepted historical conclusion.

**Verdict:** DEMOTE. Keep as a data-stewardship/future-optionalty observation, not a discovery claim.

---

# 2. Strongest counterargument

The strongest objection is not that palaeoproteomics is fake. It is that **spectacular time depth can make a sparse, selective technique look more general than it is**.

At very old ages:

- preservation varies enormously between sites and specimens;
- the surviving protein repertoire is tiny relative to a genome;
- database coverage affects what can be identified;
- contamination can suppress useful signal;
- degraded peptides generate both false-positive and false-negative risk;
- destructive-sampling ethics limit which fossils can be tested;
- a small number of amino-acid variants can support, but rarely settle, complex phylogenetic histories.

The article survives this objection if it presents palaeoproteomics as a **new molecular channel**, not a replacement for DNA or morphology.

---

# 3. Alternate genealogy / novelty check

No novelty claim survives or is needed. Ancient-protein research has deep roots, and modern dental-enamel palaeoproteomics already has an established literature, protocols and public datasets.

The 2024 Nature Protocols article explicitly describes million-year enamel analysis as a workflow for otherwise inaccessible phylogenetic inference. The frontier delta is the expanding information yield, deeper demonstrated preservation, micro-destructive sampling, current hominin applications and improving data/computational infrastructure.

**Discovery status:** `KNOWN FIELD`.

---

# 4. Frozen semantic bank

```yaml
question: >
  Are ancient tooth-enamel proteins becoming a practical molecular archive for periods where recoverable DNA is often unavailable, and what new historical/evolutionary questions does that make answerable?

validated_answer: >
  Yes, for selected fossils. Enamel preserves a small protein repertoire that can sometimes survive far beyond useful DNA in the same preservation regimes. Modern mass spectrometry can recover sex-linked and phylogenetically informative peptide variants, but the information is sparse, preservation is uneven, and authentication remains difficult.

mental_model_delta: >
  The fossil record does not have one molecular archive called DNA. Different molecules and substrates fail on different timescales. Enamel proteins create a deeper but much lower-bandwidth molecular channel.

why_interesting: >
  Fossils previously limited mainly to morphology, place and geological age can sometimes answer molecular questions: sex markers, taxonomic placement, phylogenetic relationships and specific inherited amino-acid variants.

tangible_examples:
  - Six ~400 ka H. erectus specimens across China yielded sex assignments and two shared AMBN variants.
  - 23 H. naledi teeth representing at least 20 individuals were screened with micro-destructive acid etching; no convincing male markers were recovered and two sequence substitutions were reported.
  - Early Miocene mammal enamel from Turkana yielded high-confidence fossil-derived protein fragments around 16–18 Ma.

unusual_or_specific_details:
  - The 18 Ma Nature study narrowed >400 FDR-passing peptide matches to roughly 130 clade-matching candidates and 19 high-confidence fossil-derived fragments.
  - The same study found clear age-related decline and strong site/specimen variation.
  - A 2025 contamination experiment found that modern contamination could reduce ancient peptide recovery even when the contaminating proteins were not themselves identified.
  - Modern datasets are deposited in PRIDE/ProteomeXchange, preserving raw spectra for future reanalysis.

new_vocabulary:
  - palaeoproteomics
  - enamel proteome
  - diagenesis / diagenetiform
  - peptide-spectrum match
  - amelogenin / ameloblastin
  - micro-destructive acid etching

strongest_caveat: >
  Proteins are not genomes. Very old enamel usually yields sparse, biased fragments, and preservation/identification vary by specimen, site, database and protocol. A handful of variants can constrain an evolutionary story without resolving it.

what_is_established:
  - Dental-enamel palaeoproteomics is an established method with published protocols and multiple hominin applications.
  - Enamel proteins can retain useful sequence information where aDNA is unavailable in many preservation settings.
  - Sex-linked enamel peptides and phylogenetically informative amino-acid variants can sometimes be recovered.
  - Raw palaeoproteomic data are increasingly deposited in public repositories.

what_is_inferred:
  - Broad collection-scale molecular triage could become more common as sampling, throughput and interpretation improve.
  - Better databases/algorithms may make some archived spectra more informative later.
  - The shared H. erectus/Denisovan AMBN variant is compatible with an introgression hypothesis but does not by itself establish genome-scale gene flow.

what_changed_in_turn2:
  - Removed the implication of one universal DNA age frontier.
  - Narrowed "practical archive" to selected specimens and preservation regimes.
  - Added current contamination evidence.
  - Added conservation costs of acid etching.
  - Demoted persistent molecular optionality from discovery candidate to bounded future possibility.

what_not_to_claim:
  - Proteins always survive longer than DNA.
  - We can recover genomes from ancient enamel proteins.
  - 18 Ma fossils routinely yield rich proteomes.
  - H. erectus-to-Denisovan introgression is proved by the shared AMBN variant.
  - The H. naledi assemblage was all female.
  - Acid etching is non-destructive.
  - Old raw spectra have already been shown generally to produce major new discoveries after reanalysis.
```

---

# 5. Publication decision

**PUBLISH.**

Reader-facing emphasis:

> A fossil tooth is not just a shape. In some specimens, its mineralized enamel still contains a few molecular clues long after most other biological information has disappeared.

Do not lead with the 18-million-year record as a stunt. Lead with the change in what questions can be asked, then use 18 Ma to establish the depth of the channel.

---

# Sources added / rechecked in Turn 2

1. Fu Q. et al. *Enamel proteins from six Homo erectus specimens across China.* Nature 655, 141–147 (2026). DOI: 10.1038/s41586-026-10478-8.
2. Green D.R. et al. *Eighteen million years of diverse enamel proteomes from the East African Rift.* Nature 643, 712–718 (2025). DOI: 10.1038/s41586-025-09040-9.
3. Madupe P.P. et al. *Proteomic analysis of dental enamel from 20 Homo naledi individuals shows no male markers.* Cell 189(14), 4415–4424.e11 (2026). DOI: 10.1016/j.cell.2026.05.044.
4. Taurozzi A.J. et al. *Deep-time phylogenetic inference by paleoproteomic analysis of dental enamel.* Nature Protocols 19, 2085–2116 (2024). DOI: 10.1038/s41596-024-00975-3.
5. Hendy J. et al. *Paleoproteomics.* Chemical Reviews (2022). DOI: 10.1021/acs.chemrev.1c00703.
6. Fagernäs Z. et al. *Identification and removal of contamination in palaeoproteomic analysis of dental enamel.* Scientific Reports (2025). DOI: 10.1038/s41598-025-31472-6.
7. Kjær K.H. et al. *A 2-million-year-old ecosystem in Greenland uncovered by environmental DNA.* Nature 612, 283–291 (2022). DOI: 10.1038/s41586-022-05453-y.
8. Meyer M. et al. *Nuclear DNA sequences from the Middle Pleistocene Sima de los Huesos hominins.* Nature 531, 504–507 (2016). DOI: 10.1038/nature17405.
9. 2026 micro-destructive dental proteomics methods/conservation work on PVA-gel/in-situ digestion, emphasizing measurable irreversible alteration even under reduced-damage sampling.
