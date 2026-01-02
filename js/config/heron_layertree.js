var treeDefault = [
    {
        nodeType: "gx_baselayercontainer",
        expanded: true,
        text: "My base layers"
    },
    {
        nodeType: "gx_overlaylayercontainer",
        draggable: false,
        // render the nodes inside this container with a radio button,
        // and assign them the group "foo".
        loader: {
            baseAttrs: {
                //			        radioGroup: "foo",
                //			        uiProvider: "layerNodeUI",
                uiProvider: "use_radio",
            }
        }

    }
];

var treeTheme = [
    {
        //                text:'Základné mapy', expanded: true, draggable: true, children:
        text: __('BaseMaps'), expanded: true, draggable: true, children:
            [

                //{nodeType: "gx_layer", layer: "MAPY.CZ_letecka", qtip: "pre interné použitie", text: "<span style=\"font-weight: bold;\">MAPY.CZ_letecka</span>"},
                { nodeType: "gx_layer", layer: "OpenStreetMap" },
                { nodeType: "gx_layer", layer: "OpenTopoMap" },
                { nodeType: "gx_layer", layer: "Tieňovaný reliéf" },
                { nodeType: "gx_layer", layer: "Digitálny model reliéfu" },
                { nodeType: "gx_layer", layer: "Ortofotomozaika" },
                { nodeType: "gx_layer", layer: "Ortofotomozaika_freemap" },
                //				{nodeType: "gx_layer", layer: "Ortofotomozaika (cez ŠOP)"},

                { nodeType: "gx_layer", layer: "ZBGIS" },
                { nodeType: "gx_layer", layer: "Topografické mapy RETM (TM50, TM25)" },
                { nodeType: "gx_layer", layer: "Základné mapy SR (ZM1000000 - ZM10000)" },
                { nodeType: "gx_layer", layer: "Turistický atlas 1:50 000" },
                { nodeType: "gx_layer", layer: "Bez podkladovej mapy" },

                //			]
                //	},
                {
                    text: 'Historické mapy', expanded: false, draggable: true, children:
                        [
                            { nodeType: "gx_layer", layer: "Špeciálna mapa 1:75 000" },
                            //					        {nodeType: "gx_layer", layer: "SMO5" },
                            { nodeType: "gx_layer", layer: "TM10 1957-1971" },
                            { nodeType: "gx_layer", layer: "TM25 1952-1957" },
                            { nodeType: "gx_layer", layer: "TM5 1955-1961" },
                            { nodeType: "gx_layer", layer: "Vojenská mapa 1764-1787" },
                            { nodeType: "gx_layer", layer: "Vojenská mapa 1810-1869" },
                            { nodeType: "gx_layer", layer: "Vojenská mapa 1875-1884" },
                            //					        {nodeType: "gx_layer", layer: "Vojenská mapa 1897 (V.Tatry)" },
                            { nodeType: "gx_layer", layer: "Vojenská mapa 1920-1934" },
                            //					        {nodeType: "gx_layer", layer: "Vojenská mapa 1931 (V.Tatry)" },
                        ]
                },
            ]
    },
    {
        text: __('Base Layers'), expanded: true, draggable: false, children:
            [
                { nodeType: "gx_layer", layer: "Pôsobnosť ŠOP SR" },
                { nodeType: "gx_layer", layer: "Pôsobnosť ZTMH" },
                { nodeType: "gx_layer", layer: "Pôsobnosť SIŽP - Ochrana prírody" },
                { nodeType: "gx_layer", layer: "Geomorfologické jednotky" },
                { nodeType: "gx_layer", layer: "Biogeografické regióny" },
                //		{text:"<b style=\"color: green;\">Ochrana prírody</b>", expanded: true, draggable: false, qtip: "&copy; Štátna ochrana prírody SR", children:
                {
                    text: "<b style=\"color: green;\">Ochrana prírody</b>", expanded: true, draggable: false, qtip: "Štátna ochrana prírody SR", children:
                        [
                            { nodeType: "gx_layer", layer: "Chránené stromy", text: "<span style=\"color: green;\">Chránené stromy SR</span>", qtip: "&copy; ŠOP SR" },
                            {
                                text: "Chránené stromy (podklad pre revíziu)", expanded: false, draggable: false, qtip: "Štátna ochrana prírody SR", children:
                                    [
                                        { nodeType: "gx_layer", layer: "Chránené stromy v KSK (podklad pre revíziu chránených stromov)", text: "<span>v Košickom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v KSK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v NSK (podklad pre revíziu chránených stromov)", text: "<span>v Nitrianskom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v NSK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v BSK (podklad pre revíziu chránených stromov)", text: "<span>v Bratislavskom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v BSK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v TTSK (podklad pre revíziu chránených stromov)", text: "<span>v Trnavskom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v TTSK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v PSK (podklad pre revíziu chránených stromov)", text: "<span>v Prešovskom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v PSK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v TNSK (podklad pre revíziu chránených stromov)", text: "<span>v Trenčianskom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v TNSK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v BBSK (podklad pre revíziu chránených stromov)", text: "<span>v Banskobystrickom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v BBSK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v ZASK (podklad pre revíziu chránených stromov)", text: "<span>v Žilinskom kraji</span>", qtip: "&copy; ŠOP SR" },
                                        { nodeType: "gx_layer", layer: "Chránené stromy v ZASK (OP) (podklad pre revíziu chránených stromov)", text: "<span style=\"margin-left: 7px;\">+ ochranné pásmo</span>", qtip: "&copy; ŠOP SR" },
                                    ]
                            },
                            //			{nodeType: "hr_multilayer", layers: "Chránené stromy v Košickom kraji (podklad pre revíziu chránených stromov), Chránené stromy (OP) v Košickom kraji (podklad pre revíziu chránených stromov)", text: "Chránené stromy v Košickom kraji (podklad pre revíziu chránených stromov)" },
                            { nodeType: "gx_layer", layer: "Chránené vtáčie územia", text: "<span style=\"color: green;\" title=\"Chránené vtáčie územia - CHVÚ\">Chránené vtáčie územia</span>", qtip: "&copy; ŠOP SR" },
                            //			{nodeType: "gx_layer", layer: "Chránené vtáčie územia", text: "<a style=\"color: green;\" href=\"https://www.sopsr.sk/natura/index1.php?p=4&lang=sk&sec=1\" target=\"_blank\">Chránené vtáčie územia</a>", qtip: "Chránené vtáčie územia - CHVÚ" },
                            { nodeType: "gx_layer", layer: "Územia európskeho významu", text: "<span style=\"color: green;\" title=\"Územia európskeho významu - ÚEV\">Územia európskeho významu</span>", qtip: "&copy; ŠOP SR" },
                            // 			{nodeType: "gx_layer", layer: "návrh C+ etapa ÚEV 1. fáza", text: "<span style=\"margin-left: 10px;\">návrh C+ etapa ÚEV 1. fáza</span>" },
                            // 			{nodeType: "gx_layer", layer: "návrh C+ etapa ÚEV 2. fáza", text: "<span style=\"margin-left: 10px;\">návrh C+ etapa ÚEV 2. fáza</span>" },
                            // 			{nodeType: "gx_layer", layer: "C+ etapa ÚEV - návrh", text: "<span style=\"margin-left: 10px;\">C+ etapa ÚEV - návrh</span>" },
                            //			{nodeType: "gx_layer", layer: "Územia európskeho významu - C etapa", text: "<span style=\"color: green; background-color: yellow;\" title=\"Územia eur. významu navrhnuté na doplnenie - C etapa (pracovná verzia)\">Územia európskeho významu - C etapa</span>", qtip: "&copy; ŠOP SR" },
                            //			{nodeType: "gx_layer", layer: "chránené územia (VCHÚ, MCHÚ)" },
                            { nodeType: "gx_layer", layer: "Veľkoplošné chránené územia", text: "<span style=\"color: green;\">Veľkoplošné chránené územia SR</span>", qtip: "&copy; ŠOP SR" },
                            { nodeType: "gx_layer", layer: "Maloplošné chránené územia", qtip: "&copy; ŠOP SR", text: "<table style=\"display: inline-block; vertical-align: bottom; color: green; font-size:x-small;\"><tr><td>Maloplošné chránené územia SR</td></tr><!--tr><td style=\"font-size: xx-small; text-align: center;\">(01.12.2017)</td></tr--></table>" },
                            { nodeType: "gx_layer", layer: "Stupne ochrany", qtip: "&copy; ŠOP SR", text: "<table style=\"display: inline-block; vertical-align: bottom; color: green; font-size:x-small;\"><tr><td>Stupne ochrany</td></tr><!--tr><td style=\"font-size: xx-small; text-align: center;\">(01.12.2017)</td></tr--></table>" },
                            //SM, 23.01.2020 >>>
                            //{nodeType: "gx_layer", layer: "MCHÚ - PR Pralesy", text: "<span style=\"color: red;\"><b>Návrh</b></span> PR Pralesy SR", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                            //VLSM 28.4.2023
                            {
                                text: '<b style=\"color: red;\">Konsolidované UEV</b>', expanded: false, draggable: false, children:
                                    [
                                        { nodeType: "gx_layer", layer: "Konsolidované UEV" }
                                    ]
                            },
                            /*  	{text:'<b style=\"color: red;\">Navrhované zmeny</b>', expanded: false, draggable: false, children:
                                        [
                                    {nodeType: "gx_layer", layer: "Navrhované rozšírenie UEV" },
                                    {nodeType: "gx_layer", layer: "Navrhované zmeny stupňa ochrany UEV" }
                                        ]
                                    },
                            */
                            //VLSM 16.2.2023
                            {
                                text: '<b style=\"color: red;\">Prvky RUSES</b>', expanded: false, draggable: false, children:
                                    [
                                        { nodeType: "gx_layer", layer: "Genofondové lokality - CHKO Kysuce" },
                                        { nodeType: "gx_layer", layer: "Biocentrá - CHKO Kysuce" },
                                        { nodeType: "gx_layer", layer: "Biokoridory - CHKO Kysuce" },
                                    ]
                            },
                            //SM, 23.01.2020 <<<
                            {
                                text: '<b style=\"color: red;\">Migračné bariéry</b>', expanded: false, draggable: false, children:
                                    [
                                        { nodeType: "gx_layer", layer: "Migračné biotopy" },
                                        //			         {nodeType: "gx_layer", layer: "Migračné obmedzenia a migračné koridory" },
                                        { nodeType: "gx_layer", layer: "Migračné obmedzenia" },
                                        { nodeType: "gx_layer", layer: "Migračné koridory" },
                                    ]
                            },
                            { nodeType: "gx_layer", layer: "Ekosystémy" },
                            {
                                text: "<b style=\"color: green;\">Biotopy hlucháňa</b>", expanded: false, draggable: false, qtip: "", children:
                                    [
                                        { nodeType: "gx_layer", layer: "Hlucháň - NP Muránska planina", qtip: "&copy; ŠOP SR (source: Správa NP Muránska planina)" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Levočské vrchy" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - SLOVENSKO" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Funkčné lokality" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - funkčné biotopy 1" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Funkčné biotopy 2" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Klenovský vepor" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Orava Kysuce" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Raj Volovské vrchy" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Rozšírenie Poľana 2002" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Strážovské vrchy" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Svrčník" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Vysoké Tatry" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Potenciálne bez evid. výskytu" },
                                        { nodeType: "gx_layer", layer: "Biotopy hlucháňa - Potenciálne bez potvrd. výskytu" },
                                    ]
                            },

                            {
                                text: "<b style=\"color: green;\">Zonácia</b>", expanded: true, draggable: false, qtip: "", children:
                                    [
                                        { nodeType: "gx_layer", layer: "Zonácia (PIENAP)", qtip: "&copy; ŠOP SR (source: S-PIENAP)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (NP Slovenský raj)", qtip: "&copy; ŠOP SR (source: S-NP Slovenský raj)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (CHKO Horná Orava)", qtip: "&copy; ŠOP SR (source: S-CHKO Horná Orava)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (NP Muránska planina)", qtip: "&copy; ŠOP SR (source: S-CHKO Horná Orava)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (NP Veľká Fatra)", qtip: "&copy; ŠOP SR (source: NP Veľká Fatra)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (TANAP)", qtip: "&copy; ŠOP SR (source: TANAP)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (NAPANT)", qtip: "&copy; ŠOP SR (source: NAPANT)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (NAPANT OP)", qtip: "&copy; ŠOP SR (source: NAPANT)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (NAPANT EFP)", qtip: "&copy; ŠOP SR (source: NAPANT)" },
                                        { nodeType: "gx_layer", layer: "Zonácia (NP Poloniny)", qtip: "&copy; ŠOP SR (source: NP Poloniny)" },
                                    ]
                            },
                            {
                                text: "<b style=\"color: green;\">Ekologicko-funkčné priestory</b>", expanded: false, draggable: false, qtip: "", children:
                                    [
                                        { nodeType: "gx_layer", layer: "EFP: CHVÚ Horná Orava", text: "CHVÚ Horná Orava", qtip: "&copy; ŠOP SR (source: S-CHKO Horná Orava" },
                                        //SM, 18.01.2021 >>>
                                        { nodeType: "gx_layer", layer: "EFP: CHKO Malé Karpaty", text: "CHKO Malé Karpaty", qtip: "&copy; ŠOP SR (source: S-CHKO Malé Karpaty" },
                                        //SM, 18.01.2021 <<<
                                    ]
                            },

                            {
                                text: "<b style=\"color: blue;\">KIMS</b>", expanded: true, draggable: false, qtip: "Pracovné vrstvy", children:
                                    [
                                        { nodeType: "gx_layer", layer: "Trvalé monitorovacie lokality", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                        { nodeType: "gx_layer", layer: "Trvalé monitorovacie lokality - botanické", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                        { nodeType: "gx_layer", layer: "Trvalé monitorovacie lokality - biotopové", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                        { nodeType: "gx_layer", layer: "Trvalé monitorovacie lokality - zoologické", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                    ],
                            },

                            {
                                text: "<b style=\"color: red;\">Dočasné</b>", expanded: false, draggable: false, qtip: "Pracovné vrstvy", children:
                                    [
                                        //SM, 23.11.2020 >>>
                                        //{text: "<b style=\"color: red; background-color: yellow; letter-spacing: 0px;\">NOVINKA</b> - <div style=\"display: inline; color: red; border: 1px outset blue; padding: 2px 2px 0px 2px; letter-spacing: 2px;\">NÁHODNÉ ŤAŽBY</div>", expanded: false, draggable: false, qtip: "Pracovné vrstvy", children:
                                        {
                                            text: "<b  style=\"color: red;\">NÁHODNÉ ŤAŽBY</b>", expanded: false, draggable: false, qtip: "Pracovné vrstvy", children:
                                                [
                                                    { nodeType: "gx_layer", layer: "NP Muránska planina - náhodné ťažby", text: "v NP Muránska planina", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                ]
                                        },
                                        //SM, 23.11.2020 <<<					
                                        {
                                            text: "<b style=\"color: red;\">CHKO Latorica</b>", expanded: false, draggable: false, qtip: "Pracovné vrstvy", children:
                                                [
                                                    { nodeType: "gx_layer", layer: "MCHÚ - CHKO Latorica", text: "MCHÚ", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                ]
                                        },
                                        {
                                            text: "<b style=\"color: red;\">CHKO Záhorie</b>", expanded: false, draggable: false, qtip: "Pracovné vrstvy", children:
                                                [
                                                    //					{nodeType: "gx_layer", layer: "MCHÚ - CHKO Záhorie", text: "MCHÚ", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                    { nodeType: "gx_layer", layer: "MCHÚ - CHKO Záhorie (stupne ochr.)", text: "MCHÚ - stupne ochrany", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                ]
                                        },
                                        {
                                            text: "<b style=\"color: red;\">CHKO Biele karpaty</b>", expanded: false, draggable: false, qtip: "Pracovné vrstvy", children:
                                                [
                                                    { nodeType: "gx_layer", layer: "CHA Tematinske vrchy - zony", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                ]
                                        },
                                        {
                                            text: "<b style=\"color: red;\">NP Muránska planina</b>", expanded: false, draggable: false, qtip: "Pracovné vrstvy", children:
                                                [
                                                    { nodeType: "gx_layer", layer: "NP Muránska planina - hranica", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                    //{nodeType: "gx_layer", layer: "NP Muránska planina - zóny", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                    { nodeType: "gx_layer", layer: "NP Muránska planina - EFP", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                    { nodeType: "gx_layer", layer: "NP Muránska planina - významné lokality", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                    { nodeType: "gx_layer", layer: "NP Muránska planina - záujmové lokality", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                                                ]
                                        },
                                    ]
                            },


                            {
                                text: 'Územia medzinárodného významu', expanded: true, draggable: false, children:
                                    [
                                        { nodeType: "gx_layer", layer: "Ramsarské lokality" },
                                        { nodeType: "gx_layer", layer: "Lokality svetového dedičstva UNESCO" },
                                        { nodeType: "gx_layer", layer: "Biosférické rezervácie" },
                                        { nodeType: "gx_layer", layer: "Európsky diplom pre chránené územia" },

                                    ]
                            },
                            /*
                                        {nodeType: "hr_multilayer", layers: "CHVU,OROG", text: "CHVU a OROG" },
                            */
                        ]
                },
                //SM, 18.01.2021 >>>
                /* docasne zrusene rybarske reviry
                            {text:'<b style=\"color: red; background-color: yellow; letter-spacing: 0px;\">NOVINKA</b> - <div style=\"display: inline; color: red; border: 1px outset blue; padding: 2px 2px 0px 2px; letter-spacing: 2px;\">RÔZNE</div>', expanded: false, draggable: false, children:
                            [
                            {nodeType: "gx_layer", layer: "Rybárske revíry" , qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>"},
                            ]
                        },
                */
                //SM, 18.01.2021 <<<
                {
                    text: 'Občianske združenie PRALES', expanded: false, draggable: false, qtip: "&copy;&nbsp;OZ Prales", children:
                        [
                            { nodeType: "gx_layer", layer: "Pralesy" },
                            { nodeType: "gx_layer", layer: "Pralesy - zvyšky" },
                        ]
                },
                {
                    text: 'Národné lesnícke centrum', expanded: false, draggable: false, qtip: "&copy;&nbsp;NLC Zvolen", children:
                        [
                            { nodeType: "gx_layer", layer: "Lesné oblasti" },
                            { nodeType: "gx_layer", layer: "Lesné hospodárske celky" },
                            { nodeType: "gx_layer", layer: "Poľovné revíry" },
                            { nodeType: "gx_layer", layer: "Trvalé monitorovacie plochy" },
                            { nodeType: "gx_layer", layer: "Trvalé výskumné plochy" },
                            { nodeType: "gx_layer", layer: "Vodné toky" },
                            { nodeType: "gx_layer", layer: "Lesné cesty" },
                            { nodeType: "gx_layer", layer: "Lesné pôdne typy" },
                            { nodeType: "gx_layer", layer: "Lesné typy" },
                            { nodeType: "gx_layer", layer: "Jednotky priestorového rozdelenia lesa" },
                            { nodeType: "gx_layer", layer: "Drevinové zloženie" },
                            { nodeType: "gx_layer", layer: "JPRL - 2017 (od NLC pre ŠOP)", text: "<b style=\"color:red;\">JPRL - 2017 (od NLC pre ŠOP)</b>", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                            { nodeType: "gx_layer", layer: "JPRL - 2018 (od NLC pre ŠOP)", text: "<b style=\"color:red;\">JPRL - 2018 (od NLC pre ŠOP)</b>", qtip: "<b style=\"color: red; font-size: 12pt;\">vrstva viditeľná len z pracoviska ŠOP</b>" },
                            //		        {nodeType: "gx_layer", layer: "Porastová mapa", qtip: "LVU-NLC" },
                            //{nodeType: "gx_layer", layer: "MIG"},
                        ]
                },
                {
                    text: 'NPPC - Výskumný ústav pôdoznalectva a ochrany pôdy', expanded: false, draggable: false, qtip: "&copy;&nbsp;", children:
                        [
                            { nodeType: "gx_layer", layer: "LPIS 2019" },
                        ]
                },
                {
                    text: 'Úrad geodézie, kartografie a katastra SR', expanded: false, draggable: false, qtip: "&copy;&nbsp;ÚGKK SR", children:
                        [
                            { nodeType: "gx_layer", layer: "C parcely (spracované ŠOPSR)" },
                            { nodeType: "gx_layer", layer: "E parcely (spracované ŠOPSR)" },
                            { nodeType: "gx_layer", layer: "Parcely registra C" },
                            { nodeType: "gx_layer", layer: "Parcely registra E" },
                            { nodeType: "gx_layer", layer: "Obce" },
                            { nodeType: "gx_layer", layer: "Katastrálne územia" },
                            { nodeType: "gx_layer", layer: "Okresy" },
                            { nodeType: "gx_layer", layer: "Kraje" },
                        ]
                },

                {
                    text: 'Slovenský vodohospodársky podnik', expanded: false, draggable: false, qtip: "&copy;&nbsp;SVP", children:
                        [
                            { nodeType: "gx_layer", layer: "SVP - Vodné toky" },
                        ]
                },
                {
                    text: 'FREEMAP.sk', expanded: false, draggable: false, qtip: "&copy;&nbsp;FREEMAP", children:
                        [
                            { nodeType: "gx_layer", layer: "Turistické chodníky (freemap)" },
                            { nodeType: "gx_layer", layer: "Cyklotrasy (freemap)" }
                        ]
                },
                /*
                        {text:'HIKING', expanded: false, draggable: false, children:
                                [
                            {nodeType: "gx_layer", layer: "Turistické chodníky (hiking)" },
                            {nodeType: "gx_layer", layer: "Cykloznačky (waymarkedtrails.org)" }
                                ]
                        },
                */
                {
                    text: 'Gridy', expanded: true, draggable: false, children:
                        [
                            { nodeType: "gx_layer", layer: "GRID: ETRS 100km" },
                            { nodeType: "gx_layer", layer: "GRID: ETRS 10km" },
                            { nodeType: "gx_layer", layer: "GRID: ETRS 1km" },
                            {
                                text: 'Gridy - iné', expanded: false, draggable: false, children:
                                    [
                                        { nodeType: "gx_layer", layer: "GRID: DFS" },
                                        { nodeType: "gx_layer", layer: "GRID: 50x50 km" },
                                        { nodeType: "gx_layer", layer: "GRID: 50000" },
                                        { nodeType: "gx_layer", layer: "GRID: 25000" },
                                        { nodeType: "gx_layer", layer: "GRID: 10000" },
                                        { nodeType: "gx_layer", layer: "GRID: 5000" },
                                        { nodeType: "gx_layer", layer: "GRID: KM-sieť" },
                                        { nodeType: "gx_layer", layer: "GRID: KM-sieť: 3.,4. pásmo" },
                                    ]
                            },
                        ]
                },

                {
                    text: 'Editor', expanded: false, draggable: false, children:
                        [
                            //			{nodeType: "gx_layer", layer: "My Upload" },
                            { nodeType: "gx_layer", layer: "Editor", text: "Moje vytvorené geometrie" },
                        ]
                },
            ]
    }
];

if (externalUrl) {
    console.log('externalLayerNode:', externalLayerNode);
    // treeTheme[0].children.splice(0, 0, externalLayerNode);
    treeTheme.splice(0, 0, externalLayerNode);
    // treeTheme[0].children.push(externalLayerNode);
}

// Replace default layer browser DefaultConfig.js
// Pass our theme tree config as an option
Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = treeTheme;