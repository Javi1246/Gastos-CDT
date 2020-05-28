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
import {DialogOverviewExampleDialog}  from '../components/message';
import {impresion} from '../models/impresion';
//import {DialogDataegresoADNDialog} from '../components/dialog-egresoADN';
import  {CajaDetalleFolios} from '../models/CajaDetalleFolios';
import { DecimalPipe } from '@angular/common';
import { NgForm } from '@angular/forms';

declare var jquery:any;
declare var $ :any;



@Component({

  selector: 'dialog-data-egresoADN-dialog',
  templateUrl: '../views/dialog-data-egresoADN-dialog.html',
  providers: [    
    ProductoService,
  ],
})
export class DialogDataegresoADNDialog {
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
   public boton:boolean;
   public habilitarAgregar:boolean;
   public formProducto:any;
   public valorfacturacion:Number;
   public selectedValue:any;
   public ticket: reporteGastos;
   public bse64 : string;
   public imagen:any;
   public imprimirCorrectamente : boolean=true;
   public impresion : impresion;
   public noImpresion: number;
   public MessageError: boolean=false;
   public refereciaTienda:string;
   public PantallaImprimir :boolean= false;
   public retornar:boolean=false;
   public banderafactura:boolean=true;
   public siniestro:boolean=false;
   public valorFactura:string="";
   public detalleFactura:boolean=false;
   public datosGenerales :datosGenerales;
   public cabecero:boolean=true;
   public cajaDetalleFolios:CajaDetalleFolios;

   

   public tipoEgreso : Number;
   public cuenta : string;   
public desc : string;

public vermas : boolean=false;
public vermasme : boolean=false;
   public mensaje2:string="";
    public importe: any;
 public importe2: string;
 public iva: any;
 public iva2: string;
 public botonCaja:boolean=false;
 public BanderaFondeo: boolean=true;//javi
cliked=true;//javi

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService2: ProductoService,private datosGeneralesServicios: datosGeneralesServicio,) {
        
            this.egresos=  new egreso(0,'','',' ','','',0);
            this.egresos.descCuenta=''; //data.requiere.TiendaCuentas.NoCuenta+' '+data.requiere.TiendaCuentas.Descripcion;
            this.egresos.noCuenta=0;//data.requiere.TiendaCuentas.NoCuenta;
           // this.egresos.importe=0.00;
            this.titulo="Egreso de Gastos Diversos";
              this.requiereXML=data.requiere;
            console.log(this.requiereXML);
            console.log(this.egresos);
          // console.log(this.requiereXML.TiendaCuentas);

            this.descrip= '';  //data.requiere.TiendaCuentas.Parametro;
            this.habilitarComponenetes=false;
            this.requiredValidacion=true;
            this.requiredValidacionJust=true;

            this.cajaDetalleFolios= this.data.detEgresoADN;

            this.cuenta=String(this.cajaDetalleFolios.NoCuenta) !=null ?String(this.cajaDetalleFolios.NoCuenta):'Sin cuenta';
            this.desc=this.cajaDetalleFolios.FBPDescripcionCuenta !=null ?this.cajaDetalleFolios.FBPDescripcionCuenta:'Sin descripción';

             this.desc = this.cuenta +' - '+this.desc;
          //  this.cajaDetalleFolios.FBPDescripcionCuenta= this.cuenta +' - '+this.desc;


            //this.cajaDetalleFolios.FBPDescripcionCuenta= this.cajaDetalleFolios.NoCuenta +' - '+this.cajaDetalleFolios.FBPDescripcionCuenta;

             var decimalPipe = new DecimalPipe("en-US");
           console.log('importe antes');
           console.log(this.cajaDetalleFolios.ImporteGasto);
           this.importe=decimalPipe.transform(Number(this.cajaDetalleFolios.ImporteGasto), ".2-2");  

           this.importe2='$'+String(this.importe);
                                   
           console.log('importe descpues');
           console.log(this.importe);
           console.log(this.importe2);

           this.iva=decimalPipe.transform(Number(this.cajaDetalleFolios.ImporteIVA), ".2-2");  
           this.iva2= '$'+String(this.iva);


            this.tipoEgreso=2
this.datosGenerales=datosGeneralesServicios.datosGenerales;//javi
           console.log(this.datosGenerales);//javi
            this.CargaDeFondeoCaja();//javi
            

  }

