export class AutizacionSolicitud{
	
		constructor(
				public FolioADN       :Number,
				public Folio           :string,
				public Cuenta          :string,
				public DescripCuenta     :string,
				public Importe         :Number,
				public Fecha           :string,
				public Estado          :string,
				public DescripSolicitud  :string,
				public Jestado         :string,
				public Observaciones   :string,
				public Empleado        :string,
				public NumProyecto     :Number,
				public DescripProyecto :string,
				public descTitulo:string,
				public TdaEstado:string,
				public CecoFolio:string,
				public autorizada:boolean,
		){}

}


