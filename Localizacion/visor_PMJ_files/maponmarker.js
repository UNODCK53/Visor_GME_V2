map.on('click', function(e) {
			//alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
			var X= document.getElementById("GMS").checked
			
			if (X==true){	
				try {
					map.removeLayer(marker);
					marker = new L.Marker([e.latlng.lat,e.latlng.lng],{draggable:true, zIndexOffset:1000});
					marker.bindPopup("El punto esta por fuera de las capas territoriales");
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
					
					//CALCULO DE LA LATITUD EN EL DIV
					
					graLng=parseInt(e.latlng.lng)
					minLng=Math.abs(parseInt((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60))
					segLng=Math.abs(((((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60)-parseInt((parseFloat(e.latlng.lng)-parseInt(e.latlng.lng))*60))*60).toFixed(2))
					
					document.getElementById("longGG").value=graLng
					document.getElementById("longMM").value=minLng
					document.getElementById("longSS").value=segLng
				}
				catch(err) {
					marker = new L.Marker([e.latlng.lat,e.latlng.lng],{draggable:true, zIndexOffset:1000});
					marker.bindPopup("El punto esta por fuera de las capas territoriales");
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
					marker.bindPopup("El punto esta por fuera de las capas territoriales");
					map.addLayer(marker);
					document.getElementById("Latitud").value=e.latlng.lat
					document.getElementById("Longitud").value=e.latlng.lng
				}
				catch(err) {
					marker = new L.Marker([e.latlng.lat,e.latlng.lng],{draggable:true});
					marker.bindPopup("El punto esta por fuera de las capas territoriales");
					document.getElementById("Latitud").value=e.latlng.lat
					document.getElementById("Longitud").value=e.latlng.lng
				}
				
			}
		
})
map.on('click', function inter() {
			
	mensaje(marker._latlng.lng, marker._latlng.lat)
})