import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosCuenta} from '../models/DatosCuenta';
import { ProductoService } from '../services/producto.service';
import { cuenta } from '../models/CuentaGastos';
import {reporteGastos} from '../models/reporteGastos';
import {DialogCargar} from '../components/carga';
import {egreso} from '../models/egreso';
import {datosGenerales} from '../models/datosGenerales';
import {parseString} from "xml2js";
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';
import  {RequiereXML} from '../models/RequiereXML';
import {validaFacturacion} from '../models/validaFacturacion';
import {cuentaGastosXML} from '../models/cuentaGastosXML';
import {AutizacionSolicitud} from '../models/AutizacionSolicitud';
import {impresion} from '../models/impresion';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {empleadoHuella} from '../models/empleadoHuella';
//import huella=require('huella');

//import * as variable from './node_modules/Huella/huella.js';  

declare var jquery:any;
declare var $ :any;

declare var System: any;    


@Component({

  selector: 'dialog-data-empleados-dialog',
  templateUrl: '../views/dialog-data-empleados-dialog.html',  
  providers: [    
    ProductoService,
  ],
})
export class DialogDataEmpleadoHuellaDialog {
   public cuentas : datosCuenta;
   public egresos : egreso;
   public titulo : string ;
   public filesToUpload;
   public xmltexto : any;
   public comprobantes : any;
   public Addenda : any;
   public Complemento : any;
   public Conceptos : any;
   public Emisor : any;
   public Impuestos : any;
   public Receptor : any;
   public requiereXML: RequiereXML;
   public pasoEgreso: any ;
   public xml: string;
   public validaFacturacion: validaFacturacion;

   public descrip: string ;
   public mostrarFactura: boolean ;
   public habilitarComponenetes: boolean ;
   public requiredValidacion:boolean;
   public requiredValidacionJust:boolean;
   public mensaje:string;
   public pantalla:boolean;
   public MessageError: boolean=false;
    public bse64 : string;
   public imagen:any;
   public imprimirCorrectamente : boolean=true;
   public ticket: reporteGastos;
   public impresion : impresion;
   public noImpresion: number;
   public boton:boolean;
   public habilitarAgregar:boolean;
   public formProducto:any;
   public detAutizacionSolicitud:AutizacionSolicitud;
   public empleadoHuella:empleadoHuella;
   public cabecero: boolean=true;
   public respuesta: any;
   CJSGlobalObject:any;

  
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService2: ProductoService,private router: Router,private window: Window) {
            /*this.cuenta=data.cuenta+data.descripcion;
            this.importe=0.0;
            this.factura='';
            this.justificacion='';*/
            this.detAutizacionSolicitud=  data.carga;
            
            this.data.consulta=false;
            this.pantalla=false;
            this.titulo='Comprobación de Gasto en Tienda';
            this.boton=true;
            this.habilitarAgregar=false;

           console.log('Valor de empleado DialogDataEmpleadoHuellaDialog');
           console.log(this.data.datosGenerales.NomEmpleado);
           console.log(this.data.datosGenerales.NoEmpleado);
           

            console.log(this.data);
            if (this.data.datosGenerales!= null){
                  this.empleadoHuella = new empleadoHuella(this.data.datosGenerales.NoEmpleado,this.data.datosGenerales.NomEmpleado,'',''); 

                  this.ejecutarPluginFirefoxHuella(this.data.datosGenerales.NoEmpleado);

                  console.log('datos de empleado huella');
                  console.log(this.empleadoHuella);
            }

            
            

  }

/***************************************************************
 * Plugin gdiNavegadorJ.exe                                    *
 ***************************************************************/
 ejecutarPluginFirefoxHuella(userid) {
    $('#ocultarHuella').css({'display': 'none'});
  console.log('Entro en validar la huella del empleado ' +userid );        
    var objJson = {
        'employee': {
            'numberEmployee': userid
        },
        'settings': {
            'numberAttempts': 3,
            'location': [50, 50]       
        }
    };

    try {
            
            //    CJSGlobalObject.JSCallEnviaMensaje('standard', JSON.stringify(objJson));  
            var self=this;

                   this.pantalla=true;
                   this.MessageError=false;
                   this.imprimirCorrectamente=false;
                   this.cabecero=false;

                //$('.mat-dialog-container').css({'height': '150px','margin':'auto'});
                $('.mat-dialog-content').css({'overflow': 'hidden'});
                

            System.import('assets/Huella/huella.js').then(file => {
                 //
                 console.log('El valoe de file ');
                 console.log(file);
                
                 try{

                       console.log('Entro a ejecutar el metodo de la huella con los siguiemtes valoes');
                       console.log('file.ejecutarPluginFirefox('+userid+')');
                       this.respuesta= file.ejecutarPluginFirefox(userid);


                       
                 }catch(err){
                   console.log(err);
                   this.titulo="Error                                                 ";
                   this.mensaje= "Error al invocar el componente de la Huella: "+err;
                   this.pantalla=true;
                   this.MessageError=true;
                   this.cabecero=true;
               
                 }
                 
            });

           
        
        } catch (ex) {           
                 this.titulo="Error                                                 ";
                 this.mensaje= "Error al invocar el componente de la Huella "+ex;
                 this.pantalla=true;
                 this.MessageError=true;
                 this.data.consulta=false;
                  this.cabecero=true;
        }
}



JSSetUpdate2() {
   
 // alert('JSSetUpdate2');
  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
  

//  alert('JSSetUpdate2');
 this.data.consulta=true;
                                 this.titulo="Exito                                                 ";
                                 this.mensaje= "La huella fue obtenida correctamente";
                                 this.pantalla=true;
                                 this.MessageError=true;
                                  this.cabecero=true;

   /* try{

           if (typeof(Storage) !== "undefined") 
             {

               this.respuesta=localStorage.getItem("respuesta"); 

               console.log(this.respuesta);

                var objResp = JSON.parse(this.respuesta);

                objResp.PluginResponse.authenticated
                var mensaje = objResp.PluginResponse.processDetail;
                var codigo = -1;
                  this.data.consulta=false;
                    if (objResp.Issue.statusControl) {
                        var det = objResp.Issue.detail;
                        mensaje = "Error al validar la huella del empleado, favor de contactar a Soporte.";        
                        mensaje += "Detalle del error: " + det.message + " TypeError:" + det.typeError + " CodeError: " + det.codeError;
                                 this.titulo="Error                                                 ";
                                 this.mensaje= mensaje;
                                 this.pantalla=true;
                                 this.MessageError=true;
                                 this.data.consulta=false;
                                  this.cabecero=true;
                    } else {
                        this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                        this.data.consulta=true;
                                 this.titulo="Exito                                                 ";
                                 this.mensaje= "La huella fue obtenida correctamente";
                                 this.pantalla=true;
                                 this.MessageError=true;
                                  this.cabecero=true;

                    }
                    //this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                        

                    localStorage.setItem("respuesta",null); 

             } 
           else 
             {
                 this.titulo="Error                                                 ";
                 this.mensaje= "Local storage no soportado por el navegaddor ";
                 this.pantalla=true;
                 this.MessageError=true;
                 this.data.consulta=false;
                  this.cabecero=true;
             }


                localStorage.setItem("respuesta",null); 
          

    }catch(err){
          console.log('Error en la validacion de la huella ');
          this.titulo="Error                                                 ";
                 this.mensaje= "Error en la validacion de la huella " +err;
                 this.pantalla=true;
                 this.MessageError=true;
                 this.data.consulta=false;
                  this.cabecero=true;

                   localStorage.setItem("respuesta",null); 

    }*/

    

   
}



JSSetUpdateError() {

// alert('JSSetUpdateError');

   
 // alert('JSSetUpdate2');
  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
  
  console.log('Entro en el error JSSetUpdateError');
 this.data.consulta=false;
                                 this.titulo="Error                                                 ";
                                 this.mensaje= 'Huella incorrecta ';
                                 this.pantalla=true;
                                 this.MessageError=true;                                
                                  this.cabecero=true;


  /*  try{

           if (typeof(Storage) !== "undefined") 
             {

               this.respuesta=localStorage.getItem("respuesta"); 

               console.log(this.respuesta);

                var objResp = JSON.parse(this.respuesta);

                objResp.PluginResponse.authenticated
                var mensaje = objResp.PluginResponse.processDetail;
                var codigo = -1;
                  this.data.consulta=false;
                    if (objResp.Issue.statusControl) {
                        var det = objResp.Issue.detail;
                        mensaje = "Error al validar la huella del empleado, favor de contactar a Soporte.";        
                        mensaje += "Detalle del error: " + det.message + " TypeError:" + det.typeError + " CodeError: " + det.codeError;
                                 this.titulo="Error                                                 ";
                                 this.mensaje= mensaje;
                                 this.pantalla=true;
                                 this.MessageError=true;
                                 this.data.consulta=false;
                                  this.cabecero=true;
                    } else {
                        this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                        this.data.consulta=true;
                                 this.titulo="Exito                                                 ";
                                 this.mensaje= "La huella fue obtenida correctamente";
                                 this.pantalla=true;
                                 this.MessageError=true;
                                  this.cabecero=true;

                    }
                    //this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                        

                    localStorage.setItem("respuesta",null); 

             } 
           else 
             {
                 this.titulo="Error                                                 ";
                 this.mensaje= "Local storage no soportado por el navegaddor ";
                 this.pantalla=true;
                 this.MessageError=true;
                 this.data.consulta=false;
                  this.cabecero=true;
             }


                localStorage.setItem("respuesta",null); 
          

    }catch(err){
          console.log('Error en la validacion de la huella ');
          this.titulo="Error                                                 ";
                 this.mensaje= "Error en la validacion de la huella " +err;
                 this.pantalla=true;
                 this.MessageError=true;
                 this.data.consulta=false;
                  this.cabecero=true;

                   localStorage.setItem("respuesta",null); 

    }*/

    

   
}


