//SM, 13.01.2020 >>>
Ext.namespace("Heron.examples");


/* To test if  gridCellRenderers are triggered.
    * https://github.com/heron-mc/heron-mc/issues/302 */
Heron.options.gridCellRenderers =
    [
        {
            featureType: 'IG_vPROTECTEDSITES_UEV',
            attrName: 'SITEID',
            renderer: {
                fn: Heron.widgets.GridCellRenderer.directLink,
                options: {
                    url: 'https://www.sopsr.sk/natura/index1.php?p=4&sec=5&kod={SITEID}',
                    target: '_new'
                }
            }
        }
        , {
            featureType: 'IG_vPROTECTEDSITES_CHVU',
            attrName: 'SITEID',
            renderer: {
                fn: Heron.widgets.GridCellRenderer.directLink,
                options: {
                    url: 'https://www.sopsr.sk/natura/index1.php?p=4&sec=21&kod={SITEID}',
                    target: '_new'
                }
            }
        }
    ];

/* Allow the same export/download formats for each result panel.*/
//Heron.options.exportFormats=['XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'GeoPackage', 'Shapefile'];
Heron.options.exportFormats = [
    'XLS'
    , {
        name: 'GeoJSON (EPSG:4326 - WGS84)',
        formatter: 'OpenLayersFormatter',
        format: 'OpenLayers.Format.GeoJSON',
        targetFormat: 'GeoJSON',
        targetSrs: 'EPSG:4326',
        fileExt: '_EPSG4326.geojson',
        mimeType: 'text/plain'
    }
    /*
        ,{//nefunguje, ogr2ogr je zastaraly
            name: 'CSV (EPSG:4326)',
                    formatter: 'OpenLayersFormatter',
            format: 'OpenLayers.Format.GeoJSON',
                    targetFormat: 'CSV',
                    targetSrs: 'EPSG:4326',
            fileExt: '.csv',
            mimeType: 'text/plain'
        }
    */
    /*
        ,{//nefunguje, ogr2ogr je zastaraly
            name: 'Well-Known-Text (EPSG:4326)',
                    formatter: 'OpenLayersFormatter',
            format: 'OpenLayers.Format.WKT',
    //                targetFormat: 'WKT',
                    targetSrs: 'EPSG:4326',
            fileExt: '.wkt',
            mimeType: 'text/plain'
        }
    */
    , {
        name: 'Esri Shapefile (EPSG:4326 - WGS84)',
        formatter: 'OpenLayersFormatter',
        format: 'OpenLayers.Format.GeoJSON',
        targetFormat: 'ESRI Shapefile',
        targetSrs: 'EPSG:4326',
        fileExt: '.zip',
        mimeType: 'application/zip'
    }
    /*
        ,{//nefunguje, ogr2ogr je zastaraly
            name: 'GPS Exchange Format (GPX) (EPSG:4326)',
                    formatter: 'OpenLayersFormatter',
            format: 'OpenLayers.Format.GeoJSON',
                    targetFormat: 'GPX',
                    targetSrs: 'EPSG:4326',
            fileExt: '.gpx',
            mimeType: 'text/xml'
        }
    */
    , {//nefunguje, ogr2ogr je zastaraly
        name: 'KML (EPSG:4326 - WGS84)',
        formatter: 'OpenLayersFormatter',
        format: 'OpenLayers.Format.GeoJSON',
        targetFormat: 'KML',
        targetSrs: 'EPSG:4326',
        fileExt: '.kml',
        mimeType: 'text/xml'
    }

];

/** Create a config for the search panel. This panel may be embedded into the accordion
 * or bound to the "find" button in the toolbar. Here we use the toolbar button.
 */
Heron.examples.searchPanelConfig = {
    xtype: 'hr_multisearchcenterpanel',
    hropts: [
        {
            //SM, 05.08.2020 >>>
            searchPanel: {
                xtype: 'hr_formsearchpanel',
                name: 'Chránené územie',
                header: false,
                protocol: new OpenLayers.Protocol.WFS({
                    version: "1.1.0",
                    url: "https://www.sopsr.sk/geoserver/sopsr/ows?service=wfs",
                    srsName: "EPSG:3857",
                    featureType: "IG_PROTECTEDSITES"
                }),
                abortPrevious: true,
                items: [
                    {
                        xtype: 'combo', // http://mapas.dgterritorio.pt/heron/docs/lib/Heron/jst/widgets/search/GeocoderCombo.html
                        //			xtype: 'hr_geocodercombo',
                        queryParam: 'query', //pri 'hr_geocodercombo' je default "q", pri 'combo' je "query"
                        queryDelay: 700,
                        id: 'SITETITLE_SK', // pod takymto id sa bude formulárová položka odosielať
                        name: 'SITETITLE_SK__like', // aby použilo metodu "OpenLayers.Filter.Comparison.LIKE" namiesto prednastavenej "OpenLayers.Filter.Comparison.EQUAL_TO" // viď https://www.gisnet.jp/osk/stable/vendor/heron-1.0.6/docs/lib/Heron/jst/widgets/search/FormSearchPanel.html
                        fieldLabel: 'Chránené územie',
                        width: 300,
                        labelStyle: 'width: 120px; color:black; white-space:nowrap; font-weight:bold;',
                        style: 'font-size: 11px;',
                        clearFilterOnBlur: false,
                        allowBlank: false,
                        store: new Ext.data.JsonStore({
                            url: '../pg_con_ps.php',
                            fields: ['real_name', 'display_name'],
                        }),
                        minChars: 0,
                        displayField: 'display_name',
                        hiddenName: 'SITETITLE_SK__like',
                        valueField: 'real_name',
                        typeAhead: false,
                        mode: 'remote',
                        forceSelection: false,
                        triggerAction: 'all',
                        emptyText: 'Vyberte chránené územie...',
                        selectOnFocus: false,
                    },
                ],
                hropts: { //https://heron-mc.org/lib/Heron/jst/widgets/search/FormSearchPanel.html
                    onSearchCompleteZoom: 10,
                    autoWildCardAttach: false,
                    caseInsensitiveMatch: true,
                    logicalOperator: OpenLayers.Filter.Logical.AND,
                    layerOpts: [
                        //			{ layerOn: 'Pôsobnosť ŠOP SR', layerOpacity: 0.9 },
                    ]
                }
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                autoConfig: true,
                //                exportFormats: Heron.options.exportFormats,
                exportFormats: ['XLS', 'CSV'],
                //                exportFormats: [],
                displayPanels: ['Grid'],
                gridCellRenderers: Heron.options.gridCellRenderers,
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: false
                }
            }
            //SM, 05.08.2020 <<<
        }
    ]
};

//SM, 27.01.2020 >>>
Heron.examples.searchPanelConfig.hropts.push({
    searchPanel: {
        xtype: 'hr_formsearchpanel',
        name: 'JPRL - cez Lesné celky (plány)',
        header: false,
        protocol: new OpenLayers.Protocol.WFS({
            version: "1.1.0",
            //                    url: "http://kn.sopsr.sk/geoserver/nlc/ows?service=wfs",
            url: "http://192.168.70.105:8080/geoserver/nlc/ows?service=wfs",
            srsName: "EPSG:3857",
            //                    featureType: "jprl_2018_with_dbf"
            featureType: "interactive_map_jprl_2018"
        }),
        items: [
            {
                xtype: 'combo', // http://mapas.dgterritorio.pt/heron/docs/lib/Heron/jst/widgets/search/GeocoderCombo.html
                //			xtype: 'hr_geocodercombo',
                queryParam: 'query', //pri 'hr_geocodercombo' je default "q", pri 'combo' je "query"
                queryDelay: 700,
                id: 'plan', // pod takymto id sa bude formulárová polložka odosielať
                name: 'plan__like', // aby použilo metodu "OpenLayers.Filter.Comparison.LIKE" namiesto prednastavenej "OpenLayers.Filter.Comparison.EQUAL_TO" // viď https://www.gisnet.jp/osk/stable/vendor/heron-1.0.6/docs/lib/Heron/jst/widgets/search/FormSearchPanel.html
                fieldLabel: 'Lesný celok (plán)',
                width: 430,
                labelStyle: 'width: 120px; color:black; white-space:nowrap; font-weight:bold;',
                style: 'font-size: 11px;',
                clearFilterOnBlur: false,
                allowBlank: false,
                store: new Ext.data.JsonStore({
                    url: '../pg_con_csl_kpl.php',
                    fields: ['plan'],
                }),
                minChars: 0,
                displayField: 'plan',
                //			valueField:'kpl', //https://www.sencha.com/forum/showthread.php?153542-ComboBox-valueField-is-not-submitted
                typeAhead: false,
                mode: 'remote',
                forceSelection: false,
                triggerAction: 'all',
                emptyText: 'Vyberte lesný celok...',
                selectOnFocus: false,
            },
            {
                //https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Number.html
                xtype: "numberfield",
                //			name: "DC__like",
                name: "dc__eq", // https://heron-mc.org/lib/Heron/jst/widgets/search/FormSearchPanel.html
                value: '105',
                width: 100,
                //padding: '20 5 3 10',
                fieldLabel: "Číslo porastu (DC)",
                labelAlign: 'left',
                //labelWidth: 200,
                labelPad: 100,
                labelStyle: 'width: 120px; color: black; white-space: nowrap; font-weight: bold;',
                allowBlank: false,
                allowDecimals: false,
                blankText: 'napr.: <b>105</b>'
            },
        ],
        hropts: { //https://heron-mc.org/lib/Heron/jst/widgets/search/FormSearchPanel.html
            onSearchCompleteZoom: 10,
            autoWildCardAttach: false,
            caseInsensitiveMatch: true,
            logicalOperator: OpenLayers.Filter.Logical.AND,
            layerOpts: [
                //			{ layerOn: 'Pôsobnosť ŠOP SR', layerOpacity: 0.9 },
                //			{ layerOn: 'Jednotky priestorového rozdelenia lesa', layerOpacity: 0.9 },
            ]
        }
    },
    resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        autoConfig: true,
        exportFormats: Heron.options.exportFormats,
        //                exportFormats: ['XLS', 'CSV'],
        //                exportFormats: [],
        displayPanels: ['Grid'],
        gridCellRenderers: Heron.options.gridCellRenderers,
        hropts: {
            zoomOnRowDoubleClick: true,
            zoomOnFeatureSelect: false,
            zoomLevelPointSelect: 8,
            zoomToDataExtent: false
        }
    }
});
//SM, 27.01.2020 <<<

