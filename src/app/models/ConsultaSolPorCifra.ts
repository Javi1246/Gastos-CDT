

export class ConsultaSolPorCifra{
		constructor(
				public Folio_ADN:Number,				
				public Cuenta:Number,				
				public TipoGasto:Number,				
				public Transaccion_ADN:Number,		
				public Estado:Number,				
				public Importe:Number,				
				public Importe2:Number,				
				public Referencia:string,			
				public JustificacionGtetda:string,				
				public Folio:string,								
				public Fecha:string,								
				public JustificacionRechazo:string,				
				public Empleado:Number,								
				public EmpleadoDestino:Number,						
				public NombreEmpleado:string,		
				public Canal:Number
			){}

}