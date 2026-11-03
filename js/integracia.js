/*
 * Panel "Integrácia dielcov" (PP Čergov): interaktívne zvýšenie stupňa ochrany
 * lesných JPRL obkolesených vyšším stupňom (pozri js/integracia_algo.js).
 *
 * - tlačidlo v Heron toolbare (Integracia.toolbarItems(), heron_config.js)
 *   otvorí okno s nastaveniami; graf a polygóny (cergovIntegraciaData z
 *   js/layers/cergov.js, generuje Čergov pipeline scripts/14 + 05) sa
 *   stiahnu až pri prvom otvorení okna alebo zapnutí vrstvy,
 * - zmenené JPRL kreslí do vrstvy Heron.scratch.layermap.cergov_integracia
 *   ("PP Čergov — Integrácia dielcov (návrh)"),
 * - kým je okno otvorené, klik na lesnú JPRL otvorí ručnú zmenu stupňa
 *   (zatvorené okno = kliky na mapu fungujú ako predtým),
 * - export/import JSON (pre pipeline: docs/integracia_dielcov.json ->
 *   scripts/09 --integracia), rozpracovaný stav v localStorage.
 *
 * Polygóny: kompaktný formát scripts/lib/integracia.py:encode_polygons —
 * EPSG:3857 celé metre, delta kódované (bez GeoJSON parsera a reprojekcie).
 */
