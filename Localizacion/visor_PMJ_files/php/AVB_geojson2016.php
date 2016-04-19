<?php     
    include_once("geophp/geoPHP.inc");
    include_once("connection.php");
    
    // CHANGE MySQL TO JSON :
    $SQL = "SELECT AV, NOM_PE, FECHA_INTO, USUARIO, astext(SHAPE) as shape FROM `areas_vivac_buffer` WHERE `AÑO`='16' and `USUARIO` <> 'tester'";
    $result = mysql_query($SQL, $connection);
    $features = array();    
    while($row = mysql_fetch_array($result)){
        $geom = geoPHP::load($row["shape"],'wkt');
        $json = $geom->out('json');
        $features[] = array( 
        			"type" => "Feature",
        			"properties" => array(
		        			"AV" => $row["AV"],
		        			"NOM_PE" => $row["NOM_PE"],
							"USUARIO" => $row["USUARIO"],
							"FECHA_INTO" => $row["FECHA_INTO"],
	        			),
        			"geometry" => json_decode($json),
	        );
    }
    $feature_collection = array(
    		"type" => "FeatureCollection",
    		"features" => $features,
    	);
	$AVB16=$feature_collection;
	//echo json_encode($feature_collection, true);
?>
