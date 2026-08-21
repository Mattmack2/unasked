# Turn 2 — AI subscription-capacity shadow market validation

**Date:** 2026-08-21  
**Turn 1:** `research/full/2026-08-21-ai-subscription-shadow-market-turn1.md`  
**Verdict:** `SURVIVES_WITH_CORRECTIONS`  
**Novelty:** `NEW SYNTHESIS` for the cross-provider comparison; underlying mechanisms are established

## Validated answer

There is a large and active ecosystem that converts product subscriptions and CLI entitlements into API-compatible capacity. The strongest examples are no longer thin hobby proxies: Sub2API provides account pools, downstream API keys, schedulers, concurrency/rate controls, token accounting, user management, and payments; CLIProxyAPI exposes several coding-product subscriptions through common API protocols and supports multiple accounts.

The important correction is that **subscription-to-software access is not itself the abuse boundary**.

Providers currently draw different lines:

- **OpenAI:** supported personal use can occur through third-party/OSS clients using Sign in with ChatGPT. OpenAI's Codex lead explicitly says converting subscription usage into API traffic and re-serving or sharing it across many users is the unsupported pattern that gets fraud-flagged.
- **Google:** Gemini CLI is stricter. Google says third-party software may not harvest or piggyback on Gemini CLI OAuth to directly access its backing services; it recommends API keys for third-party coding agents.
- **Anthropic:** individual programmatic use is supported through Claude Code, `claude -p`, and the Agent SDK, but Anthropic says third-party developers may not route consumer subscription credentials on behalf of their users. It is actively experimenting with how programmatic subscription usage should be metered.
- **GitHub Copilot:** officially supports multi-user third-party apps when each user authenticates separately and usage is attributed to that user's Copilot entitlement; organization-attributed server-to-server billing is also supported.

Across these policies, the cleanest common boundary is **attribution and beneficiary**, not whether HTTP or OAuth is involved. A third-party client can be legitimate when usage remains attributable to the entitled user. The economically dangerous transformation is when one person's subsidized allowance becomes fungible capacity for unrelated downstream demand.

## Material corrections from Turn 1

### 1. `entitlement arbitrage` is useful analysis, not established vocabulary

I did not find a stable research or industry term that cleanly covers this entire phenomenon. "Subscription-to-API," "API relay," "reverse proxy," "account pool," "OAuth proxy," and "subscription quota distribution" are the vocabulary used by projects and communities. `Entitlement arbitrage` is therefore retained only as an explanatory synthesis.

### 2. Third-party clients must be split from credential piggybacking and resale

Turn 1 grouped too much together.

OpenAI's current statement explicitly allows supported OSS clients consuming a user's own Codex allowance. GitHub goes further and officially supports SaaS/multi-user Copilot SDK applications where each user authorizes the app and consumes their own subscription.

Google, by contrast, forbids a third party from harvesting Gemini CLI OAuth and directly accessing the backing service. This is provider policy, not a universal technical definition of abuse.

### 3. Anthropic's planned programmatic-usage split did **not** take effect

Anthropic announced that, from June 15, 2026, Agent SDK, `claude -p`, GitHub Actions, and third-party Agent SDK usage would move to a separate monthly credit ($20 Pro, $100 Max 5x, $200 Max 20x, with other plan variants).

The official Help Center page now says the change was paused on June 15. Programmatic and third-party Agent SDK usage continues to draw from subscription limits for now. This reversal is more informative than the original plan: Anthropic is visibly trying to price the boundary between interactive subscription use and programmable capacity, but has not settled it.

### 4. Google's enforcement was real, but the first wave was not the final policy mechanism

Google's Gemini CLI project publicly addressed the Antigravity/Gemini CLI suspension wave in February 2026. It restored currently affected accounts, created a self-service recertification process, and said a second ToS violation could lead to permanent suspension. Its current FAQ clearly says OAuth piggybacking through third-party clients can cause immediate suspension or termination.

This establishes both enforcement and a false-positive/collateral-control problem: Google moved from blunt bans toward notification, appeal/recertification, and a second-offense rule.

### 5. OpenAI's Sub2API statement is strong but narrow

Tibo's August 21 statement says that, among people OpenAI investigated over Codex usage-limit complaints, "many" were using Sub2API and that re-serving/shared subscription-to-API use is fraud-flagged. It does **not** say that all recent limit complaints were caused by abuse, nor that every Sub2API user is reselling access.

Contemporaneous Reddit threads contain many self-reports from users who say they never used Sub2API yet saw worse limits. Those reports cannot establish false positives, but they are enough to reject a causal claim that Sub2API explains the whole complaint wave.

### 6. Project popularity proves ecosystem scale, not inference volume

Fresh GitHub metadata on 2026-08-21:

- `Wei-Shaw/sub2api`: **38,327 stars**, **7,974 forks**, created 2025-12-18.
- `router-for-me/CLIProxyAPI`: **48,217 stars**, **7,435 forks**, created 2025-07-01.

