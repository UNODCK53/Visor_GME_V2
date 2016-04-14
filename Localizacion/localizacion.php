<!DOCTYPE html>
<html>
<head>
<html lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>  
<title>Visor EM</title>

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>
<link rel="stylesheet" href="../css_js/leaflet-search.css" >
<link rel="stylesheet" href="../css_js/leaflet.css" />
<script "text/javascript"  src="../css_js/leaflet-search.js"></script>

<link rel="icon" href="../css_js/images/world.ico" type="image/x-icon">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script type="text/javascript" src="../css_js/jquery.min.js"></script>
<link rel="stylesheet" href="../css_js/Newmapstyle.css" />
<link rel="stylesheet" href="./visor_PMJ_files/stylesnew.css" />
<script type="text/javascript" src="https://www.google.com/jsapi?key="></script>
<script src="http://maps.google.com/maps/api/js?v=3&sensor=false"></script>
<script src="../css_js/Google.js"></script>
<script src="../css_js/Control.FullScreen.js"></script>
<link rel="stylesheet" href="../css_js/map_styles2.css" />
<script src="../css_js/L.Control.MousePosition.js"></script>
<script src="../css_js/leaflet-pip.js"></script>
<script src="./visor_PMJ_files/interaccion.js"></script>
<script src="./visor_PMJ_files/intersection.js"></script>
<script src="./visor_PMJ_files/results.js"></script>
<link rel="stylesheet" href="./visor_PMJ_files/MarkerCluster.css" />
<link rel="stylesheet" href="./visor_PMJ_files/MarkerCluster.Default.css" />
<script src="./visor_PMJ_files/leaflet.markercluster-src.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/Leaflet.draw.js"></script>
<link rel="stylesheet" href="./visor_PMJ_files/leaflet-draw/dist/leaflet.draw.css" />
<script src="./visor_PMJ_files/leaflet-draw/src/edit/handler/Edit.Poly.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/edit/handler/Edit.SimpleShape.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/edit/handler/Edit.Circle.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/edit/handler/Edit.Rectangle.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/handler/Draw.Feature.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/handler/Draw.Polyline.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/handler/Draw.Polygon.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/handler/Draw.SimpleShape.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/handler/Draw.Rectangle.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/handler/Draw.Circle.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/handler/Draw.Marker.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/ext/TouchEvents.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/ext/LatLngUtil.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/ext/GeometryUtil.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/ext/LineUtil.Intersect.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/ext/Polyline.Intersect.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/ext/Polygon.Intersect.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/Control.Draw.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/Tooltip.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/Toolbar.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/draw/DrawToolbar.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/edit/EditToolbar.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/edit/handler/EditToolbar.Edit.js"></script>
<script src="./visor_PMJ_files/leaflet-draw/src/edit/handler/EditToolbar.Delete.js"></script>
<link rel="stylesheet" href="./visor_PMJ_files/leaflet.measurecontrol.css" />
<script src="./visor_PMJ_files/leaflet.measurecontrol.js"></script>
<script src="./visor_PMJ_files/Draw.Polyline.js"></script>


