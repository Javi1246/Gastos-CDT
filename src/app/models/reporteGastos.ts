export class reporteGastos {

		constructor(public  FolioAdn : Number,
				     public  FolioSAP : Number,   
				     public  NoCuenta : Number,     
				     public  ImporteGasto : Number,     
				     public  DescTipoGasto : Number,     
				     public  IdTipo : Number,     
				     public  Fecha : string,     
				     public  Descripcion : string,
				     public  Referencia : string,     
				     public  Justificacion : string,     
				     public  Observaciones  : string,     
				     public  Empleado :Number,
					 public TranNo:Number,
					 public Importeletra:string,
					 public FolioFBP:string,
					 public Parametro:string
					 ){


		}

}


