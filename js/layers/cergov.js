OpenLayers.Util.extend(Heron.scratch.layermap, {
  cergov_chvu_hranica: new OpenLayers.Layer.Vector("PP Čergov — Hranica CHVÚ", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chvu_cergov.geojson?v=b91a72f2",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovChvuHranicaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: true
  }),
  cergov_uev_hranica: new OpenLayers.Layer.Vector("PP Čergov — Hranica ÚEV", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/uev_cergov.geojson?v=25af3ded",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovUevHranicaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: true
  }),
  cergov_lesne_celky: new OpenLayers.Layer.Vector("PP Čergov — Lesné celky (LC)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/lesne_celky_cergov.geojson?v=7e8c66fa",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovLesneCelkyStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_lhc: new OpenLayers.Layer.Vector("PP Čergov — Lesné celky (LHC)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/lesne_celky_lhp_cergov.geojson?v=c9aa1bcb",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovLhcStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_mchu: new OpenLayers.Layer.Vector("PP Čergov — Rezervácie (MCHU)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/mchu_cergov.geojson?v=62b90883",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovMchuStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: true
  }),
  cergov_salamandria: new OpenLayers.Layer.Vector("PP Čergov — Navrhovaná PR Salamandria", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/salamandria_hranica.geojson?v=b2bc5228",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSalamStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: true
  }),
  cergov_chranene: new OpenLayers.Layer.Vector("PP Čergov — Chránené územia (SOP≥2)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chranene_uzemia_cergov_d.geojson?v=761b5563",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovChrStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop2: new OpenLayers.Layer.Vector("PP Čergov — Súčasný stupeň ochrany 2 (ŠOP SR)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/sop_stupen2_cergov_d.geojson?v=9c747d3e",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSop2StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop3: new OpenLayers.Layer.Vector("PP Čergov — Súčasný stupeň ochrany 3 (ŠOP SR)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/sop_stupen3_cergov_d.geojson?v=713f8ecf",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSop3StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop4: new OpenLayers.Layer.Vector("PP Čergov — Súčasný stupeň ochrany 4 (ŠOP SR)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/sop_stupen4_cergov_d.geojson?v=9293018a",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSop4StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop5: new OpenLayers.Layer.Vector("PP Čergov — Súčasný stupeň ochrany 5 (ŠOP SR)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/sop_stupen5_cergov_d.geojson?v=ea193273",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSop5StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_vek_fill: new OpenLayers.Layer.Vector("PP Čergov — Vekové triedy VT1-4", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_vt1_4.geojson?v=24058723",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVekStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_vt5_6: new OpenLayers.Layer.Vector("PP Čergov — VT5-6 (81-120r)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_vt5_6_d.geojson?v=c4bc96aa",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVT56StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_vt7: new OpenLayers.Layer.Vector("PP Čergov — VT7 (120+r)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_vt7_d.geojson?v=c76663af",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVT7StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_ochranne_lesy: new OpenLayers.Layer.Vector("PP Čergov — Ochranné lesy", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_ochranne_d.geojson?v=303b6b26",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovOchrStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_lesy_sr: new OpenLayers.Layer.Vector("PP Čergov — Lesy SR (obhospodarovateľ)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_lesy_sr_d.geojson?v=827db169",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovLesySrStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_voda: new OpenLayers.Layer.Vector("PP Čergov — Vodné toky", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/vod_toky_cergov.geojson?v=8b0172d7",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVodaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_mikro1: new OpenLayers.Layer.Vector("PP Čergov — Mikropovodia do 5 km²", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/mikropovodia_alt1_cergov.geojson?v=fb5bc053",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovMikro1StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_mikro2: new OpenLayers.Layer.Vector("PP Čergov — Mikropovodia 5–10 km²", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/mikropovodia_alt2_cergov.geojson?v=6237ad6c",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovMikro2StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_mikro3: new OpenLayers.Layer.Vector("PP Čergov — Mikropovodia nad 10 km²", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/mikropovodia_alt3_cergov.geojson?v=f29331ff",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovMikro3StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_navrh2: new OpenLayers.Layer.Vector("PP Čergov — Návrh zonácie, stupeň 2 (bezlesie)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/navrh_zonacie_t2_cergov_d.geojson?v=1026bfa8",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovNavrh2StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_navrh3: new OpenLayers.Layer.Vector("PP Čergov — Návrh zonácie, stupeň 3", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/navrh_zonacie_t3_cergov_d.geojson?v=a589ccfe",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovNavrh3StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_navrh4: new OpenLayers.Layer.Vector("PP Čergov — Návrh zonácie, stupeň 4", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/navrh_zonacie_t4_cergov_d.geojson?v=01eacf79",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovNavrh4StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_navrh5: new OpenLayers.Layer.Vector("PP Čergov — Návrh zonácie, stupeň 5", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/navrh_zonacie_t5_cergov_d.geojson?v=e2ccd858",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovNavrh5StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_enklavy4: new OpenLayers.Layer.Vector("PP Čergov — Návrh zonácie: zjednotenie enkláv do 4. stupňa", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/navrh_zonacie_enklavy_t4_cergov_d.geojson?v=b104170a",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovEnklava4StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_enklavy5: new OpenLayers.Layer.Vector("PP Čergov — Návrh zonácie: zjednotenie enkláv do 5. stupňa", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/navrh_zonacie_enklavy_t5_cergov_d.geojson?v=f9e1a165",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovEnklava5StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
});

Heron.scratch.layermap.cergov_jprl_cisla = new OpenLayers.Layer.Vector("PP Čergov — Čísla JPRL", {
  protocol: new OpenLayers.Protocol.HTTP({url: "cergov/jprl_cisla_cergov.geojson?v=6f150765", format: new OpenLayers.Format.GeoJSON({internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")})}),
  styleMap: cergovJprlCislaStyleMap,
  isBaseLayer: false, hideInLegend: false, visibility: false
});
Heron.scratch.layermap.cergov_jprl_zhluky = new OpenLayers.Layer.Vector("PP Čergov — Čísla JPRL (zhluky dielcov)", {
  protocol: new OpenLayers.Protocol.HTTP({url: "cergov/jprl_zhluky_cergov.geojson?v=26ffc368", format: new OpenLayers.Format.GeoJSON({internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")})}),
  strategies: [new OpenLayers.Strategy.Fixed()],
  styleMap: cergovJprlZhlukyStyleMap, minResolution: 6,
  isBaseLayer: false, hideInLegend: true, displayInLayerSwitcher: false, visibility: false
});
(function() {
  var poly = Heron.scratch.layermap.cergov_jprl_cisla, zhluky = Heron.scratch.layermap.cergov_jprl_zhluky;
  var loading = false, waiting = [];
  function load(callback) {
    if (poly.features.length) { if (callback) callback(); return; }
    if (callback) waiting.push(callback);
    if (loading) return;
    loading = true;
    poly.protocol.read({callback: function(resp) {
      loading = false;
      if (resp.success()) poly.addFeatures(resp.features);
      var cbs = waiting; waiting = [];
      cbs.forEach(function(cb) { cb(); });
    }});
  }
  function loadIfNeeded() {
    if (poly.map && poly.getVisibility() && poly.map.getResolution() <= 6) load();
  }
  // Hľadanie (js/vector_search.js): "He 504a/2"; body popisov sa nehľadajú.
  poly.searchLoad = load;
  poly.searchText = function(f) {
    var a = f.attributes;
    if (!a.c) return null;
    var base = a.lc.replace(" (ostatné)", "");
    return base.substring(0, 2) + (base !== a.lc ? "O" : "") + " " + a.c;
  };
  zhluky.searchable = false;
  poly.events.on({
    // setTimeout: zmena viditeľnosti inej vrstvy priamo v tomto evente zlyhá v GeoExt (toggleCheck)
    visibilitychanged: function() { setTimeout(function() { zhluky.setVisibility(poly.getVisibility()); loadIfNeeded(); }, 0); },
    moveend: loadIfNeeded
  });
})();

// Integrácia dielcov: dáta pre js/integracia.js (scripts/14 -> scripts/05)
var cergovIntegraciaData = {
  graf: {url: "cergov/integracia_graf_cergov.json?v=3bfedda0"},
  polygony: {url: "cergov/integracia_jprl_cergov.json?v=8533dbc2"}
};
Heron.scratch.layermap.cergov_integracia = new OpenLayers.Layer.Vector("PP Čergov — Integrácia dielcov (návrh)", {
  isBaseLayer: false, hideInLegend: false, visibility: false
});