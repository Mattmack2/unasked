# Side Research Turn 1 — The shadow market for AI subscription capacity

**Status:** TURN 1 FROZEN — NOT YET ADVERSARIALLY VALIDATED  
**Date:** 2026-08-21  
**Track:** temporary side research; normal Unasked discovery pipeline remains frozen  
**Primary pipeline checkpoint:** `research/full/2026-08-21-air-monitor-biodiversity-turn1.md` remains untouched and pending later Turn 2

## Research question

**How are people converting fixed-price or generously quotaed AI subscriptions into reusable API-like capacity, what products and business models have emerged around that arbitrage, what abuse patterns have providers already detected or shut down, and how prevalent does the ecosystem appear to be?**

This is not a deployment guide. It intentionally omits instructions for account farming, credential extraction, quota bypass, fraud-control evasion, proxy rotation, or other operational abuse. The point is to understand the market structure, economics, policy boundary, and evidence of prevalence.

---

## 0. Trigger and first correction

The immediate trigger is an August 21, 2026 post by Tibo Sottiaux of OpenAI's Codex/ChatGPT organization. Responding to complaints that Codex usage limits appeared different, he said OpenAI had found that **many affected users were using Sub2API**. He drew a specific boundary: converting a subscription into API traffic and then re-serving or sharing it across many users is not supported and can be flagged by OpenAI's fraud-prevention systems. In the same post, he said users are fine using their subscription through **Sign in with ChatGPT**, including official clients and OSS clients such as Pi or OpenCode that support the sign-in flow.

Source mirror of Tibo post:  
https://zamantika.com/de/thsottiaux/status/2090675027670978569  
Direct X status:  
https://x.com/thsottiaux/status/2090675027670978569

That immediately breaks a simplistic framing I started with.

**The relevant distinction is not “official client versus proxy.”**

At least four different things can look technically similar from outside:

1. one person using their own subscription from a different client;
2. translating one subscription's protocol into an OpenAI-compatible local endpoint;
3. pooling several subscriptions so workloads can rotate across their quotas;
4. issuing new API keys to unrelated downstream users and selling them metered access backed by those subscriptions.

Providers treat these very differently. OpenAI currently tolerates category 1 through supported sign-in flows. GitHub goes further and officially documents multi-user Copilot SDK applications where every downstream user authenticates with **their own** Copilot subscription. Google and Anthropic currently impose much stricter limits on subscription OAuth being reused in third-party software.

So the interesting object is not a particular proxy. It is an emerging form of **entitlement arbitrage**: converting a product sold under one meter and usage assumption into capacity that behaves like a different product.

---

# 1. The economic mechanism: meter transformation

Consumer AI subscriptions and APIs are economically different products even when they ultimately reach the same or similar models.

A subscription generally offers:

- a fixed monthly price;
- soft or hard rolling quotas;
- subsidized marginal usage up to those limits;
- assumptions about individual use and supported clients;
- capacity management through rate limits and fair-use controls.

A commercial API generally offers:

- explicit per-token or per-request pricing;
- programmatic access;
- predictable machine-speed automation;
- higher or separately negotiated rate limits;
- a contractual path for serving downstream users.

If a $20–$200 subscription can be made to behave like a metered API whose equivalent list-price usage would cost substantially more, the difference creates an arbitrage opportunity.

The most important transformation is therefore:

```text
fixed-price / quota-limited individual entitlement
                    ↓
             protocol adapter
                    ↓
      fungible API-like model capacity
```

Once the capacity is API-like, additional layers become possible:

```text
account acquisition
      ↓
credential / token lifecycle management
      ↓
protocol conversion
      ↓
multi-account scheduling and quota pooling
      ↓
downstream API keys
      ↓
per-token billing and payments
      ↓
retail relay / reseller service
```

This stack is visible in public open-source projects. It is no longer only a few scripts that forward requests.

---

