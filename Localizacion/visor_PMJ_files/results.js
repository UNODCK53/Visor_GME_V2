function mensaje(longi,lat){
			
			var results = leafletPip.pointInLayer([longi, lat], Resguardos_js);
			var results2 = leafletPip.pointInLayer([longi, lat], parques_js);
			var results3 = leafletPip.pointInLayer([longi, lat], Ley2da_js);
			var results4 = leafletPip.pointInLayer([longi, lat], tc_js);
			//var results5 = leafletPip.pointInLayer([longi, lat], runat_js);
			//var results6 = leafletPip.pointInLayer([longi, lat], tc_2012_js);
			//var results7 = leafletPip.pointInLayer([longi, lat], tc_2013_js);
			//var results8 = leafletPip.pointInLayer([longi, lat], tc_2014_js);
			var resultsmuni = leafletPip.pointInLayer([longi, lat], municipios_js);
			
			X=results.length
			Y=results2.length
			Z=results3.length
			A=results4.length
			//B=results5.length
			//C=results6.length
			//D=results7.length
			//E=results8.length
			
			M=resultsmuni.length
			
			if (M==1){
			MM=resultsmuni[0].feature.properties.D
			MMM=resultsmuni[0].feature.properties.M
			}else{
			MM=0
			MMM=0
			}
			
			if (X==1){
			XX=results[0].feature.properties.L_resguard
			}else{
			XX=0
			}
			
			if (Y==1){
			YY=results2[0].feature.properties.L_parque
			}else{
			YY=0
			}
			
			if (Z==1){
			ZZ=results3[0].feature.properties.NOMBRE
			}else{
			ZZ=0
			}
			
			if (Z==1){
			ZZ=results3[0].feature.properties.NOMBRE
			}else{
			ZZ=0
			}
			
			if (A==1){
			AA=results4[0].feature.properties.L_tc
			}else{
			AA=0
			}
			
			/*if (B==1){
			BB=results5[0].feature.properties.NOMAP
			BBB=results5[0].feature.properties.CATEGORIA
			}else{
			BB=0
			BBB=0
			}*/
			
			/*if (C==1){
			CC=results6[0].feature.properties.NOM_TERR
			CCC=results6[0].feature.properties.NOM_MPIO
			CCCC=CC+"-"+CCC
			}else{
			CC=0
			CCC=0
			CCCC=0
			}
			
			if (D==1){
			DD=results7[0].feature.properties.NOM_TERR
			DDD=results7[0].feature.properties.NOM_MPIO
			DDDD=DD+"-"+DDD
			}else{
			DD=0
			DDD=0
			DDDD=0
			}
			
			if (E==1){
			EE=results8[0].feature.properties.L_terri
			EEE=results8[0].feature.properties.NOM_MPIO
			EEEE=EE+"-"+EEE
			}else{
			EE=0
			EEE=0
			EEEE=0
			}*/
			
			//Arreglo de los mensajes que deben salir
			
			//capa=["Departamento","Municipio","Resguardo","Parque Natural", "Ley Segunda", "Territorios Colectivos", BBB, "Veredas 2012", "Veredas 2013"]
			
			admincapa=["Departamento","Municipio","Veredas 2012", "Veredas 2013","Veredas 2014"]
			terricapa=["Resguardo","Parque Natural", "Ley Segunda", "Territorios Colectivos"]
			//Nombre=[MM,MMM,XX,YY,ZZ,AA,BB,CCCC,DDDD]
			
			//adminombre=[MM,MMM,CC,DD,EE]
			adminombre=[MM,MMM]
			terrinombre=[XX,YY,ZZ,AA]
			//console.log(capa)
									
			document.getElementById("localizacion3").innerHTML=datosmen(admincapa,adminombre,terricapa,terrinombre)
}
function datosmen(a,b,o,p){
	//console.log(a)
	var d=[];
	var dd=[];
	var k=0;
	var text;
	var kk=0;
	var text2;
	
	//PARA LA PARTE ADMINISTRATIVA
	var y="<h2 class='titlat5'>Ubicación administrativa del punto</h2><table class='tablacelda' with='100%'><tr><th align='center' width='35%'>Capa</th><th align='center'>Nombre</th></tr>"
	
	var z="</table>"
		
	for (i = 0; i < b.length; i++) {
		if (b[i]!=0) {
			text = "<tr><td>"+a[i]+"</td><td>"+b[i]+"</td></tr>"
			d[k]=text;
			k++;
		}
	}
	
	var e=d.toString();
	e=e.replace(/,/g,"")
	
	
	if (e!=""){ 
	admin=y+e+z
	prueba=1;
	}else{
	admin="<h2 class='titlat3'>El punto esta por fuera de Colombia.</h2>"
	prueba=0;
	}
	
	
	
	//PARA LA PARTE DE TERRITORIOS
	
	var yy="<h2 class='titlat5'>Restricciones de uso en el punto</h2><table  class='tablacelda'><tr><th align='center' width='35%'>Capa</th><th align='center'>Nombre</th></tr>"
	
	var zz="</table>"
	
	if (prueba==1){
	
	for (i = 0; i < p.length; i++) {
		if (p[i]!=0) {
			text2 = "<tr><td>"+o[i]+"</td><td>"+p[i]+"</td></tr>"
			dd[kk]=text2;
			kk++;
		}
	}
	
	var ee=dd.toString();
	ee=ee.replace(/,/g,"")
	
	if (ee!=""){ 
	terri=yy+ee+zz
	}else{
		terri="<h2 class='titlat5'>El punto no tiene restricciones de uso</h2>"
	}
	returnfinal=admin + terri
	}else{
	returnfinal=admin 
	}
	//returnfinal=admin
	return returnfinal
		
}