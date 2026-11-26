/*
 * Integrácia dielcov — jadro algoritmu (čisté funkcie nad grafom).
 *
 * 1:1 port scripts/lib/integracia.py z Čergov pipeline: výsledky (stupne,
 * skupiny, texty dôvodov) musia byť zhodné s Pythonom — overuje
 * tests/test_integracia_parity.py (spúšťa tento súbor cez node). Pri zmene
 * algoritmu meň oba súbory naraz.
 *
 * Graf (cergov/integracia_graf_cergov.json, scripts/14, "v": 3): stĺpcové polia
 * d (základný stupeň), s (súčasný), a (áre), sr, vek, t (0 = les, 1 = bezlesie,
 * ktoré sa nezvyšuje nad 4, 2 = bezlesie na hranici PP, ktoré sa nezvyšuje vôbec),
 * pp (okraj PP, ráta sa ako hranica s nižším stupňom), e (hrany [i, j, m, ...];
 * hranice cez medzery — cesty a pod. — sú už premostené pri stavbe grafu).
 *
 * Presný minimálny rez (každý cieľ k = 5, 4, 3 samostatne, bez kaskády): z kandidátov
 * (východiskový stupeň < k, nie ručná zmena, cap >= k) sa vyberie množina X, ktorá
 * minimalizuje
 *   D(X) = r·bL(X) − Σ_{i∈X} g_i·(1 + w_sr·sr_i + w_vek·f_vek_i),  r = q/(1−q)
 * g_i = hranica dielca s uzlami stupňa >= k, bL = nová hranica X s nižším stupňom
 * (vrátane okraja PP). Riešené Dinicovým algoritmom v celých číslach (Q, W, WV =
 * percentá; kritérium prenásobené 100·(100−Q)·VEK_REF), X = minimálny minimalizátor
 * (uzly dosiahnuteľné zo zdroja v zvyškovom grafe) -> jednoznačný výsledok.
 * Podrobne pozri docstring scripts/lib/integracia.py.
 *
 * Bez závislostí (ES5 — beží v prehliadači aj v node).
 */
