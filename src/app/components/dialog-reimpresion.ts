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

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-reimpresion',
  templateUrl: '../views/dialog-data-example.html',
})
export class DialogDataReimpresion {
  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public dialogRefCarga;
   public datosGenerales: datosGenerales;
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

  openDialog() {
      /*Metodo para la carga de la Informaciòn*/

   //    this.openDialogCargar();
     this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();

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



              this.dialog.open(DialogDataReimpresionDialog, {
                data: {
                  animal: 'panda',
                  carga: this.valor,
                  cuentaGastos : this.ReporteGastos,
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

  selector: 'dialog-data-reimpresion-dialog',
  templateUrl: '../views/dialog-data-reimpresion-dialog.html',
  providers: [    
    ProductoService,
  ],
})
export class DialogDataReimpresionDialog {
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

//  this.datosGeneralesServicios.getDatosGenerales();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,) {

      //this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();

  }

    imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);
               this.imprimirCorrectamente=false;
               if (ticket!=null){
                   this.ticket=ticket;
               }
              /*Metodos para realizar la impresion*/
                       this._productoService.setArchivoImprimir(this.data.generales,this.ticket).subscribe(
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
                                                                                  console.log('Entro');
                                                                                 // console.log(this.ReporteGastos);
                                                                                         console.log('Error al guaradar solicitud de finiquito');
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                          //  this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);

                                                                                }

                                                                          },
                                                                          error => {
                                                                              console.log('Error al guaradar solicitud de finiquito');
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                           // this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                                                                          }
                                                                      );
                                                          /*Fin del metodo para imagen ticket*/            
                                                          

                                                        }else{
                                                       //   this.closeDialogCargar();
                                                            console.log('Error al guaradar solicitud de finiquito');
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                           // this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                                                        }

                                                  },
                                                  error => {
                                                      console.log('Error al guaradar solicitud de finiquito');
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                           // this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                                                  }
                                              );

                              /*Fin del metodo para imprimir ticket*/            
                              

                            }else{
                           //   this.closeDialogCargar();
                                console.log('Error al guaradar solicitud de finiquito');
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                           // this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                                                                                            this.boton=true;
                                                                                            console.log( this.mensaje);
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                          console.log(<any>error);
                            console.log('Error al guaradar solicitud de finiquito');
                                                                                            this.titulo="Error";
                                                                                            this.pantalla=true;
                                                                                            //this.MessageError=true;
                                                                                            this.mensaje="Error al hacer la reimpresión, Favor de intentarlo nuevamente";
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