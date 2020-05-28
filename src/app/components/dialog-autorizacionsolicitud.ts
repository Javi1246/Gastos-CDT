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
import { DecimalPipe } from '@angular/common';

declare var jquery:any;
declare var $ :any;
/**

 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-autorizacionsolicitudes',
  templateUrl: '../views/dialog-autorizacion.html',
})
export class DialogDataAutorizacion {

  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public dialogRefCarga;
   public datosGenerales: datosGenerales;
   public requiereXML:RequiereXML
   public cuentaGastosXML :cuentaGastosXML;
  constructor(public dialog: MatDialog,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialogCarga: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {}


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
 closeDialogCargar(): void {

        this.dialogRefCarga.close();
    }


    openDialogPrueba(){
 this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
 console.log('paso'+this.datosGenerales);
              /*Conulta del servicio*/
 console.log('Antes de abrir el pop');

try{
        this.dialog.open(DialogDataAutorizacionDialog, {
                                                //width: '700px',
                                                data: {
                                                  animal: 'panda',
                                                  carga: this.valor,
                                                  /*requiere:this.requiereXML,
                                                  descp: this.cuentaGastosXML,*/
                                                  datosGenerales: this.datosGenerales
                                                },
                                                disableClose:true
                                              });

}catch(err){

  console.log('Error al cargar dialog');
  console.log(err);

}

               
                         


    }

  


}

@Component({

  selector: 'dialog-data-autorizacion-dialog',
  templateUrl: '../views/dialog-data-autorizacion-dialog.html',
  providers: [    
    ProductoService,
  ],
})
export class DialogDataAutorizacionDialog {
   public cuentas : datosCuenta;
   public egresos : egreso;
   public titulo : string ;
    public titulo2 : string ;
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
   public ocultarTitulo:boolean = true;
     public datosGenerales: datosGenerales;
     public importe: any;
     public importe2: string;
   
  /* cuenta:string;
   importe:number;
   factura:string;
   justificacion:string;*/

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService2: ProductoService,private router: Router) {
            /*this.cuenta=data.cuenta+data.descripcion;
            this.importe=0.0;
            this.factura='';
            this.justificacion='';*/
            this.detAutizacionSolicitud=  data.carga;
            this.datosGenerales= data.datosGenerales;

           var decimalPipe = new DecimalPipe("en-US");
             console.log('importe antes');
           console.log(this.detAutizacionSolicitud.Importe);
           this.importe=decimalPipe.transform(Number(this.detAutizacionSolicitud.Importe), ".2-2");  

           this.importe2=String(this.importe);
                                   
           console.log('importe descpues');
           console.log(this.importe);
           console.log(this.importe2);


            
            
            this.pantalla=false;
            this.titulo2='Solicitud de Gastos';
            this.titulo='Autorización de Gastos';
            if (this.detAutizacionSolicitud.TdaEstado==""){
                this.titulo='Rechazo de Solicitud de Gastos';
              
            }
            this.boton=true;
            this.habilitarAgregar=false;

            console.log('Carga del detalle');
            console.log(this.detAutizacionSolicitud);

            this.ocultarTitulo=true;

  }



  fileChangeEvent(fileInput: any){

    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

    console.log('egresos antres');
    console.log(this.egresos);

    //this.cargarArchivo(this.filesToUpload);

    console.log('Los comprobantes');
    console.log(this.comprobantes);

    


  }

    onSubmit(){
          

  }

  validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

      //if (this.egresos.importe>0 && this.egresos.factura.length>0 && form){
      if ( this.egresos.factura.length>0 && form){
            this.habilitarAgregar=true;
      }else{
          this.habilitarAgregar=false;

      }

        return this.habilitarAgregar;
  }

 

 //getDetalleReimpresion
reimpresionSolicitudGastos(){

  this.imprimirCorrectamente=false;
      this.ocultarTitulo=false;
      this.pantalla=true;
      this.MessageError=false;

      console.log('Entro en el metodo insertaSolicitudGastos');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

               try{
                     this._productoService2.getDetalleReimpresion(this.detAutizacionSolicitud.FolioADN).subscribe(
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
                                                          this.ocultarTitulo=true;
                                                          this.pantalla=true;
                                                          this.MessageError=true;
                                                          this.mensaje=result.detalleSolicitudImpresionResult.Mensaje;
                                                          this.boton=true;
                                                          console.log( this.mensaje);

                                                    }
                                              

                                             
                                            }else{
                                              console.log('Entro');
                                              
                                                          this.titulo="Error";
                                                          this.ocultarTitulo=true;
                                                          this.pantalla=true;
                                                          this.MessageError=true;
                                                          this.mensaje='Error al obtener informacion para el ticket ';
                                                          this.boton=true;
                                                          console.log( this.mensaje);
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                            this.titulo="Error";
                                                          this.ocultarTitulo=true;
                                                          this.pantalla=true;
                                                          this.MessageError=true;
                                                          this.mensaje='Error al obtener informacion para el ticket ';
                                                          this.boton=true;
                                                          console.log( this.mensaje);
                                        }

                                         );
                         /*Fin de servicio*/ 

               }catch(err){
                                                          this.titulo="Error";
                                                          this.ocultarTitulo=true;
                                                          this.pantalla=true;
                                                          this.MessageError=true;
                                                        this.mensaje='Error al obtener informacion para el ticket ';
                                                          this.boton=true;
                                                          console.log( this.mensaje);

               }
             


    }