DesbloquearBoton(){//javi
  
  setTimeout(() => {
    this.cliked=false;
  }, 5000);
}


  CargaDeFondeoCaja(){
    this.pantalla=true; 
   this.PantallaImprimir=true;
   this.imprimirCorrectamente=false;
   this.cabecero=false;
    $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
        $('.mat-dialog-content').css({'overflow': 'hidden'});
     this._productoService2.getSaldoscaja(this.cajaDetalleFolios, this.tipoEgreso,this.datosGenerales).subscribe(
                                           result => {
                                                  console.log('RESULTADO');
                                                  console.log(result);
                                            
                                             this.pantalla=false; 
                                            //  this.cabecero=true;
                                          
                                               console.log(result);                                              
                                                  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                if (result.NoError==0){
                                                        console.log('Se valido correctamente  con exito datos de solicitud');
                                                        this.cliked=false;
 
                                                }else {
 
                                                         console.log('Mensaje del servicio getSaldoscaja'+ result.Descripcion);
                                                         console.log('Antes de entrar con el windowa open');
 
                                                          try{
                                                                                                                                                                                                     
                                                               this.BanderaFondeo=false;
                                                              var url ="http://"+this.datosGenerales.servidor+":9014/Caja/Fronts/Fondeo/Fondeo.html?divisa=1&monto="+result.MontoFondeo+"&usuario="+this.datosGenerales.NoEmpleado+"&ws="+this.datosGenerales.estacion+"&esWeb=True";
                                                              console.log("El valor de la url"+ url)
                                                               var win= window.open(url, "xulschoolhello-some-window", "chrome,centerscreen");
                                                              win.focus();
                                                              console.log("el valor de win");
                                                              console.log(win);
                                                          
                                                               this.DesbloquearBoton();//javi

  

                                                          }catch(e){
                                                              console.log('fallo'+e);
 
                                                          }
                                                              console.log('paso con el modal ');                                                     
                                                }  
 
                                         },
                                         error => {
                                              this.titulo="Error";
                                                         this.mensaje= "Se presentó un error al validar la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                         this.pantalla=true; 
                                                         this.PantallaImprimir=false;
                                                         this.boton=true;
                                                         this.retornar=false;
                                         }
                                          );
                                          
 
 }
 

  fileChangeEvent(fileInput: any){


    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('Cargada de los archivos fileChangeEvent');
    console.log(this.filesToUpload);

    console.log('egresos antres');
    console.log(this.egresos);

    this.cargarArchivo(this.filesToUpload);

    console.log('Los comprobantes');
    console.log(this.comprobantes);

    /*Cambio de la bandera de factura*/
     if (this.data.datosGenerales.fiActivaXML===1){
               

                if(this.data.requiere.TiendaCuentas.RequiereXML===1 && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=true;
                }
                else if (this.data.requiere.TiendaCuentas.RequiereXML===2 && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=true;

                }

                  
     }else{

                  this.banderafactura=false;
     }






    this.banderafactura=true;
    this.detalleFactura=true;
    console.log('valor de la banderafactura'+this.banderafactura);

    try{

        //console.log(fileInput.target.files.mozFullPath);
        console.log('Ruta del archivo');
        console.log(fileInput.target.value);
   }
   catch(err) {
       console.log('Fallo la carga ');

    }
        
    

  }

    onSubmit(){
          

  }

  myMethod(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
   
    return (key <= 13 || (key >= 48 && key <= 57) || key == 46);

}

