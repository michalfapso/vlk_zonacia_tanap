// PSoL Bratislava 2026-2035 — štýly

// --- Štátne lesy (Lesy SR, š.p.): zelená výplň ---
var psolBratislavaStatneLesyStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#2D6B22", fillOpacity: 0.35, strokeColor: "#1F4E17", strokeWidth: 1.0
})});

// --- Mestské lesy Bratislava: modrozelená výplň ---
var psolBratislavaMestskeLesyStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#1F7A5C", fillOpacity: 0.35, strokeColor: "#155440", strokeWidth: 1.0
})});

// --- Ostatné subjekty: hnedosivá výplň ---
var psolBratislavaOstatniStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#8B5A2B", fillOpacity: 0.35, strokeColor: "#5A3A1B", strokeWidth: 1.0
})});

// --- Dielce štátnych lesov s plánovanou ťažbou: červenooranžová výplň, zvýraznené ---
var psolBratislavaTazbaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#E05A00", fillOpacity: 0.55, strokeColor: "#8A2E00", strokeWidth: 1.2
})});

// --- Bezzásahové referenčné plochy do 31.12.2025: modrá výplň, výrazný obrys ---
var psolBratislavaBezzasahoveStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#1450A0", fillOpacity: 0.45, strokeColor: "#0A2E60", strokeWidth: 1.4
})});

// --- CHA Devínske Karpaty — návrh zonácie (25.11.2026), zóny zjednotené bez hraníc JPRL:
//     A = 5. SO (tmavočervená), B = 4. SO (oranžová),
//     A/B = stará geometria nevie rozlíšiť (fialová, prerušovaný obrys) ---
var psolDkZonaciaStyle = new OpenLayers.Style(
  {fillColor: "#7B3294", fillOpacity: 0.45, strokeColor: "#40004B", strokeWidth: 1.5, strokeDashstyle: "dash"}
);
psolDkZonaciaStyle.addRules([
  new OpenLayers.Rule({
    filter: new OpenLayers.Filter.Comparison({type: OpenLayers.Filter.Comparison.EQUAL_TO, property: "zona", value: "A"}),
    symbolizer: {fillColor: "#B2182B", fillOpacity: 0.5, strokeColor: "#67001F", strokeWidth: 1.2, strokeDashstyle: "solid"}
  }),
  new OpenLayers.Rule({
    filter: new OpenLayers.Filter.Comparison({type: OpenLayers.Filter.Comparison.EQUAL_TO, property: "zona", value: "B"}),
    symbolizer: {fillColor: "#F4A582", fillOpacity: 0.55, strokeColor: "#B35806", strokeWidth: 1.2, strokeDashstyle: "solid"}
  }),
  new OpenLayers.Rule({elseFilter: true})
]);
var psolDkZonaciaStyleMap = new OpenLayers.StyleMap({"default": psolDkZonaciaStyle});

// --- Vekové triedy JPRL LESY SR (ako PP Čergov): VT1-4 zelené výplne, VT5-6 / VT7 fialová šrafáž ---
var psolBratislavaVekStyle = new OpenLayers.Style({fillColor: "#cccccc", fillOpacity: 0.5, strokeColor: "#888", strokeWidth: 0.5});
[["#D4EDBA", 1], ["#8EC57A", 2], ["#4A9E3F", 3], ["#2D6B22", 4]].forEach(function (c) {
  psolBratislavaVekStyle.addRules([new OpenLayers.Rule({
    filter: new OpenLayers.Filter.Comparison({type: OpenLayers.Filter.Comparison.EQUAL_TO, property: "age_class", value: c[1]}),
    symbolizer: {fillColor: c[0], fillOpacity: 0.7, strokeColor: "#444", strokeWidth: 0.3}
  })]);
});
var psolBratislavaVekStyleMap = new OpenLayers.StyleMap({"default": psolBratislavaVekStyle});
var psolBratislavaVT56StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_vt5_6)", fillOpacity: 1, strokeColor: "#6A0DAD", strokeWidth: 0.5
})});
var psolBratislavaVT7StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_vt7)", fillOpacity: 1, strokeColor: "#6A0DAD", strokeWidth: 0.5
})});

// --- Čísla JPRL (LC Bratislava, všetci obhospodarovatelia) — rovnaký princíp ako PP Čergov:
//     priblížené (zoom >= 15) hranice JPRL s číslami, oddialené zhluky dielcov s rozsahmi čísel ---
function psolBratislavaZoom(feature) {
  var map = feature.layer && feature.layer.map;
  return map ? Math.round(Math.log(156543.03392804097 / map.getResolution()) / Math.LN2) : -1;
}
var psolBratislavaJprlCislaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({}, {rules: [
  new OpenLayers.Rule({
    maxScaleDenominator: OpenLayers.Util.getScaleFromResolution(6, "m"),
    symbolizer: {
      display: "${disp}", pointRadius: 0,
      strokeColor: "#4D4D4D", strokeWidth: 0.7, fillOpacity: 0,
      label: "${l}",
      fontColor: "#222222", fontSize: "10px", fontFamily: "Arial, sans-serif",
      labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
    }
  })
], context: {
  disp: function(feature) { return psolBratislavaZoom(feature) >= feature.attributes.zl ? "" : "none"; }
}})});
var psolBratislavaJprlZhlukyStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  display: "${disp}",
  strokeColor: "#4D4D4D", strokeWidth: 1, fillOpacity: 0, pointRadius: 0,
  label: "${r}",
  fontColor: "#222222", fontSize: "10px", fontFamily: "Arial, sans-serif",
  labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
}, {context: {
  disp: function(feature) {
    var a = feature.attributes, z = psolBratislavaZoom(feature);
    return (z >= a.z && z <= a.zmax) ? "" : "none";
  }
}})});
