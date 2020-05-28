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
import {DialogDataFiniquitoDialog} from '../components/dialog-finiquito';
import {finiquito} from '../models/finiquito';
import {ActualizarFiniquito} from '../models/ActualizarFiniquito';



@Component({
	selector: 'finiquito',
	templateUrl: '../views/solicitudFiniquito.html',
	providers: [ProductoService]
})
export class SolicitudFiniquitoComponent{
	public titulo: string;
	public productos: Producto[];
	public cuentaGastos: cuenta[];
	public confirmado;
	public datosCuentas :datosCuenta;
	public datosGenerales :datosGenerales;
	public ReporteGastos :  reporteGastos;
	public dialogRefCarga;
	public cuentasSolicitud: cuentasSolicitud[];
	public folioFBP : any
	public detFiniquito : finiquito;
	public detActualizarFiniquito: ActualizarFiniquito;
	public habilitarAgregar:boolean=false;
	fechaInicio : any = [];
	fechaFin : any = [];

	animal: string;
  	mensaje: any;
  	error : boolean=false;
  	comentario: string;
  	titulos : string = "Alerta";
	public 	validarFolio : boolean=false;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService,
		private datosCuentasServicios: datosCuentasServicio,
		private datosGeneralesServicios: datosGeneralesServicio,
		public dialog: MatDialog,
		public dialogCarga: MatDialog
	){
		this.titulo = 'Autorización de Pago de Finiquito';
		this.confirmado = null;
		//this.folioFBP;
	}

	ngOnInit(){

		console.log('Cargar los valores de las cuentas');
		//this.getCuentasGastosSolicitud();
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


myMethod(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
   
    return (key <= 13 || (key >= 48 && key <= 57) || key == 46);

}

myMethod2(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
    return (key <= 13 || (key >= 48 && key <= 57) );

}

 validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

     // if (this.egresos.importe>0 && this.egresos.factura.length>0 && form){
      if (Number(this.folioFBP)>0 && form){
            this.habilitarAgregar=true;
      }else{
          this.habilitarAgregar=false;

      }

        return this.habilitarAgregar;
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

		/*Metodo para abrir el modal de finiquito*/
		openDialog() {

			//alert(this.folioFBP);
			this.openDialogCargar();
			this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
  if(this.validarFolio==false){
		this.validarFolio=true;
		
		var _folioFBP = this.folioFBP;
		this.folioFBP = null;
		
        this._productoService.getConsultaFiniquito(_folioFBP).subscribe(
          result => {
				 console.log('RESULTADO');
				 console.log(this._productoService.getConsultaFiniquito(_folioFBP));//borr
                 console.log(result);
            if(result.code != 200){
              
            //  this.closeDialogCargar();

              console.log(result);

              console.log('Paso el valor');              
              //this.cuentaGastos = result.data.detCuentas;
              //this.detFiniquito = result.detFiniquito;
              this.detFiniquito = result.ConsultaFiniquitoResult.ConsultaFiniquito;
              this.detActualizarFiniquito = result.actFiniquito;
              console.log(this.ReporteGastos);

              if (result.ConsultaFiniquitoResult.EsError!=true){


              	this.error=false;
              	 this.closeDialogCargar();

              	/*	this.dialog.open(DialogDataFiniquitoDialog, {
		                data: {
		                  animal: 'panda',
		                  carga: this.folioFBP,
		                  detFiniquito : this.detFiniquito,
		                  desc: '',
		                  generales:this.datosGenerales,
		                  act:this.detActualizarFiniquito
		                },disableClose:true
		              });
		              */

              }else{

              				

              						this.titulos= "Alerta";
									this.error=true;
									this.comentario= result.ConsultaFiniquitoResult.Mensaje;
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									this.closeDialogCargar();
									//this.openDialogMensaje();			


              }
              

              //this.folioFBP=0;

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



		/*Metodo para obtener el nuemro de cuentas*/	

		getCuentasGastosSolicitud(){

				this.openDialogCargar();
			this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
			console.log('getCuentasGastos');
			console.log(this.datosGenerales);

				/*validacion de las fechas*/
				//this.getValidacion(this.datosCuentas);
			
			
		/*	
		    if (this.datosCuentas.cuenta=== 0){ 
				this.error=true;
				//this.mensaje= "Favor de Seleccionar una fecha de Inicio";
			}
				 
		*/

		if (this.error!=true){
			console.log('Entro a validar');
				this._productoService.getDatosGastosSolicitud(this.datosGenerales).subscribe(
					result => {
				
							this.closeDialogCargar();
						if(result.code != 200){
							console.log(result);
							//this.cuentaGastos = result.data.detCuentas;
							

							this.cuentasSolicitud = result.detComponentesProsupuestoxTienda;
							if (this.cuentasSolicitud.length===0){
									this.error=true;
									this.comentario= "La consulta no muestra cuentas disponibles";
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									this.openDialog();
									console.log(this.cuentaGastos);
							}
							else if (this.cuentasSolicitud.length>0){

									if (this.datosGenerales.fiMensajeXML===1){
											this.error=true;
									this.titulos= "Aviso Importante";
									this.comentario= "Se le informa que a partir del dia "+ this.datosGenerales.fdActivaXML +"todos los gastos \n"+
													 "deberán ser comprobados de forma obligatoria con facturas electronicas \n"+
													 " Siempre y cuando la cuenta del gasto solicitado así lo exija";
									this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
									this.openDialog();

									}
									
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
						this.openDialogCargar();   

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

	/*openDialog(): void {
		this.error=false;
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { mensaje: this.mensaje }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }*/

	openDialogMensaje(): void {

		this.error=false;
    this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

   /* dialogRef.afterClosed().subscribe(result => {
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

			console.log('El valor de error'+this.error);
			console.log('El valor de validarFolio'+this.validarFolio);

      if(this.error==true){
      		this.openDialogMensaje();	
      }else if(this.error==false) {
				this.validarFolio=false;
      	var salida=	this.dialog.open(DialogDataFiniquitoDialog, {
		                data: {
		                  animal: 'panda',
		                  carga: this.folioFBP,
		                  detFiniquito : this.detFiniquito,
		                  desc: '',
		                  generales:this.datosGenerales,
		                  act:this.detActualizarFiniquito

		                },disableClose:true
									});
									
									salida.afterClosed().subscribe(result => {

										console.log('El valor de error'+this.error);
										console.log('El valor de validarFolio'+this.validarFolio);
										this.validarFolio=false;
										
									});
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
				// close();
				this.validarFolio=false;
    }

}