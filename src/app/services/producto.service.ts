
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';
import {datosCuenta} from '../models/DatosCuenta';
import {datosGenerales} from '../models/datosGenerales';
import {reporteGastos} from '../models/reporteGastos'
import { DatePipe,CurrencyPipe } from '@angular/common';
import {finiquito} from '../models/finiquito';
import {ActualizarFiniquito} from '../models/ActualizarFiniquito';
import {AutizacionSolicitud} from '../models/AutizacionSolicitud';
import {validacionFlete} from '../models/validacionFlete';
import {detFletes} from  '../models/detFletes';
import {empleados} from '../models/empleados';
import {HistoricoSolicitudes} from '../models/HistoricoSolicitudes';
import {SolicitudFiniquito} from '../models/SolicitudFiniquito';
import {cuentasSolicitud} from '../models/cuentasSolicitud';
import {egreso} from '../models/egreso';
import {validaFacturacion} from '../models/validaFacturacion';
import {fletero} from '../models/fletero';
import {CajaDetalleFolios} from '../models/CajaDetalleFolios';
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';
import {datosUrlServicio} from '../services/datosURLServicio';


@Injectable()
export class ProductoService{
	public url: string;
	public urlGastos: string;
	public urlGastosPV: string;
	public cadena:any;
	public ticket:string="";
	public urlPrint:string;
	public servidor :string;
	public datosGenerales:datosGenerales;
	public servicioCaja:string;
	//export const contentHeaders = new Headers();

	constructor(
		public _http: Http, private datosGeneralesServicios: datosGeneralesServicio,
	){
	
		//this.servidor= this.getParameterByName('servidor');
		//alert('Services');
		//alert(this.servidor);

		 
         
        
        this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
        if (this.datosGenerales.servidor==="1"){
        		this.servidor= this.getParameterByName('servidor'); 
        		  console.log(this.servidor);
                this.datosGeneralesServicios.setServidor(this.servidor);

                 // this.datosGeneralesServicios.setValorImpuesto(String(16));

        }
         
        
		  
		 //this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
		 		 console.log('ProductoService');
		 		  console.log(this.datosGenerales);
		 		  console.log('this.datosGenerales.servidor'+this.datosGenerales.servidor); 
		
		this.url = GLOBAL.url;
		this.urlGastos = GLOBAL.urlGastos;
		this.urlGastosPV= 'http://'+this.datosGenerales.servidor+GLOBAL.urlGastosPV;
		this.urlPrint=GLOBAL.urlPrint;
		console.log('valor this.urlGastosPV');
		console.log(this.urlGastosPV);

		/*Se carga la variable de caja para validar el flujo*/
		this.servicioCaja= 'http://'+this.datosGenerales.servidor+":9014/Caja/Servicios/FondeoAutomatico/FondeoAutomatico.svc/wsFondeoValidaSaldo";

		
	}

	getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	getProductos(){
		return this._http.get(this.url+'productos').map(res => res.json());     
	}

	getProducto(id){
		return this._http.get(this.url+'producto/'+id).map(res => res.json());
	}

	getInsertaSolicitudGastos(datosGenerales: datosGenerales,egreso: egreso,DatosXML: validaFacturacion,datos: cuentasSolicitud){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		
		
		console.log('valor de datos getInsertaSolicitudGastos');
		console.log(datosGenerales);
		console.log(egreso);
		console.log(DatosXML);
		console.log(datos);
		let solicitud:any = {};
		solicitud.Empleado=datosGenerales.NoEmpleado;
        solicitud.NoCuenta=egreso.noCuenta;
        solicitud.ImporteGasto=egreso.importe;
        
        var iva = new Number(egreso.importeImpuesto);
        console.log (iva.toFixed(2))

      //  solicitud.ImporteImpuesto=egreso.importeImpuesto;     
      	 solicitud.ImporteImpuesto=iva.toFixed(2);     


        console.log('Valor del´parametro fiActivaXML');
        console.log(datosGenerales.fiActivaXML);
        //solicitud.ImporteImpuesto=egreso.importeImpuesto; //Este parametro se va enviar 
        solicitud.Valxml= datosGenerales.fiActivaXML;
        solicitud.Referencia=egreso.factura;
        solicitud.Observaciones= egreso.concepto;
        solicitud.Justificacion=egreso.justificacion;
        solicitud.FolioRefFletes='';
        solicitud.Cifracontrol='';
        solicitud.PresupuestoDisponible=datos.Disponible;
        solicitud.estacioTrabajo=datosGenerales.estacion;

        
        if (DatosXML!= undefined){
        	solicitud.DatosXMl=DatosXML;	
        }else{
        	let datosXML = new validaFacturacion('0',0,'','','','','','','',0,0,0,'');
        	solicitud.DatosXMl=datosXML;
        	let flete:any = {};
        	flete.Datosparam=0; //V

        }

        let flete:any = {};
        	flete.Datosparam=0; 
        solicitud.Datosfiscales=flete;
        console.log('Valores de solicitud');
        console.log(solicitud);

		//return this._http.get(url).map(res => res.json());	     

		return this._http.post(this.urlGastosPV+'AfectaAltaSolicitud',solicitud).map(res => res.json());	     
	}


