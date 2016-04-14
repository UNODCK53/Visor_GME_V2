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
	or_js.resetStyle(e.target);	
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
	layer.on({
				mouseover: borde,
				mouseout: resetbordetc,
	});
	intersection(popupText,layer);
};

//RESGUARDOS

//función que redefine el borde después de pasar con el mouse
function resetbordeResguardo(e) {
	Resguardos_js.resetStyle(e.target);
};

function interaccionResguardo(feature, layer) {
	var popupText='Resguardo indígena: ' + feature.properties.NOM_RI
	layer.on({
				mouseover: borde,
				mouseout: resetbordeResguardo,
	});
	intersection(popupText,layer);
};

//PARQUES NACIONALES

function resetbordeParque(e) {
	parques_js.resetStyle(e.target);
};

function interaccionParque(feature, layer) {
	var popupText='Parque Natural: ' + feature.properties.NOM_PNN
	layer.on({
				mouseover: borde,
				mouseout: resetbordeParque,
	});
	intersection(popupText,layer);
};

//LEY SEGUNDA

function resetborde(e) {
	Ley2da_js.resetStyle(e.target);
};

function interaccion(feature, layer) {
	var popupText=feature.properties.NOMBRE
	layer.on({
				mouseover: borde,
				mouseout: resetborde,
	});
	intersection(popupText,layer);
};