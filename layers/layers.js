var wms_layers = [];

var format_Intersection_0 = new ol.format.GeoJSON();
var features_Intersection_0 = format_Intersection_0.readFeatures(json_Intersection_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_0.addFeatures(features_Intersection_0);
var lyr_Intersection_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intersection_0, 
                style: style_Intersection_0,
                interactive: true,
    title: 'Intersection<br />\
    <img src="styles/legend/Intersection_0_0.png" /> Belukar<br />\
    <img src="styles/legend/Intersection_0_1.png" /> Belukar Rawa<br />\
    <img src="styles/legend/Intersection_0_2.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/Intersection_0_3.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/Intersection_0_4.png" /> Hutan Mangrove Primer<br />\
    <img src="styles/legend/Intersection_0_5.png" /> Hutan Rawa Primer<br />\
    <img src="styles/legend/Intersection_0_6.png" /> Hutan Rawa Sekunder<br />\
    <img src="styles/legend/Intersection_0_7.png" /> Pemukiman<br />\
    <img src="styles/legend/Intersection_0_8.png" /> Pertambangan<br />\
    <img src="styles/legend/Intersection_0_9.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/Intersection_0_10.png" /> Savana / Padang rumput<br />\
    <img src="styles/legend/Intersection_0_11.png" /> Tanah Terbuka<br />'
        });
var format_Channels_1 = new ol.format.GeoJSON();
var features_Channels_1 = format_Channels_1.readFeatures(json_Channels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Channels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Channels_1.addFeatures(features_Channels_1);
var lyr_Channels_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Channels_1, 
                style: style_Channels_1,
                interactive: true,
                title: '<img src="styles/legend/Channels_1.png" /> Channels'
            });

lyr_Intersection_0.setVisible(true);lyr_Channels_1.setVisible(true);
var layersList = [lyr_Intersection_0,lyr_Channels_1];
lyr_Intersection_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', 'objectid_1_2': 'objectid_1_2', 'objectid': 'objectid', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_Channels_1.set('fieldAliases', {'fid': 'fid', 'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_Intersection_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', 'objectid_1_2': 'TextEdit', 'objectid': 'TextEdit', 'kode_prov': 'TextEdit', 'nama_das': 'TextEdit', 'luas_ha': 'TextEdit', 'kel_m': 'TextEdit', 'prioritas_': 'TextEdit', 'kd_tematik': 'TextEdit', 'kd_region': 'TextEdit', 'kd_lintas': 'TextEdit', 'kd_das': 'TextEdit', 'wil_kerja': 'TextEdit', 'kd_urutdas': 'TextEdit', 'globalid': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_Channels_1.set('fieldImages', {'fid': 'TextEdit', 'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Intersection_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', 'objectid_1_2': 'no label', 'objectid': 'no label', 'kode_prov': 'no label', 'nama_das': 'no label', 'luas_ha': 'no label', 'kel_m': 'no label', 'prioritas_': 'no label', 'kd_tematik': 'no label', 'kd_region': 'no label', 'kd_lintas': 'no label', 'kd_das': 'no label', 'wil_kerja': 'no label', 'kd_urutdas': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'st_area(sh': 'no label', 'st_length(': 'no label', });
lyr_Channels_1.set('fieldLabels', {'fid': 'no label', 'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_Channels_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});