	getInsertaSolicitudGastosFletes(datosGenerales: datosGenerales,
									fletero:fletero,
									fletes:detFletes,									
									datos: cuentasSolicitud,
									existeFletero:Number
									){
		
		console.log('URL de la solicitud');

		console.log('valor de cuentas de solicitud');
		console.log(datos);
		
		
		let solicitud:any = {};
		//Objeto de Solicitud
		let flete:any = {};
		solicitud.Empleado=datosGenerales.NoEmpleado;
        solicitud.NoCuenta=fletero.noCuenta;
        solicitud.ImporteGasto=fletero.importe;
        solicitud.ImporteImpuesto=0;
        solicitud.Valxml=datosGenerales.fiActivaXML;
        solicitud.Referencia=fletero.referencia;
        solicitud.Observaciones='';
        solicitud.Justificacion=fletero.justificacion;
        solicitud.FolioRefFletes='';
        solicitud.Cifracontrol='';
        solicitud.PresupuestoDisponible=datos.Disponible;
        solicitud.estacioTrabajo=datosGenerales.estacion;        
        	flete.Datosparam=existeFletero; //VAlidar parametro si existe 
        	flete.Noidenficacion=0;
			flete.Calle=fletes.fcCalle;
			flete.Colonia=fletes.fcColonia;
			flete.Cp=fletes.fcCP;
			flete.Estado = fletes.fcEstado;  //Se debe de Solicitar
			flete.Estatusfolio=0; // Se debe de Solicitar
			flete.Foliorecibo=0;  // Se debe de Solicitar
			flete.NoExt=fletes.fcNoExt;
			flete.NoInt=fletes.fcNoInt;
			flete.Nombre=fletes.fcNombre
			flete.Poblacion=fletes.fcPoblacion
			flete.Rfc=fletes.fcRFC
			flete.Telefono=fletes.fcTelefono
       // solicitud.Datosfiscales=flete;
        solicitud.Datosfiscales=flete;
        let datosXML = new validaFacturacion('0',0,'','','','','','','',0,0,0,'');
        	solicitud.DatosXMl=datosXML;
        console.log('Valores de solicitud');
        console.log(solicitud);

		//return this._http.get(url).map(res => res.json());	
		return this._http.post(this.urlGastosPV+'AfectaAltaSolicitud',solicitud).map(res => res.json());	  
//return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'AfectaAltaSolicitud',solicitud).map(res => res.json());	  

	}


	/*Metodo para actualizar las solicitudes Autorizar*/
	getActualizarSolicitudGastos(datosGenerales: datosGenerales,detActualizazr:AutizacionSolicitud){
		//referencia='prueba'; //public FOLIO_ADN       :string,
		let actualizar:any = {};
					actualizar.folioADN=detActualizazr.FolioADN;
					actualizar.nofolioSAP=detActualizazr.Folio;
					actualizar.estadosolicitud=detActualizazr.TdaEstado;
					actualizar.estacionTrabajo=datosGenerales.estacion;
					actualizar.empleado=datosGenerales.NoEmpleado;
					
		var url= this.urlGastosPV+'InsertaFolioFiniquito';		
		console.log(url);	
		


		
		console.log('URL de la solicitud');
		console.log(url);
		return this._http.post(this.urlGastosPV+'ActualizaSolicitud',actualizar).map(res => res.json());	

		//return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'ActualizaSolicitud',actualizar).map(res => res.json());	
	}

	getInsertaSolicitudFiniquito(act:SolicitudFiniquito){
		//referencia='prueba';
		let report:any = {};
					report.det=act;
					
		var url= this.urlGastosPV+'InsertaFolioFiniquito';
		
		console.log(url);
		console.log('valor de report'+act);
		console.log('valor de report'+report);
		////http://localhost:17806/ServicioGastos.svc 
		return this._http.post(this.urlGastosPV+'InsertaFolioFiniquito',report).map(res => res.json());	
		//return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'InsertaFolioFiniquito',report).map(res => res.json());	
	}

	getCuentasConXML(datosGenerales: datosGenerales,cuenta:number){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
					console.log(this.urlGastos+'requiereXML?cuenta='+cuenta+'&moneda='+datosGenerales.Moneda+'&canal='+datosGenerales.Canal);
					let report:any = {};
					report.cuenta=cuenta;
					report.moneda=datosGenerales.Moneda;
					report.canal=datosGenerales.Canal;
					console.log(report);
					console.log(this.urlGastosPV+'RequiereXML');
			//return this._http.post(this.urlGastosPV+'RequiereXML',report).map(res => res.json());
			//http://localhost:17806/ServicioGastos.svc
			//return this._http.post(this.urlGastosPV+'DetalleTiendaCuenta',report).map(res => res.json()); //Se comenta para desarrollo 
			return this._http.post(this.urlGastosPV+'DetalleTiendaCuenta',report).map(res => res.json()); //Se comenta para desarrollo 

	}

	/*Metodo para validacion de flestes*/  //Se Modifico 19022018
	getVlidacionFletes(referencia:string){
					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			console.log(this.urlGastos+'consultaValidacionFletes?referencia='+referencia);
			//return this._http.get(this.urlGastos+'consultaValidacionFletes?referencia='+referencia).map(res => res.json());

			let report:any={};
			report.referencia=referencia;

				//return this._http.post('http://10.51.118.175:8082/ServicioGastos.svc/json/'+'consultaValidacionFletes',report).map(res => res.json());
				return this._http.post(this.urlGastosPV+'consultaValidacionFletes',report).map(res => res.json());

	}

