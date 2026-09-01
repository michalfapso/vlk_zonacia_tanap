OpenLayers.Util.extend(Heron.scratch.layermap, {
  cergov_vek_fill: new OpenLayers.Layer.Vector("PP Čergov — Vekové triedy VT1-4", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_vt1_4.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"),
        externalProjection: new OpenLayers.Projection("EPSG:3857"),
        ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVekStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_vt5_6: new OpenLayers.Layer.Vector("PP Čergov — VT5-6 (81-120r)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_vt5_6.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"),
        externalProjection: new OpenLayers.Projection("EPSG:3857"),
        ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVT56StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_vt7: new OpenLayers.Layer.Vector("PP Čergov — VT7 (120+r)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_vt7.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"),
        externalProjection: new OpenLayers.Projection("EPSG:3857"),
        ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVT7StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_ochranne_lesy: new OpenLayers.Layer.Vector("PP Čergov — Ochranné lesy", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/jprl_ochranne.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"),
        externalProjection: new OpenLayers.Projection("EPSG:3857"),
        ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovOchrStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_chranene: new OpenLayers.Layer.Vector("PP Čergov — Chránené územia", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chranene_uzemia_cergov.geojson?v=3",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:900913"),
        externalProjection: new OpenLayers.Projection("EPSG:4326"),
        ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovChrStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_voda: new OpenLayers.Layer.Vector("PP Čergov — Vodné toky", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/vod_toky_cergov.geojson?v=2",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:900913"),
        externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVodaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
});