<!DOCTYPE html>
<html>
<head>
<html lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>  
<title>Visor EM</title>

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>

<link rel="stylesheet" href="./visor_PMJ_files/css/leaflet.css"/>
<script "text/javascript"  src="./visor_PMJ_files/js/leaflet-search.js"></script>
<link rel="stylesheet" href="./visor_PMJ_files/css/leaflet-search.css" >

<link rel="icon" href="./visor_PMJ_files/images/world.ico" type="image/x-icon">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script type="text/javascript" src="./visor_PMJ_files/js/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="http://w2ui.com/src/w2ui-1.4.2.min.css" />
<script type="text/javascript" src="http://w2ui.com/src/w2ui-1.4.2.min.js"></script>

<link rel="stylesheet" href="./visor_PMJ_files/css/Newmapstyle.css"/>
<link rel="stylesheet" href="./visor_PMJ_files/css/stylesnew.css" />
<script type="text/javascript" src="https://www.google.com/jsapi?key="></script>
<script src="http://maps.google.com/maps/api/js?v=3&sensor=false"></script>
<script src="./visor_PMJ_files/js/Google.js"></script>
<script src="./visor_PMJ_files/js/Control.FullScreen.js"></script>
<link rel="stylesheet" href="./visor_PMJ_files/css/map_styles2.css" />
<script src="./visor_PMJ_files/js/L.Control.MousePosition.js"></script>

<script src="./visor_PMJ_files/js/leaflet-pip.js"></script>
<script src="./visor_PMJ_files/js/interaccion.js"></script>
<script src="./visor_PMJ_files/js/intersection.js"></script>
<script src="./visor_PMJ_files/js/results.js"></script>
<link rel="stylesheet" href="./visor_PMJ_files/css/MarkerCluster.css" />
<link rel="stylesheet" href="./visor_PMJ_files/css/MarkerCluster.Default.css" />
<script src="./visor_PMJ_files/js/leaflet.markercluster-src.js"></script>
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
<link rel="stylesheet" href="./visor_PMJ_files/css/leaflet.measurecontrol.css" />
<script src="./visor_PMJ_files/js/leaflet.measurecontrol.js"></script>
<script src="./visor_PMJ_files/js/Draw.Polyline.js"></script>


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
	
	function adddivden(){
	document.getElementById('den_leyenda').style.display="inline";
	}
	
	function removedivden(){
	document.getElementById('den_leyenda').style.display="none";
	}
	
	function popup_den() {
		w2popup.open({
			title: 'Densidad de cultivos ilícitos 2014',
			body: '<div class="w2ui-centered"><table width="100%" align="center"><tr><td width="30%"><img src="visor_PMJ_files/images/densidad.png" width="70%"></td><td valign="center" align="justify" >El mapa de densidad de cultivos de coca presenta la distribución de hectáreas por kilómetro cuadradado a partir de los datos del Censo de cultivos ilícitos 2014.<br><br>Es elaborado por el proyecto SIMCI-UNODC y esta compartido para ser utilizados por fuentes externas.</td></tr></table></div>'
			//buttons: 'buttons',
			//showMax: true
		});
	}
	
	function toggleFullScreen() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
	   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if (document.documentElement.requestFullScreen) {  
		  document.documentElement.requestFullScreen();  
		} else if (document.documentElement.mozRequestFullScreen) {  
		  document.documentElement.mozRequestFullScreen();  
		} else if (document.documentElement.webkitRequestFullScreen) {  
		  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		}  
	  } else {  
		if (document.cancelFullScreen) {  
		  document.cancelFullScreen();  
		} else if (document.mozCancelFullScreen) {  
		  document.mozCancelFullScreen();  
		} else if (document.webkitCancelFullScreen) {  
		  document.webkitCancelFullScreen();  
		}  
	  }  
	}

	
	
	
</script>

<?php
require_once("./visor_PMJ_files/php/AV_geojson2015.php");
require_once("./visor_PMJ_files/php/AV_geojson2016.php");
require_once("./visor_PMJ_files/php/SR_geojson2015.php");
require_once("./visor_PMJ_files/php/SR_geojson2016.php");
require_once("./visor_PMJ_files/php/NS_geojson2015.php");
require_once("./visor_PMJ_files/php/NS_geojson2016.php");
require_once("./visor_PMJ_files/php/AVB_geojson2015.php");
require_once("./visor_PMJ_files/php/AVB_geojson2016.php");


?>
<script type="text/javascript">var AV_15=<?php echo json_encode($AV15);?>;</script>
<script type="text/javascript">var AV_16=<?php echo json_encode($AV16);?>;</script>
<script type="text/javascript">var SR_15=<?php echo json_encode($SR15);?>;</script>
<script type="text/javascript">var SR_16=<?php echo json_encode($SR16);?>;</script>
<script type="text/javascript">var NS_15=<?php echo json_encode($NS15);?>;</script>
<script type="text/javascript">var NS_16=<?php echo json_encode($NS16);?>;</script>
<script type="text/javascript">var AVB_15=<?php echo json_encode($AVB15);?>;</script>
<script type="text/javascript">var AVB_16=<?php echo json_encode($AVB16);?>;</script>

