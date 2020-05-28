import { Component,Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { cuenta } from '../models/CuentaGastos';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosCuenta} from '../models/DatosCuenta';
import {datosGenerales} from '../models/datosGenerales';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog}  from '../components/message';
import {reporteGastos} from '../models/reporteGastos';
import {cuentasSolicitud} from  '../models/cuentasSolicitud';

import {DialogCargar} from '../components/carga';
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';


@Component({
	selector: 'reimpresion',
	templateUrl: '../views/solicitudPresupuesto.html',
	providers: [ProductoService]
})
export class SolicitudPresupuestoComponent{
	public titulo: string;
	public productos: Producto[];
	public cuentaGastos: cuenta[];
	public confirmado;
	public datosCuentas :datosCuenta;
	public datosGenerales :datosGenerales;
	public ReporteGastos :  reporteGastos;
	public dialogRefCarga;
	public cuentasSolicitud: cuentasSolicitud[];

	fechaInicio : any = [];
	fechaFin : any = [];
	animal: string;
  	mensaje: any;
  	error : boolean=false;
  	comentario: string;
  	titulos : string = "Alerta";
  	banderaMensaje : boolean=false;


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService,
		private datosCuentasServicios: datosCuentasServicio,
		private datosGeneralesServicios: datosGeneralesServicio,
		public dialog: MatDialog,
		public dialogCarga: MatDialog
	){

		this.titulo = 'Solicitud de Gastos';
		this.confirmado = null;
		
	}

	ngOnInit(){

		console.log('Cargar los valores de las cuentas');
		this.getCuentasGastosSolicitud();
		//this.getProductos();
		//this.getCuentasGastos();
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



		getValidacion(datosCuenta: datosCuenta){

			

			 this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
			 this.fechaFin =   this.datosCuentas.fechaFin.trim().split('-'); 

			// alert(this.fechaFin);

			if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null){ 
				this.error=true;
				this.comentario= "Favor de Seleccionar una fecha de fin";
			}
			if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null){ 
				this.error=true;
				this.comentario= "Favor de Seleccionar una fecha de Inicio";
			}

			//alert(this.datosCuentas.puesto);
			/*if (this.datosCuentas.puesto != 399 || this.datosCuentas.puesto != 35){ 
				this.error=true;
				this.comentario= "No cuenta con un puesto valido";
			}*/


			if (this.fechaInicio.length>0 && this.fechaFin.length>0){
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

		getCuentasGastosSolicitud(){

			this.openDialogCargar();

			this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
			console.log('getCuentasGastos');
			console.log(this.datosGenerales);

				

		if (this.error!=true){
			console.log('Entro a validar');
				this._productoService.getDatosGastosSolicitud(this.datosGenerales).subscribe(
					result => {
				
							//this.closeDialogCargar();
							
						if(result.code != 200){
							console.log(result);
							//this.cuentaGastos = result.data.detCuentas;
							

							//this.cuentasSolicitud = result.detComponentesProsupuestoxTienda;
							this.cuentasSolicitud = result.CentralComponenetesDePresupuestoPorTiendaResult.DetalleCuentas
							if (result.CentralComponenetesDePresupuestoPorTiendaResult.EsError===false){
									if (this.cuentasSolicitud.length===0){
										this.error=true;
										this.comentario= "La consulta no muestra cuentas disponibles";
										this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
										//this.openDialog();
										this.banderaMensaje=true;
										this.closeDialogCargar();
										console.log(this.cuentaGastos);
									}
									else if (this.cuentasSolicitud.length>0){

											if (this.datosGenerales.fiMensajeXML===1){
													this.error=true;

												var fecha = new Date(this.datosGenerales.fdfechaXML);
												var dia =  fecha.getDate();
												var diaformat =  String(dia).length==1?'0'+dia:dia;
												var mes  =  fecha.getMonth()+1;
												var mesFormat  =  String(mes).length==1?'0'+mes:mes;
												var anio =  fecha.getFullYear();
												var fechaFormat=diaformat+'/'+mesFormat+'/'+anio;

											this.titulos= "Aviso Importante";
											/*this.comentario= "Se le informa que a partir del dia "+ fechaFormat  +" todos los gastos \n"+
															 "deberán ser comprobados de forma obligatoria con facturas electronicas \n"+
															 " Siempre y cuando la cuenta del gasto solicitado así lo exija";*/
											this.comentario = this.datosGenerales.fdfechaXML;
											this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
											//this.openDialog();
											this.banderaMensaje=true;
											this.closeDialogCargar();

											}else{
												this.closeDialogCargar();
											}
											
									}
							}else{
								            this.banderaMensaje=true;
											this.closeDialogCargar();
											this.error=true;
											this.titulos= "Aviso Importante";
											this.comentario= result.CentralComponenetesDePresupuestoPorTiendaResult.Mensaje;
											this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
										//	this.openDialog();
							}
							





						}else{
									this.titulos= "Error";
									this.error=true;
									this.comentario= "Error al consultar cuentas de gastos";
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									//this.openDialog();
							console.log('Entro');
							//this.cuentaGastos = result.detCuentas;
								this.banderaMensaje=true;
								this.closeDialogCargar();
							
						}

				},
				error => {

					//console.log(<any>error);
					//this.closeDialogCargar();

					this.error=true;
					console.log(this.error);
					this.titulos= "Aviso Importante";
					console.log(this.titulos);
					this.comentario= "La consulta no muestra cuentas disponibles";
					console.log(this.comentario);
						this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
						console.log(this.mensaje);
						//this.openDialog();
						//this.openDialogCargar();   
							this.banderaMensaje=true;
								this.closeDialogCargar();
				}
		);

		}else{
			console.log('Entro en el error');
			console.log(this.mensaje);
			// this.closeDialogCargar();
			//	this.openDialog();

		}
	
				

		}

	


	borrarConfirm(id){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDeleteProducto(id){
		this._productoService.deleteProducto(id).subscribe(
			response => {
				if(response.code == 200){
					this.getProductos();
				}else{
					alert('Error al borrar producto');
				}
			},	
			error => {
				console.log(<any>error);
			}
		);
	}

	openDialog(): void {

	this.error=false;
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
      //this.animal = result;
    });
  }


  	openDialogCargar(): void {

  		console.log('openDialogCargar()');
 
     this.dialogRefCarga = this.dialog.open(DialogCargar, {
      width: '160px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

    this.dialogRefCarga.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('valor de la badera ' +this.banderaMensaje);
	if (this.banderaMensaje){
		this.openDialog();	
	}
      
     // this.animal = result;
    });
  }

  /*openDialogCargar(): void {
	
     this.dialogRefCarga = this.dialog.open(DialogCargar, {
      width: '200px',
      data: { mensaje: this.mensaje }
    });


  }*/
  closeDialogCargar(): void {

    		this.dialogRefCarga.close();
    		
    		// close();
    }

}
