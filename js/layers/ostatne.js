OpenLayers.Util.extend(Heron.scratch.layermap, {

    migracne_bariery: new OpenLayers.Layer.WMS(
        "Migračné biotopy",
        'https://maps.sopsr.sk/wms-migracnebariery/service?',
        { layers: "VsetkyMigracneVrstvy", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage", version: '1.1.1'/*, srs: new OpenLayers.Projection("EPSG:4326"), projection: new OpenLayers.Projection("EPSG:3857")*/ },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>', maxScale: 3000 }
    ),
    /*
        migracne_bariery_rastre: new OpenLayers.Layer.WMS(
            "Migračné obmedzenia a migračné koridory",
            'https://maps.sopsr.sk/wms-migracnebariery/service?',
            {layers: "MigracneObmedzeniaMigracneKoridory", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage"},
            {isBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'}
        ),
    */
    //VLSM 3.8.2023
    konsolidovane_UEV: new OpenLayers.Layer.WMS(
        "Konsolidované UEV",
        'https://maps.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "sopsr:UEV_konsolidovane", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage" },
        { isBaseLayer: false, visibility: false, hideInLegend: false, opacity: 0.5, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR,2022</a></span>' }
    ),

    //VLSM 28.4.2023
    //VLSM 28.2.2023
    /*navrhovane_rozsirenie_UEV: new OpenLayers.Layer.WMS(
            "Navrhované rozšírenie UEV",
            'https://maps.sopsr.sk/geoserver/sopsr/ows?',
            {layers: "sopsr:navrhovane_rozsirenie_UEV", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage"},
            {isBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR,2022</a></span>'}
        ),
    
    navrhovane_zmeny_stupna_ochrany_UEV: new OpenLayers.Layer.WMS(
            "Navrhované zmeny stupňa ochrany UEV",
            'https://maps.sopsr.sk/geoserver/sopsr/ows?',
            {layers: "sopsr:navrhovane_zvysenie_STO_v_UEV", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage"},
            {isBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR,2022</a></span>'}
        ),
    */
    //VLSM 16.2.2023
    prvky_RUSES_genofondove_lokality_CHKO_kysuce: new OpenLayers.Layer.WMS(
        "Genofondové lokality - CHKO Kysuce",
        'https://maps.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "sopsr:Genofondove_lokality", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage" },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sazp.sk">SAŽP,</a> <a target="_blank" href="https://www.sopsr.sk">ŠOP SR,2022</a></span>' }
    ),

    prvky_RUSES_biocentra_CHKO_kysuce: new OpenLayers.Layer.WMS(
        "Biocentrá - CHKO Kysuce",
        'https://maps.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "sopsr:Biocentra", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage" },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sazp.sk">SAŽP,</a> <a target="_blank" href="https://www.sopsr.sk">ŠOP SR,2022</a></span>' }
    ),

    prvky_RUSES_biokoridory_CHKO_kysuce: new OpenLayers.Layer.WMS(
        "Biokoridory - CHKO Kysuce",
        'https://maps.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "sopsr:Biokoridory", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage" },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sazp.sk">SAŽP,</a> <a target="_blank" href="https://www.sopsr.sk">ŠOP SR,2022</a></span>' }
    ),

    migracne_bariery_rastre_migracne_koridory: new OpenLayers.Layer.WMS(
        "Migračné koridory",
        'https://maps.sopsr.sk/wms-migracnebariery/service?',
        { layers: "MigracneKoridory", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage" },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    migracne_bariery_rastre_migracne_obmedzenia: new OpenLayers.Layer.WMS(
        "Migračné obmedzenia",
        'https://maps.sopsr.sk/wms-migracnebariery/service?',
        { layers: "MigracneObmedzenia", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage" },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    ekosystemy: new OpenLayers.Layer.WMS(
        'Ekosystémy',
        'https://maps.sopsr.sk/wms-ekosystemy/service?',
        { layers: "Ekosystemy", format: "image/png", transparent: true, exceptions: "application/vnd.ogc.se_inimage" },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", singleTile: true, ratio: 1, projection: new OpenLayers.Projection("EPSG:3857"), opacity: 0.8, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>', maxScale: 5000 }
        /*
                'http://192.168.70.105:8095/tms/',
                {layername: 'Ekosystemy/grid_kims_webgis_5514', isBaseLayer: false, type: 'png',tileSize: new OpenLayers.Size(256, 256),
        //		    resolutions: [529.167725002, 264.583862501, 132.291931251, 52.9167725002,26.4583862501, 13.2291931251, 6.61459, 2.64583862501, 1.32291931251, 0.529167725002,0.264583862501]
                    resolutions:[76.43702827148438,38.21851413574219,19.109257067871095,9.554628533935547,4.777314266967774]
                },
        */
    ),

    orog: new OpenLayers.Layer.WMS(
        "Geomorfologické jednotky",
        'http://gis.geology.sk/arcgis/services/WMS/GMC/MapServer/WMSServer?VERSION=1.3.0',
        { layers: "0,1", format: "image/png", transparent: true, crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.wms_xml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.geology.sk">Štátny geologický ústav Dionýza Štúra</a></span>', projection: 'EPSG:3857' }
    ),
    //SM, 15.11.2016 >>>
    bioregiony: new OpenLayers.Layer.WMS(
        "Biogeografické regióny",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "IG_BIOGEOGRAPHIC_REGION", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 15.11.2016 <<<

    chvu: new OpenLayers.Layer.WMS(
        "Chránené vtáčie územia",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "IG_vPROTECTEDSITES_CHVU", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    skuev: new OpenLayers.Layer.WMS(
        "Územia európskeho významu",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        //		{layers: "IG_vPROTECTEDSITES_UEV,IG_UEV_ANNO", format: "image/png", transparent: true},
        { layers: "IG_vPROTECTEDSITES_UEV", format: "image/png", transparent: true },
        //		{layers: "sk_uev", format: "image/png", transparent: true, srs: 'EPSG:900913'},
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    /*
        skuev_D: new OpenLayers.Layer.Vector(
            "Návrh C+ etapy ÚEV",
            { 
                strategies: [new OpenLayers.Strategy.Fixed()],
                projection: new OpenLayers.Projection('EPSG:4326'),
                visibility: false,
    //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
                protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/uev_detapa_1faza_so.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 2
                })
                }),
                styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                    label: "${label_vlastny}"
    //				title: "pokus${UEV_NAZOV}" // nefunguje
                    ,strokeColor: "red"
                    ,fontColor: "#FF0916"
                    ,fontSize: "9px"
                    ,fontWeight: "bold"
                    ,labelAlign: "center"
    //				,strokeColor: "#FF0916"
                    ,fillColor: "#FFFFFF"
                    ,fillOpacity: 0
                    ,fontFamily: "Courier New, monospace"
                    ,labelAlign: "cb"
    //				,labelYOffset: 25
                    ,labelOutlineColor: "white"
                    ,labelOutlineWidth: 3
                    },
                    {
                    context: {
                        label_vlastny:function(feature) {
                            if(feature.attributes['UEV_NAZOV']) {
    //							return feature.attributes.UEV_NAZOV;
                                text = feature.attributes.UEV_NAZOV;
                                // medzery nahradím novým riadkom
                                return text.split(" ").join("\n");
                            }
                            else {
                                return '';
                            }
                        }
                    }
                    }
                )
                })
            }
        ),
    */

    /*
        skuev_D_1: new OpenLayers.Layer.WMS(
            "návrh C+ etapa ÚEV 1. fáza",
            'https://www.sopsr.sk/geoserver/pracovne/ows?',
            {
                layers: "UEV_d_etapa_1faza"
                ,format: "image/png"
                ,transparent: true
            },
            {
                isBaseLayer: false
                ,visibility: false
                ,hideInLegend: false
                ,featureInfoFormat: "application/vnd.ogc.gml"
                ,attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
            }
        ),
    
        skuev_D_2: new OpenLayers.Layer.WMS(
            "návrh C+ etapa ÚEV 2. fáza",
            'https://www.sopsr.sk/geoserver/pracovne/ows?',
            {
                layers: "UEV_d_etapa_2faza"
                ,format: "image/png"
                ,transparent: true
            },
            {
                isBaseLayer: false
                ,visibility: false
                ,hideInLegend: false
                ,featureInfoFormat: "application/vnd.ogc.gml"
                ,attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
            }
        ),
    */

    /*	skuev_C_plus: new OpenLayers.Layer.WMS(
            "C+ etapa ÚEV - návrh",
            'https://www.sopsr.sk/geoserver/pracovne/ows?',
            {
                layers: "C_plus_etapa_UEV"
                ,format: "image/png"
                ,transparent: true
            },
            {
                isBaseLayer: false
                ,visibility: false
                ,hideInLegend: false
                ,featureInfoFormat: "application/vnd.ogc.gml"
                ,attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
            }
        ),
    */

    vchu: new OpenLayers.Layer.WMS(
        "Veľkoplošné chránené územia",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        {
            layers: "sopsr:IG_vPROTECTEDSITES_VCHU"
            , format: "image/png"
            , transparent: true
            , version: '1.1.1'
            //			,crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false
            , visibility: false
            , hideInLegend: false
            , featureInfoFormat: "application/vnd.ogc.gml"
            , attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
            /*			,metadata: {
                            wfs: {
                                protocol: 'fromWMSLayer',
                            }
                        }
            */
        }
    ),
    /*
                    'https://maps.sopsr.sk/geoserver/ows?',
                    {layers: "zonacia_pienap", format: "image/png", transparent: true},
                    {iisBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'}
    */
    mchu: new OpenLayers.Layer.WMS(
        "Maloplošné chránené územia",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "IG_vPROTECTEDSITES_MCHU", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    degree: new OpenLayers.Layer.WMS(
        "Stupne ochrany",
        'https://www.sopsr.sk/geoserver/sz/wms?',
        { layers: "sz:sz_protection_degree", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    /*
        chu: new OpenLayers.Layer.WMS(
            "Chránené územia",
            'https://www.sopsr.sk/geoserver/sopsr/ows?',
            {layers: "IG_PROTECTEDSITES", format: "image/png", transparent: true},
            {displayInLayerSwitcher: false, isBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'}
        ),
    */
});