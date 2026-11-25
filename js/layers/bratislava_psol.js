// PSoL Bratislava 2026-2035 — vrstvy JPRL (LC GS051/GS053/GS055) + plánovaná ťažba štátnych lesov
// Zdroj: /gis_data/data/processed/jprl_2025.gpkg (NLC JPRL 2025) + bratislava_opis_plan.xlsx

OpenLayers.Util.extend(Heron.scratch.layermap, {
  psol_bratislava_statne_lesy: new OpenLayers.Layer.Vector("PSoL Bratislava — Štátne lesy (LESY SR, š.p.)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_statne_lesy_bratislava.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaStatneLesyStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_mestske_lesy: new OpenLayers.Layer.Vector("PSoL Bratislava — Mestské lesy Bratislava", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_mestske_lesy_bratislava.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaMestskeLesyStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_ostatni: new OpenLayers.Layer.Vector("PSoL Bratislava — Ostatné subjekty", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_ostatni_bratislava.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaOstatniStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_tazba: new OpenLayers.Layer.Vector("PSoL Bratislava — Plánovaná ťažba (štátne lesy)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_statne_lesy_tazba_bratislava.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaTazbaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_tazba_povodna_chybna: new OpenLayers.Layer.Vector("PSoL Bratislava — Plánovaná ťažba (štátne lesy, PÔVODNÁ CHYBNÁ vrstva)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_statne_lesy_tazba_bratislava_povodna_chybna.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaTazbaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_bezzasahove_do_2025_12_31: new OpenLayers.Layer.Vector("PSoL Bratislava — Bezzásahové referenčné plochy do 31.12.2025 (štátne lesy)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/bezzasahove_do_2025-12-31.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaBezzasahoveStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_vek_vt1_4: new OpenLayers.Layer.Vector("PSoL Bratislava — LESY SR: Vekové triedy VT1-4", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_statne_lesy_vt1_4.geojson?v=1",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaVekStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_vt5_6: new OpenLayers.Layer.Vector("PSoL Bratislava — LESY SR: VT5-6 (81-120r)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_statne_lesy_vt5_6_d.geojson?v=1",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaVT56StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_vt7: new OpenLayers.Layer.Vector("PSoL Bratislava — LESY SR: VT7 (120+r)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/jprl_statne_lesy_vt7_d.geojson?v=1",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolBratislavaVT7StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  psol_bratislava_dk_zonacia: new OpenLayers.Layer.Vector("CHA Devínske Karpaty — Návrh zonácie A/B (25.11.2026)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "bratislava_psol/devinske_karpaty_zonacia.geojson?v=3",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolDkZonaciaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
});

// Čísla JPRL LC Bratislava (scripts/generate_jprl_cisla_layer.py v 2026-Bratislava-PSoL) — ako PP Čergov
Heron.scratch.layermap.psol_bratislava_jprl_cisla = new OpenLayers.Layer.Vector("PSoL Bratislava — JPRL (hranice a čísla, plán 2016-2025)", {
  protocol: new OpenLayers.Protocol.HTTP({url: "bratislava_psol/jprl_cisla_bratislava.geojson?v=1", format: new OpenLayers.Format.GeoJSON({internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")})}),
  styleMap: psolBratislavaJprlCislaStyleMap,
  isBaseLayer: false, hideInLegend: false, visibility: false
});
Heron.scratch.layermap.psol_bratislava_jprl_zhluky = new OpenLayers.Layer.Vector("PSoL Bratislava — JPRL (zhluky dielcov)", {
  protocol: new OpenLayers.Protocol.HTTP({url: "bratislava_psol/jprl_zhluky_bratislava.geojson?v=1", format: new OpenLayers.Format.GeoJSON({internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")})}),
  strategies: [new OpenLayers.Strategy.Fixed()],
  styleMap: psolBratislavaJprlZhlukyStyleMap, minResolution: 6,
  isBaseLayer: false, hideInLegend: true, displayInLayerSwitcher: false, visibility: false
});
(function() {
  var poly = Heron.scratch.layermap.psol_bratislava_jprl_cisla, zhluky = Heron.scratch.layermap.psol_bratislava_jprl_zhluky;
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
  // Hľadanie (js/vector_search.js): "Ba 1336/1"; body popisov sa nehľadajú.
  poly.searchLoad = load;
  poly.searchText = function(f) { return f.attributes.c ? "Ba " + f.attributes.c : null; };
  zhluky.searchable = false;
  poly.events.on({
    // setTimeout: zmena viditeľnosti inej vrstvy priamo v tomto evente zlyhá v GeoExt (toggleCheck)
    visibilitychanged: function() { setTimeout(function() { zhluky.setVisibility(poly.getVisibility()); loadIfNeeded(); }, 0); },
    moveend: loadIfNeeded
  });
})();