myMethod2(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
    return (key <= 13 || (key >= 48 && key <= 57) );

}

  validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

      if (Number(this.egresos.importe)>0 && this.egresos.factura.length>0 && form){
            this.habilitarAgregar=true;
      }else{
          this.habilitarAgregar=false;

      }

        return this.habilitarAgregar;
  }

  validaImporte(valor):boolean{

var salida:boolean=true;
        
 console.log('validar habilitarComponenetes'+this.habilitarComponenetes +' valor='+valor);
        if (this.habilitarComponenetes){
           
            salida=Number(this.egresos.importe)>=0 ?true:false;


        }else{
            salida=Number(this.egresos.importe)>=0 && valor?true:false;

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

  }

  cargarArchivo(filesToUpload){
       
       var reader = new FileReader();


       var self = this;

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
                          return function(e) {
                           console.log('Entro con el componente '+theFile.name);
                          
                            self.xml = e.target.result;
                          
                           console.log('Carga del xml cargarArchivo');
                           console.log(self.xml);                           
                               //        self.consultaValidacionXML(self.xml);

                               self.consultaValidacionXMLPrueba(self.xml);                            
                            
                            };
                      })(filesToUpload[0]);

     
        

        //reader.readAsText(filesToUpload[0]);

         reader.readAsDataURL(filesToUpload[0]);
        

             

  }

  llenarDatosfactura()  {
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

                      console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);

                             self.comprobantes=self.xmltexto["cfdi:Comprobante"]["$"];
                              console.log( self.comprobantes);
                              console.log( self.comprobantes.folio);


                              console.log('Egresos');
                              console.log(self.egresos);
                      

                             self.egresos.importe=String(self.comprobantes.total);
                             self.egresos.factura=self.comprobantes.folio;


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

  /*Metodos para cambiar estatus de facturacion*/
  cambiarEstatusFactura(){
        this.banderafactura=false;
        this.detalleFactura=false;
      //  alert(this.banderafactura);
        console.log('Valor de la banderafactura: '+this.banderafactura);

         if (this.data.datosGenerales.fiActivaXML===1){
               

                if(this.data.requiere.TiendaCuentas.RequiereXML===1 && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=false;
                }
                /*else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=false;

                }*/

                  
         }else{

                      this.banderafactura=false;
         }

  }

  consultaValidacionXML(xml:string){

     console.log('XML');
         xml = xml.trim();
         xml=xml.split("\n").join("");
         xml=xml.split("\r").join("");
         //xml=xml.split("+").join("~"); 
         xml=xml.split("\n").join("");
      
         console.log(xml.trim());      
                             this._productoService2.getValidacionXML(xml.trim(),this.data.carga.Cuenta).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              
                                              this.validaFacturacion = result.detValidacionXML;
                                              console.log(this.validaFacturacion);

                                                  if(result.ValidafacturaResult.EsError == false){

                                                      /*  if (this.validaFacturacion.codigo ==0){
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
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente"+ result.ValidafacturaResult.Mensaje;
                                                        this.pantalla=true;

                                                  }

                                                    

                                               
                                                    

                                             
                                            }else{
                                           //   this.closeDialogCargar();
                                               console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                        this.pantalla=true;
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 

  }



 consultaValidacionXMLPrueba(xml:string){
   this.retornar=false;
    this.boton=true;

                             this._productoService2.getValidacionXMLPrueba(xml.trim(),this.data.carga.Cuenta,this.data.datosGenerales.Canal).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              
                                              this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                                              console.log(this.validaFacturacion);

                                                  if(result.ValidaArchivoXMLResult.EsError == false){

                                                         this.titulo="Solicitud de Gastos";
                                                         this.pantalla=false;
                                                         this.egresos.importe=String(this.validaFacturacion.Totalxml);
                                                         this.egresos.factura=this.validaFacturacion.Folioxml;
                                                         this.egresos.importe=String(this.validaFacturacion.Ivaxml);  
                                                         console.log('El valor de la this.validaFacturacion');
                                                         console.log(this.validaFacturacion);


                                                         this.valorFactura="No. Factura " +this.validaFacturacion.Folioxml+'  '+
                                                                           /*"<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                                                                           "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                                                                           "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                                                                           "Total: " +this.validaFacturacion.Totalxml+'  '+
                                                                           "IVA: " +this.validaFacturacion.Ivaxml;
                                                        

                                                  }else{
                                                        console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente"+ result.ValidaArchivoXMLResult.Mensaje;
                                                        this.pantalla=true;
                                                        this.boton=false;
                                                        this.retornar=true;

                                                  }                                              

                                             
                                            }else{
                                           //   this.closeDialogCargar();
                                               console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                        this.pantalla=true;
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                               );
                         /*Fin de servicio*/ 

  }


    insertaSolicitudGastos(){
      this.PantallaImprimir=true;
      this.imprimirCorrectamente=false; 
      this.cabecero=false;
       $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
       $('.mat-dialog-content').css({'overflow': 'hidden'});

      console.log('Entro en el metodo insertaSolicitudGastos');   

      /*Cambiar el status de banderafactura*/
      if (this.banderafactura==true){
          this.validaFacturacion.Datosparam=this.banderafactura==true?1:0;  
      }
      
      /*if (this.data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado'){
            this.data.datosGenerales.NoEmpleado=this.egresos.factura;
      }*/
   
this.egresos.noCuenta=this.data.carga.Cuenta===1025?604910:this.data.carga.Cuenta;

               console.log('data carga cuenta');
               console.log(this.data.carga);
               this._productoService2.getInsertaSolicitudGastos(this.data.datosGenerales,                                                               
                                                                this.egresos,                                                                
                                                                this.validaFacturacion,
                                                                this.data.carga                                                                
                                                                ).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);                                             
                                            
                                               if (result.AfectaAltaSolicitudResult.EsError==false){
                                                       console.log('Se guardo con exito');
                                                        this.titulo="Exito";
                                                        this.mensaje= "Se regisro correctamente la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        this.boton=true;
                                                        this.cabecero=true;

                                                        this.PantallaImprimir=false;
                                                        this.imprimirCorrectamente=true; 
                                                           $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});

                                                        if(this.data.carga.Cuenta===604910 || this.data.carga.Cuenta===60491 || this.data.carga.Cuenta===1025 || this.data.carga.Cuenta===620106 ){
                                                          var impresion:reporteGastos;
                                                          //impresion = new reporteGastos(13796, 7439758, 620070, 1,0,0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '','');
                                                              
                                                              this.cabecero=false;
                                                              this.imprimirEgreso(impresion);
                                                              this.PantallaImprimir=true;
                                                        }

                                               }else{
                                                          $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+"\n" +this.data.carga.Descripcion +"\n" +result.AfectaAltaSolicitudResult.Mensaje;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                         this.boton=true;
                                                         this.cabecero=true;

                                               }

                                                        

                                             
                                            }else{
                                              //   this.closeDialogCargar();
                                              console.log('Entro');
                                              //this.ReporteGastos = result.detDetCuentasReimpresion;
                                              console.log('Entro');

                                              console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                         this.boton=true;
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 


    }


    /*Metodo para validar solicitud de gastos*/
    validarSolicitudGastos(){
      this.retornar=false;
      console.log('Entro en el metodo validarSolicitudGastos');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

               console.log('data carga cuenta');
               console.log(this.data.carga);
               
               this._productoService2.getValidacionDatosGastosSolicitud(this.data.datosGenerales,this.egresos,this.data.carga).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);                                              
                                             
                                               if (result.ValidaAltaSolicitudResult.EsError==false){
                                                       console.log('Se valido correctamente  con exito datos de solicitud');
                                                        this.titulo="Alerta";
                                                        this.mensaje= result.ValidaAltaSolicitudResult.Mensaje;
                                                        this.pantalla=true;
                                                        
                                                              console.log('valor de stcontinuar :'+result.ValidaAltaSolicitudResult.stcontinuar);
                                                              if(result.ValidaAltaSolicitudResult.stcontinuar==0)
                                                              {
                                                                  this.boton=true;
                                                              }
                                                              else
                                                              {
                                                                   this.boton=false;
                                                              }

                                                        


                                                        

                                               }else{

                                                        console.log('Se presento un error al validar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= this.data.carga.Descripcion +"\n" +result.ValidaAltaSolicitudResult.Mensaje;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=false;
                                                        this.retornar=true;
                                               }

                                                        

                                             
                                            }else{
                                           
                                              console.log('Entro');                                           

                                              console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al validar la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=false;
                                                          this.retornar=true;
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
              
                         /*Fin de servicio*/ 


    }


