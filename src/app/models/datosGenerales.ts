
export class datosGenerales{


			public NumTienda :Number;
			public NomTienda :string;
			public Moneda :string;
			public Mes :Number;
			public Anio :Number;
			public Puesto :Number;
			public Canal :Number;
			public FuncionSAP :Number;
			public FuncionSAPCorta :Number;
			public DescPresupuesto :string;
			public SignoMoneda :string;
			public PaisId  :Number;
			public NombreMoneda :string;
			public Impuesto :string;
			public PswMetodos :string;
			public NomEmpleado :string;
			public estacion :string;
			public NomEmpCorto :string;

			public NoEmpleado:string;
            public fiActivaXML :Number;
            public fdActivaXML:string;
            public fiMensajeXML :Number;

            public Ccentro:string;
            public CecoEnt:Number;
            public Ceco:string;
            
            public fdfechaXML:string;
            public TipoUsuario:string;
            public Idmenu:string;
            public menu:string;
            public servidor:string;
            public ValorImpuesto:string;


            /*Parametros para habilitar huella en el egreso*/
			public paramGasxEmp :Number;            
			public paramGas :Number;            
            public paramJSA :Number;            
            public reportVisible :Number; 
            public reportVisiblexCuenta :Number; 
public esfrontera : boolean;
public Activafondeo : Number;

		

		constructor(){
					this.NumTienda =0;
					this.NomTienda ='';
					this.Moneda ='';
					this.Mes =0;
					this.Anio =0;
					this.Puesto =0;
					this.Canal =0;
					this.FuncionSAP =0;
					this.DescPresupuesto ='';
					this.SignoMoneda ='';
					this.PaisId  =0;
					this.NombreMoneda ='';
					this.Impuesto ='';
					this.PswMetodos ='';
					this.NomEmpleado ='';
					this.estacion='';
					this.NomEmpCorto='';
					this.NoEmpleado="";
					this.fiActivaXML=0;
					this.fdActivaXML="";
					this.fiMensajeXML=0;
					this.Ccentro='520673';
					this.CecoEnt=0;
					
					this.Idmenu="";
					this.menu="";
					this.servidor="1";
					this.reportVisible=0;
					this.reportVisiblexCuenta=0;
					this.esfrontera = false;
					this.Activafondeo = 0;

		}

		
	
}