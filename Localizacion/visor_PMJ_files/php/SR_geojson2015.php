<?php     
    include_once("geophp/geoPHP.inc");
    include_once("connection.php");
    
    // CHANGE MySQL TO JSON :
    $SQL = "SELECT `NOM_PE`, `FECHA_REPORT`, astext(PSector) as shape FROM `info_diario` WHERE `AÑO`='15' and `USUARIO` <> 'tester' and `PSector`<>'NULL'";
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
							
	        			),
        			"geometry" => json_decode($json),
	        );
    }
    $feature_collection = array(
    		"type" => "FeatureCollection",
    		"features" => $features,
    	);
	$SR15=$feature_collection;
	//echo json_encode($feature_collection, true);
?>
