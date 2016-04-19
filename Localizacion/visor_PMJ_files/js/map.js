//TITULO DEL MAPA
		
		//var leaflet_draw = require('leaflet-draw');
		
		var titulo= "LOCALIZACIÓN";
		
		//VARIABLE CREDITOS DEL MAPA
		var creditos= "<div class='atributos'><b></b>En esta sección van los créditos <br> La información geográfica presentada aqui es de nivel operativo y no representa una fuente oficial<br>&copy; <a href='http://leafletjs.com/'>Leaflet</a> | &copy; <a href='http://www.highcharts.com/'>Highcharts</a>| &copy; <a href='http://openstreetmap.org'>OpenStreetMap</div>" 
		
		
		
		//POSICIÓN INICIAL DEL MAPA
		bounds = new L.LatLngBounds(new L.LatLng(-7, -91), new L.LatLng(15, -52));
		var map = new L.Map('map', {
			center: [4,-73], 
			zoom: 6, 
			maxBounds: bounds, 
			zoomControl: false, 
			attributionControl: false,
			//drawControl: true
		});
				
		//MAPAS BASE
		var topoMap_1=L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
			maxZoom: 21 , minZoom: 6
		}); 
		var topoMap_2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 21 , minZoom: 6
		}).addTo(map);		
		var topoMap_3 = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
			maxZoom: 21 , minZoom: 6
		});		
		var googleLayer_satellite = new L.Google("SATELLITE", {
			maxZoom: 21 , minZoom: 6
		});	
		
		
		
		//map.addLayer(googleLayer_satellite);
		
		//Simbología
		
		var CampingIcon = L.icon({
			iconUrl: 'visor_PMJ_files/images/campamento.ico',
			iconSize:     [20, 20], // size of the icon
			iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
			popupAnchor:  [-11, -20] // point from which the popup should open relative to the iconAnchor
		});
		
		var CampingIcon2 = L.icon({
			iconUrl: 'visor_PMJ_files/images/campamento2.ico',
			iconSize:     [20, 20], // size of the icon
			iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
			popupAnchor:  [-11, -20] // point from which the popup should open relative to the iconAnchor
		});
		
		var erradicacion = L.icon({
			iconUrl: 'visor_PMJ_files/images/erradicacion.ico',
			iconSize:     [20, 20], // size of the icon
			iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
			popupAnchor:  [-11, -20] // point from which the popup should open relative to the iconAnchor
		});
		
		var erradicacion2 = L.icon({
			iconUrl: 'visor_PMJ_files/images/erradicacion2.ico',
			iconSize:     [20, 20], // size of the icon
			iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
			popupAnchor:  [-11, -20] // point from which the popup should open relative to the iconAnchor
		});
		
		var alerta = L.icon({
			iconUrl: 'visor_PMJ_files/images/alerta.ico',
			iconSize:     [20, 20], // size of the icon
			iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
			popupAnchor:  [-11, -20] // point from which the popup should open relative to the iconAnchor
		});
		
		var alerta2 = L.icon({
			iconUrl: 'visor_PMJ_files/images/alerta2.ico',
			iconSize:     [20, 20], // size of the icon
			iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
			popupAnchor:  [-11, -20] // point from which the popup should open relative to the iconAnchor
		});
		
		var mira = L.icon({
			iconUrl: 'visor_PMJ_files/images/mira.ico',
			iconSize:     [20, 20], // size of the icon
			iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
			popupAnchor:  [-11, -20] // point from which the popup should open relative to the iconAnchor
		});
		
		//CARGAR CAPAS
		
		//CAPAS GME
		
		var AV_15_add = L.geoJson(AV_15,{
			pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {icon: CampingIcon});
            },
			onEachFeature: AV_2015}).addTo(map);
		
		var AV_16_add = L.geoJson(AV_16,{
			pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {icon: CampingIcon2});
            },
			onEachFeature: AV_2016}).addTo(map);
		var SR_15_add = L.geoJson(SR_15,{
			pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {icon: erradicacion});
            },
			onEachFeature: SR_2015});
		var SR_16_add = L.geoJson(SR_16,{
			pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {icon: erradicacion2});
            },
			onEachFeature: SR_2016});
		var NS_15_add = L.geoJson(NS_15,{
			pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {icon: alerta});
            },
			onEachFeature: NS_2015});
		var NS_16_add = L.geoJson(NS_16,{
			pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {icon: alerta2});
            },
			onEachFeature: NS_2016});
		
		var den = L.tileLayer.wms("http://geoserver.unodc.org.co/geoserver/Censo/wms?", {
			layers: 'cen_densidad_2014',
			format: 'image/png',
			transparent: true,
			version: '1.1.0',
			//attribution: "Naciones Unidas - UNODC - Colombia - SIMCI "
		});
		
		var style_AVB_15 = {"color":"#343F4E","fillColor": "#343F4E", "dashArray": '5',"weight": 1.5, "opacity": 0.9 };
		var AVB_15_add = L.geoJson(AVB_15,{style: style_AVB_15, onEachFeature: AVB_2015}).addTo(map);
		
		var style_AVB_16 = {"color":"#91A961","fillColor": "#91A961", "dashArray": '5',"weight": 1.5, "opacity": 0.9 };
		var AVB_16_add = L.geoJson(AVB_16,{style: style_AVB_16, onEachFeature: AVB_2016}).addTo(map);
		
		
		//var tf_fo12 = new L.geoJson(tf_fo_2012, {style: Style_fo_12, onEachFeature: onEachFeature1}).addTo(map);
		//var markers1 = L.markerClusterGroup();
		//var markers2 = L.markerClusterGroup();
		var markers3 = L.markerClusterGroup();
		var markers4 = L.markerClusterGroup();
		var markers5 = L.markerClusterGroup();
		var markers6 = L.markerClusterGroup();
		var eye1 = new L.Marker(new L.LatLng(90,0));//var aleatoria de referencia
		//markers1.addLayer(AV_15_add).addLayers([eye1]);
		//markers2.addLayer(AV_16_add).addLayers([eye1]);
		markers3.addLayer(SR_15_add).addLayers([eye1]);
		markers4.addLayer(SR_16_add).addLayers([eye1]);
		markers5.addLayer(NS_15_add).addLayers([eye1]);
		markers6.addLayer(NS_16_add).addLayers([eye1]);
		//map.addLayer(AV_15_add, {icon: CampingIcon});
		//AV_15_add({icon: CampingIcon}).addTo(map)
		//map.addLayer(markers1);
		//map.addLayer(markers2);
		map.addLayer(markers3);
		map.addLayer(markers4);
		map.addLayer(markers5);
		map.addLayer(markers6);
		
			
		
		//Otras Capas
		
		//var mpios_GME_layer = L.geoJson(mpios_GME, {style: estilo, onEachFeature: interaccion_mpios}).addTo(map);
		var style_colombia = {"color": "#202020", "weight": 1.5, "opacity": 0.9 };
		var style_parques = {"color": "#66A666", "fillColor": '#66A666', "weight": 2, "opacity": 0.9, "fillOpacity": 0.0 };
		var style_Resguardos = {"color": "#FE9A2E", "fillColor": '#FE9A2E', "weight": 2, "opacity": 0.5, "fillOpacity": 0.0 };
		var style_Ley2da = {"color": "#74DF00", "fillColor": '#74DF00', "weight": 1, "opacity": 0.9, "fillOpacity": 0.2 };
		var style_tc = {"color": "#CB901A", "fillColor": '#CB901A', "weight": 1, "opacity": 0.4, "fillOpacity": 0.2 };
		//var style_or = {"color": "#EF0726", "fillColor": '#EF0726', "weight": 1, "opacity": 0.4, "fillOpacity": 0.2 };
		//var style_veredas12 = {"color": "#ECCEF5", "fillColor": '#ECCEF5', "weight": 1, "opacity": 1, "fillOpacity": 0.5 };
		//var style_veredas13 = {"color": "#BE81F7", "fillColor": '#BE81F7', "weight": 1, "opacity": 1, "fillOpacity": 0.5 };
		//var style_veredas14 = {"color": "#7401DF", "fillColor": '#7401DF', "weight": 1, "opacity": 1, "fillOpacity": 0.5 };
		
		
		var colombia_js= L.geoJson(colombia, {style: style_colombia});
		var parques_js = L.geoJson(parques,{style: style_parques, onEachFeature: interaccionParque});	
		var Resguardos_js = L.geoJson(resguardos,{style: style_Resguardos, onEachFeature:interaccionResguardo});		
		var Ley2da_js = L.geoJson(Ley2da,{style: style_Ley2da, onEachFeature: interaccion});
		var tc_js = L.geoJson(tc,{style: style_tc, onEachFeature: interacciontc});
		//var runat_js = L.geoJson(runat,{style: style_or, onEachFeature: interaccionor});
		//var tc_2012_js = L.geoJson(tc_2012,{style: style_veredas12, onEachFeature: interaccion2012});
		//var tc_2013_js = L.geoJson(tc_2013,{style: style_veredas13, onEachFeature: interaccion2013});
		//var tc_2014_js = L.geoJson(TC_2014,{style: style_veredas14, onEachFeature: interaccion2014});
		var municipios_js = L.geoJson(municipios);
		
		colombia_js.addTo(map)
		//parques_js.addTo(map)
		//Ley2da_js.addTo(map)
		//Resguardos_js.addTo(map)
		
		//LEYENDA DE COLORES
		
		//color for the boxes for the legend
		function getColor(e) {
		return e == "Ley Segunda de 1959" ? '#74DF00':
			   e == "Parques Nacionales" ? '#66A666' :
			   e == "Tierras Colectivas" ? '#CB901A' :
               e == "Resguardos Indígenas" ? '#FE9A2E' :
			   e == "RUNAP" ? '#EF0726' :	
			   //e == "Veredas 2012" ? '#ECCEF5' :
			   //e == "Veredas 2013" ? '#BE81F7' :		
			   //e == "Veredas 2014" ? '#7401DF' :	
			   '#FFEDA0' ;
		}
		
		//add a legend to the map
		var legend1 = L.control({position: 'bottomleft'});
		legend1.onAdd = function (map) {
			var div = L.DomUtil.create('div', 'info legend'),
			estrategia = ["Parques Nacionales", "Resguardos Indígenas", "Tierras Colectivas", "Ley Segunda de 1959","RUNAP","Veredas 2012","Veredas 2013","Veredas 2014"],
			labels = [],
			from;
			for (var i = 0; i < estrategia.length; i++) {
				labels.push('<i style="background:' + getColor(estrategia[i]) + '"></i> ' + estrategia[i]);
				}
			div.innerHTML = "<b> <bold>Leyenda</bold>  <br> " + labels.join('<br>');
			
			return div;
		};

		//LEYENDA MAPA BASE
		
		var grouplayer = L.layerGroup([Ley2da_js, parques_js, Resguardos_js, tc_js, AV_15_add]);
		
		var baseMaps = {
		"Mapa Base": topoMap_2,
		"Mapa topográfico": topoMap_3,
		"Mapa Satelital Google" : googleLayer_satellite,
		//"Densidad": den
		};
		var capas = {'<a></a>Densidad': den }; 
		
		// +'<a href="visor_PMJ_files/Territorios_2014.rar"><img src="visor_PMJ_files/dowload.png" alt="Territorios_2014"/></a>'
		
				
		//Addición de creditos a DA/UNODC en posicion bottomright
		var creditos_box= L.control.attribution({position: 'bottomright'});
		creditos_box.setPrefix('<small>'+creditos+'<small>');
		
		
		
		//legend1.addTo(map);
		creditos_box.addTo(map);
		
		
		//BOTÓN EXTEND
		var extend = L.control({position: 'topright'});
		extend.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'fullextend'); // create a div with a class "infosidebar"
			this._div.id = "head_Banner";
			L.DomEvent.disableClickPropagation(this._div);
			var html_banner=  '<img class="Centerer" src= "./visor_PMJ_files/images/colombia_0.png" width="100%" onclick = "fullextend()" >' ;
			this._div.innerHTML= html_banner;
			return this._div;
		};
		
		
		function fullextend() {
			bounds = map.fitBounds([[-7, -91],[15, -52]])
			click: bounds;
			//console.log(X);
		
		}
		
				
		//CONTROL ZOOM + CARGAR BOTONES
		
		new L.Control.Zoom({ position: 'topright'}).addTo(map);
		L.Control.measureControl({position: 'topright'}).addTo(map); //Botón para medir distancias
		extend.addTo(map); //Botón para extend
		L.control.layers(baseMaps,capas,{position: 'topright', collapsed: true}).addTo(map); //Control Base Mapas		
		
		//LOCALIZACIÓN AJUSTADA
		
		var localizacion2= document.getElementById("localizacion2");
		var localizacion3= document.getElementById("localizacion3");	
		
		var texto="<big><h2 class='titlat3'>Latitud</h2></big><table width='100%' align= 'middle'><tr align='center'><td><INPUT type='text' style='width:70%;height:15px' name='GG' id='latGG' value='GG' title='Ingrese un valor entre -4 y 13. Para latitudes negativas (S) que inician con 0 poner -0' size='3' onfocus='function_a(this)' onblur='function_b(this)'></td><td><INPUT type='text' style='width:70%;height:15px'name='MM' id='latMM' title='Ingrese un valor entre 0 y 59' size='3' value='MM' onfocus='function_c(this)' onblur='function_d(this)'></td><td><INPUT type='text' style='width:70%;height:15px' name='SS' id='latSS' title='Ingrese un valor entre 0 y 59' size='3' value='SS.S' onfocus='function_e(this)' onblur='function_f(this)'></td></tr></table><big><h2 class='titlat3'>Longitud</h2></big><table style='width:100%'><tr align='center'><td><INPUT type='text' style='width:70%;height:15px' name='GG' id='longGG' title='Ingrese un valor entre -80 y -67' size='3' value='GG' onfocus='function_g(this)' onblur='function_h(this)'></td><td><INPUT type='text' name='MM' style='width:70%;height:15px'id='longMM' title='Ingrese un valor entre 0 y 59' size='3' value='MM' onfocus='function_i(this)' onblur='function_j(this)'></td><td><INPUT type='text' style='width:70%;height:15px' name='SS' id='longSS' title='Ingrese un valor entre 0 y 59' size='3' value='SS.S' onfocus='function_k(this)' onblur='function_l(this)'></td></tr></table><h2 class='titlat3'><center><INPUT style='paddingBottom:5px' type='submit' value='Geolocalizar' onclick = 'geolocGGDDSS(latGG.value,latMM.value,latSS.value,longGG.value,longMM.value,longSS.value)'></center></h2>"
		
		
		localizacion2.innerHTML=texto;
		
		function loc(){
		var X= document.getElementById("GMS").checked
		//console.log(X)
		if (X==true){
		
		localizacion2.innerHTML=texto;
		}
		else{
		
		localizacion2.innerHTML="<h2 class='titlat3'>Latitud</h2><center><INPUT type='text' style='width:50%;height:15px' name='Latitud' id='Latitud' title='Ingrese un valor entre -4 y 13.' onfocus='function_a(this)' onblur='function_b(this)'></center><h2 class='titlat3'>Longitud</h2><center><INPUT type='text' style='width:50%;height:15px' name='Longitud' id='Longitud' title='Ingrese un valor entre -80 y -67' onfocus='function_g(this)' onblur='function_h(this)'><h2 class='titlat3'><INPUT type='submit' value='Geolocalizar' onclick = 'geoloc(Latitud.value,Longitud.value)'></center></h2>";
		}
		}
				
		//FUNCION QUE ADICIONA EL PUNTO EN EL MAPA GG MM SS 
		
		function geolocGGDDSS(latGG,latMM,latSS,longGG,longMM,longSS) {
			
			
			try{
			latSS=latSS.replace(",",".")
			longSS=longSS.replace(",",".")
			}
			catch(err){
			}
			
			
			if (latGG=="-0"){
				Lat=(parseInt(latGG)+parseFloat(latMM/60)+parseFloat(latSS/3600))*-1
			}
			else{
				if (parseInt(latGG)<0){
				Lat=parseInt(latGG)-parseFloat(latMM/60)-parseFloat(latSS/3600)
				}else{
				Lat=parseInt(latGG)+parseFloat(latMM/60)+parseFloat(latSS/3600)
				}
			}
			
			
			Long=parseInt(longGG)-parseFloat(longMM/60)-parseFloat(longSS/3600)
			
			try {
				map.removeLayer(marker);
				var Limites=[[parseFloat(Lat) + 0.5, parseFloat(Long) - 0.5],[parseFloat(Lat) - 0.5, parseFloat(Long) + 0.5]]
				marker = new L.Marker([Lat,Long], {icon: mira}).bindPopup("I'm here");
				map.addLayer(marker);
				map.fitBounds(Limites);				
			}
			catch(err) {
				var Limites=[[parseFloat(Lat) + 0.5, parseFloat(Long) - 0.5],[parseFloat(Lat) - 0.5, parseFloat(Long) + 0.5]]
				
				marker = new L.Marker([Lat,Long],{icon: mira}).bindPopup("I'm here");
				map.addLayer(marker);
				map.fitBounds(Limites);				
			}
			
			
			mensaje(Long,Lat)
			
		return marker;
		
		}
		
		//FUNCION QUE ADICIONA EL PUNTO EN EL MAPA GG.DDDD
		
		function geoloc(Lat,Long) {
			
			try{
			Lat=Lat.replace(",",".")
			Long=Long.replace(",",".")
			}
			catch(err){
			}
			
			try {
				map.removeLayer(marker);
				var Limites=[[parseFloat(Lat) + 0.5, parseFloat(Long) - 0.5],[parseFloat(Lat) - 0.5, parseFloat(Long) + 0.5]]
				marker = new L.Marker([Lat,Long], {icon: mira}).bindPopup("I'm here");
				map.addLayer(marker);
				map.fitBounds(Limites);				
			}
			catch(err) {
				var Limites=[[parseFloat(Lat) + 0.5, parseFloat(Long) - 0.5],[parseFloat(Lat) - 0.5, parseFloat(Long) + 0.5]]
				
				marker = new L.Marker([Lat,Long],{icon: mira}).bindPopup("I'm here");
				map.addLayer(marker);
				map.fitBounds(Limites);				
			}
			
			
			mensaje(marker._latlng.lng, marker._latlng.lat)
		
		return marker;
		
		}
		
		//*** Este Codigo permite Validar que sea grados, minutos y segundos para la Latitud
		
		function function_a(x){
			x.value="";
		}
		function function_b(x){
			if (x.value<-4 || x.value>13){
				 alert("Ingrese un valor entre -4 y 13 Grados");
				 x.focus();
			 }
		}
		
		function function_c(x){
			x.value="";
		}
		function function_d(x){
		if (x.value<0 || x.value>59){
			 alert("Ingrese un valor entre 0 y 59 Minutos");
			 x.focus();
			 }
		}
		function function_e(x){
			x.value="";
		}
		function function_f(x){
			
				if(x.value<0 || x.value>=60){
				 alert("Ingrese un valor entre 0 y 59.99 Segundos");
				 x.focus();
				 }
			
		}
		
		//*** Fin del Codigo para Validar Latitud
		
		//*** Este Codigo permite Validar que sea grados, minutos y segundos para la Longitud
		
		function function_g(x)
			{
			x.value="";
			}
			function function_h(x)
			{
			if (x.value<-80 || x.value>-67){
				 alert("Ingrese un valor entre -80 y -67 Grados");
				 x.focus();
				 }
			}
			
			function function_i(x)
			{
			x.value="";
			}
			function function_j(x)
			{
			if (x.value<0 || x.value>59){
				 alert("Ingrese un valor entre 0 y 59 Minutos");
				 x.focus();
				 }
			}

			function function_k(x)
			{
			x.value="";
			}
			function function_l(x)
			{
			if (x.value<0 || x.value>=60){
				 alert("Ingrese un valor entre 0 y 59.99 Segundos");
				 x.focus();
				 }
			}

		//CONTROL EXTEND
		
		new L.Control.FullScreen({ position: 'topright', forcePseudoFullscreen: true }).addTo(map);
		
		//Control Mouse Position
		
		L.control.mousePosition({position: 'bottomright'})	.addTo(map);
		
		//var d = new L.Control.Distance({position: 'bottomleft'}); map.addControl(d);
		