JSSetUpdateError2() {

// alert('JSSetUpdateError');

   
 // alert('JSSetUpdate2');
  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
  
  console.log('Entro en el error JSSetUpdateError');
 this.data.consulta=false;
                   this.titulo="Error                                                 ";
                   this.mensaje= "Error al invocar el componente de la Huella: ";
                   this.pantalla=true;
                   this.MessageError=true;
                   this.cabecero=true;


  /*  try{

           if (typeof(Storage) !== "undefined") 
             {

               this.respuesta=localStorage.getItem("respuesta"); 

               console.log(this.respuesta);

                var objResp = JSON.parse(this.respuesta);

                objResp.PluginResponse.authenticated
                var mensaje = objResp.PluginResponse.processDetail;
                var codigo = -1;
                  this.data.consulta=false;
                    if (objResp.Issue.statusControl) {
                        var det = objResp.Issue.detail;
                        mensaje = "Error al validar la huella del empleado, favor de contactar a Soporte.";        
                        mensaje += "Detalle del error: " + det.message + " TypeError:" + det.typeError + " CodeError: " + det.codeError;
                                 this.titulo="Error                                                 ";
                                 this.mensaje= mensaje;
                                 this.pantalla=true;
                                 this.MessageError=true;
                                 this.data.consulta=false;
                                  this.cabecero=true;
                    } else {
                        this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                        this.data.consulta=true;
                                 this.titulo="Exito                                                 ";
                                 this.mensaje= "La huella fue obtenida correctamente";
                                 this.pantalla=true;
                                 this.MessageError=true;
                                  this.cabecero=true;

                    }
                    //this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                        

                    localStorage.setItem("respuesta",null); 

             } 
           else 
             {
                 this.titulo="Error                                                 ";
                 this.mensaje= "Local storage no soportado por el navegaddor ";
                 this.pantalla=true;
                 this.MessageError=true;
                 this.data.consulta=false;
                  this.cabecero=true;
             }


                localStorage.setItem("respuesta",null); 
          

    }catch(err){
          console.log('Error en la validacion de la huella ');
          this.titulo="Error                                                 ";
                 this.mensaje= "Error en la validacion de la huella " +err;
                 this.pantalla=true;
                 this.MessageError=true;
                 this.data.consulta=false;
                  this.cabecero=true;

                   localStorage.setItem("respuesta",null); 

    }*/

    

   
}




  redirectHome(){
      this.router.navigate(['home']);
     console.log('Entro en redirect');
  }



  fileChangeEvent(fileInput: any){

    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

    console.log('egresos antres');
    console.log(this.egresos);

    this.cargarArchivo(this.filesToUpload);

    console.log('Los comprobantes');
    console.log(this.comprobantes);

    


  }

    onSubmit(){
          

  }

  validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

      if ( this.egresos.factura.length>0 && form){
            this.habilitarAgregar=true;
      }else{
          this.habilitarAgregar=false;

      }

        return this.habilitarAgregar;
  }

