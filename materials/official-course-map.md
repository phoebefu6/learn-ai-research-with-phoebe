# learn-ai-research-with-phoebe - official source map

Two tracks, 16 sessions. Leader track (a1-a6) for research, insights and strategy leads. Researcher
track (b1-b10) for analysts, academics, UX and market researchers. Running decision: **should
Cadence (the AI meeting-notes product used across the aidm series) build a lecture-notes product for
higher education next year?**

Signature interactive: **`assets/research-live.js`** - the defensible-claim audit. 10 claims, a
22-source teaching corpus, a real rule engine. Verified live in-browser before fan-out.

**Scope line to repeat on the pages:** catching fabricated citations belongs to the AI + Law course.
This course owns whether a *real* source actually supports the sentence written on top of it -
synthesis and evidence quality.

All facts below were fetched from primary sources on **2026-08-08**. Where an agent could not reach a
primary source, that is recorded as a gap - reproduce the gap on the page rather than filling it.

---

## The lab's canon numbers (verified in-browser, do not edit without re-running)

| Rung | Levers on | Claims surviving | Sources read |
|---|---|---|---|
| 0 | none | **0 / 10** | 9 |
| 1 | + sharp question | **1 / 10** | 9 |
| 2 | + source tiering | **2 / 10** | 22 |
| 3 | + extraction table | **4 / 10** | 22 |
| 4 | + contradiction check | **7 / 10** | 22 |
| 5 | + replication check | **9 / 10** | 22 |
| anti | + add 40 sources | **8 / 10** | **62** |

The seven audit rules, in the order the engine applies them: decision-scoped → support exists in
your set → support good enough (not tier-4-only; not tier-3 on an untiered search) → nothing
retracted → number recorded → disagreement handled → holds up twice.

The tenth claim ("our meeting-notes engine transfers to lecture audio without retraining") **never
survives, by design**: single vendor-funded preprint, n=48, nothing replicating it. Correct output is
"unknown, priced, with the test named".

Anti-lever mechanism: the 40 bulk hits are all tier 4, and one is retracted; it lands in the support
for a previously clean claim.

Honesty rail for every page embedding the lab: the 22 sources are a **teaching corpus** (plausible,
not real publications); the audit is a real rule engine reading each source's type, tier, year,
sample size, funder and support/contradict links.

---

## Evidence-synthesis standards (verified)

**PRISMA 2020** - Page MJ et al., *BMJ* 2021;372:n71. https://www.prisma-statement.org/prisma-2020-checklist
- A **reporting** guideline, not a quality-appraisal tool. "The PRISMA 2020 checklist includes **seven
  sections with 27 items**, some of which include sub-items."
- Sections: Title (1), Abstract (2), Introduction (3-4), Methods (5-15), Results (16-22), Discussion
  (23), Other information (24-27). New in 2020: certainty assessment, data/code availability, plus a
  separate abstract checklist.
- **Flow diagram has three bands, not four: Identification → Screening → Included.** The 2009
  "Eligibility" band was removed; "reports assessed for eligibility" is now a box inside Screening.
  Four template variants (new vs updated review, x databases-only vs with other sources).

**Cochrane RoB 2** - https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-08
- Assessed **per result**, not per study. Five domains: randomisation process; deviations from
  intended interventions; missing outcome data; measurement of the outcome; selection of the reported
  result.
- Three judgements: low risk / some concerns / high risk. Overall is effectively the **least
  favourable** domain judgement.

**GRADE** - https://gdt.gradepro.org/app/handbook/handbook.html
- **Four certainty levels** - High: "We are very confident that the true effect lies close to that of
  the estimate"; Moderate; Low: "Our confidence in the effect estimate is limited"; Very low.
- RCT bodies start at High; observational at Low.
- **Five downgrading factors:** risk of bias, inconsistency, indirectness, imprecision, publication
  bias. **Three upgrading factors** (non-randomised evidence only): large effect, residual
  confounding that would reduce the effect, dose-response gradient.