(function (root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.IntegraciaAlgo = factory();
    }
}(this, function () {
    "use strict";

    var VEK_REF = 120;
    var TARGETS = [5, 4, 3];
    var CAP_BEZLESIE = 4;
    var DEFAULTS = {q: 0.9, w_sr: 0.5, w_vek: 0};
    var ZDROJ_RUCNE = "ručná zmena (panel Integrácia dielcov)";

    function prepare(g) {
        var n = g.d.length, nbr = [], i, t;
        for (i = 0; i < n; i++) { nbr.push([]); }
        for (t = 0; t < g.e.length; t += 3) {
            nbr[g.e[t]].push([g.e[t + 1], g.e[t + 2]]);
            nbr[g.e[t + 1]].push([g.e[t], g.e[t + 2]]);
        }
        var area = [], aSr = [], aVek = [], vekc = [];
        for (i = 0; i < n; i++) {
            var a = Math.max(g.a[i], 1);
            var vc = Math.min(Math.max(g.vek[i], 0), VEK_REF);
            var fv = vc / VEK_REF;
            area.push(a); aSr.push(a * g.sr[i]); aVek.push(a * fv); vekc.push(vc);
        }
        var cap = [];
        for (i = 0; i < n; i++) { cap.push(g.t[i] === 2 ? 2 : (g.t[i] === 1 ? CAP_BEZLESIE : 5)); }
        return {n: n, nbr: nbr, d0: g.d.slice(), area: area, pp: g.pp.slice(), sr: g.sr.slice(), vekc: vekc,
            a_sr: aSr, a_vek: aVek, cap: cap};
    }

    function round(x) { return Math.floor(x + 0.5); }

    /** Dinic (celé čísla); vráti level z posledného BFS: level >= 0 = dosiahnuteľné zo zdroja v zvyškovom grafe. */
    function maxflow(n, head, to, cap, nxt, s, t) {
        var i, e, v, u, lu, sp, f, k;
        var stackE = new Int32Array(n + 1), q = new Int32Array(n), it = new Int32Array(n);
        for (;;) {
            var level = new Int32Array(n);
            for (i = 0; i < n; i++) { level[i] = -1; }
            var qh = 0, qt = 0;
            q[qt++] = s; level[s] = 0;
            while (qh < qt) {
                v = q[qh++];
                for (e = head[v]; e !== -1; e = nxt[e]) {
                    if (cap[e] > 0 && level[to[e]] < 0) { level[to[e]] = level[v] + 1; q[qt++] = to[e]; }
                }
            }
            if (level[t] < 0) { return level; }
            for (i = 0; i < n; i++) { it[i] = head[i]; }
            for (;;) {
                sp = 0; u = s;
                while (u !== t) {
                    e = it[u]; lu = level[u] + 1;
                    while (e !== -1 && !(cap[e] > 0 && level[to[e]] === lu)) { e = nxt[e]; }
                    it[u] = e;
                    if (e === -1) {                      // slepá ulica: ústup
                        level[u] = -1;
                        if (sp === 0) { break; }
                        e = stackE[--sp];
                        u = to[e ^ 1];
                        it[u] = nxt[e];
                        continue;
                    }
                    stackE[sp++] = e;
                    u = to[e];
                }
                if (u !== t) { break; }
                f = Infinity;
                for (k = 0; k < sp; k++) { if (cap[stackE[k]] < f) { f = cap[stackE[k]]; } }
                for (k = 0; k < sp; k++) { cap[stackE[k]] -= f; cap[stackE[k] ^ 1] += f; }
            }
        }
    }

    /** Minimálny minimalizátor X ⊆ L_k kritéria D (celočíselne, pozri hlavičku). */
    function kandidatiX(P, k, Q, W, WV, deg0, fixed) {
        var n = P.n, nbr = P.nbr, capn = P.cap, i, p, t;
        var cand = [], L = [], idx = [];
        for (i = 0; i < n; i++) {
            var c = deg0[i] < k && !fixed[i] && capn[i] >= k;
            cand.push(c); idx.push(-1);
            if (c) { idx[i] = L.length; L.push(i); }
        }
        var m = L.length;
        if (m === 0) { return []; }
        var S = m, T = m + 1, head = [], to = [], cap = [], nxt = [];
        for (i = 0; i < m + 2; i++) { head.push(-1); }
        function add(u, v, c1, c2) {
            to.push(v); cap.push(c1); nxt.push(head[u]); head[u] = to.length - 1;
            to.push(u); cap.push(c2); nxt.push(head[v]); head[v] = to.length - 1;
        }
        var cp = 12000 * Q;
        for (p = 0; p < m; p++) {
            i = L[p];
            var g = 0, l = P.pp[i], nb = nbr[i];
            for (t = 0; t < nb.length; t++) {
                var j = nb[t][0], ln = nb[t][1];
                if (deg0[j] >= k) { g += ln; }
                else if (cand[j]) { if (j > i) { add(p, idx[j], cp * ln, cp * ln); } }
                else { l += ln; }
            }
            var mult = 12000 + 120 * W * P.sr[i] + WV * P.vekc[i];
            var a = cp * l - (100 - Q) * g * mult;
            if (a > 0) { add(p, T, a, 0); } else if (a < 0) { add(S, p, -a, 0); }
        }
        var level = maxflow(m + 2, head, to, new Float64Array(cap), nxt, S, T), X = [];
        for (p = 0; p < m; p++) { if (level[p] >= 0) { X.push(L[p]); } }
        return X;
    }

    /**
     * opts: {q, w_sr, w_vek}; rucne: {uzol: stupeň}
     * (pevné, už orezané na súčasný stupeň). Vráti {deg, groups}.
     */
    function run(P, opts, rucne) {
        var o = {}, key;
        for (key in DEFAULTS) { if (DEFAULTS.hasOwnProperty(key)) { o[key] = (opts && opts[key] !== undefined) ? opts[key] : DEFAULTS[key]; } }
        var nbr = P.nbr, n = P.n, i, t, x, s;
        var Q = round(o.q * 100), W = round(o.w_sr * 100), WV = round(o.w_vek * 100);
        var deg0 = P.d0.slice(), fixed = [], zvysil = [];
        for (i = 0; i < n; i++) { fixed.push(false); zvysil.push(-1); }
        if (rucne) {
            for (key in rucne) {
                if (rucne.hasOwnProperty(key)) { deg0[+key] = rucne[key]; fixed[+key] = true; }
            }
        }
        var deg = deg0.slice();
        for (var ti = 0; ti < TARGETS.length; ti++) {
            var k = TARGETS[ti], X0 = kandidatiX(P, k, Q, W, WV, deg0, fixed);
            for (x = 0; x < X0.length; x++) {
                i = X0[x];
                if (k > zvysil[i]) { zvysil[i] = k; }
                if (k > deg[i]) { deg[i] = k; }
            }
        }
        var groups = [];
        for (ti = 0; ti < TARGETS.length; ti++) {
            var kk = TARGETS[ti], member = [], seen = [];
            for (i = 0; i < n; i++) { member.push(deg[i] === kk && zvysil[i] === kk); seen.push(false); }
            for (s = 0; s < n; s++) {
                if (!member[s] || seen[s]) { continue; }
                seen[s] = true;
                var X = [s], inX = {};
                for (x = 0; x < X.length; x++) {
                    var nb = nbr[X[x]];
                    for (t = 0; t < nb.length; t++) {
                        if (member[nb[t][0]] && !seen[nb[t][0]]) { seen[nb[t][0]] = true; X.push(nb[t][0]); }
                    }
                }
                X.sort(function (a, b) { return a - b; });
                for (x = 0; x < X.length; x++) { inX[X[x]] = true; }
                var bG = 0, bL = 0;
                for (x = 0; x < X.length; x++) {
                    var v = X[x], nv = nbr[v];
                    bL += P.pp[v];
                    for (t = 0; t < nv.length; t++) {
                        if (deg0[nv[t][0]] >= kk) { bG += nv[t][1]; } else if (!inX[nv[t][0]]) { bL += nv[t][1]; }
                    }
                }
                groups.push({k: kk, X: X, bG: bG, bL: bL});
            }
        }
        return {deg: deg, groups: groups};
    }

    function pct(x) { return Math.floor(x * 100 + 0.5); }

    /** Uzol -> text dôvodu (rovnaký ako integracia.dovody v Pythone). */
    function dovody(P, groups) {
        var out = {};
        for (var gi = 0; gi < groups.length; gi++) {
            var x = groups[gi], A = 0, Asr = 0, Avek = 0, i;
            for (i = 0; i < x.X.length; i++) { A += P.area[x.X[i]]; Asr += P.a_sr[x.X[i]]; Avek += P.a_vek[x.X[i]]; }
            var txt = "pričlenené k " + x.k + ". SO: skupina " + x.X.length + " dielcov, hranica s >= " + x.k +
                ". SO " + x.bG + " m, s nižším (vrátane okraja PP) " + x.bL + " m; Lesy SR " + pct(Asr / A) + " %, vek/" + VEK_REF +
                " " + pct(Avek / A) + " %";
            for (i = 0; i < x.X.length; i++) { out[x.X[i]] = txt; }
        }
        return out;
    }

    /** Zmenené JPRL (nový != základný) v poradí uzlov — 'vysledok' exportu. */
    function vysledok(g, P, deg, groups, rucne) {
        var dov = dovody(P, groups), out = [];
        for (var i = 0; i < deg.length; i++) {
            if (deg[i] !== g.d[i]) {
                out.push({idps: g.id[i], oznacenie: g.lbl[i], povodny: g.d[i], novy: deg[i],
                    dovod: (rucne && rucne.hasOwnProperty(i)) ? ZDROJ_RUCNE : (dov[i] || "")});
            }
        }
        return out;
    }

    /** 1 + w_sr + w_vek > q/(1−q): pričleniť sa môže aj dielec s väčšinou hranice s nižším stupňom. */
    function perkolacia(opts) {
        return 1 + opts.w_sr + opts.w_vek > opts.q / (1 - opts.q) + 1e-9;   // 0.6/0.4 = 1.4999…
    }

    return {VEK_REF: VEK_REF, CAP_BEZLESIE: CAP_BEZLESIE, DEFAULTS: DEFAULTS, ZDROJ_RUCNE: ZDROJ_RUCNE, prepare: prepare, run: run,
        dovody: dovody, vysledok: vysledok, perkolacia: perkolacia};
}));
