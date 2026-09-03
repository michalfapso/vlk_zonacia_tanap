# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## What this is

A static GIS web application for visualising Slovak nature-protection layers, adapted from maps.sopsr.sk. No build step, no bundler — open `index.html` directly in a browser or serve with any static server (e.g. `python3 -m http.server`).

**Stack:** OpenLayers 2.13.1 · GeoExt 1.1 · ExtJS 3.4.1.1 · Proj4JS 1.1.0 · Heron-mc framework. All libraries loaded from CDN via `<script>` tags in `index.html`.

## Adding or modifying layers

This is the most common task. Three files always change together:

1. **Define the layer** in the appropriate `js/layers/*.js` file by adding a key to `Heron.scratch.layermap`.
2. **Register it in the tree** in `js/config/heron_layertree.js` — reference the layer by its **exact display name string** (must match the first argument in the `new OpenLayers.Layer.*()` call).
3. `js/config/heron_layers.js` automatically collects all keys from `Heron.scratch.layermap` — no changes needed there unless you add a new layers file.

For a new layers file, add a `<script src="...">` tag in `index.html` **before** `heron_layers.js`.

### Vector layer pattern (local GeoJSON)

```javascript
Heron.scratch.layermap["My Layer"] = new OpenLayers.Layer.Vector("My Layer", {
    protocol: new OpenLayers.Protocol.HTTP({
        url: "path/to/file.geojson",
        format: new OpenLayers.Format.GeoJSON({
            internalProjection: new OpenLayers.Projection("EPSG:3857"),
            externalProjection: new OpenLayers.Projection("EPSG:3857"),
            ignoreExtraDims: true   // required — extra properties break rendering
        })
    }),
    strategies: [new OpenLayers.Strategy.Fixed()],
    styleMap: myStyleMap,
    isBaseLayer: false,
    visibility: false
});
```

If GeoJSON data is in WGS84 (EPSG:4326), set `externalProjection: new OpenLayers.Projection("EPSG:4326")`.

### WMS layer pattern (remote GeoServer)

```javascript
Heron.scratch.layermap["My WMS Layer"] = new OpenLayers.Layer.WMS(
    "My WMS Layer",
    "https://maps.sopsr.sk/geoserver/wms",
    { layers: "workspace:layer_name", format: "image/png", transparent: true },
    { isBaseLayer: false, visibility: false, opacity: 0.7 }
);
```

### Style rules

Styles live in a separate `*_style.js` file. Rule-based (attribute-driven) approach:

```javascript
var myStyle = new OpenLayers.Style({ fillColor: "#808080", fillOpacity: 0.5, strokeWidth: 1 });
myStyle.addRules([
    new OpenLayers.Rule({
        filter: new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.EQUAL_TO,
            property: "ATTRIBUTE_NAME",
            value: "value"
        }),
        symbolizer: { fillColor: "#006400" }
    })
]);
var myStyleMap = new OpenLayers.StyleMap({ "default": myStyle });
```

SVG pattern fills (used by Čergov layers) are defined as `<defs>` in `index.html` and referenced by `id` in the style.

## Architecture overview

```
init.js                     — projections (S-JTSK, S-42, EPSG:3857), Heron/OL globals
layer_common.js             — shared utilities: LayerCommon.getFormat(), getStyleMap(),
                              createArcGISVectorLayer(), addLayerToMapAndTree()
local_layer_loader.js       — modal dialog for user-uploaded files / pasted URLs
external_layer_parser.js    — reads ?ext_url=&ext_name=&ext_crs=&ext_style_url= on load

js/layers/
  base.js                   — OSM, OpenTopoMap, WMS background layers, KML grid
  biotopy_hluchana.js       — Western capercaillie (hlucháň) habitat GeoJSON layers
  ostatne.js                — protected areas, JPRL forest data, cadastral, NLC
  chranene_stromy.js        — protected trees by region (GML from maps.sopsr.sk)
  zonacia.js                — national park zoning (local GeoJSON + remote WMS)
  zonacia_*_style.js        — colour rules per zone (A/B/C/D) for TANAP/NAPANT/Poloniny
  cergov.js                 — Prírodný park Čergov GeoJSON layers
  cergov_style.js           — age-class colour gradient + SVG pattern fills for Čergov

js/config/
  heron_layers.js           — collects Heron.scratch.layermap → Heron.options.map.layers
  heron_layertree.js        — UI panel tree: folders, expand state, layer references
  heron_config.js           — toolbar, search panel, export formats, map centre/zoom
```

## Projections

All layers use **EPSG:3857** (Web Mercator) internally. Source data in WGS84 needs `externalProjection: EPSG:4326`. Custom Slovak projections (S-JTSK EPSG:5514, S-42 EPSG:4179) are registered in `init.js` via Proj4js for coordinate-display purposes.

## Converting shapefiles to GeoJSON

```bash
ogr2ogr -f GeoJSON output.geojson input.shp -t_srs EPSG:3857
```

## Cache busting

Append `?v=N` to `<script src="...">` URLs in `index.html` when deploying updated layer files.