	/*Metodo para consulta de fletes*/ //Se Modifico 19022018
	getConsultaFletes(){

					let report:any={};
			report.referencia='';
					
					//console.log(this.urlGastosPV+'consultaFletes);
					
			//return this._http.get(this.urlGastos+'consultaFletes').map(res => res.json());
			//return this._http.post('http://10.51.118.175:8082/ServicioGastos.svc/json/'+'consultaFletes',report).map(res => res.json());
			return this._http.post(this.urlGastosPV+'consultaFletes',report).map(res => res.json());
			

	}

	getConsultaPresupuesto(datosGenerales: datosGenerales,cuenta:number){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
					console.log(this.urlGastos+'requiereXML?cuenta='+cuenta+'&moneda='+datosGenerales.Moneda+'&canal='+datosGenerales.Canal);
			return this._http.get(this.urlGastos+'ConsultaPresupuesto?cuenta='+cuenta+'&moneda='+datosGenerales.Moneda+'&canal='+datosGenerales.Canal).map(res => res.json());

	}

	getCuentasGastos(datosCuentas: datosCuenta,datosGenerales: datosGenerales){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			//http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/consultaDetCuentasReimpresion
			let report:any = {};
					report.IdEstado=datosCuentas.status;
					report.NoCuenta=datosCuentas.cuenta;
					report.FechaInf=datosCuentas.fechaInicio;
					report.FechaSup=datosCuentas.fechaFin;
					report.Puesto=datosCuentas.puesto;
					
					report.canal=datosGenerales.Canal;
					report.tienda=datosGenerales.NumTienda;
					report.moneda=datosGenerales.Moneda;
					report.NoEmpleado=Number(datosGenerales.Ceco);  

				
					console.log(report);
			//return this._http.post(this.urlGastosPV+'consultaCuentas',report).map(res => res.json()); 

			//return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'consultaCuentas',report).map(res => res.json());
			return this._http.post(this.urlGastosPV+'consultaCuentas',report).map(res => res.json());
			

	}

	getReporteGastos(datosCuentas: datosCuenta,detHistoricoSolicitudes :HistoricoSolicitudes[],datosGenerales: datosGenerales){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
					//return this._http.get(this.urlGastos+'ConsultaComponentesDeProsupuestoPorTienda?Anio='+datosGenerales.Anio+'&Mes='+datosGenerales.Mes+'&Canal='+datosGenerales.Canal+'&tienda='+datosGenerales.NumTienda+'&Moneda='+datosGenerales.Moneda+'&Proyecto='+'0'+'&Puesto='+FuncionSAP+'&Centro='+'480673'+'&noEmpl='+datosGenerales.NoEmpleado).map(res => res.json());
				let report:any = {};
					report.IdEstado=datosCuentas.status;
					report.NoCuenta=datosCuentas.cuenta;
					report.FechaInf=datosCuentas.fechaInicio;
					report.FechaSup=datosCuentas.fechaFin;
					
					
					report.Puesto=datosCuentas.puesto;
					report.canal=datosGenerales.Canal;
					report.det=detHistoricoSolicitudes;
					
					/*report.Puesto=1;
					report.canal=0;*/

					//report.IdEstado=datosCuentas.cuenta==0?6:datosCuentas.status;
					
					console.log(report);

			//console.log('Valores'+this.urlGastos+'consultaReporteGastos?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto=399'+'&Auditor=0');
			//return this._http.get(this.urlGastos+'consultaReporteGastos?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			//http://localhost:17806/ServicioGastos.svc
			//return this._http.post(this.urlGastosPV+'consultaDetCuentas',report).map(res => res.json());
			//return this._http.post('http://localhost:17806/ServicioGastos.svc/json/'+'consultaDetCuentas',report).map(res => res.json());
		//	return this._http.post(this.urlGastosPV+'consultaDetCuentas',report).map(res => res.json());
				//http://localhost:10579/ServicioGastos.svc

			//return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'consultaDetCuentas',report).map(res => res.json());
			return this._http.post(this.urlGastosPV+'consultaDetCuentas',report).map(res => res.json());
			

			//'http://192.168.100.15:8098/ServicioGastos.svc/json/consultaCuentas
			//return this._http.post('http://192.168.100.15:8098/ServicioGastos.svc/json/'+'consultaDetCuentas',report).map(res => res.json());	

	}


  /*Metodo para la carga de la información  en la reimpresion*/

	getCuentasReimpresion(datosCuentas: datosCuenta,puesto: Number){
var FuncionSAP = String(puesto).length==4?String(puesto).substring(1,4):String(puesto).length==3?String(puesto).substring(0,3):'';
				console.log('Funcion SAp');
				console.log(FuncionSAP);	
					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
					console.log(this.urlGastos+'consultaCuentasReimpresion?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0');

					let report:any = {};
					report.IdEstado=datosCuentas.status;
					//report.NoCuenta=datosCuentas.cuenta;
					report.FechaInf=datosCuentas.fechaInicio;
					report.FechaSup=datosCuentas.fechaFin;
					report.Puesto=datosCuentas.puesto;
					report.Auditor=0;

				console.log(report);

			//return this._http.post(this.urlGastos+'consultaCuentasReimpresion?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			return this._http.post(this.urlGastosPV+'consultaCuentasReimpresion',report).map(res => res.json());

	}

