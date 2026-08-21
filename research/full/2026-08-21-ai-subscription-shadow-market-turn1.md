# Turn 1 — The shadow market for AI subscription capacity

**Status:** TURN 1 FROZEN — SIDE REPORT  
**Date:** 2026-08-21  
**Primary domain:** COMPUTATION & TECHNOLOGY  
**Story grammar:** HIDDEN MECHANISM  
**Provisional evidence:** CURRENT RESULT + MARKET OBSERVATION

## Question

How are people converting consumer AI subscriptions into API-like capacity, what do those systems offer, which patterns have providers already detected or stopped, and how prevalent is the ecosystem?

This is a side report. The normal Unasked pipeline remains frozen on the airborne-eDNA Turn 1.

## Provisional answer

There is now a mature open-source and commercial layer that can turn interactive AI-product entitlements into something that behaves like developer API capacity.

A typical stack is:

```text
subscription/account
→ OAuth or product authentication
→ protocol adapter / compatible API
→ account scheduler
→ pooled quota
→ downstream API keys
→ usage accounting
→ optional billing / resale
```

Sub2API is an unusually explicit example. Its own documentation describes an "AI API Gateway Platform for Subscription Quota Distribution" with multiple upstream accounts, downstream API-key distribution, token-level billing, sticky scheduling, concurrency controls, rate limits, and a built-in payment system. Its sponsor list includes commercial relay services, subscription/account sellers, and residential-proxy vendors.

CLIProxyAPI occupies a lower layer of the same ecosystem. It exposes OpenAI-, Anthropic-, Gemini-, and Codex-compatible interfaces over authenticated CLI/product access and supports multi-account round-robin routing.

## Initial taxonomy

### 1. Personal client substitution

A user authenticates their own subscription in a different client or harness while remaining the only beneficiary.

This is not automatically abuse. Provider policies differ substantially.

### 2. Subscription-to-API conversion

A product login or OAuth entitlement is wrapped behind a generic API-compatible endpoint so software that was not the original product can consume it.

This may be permitted, tolerated, metered separately, or prohibited depending on provider and access method.

### 3. Multi-account pooling

Several individual accounts are combined behind a scheduler to increase aggregate availability, concurrency, or failover.

Pooling can be used personally, by a team, or as the supply layer for a relay service. Those cases should not be collapsed.

### 4. Re-serving / resale

One or more individual subscriptions are converted into downstream API keys and consumed by unrelated users. This is the clearest form of subscription-capacity arbitrage because the retail subscription becomes wholesale inference supply.

### 5. Account-supply infrastructure

Adjacent vendors sell pre-provisioned accounts, subscription top-ups, account-management services, residential IPs, and isolation tooling. Their presence in relay-project sponsor ecosystems suggests that account acquisition and account longevity have become separate commercial functions.

### 6. Free/promotional quota harvesting

A related pattern is to aggregate per-account free or promotional capacity. Evidence exists across the broader relay ecosystem, but Turn 1 did not establish a reliable estimate of how important this is relative to paid-subscription pooling.

### 7. Credential theft

Stolen API keys or compromised accounts are an adjacent black market but analytically different from subscription arbitrage. This report does not treat theft as the same phenomenon.

## What these systems offer

The common value proposition is not only lower price:

- one API-compatible interface across several providers;
- access to models attached to consumer coding subscriptions;
- higher effective concurrency through several accounts;
- failover when one account hits a usage window;
- regional accessibility and simpler networking;
- one downstream key rather than multiple product-specific logins;
- token-level usage accounting;
- commercial billing and user management;
- routing between providers or account groups.

Some relay sponsors advertise prices far below nominal first-party API rates. Those price claims are marketing, not verified cost data.

## First enforcement evidence

### OpenAI

On 2026-08-21, Tibo (@thsottiaux, Codex/ChatGPT at OpenAI) said that many users reporting altered Codex limits were using Sub2API. He drew a direct boundary: converting a subscription into API traffic and then re-serving or sharing it across many users is unsupported and gets flagged by fraud-prevention systems. He separately said users are fine using their subscription through `Sign in with ChatGPT` in official or supported OSS clients such as Pi and OpenCode.

This is an important distinction: OpenAI is not defining "non-first-party UI" as the abuse boundary.

### Google

