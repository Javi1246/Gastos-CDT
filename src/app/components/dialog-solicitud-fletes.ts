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
import {detFletes} from '../models/detFletes';
import {Estado} from '../models/Estado';
import {fletero} from '../models/fletero';
import {validacionFlete} from '../models/validacionFlete';



declare var jquery:any;
declare var $ :any;
/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-fletes',
  templateUrl: '../views/dialog-solicitud-fletes.html',
})
export class DialogDataSolcitudFletes {

  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public dialogRefCarga;
   public datosGenerales: datosGenerales;
   public requiereXML:RequiereXML
   public cuentaGastosXML :cuentaGastosXML;
   public detFletes:detFletes[];
  constructor(public dialog: MatDialog,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialogCarga: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {
     // console.log('Entro en el constructor DialogDataSolcitudFletes '+valor);

  }


  retorno(){


  }

  

 

  openDialogCargar(): void {
 
     this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
      width: '160px'
     
    });

    this.dialogRefCarga.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

ngAfterViewInit(){

    console.log('Entro en el metodo de ngAfterViewInit');

    console.log('Se elimina el valor de factura');

    $('input:text[name=factura]').val('');
    $('input:text[name=importe]').val('');

}


 closeDialogCargar(): void {

        this.dialogRefCarga.close();
    }


    openDialogPrueba(){
 this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
 console.log('paso'+this.datosGenerales);
              /*Conulta del servicio*/
                             this._productoService.getConsultaFletes().subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                            //  this.closeDialogCargar();

                                              console.log(result);

                                              console.log('Paso el valor');              
                                              //this.cuentaGastos = result.data.detCuentas;
                                             
                                              console.log('cuentaGastosXML');
                                              this.detFletes = result.consultaFletesResult.detalleFletes;
                                              console.log(this.detFletes);

                                              console.log(this.valor);

                                              this.dialog.open(DialogDataSolcitudFletesDialog, {
                                                width: '700px',
                                                data: {
                                                  animal: 'panda',
                                                  carga: this.valor,
                                                  requiere:this.requiereXML,
                                                  detFletes: this.detFletes,
                                                  datosGenerales: this.datosGenerales
                                                },
                                                disableClose:true
                                              });

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


      /*  this.dialog.open(DialogDataSolcitudDialog, {
                width: '600px',
                data: {
                  animal: 'panda',
                  carga: this.valor
                  //cuentaGastos : this.ReporteGastos
                 // desc: this.cuentas.descEstatus
                }
              });*/


    }

  openDialog() {
      /*Metodo para la carga de la Informaciòn*/

   //    this.openDialogCargar();
    //   this.datosCuentasServicios.setCuenta(this.valor.NoCuenta);

    //   this.cuentas = this.datosCuentasServicios.getDatosCuentas();
       //this.cuentas.cuenta=this.data.carga.NoCuenta
       
      console.log('getReporteGastos');
     // console.log(this.cuentas);

          this.dialog.open(DialogDataSolcitudFletesDialog, {
             width: '400px',
                data: {
                  animal: 'panda',
                  carga: this.valor,
                  cuentaGastos : this.ReporteGastos,
                  desc: this.cuentas.descEstatus
                },
                disableClose:true
              });

        this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
        this._productoService.getDetalleCuentasReimpresion(this.cuentas,this.datosGenerales.FuncionSAP).subscribe(
          result => {
                 console.log('RESULTADO');
                 console.log(result);
            if(result.code != 200){
              
            //  this.closeDialogCargar();

              console.log(result);

              console.log('Paso el valor');              
              //this.cuentaGastos = result.data.detCuentas;
              this.ReporteGastos = result.detDetCuentasReimpresion;
              console.log(this.ReporteGastos);


             /* this.dialog.open(DialogDataSolcitudDialog, {
                data: {
                  animal: 'panda',
                  carga: this.valor,
                  cuentaGastos : this.ReporteGastos,
                  desc: this.cuentas.descEstatus
                }
              });*/

                        /*Conulta del servicio*/
                             this._productoService.getCuentasConXML(this.datosGenerales,this.valor.cuenta).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                            //  this.closeDialogCargar();

                                              console.log(result);

                                              console.log('Paso el valor');              
                                              //this.cuentaGastos = result.data.detCuentas;
                                              this.requiereXML = result.detReporteGastos;
                                              console.log(this.requiereXML);



                                              this.dialog.open(DialogDataSolcitudFletesDialog, {
                                                data: {
                                                  animal: 'panda',
                                                  carga: this.valor,
                                                  cuentaGastos : this.ReporteGastos,
                                                  desc: this.cuentas.descEstatus,
                                                  requiere:this.requiereXML,
                                                  descp: this.cuentaGastosXML
                                                },
                                                disableClose:true
                                              });

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

            }else{
           //   this.closeDialogCargar();
              console.log('Entro');
              this.ReporteGastos = result.detDetCuentasReimpresion;
              console.log('Entro');
              console.log(this.ReporteGastos);
            }

        },
        error => {
          console.log(<any>error);
        }



    );

    









  }


}

