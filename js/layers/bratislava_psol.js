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
});
