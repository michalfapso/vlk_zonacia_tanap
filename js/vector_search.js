/*
 * Hľadanie podľa názvu vo vektorových vrstvách (v prehliadači, bez WFS),
 * spojené s hľadaním miest (Nominatim) v jednom poli toolbaru.
 *
 * Dopyt = slová oddelené medzerou; prvok vyhovuje, ak každé slovo dopytu
 * začína niektoré slovo jeho textu (bez ohľadu na veľkosť písmen a diakritiku);
 * číslo na konci slova dopytu nesmie pokračovať ďalšou číslicou.
 * Napr. "He 504" nájde JPRL He 504, 504a, 504/1, ... (nie 5040); "504" v
 * ľubovoľnom LC.
 *
 * Prehľadávajú sa zapnuté vrstvy (OpenLayers.Layer.Vector) s načítanými prvkami;
 * searchable: false vrstvu vylúči. Voliteľné voľby vrstvy:
 *   - searchText: function(feature) -> text alebo null (prvok sa nehľadá);
 *     inak text = hodnoty atribútov,
 *   - searchLoad: function(callback) — načítanie prvkov na požiadanie pred
 *     hľadaním (vrstva zapnutá, ale prvky ešte nenačítané).
 * Nájdené prvky sa hneď vykreslia do vrstvy "Výsledky hľadania" (mapa sa
 * nepribližuje). V zozname poľa je sekcia "Vo vrstvách" (riadok na vrstvu,
 * klik priblíži mapu na jej nájdené prvky) a pod ňou "Miesta (OpenStreetMap)".
 *
 * Ovládanie: xtype hr_vectorgeocodercombo namiesto hr_geocodercombo
 * (heron_config.js) + VectorSearch.toolbarItems() (zrušenie zvýraznenia).
 */