# 2. CLIProxyAPI and Sub2API are different layers

This distinction matters because recent discussion often treats them as synonyms.

## CLIProxyAPI: compatibility and local routing

`router-for-me/CLIProxyAPI` is a proxy/gateway that exposes compatible OpenAI, Gemini, Claude and Codex interfaces for AI CLI subscriptions and OAuth-authenticated services. It supports multiple providers, multiple accounts, translation between API formats, and local routing.

By August 2026, public star-history data shows roughly **48,000 GitHub stars and ~7,400 forks**. The project dates to July 2025.

Source:  
https://www.star-history.com/router-for-me/cliproxyapi/

In July 2026, Tibo publicly recommended CLIProxyAPI as one way for a ChatGPT/Codex subscriber to point a Claude Code-style client at GPT-5.6 Sol. That endorsement was specifically about **one person's interoperability**, not resale or pooling subscriptions for unrelated users.

Community record of the July post:  
https://linux.do/t/topic/2568797?tl=en

This is a useful boundary case: a technical bridge can be compatible with a provider's intended use in one configuration and become abusive in another.

## Sub2API: quota distribution and commercial control plane

`Wei-Shaw/sub2api` sits one level higher. Its own description is **“AI API Gateway Platform for Subscription Quota Distribution.”** Its advertised features include:

- multiple upstream subscription/OAuth accounts;
- downstream API-key generation;
- account scheduling and sticky sessions;
- token-level usage accounting;
- per-user and per-account concurrency control;
- rate limiting;
- built-in payment processing;
- admin dashboards and model-routing groups.

The README explicitly warns that use may violate Anthropic or other upstream terms. It also says the maintainers do not authorize commercial operation based on the project.

Source:  
https://github.com/Wei-Shaw/sub2api

Public star-history data currently shows roughly **37,000–38,000 stars and ~7,700 forks**; GitHub's topic page lists about **88 public repositories** tagged around `sub2api` as of this research pass.

Sources:  
https://www.star-history.com/wei-shaw/sub2api/  
https://github.com/topics/sub2api

The key difference is architectural: CLIProxyAPI can simply make a user's own subscription usable from another client. Sub2API already contains the pieces needed to turn **a pool of upstream entitlements into a retail API service**.

---

# 3. The ecosystem is broader than the gateway

The Sub2API README now contains more than twenty sponsor entries. Many advertise AI relay services; others sell accounts, residential IPs, anti-detect/browser tooling, or infrastructure aimed at multi-account operations.

Several relay sponsors advertise prices dramatically below official API list pricing—for example claims of access at 2–15% of official reference prices. Those vendor claims are **not independently verified here**, and cheap relay pricing can have many explanations besides subscription abuse: negotiated API discounts, cache-heavy workloads, loss-leading promotions, model substitution, stolen/fraudulent supply, or simple marketing claims.

What matters for Turn 1 is that there is plainly a commercial market around cheap unified model access, and Sub2API is surrounded by vendors that serve it.

Source, current README sponsor section:  
https://github.com/Wei-Shaw/sub2api

The public account-management layer is even more revealing. GitHub repositories now exist that advertise capabilities such as:

- bulk account registration;
- persistent account pools;
- subscription-status checking;
- OAuth/token refresh and validation;
- exporting accounts directly into Sub2API or CLIProxyAPI-compatible formats;
- rotating or assigning proxies to account records;
- managing paid workspace/team seats.

Examples inspected in this Turn 1 include `gptfree-register`, `codex-manager`, and multiple Sub2API-tagged account-registration tools. I am deliberately not reproducing their procedures or configuration details.

Sources:  
https://github.com/hyhang915/gptfree-register  
https://github.com/923548411/codex-manager  
https://github.com/topics/sub2api

This changes the mental model. The ecosystem has recognizable supply-chain layers:

**entitlement acquisition → credential lifecycle → routing → quota aggregation → billing → resale → account-risk infrastructure.**

