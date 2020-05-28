
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

import {DialogDataegresoADNDialog} from '../components/dialog-egresoADN';
import {DialogDataIngresoADNDialog} from '../components/dialog-ingresoADN';
import {CajaDetalleFolios} from '../models/CajaDetalleFolios';
declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'ingresosADN',
	templateUrl: '../views/ingresosADN.html',
	providers: [ProductoService]
})

export class IngresoADNComponent{
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
	public tipoOperacion:Number=1;
	public cifracontrol:string='';
  public habilitarAgregar:boolean=false;



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
		this.titulo = 'Ingreso de Gastos Diversos';
		this.confirmado = null;
	}

	ngOnInit(){

		console.log('Muestra la pantalla de los folios ADN');
	
	}

	


validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

     // if (this.egresos.importe>0 && this.egresos.factura.length>0 && form){
      if (Number(this.folioADN)>0 && form){
            this.habilitarAgregar=true;
      }else{
          this.habilitarAgregar=false;

      }

        return this.habilitarAgregar;
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
		
		openDialog() {



   			this.cajaDetalleFolios= new CajaDetalleFolios('','','','','','',0,'','',0,0,0,0,0,0,'',0,0,'','',0,false);   
			var _folioADN = this.folioADN;
			this.folioADN = null;
			this.openDialogCargar();
            this._productoService.getConsultaValidacionEgreso(_folioADN, this.refempleado, this.tipoOperacion, this.cifracontrol).subscribe(
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
													   this.error=false;
                                               }else{

                                                        console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Alerta";
                                                        this.error=true;
														this.comentario= result.ValidaEgresoCajaResult.Mensaje;
														this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
                                               }

                                                    
                                                    
                                                    

                                             
                                            }else{
                                                     	this.titulo="Alerta";
                                                        this.error=true;
														this.comentario= "Error al consultar informacion de folioADN"
														this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
                                            }
											this.closeDialogCargar();

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

             );

		




 

  	}

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
  
  openDialogIngreso(): void{
	this.dialog.open(DialogDataIngresoADNDialog, {
		width: '500px',
		data: {
			animal: 'panda',
			carga: this.folioADN,
			detEgresoADN : this.cajaDetalleFolios ,
			desc: '',
			generales: this.datosGenerales,
			act: this.detActualizarFiniquito
		},disableClose: true
	});
  }

  	openDialogCargar(): void {
 
     this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
      width: '160px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

    this.dialogRefCarga.afterClosed().subscribe(result => {
		if (this.error == true) {
		  this.openDialogMensaje();
		}
		else {
			this.openDialogIngreso();
		}
    });
  }

  
  closeDialogCargar(): void {

    		this.dialogRefCarga.close();
    		// close();
    }

}
