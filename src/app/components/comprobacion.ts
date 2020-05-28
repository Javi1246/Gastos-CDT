
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
import {DialogDataEmpleadoHuellaDialog} from '../components/dialog-data-empleados-dialog';
import {Filter1025} from '../components/FilterAutorizar';

@Component({
	selector: 'comprobacion',
	templateUrl: '../views/comprobacion.html',
	providers: [ProductoService]
})
export class ComprobacionComponent{
	public titulo: string;
	public productos: Producto[];
	public cuentaGastos: cuenta[];
	public confirmado;
	public datosCuentas :datosCuenta;
	public ReporteGastos :  reporteGastos;
	public dialogRefCarga;
	public datosGenerales :datosGenerales;
	public consulta:boolean;
	public bandera:boolean;
	public esError:boolean;
	public  filterArg:any = {NoCuenta: 1025};  

	fechaInicio : any = [];
	fechaFin : any = [];

	animal: string;
  	mensaje: any;
  	error : boolean=false;
  	comentario: string;
  	titulos : string = "Alerta";


  	public esErrorMes:boolean=false;


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService,
		private datosCuentasServicios: datosCuentasServicio,
		private datosGeneralesServicios: datosGeneralesServicio,
		public dialog: MatDialog,
		public dialogCarga: MatDialog
	){

		this.bandera=false;
		this.titulo = 'Comprobación de Gastos en Tienda';
		this.confirmado = null;
		this.datosCuentasServicios.reiniciar();
		this.consulta=false;

		


		 this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();

		 this.datosCuentasServicios.getPuesto(this.datosGenerales.Puesto);
 	     console.log('paso'+this.datosGenerales);
 	     //Se comentra la huella 
 	     //this.openCargaHuella();
 	     	this.datosGeneralesServicios.setReportVisible(1);



     
	}


	


openCargaHuella(){



console.log('Entro en el metodo de openCargaHuella');



          let dialogRef = this.dialog.open(DialogDataEmpleadoHuellaDialog, {
                data: {                 
                  datosGenerales: this.datosGenerales,
                  consulta:this.consulta
                },
                disableClose:true
              });

           dialogRef.afterClosed().subscribe(result => {
			          console.log('The dialog was closed');

			          this.consulta = result;
			          console.log('Valor de consulta');
			          console.log(this.consulta);
			           console.log('Valor de consulta');
			         
			             if(this.consulta==false){
			                 		this.bandera=true;
			                 		this.titulos= "Alerta";
									this.error=true;
									this.comentario= 'La huella no es valida, solo tendra acceso de consulta dentro de la aplicación';
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									
									this.datosGeneralesServicios.setReportVisible(0);

									  //this.datosGeneralesServicios.setReportVisible(1);
			                 		this.openDialog();

			             }else{
			             		this.bandera=false;
			             		this.datosGeneralesServicios.setReportVisible(1);



              /* this.pantalla=false;
               this.validaCentral=false;*/

             }

                                                        
         
        });

  }





		openDialogMensaje(): void {
				console.log('Entro en el metodo de openDialogMensaje');
				this.error=false;
			    this.dialogCarga.open(DialogOverviewExampleDialog, {
			      width: '500px',
			      data: { mensaje: this.mensaje }
			      
			    });

   
  		}

	ngOnInit(){

		console.log('productos-list.component.ts cargado');
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
if (this.datosCuentas.fechaInicio.length>0){


	if (this.datosCuentas.fechaFin.length>0){

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

var dia             = new Date();			
var hoy             = new Date(this.fechaInicio);
var fechaFormulario = new Date(this.fechaFin);

// Compara solo las fechas => no las horas!!
//hoy.setHours(0,0,0,0);

				if (fechaFormulario >= hoy) {
				  
				  console.log("Fecha a partir de hoy");
				}
				else {
				  console.log("Fecha de fin debe de ser mayor");
				  this.error=true;
				 this.comentario= "Fecha de fin debe de ser mayor";
				}

				if (hoy >  dia) {
				  	console.log("Fecha de fin debe de ser mayor");
				  	this.error=true;
				 	this.comentario= "Fecha de Inicio no debe de ser mayor a la fecha actual";
				  
				}


		}else{
					console.log("Debes de seccionar una fecha de fin");
				  	this.error=true;
				 	this.comentario= "Debes de seccionar una fecha de fin";
		}


}else{

					console.log("Debes de seccionar una fecha de Inicio");
				  	this.error=true;
				 	this.comentario= "Debes de seccionar una fecha de Inicio";

}				

		/*	if (this.fechaInicio.length>0 && this.fechaFin.length>0){

				if (parseInt(this.fechaFin[1])>=parseInt(this.fechaInicio[1]) ){
					if (parseInt(this.fechaFin[2])<parseInt(this.fechaInicio[2])){
					
								this.error=true;
								this.comentario= "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
					}
					if (parseInt(this.fechaInicio[2])>parseInt(this.fechaFin[2])){
						this.error=true;
						this.comentario= "El dia de la fecha de inicio  debe de ser menor a la fecha de Fin ";
					}
				}

			} */


			
			this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
		}


		/*Metodo para obtener el nuemro de cuentas*/	

		getCuentasGastos(){

			this.openDialogCargar();
			this.datosCuentas= this.datosCuentasServicios.getDatosCuentas();
			this.datosCuentas.puesto=this.datosGenerales.Puesto;
			this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
			console.log('getCuentasGastos');
			console.log(this.datosCuentas);

				/*validacion de las fechas*/
				this.getValidacion(this.datosCuentas);
		
				this.datosGeneralesServicios.setreportVisiblexCuenta(this.datosCuentas.status);

				if (this.error!=true){
						console.log('Entro a validar');
						
						this._productoService.getCuentasReimpresion(this.datosCuentas,this.datosGenerales.FuncionSAP).subscribe(
							result => {
						
									this.closeDialogCargar();
								if(result.code != 200)
								{
										console.log(result);
										this.cuentaGastos = result.ConsultaCuentasReimpresionResult.CuentasReimpresion;
										console.log(this.cuentaGastos);
								  
												if (result.ConsultaCuentasReimpresionResult.EsError===true)
												{
														console.log('Entro en el error' +result.ConsultaCuentasReimpresionResult.Mensaje);
														this.titulos= "Alerta";
														this.error=true;
														this.comentario= result.ConsultaCuentasReimpresionResult.Mensaje;
														this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
														 //this.closeDialogCargar();
														 this.esError=true;
														//this.openDialog();
																			
												}
												else
												{
														/*this.titulos= "Error";
														this.error=true;
														this.comentario= "Error al consultar cuentas de gastos";
														this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};*/
														 //this.closeDialogCargar();
														  //this.dialogCarga.close()
															
															//this.openDialog();
															 this.esError=false;
												        console.log('Entro');
												}
								 }

							},
							error => {
								 this.esError=true;
								console.log(<any>error);
								this.closeDialogCargar();
								this.titulos= "Error";
											this.error=true;
											this.comentario= "Error al consultar cuentas de gastos";
											this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
											 //this.closeDialogCargar();
											 //this.dialogCarga.close()
												//this.openDialog();
									        console.log('Entro');
							}
				        );

				}
				else{
					 this.esError=true;
					console.log('Entro en el error');
					console.log(this.mensaje);
					this.titulos= "Alerta";
											
											this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
					 this.closeDialogCargar();
						//this.openDialog();

				}
	
				

		}

	


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
      disableClose:true


    });

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/
  }


  	openDialogCargar(): void {
 
     this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
      width: '160px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

    this.dialogRefCarga.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      		if (this.esError){
      			this.openDialog();
      		}
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
    }

}