@Component({

  selector: 'dialog-data-fletes-dialog',
  templateUrl: '../views/dialog-data-solicitud-fletes-dialog.html',
  providers: [    
    ProductoService,
  ],
})
export class DialogDataSolcitudFletesDialog {
   public cuentas : datosCuenta;
   public egresos : egreso;
   public fletero : fletero;
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
   public PantallaImprimir:boolean;
   public imprimirCorrectamente:boolean;
   public cabecero :boolean;
   public folioRef:boolean;   
   public Busca:boolean;
   public agregar:boolean;
   public crear:boolean;
 
   public boton:boolean;
   public habilitarAgregar:boolean;
   public formProducto:any;
   public folioReferencia:string;
   public validacionFlete: validacionFlete;
   public detFletes:detFletes[];
   public nuevoFletero:detFletes;
   public busqueda2;
   public busq:string;
   public existeFletero:Number=1;
   public validImporte:boolean=true;
public validJustificion:boolean=true;

public ListadoEstado : string;
public selectedEstado : any;
public listEstado : any;







   
  /* cuenta:string;
   importe:number;
   factura:string;
   justificacion:string;*/

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService2: ProductoService,) {
            /*this.cuenta=data.cuenta+data.descripcion;
            this.importe=0.0;
            this.factura='';
            this.justificacion='';*/
            this.fletero=  new fletero(0,'',0.00,' ','','','');
            this.nuevoFletero = new detFletes('','','','','','','','','','','Aguascalientes');
            this.fletero.descCuenta=data.carga.Cuenta+' '+data.carga.Descripcion;
            this.fletero.noCuenta=data.carga.Cuenta;
            this.fletero.importe=0.00;
            this.titulo="Egresar";
            this.requiereXML=data.requiere;
            this.detFletes=data.detFletes;
          //  console.log(this.requiereXML);
            console.log(this.detFletes);

          //  this.descrip= data.descp.fcParametro;
            this.habilitarComponenetes=false;
            this.requiredValidacion=true;
            this.requiredValidacionJust=true;
            this.folioRef=true;
            this.Busca=false
            this.agregar=false
            this.crear=false;
          
            
            this.pantalla=false;
            this.titulo='Solicitud de Gastos';
            this.boton=true;
            this.habilitarAgregar=false;

            /*Se realizar validacion para las cuentas 620159 620156 Para fletes entre tiendas*/
            this.folioRef= data.carga.Cuenta==620159 || data.carga.Cuenta==620156 || data.carga.Cuenta==620157 ? false:true;

            this.validImporte= data.carga.Cuenta==620159 || data.carga.Cuenta==620156  || data.carga.Cuenta==620157? false:true;

            this.requiredValidacionJust=data.carga.Cuenta==620159 || data.carga.Cuenta==620156  || data.carga.Cuenta==620157? true:false;
            this.validJustificion=data.carga.Cuenta==620159 || data.carga.Cuenta==620156  || data.carga.Cuenta==620157? false:true;


          

            console.log('El valor para validar el importe');
            console.log(this.validImporte);
          //|| data.carga.Cuenta==606080

          this.cabecero=true;

  

          this.listEstado = [{ idEstado: 1,nombreEstado:'Aguascalientes'}];

          // this.nuevoFletero.fcEstado='Aguascalientes';

          this.llenadoEstado();


  }


 llenadoEstado(){
  

  this.ListadoEstado= "Aguascalientes ,Baja California,Baja California Sur,Campeche,Chiapas,Chihuahua,Ciudad de México,Coahuila,Colima,Durango,Guanajuato,Guerrero,Hidalgo,Jalisco,México,Michoacán,Morelos,Nayarit,Nuevo León,Oaxaca,Puebla,Querétaro,Quintana Roo,San Luis Potosí,Sinaloa,Sonora,Tabasco,Tamaulipas,Tlaxcala,Veracruz,Yucatán,Zacatecas"

  var estados= this.ListadoEstado.split(',');

  console.log('Valor de estados');
  console.log(estados);
    
    for (var i =  1; i < estados.length; i++) {
          var estado= new Estado(i+1,estados[i]);
      console.log('Valor de estado');
      console.log(estado);


            this.listEstado.push(estado);
    }
   
    console.log('Valor de estados lista ');
    console.log(this.listEstado);

}

