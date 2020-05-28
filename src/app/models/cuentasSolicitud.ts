export class cuentasSolicitud{

	constructor(
        public cuenta: number,
        public descripcion: string,
        public  presupuesto: number,
        public  afectados: number,
        public  bloqueado: number,
        public  ampliado: number,
        public  Disponible: number,
        public  solicitado: number,
        public  compensado : number
	){}

}