	getDetalleCuentasReimpresion(datosCuentas: datosCuenta,puesto: Number){

			var FuncionSAP = String(puesto).length==4?String(puesto).substring(1,4):String(puesto).length==3?String(puesto).substring(0,3):'';
				console.log('Funcion SAp');
				console.log(FuncionSAP);		//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			console.log('Valores'+this.urlGastos+'consultaDetCuentasReimpresion?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0');

			let report:any={};
				report.IdEstado=datosCuentas.status;
				report.NoCuenta=datosCuentas.cuenta;
				report.FechaInf=datosCuentas.fechaInicio;
				report.FechaSup=datosCuentas.fechaFin;
				report.Puesto=datosCuentas.puesto;
				report.Auditor=0;
				console.log(report);

				//+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0

			//return this._http.get('http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/'+'consultaDetCuentasReimpresion?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto).map(res => res.json());
			//console.log('http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/');
			return this._http.post(this.urlGastosPV+'consultaDetCuentasReimpresion',report).map(res => res.json());

	}

	getDatosGenerales(noEmp: Number){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			//console.log('Valores'+this.urlGastos+'consultaDetCuentasReimpresion?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto=399'+'&Auditor=0');
				//var valor = {"empleado":"'"+noEmp+"'"};
				this.cadena={"noEmpleado": noEmp};

				let solEmpleado:any = {};

				//solEmpleado.noEmpleado = String (noEmp);
			    solEmpleado.empleado = String (noEmp);
				
					
					    //let observable:Observable<WrapperRespuesta>; 
						/*let headers = new Headers({ 'Content-Type': 'application/json' });
						headers.append('Accept', 'application/json');
						let options = new RequestOptions({ headers: headers });*/
						//	let head = new Headers({ 'Content-Type': 'application/json' });*/
				//console.log('Meaning of '+this.cadena + String(noEmp));

			//Se comenta el metodo de consulta de datos generales	
			//return this._http.post(this.urlGastos+'obtenerDatosGenerales',solEmpleado).map(res => res.json());   
            console.log('ruta en getDatosGenerales');
            console.log(this.urlGastosPV+'ObtenerDatosIniciales');



			return this._http.post(this.urlGastosPV+'ObtenerDatosIniciales',solEmpleado).map(res => res.json());   
			//return this._http.post('http://localhost:17806/ServicioGastos.svc/json/'+'TiendaDatosInicio',solEmpleado).map(res => res.json());   

	}

	getConsultaFiniquito(folio: Number){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			//console.log('Valores'+this.urlGastos+'consultaDetCuentasReimpresion?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto=399'+'&Auditor=0');

			let solFolioFBP:any = {};
				//solEmpleado.noEmpleado = String (noEmp);
			    solFolioFBP.foliofbp = String (folio);
			    console.log('ruta:'+this.urlGastosPV+'ConsultaFiniquito');
			    console.log('datos:'+solFolioFBP);
			//return this._http.get(this.urlGastos+'ConsultaFiniquito?folio='+folio).map(res => res.json());     

			return this._http.post(this.urlGastosPV+'ConsultaFiniquito',solFolioFBP).map(res => res.json());     
			//return this._http.post('http://localhost:17806/ServicioGastos.svc/json/'+'ConsultaFiniquito',solFolioFBP).map(res => res.json());     
 
	}



	getValidacionXML(xml: string,UUID: string ){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			//console.log(this.urlGastos+'ConsultaValidacionXML?xml='+xml);


				//this.cadena= JSON.stringify('"xml":"'+ xml+'"');

				//this.cadena= {"xml": 'Hola mundo'} ;
				
				    
			//	http://10.51.118.175:8082/ServicioGastos.svc/json/ConsultaValidacionXML
				let validaXML:any = {};				
			    validaXML.uid = UUID;
			    validaXML.xmlfactura = xml;

			           	console.log(this.urlGastosPV+'Validafactura'); 
			           	console.log('valor de parametro de getValidacionXML');
			           	console.log(validaXML); 

			
			//return this._http.get(this.urlGastos+'ConsultaValidacionXML?xml='+xml).map(res => res.json());

			return this._http.post(this.urlGastosPV+'Validafactura',validaXML).map(res => res.json());



	}


	getValidacionXMLPrueba(xml: string,cuenta:Number,canal:Number ){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
			//console.log(this.urlGastos+'ConsultaValidacionXML?xml='+xml);


				//this.cadena= JSON.stringify('"xml":"'+ xml+'"');

				//this.cadena= {"xml": 'Hola mundo'} ;
				
				    
			//	http://10.51.118.175:8082/ServicioGastos.svc/json/ConsultaValidacionXML
				let validaXML:any = {};				
			    //validaXML.uid = UUID;
			    validaXML.Cadenaxml = xml;
			    validaXML.Canal = canal;
			    validaXML.Cuenta = cuenta;

			           	console.log(this.urlGastosPV+'Validafactura'); 
			           	console.log('valor de parametro de getValidacionXML');
			           	console.log(validaXML); 

			
			//return this._http.get(this.urlGastos+'ConsultaValidacionXML?xml='+xml).map(res => res.json());

			return this._http.post(this.urlGastosPV+'ValidaArchivoXML',validaXML).map(res => res.json());

			

	}