Heron.examples.searchPanelConfig.hropts.push({
    searchPanel: { //view-source:https://lib.heron-mc.org/heron/1.0.8dev/examples/multisearchcenternl/Config.js
        xtype: 'hr_formsearchpanel',
        name: 'JPRL - cez Lesné hospodárske celky',
        header: false,
        protocol: new OpenLayers.Protocol.WFS({
            version: "1.1.0",
            //		    url: "http://gis.nlcsk.org/arcgis/services/Inspire/JPRL/MapServer/WFSServer", // chcelo by to aktuálnejšiu verziu "proxy.cgi", ktorá sa však na tento zastaralejší server nedá implementovať
            //url: "http://kn.sopsr.sk/geoserver/nlc/ows?service=wfs",
            url: "http://192.168.70.105:8080/geoserver/nlc/ows?service=wfs",
            srsName: "EPSG:3857",
            //		    srsName: "EPSG:4326",
            featureType: "jprl_from_wfs"
            //		    featureType: "WFS_:Jednotky_priestorov%C3%A9ho_rozdelenia_lesa"
        }),
        items: [
            /*
                                {
                        //https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Text.html
                        xtype: "textfield",
            //			name: "LHC__like",
                        name: "lhc__like", // https://heron-mc.org/lib/Heron/jst/widgets/search/FormSearchPanel.html
                        value: 'Beňuš',
            //			width: 100,
                        labelStyle: 'width: 120px; color: black; white-space: nowrap; font-weight: bold;',
            
                        fieldLabel: "LHC",
                        allowBlank: false,
                        blankText: 'Zadať názov LHC, napr.: <b>Beňuš</b>'
                        ,minLength: '3'
                        ,minLengthText: 'aspoň 3 textové znaky musia byť zadané'
                                }
            */
            /*
                        ,{
            // ### AUTOCOMPLETE INPUT
            // inšpirácia: https://groups.google.com/forum/#!topic/geoext-viewer-devel/DcCClVvm1is
            // https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.ComboBox.html
                        xtype: 'hr_geocodercombo', // http://mapas.dgterritorio.pt/heron/docs/lib/Heron/jst/widgets/search/GeocoderCombo.html
                        id: 'lhc', // pod takymto id sa bude formulárová polložka odosielať
                        style: 'font-size: 11px;',
                        clearFilterOnBlur: false,
                        allowBlank: false,
            //			vtype: 'alpha',
                        width: 185,
                        emptyText: 'Please enter name...',
                        hideTrigger: true,
                        minChars: 1,
                        queryDelay: 300,
                        fieldLabel: 'Search - Name of XYZ',
                        labelStyle: 'font-size: 11px;',
            //			displayField: 'lhc',
                        valueField: 'lhc',
                        store: new Ext.data.Store({
                            reader: new GeoExt.data.FeatureReader({}, [
            //                      	{name: 'name', mapping: 'FIELD_1'},
                            {name: 'name', mapping: 'lhc'},
            //				{name: 'bounds', convert: function(v, feature) {
            //				    return feature.geometry.getBounds().toArray();
            //				    }
                            }
            
                            ]),
                        proxy: new (Ext.extend(GeoExt.data.ProtocolProxy, {
                            doRequest: function(action, records, params, reader, callback, scope, arg)
                            {
                            if (params.q)
                            {
                                params.filter = new OpenLayers.Filter.Comparison({
                                type: OpenLayers.Filter.Comparison.LIKE,
                                matchCase: false,
            //					property: 'FIELD_1',
                                property: 'lhc',
            //					value: '*' + params.q + '*'
                                value: params.q + '*'
                                });
                                delete params.q;
                            }
                            GeoExt.data.ProtocolProxy.prototype.doRequest.apply(this, arguments);
                            }
                        }))({
                            protocol: new OpenLayers.Protocol.WFS({
                            version: "1.1.0",
                            url: "http://kn.sopsr.sk/geoserver/nlc/ows?service=wfs",
            //				featurePrefix: "isd-db",
                            featureType: "tbl_lhc",
                            srsName: "EPSG:3857",
            //				propertyNames: ['FIELD_1', 'lhc'],
                            propertyNames: ['lhc'],
                            maxFeatures: 20
                            ,sortBy: 'lhc'
                            })
                            ,setParamsAsOptions: true
                        })
                        })
                    }
            */
            {
                // ### COMOBOBOX + autocomplete
                xtype: 'combo',
                //			id: 'LHC',
                id: 'lhc',
                fieldLabel: 'LHC',
                //name: 'LHC__like',
                /*
                            store: new Ext.data.ArrayStore({
                                id: 0,
                                fields: [
                                'myId',  // numeric value is the key
                                'displayText'
                                ],
                                data: [[1, 'item1'], [2, 'item2']]  // data is local
                            }),
                            valueField: 'myId',
                */
                //			hiddenName: 'gemeente',
                enableKeyEvents: true,
                editable: true,
                autoSelect: true,
                forceSelection: true,
                typeAhead: false,
                caseSensitive: false,
                lazyInit: true,
                emptyText: 'Vyberte LHC',
                loadingText: 'dolovanie názvu LHC..',
                minChars: 1,
                width: 215,
                allowBlank: false,
                blankText: 'Zadať názov LHC, napr.: <b>Beňuš</b>',
                editable: true,
                selectOnFocus: true,
                clearFilterOnBlur: true,
                valueNotFoundText: 'nenájdené',
                //			emptyText: 'nullll',
                //			vtype: 'alpha',
                labelStyle: 'width:120px; color:black; white-space:nowrap; font-weight:bold;',
                mode: 'remote',
                /*
                            store: new GeoExt.data.FeatureStore({
                                    autoLoad: true,
                                    proxy: new GeoExt.data.ProtocolProxy({
                                        protocol: new OpenLayers.Protocol.WFS({
                //			             url: Heron.scratch.urls.KADEMO_OWS,
                                    url: 'http://kn.sopsr.sk/geoserver/nlc/ows?service=wfs',
                                            featureType: "tbl_lhc",
                //			             geometryName: 'geom'
                                        })
                                    }),
                                    fields: [
                                        {name: 'lhc'}
                //			         {name: 'kadnaam'},
                                    ]}),
                */
                store: new Ext.data.JsonStore({
                    url: '../pg_con_nlc_lhc.php',
                    fields: ['clhc', 'lhc']
                }),
                valueField: 'lhc',
                displayField: 'lhc',
                triggerAction: 'all',
                selectOnFocus: true,
                /*
                                listeners: {
                                    'select': function (cb, rec) {
                                        // Sets the value into the filter of "Sectie" combo
                                        // TODO: need more elegant way of doing this, like "observer"
                                        var sectieCB = Ext.getCmp('sectie_cb');
                                        sectieCB.clearValue();
                                    sectieCB.store.proxy.protocol.filter.value = cb.value;
                                        sectieCB.store.load();
                                    },
                                    'beforequery': function (queryPlan) {
                                        var combo = queryPlan.combo;
                                        // combo.store.clearFilter(true);
                                        var searchValue = queryPlan.query;
                                        if (combo.lastQuery != searchValue) {
                                            combo.store.filter('lhc',searchValue, true, false);
                                            combo.lastQuery = searchValue;
                                            combo.onLoad();
                                            // console.log('searchValue=' + searchValue);
                                        }
                                        return false;
                                    },
                                    scope: this
                                }
                */
            }
            , {
                //https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Number.html
                xtype: "numberfield",
                //			name: "DC__like",
                //			name: "DC__eq", // https://heron-mc.org/lib/Heron/jst/widgets/search/FormSearchPanel.html
                name: "dc__eq",
                value: '105',
                width: 100,
                //padding: '20 5 3 10',
                fieldLabel: "Číslo porastu (DC)",
                labelAlign: 'left',
                //labelWidth: 200,
                labelPad: 100,
                labelStyle: 'width: 120px; color: black; white-space: nowrap; font-weight: bold;',
                allowBlank: false,
                allowDecimals: false,
                blankText: 'napr.: <b>105</b>'
            }
            /*
                                ,{
                        xtype: "label",
                        id: "helplabel",
                        html: '<br/><br/><br/><u style="color: blue;">Tím Odboru správy dát a GIS</u> pre vás pripravil:<br />&nbsp;&nbsp;<b>Vyhľadávač lesných porastov</b><br/>',
                        style: {
                            fontSize: '12px',
                            color: '#AAAAAA'
                        }
                                }
            */
        ],
        hropts: { //https://heron-mc.org/lib/Heron/jst/widgets/search/FormSearchPanel.html
            onSearchCompleteZoom: 10,
            autoWildCardAttach: false,
            caseInsensitiveMatch: true,
            logicalOperator: OpenLayers.Filter.Logical.AND,
            layerOpts: [
                { layerOn: 'Pôsobnosť ŠOP SR', layerOpacity: 0.9 },
                //			{ layerOn: 'Jednotky priestorového rozdelenia lesa', layerOpacity: 0.9 },
            ]
        }
    }
    , resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        autoConfig: true,
        exportFormats: Heron.options.exportFormats,
        displayPanels: ['Grid'],
        gridCellRenderers: Heron.options.gridCellRenderers,
        hropts: {
            zoomOnRowDoubleClick: true,
            zoomOnFeatureSelect: false,
            zoomLevelPointSelect: 8,
            zoomToDataExtent: false
        }
    }

});