ver(id:Number){

  console.log('valor de id');
  console.log(id);
  
  if (id==1){
       this.vermasme =true;
       
  }else{
       this.vermasme =false;
       
  }
    

}

 MovimientoGastos(){
 $('.mat-dialog-container').css({'width': '25%','height': '150px','margin':'auto'});
 $('.mat-dialog-content').css({'overflow': 'hidden'});
  
 this.pantalla=true; 
  this.PantallaImprimir=true;
  this.imprimirCorrectamente=false;
  this.cabecero=false;


  if (this.botonCaja==false){
    this.botonCaja=true;

    console.log('Entro en el MovimientoGastos el valor boton'+ this.botonCaja);

    console.log('Entro en el MovimientoGastos');
 
       this.retornar=false;
       console.log('Entro en el metodo validarSolicitudGastos');
 
       //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
                var UUID=this.Complemento!=null ?this.Complemento.UUID:"";
 
                console.log('data carga cuenta');
                console.log(this.data.carga);
 
 
                  console.log('data carga cuenta');
                  this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
                
               // getMovimientocaja(objCajaDet:CajaDetalleFolios,tipoOperacion:Number, datosGenerales: datosGenerales){
 
             
 
                this._productoService2.getMovimientocaja(this.data.detEgresoADN, this.tipoEgreso,this.datosGenerales).subscribe(
                                           result => {
                                                  console.log('RESULTADO');
                                                  console.log(result);
                                             if(result.code != 200){
                                               
                                          
                                               console.log(result);                                              
                                              
                                                if (result.MovimientoCajaResult.EsError==false){
                                                        console.log('Se valido correctamente  con exito datos de solicitud');
                                                        /* this.titulo="Alerta";
                                                         this.mensaje= result.MovimientoCajaResult.Mensaje;
                                                         this.pantalla=true;
                                                         this.boton=false;*/
                                                              /* console.log('valor de stcontinuar :'+result.ValidaAltaSolicitudResult.stcontinuar);
                                                               if(result.ValidaAltaSolicitudResult.stcontinuar==0)
                                                               {
                                                                   this.boton=true;
                                                               }
                                                               else
                                                               {
                                                                    this.boton=false;
                                                               }*/
 
                                                         
                                                               this.reimpresionSolicitudGastos();
 
                                                         
 
                                                }else{
                                                         $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                         console.log('Se presento un error al validar la solicitud');
                                                         this.titulo="Error";
                                                         this.mensaje= 'Se presentó un error al egresar solicitud de gastos';
                                                         this.pantalla=true; 
                                                         this.PantallaImprimir=false;
                                                         this.boton=true;
                                                         this.retornar=false;
 
                                                            this.mensaje= 'Se presentó un error al egresar solicitud de gastos';
                                                         this.vermas =true;
                                                         //this.vermasme =false;
                                                         this.mensaje2=result.MovimientoCajaResult.Mensaje!=''?result.MovimientoCajaResult.Mensaje:'Error en el componente de caja';
                                                         console.log(this.mensaje2);
 
 
                                                       
                                                }
 
                                                         
 
                                              
                                             }else{
                                            
                                               console.log('Entro');                                           
                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               console.log('Se presento un error al guardar la solicitud');
                                                         this.titulo="Error";
                                                         this.mensaje= "Se presentó un error al egresar solicitud de gastos  ";
                                                         this.pantalla=true; 
                                                         this.PantallaImprimir=false;
                                                         this.boton=true;
                                                         this.retornar=false;
 
 
                                             }
 
                                         },
                                         error => {
                                             console.log('Entro');                                           
         $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               console.log('Se presento un error al guardar la solicitud');
                                                         this.titulo="Error";
                                                         this.mensaje= "Se presentó un error al egresar solicitud de gastos  ";
                                                         this.pantalla=true; 
                                                         this.PantallaImprimir=false;
                                                         this.boton=true;
                                                         this.retornar=false;
                                         }
 
                                          );
               
                          /*Fin de servicio*/ 
  }
 


    }





   b64DecodeUnicode(str):string {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
   }

   mostarCarga(){
       this.pantalla=false;
      // this.boton=true;
       this.titulo="Solicitud de Gastos";

   }

