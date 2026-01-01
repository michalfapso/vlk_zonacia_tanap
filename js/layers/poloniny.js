// 1. Definujeme si štýly pre jednotlivé zóny a legendu
// Kľúč (napr. "A") sa musí presne zhodovať s hodnotou v poli "ZONA" v GeoJSON súbore.
// Môžeš si pridať ďalšie zóny alebo zmeniť farby podľa potreby.
var poloninyZoneStyles = {
    "A": {
        fillColor: "#006400", // Tmavozelená
        strokeColor: "#000000",
        title: "Zóna A"
    },
    "B": {
        fillColor: "#6B8E23", // Olivovo zelená
        strokeColor: "#000000",
        title: "Zóna B"
    },
    "C": {
        fillColor: "#ADFF2F", // Žltozelená
        strokeColor: "#000000",
        title: "Zóna C"
    },
    "D": {
        fillColor: "#FFA500", // Oranžová
        strokeColor: "#000000",
        title: "Zóna D"
    },
    "OP": {
        fillColor: "#D2B48C", // Hnedastá (Tan)
        strokeColor: "#000000",
        title: "Ochranné pásmo"
    },

    // Špeciálny štýl pre polygóny, ktoré by náhodou nemali zadanú zónu
    "default": {
        fillColor: "#808080", // Sivá
        strokeColor: "#000000",
        title: "Nezaradené"
    }
};

// 2. Vytvoríme hlavný štýl a pridáme do neho pravidlá
var poloninyStyle = new OpenLayers.Style(
    // Základný (predvolený) štýl, použije sa, ak žiadne pravidlo nezodpovedá
    {
        fillColor: poloninyZoneStyles.default.fillColor,
        strokeColor: poloninyZoneStyles.default.strokeColor,
        fillOpacity: 0.5,
        strokeWidth: 1
    }
);

// 3. Vytvoríme pravidlá pre každú zónu
var poloninyRules = [];
// Prejdeme cez všetky definované štýly okrem 'default'
for (var zoneKey in poloninyZoneStyles) {
    if (zoneKey !== "default") {
        var rule = new OpenLayers.Rule({
            // Názov pre legendu
            title: poloninyZoneStyles[zoneKey].title,
            // Podmienka - filter
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: "Zona", // <-- DÔLEŽITÉ: Názov poľa z tvojich dát!
                value: zoneKey
            }),
            // Vzhľad, ak je podmienka splnená
            symbolizer: {
                fillColor: poloninyZoneStyles[zoneKey].fillColor,
                strokeColor: poloninyZoneStyles[zoneKey].strokeColor,
                fillOpacity: 0.5,
                strokeWidth: 1
            }
        });
        poloninyRules.push(rule);
    }
}
poloninyStyle.addRules(poloninyRules);

// 4. Vytvoríme StyleMap, ktorá použije náš nový štýl s pravidlami
var poloninyStyleMap = new OpenLayers.StyleMap({ "default": poloninyStyle });