	getDatosGastosSolicitud(datosGenerales:datosGenerales){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
				var FuncionSAP = String(datosGenerales.FuncionSAP).length==4?String(datosGenerales.FuncionSAP).substring(1,4):String(datosGenerales.FuncionSAP).length==3?String(datosGenerales.FuncionSAP).substring(0,3):'';
				console.log('Funcion SAp');
				console.log(FuncionSAP);
			console.log('Valores='+this.urlGastosPV+'ConsultaComponentesDeProsupuestoPorTienda?Anio='+datosGenerales.Anio+'&Mes='+datosGenerales.Mes+'&Canal='+datosGenerales.Canal+'&tienda='+datosGenerales.NumTienda+'&Moneda='+datosGenerales.Moneda+'&Proyecto='+'0'+'&Puesto='+FuncionSAP+'&Centro='+'480673'+'&noEmpl='+datosGenerales.NoEmpleado);

			//return this._http.get(this.urlGastos+'ConsultaComponentesDeProsupuestoPorTienda?Anio='+datosGenerales.Anio+'&Mes='+datosGenerales.Mes+'&Canal='+datosGenerales.Canal+'&tienda='+datosGenerales.NumTienda+'&Moneda='+datosGenerales.Moneda+'&Proyecto='+'0'+'&Puesto='+FuncionSAP+'&Centro='+'480673'+'&noEmpl='+datosGenerales.NoEmpleado).map(res => res.json());
			let report:any={};
				report.Anio=datosGenerales.Anio;  //Se comenta para pruebas
				//report.Anio=2017;  //Se comenta para pruebas
				report.Mes=datosGenerales.Mes;
				//report.Mes=12;
				report.Canal=datosGenerales.Canal;
				report.Tienda=datosGenerales.NumTienda;
				report.Moneda=datosGenerales.Moneda;
				report.Proyecto=0;
				report.Puesto=datosGenerales.FuncionSAPCorta;
				report.Ccostos=datosGenerales.Ceco ;//datosGenerales.Ccentro;
				console.log(report);
			    return this._http.post(this.urlGastosPV+'CentralComponenetesDePresupuestoPorTienda',report).map(res => res.json());

	}

	getDatosGastosSolicitudAutorizadas(datosGenerales:datosGenerales){

					//return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
				var FuncionSAP = String(datosGenerales.FuncionSAP).length==4?String(datosGenerales.FuncionSAP).substring(1,4):String(datosGenerales.FuncionSAP).length==3?String(datosGenerales.FuncionSAP).substring(0,3):'';
				console.log('Funcion SAp');
				console.log(FuncionSAP);
				let report:any={};
				report.anio=datosGenerales.Anio; //Se comenta para prueabas
				//report.anio=2017;
				/*Se debe de poner en 0 parar que se muestre todas las solicitudes por autorizar*/
				report.mes=0;
				//report.mes=12;
				report.canal=datosGenerales.Canal;
				report.tienda=datosGenerales.NumTienda;
				report.moneda=datosGenerales.Moneda;
				report.puesto=datosGenerales.FuncionSAPCorta;
				report.centro=datosGenerales.Ceco;//datosGenerales.Ccentro;
				console.log(report);
				console.log(this.urlGastosPV+'SolicitudesAutorizadas'); 
			
			return this._http.post(this.urlGastosPV+'SolicitudesAutorizadas',report).map(res => res.json());

			//return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'SolicitudesAutorizadas',report).map(res => res.json());

	}


	/*Validacion de la solicitud de gastos*/
	getValidacionDatosGastosSolicitud(datosGenerales:datosGenerales,egreso: egreso,datos: cuentasSolicitud){

				console.log('Servicio getValidacionDatosGastosSolicitud');

				console.log(egreso);
				
				let  ValidaAltaSolicitud:any={};  
					 ValidaAltaSolicitud.referencia=egreso.factura;
			         ValidaAltaSolicitud.pais=datosGenerales.PaisId;
			         ValidaAltaSolicitud.Nocuenta=egreso.noCuenta;
			         ValidaAltaSolicitud.disponible=datos.Disponible;
			         ValidaAltaSolicitud.montogasto=egreso.importe;
			         ValidaAltaSolicitud.piva=egreso.importeImpuesto;
			         ValidaAltaSolicitud.canal=datosGenerales.Canal;
			         ValidaAltaSolicitud.moneda=datosGenerales.Moneda;			
				console.log(ValidaAltaSolicitud);
				console.log(this.urlGastosPV+'ValidaAltaSolicitud');
			return this._http.post(this.urlGastosPV+'ValidaAltaSolicitud',ValidaAltaSolicitud).map(res => res.json());

	}

	getValidacionDatosGastosSolicitudFletero(datosGenerales:datosGenerales,fletero: fletero,datos: cuentasSolicitud){

				console.log('Servicio getValidacionDatosGastosSolicitud');

				console.log(egreso);
				
				let  ValidaAltaSolicitud:any={};  
					 ValidaAltaSolicitud.referencia=fletero.referencia;
			         ValidaAltaSolicitud.pais=datosGenerales.PaisId;
			         ValidaAltaSolicitud.Nocuenta=fletero.noCuenta;
			         ValidaAltaSolicitud.disponible=datos.Disponible;
			         ValidaAltaSolicitud.montogasto=fletero.importe;
			         ValidaAltaSolicitud.piva=0;
			         ValidaAltaSolicitud.canal=datosGenerales.Canal;
			         ValidaAltaSolicitud.moneda=datosGenerales.Moneda;			
				console.log(ValidaAltaSolicitud);
				console.log(this.urlGastosPV+'ValidaAltaSolicitud');
			return this._http.post(this.urlGastosPV+'ValidaAltaSolicitud',ValidaAltaSolicitud).map(res => res.json());

	}

getDetalleReimpresion(folio:Number){

				console.log('Servicio getValidacionDatosGastosSolicitud');

				console.log(egreso);
				
				let  reimpresion:any={};  
					 reimpresion.folioADN=folio;
			         
				
				
			//return this._http.post('http://10.51.119.93:8085/ServicioGastos.svc/json/'+'detalleSolicitudImpresion',reimpresion).map(res => res.json());
			return this._http.post(this.urlGastosPV+'detalleSolicitudImpresion',reimpresion).map(res => res.json());

	}



