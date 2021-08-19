var wms_layers = [];

var lyr_SAVILAYER_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI LAYER",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVILAYER_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3302105.681207, -2260059.348198, 3334249.777665, -2200652.368439]
                            })
                        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlesatellite_2 = new ol.layer.Tile({
            'title': 'google satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_gwenoropipelinenework_3 = new ol.format.GeoJSON();
var features_gwenoropipelinenework_3 = format_gwenoropipelinenework_3.readFeatures(json_gwenoropipelinenework_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gwenoropipelinenework_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gwenoropipelinenework_3.addFeatures(features_gwenoropipelinenework_3);
var lyr_gwenoropipelinenework_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gwenoropipelinenework_3, 
                style: style_gwenoropipelinenework_3,
                interactive: true,
                title: '<img src="styles/legend/gwenoropipelinenework_3.png" /> gwenoro pipeline nework'
            });
var format_gwerupipenetwork_4 = new ol.format.GeoJSON();
var features_gwerupipenetwork_4 = format_gwerupipenetwork_4.readFeatures(json_gwerupipenetwork_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gwerupipenetwork_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gwerupipenetwork_4.addFeatures(features_gwerupipenetwork_4);
var lyr_gwerupipenetwork_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gwerupipenetwork_4, 
                style: style_gwerupipenetwork_4,
                interactive: true,
                title: '<img src="styles/legend/gwerupipenetwork_4.png" /> gweru pipe network'
            });
var format_gwenoroleakages_5 = new ol.format.GeoJSON();
var features_gwenoroleakages_5 = format_gwenoroleakages_5.readFeatures(json_gwenoroleakages_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gwenoroleakages_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gwenoroleakages_5.addFeatures(features_gwenoroleakages_5);
var lyr_gwenoroleakages_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gwenoroleakages_5, 
                style: style_gwenoroleakages_5,
                interactive: true,
                title: '<img src="styles/legend/gwenoroleakages_5.png" /> gwenoro leakages'
            });

