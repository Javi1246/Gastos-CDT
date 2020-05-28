
import { Component,Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { cuenta } from '../models/CuentaGastos';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosCuenta} from '../models/DatosCuenta';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog}  from '../components/message';
import {reporteGastos} from '../models/reporteGastos';

import {DialogCargar} from '../components/carga';
import {datosGenerales} from '../models/datosGenerales';
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';

@Component({
	selector: 'reimpresion',
	templateUrl: '../views/reimpresion.html',
	providers: [ProductoService]
})
export class ReimprimirComponent{
	public titulo: string;
	public productos: Producto[];
	public cuentaGastos: cuenta[];
	public confirmado;
	public datosCuentas :datosCuenta;
	public ReporteGastos :  reporteGastos;
	public dialogRefCarga:any;
	public datosGenerales :datosGenerales;

	fechaInicio : any = [];
	fechaFin : any = [];

	animal: string;
  	mensaje: any;
  	error : boolean=false;
  	comentario: string;
  	titulos : string = "Alerta";


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService,
		private datosCuentasServicios: datosCuentasServicio,
		private datosGeneralesServicios: datosGeneralesServicio,
		public dialogMesage: MatDialog,
		public dialog: MatDialog,
		public dialogCarga: MatDialog
	){
		this.titulo = 'Reimpresion de Comprobante de Gastos';
		this.confirmado = null;
		this.datosCuentasServicios.reiniciar();
	}



	ngOnInit(){

		console.log('productos-list.component.ts cargado');
		
	}

	getProductos(){
		this._productoService.getProductos().subscribe(
			result => {
				
				if(result.code != 200){
					console.log(result);
				}else{
					this.productos = result.data;
				}

			},
			error => {
				console.log(<any>error);
			}
		);
	}



		getValidacion(datosCuenta: datosCuenta)
		{

			this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
			this.fechaFin =   this.datosCuentas.fechaFin.trim().split('-'); 

			// alert(this.fechaFin);

			if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null)
			{ 
				this.error=true;
				this.comentario= "Favor de Seleccionar una fecha de fin";
			}
			if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null)
			{ 
				this.error=true;
				this.comentario= "Favor de Seleccionar una fecha de Inicio";
			}

		


			if (this.fechaInicio.length>0 && this.fechaFin.length>0)
			{
					if (parseInt(this.fechaFin[1])<parseInt(this.fechaInicio[1]) ){
						this.error=true;
						this.comentario= "El mes de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
					}
					if (parseInt(this.fechaInicio[1])>parseInt(this.fechaFin[1])){
						this.error=true;
						this.comentario= "El mes de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
					}

			}
			
			if (this.fechaInicio.length>0 && this.fechaFin.length>0){
					if (parseInt(this.fechaFin[2])<parseInt(this.fechaInicio[2])){
						this.error=true;
						this.comentario= "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
					}
					if (parseInt(this.fechaInicio[1])>parseInt(this.fechaFin[1])){
						this.error=true;
						this.comentario= "El dia de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
					}

			} 


			
			this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
		}


		/*Metodo para obtener el nuemro de cuentas*/	

	

	


	borrarConfirm(id){
		this.confirmado = id;
	}



	cancelarConfirm(){
		this.confirmado = null;
	}



openDialog(): void {
	
	this.error=false;

    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { mensaje: this.mensaje },
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });


  }





  	openDialogCargar(): void {
 
     this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
      width: '160px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

    
  }

  
  closeDialogCargar(): void {
  	 console.log('closeDialogCargar');
  			this.dialogRefCarga.close();
    		this.dialogRefCarga.afterClosed().subscribe(result => {
			      console.log('The dialog was closed');
			     // this.openDialog();
    	    });
  }

   

   /*Metodo para consumir el servicio*/
   	getCuentasGastos(){
   			this.openDialogCargar();
			this.datosCuentas= this.datosCuentasServicios.getDatosCuentas();
			this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
			console.log('getCuentasGastos');
			console.log(this.datosCuentas);
			var self=this;

				/*validacion de las fechas*/
				this.getValidacion(this.datosCuentas);

				if (this.error!=true){

						this._productoService.getCuentasReimpresion(this.datosCuentas,this.datosGenerales.FuncionSAP).subscribe(
							result => {

									
									
									console.log('Entro');
									this.closeDialogCargar();
									if(result.code != 200){
											console.log(result);
											this.cuentaGastos = result.ConsultaCuentasReimpresionResult.CuentasReimpresion;
											if (this.cuentaGastos == null){
												this.error=true;
												this.titulos= "Alerta";
												this.comentario= "La consulta no muestra cuentas disponibles";
												console.log(result.ConsultaCuentasReimpresionResult.Mensaje);
												//this.error=false;
												this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
												

													
												/* let dialogRef2 = this.dialog.open(DialogOverviewExampleDialog, {
											      width: '500px',
											      data: { mensaje: this.mensaje },
											      disableClose: true 
											    });*/


											}
												console.log(this.cuentaGastos);

									}else{

												this.titulos= "Error";
												this.error=true;
												this.comentario= "Error al consultar cuentas de gastos";
												this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
												this.closeDialogCargar();
												console.log('Entro');
									}


							},
							error => {
								console.log(<any>error);
								
								this.titulos= "Error";
											this.error=true;
											this.comentario= "Error al consultar cuentas de gastos";
											this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
											 //this.closeDialogCargar();
											 //this.dialogCarga.close()
												this.openDialog();
									        console.log('Entro');
							}

				        );		

				}else{
				    console.log('Entro en el error');
					console.log(this.mensaje);
					 this.closeDialogCargar();
					 this.openDialog();
				}

   	}


}

