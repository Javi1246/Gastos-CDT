
/***************************************************************
 * Plugin gdiNavegadorJ.exe                                    *
 ***************************************************************/

var salida;



function ejecutarPluginFirefox(userid) {
	
	//alert('entro en el metodo ejecutarPluginFirefox del js componenteHuella' +userid);
	
	var mensaje= new Object();
	mensaje.esError=false;
	mensaje.mensaje="";
    var objJson = {
        'employee': {
            'numberEmployee': userid
        },
        'settings': {
            'numberAttempts': 3,
            'location': [50, 50]
        }
    };

   // objJson = { 'collection': [ '1-20-172-31425', '8-1-3401-10001', '1-1-2130-16283' ], 'settings': { 'typeAuthentication': 3, 'numberAttempts': 3, 'location': [ 50,50 ] } };
   // alert(objJson);
    try {
        var rest = CJSGlobalObject.JSCallEnviaMensaje('standard', JSON.stringify(objJson));
       // alert('result');
       // alert(rest);
		
		mensaje.mensaje="Paso correctamente";
     console.log('Paso la huella CJSGlobalObject');

    } catch (ex) {
        //UniformesFlex.procesaRespuesta(-1, "Excepci\u00F3n javascript: " + ex.message);
			mensaje.esError=true;
			mensaje.mensaje="Error al invocar el objeto CJSGlobalObject";
      console.log('Error al cargar la huella CJSGlobalObject');
            JSSetUpdate();

              //$('#respHuellaError').click();
    }
	
	return mensaje;
}



export {ejecutarPluginFirefox};