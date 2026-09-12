// PSoL LHC Starina — plánovaná ťažba štátnych lesov
// Zdroj: /gis_data/data/raw/jprl_2025.zip (NLC JPRL 2025) + Opis porastov a plan hospodarskych opatreni.pdf (LHC Starina)

OpenLayers.Util.extend(Heron.scratch.layermap, {
  psol_starina_tazba: new OpenLayers.Layer.Vector("PSoL LHC Starina — Plánovaná ťažba (štátne lesy)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "starina_psol/jprl_statne_lesy_tazba_starina.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: psolStarinaTazbaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
});
