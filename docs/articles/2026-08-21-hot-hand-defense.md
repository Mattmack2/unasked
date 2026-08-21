# The hot-hand problem has an opponent in it

The classic hot-hand question is usually phrased as: after a player makes several shots, is the next shot more likely to go in?

That treats the sequence as though only the shooter changes. In an NBA game, success also changes the defense, shot selection and play calling. The next attempt is partly produced by the previous attempts.

That distinction does not prove the hot hand. It changes what has to be measured.

## The statistical argument changed first

Gilovich, Vallone and Tversky's 1985 paper found little evidence that makes cluster more than chance would predict and helped make the “hot-hand fallacy” a standard example in behavioral science.

In 2018, Joshua Miller and Adam Sanjurjo showed that a common way of comparing shooting after streaks of makes and misses is biased downward in finite sequences. Correcting that bias materially weakened the classic statistical case against the hot hand.

That correction concerns the sequence test itself. NBA games add another problem: opponents react.

## Successful shooters get a different next shot

This was visible before the newest study. Optical-tracking work presented in 2014 analyzed more than 83,000 NBA shots and found that players outperforming their recent expectation tended to face tighter defense, shoot from farther away, take their team's next shot more often and attempt harder shots. The authors estimated a small positive hot-hand effect after controlling for shot difficulty, roughly 1.2–2.4 percentage points. [Bocskocsky, Ezekowitz & Stein](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2481494)

Other work found defensive pressure increasing during perceived hot streaks without finding a corresponding rise in shooting percentage. [Csapo & Raab, 2014](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0114184)

So two different propositions have to stay separate:

1. recent success changes how defenders treat the shooter;
2. recent success changes the shooter's underlying ability to make the next shot.

The first has better evidence than the second.

## What the 2026 tracking study adds

Arya Kondur and Weining Shen combined play-by-play with spatial NBA tracking from October 2015 through January 2016. Their strongest measure was distance from the shooter to the closest defender. Models controlled for shooter identity, quarter, game time, shot distance and shot clock. [Kondur & Shen, 2026](https://journals.sagepub.com/doi/10.1177/22150218261458601)

The immediate make-versus-miss result is easy to overstate. Defender distance increased after both outcomes as possessions reorganized, but it increased less after makes. That is relative tightening after success, not evidence that a defender literally steps closer after every made shot.

The clearer result appears when recent outcomes are aggregated. In a five-shot model, more recent makes were associated with a smaller closest-defender distance; the reported joint test for that metric had `p = 0.002`. Team-wide spatial measures were less consistent.

The paper describes the effective response horizon as roughly three to five shots. That should not be read as “NBA defenders remember exactly five attempts.” Longer-window models actually fit better by AIC; the authors worry those fits may reflect aggregation or overfitting and prefer a shorter interpretation partly because the fitted pattern and basketball context make more sense. The data show a short-horizon response pattern, not a measured cognitive memory limit.

The dataset is also old and narrow: only the early 2015–16 season was available publicly. Defender identity, fatigue, communication, screening action and matchup changes are not fully modeled. The authors explicitly flag several of these limitations.

## The hot hand itself is still unsettled

A separate 2025/26 paper by Kondur and Shen used 2014–15 NBA shot logs and machine-learned shot-difficulty estimates. Instead of finding a positive hot hand, it found that strong difficulty-adjusted performance over recent shots was generally followed by worse subsequent performance—a reverse or “cold-hand” relationship across most specifications. [Kondur & Shen](https://journals.sagepub.com/doi/10.1177/17479541251374788)

That conflicts with studies reporting small positive effects after difficulty adjustment. The disagreement is useful: accounting for defense does not automatically reveal one hidden true hot-hand number.

A different 2026 study reached a related systems-level result. David Winkelmann and Rouven Michels found no NBA team momentum when offense and defense were modeled separately, but a weak momentum effect appeared when they were modeled jointly. [The American Statistician](https://www.tandfonline.com/doi/10.1080/00031305.2025.2595980)

The individual hot hand and team momentum are not the same phenomenon. Both expose the same measurement problem: in competition, one side's performance changes the other side's behavior.

If a shooter's latent accuracy temporarily rises from 40% to 48%, tighter coverage or harder shot selection can push the observed percentage back down. If the shooter never became better at all, defenders can still react to the streak and change the game. The observed sequence alone cannot distinguish those stories.

The durable conclusion is therefore narrower than “the hot hand is real” and more useful: **performance in an adaptive contest is endogenous. To estimate what changed inside the player, you also have to model what changed around the player.**