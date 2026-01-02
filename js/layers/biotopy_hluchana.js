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





OpenLayers.Util.extend(Heron.scratch.layermap, {

    //SM, 30.01.2018 >>>
    biotop_hluchan_npmp_2010: new OpenLayers.Layer.WMS(
        "Hlucháň - NP Muránska planina",
        'https://maps.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "biotop_hluchan_muran_planina_stolica_2010", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 30.01.2018 <<<

    // START of new layers

    hluchan_biotopy_levocske: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Levočské vrchy", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/biotopy_Levocske_vrchy-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_biotopy_slovensko: new OpenLayers.Layer.Vector("Biotopy hlucháňa - SLOVENSKO", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Biotopy_SLOVENSKO-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_funckne_lokality: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Funkčné lokality", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Funckne_lokality-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_funkcne_biotopy_lower: new OpenLayers.Layer.Vector("Biotopy hlucháňa - funkčné biotopy 1", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/funkcne_biotopy-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_funkcne_biotopy_upper: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Funkčné biotopy 2", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Funkcne_biotopy-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_klenovsky_vepor: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Klenovský vepor", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Klenovsky_vepor-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_orava_kysuce: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Orava Kysuce", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Orava_Kysuce-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_potencialne_bez_evid: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Potenciálne bez evid. výskytu", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Potencialne_biotopy_bez_evidovaneho_vyskytu-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapSpecial, isBaseLayer: false, visibility: false
    }),
    hluchan_potencialne_bez_potvrd: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Potenciálne bez potvrd. výskytu", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/potencialne_biotopy_bez_potvrdeneho_vyskytu-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapSpecial, isBaseLayer: false, visibility: false
    }),
    hluchan_raj_volovske: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Raj Volovské vrchy", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Raj_volovske_vrchy-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_rozsirenie_polana: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Rozšírenie Poľana 2002", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/rozsirenie_hluchana_polana_2002-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_strazovske_vrchy: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Strážovské vrchy", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Strazovske_vrchy-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_svrcnik: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Svrčník", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Svrcnik.kmz-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    hluchan_vysoke_tatry: new OpenLayers.Layer.Vector("Biotopy hlucháňa - Vysoké Tatry", {
        protocol: new OpenLayers.Protocol.HTTP({ url: "Biotopy_hluchan_PZ_2018_2022/Vysoke_Tatry-polygon.geojson", format: new OpenLayers.Format.GeoJSON({ 'internalProjection': new OpenLayers.Projection("EPSG:3857"), 'externalProjection': new OpenLayers.Projection("EPSG:3857") }) }),
        strategies: [new OpenLayers.Strategy.Fixed()], styleMap: hluchanStyleMapDefault, isBaseLayer: false, visibility: false
    }),
    // END of new layers
});