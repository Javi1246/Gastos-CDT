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
import {finiquito} from '../models/finiquito';
//import {ActualizarFiniquito} from '../models/ActualizarFiniquito';
import {SolicitudFiniquito} from '../models/SolicitudFiniquito';


/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-finiquito',
  templateUrl: '../views/dialog-data-finiquito.html',
})
export class DialogDataFiniquito {
  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public dialogRefCarga;
   public datosGenerales: datosGenerales;
   public folioFBP : Number;
   public detFiniquito : finiquito[];
  constructor(public dialog: MatDialog,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialogCarga: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {}


  retorno(){


  }

  

 openDialogPrueba(): void {


 
     
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
     this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();

       this.datosCuentasServicios.setCuenta(this.valor.folioFBP);

       this.cuentas = this.datosCuentasServicios.getDatosCuentas();
       //this.cuentas.cuenta=this.data.carga.NoCuenta
       
      console.log('getReporteGastos');
      console.log(this.cuentas);
  
        this._productoService.getConsultaFiniquito(this.valor.folioFBP).subscribe(
          result => {
                 console.log('RESULTADO');
                 console.log(result);
            if(result.code != 200){
              
            //  this.closeDialogCargar();

              console.log(result);

              console.log('Paso el valor');              
              //this.cuentaGastos = result.data.detCuentas;
              this.detFiniquito = result.detFiniquito;
              console.log(this.ReporteGastos);


              this.dialog.open(DialogDataFiniquitoDialog, {
                data: {
                  animal: 'panda',
                  carga: this.valor,
                  detFiniquito : this.detFiniquito,
                  desc: this.cuentas.descEstatus,
                  generales:this.datosGenerales

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

  selector: 'dialog-data-finiquito-dialog',
  templateUrl: '../views/dialog-data-finiquito-dialog.html',
  providers: [    
    ProductoService,
  ],
})

export class DialogDataFiniquitoDialog {
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
   public finiquito:finiquito;
   public general: datosGenerales;
   public actualiza: SolicitudFiniquito;
   public MessageError: boolean=false;
   public mensaje:string;
   public boton: boolean=true;
   public titulo:string;
   public botonAcepatar: boolean=false;


//  this.datosGeneralesServicios.getDatosGenerales();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,) {

      //this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
      this.finiquito=this.data.detFiniquito;
      this.general=this.data.generales;
      this.actualiza=this.data.act;
  }


  guardarSolicitudFiniquito(){

     this.imprimirCorrectamente=false;

          this.actualiza= new SolicitudFiniquito(
                                                  this.general.NoEmpleado,
                                                  this.general.estacion,
                                                  String(this.general.FuncionSAPCorta),
                                                  this.general.TipoUsuario,
                                                  this.finiquito,
                                                  );
                                                  
                                                 // String(this.general.Puesto);
          if(this.botonAcepatar==false ){

            this.botonAcepatar=true;
            this._productoService.getInsertaSolicitudFiniquito(this.actualiza).subscribe(
              result => {
                     console.log('RESULTADO');
                     console.log(result);
                if(result.code != 200){
                  
                //  this.closeDialogCargar();
    
                  console.log(result);
    
                  console.log('Paso el valor');              
                  //this.cuentaGastos = result.data.detCuentas;
                  if (result.InsertaFolioFiniquitoResult.EsError==false){
                      this.ticket = result.InsertaFolioFiniquitoResult.DetCuentasReimpresion[0]; 
                      console.log(this.ticket);
                      this.imprimirEgreso(this.ticket);
                   
                  }else{
    
                      console.log('Error al guaradar solicitud de finiquito');
                        this.titulo="Error";
                        this.pantalla=true;
                        this.MessageError=true;
                        this.mensaje=result.InsertaFolioFiniquitoResult.Mensaje;
                        this.boton=true;
                            console.log( this.mensaje);
                  }
                  
    
    
                 
    
                }else{
               //   this.closeDialogCargar();
                  console.log('Entro');
                  //this.ReporteGastos = result.detDetCuentasReimpresion;
                  console.log('Entro');
                   console.log(this.ticket);
                   this.titulo="Error";
                   this.MessageError=true;
                   this.pantalla=true;
                   this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                   this.boton=true;
                }
    
            },
            error => {
              console.log(<any>error);
            }
        );
          }
           

         
  }

    imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);
               this.imprimirCorrectamente=false;
               if (ticket!=null){
                   this.ticket=ticket;
               }
              /*Metodos para realizar la impresion*/
                       this._productoService.setArchivoImprimirFiniquito(this.data.generales,this.ticket).subscribe(
                          result => {
                                 console.log('RESULTADO');
                                 console.log(result);
                            if(result.code != 200){
                                                     
                              this.impresion=result; 
                              console.log(this.impresion);
                               this.noImpresion=Number(this.impresion.Contenido);

                              console.log('Paso el valor'+this.noImpresion); 

                              /*Consumir el metodo para imprimir el documento*/ 




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

                                                                                      this.pantalla=true;

                                                                                        this.imagen=JSON.parse(this.impresion.Contenido);

                                                                                        if (this.imagen.length>0){

                                                                                               this.bse64=this.imagen[0].ImagenBase64;

                                                                                                   console.log(this.bse64);
                                                                                                 this.imprimirCorrectamente=true;
                                                                                        }else{
                                                                                              this.titulo="Error";
                                                                                              this.MessageError=true;
                                                                                              this.pantalla=true;
                                                                                              this.mensaje="El ticket se imprimio correctamente, pero se obtuvo un error al obtener el preview para la reimpresión del ticket";
                                                                                              this.boton=true;

                                                                                        }

                                                                                    
                                                                                     /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                                                                       this.img.nativeElement.src = this.src;*/


                                                                                  /*Consumir el metodo para imprimir el documento*/ 

                                                                                  /*Fin del metodo para imprimir ticket*/            
                                                                                  

                                                                                }else{
                                                                               //   this.closeDialogCargar();
                                                                                  console.log('Entro');
                                                                               //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                                                 this.titulo="Error";
                                                                                              this.MessageError=true;
                                                                                              this.pantalla=true;
                                                                                              this.mensaje="El ticket se imprimio correctamente, pero se obtuvo un error al obtener el preview para la reimpresión del ticket";
                                                                                              this.boton=true;


                                                                                 // console.log(this.ReporteGastos);
                                                                                }

                                                                          },
                                                                          error => {
                                                                            console.log(<any>error);
                                                                              this.titulo="Error";
                                                                                              this.MessageError=true;
                                                                                              this.pantalla=true;
                                                                                              this.mensaje="El ticket se imprimio correctamente, pero se obtuvo un error al obtener el preview para la reimpresión del ticket";
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
                                                           this.MessageError=true;
                                                           this.pantalla=true;
                                                           this.mensaje="Error al generar ticket ";
                                                           this.boton=true;
                                                         // console.log(this.ReporteGastos);
                                                        }

                                                  },
                                                  error => {
                                                    console.log(<any>error);
                                                   this.titulo="Error";
                                                           this.MessageError=true;
                                                           this.pantalla=true;
                                                           this.mensaje="Error al generar ticket ";
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
                                                           this.MessageError=true;
                                                           this.pantalla=true;
                                                           this.mensaje="Error al generar ticket ";
                                                           this.boton=true;
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                          console.log(<any>error);
                       this.titulo="Error";
                                                           this.MessageError=true;
                                                           this.pantalla=true;
                                                           this.mensaje="Error al generar ticket ";
                                                           this.boton=true;
                        }
                    );


              /*Fin del metodo de reimpresion*/




    }


}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */