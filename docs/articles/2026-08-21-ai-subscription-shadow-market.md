# How AI subscriptions become shadow APIs

A consumer AI subscription can now be turned into something that looks surprisingly close to a small API business.

Projects such as **Sub2API** can sit in front of several subscription accounts, expose their own API keys, schedule requests across accounts, enforce per-user limits, count tokens, and collect payments. **CLIProxyAPI** does more of the protocol layer: it presents coding products such as Codex, Claude Code and Gemini-backed tools through common OpenAI-, Anthropic- or Gemini-compatible interfaces.

The rough stack is:

```text
subscription accounts
→ product authentication
→ API-compatible adapter
→ account scheduler
→ pooled capacity
→ downstream keys
→ metering / billing
```

That is why this is more interesting than a one-off quota exploit. The software needed to turn a flat-rate subscription into fungible inference capacity has become ordinary infrastructure.

## The first distinction matters

The initial research grouped too many things under “subscription-to-API abuse.” Turn 2 broke that apart.

Using your own subscription through another client is **not automatically abuse**. The rules depend on the provider and, more importantly, on who ultimately consumes the entitlement.

OpenAI’s Tibo said on August 21 that many users investigated over changed Codex limits were using Sub2API. His stated boundary was specific: converting a subscription into API traffic and then re-serving or sharing it across many users is unsupported and can be flagged by fraud-prevention systems. In the same statement he said using included Codex usage through **Sign in with ChatGPT** in supported open-source clients such as Pi or OpenCode is fine. [Source](https://x.com/thsottiaux/status/2090675027670978569)

GitHub makes the legitimate version even clearer. The official Copilot SDK supports multi-user applications where every user authenticates with their own GitHub identity and the requests consume **that user’s own Copilot subscription**. GitHub also supports organization-attributed server-to-server usage. [GitHub Copilot SDK authentication](https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/authenticate)

So “third-party software” is not a useful universal definition of the problem.

A better dividing line is:

> **Does usage remain attributable to the person or organization that bought the entitlement, or has the entitlement become pooled capacity for unrelated downstream users?**

## Providers are choosing different answers

Google currently draws a hard product boundary around Gemini CLI OAuth. Its documentation says third-party software may not harvest or piggyback on Gemini CLI authentication to access the backing services; third-party coding agents should use an API key instead. [Gemini CLI FAQ](https://geminicli.com/docs/resources/faq/)

Google has already enforced that rule at scale. In February 2026 it acknowledged a wave of Antigravity bans targeting third-party tools or proxies that accessed Antigravity resources and quotas. Because the abuse-prevention layer was shared, affected users also lost Gemini CLI and Code Assist access. Google reset the initial bans, introduced a recertification process, and said a second violation could result in permanent suspension. [Google’s reinstatement announcement](https://github.com/google-gemini/gemini-cli/discussions/20632)

Anthropic lands somewhere else. Claude subscriptions legitimately support substantial automation: Claude Code can run non-interactively, and Anthropic documents subscription authentication for scripts and the Agent SDK. But its legal guidance says third-party developers may not offer Claude.ai login or route Free, Pro or Max credentials on behalf of their own users. [Claude Code legal and compliance](https://code.claude.com/docs/en/legal-and-compliance)

Anthropic also tried to solve the economics directly. It announced a separate monthly allowance for programmatic Agent SDK and `claude -p` use, which would have stopped that usage from drawing on the ordinary interactive subscription limit. On June 15 it **paused the change before it took effect**. Programmatic usage still draws from subscription limits for now. [Anthropic’s current notice](https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan)

That reversal is useful evidence. The problem is not simply “ban automation.” Legitimate subscribers increasingly want automation too.

## What the relay layer actually sells

The main products are not clever HTTP forwarding. Mature relays offer account rotation, failover when one account exhausts a window, higher aggregate concurrency, common APIs across providers, one downstream credential, token accounting, per-user limits and billing.

Sub2API’s repository describes itself as subscription-quota distribution infrastructure and explicitly supports multiple upstream accounts and downstream users. Its surrounding sponsor ecosystem includes AI-account sellers, subscription top-up services, relay operators and residential-network services. That does not prove every deployment is commercial or abusive, but it shows that account supply and account-risk management have become adjacent businesses.

The economics are straightforward. A flat subscription is priced around the expected behavior of one person. Software can keep accounts busy for much longer, switch between them when quotas reset, and sell only the useful slices of capacity. If the included inference is worth substantially more at API prices than the subscription seats cost, there is room for arbitrage until enforcement and operating costs close it.

Credential theft belongs in a different bucket. Stolen accounts or API keys can feed the same relay market, but they are not the same phenomenon as extracting more economic value from legitimately purchased subscriptions.

## How big is this?

The visible developer ecosystem is large.

As of August 21, 2026, Sub2API had about **38,300 GitHub stars and 8,000 forks**. CLIProxyAPI had about **48,200 stars and 7,400 forks**. Both are active against current coding products. Sub2API also has live issue traffic about Codex plan quotas and rate limits.

Those numbers establish that this is not an obscure proof of concept. They do **not** establish how much model traffic is being served this way.

There is no credible public denominator for active relay deployments, upstream accounts, downstream users, tokens, commercial versus personal use, or the fraction of OpenAI/Anthropic/Google inference supplied through subscription pools. Relay vendors’ own token-volume and discount claims are marketing data, not independent measurements.

So the prevalence claim has to stop here:

**large visible ecosystem; unknown share of total inference.**

The same caution applies to the current Codex-limit controversy. Tibo said many investigated users were using Sub2API. That is meaningful production evidence. It does not imply that everyone reporting worse limits used Sub2API. Current community threads contain many users claiming they did not, and OpenAI staff are still investigating individual reports.

## The underlying problem is getting harder

Flat AI subscriptions were designed around human consumption. Agentic software is erasing that assumption.

A completely legitimate single subscriber can now run a coding model for hours, invoke it headlessly, launch repeated jobs, or use it from another interface. Raw usage therefore does not cleanly distinguish a power user from a reseller.

The providers currently expose three possible solutions:

1. **Surface-bound entitlement:** included usage stays inside the provider’s approved product surfaces. Google’s Gemini CLI OAuth policy is closest to this.
2. **Identity-bound portability:** outside clients are allowed while every request remains attached to the entitled user. OpenAI’s current Codex stance permits this in supported clients; GitHub’s Copilot SDK formalizes it for third-party applications.
3. **A separate programmable meter:** automation is supported but receives a different allowance or billing model. Anthropic proposed this and then paused it.

The relay market is partly an abuse problem. It is also a signal that **flat-rate human seats and machine-speed agents need a more explicit contract**. If a provider wants subscribers to automate heavily but does not want those subscriptions turned into wholesale API inventory, “ordinary individual use” eventually has to become something the product architecture can represent—not just something fraud systems infer after the fact.