A provisional descriptive term for this is a **shadow API market**: API-like capacity sold or redistributed outside the provider's normal API billing channel. Turn 2 should test whether an established term already exists before treating that wording as useful vocabulary.

---

# 4. Major methods people appear to use

These are categories, not instructions.

## A. Personal client substitution

A subscriber authenticates their own account in a different client or local wrapper. No other user receives the entitlement.

This is provider-specific, and can be explicitly supported.

OpenAI's Tibo says personal `Sign in with ChatGPT` use is fine through official or OSS clients that support it. GitHub's official Copilot SDK goes further: it documents OAuth apps in which each user authenticates with their own GitHub account and Copilot subscription, and the usage remains attributed to that user.

Source:  
https://docs.github.com/en/copilot/how-tos/copilot-sdk/setup/github-oauth

This category should not be called abuse by default.

## B. Subscription-to-API conversion

A fixed-price subscription's authenticated model endpoint is wrapped in a standard API interface so arbitrary software can call it programmatically.

This is the core capability of projects such as CLIProxyAPI and many smaller Copilot/Gemini/Claude/Codex proxy projects.

On its own, the policy status depends on provider, client, and usage pattern.

## C. Multi-account pooling and quota rotation

Multiple subscription accounts are placed behind one gateway. The scheduler selects accounts based on availability, cooldown, quota, or session affinity.

This does two things economically:

- aggregates many individual quota buckets into a larger virtual pool;
- smooths the periods when one account is throttled or exhausted.

Sub2API and CLIProxyAPI both advertise multi-account scheduling capabilities. Pooling personally owned accounts is not automatically equivalent to resale, but it becomes more clearly adversarial when used to defeat per-user limits or serve unrelated downstream users.

## D. Re-serving and resale

The gateway issues its own API keys to downstream customers, meters their tokens, accepts payment, and routes their requests across upstream subscription accounts.

This is the exact pattern Tibo singled out: converting a subscription into API traffic **to re-serve or share across many users**.

Sub2API has built-in user billing and payments, so this is not an accidental secondary use of the software; the product architecture can support a relay business directly.

## E. Account farming and entitlement supply

Public tools automate creation, verification, subscription checking, credential refresh, and export of large account pools. Related services sell pre-made accounts, discounted subscriptions, workspaces/seats, or top-ups.

This is where consumer-subscription arbitrage starts to resemble older account-farming markets. Residential proxy and browser-isolation vendors are visibly adjacent to the ecosystem because large account pools trigger identity, geography, device and fraud controls.

Turn 1 is not attempting to distinguish every legitimate multi-account administrator from abusive account farming. The existence of tooling is the signal; actual intent and prevalence require Turn 2.

## F. Free-tier and promotional quota harvesting

Generous free developer quotas create the same economic incentive as subscriptions. Gemini CLI is a strong example: Google currently advertises up to 1,000 model requests per user per day for individual Google-account auth, with higher fixed-price quotas for Pro and Ultra plans.

Source:  
https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/quota-and-pricing.md

A sufficiently large collection of accounts can convert “free per user” into meaningful aggregate inference capacity. Google's 2026 enforcement history shows that third-party tools were in fact attempting to piggyback on Gemini/Antigravity OAuth and quota.

## G. Referral, reset and promotional-benefit farming

Promotions that grant rate-limit resets or extra usage create a smaller version of the same arbitrage.

OpenAI's current referral terms explicitly exclude duplicate redemptions, self-invites, address aliases used to evade eligibility, device-linked self-referrals, and other suspected fraudulent activity. Referral resets and temporary usage benefits are not transferable API credits.

Source:  
https://help.openai.com/en/articles/20001271

The terms are strong evidence that providers anticipate this abuse class. Turn 1 does **not** establish how often it occurs.

---

# 5. What providers have already detected or stopped

## Google: Antigravity/Gemini third-party OAuth piggybacking