insertaSolicitudGastos(){
      this.imprimirCorrectamente=false;
      this.ocultarTitulo=false;
      this.pantalla=true;
      this.MessageError=false;

      console.log('Entro en el metodo insertaSolicitudGastos');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

               try{
                     this._productoService2.getActualizarSolicitudGastos(this.data.datosGenerales,this.detAutizacionSolicitud).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                                    console.log(result);                                              
                                                   
                                                    if(result.ActualizaSolicitudResult.EsError==false)
                                                    {
                                                        this.ticket = result.ActualizaSolicitudResult.DetCuentasReimpresion[0];
                                                        console.log(this.ticket);
                                                        console.log('Valor de la cadena');
                                                        if (this.detAutizacionSolicitud.TdaEstado==""){
                                                              this.ocultarTitulo=true;
                                                              this.titulo="Error";
                                                               this.ocultarTitulo=true;
                                                              this.pantalla=true;
                                                              this.MessageError=true;
                                                              this.mensaje=result.ActualizaSolicitudResult.Mensaje;
                                                              this.boton=true;
                                                              console.log( this.mensaje)

                                                        }else{
                                                           console.log('Pasa para la reimpresión');  
                                                            this.imprimirEgreso(this.ticket);    
                                                        }
                                                        



                                                    }else{
                                                     
                                                       this.ocultarTitulo=true;
                                                          this.titulo="Error";
                                                          this.pantalla=true;
                                                          this.MessageError=true;
                                                          this.mensaje=result.ActualizaSolicitudResult.Mensaje;
                                                          this.boton=true;
                                                          console.log( this.mensaje)

                                                    }
                                              

                                             
                                            }else{
                                              console.log('Entro');
                                              
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error al realizar la autorizacion de solicitud";
                                              this.boton=true;
                                              console.log( this.mensaje)
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log('Entro');
                                              
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error al realizar la autorizacion de solicitud";
                                              this.boton=true;
                                              console.log( this.mensaje);
                                        }

                                         );
                         /*Fin de servicio*/ 

               }catch(err){
                                     console.log('Entro');                                              
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error al realizar la autorizacion de solicitud";
                                              this.boton=true;
                                              console.log( this.mensaje)

               }
             


    }

      imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);
               this.imprimirCorrectamente=false;
               this.ocultarTitulo=false;
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
                                                                                        console.log('Mensaje de imagen');
                                                                                        console.log(this.imagen.length);



                                                                                        if (this.imagen.length>0){

                                                                                              this.bse64=this.imagen[0].ImagenBase64;

                                                                                              console.log(this.bse64);
                                                                                               this.imprimirCorrectamente=true;
                                                                                        }else{
                                                                                             this.ocultarTitulo=true;
                                                                                              this.titulo="Error";
                                                                                              this.pantalla=true;
                                                                                              this.MessageError=true;
                                                                                              this.mensaje="Se imprimio correctamente el ticket, pero fallo la previsualización de ticket para reimprimir ticket";
                                                                                              this.boton=true;

                                                                                        }

                                                                                   
                                                                                          
                                                                                  

                                                                                }else{
                                                                               //   this.closeDialogCargar();
                                                                                  console.log('Entro');
                                                                               //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                                                
                                                                                this.ocultarTitulo=true;

                                                                                this.titulo="Error";
                                                                                this.pantalla=true;
                                                                                this.MessageError=true;
                                                                                 this.mensaje="Se imprimio correctamente el ticket, pero fallo la previsualización de ticket para reimprimir ticket";
                                                                                this.boton=true;
                                                                                 // console.log(this.ReporteGastos);
                                                                                }

                                                                          },
                                                                          error => {
                                                                            console.log(<any>error);
                                                                              this.ocultarTitulo=true;

                                                                                this.titulo="Error";
                                                                                this.pantalla=true;
                                                                                this.MessageError=true;
                                                                                this.mensaje="Se imprimio correctamente el ticket, pero fallo la previsualización de ticket para reimprimir ticket";
                                                                                this.boton=true;
                                                                          }
                                                                      );
                                                          /*Fin del metodo para imagen ticket*/            
                                                          

                                                        }else{
                                                       //   this.closeDialogCargar();
                                                          console.log('Entro');
                                                       //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                          console.log('Entro');
                                                           this.ocultarTitulo=true;

                                                                                this.titulo="Error";
                                                                                this.pantalla=true;
                                                                                this.MessageError=true;
                                                                               this.mensaje="Se imprimio correctamente el ticket, pero fallo la previsualización de ticket para reimprimir ticket";
                                                                                this.boton=true;
                                                         // console.log(this.ReporteGastos);
                                                        }

                                                  },
                                                  error => {
                                                    console.log(<any>error);
                                                     this.ocultarTitulo=false;

                                                                                this.titulo="Error";
                                                                                this.pantalla=true;
                                                                                this.MessageError=true;
                                                                                this.mensaje="Error en el servicio de Impresión";
                                                                                this.boton=true;
                                                  }
                                              );

                              /*Fin del metodo para imprimir ticket*/            
                              

                            }else{
                           //   this.closeDialogCargar();
                              console.log('Entro');
                           //   this.ReporteGastos = result.detDetCuentasReimpresion;
                              console.log('Entro');
                               this.ocultarTitulo=false;

                                                                                this.titulo="Error";
                                                                                this.pantalla=true;
                                                                                this.MessageError=true;
                                                                                this.mensaje="Error en el servicio de Impresión";
                                                                                this.boton=true;
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                          console.log(<any>error);
                          this.ocultarTitulo=false;

                                                                                this.titulo="Error";
                                                                                this.pantalla=true;
                                                                                this.MessageError=true;
                                                                                this.mensaje="Error en el servicio de Impresión";
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