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




var opStyle = new OpenLayers.Style({
    fillColor: "#8A2BE2", // BlueViolet
    strokeColor: "#000000",
    fillOpacity: 0.5,
    strokeWidth: 1
});
var opStyleMap = new OpenLayers.StyleMap({ "default": opStyle });