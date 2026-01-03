function getQueryParam(param) {
    var result = window.location.search.match(
        new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
    );
    return result ? decodeURIComponent(result[3]) : null;
}
// Example URL: https://michalfapso.github.io/vlk_zonacia_tanap/?ext_url=https://michalfapso.github.io/vlk_zonacia_tanap/zonacia_NP_Poloniny_EPSG3857.geojson&ext_name=test gis layer
var externalUrl = getQueryParam('ext_url');
var externalName = getQueryParam('ext_name') || "Externá Vrstva";
var externalCrs = getQueryParam('ext_crs') || 'EPSG:3857';
var externalStyleUrl = getQueryParam('ext_style_url');

if (externalUrl) {
    var common = Heron.scratch.LayerCommon;

    var applyLayer = function (styleContent) {
        var styleMap = common.getStyleMap(styleContent);
        var isArcGIS = externalUrl.indexOf('/MapServer') !== -1 || externalUrl.indexOf('/FeatureServer') !== -1;

        if (isArcGIS) {
            Heron.scratch.layermap.externalLayer = common.createArcGISVectorLayer(externalUrl, externalName, styleMap);
        } else {
            var format = common.getFormat(externalUrl, externalCrs);
            Heron.scratch.layermap.externalLayer = new OpenLayers.Layer.Vector(externalName, {
                protocol: new OpenLayers.Protocol.HTTP({
                    url: externalUrl,
                    format: format,
                    headers: {}
                }),
                strategies: [new OpenLayers.Strategy.Fixed()],
                styleMap: styleMap,
                opacity: 0.8,
                isBaseLayer: false,
                visibility: true
            });

            // Zoom to data when loaded for non-BBOX layers
            Heron.scratch.layermap.externalLayer.events.register("loadend", Heron.scratch.layermap.externalLayer, function () {
                var map = Heron.App.getMap();
                if (map) {
                    map.zoomToExtent(this.getDataExtent());
                }
            });
        }

        common.addLayerToMapAndTree(
            Heron.scratch.layermap.externalLayer,
            externalName,
            "Imported from external URL: " + externalUrl
        );
    };

    if (externalStyleUrl) {
        fetch(externalStyleUrl)
            .then(function (r) { return r.json(); })
            .then(function (style) { applyLayer(style); })
            .catch(function (e) {
                console.error("Error loading style:", e);
                applyLayer(null);
            });
    } else {
        applyLayer(null);
    }
}