setNewEstado(valor){

  this.selectedEstado=valor;

  this.nuevoFletero.fcEstado=valor;
}

ngAfterViewInit(){

    console.log('Entro en el metodo de ngAfterViewInit');

    console.log('Se elimina el valor de factura');

    $('input:text[name=factura]').val('');
  //  $('input:text[name=importe]').val('');

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



myMethod3(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
    return ( (key <= 13) || (key >= 48 && key <= 57) || (key <= 32) || (key >= 65 && key <= 90) || (key >= 97 && key <= 122) );

}
myMethod4(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
    return (key <= 13 || (key >= 48 && key <= 57)  || (key >= 65 && key <= 90) || (key >= 97 && key <= 122));

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

  LlenarFletero(){
     console.log('entro LlenarFletero');
     this.crear=true;
     this.existeFletero=1;
  }

   ObtenerFletero(){
     console.log('entro LlenarFletero');         
         //this.nuevoFletero.pcreferencia=  this.validacionFlete.referencia;
         this.fletero.nombreFletero=this.nuevoFletero.fcNombre;
         this.fletero.comprobanteFiscal=this.nuevoFletero.fcRFC;
         this.Busca=false;

   }

ObtenerFleteroBusqueda(detalle){
        console.log('entro LlenarFletero');
         this.nuevoFletero=detalle;    
        // this.nuevoFletero.pcreferencia=  this.validacionFlete.referencia;     
         this.fletero.nombreFletero=this.nuevoFletero.fcNombre;
         this.fletero.comprobanteFiscal=this.nuevoFletero.fcRFC;  
         this.Busca=false;
         this.existeFletero=0;
}







    onSubmit(){
          

  }
  onSubmit2(){
          

  }

  validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);


      if (this.data.carga.Cuenta!=606080){
          if (this.fletero.importe>0 && this.fletero.nombreFletero.length>0 && this.fletero.comprobanteFiscal.length>0 && form){
            this.habilitarAgregar=true;
          }else{
              this.habilitarAgregar=false;

          }
      }else{

          if (this.fletero.importe>0 && this.fletero.nombreFletero.length>0 && this.fletero.comprobanteFiscal.length>0 ){
            this.habilitarAgregar=true;
          }else{
              this.habilitarAgregar=false;

          }
      }
      

        return this.habilitarAgregar;
  }

  validaImporte(valor):boolean{

var salida:boolean=true;
        
 console.log('validar habilitarComponenetes'+this.habilitarComponenetes +' valor='+valor);
        if (this.habilitarComponenetes){
           
            salida=this.fletero.importe>=0 ?true:false;


        }else{
            salida=this.fletero.importe>=0 && valor?true:false;

        }
        console.log('validar importe'+salida);

        return salida;

  }

 

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
                      

                             self.egresos.importe=String(self.comprobantes.total);
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




 xml=xml.split("\n").join("");
       // xml= xml.replace(/['"]+/g, "'");
         console.log(xml.trim());

   

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
       $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
      $('.mat-dialog-content').css({'overflow': 'hidden'});
    this.pantalla=true;
    this.PantallaImprimir=true;
    this.imprimirCorrectamente=false;
    this.cabecero=false;


      console.log('Entro en el metodo insertaSolicitudGastos');
    //  this.nuevoFletero

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"0";


               this._productoService2.getInsertaSolicitudGastosFletes(this.data.datosGenerales,
                                                                      this.fletero,
                                                                      this.nuevoFletero,
                                                                      this.data.carga,
                                                                      this.existeFletero
                                                                      ).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);

                                                  /*Son las valriables para  mostrar la pantalla*/
                                                       $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               this.pantalla=false;
                                               this.PantallaImprimir=false;
                                               this.imprimirCorrectamente=false;
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);
                                                            if (result.AfectaAltaSolicitudResult.EsError==false){
                                                                   console.log('Se guardo con exito');
                                                                    this.titulo="Exito";
                                                                   // this.mensaje= "Se regisro correctamente la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                                    this.mensaje= result.AfectaAltaSolicitudResult.Mensaje;
                                                                    this.pantalla=true; 
                                                                    this.cabecero=true;
                                                                    this.boton=true;

                                                                    

                                                           }else{

                                                                    console.log('Se presento un error al guardar la solicitud');
                                                                    this.titulo="Error";
                                                                    this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+"\n" +this.data.carga.Descripcion +"\n" +result.AfectaAltaSolicitudResult.Mensaje;
                                                                    this.pantalla=true; 
                                                                    this.cabecero=true;
                                                                    //this.PantallaImprimir=false;
                                                                    this.boton=true;
                                                           }


                                                         


    

                                             
                                            }else{
                                           //   this.closeDialogCargar();
                                              console.log('Entro');
                                              //this.ReporteGastos = result.detDetCuentasReimpresion;
                                              console.log('Entro');
                                              //console.log(this.ReporteGastos);
                                               console.log('Se presento un error al guardar la solicitud');
                                                                        this.titulo="Error";
                                                                        this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+this.data.carga.Descripcion  ;
                                                                        this.pantalla=true; 
                                                                        this.cabecero=true;
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                           /*Son las valriables para  mostrar la pantalla*/
                                               this.pantalla=false;
                                               this.PantallaImprimir=false;
                                               this.imprimirCorrectamente=false;
                                               this.cabecero=true;
                                        }

                                         );
                         /*Fin de servicio*/ 


    }


    buscarDatosFiscales(){
            this.Busca=true;
            this.crear=false;
            this.nuevoFletero = new detFletes('','','','','','','','','','','Aguascalientes');

    }


    regresar(){
        this.crear=false;
          this.Busca=false;

    }

    /*Metodo para la validacion de fletes*/

    validarFolioReferencia(){
      $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
      $('.mat-dialog-content').css({'overflow': 'hidden'});
    this.pantalla=true;
    this.PantallaImprimir=true;
    this.imprimirCorrectamente=false;
    this.cabecero=false;

      console.log('Entro en el metodo validarFolioReferencia');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";
               this._productoService2.getVlidacionFletes(this.folioReferencia).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                                  /*Son las valriables para  mostrar la pantalla*/
                                                   $('.mat-dialog-content').css({'overflow': 'auto'});
                                                   $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               this.pantalla=false;
                                               this.PantallaImprimir=false;
                                               this.imprimirCorrectamente=false;
                                            if(result.code != 200){
                                              
                                             
                                              if (result.ConsultaValidacionFletesResult.esError==false){
                                                 this.validacionFlete= result.ConsultaValidacionFletesResult.detValFactura;
                                              console.log('Detalle de fletes detValFactura')
                                              console.log(this.validacionFlete);
                                                        
                                                  if (this.validacionFlete.status==0){
                                                           this.fletero.importe=this.validacionFlete.monto; 
                                                           this.fletero.referencia=this.validacionFlete.referencia;
                                                           //this.fletero.descCuenta=this.data.carga.cuenta+' '+this.data.carga.descripcion;
                                                             this.fletero.justificacion = this.data.carga.Cuenta==606080?"FLETES GRATIS A CLIENTES "+ this.fletero.referencia:"";
                                                           this.folioRef=false;
                                                           console.log(this.fletero);

                                                           this.cabecero=true;


                                                           
                                                      }
                                                      /*
                                                             public referencia :string,
                                                             public status : number,
                                                             public monto : number
                                                      */

                                              }else{
                                                  $('.mat-dialog-content').css({'overflow': 'hidden'});
                                                        this.titulo="Alerta";
                                                        console.log('El valor de result'+result);
                                                        this.mensaje= result.ConsultaValidacionFletesResult.mensaje;
                                                        this.pantalla=true;
                                                        this.cabecero=true;
                                              }
                                              

                                              //alert('Terrmino');
                                              //this.validaFacturacion = result.detValidacionXML;
                                              //console.log(this.validaFacturacion);
                                             /*  console.log('Se guardo con exito');
                                                        this.titulo="Exito";
                                                        this.mensaje= "Se regisro correctamente la solicitud de gastos para la cuenta "+this.data.carga.descripcion;
                                                        this.pantalla=true;*/
    

                                             
                                            }else{
                                           //   this.closeDialogCargar();
                                                        this.titulo="Error ";
                                                        this.mensaje= 'ERROR AL CONSULTAR REFERENCIA DE FLETES';
                                                        this.pantalla=true;
                                                        this.cabecero=true;
                                                          $('.mat-dialog-content').css({'overflow': 'hidden'});
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                 $('.mat-dialog-content').css({'overflow': 'hidden'});
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 


   

    }


   b64DecodeUnicode(str):String {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
   }

   mostarCarga(){
      this.pantalla=false;
      this.Busca=false;
      //this.Busca=true;
      // this.boton=true;
       this.titulo="Solicitud de Gastos";
        this.fletero.nombreFletero=this.nuevoFletero.fcNombre;
         this.fletero.comprobanteFiscal=this.nuevoFletero.fcRFC;  
       console.log(this.nuevoFletero);

   }



  validarSolicitudGastos(){
      this.cabecero=false;
    $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
    $('.mat-dialog-content').css({'overflow': 'hidden'});
    this.pantalla=true;
    this.PantallaImprimir=true;
    this.imprimirCorrectamente=false;
  
      console.log('Entro en el metodo validarSolicitudGastos');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

               console.log('data carga cuenta');
               console.log(this.data.carga);
               this._productoService2.getValidacionDatosGastosSolicitudFletero(this.data.datosGenerales,this.fletero,this.data.carga).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                                  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                            if(result.code != 200){
                                                  
                                         
                                              console.log(result);      
                                                /*Son las valriables para  mostrar la pantalla*/
                                               this.pantalla=false;
                                               this.PantallaImprimir=false;
                                               this.imprimirCorrectamente=false;
                                               this.cabecero=true;                                        
                                             
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
                                                        this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+this.data.carga.Descripcion +"\n" +result.ValidaAltaSolicitudResult.Mensaje;
                                                        this.pantalla=true; 
                                                        //this.PantallaImprimir=false;
                                                        this.boton=false;
                                               }

                                                        

                                             
                                            }else{
                                             /*Son las valriables para  mostrar la pantalla*/
                                               this.pantalla=false;
                                               this.PantallaImprimir=false;
                                               this.imprimirCorrectamente=false;
                                              console.log('Entro');                                           

                                              console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        //this.PantallaImprimir=false;
                                                        this.boton=false;
                                             
                                            }

                                        },
                                        error => {
                                            /*Son las valriables para  mostrar la pantalla*/
                                             $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               this.pantalla=false;
                                               this.PantallaImprimir=false;
                                               this.imprimirCorrectamente=false;
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 


    }

   


}