/*  validaImporte(valor):boolean{

var salida:boolean=true;
        
 console.log('validar habilitarComponenetes'+this.habilitarComponenetes +' valor='+valor);
        if (this.habilitarComponenetes){
           
            salida=this.egresos.importe>=0 ?true:false;


        }else{
            salida=this.egresos.importe>=0 && valor?true:false;

        }
        console.log('validar importe'+salida);

        return salida;

  }

  validaFactura(valor):boolean{

var salida:boolean=true;
        
 console.log('validar habilitarComponenetes'+this.habilitarComponenetes +' valor='+valor);
        if (this.habilitarComponenetes){
           
            salida=this.egresos.factura.length>0 ?true:false;


        }else{
            salida=this.egresos.factura.length>0 && valor?true:false;

        }
        console.log('validar factura'+salida);

        return salida;

  }*/

  cargarArchivo(filesToUpload){
       
       var reader = new FileReader();


       var self = this;

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
                          return function(e) {
                           

                           console.log('Entro con el componente '+theFile.name);
                           console.log(e.target.result);

                           self.xml=e.target.result;
                          
                            
                                       self.consultaValidacionXML(self.xml);



                            
                            
                            };
                      })(filesToUpload[0]);

      // Read in the image file as a data URL.
      //reader.readAsDataURL(f);

          //reader.readAsDataURL(filesToUpload[0]);
          reader.readAsText(filesToUpload[0]);

             

  }

  llenarDatosfactura()  {

/*
               this.egresos.importe=Number(this.comprobantes.total);
               this.egresos.factura=this.comprobantes.folio;

               console.log('llenarDatosfactura');*/
               console.log(this.xmltexto);

  }

  convertirXMLtoJson(xml: string ){

        console.log('XML');
        console.log(xml);

           var self = this;

                  var ress;
                           parseString(xml,  function (err, result) {
                                        console.log('objeto en json');
                                        console.log(result);
                                          ress=result;
                                     
                                      
                            });

                      console.log('Despues arnol');
                        self.xmltexto=ress;

                      console.log( self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);

                             self.comprobantes=self.xmltexto["cfdi:Comprobante"]["$"];
                              console.log( self.comprobantes);
                              console.log( self.comprobantes.folio);


                              console.log('Egresos');
                              console.log(self.egresos);
                      

                            // self.egresos.importe=Number(self.comprobantes.total);
                             self.egresos.factura=self.comprobantes.folio;


//                             self.validarComponentes();

                           /*  this.Addenda=this.xmltexto["cfdi:Comprobante"]["cfdi:Addenda"][0];
                             console.log( this.Addenda);

                             this.Complemento=this.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0];
                             console.log( this.Complemento);

                             this.Conceptos=this.xmltexto["cfdi:Comprobante"]["cfdi:Conceptos"][0];
                             console.log( this.Conceptos);*/


                            self.Complemento=self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
                            console.log( 'Complemento');
                             console.log( self.Complemento);

                                 console.log('Valor UUID='+self.Complemento.UUID)
                            
                             /*this.egreso.importe=this.Complemento.total;
                             this.egreso.factura=this.Complemento.folio;*/
                             self.Emisor=self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
                             console.log(self.Emisor);
                             self.Impuestos=self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
                             console.log( self.Impuestos);
                             self.Receptor=self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
                             console.log( self.Receptor);


  }

  consultaValidacionXML(xml:string){



     console.log('XML');
         xml = xml.trim();
         xml=xml.split("\n").join("");
         xml=xml.split("\r").join("");
         xml=xml.split("\t").join("");



        // xml='<?xml version="1.0" encoding="UTF-8"?>  <cfdi:Comprobante NumCtaPago="7053" LugarExpedicion="Liverpool Perisur" metodoDePago="TARJETA DE DEBITO" tipoDeComprobante="ingreso" total="254.15" subTotal="219.09" certificado="MIIEmDCCA4CgAwIBAgIUMDAwMDEwMDAwMDAyMDI5MzY1OTEwDQYJKoZIhvcNAQEFBQAwggGVMTgwNgYDVQQDDC9BLkMuIGRlbCBTZXJ2aWNpbyBkZSBBZG1pbmlzdHJhY2nDs24gVHJpYnV0YXJpYTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMSEwHwYJKoZIhvcNAQkBFhJhc2lzbmV0QHNhdC5nb2IubXgxJjAkBgNVBAkMHUF2LiBIaWRhbGdvIDc3LCBDb2wuIEd1ZXJyZXJvMQ4wDAYDVQQRDAUwNjMwMDELMAkGA1UEBhMCTVgxGTAXBgNVBAgMEERpc3RyaXRvIEZlZGVyYWwxFDASBgNVBAcMC0N1YXVodMOpbW9jMRUwEwYDVQQtEwxTQVQ5NzA3MDFOTjMxPjA8BgkqhkiG9w0BCQIML1Jlc3BvbnNhYmxlOiBDZWNpbGlhIEd1aWxsZXJtaW5hIEdhcmPDrWEgR3VlcnJhMB4XDTEzMDEzMDE3MzM1N1oXDTE3MDEzMDE3MzM1N1owgdkxKTAnBgNVBAMTIERJU1RSSUJVSURPUkEgTElWRVJQT09MIFNBIERFIENWMSkwJwYDVQQpEyBESVNUUklCVUlET1JBIExJVkVSUE9PTCBTQSBERSBDVjEpMCcGA1UEChMgRElTVFJJQlVJRE9SQSBMSVZFUlBPT0wgU0EgREUgQ1YxJTAjBgNVBC0THERMSTkzMTIwMU1JOSAvIE1BTUE2NDA4MjE3WjExHjAcBgNVBAUTFSAvIE1BTUE2NDA4MjFIVlpSSk4wODEPMA0GA1UECxMGTUFUUklaMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDahhNvBmdLPOzXe2JYcgbFxAmvUM49MRWbXha3sv977ls+egA/cfYL3r6BhwNqnBSGW+yDQpVp6XSdltgojVRAT6ftsp5eTNFLlQ6Hz/2pcplW4GngLkf7EmfmPFxVkXRcdiFxtQCLNzZldtFq/TETwRW1msnVFY5vXQIxu3S1IwIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQUFAAOCAQEAN03lIAt1IkR+R9dVQNWLspgQIBTt5fD63OUTe0h90FAjKk/nBMPiVdXzLycgLoQrEEbXC/YFAIRId40Eib70siptV1sh/8IP6+4NMvON56rm4kjTdhuiUk6KjI/7UwkGehkY8AGNOkmW1HyMma3l42Cu2H49k0ajNFe9SAxI5ZhsYI6K6MPoYd48BrAZkntZkgjChDa9y87kOnvPnETmiJwMFlGnvFFzqDSvIQ2iggoRRUqGCp6EX+Tv1kU2xNLbCL8E4w3w40Zk2PNS5g9mVxZ+1TDJDan+e6hb3thDdjYmRz39vn5isBX91+OAbqFPgs3MDzaykuiW9F4II/0VAA==" noCertificado="00001000000202936591" formaDePago="PAGADO EN UNA SOLA EXHIBICIÓN" sello="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" fecha="2015-03-30T14:32:46" folio="279116" serie="LWF" version="3.2" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv32.xsd http://www.buzonfiscal.com/ns/addenda/bf/2 http://www.buzonfiscal.com/schema/xsd/Addenda_BF_v20.xsd" xmlns:bfa2="http://www.buzonfiscal.com/ns/addenda/bf/2" xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <cfdi:Emisor nombre="Distribuidora Liverpool S.A. de C.V." rfc="DLI931201MI9">        <cfdi:DomicilioFiscal codigoPostal="05348" pais="Mexico" estado="Mexico, D.F." municipio="Cuajimalpa de Morelos" colonia="Santa Fe Cuajimalpa" calle="C. Mario Pani No. 200"/>        <cfdi:ExpedidoEn codigoPostal="04500" pais="Mexico" estado="México, Distrito Federal" municipio="Coyoacan" referencia="LIV" colonia="Ampliacion del Pedregal de San Angel" calle="Av. Anillo Periférico Sur No. 4690"/>        <cfdi:RegimenFiscal Regimen="REGIMEN GENERAL DE LEY PERSONAS MORALES"/>    </cfdi:Emisor>    <cfdi:Receptor nombre="HORACIO GONZALEZ YLLEZCAS" rfc="GOYH831206431">        <cfdi:Domicilio codigoPostal="12400" pais="MEXICO" estado="MÉXICO, D.F." municipio="MILPA ALTA" colonia="SAN PABLO OZTOTEPEC" calle="CALLEJON ZARAGOZA 28"/>    </cfdi:Receptor>    <cfdi:Conceptos>        <cfdi:Concepto importe="219.09" valorUnitario="219.09" descripcion="DC PELUCHE MEDIAN" unidad="PZA" cantidad="1.00">            <cfdi:InformacionAduanera aduana="510-LAZARO CARDENAS" fecha="2014-08-22" numero="037945104007311"/>        </cfdi:Concepto>    </cfdi:Conceptos>    <cfdi:Impuestos totalImpuestosTrasladados="35.06">        <cfdi:Traslados>            <cfdi:Traslado importe="35.06" tasa="16" impuesto="IVA"/>        </cfdi:Traslados>    </cfdi:Impuestos>    <cfdi:Complemento>        <tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigital.xsd"  selloSAT="i0N11jbvZf1buPdqH93Du7RMLKwQEK6cwRDeEfzjVD4muh99eqxuGq+jyCwwDgn8ZgVIMWBFbAk9bGKUbffmqVuQXHzNRpMmOXB6EFaA/ioj9NxM0/MYok83csdSI7AwIM3SOyg0S/XXwnIb14E/IZnG35PmbA9hMErOHvCrbw4=" noCertificadoSAT="00001000000202693892" selloCFD="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" FechaTimbrado="2015-03-30T14:32:51" UUID="168743ca-c1f4-4851-bf17-73a9b7369457" version="1.0"/>    </cfdi:Complemento>    <cfdi:Addenda>        <bfa2:AddendaBuzonFiscal version="2.0">            <bfa2:CFD totalConLetra="DOSCIENTOS CINCUENTA Y CUATRO PESOS 15/100 M.N."/>            <bfa2:Extra valor="2015-03-30T14:32:46.827" atributo="DIVERZA_FECHA_CFDI"/>        </bfa2:AddendaBuzonFiscal>    </cfdi:Addenda></cfdi:Comprobante>producto.service.ts:88 http://10.51.118.175:8082/ServicioGastos.svc/json/ConsultaValidacionXML?xml=<?xml version="1.0" encoding="UTF-8"?>  <cfdi:Comprobante NumCtaPago="7053" LugarExpedicion="Liverpool Perisur" metodoDePago="TARJETA DE DEBITO" tipoDeComprobante="ingreso" total="254.15" subTotal="219.09" certificado="MIIEmDCCA4CgAwIBAgIUMDAwMDEwMDAwMDAyMDI5MzY1OTEwDQYJKoZIhvcNAQEFBQAwggGVMTgwNgYDVQQDDC9BLkMuIGRlbCBTZXJ2aWNpbyBkZSBBZG1pbmlzdHJhY2nDs24gVHJpYnV0YXJpYTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMSEwHwYJKoZIhvcNAQkBFhJhc2lzbmV0QHNhdC5nb2IubXgxJjAkBgNVBAkMHUF2LiBIaWRhbGdvIDc3LCBDb2wuIEd1ZXJyZXJvMQ4wDAYDVQQRDAUwNjMwMDELMAkGA1UEBhMCTVgxGTAXBgNVBAgMEERpc3RyaXRvIEZlZGVyYWwxFDASBgNVBAcMC0N1YXVodMOpbW9jMRUwEwYDVQQtEwxTQVQ5NzA3MDFOTjMxPjA8BgkqhkiG9w0BCQIML1Jlc3BvbnNhYmxlOiBDZWNpbGlhIEd1aWxsZXJtaW5hIEdhcmPDrWEgR3VlcnJhMB4XDTEzMDEzMDE3MzM1N1oXDTE3MDEzMDE3MzM1N1owgdkxKTAnBgNVBAMTIERJU1RSSUJVSURPUkEgTElWRVJQT09MIFNBIERFIENWMSkwJwYDVQQpEyBESVNUUklCVUlET1JBIExJVkVSUE9PTCBTQSBERSBDVjEpMCcGA1UEChMgRElTVFJJQlVJRE9SQSBMSVZFUlBPT0wgU0EgREUgQ1YxJTAjBgNVBC0THERMSTkzMTIwMU1JOSAvIE1BTUE2NDA4MjE3WjExHjAcBgNVBAUTFSAvIE1BTUE2NDA4MjFIVlpSSk4wODEPMA0GA1UECxMGTUFUUklaMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDahhNvBmdLPOzXe2JYcgbFxAmvUM49MRWbXha3sv977ls+egA/cfYL3r6BhwNqnBSGW+yDQpVp6XSdltgojVRAT6ftsp5eTNFLlQ6Hz/2pcplW4GngLkf7EmfmPFxVkXRcdiFxtQCLNzZldtFq/TETwRW1msnVFY5vXQIxu3S1IwIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQUFAAOCAQEAN03lIAt1IkR+R9dVQNWLspgQIBTt5fD63OUTe0h90FAjKk/nBMPiVdXzLycgLoQrEEbXC/YFAIRId40Eib70siptV1sh/8IP6+4NMvON56rm4kjTdhuiUk6KjI/7UwkGehkY8AGNOkmW1HyMma3l42Cu2H49k0ajNFe9SAxI5ZhsYI6K6MPoYd48BrAZkntZkgjChDa9y87kOnvPnETmiJwMFlGnvFFzqDSvIQ2iggoRRUqGCp6EX+Tv1kU2xNLbCL8E4w3w40Zk2PNS5g9mVxZ+1TDJDan+e6hb3thDdjYmRz39vn5isBX91+OAbqFPgs3MDzaykuiW9F4II/0VAA==" noCertificado="00001000000202936591" formaDePago="PAGADO EN UNA SOLA EXHIBICIÓN" sello="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" fecha="2015-03-30T14:32:46" folio="279116" serie="LWF" version="3.2" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv32.xsd http://www.buzonfiscal.com/ns/addenda/bf/2 http://www.buzonfiscal.com/schema/xsd/Addenda_BF_v20.xsd" xmlns:bfa2="http://www.buzonfiscal.com/ns/addenda/bf/2" xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <cfdi:Emisor nombre="Distribuidora Liverpool S.A. de C.V." rfc="DLI931201MI9">        <cfdi:DomicilioFiscal codigoPostal="05348" pais="Mexico" estado="Mexico, D.F." municipio="Cuajimalpa de Morelos" colonia="Santa Fe Cuajimalpa" calle="C. Mario Pani No. 200"/>        <cfdi:ExpedidoEn codigoPostal="04500" pais="Mexico" estado="México, Distrito Federal" municipio="Coyoacan" referencia="LIV" colonia="Ampliacion del Pedregal de San Angel" calle="Av. Anillo Periférico Sur No. 4690"/>        <cfdi:RegimenFiscal Regimen="REGIMEN GENERAL DE LEY PERSONAS MORALES"/>    </cfdi:Emisor>    <cfdi:Receptor nombre="HORACIO GONZALEZ YLLEZCAS" rfc="GOYH831206431">        <cfdi:Domicilio codigoPostal="12400" pais="MEXICO" estado="MÉXICO, D.F." municipio="MILPA ALTA" colonia="SAN PABLO OZTOTEPEC" calle="CALLEJON ZARAGOZA 28"/>    </cfdi:Receptor>    <cfdi:Conceptos>        <cfdi:Concepto importe="219.09" valorUnitario="219.09" descripcion="DC PELUCHE MEDIAN" unidad="PZA" cantidad="1.00">            <cfdi:InformacionAduanera aduana="510-LAZARO CARDENAS" fecha="2014-08-22" numero="037945104007311"/>        </cfdi:Concepto>    </cfdi:Conceptos>    <cfdi:Impuestos totalImpuestosTrasladados="35.06">        <cfdi:Traslados>            <cfdi:Traslado importe="35.06" tasa="16" impuesto="IVA"/>        </cfdi:Traslados>    </cfdi:Impuestos>    <cfdi:Complemento>        <tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigital.xsd"  selloSAT="i0N11jbvZf1buPdqH93Du7RMLKwQEK6cwRDeEfzjVD4muh99eqxuGq+jyCwwDgn8ZgVIMWBFbAk9bGKUbffmqVuQXHzNRpMmOXB6EFaA/ioj9NxM0/MYok83csdSI7AwIM3SOyg0S/XXwnIb14E/IZnG35PmbA9hMErOHvCrbw4=" noCertificadoSAT="00001000000202693892" selloCFD="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" FechaTimbrado="2015-03-30T14:32:51" UUID="168743ca-c1f4-4851-bf17-73a9b7369457" version="1.0"/>    </cfdi:Complemento>    <cfdi:Addenda>        <bfa2:AddendaBuzonFiscal version="2.0">            <bfa2:CFD totalConLetra="DOSCIENTOS CINCUENTA Y CUATRO PESOS 15/100 M.N."/>            <bfa2:Extra valor="2015-03-30T14:32:46.827" atributo="DIVERZA_FECHA_CFDI"/>        </bfa2:AddendaBuzonFiscal>    </cfdi:Addenda></cfdi:Comprobante>';

         //xml = '<![CDATA['+xml+']]>';



           
    


 xml=xml.split("\n").join("");
       // xml= xml.replace(/['"]+/g, "'");
         console.log(xml.trim());

        
        /* var xmlString= ( new DOMParser() ).parseFromString(xml, "text/xml");
    

        console.log(xmlString);

        console.log('Xml transformado');
        console.log((new XMLSerializer()).serializeToString(xmlString));*/

//            var xmlText = (new XMLSerializer()).serializeToString(xml);

  //          console.log(xmlText);

             /*Conulta del servicio*/
            /*  var oSerializer = new XMLSerializer();
             var xmlString = oSerializer.serializeToString(xml);    



*/


                             this._productoService2.getValidacionXML(xml.trim(),'').subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              
                                              this.validaFacturacion = result.detValidacionXML;
                                              console.log(this.validaFacturacion);

                                                  if(this.validaFacturacion != null){

                                                     /*   if (this.validaFacturacion.codigo ==0){
                                                                this.convertirXMLtoJson(this.xml);

                                                        }else{

                                                            console.log('Xml no es valido \n Favor de cargar un XML valido');
                                                            this.titulo="Alerta                                                 ";
                                                            this.mensaje= "Favor de cargar un xml valido, \n Intenta nuevamente ";
                                                            this.pantalla=true;
                                                            this.boton=false;


                                                        }*/

                                                  }else{
                                                        console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                        this.pantalla=true;

                                                  }

                                                    

                                               
                                                    

                                             
                                            }else{
                                           //   this.closeDialogCargar();
                                              console.log('Entro');
                                              //this.ReporteGastos = result.detDetCuentasReimpresion;
                                              console.log('Entro');
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 

  }




