
export class datosCuenta{
	
		public status: Number;
		public descEstatus: string;
		public fechaInicio: string;
		public fechaFin: string;
		public puesto: Number;
		public cuenta: Number;
		public huella: boolean;
		public esfrontera : boolean;

		constructor(){

				this.status=0;
				this.descEstatus='';
				this.fechaInicio='';
				this.fechaFin='';
				this.puesto=0;
				this.cuenta=0;
				this.esfrontera=true;
		}


		setHuella(huella: boolean){
				this.huella=huella;

		}
setFrontera(esfrontera: boolean){
				this.esfrontera=esfrontera;

		}

		setStatus(estatus: number){
				this.status=estatus;

		}
		setDescStatus(descEstatus: string){
				this.descEstatus=descEstatus;

		}
		setFechaInicio(fechaInicio: string){
				this.fechaInicio=fechaInicio;

		}
		setFechaFin(fechaFin: string){
				this.fechaFin=fechaFin;

		}
		setPuesto(puesto: Number){
				this.puesto=puesto;

		}
		setCuenta(cuenta: number){
				this.cuenta=cuenta;

		}

		getStatus(){
				return this.status;

		}
		getFechaInicio(){
				return this.fechaInicio;

		}
		getFechaFin(){
				return this.fechaFin;

		}
		getPuesto(){
				return this.puesto;

		}
		getCuenta(){
				return this.cuenta;

		}
	
}