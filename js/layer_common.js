Ext.namespace("Heron.scratch");

Heron.scratch.LayerCommon = {
    /**
     * Get OpenLayers format based on file extension or content.
     */
    getFormat: function (fileName, projection) {
        var format;
        var ext = fileName ? fileName.split('.').pop().toLowerCase() : 'geojson';

        if (ext === 'json' || ext === 'geojson' || fileName.indexOf('/query') !== -1) {
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

        format.internalProjection = new OpenLayers.Projection("EPSG:900913");
        format.externalProjection = new OpenLayers.Projection(projection || "EPSG:4326");

        return format;
    },

    /**
     * Create a StyleMap from JSON string or object, supporting rules.
     */
    getStyleMap: function (styleContent) {
        var styleMap;
        var genericStyle = {
            fillColor: "#ff0000",
            strokeColor: "#ff0000",
            fillOpacity: 0.5,
            strokeWidth: 2,
            pointRadius: 6
        };

        if (styleContent) {
            try {
                var styleObj = typeof styleContent === 'string' ? JSON.parse(styleContent) : styleContent;

                // Check if it has rules
                if (styleObj.rules) {
                    var rules = [];
                    for (var i = 0; i < styleObj.rules.length; i++) {
                        var ruleCfg = styleObj.rules[i];
                        var filter = null;
                        if (ruleCfg.filter) {
                            filter = new OpenLayers.Filter.Comparison({
                                type: ruleCfg.filter.type || OpenLayers.Filter.Comparison.EQUAL_TO,
                                property: ruleCfg.filter.property,
                                value: ruleCfg.filter.value
                            });
                        }
                        rules.push(new OpenLayers.Rule({
                            filter: filter,
                            elseFilter: ruleCfg.elseFilter || false,
                            symbolizer: ruleCfg.symbolizer || genericStyle
                        }));
                    }
                    var style = new OpenLayers.Style(styleObj.defaultStyle || genericStyle, { rules: rules });
                    styleMap = new OpenLayers.StyleMap({ "default": style });
                } else {
                    // Simple style
                    var style = new OpenLayers.Style(styleObj);
                    styleMap = new OpenLayers.StyleMap({ "default": style });
                }
            } catch (err) {
                console.error('Chyba pri parsovaní štýlu:', err);
            }
        }

        if (!styleMap) {
            var defaultStyle = new OpenLayers.Style(genericStyle);
            styleMap = new OpenLayers.StyleMap({ "default": defaultStyle });
        }
        return styleMap;
    },

    /**
     * Factory for ArcGIS Vector layers.
     */
    createArcGISVectorLayer: function (url, name, styleMap) {
        var queryUrl = url;
        if (queryUrl.indexOf('/query') === -1) {
            queryUrl = queryUrl.replace(/\/$/, '') + '/0/query';
        }

        var format = this.getFormat(queryUrl);
        // Use HTTP protocol but ensure NO extra headers (like X-Requested-With) are sent
        // to stay within the "Simple Request" or "Allowed Headers" of the ArcGIS CORS config.
        var layer = new OpenLayers.Layer.Vector(name, {
            protocol: new OpenLayers.Protocol.HTTP({
                url: queryUrl,
                params: {
                    f: 'geojson',
                    outFields: '*',
                    where: '1=1',
                    geometryType: 'esriGeometryEnvelope',
                    spatialRel: 'esriSpatialRelIntersects',
                    inSR: 3857,
                    outSR: 4326
                },
                format: format,
                headers: {} // Explicitly empty headers to avoid CORS preflight "not allowed" errors
            }),
            strategies: [new OpenLayers.Strategy.BBOX()],
            styleMap: styleMap || this.getStyleMap(),
            opacity: 0.8,
            isBaseLayer: false,
            visibility: true
        });

        // Add custom property for feature info support if needed by identify tools
        layer.metadata = { queryable: true };

        return layer;
    },

    /**
     * Adds a layer to the map and ensures it's in the layer tree.
     */
    addLayerToMapAndTree: function (layer, layerName, qtip) {
        var map = Heron.App.getMap();
        if (map) {
            map.addLayer(layer);
            if (layer.features && layer.features.length > 0) {
                map.zoomToExtent(layer.getDataExtent());
            } else if (layer.strategies) {
                // For BBOX strategy, we might need to zoom somewhere or just wait for it to load
            }
        } else {
            if (!Heron.options.map.layers) {
                Heron.options.map.layers = [];
            }
            Heron.options.map.layers.push(layer);
        }

        this.addLayerToTree(layerName, qtip);
    },

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
            var root = tree.getRootNode();
            var editorNode = root.findChild('text', 'Editor', true);
            if (editorNode) {
                editorNode.appendChild(newNodeConfig);
                editorNode.expand();
            } else {
                root.appendChild(newNodeConfig);
            }
        } else {
            if (!Heron.options.layertree || !Heron.options.layertree.tree) {
                return;
            }
            Heron.options.layertree.tree.splice(0, 0, newNodeConfig);
        }
    }
};
