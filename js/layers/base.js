OpenLayers.Util.extend(Heron.scratch.layermap, {
    /*
        * podkladove mapy
        */

    bez: new OpenLayers.Layer(
        "Bez podkladovej mapy",
        {
            isBaseLayer: true
            , visibility: false
        }
    ),

    svp_vodstvo: new OpenLayers.Layer.WMS(
        'SVP - Vodné toky',
        //		'https://mpt.svp.sk/server/services/portal/vodstvo/MapServer/WMSServer',
        'https://gis.sopsr.sk/wms',
        {
            //		    layers: '0,1,2,4,5,6'
            layers: 'svp_toky'
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            //		    ,crs: 'EPSG:4326'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: false
            , visibility: false
            , hideInLegend: false
            //		    ,featureInfoFormat: "application/vnd.ogc.wms_xml"
            //		    ,projection: new OpenLayers.Projection("EPSG:3857")
            , featureInfoFormat: "application/vnd.ogc.gml"
            , projection: 'EPSG:3857'
            , attribution: '<span>&copy; <a target="_blank" href="https://www.geoportal.sk/">GKÚ</a>, <a target="_blank" href="https://www.svp.sk">SVP</a></span>'
            //		    ,maxScale:1000
            //		    ,minScale:20000
        }
    ),

    geoportal_zbgis: new OpenLayers.Layer.WMS(
        'ZBGIS',
        'https://zbgisws.skgeodesy.sk/zbgis_wms_featureinfo/service.svc/get',
        {
            layers: ''
                /*
                            + '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93'
                            + ',96'
                            + ',98,99,100,101'
                            + ',103,104,105,106'
                            + ',108'
                            + ',110,111,112,113'
                            + ',115,116,117,118,119,120'
                            + ',122,123,124,125,126,127'
                            + ',129'
                            + ',131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146'
                            + ',149'
                            + ',151'
                            + ',153,154,155,156,157,158'
                            + ',160,161,162,163,164,165'
                            + ',167,168'
                */
                + '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96'
                + ',99,100,101,102'
                + ',104,105,106,107'
                + ',109'
                + ',111,112,113,114'
                + ',116,117,118,119,120,121'
                + ',123,124,125,126,127,128'
                + ',130,131,132,133,134,135'
                + ',137'
                + ',139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154'
                + ',157'
                + ',159'
                + ',161,162'
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: true
            , visibility: false
            , hideInLegend: false
            , featureInfoFormat: "application/vnd.ogc.wms_xml"
            , projection: new OpenLayers.Projection("EPSG:3857")
            , attribution: '<span>&copy; Úrad geodézie, kartografie a katastra SR (GKÚ Bratislava; r. 2017; <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/legalcode.cs">CC-BY 4.0</a>)</span>'
            //		    ,maxScale:1000
            //		    ,minScale:20000
        }
    ),

    /*
        mapyCZletecka: new OpenLayers.Layer.XYZ(
                            "MAPY.CZ_letecka",
    //		"http://m1.mapserver.mapy.cz/ophoto-m/(z)-(x)-(y).jpg",
            "http://m1.mapserver.mapy.cz/ophoto-m/${z}-${x}-${y}.jpg",
                    {
                numZoomLevels: 19,
                projection: new OpenLayers.Projection("EPSG:900913"),
                isBaseLayer: true,
                attribution: "<span>Map <a href='http://www.mapy.cz/' target='_blank'><img src='http://api4.mapy.cz/img/api/logo.png' border='0'></a><br>&copy;GEODIS BRNO, s.r.o<br>&copy;Seznam.cz, a.s.</span>",
                sphericalMercator: true,
    //		    getURL: getURLtemplate
                    }
        ),
    */

    geoportal_retm: new OpenLayers.Layer.WMS(
        'Topografické mapy RETM (TM50, TM25)',
        'https://zbgisws.skgeodesy.sk/retm_wms/service.svc/get',
        {
            layers: ''
                + '1' //TM25
                + ',5' //TM50
            , format: 'image/png'
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: true
            , visibility: false
            , noLegend: true
            , featureInfoFormat: 'application/vnd.ogc_wms.xml'
            , projection: new OpenLayers.Projection('EPSG:3857')
            , attribution: '<span>&copy; Úrad geodézie, kartografie a katastra SR (GKÚ Bratislava; r. 2017; <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/legalcode.cs">CC-BY 4.0</a>)</span>'
            //		    ,maxScale:1000
            , minScale: 2500000
        }
    ),

    geoportal_zmsr: new OpenLayers.Layer.WMS(
        'Základné mapy SR (ZM1000000 - ZM10000)',
        'https://zbgisws.skgeodesy.sk/zmsr_wms/service.svc/get',
        {
            layers: ''
                + '1' //ZM10
                + ',5' //ZM25
                + ',9' //ZM50
                + ',13' //ZM100
                + ',17' //ZM200
                + ',21' //ZM500
                + ',25' //ZM1mil
            , format: 'image/png'
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: true
            , visibility: false
            , noLegend: true
            , featureInfoFormat: 'application/vnd.ogc_wms.xml'
            , projection: new OpenLayers.Projection('EPSG:3857')
            , attribution: '<span>&copy; Úrad geodézie, kartografie a katastra SR (GKÚ Bratislava; r. 2017; <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/legalcode.cs">CC-BY 4.0</a>)</span>'
            //		    ,maxScale:1000
            , minScale: 2500000
        }
    ),

    tur_atlas_50: new OpenLayers.Layer.WMS(
        'Turistický atlas 1:50 000',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "6", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 2000000
        }
    ),

    hist_sm75: new OpenLayers.Layer.WMS(
        'Špeciálna mapa 1:75 000',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "14", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),
    /*
        hist_smo5: new OpenLayers.Layer.WMS(
            'SMO5',
            'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
            {layers: "SMO5", format: "image/png", transparent: true, srs: "EPSG:4326"},
            {isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
                maxScale:1000,
                minScale:200000
            }
        ),
    */
    hist_tm10_1957: new OpenLayers.Layer.WMS(
        'TM10 1957-1971',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "16", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),

    hist_tm25_1952: new OpenLayers.Layer.WMS(
        'TM25 1952-1957',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "17", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),

    hist_tm5_1955: new OpenLayers.Layer.WMS(
        'TM5 1955-1961',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "15", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),

    voj_1764: new OpenLayers.Layer.WMS(
        'Vojenská mapa 1764-1787',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "8", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),

    voj_1810: new OpenLayers.Layer.WMS(
        'Vojenská mapa 1810-1869',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "9", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),

    voj_1875: new OpenLayers.Layer.WMS(
        'Vojenská mapa 1875-1884',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "10", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),
    /*
        voj_1897: new OpenLayers.Layer.WMS(
            'Vojenská mapa 1897 (V.Tatry)',
            'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
            {layers: "12", format: "image/png", transparent: true, srs: "EPSG:4326"},
            {isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
                maxScale:1000,
                minScale:200000
            }
        ),
    */
    voj_1920: new OpenLayers.Layer.WMS(
        'Vojenská mapa 1920-1934',
        'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
        { layers: "11", format: "image/png", transparent: true, srs: "EPSG:4326" },
        {
            isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
            maxScale: 1000,
            minScale: 200000
        }
    ),
    /*
        voj_1931: new OpenLayers.Layer.WMS(
            'Vojenská mapa 1931 (V.Tatry)',
            'https://arc.sazp.sk/arcgis/services/ng/rastre/MapServer/WMSServer?',
            {layers: "13", format: "image/png", transparent: true, srs: "EPSG:4326"},
            {isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.gml", projection: new OpenLayers.Projection("EPSG:3857"),
                maxScale:1000,
                minScale:200000
            }
        ),
    */

    /*
        hiking_tzt: new OpenLayers.Layer.TileCache(
            'Turistické chodníky (hiking)',
            "http://mapy.hiking.sk/layers/",
            "tzt",
            {isBaseLayer:false, visibility: false, sphericalMercator:true, buffer:0, minScale: 1000000, maxScale: 15000, attribution: 'hiking.sk'}
        ),
    */
    /*
        //view-source:https://mapy.hiking.sk/lib/HikingMaps-3.6.6.js
        hiking_tzt: new OpenLayers.Layer.XYZ(
            'Turistické chodníky (hiking)',
            [
    //		  "https://static.mapy.hiking.sk/tzt/${z}/${x}/${y}.png"
                "https://tile.mapy.hiking.sk/tzt/${z}/${x}/${y}.png"
            ]
            ,{attribution:'<BR /><span>Značky a rázcestia &copy; HIKING.SK</span>',sphericalMercator:true,buffer:0,resolutions:[76.43702827148438,38.21851413574219,19.109257067871095,9.554628533935547,4.777314266967774],isBaseLayer:false, visibility:false}
        ),
    
        //view-source:https://mapy.hiking.sk/lib/HikingMaps-3.6.6.js
        hiking_cykloznacky: new OpenLayers.Layer.XYZ(
            'Cykloznačky (waymarkedtrails.org)'
            ,[
                "http://tile.waymarkedtrails.org/cycling/${z}/${x}/${y}.png"
            ]
            ,{attribution:'<br /><span>Waymarkedtrails.org, OpenStreetMap contributors</span>',sphericalMercator:true,buffer:0,resolutions:[76.43702827148438,38.21851413574219,19.109257067871095,9.554628533935547,4.777314266967774],transitionEffect:'resize',isBaseLayer:false,numZoomLevels:16,visibility:false,opacity:0.7}
        ),
    */
    freemap_tch: new OpenLayers.Layer.XYZ(
        'Turistické chodníky (freemap)'
        , [
            "http://tiles.freemap.sk/trails/${z}/${x}/${y}.png"
        ]
        , { isBaseLayer: false, visibility: false, projection: 'EPSG:3857', attribution: '<br /><span>Mapa &copy; Freemap Slovakia, dáta &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a></span>', maxScale: 8000, minScale: 2000000 }
    ),

    freemap_cyclo: new OpenLayers.Layer.XYZ(
        'Cyklotrasy (freemap)'
        , [
            "http://tiles.freemap.sk/cycle/${z}/${x}/${y}.png"
        ]
        , { isBaseLayer: false, visibility: false, projection: 'EPSG:3857', attribution: '<br /><span>Mapa &copy; Freemap Slovakia, dáta &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a></span>', maxScale: 8000, minScale: 2000000 }
    ),
    /*
        mig_zaklad_biotopy: new OpenLayers.Layer.WMTS(
            {
                name: "MIG",
                url: "https://www.sopsr.sk/geoserver/gwc/service/wmts",
                layer: "skuska:ZAKLAD_MIGRACNE_BIOTOPY",
    //			singleTile: false,
                matrixSet: "EPSG:900913",
                matrixIds: matrixIds,
    //			matrixIds: Array["EPSG:5514:0"],
                format: "image/png",
                style: "_null",
                isBaseLayer: false
            }
        ),
    */

    osm: new OpenLayers.Layer.OSM(
        'OpenStreetMap'
        , [
            "https://a.tile.openstreetmap.org/${z}/${x}/${y}.png",
            "https://b.tile.openstreetmap.org/${z}/${x}/${y}.png",
            "https://c.tile.openstreetmap.org/${z}/${x}/${y}.png"
        ]
        , { visibility: false, attribution: '<span>&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a></span>' }
    ),

    opentopomap: new OpenLayers.Layer.OSM(
        'OpenTopoMap'
        , [
            "https://a.tile.opentopomap.org/${z}/${x}/${y}.png",
            "https://b.tile.opentopomap.org/${z}/${x}/${y}.png",
            "https://c.tile.opentopomap.org/${z}/${x}/${y}.png"
        ]
        , { visibility: false, attribution: '<span>Kartendaten: &copy; <a href="https://openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>-Mitwirkende, SRTM Kartendarstellung: &copy; <a href="http://opentopomap.org/" target="_blank">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC-BY-SA</a>)</span>', type: 'png', numZoomLevels: 18, useCanvas: OpenLayers.Layer.Grid.ONECANVASPERTILE }
    ),

    geoportal_relief_tien: new OpenLayers.Layer.WMS(
        "Tieňovaný reliéf", // name for display in LayerSwitcher
        "https://zbgisws.skgeodesy.sk/zbgis_dmr3_wms/service.svc/get", // service endpoint
        {
            layers: "0"
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: true
            , visibility: false
            , featureInfoFormat: null
            , projection: 'EPSG:3857'
            , maxScale: 0
            , minScale: 0
            , attribution: '<span>ZB<i>GIS</i>&reg; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a></span>'
        }
    ),

    geoportal_relief_dmr: new OpenLayers.Layer.WMS(
        "Digitálny model reliéfu", // name for display in LayerSwitcher
        "https://zbgisws.skgeodesy.sk/zbgis_dmr3_wms/service.svc/get", // service endpoint
        {
            layers: "1"
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            //SM, 22.12.2020 >>>
            //		    isBaseLayer: true
            isBaseLayer: false
            , opacity: '0.6'
            //SM, 22.12.2020 <<<
            , visibility: false
            //SM, 22.12.2020 >>> 
            //		    ,featureInfoFormat: null
            , featureInfoFormat: 'application/vnd.ogc.wms_xml'
            //SM, 22.12.2020 <<<
            , projection: 'EPSG:3857'
            , maxScale: 0
            , minScale: 0
            , attribution: '<span>ZB<i>GIS</i>&reg; <a target="_blank" href="http://www.skgeodesy.sk">Úrad geodézie, kartografie a katastra Slovenskej republiky</a></span>'
            , useCanvas: OpenLayers.Layer.Grid.ONECANVASPERTILE
        }
    ),

    //SM, 19.07.2018 >>>
    geoportal_ortofotomozaika: new OpenLayers.Layer.WMS(
        "Ortofotomozaika",
        "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get", // service endpoint
        {
            layers: "1"
            , format: "image/png"
            , transparent: true
            , version: '1.3.0'
            , crs: 'EPSG:3857'
        },
        {
            isBaseLayer: true
            , visibility: false
            , featureInfoFormat: null
            , projection: 'EPSG:3857'
            , maxScale: 0
            , minScale: 0
            , attribution: '<span>&copy; <a target="_blank" href="https://www.geoportal.sk/files/zbgis/objednavky/podmienky_poskytovania_a_pouzivania_udajov_ortofotomozaiky.pdf">GKÚ Bratislava, NLC</a></span>'
            , noLegend: true
        }
    ),
    //SM, 19.07.2018 <<<
    ortofotomozaika_freemap: new OpenLayers.Layer.XYZ(

        'Ortofotomozaika_freemap',
        "https://ofmozaika.tiles.freemap.sk/${z}/${x}/${y}.jpg",
        { isBaseLayer: true }

    ),
    /*geoportal_ortofotomozaika_wmts: new OpenLayers.Layer.WMTS(
        {
            name: 'Ortofotomozaika_wmts',
            url: 'https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wmts/service.svc/get/tile',
                        requestEncoding:"REST",
            layer: "WMS_zbgis_ortofoto_wmts",
                matrixSet: "default028mm",
                matrixIds: zbgisMatrix,
                format: "image/png",
                style: "default",
                isBaseLayer: true
        }
    ),*/

    /*
        sop_geoportal_ortofotomozaika: new OpenLayers.Layer.WMS(
            "Ortofotomozaika (cez ŠOP)",
            "https://gis.sopsr.sk/wms", // service endpoint
            {layers: "geoportal_ortofotomozaika", format: "image/png", transparent: true, version: '1.3.0', crs: 'EPSG:3857'},
            {isBaseLayer: true, visibility: false, featureInfoFormat: "application/vnd.ogc.wms_xml", projection: 'EPSG:3857', maxScale:0, minScale:0, attribution: '<span>&copy; <a target="_blank" href="https://www.geoportal.sk/files/zbgis/objednavky/podmienky_poskytovania_a_pouzivania_udajov_ortofotomozaiky.pdf">GKÚ Bratislava, NLC</a></span>', displayOutsideMaxExtent: false }
        ),
    */

    //SM, 06.03.2017 >>>
    kml_grid_50: new OpenLayers.Layer.Vector(
        "GRID: 50x50 km",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "http://www.sioc.cat/EBBA2/slovakia_50x50.kml",
                format: new OpenLayers.Format.KML({
                    extractStyles: false,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': {
                    label: "50x50km:\n\"${description}\""
                    , fontColor: "#FF0916"
                    , fontSize: "11px"
                    , fontWeight: "bold"
                    , labelAlign: "center"
                    , strokeColor: "#FF0916"
                    , fillColor: "#FFFFFF"
                    , fillOpacity: 0
                }
            })
        }
    ),
    //SM, 06.03.2017 <<<

});