<script language="JavaScript">
	function porcentaje(porcentaje, total){
			result = (total * porcentaje) / 100;
			return result;
		}
	
	$(document).ready(function (){
		$("#titulo").css("font-size", porcentaje(6, $(window).width()) + "%");
		$("#leyenda").css("font-size", porcentaje(6, $(window).width()) + "%");
		$(".titlat").css("font-size", porcentaje(6, $(window).width()) + "%");
		$(".titlat3").css("font-size", porcentaje(6, $(window).width()) + "%");
		$(".titlat5").css("font-size", porcentaje(4, $(window).width()) + "%");
		$("#localizacion2").css("font-size", porcentaje(5, $(window).width()) + "%");
		$("#localizacion3").css("font-size", porcentaje(5, $(window).width()) + "%");
		$("#tipocoordenadas").css("font-size", porcentaje(5, $(window).width()) + "%");
		$(".tablacelda").css("font-size", porcentaje(10, $(window).width()) + "%");
		$("input[type='checkbox']").css("width", porcentaje(1, $(window).width()) + "px");
		$("input[type='checkbox']").css("height", porcentaje(1, $(window).width()) + "px");
		$("input[type='submit']").css("width", porcentaje(7, $(window).width()) + "px");
		$("input[type='submit']").css("font-size", porcentaje(1, $(window).width()) + "px");
		$("input[type='text']").css("font-size", porcentaje(0.8, $(window).width()) + "px");
		$("input[type='text']").css("height", porcentaje(0.8, $(window).width()) + "px");
		$(".atributos").css("font-size", porcentaje(7, $(window).width()) + "%");
				
	});
	
	$(window).resize(function() {
		$("#titulo").css("font-size", porcentaje(6, $(window).width()) + "%");
		$("#leyenda").css("font-size", porcentaje(6, $(window).width()) + "%");
		$(".titlat").css("font-size", porcentaje(6, $(window).width()) + "%");
		$(".titlat3").css("font-size", porcentaje(6, $(window).width()) + "%");
		$(".titlat5").css("font-size", porcentaje(4, $(window).width()) + "%");
		$("#localizacion2").css("font-size", porcentaje(5, $(window).width()) + "%");
		$("#tipocoordenadas").css("font-size", porcentaje(5, $(window).width()) + "%");
		$(".tablacelda").css("font-size", porcentaje(10, $(window).width()) + "%");
		$("input[type='checkbox']").css("width", porcentaje(1, $(window).width()) + "px");
		$("input[type='checkbox']").css("height", porcentaje(1, $(window).width()) + "px");
		$("input[type='submit']").css("width", porcentaje(7, $(window).width()) + "px");
		$("input[type='submit']").css("font-size", porcentaje(1, $(window).width()) + "px");
		$("input[type='text']").css("font-size", porcentaje(0.8, $(window).width()) + "px");
		$("input[type='text']").css("height", porcentaje(0.8, $(window).width()) + "px");
		$(".atributos").css("font-size", porcentaje(7, $(window).width()) + "%");
	});
	
	function adddiv(){
	document.getElementById('info').style.display="inline";
	}
	
	function removediv(){
	document.getElementById('info').style.display="none";
	}
	

	
	
	
</script>

<?php
require_once("AV_geojson2015.php");
require_once("AV_geojson2016.php");
require_once("SR_geojson2015.php");
require_once("SR_geojson2016.php");
require_once("NS_geojson2015.php");
require_once("NS_geojson2016.php");


?>
<script type="text/javascript">var AV_15=<?php echo json_encode($AV15);?>;</script>
<script type="text/javascript">var AV_16=<?php echo json_encode($AV16);?>;</script>
<script type="text/javascript">var SR_15=<?php echo json_encode($SR15);?>;</script>
<script type="text/javascript">var SR_16=<?php echo json_encode($SR16);?>;</script>
<script type="text/javascript">var NS_15=<?php echo json_encode($NS15);?>;</script>
<script type="text/javascript">var NS_16=<?php echo json_encode($NS16);?>;</script>

</head>

<body >
<div id="datos">
<div id="headimages"><img src="../css_js/images/geografica.png" width="100%"></div>
<div id="titulo">
<h2 class="titlat2"><table width="100%" height="100%"><tr><td width="85%" style="vertical-align:middle">Visor geográfico Grupos Móviles de Erradicación</td><td align="center" style="vertical-align:middle" style='padding-top:8px'><img  src='../css_js/images/info.png' onmouseover="adddiv()" onMouseOut="removediv()" width='50% id='iconinfo"></td></tr></table></h2>

<div id="info"  class="contexto"  style="display: none; position:absolute; top:8%; left:21%; z-index:100; opacity: 1"><b>Localización del punto</b><br></div>

</div>

