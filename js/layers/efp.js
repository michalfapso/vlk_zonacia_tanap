var efpStyles = {
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

var efpStyle = new OpenLayers.Style({
    fillColor: efpStyles.default.fillColor,
    strokeColor: "#000000",
    fillOpacity: 0.5,
    strokeWidth: 1
});

var efpRules = [];
for (var efpKey in efpStyles) {
    if (efpKey !== "default") {
        var rule = new OpenLayers.Rule({
            title: efpStyles[efpKey].title,
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: "EFP", // Názov poľa z dát
                value: efpKey
            }),
            symbolizer: {
                fillColor: efpStyles[efpKey].fillColor,
                strokeColor: "#000000",
                fillOpacity: 0.5,
                strokeWidth: 1
            }
        });
        efpRules.push(rule);
    }
}
efpStyle.addRules(efpRules);
var efpStyleMap = new OpenLayers.StyleMap({ "default": efpStyle });



OpenLayers.Util.extend(Heron.scratch.layermap, {
    sop_efp_hornaorava: new OpenLayers.Layer.WMS(
        "EFP: CHVÚ Horná Orava",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "EFP_SKCHVU008", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 18.01.2021 >>>
    sop_efp_malekarpaty: new OpenLayers.Layer.WMS(
        "EFP: CHKO Malé Karpaty",
        'https://www.sopsr.sk/geoserver/public/ows?',
        { layers: "public:EFP_CHKO_MaleKarpaty", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 18.01.2021 <<<
});