	setArchivoImprimir(datosGenerales:datosGenerales,reporteGastos:reporteGastos){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();

        var decimal = new CurrencyPipe("en-US");
        //var d = decimal.transform(reporteGastos.Importeletra, 'USD': true: '.2-2');
          var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);
				//this.cadena="";
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);


									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Reimpresión de Ticket</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +reporteGastos.FolioSAP  +"</TEXT>                           "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+reporteGastos.Parametro+": " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +reporteGastos.Empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

				console.log(this.cadena);

			//alert(this.cadena); 10.54.28.114  urlPrint http:localhost:9001/WSDesTecAppsLocal/GenerarTickets
			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}




	setArchivoImprimirSolicitud(datosGenerales:datosGenerales,reporteGastos:reporteGastos,referencia:string){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
	     var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);


									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gasto Autorizado</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +reporteGastos.FolioSAP  +"</TEXT>                           "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+referencia+" : " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +reporteGastos.Empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

			//alert(this.cadena); 10.54.28.114
			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}


	setArchivoImprimirSolicitud1025(datosGenerales:datosGenerales,reporteGastos:reporteGastos,referencia:string){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
         var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);

				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);


									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gasto Autorizado</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +reporteGastos.FolioSAP  +"</TEXT>                           "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+referencia+" : " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +reporteGastos.Empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

			//alert(this.cadena); 10.54.28.114
			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}

setArchivoImprimirFiniquito(datosGenerales:datosGenerales,reporteGastos:reporteGastos){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";

	     var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);


									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Ticket de Finiquito</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio FBP: " +reporteGastos.FolioFBP  +"</TEXT>                           "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +reporteGastos.Empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

			//alert(this.cadena);
			//return this._http.post('http://10.51.118.175:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

				//this.urlPrint

				//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
				return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());
				
			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}


	setArchivoImprimirIngreso(datosGenerales:datosGenerales,reporteGastos:reporteGastos){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);

 var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);

									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">Gastos pendientes de Comprobar en efectivo</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Ticket para Ingreso en Caja</TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" +reporteGastos.FolioSAP  +"</TEXT>                           "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +reporteGastos.Empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

			//alert(this.cadena); 10.54.28.114
			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}

		setArchivoImprimirEgresoADN(datosGenerales:datosGenerales,reporteGastos:reporteGastos){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);
				 var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);

				var concepto= "";
									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														
														/*"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Referencia: BANCO AZTECA ,S.A.</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">673-BK01-EKT114612V-0022526115-Apr 14-2015 7:19PM</TEXT>                     "+	
														"<TEXT></TEXT>                                                                                                                         "+	*/
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Egreso en Caja</TEXT>                     "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gasto Pagado</TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +reporteGastos.FolioSAP  +"</TEXT>                           "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +reporteGastos.Empleado  +"</TEXT>                  ";	
														if (reporteGastos.NoCuenta===1025 || reporteGastos.NoCuenta===604910 || reporteGastos.NoCuenta===60491 ){
														concepto="<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Concepto : EXTRACCION DE BOLETAS"   +"</TEXT>                  ";		
														}														

														this.ticket=this.ticket+concepto+"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operacón</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

			//alert(this.cadena); 10.54.28.114
			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}


		setArchivoImprimiringresarADN(datosGenerales:datosGenerales,reporteGastos:reporteGastos){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);

				 var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);

var folioSap = reporteGastos.FolioSAP !=0 ? String(reporteGastos.FolioSAP):'N/A';

				var concepto= "";
									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														/*"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Referencia: BANCO AZTECA ,S.A.</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">673-BK01-EKT114612V-0022526115-Apr 14-2015 7:19PM</TEXT>                     "+	
														"<TEXT></TEXT>                                                                                                                         "+	*/
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Ingreso en Caja</TEXT>                     "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gasto Pagado</TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +folioSap  +"</TEXT>                           "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +reporteGastos.Empleado  +"</TEXT>                  ";	
														if (reporteGastos.NoCuenta===1025 || reporteGastos.NoCuenta===604910 || reporteGastos.NoCuenta===60491 ){
														concepto="<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Concepto : EXTRACCION DE BOLETAS"   +"</TEXT>                  ";		
														}														

														this.ticket=this.ticket+concepto+"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

			//alert(this.cadena); 10.54.28.114
			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}

	setArchivoImprimirEgresoCifra(datosGenerales:datosGenerales,reporteGastos:reporteGastos,cajaDectalleFolios:CajaDetalleFolios){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);

 var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);

 var empleado= cajaDectalleFolios.CifraEmpleadoDestino!=null?cajaDectalleFolios.CifraEmpleadoDestino:reporteGastos.Referencia;
console.log('No de Empleado en impresion ');
console.log(empleado);  
var folioSap = reporteGastos.FolioSAP !=0 ? String(reporteGastos.FolioSAP):'N/A';

									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">Egreso en Caja de Cifra Control</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Operó: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gastos pagado </TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +folioSap  +"</TEXT>                           ";
														
														var paso="";
														if (cajaDectalleFolios.CifraControl!=''){
															paso="<TEXT></TEXT>                                                                                                                         "+
															"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cifra de Control: " +cajaDectalleFolios.CifraControl  +"</TEXT>                           ";
															this.ticket=this.ticket+paso;
														}

														


														this.ticket=this.ticket+"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " +reporteGastos.Referencia  +"</TEXT>                          "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">Nombre de Empleado : " +cajaDectalleFolios.NombreEmpleado +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    "+	
														"<TEXT></TEXT>                                                                                                                         "+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }

				        /*,
				        {
				            "Aplicacion": "TESTER",
				            "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
				            "NoCopias": 1
				        }*/



				    ]
				};

			//alert(this.cadena); 10.54.28.114
			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}

	setArchivoImprimirEgresoCifra925(datosGenerales:datosGenerales,reporteGastos:reporteGastos,cajaDectalleFolios:CajaDetalleFolios){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);

 var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);