Google took a stricter position after a 2026 enforcement wave involving Gemini CLI / Antigravity OAuth. Gemini CLI documentation now says that third-party software that harvests or piggybacks on Gemini CLI OAuth to access backend services violates applicable terms. Google initially suspended accounts, later reinstated affected users, and published a recertification process: first flagged violation can be restored after acknowledgment; a second violation can result in permanent loss of access.

### Anthropic

Anthropic's current Claude Code legal documentation distinguishes subscription OAuth from developer API-key use. It says third-party developers may not offer Claude.ai login or route requests through Free/Pro/Max plan credentials on behalf of their users. At the same time, Anthropic supports individual programmatic use through Claude Code, `claude -p`, and the Agent SDK. In 2026 it announced a separate monthly Agent SDK credit to split programmatic use from interactive subscription limits, then paused that change on the planned launch date. This is evidence that the provider is still experimenting with the economic boundary rather than treating all automation as one prohibited class.

### GitHub Copilot

GitHub provides the cleanest counterexample to the idea that third-party use is intrinsically abusive. Its official Copilot SDK supports OAuth apps and multi-user applications where each user authenticates with their own GitHub account and consumes their own Copilot subscription. It also supports organization-attributed server-to-server billing.

The common principle is attribution: the service can remain third-party while usage stays attached to the person or organization entitled to consume it.

## Prevalence: what Turn 1 can and cannot say

The open-source footprint is large. On 2026-08-21:

- `Wei-Shaw/sub2api`: ~38.3k GitHub stars and ~8.0k forks.
- `router-for-me/CLIProxyAPI`: ~48.2k stars and ~7.4k forks.

Both projects are active and support current provider products. Sub2API's issue tracker contains live Codex quota/rate-limit reports, so this is not only speculative code.

But repository popularity is not a market-share estimate. It does not reveal:

- active deployments;
- number of accounts behind each deployment;
- share used only by one owner;
- share used commercially;
- tokens served;
- fraction of total OpenAI/Anthropic/Google traffic;
- fraction of affected-limit complaints caused by fraud controls.

Tibo's statement that "many" affected Codex users were using Sub2API is evidence that OpenAI sees the pattern in production. It is not a denominator.

## Provisional synthesis

The economic mechanism looks like **entitlement arbitrage**: a provider prices a subscription around expected behavior of one human user, while software converts that entitlement into machine-consumable capacity with higher duty cycle, concurrency, pooling, or resale.

That phrase is provisional rather than established field vocabulary.

The stronger hypothesis for Turn 2 is:

> The important boundary is not UI versus API. It is whether inference remains attributable to the person or organization that bought the entitlement, versus being pooled into fungible capacity for unrelated downstream demand.

## Turn 2 falsification targets

1. Verify Tibo's exact statement and whether OpenAI has published a broader policy matching it.
2. Separate OpenAI-permitted OSS client use from re-serving.
3. Verify Google's ban/reinstatement sequence from first-party material.
4. Verify Anthropic's current—not historical—third-party and programmatic-use policy.
5. Check whether the proposed Agent SDK credit split actually took effect.
6. Find a provider that explicitly supports third-party apps against individual subscription allowances.
7. Test whether stars/forks are being overused as evidence of real traffic.
8. Look for credible deployment or traffic measurements rather than marketing claims.
9. Distinguish account pooling, account farming, credential theft, and ordinary multi-account personal use.
10. Determine whether `entitlement arbitrage` or `shadow API market` has established prior terminology.

## Sources for Turn 2

- Sub2API: https://github.com/Wei-Shaw/sub2api
- CLIProxyAPI: https://github.com/router-for-me/CLIProxyAPI
- OpenAI Terms of Use: https://openai.com/policies/terms-of-use/
- OpenAI account sharing policy: https://help.openai.com/en/articles/10471989
- Gemini CLI terms/privacy: https://geminicli.com/docs/resources/tos-privacy/
- Gemini CLI FAQ: https://geminicli.com/docs/faq/
- Google reinstatement discussion: https://github.com/google-gemini/gemini-cli/discussions/20632
- Anthropic Claude Code legal/compliance: https://code.claude.com/docs/en/legal-and-compliance
- Anthropic subscription authentication: https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account
- Anthropic Agent SDK credit notice: https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan
- GitHub Copilot SDK authentication: https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/authenticate
