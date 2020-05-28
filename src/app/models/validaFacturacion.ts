

export class validaFacturacion{

	/*
			public UID :string,        
        			public codigo: number,
        	        public mensaje:string
	*/
		
		constructor(

        	        public ComprobanteFiscal:string, 
		            public Datosparam       :Number, 
		            public EjercicioFiscal  :string, 
		            public Fechaxml         :string, 
		            public Folioxml         :string, 
		            public RFCEmisor        :string, 
		            public RFCReceptor      :string, 
		            public Serie            :string, 
		            public UUIDValido       :string, 
		            public Ivaxml           :Number, 
		            public Totalxml         :Number,
		            public SubTotalxml      :Number,
		            public Cadenaxml		:string

        ){}

}     