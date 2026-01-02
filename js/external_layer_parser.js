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

    // Define a generic style for external layers (or reuse your existing one)
    var externalStyle = new OpenLayers.Style({
        fillColor: "#ff0000",
        strokeColor: "#ff0000",
        fillOpacity: 0.4,
        strokeWidth: 2,
        pointRadius: 6
    });
    var externalStyleMap = new OpenLayers.StyleMap({ "default": externalStyle });


    // Define Format (Reusable for both Protocol and Fetch)
    var myGeoJSONFormat = new OpenLayers.Format.GeoJSON({
        internalProjection: new OpenLayers.Projection("EPSG:3857"),
        externalProjection: new OpenLayers.Projection(externalCrs)
    });

    // Create the layer object
    Heron.scratch.layermap.externalLayer = new OpenLayers.Layer.Vector(externalName, {
        protocol: new OpenLayers.Protocol.HTTP({
            url: externalUrl,
            format: myGeoJSONFormat
        }),
        strategies: [], // By leaving strategies empty, the layer sits waiting for data.
        styleMap: externalStyleMap,
        opacity: 0.8,
        isBaseLayer: false,
        visibility: true // Usually you want external layers visible immediately
    });

    // 4. Add the layer to Heron's configuration
    // (Ensure this runs before Heron initializes the map)

    // Add to the list of Layers
    // Note: You usually append this to your existing array definition
    Heron.options.map.layers.push(Heron.scratch.layermap.externalLayer);


    // "fetch" is a modern standard that does NOT send X-Requested-With, 
    // so GitHub Pages will accept it immediately.
    fetch(externalUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP Error " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            // Parse the data into OpenLayers features
            var features = myGeoJSONFormat.read(data);
            console.log('external features 1:', features);
            // Add them to the map
            if (features && features.length > 0) {
                Heron.scratch.layermap.externalLayer.addFeatures(features);
                console.log('external features 2:', features);
                // Optional: Zoom to the data
                // Heron.options.map.zoomToExtent(Heron.scratch.layermap.externalLayer.getDataExtent());
                Heron.App.getMap().zoomToExtent(Heron.scratch.layermap.externalLayer.getDataExtent());
            }
        })
        .catch(function (error) {
            console.error("Error loading external GeoJSON:", error);
            alert("Nepodarilo sa načítať externú vrstvu: " + error.message);
        });


    // 5. Add to the Legend / Tree Panel
    // You need to find where 'children' array for your tree is defined in your code
    // and push this config object into it.

    // Example: Assuming you have a variable or structure for your tree nodes:
    var externalLayerNode = {
        nodeType: "gx_layer",
        layer: externalName,
        qtip: "Imported from external URL",
        text: "Externá vrstva: " + externalName,
        checked: true
    };

    // You will have to manually locate your tree config in your huge JS file
    // and push this object. If your tree config is static, you might do:
    // treeConfig[0].children.push(externalLayerNode);
    // Heron.options.map.layers.push(Heron.scratch.layermap.externalLayer);

    // Heron.options.layertree.tree.push(externalLayerNode);
}
