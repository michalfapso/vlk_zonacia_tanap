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
    mchu_chkola: new OpenLayers.Layer.WMS(
        "MCHÚ - CHKO Latorica",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "mchu_chko_latorica", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    //SM, 23.01.2020 >>>
    /*	mchu_pr_pralesy: new OpenLayers.Layer.WMS(
            "MCHÚ - PR Pralesy",
            'https://maps.sopsr.sk/geoserver/ows?',
            {layers: "pr_pralesy", format: "image/png", transparent: true},
            {isBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'}
        ),
    */
    //SM, 23.01.2020 <<<
    /*
        mchu_zahorie: new OpenLayers.Layer.WMS(
            "MCHÚ - CHKO Záhorie",
            'https://maps.sopsr.sk/geoserver/ows?',
            {layers: "mchu_chko_zahorie", format: "image/png", transparent: true},
            {isBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'}
        ),
    */
    mchu_zahorie_stupne: new OpenLayers.Layer.WMS(
        "MCHÚ - CHKO Záhorie (stupne ochr.)",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "mchu_chko_zahorie_st_ochr", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    //SM, 11.01.2018 >>>
    chkobk_cha_tematinskevrchy_zony: new OpenLayers.Layer.WMS(
        "CHA Tematinske vrchy - zony",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "chkobk_cha_tematinske-vrchy_zony", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 11.01.2018 <<<

    //SM, 24.02.2020 <<<
    //SM, 23.11.2020 >>>
    np_muranskaplanina_nahodne_tazby: new OpenLayers.Layer.WMS(
        "NP Muránska planina - náhodné ťažby",
        'https://www.sopsr.sk/geoserver/pracovne/ows?',
        { layers: "nahodne_tazby", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 23.11.2020 <<<

    ramsar: new OpenLayers.Layer.WMS(
        "Ramsarské lokality",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "sopsr:IG_vPROTECTEDSITES_RAMSAR", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    europsky_diplom: new OpenLayers.Layer.WMS(
        "Európsky diplom pre chránené územia",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "europsky_diplom", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml" }
    ),

    biosfericke_rezervacie: new OpenLayers.Layer.WMS(
        "Biosférické rezervácie",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "IG_vPROTECTEDSITES_BIOSFERICKE_REZERVACIE", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    unesco: new OpenLayers.Layer.WMS(
        "Lokality svetového dedičstva UNESCO",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "IG_vPROTECTEDSITES_UNESCO", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    //19.09.2016 >>>
    ozprales_pralesy: new OpenLayers.Layer.WMS(
        "Pralesy",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "pralesy", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.pralesy.sk">OZ Prales</a></span>' }
    ),

    ozprales_pralesy_zvysky: new OpenLayers.Layer.WMS(
        "Pralesy - zvyšky",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "pralesy_zvysky", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.pralesy.sk">OZ Prales</a></span>' }
    ),
    //19.09.2016 <<<

    grid_kmsiet: new OpenLayers.Layer.WMS(
        'GRID: KM-sieť',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "gis_klad_kmsiet", format: "image/png", transparent: true },
        {
            isBaseLayer: false,
            visibility: false,
            group: 'GRIDY/SK',
            featureInfoFormat: "application/vnd.ogc.gml",
            maxScale: 1000,
            minScale: 20000
            , attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
        }
    ),

    grid_kmsiet_3a4pasmo: new OpenLayers.Layer.WMS(
        'GRID: KM-sieť: 3.,4. pásmo',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "kmsiet_3a4pasmo", format: "image/png", transparent: true },
        {
            isBaseLayer: false,
            visibility: false,
            group: 'GRIDY/SK',
            featureInfoFormat: "application/vnd.ogc.gml",
            maxScale: 1000,
            minScale: 20000,
            attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
        }
    ),

    grid_dfs: new OpenLayers.Layer.WMS(
        'GRID: DFS',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "gis_klad_dfs", format: "image/png", transparent: true, projection: 'EPSG:900913', version: '1.1.1', srs: 'EPSG:4326' },
        {
            isBaseLayer: false, visibility: false, group: 'GRIDY/SK', featureInfoFormat: "application/vnd.ogc.gml", opacity: 0.3
            , metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            , xy: ["EPSG:4326"], srs: 'EPSG:4326'
        }
    ),

    grid_klad_5000: new OpenLayers.Layer.WMS(
        'GRID: 5000',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "klad_5000", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, group: 'GRIDY/SK', featureInfoFormat: "application/vnd.ogc.gml", minScale: 600000 }
    ),

    grid_klad_10000: new OpenLayers.Layer.WMS(
        'GRID: 10000',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "gis_klad_10000", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, group: 'GRIDY/SK', featureInfoFormat: "application/vnd.ogc.gml", minScale: 1100000 }
    ),

    grid_klad_25000: new OpenLayers.Layer.WMS(
        'GRID: 25000',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "gis_klad_25000", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, group: 'GRIDY/SK', featureInfoFormat: "application/vnd.ogc.gml" }
    ),

    grid_klad_50000: new OpenLayers.Layer.WMS(
        'GRID: 50000',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "klad_50000", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, group: 'GRIDY/SK', featureInfoFormat: "application/vnd.ogc.gml" }
    ),

    grid_etrs100: new OpenLayers.Layer.WMS(
        'GRID: ETRS 100km',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "sk_100km", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, group: 'GRIDY/SK', featureInfoFormat: "application/vnd.ogc.gml" }
    ),

    grid_etrs10: new OpenLayers.Layer.WMS(
        "GRID: ETRS 10km",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "sk_10km", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", minScale: 2200000 }
    ),

    grid_etrs1: new OpenLayers.Layer.WMS(
        'GRID: ETRS 1km',
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "sk_1km", format: "image/png", transparent: true },
        {
            isBaseLayer: false,
            visibility: false,
            group: 'GRIDY/SK',
            featureInfoFormat: "application/vnd.ogc.gml",
            maxScale: 1000,
            minScale: 300000
        }
    ),

    /*
            grid_etrs1: new OpenLayers.Layer.WMTS(
            {
                name: 'GRID: ETRS 1km',
                url: 'https://maps.sopsr.sk/geoserver/gwc/service/wmts',
                layer: "sk_1km",
                    matrixSet: "EPSG:900913",
                    matrixIds: matrixIds,
                    format: "image/png",
                    style: "_null",
                    opacity: 0.7,
                    isBaseLayer: false
            }
        ),
    */

    sop_posobnost: new OpenLayers.Layer.WMS(
        "Pôsobnosť ŠOP SR",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "sopsr:IG_COMPETENCE", format: "image/png", transparent: true },
        {
            isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
            //SM, 13.01.2020, aby sa zobrazila v hr_gxpquerypanel-i >>>
            , metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                }
            }
            //SM, 13.01.2020 <<<
        }
    ),

    ztmh_posobnost: new OpenLayers.Layer.WMS(
        "Pôsobnosť ZTMH",
        'https://maps.sopsr.sk/server/services/Server/Zasahovy_tim/MapServer/WMSServer?',
        { layers: "gis.portaluser2.zasahovy_tim,gis.portaluser2.zasahovy_tim_sidla", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: false, visibility: false, hideInLegend: false, singleTile: true, projection: new OpenLayers.Projection("EPSG:3857"), featureInfoFormat: "application/vnd.ogc.wms_xml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
            //SM, 13.01.2020, aby sa zobrazila v hr_gxpquerypanel-i >>>
            , metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                }
            }
            //SM, 13.01.2020 <<<
        }
    ),
    sizp_posobnost: new OpenLayers.Layer.WMS(
        "Pôsobnosť SIŽP - Ochrana prírody",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "sopsr:sizp_posobnosti", format: "image/png", transparent: true },
        {
            isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
            , metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                }
            }
        }
    ),

    kims_tml: new OpenLayers.Layer.WMS(
        'Trvalé monitorovacie lokality',
        //		'http://192.168.70.105:6081/arcgis/services/TML_Base_TML/MapServer/WMSServer?',
        'https://arcgis-kims.sopsr.sk/arcgis/services/TML_Base_TML/MapServer/WMSServer?',
        //		'https://gis.sopsr.sk/wms',
        { layers: "0", format: "image/png", transparent: true, version: '1.3.0', srs: 'EPSG:102067' },
        //		{layers: "TML", format: "image/png", transparent: true, version: '1.3.0', srs: 'EPSG:102067'},
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>', opacity: 0.6 }
        //		{isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>', opacity:0.6 }
    ),

    kims_tml_bot: new OpenLayers.Layer.WMS(
        'Trvalé monitorovacie lokality - botanické',
        'https://www.sopsr.sk/geoserver/sopsr/wms',
        { layers: "sopsr:tml_botanical", format: "image/png", transparent: true, version: '1.3.0', srs: 'EPSG:5514' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:3857', attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>', opacity: 0.6 }),
    kims_tml_hab: new OpenLayers.Layer.WMS(
        'Trvalé monitorovacie lokality - biotopové',
        'https://www.sopsr.sk/geoserver/sopsr/wms',
        { layers: "sopsr:tml_habitat", format: "image/png", transparent: true, version: '1.3.0', srs: 'EPSG:5514' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:3857', attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>', opacity: 0.6 }),
    kims_tml_zoo: new OpenLayers.Layer.WMS(
        'Trvalé monitorovacie lokality - zoologické',
        'https://www.sopsr.sk/geoserver/sopsr/wms',
        { layers: "sopsr:tml_zoological", format: "image/png", transparent: true, version: '1.3.0', srs: 'EPSG:5514' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:3857', attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>', opacity: 0.6 }),
    nlc_sop_jprl_2017: new OpenLayers.Layer.WMS(
        'JPRL - 2017 (od NLC pre ŠOP)',
        'https://gis.sopsr.sk/wms',
        { layers: "nlc_jprl_2017", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:5514', maxScale: 0, minScale: 150000, attribution: '<span>&copy; <a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen, 2017</a></span>' }
    ),

    nlc_sop_jprl_2018: new OpenLayers.Layer.WMS(
        'JPRL - 2018 (od NLC pre ŠOP)',
        'https://gis.sopsr.sk/wms',
        { layers: "nlc_jprl_2018", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:5514', maxScale: 0, minScale: 150000, attribution: '<span>&copy; <a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen, 2018 (aktuálne k 31.12.2018)</a></span>' }
    ),
    /*
    //	lvu_nlcsk_porastova: new OpenLayers.Layer.ArcGISCache(
        lvu_nlcsk_porastova: new OpenLayers.Layer.WMS(
            'Porastová mapa',
            'http://192.168.125.90:8080/service',
            {layers: "PorastovaMapa", format: "image/png", transparent: true},
            {isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:102067', maxScale:0, minScale:2000000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
        ),
    */
    nlc_lhc: new OpenLayers.Layer.WMS(
        'Lesné hospodárske celky',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/LHC/MapServer/WMSServer?',
        //		{layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
        'https://www.nlcsk.org/arcgis/services/InspireWMS/lhc_wms/MapServer/WMSServer?',
        { layers: "AM.ForestManagementArea", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 5000000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_lo: new OpenLayers.Layer.WMS(
        'Lesné oblasti',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/LesneOblasti/MapServer/WMSServer?',
        //		{layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
        'https://www.nlcsk.org/arcgis/services/Inspire/LesneOblasti/MapServer/WMSServer?',
        { layers: "LC.LandCoverSurfaces", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 2000000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_tmp: new OpenLayers.Layer.WMS(
        'Trvalé monitorovacie plochy',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/TMP/MapServer/WMSServer?',
        'https://www.nlcsk.org/arcgis/services/Inspire/TMP/MapServer/WMSServer?',
        { layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_tvp: new OpenLayers.Layer.WMS(
        'Trvalé výskumné plochy',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/TVP/MapServer/WMSServer?',
        'https://www.nlcsk.org/arcgis/services/Inspire/TVP/MapServer/WMSServer?',
        { layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_tokysr: new OpenLayers.Layer.WMS(
        'Vodné toky',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/TokySR/MapServer/WMSServer?',
        'https://www.nlcsk.org/arcgis/services/Inspire/TokySR/MapServer/WMSServer?',
        { layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 500000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_podnetypy: new OpenLayers.Layer.WMS(
        'Lesné pôdne typy',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/PodneTypy/MapServer/WMSServer?',
        'https://www.nlcsk.org/arcgis/services/Inspire/PodneTypy/MapServer/WMSServer?',
        //		{layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
        { layers: "SO.SoilBody", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 70000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_lestypy: new OpenLayers.Layer.WMS(
        'Lesné typy',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/LesneTypy/MapServer/WMSServer?',
        'https://www.nlcsk.org/arcgis/services/Inspire/LesneTypy/MapServer/WMSServer?',
        //		{layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
        { layers: "LC.LandCoverSurfaces", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 70000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_lescesty: new OpenLayers.Layer.WMS(
        'Lesné cesty',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/LesneCesty/MapServer/WMSServer?',
        'https://www.nlcsk.org/arcgis/services/Inspire/LesneCesty/MapServer/WMSServer?',
        //		{layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
        { layers: "0,1,2", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 500000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_jprl: new OpenLayers.Layer.WMS(
        'Jednotky priestorového rozdelenia lesa',
        //		'https://gis.sopsr.sk/wms',
        'https://www.nlcsk.org/arcgis/services/InspireWMS/jprl_wms/MapServer/WMSServer?',
        {
            //		    layers: 'nlc_jprl'
            //SM, 19.02.2021 >>>
            //		    layers: "JPRL"
            /*                    layers: ''
                                    + '1'
                                    + ',2'
                                    + ',3'
                                    + ',4'
                                    + ',5'
                                    + ',6'
                                    + ',7'
                                    + ',8'
                                    + ',9'
                                    + ',10'
            //SM, 19.02.2021 <<<
            */
            layers: 'LU.ExistingLandUse'
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false
            , visibility: false
            , featureInfoFormat: "application/vnd.ogc.wms_xml"
            , projection: 'EPSG:3857' // projection: 'EPSG:102067'
            , maxScale: 0
            , minScale: 50000
            , attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>'
        }
    ),

    nlc_drevzlozenie: new OpenLayers.Layer.WMS(
        'Drevinové zloženie',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/DrevinoveZlozenie/MapServer/WMSServer?',
        //		{layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:102067'},
        'https://www.nlcsk.org/arcgis/services/Inspire/DrevinoveZlozenie/MapServer/WMSServer?',
        { layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:102067' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 100000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    nlc_polreviry: new OpenLayers.Layer.WMS(
        'Poľovné revíry',
        //		'http://gis.nlcsk.org/ArcGIS/services/Inspire/PolovneReviry/MapServer/WMSServer?',
        'https://www.nlcsk.org/arcgis/services/Inspire/PolovneReviry/MapServer/WMSServer?',
        //		{layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
        { layers: "LU.ExistingLandUse", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 250000, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.nlcsk.sk">NLC Zvolen</a></span>' }
    ),

    sop_lpis: new OpenLayers.Layer.WMS(
        'LPIS 2019',
        'https://gis.sopsr.sk/wms',
        { layers: "lpis", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:5514', maxScale: 0, minScale: 600000, attribution: '<span>&copy; ???, 2019</span>' }
    ),

    sop_kataster_c: new OpenLayers.Layer.WMS(
        'C parcely (spracované ŠOPSR)',
        'https://gis.sopsr.sk/wms',
        {
            layers: "kataster_SK_KN_C", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:5514', maxScale: 0, minScale: 50000, attribution: '<span>Informačný systém katastra nehnuteľností &copy; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a>,29.9.2023</span>'
        }
    ),

    sop_kataster_e: new OpenLayers.Layer.WMS(
        'E parcely (spracované ŠOPSR)',
        'https://gis.sopsr.sk/wms',
        {
            layers: "kataster_SK_KN_E", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: 'EPSG:5514', maxScale: 0, minScale: 50000, attribution: '<span>Informačný systém katastra nehnuteľností &copy; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a>,29.9.2023</span>'
        }
    ),

    geoportal_eskn_parcely_c: new OpenLayers.Layer.WMS(
        'Parcely registra C',
        'https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WMSServer?',
        //		'https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_orto/MapServer/WMSServer?',
        //		'http://144.91.81.168:8090/service?',
        {
            layers: "5"
            //			layers: "Parcely_C"
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false
            , visibility: false
            , featureInfoFormat: "application/vnd.ogc.wms_xml"
            //			,featureInfoFormat: "application/vnd.esri.wms_featureinfo_xml"
            //			,featureInfoFormat: "application/vnd.ogc.gml"
            , projection: 'EPSG:3857'
            , maxScale: 0
            , minScale: 10000
            , attribution: '<span>&copy; <a href="https://www.geoportal.sk/sk/sluzby/mapove-sluzby/wms/wms-eskn.html" target="_blank">Úrad geodézie, kartografie a katastra SR</a> (GKÚ Bratislava; r. 2015; <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/legalcode.cs">CC-BY 4.0</a>)'
        }
    ),

    geoportal_eskn_parcely_e: new OpenLayers.Layer.WMS(
        'Parcely registra E',
        'https://kataster.skgeodesy.sk/eskn/services/NR/uo_wms_norm/MapServer/WMSServer?',
        //		'https://kataster.skgeodesy.sk/eskn/services/NR/uo_wms_orto/MapServer/WMSServer?',
        //		'http://144.91.81.168:8090/service?',
        {
            layers: "0"
            //			layers: "Parcely_E"
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false
            , visibility: false
            //,featureInfoFormat: "application/vnd.ogc.wms_xml"
            , featureInfoFormat: "application/vnd.esri.wms_featureinfo_xml"
            , projection: 'EPSG:3857'
            , maxScale: 0
            , minScale: 10000
            , attribution: '<span>&copy; <a href="https://www.geoportal.sk/sk/sluzby/mapove-sluzby/wms/wms-eskn.html" target="_blank">Úrad geodézie, kartografie a katastra SR</a> (GKÚ Bratislava; r. 2015; <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/legalcode.cs">CC-BY 4.0</a>)'
        }
    ),

    geoportal_eskn_obec: new OpenLayers.Layer.WMS(
        'Obce',
        'https://zbgisws.skgeodesy.sk/zbgis_administrativne_hranice_wms_featureinfo/service.svc/get',
        { layers: "0", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 150000, attribution: '<span>ZB<i>GIS</i>&reg; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a></span>' }
    ),

    geoportal_eskn_parcely_ku: new OpenLayers.Layer.WMS(
        'Katastrálne územia',
        'https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WMSServer?',
        { layers: "13", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 100000, attribution: '<span>Informačný systém katastra nehnuteľností &copy; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a></span>' }
    ),

    geoportal_eskn_parcely_okres: new OpenLayers.Layer.WMS(
        'Okresy',
        'https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WMSServer?',
        { layers: "14", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857' },
        { isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale: 0, minScale: 0, attribution: '<span>Informačný systém katastra nehnuteľností &copy; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a></span>' }
    ),

    geoportal_eskn_parcely_kraj: new OpenLayers.Layer.WMS(
        'Kraje',
        'https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WMSServer?',
        { layers: "15", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857', info_format: 'application/vnd.ogc.wms_xml' },
        //		{layers: "10", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
        { isBaseLayer: false, visibility: false, projection: 'EPSG:3857', maxScale: 0, minScale: 0, attribution: '<span>Informačný systém katastra nehnuteľností &copy; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a></span>' }
        //		{layers: "15", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857', info_format: 'text/xml'},
        //		{layers: "15", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:102067'},
        //		{isBaseLayer: false, visibility: false, featureInfoFormat: "application/vnd.esri.wms_featureinfo_xml", projection: 'EPSG:3857', maxScale:0, minScale:0 }
    ),

    //SM, 18.01.2021 >>>
    rozne__rybarske_reviry: new OpenLayers.Layer.WMS(
        "Rybárske revíry",
        "https://www.sopsr.sk/geoserver/intranet/ows",
        {
            layers: "intranet:rybarske_reviry"
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false
            , visibility: false
            , featureInfoFormat: 'application/vnd.ogc.gml'
            , projection: 'EPSG:3857'
            , maxScale: 0
            , minScale: 0
            , attribution: '<span>Zdroj neznámy.</span>'
        }
    ),
    //SM, 18.01.2021 <<<

    sop_efp_hornaorava: new OpenLayers.Layer.WMS(
        "EFP: CHVÚ Horná Orava",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "EFP_SKCHVU008", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 18.01.2021 >>>
    sop_efp_malekarpaty: new OpenLayers.Layer.WMS(
        "EFP: CHKO Malé Karpaty",
        'https://www.sopsr.sk/geoserver/public/ows?',
        { layers: "public:EFP_CHKO_MaleKarpaty", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    //SM, 18.01.2021 <<<
});