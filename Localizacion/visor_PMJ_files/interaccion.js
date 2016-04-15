function leyendaccion(){
//Cargar las capas
if (document.getElementById("checkAV2015").checked == true){map.addLayer(AV_15_add);}else{map.removeLayer(AV_15_add)}
if (document.getElementById("checkAV2016").checked == true){map.addLayer(AV_16_add);}else{map.removeLayer(AV_16_add)}
if (document.getElementById("checkSR2015").checked == true){map.addLayer(markers3);}else{map.removeLayer(markers3)}
if (document.getElementById("checkSR2016").checked == true){map.addLayer(markers4);}else{map.removeLayer(markers4)}
if (document.getElementById("checkNS2015").checked == true){map.addLayer(markers5);}else{map.removeLayer(markers5)}
if (document.getElementById("checkNS2016").checked == true){map.addLayer(markers6);}else{map.removeLayer(markers6)}
if (document.getElementById("den2014").checked == true){map.addLayer(den);}else{map.removeLayer(den)}
if (document.getElementById("checkparques").checked == true){parques_js.addTo(map)}else{map.removeLayer(parques_js)}
if (document.getElementById("checkresguardos").checked == true){Resguardos_js.addTo(map)}else{map.removeLayer(Resguardos_js)}
if (document.getElementById("checkleysegunda").checked == true){Ley2da_js.addTo(map)}else{map.removeLayer(Ley2da_js)}
if (document.getElementById("checktc").checked == true){tc_js.addTo(map)}else{map.removeLayer(tc_js)}

filter();
}

function filter(){
//Evalúa si todos los checkbox están encendidos  
if(	document.getElementById("checkparques").checked == false ||
document.getElementById("checkresguardos").checked == false ||
document.getElementById("checkleysegunda").checked == false ||
document.getElementById("checktc").checked == false

){
document.getElementById("todas").checked = false;
//document.getElementById("counterBadge").style.backgroundColor = "#EAEAEA"// #counter e1e1e1
}
else {
document.getElementById("todas").checked = true;
//document.getElementById("counterBadge").style.backgroundColor = "#cccccc"
}

}

function todaslascapas () {
		if(document.getElementById("todas").checked == false){
			document.getElementById("checkAV2015").checked = false;
			document.getElementById("checkAV2016").checked = false;
			document.getElementById("checkSR2015").checked = false;
			document.getElementById("checkSR2016").checked = false;
			document.getElementById("checkNS2015").checked = false;
			document.getElementById("checkNS2016").checked = false;
			document.getElementById("den2014").checked = false;
			document.getElementById("checkparques").checked = false;
			document.getElementById("checkresguardos").checked = false;
			document.getElementById("checkleysegunda").checked = false;
			document.getElementById("checktc").checked = false;
		}
		if(document.getElementById("todas").checked == true){
			document.getElementById("todas").checked = true;
			document.getElementById("checkAV2015").checked = true;
			document.getElementById("checkAV2016").checked = true;
			document.getElementById("checkSR2015").checked = true;
			document.getElementById("checkSR2016").checked = true;
			document.getElementById("checkNS2015").checked = true;
			document.getElementById("checkNS2016").checked = true;
			document.getElementById("den2014").checked = true;
			document.getElementById("checkparques").checked = true;
			document.getElementById("checkresguardos").checked = true;
			document.getElementById("checkleysegunda").checked = true;
			document.getElementById("checktc").checked = true;
		}
	filter();
	leyendaccion();
	}


function borde(e) {
	var layers = e.target;
	
	layers.setStyle({
		weight: 3,
		color: 'cyan',
		dashArray: '3',
		fillOpacity: 0
	});

	if (!L.Browser.ie && !L.Browser.opera) {
		layers.bringToFront();
	}
}

//OTRAS RESTRICCIONES

//función que redefine el borde después de pasar con el mouse
function resetbordeor(e) {
	runat_js.resetStyle(e.target);	
};
	
//funcion que define la interacción de la otras restricciones
		
