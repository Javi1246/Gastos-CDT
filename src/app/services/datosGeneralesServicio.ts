import {Injectable} from '@angular/core';
import {datosGenerales} from '../models/datosGenerales';

@Injectable()
export class datosGeneralesServicio {

	public datosGenerales : datosGenerales 


	constructor(){
		console.log('Entro 1');
			this.datosGenerales = new datosGenerales();

	}

	addDatosGenerales(cuenta:datosGenerales){
			this.datosGenerales=cuenta;

	}



	getDatosGenerales(){
			return this.datosGenerales;

	}

	setEstacion(estacion: string){
		this.datosGenerales.estacion= estacion;

	}
	setServidor(servidor: string){
		this.datosGenerales.servidor= servidor;

	}

	setReportVisible(reportVisible: Number){
		this.datosGenerales.reportVisible= reportVisible;

	}
	setEmpleado(empleado: string){
		this.datosGenerales.NoEmpleado= empleado;

	}
	

	setreportVisiblexCuenta(reportVisiblexCuenta: Number){
		this.datosGenerales.reportVisiblexCuenta= reportVisiblexCuenta;

	}

	setValorImpuesto(ValorImpuesto: string){
		this.datosGenerales.ValorImpuesto= ValorImpuesto;

	}
	setValorPuesto(ValorPuesto: Number){
		this.datosGenerales.Puesto= ValorPuesto;

	}

	/*	getStatus(estatus: Number){
				console.log('Entro en la validacion');
				

				this.datosCuentas.status=estatus;
				console.log(this.datosCuentas);

		}
		getFechaInicio(fechaInicio: string){
			

				console.log(fechaInicio);
				this.datosCuentas.fechaInicio=fechaInicio;
				console.log(this.datosCuentas);

		}
		getFechaFin(fechaFin: string){
			
						     
				this.datosCuentas.fechaFin=fechaFin;
				console.log(this.datosCuentas);

		}
		getPuesto(puesto: Number){
				this.datosCuentas.puesto=puesto;

		}

		setCuenta(cuenta: number){
				this.datosCuentas.cuenta=cuenta;

		}
		setPuesto(puesto: number){
				this.datosCuentas.puesto=puesto;

		}

		setDescEstatus(status: string){
				this.datosCuentas.descEstatus=status;

		}
*/

}