var Integracia = (function() {
  var A = window.IntegraciaAlgo;
  var COLORS = {2: "#8E24AA", 3: "#2E9E44", 4: "#F28C00", 5: "#D62728"};
  var LABEL_MAX_RES = 6;          // popisy JPRL od zoomu 15 (ako vrstva čísel JPRL)
  var DRAFT_KEY = "integracia_dielcov_draft";
  var EXPORT_VERZIA = 1;

  var g = null, P = null, polys = null, bounds = null;   // dáta (po načítaní)
  var loading = false, waiting = [];
  var nastavenia = copy(A.DEFAULTS);
  var rucne = {};                 // uzol -> stupeň (ručná zmena, pevná)
  var result = null;              // {deg, groups, vysledok, dovody}
  var feats = {};                 // uzol -> OpenLayers.Feature.Vector (zobrazené)
  var win = null, popup = null, clickCtl = null, selFeat = null, timer = null;
  var ui = {};

  /* Ext 3: update() pred vykreslením komponentu zlyhá — vtedy len nastav html. */
  function setHtml(c, html) { if (c.rendered) { c.update(html); } else { c.html = html; } }
  function copy(o) { var r = {}; for (var k in o) { if (o.hasOwnProperty(k)) { r[k] = o[k]; } } return r; }
  function layer() { return Heron.scratch.layermap.cergov_integracia; }
  function map() { return Heron.App.getMap(); }
  function ha(ares) { return (ares / 100).toFixed(1).replace(".", ","); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function(c) { return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]; }); }

  // ---------------------------------------------------------------- dáta
  function decodePolygons(js) {
    var out = [], bnd = [];
    for (var i = 0; i < js.p.length; i++) {
      var parts = [];
      for (var p = 0; p < js.p[i].length; p++) {
        var rings = [];
        for (var r = 0; r < js.p[i][p].length; r++) {
          var d = js.p[i][p][r], x = js.x0, y = js.y0, pts = [];
          for (var t = 0; t < d.length; t += 2) {
            x += d[t]; y += d[t + 1];
            pts.push(new OpenLayers.Geometry.Point(x, y));
          }
          rings.push(new OpenLayers.Geometry.LinearRing(pts));
        }
        parts.push(new OpenLayers.Geometry.Polygon(rings));
      }
      var geom = parts.length === 1 ? parts[0] : new OpenLayers.Geometry.MultiPolygon(parts);
      out.push(geom);
      bnd.push(geom.getBounds());
    }
    polys = out; bounds = bnd;
  }

  function getJSON(url, cb) {
    OpenLayers.Request.GET({url: url, callback: function(req) {
      if (req.status >= 200 && req.status < 300) {
        try { cb(null, JSON.parse(req.responseText)); } catch (e) { cb(e); }
      } else {
        cb(new Error("HTTP " + req.status + " " + url));
      }
    }});
  }

  function load(callback) {
    if (g) { if (callback) { callback(); } return; }
    if (callback) { waiting.push(callback); }
    if (loading) { return; }
    if (typeof cergovIntegraciaData === "undefined") { status("Dáta integrácie nie sú nasadené (scripts/14 + 05)."); return; }
    loading = true;
    status("Načítavam graf a polygóny JPRL…");
    var t0 = Date.now(), graf = null, poly = null, err = null, left = 2;
    function done() {
      if (--left) { return; }
      loading = false;
      if (err) { status("Chyba pri načítaní: " + err.message); return; }
      decodePolygons(poly);
      g = graf; P = A.prepare(g);
      Integracia.loadMs = Date.now() - t0;
      restoreDraft();
      recompute();
      var cbs = waiting; waiting = [];
      for (var i = 0; i < cbs.length; i++) { cbs[i](); }
    }
    getJSON(cergovIntegraciaData.graf.url, function(e, js) { err = err || e; graf = js; done(); });
    getJSON(cergovIntegraciaData.polygony.url, function(e, js) { err = err || e; poly = js; done(); });
  }

  // ---------------------------------------------------------------- výpočet
  function recompute() {
    if (!g) { return; }
    var t0 = Date.now();
    var r = A.run(P, nastavenia, rucne);
    result = {deg: r.deg, groups: r.groups, vysledok: A.vysledok(g, P, r.deg, r.groups, rucne), dovody: A.dovody(P, r.groups)};
    Integracia.runMs = Date.now() - t0;
    redraw();
    renderStats();
    saveDraft();
  }

  function schedule() {
    if (timer) { clearTimeout(timer); }
    timer = setTimeout(function() { timer = null; recompute(); }, 150);
  }

  function featureFor(i) {
    var f = feats[i];
    if (!f) { f = feats[i] = new OpenLayers.Feature.Vector(polys[i], {i: i, lbl: g.lbl[i]}); }
    f.attributes.novy = result.deg[i];
    f.attributes.rucne = rucne.hasOwnProperty(i);
    return f;
  }

  function redraw() {
    var lyr = layer();
    if (!lyr || !result) { return; }
    var show = [], i;
    for (i = 0; i < result.deg.length; i++) {
      if (result.deg[i] !== g.d[i] || rucne.hasOwnProperty(i)) { show.push(featureFor(i)); }
    }
    lyr.removeAllFeatures();
    lyr.addFeatures(show);
    if (selFeat) { lyr.addFeatures([selFeat]); }
  }

  function styleMap() {
    var ctx = {
      fill: function(f) { return f.attributes.sel ? "none" : "url(#pattern_enklava" + f.attributes.novy + ")"; },
      fop: function(f) { return f.attributes.sel ? 0 : 1; },
      stroke: function(f) { return f.attributes.sel ? "#0050FF" : (f.attributes.rucne ? "#000000" : COLORS[f.attributes.novy]); },
      width: function(f) { return f.attributes.sel ? 4 : (f.attributes.rucne ? 2.5 : 3); },
      dash: function(f) { return f.attributes.rucne && !f.attributes.sel ? "dash" : "solid"; },
      label: function(f) {
        var m = f.layer && f.layer.map;
        return (!f.attributes.sel && m && m.getResolution() <= LABEL_MAX_RES) ? f.attributes.lbl : "";
      }
    };
    return new OpenLayers.StyleMap({"default": new OpenLayers.Style({
      fillColor: "${fill}", fillOpacity: "${fop}", strokeColor: "${stroke}", strokeWidth: "${width}",
      strokeDashstyle: "${dash}", label: "${label}", fontSize: "10px", fontWeight: "bold",
      fontFamily: "Arial, sans-serif", fontColor: "#222222", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
    }, {context: ctx})});
  }

  // ---------------------------------------------------------------- štatistiky
  function renderStats() {
    if (!ui.stats || !result) { return; }
    var by = {}, lc = {}, n = 0, area = 0, nr = 0;
    for (var t = 0; t < result.vysledok.length; t++) {
      var v = result.vysledok[t], i = idxOf(v.idps), key = v.povodny + "→" + v.novy, a = g.a[i];
      if (!by[key]) { by[key] = {n: 0, a: 0}; }
      by[key].n++; by[key].a += a;
      var l = g.lc[g.l[i]];
      if (!lc[l]) { lc[l] = {n: 0, a: 0}; }
      lc[l].n++; lc[l].a += a;
      n++; area += a;
      if (v.dovod === A.ZDROJ_RUCNE) { nr++; }
    }
    var h = "<b>Zmenené JPRL: " + n + " (" + ha(area) + " ha)</b>, z toho ručne " + nr +
      "<table class='int-tab'><tr><th>prechod</th><th>JPRL</th><th>ha</th></tr>";
    var keys = Object.keys(by).sort();
    for (t = 0; t < keys.length; t++) { h += "<tr><td>" + keys[t] + "</td><td>" + by[keys[t]].n + "</td><td>" + ha(by[keys[t]].a) + "</td></tr>"; }
    h += "</table><table class='int-tab'><tr><th>LC</th><th>JPRL</th><th>ha</th></tr>";
    keys = Object.keys(lc).sort();
    for (t = 0; t < keys.length; t++) { h += "<tr><td>" + esc(keys[t]) + "</td><td>" + lc[keys[t]].n + "</td><td>" + ha(lc[keys[t]].a) + "</td></tr>"; }
    h += "</table><div class='int-small'>skupín: " + result.groups.length + ", výpočet " + Integracia.runMs + " ms</div>";
    setHtml(ui.stats, h);
    var warn = A.perkolacia(nastavenia)
      ? "<b>Pozor:</b> 1 + w<sub>SR</sub> + w<sub>vek</sub> = " + (1 + nastavenia.w_sr + nastavenia.w_vek).toFixed(2) +
        " &gt; q/(1−q) = " + (nastavenia.q / (1 - nastavenia.q)).toFixed(2) +
        ": pričleniť sa môžu aj skupiny s väčšinou hranice s nižším stupňom (rast sa môže „prelievať“)."
      : "";
    setHtml(ui.warn, warn);
    ui.warn.setVisible(!!warn);
  }

  var idIndex = null;
  function idxOf(idps) {
    if (!idIndex) { idIndex = {}; for (var i = 0; i < g.id.length; i++) { idIndex[g.id[i]] = i; } }
    return idIndex[idps];
  }

  function status(text) { if (ui.stats) { setHtml(ui.stats, "<i>" + esc(text) + "</i>"); } }

  // ---------------------------------------------------------------- export / import / draft
  function today() {
    var d = new Date(), p = function(x) { return (x < 10 ? "0" : "") + x; };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }

  function rucneList() {
    var out = [], keys = Object.keys(rucne).map(Number).sort(function(a, b) { return a - b; });
    for (var t = 0; t < keys.length; t++) {
      var i = keys[t];
      out.push({idps: g.id[i], lc: g.lc[g.l[i]], oznacenie: g.lbl[i], stupen: rucne[i]});
    }
    return out;
  }

  function exportData() {
    return {verzia: EXPORT_VERZIA, datum: today(), graf_verzia: g.h, nastavenia: copy(nastavenia),
      rucne: rucneList(), vysledok: result.vysledok};
  }

  function doExport() {
    if (!g) { return; }
    var blob = new Blob([JSON.stringify(exportData(), null, 1)], {type: "application/json"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "integracia_dielcov_" + today() + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 1000);
  }

  /** Nastavenia + ručné zmeny z exportu (rovnaké pravidlá ako clamp_rucne v Pythone). */
  function applyData(js) {
    var msgs = [], k;
    nastavenia = copy(A.DEFAULTS);
    for (k in (js.nastavenia || {})) {
      if (A.DEFAULTS.hasOwnProperty(k)) {
        nastavenia[k] = typeof A.DEFAULTS[k] === "boolean" ? !!js.nastavenia[k] : +js.nastavenia[k];
      }
    }
    rucne = {};
    var list = js.rucne || [];
    for (var t = 0; t < list.length; t++) {
      var i = idxOf(list[t].idps), s = +list[t].stupen;
      if (i === undefined) { msgs.push("JPRL " + (list[t].oznacenie || list[t].idps) + " nie je v grafe — vynechaná"); continue; }
      if (s < g.s[i]) { msgs.push(g.lbl[i] + ": " + s + ". SO je pod súčasným stupňom " + g.s[i] + " — zvýšené"); s = g.s[i]; }
      rucne[i] = Math.max(2, Math.min(5, s));
    }
    if (js.graf_verzia && js.graf_verzia !== g.h) {
      msgs.unshift("Súbor bol vytvorený nad inou verziou grafu (" + js.graf_verzia + ", teraz " + g.h + ").");
    }
    if (popup) { popup.close(); }
    syncControls();
    recompute();
    return msgs;
  }

  function doImport() {
    var inp = document.createElement("input");
    inp.type = "file";
    inp.accept = ".json,application/json";
    inp.onchange = function() {
      if (!inp.files.length) { return; }
      var rd = new FileReader();
      rd.onload = function() {
        var js;
        try { js = JSON.parse(rd.result); } catch (e) { Ext.Msg.alert("Integrácia dielcov", "Neplatný JSON: " + esc(e.message)); return; }
        load(function() {
          var msgs = applyData(js);
          if (msgs.length) { Ext.Msg.alert("Integrácia dielcov — import", msgs.map(esc).join("<br>")); }
        });
      };
      rd.readAsText(inp.files[0]);
    };
    inp.click();
  }

  function saveDraft() {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify({graf_verzia: g.h, nastavenia: nastavenia, rucne: rucneList()}));
    } catch (e) { /* súkromné okno / zakázané úložisko */ }
  }

  function restoreDraft() {
    var js = null;
    try { js = JSON.parse(window.localStorage.getItem(DRAFT_KEY) || "null"); } catch (e) { js = null; }
    if (!js) { return; }
    try { applyData(js); } catch (e) { rucne = {}; nastavenia = copy(A.DEFAULTS); }
  }

  // ---------------------------------------------------------------- ručná zmena (klik)
  function hit(lonlat) {
    var pt = new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat);
    for (var i = 0; i < polys.length; i++) {
      if (bounds[i].containsLonLat(lonlat) && polys[i].intersects(pt)) { return i; }
    }
    return -1;
  }

  function setSel(i) {
    var lyr = layer();
    if (selFeat) { lyr.removeFeatures([selFeat]); selFeat.destroy(); selFeat = null; }
    if (i >= 0) {
      selFeat = new OpenLayers.Feature.Vector(polys[i].clone(), {sel: true});
      lyr.addFeatures([selFeat]);
    }
  }

  function setRucne(i, s) {
    if (s === null) { delete rucne[i]; } else { rucne[i] = s; }
    recompute();
  }

  function popupHtml(i) {
    var man = rucne.hasOwnProperty(i);
    var dov = man ? A.ZDROJ_RUCNE : (result.deg[i] !== g.d[i] ? result.dovody[i] : "bez zmeny");
    return "<div class='int-pop'><b>" + esc(g.lbl[i]) + "</b> (" + esc(g.lc[g.l[i]]) + ", " + ha(g.a[i]) + " ha)<br>" +
      "základný návrh: <b>" + g.d[i] + ". SO</b><br>" +
      "súčasný stupeň: " + (g.s[i] ? g.s[i] + ". SO" : "—") + "<br>" +
      "výsledok: <b>" + result.deg[i] + ". SO</b>" + (man ? " (ručne)" : "") + "<br>" +
      "<span class='int-small'>" + esc(dov) + "</span></div>";
  }

  function openPopup(i, xy) {
    if (popup) { popup.destroy(); popup = null; }
    setSel(i);
    var buttons = [];
    [2, 3, 4, 5].forEach(function(s) {
      var pod = s < g.s[i];
      buttons.push({text: s + ". SO", disabled: pod, pressed: rucne[i] === s, enableToggle: false,
        tooltip: pod ? "Pod súčasný stupeň ochrany " + g.s[i] + " (tabuľka / ŠOP SR) znížiť nemožno"
                     : "Ručne nastaviť " + s + ". stupeň (má prednosť pred algoritmom)",
        handler: function() { setRucne(i, s); openPopup(i, xy); }});
    });
    buttons.push({text: "zrušiť ručnú zmenu", disabled: !rucne.hasOwnProperty(i),
      handler: function() { setRucne(i, null); openPopup(i, xy); }});
    popup = new Ext.Window({
      title: "JPRL " + g.lbl[i], width: 380, autoHeight: true, resizable: false, closeAction: "close",
      html: popupHtml(i), bodyStyle: "padding:6px", buttonAlign: "left", fbar: buttons,
      listeners: {close: function() { popup = null; setSel(-1); }}
    });
    popup.show();
    var mxy = Ext.get(map().div).getXY();
    popup.setPagePosition(mxy[0] + xy.x + 12, mxy[1] + xy.y + 12);
  }

  function onMapClick(evt) {
    if (!g || !win || !win.isVisible()) { return; }
    var i = hit(map().getLonLatFromPixel(evt.xy));
    if (i < 0) {
      if (popup) { popup.close(); }
      return;
    }
    openPopup(i, evt.xy);
  }

  function ensureClickControl() {
    if (clickCtl) { return; }
    var Ctl = OpenLayers.Class(OpenLayers.Control, {
      initialize: function() {
        OpenLayers.Control.prototype.initialize.apply(this, arguments);
        this.handler = new OpenLayers.Handler.Click(this, {click: onMapClick}, {single: true, stopSingle: false});
      }
    });
    clickCtl = new Ctl();
    map().addControl(clickCtl);
  }

  // ---------------------------------------------------------------- okno
  function slider(key, label, min, max, scale) {
    var lbl = new Ext.BoxComponent({html: "", style: "margin-top:6px"});
    function text(v) {
      setHtml(lbl, label + ": <b>" + (v / scale).toFixed(2) + "</b>" + (key === "q" ? " (q/(1−q) = " + (v / scale / (1 - v / scale)).toFixed(2) + ")" : ""));
    }
    var sl = new Ext.Slider({minValue: min, maxValue: max, increment: 1, value: Math.round(nastavenia[key] * scale),
      listeners: {change: function(s, v) { nastavenia[key] = v / scale; text(v); schedule(); }}});
    ui[key] = {set: function(v) { sl.setValue(Math.round(v * scale), false); text(Math.round(v * scale)); }};
    text(sl.getValue());
    return [lbl, sl];
  }

  function checkbox(key, label) {
    var cb = new Ext.form.Checkbox({boxLabel: label, checked: nastavenia[key],
      listeners: {check: function(c, v) { nastavenia[key] = v; schedule(); }}});
    ui[key] = {set: function(v) { cb.suspendEvents(); cb.setValue(v); cb.resumeEvents(); }};
    return cb;
  }

  function syncControls() {
    if (!win) { return; }
    for (var k in A.DEFAULTS) { if (A.DEFAULTS.hasOwnProperty(k) && ui[k]) { ui[k].set(nastavenia[k]); } }
  }

  function createWindow() {
    ui.stats = new Ext.BoxComponent({html: "", style: "margin-top:8px"});
    ui.warn = new Ext.BoxComponent({html: "", cls: "int-warn", hidden: true});
    var items = [].concat(
      slider("q", "q — potrebný podiel hranice s vyšším stupňom", 50, 90, 100),
      slider("w_sr", "w<sub>SR</sub> — váha podielu Lesy SR", 0, 100, 100),
      slider("w_vek", "w<sub>vek</sub> — váha veku (min(vek,120)/120)", 0, 100, 100),
      [checkbox("kaskada", "kaskáda (opakovať do ustálenia)"),
       checkbox("bezlesie_nizsi", "hranica s bezlesím = nižší stupeň"),
       ui.warn, ui.stats]);
    win = new Ext.Window({
      title: "Integrácia dielcov (návrh)", width: 330, height: 560, autoScroll: true, closeAction: "hide",
      bodyStyle: "padding:8px; background:#FFF", items: items, constrain: true,
      tbar: [
        {text: "Export JSON", tooltip: "Uložiť nastavenia, ručné zmeny a výsledok (pre scripts/09 --integracia)", handler: doExport},
        {text: "Import JSON", tooltip: "Načítať uložené nastavenia a ručné zmeny", handler: doImport},
        "->",
        {text: "Predvolené", tooltip: "Predvolené nastavenia a zrušenie všetkých ručných zmien", handler: function() {
          if (!g) { return; }
          Ext.Msg.confirm("Integrácia dielcov", "Obnoviť predvolené nastavenia a zrušiť všetky ručné zmeny?", function(b) {
            if (b === "yes") { applyData({}); }
          });
        }}
      ],
      listeners: {
        show: function() { ensureClickControl(); clickCtl.activate(); },
        hide: function() { if (clickCtl) { clickCtl.deactivate(); } if (popup) { popup.close(); } }
      }
    });
    var size = Ext.getBody().getViewSize();
    win.setPosition(Math.max(0, size.width - 350), 90);
  }

  function open() {
    if (!win) { createWindow(); }
    win.show();
    var lyr = layer();
    if (lyr && !lyr.getVisibility()) { lyr.setVisibility(true); }
    load(function() { syncControls(); renderStats(); });
  }

  function init() {
    var lyr = layer();
    if (!lyr) { return; }
    lyr.styleMap = styleMap();
    lyr.searchLoad = load;                        // js/vector_search.js
    lyr.searchText = function(f) { return f.attributes.sel ? null : f.attributes.lbl; };
    lyr.events.on({visibilitychanged: function() { if (lyr.getVisibility()) { load(); } }});
  }

  function toolbarItems() {
    return [{type: "any", options: {
      xtype: "button", text: "Integrácia dielcov",
      tooltip: "PP Čergov: zvýšenie stupňa ochrany JPRL obkolesených vyšším stupňom (nastavenia, ručné zmeny, export)",
      handler: open
    }}];
  }

  Ext.util.CSS.createStyleSheet(
    ".int-warn { margin-top:8px; padding:4px; background:#FFF3CD; border:1px solid #E0B000; font-size:11px; }" +
    ".int-tab { margin-top:6px; border-collapse:collapse; font-size:11px; }" +
    ".int-tab td, .int-tab th { padding:1px 6px; border-bottom:1px solid #EEE; text-align:right; }" +
    ".int-tab td:first-child, .int-tab th:first-child { text-align:left; }" +
    ".int-small { font-size:10px; color:#666; }" +
    ".int-pop { font-size:12px; line-height:1.5; }",
    "integracia-css");

  if (window.Ext) { Ext.onReady(function() { setTimeout(init, 0); }); }

  return {toolbarItems: toolbarItems, open: open, init: init, exportData: exportData, applyData: applyData,
    geometry: function(i) { return polys ? polys[i] : null; },
    state: function() { return {g: g, rucne: rucne, nastavenia: nastavenia, result: result}; }};
})();