egresarADN1(){
     console.log('Valor del folio ADN seleccionado');
    // console.log(this.valorSeleccionado);

     this.reimpresionSolicitudGastos();


 }

 reimpresionSolicitudGastos(){

 $('.mat-dialog-container').css({'width': '25%','height': '150px','margin':'auto'});
 $('.mat-dialog-content').css({'overflow': 'hidden'});
     this.pantalla=true;
     
     this.PantallaImprimir=true;
     this.imprimirCorrectamente=false;
     this.cabecero=false;
      console.log('Entro en el metodo reimpresionSolicitudGastos');
      console.log(this.cajaDetalleFolios.FolioADN);

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

               try{
                     this._productoService2.getDetalleReimpresion(this.cajaDetalleFolios.FolioADN).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                                    console.log(result);                                              
                                                   
                                                    if(result.detalleSolicitudImpresionResult.EsError==false)
                                                    {
                                                        this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                                                        console.log(this.ticket);
                                                        this.imprimirEgreso(this.ticket);  
                                                    }else{
                                                          this.titulo="Error";
                                                          this.pantalla=true;
                                                          this.MessageError=true;
                                                          this.mensaje=result.detalleSolicitudImpresionResult.Mensaje;
                                                          this.boton=true;
                                                          this.cabecero=true;
                                                          console.log( this.mensaje)

                                                    }
                                              

                                             
                                            }else{
                                              console.log('Entro');
                                                $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error al obtener informacion del ticket";
                                              this.boton=true;
                                              console.log( this.mensaje)


                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {

                                                $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error al obtener informacion del ticket";
                                              this.boton=true;
                                              console.log( this.mensaje)
                                        }

                                         );
                         /*Fin de servicio*/ 

               }catch(err){
                                       $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error al obtener informacion del ticket";
                                              this.boton=true;
                                              console.log( this.mensaje)

               }
             


    }

   imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);

            $('.mat-dialog-container').css({'width': '25%','height': '150px','margin':'auto'});
                $('.mat-dialog-content').css({'overflow': 'hidden'});
               this.imprimirCorrectamente=false;
               

               
                
               
               /* $(".mat-dialog-container").removeClass("mat-dialog-container");
                $(".mat-dialog-container").addClass("mat-dialog-container2");  
                $(".mat-dialog-container").addClass("mat-dialog-container");*/
               if (ticket!=null){
                   this.ticket=ticket;
               }
              /*Metodos para realizar la impresion*/
               console.log('Valor de ticket');
               console.log(ticket);
               this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();

               console.log('Valor de datos generales');
               console.log(this.data.generales);

                       this._productoService2.setArchivoImprimirEgresoADN(this.datosGenerales,this.ticket).subscribe(
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
                                                                                      if(this.imagen.length>0){
                                                                                            

                                                                                         this.bse64=this.imagen[0].ImagenBase64;

                                                                                         console.log(this.bse64);
                                                                                         this.imprimirCorrectamente=true;
                                                                                         this.PantallaImprimir=true;
                                                                                     $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});


                                                                                      }else{

                                                                                                  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                                  this.titulo="Error";
                                                                                                  this.pantalla=true;
                                                                                                  this.MessageError=true;
                                                                                                      this.mensaje= 'Se imprimio correctamente el ticket, pero marco error al obtener el preview del ticket para reimprimir';
                                                                                                  this.boton=true;
                                                                                                  console.log( this.mensaje)
                                                                                      }
                                                                                      

                                                                                      

                                                                                }else{
                                                                               //   this.closeDialogCargar();
                                                                                  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                  this.titulo="Error";
                                                                                  this.pantalla=true;
                                                                                  this.MessageError=true;
                                                                                      this.mensaje= 'Se imprimio correctamente el ticket, pero marco error al obtener el preview del ticket para reimprimir';
                                                                                  this.boton=true;
                                                                                  console.log( this.mensaje);
                                                                                 // console.log(this.ReporteGastos);
                                                                                }

                                                                          },
                                                                          error => {
                                                                                  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                  this.titulo="Error";
                                                                                  this.pantalla=true;
                                                                                  this.MessageError=true;
                                                                                      this.mensaje= 'Se imprimio correctamente el ticket, pero marco error al obtener el preview del ticket para reimprimir';
                                                                                  this.boton=true;
                                                                                  console.log( this.mensaje)
                                                                          }
                                                                      );
                                                          /*Fin del metodo para imagen ticket*/            
                                                          

                                                        }else{
                                                       //   this.closeDialogCargar();
                                                             $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                  console.log('Se presento un error al guardar la solicitud');
                                                                                  this.titulo="Error";
                                                                                  this.mensaje= 'Error al imprimir  ticket';
                                                                                 this.pantalla=true; 
                                                                                 this.PantallaImprimir=false;
                                                                                 this.boton=true;
                                                                                 this.retornar=false;
                                                                                 console.log( this.mensaje);
                                                         // console.log(this.ReporteGastos);
                                                        }

                                                  },
                                                  error => {
                                                     $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                  console.log('Se presento un error al guardar la solicitud');
                                                                                  this.titulo="Error";
                                                                                  this.mensaje= 'Error al imprimir  ticket';
                                                                                 this.pantalla=true; 
                                                                                 this.PantallaImprimir=false;
                                                                                 this.boton=true;
                                                                                 this.retornar=false;
                                                                                 console.log( this.mensaje);
                                                  }
                                              );

                              /*Fin del metodo para imprimir ticket*/            
                              

                            }else{
                           //   this.closeDialogCargar();
                                $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                  console.log('Se presento un error al guardar la solicitud');
                                                                                  this.titulo="Error";
                                                                                  this.mensaje= 'Error al imprimir  ticket';
                                                                                 this.pantalla=true; 
                                                                                 this.PantallaImprimir=false;
                                                                                 this.boton=true;
                                                                                 this.retornar=false;
                                                                                 console.log( this.mensaje);
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                           $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                  console.log('Se presento un error al guardar la solicitud');
                                                                                  this.titulo="Error";
                                                                                  this.mensaje= 'Error al imprimir  ticket';
                                                                                 this.pantalla=true; 
                                                                                 this.PantallaImprimir=false;
                                                                                 this.boton=true;
                                                                                 this.retornar=false;
                                                                                 console.log( this.mensaje);
                        }
                    );



    }


}

