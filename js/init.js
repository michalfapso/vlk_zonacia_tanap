// >>>>>> DEFINICIE sur. systemov pre Proj4js kniznicu >>>>>>

// S-JTSK - bez transformacnych klucov
//Proj4js.defs["EPSG:102067"] = "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=0 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs ";
// predch. definícia je nesprávna, chce to "pm=ferro", nasledovná -> už je správna
Proj4js.defs["EPSG:102067"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=485.0,169.5,483.8,7.786,4.398,4.103,0";
//proj4.defs["EPSG:102067"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=485.0,169.5,483.8,7.786,4.398,4.103,0";

// S-JTSK (oficiálný kľúč GKÚ pre SR (kľúč netransformuje výšku!)) (max. odchylka v polohe[xy] <2m, výške[z] N/A )
//Proj4js.defs["EPSG:102067_1"] = "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +pm=greenwich +units=m +no_defs +towgs84=485.0,169.5,483.8,7.786,4.398,4.103,0";
//Proj4js.defs["EPSG:102067_1"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=485.0,169.5,483.8,7.786,4.398,4.103,0";
//proj4.defs["EPSG:102067_1"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=485.0,169.5,483.8,7.786,4.398,4.103,0";

// S-JTSK (kľúč 2013 Bárta pre SR) (max. odchylka v polohe(xy) <1m, výške(z) <3m )
//Proj4js.defs["EPSG:102067_2"] = "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +pm=greenwich +units=m +no_defs +towgs84=511.9,92.0,437.3,6.305,2.823,5.944,12.2";
//Proj4js.defs["EPSG:102067_2"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=511.9,92.0,437.3,6.305,2.823,5.944,12.2";
//proj4.defs["EPSG:102067_2"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=511.9,92.0,437.3,6.305,2.823,5.944,12.2";

// S-JTSK (kľúč 2013 Bárta pre obe zeme ČR a SR) (max. odchylka v polohe[xy] <2m, výške[z] <2m )
//Proj4js.defs["EPSG:102067_3"] = "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +pm=greenwich +units=m +no_defs +towgs84=542.5,89.2,456.9,5.517,2.275,5.516,6.96";
//Proj4js.defs["EPSG:102067_3"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=542.5,89.2,456.9,5.517,2.275,5.516,6.96";
//proj4.defs["EPSG:102067_3"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=542.5,89.2,456.9,5.517,2.275,5.516,6.96";

// S-JTSK (102067) (oficiálný kľúč ČÚZK pre ČR) (max. odchylka v poloze[xy] <1m, výšce[z] <2m )
//Proj4js.defs["EPSG:102067_4"] = "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +pm=greenwich +units=m +no_defs +towgs84=570.8,85.7,462.8,4.998,1.587,5.261,3.56";
//Proj4js.defs["EPSG:102067_4"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=570.8,85.7,462.8,4.998,1.587,5.261,3.56";
//proj4.defs["EPSG:102067_4"] = "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=-0 +y_0=-0 +ellps=bessel +pm=ferro +to_meter=-1 +no_defs +towgs84=570.8,85.7,462.8,4.998,1.587,5.261,3.56";

// S-42 3.pasmo >>>
Proj4js.defs["EPSG:28403"] = "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +units=m +no_defs";
//proj4.defs["EPSG:28403"] = "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +units=m +no_defs";

// S-42 4.pasmo >>>
Proj4js.defs["EPSG:28404"] = "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +units=m +no_defs";
//proj4.defs["EPSG:28404"] = "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +units=m +no_defs";

//SM, 10.05.2016 >>
//https://epsg.io/5514
Proj4js.defs["EPSG:5514"] = "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=485.0,169.5,483.8,7.786,4.398,4.103,0 +units=m +no_defs";
//Proj4js.defs["EPSG:5514"]="+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs +type=crs";

// Google mercator >>>
Proj4js.defs["EPSG:900913"] = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";
//proj4.defs["EPSG:900913"] = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";
Proj4js.defs["EPSG:3857"] = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";

// <<<<<< DEFINICIE sur. systemov pre Proj4js kniznicu <<<<<<

Ext.namespace("Heron.options");
Ext.namespace("Heron.scratch");
OpenLayers.Util.onImageLoadErrorColor = "transparent";
// OpenLayers.ProxyHost = "https://maps.sopsr.sk/cgi-bin/proxy.cgi?url=";

// Disable X-Requested-With header which causes CORS issues with some ArcGIS servers
// We do this aggressively by overriding setRequestHeader to ensure no library (OL, ExtJS, etc.) can add it
(function () {
    var originalSetHeader = XMLHttpRequest.prototype.setRequestHeader;
    XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
        if (header && header.toLowerCase() === 'x-requested-with') {
            return;
        }
        originalSetHeader.apply(this, arguments);
    };
})();

if (OpenLayers.Request.DEFAULT_CONFIG) {
    OpenLayers.Request.DEFAULT_CONFIG.headers = OpenLayers.Request.DEFAULT_CONFIG.headers || {};
    delete OpenLayers.Request.DEFAULT_CONFIG.headers["X-Requested-With"];
}
// Also for ExtJS
if (window.Ext && Ext.Ajax) {
    Ext.Ajax.defaultHeaders = Ext.Ajax.defaultHeaders || {};
    delete Ext.Ajax.defaultHeaders['X-Requested-With'];
}

//Ext.BLANK_IMAGE_URL = 'http://lib.heron-mc.org/ext/3.4.1.1/resources/images/default/s.gif';
Ext.BLANK_IMAGE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';

OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;
// make OL compute scale according to WMS spec
OpenLayers.DOTS_PER_INCH = 25.4 / 0.28;
//Heron.globals.serviceUrl  = '/cgi-bin/heron.cgi.20131017';
Heron.globals.serviceUrl = 'https://maps.sopsr.sk/cgi-bin/heron.cgi.20140526';
//Heron.globals.serviceUrl  = 'https://maps.sopsr.sk/cgi-bin/heron.cgi';
var default_wms_properties = { isBaseLayer: false, visibility: false, hideInLegend: false, featureInfoFormat: "application/vnd.ogc.gml", opacity: 0.3, };

//OpenLayers.Util.getElement("graphic").innerHTML = 'pokus';

Ext.namespace("Heron.options.map");

Ext.namespace("Heron.options.wfs");

var matrixIds = new Array(12);
for (var i = 0; i < 12; ++i) {
    matrixIds[i] = "EPSG:900913:" + i;
}
/*    var zbgisMatrix=[
{
identifier:"0", scaleDenominator:4354125.143421019, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256, matrixWidth:108, matrixHeight:113 }, { identifier:"1", scaleDenominator:2177062.571711008, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"2", scaleDenominator:1088531.3057917529, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"3", scaleDenominator:544265.6429282505, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"4", scaleDenominator:272132.8214631284, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"5", scaleDenominator:136066.6798843788, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"6", scaleDenominator:68033.2053657821, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"7", scaleDenominator:34016.60268338948, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"8", scaleDenominator:17008.30134169474, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"9", scaleDenominator:8504.150671345802, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"10", scaleDenominator:4252.0753346760375, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"11", scaleDenominator:2126.0376678364505, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 }, { identifier:"12", scaleDenominator:1063.0188339182253, topLeftCorner: new OpenLayers.LonLat([-3.36998e7,3.36998e7]), tileWidth:256, tileHeight:256 } ];
*/