function interaccionor(feature, layer) {
	var popupText='Otras restricciones: ' + feature.properties.L_or
	layer.on({
				mouseover: borde,
				mouseout: resetbordeor,
	});
	intersection(popupText,layer);
};

//TIERRAS COLECTIVAS

//función que redefine el borde después de pasar con el mouse
function resetbordetc(e) {
	tc_js.resetStyle(e.target);
};

function interacciontc(feature, layer) {
	var popupText='Tierra Colectiva: ' + feature.properties.L_tc
	layer.bindPopup(popupText);
	layer.on({
				mouseover: borde,
				mouseout: resetbordetc,
	});
	//intersection(popupText,layer);
};

//RESGUARDOS

//función que redefine el borde después de pasar con el mouse
function resetbordeResguardo(e) {
	Resguardos_js.resetStyle(e.target);
};

function interaccionResguardo(feature, layer) {
	var popupText='Resguardo indígena: ' + feature.properties.NOM_RI
	layer.bindPopup(popupText);
	layer.on({
				mouseover: borde,
				mouseout: resetbordeResguardo,
	});
	//intersection(popupText,layer);
};

//PARQUES NACIONALES

function resetbordeParque(e) {
	parques_js.resetStyle(e.target);
};

function interaccionParque(feature, layer) {
	var popupText='Parque Natural: ' + feature.properties.NOM_PNN
	layer.bindPopup(popupText);
	layer.on({
				mouseover: borde,
				mouseout: resetbordeParque,
	});
	//intersection(popupText,layer);
};

//LEY SEGUNDA

function resetborde(e) {
	Ley2da_js.resetStyle(e.target);
};

function interaccion(feature, layer) {
	var popupText=feature.properties.NOMBRE
	layer.bindPopup(popupText);
	layer.on({
				mouseover: borde,
				mouseout: resetborde,
	});
	//intersection(popupText,layer);
};

//TERRITORIOS 2012

function resetborde2012(e) {
	tc_2012_js.resetStyle(e.target);
};

function interaccion2012(feature, layer) {
	var popupText='Veredas 2012: ' + feature.properties.NOM_TERR
	layer.bindPopup(popupText);
	layer.on({
				mouseover: borde,
				mouseout: resetborde2012,
	});
	//intersection(popupText,layer);
};

//TERRITORIOS 2013

function resetborde2013(e) {
	tc_2013_js.resetStyle(e.target);
};

function interaccion2013(feature, layer) {
	var popupText='Veredas 2013: ' + feature.properties.NOM_TERR
	layer.on({
				mouseover: borde,
				mouseout: resetborde2013,
	});
	intersection(popupText,layer);
};

//TERRITORIOS 2014

function resetborde2014(e) {
	tc_2014_js.resetStyle(e.target);
};

function interaccion2014(feature, layer) {
	var popupText='Veredas 2014: ' + feature.properties.L_terri
	layer.on({
				mouseover: borde,
				mouseout: resetborde2014,
	});
	intersection(popupText,layer);
};

//AV_2015

function AV_2015(feature, layer) {
			if (feature.properties) {
				var popupText = '<b><i>Información del Área VIVAC</b><hr>'+'Punto de Erradicación: ' + feature.properties.NOM_PE + '<br>'+'Área Vivac: ' + feature.properties.Num_AV + '<br>'+'Fecha de Ingreso: ' + feature.properties.FECHA_INTO_AV + '<br>'+'Usuario: ' + feature.properties.NOM_APOYO + '<br>'+'Latitud: ' + layer._latlng.lat + '<br>'+'Longitud: ' + layer._latlng.lng +'<br><hr>';	
				layer.bindPopup(popupText);
				}
};

//AV_2016

function AV_2016(feature, layer) {
			if (feature.properties) {
				var popupText = '<b><i>Información del Área VIVAC</b><hr>'+'Punto de Erradicación: ' + feature.properties.NOM_PE + '<br>'+'Área Vivac: ' + feature.properties.Num_AV + '<br>'+'Fecha de Ingreso: ' + feature.properties.FECHA_INTO_AV + '<br>'+'Usuario: ' + feature.properties.NOM_APOYO + '<br>'+'Latitud: ' + layer._latlng.lat + '<br>'+'Longitud: ' + layer._latlng.lng +'<br><hr>';	
				layer.bindPopup(popupText);
				}
};

