# Unasked Voice & Authorship Policy v1

## Purpose

Unasked is primarily written by an LLM for one human reader. The goal is **not** to conceal that fact or to win an AI detector. The goal is to avoid the flattened, over-regular, generic prose that makes machine-written material tiring to read.

This policy adapts the August 2026 AI Text & Public Perception research to a case where a fresh human rough draft will usually not exist.

The governing rule is:

> **Research owns the information. The article owns the reading experience. A final local edit fixes only the spans that actually sound synthetic.**

Do not run a universal “make this sound human” rewrite.

---

## 1. What the prior research established strongly enough to use

Keep these ideas separate:

- writing quality;
- reader suspicion;
- detector classification;
- provenance.

Unasked optimizes **quality and useful reading first**. Detector behavior is not a publication gate.

The research also found that the durable problem is broader than famous AI words or punctuation. Stronger candidate signals include:

- generic information selection;
- weak source-grounded specificity;
- over-regular document/rhetorical architecture;
- flattened epistemic stance;
- weak idiolect;
- genre mismatch;
- reduced variation across contexts.

Generic humanization is therefore a bad default. In the frozen pilot corpus it lost information and compressed different registers toward a shared synthetic dialect. Bounded/local edits preserved much more of the original structure than whole-document rewriting.

---

## 2. The Unasked substitute for a human rough draft

The ideal authorship-first workflow starts from a human observation bank or rough draft. Unasked usually cannot do that.

Instead, every published piece must inherit a **frozen semantic bank** from Turn 2 before prose packaging begins. It should contain at least:

```yaml
question:
validated_answer:
mental_model_delta:
why_interesting:
tangible_examples: []
unusual_or_specific_details: []
new_vocabulary: []
strongest_caveat:
what_is_established: []
what_is_inferred: []
what_changed_in_turn2: []
what_not_to_claim: []
```

This is the scarce material. The article writer may reorganize it for comprehension, but must not replace it with a generic topic-shaped essay.

The research process should determine **what deserves emphasis** before the prose pass begins.

---

## 3. Reader-side voice prior

The primary reader's spontaneous conversation is useful as a weak preference signal, not as a surface-style target.

When conversational evidence is used, explicitly discount or ignore text that is obviously:

- a pasted work order;
- an agent-generated prompt;
- a formal handoff copied into chat;
- a long quoted report;
- text whose authorship is uncertain.

The useful recurring preferences are broad rather than lexical:

- directness over ceremony;
- curiosity that is allowed to change its mind;
- concrete examples before abstraction;
- technical depth once the payoff is clear;
- natural qualification (`probably`, `I think`, `the important part is...`) rather than fake certainty;
- willingness to say that a branch is interesting but not yet proved;
- occasional parenthetical clarification when it genuinely helps;
- dislike of inflated significance and generic polish.

Do **not** imitate typos, run-on sentences, filler words, or exact conversational syntax. Do not make the article pretend the reader wrote it.

---

## 4. House register

Default Unasked prose should feel like a strong field note written after someone actually chased the question down.

Useful adjectives for the register:

**curious · precise · calm · concrete · underclaimed · occasionally dry · technically unafraid**

The text may be informal when informality improves comprehension. It may also become dense when the subject earns density.

Prefer:

> The weird part is not that enamel proteins survive. It is how far past the useful DNA window they may remain informative.

Over:

> This groundbreaking development represents a paradigm shift in our understanding of molecular preservation.

Prefer a precise limitation over a generic balance sentence.

Prefer a specific example over a paragraph explaining that examples are important.

---

## 5. Drafting sequence

### Pass A — semantic freeze

Turn 2 finishes validation and writes the semantic bank. No article prose yet.

### Pass B — article draft

Write from the semantic bank and the selected story grammar.

The three early reader modules remain mandatory because they solve a real comprehension problem:

1. **The simple version**
2. **Why this is interesting**
3. **Where it becomes tangible**

Everything after them should follow the subject, not a universal essay template.

A history correction should not have the same middle structure as a new measurement technique. A sports mechanism should not be forced through a startup-style “implications” section. A near-future piece should make its uncertainty visible rather than burying it at the end.

### Pass C — local synthetic-pattern review

Do one bounded prose audit. Flag clusters, not single tells.

Look for:

- every paragraph doing the same rhetorical job;
- suspiciously symmetrical section lengths;
- repeated `not X, but Y` constructions;
- repeated triples merely because triples sound complete;
- stock transitions (`More importantly`, `Crucially`, `In other words`) appearing by habit;
- conclusions that restate the whole article instead of ending at the actual payoff;
- generic significance language (`transformative`, `revolutionary`, `game-changing`) unsupported by a concrete consequence;
- abstract nouns where a specific object/result exists;
- unnecessary executive-summary tone;
- throat-clearing before the interesting fact;
- rhetorical questions used as scaffolding rather than genuine questions;
- uniform sentence/paragraph rhythm across the entire piece;
- fake quotations or invented first-person experience.

Then revise **only the smallest span that has the problem**.

Do not delete authentic punctuation or structures just because they appear on an AI-tell list.

### Pass D — quality and meaning veto

Reject any anti-pattern edit that:

- changes meaning;
- removes a useful source detail;
- weakens a caveat;
- invents specificity;
- makes the prose choppier for camouflage;
- adds fake mistakes;
- makes the voice less appropriate to the subject.

---

## 6. Vary the entrance, not the epistemic contract

The first three modules are stable publication furniture. The **lead into them** can vary.

Possible opening moves include:

- a concrete object;
- a result that sounds impossible until explained;
- a familiar claim that turns out to have a weak source chain;
- one measurement that crossed a threshold;
- a strange historical failure;
- a number whose scale matters;
- an observation that violated expectation;
- a term that gives a previously fuzzy problem a name.

Do not rotate these mechanically. Choose the one the material naturally contains.

---

## 7. Do not fake human provenance

Unasked may use a human-oriented house voice. It must not imply a human performed work they did not perform.

Avoid fabricated lines such as:

> I spent the afternoon in the archive and noticed...

unless that actually happened.

Accurate process language is fine:

> The first search made this look straightforward. The adversarial pass found a much less comfortable limitation.

If Unasked ever becomes public-facing beyond its primary reader, the About surface should disclose the AI-assisted research/writing process plainly and non-performatively.

---

## 8. What this policy explicitly rejects

Do not use:

- detector-guided rewriting as a publication loop;
- commercial “humanizer” style transformations;
- typo insertion;
- random sentence fragmentation;
- word blacklists;
- em-dash bans;
- mandatory burstiness targets;
- a fixed quota of rhetorical questions, fragments, slang, or contractions;
- whole-document rewrites merely for consistency;
- mimicry of one human's surface mannerisms across every subject.

A recognizable publication voice is allowed. A universal synthetic disguise is not.

---

## 9. Evaluation after the first manual batch

After roughly 8–12 manually generated pieces, inspect them together rather than one at a time.

Ask:

- Do the articles sound like the same essay wearing different nouns?
- Does each subject have an appropriate register?
- Are the first three modules actually useful, or repetitive?
- Are caveats locally placed where the claim needs them?
- Which sentences felt obviously generated even when factually good?
- Which pieces were easiest to keep reading?
- Which structural habits recur without earning their place?

Use those observations to amend this file locally. Do not respond by adding a giant blacklist.

---

## 10. Preserve genuine research motion when it improves the story

A finished article does not have to pretend the answer arrived fully formed.

When the research path materially changed the question or conclusion, preserve some of that motion in the reader-facing piece. Useful moments include:

- an initial assumption that later failed;
- a technical term that opened an unexpected field;
- a source that forced a narrower claim;
- a counterexample that redirected the investigation;
- a mature ancestor that dissolved an apparent novelty claim;
- two previously separate findings that became meaningfully connected;
- a Turn 2 correction that made the subject more interesting rather than merely less certain.

This can make the article more epistemically honest and more readable because the reader encounters the **reason the conclusion was earned**, not only the conclusion.

Do not turn this into a mandatory diary template. Avoid mechanical narration such as “I wanted to learn X, then I found Y, then I realized Z.” Do not invent searches, surprise, emotion, or first-person experience.

Use research-process narration only where a real transition carries explanatory value. The article may say, for example:

> The first version of this story looked like a permanent cellular archive. Then a replacement experiment made that metaphor much harder to defend.

or:

> The tempting claim was that this was new. The older literature had a name for it already, which turned out to be more useful than the novelty claim.

The governing distinction is:

> **preserve epistemic movement, not a performance of curiosity.**

The final piece should still read like an article, not a transcript of the research session.
