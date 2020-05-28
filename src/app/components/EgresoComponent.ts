import { Component } from '@angular/core';
import {DialogDataEgreso,DialogDataEgresoDialog} from '../components/dialog-egreso';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';
import { ProductoService } from '../services/producto.service';
import {datosGenerales} from '../models/datosGenerales';
@Component({
	selector: 'ingreso',
	templateUrl: '../views/Egreso.html'
})
export class EgresoComponent{
	public titulo: string;
	public datosGenerales :datosGenerales;
	public empleadoDI:string;

	constructor(public dialog: MatDialog,private _productoService: ProductoService,private datosGeneralesServicios: datosGeneralesServicio,){
		//this.titulo = 'Egreso de Cifra Control';

		console.log('valor de datos generales en Egreso925Component');
		 this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
		 this.empleadoDI=this.datosGenerales.NoEmpleado;
		 console.log('valor de empleado');
		 console.log(this.empleadoDI);
	}

	ngOnInit(){
		console.log('Se ha cargado el componente IngresoComponent.component.ts');
	}

	 openDialogegreso(tipo:Number){
	 	/*
	 		3.- Egreso de Gasolinas x empleado
	 		4.- Egreso de Pago de Cifra Control
	 	*/
      console.log('Valor de egreso');
      console.log(tipo);




        this.dialog.open(DialogDataEgresoDialog, {
                                                      width: '700px',
                                                      data: {
                                                        carga: tipo,
                                                        generales:this.datosGenerales,
                                                        empleadoDI:this.empleadoDI


                                                      },
                                                      disableClose:true
                                                    });
    }

   

}