/*parseString(xml, function (err, result) {
  console.dir(result);
});*/

insertaSolicitudGastos(){

      console.log('Entro en el metodo insertaSolicitudGastos');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";
               this._productoService2.getActualizarSolicitudGastos(this.data.datosGenerales,this.detAutizacionSolicitud).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);                                              
                                              //alert('Terrmino');
                                              //this.validaFacturacion = result.detValidacionXML;
                                              //console.log(this.validaFacturacion);
                                              /* console.log('Se guardo con exito');
                                                        this.titulo="Exito";
                                                        this.mensaje= "Se regisro correctamente la solicitud de gastos para la cuenta "+this.data.carga.descripcion;
                                                        this.pantalla=true;*/
                                              if(result.error==false){
                                                  this.ticket = result.detDetCuentasReimpresion[0];
                                              console.log(this.ticket);
                                              this.imprimirEgreso(this.ticket);  
                                              }else{
                                                    this.titulo="Error";
                                                    this.pantalla=true;
                                                    this.MessageError=true;
                                                    this.mensaje="Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                                                    this.boton=true;
                                              console.log( this.mensaje)

                                              }
                                              

                                             
                                            }else{
                                              console.log('Entro');
                                              
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                              this.boton=true;
                                              console.log( this.mensaje)
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          this.titulo="Error";
                                                    this.pantalla=true;
                                                    this.MessageError=true;
                                                    this.mensaje="Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                                                    this.boton=true;
                                              console.log( this.mensaje)
                                        }

                                         );
                         /*Fin de servicio*/ 


    }

      imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);
               this.imprimirCorrectamente=false;
               if (ticket!=null){
                   this.ticket=ticket;
               }
              /*Metodos para realizar la impresion*/
                       this._productoService2.setArchivoImprimir(this.data.datosGenerales,this.ticket).subscribe(
                          result => {
                                 console.log('RESULTADO');
                                 console.log(result);
                            if(result.code != 200){
                                                     
                              this.impresion=result; 
                              console.log(this.impresion);
                               this.noImpresion=Number(this.impresion.Contenido);

                              console.log('Paso el valor'+this.noImpresion); 

                              /*Consumir el metodo para imprimir el documento*/ 




                                         this._productoService2.getIFolioImpresion(this.noImpresion).subscribe(
                                                  result => {
                                                             console.log('RESULTADO de la impresion');
                                                             console.log(result) ;
                                                        if(result.code != 200){
                                                                                 
                                                          this.impresion=result; 
                                                          console.log(this.impresion);
                                                          //this.noImpresion=Number(this.impresion.Contenido);

                                                          console.log('Valor de la impresion'+this.impresion.Detalle); 

                                                          /*Consumir el metodo para imagen  el documento*/ 

                                                                 this._productoService2.getImagen(this.noImpresion).subscribe(
                                                                          result => {
                                                                                     console.log('RESULTADO de la impresion');
                                                                                     console.log(result) ;
                                                                                if(result.code != 200){
                                                                                                         
                                                                                  this.impresion=result; 
                                                                                  console.log(this.impresion);
                                                                                  //this.noImpresion=Number(this.impresion.Contenido);

                                                                                      console.log('Valor de la impresion'+this.impresion.Detalle); 

                                                                                      this.pantalla=true;

                                                                                        this.imagen=JSON.parse(this.impresion.Contenido);

                                                                                     this.bse64=this.imagen[0].ImagenBase64;

                                                                                     console.log(this.bse64);
                                                                                     this.imprimirCorrectamente=true;
                                                                                     /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                                                                       this.img.nativeElement.src = this.src;*/


                                                                                  /*Consumir el metodo para imprimir el documento*/ 

                                                                                  /*Fin del metodo para imprimir ticket*/            
                                                                                  

                                                                                }else{
                                                                               //   this.closeDialogCargar();
                                                                                  console.log('Entro');
                                                                               //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                                                this.titulo="Error";
                                                                                //this.MessageError=f;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                                                 // console.log(this.ReporteGastos);
                                                                                }

                                                                          },
                                                                          error => {
                                                                            console.log(<any>error);
                                                                             this.titulo="Error";
                                                                               // this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                                          }
                                                                      );
                                                          /*Fin del metodo para imagen ticket*/            
                                                          

                                                        }else{
                                                       //   this.closeDialogCargar();
                                                          console.log('Entro');
                                                       //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                          console.log('Entro');
                                                          this.titulo="Error";
                                                                               // this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                         // console.log(this.ReporteGastos);
                                                        }

                                                  },
                                                  error => {
                                                    console.log(<any>error);
                                                    this.titulo="Error";
                                                                              //  this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                  }
                                              );

                              /*Fin del metodo para imprimir ticket*/            
                              

                            }else{
                           //   this.closeDialogCargar();
                              console.log('Entro');
                           //   this.ReporteGastos = result.detDetCuentasReimpresion;
                              console.log('Entro');
                              this.titulo="Error";
                                                                              //  this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                          console.log(<any>error);
                          this.titulo="Error";
                                                                               // this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                        }
                    );


              /*Fin del metodo de reimpresion*/




    }


   b64DecodeUnicode(str):String {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
   }

   mostarCarga(){
       this.pantalla=false;
       this.boton=true;

   }


redirect(){
  console.log('Entro en redirect');
      // window.location.href=window.location.href;
     this.router.navigate(['redirect']);
     console.log('Entro en redirect');
}

   


}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */