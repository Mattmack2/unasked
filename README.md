# Unasked

**A private horizon scanner for things you did not know to look up.**

Unasked is a small static research product for one reader. It combines a broad question-discovery policy, two separate research/validation passes, a durable candidate ledger, and a quiet GitHub Pages reading surface.

It is intentionally **not** a generic news feed and **not** a large agent platform.

## Core loop

```text
candidate frontier
      ↓
question + consequence
      ↓
TURN 1 — research, then freeze
      ↓  (later scheduled invocation)
TURN 2 — attack, validate, publish/retire
      ↓
reader-facing field note
      ↓
feedback + durable topic/candidate memory
```

After bootstrap, an hourly run may validate the previous frozen item and then research/freeze the next one. It may never validate an item it generated in the same invocation.

## Reader contract

Every published item should offer three depths:

1. **30–60 seconds** — plain-language idea, why it is interesting, tangible edge.
2. **5–10 minutes** — mechanism, history, evidence, examples, caveats, consequences.
3. **Audit when wanted** — underlying research and validation artifacts.

The feed spans technology, science, medicine, history, sports, institutions, culture, environment, and bounded near-future work.

## Discovery grammar

The system searches through six lanes:

- BRIDGE
- FAILED DREAM
- VOCABULARY TRAPDOOR
- WEAK SIGNAL
- EXPECTATION VIOLATION
- MEMORY-BLIND

It keeps multiple candidates alive as stepping stones and uses a Pareto-style comparison rather than one magic “interestingness” score.

## Repository map

```text
PROJECT_CANONICAL.md                 durable product decisions
CONTENT_GRAMMAR.md                   reader-facing article grammar and labels
VOICE_AND_AUTHORSHIP.md              prose/authorship policy; local-edit workflow
DESIGN_LANGUAGE.md                   Field Journal visual system
RESEARCH_METHOD.md                   two-pass research/validation protocol
TOPIC_DISCOVERY.md                   question-frontier acquisition policy
AUTOMATION_PROMPT.md                 recurring ChatGPT task instructions
research/
  UNASKED_FRONTIER_REPORT_V1.md      original project decision research
  UNASKED_DISCOVERY_AND_INTERFACE_V2.md
  full/                              frozen Turn 1 / Turn 2 artifacts
state/
  automation-state.json              current pipeline state
  topic-ledger.json                  published/retired history
  candidate-archive.json             stepping stones and dormant candidates
docs/
  index.html                         GitHub Pages reader
  styles.css
  app.js
  feed.json                          published item index
  articles/                          validated reader-facing Markdown
scripts/
  validate.py                        structural checks
```

## Run locally

```bash
cd /mnt/data/unasked/docs
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Publish with GitHub Pages

Once this project is in its own repository, configure **Settings → Pages → Deploy from a branch → `main` → `/docs`**. No package manager or build step is required.

## Complexity budget

Do not add a database, server, vector store, browser extension, social API, ranking service, or multi-agent framework until the existing feed demonstrates that the research loop repeatedly produces material worth reading.
