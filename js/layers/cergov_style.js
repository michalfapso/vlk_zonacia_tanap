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

// --- VT5–6: semi-transparentná fialová ---
var cergovVT56StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#C084FC", fillOpacity: 0.5, strokeColor: "#7C3AED", strokeWidth: 0.5
})});

// --- VT7: tmavšia fialová ---
var cergovVT7StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#7C3AED", fillOpacity: 0.55, strokeColor: "#4C1D95", strokeWidth: 0.5
})});

// --- Ochranné lesy: červená ---
var cergovOchrStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#FCA5A5", fillOpacity: 0.5, strokeColor: "#DC2626", strokeWidth: 0.8
})});

// --- Chránené územia: zelená ---
var cergovChrStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#22C55E", fillOpacity: 0.5, strokeColor: "#15803D", strokeWidth: 1.5
})});

// --- Vodné toky: modrá čiara ---
var cergovVodaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#0066CC", strokeWidth: 1.5, fillOpacity: 0
})});
