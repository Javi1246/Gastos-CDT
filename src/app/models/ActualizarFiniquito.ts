import {finiquito} from '../models/finiquito';


export class ActualizarFiniquito {

		constructor(public  detFiniquito : finiquito,
				     public  sucursal : Number,   
				     public  descSucursal : string,
				     public  folioADN : string,     
				     public  Operador : string,     
				     public  NoTransaccion  : string,     
				     public  canal :string,
					 public estacion:string,
					 public empleado:string,
					 public folioSAP:string,
					 public funcionSap:string
					 
					 ){


		}

}
