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
        var common = Heron.scratch.LayerCommon;
        var format = common.getFormat(fileName, projection);
        if (!format) return;

        var features = format.read(dataContent);
        if (!features || features.length === 0) {
            alert('Nepodarilo sa načítať žiadne prvky zo súboru.');
            return;
        }

        var styleMap = common.getStyleMap(styleContent);

        var vectorLayer = new OpenLayers.Layer.Vector(layerName, {
            styleMap: styleMap,
            visibility: true,
            displayInLayerSwitcher: true
        });

        vectorLayer.addFeatures(features);
        common.addLayerToMapAndTree(vectorLayer, layerName);
    }
};
