# Unasked — Frontier Research and Build Decision v1

**Decision:** Build the standalone GitHub Pages feed now. Do not build X integration now. Use a two-run state machine so every published item receives a genuinely later adversarial pass.

## 1. Destination

The problem is not “find interesting articles.” Existing feeds already do that.

The target is:

> Create a low-friction personal surface that repeatedly reveals fields, terms, historical attempts, mechanisms, and connections the reader plausibly cares about **without requiring the reader to know the query in advance**.

The project succeeds only if it expands the reachable question space rather than decorating the existing interest bubble.

## 2. Why recent research points here

Across recent technical, research-method, creative, and systems work, several of the largest jumps came from discovering that the original wording hid a better discipline-level question. The recurring leverage was not “more sources.” It was a new vocabulary that exposed a mature field, or a failed historical idea reexamined after its bottleneck moved.

That suggests a product-level inversion:

```text
ordinary research
question -> search -> answer

Unasked
interest/problem shape -> foreign vocabulary -> better question -> research -> validated story
```

## 3. Foundation map

### 3.1 Serendipity recommender systems
Research on serendipity-oriented recommendation grew partly from a known failure of accuracy-centric recommenders: overspecialization can make suggestions predictable and boring. Novelty and diversity help, but can also return irrelevant items. Serendipity research therefore treats unexpectedness and usefulness/relevance as distinct ingredients.

**Import:** Do not optimize for “similar to what the reader liked.” Useful surprise must be designed separately.

### 3.2 Exploratory search
Exploratory search models information seeking as iterative: the question, vocabulary, and desired destination can change while learning.

**Import:** The system should discover the question before it writes the answer.

### 3.3 Literature-based discovery
In the 1980s, information scientist Don Swanson argued that public knowledge can remain effectively undiscovered when separate literatures contain complementary facts but do not cite or interact with each other. His classic fish-oil/Raynaud's example became the founding case of literature-based discovery.

**Import:** “Unknown unknowns” are not mystical. Some are structural gaps between vocabularies and communities.

### 3.4 Open-ended / quality-diversity thinking
Optimization tends to converge. Discovery often benefits from preserving multiple niches rather than selecting one best candidate.

**Import:** Use lanes and recency constraints instead of one scalar “interestingness” score.

## 4. Genealogy

The product has several ancestors, none of which is the exact thing:

- social bookmarking and StumbleUpon-style random discovery;
- RSS/read-later systems;
- personalized recommenders;
- literature-based discovery systems;
- research assistants and answer engines;
- newsletters and curated link blogs;
- modern social feeds.

The novelty claim should therefore be modest. The useful delta is the integration of **frontier-style question discovery + a frozen research artifact + a later adversarial validation pass + a social-feed reading surface** for one person.

## 5. Failed-dream mining

### StumbleUpon / “surprise me” discovery
The old web had explicit discovery products built around semi-random traversal. StumbleUpon lasted many years and eventually shut down in 2018. The idea was compelling because it let the user browse without a query, but it was still primarily a page recommender: the page had to already exist and be worth encountering.

**Moved bottleneck:** modern language models plus web retrieval can synthesize a new explanation across sources rather than only choose an existing page. Static hosting and structured Markdown make personalized publishing nearly free.

**Still-existing bottleneck:** personalization can become an echo chamber; synthetic novelty can also produce confident nonsense. That is why the memory-blind lane and adversarial second pass are not optional decorations.

### Automated knowledge discovery
Literature-based discovery has existed for decades, but historically required specialized corpora, terminology, and methods.

**Moved bottleneck:** broad web retrieval, long-context language models, and cheap synthesis make cross-domain exploration accessible to one ordinary user.

**Still-existing bottleneck:** the model can invent the bridge. Source ownership, genealogy, and validation remain necessary.

## 6. Current platform decision: X versus standalone feed

Direct X integration is attractive only at the interaction layer: the user already scrolls there, so a native-feeling injected card would have almost zero behavioral friction.

It loses on the infrastructure layer. X explicitly prohibits non-API website scripting for automation, and the official API is a separate operational dependency. A browser extension that merely modifies the local DOM could potentially avoid posting automation, but it would still depend on a changing private interface and add maintenance before the content loop has proved itself.

GitHub Pages has the opposite profile: nearly zero product risk, no server, no framework, Git-backed history, and a `/docs` publishing path. It can mimic the useful interaction pattern—compact post, click to expand—without cloning X visually or depending on X.

**Decision:** standalone first. Revisit an extension only after 30 feed items prove the content engine.

## 7. Architecture

```text
                     topic ledger
                         |
                         v
                  DISCOVERY POLICY
        bridge / failed dream / vocabulary / blind
                         |
                         v
               TURN 1 FRONTIER RESEARCH
                 frozen Markdown report
                         |
                 [one run boundary]
                         |
                         v
               TURN 2 ADVERSARIAL PASS
          claim check / counterevidence / correction
                         |
               survives? ----- no ---> retire
                  |
                 yes
                  v
             PACKAGE FOR READING
        feed hook + 600–1500 word article
                  |
                  v
               docs/feed.json
                  |
                  v
              GitHub Pages
```

No database is required. `automation-state.json` tells the hourly task which half to execute.

## 8. Cheap falsification

The v1 should not be judged by page views. There is one reader.

After 30 published articles, sample the actual experience:

- How many were read past the hook?
- How many felt genuinely surprising?
- How many introduced a term worth remembering?
- How many led to an external search or follow-up question?
- How many were accurate but not worth the time?
- How many were obvious extensions of recent interests?
- How many were later found materially wrong?

The harshest failure signal is **predictability**. If the reader can infer most upcoming topics from the last week of conversations, Unasked has become another personalized recommender bubble.

## 9. What would reverse the current decisions

Build X integration sooner if the standalone site repeatedly produces good items but is ignored because switching contexts is the dominant friction.

Replace Git-as-database if concurrent writers or large structured feedback history make file mutation genuinely painful.

Add stronger preference learning if 30–50 items show too many irrelevant misses **and** the memory-blind control can remain intact.

Abandon the two-run cycle if the second pass rarely changes anything *and* targeted audit measurements show it is not finding material errors.

## 10. Sources used for the project decision

- Reza Jafari Ziarani & Reza Ravanmehr, *Serendipity in Recommender Systems: A Systematic Literature Review* (2021), DOI 10.1007/s11390-020-0135-9.
- Don R. Swanson, *Fish oil, Raynaud's syndrome, and undiscovered public knowledge* (1986), DOI 10.1353/pbm.1986.0087.
- Neil R. Smalheiser, *Rediscovering Don Swanson: the Past, Present and Future of Literature-Based Discovery* (2017), PMCID PMC5771422.
- X Help, *Automation rules*, updated April 2026.
- GitHub Docs, *Configuring a publishing source for your GitHub Pages site*.
- Frontier Research V3 and Frontier Research V3 Part Two from the user's canonical research sources.
