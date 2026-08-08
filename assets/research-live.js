/* research-live.js - the defensible-claim audit for the Cadence education question.
   Usage:
     <div class="rlbox" data-mode="lab" data-levers=""></div>
     <div class="rlbox" data-mode="ladder"></div>
   data-levers = which levers start ON (comma list of: question,tiering,extraction,contradiction,replication,bulk).

   HONESTY RAIL: the corpus below is a teaching corpus - 22 plausible sources for one real-shaped
   decision, each carrying real attributes (type, tier, year, sample size, funder, what it supports
   or contradicts). The AUDIT is not scripted: it is a rule engine that runs over those attributes
   the way a hostile reviewer runs over your memo. Claims survive or die because of the evidence
   attached to them, not because a script says so. Change a lever and the rules see a different
   source set.

   The sixth lever, "bulk", is an ANTI-lever: adding 40 more sources without tiering or screening
   never raises defensibility, and at the top of the ladder it costs you a claim - because one of
   the 40 is retracted.
*/
(function () {
  "use strict";

  var LEVERS = [
    { key: "question",      label: "Sharp question",   hint: "A decision-scoped question and claims that could actually be false. Without it you carry vague assertions no evidence can settle." },
    { key: "tiering",       label: "Source tiering",   hint: "Search tiered sources deliberately - peer-reviewed studies, official statistics, regulator guidance - instead of accepting whatever ranked first." },
    { key: "extraction",    label: "Extraction table", hint: "Every claim gets a row: source, year, sample, measure, number, page. Claims that assert a number need a recorded number." },
    { key: "contradiction", label: "Contradiction check", hint: "Actively look for sources that disagree, then drop or qualify the claim. A reviewer will find them if you did not." },
    { key: "replication",   label: "Replication check", hint: "Ask whether a finding stands on more than one small or unreplicated study before you build a decision on it." },
    { key: "bulk",          label: "Add 40 sources",   hint: "More is more, surely - run a wider sweep and pull in another 40 hits. Try it and watch the audit." }
  ];

  /* ---------- the corpus ---------- */
  /* tier 1 = peer-reviewed synthesis / RCT / statute + regulator text
     tier 2 = peer-reviewed empirical study, official statistics, sector regulator guidance
     tier 3 = industry analyst report, reputable trade press
     tier 4 = vendor blog, press release, forum, undated listicle
     rank   = would a plain unspecialised search surface it in the first page? */

  var CORPUS = [
    { id: "s1",  t: "Meta-analysis: lecture-capture and attainment", type: "meta-analysis", tier: 1, year: 2024, n: 42, funder: "independent", rank: false },
    { id: "s2",  t: "RCT: note-taking support in undergraduate lectures", type: "rct", tier: 1, year: 2023, n: 612, funder: "independent", rank: false },
    { id: "s3",  t: "National higher-ed IT spend statistics", type: "official-stats", tier: 2, year: 2025, n: null, funder: "independent", rank: false },
    { id: "s4",  t: "Regulator guidance: recording in classrooms and consent", type: "regulator", tier: 1, year: 2025, n: null, funder: "independent", rank: false },
    { id: "s5",  t: "Survey of 1,842 students on note-taking tools", type: "survey", tier: 2, year: 2025, n: 1842, funder: "independent", rank: true },
    { id: "s6",  t: "Case study: disability services procurement at one university", type: "case-study", tier: 2, year: 2024, n: 1, funder: "independent", rank: false },
    { id: "s7",  t: "Procurement cycle-time study across 31 institutions", type: "cohort", tier: 2, year: 2024, n: 31, funder: "independent", rank: false },
    { id: "s8",  t: "Preprint: transfer of meeting ASR models to lecture audio", type: "preprint", tier: 3, year: 2026, n: 48, funder: "vendor-funded", rank: false },
    { id: "s9",  t: "Analyst report: campus AI tools market sizing", type: "analyst", tier: 3, year: 2025, n: null, funder: "independent", rank: true },
    { id: "s10", t: "Trade press: three note apps launch education tiers", type: "news", tier: 3, year: 2026, n: null, funder: "independent", rank: true },
    { id: "s11", t: "Competitor blog: why we won 400 campuses", type: "vendor-blog", tier: 4, year: 2026, n: null, funder: "vendor-funded", rank: true },
    { id: "s12", t: "Press release: EdTech firm announces AI notes suite", type: "press-release", tier: 4, year: 2026, n: null, funder: "vendor-funded", rank: true },
    { id: "s13", t: "Forum thread: students recommending note apps", type: "forum", tier: 4, year: 2026, n: null, funder: "unknown", rank: true },
    { id: "s14", t: "Listicle: 15 best AI note tools for school", type: "listicle", tier: 4, year: null, funder: "unknown", rank: true },
    { id: "s15", t: "Peer-reviewed study: student willingness to pay for study tools", type: "survey", tier: 2, year: 2024, n: 903, funder: "independent", rank: false },
    { id: "s16", t: "Institutional buyer interviews (n=12), published methods", type: "qualitative", tier: 2, year: 2025, n: 12, funder: "independent", rank: false },
    { id: "s17", t: "Vendor webinar: free tiers grow institutional pipeline", type: "vendor-blog", tier: 4, year: 2025, n: null, funder: "vendor-funded", rank: true },
    { id: "s18", t: "Cohort study: freemium conversion in campus software", type: "cohort", tier: 2, year: 2023, n: 27, funder: "independent", rank: false },
    { id: "s19", t: "Accessibility law compliance review, two jurisdictions", type: "regulator", tier: 1, year: 2025, n: null, funder: "independent", rank: false },
    { id: "s20", t: "Replication: lecture-notes tools and exam performance", type: "rct", tier: 1, year: 2025, n: 480, funder: "independent", rank: false },
    { id: "s21", t: "Market saturation analysis, campus productivity apps", type: "analyst", tier: 3, year: 2024, n: null, funder: "independent", rank: false },
    { id: "s22", t: "Single-campus pilot write-up, no control group", type: "case-study", tier: 3, year: 2026, n: 1, funder: "vendor-funded", rank: true }
  ];

  /* the 40 bulk hits: all low tier, and one of them is retracted */
  function bulkSources() {
    var out = [];
    for (var i = 1; i <= 40; i++) {
      out.push({
        id: "x" + i,
        t: "Bulk hit " + i + " - blog, listicle or press item",
        type: i % 7 === 0 ? "preprint" : "vendor-blog",
        tier: 4, year: 2026, n: null, funder: "unknown", rank: true,
        retracted: i === 13
      });
    }
    return out;
  }

  /* ---------- the claims ---------- */
  /* support / contradict = source ids. needsNumber = the claim asserts a figure.
     thin = rests on a single small or unreplicated study unless the replication check finds more.
     scoped = is this a claim a decision can turn on? */

  var SCOPED_CLAIMS = [
    { id: "c1", text: "Universities will pay per-seat for lecture notes at roughly our current price point",
      support: ["s3", "s16", "s9"], bulkSupport: ["x13", "x4"], contradict: [], needsNumber: true, thin: false, scoped: true,
      numberFrom: "s3" },
    { id: "c2", text: "Disability-services budgets are a faster route in than central IT",
      support: ["s6", "s19"], contradict: [], needsNumber: false, thin: true, scoped: true, replicatedBy: ["s19"] },
    { id: "c3", text: "Recording lectures needs documented consent in both target markets",
      support: ["s4", "s19"], contradict: ["s11"], needsNumber: false, thin: false, scoped: true },
    { id: "c4", text: "Students, not institutions, are the initial buyer",
      support: ["s5", "s13"], contradict: ["s16", "s3"], needsNumber: false, thin: false, scoped: true },
    { id: "c5", text: "Our meeting-notes engine transfers to lecture audio without retraining",
      support: ["s8"], contradict: [], needsNumber: true, thin: true, scoped: true, numberFrom: "s8", replicatedBy: [] },
    { id: "c6", text: "Institutional procurement will take 6 to 12 months",
      support: ["s7", "s16"], contradict: [], needsNumber: true, thin: false, scoped: true, numberFrom: "s7" },
    { id: "c7", text: "The segment is already saturated, so we would be a late entrant",
      support: ["s10", "s11", "s21"], contradict: ["s3", "s9"], needsNumber: false, thin: false, scoped: true },
    { id: "c8", text: "A free student tier would cannibalise institutional deals",
      support: ["s17", "s18"], contradict: [], needsNumber: true, thin: true, scoped: true, numberFrom: "s18", replicatedBy: ["s15"] },
    { id: "c9", text: "There is independent evidence that lecture-notes support improves attainment",
      support: ["s1", "s2", "s20"], contradict: [], needsNumber: false, thin: false, scoped: true },
    { id: "c10", text: "Accessibility obligations give us a compliance-driven reason to be bought",
      support: ["s19", "s4"], contradict: [], needsNumber: false, thin: false, scoped: true }
  ];

  var VAGUE_CLAIMS = [
    { id: "u1", text: "AI is transforming education", support: ["s9", "s11", "s12"], contradict: [], needsNumber: false, thin: false, scoped: false },
    { id: "u2", text: "Education is a huge market opportunity", support: ["s9", "s12"], contradict: [], needsNumber: false, thin: false, scoped: false },
    { id: "u3", text: "Students love AI tools", support: ["s13", "s14"], contradict: [], needsNumber: false, thin: false, scoped: false }
  ];

  /* Same ten slots either way, so the denominator is comparable. Without a sharp question, three of
     the claims arrive in the vague form people actually write - unfalsifiable, and therefore dead
     on arrival however good your sources are. */
  function claimSet(L) {
    if (L.question) return SCOPED_CLAIMS;
    return VAGUE_CLAIMS.concat(SCOPED_CLAIMS.filter(function (c) {
      return ["c1", "c4", "c7"].indexOf(c.id) === -1;
    }));
  }

  /* ---------- the audit rules ---------- */

  function availableSources(L) {
    var base = L.tiering ? CORPUS.slice() : CORPUS.filter(function (s) { return s.rank; });
    if (L.bulk) base = base.concat(bulkSources());
    return base;
  }

  function byId(list) {
    var m = {};
    list.forEach(function (s) { m[s.id] = s; });
    return m;
  }

  function auditClaim(claim, L, avail, availMap) {
    var supportIds = (claim.support || []).concat(L.bulk && claim.bulkSupport ? claim.bulkSupport : []);
    var support = supportIds.map(function (id) { return availMap[id]; }).filter(Boolean);
    var contradictions = (claim.contradict || []).map(function (id) { return availMap[id]; }).filter(Boolean);

    /* rule 0 - is it a claim a decision can turn on at all? */
    if (!claim.scoped) {
      return { ok: false, rule: "Not decision-scoped", why: "Nothing could make this false, so no evidence can settle it. A reviewer cannot act on it and neither can you." };
    }

    /* rule 1 - any support in the source set you actually have? */
    if (!support.length) {
      return { ok: false, rule: "No support in your source set", why: "Every source that would carry this claim sits outside the set a plain search returned. You are asserting it, not showing it." };
    }

    /* rule 2 - support quality: a claim cannot rest on tier-4 material alone */
    var best = Math.min.apply(null, support.map(function (s) { return s.tier; }));
    if (best >= 4) {
      return { ok: false, rule: "Tier-4 support only", why: "Supported only by vendor blogs, press items or forum posts (" + support.map(function (s) { return s.id; }).join(", ") + "). No independent evidence at all." };
    }
    if (best === 3 && !L.tiering) {
      return { ok: false, rule: "Weak support, untiered search", why: "Best available source is tier 3 (" + support.filter(function (s) { return s.tier === 3; })[0].t + "). The peer-reviewed and official sources on this question were never searched for." };
    }

    /* rule 3 - retracted material in the pile */
    var retracted = support.filter(function (s) { return s.retracted; });
    if (retracted.length) {
      return { ok: false, rule: "Retracted source in the support", why: "One of the bulk hits (" + retracted[0].id + ") is retracted. Unscreened breadth put it in your table, and a reviewer will find it before you do." };
    }

    /* rule 4 - a claim that asserts a number needs a recorded number */
    if (claim.needsNumber && !L.extraction) {
      return { ok: false, rule: "Number asserted, nothing recorded", why: "This claim carries a figure, but no extraction row records the source, sample and measure behind it (" + (claim.numberFrom || "unknown") + "). Unrecorded numbers drift with every retelling." };
    }

    /* rule 5 - contradicting evidence you did not go looking for */
    if (contradictions.length && !L.contradiction) {
      return { ok: false, rule: "Unhandled contradiction", why: contradictions[0].t + " points the other way (" + contradictions.map(function (s) { return s.id; }).join(", ") + "). Because you never checked, the claim is stated flat instead of qualified." };
    }

    /* rule 6 - thin evidence: one small or unreplicated study */
    if (claim.thin && !L.replication) {
      var thinnest = support.slice().sort(function (a, b) { return (a.n || 1e9) - (b.n || 1e9); })[0];
      return { ok: false, rule: "Rests on one thin study", why: "Support is a single " + thinnest.type + (thinnest.n ? " (n=" + thinnest.n + ")" : "") + " with nothing replicating it. Fine as a hypothesis, not as a load-bearing claim." };
    }
    if (claim.thin && L.replication && (!claim.replicatedBy || !claim.replicatedBy.length)) {
      return { ok: false, rule: "Checked, and it does not replicate", why: "The replication check is the point: nothing independent supports this. Correct move is to mark it unknown and design a test, not to ship it as a finding." };
    }

    /* survives */
    var qualified = contradictions.length ? " Qualified against " + contradictions.map(function (s) { return s.id; }).join(", ") + "." : "";
    return { ok: true, rule: "Survives audit", why: "Tier-" + best + " support (" + support.filter(function (s) { return s.tier === best; }).map(function (s) { return s.id; }).join(", ") + ")" +
      (claim.needsNumber ? ", number recorded from " + claim.numberFrom : "") +
      (claim.thin ? ", replication found in " + (claim.replicatedBy || []).join(", ") : "") + "." + qualified };
  }

  function runAudit(L) {
    var avail = availableSources(L);
    var availMap = byId(avail);
    var claims = claimSet(L);
    var rows = claims.map(function (c) {
      var r = auditClaim(c, L, avail, availMap);
      return { text: c.text, ok: r.ok, rule: r.rule, why: r.why };
    });
    var survived = rows.filter(function (r) { return r.ok; }).length;
    return {
      survived: survived,
      total: rows.length,
      pct: Math.round((survived / rows.length) * 100),
      sources: avail.length,
      rows: rows
    };
  }

  /* ---------- UI ---------- */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function scoreClass(pct) { return pct >= 85 ? "ag-pass" : pct >= 50 ? "ag-mid" : "ag-fail"; }

  function keysToObj(list) {
    var o = {};
    LEVERS.forEach(function (l) { o[l.key] = list.indexOf(l.key) !== -1; });
    return o;
  }

  function renderResult(host, res) {
    host.innerHTML = "";
    var big = el("div", "ag-score-big " + scoreClass(res.pct));
    big.textContent = res.survived + " of " + res.total + " claims survive the audit (" + res.pct + "%) · " + res.sources + " sources in play";
    host.appendChild(big);

    var tbl = el("div", "ag-score-table");
    res.rows.forEach(function (r) {
      var row = el("div", "ag-score-row " + (r.ok ? "ag-row-pass" : "ag-row-fail"));
      var mark = el("span", "ag-mark", r.ok ? "✓" : "✗");
      var q = el("span", "ag-q", r.text);
      var rule = el("span", "ag-why", r.rule);
      q.appendChild(rule);
      var out = el("span", "ag-out", r.why);
      row.appendChild(mark); row.appendChild(q); row.appendChild(out);
      tbl.appendChild(row);
    });
    host.appendChild(tbl);
  }

  function buildLab(box) {
    var on = (box.getAttribute("data-levers") || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    var L = keysToObj(on);

    var bar = el("div", "ag-levers");
    LEVERS.forEach(function (lv) {
      var b = el("button", "ag-lever" + (L[lv.key] ? " ag-on" : "") + (lv.key === "bulk" ? " rl-anti" : ""), lv.label);
      b.title = lv.hint;
      b.addEventListener("click", function () {
        L[lv.key] = !L[lv.key];
        b.classList.toggle("ag-on", L[lv.key]);
        paint();
      });
      bar.appendChild(b);
    });
    box.appendChild(bar);

    var q = el("div", "rl-question");
    q.appendChild(el("span", "rl-qlabel", "The decision"));
    q.appendChild(el("p", null, "Should Cadence build a lecture-notes product for higher education next year? Board wants a memo in two weeks - and every claim in it will be read by someone looking for the weak one."));
    box.appendChild(q);

    var host = el("div", "rl-result");
    box.appendChild(host);

    var rail = el("p", "ag-rail");
    rail.textContent = "The 22-source corpus is a teaching corpus, but the audit is a real rule engine running over each source's tier, year, sample size, funder and what it supports or contradicts. Claims fail for a stated reason you can check. Hover a lever to see what it changes.";
    box.appendChild(rail);

    function paint() { renderResult(host, runAudit(L)); }
    paint();
  }

  function buildLadder(box) {
    var rungs = [
      { t: "Ask the model, ship the answer", set: [] },
      { t: "+ Sharp question", set: ["question"] },
      { t: "+ Source tiering", set: ["question", "tiering"] },
      { t: "+ Extraction table", set: ["question", "tiering", "extraction"] },
      { t: "+ Contradiction check", set: ["question", "tiering", "extraction", "contradiction"] },
      { t: "+ Replication check (defensible)", set: ["question", "tiering", "extraction", "contradiction", "replication"] },
      { t: "Then “add 40 sources” (the anti-lever)", set: ["question", "tiering", "extraction", "contradiction", "replication", "bulk"], anti: true }
    ];
    var tbl = el("div", "ag-score-table rl-ladder");
    var prev = null;
    rungs.forEach(function (r) {
      var res = runAudit(keysToObj(r.set));
      var row = el("div", "ag-score-row " + (r.anti ? "ag-row-fail" : "ag-row-pass"));
      var mark = el("span", "ag-mark rl-num", r.anti ? "✗" : res.survived + "/" + res.total);
      var q = el("span", "ag-q", r.t);
      var delta = prev === null ? "baseline" : (res.survived - prev >= 0 ? "+" : "") + (res.survived - prev) + " claims";
      var out = el("span", "ag-out", res.pct + "% survive - " + delta + " · " + res.sources + " sources read" +
        (r.anti ? ". Twice the reading, less defensible." : ""));
      row.appendChild(mark); row.appendChild(q); row.appendChild(out);
      tbl.appendChild(row);
      prev = res.survived;
    });
    box.appendChild(tbl);
    var rail = el("p", "ag-rail");
    rail.textContent = "Every row is computed in your browser now: the rule engine re-runs over the corpus with that rung's levers. Nothing in this table is a hard-coded number.";
    box.appendChild(rail);
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll(".rlbox"), function (box) {
      var mode = box.getAttribute("data-mode") || "lab";
      if (mode === "ladder") buildLadder(box);
      else buildLab(box);
    });
  });

  window.RESEARCH_LIVE = { audit: function (list) { return runAudit(keysToObj(list || [])); } };
})();
