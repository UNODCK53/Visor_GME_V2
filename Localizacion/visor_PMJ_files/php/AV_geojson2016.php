<?php     
    include_once("geophp/geoPHP.inc");
    include_once("connection.php");
    
    // CHANGE MySQL TO JSON :
    $SQL = "SELECT Num_AV, NOM_PE, FECHA_INTO_AV, USUARIO, astext(punto) as shape FROM `control_vivac` WHERE `AÑO`='16' and `USUARIO` <> 'tester'";
    $result = mysql_query($SQL, $connection);
    $features = array();    
    while($row = mysql_fetch_array($result)){
        $geom = geoPHP::load($row["shape"],'wkt');
        $json = $geom->out('json');
        $features[] = array( 
        			"type" => "Feature",
        			"properties" => array(
		        			"Num_AV" => $row["Num_AV"],
		        			"NOM_PE" => $row["NOM_PE"],
							"USUARIO" => $row["USUARIO"],
							"FECHA_INTO_AV" => $row["FECHA_INTO_AV"],
	        			),
        			"geometry" => json_decode($json),
	        );
    }
    $feature_collection = array(
    		"type" => "FeatureCollection",
    		"features" => $features,
    	);
	$AV16=$feature_collection;
	//echo json_encode($feature_collection, true);
?>
