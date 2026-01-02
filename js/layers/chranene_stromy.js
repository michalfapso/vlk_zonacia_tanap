OpenLayers.Util.extend(Heron.scratch.layermap, {

    chranene_stromy: new OpenLayers.Layer.WMS(
        "Chránené stromy",
        'https://www.sopsr.sk/geoserver/sopsr/ows?',
        { layers: "sopsr:IG_PROTECTEDTREES", format: "image/png", transparent: true },
        { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", attribution: '<span>&copy;&nbsp;<a target="_blank" href="https://www.sopsr.sk">ŠOP SR</a></span>' }
    ),

    //SM, 13.05.2020 >>>
    chranene_stromy_ksk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v KSK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20221231/CHS_aktualizacia_2022_KSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_ksk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v KSK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20221231/CHS_OP_2022_KSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 13.05.2020 <<<

    //SM, 02.06.2020 >>>
    chranene_stromy_nsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v NSK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200602/CHS_aktualizacia_2020_NSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_nsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v NSK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200602/CHS_OP_2020_NSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 02.06.2020 <<<

    //SM, 09.06.2020 >>>
    chranene_stromy_bsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v BSK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200609/CHS_aktualizacia_2020_BSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_bsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v BSK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200609/CHS_OP_2020_BSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 02.06.2020 <<<

    //SM, 15.06.2020 >>>
    chranene_stromy_ttsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v TTSK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200615/CHS_aktualizacia_2020_TTSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_ttsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v TTSK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200615/CHS_OP_2020_TTSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 15.06.2020 <<<

    //SM, 19.06.2020 >>>
    chranene_stromy_psk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v PSK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20221231/CHS_aktualizacia_2022_PSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_psk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v PSK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20221231/CHS_OP_2022_PSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 19.06.2020 <<<

    //SM, 06.07.2020 >>>
    chranene_stromy_tnsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v TNSK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20221231/CHS_aktualizacia_2022_TNSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_tnsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v TNSK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20221231/CHS_OP_2022_TNSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 06.07.2020 <<<

    //SM, 16.07.2020 >>>
    chranene_stromy_bbsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v BBSK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200716/CHS_aktualizacia_2020_BBSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_bbsk_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v BBSK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200716/CHS_OP_2020_BBSK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 16.07.2020 <<<

    //SM, 28.09.2020 >>>
    chranene_stromy_zask_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v ZASK (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200928/CHS_aktualizacia_2020_ZASK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(
                    {
                        label: ""
                        , pointRadius: 2
                        , strokeColor: "green"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "green"
                        , fillOpacity: 0.9
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),

    chranene_stromy_op_zask_revizia: new OpenLayers.Layer.Vector(
        "Chránené stromy v ZASK (OP) (podklad pre revíziu chránených stromov)",
        {
            strategies: [new OpenLayers.Strategy.Fixed()],
            projection: new OpenLayers.Projection('EPSG:4326'),
            visibility: false,
            //		    attribution: '<span>&copy;&nbsp;<a target="_blank" href="http://www.sioc.cat/">SIOC</a></span>',
            protocol: new OpenLayers.Protocol.HTTP({
                url: "https://maps.sopsr.sk/data/20200928/CHS_OP_2020_ZASK.gml",
                format: new OpenLayers.Format.GML({
                    extractStyles: true,
                    extractAttributes: true,
                    maxDepth: 2
                })
            }),
            styleMap: new OpenLayers.StyleMap({
                'default': new OpenLayers.Style(

                    {
                        label: ""
                        , strokeColor: "red"
                        , fontColor: "#FF0916"
                        , fontSize: "9px"
                        , fontWeight: "bold"
                        , labelAlign: "center"
                        //				,strokeColor: "#FF0916"
                        , fillColor: "#FF0916"
                        , fillOpacity: 0.1
                        , fontFamily: "Courier New, monospace"
                        , labelAlign: "cb"
                        //				,labelYOffset: 25
                        , labelOutlineColor: "white"
                        , labelOutlineWidth: 3
                    }
                )
            })
        }
    ),
    //SM, 28.09.2020 <<<
});