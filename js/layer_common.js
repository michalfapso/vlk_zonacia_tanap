Ext.namespace("Heron.scratch");

Heron.scratch.LayerCommon = {
    /**
     * Get OpenLayers format based on file extension.
     */
    getFormat: function (fileName, projection) {
        var format;
        var ext = fileName.split('.').pop().toLowerCase();

        if (ext === 'json' || ext === 'geojson') {
            format = new OpenLayers.Format.GeoJSON();
        } else if (ext === 'kml') {
            format = new OpenLayers.Format.KML({
                extractStyles: true,
                extractAttributes: true
            });
        } else if (ext === 'gpx') {
            format = new OpenLayers.Format.GPX();
        } else {
            console.error('Nepodporovaný formát súboru: ' + ext);
            return null;
        }

        // Set projection for parsing
        // Internal projection is usually Web Mercator in this app
        format.internalProjection = new OpenLayers.Projection("EPSG:900913");
        format.externalProjection = new OpenLayers.Projection(projection || "EPSG:4326");

        return format;
    },

    /**
     * Create a StyleMap from JSON string or use default.
     */
    getStyleMap: function (styleContent) {
        var styleMap;
        if (styleContent) {
            try {
                var styleObj = typeof styleContent === 'string' ? JSON.parse(styleContent) : styleContent;
                var style = new OpenLayers.Style(styleObj);
                styleMap = new OpenLayers.StyleMap({ "default": style });
            } catch (err) {
                console.error('Chyba pri parsovaní štýlu:', err);
            }
        }

        if (!styleMap) {
            // Default style if none provided or failed
            var defaultStyle = new OpenLayers.Style({
                fillColor: "#00ff00",
                strokeColor: "#00ff00",
                fillOpacity: 0.4,
                strokeWidth: 2,
                pointRadius: 6
            });
            styleMap = new OpenLayers.StyleMap({ "default": defaultStyle });
        }
        return styleMap;
    },

    /**
     * Adds a layer to the map and ensures it's in the layer tree.
     */
    addLayerToMapAndTree: function (layer, layerName, qtip) {
        var map = Heron.App.getMap();
        console.log('map', map);
        if (map) {
            map.addLayer(layer);
            // Zoom to data if features present
            if (layer.features && layer.features.length > 0) {
                map.zoomToExtent(layer.getDataExtent());
            }
        } else {
            // Map not initialized yet, add to options
            if (!Heron.options.map.layers) {
                Heron.options.map.layers = [];
            }
            Heron.options.map.layers.push(layer);
        }

        this.addLayerToTree(layerName, qtip);
    },

    /**
     * Adds a layer node to the layer tree config or actual tree.
     */
    addLayerToTree: function (layerName, qtip) {
        var tree = Ext.getCmp('hr-layer-tree');
        var newNodeConfig = {
            nodeType: "gx_layer",
            layer: layerName,
            text: layerName,
            qtip: qtip || layerName,
            checked: true,
            leaf: true
        };

        if (tree) {
            // UI already exists
            var root = tree.getRootNode();
            var editorNode = root.findChild('text', 'Editor', true);
            if (editorNode) {
                editorNode.appendChild(newNodeConfig);
                editorNode.expand();
            } else {
                root.appendChild(newNodeConfig);
            }
        } else {
            // UI not yet created, update Heron options
            if (!Heron.options.layertree || !Heron.options.layertree.tree) {
                return;
            }
            // Add to the beginning of the tree
            Heron.options.layertree.tree.splice(0, 0, newNodeConfig);
        }
    }
};
