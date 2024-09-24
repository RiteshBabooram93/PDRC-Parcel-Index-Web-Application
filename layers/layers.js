var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_VictoriaCounty_1 = new ol.format.GeoJSON();
var features_VictoriaCounty_1 = format_VictoriaCounty_1.readFeatures(json_VictoriaCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictoriaCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictoriaCounty_1.addFeatures(features_VictoriaCounty_1);
var lyr_VictoriaCounty_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VictoriaCounty_1, 
                style: style_VictoriaCounty_1,
                interactive: false,
                title: '<img src="styles/legend/VictoriaCounty_1.png" /> Victoria County'
            });
var format_StPatrickCounty_2 = new ol.format.GeoJSON();
var features_StPatrickCounty_2 = format_StPatrickCounty_2.readFeatures(json_StPatrickCounty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StPatrickCounty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StPatrickCounty_2.addFeatures(features_StPatrickCounty_2);
var lyr_StPatrickCounty_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StPatrickCounty_2, 
                style: style_StPatrickCounty_2,
                interactive: false,
                title: '<img src="styles/legend/StPatrickCounty_2.png" /> St Patrick County'
            });
var format_ElectoralDistricts_3 = new ol.format.GeoJSON();
var features_ElectoralDistricts_3 = format_ElectoralDistricts_3.readFeatures(json_ElectoralDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectoralDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectoralDistricts_3.addFeatures(features_ElectoralDistricts_3);
var lyr_ElectoralDistricts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectoralDistricts_3, 
                style: style_ElectoralDistricts_3,
                interactive: true,
    title: 'Electoral Districts<br />\
    <img src="styles/legend/ElectoralDistricts_3_0.png" /> BARRACKPORE WEST<br />\
    <img src="styles/legend/ElectoralDistricts_3_1.png" /> BRONTE<br />\
    <img src="styles/legend/ElectoralDistricts_3_2.png" /> DEBE EAST/L\'ESPERANCE/UNION HALL<br />\
    <img src="styles/legend/ElectoralDistricts_3_3.png" /> DEBE SOUTH<br />\
    <img src="styles/legend/ElectoralDistricts_3_4.png" /> LA FORTUNE/DEBE NORTH<br />\
    <img src="styles/legend/ElectoralDistricts_3_5.png" /> LA ROMAINE<br />\
    <img src="styles/legend/ElectoralDistricts_3_6.png" /> PALMISTE/HERMITAGE<br />\
    <img src="styles/legend/ElectoralDistricts_3_7.png" /> PENAL<br />\
    <img src="styles/legend/ElectoralDistricts_3_8.png" /> QUINAM/ MORNE DIABLO<br />\
    <img src="styles/legend/ElectoralDistricts_3_9.png" /> ROCHARD/BARRACKPORE EAST<br />'
        });
var format_Parcels_4 = new ol.format.GeoJSON();
var features_Parcels_4 = format_Parcels_4.readFeatures(json_Parcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_4.addFeatures(features_Parcels_4);
var lyr_Parcels_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcels_4, 
                style: style_Parcels_4,
                interactive: true,
                title: '<img src="styles/legend/Parcels_4.png" /> Parcels'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_VictoriaCounty_1.setVisible(true);lyr_StPatrickCounty_2.setVisible(true);lyr_ElectoralDistricts_3.setVisible(true);lyr_Parcels_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_VictoriaCounty_1,lyr_StPatrickCounty_2,lyr_ElectoralDistricts_3,lyr_Parcels_4];
lyr_VictoriaCounty_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNTY': 'COUNTY', });
lyr_StPatrickCounty_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNTY': 'COUNTY', });
lyr_ElectoralDistricts_3.set('fieldAliases', {'fid': 'fid', 'ED_2017': 'ED_2017', 'Councillor': 'Councillor', });
lyr_Parcels_4.set('fieldAliases', {'fid': 'fid', 'Parcel No': 'Parcel No', 'Area in m^2': 'Area in m^2', });
lyr_VictoriaCounty_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'COUNTY': 'TextEdit', });
lyr_StPatrickCounty_2.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'COUNTY': 'TextEdit', });
lyr_ElectoralDistricts_3.set('fieldImages', {'fid': 'TextEdit', 'ED_2017': 'TextEdit', 'Councillor': 'TextEdit', });
lyr_Parcels_4.set('fieldImages', {'fid': 'TextEdit', 'Parcel No': 'TextEdit', 'Area in m^2': 'TextEdit', });
lyr_VictoriaCounty_1.set('fieldLabels', {'fid': 'header label', 'AREA': 'header label', 'COUNTY': 'header label', });
lyr_StPatrickCounty_2.set('fieldLabels', {'fid': 'header label', 'AREA': 'header label', 'COUNTY': 'header label', });
lyr_ElectoralDistricts_3.set('fieldLabels', {'fid': 'header label', 'ED_2017': 'header label', 'Councillor': 'header label', });
lyr_Parcels_4.set('fieldLabels', {'fid': 'header label', 'Parcel No': 'header label', 'Area in m^2': 'header label', });
lyr_Parcels_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});