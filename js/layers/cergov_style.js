// Čergov — štýly pre všetky vrstvy

// --- Vekové triedy VT1–4: farebná výplň ---
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

// --- Hranica CHVÚ: oranžová hrubá čiara, bez výplne ---
var cergovChvuHranicaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#E67E00", strokeWidth: 3, fillOpacity: 0, strokeDashstyle: "solid"
})});

// --- Hranica ÚEV: modrá hrubá čiara, bez výplne ---
var cergovUevHranicaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#1A5276", strokeWidth: 3, fillOpacity: 0, strokeDashstyle: "dash"
})});

// --- SOP T2: modré vodorovné čiary (CHKO) ---
var cergovSop2StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop2)", fillOpacity: 1, strokeColor: "#2980B9", strokeWidth: 0.5
})});

// --- SOP T3: oranžové šikmé čiary (PR, PP, CHA) ---
var cergovSop3StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop3)", fillOpacity: 1, strokeColor: "#E67E00", strokeWidth: 0.5
})});

// --- SOP T4: oranžové krížové šrafovanie (NPR, NPP) ---
var cergovSop4StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop4)", fillOpacity: 1, strokeColor: "#E05000", strokeWidth: 0.8
})});

// --- SOP T5: tmavočervené husté šrafovanie (NP, PPR) ---
var cergovSop5StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop5)", fillOpacity: 1, strokeColor: "#C0392B", strokeWidth: 0.8
})});

// --- MCHU rezervácie s názvami ---
var cergovMchuStyle = new OpenLayers.Style({
  fillColor: "#27AE60", fillOpacity: 0.25,
  strokeColor: "#1A7A40", strokeWidth: 1.5,
  label: "${SITETITLE_SK}",
  fontColor: "#0B3D1E", fontSize: "11px", fontFamily: "Arial, sans-serif",
  fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
});
var cergovMchuStyleMap = new OpenLayers.StyleMap({"default": cergovMchuStyle});