Heron.examples.searchPanelConfig.hropts.push({
    searchPanel: {
        xtype: 'hr_formsearchpanel',
        name: 'parcely v KN-C',
        header: false,
        protocol: new OpenLayers.Protocol.WFS({
            version: "1.1.0",
            //		    url: "http://kn.sopsr.sk/geoserver/ows?service=wfs",
            url: "http://192.168.70.105:8080/geoserver/ows?service=wfs",
            srsName: "EPSG:3857",
            featureType: "SK_KN_C"
        }),
        items: [

            {
                //https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Text.html
                xtype: "textfield",
                name: "nazov_ku__like",
                value: 'Revúca',
                labelStyle: 'width: 140px; white-space: nowrap; font-weight: bold;',
                fieldLabel: "  Katastrálne územie",
                allowBlank: false,
                blankText: 'Zadať názov katastrálneho územia, napr.: <b>Revúca</b>'
                , minLength: '3'
                , minLengthText: 'aspoň 3 textové znaky musia byť zadané'
            }

            /*
                        {
            // ### AUTOCOMPLETE INPUT
            // inšpirácia: https://groups.google.com/forum/#!topic/geoext-viewer-devel/DcCClVvm1is
            // https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.ComboBox.html
                        xtype: 'hr_geocodercombo', // http://mapas.dgterritorio.pt/heron/docs/lib/Heron/jst/widgets/search/GeocoderCombo.html
            //			xtype: 'combo',
                        id: 'nazov_ku', // pod takymto id sa bude formulárová polložka odosielať
                        style: 'font-size: 11px;',
                        clearFilterOnBlur: false,
                        allowBlank: false,
            //			vtype: 'alpha',
            // >>> vtype >>>
            //			vtype: new Ext.form.VTypes({
            //			    AlphaNum:  function(v) {
            //				return /^[a-z0-9]$/i.test(v);
            //				return /^[a-z0-9]$/i.test(v);
            //			    },
            //			    // This is the tooltip message displayed when invalid input occurs
            //			    AlphaNumText: 'Must be an alphanumeric word',          
            //			    // This mask filter invalid keystrokes
            //			    AlphaNumMask: /[a-z0-9]/i
            //			    AlphaNumMask: /[a-z]/i
            //			}),
            // <<< vtype <<<
                        width: 185,
                        emptyText: 'Zadajte názov k.ú',
                        hideTrigger: true,
                        minChars: 1,
                        typeAhead: false,
                        queryDelay: 500,
                        fieldLabel: 'Názov k.ú.',
                        labelStyle: 'width: 140px; white-space: nowrap; font-weight: bold;',
            //			labelStyle: 'font-size: 11px;',
            //			displayField: 'utj',
            //			valueField: 'utj', 
                        store: new Ext.data.Store({
                            reader: new GeoExt.data.FeatureReader({}, [
            //				{name: 'name', mapping: 'FIELD_1'},
                            {name: 'name', mapping: 'utj'},
            //				{name: 'bounds', convert: function(v, feature) {
            //				    return feature.geometry.getBounds().toArray();
            //				    }
            //				}
                            ]),
                            proxy: new (Ext.extend(GeoExt.data.ProtocolProxy, {
                            doRequest: function(action, records, params, reader, callback, scope, arg) {
                                if (params.q)
                                {
                                params.filter = new OpenLayers.Filter.Comparison({
                                    type: OpenLayers.Filter.Comparison.LIKE,
                                    matchCase: false,
                                    property: 'utj',
            //					    value: '*' + params.q + '*'
                                    value: params.q + '*'
                                });
                                delete params.q;
                                }
                                GeoExt.data.ProtocolProxy.prototype.doRequest.apply(this, arguments);
                            }
                            }))({
                            protocol: new OpenLayers.Protocol.WFS({
                                version: "1.1.0",
                                url: "http://kn.sopsr.sk/geoserver/kataster/ows?service=wfs",
            //				    featurePrefix: "isd-db",
                                featureType: "tbl_kataster",
                                srsName: "EPSG:3857",
            //				    propertyNames: ['FIELD_1', 'lhc'],
                                propertyNames: ['utj'],
                                maxFeatures: 50
                                ,sortBy: 'utj'
                            }),
                            setParamsAsOptions: true
                            })
                        })
            
                        }
            */
            , {
                //https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Text.html
                xtype: "textfield",
                name: "parcela",
                value: '2669/1',
                labelStyle: 'width: 140px; white-space: nowrap; font-weight: bold;',
                fieldLabel: "  Číslo parcely KN-C",
                allowBlank: false,
                blankText: 'napr.: <b>2669/1</b>'
            },
            /*
                                {
                        xtype: "label",
                        id: "helplabel",
                        html: '<br/><br/><br/><u style="color: blue;">Tím Odboru správy dát a GIS</u> pre vás pripravil:<br />&nbsp;&nbsp;<b>Vyhľadávač lesných porastov</b><br/>',
                        style: {
                            fontSize: '10px',
                            color: '#AAAAAA'
                        }
                                }
            */
        ],
        hropts: {
            onSearchCompleteZoom: 10,
            autoWildCardAttach: true,
            caseInsensitiveMatch: true,
            logicalOperator: OpenLayers.Filter.Logical.AND
        }
    },
    resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        /*
        //SM, mohol by som si aj prispôsobiť stlpce vo výslednom gride >
                columns: [
                    {
                    header: "Street",
                    width: 100,
                    dataIndex: "stt_naam"
                    }
                    ,{
                    header: "City",
                    width: 200,
                    dataIndex: "gme_naam"
                    }
                ],
        */
        exportFormats: ['XLS'],
        hropts: {
            zoomOnRowDoubleClick: true,
            zoomOnFeatureSelect: false,
            zoomLevelPointSelect: 9
        }
    }
});