This is the clearest documented enforcement case I found.

On February 27, 2026, the Gemini CLI team said recent account disruptions were caused by **Antigravity bans targeting use of third-party tools or proxies to access Antigravity resources and quotas**. Because abuse prevention operated at a shared backend layer, the enforcement also blocked Gemini CLI and Code Assist for some users. Google reset the affected bans, introduced a recertification/unban process, and warned that a second violation could become permanent.

The same announcement explicitly says using third-party software to **harvest or piggyback on Gemini CLI OAuth authentication** is a direct violation.

Source:  
https://github.com/google-gemini/gemini-cli/discussions/20632

Three weeks later, on March 18, Google announced stronger abuse detection for third-party OAuth use, traffic prioritization based partly on account standing, and removal of Gemini Pro models from the free CLI tier starting March 25.

Source:  
https://github.com/google-gemini/gemini-cli/discussions/22970

Google's current Gemini CLI FAQ retains the bright line: third-party software using Gemini CLI OAuth to access backend services is prohibited; supported third-party agent use should go through an API key.

This is a concrete example of a generous developer entitlement being partially closed after proxy/piggyback usage became significant enough to trigger product-wide enforcement changes.

## Anthropic: subscription credentials versus third-party products

Anthropic's current Claude Code legal documentation says Pro and Max usage limits assume **ordinary, individual usage**. It states that developers building products should use API-key authentication and that Anthropic does not permit third-party developers to offer Claude.ai login or route Free/Pro/Max plan credentials on behalf of users.

Source:  
https://code.claude.com/docs/en/legal-and-compliance

Its May 2026 login guidance similarly says third-party tools that misrepresent their identity or route third-party traffic against subscription limits are prohibited.

Source:  
https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account

In April 2026, Anthropic also moved to stop Claude subscription limits from being used through third-party harnesses such as OpenClaw, according to TechCrunch reporting on Anthropic customer communications and statements from Claude Code leadership.

Source:  
https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/

Anthropic then proposed a more explicit economic separation: interactive subscription usage would stay in the normal quota while Agent SDK, headless `claude -p`, GitHub Actions and third-party Agent SDK apps would receive a separate fixed monthly credit and then spill into metered usage credits. Anthropic **paused that plan on June 15 before it took effect**, saying it was working on a better design.

Source:  
https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan

That failed/pause-and-rethink attempt is important. Providers are not only banning abuse; they are trying to redesign meters so legitimate personal automation is possible without creating an unlimited substitute for the commercial API.

## OpenAI: personal interoperability versus re-serving

OpenAI currently draws a more permissive client boundary than Google or Anthropic.

Tibo's August 21 statement says a subscriber is fine using `Sign in with ChatGPT` through official clients or OSS clients such as Pi and OpenCode. The unsupported pattern is converting the subscription into API traffic that is then re-served/shared across many users; he says this is flagged by fraud-prevention systems.

That fits OpenAI's broader rules. Its account-sharing policy says an account is intended for the individual who created it. Its Services Agreement for business/developer services forbids credential sharing/resale, buying/selling/transferring API keys, circumventing rate limits or restrictions, and configuring services to avoid usage limits.

Sources:  
https://help.openai.com/en/articles/10471989  
https://openai.com/policies/services-agreement/

Turn 2 should verify the exact consumer/Codex terms governing Plus/Pro subscription use rather than over-applying the business Services Agreement.

## GitHub Copilot: an important counterexample

GitHub's official Copilot SDK explicitly supports OAuth applications where each downstream user authenticates with their **own GitHub account and Copilot subscription**. GitHub documents this as appropriate for multi-user apps, internal tools and SaaS products.

Source:  
https://docs.github.com/en/copilot/how-tos/copilot-sdk/setup/github-oauth

This is a useful counterexample to any claim that subscription-backed third-party model access is inherently unsustainable. A provider can decide to support it if identity, attribution, rate limits and billing remain attached to each end user.

