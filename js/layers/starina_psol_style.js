// PSoL LHC Starina — štýl pre vrstvu plánovanej ťažby
// Odstupňovanie podľa hustoty ťažby (tazba_m3_ha, m3/ha); hranice tried podľa
// kvantilov reálnych dát LHC Starina (medián ~27.6, 90. percentil ~92.4).

var psolStarinaTazbaStyle = new OpenLayers.Style({
  fillColor: "#999999", fillOpacity: 0.25, strokeColor: "#666666", strokeWidth: 0.5
});
psolStarinaTazbaStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.EQUAL_TO,
    property: "tazba_m3_ha", value: 0
  }),
  symbolizer: {fillColor: "#999999", fillOpacity: 0.25, strokeColor: "#666666", strokeWidth: 0.5}
})]); // bez plánovanej ťažby
psolStarinaTazbaStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.BETWEEN,
    property: "tazba_m3_ha", lowerBoundary: 0.0001, upperBoundary: 15
  }),
  symbolizer: {fillColor: "#FED976", fillOpacity: 0.55, strokeColor: "#8A2E00", strokeWidth: 0.8}
})]); // 0-15 m3/ha
psolStarinaTazbaStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.BETWEEN,
    property: "tazba_m3_ha", lowerBoundary: 15.0001, upperBoundary: 30
  }),
  symbolizer: {fillColor: "#FEB24C", fillOpacity: 0.55, strokeColor: "#8A2E00", strokeWidth: 0.8}
})]); // 15-30 m3/ha
psolStarinaTazbaStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.BETWEEN,
    property: "tazba_m3_ha", lowerBoundary: 30.0001, upperBoundary: 60
  }),
  symbolizer: {fillColor: "#FD8D3C", fillOpacity: 0.6, strokeColor: "#8A2E00", strokeWidth: 0.8}
})]); // 30-60 m3/ha
psolStarinaTazbaStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.BETWEEN,
    property: "tazba_m3_ha", lowerBoundary: 60.0001, upperBoundary: 100
  }),
  symbolizer: {fillColor: "#E31A1C", fillOpacity: 0.65, strokeColor: "#8A2E00", strokeWidth: 0.9}
})]); // 60-100 m3/ha
psolStarinaTazbaStyle.addRules([new OpenLayers.Rule({
  filter: new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.GREATER_THAN,
    property: "tazba_m3_ha", value: 100
  }),
  symbolizer: {fillColor: "#800026", fillOpacity: 0.7, strokeColor: "#4D0017", strokeWidth: 1.0}
})]); // >100 m3/ha
var psolStarinaTazbaStyleMap = new OpenLayers.StyleMap({"default": psolStarinaTazbaStyle});