<h2 class="titlat">Leyenda</h2>
<div id="leyenda" class="titlat4">
	<input id="todas" type="checkbox" onclick="todaslascapas()"><label>Todas las capas</label><br>

	<input id="checkAV2015" type="checkbox" checked="" onclick="leyendaccion()"><label>Áreas VIVAC 2015</label><span class="spaner" id="T_av_15"><script>var x=AV_15.features.length;
	document.getElementById("T_av_15").innerHTML=x;</script></span><br>
	
	<input id="checkAV2016" type="checkbox" checked="" onclick="leyendaccion()"><label>Áreas VIVAC 2016</label><span class="spaner" id="T_av_16"><script>var x=AV_16.features.length;
	document.getElementById("T_av_16").innerHTML=x;</script></span><br>
	
	<input id="checkSR2015" type="checkbox" checked="" onclick="leyendaccion()"><label>Sector de Erradicación 2015</label><span class="spaner" id="T_sr_15"><script>var x=SR_15.features.length;
	document.getElementById("T_sr_15").innerHTML=x;</script></span><br>
	
	<input id="checkSR2016" type="checkbox" checked="" onclick="leyendaccion()"><label>Sector de Erradicación 2016</label><span class="spaner" id="T_sr_16"><script>var x=SR_16.features.length;
	document.getElementById("T_sr_16").innerHTML=x;</script></span><br>
	
	<input id="checkNS2015" type="checkbox" checked="" onclick="leyendaccion()"><label>Novedades de seguridad 2015</label><span class="spaner" id="T_ns_15"><script>var x=NS_15.features.length;
	document.getElementById("T_ns_15").innerHTML=x;</script></span><br>
	
	<input id="checkNS2016" type="checkbox" checked="" onclick="leyendaccion()"><label>Novedades de seguridad 2016</label><span class="spaner" id="T_ns_16"><script>var x=NS_16.features.length;
	document.getElementById("T_ns_16").innerHTML=x;</script></span><br>
	
	<input id="checkparques" type="checkbox"  onclick="leyendaccion()"><font color="#66A666" >&#9608</font><label>Parques Nacionales</label><span class="spaner">56</span><br>
	
	<input id="checkresguardos" type="checkbox" onclick="leyendaccion()"><font color="#FE9A2E">&#9608 </font><label>Resguardos Indígenas</label><span class="spaner">653</span><br>
	
	<input id="checkleysegunda" type="checkbox" onclick="leyendaccion()"><font color="#74DF00">&#9608 </font><label>Ley Segunda de 1959</label><span class="spaner">153</span><br>
	
	<input id="checktc" type="checkbox" onclick="leyendaccion()"><font color="#CB901A">&#9608 </font><label>Tierra Colectiva</label><span class="spaner">158</span><br>
	
</div>

<h2 class="titlat">Tipo de coordenadas</h2>
<div id="tipocoordenadas" class="radio"><table width="100%"><tr><td align='center'><input type='radio' class="radio2" name='group1' id='GMS' onclick='loc()' checked><label for="radio1"><span><span></span></span>GG°MM'SS.S</label> </td><td><input type='radio' name='group1' id='GGG' onclick='loc()'><label for="radio1"><span><span></span></span>GG.DDD°</label> </td></tr></table></div>
<h2 class="titlat">Coordenadas</h2>
<div id="localizacion2" > </div>
<h2 class="titlat">Análisis de Ubicación</h2>
<div id="localizacion3">
<h2 class='titlat5'></h2>
 </div>

</div>



<div id="map">
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/parques2.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/Resguardos2.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/municipios.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/tc.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/Ley2da.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/or.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/RUNAT.js"></script>
<script type="text/javascript" charset="utf-8" src="../json/colombia_line.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/TC_2012.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/TC_2013.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/TC_2014.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/map.js"></script>
<script src="./visor_PMJ_files/Distance.js"></script>
<link rel="stylesheet" href="http://leaflet.github.io/Leaflet.draw/leaflet.draw.css" />
<script src="http://leaflet.github.io/Leaflet.draw/leaflet.draw.js"></script>

</div>
</body>
</html>