

OpenLayers.Util.extend(Heron.scratch.layermap, {

    zonacia_TANAP: new OpenLayers.Layer.Vector("Zonácia (TANAP)", {
        protocol: new OpenLayers.Protocol.HTTP({
            // Ak máš súbor lokálne vedľa HTML súboru:
            url: "zonacia_TANAP_1august2025.geojson",

            // Ak máš súbor na internetovom serveri, použi toto a zakomentuj riadok vyššie:
            // url: "https://ADRESA_K_TVOJMU_SUBORU/tanap.geojson",

            format: new OpenLayers.Format.GeoJSON({
                // OpenLayers sa pokúsi automaticky pretransformovať súradnice
                // z EPSG:4326 (GeoJSON) do EPSG:3857 (mapa)
                'internalProjection': new OpenLayers.Projection("EPSG:3857"),
                'externalProjection': new OpenLayers.Projection("EPSG:3857")
            })
        }),
        strategies: [new OpenLayers.Strategy.Fixed()],
        // Štýl, aby vrstva nebola neviditeľná
        styleMap: tanapStyleMap,
        // Priehľadnosť celej vrstvy
        opacity: 0.6,
        // Vrstva nie je podkladová
        isBaseLayer: false,
        // Zobraziť v legende
        hideInLegend: false,
        // Viditeľnosť po načítaní (môžeš zmeniť na true, ak ju chceš mať hneď zapnutú)
        visibility: false
    }),

    zonacia_NAPANT: new OpenLayers.Layer.Vector("Zonácia (NAPANT)", {
        protocol: new OpenLayers.Protocol.HTTP({
            // Ak máš súbor lokálne vedľa HTML súboru:
            url: "ZONACIA_NAPANT_A-B-C-D.geojson",

            format: new OpenLayers.Format.GeoJSON({
                // OpenLayers sa pokúsi automaticky pretransformovať súradnice
                // z EPSG:4326 (GeoJSON) do EPSG:3857 (mapa)
                'internalProjection': new OpenLayers.Projection("EPSG:3857"),
                'externalProjection': new OpenLayers.Projection("EPSG:3857")
            })
        }),
        strategies: [new OpenLayers.Strategy.Fixed()],
        // Štýl, aby vrstva nebola neviditeľná
        styleMap: napantStyleMap,
        // Priehľadnosť celej vrstvy
        opacity: 0.6,
        // Vrstva nie je podkladová
        isBaseLayer: false,
        // Zobraziť v legende
        hideInLegend: false,
        // Viditeľnosť po načítaní (môžeš zmeniť na true, ak ju chceš mať hneď zapnutú)
        visibility: false
    }),

    zonacia_NAPANT_OP: new OpenLayers.Layer.Vector("Zonácia (NAPANT OP)", {
        protocol: new OpenLayers.Protocol.HTTP({
            // Ak máš súbor lokálne vedľa HTML súboru:
            url: "OP_NP_Nizke_Tatry_zonacia.geojson",

            format: new OpenLayers.Format.GeoJSON({
                // OpenLayers sa pokúsi automaticky pretransformovať súradnice
                // z EPSG:4326 (GeoJSON) do EPSG:3857 (mapa)
                'internalProjection': new OpenLayers.Projection("EPSG:3857"),
                'externalProjection': new OpenLayers.Projection("EPSG:3857")
            })
        }),
        strategies: [new OpenLayers.Strategy.Fixed()],
        // Štýl, aby vrstva nebola neviditeľná
        styleMap: napantOpStyleMap,
        // Priehľadnosť celej vrstvy
        opacity: 0.6,
        // Vrstva nie je podkladová
        isBaseLayer: false,
        // Zobraziť v legende
        hideInLegend: false,
        // Viditeľnosť po načítaní (môžeš zmeniť na true, ak ju chceš mať hneď zapnutú)
        visibility: false
    }),

    zonacia_NAPANT_EFP: new OpenLayers.Layer.Vector("Zonácia (NAPANT EFP)", {
        protocol: new OpenLayers.Protocol.HTTP({
            // Ak máš súbor lokálne vedľa HTML súboru:
            url: "Ekologicko-funkcne-priestory_EFP_navrh_NAPANT.geojson",

            format: new OpenLayers.Format.GeoJSON({
                // OpenLayers sa pokúsi automaticky pretransformovať súradnice
                // z EPSG:4326 (GeoJSON) do EPSG:3857 (mapa)
                'internalProjection': new OpenLayers.Projection("EPSG:3857"),
                'externalProjection': new OpenLayers.Projection("EPSG:3857")
            })
        }),
        strategies: [new OpenLayers.Strategy.Fixed()],
        // Štýl, aby vrstva nebola neviditeľná
        styleMap: napantEfpStyleMap,
        // Priehľadnosť celej vrstvy
        opacity: 0.6,
        // Vrstva nie je podkladová
        isBaseLayer: false,
        // Zobraziť v legende
        hideInLegend: false,
        // Viditeľnosť po načítaní (môžeš zmeniť na true, ak ju chceš mať hneď zapnutú)
        visibility: false
    }),

    zonacia_poloniny: new OpenLayers.Layer.Vector("Zonácia (NP Poloniny)", {
        protocol: new OpenLayers.Protocol.HTTP({
            // Ak máš súbor lokálne vedľa HTML súboru:
            url: "zonacia_NP_Poloniny_EPSG3857.geojson",

            format: new OpenLayers.Format.GeoJSON({
                // OpenLayers sa pokúsi automaticky pretransformovať súradnice
                // z EPSG:4326 (GeoJSON) do EPSG:3857 (mapa)
                'internalProjection': new OpenLayers.Projection("EPSG:3857"),
                'externalProjection': new OpenLayers.Projection("EPSG:3857")
            })
        }),
        strategies: [new OpenLayers.Strategy.Fixed()],
        // Štýl, aby vrstva nebola neviditeľná
        styleMap: poloninyStyleMap,
        // Priehľadnosť celej vrstvy
        opacity: 0.6,
        // Vrstva nie je podkladová
        isBaseLayer: false,
        // Zobraziť v legende
        hideInLegend: false,
        // Viditeľnosť po načítaní (môžeš zmeniť na true, ak ju chceš mať hneď zapnutú)
        visibility: false
    }),

    zonacia_pienap: new OpenLayers.Layer.WMS(
        "Zonácia (PIENAP)",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "zonacia_pienap", format: "image/png", transparent: true },
        { iisBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    zonacia_slovraj: new OpenLayers.Layer.WMS(
        "Zonácia (NP Slovenský raj)",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "zonacia_slovensky_raj", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    zonacia_hornaorava: new OpenLayers.Layer.WMS(
        "Zonácia (CHKO Horná Orava)",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "zonacia_chko_horna_orava", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    zonacia_murplanina: new OpenLayers.Layer.WMS(
        "Zonácia (NP Muránska planina)",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "zonacia_mur_planina", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    zonacia_velkafatra: new OpenLayers.Layer.WMS(
        "Zonácia (NP Veľká Fatra)",
        'https://maps.sopsr.sk/geoserver/ows?',
        { layers: "np_velka_fatra_zony", format: "image/png", transparent: true },
        { iisBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    // zonacia_poloniny: new OpenLayers.Layer.WMS(
    // 	"Zonácia (NP Poloniny)",
    // 	// Note: We removed '/rest' and added '/WMSServer'
    // 	'https://maps.sopsr.sk/server/services/NP_Poloniny_zon%C3%A1cia_MIL1/MapServer/WMSServer?',
    // 	{ layers: "0", format: "image/png", transparent: true, version: "1.3.0"},
    // 	{ iisBaseLayer: false, visibility: false, hideInLegend: false, singleTile: true, attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    // ),
    // zonacia_poloniny: new OpenLayers.Layer.ArcGIS93Rest(
    // 	"Zonácia (NP Poloniny)",
    // 	'https://maps.sopsr.sk/server/rest/services/NP_Poloniny_zon%C3%A1cia_MIL1/MapServer/export',
    // 	{
    // 		layers: "show:0", // specific syntax for ArcGIS REST
    // 		transparent: true,
    // 		format: "png32"   // png32 supports transparency better
    // 	},
    // 	{
    // 		isBaseLayer: false,
    // 		visibility: true,
    // 		attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'
    // 	}
    // ),

    //SM, 24.02.2020 >>>
    np_muranskaplanina_zonacia_hranica: new OpenLayers.Layer.WMS(
        "NP Muránska planina - hranica",
        'http://kn.sopsr.sk/geoserver/kataster_temp_npmp/ows?',
        { layers: "hranica_NP_a_OP", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
    /*
        np_muranskaplanina_zonacia_zony: new OpenLayers.Layer.WMS(
            "NP Muránska planina - zóny",
            'http://kn.sopsr.sk/geoserver/kataster_temp_npmp/ows?',
            {layers: "ZONY", format: "image/png", transparent: true},
            {isBaseLayer: false,   visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>'}
        ),
    */
    np_muranskaplanina_zonacia_efp: new OpenLayers.Layer.WMS(
        "NP Muránska planina - EFP",
        'http://kn.sopsr.sk/geoserver/kataster_temp_npmp/ows?',
        { layers: "EFP", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    np_muranskaplanina_zonacia_vyznamnelokality: new OpenLayers.Layer.WMS(
        "NP Muránska planina - významné lokality",
        'http://kn.sopsr.sk/geoserver/kataster_temp_npmp/ows?',
        { layers: "vyznamne_lok_np_murplanina", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    np_muranskaplanina_zonacia_zaujmovelokality: new OpenLayers.Layer.WMS(
        "NP Muránska planina - záujmové lokality",
        'http://kn.sopsr.sk/geoserver/kataster_temp_npmp/ows?',
        { layers: "zaujmove_lok_op_murplanina", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),
});