**The hierarchy, and the honest critique** - conventional order: systematic reviews/meta-analyses →
RCTs → non-randomised trials → cohort → case-control → cross-sectional → case series → expert
opinion (Stony Brook EBM guide). Murad MH et al., "New evidence pyramid," *Evid Based Med*
2016;21(4):125-7 revises it twice: the lines between designs become **wavy**, and systematic reviews
are **removed from the apex** and treated as "a lens through which evidence is viewed". Core
argument: "credible systematic review can summarize biased evidence and poorly done systematic
reviews can summarize well done trials." Teach this - a design label is not an appraisal.

## Replication (exact figures, for the replication-check session)

- **Open Science Collaboration 2015**, *Science* 349(6251):aac4716 - **100 studies** replicated; **97%**
  of originals were statistically significant vs **36%** of replications; replication effects about
  **half** the original magnitude; **47%** of original effect sizes fell inside the replication's 95%
  CI; **68%** retained significance when meta-analytically combined.
- **Camerer et al. 2016**, *Science* 351(6280):1433-6 - 18 economics experiments, **11 (61%)**
  replicated in the same direction; replication effect ~**66%** of original.
- **Camerer et al. 2018**, *Nature Human Behaviour* 2:637-644 - 21 social-science studies from
  *Nature*/*Science*, **13 (62%)** replicated; effect size ~**50%** of original.
- **Many Labs 1** (Klein et al. 2014) - 13 effects x 36 samples, N=6,344; **10 of 13** replicated,
  1 weakly, 2 failed. Key point: almost no variation attributable to sample or lab setting.
- **Many Labs 2** (Klein et al. 2018), *AMPPS* 1(4):443-490 - 28 findings, 125 samples, 15,305
  participants, 36 countries; **15 (54%)** significant in the original direction at p&lt;.05; median
  comparable Cohen's d **0.60 originals vs 0.15 replications**.

## Statistics a synthesist must run

- **Effect size vs significance** - Sullivan &amp; Feinn, *J Grad Med Educ* 2012;4(3):279-282. Cohen's
  conventions d = 0.2 small / 0.5 medium / 0.8 large. Teaching example: Physicians' Health Study,
  &gt;22,000 subjects, P &lt; .00001, **r² = .001**.
- **Confidence intervals** - Cochrane Handbook ch.15: report the CI with the exact P value; authors
  "should not describe results as 'statistically significant'... or unduly rely on thresholds".
- **P-hacking** - Head et al., *PLOS Biology* 2015;13(3):e1002106. Definition and the behaviour list
  (interim peeking, selective outcome reporting, post-hoc outlier rules, adding/dropping covariates)
  are safe to teach; the method is comparing the 0.045-0.05 p-value bin against 0.04-0.045. **Do not
  quote percentages from this paper** - the fetch garbled them.
- **HARKing** - Kerr, *PSPR* 1998;2(3):196-217: presenting a post-hoc hypothesis as if a priori.
- **Publication bias** - Cochrane ch.13: a funnel plot is "a simple scatter plot of intervention
  effect estimates... against a measure of each study's size or precision"; **asymmetry is not
  diagnostic**; Egger's test has low power; **rule of thumb: use asymmetry tests only with at least
  10 studies**.
- **ASA 2016 statement on p-values** - https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf.
  Six principles; the one to score claims against: "Scientific conclusions and business or policy
  decisions should not be based only on whether a p-value passes a specific threshold." Also
  quotable: "P-values do not measure the probability that the studied hypothesis is true."

## Qualitative rigour (b9)

- **Thematic analysis** - Braun &amp; Clarke 2006, six phases: familiarisation; generating initial codes;
  searching for themes; reviewing themes; defining and naming themes; producing the report. (Phase
  wording came from a university guide, not the paywalled original - do not present as verbatim.)
- **Cohen's kappa** - κ = [Pr(a) − Pr(e)] / [1 − Pr(e)]. **Landis &amp; Koch (1977) thresholds:** &lt;0 poor ·
  0.00-0.20 slight · 0.21-0.40 fair · 0.41-0.60 moderate · 0.61-0.80 substantial · 0.81-1.00 almost
  perfect. Teach the caveat: McHugh (*Biochem Med* 2012;22(3):276-282) argues these are too lenient
  for consequential decisions and proposes a stricter ladder (0.60-0.79 moderate, 0.80-0.90 strong).
- **Saturation** - Guest, Bunce &amp; Johnson, *Field Methods* 2006;18(1):59-82: 60 interviews; **code
  saturation by the 12th interview**; about **80%** of all codes appeared within the **first 6**.

## Survey / market-research standards (b9, a4, a6)

- **AAPOR on margin of sampling error** - MOSE is largest at 50%; express in **percentage points**;
  doubling n from 1,000 to 2,000 cuts it by only about a point; subgroups carry their own larger
  MOSE (200 of 1,000 respondents ≈ ±6.9 points); design effects inflate it; and "there is no such
  thing as a measurable overall margin of error for a poll".
- **Nonprobability panels** - AAPOR: MOSE "does not apply to opt-in online surveys"; "it is
  impossible to develop statistically valid margins of sampling error from nonprobability surveys".
  The substitute is a model-based **credibility interval**, valid only "provided that the adopted
  model is valid". So: directional signal and within-sample contrasts yes, probability-grade
  population projection no.
- **ICC/ESOMAR Code 2025** (updated 2025-06-18) - five fundamental principles, 13 articles. The ones
  that bite on AI: **Art 9(b)** researchers "must disclose whether AI, synthetic data, or other
  emerging techniques and/or technologies played a significant role in sampling, deployment,
  analysis, or interpretation of the data, and to what extent human oversight was involved";
  **Art 7(e)** the client must be told when AI or synthetic data/personas are used and "the extent of
  human oversight must be stated"; **Art 4(a)(ii)** use of a synthetic persona for data collection
  "must be clearly notified to the data subject at the beginning of the research"; **Art 7(f)**
  research data used with AI "must remain confidential... Access... strictly limited to a secure and
  controlled environment"; **Art 6(c)** guard against re-identification by inference. Fundamental
  Principle 5: researchers hold "overall responsibility and oversight... irrespective of the method,
  technique and technology applied."
- **ESOMAR 37** (March 2021) replaces ESOMAR 28, adds a Metrics section. Its full question list was
  not retrievable - do not attribute a representativeness claim to it.
- **Insights Association Code** (Sept 2025): AI-generated data "must be clearly distinguished from
  data directly derived from human research participants"; notify participants when an AI avatar or
  chatbot collects data.

## Integrity: authorship, disclosure, peer review (a4, and the b8/b10 write-up)

They all agree AI cannot be an author, and **they disagree on where you disclose it** - that
disagreement is itself teachable:
- **ICMJE**: describe use "in both the cover letter and the submitted work"; writing assistance →
  acknowledgements, data collection/analysis/figures → methods. "Chatbots... should not be listed as
  authors because they cannot be responsible for the accuracy, integrity, and originality of the
  work." "Nondisclosure of AI use may require corrective action and may be construed as misconduct."
- **COPE** (reviewed 2023-02-13, DOI 10.24318/cCVRZBms): disclose in **Materials and Methods**; AI
  tools "cannot take responsibility for the submitted work... As non-legal entities, they cannot
  assert the presence or absence of conflicts of interest".
- **Springer Nature**: LLMs "do not currently satisfy our authorship criteria"; document in Methods;
  generative-AI **images** largely not permitted, narrow exceptions, labelled.
- **Science/AAAS**: AI may not be an author, "nor may sources cited in Science journal content be
  authored or coauthored by AI tools"; disclose in cover letter and methods or acknowledgements;
  AI-generated images need explicit editor permission.
- **Elsevier**: a separate published **AI declaration statement** with prescribed wording; basic
  grammar/spell checks need no declaration; primary research images from AI "Not permitted".

**Peer review - the confidentiality bans:**
- **NIH NOT-OD-23-149** (2023-06-23): "NIH prohibits NIH scientific peer reviewers from using natural
  language processors, large language models, or other generative Artificial Intelligence (AI)
  technologies for analyzing and formulating peer review critiques". Uploading application content
  "violates the NIH peer review confidentiality and integrity requirements". The reason transfers to
  any confidential material: "AI tools have no guarantee of where data are being sent, saved, viewed,
  or used in the future."
- **NSF** (2023-12-14): reviewers "are prohibited from uploading any content from proposals, review
  information and related records to non-approved generative AI tools"; proposers are *encouraged* to
  disclose their own use.
- **ICMJE V.B** and **Elsevier**: reviewers must not upload manuscripts where confidentiality cannot
  be assured. **Science** permits AI only to revise the reviewer's own writing, declared, with no
  training on inputs.

## Documented failure modes with real numbers (a3)

Citation fabrication - useful as the "why the sibling Law course exists" note, and as evidence that
verification is not optional:
- Bhattacharyya et al., *Cureus* 2023;15(5):e39238 - 115 references from ChatGPT-3.5 medical content:
  **47% fabricated, 46% authentic but inaccurate, 7% authentic and accurate**.
- Walters &amp; Wilder, *Scientific Reports* 2023 (DOI 10.1038/s41598-023-41032-5) - 636 citations:
  "**55% of the GPT-3.5 citations but just 18% of the GPT-4 citations are fabricated**"; substantive
  citation errors in **43%** of real GPT-3.5 vs **24%** of real GPT-4 citations.
- Chelli et al., *JMIR* 2024;26:e53164 - hallucination **39.6% GPT-3.5, 28.6% GPT-4, 91.4% Bard**;
  **recall of the real systematic-review references 11.9% / 13.7% / 0%**. The recall number is the one
  that matters here: even when it does not fabricate, it finds a small fraction of the literature.
- Tow Center / CJR, 2025-03-06 - 1,600 queries across eight AI search tools: collectively wrong on
  **more than 60%** of queries; Perplexity 37% incorrect, ChatGPT Search 67%, Grok-3 94%; paid tiers
  were *worse*, preferring a confident answer to declining.

**Sycophancy - the confirmation risk:**
- Sharma et al. (Anthropic), arXiv:2310.13548 - five state-of-the-art assistants "consistently exhibit
  sycophancy"; humans and preference models "prefer convincingly-written sycophantic responses over
  correct ones a non-negligible fraction of the time". It is a product of the training objective.
- **SycEval** (Fanous et al., Stanford, arXiv:2502.08177, AIES 2025) - sycophantic behaviour in
  **58.19%** of cases; **regressive** sycophancy (pushback moves the model to a *wrong* answer)
  **14.66%**; persistence once it starts **78.5%**; and **pre-emptive rebuttals produced more
  sycophancy than in-context ones (61.75% vs 56.52%)**. That last finding is the practical one: stating
  your hypothesis up front is the worse condition.

**Corpus coverage - why one database is never enough:**
- Bramer et al., *Systematic Reviews* 2017;6:245 - 58 systematic reviews. Single-database recall:
  **Embase 85.9%, MEDLINE 78.8%, Web of Science 68.1%, Google Scholar 34.4%**. Four combined:
  **98.3%**. Conclusion: searches "should search at least Embase, MEDLINE, Web of Science, and Google
  Scholar as a minimum requirement".

**A verified retraction case (use this one):** Guo X, Dong L, Hao D, *Front Cell Dev Biol*
11:1339390, retracted 2024-02-16 (notice DOI 10.3389/fcell.2024.1386861) over AI-generated figures.
The AI use *was* disclosed and it still failed, because nobody checked the output. Also useful:
Glynn, arXiv:2411.15218 - 768 documents with suspected undeclared AI use, of which only **4.3%** were
altered post-publication. Detection is not correction.

## Data protection for participant material (a4)

- **GDPR Art 89(1)** - research safeguards "may include pseudonymisation provided that those purposes
  can be fulfilled in that manner". Art 89(2) permits Member State derogations from Arts 15, 16, 18,
  21 for research.
- **Pseudonymisation is not anonymisation.** Art 4(5) plus **Recital 26**: pseudonymised data "which
  could be attributed to a natural person by the use of additional information should be considered to
  be information on an identifiable natural person". **Consequence to teach: stripping names from a
  transcript before pasting it into a third-party tool does not take it outside GDPR.**
- **Recital 33** allows broad consent to "certain areas of scientific research"; **Recital 156** adds a
  feasibility duty to check whether the purpose can be met without identification; **Recital 159**
  reads "scientific research purposes" broadly, including privately funded research.
- **Singapore PDPA 2012, Second Schedule** - research exception for use without consent requires: the
  purpose cannot reasonably be accomplished without individually identifiable data; clear public
  benefit; results will not be used to make decisions affecting the individual; and published results
  do not identify the individual. Disclosure without consent adds: it is impracticable to seek
  consent. Note the narrower-but-commoner **First Schedule Part 5 Business Improvement Purposes**
  route that commercial insights teams actually use.

## Synthetic respondents (a3, b9)

- **ESOMAR defines humanness deliberately** - "individual/person refers to a human being to
  differentiate from a synthetic, virtual/digitally created persona". Its 2025 guidance covers
  **augmented** synthetic data (boosting/imputation) only; **ESOMAR has not published guidance
  endorsing fully synthetic respondents as a replacement for human samples**.
- **Bisbee et al., "Synthetic Replacements for Human Survey Data? The Perils of Large Language
  Models," *Political Analysis* 2024;32(4), DOI 10.1017/pan.2024.5** - ChatGPT personas vs ANES:
  averages "correspond closely", but "**48% of coefficients... are statistically significantly
  different from their ANES-derived counterpart; among these cases, the sign of the effect flips 32%
  of the time**". Means look right; variance and relationships do not. Perfect teaching example.

## The tool stack (a5, b3, b4, b5)

**Ground truth layer (verified live 2026-08-08):**
- **OpenAlex** - 323,171,764 works, 123,255,918 authors, 255,204 sources; CC0. Documents a metered
  credit model ($1/day free with an API key, $0.01/day without; search $0.001/query, PDF download
  $0.01/item) though an unauthenticated search still returned 200 on test - treat metering as the
  forward contract.
- **Crossref** - 185,277,841 records; no sign-up needed; **adding a `mailto` moves you to the polite
  pool and triples the rate limit (3/s vs 1/s)** - verified from response headers. Carries retraction
  and post-publication update information - this is where you check whether a citation was withdrawn.
- **Semantic Scholar** - 214M papers, 2.49B citations, 79M authors. Unauthenticated is "rate-limited
  to 1000 requests per second shared among all unauthenticated users"; an API key's introductory
  limit is **1 RPS** - the key buys stability, not throughput. `tldr` fields are AI-generated and must
  never be quoted as the authors' words; `openAccessPdf` is the practical bridge to actually reading.

**Search / screening / extraction:**
- **Elicit** - aggregates Semantic Scholar + OpenAlex + PubMed, deduped to **~138M** papers. Workflows:
  Research Agent, Research Reports, Systematic Literature Review, Find Papers/Chat with Papers,
  Extract Data. **Critical limitation for defensibility: full-text analysis only for open access (or
  with your own subscription plus their browser extension) - otherwise it works from title and
  abstract only.** Pro $49/mo screens up to 5,000 papers; API 100 req/min per IP.
  Vendor accuracy claims are inconsistent across Elicit's own pages (96% and 99.4% extraction
  accuracy; 99.5% and 97/99% screening) - use this as the live example of why a vendor number needs a
  methodology attached.
- **Consensus** - "Consensus Meter" buckets conclusions into agree/disagree/inconclusive, and does it
  over **the top 20 papers for the query**. That window is the caveat: a sample of the top of one
  ranking, not a synthesis. (Site blocked direct fetch; treat details as search-index sourced.)
- **Scite** - classifies citations as supporting / contrasting / mentioning; method is peer-reviewed
  (Nicholson et al., *Quantitative Science Studies* 2(3):882, 2021). Reported corpus distribution is
  about **92.6% mentioning, 6.5% supporting, 0.8% contrasting** - so **absence of contrasting
  citations is nearly uninformative**. Classifier precision/recall unverified.
- **Undermind** - published a whitepaper (Jan 2024) with a genuinely distinctive convergence
  estimator (fits the decay of the discovery curve to judge comprehensiveness), on **arXiv only,
  2.3M papers, GPT-4 era**. Vendor claims 10x relevant-result concentration and ~98% classifier
  accuracy - but **the evaluation is circular** ("we evaluate the relevance of these Google Scholar
  results using the same relevance classification subroutine that Undermind employs"). Excellent
  teaching artifact for reading a vendor benchmark critically.
- **SciSpace** - site blocked; **no verified facts**. Say nothing about it rather than guessing.

**NotebookLM (now being renamed "Gemini Notebook")** - Google's verified wording is the weaker
"answers questions based on the information provided in your uploaded sources"; on very short sources
it "references the entire document without a cited individual text". Limits: 500,000 words per source
or 200MB; base tier 100 notebooks x 50 sources (Plus 100, Pro 300, Ultra 500-600 sources).
**Gap worth teaching: Google's FAQ contains no guarantee that the model never uses knowledge beyond
your sources, and no statement about hallucination risk - the popular "it cannot go beyond your
sources" framing is stronger than what Google actually says.**

**Deep-research agents** - only **OpenAI** publishes benchmarks and an explicit limitations paragraph
(Feb 2025 launch doc): Humanity's Last Exam **26.6%**, GAIA avg pass@1 **67.36**, runtime "5 to 30
minutes"; limitations verbatim - "It can sometimes hallucinate facts... may struggle with
distinguishing authoritative information from rumors, and currently shows weakness in confidence
calibration, often failing to convey uncertainty accurately... there may be minor formatting errors
in reports and citations." **Anthropic's Research and Google's Deep Research publish no evaluation
numbers at all**; Gemini's reports carry source links rather than sentence-level citations. So: any
comparison table ranking these products on accuracy is not built from vendor-published data. Access
tiers and query caps in the 2025 launch docs are stale - do not teach them as current.

**Reference managers** - Zotero has **no first-party AI feature**; all AI plugins are community, and
Zotero warns "plugins have full access to your Zotero and your computer". Paperpile's official
"Ask AI" is a **router**: it sends your full-text PDF to ChatGPT, Claude, Gemini, Copilot or
NotebookLM - so the accuracy question moves downstream and your PDFs leave by design. Mendeley
references "Ask AI" with no documented detail. **None of the three publishes any accuracy claim** -
the AI risk here is data egress and plugin trust, not accuracy.

**Qualitative tools** - **Dovetail**: Magic Highlight (auto-applies *your* existing tag structure),
Magic Cluster, Magic Summary, Ask Dovetail; chat "Powered by the latest release of Claude";
transcription via Amazon Transcribe and AssemblyAI; states customer data is not used for training.
Notably its AI docs carry **no accuracy figure and no instruction to verify output**. **Looppanel**:
claims "95%+ accurate transcripts" scoped to **English** (other pages say 90%, 93%+ - inconsistent);
96 additional languages, but translation and non-English AI notes are **Enterprise-only**. **Marvin**:
cited answers and PII blur, **no accuracy claim, no language list**.
**Cross-cutting finding to teach: all three auto-apply codes to human speech and not one publishes a
coding or theme-assignment accuracy figure.** Transcription accuracy is not coding accuracy.

---

## Per-session coverage

Legend: ✓ taught to the working 80% · ◐ partial, deliberately

| Session | Sources covered | Depth |
|---|---|---|
| **a1** What AI changes | Which stages compress (gather, extract) vs which do not; Chelli recall figures; Bramer coverage; the "we finished in a day" trap | ✓ |
| **a2** Evidence standard | Source tiers, GRADE certainty levels and its five downgrades, the hierarchy plus Murad's critique, sample-size literacy | ✓ |
| **a3** Where AI fails | Corpus gaps (Bramer, Elicit title/abstract-only), sycophancy (SycEval 58.19% / 14.66% regressive / pre-emptive worse), AI-search error rates (Tow 60%+), synthetic respondents (Bisbee 48%/32%) | ✓ |
| **a4** Consent + governance | GDPR Art 89 and Recital 26, PDPA Second Schedule, NIH/NSF peer-review bans, ICMJE/COPE/Springer/Science/Elsevier disclosure divergence, ESOMAR Arts 4/6/7/9 | ✓ |
| **a5** The research stack | Ground-truth layer (OpenAlex/Crossref/S2 with real numbers), search/screening tools and their real limits, reference-manager data egress, qualitative tools' missing accuracy claims | ✓ |
| **a6** Deciding on fast evidence | Confidence language, ASA principle 3, the audit trail, saying "we do not know yet" | ✓ |
| **b1** Researcher's AI loop | The six-step loop, five levers, seven audit rules, adversarial + absence prompts | ✓ hand-authored template page |
| **b2** Question and claims | Decision-backwards framing, falsifiable claims, structured question formats, PICO-style scoping | ✓ |
| **b3** Search and tiering | Query design, database combinations (Bramer numbers), the four-tier system, Crossref/OpenAlex/S2 as ground truth, Consensus's 20-paper window | ✓ |
| **b4** Screening at scale | Inclusion rules written first, PRISMA 2020 three-band flow, dedupe, **retraction checks via Crossref**, why breadth without screening hurts | ✓ |
| **b5** Extraction tables | One row per source: sample, measure, number, page, funder, population; Elicit's title/abstract-only limit; verifying every extracted number | ✓ |
| **b6** Evidence lab | The seven rules with their standards lineage, triage (fatal/work/honesty), the four tiers, the calibrated confidence sentence | ✓ hand-authored signature page |
| **b7** Contradictions + stats | Effect size vs p (r²=.001 example), CIs, publication bias and the 10-study rule, funnel-plot caveat, replication figures (36%, 61%, 62%, 54%), ASA six principles, p-hacking and HARKing | ✓ |
| **b8** Synthesis | Confidence language, keeping disagreement visible, GRADE-style certainty statements, disclosure wording per venue | ✓ |
| **b9** Qualitative coding | Braun &amp; Clarke phases, Cohen's kappa with Landis &amp; Koch thresholds and McHugh's stricter ladder, saturation (12 interviews / 80% in 6), AAPOR nonprobability limits, tool accuracy gaps, participant-data rails | ✓ |
| **b10** Capstone memo | Everything: question, tiers, screening log, extraction table, contradictions, replication, audit trail, one honest unknown | ✓ |

## Not covered, by design

- **Fabricated-citation detection** - the AI + Law course owns it. Reference the failure-rate numbers
  here as motivation, then point across.
- Meta-analytic computation (pooling effect sizes, running the statistics) - the course teaches
  reading and interrogating them, not performing them.
- Domain-specific regulatory research (clinical trial submissions, legal research) - out of scope.
- Tool tutorials. Tools are taught as capability plus limitation, not as click-paths - they change
  monthly, and the audit rules do not.
