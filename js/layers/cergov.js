OpenLayers.Util.extend(Heron.scratch.layermap, {
  cergov_chvu_hranica: new OpenLayers.Layer.Vector("PP Čergov — Hranica CHVÚ", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chvu_cergov.geojson",
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
      url: "cergov/uev_cergov.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovUevHranicaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: true
  }),
  cergov_mchu: new OpenLayers.Layer.Vector("PP Čergov — Rezervácie (MCHU)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/mchu_cergov.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovMchuStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: true
  }),
  cergov_chranene: new OpenLayers.Layer.Vector("PP Čergov — Chránené územia (SOP≥2)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chranene_uzemia_cergov_d.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovChrStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop2: new OpenLayers.Layer.Vector("PP Čergov — SOP 2 (CHKO)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chranene_t2_cergov_d.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSop2StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop3: new OpenLayers.Layer.Vector("PP Čergov — SOP 3 (PR, PP, CHA)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chranene_t3_cergov_d.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSop3StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop4: new OpenLayers.Layer.Vector("PP Čergov — SOP 4 (NPR, NPP)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chranene_t4_cergov_d.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovSop4StyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_sop5: new OpenLayers.Layer.Vector("PP Čergov — SOP 5 (NP, PPR)", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/chranene_t5_cergov_d.geojson",
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
      url: "cergov/jprl_vt1_4.geojson",
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
      url: "cergov/jprl_vt5_6_d.geojson",
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
      url: "cergov/jprl_vt7_d.geojson",
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
      url: "cergov/jprl_ochranne_d.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326"), ignoreExtraDims: true
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovOchrStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
  cergov_voda: new OpenLayers.Layer.Vector("PP Čergov — Vodné toky", {
    protocol: new OpenLayers.Protocol.HTTP({
      url: "cergov/vod_toky_cergov.geojson",
      format: new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"), externalProjection: new OpenLayers.Projection("EPSG:4326")
      })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: cergovVodaStyleMap,
    isBaseLayer: false, hideInLegend: false, visibility: false
  }),
});