The abuse boundary is therefore not technical architecture alone. It is the **entitlement mapping**: who bought the quota, who consumes it, whether the provider can attribute the use, and whether the product is being transformed into something its price/meter was not designed to supply.

---

# 6. How prevalent is this?

## What can be said with some confidence

The tooling ecosystem is **large enough to be non-fringe** in developer communities.

Public signals include:

- CLIProxyAPI: roughly 48k GitHub stars and 7k+ forks;
- Sub2API: roughly 37k–38k stars and ~8k forks;
- ~88 public GitHub repositories currently carrying the `sub2api` topic;
- thousands of issues/PRs and hundreds of contributors around Sub2API;
- a sponsor ecosystem containing many commercial relay, account, proxy and multi-account infrastructure vendors;
- public account-registration and account-pool management tools designed to export directly into Sub2API/CLIProxyAPI ecosystems;
- provider enforcement announcements from Google and Anthropic specifically addressing third-party subscription/OAuth routing;
- Tibo's statement that **many** users in the recent Codex quota complaint cohort were using Sub2API.

The Google March 18 abuse-mitigation announcement alone accumulated more than 400 comments and 500 replies, indicating a substantial affected user community, although discussion volume is not equivalent to abuse volume.

## What cannot yet be said

I have found **no reliable public denominator** for:

- how many Sub2API or CLIProxyAPI installs are active;
- what fraction are personal versus multi-user;
- what fraction of commercial relay traffic comes from consumer subscriptions rather than legitimate wholesale/API supply;
- what fraction of OpenAI/Anthropic/Google subscription inference is routed through unofficial software;
- how much provider compute cost is attributable to this arbitrage;
- how many accounts have been flagged or banned.

GitHub stars are especially weak evidence for active abuse. A user may star a project out of curiosity, use it only locally, or never deploy it. Forks are somewhat stronger evidence of engagement but still not active traffic.

So the strongest provisional conclusion is:

> **The ecosystem is visibly mature and widespread as tooling, but its share of actual model usage and the proportion that is abusive remain unknown.**

---

# 7. The most important connection: this is a market-design problem, not only a fraud problem

The first version of this research question was “How are people exploiting generous subscriptions?” That is too narrow.

The repeated pattern across OpenAI, Anthropic, Google and GitHub is a mismatch between two product designs:

```text
consumer / developer subscription
fixed price + per-user quota + subsidized marginal inference

versus

API
metered price + automation + redistribution + explicit downstream use
```

As models become better at long-running agentic work, the difference becomes economically larger. A human chat interface naturally limits request rate. An agent harness can consume inference continuously, spawn parallel work, run overnight, or service other software. A flat subscription that is generous enough for a power user may become deeply underpriced if treated as production API capacity.

Providers then have several choices:

- restrict clients;
- enforce one-user/one-entitlement mapping;
- detect relay or pooling behavior;
- lower quotas;
- prioritize trusted/paid traffic;
- split interactive and programmatic usage meters;
- expose an official subscription-backed OAuth/SDK path with per-user attribution;
- or push programmatic workloads entirely onto pay-as-you-go API pricing.

Google has mainly chosen restriction and abuse detection for Gemini CLI OAuth. Anthropic has moved toward restriction while experimenting with a separate programmatic credit bucket. OpenAI currently appears more permissive about client choice while policing re-serving/sharing. GitHub provides the cleanest official example of subscription-backed third-party apps with one subscription mapped to one authenticated user.

This suggests a durable policy frontier: **how much programmable agency can a provider economically bundle into a flat individual subscription before the subscription becomes an API arbitrage instrument?**

---

# 8. What this means for legitimate subscription optimization

This report is not primarily about improving our own usage, but the boundary is useful.

There is a large difference between:

- making prompts/context/tools more efficient;
- choosing the right model or reasoning level;
- using provider-supported clients and OAuth;
- scheduling one's own work within published quotas;

