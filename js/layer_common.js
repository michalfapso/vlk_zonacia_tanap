Ext.namespace("Heron.scratch");

Heron.scratch.LayerCommon = {
    /**
     * Get OpenLayers format based on file extension or content.
     */
    getFormat: function (fileName, projection) {
        var format;
        var ext = fileName ? fileName.split('.').pop().toLowerCase() : 'geojson';

        if (ext === 'json' || ext === 'geojson' || (fileName && fileName.indexOf('/query') !== -1)) {
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
            strokeColor: "#ffffff",
            fillOpacity: 0.5,
            strokeOpacity: 1,
            strokeWidth: 1,
            pointRadius: 3 // Smaller points for better density
        };

        if (styleContent) {
            try {
                var styleObj = typeof styleContent === 'string' ? JSON.parse(styleContent) : styleContent;

                // Support Rules
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
     * Factory for ArcGIS Vector layers with pagination support.
     */
    createArcGISVectorLayer: function (url, name, styleMap) {
        var queryUrl = url;
        if (queryUrl.indexOf('/query') === -1) {
            queryUrl = queryUrl.replace(/\/$/, '') + '/0/query';
        }

        var common = this;
        var layer = new OpenLayers.Layer.Vector(name, {
            styleMap: styleMap || this.getStyleMap(),
            opacity: 0.8,
            isBaseLayer: false,
            visibility: true,
            strategies: []
        });

        // Add custom property for feature info support
        layer.metadata = { queryable: true };

        var allFeatures = [];
        var common = this;

        // Custom pagination fetch
        var fetchFeatures = function (offset) {
            var params = {
                f: 'geojson',
                outFields: '*',
                where: '1=1',
                outSR: 4326,
                resultOffset: offset,
                resultRecordCount: 1000
            };

            console.log("Fetching ArcGIS features for offset " + offset + " (POST)...");

            fetch(queryUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: OpenLayers.Util.getParameterString(params)
            })
                .then(function (r) { return r.json(); })
                .then(function (data) {
                    if (data && data.features && data.features.length > 0) {
                        console.log("Received " + data.features.length + " features for offset " + offset);
                        var format = common.getFormat(queryUrl);
                        var features = format.read(data);

                        allFeatures = allFeatures.concat(features);

                        // If we got a full page, there's likely more
                        if (data.features.length === 1000) {
                            fetchFeatures(offset + 1000);
                        } else {
                            console.log("Finished fetching. Total features: " + allFeatures.length);
                            layer.addFeatures(allFeatures);
                            if (layer.map) {
                                layer.redraw();
                            }
                        }
                    } else {
                        console.log("No more features. Total features: " + allFeatures.length);
                        if (allFeatures.length > 0) {
                            layer.addFeatures(allFeatures);
                        }
                    }
                })
                .catch(function (e) {
                    console.error("ArcGIS fetch error:", e);
                    if (allFeatures.length > 0) {
                        layer.addFeatures(allFeatures);
                    }
                });
        };

        fetchFeatures(0);

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
            } else if (layer instanceof OpenLayers.Layer.Vector) {
                // Hero GIS identify tools often look for 'queryable' metadata
                layer.metadata = layer.metadata || {};
                layer.metadata.queryable = true;
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
