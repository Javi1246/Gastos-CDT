
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
import {AutizacionSolicitud} from '../models/AutizacionSolicitud';

import {DialogCargar} from '../components/carga';
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';
import {FilterAutorizar} from '../components/FilterAutorizar';
declare var jquery:any;
declare var $ :any;


@Component({
	selector: 'autorizacionSolicitud',
	templateUrl: '../views/AutorizacionPresupuesto.html',
	providers: [ProductoService]
})
export class AutorizacionPresupuestoComponent{
	public titulo: string;
	public productos: Producto[];
	public cuentaGastos: cuenta[];
	public confirmado;
	public datosCuentas :datosCuenta;
	public datosGenerales :datosGenerales;
	public ReporteGastos :  reporteGastos;
	
	public cuentasSolicitud: cuentasSolicitud[];
	public detSolicitudAut :AutizacionSolicitud[];
	public detSolicitudAutNO :AutizacionSolicitud[];
	public  detSolicitudAutPaso:AutizacionSolicitud[];

	public dialogRefCarga:any;
	public  filterArgNo:any = {TdaEstado: false};  
	public  filterArg:any = {TdaEstado: true};  

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
		public dialog: MatDialog,
		public dialogCarga: MatDialog
	){
		this.titulo = 'Autorización de solicitud';
		this.confirmado = null;
	}

	ngOnInit(){

		console.log('Cargar los valores de las cuentas');
		this.getCuentasGastosSolicitud();
		 
		//this.getProductos();
		//this.getCuentasGastos();
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

		try{
			this.openDialogCargar();
			this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
			console.log('getCuentasGastos');
			console.log(this.datosGenerales);


		if (this.error!=true){
			console.log('Entro a validar');
				this._productoService.getDatosGastosSolicitudAutorizadas(this.datosGenerales).subscribe(
					result => {
				
							this.closeDialogCargar();
						if(result.code != 200){
							console.log(result);
							//this.cuentaGastos = result.data.detCuentas;
							
						if (result.SolicitudesAutorizadasResult.EsError!=true){

							this.detSolicitudAutPaso=result.SolicitudesAutorizadasResult.DetalleSolicitudes;

							 try{
							 		 

							 			
							 			for (var i = 0; i < this.detSolicitudAutPaso.length; i++) {
 											  
 											  if (this.detSolicitudAutPaso[i].TdaEstado===""){
 											  		this.detSolicitudAutPaso[i].autorizada=false;
 											  }else{
 											  		this.detSolicitudAutPaso[i].autorizada=true;
 											  }
 											  
										}


							 		
                            			console.log('Se cargo correctamente');
                            			console.log(this.detSolicitudAutPaso);

							 }
							catch(err) {
    								console.log(err);
							}
							 

							this.detSolicitudAut = this.detSolicitudAutPaso;
							this.detSolicitudAutNO= this.detSolicitudAutPaso;
							

							console.log('Con la variable this.Autorizadas');
							console.log(this.detSolicitudAut);


							if (this.detSolicitudAut.length===0){
									this.error=true;
									this.comentario= "La consulta no muestra solicitudes autorizadas disponibles";
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									this.openDialog();
									console.log(this.cuentaGastos);
							}
							else if (this.detSolicitudAut.length>0){

									if (this.datosGenerales.fiMensajeXML===1){
											this.error=true;
									this.titulos= "Aviso Importante";
									/*this.comentario= "Se le informa que a partir del dia "+ this.datosGenerales.fdActivaXML +"todos los gastos \n"+
													 "deberán ser comprobados de forma obligatoria con facturas electronicas \n"+
													 " Siempre y cuando la cuenta del gasto solicitado así lo exija";
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									this.openDialog();*/

									}
									
							}

						}else{

									this.error=true;
									this.titulos= "Alerta";
									this.comentario= result.SolicitudesAutorizadasResult.Mensaje;
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									this.openDialog();
						}



						}else{
									this.titulos= "Error";
									this.error=true;
									this.comentario= "Error al consultar cuentas de gastos";
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									this.openDialog();
							console.log('Entro');
							//this.cuentaGastos = result.detCuentas;
							
							
						}

				},
				error => {

					//console.log(<any>error);
					this.closeDialogCargar();

					this.error=true;
					console.log(this.error);
					this.titulos= "Aviso Importante";
					console.log(this.titulos);
					this.comentario= "La consulta no muestra cuentas disponibles";
					console.log(this.comentario);
						this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
						console.log(this.mensaje);
						this.openDialog();
						//this.openDialogCargar();   

				}
		);

		}else{
			console.log('Entro en el error');
			console.log(this.mensaje);
			// this.closeDialogCargar();
			//	this.openDialog();

		}
	}catch(err){
		console.log('Error al cargar modal');
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
      //width: '500px',
      data: { mensaje: this.mensaje }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      try{this.animal = result;}catch(err){
      	console.log(err);
      }
    });
  }


  	openDialogCargar(): void {
 
 try{
 		  this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
		      width: '160px',
		      data: { mensaje: this.mensaje }
    	});

     this.dialogRefCarga.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      try{this.animal = result;}catch(err){
      	console.log(err);
      }
      
    });
 }catch(err){
 	console.log('Mensaje de errror');
 	console.log(err);
 }
    
  }

  /*openDialogCargar(): void {
	
     this.dialogRefCarga = this.dialog.open(DialogCargar, {
      width: '200px',
      data: { mensaje: this.mensaje }
    });


  }*/
  closeDialogCargar(): void {
		try{
			if(this.dialogRefCarga!=null){

					this.dialogRefCarga.close();
			}
			
		}catch(err){console.log(err);}
    		
    		// close();
    }

}
