// 1. Definujeme si štýly pre jednotlivé zóny a legendu
// Kľúč (napr. "A") sa musí presne zhodovať s hodnotou v poli "ZONA" v GeoJSON súbore.
// Môžeš si pridať ďalšie zóny alebo zmeniť farby podľa potreby.
var napantZoneStyles = {
    "Zona A": {
        fillColor: "#006400", // Tmavozelená
        strokeColor: "#000000",
        title: "Zóna A"
    },
    "Zona B": {
        fillColor: "#6B8E23", // Olivovo zelená
        strokeColor: "#000000",
        title: "Zóna B"
    },
    "Zona C": {
        fillColor: "#ADFF2F", // Žltozelená
        strokeColor: "#000000",
        title: "Zóna C1"
    },
    "Zona D": {
        fillColor: "#FFD700", // Zlatá/Žltá
        strokeColor: "#000000",
        title: "Zóna C2"
    },

    // Špeciálny štýl pre polygóny, ktoré by náhodou nemali zadanú zónu
    "default": {
        fillColor: "#808080", // Sivá
        strokeColor: "#000000",
        title: "Nezaradené"
    }
};

// 2. Vytvoríme hlavný štýl a pridáme do neho pravidlá
var napantStyle = new OpenLayers.Style(
    // Základný (predvolený) štýl, použije sa, ak žiadne pravidlo nezodpovedá
    {
        fillColor: napantZoneStyles.default.fillColor,
        strokeColor: napantZoneStyles.default.strokeColor,
        fillOpacity: 0.5,
        strokeWidth: 1
    }
);

// 3. Vytvoríme pravidlá pre každú zónu
var napantRules = [];
// Prejdeme cez všetky definované štýly okrem 'default'
for (var zoneKey in napantZoneStyles) {
    if (zoneKey !== "default") {
        var rule = new OpenLayers.Rule({
            // Názov pre legendu
            title: napantZoneStyles[zoneKey].title,
            // Podmienka - filter
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: "ZONA", // <-- DÔLEŽITÉ: Názov poľa z tvojich dát!
                value: zoneKey
            }),
            // Vzhľad, ak je podmienka splnená
            symbolizer: {
                fillColor: napantZoneStyles[zoneKey].fillColor,
                strokeColor: napantZoneStyles[zoneKey].strokeColor,
                fillOpacity: 0.5,
                strokeWidth: 1
            }
        });
        napantRules.push(rule);
    }
}
napantStyle.addRules(napantRules);

// 4. Vytvoríme StyleMap, ktorá použije náš nový štýl s pravidlami
var napantStyleMap = new OpenLayers.StyleMap({ "default": napantStyle });




var napantOpStyle = new OpenLayers.Style({
    fillColor: "#8A2BE2", // BlueViolet
    strokeColor: "#000000",
    fillOpacity: 0.5,
    strokeWidth: 1
});
var napantOpStyleMap = new OpenLayers.StyleMap({ "default": napantOpStyle });



var napantEfpStyles = {
    "EFP-1-1": { fillColor: "#FF4500", title: "EFP-1-1" }, // Oranžovo-červená
    "EFP-1-2": { fillColor: "#FF8C00", title: "EFP-1-2" }, // Tmavooranžová
    "EFP-2-1": { fillColor: "#E9967A", title: "EFP-2-1" }, // Tmavý losos
    "EFP-2-2": { fillColor: "#DC143C", title: "EFP-2-2" }, // Karmínová
    "EFP-2-3": { fillColor: "#B22222", title: "EFP-2-3" }, // Ohnivá tehlová
    "EFP-3": { fillColor: "#C71585", title: "EFP-3" },   // Stredne fialovo-červená
    "EFP-4": { fillColor: "#DB7093", title: "EFP-4" },   // Bledofialovo-červená
    "EFP-5": { fillColor: "#FF1493", title: "EFP-5" },   // Sýto ružová
    "default": { fillColor: "#808080", title: "Nezaradené" }
};

var napantEfpStyle = new OpenLayers.Style({
    fillColor: napantEfpStyles.default.fillColor,
    strokeColor: "#000000",
    fillOpacity: 0.5,
    strokeWidth: 1
});

var napantEfpRules = [];
for (var efpKey in napantEfpStyles) {
    if (efpKey !== "default") {
        var rule = new OpenLayers.Rule({
            title: napantEfpStyles[efpKey].title,
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: "EFP", // Názov poľa z dát
                value: efpKey
            }),
            symbolizer: {
                fillColor: napantEfpStyles[efpKey].fillColor,
                strokeColor: "#000000",
                fillOpacity: 0.5,
                strokeWidth: 1
            }
        });
        napantEfpRules.push(rule);
    }
}
napantEfpStyle.addRules(napantEfpRules);
var napantEfpStyleMap = new OpenLayers.StyleMap({ "default": napantEfpStyle });
