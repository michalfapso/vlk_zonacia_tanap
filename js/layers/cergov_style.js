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

// --- Ochranné lesy: plošná červená (odlíši OL v návrhu 5. SO, ktorý je šrafáž) ---
var cergovOchrStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#D62728", fillOpacity: 0.6, strokeColor: "#8B0000", strokeWidth: 1
})});

// --- Chránené územia: zelená šikmá šrafáž (135°, opačný smer) ---
var cergovChrStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_chranene)", fillOpacity: 1, strokeColor: "#006600", strokeWidth: 1.5
})});

// --- VLK vlastníctvo: zelená bodkovaná (hrubé bodky) ---
var cergovVLKStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_vlk)", fillOpacity: 1, strokeColor: "#14532D", strokeWidth: 1.0
})});

// --- Lesy SR (obhospodarovateľ, odhad cez legacy vrstvu): modrá bodkovaná ---
var cergovLesySrStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_lesysr)", fillOpacity: 1, strokeColor: "#1F4E79", strokeWidth: 1.0
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

// --- Súčasný stupeň 2 (ŠOP SR): riedke prerušované čiary, prerušovaný obrys ---
var cergovSop2StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop2)", fillOpacity: 1, strokeColor: "#8E24AA", strokeWidth: 1.2, strokeDashstyle: "dash"
})});

// --- Súčasný stupeň 3 (ŠOP SR): riedke prerušované čiary, prerušovaný obrys ---
var cergovSop3StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop3)", fillOpacity: 1, strokeColor: "#2E9E44", strokeWidth: 1.2, strokeDashstyle: "dash"
})});

// --- Súčasný stupeň 4 (ŠOP SR): riedke prerušované čiary, prerušovaný obrys ---
var cergovSop4StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop4)", fillOpacity: 1, strokeColor: "#F28C00", strokeWidth: 1.2, strokeDashstyle: "dash"
})});

// --- Súčasný stupeň 5 (ŠOP SR): riedke prerušované čiary, prerušovaný obrys ---
var cergovSop5StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_sop5)", fillOpacity: 1, strokeColor: "#D62728", strokeWidth: 1.2, strokeDashstyle: "dash"
})});

// --- Návrh zonácie stupeň 2 ---
var cergovNavrh2StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_navrh2)", fillOpacity: 1, strokeColor: "#8E24AA", strokeWidth: 0.8
})});

// --- Návrh zonácie stupeň 3 ---
var cergovNavrh3StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_navrh3)", fillOpacity: 1, strokeColor: "#2E9E44", strokeWidth: 0.8
})});

// --- Návrh zonácie stupeň 4 ---
var cergovNavrh4StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_navrh4)", fillOpacity: 1, strokeColor: "#F28C00", strokeWidth: 0.8
})});

// --- Návrh zonácie stupeň 5 ---
var cergovNavrh5StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_navrh5)", fillOpacity: 1, strokeColor: "#D62728", strokeWidth: 0.8
})});

// --- Enklávy zjednotené do stupňa 4: nepriehľadný vzor zakrýva základný návrh, hrubý obrys ---
var cergovEnklava4StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_enklava4)", fillOpacity: 1, strokeColor: "#F28C00", strokeWidth: 3
})});

// --- Enklávy zjednotené do stupňa 5: nepriehľadný vzor zakrýva základný návrh, hrubý obrys ---
var cergovEnklava5StyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "url(#pattern_enklava5)", fillOpacity: 1, strokeColor: "#D62728", strokeWidth: 3
})});


// --- Čísla JPRL: tenký obrys s číslom (priblížené) ---
// Mierka cez pravidlo, nie maxResolution vrstvy: vrstva mimo rozsahu by bola
// v strome vrstiev zašedená a nedala by sa zapnúť. Mimo pravidla sa nekreslí.
// Popisy sú body (scripts/13) s 'zl' = zoom, od ktorého sa neprekrývajú.
function cergovZoom(feature) {
  var map = feature.layer && feature.layer.map;
  return map ? Math.round(Math.log(156543.03392804097 / map.getResolution()) / Math.LN2) : -1;
}
var cergovJprlCislaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({}, {rules: [
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
  disp: function(feature) { return cergovZoom(feature) >= feature.attributes.zl ? "" : "none"; }
}})});

// --- Čísla JPRL, oddialené: vopred vypočítané zhluky dielcov (scripts/13) ---
// Polygón = zjednotené hranice dielcov zhluku, bod = popis s rozsahom čísel po LC.
// Každý prvok platí pre zoomy z..zmax; zoom sa počíta z rozlíšenia (EPSG:3857).
var cergovJprlZhlukyStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  display: "${disp}",
  strokeColor: "#4D4D4D", strokeWidth: 1, fillOpacity: 0, pointRadius: 0,
  label: "${r}",
  fontColor: "#222222", fontSize: "10px", fontFamily: "Arial, sans-serif",
  labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
}, {context: {
  disp: function(feature) {
    var a = feature.attributes, z = cergovZoom(feature);
    return (z >= a.z && z <= a.zmax) ? "" : "none";
  }
}})});

