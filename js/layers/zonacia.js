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
        styleMap: opStyleMap,
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
        styleMap: efpStyleMap,
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

});