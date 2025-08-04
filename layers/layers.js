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
var format_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = new ol.format.GeoJSON();
var features_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = format_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.readFeatures(json_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.addFeatures(features_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1);
var lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1, 
                style: style_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1,
                popuplayertitle: 'Kommunegrænse_slagelse — kommuneinddeling_dagi_110000',
                interactive: false,
                title: '<img src="styles/legend/Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.png" /> Kommunegrænse_slagelse — kommuneinddeling_dagi_110000'
            });
var format_Feltpolygoner_fremgangsdokument_2 = new ol.format.GeoJSON();
var features_Feltpolygoner_fremgangsdokument_2 = format_Feltpolygoner_fremgangsdokument_2.readFeatures(json_Feltpolygoner_fremgangsdokument_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Feltpolygoner_fremgangsdokument_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feltpolygoner_fremgangsdokument_2.addFeatures(features_Feltpolygoner_fremgangsdokument_2);
var lyr_Feltpolygoner_fremgangsdokument_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feltpolygoner_fremgangsdokument_2, 
                style: style_Feltpolygoner_fremgangsdokument_2,
                popuplayertitle: 'Feltpolygoner_fremgangsdokument',
                interactive: true,
    title: 'Feltpolygoner_fremgangsdokument<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_2_0.png" /> Hede<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_2_1.png" /> Mose<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_2_2.png" /> Strandeng<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_2_3.png" /> Eng<br />\
    <img src="styles/legend/Feltpolygoner_fremgangsdokument_2_4.png" /> Overdrev<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.setVisible(true);lyr_Feltpolygoner_fremgangsdokument_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1,lyr_Feltpolygoner_fremgangsdokument_2];
lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'status': 'status', 'geometristatus': 'geometristatus', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'virkningsaktoer': 'virkningsaktoer', 'forretningshaendelse': 'forretningshaendelse', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'registreringsaktoer': 'registreringsaktoer', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'dagiid': 'dagiid', 'navn': 'navn', 'redigeringsret': 'redigeringsret', 'dataspecifikation': 'dataspecifikation', 'landekode': 'landekode', 'skala': 'skala', 'udtraeksdato': 'udtraeksdato', 'kommunekode': 'kommunekode', 'lau1vaerdi': 'lau1vaerdi', 'udenforkommuneinddeling': 'udenforkommuneinddeling', 'regionskode': 'regionskode', 'regionslokalid': 'regionslokalid', 'region_owns': 'region_owns', 'region_href': 'region_href', 'region_title': 'region_title', 'region_nilreason': 'region_nilreason', });
lyr_Feltpolygoner_fremgangsdokument_2.set('fieldAliases', {'Objekt_id': 'DMP objekt_ID', 'Natyp_navn': 'Naturtype', 'StedNavn': 'Slagelse ID', 'Orden': 'Afstand fra ref.punkt', 'Polygon_na': 'Polygon_na', });
lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'virkningfra': 'DateTime', 'virkningtil': 'DateTime', 'virkningsaktoer': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'registreringfra': 'DateTime', 'registreringtil': 'DateTime', 'registreringsaktoer': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'dagiid': 'TextEdit', 'navn': 'TextEdit', 'redigeringsret': 'TextEdit', 'dataspecifikation': 'TextEdit', 'landekode': 'TextEdit', 'skala': 'TextEdit', 'udtraeksdato': 'DateTime', 'kommunekode': 'TextEdit', 'lau1vaerdi': 'TextEdit', 'udenforkommuneinddeling': 'CheckBox', 'regionskode': 'TextEdit', 'regionslokalid': 'TextEdit', 'region_owns': 'CheckBox', 'region_href': 'TextEdit', 'region_title': 'TextEdit', 'region_nilreason': 'TextEdit', });
lyr_Feltpolygoner_fremgangsdokument_2.set('fieldImages', {'Objekt_id': 'TextEdit', 'Natyp_navn': 'TextEdit', 'StedNavn': 'TextEdit', 'Orden': 'TextEdit', 'Polygon_na': 'TextEdit', });
lyr_Kommunegrnse_slagelsekommuneinddeling_dagi_110000_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'virkningsaktoer': 'no label', 'forretningshaendelse': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'registreringsaktoer': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'dagiid': 'no label', 'navn': 'no label', 'redigeringsret': 'no label', 'dataspecifikation': 'no label', 'landekode': 'no label', 'skala': 'no label', 'udtraeksdato': 'no label', 'kommunekode': 'no label', 'lau1vaerdi': 'no label', 'udenforkommuneinddeling': 'no label', 'regionskode': 'no label', 'regionslokalid': 'no label', 'region_owns': 'no label', 'region_href': 'no label', 'region_title': 'no label', 'region_nilreason': 'no label', });
lyr_Feltpolygoner_fremgangsdokument_2.set('fieldLabels', {'Objekt_id': 'inline label - always visible', 'Natyp_navn': 'inline label - always visible', 'StedNavn': 'inline label - always visible', 'Orden': 'hidden field', 'Polygon_na': 'inline label - always visible', });
lyr_Feltpolygoner_fremgangsdokument_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});