lyr_SAVILAYER_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_googlesatellite_2.setVisible(true);lyr_gwenoropipelinenework_3.setVisible(true);lyr_gwerupipenetwork_4.setVisible(true);lyr_gwenoroleakages_5.setVisible(true);
var layersList = [lyr_SAVILAYER_0,lyr_OpenStreetMap_1,lyr_googlesatellite_2,lyr_gwenoropipelinenework_3,lyr_gwerupipenetwork_4,lyr_gwenoroleakages_5];
lyr_gwenoropipelinenework_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Diameter': 'Diameter', 'Material': 'Material', 'Comments': 'Comments', 'Shape_Leng': 'Shape_Leng', 'function': 'function', 'LENGTH': 'LENGTH', 'DC_ID': 'DC_ID', 'NODE1': 'NODE1', 'NODE2': 'NODE2', 'ROUGHNESS': 'ROUGHNESS', 'MINORLOSS': 'MINORLOSS', 'RESULT_FLO': 'RESULT_FLO', 'RESULT_VEL': 'RESULT_VEL', 'RESULT_HEA': 'RESULT_HEA', 'STATUS': 'STATUS', 'PROBLEMS': 'PROBLEMS', 'TAG': 'TAG', });
lyr_gwerupipenetwork_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Diameter': 'Diameter', 'Material': 'Material', 'Comments': 'Comments', 'Shape_Leng': 'Shape_Leng', 'function': 'function', 'LENGTH': 'LENGTH', 'DC_ID': 'DC_ID', 'NODE1': 'NODE1', 'NODE2': 'NODE2', 'ROUGHNESS': 'ROUGHNESS', 'MINORLOSS': 'MINORLOSS', 'RESULT_FLO': 'RESULT_FLO', 'RESULT_VEL': 'RESULT_VEL', 'RESULT_HEA': 'RESULT_HEA', 'STATUS': 'STATUS', 'PROBLEMS': 'PROBLEMS', 'TAG': 'TAG', });
lyr_gwenoroleakages_5.set('fieldAliases', {'ec5_uuid': 'ec5_uuid', 'created_at': 'created_at', 'uploaded_a': 'uploaded_a', 'title': 'title', '1_Line_Des': '1_Line_Des', '2_Features': '2_Features', '3_State_of': '3_State_of', '4_Explanat': '4_Explanat', '5_Picture': '5_Picture', 'lat_6_Loca': 'lat_6_Loca', 'long_6_Loc': 'long_6_Loc', 'accuracy_6': 'accuracy_6', 'UTM_Eastin': 'UTM_Eastin', 'UTM_Northi': 'UTM_Northi', 'UTM_Zone_6': 'UTM_Zone_6', });
lyr_gwenoropipelinenework_3.set('fieldImages', {'OBJECTID': '', 'Diameter': '', 'Material': '', 'Comments': '', 'Shape_Leng': '', 'function': '', 'LENGTH': '', 'DC_ID': '', 'NODE1': '', 'NODE2': '', 'ROUGHNESS': '', 'MINORLOSS': '', 'RESULT_FLO': '', 'RESULT_VEL': '', 'RESULT_HEA': '', 'STATUS': '', 'PROBLEMS': '', 'TAG': '', });
lyr_gwerupipenetwork_4.set('fieldImages', {'OBJECTID': '', 'Diameter': '', 'Material': '', 'Comments': '', 'Shape_Leng': '', 'function': '', 'LENGTH': '', 'DC_ID': '', 'NODE1': '', 'NODE2': '', 'ROUGHNESS': '', 'MINORLOSS': '', 'RESULT_FLO': '', 'RESULT_VEL': '', 'RESULT_HEA': '', 'STATUS': '', 'PROBLEMS': '', 'TAG': '', });
lyr_gwenoroleakages_5.set('fieldImages', {'ec5_uuid': '', 'created_at': '', 'uploaded_a': '', 'title': '', '1_Line_Des': '', '2_Features': '', '3_State_of': '', '4_Explanat': '', '5_Picture': '', 'lat_6_Loca': '', 'long_6_Loc': '', 'accuracy_6': '', 'UTM_Eastin': '', 'UTM_Northi': '', 'UTM_Zone_6': '', });
lyr_gwenoropipelinenework_3.set('fieldLabels', {'OBJECTID': 'no label', 'Diameter': 'no label', 'Material': 'no label', 'Comments': 'no label', 'Shape_Leng': 'no label', 'function': 'no label', 'LENGTH': 'no label', 'DC_ID': 'no label', 'NODE1': 'no label', 'NODE2': 'no label', 'ROUGHNESS': 'no label', 'MINORLOSS': 'no label', 'RESULT_FLO': 'no label', 'RESULT_VEL': 'no label', 'RESULT_HEA': 'no label', 'STATUS': 'no label', 'PROBLEMS': 'no label', 'TAG': 'no label', });
lyr_gwerupipenetwork_4.set('fieldLabels', {'OBJECTID': 'header label', 'Diameter': 'header label', 'Material': 'no label', 'Comments': 'inline label', 'Shape_Leng': 'no label', 'function': 'header label', 'LENGTH': 'no label', 'DC_ID': 'no label', 'NODE1': 'no label', 'NODE2': 'no label', 'ROUGHNESS': 'no label', 'MINORLOSS': 'no label', 'RESULT_FLO': 'no label', 'RESULT_VEL': 'no label', 'RESULT_HEA': 'no label', 'STATUS': 'no label', 'PROBLEMS': 'no label', 'TAG': 'no label', });
lyr_gwenoroleakages_5.set('fieldLabels', {'ec5_uuid': 'no label', 'created_at': 'no label', 'uploaded_a': 'no label', 'title': 'no label', '1_Line_Des': 'no label', '2_Features': 'no label', '3_State_of': 'no label', '4_Explanat': 'no label', '5_Picture': 'no label', 'lat_6_Loca': 'no label', 'long_6_Loc': 'no label', 'accuracy_6': 'no label', 'UTM_Eastin': 'no label', 'UTM_Northi': 'no label', 'UTM_Zone_6': 'no label', });
lyr_gwenoroleakages_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});