# The internet can contain a connection nobody has written down

## The simple version

Two scientific fields can each know half of something useful without either one realizing the pieces belong together.

Information scientist Don Swanson formalized this problem in the 1980s. He showed that separate research literatures could contain premises that, when connected, suggested a new hypothesis even though the endpoint connection had not been explicitly published.

The field that grew around this is called **literature-based discovery**. The older phrase is even better: **undiscovered public knowledge**.

It does **not** mean a hidden fact is magically sitting on the internet waiting to be copied. It means public documents can contain enough disconnected evidence to support a useful new inference.

## Why this is interesting

Most search systems assume you already know roughly what you are looking for.

This flips the problem around:

> What useful question or connection might become visible only after two vocabularies are brought into the same room?

That matters because disciplines are efficient at building local expertise and terrible at sharing all of their conceptual machinery. A problem can be old in one field and feel completely new in another because the communities use different words, journals, examples, and standards.

So a missing term does not merely make search a little worse. It can hide a mature intellectual neighborhood.

## Where it becomes tangible

Suppose you are trying to make complex software failures easier to notice. Searching only for “better observability dashboards” keeps you inside software engineering. A structural search might lead into **high-reliability organizations**, **weak-signal detection**, or **sensemaking**—fields that have studied how humans notice small precursors before catastrophe.

Or suppose a scientist has an observed biological effect and a separate literature contains a mechanism known to affect the same intermediate process. The bridge does not prove the mechanism. It gives the scientist a better experiment to run.

That distinction is the useful one:

**cross-field discovery should nominate better questions, not manufacture final truths.**

---

## The original example

Swanson's best-known early case connected two literatures: research on fish oil and research on Raynaud's syndrome. Neither literature had explicitly established the proposed treatment connection, but findings in each supplied pieces of a plausible chain.

That work helped define an **ABC model**:

```text
A is related to B
B is related to C
A and C are not already explicitly connected
→ investigate whether A may be meaningfully related to C
```

The important word is **investigate**.

An ABC bridge is a hypothesis generator. It is not a substitute for an experiment, a clinical trial, causal identification, or source criticism.

## Why the problem keeps recurring

Research is partitioned for good reasons. Biologists, physicists, media researchers, psychologists, historians, operations researchers, and engineers develop their own vocabularies because specialists need precision.

But specialization creates seams.

One community may already have a name, a failure taxonomy, and forty years of experiments for something another community is still calling “this weird problem we keep having.”

Before you know terms like **quality-diversity**, **story sifting**, **horizon scanning**, or **active learning**, you can spend hours searching around their edges with improvised language. Once you acquire the term, an entire bibliography becomes addressable.

## People have tried to automate this for decades

Literature-based discovery did not begin with language models. Researchers have used co-occurrence statistics, controlled vocabularies, graphs, semantic relations, text mining, and specialist databases to search for bridges between literatures.

The dream is obvious: if a useful connection is latent in millions of papers, software might surface it before one unusually well-read human happens to notice both sides.

The failure mode is equally obvious. Candidate connections explode. Many are trivial, coincidental, badly supported, or only linguistically similar.

Modern language models lower the cost of generating and explaining bridges. They do **not** remove the validation bottleneck. In some ways they make it worse, because a fluent model can produce an excellent explanation for a connection that is merely aesthetically satisfying.

## What changed recently

The important capability shift is the cost of **translation across fields**.

A single researcher can now:

- discover an unfamiliar field's vocabulary;
- search its primary literature;
- compare conceptual structures across domains;
- generate alternate explanations;
- look for historical failures and negative results;
- turn a vague analogy into explicit claims that can actually be checked.

None of that turns synthesis into empirical evidence.

But it makes a smaller and more defensible machine newly practical: a system whose job is to keep handing you **better queries**.

## What this could change

The default recommendation engine asks:

> What is similar to things this person already likes?

A discovery engine can ask:

> Which field contains a concept that would change how this person formulates a problem?

Those are different optimization targets.

The second system might intentionally show you something with low topical similarity but high **structural relevance**. It might preserve a strange candidate because it is a useful stepping stone rather than because it immediately looks important. It might treat a failed expectation as the beginning of a new search rather than an inconvenient outlier.

This is the idea Unasked is built around.

## The caveat worth keeping

There is an easy way to turn all of this into intellectual astrology: connect distant concepts, write a compelling paragraph, and mistake surprise for truth.

The protection is procedural:

1. use bridges for **discovery**;
2. state the exact proposed relation;
3. identify what evidence would establish it;
4. search for the best competing explanation;
5. validate the load-bearing claims independently;
6. downgrade or kill the connection when it fails.

The internet already has endless systems for giving you more of what you know you like.

The more interesting machine may be one that occasionally gives you the name of the field you did not know you needed—and then tells you how much of the connection actually survives inspection.

---

## Sources

- Don R. Swanson, *Fish oil, Raynaud's syndrome, and undiscovered public knowledge* (1986), DOI 10.1353/pbm.1986.0087.
- Don R. Swanson, *Medical literature as a potential source of new knowledge* (1990), PMID 2403828.
- Neil R. Smalheiser, *Rediscovering Don Swanson: the Past, Present and Future of Literature-Based Discovery* (2017), PMCID PMC5771422.
- *Literature-based discovery: addressing the issue of the subpar evaluation methodology* (Bioinformatics, 2023), article btad090.