Heron.examples.searchPanelConfig.hropts.push({
    searchPanel: {
        xtype: 'hr_formsearchpanel',
        name: 'parcely v KN-E',
        header: false,
        protocol: new OpenLayers.Protocol.WFS({
            version: "1.1.0",
            //	    url: "http://kn.sopsr.sk/geoserver/ows?service=wfs",
            url: "http://192.168.70.105:8080/geoserver/ows?service=wfs",
            srsName: "EPSG:3857",
            featureType: "SK_KN_E"
        }),
        items: [
            {
                //https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Text.html
                xtype: "textfield",
                name: "nazov_ku__like",
                value: 'Revúca',
                labelStyle: 'width: 140px; white-space: nowrap; font-weight: bold;',
                fieldLabel: "  Katastrálne územie",
                allowBlank: false,
                blankText: 'Zadať názov katastrálneho územia, napr.: <b>Revúca</b>'
                , minLength: '3'
                , minLengthText: 'aspoň 3 textové znaky musia byť zadané'
            }
            , {
                //https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Text.html
                xtype: "textfield",
                name: "parcela",
                value: '2149/1',
                labelStyle: 'width: 140px; white-space: nowrap; font-weight: bold;',
                fieldLabel: "  Číslo parcely KN-E",
                allowBlank: false,
                blankText: 'napr.: <b>2149/1</b>'
            }
            /*
                    ,{
                        xtype: "label",
                        id: "helplabel",
                        html: '<br/><br/><br/><u style="color: blue;">Tím Odboru správy dát a GIS</u> pre vás pripravil:<br />&nbsp;&nbsp;<b>Vyhľadávač lesných porastov</b><br/>',
                        style: {
                            fontSize: '10px',
                            color: '#AAAAAA'
                        }
                    }
            */
        ],
        hropts: {
            onSearchCompleteZoom: 10,
            autoWildCardAttach: true,
            caseInsensitiveMatch: true,
            logicalOperator: OpenLayers.Filter.Logical.AND
        }
    },
    resultPanel: {
        xtype: 'hr_featuregridpanel',
        id: 'hr-featuregridpanel',
        header: false,
        /*
        //SM, mohol by som si aj prispôsobiť stlpce vo výslednom gride >
            columns: [
                    {
                        header: "Street",
                        width: 100,
                        dataIndex: "stt_naam"
                    },
                    {
                        header: "City",
                        width: 200,
                        dataIndex: "gme_naam"
                    }
                ],
        */
        exportFormats: ['XLS'],
        hropts: {
            zoomOnRowDoubleClick: true,
            zoomOnFeatureSelect: false,
            zoomLevelPointSelect: 9
        }
    }
});

//SM, 13.01.2020 <<<




