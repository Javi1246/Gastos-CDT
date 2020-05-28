
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

import {DialogDataegreso925Dialog} from '../components/dialog-egreso925';
import {CajaDetalleFolios} from '../models/CajaDetalleFolios';
import {datosEgreso} from '../models/datosEgreso';
import {DialogDataEmpleadoHuellaDialog} from '../components/dialog-data-empleados-dialog';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'egresos925',
	templateUrl: '../views/egresos925.html',
	providers: [ProductoService]
})

export class Egreso925Component{
	public titulo: string;
	public productos: Producto[];
	public cuentaGastos: cuenta[];
	public confirmado;
	public datosCuentas :datosCuenta;
	public datosGenerales :datosGenerales;
	public ReporteGastos :  reporteGastos;
	public dialogRefCarga;
	public cuentasSolicitud: cuentasSolicitud[];
	public folioFBP : Number;
	public folioADN : Number;
	
	public detFiniquito : finiquito;
	public detActualizarFiniquito: ActualizarFiniquito;
	public cajaDetalleFolios:CajaDetalleFolios;
	


	public refempleado:Number=0;
	public tipoOperacion:Number=5;
	public cifracontrol:string='';
	public datosEgreso:datosEgreso;
	 public consulta:boolean;

	 public empleadoDI:Number=0;
	 public empleadoObtenido:Number=0;

	 public habilitarAgregar:boolean=false;
	 public ocultarHuellas:boolean=false;


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
		this.datosEgreso = new datosEgreso('','','');
		this.titulo = 'Egreso de Gastos Diversos';
		this.confirmado = null;
		this.tipoOperacion=5;

		console.log('valor de datos generales en Egreso925Component');
		 this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
		 this.empleadoDI=Number(this.datosGenerales.NoEmpleado);
		 //this.empleadoDI=Number(this.datosEgreso.empleado);
		 
		 console.log('valor de empleado');
		 console.log(this.empleadoDI);
	}

	ngOnInit(){
		//this.datosEgreso = new datosEgreso('','','');
		console.log('Muestra la pantalla de los folios ADN');
         
	
	}



 
 validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

try{

    	/*  console.log('this.datosEgreso.referencia.length ');
    	  console.log(this.datosEgreso.referencia.length );
    	  console.log('this.datosEgreso.empleado.length ');
    	  console.log(String(this.datosEgreso.empleado).length );*/
    
        
          if(String(this.datosEgreso.referencia).length>0 && String(this.datosEgreso.empleado).length>0 ){ 
                  console.log('this.datosEgreso.referencia');  
                  console.log(this.datosEgreso.referencia.length);  
                  console.log('this.datosEgreso.empleado');  
                  console.log(String(this.datosEgreso.empleado.length));  
                 this.habilitarAgregar=true; 

          }else{

                this.habilitarAgregar=false;

          }

     
}catch(e){
	console.log('error');
    this.habilitarAgregar=false;
}




 
console.log('this.habilitarAgregar'); 
console.log(this.habilitarAgregar); 

        return this.habilitarAgregar;
  }


	opeenvalidacion(){

			this.empleadoObtenido=Number(this.datosEgreso.empleado);
			console.log('this.empleadoObtenido')
 		console.log(this.empleadoObtenido)

			let dia=  this.dialog.open(DialogDataegreso925Dialog, {
													 		width: '500px',
											                data: {
											                  animal: 'panda',
											                  carga: this.folioADN,
											                  detEgresoADN : this.cajaDetalleFolios ,
											                  desc: '',
											                  generales:this.datosGenerales,
											                  act:this.detActualizarFiniquito,
											                  empleadoDI:this.empleadoDI,
											                  empleadoObtenido: this.empleadoObtenido,

											                },disableClose:true
											              });


   			dia.afterClosed().subscribe(result => {
					      console.log('The dialog was closed');
					     this.datosEgreso = new datosEgreso('','','');
					      	$('#ocultarHuella').css({'display': 'block'});
					      	this.ocultarHuellas=false;
    		});

	}

	

		
		openDialog() {
$('#emp').focus();
this.ocultarHuellas=true;
			console.log('Valores para la carga');
		    console.log(this.datosEgreso);

		    this.refempleado=Number(this.datosEgreso.empleado);
   			
		    this.openDialogCargar();


   			this.cajaDetalleFolios= new CajaDetalleFolios('','','','','','',0,'','',0,0,0,0,0,0,'',0,0,'','',0,false);


   			/*Se cargan los valores para probar el modal */

   		//	this.openCargaHuella();

   			
   		  this.folioADN=Number(this.datosEgreso.referencia);

            this._productoService.getConsultaValidacionEgreso(this.folioADN,this.refempleado,this.tipoOperacion,this.cifracontrol).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              
                                              this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length>0?result.ValidaEgresoCajaResult.CajaDetalleFolios[0]:this.cajaDetalleFolios;
                                              console.log('Valor de la respuesta');
                                              console.log(this.cajaDetalleFolios);
  
                                             $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               if (result.ValidaEgresoCajaResult.EsError==false ){
                                                       console.log('Se valido con exito');
                                                       
                                                        
                                                       			this.closeDialogCargar();
                                                     /*   this.dialog.open(DialogDataegreso925Dialog, {
													 		width: '500px',
											                data: {
											                  animal: 'panda',
											                  carga: this.folioADN,
											                  detEgresoADN : this.cajaDetalleFolios ,
											                  desc: '',
											                  generales:this.datosGenerales,
											                  act:this.detActualizarFiniquito

											                },disableClose:true
											              });*/

                                                        


                                                       

                                               }else{

                                                        console.log('Se presento un error al egresar  la solicitud');
                                                        this.titulo="Alerta";
                                                        this.error=true;
														this.comentario= result.ValidaEgresoCajaResult.Mensaje;
														this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};

															this.closeDialogCargar();
														//this.openDialogMensaje();	

														

														
                                               }

                                                    
                                                    
                                                    

                                             
                                            }else{
                                                     	this.titulo="Alerta";
                                                        this.error=true;
														this.comentario= "Error al consultar informacion de folioADN"
														this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
														this.openDialogMensaje();	
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

             );

		




 

  	}

	openDialogMensaje(): void {
 	$('#ocultarHuella').css({'display': 'block'});
 	this.ocultarHuellas=false;

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
      console.log('The dialog was closed');
      if (this.error==true){
      		this.openDialogMensaje();

      		//	this.opeenvalidacion();

      }else{
      		this.opeenvalidacion();
      }

     

      
     	
    });
  }

  
  closeDialogCargar(): void {
  			$('#emp').focus();
  			 $('#ocultarHuella').css({'display': 'none'});
  			
    		this.dialogRefCarga.close();
    		// close();
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


    openCargaHuella(){

  

			console.log('Entro en el metodo de openCargaHuella');

		 //this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();

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
		                 this.error=true;
		               		this.titulos= "Aviso Importante";
							this.comentario= "No se cuenta con una huella valida para egresar ";
							this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
							this.openDialogMensaje();		                


		             }else{		               	

		               		this.openDialog();

		               		this.error=true;
		               		this.titulos= "Aviso Importante";
							this.comentario= "Se le informa que a partir del dia "+ this.datosGenerales.fdfechaXML  +" todos los gastos \n"+
															 "deberán ser comprobados de forma obligatoria con facturas electronicas \n"+
															 " Siempre y cuando la cuenta del gasto solicitado así lo exija";
							this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};



								//this.openDialogMensaje();
		               		//this.openDialog();
		             }

		             

		                                                        
		         
		        });

  }



}