var empleado= cajaDectalleFolios.CifraEmpleadoDestino!=null?cajaDectalleFolios.CifraEmpleadoDestino:reporteGastos.Referencia;
console.log('No de Empleado en impresion ');
console.log(empleado);
var folioSap = reporteGastos.FolioSAP !=0 ? String(reporteGastos.FolioSAP):'N/A';

									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
													/*	"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Referencia: BANCO AZTECA ,S.A.</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">673-BK01-EKT114612V-0022526115-Apr 14-2015 7:19PM</TEXT>                     "+	
														"<TEXT></TEXT>                                                                                                                         "+	 */
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">Egreso en Caja</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gastos pagado </TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +folioSap  +"</TEXT>                           "+															
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Nombre de Empleado : " +"</TEXT>                  "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" +cajaDectalleFolios.NombreEmpleado +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        	"+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }      

				    ]
				};

			//alert(this.cadena); 10.54.28.114

			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}

	setArchivoImprimirEgresoCifra1225(datosGenerales:datosGenerales,reporteGastos:reporteGastos,cajaDectalleFolios:CajaDetalleFolios){
				 var datePipe = new DatePipe("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
 var decimal = new CurrencyPipe("en-US");
				//this.cadena="";
				console.log('Valor de reporteGastos dentro de setArchivoImprimir'+ reporteGastos);
				console.log('Valor de datosGenerales dentro de setArchivoImprimir'+ datosGenerales);

 var d = decimal.transform(reporteGastos.ImporteGasto);
          //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
          console.log('valor decimal');
          console.log(d);

var empleado= cajaDectalleFolios.CifraEmpleadoDestino!=null?cajaDectalleFolios.CifraEmpleadoDestino:reporteGastos.Referencia;
console.log('No de Empleado en impresion ');
console.log(empleado);
var folioSap = reporteGastos.FolioSAP !=0 ? String(reporteGastos.FolioSAP):'N/A';

									this.ticket="<TICKET>"+
														//	"<TEXT></TEXT>                                                                                                                         "+	
													//"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
													/*	"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Referencia: BANCO AZTECA ,S.A.</TEXT>               "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">673-BK01-EKT114612V-0022526115-Apr 14-2015 7:19PM</TEXT>                     "+	
														"<TEXT></TEXT>                                                                                                                         "+	 */
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               "+	
														//"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">Egreso en Caja de Cifra Control</TEXT>                     "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :"+datosGenerales.NumTienda+" "+datosGenerales.NomTienda +"</TEXT>              "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: "+datosGenerales.NomEmpCorto+" en "+datosGenerales.estacion +" No. Op:"+reporteGastos.TranNo +"</TEXT>         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">"+datePipe.transform(fecha, 'dd-MMM-yyyy hh:mm:ss')+                 " </TEXT>                        "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               "+	
														"<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           "+			
													//	"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gastos pagado </TEXT>             "+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: "+reporteGastos.NoCuenta+" "+reporteGastos.Descripcion +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														//"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+datosGenerales.SignoMoneda.trim()+" "+reporteGastos.ImporteGasto+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: "+d+" </TEXT>                             "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">"+reporteGastos.Importeletra                    +"</TEXT>                             "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN: "+reporteGastos.FolioAdn  +" </TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP: " +folioSap  +"</TEXT>                           "+															
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Número de Empleado : " +empleado  +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Nombre de Empleado : " +"</TEXT>                  "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" +cajaDectalleFolios.NombreEmpleado +"</TEXT>                  "+	
														"<TEXT></TEXT>                                                                                                                         "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   "+	
														"<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " +reporteGastos.Justificacion  +"</TEXT>                              "+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplicó la Operación</TEXT>                        	"+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" +datosGenerales.NomEmpleado  +"</TEXT>       	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           "+			
														"<TEXT></TEXT>                                                                                                                         	"+	
														"<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    	"+	
														"<TEXT></TEXT>                                                                                                                         	"+	
													//"</BOX>                                                                                                                                    "+	
													"</TICKET>                                                                                                                                 ";

											//alert(this.ticket);

				this.cadena=	
				{
				    "ListaTickets": [
				        {
				            "Aplicacion": "TESTER",
				            //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
				            "Contenido": this.ticket,         
				            "NoCopias": 1
				        }      

				    ]
				};

			//alert(this.cadena); 10.54.28.114

			//return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
			return this._http.post(this.urlPrint+'/GenerarTickets',this.cadena).map(res => res.json());

			//return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());

	}


	getIFolioImpresion(id: number){
									//idticket
								 //http://10.51.118.175:9001/WSDesTecAppsLocal/ImprimirTickets?idticket=222
								 this.cadena= {"idticket": id};
			//return this._http.post('http://10.51.118.175:9001/WSDesTecAppsLocal/ImprimirTickets?idticket='+id,this.cadena).map(res => res.json());

			return this._http.post('http://localhost:9001/WSDesTecAppsLocal/ImprimirTickets?idticket='+id,this.cadena).map(res => res.json());

	}

	getImagen(id: number){
		//http://10.51.118.175:9001/WSDesTecAppsLocal/PrevisualizarTickets?IdTicket=101
		this.cadena= {"idticket": id};
			//return this._http.post('http://10.51.118.175:9001/WSDesTecAppsLocal/PrevisualizarTickets?idticket='+id,this.cadena).map(res => res.json());
			return this._http.post('http://localhost:9001/WSDesTecAppsLocal/PrevisualizarTickets?idticket='+id,this.cadena).map(res => res.json());

	}



	addProducto(producto: Producto){
		let json = JSON.stringify(producto);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'productos', params, {headers: headers})
						 .map(res => res.json());
	}

	editProducto(id, producto: Producto){
		let json = JSON.stringify(producto);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'update-producto/'+id, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteProducto(id){
		return this._http.get(this.url+'delete-producto/'+id)
						 .map(res => res.json());
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject)=>{
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append('uploads[]', files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}


	/*Metodos servicio para los modulo de egreso*/	
	getConsultaSolicitudesPorCifraControl(datosGenerales: datosGenerales,cifraControl: string){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		
		
		console.log('valor de datos getConsultaSolicitudesPorCifraControl');
		console.log(datosGenerales);
		console.log(cifraControl);
		let consulta:any = {};
			consulta.Anio=datosGenerales.Anio;
			consulta.CifraControl=cifraControl;       
        
        console.log(consulta);     

		return this._http.post(this.urlGastosPV+'ConsultaSolicitudPorCifraControl',consulta).map(res => res.json());	     
	}

getConsultaValidacionEgreso(folio:Number,refempleado:Number, tipoOperacion:Number,cifraControl: string){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		
		
		console.log('valor de datos getConsultaSolicitudesPorCifraControl');
		console.log(datosGenerales);
		console.log(cifraControl);
		let consulta:any = {};
			consulta.folio=folio;
			if(tipoOperacion==2){
				consulta.refempleado=this.datosGenerales.NoEmpleado;
			}else{
				consulta.refempleado=refempleado;
			}
			
			consulta.tipoOperacion=tipoOperacion;
			consulta.cifraControl=cifraControl;
        
        console.log(consulta);     

		return this._http.post(this.urlGastosPV+'ValidaEgresoCaja',consulta).map(res => res.json());	     


	}

getConsultaValidacionEgreso925(folio:string,refempleado:Number, tipoOperacion:Number,cifraControl: string){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		
		
		console.log('valor de datos getConsultaSolicitudesPorCifraControl');
		console.log(datosGenerales);
		console.log(cifraControl);
		let consulta:any = {};
			consulta.folio=folio;
			consulta.refempleado=refempleado;
			consulta.tipoOperacion=tipoOperacion;
			consulta.cifraControl=cifraControl;
        
        console.log(consulta);     

		return this._http.post(this.urlGastosPV+'ValidaEgresoCaja',consulta).map(res => res.json());	     

		
	}


	getConsultaValidacionComprobacion1025(folio:string,nofolioSAp:string){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		
		
		console.log('valor de datos getConsultaValidacionComprobacion1025');
		
		let consulta:any = {};
			consulta.folioADN=folio;
			consulta.nofolioSAp=nofolioSAp;
		
        
        console.log(consulta);     

		return this._http.post(this.urlGastosPV+'ValidaComprobacion1025',consulta).map(res => res.json());	     

		
	}


	getConsultaActualizacionComprobacion1025(folio:string,nofolioSAp:string,estadosolicitud:string, datosGenerales: datosGenerales,){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		
		
		console.log('valor de datos getConsultaActualizacionComprobacion1025');
		
		let consulta:any = {};
			consulta.folioADN=folio;
			consulta.nofolioSAp=nofolioSAp;
			consulta.estadosolicitud=estadosolicitud;
			consulta.estacionTrabajo=datosGenerales.estacion;
			consulta.empleado=datosGenerales.NoEmpleado;
		
        
        console.log(consulta);     

		return this._http.post(this.urlGastosPV+'ActualizaSolicitud',consulta).map(res => res.json());	     

		
	}


	getMovimientocaja(objCajaDet:CajaDetalleFolios,tipoOperacion:Number, datosGenerales: datosGenerales){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		console.log(datosGenerales);
		 
		console.log('valor de datos getMovimientocaja');
		
		let consulta:any = {};
			consulta.objCajaDet=objCajaDet;
			consulta.tipoOperacion=tipoOperacion;
			consulta.estacionTrabajo=datosGenerales.estacion;
			consulta.empleado=datosGenerales.NoEmpleado;
		
        
        console.log(consulta);     

		return this._http.post(this.urlGastosPV+'Movimientocaja',consulta).map(res => res.json());	     

		
	}


	/*Metodo para la consulta de los saldos */
	getSaldoscaja(objCajaDet:CajaDetalleFolios,tipoOperacion:Number, datosGenerales: datosGenerales){
		
		//var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;

		console.log(datosGenerales);
		 
		console.log('valor de datos getMovimientocaja');
		
		let consulta:any = {};
			consulta.Monto=objCajaDet.ImporteGasto;
			consulta.Divisa=1;
			consulta.estacionTrabajo=datosGenerales.estacion;
			consulta.Usuario=datosGenerales.NoEmpleado;
		
        
        console.log(consulta);     

		return this._http.post(this.servicioCaja,consulta).map(res => res.json());	     

		
	}



}
