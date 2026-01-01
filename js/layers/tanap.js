// 1. Definujeme si štýly pre jednotlivé zóny a legendu
// Kľúč (napr. "A") sa musí presne zhodovať s hodnotou v poli "ZONA" v GeoJSON súbore.
// Môžeš si pridať ďalšie zóny alebo zmeniť farby podľa potreby.
var tanapZoneStyles = {
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
    "C1": {
        fillColor: "#ADFF2F", // Žltozelená
        strokeColor: "#000000",
        title: "Zóna C1"
    },
    "C2": {
        fillColor: "#FFD700", // Zlatá/Žltá
        strokeColor: "#000000",
        title: "Zóna C2"
    },
    "D1": {
        fillColor: "#FFA500", // Oranžová
        strokeColor: "#000000",
        title: "Zóna D1"
    },
    "D2": {
        fillColor: "#E55B00", // Tmavšia oranžová
        strokeColor: "#000000",
        title: "Zóna D2"
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
var tanapStyle = new OpenLayers.Style(
    // Základný (predvolený) štýl, použije sa, ak žiadne pravidlo nezodpovedá
    {
        fillColor: tanapZoneStyles.default.fillColor,
        strokeColor: tanapZoneStyles.default.strokeColor,
        fillOpacity: 0.5,
        strokeWidth: 1
    }
);

// 3. Vytvoríme pravidlá pre každú zónu
var tanapRules = [];
// Prejdeme cez všetky definované štýly okrem 'default'
for (var zoneKey in tanapZoneStyles) {
    if (zoneKey !== "default") {
        var rule = new OpenLayers.Rule({
            // Názov pre legendu
            title: tanapZoneStyles[zoneKey].title,
            // Podmienka - filter
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: "ZONA", // <-- DÔLEŽITÉ: Názov poľa z tvojich dát!
                value: zoneKey
            }),
            // Vzhľad, ak je podmienka splnená
            symbolizer: {
                fillColor: tanapZoneStyles[zoneKey].fillColor,
                strokeColor: tanapZoneStyles[zoneKey].strokeColor,
                fillOpacity: 0.5,
                strokeWidth: 1
            }
        });
        tanapRules.push(rule);
    }
}
tanapStyle.addRules(tanapRules);

// 4. Vytvoríme StyleMap, ktorá použije náš nový štýl s pravidlami
var tanapStyleMap = new OpenLayers.StyleMap({ "default": tanapStyle });