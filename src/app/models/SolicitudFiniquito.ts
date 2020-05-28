import {finiquito} from '../models/finiquito';

export class SolicitudFiniquito{
	
		constructor(
					public usuario:string,
			        public estacion:string,
			        public funcionSAP:string,
			        public tipo:string,
			        public ConsultaFiniquito:finiquito
			){}

}