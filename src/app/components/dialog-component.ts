/*import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { reporteGastos } from '../models/ReporteGastos';
import { cuenta } from '../models/CuentaGastos';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosCuenta} from '../models/DatosCuenta';





@Component({
	selector: 'dialog-content-example-dialog',
	templateUrl: '../views/Dialog-contenedor.html',
	providers: [ProductoService]
})
export class ReporteGastosComponent{
	public titulo: string;
	public productos: Producto[];
	public cuentaGastos: cuenta[];
	public ReporteGastos : reporteGastos[];
	public confirmado;
	public datosCuentas :datosCuenta;
	public TituloCuenta: Number;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService,private datosCuentasServicios: datosCuentasServicio
	){
		this.titulo = 'Reporte de Gastos';
		this.confirmado = null;
	}

	ngOnInit(){
		console.log('productos-list.component.ts cargado');
		//this.getProductos();
		//this.getReporteGastos();
	}

	

		getReporteGastos(){

				
			this.datosCuentas= this.datosCuentasServicios.getDatosCuentas();
			console.log('getCuentasGastos');
			console.log(this.datosCuentas);

			this.TituloCuenta=this.datosCuentas.cuenta;

				
				this._productoService.getReporteGastos(this.datosCuentas).subscribe(
					result => {
				
						if(result.code != 200){
							console.log(result);
							//this.cuentaGastos = result.data.detCuentas;
							this.ReporteGastos = result.detReporteGastos;
							console.log(this.ReporteGastos);
						}else{
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
*/