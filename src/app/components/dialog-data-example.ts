import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosCuenta} from '../models/DatosCuenta';
import { ProductoService } from '../services/producto.service';
import { cuenta } from '../models/CuentaGastos';
import {reporteGastos} from '../models/reporteGastos';
import {DialogCargar} from '../components/carga'
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';
import {datosGenerales} from '../models/datosGenerales';
import {TooltipGeneral} from '../components/tooltip';
/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-data-example',
  templateUrl: '../views/dialog-data-example.html',
})
export class DialogDataExample {
  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public estilo:string;  
  public dialogRefCarga;
  public datosGenerales :datosGenerales;
  constructor(public dialog: MatDialog,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialogCarga: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {}


  retorno(){


  }

  cargarEstilo(tipo):string{
        if (tipo===1){
            this.estilo='Este folio no existe tienda y en central lo tiene con estatus de autorizado';
        }else{
              this.estilo='';
        }
        return this.estilo;
      
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

       this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
       //this.cuentas.cuenta=this.data.carga.NoCuenta
       
      console.log('getReporteGastos');  
      console.log(this.cuentas);
  
        this._productoService.getReporteGastos(this.cuentas,this.valor.detHistoricoSolicitudes,this.datosGenerales).subscribe(
          result => {
                 console.log('RESULTADO');
                 console.log(result);
            if(result.code != 200){
              
            //  this.closeDialogCargar();

              console.log(result);

              console.log('Paso el valor ');              
              //this.cuentaGastos = result.data.detCuentas;
              this.ReporteGastos = result.consultaDetCuentasResult.detReporteGastos;
              console.log(this.ReporteGastos);


              this.dialog.open(DialogDataExampleDialog, {
                data: {
                  animal: 'panda',
                  carga: this.valor,
                  cuentaGastos : this.ReporteGastos,
                  desc: this.cuentas.descEstatus,
                  datosGenerales: this.datosGenerales
                },
                disableClose:true
              });

            }else{
           //   this.closeDialogCargar();
              console.log('Entro');
              this.ReporteGastos = result.detReporteGastos;
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
  selector: 'dialog-data-example-dialog',
  templateUrl: '../views/dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
   public cuentas : datosCuenta;
     public estilo:string; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio) {
      
     /* this.datosCuentasServicios.setPuesto(this.data.carga.NoCuenta);
      this.cuentas = this.datosCuentasServicios.getDatosCuentas();
       console.log(this.cuentas);*/

       console.log('Valor de data DialogDataExampleDialog');
       console.log(data);
  }
   cargarEstilo(tipo):string{
        if (tipo===1){
            this.estilo='Este folio no existe en tienda y en control presupuestal se encuentra con el estatus seleccionado';
        }else{
              this.estilo='';
        }
        return this.estilo;
      
    }
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */