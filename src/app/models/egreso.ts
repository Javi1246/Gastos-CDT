
export class egreso{
	constructor(
		public noCuenta: number,
		public descCuenta: string,
		//public importe: number,
		public importe: string,
		public factura: string,
		public justificacion: string,
		public concepto: string,
		public importeImpuesto: number,
		
	){}
}