Those are unusually large developer-tool footprints. Sub2API's live issue tracker includes plan-specific Codex quota and 429 reports, showing real use against current provider accounts.

But there is still no defensible denominator for active deployments, accounts, users, or tokens. Sponsor claims such as extremely low relative pricing or tens of billions of tokens per day are self-reported marketing and are not used as prevalence measurements.

## What methods are actually in use?

The ecosystem separates into layers rather than one trick.

### Client portability

A user runs their own subscription through a different interface/harness. This can be supported (OpenAI's cited OSS clients, GitHub Copilot SDK), provider-restricted (Gemini CLI OAuth), or subject to provider-specific metering (Anthropic).

### Protocol conversion

A wrapper converts a product-specific interface into OpenAI-, Anthropic-, Gemini-, or Codex-compatible HTTP semantics. This lets ordinary SDKs and agents consume product-backed inference.

### Multi-account scheduling

Several upstream accounts are registered and selected based on availability, quota, health, or session affinity. CLIProxyAPI advertises round-robin load balancing; Sub2API has smart scheduling and account-level concurrency controls.

### Pooled quota

Multiple subscriptions become one logical supply pool. This can increase concurrency and flatten individual reset windows. Pooling for one owner is economically different from pooling for customers, though providers may still restrict it.

### Re-serving / retail relay

The gateway issues its own API keys, measures downstream usage, charges users, and forwards requests through subscription accounts. Sub2API's built-in billing/payment stack makes this use case explicit even though the project now carries strong upstream-ToS warnings and disclaims commercial authorization.

### Account-supply and anti-association services

Sub2API's sponsor ecosystem includes sellers of AI subscription accounts/top-ups and residential-IP/account-isolation services. That is direct evidence that acquisition, replacement, and account-risk management exist as adjacent businesses. It does not establish how many Sub2API deployments use them.

### Free/promo-quota aggregation

The same architecture can aggregate free or promotional entitlements. The open-source relay ecosystem discusses this frequently, but I found no reliable data separating free-tier harvesting from paid-subscription pooling.

### Credential theft

Stolen accounts and API keys are a separate criminal supply chain. They can feed relay markets, but they should not be conflated with users exploiting the economics of legitimately purchased subscriptions.

## What do relay services sell?

Their product is closer to a miniature inference utility than a proxy:

- common API protocol across providers;
- one downstream key;
- access to subscription-backed coding models;
- account rotation and failover;
- higher effective concurrency;
- quota-window smoothing;
- usage dashboards and token accounting;
- per-user limits;
- billing/top-ups;
- regional access convenience;
- model/provider routing.

The economic attraction is straightforward. Consumer coding plans are priced around an expected individual duty cycle. An automated gateway can keep several entitlements busy, route around exhausted windows, and sell only the consumed slices. If the usable included inference is worth materially more at API list prices than the seat costs, a resale margin exists until enforcement, downtime, replacement accounts, and operational costs erase it.

## What has providers actually stopped or changed?

### Google: ban, restore, formalize

This is the clearest completed enforcement cycle. Google detected a class of third-party OAuth use, suspended accounts, restored the first wave, added explicit documentation, and created recertification with escalating penalties.

### Anthropic: restrict routing, experiment with meter design

Anthropic explicitly restricts third-party developers from routing consumer subscription credentials for their users. It also tried to separate programmable subscription usage into a dedicated monthly credit, then paused the launch. That is not a ban-wave story so much as evidence that pure fraud enforcement does not solve legitimate single-user automation demand.

### OpenAI: allow client portability, flag re-serving

OpenAI's current boundary is comparatively permissive: OSS client use through Sign in with ChatGPT is allowed, while converting that entitlement to shared/resold API capacity is fraud-flagged. The exact fraud-detection mechanism is not public and this report does not infer it.

### GitHub: make the legitimate version explicit

GitHub's Copilot SDK turns a common gray-market demand into a supported architecture. Multi-user apps can use OAuth, but each session carries the corresponding user's identity and subscription. Server-to-server organization usage has an explicit billing owner. This removes the pooling ambiguity at the protocol level.

## How prevalent is it?

### What is established

The developer ecosystem is large enough to be operationally important:

- two major open-source gateway projects have roughly **86,000 combined GitHub stars** and **15,000 combined forks**;
- both support current high-value coding subscriptions;
- Sub2API exposes production-style billing and user-management features;
- there is a visible relay/account/proxy sponsor ecosystem;
- Google conducted a large enough enforcement wave to publish reinstatement infrastructure;
- OpenAI is seeing Sub2API among real fraud/usage-limit investigations.

### What is unknown

There is no credible public estimate for:

- percentage of AI subscribers doing this;
- percentage of paid coding inference served through relays;
- active Sub2API/CLIProxyAPI deployments;
- number of upstream accounts in commercial pools;
- average account lifetime under enforcement;
- share of relay supply from legitimate subscriptions versus compromised, promotional, or API-key sources.

So the correct prevalence verdict is:

> **large visible ecosystem; unknown share of total inference.**

Any stronger percentage would currently be invented.

## Strongest synthesis

The cross-provider comparison suggests a more precise model than "people are abusing subscriptions."

Consumer AI plans combine two things:

1. **identity-bound access**, and
2. **a subsidized inference allowance whose economics assume a characteristic user behavior.**

Agentic software breaks the second assumption without necessarily breaking the first. A single legitimate user can now keep a coding model busy for hours, invoke it headlessly, or orchestrate many tasks. That makes it harder to distinguish a power user from an inference reseller by raw consumption alone.

Providers therefore have three broad choices:

- **surface-bound access:** only the official product may consume the entitlement (Google's current Gemini CLI OAuth approach);
- **identity-bound portability:** third-party clients are allowed as long as the same entitled person is the beneficiary (OpenAI's current Codex stance; GitHub's Copilot SDK goes furthest in formalizing this);
- **separate programmable meter:** automation is supported but budgeted differently from interactive use (the direction Anthropic proposed, then paused).

This is the durable story. The shadow relay market is partly an abuse ecosystem, but it is also evidence that flat-rate human subscriptions and machine-speed agents are becoming economically incompatible unless providers explicitly define programmable entitlements.

## Semantic bank

```yaml
question: How are AI subscriptions converted into API-like capacity, what is sold, what has been stopped, and how prevalent is it?
validated_answer: Mature gateways can turn product/OAuth subscriptions into API-compatible, schedulable, billable capacity. The clearest abuse pattern is pooling or re-serving individual entitlements to unrelated downstream users; personal third-party access is provider-specific and can be explicitly supported.
mental_model_delta: The important boundary is not UI versus API. It is whether consumption remains attributable to the person or organization that owns the entitlement, and whether the subscription's subsidized allowance is being transformed into fungible wholesale capacity.
why_interesting: Agentic software makes a legitimate individual user look more machine-like, forcing providers to distinguish power-user automation from resale without simply banning all programmability.
tangible_examples:
  - Sub2API: multi-account pools, downstream keys, token billing, scheduling, payments.
  - CLIProxyAPI: unified compatible API over several coding-product subscriptions with account load balancing.
  - Google 2026 suspension/reinstatement and recertification process for third-party OAuth piggybacking.
  - OpenAI 2026 statement allowing supported OSS clients but fraud-flagging re-serving/shared subscription-to-API use.
  - GitHub Copilot SDK: official per-user OAuth for multi-user SaaS, preserving subscription attribution.
  - Anthropic announced then paused a dedicated programmatic subscription credit.
strongest_caveat: GitHub popularity and provider enforcement prove a substantial ecosystem, not its share of global model traffic. No public denominator supports a prevalence percentage.
what_changed_in_turn2:
  - split legitimate client portability from pooling/resale
  - corrected Anthropic Agent SDK credit as paused, not active
  - narrowed Google's story to OAuth-backend piggybacking rather than all wrappers
  - rejected stars/forks as traffic proxies
  - reframed the durable issue as entitlement attribution plus programmable-meter design
what_not_to_claim:
  - that all Sub2API use is resale
  - that all third-party Codex clients are unsupported
  - that Sub2API caused all recent Codex limit complaints
  - that GitHub stars equal active users
  - that advertised relay discounts reflect verified costs
  - that provider fraud systems use any specific fingerprint or detection mechanism
  - that a known percentage of AI inference comes from subscription pooling
```

## Sources

- Tibo/OpenAI statement, 2026-08-21: https://x.com/thsottiaux/status/2090675027670978569 (mirrored/indexed publicly)
- OpenAI Terms of Use: https://openai.com/policies/terms-of-use/
- OpenAI Account Sharing Policy: https://help.openai.com/en/articles/10471989
- OpenAI Sign in with ChatGPT: https://help.openai.com/en/articles/20001410-sign-in-with-chatgpt
- Sub2API: https://github.com/Wei-Shaw/sub2api
- CLIProxyAPI: https://github.com/router-for-me/CLIProxyAPI
- Gemini CLI ToS/privacy: https://geminicli.com/docs/resources/tos-privacy/
- Gemini CLI FAQ: https://geminicli.com/docs/faq/
- Google ban/reinstatement discussion: https://github.com/google-gemini/gemini-cli/discussions/20632
- Claude Code legal/compliance: https://code.claude.com/docs/en/legal-and-compliance
- Claude subscription authentication: https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account
- Anthropic Agent SDK credit change/pause: https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan
- GitHub Copilot SDK authentication: https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/authenticate
- GitHub Copilot OAuth setup: https://github.com/github/copilot-sdk/blob/main/docs/setup/github-oauth.md
