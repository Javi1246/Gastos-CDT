import {Injectable} from '@angular/core';
import {datosCuenta} from '../models/DatosCuenta';
import { DatePipe } from '@angular/common';
@Injectable()
export class datosCuentasServicio {

	public datosCuentas : datosCuenta 


	constructor(){
		console.log('Entro 1');
			this.datosCuentas = new datosCuenta();

	}

	addDatosCuentas(cuenta:datosCuenta){
			this.datosCuentas=cuenta;

	}

	reiniciar(){
			this.datosCuentas = new datosCuenta();

	}

	getDatosCuentas(){
			return this.datosCuentas;

	}

	setHuella(huella: boolean){
		console.log('Entro en la setHuella');
				this.datosCuentas.huella=huella;
				console.log(this.datosCuentas);

		}

		getStatus(estatus: Number){
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


}