and:

- creating extra identities to multiply quota;
- pooling unrelated users behind one person's entitlement;
- rotating accounts to defeat per-user limits;
- reselling consumer subscription inference as API traffic;
- farming promotional resets/credits;
- disguising traffic to evade fraud controls.

The first group improves the useful work extracted from the entitlement the user actually bought. The second changes the entitlement boundary or tries to defeat its meter.

That distinction should remain explicit in any later report connecting this research back to subscription efficiency.

---

# 9. Turn 2 adversarial targets

Turn 2 should not simply expand this report. It should try to break it.

1. **Tibo statement:** verify the August 21 post and whether OpenAI has any first-party written documentation clarifying OSS-client sign-in versus API re-serving.
2. **Sub2API versus CLIProxyAPI:** determine whether Sub2API itself necessarily violates OpenAI terms or whether particular deployment modes are the issue.
3. **Actual scale:** look for download counts, container pulls, telemetry, relay customer counts, operator disclosures, or provider statistics that can improve on GitHub-star proxies.
4. **Commercial supply provenance:** test whether the ultra-cheap relay market is actually subscription-backed, official discounted API, model substitution, caching, stolen accounts, promotional supply, or a mixture.
5. **Google enforcement:** verify the Antigravity ban timeline and whether the policy applies to Gemini CLI personal OAuth, Antigravity quotas, or both.
6. **Anthropic enforcement:** reconstruct the January–April 2026 OAuth/harness changes from first-party sources where possible; distinguish subscription OAuth, Agent SDK, and `claude -p`.
7. **OpenAI terms:** inspect current consumer Terms of Use and Codex-specific terms rather than relying on the business Services Agreement for individual subscription claims.
8. **GitHub counterexample:** establish the exact limits of official Copilot SDK subscription-backed third-party apps and whether GitHub permits arbitrary model API relaying or only SDK-defined application use.
9. **Account farming:** find evidence of which account-acquisition techniques have actually been blocked and which are merely advertised by tooling.
10. **Referral/promo abuse:** determine whether there are documented incidents or only preventive terms.
11. **Provider economics:** look for credible estimates of subscription-vs-API effective cost under heavy agentic workloads.
12. **Vocabulary:** search for established terms such as subscription arbitrage, quota arbitrage, entitlement arbitrage, credential pooling, shadow API, relay market, or account farming before treating any of our descriptive vocabulary as novel.
13. **False-positive cost:** investigate cases where fraud detection caught ordinary multi-device or third-party-client users, because enforcement error is part of the market-design problem.
14. **Regional ecosystems:** determine whether the Chinese relay/sub2api ecosystem is disproportionately visible simply because its tooling is public, while equivalent Western services use different terminology.

---

# Provisional Turn 1 conclusion

Sub2API is not an isolated trick. It is one component in a maturing stack that can transform **fixed-price, per-user AI entitlements into pooled, API-like capacity**.

The stack now includes compatibility proxies, multi-account schedulers, quota dashboards, downstream API-key issuance, billing systems, account-management tools, and commercial relay vendors. Public project popularity shows that this tooling is not fringe, but it does not tell us how much real inference traffic is abusive.

The most important correction is that **third-party access is not itself the abuse**. OpenAI currently permits personal OSS clients using its supported sign-in flow, and GitHub officially supports multi-user Copilot applications where each person brings their own subscription. Google and Anthropic currently impose tighter subscription-OAuth restrictions.

The clearer abuse pattern is a broken entitlement mapping: one person's or one account pool's subsidized subscription quota is converted into capacity for other users, resold, or multiplied through account/credit farming in ways that defeat the provider's intended meter.

The deeper question for Turn 2 is not merely how providers catch this. It is whether fixed-price AI subscriptions can remain generous for power users once agent software can consume them at machine speed without providers creating a permanent arbitrage gap against their own APIs.
