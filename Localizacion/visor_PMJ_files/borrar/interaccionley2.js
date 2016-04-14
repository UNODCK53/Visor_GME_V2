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

//función que redefine el borde después de pasar con el mouse
function resetborde(e) {
	Ley2da_js.resetStyle(e.target);
};

		
//funcion que define la interacción de la capa municipios
		
function interaccion(feature, layer) {
	var popupText=feature.properties.NOMBRE
	layer.on({
				mouseover: borde,
				mouseout: resetborde,
	});
	layer.on('click', function(e) {
	var X= document.getElementById("GMS").checked
	if (X==true){	
		try {
			map.removeLayer(marker);
			marker = new L.Marker([e.latlng.lat,e.latlng.lng],{draggable:true, zIndexOffset:1000});
			marker.bindPopup(popupText);
			map.addLayer(marker);
			
			//CALCULO DE LA LATITUD EN EL DIV
			
			graL=parseInt(e.latlng.lat)
			
			if (e.latlng.lat<0 && graL==0){
			graL="-0"
			}
			
			if (e.latlng.lat>0){
			minL=parseInt((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60)
			}else{
			minL=Math.abs(parseInt((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60))
			}
			if (e.latlng.lat>0){
			segL=((((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60)-parseInt((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60))*60).toFixed(2)
			}else{
			segL=Math.abs(((((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60)-parseInt((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60))*60).toFixed(2))
			}
			
			document.getElementById("latGG").value=graL
			document.getElementById("latMM").value=minL
			document.getElementById("latSS").value=segL
			
			//CALCULO DE LA LONGITUD EN EL DIV
			
			graLng=parseInt(e.latlng.lng)
			minLng=Math.abs(parseInt((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60))
			segLng=Math.abs(((((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60)-parseInt((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60))*60).toFixed(2))
			
			document.getElementById("longGG").value=graLng
			document.getElementById("longMM").value=minLng
			document.getElementById("longSS").value=segLng
		}
		catch(err) {
			marker = new L.Marker([e.latlng.lat,e.latlng.lng],{draggable:true, zIndexOffset:1000});
			marker.bindPopup(popupText);
			map.addLayer(marker);
			//CALCULO DE LA LATITUD EN EL DIV
			//console.log(e.latlng.lat+","+e.latlng.lng)
			graL=parseInt(e.latlng.lat)
			minL=parseInt((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60)
			segL=((((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60)-parseInt((parseFloat(e.latlng.lat)-parseInt(e.latlng.lat))*60))*60).toFixed(2)
			document.getElementById("latGG").value=graL
			document.getElementById("latMM").value=minL
			document.getElementById("latSS").value=segL
			
			//CALCULO DE LA LATITUD EN EL DIV
			
			graLng=parseInt(e.latlng.lng)
			minLng=Math.abs(parseInt((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60))
			segLng=Math.abs(((((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60)-parseInt((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60))*60).toFixed(2))
			document.getElementById("longGG").value=graLng
			document.getElementById("longMM").value=minLng
			document.getElementById("longSS").value=segLng
		
		}
	}else{
		try {
			map.removeLayer(marker);
			marker = new L.Marker([e.latlng.lat,e.latlng.lng],{draggable:true});
			marker.bindPopup(popupText);
			map.addLayer(marker);
			document.getElementById("Latitud").value=e.latlng.lat
			document.getElementById("Longitud").value=e.latlng.lng
		}
		catch(err) {
			marker = new L.Marker([e.latlng.lat,e.latlng.lng],{draggable:true});
			marker.bindPopup(popupText);
			document.getElementById("Latitud").value=e.latlng.lat
			document.getElementById("Longitud").value=e.latlng.lng
		}
		
	}
	
		
	mensaje(marker._latlng.lng, marker._latlng.lat)
			
	});
		
	
};

			
			

