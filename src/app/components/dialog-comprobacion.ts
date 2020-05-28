import {Component, Inject, Input,ViewChild,ElementRef} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';
import {datosCuenta} from '../models/DatosCuenta';
import {datosGenerales} from '../models/datosGenerales';
import { ProductoService } from '../services/producto.service';
import { cuenta } from '../models/CuentaGastos';
import {reporteGastos} from '../models/reporteGastos';
import {DialogCargar} from '../components/carga';
import {impresion} from '../models/impresion';
import {DialogDataEmpleadoHuellaDialog} from '../components/dialog-data-empleados-dialog';

declare var jQuery:any;
declare var $:any;

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-comprobacion',
  templateUrl: '../views/dialog-data-comprobacion.html',
})
export class DialogDataComprobacion {
  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public dialogRefCarga;
   public datosGenerales: datosGenerales;
   public consultaReporte: boolean=true;
  constructor(public dialog: MatDialog,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialogCarga: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {
   
    this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
    console.log(this.datosGenerales);

    this.consultaReporte=this.datosGenerales.reportVisible==1?true:false;
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
 closeDialogCargar(): void {

        this.dialogRefCarga.close();   
    }

  openDialog() {
      /*Metodo para la carga de la Informaciòn*/

   //    this.openDialogCargar();
    

       this.datosCuentasServicios.setCuenta(this.valor.NoCuenta);

       this.cuentas = this.datosCuentasServicios.getDatosCuentas();
       //this.cuentas.cuenta=this.data.carga.NoCuenta
       
      console.log('getReporteGastos');
      console.log(this.cuentas);
  
        this._productoService.getDetalleCuentasReimpresion(this.cuentas,this.datosGenerales.FuncionSAP).subscribe(   
          result => {
                 console.log('RESULTADO');
                 console.log(result);
            if(result.code != 200){
              
            //  this.closeDialogCargar();

              console.log(result);

              console.log('Paso el valor');              
              //this.cuentaGastos = result.data.detCuentas;
              this.ReporteGastos = result.ConsultaDetCuentasReimpresionResult.DetCuentasReimpresion;
              console.log(this.ReporteGastos);



              this.dialog.open(DialogDataComprobacionDialog, {
                data: {
                  animal: 'panda',
                  carga: this.valor,
                  cuentaGastos : this.ReporteGastos,
                  desc: this.cuentas.descEstatus,
                  generales:this.datosGenerales,
                  consulta:this.cuentas.huella

                },
                disableClose:true
              });



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

  selector: 'dialog-data-comprobacion-dialog',
  templateUrl: '../views/dialog-data-comprobacion-dialog.html',
  providers: [    
    ProductoService,
  ],
})
export class DialogDataComprobacionDialog {
   public cuentas : datosCuenta;
   public impresion : impresion;
   public noImpresion: number;
   public pantalla : boolean=false;
   public bse64 : string;
   public imagen:any;
   public imprimirCorrectamente : boolean=true;
   src:string;
  @ViewChild('imgRef') img:ElementRef;
   public datosGenerales: datosGenerales;
   public ticket: reporteGastos;
   public MessageError: boolean=false;
   public mensaje:string;
   public boton: boolean=true;
   public titulo:string;
   public MessageProceder:boolean=true;
   public mostrarFile:boolean=false;
   public filesToUpload;
   public nombreArchivo:string;
   public consulta:boolean;
   public cabecero:boolean=true;
   
   public valorSeleccionado:any;
    public consultaReporte: boolean=true;
    public ocultarTitulo:boolean=false;

  public exito:boolean=false;    
  public Mensajeerror:string;
  
  public msgBotonCancelar:string;
//  this.datosGeneralesServicios.getDatosGenerales();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialog: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {

      //this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();

      this.consulta=this.data.consulta;
      console.log('Se el valor de consulta en el metodo DialogDataComprobacionDialog '+ this.consulta)
      this.consulta=false;
 console.log('Se el valor de consulta en el metodo DialogDataComprobacionDialog despues'+ this.consulta)

  this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
    console.log(this.datosGenerales);

  //  this.datosGenerales.reportVisible=1;

    this.consultaReporte=this.datosGenerales.reportVisible==1 && this.datosGenerales.reportVisiblexCuenta ==4 ?true:false;

    this.ocultarTitulo=false;
    this.msgBotonCancelar='No';

     $('.mat-dialog-content').css({'overflow': 'hidden'});

     this.data.desc= this.datosGenerales.reportVisiblexCuenta==4?'Pendientes de cobrar':this.datosGenerales.reportVisiblexCuenta==9?'Pendientes de ingresar':this.datosGenerales.reportVisiblexCuenta==7?'Comprobados':'Sin descripción';

  }

  abrirFile(archivo){

        console.log('Entro en el metodo de cargar el archivo'+archivo);
        $('#'+archivo).click();

  }

  mostrarMensaje(ticket){
   // alert('Entro en el metodo mostrarMensaje');

   if (this.consultaReporte){
    
      this.valorSeleccionado=ticket;
       this.pantalla=true;
     this.MessageError=false;
     
      this.MessageProceder=true;
      console.log(ticket);
    }else if(!this.consultaReporte && this.datosGenerales.reportVisiblexCuenta==9) {
        //Se agrega validacion para la carga de reimpresión

        console.log('Valor del estatus cargado ' +this.datosGenerales.reportVisiblexCuenta)
           this.valorSeleccionado=ticket;
           console.log(this.valorSeleccionado);
       this.pantalla=true;
     this.MessageError=false;
     
      this.MessageProceder=true;
      console.log(ticket);
       this.reimpresionSolicitudGastos();
    }

  }


 fileChangeEvent(fileInput: any){

    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

    if (this.filesToUpload!=null){

        this.nombreArchivo='Se selecciono el archivo: '+this.filesToUpload[0].name;

    }
    
    //console.log('egresos antres');
    //console.log(this.egresos);

//    this.cargarArchivo(this.filesToUpload);

 //   console.log('Los comprobantes');
  //  console.log(this.comprobantes);

    


  }

 aceptarComprobacion(){
     console.log('Valor del folio ADN seleccionado');
     console.log(this.valorSeleccionado);
     this.reimpresionSolicitudGastos();


 }


 mostrarDetalleImpresion(ticket){
       console.log('Entro en el metodo para la reimpresión ');
        this.mostrarMensaje(ticket);

        this.reimpresionSolicitudGastos();
 }

 validarFolioCentral(ticket){



   this.pantalla=true;
     this.MessageError=false;
     this.MessageProceder=false;
     this.imprimirCorrectamente=false;
     this.cabecero=false;
   $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
   $('.mat-dialog-content').css({'overflow': 'hidden'});

  console.log('Entro en el metodo getConsultaValidacionEgreso');
        

   


           //  this.cajaDetalleFolios= new CajaDetalleFolios('','','','','','',0,'','',0,0,0,0,0,0,'',0,0,'','',0,false);
            
              // this.openCargaHuella();

              console.log('mostrarMensaje');
              this.mostrarMensaje(ticket);

        this._productoService.getConsultaValidacionComprobacion1025(this.valorSeleccionado.FolioAdn,this.valorSeleccionado.FolioSAP).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              /*PPara pruebas*/



                                              
                                             // this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length>0?result.ValidaEgresoCajaResult.CajaDetalleFolios[0]:this.cajaDetalleFolios;
                                              console.log('Valor de la respuesta');
                                            
  
                                            
                                               if (result.ValidaComprobacion1025Result.EsError==false){
                                                       console.log('Se valido con exito');

                                                        $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        $('.mat-dialog-content').css({'overflow': 'hidden'});

                                                        if(result.ValidaComprobacion1025Result.stcontinuar==1){
                                                              this.pantalla=true;                                                         
                                                              this.titulo='Alerta';
                                                              this.cabecero=true;
                                                              this.MessageError=false;
                                                              this.MessageProceder=false;
                                                              this.exito=true;
                                                              this.Mensajeerror=result.ValidaComprobacion1025Result.Mensaje;
                                                              this.pantalla=true;
                                                              this.MessageError=false;       
                                                              this.MessageProceder=true;
                                                                this.valorSeleccionado=ticket;
                                                                 $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        $('.mat-dialog-content').css({'overflow': 'hidden'});
                                                        }else{
                                                              this.pantalla=true;                                                         
                                                              this.titulo='Alerta';
                                                              this.cabecero=true;
                                                              this.MessageError=false;
                                                              this.MessageProceder=false;
                                                              this.exito=true;
                                                              this.Mensajeerror='No se puede continuar con la operación';
                                                              this.pantalla=true;
                                                              this.MessageError=false;       
                                                              this.MessageProceder=true;
                                                              this.msgBotonCancelar='Cancelar';
                                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                              $('.mat-dialog-content').css({'overflow': 'hidden'});


                                                        }
                                                        

                                                       // this.titulo="Egresar ";

                                                    /*    if (this.cajaDetalleFolios.ValidaHuella){                                                           
                                                            this.pantalla=false; 
                                                            this.boton=true;
                                                            this.validaCentral=false;             
                                                           // this.datosGenerales.NoEmpleado=result.ValidaComprobacion1025Result.CajaDetalleFolios[0].CifraEmpleadoDestino;
                                                            console.log('Antes de entrar a la huella ');
                                                            console.log(this.datosGenerales.NoEmpleado);
                                                           // this.openCargaHuella();

                                                        }

                                                        */


                                                       

                                               }else{

                                                        console.log('Se presento un error al guardar la solicitud');

                                                        this.pantalla=true;                                                         
                                                              this.titulo='Alerta';
                                                              this.cabecero=true;
                                                              this.MessageError=false;
                                                              this.MessageProceder=false;
                                                              this.exito=true;
                                                              this.Mensajeerror='No se puede continuar con la operación';
                                                              this.pantalla=true;
                                                              this.MessageError=false;       
                                                              this.MessageProceder=true;
                                                              this.msgBotonCancelar='Cancelar';
                                                         $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                         $('.mat-dialog-content').css({'overflow': 'hidden'});
                                               }

                                                    
                                                    
                                                    

                                             
                                            }else{
                                                     //   this.closeDialogCargar();
                                                       console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo='Alerta';
                                                              this.cabecero=true;
                                                              this.MessageError=false;
                                                              this.MessageProceder=false;
                                                              this.exito=true;
                                                              this.Mensajeerror='Error al sonsultar el metodo de Comprobación 925';
                                                              this.pantalla=true;
                                                              this.MessageError=false;       
                                                              this.MessageProceder=true;
                                                              this.msgBotonCancelar='Cerrar';
                                                         $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                         $('.mat-dialog-content').css({'overflow': 'hidden'});
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                                              this.titulo='Alerta';
                                                              this.cabecero=true;
                                                              this.MessageError=false;
                                                              this.MessageProceder=false;
                                                              this.exito=true;
                                                              this.Mensajeerror='Error al sonsultar el metodo de Comprobación 925';
                                                              this.pantalla=true;
                                                              this.MessageError=false;       
                                                              this.MessageProceder=true;
                                                              this.msgBotonCancelar='Cerrar';
                                                              $('.mat-dialog-content').css({'overflow': 'hidden'});
                                        }

                                         );


   



   
   
   

}


ActualizaSolitud(){



   this.pantalla=true;
     this.MessageError=false;
     
     this.MessageProceder=false;
     this.imprimirCorrectamente=false;
     this.cabecero=false;
     this.boton=true;
   $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
       $('.mat-dialog-content').css({'overflow': 'hidden'});

  console.log('Entro en el metodo getConsultaValidacionEgreso');        


           //  this.cajaDetalleFolios= new CajaDetalleFolios('','','','','','',0,'','',0,0,0,0,0,0,'',0,0,'','',0,false);
            
              // this.openCargaHuella();

             
              

        this._productoService.getConsultaActualizacionComprobacion1025(String(this.valorSeleccionado.FolioAdn),String(this.valorSeleccionado.FolioSAP),String(this.datosGenerales.reportVisiblexCuenta),this.datosGenerales).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              /*PPara pruebas*/



                                              
                                             // this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length>0?result.ValidaEgresoCajaResult.CajaDetalleFolios[0]:this.cajaDetalleFolios;
                                              console.log('Valor de la respuesta');
                                            
  
                                             $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                              $('.mat-dialog-content').css({'overflow': 'hidden'});
                                               if (result.ActualizaSolicitudResult.EsError==false){
                                                       console.log('Se valido con exito');
                                                       
                                                        this.pantalla=true; 
                                                        //this.boton=true;
                                                        this.cabecero=true;
                                                        this.MessageError=false;
                                                        this.MessageProceder=false;
                                                        this.exito=false;
                                                        this.cabecero=false;


                                                         this.imprimirEgreso(this.valorSeleccionado);


                                                       // this.titulo="Egresar ";

                                                    /*    if (this.cajaDetalleFolios.ValidaHuella){                                                           
                                                            this.pantalla=false; 
                                                            this.boton=true;
                                                            this.validaCentral=false;             
                                                           // this.datosGenerales.NoEmpleado=result.ValidaComprobacion1025Result.CajaDetalleFolios[0].CifraEmpleadoDestino;
                                                            console.log('Antes de entrar a la huella ');
                                                            console.log(this.datosGenerales.NoEmpleado);
                                                           // this.openCargaHuella();

                                                        }

                                                        */                                                      

                                               }else{

                                                        console.log('Se presento un error al guardar la solicitud');

                                                        this.mensaje=result.ActualizaSolicitudResult.Mensaje;
                                                        this.titulo="Alerta";
                                                         this.pantalla=true; 
                                                        //this.boton=true;
                                                        this.cabecero=false;
                                                        this.MessageError=true;
                                                        this.MessageProceder=false;
                                                        this.exito=false;
                                               }

                                                    
                                                    
                                                    

                                             
                                            }else{
                                                     //   this.closeDialogCargar();
                                                       console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                         this.Mensajeerror='Error al consultar la validacion de la comprobacion ';
                                                          this.pantalla=true; 
                                                        //this.boton=true;
                                                        this.cabecero=true;
                                                        this.MessageError=false;
                                                        this.MessageProceder=false;
                                                        this.exito=false;
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                           this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                         this.Mensajeerror='Error al consultar la validacion de la comprobacion ';
                                                          this.pantalla=true; 
                                                        //this.boton=true;
                                                        this.cabecero=true;
                                                        this.MessageError=false;
                                                        this.MessageProceder=false;
                                                        this.exito=false;
                                        }

                                         );


   



   

}


 