//SR_2015

function SR_2015(feature, layer) {
			if (feature.properties) {
				var popupText = '<b><i>Información del sector de erradicación</b><hr>'+'Punto de Erradicación: ' + feature.properties.NOM_PE + '<br>'+'Fecha de reporte: ' + feature.properties.FECHA_REPORT + '<br>'+'Latitud: ' + layer._latlng.lat + '<br>'+'Longitud: ' + layer._latlng.lng +'<br><hr>';	
				layer.bindPopup(popupText);
				}
};

//SR_2016

function SR_2016(feature, layer) {
			if (feature.properties) {
				var popupText = '<b><i>Información del sector de erradicación</b><hr>'+'Punto de Erradicación: ' + feature.properties.NOM_PE + '<br>'+'Fecha de reporte: ' + feature.properties.FECHA_REPORT + '<br>'+'Latitud: ' + layer._latlng.lat + '<br>'+'Longitud: ' + layer._latlng.lng +'<br><hr>';	
				layer.bindPopup(popupText);
				}
};


//NS_2015

function NS_2015(feature, layer) {
			if (feature.properties) {
				var popupText = '<b><i>Novedad de seguridad</b><hr>'+'Punto de Erradicación: ' + feature.properties.NOM_PE + '<br>'+'Fecha de reporte: ' + feature.properties.FECHA_REPORT+'<br>'+'Latitud: ' + layer._latlng.lat + '<br>'+'Longitud: ' + layer._latlng.lng;
				if (feature.properties.AEI_controlado=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: AEI controlado'
				}
				if (feature.properties.AEI_no_controlado=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: AEI no controlado'
				}
				if (feature.properties.Bloqueo_parcial_de_la_comunidad=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Bloqueo parcial de la comunidad'
				}
				if (feature.properties.Bloqueo_total_de_la_comunidad=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Bloqueo total de la comunidad'
				}
				if (feature.properties.Combate=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Combate'
				}
				if (feature.properties.MAP_Controlada=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: MAP Controlada'
				}
				if (feature.properties.MAP_No_controlada=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: MAP no controlada'
				}
				if (feature.properties.MUSE=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: MUSE'
				}
				if (feature.properties.Operaciones_de_seguridad=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Operaciones de seguridad'
				}				
				popupText=popupText+'<hr>'
				layer.bindPopup(popupText);
				}
};


//NS_2016

function NS_2016(feature, layer) {
			if (feature.properties) {
				var popupText = '<b><i>Novedad de seguridad</b><hr>'+'Punto de Erradicación: ' + feature.properties.NOM_PE + '<br>'+'Fecha de reporte: ' + feature.properties.FECHA_REPORT +'<br>'+'Latitud: ' + layer._latlng.lat + '<br>'+'Longitud: ' + layer._latlng.lng;
				if (feature.properties.AEI_controlado=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: AEI controlado'
				}
				if (feature.properties.AEI_no_controlado=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: AEI no controlado'
				}
				if (feature.properties.Bloqueo_parcial_de_la_comunidad=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Bloqueo parcial de la comunidad'
				}
				if (feature.properties.Bloqueo_total_de_la_comunidad=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Bloqueo total de la comunidad'
				}
				if (feature.properties.Combate=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Combate'
				}
				if (feature.properties.MAP_Controlada=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: MAP Controlada'
				}
				if (feature.properties.MAP_No_controlada=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: MAP no controlada'
				}
				if (feature.properties.MUSE=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: MUSE'
				}
				if (feature.properties.Operaciones_de_seguridad=="1")	{
					popupText=popupText+'<br>Tipo de Novedad: Operaciones de seguridad'
				}				
				popupText=popupText+'<hr>'
				layer.bindPopup(popupText);
				}
};