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
if (externalUrl) {
    var common = Heron.scratch.LayerCommon;
    var isArcGIS = externalUrl.indexOf('/MapServer') !== -1 || externalUrl.indexOf('/FeatureServer') !== -1;
    console.log('isArcGIS', isArcGIS);
    if (isArcGIS) {
        // Use native ArcGIS REST support (OpenLayers 2 uses ArcGIS93Rest)
        var arcgisUrl = externalUrl;
        if (arcgisUrl.indexOf('/export') === -1) {
            arcgisUrl += arcgisUrl.indexOf('?') === -1 ? '/export' : '';
        }

        Heron.scratch.layermap.externalLayer = new OpenLayers.Layer.ArcGIS93Rest(
            externalName,
            arcgisUrl,
            {
                layers: "show:0", // Default to first layer
                transparent: true
            },
            {
                isBaseLayer: false,
                visibility: true,
                attribution: '<span>Externý ArcGIS zdroj</span>'
            }
        );

        common.addLayerToMapAndTree(
            Heron.scratch.layermap.externalLayer,
            externalName,
            "Imported from external ArcGIS URL: " + externalUrl
        );
    } else {
        var myGeoJSONFormat = common.getFormat(externalUrl, externalCrs);
        if (myGeoJSONFormat) {
            var styleMap = common.getStyleMap({
                fillColor: "#ff0000",
                strokeColor: "#ff0000",
                fillOpacity: 0.4,
                strokeWidth: 2,
                pointRadius: 6
            });

            // Create the layer object
            Heron.scratch.layermap.externalLayer = new OpenLayers.Layer.Vector(externalName, {
                protocol: new OpenLayers.Protocol.HTTP({
                    url: externalUrl,
                    format: myGeoJSONFormat
                }),
                strategies: [new OpenLayers.Strategy.Fixed()],
                styleMap: styleMap,
                opacity: 0.8,
                isBaseLayer: false,
                visibility: true
            });

            common.addLayerToMapAndTree(
                Heron.scratch.layermap.externalLayer,
                externalName,
                "Imported from external URL: " + externalUrl
            );

            // Zoom to data when loaded
            Heron.scratch.layermap.externalLayer.events.register("loadend", Heron.scratch.layermap.externalLayer, function () {
                var map = Heron.App.getMap();
                if (map) {
                    map.zoomToExtent(this.getDataExtent());
                }
            });
        }

    }
}