Heron.options.map.toolbar = [
    {
        type: "namesearch",
        options: {
            //		url: 'http://open.mapquestapi.com/nominatim/v1/search?key=zDUDQPvUUH8G0mqb3nGOq4RSwmr6w2lW&countrycodes=SK,CZ&addressdetails=1&format=json&limit=15&osm_type=N',
            //		url: 'http://open.mapquestapi.com/nominatim/v1/search?countrycodes=SK,CZ&addressdetails=1&format=json&limit=15&json_callback=renderBasicSearchNarrative',
            //url: 'http://nominatim.openstreetmap.org/search?format=json',
            //		xtype: 'hr_nominatimsearchcombo',
            //		id: "nominatimsearchcombo1",
            //            tpl: '<tpl for="."><tpl for="address"><div class="x-combo-list-item">{road} {town} {state} {postcode} {country}</div></tpl></tpl>',
            //            tpl: '<tpl for="."><tpl for="address"><div class="x-combo-list-item">{city_district} {postcode} {city} {country_code}</div></tpl></tpl>',
            //            tpl: '<tpl for="."><tpl for="address"><div class="x-combo-list-item">{display_name}</div></tpl></tpl>',
            //            tpl: '<tpl for="."><tpl for="address"><div class=i"x-combo-list-item">{city_district} {city} {state} {postcode} ({country_code})</div></tpl></tpl>',
            //            displayTpl: '<tpl for="."><tpl for="address">{road} {town} {state} {country}</tpl></tpl>'
            //            displayTpl: '<tpl for="."><tpl for="address">{road} {town} {state} {postcode} {country}</tpl></tpl>',
            //            displayTpl: '<tpl for="."><tpl for="address">{city_district} {postcode} {country_code}</tpl></tpl>',
            //            displayTpl: '<tpl for="."><tpl for="address">{city_district} {city} {state} {postcode} ({country_code})</tpl></tpl>',

            //inspiracia:
            //http://jsfiddle.net/nqT55/1/
            //http://wiki.openstreetmap.org/wiki/Nominatim#Parameters
            url: 'https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&countrycodes=SK&limit=20&dedupe=1',
            //url: 'http://photon.komoot.de/api',
            xtype: 'hr_geocodercombo',
            id: 'hr_geocodercombo',
            layer: new OpenLayers.Layer.Vector("Location", {
                styleMap: new OpenLayers.Style({
                    //                externalGraphic: "../../resources/images/default/anchor-access.png",
                    externalGraphic: "http://nominatim.openstreetmap.org/images/mapicons/poi_place_village.p.20.png",
                    graphicYOffset: -25,
                    graphicHeight: 25,
                    graphicTitle: "${name}"
                })
            }),
            emptyText: 'Hľadaj miesto, mesto, dedinu v SK',
            width: 420,
            zoom: 13,
            minChars: 3,
            tooltip: "Hľadať ...",
        }
    },

    { type: "-" },
    //SM, 13.01.2020 >>>
    {
        type: "searchcenter",
        // Options for SearchPanel window
        options: {
            show: true,
            searchWindow: {
                //                title: __('Multiple Searches'),
                x: 1000,
                y: undefined,
                // to len kvoli širokému výberovému menu lesných celkov
                width: 580,
                height: 340,
                items: [
                    Heron.examples.searchPanelConfig
                ]
            }
        }
    },
    //SM, 13.01.2020 <<<

    //	{type: "scale", options: {
    //		thousandSeparator: ' ',
    //		}
    //	},
    { type: "-" },
    //    {type: "baselayer"},
    //        {type: "-"},
    /*
            {type: "featureinfo", options: {
                    max_features: 20,
                        }
        },
    */

    {
        type: "featureinfo"
        , options: {
            popupWindow: {
                width: 460,
                height: 200,
                featureInfoPanel: {
                    showTopToolbar: true,
                    displayPanels: ['Table'],
                    exportFormats: ['CSV', 'XLS'],
                    maxFeatures: 10,
                    // In case that the same layer would be requested more than once: discard the styles
                    discardStylesForDups: true
                    , gridCellRenderers: Heron.options.gridCellRenderers
                }
            }
        }
    },

    { type: "-" },

    {
        type: "coordinatesearch", options: {
            tooltip: __('Zadajte súradnice pre navigáciu na mape.'),
            onSearchCompleteZoom: 10,
            fieldLabelX: 'lon',
            fieldLabelY: 'lat',
            showProjection: true,
            showHideMarkers: true,
            removeMarkersOnClose: false,
            //		onZoomLevel: 7,
            hropts: [
                {
                    projEpsg: 'EPSG:4326'
                    , projDesc: 'WGS 84'
                    , fieldLabelX: 'X'
                    , fieldLabelY: 'Y'
                    , fieldEmptyTextX: 'napr.: 20.114076'
                    , fieldEmptyTextY: 'napr.: 48.693340'
                    , fieldMinX: -180
                    , fieldMinY: -90
                    , fieldMaxX: 180
                    , fieldMaxY: 90
                    , fieldDecPrecision: 6
                    , iconWidth: 32
                    , iconHeight: 32
                    , localIconFile: 'redpin.png'
                    //				 ,iconUrl: 'http://lib.heron-mc.org/heron/latest/resources/images/redpin.png'
                    , iconUrl: 'https://lib.heron-mc.org/heron/latest/resources/images/map_pin.png'
                },
                {
                    projEpsg: 'EPSG:102067'
                    , projDesc: 'S-JTSK'
                    , fieldLabelX: 'X'
                    , fieldLabelY: 'Y'
                    , fieldEmptyTextX: 'napr.: -347013.497'
                    , fieldEmptyTextY: 'napr.: -1238035.421'
                    , fieldMinX: -591310
                    , fieldMinY: -1334780
                    , fieldMaxX: -165448
                    , fieldMaxY: -1132590
                    , fieldDecPrecision: 6
                    , iconWidth: 32
                    , iconHeight: 32
                    , localIconFile: 'redpin.png'
                    , iconUrl: 'https://lib.heron-mc.org/heron/latest/resources/images/map_pin.png'
                },
                {
                    projEpsg: 'EPSG:28403'
                    , projDesc: 'S-42 3.pásmo'
                    , fieldLabelX: 'X'
                    , fieldLabelY: 'Y'
                    , fieldEmptyTextX: 'napr.: 3876559.636'
                    , fieldEmptyTextY: 'napr.: 5408298.786'
                    , fieldDecPrecision: 6
                    , iconWidth: 32
                    , iconHeight: 32
                    , localIconFile: 'redpin.png'
                    , iconUrl: 'https://lib.heron-mc.org/heron/latest/resources/images/map_pin.png'
                },
                {
                    projEpsg: 'EPSG:28404'
                    , projDesc: 'S-42 4.pásmo'
                    , fieldLabelX: 'X'
                    , fieldLabelY: 'Y'
                    , fieldEmptyTextX: 'napr.: 4434899.981'
                    , fieldEmptyTextY: 'napr.: 5396032.132'
                    , fieldDecPrecision: 6
                    , iconWidth: 32
                    , iconHeight: 32
                    , localIconFile: 'redpin.png'
                    , iconUrl: 'https://lib.heron-mc.org/heron/latest/resources/images/map_pin.png'
                },
            ],
        }
    },

    { type: "-" },

    // vlastný nástroj do panela nástrojov
    // inšpirácia: https://lib.heron-mc.org/heron/1.0.8dev/examples/toolbar-item/index.html
    {
        create: function (mapPanel, options) {
            var map = mapPanel.getMap();
            Ext.namespace("MyToolbarItems.vectorLayer");
            MyToolbarItems.vectorLayer = new OpenLayers.Layer.Vector("MyDrawing", { displayInLayerSwitcher: false, visibility: false, hideInLegend: true });
            map.addLayers([MyToolbarItems.vectorLayer]);

            // create the popup if it doesn't exist

            return new GeoExt.Action({ // https://geoext.org/v1/lib/GeoExt/widgets/Action.html  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Action-cfg-handler
                text: "získaj XY",
                control: new OpenLayers.Control.DrawFeature(
                    MyToolbarItems.vectorLayer,
                    OpenLayers.Class(OpenLayers.Control, {
                        defaultHandlerOptions: {
                            'single': true,
                            'double': false,
                            'pixelTolerance': 0,
                            'stopSingle': false,
                            'stopDouble': false
                        },
                        initialize: function (options) {
                            this.handlerOptions = OpenLayers.Util.extend(
                                {}, this.defaultHandlerOptions
                            );
                            OpenLayers.Control.prototype.initialize.apply(
                                this, arguments
                            );
                            this.handler = new OpenLayers.Handler.Click(
                                this,
                                {
                                    'click': this.trigger
                                },
                                this.handlerOptions
                            );
                        },
                        trigger: function (e) {
                            var lonlat_900913 = map.getLonLatFromViewPortPx(e.xy);
                            var lonlat_102067 = map.getLonLatFromViewPortPx(e.xy);
                            var lonlat_4326 = map.getLonLatFromViewPortPx(e.xy);
                            lonlat_4326.transform(map.projection, map.displayProjection);
                            lonlat_102067.transform(map.projection, new OpenLayers.Projection("EPSG:102067"));

                            //						alert(    '\nGoogle mercator: ' + lonlat_900913.lon + ' ' + lonlat_900913.lat + '\n'
                            //							+ 'S-JTSK: ' + lonlat_102067.lon + ' ' + lonlat_102067.lat + '\n'
                            //							+ 'WGS84: ' + lonlat_4326.lon + ' ' + lonlat_4326.lat + '\n'
                            //							+ '');
                            //						prompt('Súradnica', Math.round(lonlat_4326.lon * 1000000)/1000000 + ' ' + Math.round(lonlat_4326.lat * 1000000)/1000000);

                            var wind = Ext.WindowMgr.getActive(); // https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.WindowGroup-method-getActive
                            if (wind) {
                                wind.close();
                            }

                            if (!popup) { // inšpirácia: https://api.geoext.org/1.0/examples/popup-more.js
                                var popup = new GeoExt.Popup({ // https://heron-mc.org/lib/Heron/jst/override-geoext.html  https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Window
                                    title: "Odkliknutá súradnica",
                                    minWidth: 500,
                                    maximizable: false,
                                    collapsible: false,
                                    map: mapPanel.map,
                                    anchored: true,
                                    location: lonlat_900913,
                                    listeners: {
                                        close: function () {
                                            // closing a popup destroys it, but our reference is truthy
                                            popup = null;
                                        }
                                    }
                                    , bodyStyle: 'background-color:white'
                                });
                            };
                            popup.add({
                                xtype: "box", //"dataview", //"box", // https://docs.sencha.com/extjs/3.4.0/#!/api/Ext.Component
                                autoEl: {
                                    //html: "You clicked on (" + loc.lon.toFixed(2) + ", " + loc.lat.toFixed(2) + ")"
                                    html: '<table style="font-size: small;" style="border: 1px dotted blue;">'
                                        + '<tr><th style="padding:0 10px 0 10px;text-align: center;"><b>Súr. systém</b></th><th style="text-align: center;"><b>X</b></th><th style="text-align: center;"><b>Y</b></th></tr>'
                                        + '<tr><td style="padding: 0 10px 0 10px;text-align: center;border: 1px dotted blue;"><b>WGS84</b></td><td style="text-align: right;border: 1px dotted blue;">' + Math.round(lonlat_4326.lon * 1000000) / 1000000 + '</td><td style="text-align: right;border: 1px dotted blue;">' + Math.round(lonlat_4326.lat * 1000000) / 1000000 + '</td></tr>'
                                        + '<tr><td style="padding-right: 0 10px 0 10px;text-align: center;border: 1px dotted blue;"><b>S-JTSK</b></td><td style="text-align: right;border: 1px dotted blue;">' + Math.round(lonlat_102067.lon * 1000) / 1000 + '</td><td style="text-align: right;border: 1px dotted blue;">' + Math.round(lonlat_102067.lat * 1000) / 1000 + '</td></tr>'
                                        + '<tr><td style="padding-right: 0 10px 0 10px;text-align: center;border: 1px dotted blue;"><b>Google mercator</b></td><td style="text-align: right;border: 1px dotted blue;">' + Math.round(lonlat_900913.lon * 1000) / 1000 + '</td><td style="text-align: right;border: 1px dotted blue;">' + Math.round(lonlat_900913.lat * 1000) / 1000 + '</td></tr>'
                                        + '</table>'
                                }
                            });
                            popup.doLayout();
                            popup.show();
                        }
                    })
                ),
                xtype: 'tbbutton',
                map: mapPanel.getMap(),
                toggleGroup: "toolGroup", // toto je defaultný názov skupiny nástrojov (pan, zoomin, zoomout, ...) aj tento nástroj sem musím zaradiť, inak by sa nedeaktivoval po aktivácii iného nástroja
                group: "toolGroup",
                //checked: true,
                // button options
                enableToggle: true,
                //pressed: false,
                //allowDepress: true,
                tooltip: "kliknutím na mapu získaj súradnicu"
            })
        }
    },

    { type: "-" },

    {
        create: function (mapPanel, options) {
            return new Ext.Button({
                text: "Pridať vrstvu",
                tooltip: "Načítať lokálnu vrstvu (GeoJSON, KML, GPX)",
                handler: function () {
                    Heron.scratch.LocalLayerLoader.showDialog();
                }
            });
        }
    },

    { type: "-" },

    /*
        {type: "any", options: {
    //		xtype: 'tbbutton',
    text:'XY',
        listeners: {
            click: {
    //            element: 'el', //bind to the underlying el property on the panel
    //            fn: function(){ console.log('click el'); }
            fn: function(e){
    //var lonlat = map.getLonLatFromViewPortPx(e.xy);
        alert('s')}
            },}
    
        }
        },
    */
    /*
        {type: "featureinfo", options: {
            pressed: false,
            getfeatureControl: {
                hover: false,
                drillDown: false,
                maxFeatures: 10,
                eventListeners: {
                    getfeatureinfo: function (event) {
                    // Code here if you want to process the results
                    //alert("ah");
                    },
                    beforegetfeatureinfo: function(event) {
                        // Code here to set the content of queryableMapLayers
                        // The event object will contain xy of mouse click
                    },
                    nogetfeatureinfo: function(event) {
                        // Code here if no queryable layers are found
                    }
                },
            },
            popupWindow: {
                width: 300,
                height: 300,
                featureInfoPanel: {
                    autoConfig: true,
                    featureSelection: true,
                    showTopToolbar: true,
                    displayPanels: ['Table'],
    //				exportFormats: ['CSV', 'XLS', 'GMLv2', 'Shapefile', 'GeoJSON', 'WellKnownText'],
                    autoConfigMaxSniff: 10,
                    columnCapitalize: true,
                        maxFeatures: 10,
                    discardStylesForDups: true,
    // BUĎ takto:
                    gridCellRenderers: [
                        {
                            featureType: 'sci_slovakia_2011',
                            attrName : 'SITECODE',
                            renderer :
                            {
                                fn: Heron.widgets.GridCellRenderer.browserPopupLink,
    //fn : Heron.widgets.GridCellRenderer.directLink,
                                options :
                                {
                                    url: 'https://www.sopsr.sk/natura/index1.php?p=4&sec=5&kod={SITECODE}',
                                    hasAddressbar: false,
                                    hasScrollbars: true,
                                    isResizable: true,
                                    wSize: 400,
                                    hSize: 800,
                                    attrPreTxt: 'Detail: ',
                                    target: '_new'
                                }
                            }
                        },
    
                        {
                            featureType: 'spa_slovakia_2011',
                            attrName : 'SITECODE',
                            renderer :
                            {
                                fn: Heron.widgets.GridCellRenderer.browserPopupLink,
    //fn : Heron.widgets.GridCellRenderer.directLink,
                                options :
                                {
                                    url: 'https://www.sopsr.sk/natura/index1.php?p=4&sec=21&kod={SITECODE}',
                                    hasAddressbar: false,
                                    hasScrollbars: true,
                                    isResizable: true,
                                    wSize: 400,
                                    hSize: 900,
                                    attrPreTxt: 'Detail: ',
                                    target: '_new'
                                }
                            }
                        },
                        ]
    }}}},
    */
    { type: "pan" },
    { type: "zoomin" },
    { type: "zoomout" },
    { type: "zoomvisible" },
    { type: "-" },
    { type: "zoomprevious" },
    { type: "zoomnext" },
    { type: "-" },
    { type: "measurelength", options: { geodesic: true } },
    { type: "measurearea", options: { geodesic: true } },
    { type: "printdialog", options: { url: 'https://maps.sopsr.sk/print-servlet-1.2.1-GEORCHESTRA/pdf900913', showOutputFormats: true } },
    //	{type: "printdialog", options: {url: 'https://maps.sopsr.sk/print-servlet-2.0-SNAPSHOT/pdf900913', showOutputFormats: true}},
    { type: "-" },
    { type: "addbookmark" },
    /*
        {type: "-"},
        {type: "mapopen"},
        {type: "mapsave", options : {
            mime: 'text/xml',
            fileName: 'heron_map',
                fileExt: '.cml'
        }},
    */

    {
        type: "oleditor",
        options: {
            pressed: false,
            // Options for OLEditor
            olEditorOptions: {
                activeControls: [
                    'UploadFeature',
                    'DownloadFeature',
                    'Separator',
                    'Navigation',
                    'SnappingSettings',
                    'CADTools',
                    'Separator',
                    'DeleteAllFeatures',
                    'DeleteFeature',
                    'DragFeature',
                    'SelectFeature',
                    'Separator',
                    'DrawHole',
                    'ModifyFeature',
                    'Separator'
                ],
                featureTypes: ['text', 'regular', 'polygon', 'path', 'point'],
                language: 'en',
                DownloadFeature: {
                    url: Heron.globals.serviceUrl,
                    formats: [
                        { name: 'Well-Known-Text (WKT) (WGS84)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT' },
                        { name: 'Well-Known-Text (WKT, S-JTSK)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT', fileProjection: new OpenLayers.Projection('EPSG:102067') },
                        //				{name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: new OpenLayers.Format.GML.v2({featureType: 'oledit', featureNS: 'http://geops.de'})},
                        { name: 'GeoJSON (WGS84)', fileExt: '.geojson', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON' },
                        { name: 'GeoJSON (S-JTSK)', fileExt: '.geojson', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:102067') },
                        { name: 'GPS Exchange Format (GPX) (WGS84)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326') },
                        //                      	{name: 'GPS Exchange Format (GPX) (S-JTSK)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:5514')},
                        { name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326') },
                        //				{name: 'ESRI Shapefile (WGS84)', fileExt: '.zip', mimeType: 'application/zip', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'ESRI Shapefile', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                        //				{name: 'ESRI Shapefile (S-JTSK(oficiálny kľúč GKÚ pre SR))', fileExt: '.zip', mimeType: 'application/zip', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'ESRI Shapefile', fileProjection: new OpenLayers.Projection('EPSG:102067')},
                    ],
                    // For custom projections use Proj4.js
                    fileProjection: new OpenLayers.Projection('EPSG:4326')
                },

                UploadFeature: {
                    url: Heron.globals.serviceUrl,
                    formats: [
                        { name: 'Well-Known-Text (WKT) (WGS84)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT' },
                        { name: 'Well-Known-Text (WKT) (S-JTSK)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT', fileProjection: new OpenLayers.Projection('EPSG:102067') },
                        //				{name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML'},
                        //				{name: 'Geographic Markup Language - v3 (GML3)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML.v3'},
                        { name: 'GeoJSON (WGS84)', fileExt: '.geojson', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326') },
                        { name: 'GeoJSON (S-JTSK)', fileExt: '.geojson', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:102067') },
                        { name: 'GPS Exchange Format (GPX) (WGS84)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX' },
                        { name: 'GPS Exchange Format (GPX) (S-JTSK)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:102067') },
                        { name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML' },
                        //				{name: 'NEFUNKCNE, zastaraly GDAL: CSV (with X,Y) (WGS84)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                        // <-- struktura: prvy riadok: "X,Y", 2.riadok: "suradnica,suradnica", ..., neuploaduje, napriek tomu, ze je podla vzoru view-source:http://lib.heron-mc.org/heron/latest/examples/editorbasics/Config.js
                        //				{name: 'NEFUNKCNE, zastaraly GDAL: CSV (with X,Y) (S-JTSK)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:102067')},
                        { name: 'ESRI Shapefile (zip, WGS84)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON' },
                        { name: 'ESRI Shapefile (zip, S-JTSK(oficiálny kľúč GKÚ pre SR))', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:102067') },
                        //				{name: 'ESRI Shapefile (zip, S-JTSK(kľúč 2013 Bárta pre SR))', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:102067_2')},
                        //				{name: 'ESRI Shapefile (zip, S-JTSK(kľúč 2013 Bárta pre obe zeme ČR a SR))', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:102067_3')},
                        //				{name: 'ESRI Shapefile (zip, S-JTSK(oficiálny kľúč ČÚZK pre ČR))', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:102067_4')}
                    ],
                    // For custom projections use Proj4.js
                    fileProjection: new OpenLayers.Projection('EPSG:4326')
                }
            }
        }
    },

];


Heron.options.map.statusbar = [
    //    {type: "any", options:{xtype: 'tbtext', text: 'Podklad'}},
    //    {type: "baselayer"},
    //    {type: "-"} ,
    //    {type: "any", options:{xtype: 'tbtext', text: 'Mierka'}},
    { type: "scale" },
    { type: "-" },
    //    {type: "epsgpanel"},
    { type: "-" },
    //    {type: "->"} ,
    { type: "any", options: { xtype: 'tbtext', text: 'Lokalizácia' } },
    { type: "xcoord" },
    { type: "ycoord" },
    { type: "-" },
    { type: "measurepanel" }
];

Ext.namespace("Heron.options.map.settings");
Heron.options.map.settings = {
    //        projection: new OpenLayers.Projection("EPSG:3857"),
    projection: "EPSG:900913",
    //	projection: new OpenLayers.Projection("EPSG:4326"),
    displayProjection: new OpenLayers.Projection("EPSG:4326"),
    units: 'm',
    //       units: 'dd',
    //geodetic: true,
    //	numZoomLevels: 16,
    maxResolution: 156543.0339,
    //scales : [110936068.185464,55468034.0927321,27734017.0463661,13867008.523183,6933504.26159152,3466752.13079576,1733376.06539788,866688.03269894,433344.01634947,216672.008174735,108336.004087367,54168.0020436837,27084.0010218419,13542.0005109209,6771.00025546046,3385.50012773023],
    //	maxResolution: 'auto',
    maxExtent: new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508.34),
    //        maxExtent: new OpenLayers.Bounds(16.947418, 47.645264, 22.536908, 49.715254),
    center: '2181862.01954816,6240993.46345889',
    //	center: '21,48',
    xy_precision: 6,
    zoom: 9,
    theme: null,
    permalinks: {
        /** The prefix to be used for parameters, e.g. map_x, default is 'map' */
        paramPrefix: 'map',
        /** Encodes values of permalink parameters ? default false*/
        encodeType: false,
        /** Use Layer names i.s.o. OpenLayers-generated Layer Id's in Permalinks */
        prettyLayerNames: true
    },
    controls: [
        //new OpenLayers.Control.ExportMap()
        //SM, 03.03.2017 >
        new OpenLayers.Control.OverviewMap({
            autoActivate: true,
            maximized: true,
            layers: [
                //new OpenLayers.Layer.OSM(), // -> tato je predvolene, .. ALE taha na protokole http, a nie https
                new OpenLayers.Layer.OSM(
                    'OpenStreetMap'
                    , [
                        "https://a.tile.openstreetmap.org/${z}/${x}/${y}.png",
                        "https://b.tile.openstreetmap.org/${z}/${x}/${y}.png",
                        "https://c.tile.openstreetmap.org/${z}/${x}/${y}.png"
                    ]
                )
            ]

        }),
        //new OpenLayers.Control.Permalink(),
        new OpenLayers.Control.Attribution() // toto musi byt, ak chcem pouzit hodnotu attribution nastavenu v definicii vrstiev
        //,	new OpenLayers.Control.MousePosition()
    ]
};

/*
Ext.namespace("Heron.options.layertree");
Ext.namespace("Heron.options.map");
Ext.namespace("Heron.scratch");
Ext.namespace("Heron.layout");
*/



Ext.namespace("Heron.options.info");

Heron.options.info.html =
    '<div class="hr-html-panel-body">' +
    '<!--b>S-JTSK:</b>' +
    '<p style="margin: 0 0 0 10;"><a target="_blank" href="http://grass.fsv.cvut.cz/gwiki/S-JTSK#EPSG:5514.2FESRI:102067">EPSG:102067</a></p>' +
    '<p style="margin: 0 0 0 10;"><a target="_blank" href="http://grass.fsv.cvut.cz/gwiki/S-JTSK#Transforma.C4.8Dn.C3.AD_kl.C3.AD.C4.8De_a_software">Transformačné kľúče</a></p>' +
    '<hr-->' +
    '<!--b>Changelog:</b-->' +
    '<ul style="margin: 0 0 0 0;">' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>28.04.2022</b>' +
    '<br />UPDATE: "C parcely (od SKGEODESY pre ŠOP" (01.10.2021 -> 01.04.2022)' +
    '<br />UPDATE: "E parcely (od SKGEODESY pre ŠOP" (01.10.2021 -> 01.04.2022)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>17.01.2022</b>' +
    '<br /><u style="color:green; font-weight:bold;">UPDATE</u>: "Návrh etapy \"C+\" ÚEV"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>04.11.2021</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: vrstva "Pôsobnosť SIŽP - Ochrana prírody"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>18.10.2021</b>' +
    '<br />UPDATE: "C parcely (od SKGEODESY pre ŠOP" (26.02.2021 -> 01.10.2021)' +
    '<br />UPDATE: "E parcely (od SKGEODESY pre ŠOP" (26.02.2021 -> 01.10.2021)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>10.06.2020</b>' +
    '<br />DELETE: vrstva "Návrh PR Oborínsky luh"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>09.02.2020</b>' +
    '<br />UPDATE: "C parcely (od SKGEODESY pre ŠOP" (02.10.2020 -> 26.02.2021)' +
    '<br />UPDATE: "E parcely (od SKGEODESY pre ŠOP" (02.10.2020 -> 26.02.2021)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>18.01.2021</b>' +
    '<br />NEW: vrstva "EFP: CHKO Malé Karpaty"' +
    '<br />NEW: priečinok "RÔZNE"' +
    '<br />NEW: vrstva "Rybárske revíry"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>16.10.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">UPDATE</u>: "Návrh etapy \"C+\" ÚEV 2. fáza"' +
    '<br /><u style="color:green; font-weight:bold;">UPDATE</u>: "Návrh etapy \"C+\" ÚEV 1. fáza"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>13.10.2020</b>' +
    '<br />NEW: priečinok "Slovenský vodohospodársky podnik"' +
    '<br />NEW: vrstva "SVP - Vodné toky"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>09.10.2020</b>' +
    '<br />UPDATE: "C parcely (od SKGEODESY pre ŠOP" (26.06.2020 -> 02.10.2020)' +
    '<br />UPDATE: "E parcely (od SKGEODESY pre ŠOP" (26.06.2020 -> 02.10.2020)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>02.10.2020</b>' +
    '<br />NEW: vrstva "Návrh PR Oborínsky luh"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>28.09.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v ZASK (Žilinskom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>23.09.2020</b>' +
    '<br />UPDATE: "C parcely (od SKGEODESY pre ŠOP" (31.12.2019 -> 26.06.2020)' +
    '<br />UPDATE: "E parcely (od SKGEODESY pre ŠOP" (31.12.2019 -> 26.06.2020)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>07.08.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "Atribútový vyhľadávač"' +
    '<br />&nbsp;&nbsp;&nbsp;chránených území' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>16.07.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v BBSK (Banskobystrickom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>06.07.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v TNSK (Trenčianskom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>19.06.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v PSK (Prešovskom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>15.06.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v TTSK (Trnavskom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>11.06.2020</b>' +
    '<br />NEW: Klikateľný atribút "SITEID" vo vrstvách:' +
    '<br /><i>Územia európskeho významu</i>' +
    '<br /><i>Chránené vtáčie územia</i>' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>09.06.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v BSK (Bratislavskom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>02.06.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v NSK (Nitrianskom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>13.05.2020</b>' +
    '<br />NEW: vrstva "Chránené stromy v KSK (Košickom samosprávnom kraji)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>05.05.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "funkcionalita \"získaj XY\""' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>17.04.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "Návrh etapy \"C+\" ÚEV"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>16.04.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "Topografické mapy RETM (TM50, TM25)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>16.04.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "Základné mapy SR (ZM1000000 - ZM10000)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>16.04.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "ZBGIS"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>28.01.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "JPRL - 2018 (od NLC pre ŠOP)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>27.01.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "Atribútový vyhľadávač"' +
    '<br />&nbsp;&nbsp;&nbsp;JPRL (cez lesné celky)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>14.01.2020</b>' +
    '<br /><u style="color:green; font-weight:bold;">NEW</u>: "Atribútový vyhľadávač"' +
    '<br />&nbsp;&nbsp;&nbsp;JPRL (cez LHC)' +
    '<br />&nbsp;&nbsp;&nbsp;parcely KN-C' +
    '<br />&nbsp;&nbsp;&nbsp;parcely KN-E' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>09.01.2020</b>' +
    '<br />UPDATE: "C parcely (od SKGEODESY pre ŠOP" (28.09.2019 -> 31.12.2019)' +
    '<br />UPDATE: "E parcely (od SKGEODESY pre ŠOP" (28.09.2019 -> 31.12.2019)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>14.11.2019</b>' +
    '<br />NEDOSTUPNÉ: <a href="https://gis.nlcsk.org/arcgis/rest/services/" target="_new">WMS od NLC</a>' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>04.07.2018</b>' +
    '<br />UPDATE: "Maloplošné chránené územia" (jan. 2018 -> júl 2018)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>30.01.2018</b>' +
    '<br />NEW: vrstva "Hlucháň - NP Muránska planina"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>22.01.2018</b>' +
    '<br />NEW: vrstva "Zonácia (PIENAP)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>09.01.2018</b>' +
    '<br />UPDATE: "Maloplošné chránené územia" (dec. 2017 -> jan. 2018)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>12.12.2017</b>' +
    '<br />UPDATE: "RAMSAR lokality" (nov. 2017)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>12.12.2017</b>' +
    '<br />UPDATE: "Maloplošné chránené územia" (okt. 2017 -> dec. 2017)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>12.12.2017</b>' +
    '<br />UPDATE: "Veľkoplošné chránené územia" (sep. 2016 -> dec. 2017)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>21.11.2017</b>' +
    '<br />UPDATE: "Územia európskeho významu - C etapa"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>10.09.2017</b>' +
    '<br />UPDATE: "Maloplošné chránené územia" (aug. 2017 -> okt. 2017)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>14.09.2017</b>' +
    '<br />UPDATE: "Veľkoplošné chránené územia" (apr. 2016 -> sep. 2017)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>11.09.2017</b>' +
    '<br />UPDATE: "Územia európskeho významu - C etapa"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>25.08.2017</b>' +
    '<br />UPDATE: "Maloplošné chránené územia" (feb. 2017 -> aug. 2017)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>06.03.2017</b>' +
    '<br />NEW: vrstva "Gridy" -> "GRID: 50x50 km"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>03.03.2017</b>' +
    '<br />NEW: vrstva "Základné mapy" -> "Digitálny model reliéfu"' +
    '<br />NEW: vrstva "Základné mapy" -> "Tieňovaný reliéf"' +
    '<br />NEW: nahľadová mapka (OverviewMap) v rohu mapy"' +
    '<br />NEW: zobrazovanie copyright-u podľa aktívnej vrstvy' +
    '<br />UPDATE: "Maloplošné chránené územia" (jan. 2016 -> feb. 2017)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>21.02.2017</b>' +
    '<br />NEW: vrstva "Zonácia (CHKO Horná Orava)"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>18.02.2017</b>' +
    '<br />NEW: vrstva "Porastová mapa" (NLCSK.org)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>08.02.2017</b>' +
    '<br />NEW: priečinok "GLOBALFORESTWATCH.org" s vrstvami' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>05.11.2016</b>' +
    '<br />NEW: vrstva "Biogeografické regióny"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>03.11.2016</b>' +
    '<br />NEW: vrstva "Územia európskeho významu - C etapa"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>27.04.2016</b>' +
    '<br />NEW: priečinok "Dočasné" (viditeľný len v ŽPNET-e)' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>19.04.2016</b>' +
    '<br />NEW: vrstva "Európsky diplom pre chr. územia"' +
    '<br />NEW: vrstva "Chránené stromy"' +
    '<br />UPDATE: "Chránené vtáčie územia"' +
    '<br />UPDATE: "Maloplošné chránené územia"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>12.04.2016</b>' +
    '<br />NEW: priečinok <i>"SKGEODESY.sk"</i> s vrstvami' +
    '<br />UPDATE: "Maloplošné chránené územia"' +
    '</li>' +
    '<li style="padding-left: 1.28em; text-indent: -1.28em;">' +
    '<b>11.04.2016</b>' +
    '<br />NEW: podpriečinok <i>"Základné vrstvy" -> "Ochrana prírody" -> Územia medzinárodného významu</i>' +
    '</li>' +
    '</ul>' +
    '</div>';

Ext.namespace("Heron.options.bookmarks");
Heron.options.bookmarks =
    [
    ];


//Ext.namespace("Heron.layout");
Heron.layout = {
    xtype: 'panel',
    //	title: 'Nová mapa',
    id: 'hr-container-main',
    layout: 'border',
    items: [
        {
            xtype: 'panel',

            id: 'hr-menu-left-container',
            layout: 'accordion',
            region: "west",
            width: 300,
            collapsible: true,
            split: true,
            border: false,
            items: [

                {
                    xtype: 'hr_layertreepanel',
                    id: 'hr-layer-tree',
                    flex: 4,
                    contextMenu: [
                        {
                            xtype: 'hr_layernodemenulayerinfo'
                        },
                        {
                            xtype: 'hr_layernodemenuzoomextent'
                        },
                        {
                            xtype: 'hr_layernodemenuopacityslider'
                        }
                    ],
                    hropts: Heron.options.layertree,
                    collapsed: false
                },
                {
                    xtype: 'hr_htmlpanel',
                    id: 'hr-info-west',
                    html: Heron.options.info.html,
                    preventBodyReset: true,
                    //					title: 'Informácie'
                    title: 'ČO NOVÉHO (u nás doma)',
                    autoScroll: true,
                    collapsed: false
                },
                {
                    xtype: 'hr_bookmarkspanel',
                    id: 'hr-bookmarks',
                    hropts: Heron.options.bookmarks
                },
                /*
                                {
                                    xtype: 'hr_contextbrowserpanel',
                                    id: 'hr-contextbrowser',
                title: 'Zalozky',
                //					hropts: Heron.options.contextbrowser 
                                }
                */
            ]
        },
        {
            xtype: 'panel',
            //			title: 'Mapový prehliadač <a href="https://www.sopsr.sk/" target="_blank">Štátnej ochrany prírody SR</a><br /><a href="https://sk.wikipedia.org/wiki/Open_source" target="_blank">Open source</a> mapový framework: <a href="http://heron-mc.org/" target="_blank">Heron Mapping Client (MC)</a> šírený pod licenciou <a href="http://www.gnu.org/licenses/gpl.html" target="_blank">GNU GPL v3</a>',
            title: '<table>' +
                '<tr>' +
                '<td style="font-size: small;">' +
                'Mapový prehliadač <a href="https://www.sopsr.sk/" target="_blank">Štátnej ochrany prírody SR</a> pre vás prevádzkuje <u style="color: blue;">Tím Odboru správy dát a GIS</u>' +
                '<br />' +
                '<div style="margin-top:5px;"><a href="https://sk.wikipedia.org/wiki/Open_source" target="_blank">Open source</a> mapový framework: <a href="http://heron-mc.org/" target="_blank">Heron Mapping Client (MC)</a> šírený pod licenciou <a href="http://www.gnu.org/licenses/gpl.html" target="_blank">GNU GPL v3</a></div>' +
                '</td>' +
                //				  '</tr><tr>' +
                '<td align="center" width="25%" style="vertical-align: bottom;">' +
                //				    '<td style="text-align: center; vertical-align: middle;">' +
                '<b style="text-transform: uppercase; color: red;">mapa nie je použiteľná<br />na právne úkony</b>' +
                '</td>' +
                '</tr>' +
                '</table>',
            id: 'hr-map-and-info-container',
            layout: 'border',
            region: 'center',
            width: '100%',
            collapsible: true,
            split: true,
            border: false,
            items: [
                {
                    xtype: 'hr_mappanel',
                    id: 'hr-map',
                    region: 'center',
                    collapsible: false,
                    border: false,
                    /*
                                                hropts: {
                                            settings: Heron.options.map.settings,
                                            layers: Heron.options.map.layers,
                                            toolbar: Heron.options.map.toolbar
                                            }
                    */
                    hropts: Heron.options.map
                },
                /*
                                {
                                    xtype: 'hr_featureinfopanel',
                                    id: 'hr-feature-info',
                                    region: "south",
                                    border: true,
                                    collapsible: true,
                                    collapsed: true,
                                    height: 180,
                                    split: true,
                                    maxFeatures: 10,
                                    exportFormats: ['CSV', 'XLS', 'WellKnownText', 'GMLv2', 'GeoJSON'],
                showGeometries: true,
                featureSelection: true,
                                            gridCellRenderers: [
                                    {
                //						featureType: 'sci_slovakia_2011',
                                        featureType: 'skuev',
                                        attrName : 'SITEID',
                                        renderer :
                                        {
                                            fn: Heron.widgets.GridCellRenderer.browserPopupLink,
                //fn : Heron.widgets.GridCellRenderer.directLink,
                                            options :
                                            {
                //								url: 'https://www.sopsr.sk/natura/index1.php?p=4&sec=5&kod={SITECODE}',
                                                url: 'https://www.sopsr.sk/natura/index1.php?p=4&sec=5&kod={KOD}',
                                                hasAddressbar: false,
                                                hasScrollbars: true,
                                                isResizable: true,
                                                wSize: 400,
                                                hSize: 800,
                                                attrPreTxt: 'Detail: ',
                                                target: '_new'
                                            }
                                        }
                                    },
                
                                    {
                //						featureType: 'spa_slovakia_2011',
                                        featureType: 'chvu',
                                        attrName : 'SITECODE',
                                        renderer :
                                        {
                                            fn: Heron.widgets.GridCellRenderer.browserPopupLink,
                //fn : Heron.widgets.GridCellRenderer.directLink,
                                            options :
                                            {
                                                url: 'https://www.sopsr.sk/natura/index1.php?p=4&sec=21&kod={SITECODE}',
                                                hasAddressbar: false,
                                                hasScrollbars: true,
                                                isResizable: true,
                                                wSize: 400,
                                                hSize: 900,
                                                attrPreTxt: 'Detail: ',
                                                target: '_new'
                                            }
                                        }
                                    },
                                    ]
                                }
                */
            ]
        },
        {
            xtype: 'panel',

            id: 'hr-menu-right-container',
            //			layout: 'accordion',
            layout: 'vbox',
            layoutConfig: {
                align: 'stretch',
                pack: 'start'
            },
            region: "east",
            width: 340,
            collapsible: true,
            split: true,
            border: true,
            items: [
                /*
                                {
                                    xtype: 'hr_activelayerspanel',
                                    height: 240,
                                    flex: 3,
                                    hropts: {
                                        // Defines the custom component added under the standard layer node.
                                        component : {
                                            xtype: "gx_opacityslider",
                                            showTitle: false,
                                            plugins: new GeoExt.LayerOpacitySliderTip(),
                                            width: 160,
                                            inverse: false,
                                            aggressive: false,
                                            style: {
                                                marginLeft: '18px'
                                            }
                                        }
                                    }
                                },
                */
                {
                    xtype: 'hr_activethemespanel',
                    //					title: 'Aktívne vrstvy',
                    height: 450,
                    collapsible: true,
                    flex: 3,
                    contextMenu: [
                        {
                            xtype: 'hr_layernodemenulayerinfo'
                        },
                        {
                            xtype: 'hr_layernodemenuzoomextent'
                        },
                        {
                            xtype: 'hr_layernodemenuopacityslider'
                        }
                    ],
                    hropts: {
                        // Defines the custom components added with the standard layer node.
                        showOpacity: true, // true - layer opacity icon / function
                        showTools: false, // true - layer tools icon / function (not jet completed)
                        showRemove: false        // true - layer remove icon / function
                    }
                },
                {
                    xtype: 'hr_layerlegendpanel',
                    id: 'hr-layerlegend-panel',
                    height: 500,
                    collapsible: true,
                    defaults: {
                        useScaleParameter: false,
                        baseParams: {
                            // Override default image/gif in WMS GetLegendGraphic
                            FORMAT: 'image/png'
                        }
                    },
                    hropts: {
                        // Preload Legends on initial startup
                        // Will fire WMS GetLegendGraphic's for WMS Legends
                        // Otherwise Legends will be loaded only when Layer
                        // becomes visible. Default: false
                        prefetchLegends: false
                    }
                },

            ]
        }


    ]
};