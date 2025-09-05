var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Feltpolygoner_fremgangsdokument_1 = new ol.format.GeoJSON();
var features_Feltpolygoner_fremgangsdokument_1 = format_Feltpolygoner_fremgangsdokument_1.readFeatures(json_Feltpolygoner_fremgangsdokument_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Feltpolygoner_fremgangsdokument_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feltpolygoner_fremgangsdokument_1.addFeatures(features_Feltpolygoner_fremgangsdokument_1);
var lyr_Feltpolygoner_fremgangsdokument_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feltpolygoner_fremgangsdokument_1, 
                style: style_Feltpolygoner_fremgangsdokument_1,
                popuplayertitle: 'Feltpolygoner_fremgangsdokument',
                interactive: true,
    title: 'Feltpolygoner_fremgangsdokument<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_1_0.png" /> Hede<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_1_1.png" /> Mose<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_1_2.png" /> Strandeng<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_1_3.png" /> Eng<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_1_4.png" /> Overdrev<br />' });
var format_Kortlgges_feltID_2 = new ol.format.GeoJSON();
var features_Kortlgges_feltID_2 = format_Kortlgges_feltID_2.readFeatures(json_Kortlgges_feltID_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kortlgges_feltID_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kortlgges_feltID_2.addFeatures(features_Kortlgges_feltID_2);
var lyr_Kortlgges_feltID_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kortlgges_feltID_2, 
                style: style_Kortlgges_feltID_2,
                popuplayertitle: 'Kortlægges_feltID',
                interactive: true,
    title: 'Kortlægges_feltID<br />\
    <img src="styles/legend/Kortlgges_feltID_2_0.png" /> Hede<br />\
    <img src="styles/legend/Kortlgges_feltID_2_1.png" /> Mose<br />\
    <img src="styles/legend/Kortlgges_feltID_2_2.png" /> Strandeng<br />\
    <img src="styles/legend/Kortlgges_feltID_2_3.png" /> Eng<br />\
    <img src="styles/legend/Kortlgges_feltID_2_4.png" /> Overdrev<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Feltpolygoner_fremgangsdokument_1.setVisible(true);lyr_Kortlgges_feltID_2.setVisible(false);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Feltpolygoner_fremgangsdokument_1,lyr_Kortlgges_feltID_2];
lyr_Feltpolygoner_fremgangsdokument_1.set('fieldAliases', {'Objekt_id': 'DMP objekt_ID', 'Natyp_navn': 'Naturtype', 'StedNavn': 'Slagelse ID', 'Orden': 'Afstand fra ref.punkt', 'Polygon_na': 'Polygon_na', });
lyr_Kortlgges_feltID_2.set('fieldAliases', {'Objekt_id': 'DMP objekt_ID', 'Natyp_navn': 'Naturtype', 'StedNavn': 'Slagelse ID', 'Orden': 'Afstand fra ref.punkt', 'Polygon_name': 'FeltID', });
lyr_Feltpolygoner_fremgangsdokument_1.set('fieldImages', {'Objekt_id': 'TextEdit', 'Natyp_navn': 'TextEdit', 'StedNavn': 'TextEdit', 'Orden': 'TextEdit', 'Polygon_na': 'TextEdit', });
lyr_Kortlgges_feltID_2.set('fieldImages', {'Objekt_id': 'TextEdit', 'Natyp_navn': 'TextEdit', 'StedNavn': 'TextEdit', 'Orden': 'TextEdit', 'Polygon_name': 'TextEdit', });
lyr_Feltpolygoner_fremgangsdokument_1.set('fieldLabels', {'Objekt_id': 'inline label - always visible', 'Natyp_navn': 'inline label - always visible', 'StedNavn': 'inline label - always visible', 'Orden': 'hidden field', 'Polygon_na': 'inline label - always visible', });
lyr_Kortlgges_feltID_2.set('fieldLabels', {'Objekt_id': 'inline label - always visible', 'Natyp_navn': 'inline label - visible with data', 'StedNavn': 'inline label - always visible', 'Orden': 'hidden field', 'Polygon_name': 'inline label - always visible', });
lyr_Kortlgges_feltID_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});