</head>

<body >
<div id="big">
<div id="datos">
<div id="headimages"><img src="./visor_PMJ_files/images/geografica.png" width="100%" onclick="toggleFullScreen()"></div>
<div id="titulo">
<h2 class="titlat2"><table width="100%" height="100%"><tr><td width="85%" style="vertical-align:middle">Visor geográfico Grupos Móviles de Erradicación</td><td align="center" style="vertical-align:middle" style='padding-top:8px'><img  src='./visor_PMJ_files/images/info.png' onmouseover="adddiv()" onMouseOut="removediv()" width='50% id='iconinfo"></td></tr></table></h2>

<div id="info"  class="contexto"  style="display: none; position:absolute; top:8%; left:21%; z-index:100; opacity: 1"><b>Localización del punto</b><br></div>

<div id="den_leyenda"  class="contexto"  style="display: none; position:absolute; top:8%; left:21%; z-index:100; opacity: 1"><b>Densidad de cultivos ilícitos 2014</b><br><img src="visor_PMJ_files/images/densidad.png" width='50%'></div>

</div>

<h2 class="titlat">Leyenda</h2>
<div id="leyenda" class="titlat4">
	<input id="todas" type="checkbox" onclick="todaslascapas()"><label>Todas las capas</label><br>

	<input id="checkAV2015" type="checkbox" checked="" onclick="leyendaccion()"><img src="visor_PMJ_files/images/campamento.ico" width='5%'><label> Áreas VIVAC 2015</label><span class="spaner" id="T_av_15"><script>var x=AV_15.features.length;
	document.getElementById("T_av_15").innerHTML=x;</script></span><br>
	
	<input id="checkAV2016" type="checkbox" checked="" onclick="leyendaccion()"><img src="visor_PMJ_files/images/campamento2.ico" width='5%'><label> Áreas VIVAC 2016</label><span class="spaner" id="T_av_16"><script>var x=AV_16.features.length;
	document.getElementById("T_av_16").innerHTML=x;</script></span><br>
	
	<input id="checkSR2015" type="checkbox" checked="" onclick="leyendaccion()"><img src="visor_PMJ_files/images/erradicacion.ico" width='5%'><label> Sector de Erradicación 2015</label><span class="spaner" id="T_sr_15"><script>var x=SR_15.features.length;
	document.getElementById("T_sr_15").innerHTML=x;</script></span><br>
	
	<input id="checkSR2016" type="checkbox" checked="" onclick="leyendaccion()"><img src="visor_PMJ_files/images/erradicacion2.ico" width='5%'><label> Sector de Erradicación 2016</label><span class="spaner" id="T_sr_16"><script>var x=SR_16.features.length;
	document.getElementById("T_sr_16").innerHTML=x;</script></span><br>
	
	<input id="checkNS2015" type="checkbox" checked="" onclick="leyendaccion()"><img src="visor_PMJ_files/images/alerta.ico" width='5%'><label> Novedades de seguridad 2015</label><span class="spaner" id="T_ns_15"><script>var x=NS_15.features.length;
	document.getElementById("T_ns_15").innerHTML=x;</script></span><br>
	
	<input id="checkNS2016" type="checkbox" checked="" onclick="leyendaccion()"><img src="visor_PMJ_files/images/alerta2.ico" width='5%'><label> Novedades de seguridad 2016</label><span class="spaner" id="T_ns_16"><script>var x=NS_16.features.length;
	document.getElementById("T_ns_16").innerHTML=x;</script></span><br>
	
	<input id="den2014" type="checkbox"  onclick="leyendaccion()"><img src="visor_PMJ_files/images/densidad2.png" width='5%'><label> Densidad cultivos ilícitos </label> <img  src='./visor_PMJ_files/images/info.png' onclick="popup_den()" width='3% id='iconinfo"><span class="spaner" id="T_ns_16">2014</span><br>
	
	<input id="checkparques" type="checkbox"  onclick="leyendaccion()"><font color="#66A666" >&#9608</font><label> Parques Nacionales</label><span class="spaner">56</span><br>
	
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
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/parques2.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/Resguardos2.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/municipios.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/tc.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/Ley2da.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/or.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/colombia_line.js"></script>
<script type="text/javascript" charset="utf-8" src="./visor_PMJ_files/js/map.js"></script>
<script src="./visor_PMJ_files/js/Distance.js"></script>
<link rel="stylesheet" href="http://leaflet.github.io/Leaflet.draw/leaflet.draw.css" />
<script src="http://leaflet.github.io/Leaflet.draw/leaflet.draw.js"></script>

</div>
</div>
</body>
</html>