// --- MCHU rezervácie s názvami ---
var cergovMchuStyle = new OpenLayers.Style({
  fillColor: "#27AE60", fillOpacity: 0.25,
  strokeColor: "#1A7A40", strokeWidth: 1.5,
  label: "${SITETITLE_SK}",
  fontColor: "#0B3D1E", fontSize: "11px", fontFamily: "Arial, sans-serif",
  fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
});
var cergovMchuStyleMap = new OpenLayers.StyleMap({"default": cergovMchuStyle});

// --- Salamandria navrhovaná rezervácia: štýl ako MCHU ---
var cergovSalamStyle = new OpenLayers.Style({
  fillColor: "#27AE60", fillOpacity: 0.25,
  strokeColor: "#1A7A40", strokeWidth: 1.5,
  label: "${SITETITLE_SK}",
  fontColor: "#0B3D1E", fontSize: "11px", fontFamily: "Arial, sans-serif",
  fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
});
var cergovSalamStyleMap = new OpenLayers.StyleMap({"default": cergovSalamStyle});

// --- Hranice LHC (LHP orezané na PP): modrosivá čiara s popiskom "názov (KPL)" ---
var cergovLhcStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#37474F", strokeWidth: 2, fillOpacity: 0, strokeDashstyle: "dot",
  label: "${nazov} (${kpl})",
  fontColor: "#263238", fontSize: "11px", fontFamily: "Arial, sans-serif",
  fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
})});

// --- Hranica lesných celkov (LC): hnedá bodkovaná čiara s popiskom ---
var cergovLesneCelkyStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#8B5A2B", strokeWidth: 2.5, fillOpacity: 0, strokeDashstyle: "dashdot",
  label: "${LC}",
  fontColor: "#5A3A1B", fontSize: "10px", fontFamily: "Arial, sans-serif",
  fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
})});
// --- Mikropovodia (scripts/15): obrys + jemná výplň, popisok "názov / plocha v PP";
//     mimo_pasma = 1 (plocha v PP mimo pásma alternatívy) = čiarkovaný obrys ---
function cergovMikropovodiaStyleMap(farba) {
  var style = new OpenLayers.Style({
    strokeColor: farba, strokeWidth: 2, fillColor: farba, fillOpacity: 0.08,
    label: "${id} ${nazov}\n${plocha_km2} km²",
    fontColor: "#0D2A4A", fontSize: "10px", fontFamily: "Arial, sans-serif",
    fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
  }, {rules: [
    new OpenLayers.Rule({filter: new OpenLayers.Filter.Comparison({type: "==", property: "mimo_pasma", value: 1}),
                         symbolizer: {strokeDashstyle: "dash"}}),
    new OpenLayers.Rule({elseFilter: true})
  ]});
  return new OpenLayers.StyleMap({"default": style});
}
var cergovMikro1StyleMap = cergovMikropovodiaStyleMap("#1565C0");
var cergovMikro2StyleMap = cergovMikropovodiaStyleMap("#6A1B9A");
var cergovMikro3StyleMap = cergovMikropovodiaStyleMap("#00695C");
// --- Mikropovodia vybrané do 4. SO (scripts/09, pokyn 2026-11-11): hrubý oranžový obrys ---
var cergovMikro4soStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#E65100", strokeWidth: 4, strokeDashstyle: "dash", fillOpacity: 0,
  label: "${id} ${nazov}\n→ 4. SO",
  fontColor: "#BF360C", fontSize: "11px", fontFamily: "Arial, sans-serif",
  fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
})});
// --- Vodárenské zdroje (scripts/17): body ŠGÚDŠ (kruh) a odbery povrchovej vody
//     SHMÚ (trojuholník), modré s popiskom; povodia vodárenských tokov = modrá výplň ---
function cergovVodZdrojStyleMap(tvar, polomer, farba) {
  return new OpenLayers.StyleMap({"default": new OpenLayers.Style({
    graphicName: tvar, pointRadius: polomer, fillColor: farba, fillOpacity: 0.9,
    strokeColor: "#FFFFFF", strokeWidth: 1.5,
    label: "${nazov}", labelYOffset: -(polomer + 8),
    fontColor: "#0D2A4A", fontSize: "10px", fontFamily: "Arial, sans-serif",
    fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
  })});
}
var cergovVzSgudsStyleMap = cergovVodZdrojStyleMap("circle", 5, "#1E88E5");
var cergovVzShmuStyleMap = cergovVodZdrojStyleMap("triangle", 8, "#0D47A1");
var cergovPovodiaVtStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  strokeColor: "#1565C0", strokeWidth: 2, strokeDashstyle: "dash",
  fillColor: "#64B5F6", fillOpacity: 0.25,
  label: "${nazov}\n${plocha_v_pp_ha} ha v PP",
  fontColor: "#0D2A4A", fontSize: "11px", fontFamily: "Arial, sans-serif",
  fontWeight: "bold", labelAlign: "cm", labelOutlineColor: "#FFFFFF", labelOutlineWidth: 2
})});
