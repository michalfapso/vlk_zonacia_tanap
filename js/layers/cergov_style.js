// Čergov — štýly pre všetky vrstvy

// --- Vekové triedy VT1–4: farebná výplň podľa veku ---
var cergovStyle = new OpenLayers.Style(
  {fillColor: "#cccccc", fillOpacity: 0.5, strokeColor: "#888", strokeWidth: 0.5}
);
cergovStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.EQUAL_TO,
    property: "age_class", value: 1
  }),
  symbolizer: {fillColor: "#D4EDBA", fillOpacity: 0.7, strokeColor: "#444", strokeWidth: 0.3}
})]); // VT1
cergovStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.EQUAL_TO,
    property: "age_class", value: 2
  }),
  symbolizer: {fillColor: "#8EC57A", fillOpacity: 0.7, strokeColor: "#444", strokeWidth: 0.3}
})]); // VT2
cergovStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.EQUAL_TO,
    property: "age_class", value: 3
  }),
  symbolizer: {fillColor: "#4A9E3F", fillOpacity: 0.7, strokeColor: "#444", strokeWidth: 0.3}
})]); // VT3
cergovStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.EQUAL_TO,
    property: "age_class", value: 4
  }),
  symbolizer: {fillColor: "#2D6B22", fillOpacity: 0.7, strokeColor: "#444", strokeWidth: 0.3}
})]); // VT4
var cergovVekStyleMap = new OpenLayers.StyleMap({"default": cergovStyle});

// --- VT5–6: fialová zvislá riedka šrafáž ---
var cergovVT56StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_vt5_6)", fillOpacity: 1, strokeColor: "#6A0DAD", strokeWidth: 0.5
})});

// --- VT7: fialová zvislá hustá šrafáž ---
var cergovVT7StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_vt7)", fillOpacity: 1, strokeColor: "#6A0DAD", strokeWidth: 0.5
})});

// --- Ochranné lesy: červená šikmá šrafáž (45°) ---
var cergovOchrStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_ochranne)", fillOpacity: 1, strokeColor: "#CC0000", strokeWidth: 0.8
})});

// --- Chránené územia: zelená šikmá šrafáž (135°, opačný smer) ---
var cergovChrStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_chranene)", fillOpacity: 1, strokeColor: "#006600", strokeWidth: 1.5
})});

// --- Vodné toky: modrá čiara ---
var cergovVodaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#0066CC", strokeWidth: 1.5, fillOpacity: 0
})});
