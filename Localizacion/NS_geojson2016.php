<?php     
    include_once("geophp/geoPHP.inc");
    include_once("connection.php");
    
    // CHANGE MySQL TO JSON :
    $SQL = "SELECT `NOM_PE`, `FECHA_REPORT`, `3_AEI_controlado`,`3_AEI_no_controlado`,`3_Bloqueo_parcial_de_la_comunidad`,`3_Bloqueo_total_de_la_comunidad`,`3_Combate`,`3_Hostigamiento`,`3_MAP_Controlada`,`3_MAP_No_controlada`,`3_MUSE`,`3_Operaciones_de_seguridad`,astext(PSeguridad) as shape FROM `info_diario` WHERE `AÑO`='16' and `USUARIO` <> 'tester' and `PSeguridad`<>'NULL'";
    $result = mysql_query($SQL, $connection);
    $features = array();    
    while($row = mysql_fetch_array($result)){
        $geom = geoPHP::load($row["shape"],'wkt');
        $json = $geom->out('json');
        $features[] = array( 
        			"type" => "Feature",
        			"properties" => array(
		        			"NOM_PE" => $row["NOM_PE"],
							"FECHA_REPORT" => $row["FECHA_REPORT"],
							"AEI_controlado" => $row["3_AEI_controlado"],
							"AEI_no_controlado" => $row["3_AEI_no_controlado"],
							"Bloqueo_parcial_de_la_comunidad" => $row["3_Bloqueo_parcial_de_la_comunidad"],
							"Bloqueo_total_de_la_comunidad" => $row["3_Bloqueo_total_de_la_comunidad"],
							"Combate" => $row["3_Combate"],
							"Hostigamiento" => $row["3_Hostigamiento"],
							"MAP_Controlada" => $row["3_MAP_Controlada"],
							"MAP_No_controlada" => $row["3_MAP_No_controlada"],
							"MUSE" => $row["3_MUSE"],
							"Operaciones_de_seguridad" => $row["3_Operaciones_de_seguridad"],
							
	        			),
        			"geometry" => json_decode($json),
	        );
    }
    $feature_collection = array(
    		"type" => "FeatureCollection",
    		"features" => $features,
    	);
	$NS16=$feature_collection;
	//echo json_encode($feature_collection, true);
?>
