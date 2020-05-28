import {Injectable} from '@angular/core';
import {datosCuenta} from '../models/DatosCuenta';
import { DatePipe } from '@angular/common';
@Injectable()
export class datosUrlServicio {

	public url : string 


	constructor(){
		console.log('Entro 1');
			this.url = '';

	}

	addDatosURL(url:string){
			this.url=url;

	}

	reiniciar(){
			this.url = '';

	}

	getDatosURL(){
			return this.url;

	}

	


}

