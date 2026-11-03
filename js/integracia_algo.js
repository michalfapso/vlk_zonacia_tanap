/*
 * Integrácia dielcov — jadro algoritmu (čisté funkcie nad grafom).
 *
 * 1:1 port scripts/lib/integracia.py z Čergov pipeline: výsledky (stupne,
 * skupiny, texty dôvodov) musia byť zhodné s Pythonom — overuje
 * tests/test_integracia_parity.py (spúšťa tento súbor cez node). Pri zmene
 * algoritmu meň oba súbory naraz.
 *
 * Graf (cergov/integracia_graf_cergov.json, scripts/14): stĺpcové polia
 * d (základný stupeň), s (súčasný), a (áre), sr, vek, b2..b5 (hranica s
 * bezlesím podľa stupňa, m), pp (neutrálny okraj), e (hrany [i, j, m, ...]).
 *
 * Kritérium pre množinu X lesných JPRL so stupňom < k (k = 5, 4, 3):
 *   pričleniť k stupňu k  <=>  bG·(1 + w_sr·podiel_SR + w_vek·f_vek) > q/(1−q)·bL
 * bG = hranica s JPRL/bezlesím so stupňom >= k, bL = hranica s nižším stupňom
 * (bezlesie nižšieho stupňa sa počíta len ak bezlesie_nizsi). Okraj PP je neutrálny.
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
    var STUPNE_BEZLESIA = [2, 3, 4, 5];
    var DEFAULTS = {q: 0.6, w_sr: 0.5, w_vek: 0, kaskada: true, bezlesie_nizsi: true};
    var ZDROJ_RUCNE = "ručná zmena (panel Integrácia dielcov)";

    function prepare(g) {
        var n = g.d.length, nbr = [], i, t;
        for (i = 0; i < n; i++) { nbr.push([]); }
        for (t = 0; t < g.e.length; t += 3) {
            nbr[g.e[t]].push([g.e[t + 1], g.e[t + 2]]);
            nbr[g.e[t + 1]].push([g.e[t], g.e[t + 2]]);
        }
        var area = [], aSr = [], aVek = [];
        for (i = 0; i < n; i++) {
            var a = Math.max(g.a[i], 1);
            var fv = Math.min(Math.max(g.vek[i], 0), VEK_REF) / VEK_REF;
            area.push(a); aSr.push(a * g.sr[i]); aVek.push(a * fv);
        }
        var bz = [];
        for (i = 0; i < STUPNE_BEZLESIA.length; i++) { bz.push(g["b" + STUPNE_BEZLESIA[i]]); }
        return {n: n, nbr: nbr, d0: g.d.slice(), area: area, a_sr: aSr, a_vek: aVek, bz: bz};
    }

    function ext(P, k, bezlesieNizsi) {
        var n = P.n, eg = [], el = [], i, s;
        for (i = 0; i < n; i++) { eg.push(0); el.push(0); }
        for (s = 0; s < STUPNE_BEZLESIA.length; s++) {
            var b = P.bz[s];
            if (STUPNE_BEZLESIA[s] >= k) {
                for (i = 0; i < n; i++) { eg[i] += b[i]; }
            } else if (bezlesieNizsi) {
                for (i = 0; i < n; i++) { el[i] += b[i]; }
            }
        }
        return {eg: eg, el: el};
    }

    function dw(bG, bL, A, Asr, Avek, r, wSr, wVek) {
        return r * bL - bG * (1.0 + wSr * Asr / A + wVek * Avek / A);
    }

    function hasPassenger(P, deg, k, X, bG, bL, A, Asr, Avek, E, r, wSr, wVek) {
        if (X.length === 1) { return false; }
        var inX = {}, x, t;
        for (x = 0; x < X.length; x++) { inX[X[x]] = true; }
        var D = dw(bG, bL, A, Asr, Avek, r, wSr, wVek);
        for (x = 0; x < X.length; x++) {
            var v = X[x], gv = E.eg[v], lo = E.el[v], vx = 0, nb = P.nbr[v];
            for (t = 0; t < nb.length; t++) {
                var j = nb[t][0], ln = nb[t][1];
                if (deg[j] >= k) { gv += ln; } else if (inX[j]) { vx += ln; } else { lo += ln; }
            }
            var D2 = dw(bG - gv, bL - lo + vx, A - P.area[v], Asr - P.a_sr[v], Avek - P.a_vek[v], r, wSr, wVek);
            if (D2 <= D) { return true; }
        }
        return false;
    }

    function grow(P, deg, fixed, k, s, E, r, wSr, wVek) {
        var nbr = P.nbr, X = [s], inX = {}, t, j, ln;
        inX[s] = true;
        var bG = E.eg[s], bL = E.el[s];
        for (t = 0; t < nbr[s].length; t++) {
            j = nbr[s][t][0]; ln = nbr[s][t][1];
            if (deg[j] >= k) { bG += ln; } else { bL += ln; }
        }
        var A = P.area[s], Asr = P.a_sr[s], Avek = P.a_vek[s];
        var D = dw(bG, bL, A, Asr, Avek, r, wSr, wVek);
        var front = {}, fkeys = [];
        function addFront(node) {
            for (var q = 0; q < nbr[node].length; q++) {
                var jj = nbr[node][q][0];
                if (deg[jj] < k && !inX[jj] && !fixed[jj]) {
                    if (front[jj] === undefined) { front[jj] = 0; fkeys.push(jj); }
                    front[jj] += nbr[node][q][1];
                }
            }
        }
        addFront(s);
        while (D >= 0) {
            var best = null;
            fkeys.sort(function (a, b) { return a - b; });
            for (var f = 0; f < fkeys.length; f++) {
                var u = fkeys[f], bux = front[u], gu = E.eg[u], lu = E.el[u];
                for (t = 0; t < nbr[u].length; t++) {
                    j = nbr[u][t][0]; ln = nbr[u][t][1];
                    if (deg[j] >= k) { gu += ln; } else if (!inX[j]) { lu += ln; }
                }
                var nbG = bG + gu, nbL = bL - bux + lu;
                var nD = dw(nbG, nbL, A + P.area[u], Asr + P.a_sr[u], Avek + P.a_vek[u], r, wSr, wVek);
                if (best === null || nD < best[0]) { best = [nD, u, nbG, nbL]; }
            }
            if (best === null || best[0] >= D) { return null; }
            D = best[0]; bG = best[2]; bL = best[3];
            var w = best[1];
            X.push(w); inX[w] = true;
            A += P.area[w]; Asr += P.a_sr[w]; Avek += P.a_vek[w];
            delete front[w];
            fkeys.splice(fkeys.indexOf(w), 1);
            addFront(w);
        }
        if (hasPassenger(P, deg, k, X, bG, bL, A, Asr, Avek, E, r, wSr, wVek)) { return null; }
        return [X, bG, bL];
    }

    /**
     * opts: {q, w_sr, w_vek, kaskada, bezlesie_nizsi}; rucne: {uzol: stupeň}
     * (pevné, už orezané na súčasný stupeň). Vráti {deg, groups}.
     */
    function run(P, opts, rucne) {
        var o = {}, key;
        for (key in DEFAULTS) { if (DEFAULTS.hasOwnProperty(key)) { o[key] = (opts && opts[key] !== undefined) ? opts[key] : DEFAULTS[key]; } }
        var nbr = P.nbr, n = P.n, r = o.q / (1 - o.q);
        var deg = P.d0.slice(), fixed = [], i, t, x;
        for (i = 0; i < n; i++) { fixed.push(false); }
        if (rucne) {
            for (key in rucne) {
                if (rucne.hasOwnProperty(key)) { deg[+key] = rucne[key]; fixed[+key] = true; }
            }
        }
        var groups = [];
        for (var ti = 0; ti < TARGETS.length; ti++) {
            var k = TARGETS[ti], E = ext(P, k, o.bezlesie_nizsi);
            for (;;) {
                var seeds = [];
                for (i = 0; i < n; i++) {
                    if (deg[i] >= k || fixed[i]) { continue; }
                    var g = E.eg[i], tot = E.eg[i] + E.el[i];
                    for (t = 0; t < nbr[i].length; t++) {
                        tot += nbr[i][t][1];
                        if (deg[nbr[i][t][0]] >= k) { g += nbr[i][t][1]; }
                    }
                    if (g > 0) { seeds.push([-g / tot, i]); }
                }
                seeds.sort(function (a, b) { return (a[0] - b[0]) || (a[1] - b[1]); });
                var snap = o.kaskada ? deg : deg.slice(), found = [], taken = {};
                for (var si = 0; si < seeds.length; si++) {
                    var s = seeds[si][1];
                    if (snap[s] >= k || (!o.kaskada && taken[s])) { continue; }
                    var res = grow(P, snap, fixed, k, s, E, r, o.w_sr, o.w_vek);
                    if (res === null) { continue; }
                    if (o.kaskada) { for (x = 0; x < res[0].length; x++) { deg[res[0][x]] = k; } }
                    groups.push({k: k, X: res[0], bG: res[1], bL: res[2], seed: s});
                    found.push(res[0]);
                    for (x = 0; x < res[0].length; x++) { taken[res[0][x]] = true; }
                }
                if (!o.kaskada) {
                    for (var fi = 0; fi < found.length; fi++) {
                        for (x = 0; x < found[fi].length; x++) { deg[found[fi][x]] = Math.max(deg[found[fi][x]], k); }
                    }
                    break;
                }
                if (found.length === 0) { break; }
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
            var txt = "pričlenené k " + x.k + ". SO: skupina " + x.X.length + " JPRL, hranica s >= " + x.k +
                ". SO " + x.bG + " m, s nižším " + x.bL + " m; Lesy SR " + pct(Asr / A) + " %, vek/" + VEK_REF +
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

    /** 1 + w_sr + w_vek > q/(1−q): pričleniť sa môže aj X s väčšinou hranice s nižším stupňom. */
    function perkolacia(opts) {
        return 1 + opts.w_sr + opts.w_vek > opts.q / (1 - opts.q) + 1e-9;   // 0.6/0.4 = 1.4999…
    }

    return {VEK_REF: VEK_REF, DEFAULTS: DEFAULTS, ZDROJ_RUCNE: ZDROJ_RUCNE, prepare: prepare, run: run,
        dovody: dovody, vysledok: vysledok, perkolacia: perkolacia};
}));