 reimpresionSolicitudGastos(){
$('.mat-dialog-content').css({'overflow': 'hidden'});
     this.pantalla=true;
     this.MessageError=false;
     this.MessageProceder=false;
     this.imprimirCorrectamente=false;
     this.cabecero=false;
      console.log('Entro en el metodo reimpresionSolicitudGastos');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
              // var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

console.log('this.valorSeleccionado.FolioAdn  reimpresionSolicitudGastos');
console.log(this.valorSeleccionado);


               try{
                     this._productoService.getDetalleReimpresion(this.valorSeleccionado.FolioAdn).subscribe(
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
                                              
                                              this.titulo="Error";
                                              this.pantalla=true;
                                              this.MessageError=true;
                                              this.mensaje="Error en el servicio para obtener el detalle de ticket";
                                              this.boton=true;
                                              console.log( this.mensaje)
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          this.titulo="Error";
                                                    this.pantalla=true;
                                                    this.MessageError=true;
                                                     this.mensaje="Error en el servicio para obtener el detalle de ticket";
                                                    this.boton=true;
                                              console.log( this.mensaje)
                                        }

                                         );
                         /*Fin de servicio*/ 

               }catch(err){
                                     this.titulo="Error";
                                     this.pantalla=true;
                                     this.MessageError=true;
                                     this.mensaje="Error al imprimir comprobante , Favor de intentarlo nuevamente";
                                     this.boton=true;
                                              console.log( this.mensaje)

               }
             


    }


   
    imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);
           $('.mat-dialog-content').css({'overflow': 'hidden'});
               this.imprimirCorrectamente=false;
               if (ticket!=null){
                   this.ticket=ticket;
               }
              /*Metodos para realizar la impresion*/
                       this._productoService.setArchivoImprimirIngreso(this.data.generales,this.ticket).subscribe(
                          result => {
                                 console.log('RESULTADO');
                                 console.log(result);
                            if(result.code != 200){
                                                     
                              this.impresion=result; 
                              console.log(this.impresion);
                               this.noImpresion=Number(this.impresion.Contenido);

                              console.log('Paso el valor'+this.noImpresion); 

                           this._productoService.getIFolioImpresion(this.noImpresion).subscribe(
                                                  result => {
                                                             console.log('RESULTADO de la impresion');
                                                             console.log(result) ;
                                                        if(result.code != 200){
                                                                                 
                                                          this.impresion=result; 
                                                          console.log(this.impresion);
                                                          //this.noImpresion=Number(this.impresion.Contenido);

                                                          console.log('Valor de la impresion'+this.impresion.Detalle); 

                                                          /*Consumir el metodo para imagen  el documento*/ 

                                                                 this._productoService.getImagen(this.noImpresion).subscribe(
                                                                          result => {
                                                                                     console.log('RESULTADO de la impresion');
                                                                                     console.log(result) ;
                                                                                if(result.code != 200){
                                                                                                         
                                                                                  this.impresion=result; 
                                                                                  console.log(this.impresion);
                                                                                  //this.noImpresion=Number(this.impresion.Contenido);

                                                                                      console.log('Valor de la impresion'+this.impresion.Detalle); 
                                                                                        this.imagen=JSON.parse(this.impresion.Contenido);
                                                                                      this.pantalla=true;
                                                                                       if (this.imagen.length>0){
                                                                                             
                                                                                             this.bse64=this.imagen[0].ImagenBase64;
                                                                                             console.log(this.bse64);
                                                                                             this.imprimirCorrectamente=true;
                                                                                       }else{
                                                                                            this.cabecero=false;
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                            this.MessageError=true;
                                                                                             this.mensaje="Se imprimió correctamente el ticket, pero marco error al obtener el preview del ticket";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                                                                                       }

                                                                                        
                                                                                     /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                                                                       this.img.nativeElement.src = this.src;*/


                                                                                  /*Consumir el metodo para imprimir el documento*/ 

                                                                                  /*Fin del metodo para imprimir ticket*/            
                                                                                  

                                                                                }else{
                                                                               //   this.closeDialogCargar();
                                                                                  console.log('Entro');
                                                                               //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                                                  console.log('Entro');
                                                                                 // console.log(this.ReporteGastos);
                                                                                         console.log('Error al guardar solicitud de finiquito');
                                                                                            this.titulo="Error";
                                                                                             this.cabecero=false;
                                                                                            this.pantalla=true;
                                                                                            this.MessageError=true;
                                                                                            this.mensaje="Se imprimió correctamente el ticket, pero marco error al obtener el preview del ticket";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);

                                                                                }

                                                                          },
                                                                          error => {
                                                                              console.log('Error al guardar solicitud de finiquito');
                                                                               this.cabecero=false;
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                            this.MessageError=true;
                                                                                            this.mensaje="Se imprimió correctamente el ticket, pero marco error al obtener el preview del ticket";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                                                                          }
                                                                      );
                                                          /*Fin del metodo para imagen ticket*/            
                                                          

                                                        }else{
                                                       //   this.closeDialogCargar();
                                                            console.log('Error al guaradar solicitud de finiquito');
                                                             this.cabecero=false;
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                            this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                                                        }

                                                  },
                                                  error => {
                                                      console.log('Error al guaradar solicitud de finiquito');
                                                       this.cabecero=false;
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                            this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                                                  }
                                              );

                              /*Fin del metodo para imprimir ticket*/            
                              

                            }else{
                           //   this.closeDialogCargar();
                                console.log('Error al guaradar solicitud de finiquito');
                                 this.cabecero=false;
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                            this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                          console.log(<any>error);
                            console.log('Error al guaradar solicitud de finiquito');
                             this.cabecero=false;
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                            this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                        }
                    );


              /*Fin del metodo de reimpresion*/




    }


}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */