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

});