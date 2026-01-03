Ext.namespace("Heron.scratch");

Heron.scratch.LocalLayerLoader = {
    showDialog: function () {
        var win = new Ext.Window({
            title: 'Načítať lokálnu vrstvu',
            width: 450,
            height: 350,
            layout: 'fit',
            modal: true,
            items: [{
                xtype: 'form',
                padding: 10,
                border: false,
                labelWidth: 100,
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Názov vrstvy',
                        name: 'layerName',
                        anchor: '100%',
                        value: 'Nová lokálna vrstva'
                    },
                    {
                        xtype: 'combo',
                        fieldLabel: 'Projekcia súboru',
                        name: 'projection',
                        store: [['EPSG:4326', 'WGS 84 (EPSG:4326)'], ['EPSG:3857', 'Web Mercator (EPSG:3857)'], ['EPSG:102067', 'S-JTSK (EPSG:102067)']],
                        value: 'EPSG:4326',
                        triggerAction: 'all',
                        mode: 'local',
                        anchor: '100%'
                    },
                    {
                        xtype: 'box',
                        fieldLabel: 'Dátový súbor',
                        autoEl: {
                            tag: 'div',
                            children: [{
                                tag: 'input',
                                type: 'file',
                                id: 'local-layer-data-file',
                                style: 'width: 100%'
                            }]
                        }
                    },
                    {
                        xtype: 'box',
                        fieldLabel: 'Štýl (JSON)',
                        autoEl: {
                            tag: 'div',
                            children: [{
                                tag: 'input',
                                type: 'file',
                                id: 'local-layer-style-file',
                                style: 'width: 100%'
                            }]
                        }
                    },
                    {
                        xtype: 'box',
                        autoEl: {
                            tag: 'div',
                            style: 'margin-top: 10px; font-size: 11px; color: #666;',
                            html: 'Poznámka: Štýl by mal byť JSON formát s kľúčmi ako fillColor, strokeColor, atď.'
                        }
                    }
                ],
                buttons: [{
                    text: 'Načítať',
                    handler: function () {
                        var form = this.ownerCt.ownerCt.getForm();
                        var layerName = form.findField('layerName').getValue();
                        var projection = form.findField('projection').getValue();
                        var dataFile = document.getElementById('local-layer-data-file').files[0];
                        var styleFile = document.getElementById('local-layer-style-file').files[0];

                        if (!dataFile) {
                            alert('Vyberte prosím dátový súbor.');
                            return;
                        }

                        Heron.scratch.LocalLayerLoader.processFiles(dataFile, styleFile, layerName, projection);
                        win.close();
                    }
                }, {
                    text: 'Zrušiť',
                    handler: function () {
                        win.close();
                    }
                }]
            }]
        });
        win.show();
    },

    processFiles: function (dataFile, styleFile, layerName, projection) {
        var reader = new FileReader();
        var self = this;

        reader.onload = function (e) {
            var dataContent = e.target.result;
            if (styleFile) {
                var styleReader = new FileReader();
                styleReader.onload = function (se) {
                    var styleContent = se.target.result;
                    self.createLayer(dataContent, styleContent, layerName, projection, dataFile.name);
                };
                styleReader.readAsText(styleFile);
            } else {
                self.createLayer(dataContent, null, layerName, projection, dataFile.name);
            }
        };
        reader.readAsText(dataFile);
    },

    createLayer: function (dataContent, styleContent, layerName, projection, fileName) {
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
            alert('Nepodporovaný formát súboru: ' + ext);
            return;
        }

        // Set projection for parsing
        format.internalProjection = new OpenLayers.Projection("EPSG:900913");
        format.externalProjection = new OpenLayers.Projection(projection);

        var features = format.read(dataContent);
        if (!features || features.length === 0) {
            alert('Nepodarilo sa načítať žiadne prvky zo súboru.');
            return;
        }

        var styleMap;
        if (styleContent) {
            try {
                var styleObj = JSON.parse(styleContent);
                var style = new OpenLayers.Style(styleObj);
                styleMap = new OpenLayers.StyleMap({ "default": style });
            } catch (err) {
                console.error('Chyba pri parsovaní štýlu:', err);
                alert('Chyba pri parsovaní štýlu: ' + err.message);
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

        var vectorLayer = new OpenLayers.Layer.Vector(layerName, {
            styleMap: styleMap,
            visibility: true,
            displayInLayerSwitcher: true
        });

        vectorLayer.addFeatures(features);
        var map = Heron.App.getMap();
        map.addLayer(vectorLayer);

        // Zoom to data
        map.zoomToExtent(vectorLayer.getDataExtent());

        // Add to layer tree if possible
        this.addLayerToTree(vectorLayer, layerName);
    },

    addLayerToTree: function (layer, layerName) {
        var tree = Ext.getCmp('hr-layer-tree');
        if (!tree) return;

        var root = tree.getRootNode();
        // Try to find "Editor" folder or just add to root
        var editorNode = root.findChild('text', 'Editor', true);

        var newNodeConfig = {
            nodeType: "gx_layer",
            layer: layerName, // OL uses name for lookup in some Heron versions, but here we pass the layer object if possible
            text: layerName,
            checked: true,
            leaf: true
        };

        // If Heron expects the layer name and it's already in the map, gx_layer should find it
        if (editorNode) {
            editorNode.appendChild(newNodeConfig);
            editorNode.expand();
        } else {
            root.appendChild(newNodeConfig);
        }
    }
};
