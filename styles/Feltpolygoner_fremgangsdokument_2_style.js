var size = 0;
var placement = 'point';
function categories_Feltpolygoner_fremgangsdokument_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Hede':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(187,0,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(141,90,153,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mose':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(196,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(243,166,178,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Strandeng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,178,197,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(114,155,111,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Eng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(55,209,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(213,180,60,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Overdrev':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,240,46,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.028}),fill: new ol.style.Fill({color: 'rgba(164,113,88,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Feltpolygoner_fremgangsdokument_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Natyp_navn");
    var labelFont = "18.2px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Polygon_na") !== null) {
        labelText = String(feature.get("Polygon_na"));
    }
    
    var style = categories_Feltpolygoner_fremgangsdokument_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