var VectorSearch = (function() {
  var layer = null;

  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function matcher(query) {
    var res = [];
    norm(query).split(/\s+/).forEach(function(t) {
      if (!t) return;
      var esc = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      res.push(new RegExp("(^|[^a-z0-9])" + esc + (/[0-9]$/.test(t) ? "(?![0-9])" : "")));
    });
    if (!res.length) return null;
    return function(text) {
      var n = norm(text);
      return res.every(function(re) { return re.test(n); });
    };
  }

  function defaultText(f) {
    var a = f.attributes, out = [];
    for (var k in a) {
      if (a[k] !== null && a[k] !== undefined && typeof a[k] !== "object") out.push(a[k]);
    }
    return out.join(" ");
  }

  function getLayer(map) {
    if (!layer) {
      layer = new OpenLayers.Layer.Vector("Výsledky hľadania", {
        displayInLayerSwitcher: false, hideInLegend: true, searchable: false,
        styleMap: new OpenLayers.StyleMap({"default": new OpenLayers.Style({
          strokeColor: "#FF0000", strokeWidth: 4, fillColor: "#FF0000", fillOpacity: 0.15,
          pointRadius: 8, label: "${popis}", fontSize: "12px", fontWeight: "bold", fontFamily: "Arial",
          fontColor: "#B00000", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 3
        })})
      });
      map.addLayer(layer);
    }
    map.setLayerIndex(layer, map.layers.length - 1);
    return layer;
  }

  function searchLayers(map) {
    return map.layers.filter(function(l) {
      return l instanceof OpenLayers.Layer.Vector && !l.isBaseLayer && l.searchable !== false &&
        l.getVisibility() && (l.features.length || l.searchLoad);
    });
  }

  function clear() {
    if (layer) layer.destroyFeatures();
  }

  /* Vyhľadá dopyt, zvýrazní nájdené prvky a zavolá callback(skupiny), kde
     skupina = {layer: názov vrstvy, features: zvýraznené prvky, texts: popisy}. */
  function run(query, callback) {
    var map = Heron.App.getMap();
    clear();
    var match = matcher(query || "");
    if (!match) { callback([]); return; }
    var layers = searchLayers(map);
    var pending = layers.length;
    if (!pending) finish();
    layers.forEach(function(l) {
      if (l.searchLoad) l.searchLoad(done); else done();
    });
    function done() { if (--pending === 0) finish(); }

    function finish() {
      var groups = [];
      layers.forEach(function(l) {
        var g = {layer: l.name, features: [], texts: []};
        l.features.forEach(function(f) {
          var text = l.searchText ? l.searchText(f) : defaultText(f);
          if (f.geometry && text !== null && match(text)) {
            // popis len pri vrstvách so searchText (inak by to boli všetky atribúty)
            var popis = l.searchText ? text : "";
            g.features.push(new OpenLayers.Feature.Vector(f.geometry.clone(), {popis: popis}));
            if (popis) g.texts.push(popis);
          }
        });
        if (g.features.length) groups.push(g);
      });
      groups.forEach(function(g) { getLayer(map).addFeatures(g.features); });
      callback(groups);
    }
  }

  function zoomTo(features) {
    var map = Heron.App.getMap(), bounds = new OpenLayers.Bounds();
    features.forEach(function(f) { bounds.extend(f.geometry.getBounds()); });
    map.zoomToExtent(bounds);
  }

  /* Pole hľadania miest (Nominatim) rozšírené o hľadanie vo vrstvách. Riadky
     zoznamu majú 'kind': "hdr" (nadpis sekcie, nedá sa vybrať), "layer" (vrstva)
     alebo nič (miesto z Nominatimu — ponecháva pôvodné správanie). */
  var Combo = Ext.extend(Heron.widgets.search.GeocoderCombo, {
    // inak Enter vyberie prvé miesto z Nominatimu namiesto hľadania vo vrstvách
    autoSelect: false,
    tpl: '<tpl for="."><div class="x-combo-list-item vs-{[values.kind || "osm"]}">' +
         '{name:htmlEncode}</div></tpl>',

    initComponent: function() {
      this.groups = [];
      this.groupsQuery = null;
      Combo.superclass.initComponent.apply(this, arguments);
      this.store.on("load", this.showGroups, this);
      this.on({
        beforequery: function(qe) { this.search(qe.query); },
        beforeselect: this.onBeforeSelect,
        specialkey: function(field, e) {
          // kratší dopyt (napr. "12") sa do Nominatimu neposiela — len do vrstiev
          if (e.getKey() === e.ENTER && this.getRawValue().trim().length < this.minChars) {
            this.store.removeAll();
            this.search(this.getRawValue());
          }
          if (e.getKey() === e.ESC) this.resetSearch();
        },
        scope: this
      });
    },

    search: function(query) {
      query = (query || "").trim();
      // rovnaký dopyt nad rovnakými vrstvami (beforequery aj Enter) sa nehľadá znova
      var key = query + "\n" + searchLayers(Heron.App.getMap()).map(function(l) { return l.id; }).join(",");
      if (key === this.groupsQuery) return;
      this.groupsQuery = key;
      this.groups = [];
      var self = this;
      run(query, function(groups) {
        if (key !== self.groupsQuery) return;  // medzitým nový dopyt
        self.groups = groups;
        self.showGroups();
      });
    },

    /* Vloží sekciu vrstiev pred miesta z Nominatimu (po každom načítaní store
       aj po dokončení hľadania vo vrstvách — poradie nie je dané). */
    showGroups: function() {
      var store = this.store, R = store.recordType;
      store.each(function(r) { if (r.data.kind) store.remove(r); });
      if (this.groups.length) {
        var rows = [new R({name: "Vo vrstvách", kind: "hdr"})];
        this.groups.forEach(function(g) {
          rows.push(new R({
            name: g.layer + " (" + g.features.length + ")" + (g.texts.length ? ": " + g.texts.join(", ") : ""),
            kind: "layer", group: g
          }));
        });
        if (store.getCount()) rows.push(new R({name: "Miesta (OpenStreetMap)", kind: "hdr"}));
        store.insert(0, rows);
      }
      if (store.getCount() && this.hasFocus) this.expand();
    },

    onBeforeSelect: function(combo, rec) {
      if (rec.data.kind === "layer") {
        zoomTo(rec.data.group.features);
        this.collapse();
      }
      return !rec.data.kind;
    },

    resetSearch: function() {
      this.setRawValue("");
      this.groupsQuery = null;
      this.groups = [];
      this.store.removeAll();
      this.collapse();
      clear();
    }
  });
  Ext.reg("hr_vectorgeocodercombo", Combo);
  Ext.util.CSS.createStyleSheet(
    ".vs-hdr { font-weight: bold; color: #555; background: #EEE; cursor: default; }" +
    ".vs-layer { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }",
    "vector-search-css");

  /* Položky Heron toolbaru (type "any") za poľom hľadania. */
  function toolbarItems() {
    return [
      {type: "any", options: {
        xtype: "button", text: "✕", tooltip: "Zrušiť zvýraznenie výsledkov hľadania vo vrstvách",
        handler: function() { Ext.getCmp("hr_geocodercombo").resetSearch(); }
      }}
    ];
  }

  return {run: run, clear: clear, matcher: matcher, toolbarItems: toolbarItems};
})();
