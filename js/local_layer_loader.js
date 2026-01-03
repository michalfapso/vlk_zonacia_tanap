Heron.scratch.LocalLayerLoader = {
    showDialog: function () {
        var me = this;
        var dialog = new Ext.Window({
            title: 'Pridať vrstvu',
            width: 500,
            autoHeight: true,
            layout: 'form',
            padding: 10,
            modal: true,
            labelWidth: 100,
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Dáta vrstvy',
                    items: [
                        {
                            xtype: 'radiogroup',
                            hideLabel: true,
                            items: [
                                { boxLabel: 'Súbor', name: 'dataType', inputValue: 'file', checked: true },
                                { boxLabel: 'URL', name: 'dataType', inputValue: 'url' }
                            ],
                            listeners: {
                                change: function (rg, checked) {
                                    var isFile = checked.inputValue === 'file';
                                    Ext.getCmp('layer-file-field').setVisible(isFile);
                                    Ext.getCmp('layer-url-field').setVisible(!isFile);
                                    dialog.doLayout();
                                }
                            }
                        },
                        {
                            xtype: 'fileuploadfield',
                            id: 'layer-file-field',
                            emptyText: 'Vybrať GeoJSON, KML alebo GPX...',
                            fieldLabel: 'Súbor',
                            buttonText: 'Prehliadať...',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            id: 'layer-url-field',
                            fieldLabel: 'URL',
                            emptyText: 'https://...',
                            anchor: '100%',
                            hidden: true
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Štýl vrstvy (voliteľné)',
                    items: [
                        {
                            xtype: 'radiogroup',
                            hideLabel: true,
                            items: [
                                { boxLabel: 'Bypass', name: 'styleType', inputValue: 'none', checked: true },
                                { boxLabel: 'Súbor', name: 'styleType', inputValue: 'file' },
                                { boxLabel: 'URL', name: 'styleType', inputValue: 'url' }
                            ],
                            listeners: {
                                change: function (rg, checked) {
                                    var val = checked.inputValue;
                                    Ext.getCmp('style-file-field').setVisible(val === 'file');
                                    Ext.getCmp('style-url-field').setVisible(val === 'url');
                                    dialog.doLayout();
                                }
                            }
                        },
                        {
                            xtype: 'fileuploadfield',
                            id: 'style-file-field',
                            emptyText: 'Vybrať JSON štýl...',
                            fieldLabel: 'Súbor',
                            buttonText: 'Prehliadať...',
                            anchor: '100%',
                            hidden: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'style-url-field',
                            fieldLabel: 'URL',
                            emptyText: 'https://...',
                            anchor: '100%',
                            hidden: true
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    id: 'layer-name',
                    fieldLabel: 'Názov vrstvy',
                    value: 'Nová vrstva',
                    anchor: '100%'
                },
                {
                    xtype: 'combo',
                    id: 'layer-projection',
                    fieldLabel: 'Projekcia',
                    store: ['EPSG:4326', 'EPSG:3857', 'EPSG:102067'],
                    value: 'EPSG:4326',
                    mode: 'local',
                    triggerAction: 'all',
                    editable: false,
                    anchor: '100%'
                }
            ],
            buttons: [
                {
                    text: 'Pridať',
                    handler: function () {
                        me.processInputs(dialog);
                    }
                },
                {
                    text: 'Zrušiť',
                    handler: function () {
                        dialog.close();
                    }
                }
            ]
        });
        dialog.show();
    },

    processInputs: function (dialog) {
        var me = this;
        var name = Ext.getCmp('layer-name').getValue();
        var projection = Ext.getCmp('layer-projection').getValue();

        var dataType = dialog.findByType('radiogroup')[0].getValue().inputValue;
        var styleType = dialog.findByType('radiogroup')[1].getValue().inputValue;

        var dataPromise;
        var stylePromise;

        // Handle Data
        if (dataType === 'file') {
            var file = Ext.getCmp('layer-file-field').fileInputEl.dom.files[0];
            if (!file) {
                alert('Prosím vyberte súbor.');
                return;
            }
            dataPromise = Promise.resolve(file);
        } else {
            var url = Ext.getCmp('layer-url-field').getValue();
            if (!url) {
                alert('Prosím zadajte URL.');
                return;
            }
            dataPromise = Promise.resolve(url);
        }

        // Handle Style
        if (styleType === 'file') {
            var sFile = Ext.getCmp('style-file-field').fileInputEl.dom.files[0];
            if (sFile) {
                stylePromise = new Promise(function (resolve) {
                    var reader = new FileReader();
                    reader.onload = function (e) { resolve(e.target.result); };
                    reader.readAsText(sFile);
                });
            } else {
                stylePromise = Promise.resolve(null);
            }
        } else if (styleType === 'url') {
            var sUrl = Ext.getCmp('style-url-field').getValue();
            if (sUrl) {
                stylePromise = fetch(sUrl).then(function (r) { return r.json(); }).catch(function () { return null; });
            } else {
                stylePromise = Promise.resolve(null);
            }
        } else {
            stylePromise = Promise.resolve(null);
        }

        Promise.all([dataPromise, stylePromise]).then(function (results) {
            var dataInput = results[0];
            var styleContent = results[1];
            me.createLayer(dataInput, styleContent, name, projection);
            dialog.close();
        });
    },

    createLayer: function (dataInput, styleContent, name, projection) {
        var common = Heron.scratch.LayerCommon;
        var styleMap = common.getStyleMap(styleContent);
        var layer;

        if (typeof dataInput === 'string') {
            // URL source
            var isArcGIS = dataInput.indexOf('/MapServer') !== -1 || dataInput.indexOf('/FeatureServer') !== -1;
            if (isArcGIS) {
                layer = common.createArcGISVectorLayer(dataInput, name, styleMap);
            } else {
                var format = common.getFormat(dataInput, projection);
                layer = new OpenLayers.Layer.Vector(name, {
                    protocol: new OpenLayers.Protocol.HTTP({
                        url: dataInput,
                        format: format,
                        headers: {} // Avoid X-Requested-With
                    }),
                    strategies: [new OpenLayers.Strategy.Fixed()],
                    styleMap: styleMap,
                    opacity: 0.8,
                    isBaseLayer: false,
                    visibility: true
                });

                layer.events.register("loadend", layer, function () {
                    var map = Heron.App.getMap();
                    if (map) { map.zoomToExtent(this.getDataExtent()); }
                });
            }
        } else {
            // File source
            var reader = new FileReader();
            reader.onload = function (e) {
                var content = e.target.result;
                var format = common.getFormat(dataInput.name, projection);
                var features = format.read(content);

                layer = new OpenLayers.Layer.Vector(name, {
                    styleMap: styleMap,
                    opacity: 0.8,
                    isBaseLayer: false,
                    visibility: true
                });
                layer.addFeatures(features);
                common.addLayerToMapAndTree(layer, name, "Loaded from local file: " + dataInput.name);
            };
            reader.readAsText(dataInput);
            return; // Exit as the rest is in onload
        }

        if (layer) {
            common.addLayerToMapAndTree(layer, name, "Loaded from input");
        }
    }
};
