// 1. Definícia štýlov

// Spoločný štýl pre väčšinu vrstiev
var hluchan_style_default = new OpenLayers.Style(
    // Základný štýl je prázdny, všetko definujeme v pravidlách
    {},
    {
        rules: [
            new OpenLayers.Rule({
                title: ' ', // Prázdny názov pre legendu
                // symbolizer s pôvodnými hodnotami
                symbolizer: {
                    'fillColor': '#8B4513', // SaddleBrown
                    'strokeColor': '#000000',
                    'fillOpacity': 0.6,
                    'strokeWidth': 1,
                    'fontColor': "#333333",
                    'fontSize': "10px",
                    'fontFamily': "Arial, sans-serif",
                    'fontWeight': "bold",
                    'labelOutlineColor': "white",
                    'labelOutlineWidth': 2
                },
                // kontext pre label zostáva rovnaký
                context: {
                    Name: function (feature) {
                        return feature.attributes.Name ? feature.attributes.Name : "";
                    }
                }
            })
        ]
    }
);

// Špeciálny štýl pre "potenciálne" biotopy
var hluchan_style_special = new OpenLayers.Style(
    {},
    {
        rules: [
            new OpenLayers.Rule({
                title: ' ', // Prázdny názov pre legendu
                symbolizer: {
                    'fillColor': '#FFD700', // Gold
                    'strokeColor': '#000000',
                    'fillOpacity': 0.6,
                    'strokeWidth': 1,
                    'fontColor': "#333333",
                    'fontSize': "10px",
                    'fontFamily': "Arial, sans-serif",
                    'fontWeight': "bold",
                    'labelOutlineColor': "white",
                    'labelOutlineWidth': 2
                },
                context: {
                    Name: function (feature) {
                        return feature.attributes.Name ? feature.attributes.Name : "";
                    }
                }
            })
        ]
    }
);

var hluchanStyleMapDefault = new OpenLayers.StyleMap({
    "default": hluchan_style_default,
    "select": { // Štýl pre hover
        fillColor: "#FFFF00",
        strokeColor: "#FF0000"
    }
});

var hluchanStyleMapSpecial = new OpenLayers.StyleMap({
    "default": hluchan_style_special,
    "select": {
        fillColor: "#FFFF00",
        strokeColor: "#FF0000"
    }
});
