import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosCuenta} from '../models/DatosCuenta';
import { ProductoService } from '../services/producto.service';
import { cuenta } from '../models/CuentaGastos';
import {reporteGastos} from '../models/reporteGastos';
import {DialogCargar} from '../components/carga';
import {egreso} from '../models/egreso';
import {datosGenerales} from '../models/datosGenerales';
import {parseString} from "xml2js";
import {datosGeneralesServicio} from '../services/datosGeneralesServicio';
import  {RequiereXML} from '../models/RequiereXML';
import {validaFacturacion} from '../models/validaFacturacion';
import {cuentaGastosXML} from '../models/cuentaGastosXML';
import {DialogOverviewExampleDialog}  from '../components/message';
import {impresion} from '../models/impresion';
import { DecimalPipe } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GLOBAL } from '../services/global';

import { ViewChild, ElementRef } from '@angular/core';

declare var jquery:any;
declare var $ :any;
declare var CJSGlobalObject: any;

export class LoggerGastos implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  guardarLog(mensaje) {
    try{
      CJSGlobalObject.JSCallBitacora("GTO Log: " + mensaje);
    }catch(e){
      console.error(e.message);
    }
  }
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-solicitudes',
  templateUrl: '../views/dialog-solicitud.html',
})
export class DialogDataSolcitud {

  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public dialogRefCarga;
   public datosGenerales: datosGenerales;
   public requiereXML:RequiereXML
   public cuentaGastosXML :cuentaGastosXML;
  public clicked = false;//javi


   mensaje: any;
    error : boolean=false;
    comentario: string;
    titulos : string = "Alerta";
  constructor(public dialog: MatDialog,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialogCarga: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {

         console.log('variable valor en el constructor'+ this.valor);
  }

 
 

  openDialogCargar(): void {
     
    this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
      width: '160px',
     disableClose:true//javi
     
    }
    
    );
    
    this.dialogRefCarga.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.dialog.open(DialogDataSolcitudDialog, {
                                                      width: '700px',
                                                      data: {
                                                        animal: 'panda',
                                                        carga: this.valor,
                                                        requiere:this.requiereXML,
                                                        descp: this.requiereXML,
                                                        datosGenerales: this.datosGenerales
                                                      },
                                                      disableClose:true
                                                      
                                                    });
     // this.animal = result;
     this.clicked=false;//
    });
  }


 closeDialogCargar(): void {

  
        this.dialogRefCarga.close();
       

    }
   
       
       
    

    openDialogPrueba(){
      
      this.openDialogCargar();
      
 this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
 console.log('paso'+this.datosGenerales);

 console.log('variable valor '+ this.valor.Cuenta);
              /*Conulta del servicio*/
                             this._productoService.getCuentasConXML(this.datosGenerales,this.valor.Cuenta).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                            
                                            //  this.closeDialogCargar();

                                           // this.closeDialogCargar();//Javi

                                              console.log(result);

                                              console.log('Paso el valor');              
                                              //this.cuentaGastos = result.data.detCuentas;
                                              this.requiereXML = result.DetalleTiendaCuentaResult;
                                              console.log(this.requiereXML);
                                              console.log('cuentaGastosXML');
                                              this.cuentaGastosXML = result.detCuentaGastos;
                                              console.log(this.cuentaGastosXML);
                                                if(result.DetalleTiendaCuentaResult.EsError===false){
                                                  //
                                                      this.closeDialogCargar();
                                                    
                                                }else{
                                                  this.closeDialogCargar();//javi
                                                  console.log('Error al  cargar los datos');//javi
                                                        this.error=true;
                                                        this.comentario= result.DetalleTiendaCuentaResult.Mensaje;
                                                        this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
                                                        this.openDialogAlerta();
                                                         
                                                }

                                              

                                            }else{
                                           //   this.closeDialogCargar();
                                              console.log('Entro');
                                              //this.ReporteGastos = result.detDetCuentasReimpresion;
                                              console.log('Entro');
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
       }

openDialogAlerta(): void {

    this.error=false;
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

   this.clicked=false;//javi
  }


  openDialog() {
    
       
      console.log('getReporteGastos');
     // console.log(this.cuentas);

          this.dialog.open(DialogDataSolcitudDialog, {
             width: '400px',
                data: {
                  animal: 'panda',
                  carga: this.valor,
                  cuentaGastos : this.ReporteGastos,
                  desc: this.cuentas.descEstatus
                },
                disableClose:true
              });

        this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
        this._productoService.getDetalleCuentasReimpresion(this.cuentas,this.datosGenerales.FuncionSAP).subscribe(
          result => {
                 console.log('RESULTADO');
                 console.log(result);
            if(result.code != 200){
              
            //  this.closeDialogCargar();

              console.log(result);

              console.log('Paso el valor');              
              //this.cuentaGastos = result.data.detCuentas;
              this.ReporteGastos = result.detDetCuentasReimpresion;
              console.log(this.ReporteGastos);

                        /*Conulta del servicio*/
                             this._productoService.getCuentasConXML(this.datosGenerales,this.valor.cuenta).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                            //  this.closeDialogCargar();

                                              console.log(result);

                                              console.log('Paso el valor');              
                                              //this.cuentaGastos = result.data.detCuentas;
                                              this.requiereXML = result.detReporteGastos;
                                              console.log(this.requiereXML);



                                              this.dialog.open(DialogDataSolcitudDialog, {
                                                data: {
                                                  animal: 'panda',
                                                  carga: this.valor,
                                                  cuentaGastos : this.ReporteGastos,
                                                  desc: this.cuentas.descEstatus,
                                                  requiere:this.requiereXML,
                                                  descp: this.cuentaGastosXML
                                                },
                                                disableClose:true
                                              });

                                            }else{
                                           //   this.closeDialogCargar();
                                              console.log('Entro');
                                              //this.ReporteGastos = result.detDetCuentasReimpresion;
                                              console.log('Entro');
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 

            }else{
           //   this.closeDialogCargar();
              console.log('Entro');
              this.ReporteGastos = result.detDetCuentasReimpresion;
              console.log('Entro');
              console.log(this.ReporteGastos);
            }

        },
        error => {
          console.log(<any>error);
        }



    );

    


  }


}

@Component({

  selector: 'dialog-data-reimpresion-dialog',
  templateUrl: '../views/dialog-data-solicitud-dialog.html',
  providers: [    
    ProductoService,
  ],
})
export class DialogDataSolcitudDialog {
   public cuentas : datosCuenta;
   public egresos : egreso;
   public titulo : string ;
   public filesToUpload;
   public xmltexto : any;
   public comprobantes : any;
   public Addenda : any;
   public Complemento : any;
   public Conceptos : any;
   public Emisor : any;
   public Impuestos : any;
   public Receptor : any;
   public requiereXML: RequiereXML;
   public pasoEgreso: any ;
   public xml: string;
   public validaFacturacion: validaFacturacion;

   public descrip: string ;
   public mostrarFactura: boolean ;
   public habilitarComponenetes: boolean ;
   public requiredValidacion:boolean;
   public requiredValidacionJust:boolean;
   public mensaje:string;
   public pantalla:boolean;
   public boton:boolean;
   public habilitarAgregar:boolean;
   public formProducto:any;
   public valorfacturacion:Number;
   public selectedValue:any;
   public ticket: reporteGastos;
   public bse64 : string;
   public imagen:any;
   public imprimirCorrectamente : boolean=true;
   public impresion : impresion;
   public noImpresion: number;
   public MessageError: boolean=false;
   public refereciaTienda:string;
   public PantallaImprimir :boolean= false;
   public retornar:boolean=false;
   public banderafactura:boolean=true;
   public siniestro:boolean=false;
   public valorFactura:string="";
   public detalleFactura:boolean=false;
   public datosGenerales :datosGenerales;
   public cabecero:boolean=true;
   public cadenaXML  : string ; 
   public contieneIVA : any;
   public SubTotalPA : any;
   public ImpuetoPA : any;
   public detIva : any;
   public selectIva : any;
   public dialogRefCarga;

   


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService2: ProductoService,private datosGeneralesServicios: datosGeneralesServicio, public dialog: MatDialog, public dialogCarga: MatDialog,public _http: Http,) {
        

        console.log('Entro en el constructor DialogDataSolcitudDialog');
               this.egresos=  new egreso(0,'','','','','',0);
            this.egresos.descCuenta=data.requiere.TiendaCuentas.NoCuenta+' '+data.requiere.TiendaCuentas.Descripcion;
            this.egresos.noCuenta=data.requiere.TiendaCuentas.NoCuenta;
           /* this.egresos.importe=0.00;
            this.egresos.factura="0";*/
            this.titulo="Egresar";     

              
            this.requiereXML=data.requiere;
            console.log(this.requiereXML);
            console.log(this.egresos);
          // console.log(this.requiereXML.TiendaCuentas);

            this.descrip= data.requiere.TiendaCuentas.Parametro;
            this.habilitarComponenetes=false;
            this.requiredValidacion=true;
            this.requiredValidacionJust=true;

            this.refereciaTienda=data.requiere.TiendaCuentas.Parametro;
            console.log('Mostrar el valor de la factura' +data.requiere.TiendaCuentas.RequiereXML);
            console.log('Mostrar el valro data.requiere.TiendaCuentas.Parametro '+data.requiere.TiendaCuentas.Parametro );
            console.log('Mostrar el valro data.requiere.TiendaCuentas.Parametro '+data.requiere.TiendaCuentas.Parametro );
            this.mostrarFactura=data.requiere.TiendaCuentas.RequiereXML===2 || data.requiere.TiendaCuentas.RequiereXML=== 1?true:false;
            //Validacion si el parametro 
            if (this.data.datosGenerales.fiActivaXML===1){
                console.log('this.data.datosGenerales.fechaParam');
                console.log(this.data.datosGenerales.fechaParam);


                  var fechaParam = new Date(this.data.datosGenerales.fdfechaXML);
                  var fechaActual = new Date();
                          
                   console.log('data.requiere.TiendaCuentas.RequiereXML');
                   console.log(data.requiere.TiendaCuentas.RequiereXML);
                 
                  console.log('Primer valor dehabilitarComponenetes'+this.habilitarComponenetes);
                  this.requiredValidacion=data.requiere.TiendaCuentas.RequiereXML===1?true:data.requiere.TiendaCuentas.RequiereXML===2?false:false;
                  this.valorfacturacion=data.requiere.TiendaCuentas.Parametro.trim()==='Factura'?1:0;
                    if (data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado' || data.requiere.TiendaCuentas.Parametro.trim()==='No Siniestro'){
                      console.log('No Empleado'+this.habilitarComponenetes);
                          this.habilitarComponenetes=false;
                          this.requiredValidacion=true;
                          
                    }
                     
                     if (data.requiere.TiendaCuentas.Parametro.trim()!='Factura'){
                       console.log('Diferente de Factura'+this.habilitarComponenetes);
                       this.mostrarFactura=false;
                     }else if (data.requiere.TiendaCuentas.Parametro.trim()==='Factura'){
                          console.log('Igual de Factura');
                        console.log('igual de Factura'+this.habilitarComponenetes);
                          console.log('valor de fechaActual' +fechaActual.getTime())
                          console.log('valor de fechaParam' +fechaParam.getTime())
                          console.log(fechaActual.getTime()<=fechaParam.getTime())

                          if (fechaActual.getTime()<=fechaParam.getTime() ) {
                            console.log('Se matendra habilitado los campos de la factura');
                            this.habilitarComponenetes=false;
                             console.log('valor de this.habilitarComponenetes');
                            console.log(this.habilitarComponenetes);
                          }else{
                               this.habilitarComponenetes=data.requiere.TiendaCuentas.RequiereXML===1?false:data.requiere.TiendaCuentas.RequiereXML===2?true:false;
                          }
                     }

                           

            }else{

                  this.habilitarComponenetes=data.requiere.requiereXML===1 || data.requiere.requiereXML===2 ?false:false;
                  this.requiredValidacion=data.requiere.TiendaCuentas.RequiereXML===1 || data.requiere.TiendaCuentas.RequiereXML===2?true:false;
                  this.valorfacturacion=data.requiere.TiendaCuentas.Parametro.trim()==='Factura'?0:0;
                   if (data.requiere.TiendaCuentas.Parametro.trim()!='Factura'){
                       this.mostrarFactura=false;
                   }else{ //Se agrego esta validacion al ultimo

                         this.mostrarFactura=false;
                   }

                   this.contieneIVA= false;
            }
            


            this.pantalla=false;
            this.titulo='Solicitud de Gastos';
            this.boton=true;
            this.habilitarAgregar=false;
            
            console.log('El valor del parametro si requiere factura'+this.valorfacturacion);

             /*Mensaje para a desplegar para la cuenta de Siniestos*/
             if (data.carga.Cuenta===620070)
             {
                    this.siniestro=true;
                     var CECO= this.data.datosGenerales.Ceco.substring(2, 6);

                    this.titulo="Alerta";
                    this.mensaje= 'Esta a punto de realizar una solicitud de Gastos de Siniestros por regla de negocio este gasto se cargará al prefijo 39'+CECO;
                    this.pantalla=true; 
                    this.PantallaImprimir=false;
                    this.boton=false;
                    this.retornar=true;                         

             }
             //604910 || egresos.noCuenta==60491
              if (data.carga.Cuenta===1025 || data.carga.Cuenta===604910 || data.carga.Cuenta===106049125)
             {
                this.egresos.concepto='EXTRACCION DE BOLETAS';
             }



/*Metodo para cargar el iva en frontera*/
if (data.datosGenerales.esfrontera){
  this.detIva = [ data.requiere.TiendaCuentas.ValorImpuesto,  data.requiere.TiendaCuentas.ValorImpuestofrontera];
  // this.selectIva =   data.requiere.TiendaCuentas.ValorImpuesto;
  this.selectIva = "";

  
  //$(".pais option:first").attr('selected','selected'); 
}


  /*$('#importes').val('');
           
            $('#jus').val('');*/


            this.requiredValidacion=false;
             $('#facturas').val('');

  }
  
  

  openDialogCargar(): void {
 
     this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
      width: '160px',
      data: { mensaje: this.mensaje },
      disableClose:true
    });

    this.dialogRefCarga.afterClosed().subscribe(result => {
		/*
		if (this.error == true) {
		  this.openDialogMensaje();
		}
		else {
			this.openDialogIngreso();
		}
		*/
    });
  }
  
 closeDialogCargar(): void {

        this.dialogRefCarga.close();
        
 
    }


cambioDeIva(iva){
  console.log('valor de iva'+iva);
  this.data.requiere.TiendaCuentas.ValorImpuesto = Number(iva);
   console.log("(cambioDeIva) El iva seleccionado es "+ this.data.requiere.TiendaCuentas.ValorImpuesto);
}

 
 
 calculoImpuesto(activar){

     this.contieneIVA=activar;



     console.log("El valor de "+this.selectIva);

     if (this.data.datosGenerales.esfrontera){

 if(this.selectIva){
          this.data.requiere.TiendaCuentas.ValorImpuesto = Number(this.selectIva);
       }

       if (this.selectIva.porcentaje){
         this.data.requiere.TiendaCuentas.ValorImpuesto = Number(this.selectIva.porcentaje);
        // this.selectIva = this.selectIva.porcentaje;
       }

if (this.selectIva==""){
   this.data.requiere.TiendaCuentas.ValorImpuesto = Number(0);
}

      //this.data.requiere.TiendaCuentas.ValorImpuesto = Number(this.selectIva);
      console.log("El iva seleccionado es "+ this.data.requiere.TiendaCuentas.ValorImpuesto);

     }

     console.log('Entro en el metodo de calculoImpuesto')

     console.log('El valor del campo this.contieneIVA ' +this.contieneIVA)

     if (this.contieneIVA){ 

       if (String(this.egresos.importe).length >0 )      {
           var decimalPipe = new DecimalPipe("en-US");                                                         
           this.SubTotalPA = 0;
           console.log("importe" +this.egresos.importe) 
           console.log("Impuesto" +this.data.datosGenerales.ValorImpuesto) 

             console.log(this.data.requiere);
              console.log('this.data.requiere calculoImpuesto');
           
           this.SubTotalPA = Number(this.egresos.importe) / (1+Number(this.data.requiere.TiendaCuentas.ValorImpuesto));
          
           console.log('this.SubTotalPA');
           console.log(Number(this.SubTotalPA)-Number(this.egresos.importe));
           this.ImpuetoPA = this.SubTotalPA * (Number(this.data.requiere.TiendaCuentas.ValorImpuesto));
           this.egresos.importeImpuesto=Number(this.ImpuetoPA);   


             console.log('this.ImpuetoPA');
           console.log(this.ImpuetoPA);
           var SubTotalPA = decimalPipe.transform(Number(this.SubTotalPA), ".2-2");           
           var ImpuetoPA = decimalPipe.transform(Number(this.ImpuetoPA), ".2-2"); 
             
           this.valorFactura="Subtotal: " +SubTotalPA+"  "+
                              this.data.datosGenerales.Impuesto+": " +ImpuetoPA;  


           
                 

           this.detalleFactura= true;
       }else{
         this.valorFactura="";
          this.egresos.importeImpuesto=0;   
             
           this.contieneIVA=false;
       }

         

     }else{
           this.detalleFactura= false;
           this.contieneIVA=false;
            this.egresos.importeImpuesto=0;   

     }

 }

ngAfterViewInit(){

    console.log('Entro en el metodo de ngAfterViewInit');

    console.log('Se elimina el valor de factura');

     console.log('Se elimina el valor de importe antes de cambia');
     console.log($('input:text[name=importe]').val());
     

    $('input:text[name=factura]').val('');
    $('input:text[name=importe]').val('');
    $('#importes').val('');
    //$("#importes").val('256');
    console.log('Se elimina el valor de importe despues de cambia');
     console.log($('input:text[name=importe]').val());

}


myMethod(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
          console.log('this.contieneIVA');
          console.log(this.contieneIVA);
    
    return (key <= 13 || (key >= 48 && key <= 57) || key == 46);

}

myMethod2(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
    if (this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura'){
      return (key <= 13 || (key >= 48 && key <= 57) || (key >= 97 && key <= 122) || (key >= 65 && key <= 90) );
    }else  if (this.data.requiere.TiendaCuentas.Parametro.trim()!='Factura'){
      return (key <= 13 || (key >= 48 && key <= 57) );
    }
    

}


  fileChangeEvent(fileInput: any){


    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('Cargada de los archivos fileChangeEvent');
    console.log(this.filesToUpload);

    console.log('egresos antres');
    console.log(this.egresos);

    this.cargarArchivo(this.filesToUpload);

    console.log('Los comprobantes');
    console.log(this.comprobantes);

    /*Cambio de la bandera de factura*/
     if (this.data.datosGenerales.fiActivaXML===1){
               

                if(this.data.requiere.TiendaCuentas.RequiereXML===1 && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=true;
                }
                else if (this.data.requiere.TiendaCuentas.RequiereXML===2 && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=true;

                }

                  
     }else{

                  this.banderafactura=false;
     }




//this.banderafactura=false;
    

    
    console.log('valor de la banderafactura'+this.banderafactura);

    try{

        //console.log(fileInput.target.files.mozFullPath);
        console.log('Ruta del archivo');
        console.log(fileInput.target.value);
   }
   catch(err) {
       console.log('Fallo la carga ');

    }
        
    

  }

    onSubmit(){
          

  }

  validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

     // if (this.egresos.importe>0 && this.egresos.factura.length>0 && form){
      if (Number(this.egresos.importe)>0 && this.egresos.factura.length>0 && form){
            this.habilitarAgregar=true;

            if (this.data.datosGenerales.esfrontera ){
              console.log(this.egresos.importeImpuesto);
                if (this.egresos.importeImpuesto>0 && this.contieneIVA){
                    this.habilitarAgregar=true;
                    console.log('this.habilitarAgregar '+ this.habilitarAgregar);
              }else if (this.egresos.importeImpuesto===0 && this.contieneIVA){
                console.log('this.habilitarAgregar '+ this.habilitarAgregar);
                      this.habilitarAgregar=false;
              }

              
              
            }


      }else{
          this.habilitarAgregar=false;

      }

        return this.habilitarAgregar;
  }

  validaImporte(valor):boolean{

var salida:boolean=true;
        
 console.log('validar habilitarComponenetes'+this.habilitarComponenetes +' valor='+valor);
        if (this.habilitarComponenetes){
           
            salida=Number(this.egresos.importe)>=0 ?true:false;


        }else{
            salida=Number(this.egresos.importe)>=0 && valor?true:false;

        }
        console.log('validar importe'+salida);

        return salida;

  }

  validaFactura(valor):boolean{

var salida:boolean=true;
        
 console.log('validar habilitarComponenetes'+this.habilitarComponenetes +' valor='+valor);
        if (this.habilitarComponenetes){
           
            salida=this.egresos.factura.length>0 ?true:false;


        }else{
            salida=this.egresos.factura.length>0 && valor?true:false;

        }
        console.log('validar factura'+salida);

        return salida;

  }

  cargarArchivo(filesToUpload){
       
       var reader = new FileReader();


       var self = this;

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
                          return function(e) {
                           console.log('Entro con el componente '+theFile.name);
                          
                            self.xml = e.target.result;
                          
                           console.log('Carga del xml cargarArchivo');
                           console.log(self.xml);                           
                               //        self.consultaValidacionXML(self.xml);

                               self.consultaValidacionXMLPrueba(self.xml);                            
                            
                            };
                      })(filesToUpload[0]);

     
        

        //reader.readAsText(filesToUpload[0]);

         reader.readAsDataURL(filesToUpload[0]);
        

             

  }

  llenarDatosfactura()  {
               console.log(this.xmltexto);
  }


  convertirXMLtoJson(xml: string ){

        console.log('XML');
        console.log(xml);

           var self = this;

                  var ress;
                           parseString(xml,  function (err, result) {
                                        console.log('objeto en json');
                                        console.log(result);
                                          ress=result;
                                     
                                      
                            });

                      console.log('Despues arnol');
                        self.xmltexto=ress;

                      console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);

                             self.comprobantes=self.xmltexto["cfdi:Comprobante"]["$"];
                              console.log( self.comprobantes);
                              console.log( self.comprobantes.folio);


                              console.log('Egresos');
                              console.log(self.egresos);
                      

                             self.egresos.importe=String(self.comprobantes.total);
                             self.egresos.factura=self.comprobantes.folio;


                             self.Complemento=self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
                             console.log( 'Complemento');
                             console.log( self.Complemento);
                                 console.log('Valor UUID='+self.Complemento.UUID)
                            
                             /*this.egreso.importe=this.Complemento.total;
                             this.egreso.factura=this.Complemento.folio;*/
                             self.Emisor=self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
                             console.log(self.Emisor);
                             self.Impuestos=self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
                             console.log( self.Impuestos);
                             self.Receptor=self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
                             console.log( self.Receptor);


  }

  /*Metodos para cambiar estatus de facturacion*/
  cambiarEstatusFactura(){
        this.banderafactura=false;
        this.detalleFactura=false;
      //  alert(this.banderafactura);
        console.log('Valor de la banderafactura: '+this.banderafactura);

           var fechaParam = new Date(this.data.datosGenerales.fdfechaXML);
           var fechaActual = new Date();

         if (this.data.datosGenerales.fiActivaXML===1){
               

              /*  if(this.data.requiere.TiendaCuentas.RequiereXML===1 && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=false;
                }
                */
               /* else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=false;

                }  */    

                    if (fechaActual.getTime()<=fechaParam.getTime() ) {
                           if((this.data.requiere.TiendaCuentas.RequiereXML===1 || this.data.requiere.TiendaCuentas.RequiereXML===2) && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                            {
                                   this.banderafactura=false;

                                    //this.egresos.importe=String(this.validaFacturacion.Totalxml);
                                    //this.egresos.factura=this.validaFacturacion.Folioxml;
                                    this.egresos.importeImpuesto=0;

                                  /* this.egresos.importe=0;
                                   this.egresos.factura='';*/
                            }
                    }
                    /*else{
                               this.habilitarComponenetes=data.requiere.TiendaCuentas.RequiereXML===1?false:data.requiere.TiendaCuentas.RequiereXML===2?true:false;
                    }*/

         }else{

                      this.banderafactura=false;

                      console.log('valor de la contieneIVA cambiarEstatusFactura');
                      console.log(this.contieneIVA);  
                      console.log('valor de la contieneIVA this.egresos.importeImpuesto');
                      console.log(this.egresos.importeImpuesto);  
                       

                             if (this.contieneIVA){ 
                                     this.calculoImpuesto(this.contieneIVA);
                               }else{
                                    this.detalleFactura= false;
                                     this.contieneIVA=false;
                                      this.egresos.importeImpuesto=0;  

                               }

         }

  }

  consultaValidacionXML(xml:string){

     console.log('XML');
         xml = xml.trim();
         xml=xml.split("\n").join("");
         xml=xml.split("\r").join("");
         //xml=xml.split("+").join("~"); 
         xml=xml.split("\n").join("");
      
         console.log(xml.trim());      
                             this._productoService2.getValidacionXML(xml.trim(),this.data.carga.Cuenta).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              
                                              this.validaFacturacion = result.detValidacionXML;
                                              console.log(this.validaFacturacion);

                                                  if(result.ValidafacturaResult.EsError == false){

                                                      /*  if (this.validaFacturacion.codigo ==0){
                                                                this.convertirXMLtoJson(this.xml);

                                                        }else{

                                                            console.log('Xml no es valido \n Favor de cargar un XML valido');
                                                            this.titulo="Alerta                                                 ";
                                                            this.mensaje= "Favor de cargar un xml valido, \n Intenta nuevamente ";
                                                            this.pantalla=true;
                                                            this.boton=false;


                                                        }*/

                                                  }else{
                                                        console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente"+ result.ValidafacturaResult.Mensaje;
                                                        this.pantalla=true;

                                                  }

                                                    

                                               
                                                    

                                             
                                            }else{
                                           //   this.closeDialogCargar();
                                               console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                        this.pantalla=true;
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 

  }



 consultaValidacionXMLPrueba(xml:string){
   this.retornar=false;
    this.boton=true;

      this.pantalla=true;
      this.PantallaImprimir=true;
      this.imprimirCorrectamente=false; 
      this.cabecero=false;
      $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
      $('.mat-dialog-content').css({'overflow': 'hidden'});



                             this._productoService2.getValidacionXMLPrueba(xml.trim(),this.data.carga.Cuenta,this.data.datosGenerales.Canal).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                              this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                                              console.log(this.validaFacturacion);

                                                  if(result.ValidaArchivoXMLResult.EsError == false){

                                                         this.titulo="Solicitud de Gastos";
                                                         this.pantalla=false;
                                                         this.cabecero=true;
                                                         this.egresos.importe=String(this.validaFacturacion.Totalxml);
                                                         this.egresos.factura=this.validaFacturacion.Folioxml;
                                                         this.egresos.importeImpuesto=Number(this.validaFacturacion.Ivaxml);  
                                                         console.log('El valor de la this.validaFacturacion');
                                                         console.log(this.validaFacturacion);


                                                         this.valorFactura=/*"No. Factura " +this.validaFacturacion.Folioxml+'  '+
                                                                           "<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                                                                           "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                                                                           "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                                                                           "Subtotal: " +this.validaFacturacion.SubTotalxml+'   '+
                                                                           "IVA: " +this.validaFacturacion.Ivaxml;
                                                        this.detalleFactura=true;


                                                        this.cadenaXML=xml;

                                                      /*    this.egresos.importe='100';
                                                         this.egresos.factura='16';
                                                         this.egresos.importeImpuesto='16';
                                                      */

                                                  }else{

                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                    this.detalleFactura=false;
                                                        console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente  "+ result.ValidaArchivoXMLResult.Mensaje;
                                                        this.pantalla=true;
                                                        this.PantallaImprimir=false;
                                                        this.boton=false;
                                                        this.retornar=true;
                                                         this.imprimirCorrectamente=false; 
                                                        this.cabecero=true;
                                                       
                                                        this.egresos.importe='0';
                                                         this.egresos.factura='';
                                                         this.egresos.importe='0'; 

                                                  }                                              

                                             
                                            }else{
                                           //   this.closeDialogCargar();
                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                          this.pantalla=true;
                                                        this.PantallaImprimir=false;
                                                        this.boton=false;
                                                        this.retornar=true;
                                                         this.imprimirCorrectamente=false; 
                                                        this.cabecero=true;
                                                        this.egresos.importe='0';
                                                         this.egresos.factura='';
                                                         this.egresos.importe='0'; 

                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                              $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                        }

                               );
                         /*Fin de servicio*/ 

  }


    insertaSolicitudGastos(){
      var loggerGTO = new LoggerGastos();
      loggerGTO.guardarLog(">>> >>> Entra a insertaSolicitudGastos()");
      this.PantallaImprimir=true;
      this.imprimirCorrectamente=false; 
      this.cabecero=false;
      $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
      $('.mat-dialog-content').css({'overflow': 'hidden'});
      if (this.banderafactura==true){
          this.validaFacturacion.Datosparam=this.banderafactura==true?1:0;  
          this.validaFacturacion.Cadenaxml=this.cadenaXML;
      }
      this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
      var urlGastos = 'http://'+this.datosGenerales.servidor+GLOBAL.urlGastosPV;
      let solicitud:any = {};
		  solicitud.Empleado=this.data.datosGenerales.NoEmpleado;
      solicitud.NoCuenta=this.egresos.noCuenta;
      solicitud.ImporteGasto=this.egresos.importe;
      var iva = new Number(this.egresos.importeImpuesto);
      console.log (iva.toFixed(2));
      solicitud.ImporteImpuesto=iva.toFixed(2); 
      solicitud.Valxml= this.data.datosGenerales.fiActivaXML;
      solicitud.Referencia=this.egresos.factura;
      solicitud.Observaciones= this.egresos.concepto;
      solicitud.Justificacion=this.egresos.justificacion;
      solicitud.FolioRefFletes='';
      solicitud.Cifracontrol='';
      solicitud.PresupuestoDisponible=this.data.carga.Disponible;
      solicitud.estacioTrabajo=this.data.datosGenerales.estacion;
      if (this.validaFacturacion!= undefined){
        solicitud.DatosXMl=this.validaFacturacion;	
      }else{
        let datosXML = new validaFacturacion('0',0,'','','','','','','',0,0,0,'');
        solicitud.DatosXMl=datosXML;
        let flete:any = {};
        flete.Datosparam=0; //V
      }
      let flete:any = {};
      flete.Datosparam=0; 
      solicitud.Datosfiscales=flete;
      loggerGTO.guardarLog("URL: " + urlGastos+ "AfectaAltaSolicitud");
      loggerGTO.guardarLog("Petición: " + JSON.stringify(solicitud));
      this._http.post(urlGastos+'AfectaAltaSolicitud', solicitud).subscribe(
      val => {
        //console.log('Respuesta correcta: ', JSON.stringify(val));
        loggerGTO.guardarLog("Respuesta correcta: " + JSON.stringify(val));
        //console.log('Respuesta correcta: ', JSON.stringify(val.json().AfectaAltaSolicitudResult));
        var result = val.json();
        if (result.AfectaAltaSolicitudResult.EsError==false){
          console.log('Se guardo con exito');
          this.titulo="Exito";
          //this.mensaje= "Se registro correctamente la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
          this.mensaje= result.AfectaAltaSolicitudResult.Mensaje;
          
          this.pantalla=true; 
          this.boton=true;
          this.cabecero=true;

          this.PantallaImprimir=false;
          this.imprimirCorrectamente=true; 

              $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});

          if(this.data.carga.Cuenta===604910 || this.data.carga.Cuenta===60491 || this.data.carga.Cuenta===1025 ){
            /*var impresion:reporteGastos;
            impresion = new reporteGastos(13796, 7439758, 620070, 1,0,0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '','');*/
                console.log(result.AfectaAltaSolicitudResult.DetCuentasReimpresion);
                this.cabecero=false;
                if (result.AfectaAltaSolicitudResult.DetCuentasReimpresion!==null){
                      $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
                      $('.mat-dialog-content').css({'overflow': 'hidden'});
                    this.imprimirEgreso(result.AfectaAltaSolicitudResult.DetCuentasReimpresion[0]);
                    this.PantallaImprimir=true;
                }
                
          }
        }else{
          $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
          console.log('Se presento un error al guardar la solicitud');
          this.titulo="Error";
          this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+"\n" +this.data.carga.Descripcion +"\n"  +result.AfectaAltaSolicitudResult.Mensaje;
          this.pantalla=true; 
          this.PantallaImprimir=false;
          this.boton=true;
          this.cabecero=true;
        }
      },
      error => {
          console.log("Respuesta Error:  ", error);
          loggerGTO.guardarLog("Respuesta Error: " + error);
          console.log(<any>error);
          $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
      },
      () => {
        loggerGTO.guardarLog("Termina Petición ...");
      }
      );
      loggerGTO.guardarLog("<<< <<< Termina insertaSolicitudGastos()");
    }


    /*Metodo para validar solicitud de gastos*/
    validarSolicitudGastos(){
		this.openDialogCargar();
/* this.PantallaImprimir=true;
      this.imprimirCorrectamente=false; 
      this.cabecero=false;
         $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
         $('.mat-dialog-content').css({'overflow': 'hidden'});*/

      this.retornar=false;
      console.log('Entro en el metodo validarSolicitudGastos');

      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID

               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

               console.log('data carga cuenta');
               console.log(this.data.carga);
               this._productoService2.getValidacionDatosGastosSolicitud(this.data.datosGenerales,this.egresos,this.data.carga).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);                                              
                                             
                                               if (result.ValidaAltaSolicitudResult.EsError==false){
                                                       console.log('Se valido correctamente  con exito datos de solicitud');
                                                        this.titulo="Alerta";
                                                        this.mensaje= result.ValidaAltaSolicitudResult.Mensaje;
                                                        this.pantalla=true;
                                                         this.PantallaImprimir=false;
                                                            $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                              console.log('valor de stcontinuar :'+result.ValidaAltaSolicitudResult.stcontinuar);
                                                              if(result.ValidaAltaSolicitudResult.stcontinuar==0)
                                                              {
                                                                  this.boton=true;
                                                              }
                                                              else
                                                              {
                                                                   this.boton=false;
                                                              }

                                                        


                                                        

                                               }else{
                                                        $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        console.log('Se presento un error al validar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= this.data.carga.Descripcion +"\n" +result.ValidaAltaSolicitudResult.Mensaje;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=false;
                                                        this.retornar=true;
                                               }

                                                        

                                             
                                            }else{
                                           
                                              console.log('Entro');                                           
    $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                              console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al validar la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=false;
                                                          this.retornar=true;
                                            }
											this.closeDialogCargar();

                                        },
                                        error => {
                                          console.log(<any>error);
                                              $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                        }

                                         );
                         /*Fin de servicio*/ 


    }


   b64DecodeUnicode(str):string {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
   }

   mostarCarga(){
       this.pantalla=false;
      // this.boton=true;
       this.titulo="Solicitud de Gastos";

     //  this.mostrarFactura=this.data.requiere.TiendaCuentas.RequiereXML===2 || this.data.requiere.TiendaCuentas.RequiereXML=== 1?true:false;
       console.log('El valor de this.mostrarFactura');
       console.log(this.mostrarFactura);

   }

   imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);
               this.imprimirCorrectamente=false;
               

                $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
                $('.mat-dialog-content').css({'overflow': 'hidden'});
                
               
               /* $(".mat-dialog-container").removeClass("mat-dialog-container");
                $(".mat-dialog-container").addClass("mat-dialog-container2");  
                $(".mat-dialog-container").addClass("mat-dialog-container");*/
               if (ticket!=null){
                   this.ticket=ticket;
               }
              /*Metodos para realizar la impresion*/
               console.log('Valor de ticket');
               console.log(ticket);
               this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();

               console.log('Valor de datos generales');
               console.log(this.data.generales);

                       this._productoService2.setArchivoImprimirSolicitud1025(this.datosGenerales,this.ticket,'No Empleado').subscribe(
                          result => {
                                 console.log('RESULTADO');
                                 console.log(result);
                               
                            if(result.code != 200){
                                                     
                              this.impresion=result; 
                              console.log(this.impresion);
                               this.noImpresion=Number(this.impresion.Contenido);

                              console.log('Paso el valor'+this.noImpresion); 

                              /*Consumir el metodo para imprimir el documento*/ 


                                      //  $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});

                                         this._productoService2.getIFolioImpresion(this.noImpresion).subscribe(
                                                  result => {
                                                             console.log('RESULTADO de la impresion');
                                                             console.log(result) ;
                                                        if(result.code != 200){
                                                                                 
                                                          this.impresion=result; 
                                                          console.log(this.impresion);
                                                          //this.noImpresion=Number(this.impresion.Contenido);

                                                          console.log('Valor de la impresion'+this.impresion.Detalle); 

                                                          /*Consumir el metodo para imagen  el documento*/ 

                                                                 this._productoService2.getImagen(this.noImpresion).subscribe(
                                                                          result => {
                                                                                     console.log('RESULTADO de la impresion');
                                                                                     console.log(result) ;
                                                                                if(result.code != 200){
                                                                                                         
                                                                                  this.impresion=result; 
                                                                                  console.log(this.impresion);
                                                                                  //this.noImpresion=Number(this.impresion.Contenido);

                                                                                      console.log('Valor de la impresion'+this.impresion.Detalle); 

                                                                                      this.pantalla=true;

                                                                                      this.imagen=JSON.parse(this.impresion.Contenido);

                                                                                     this.bse64=this.imagen[0].ImagenBase64;

                                                                                     console.log(this.bse64);
                                                                                     this.imprimirCorrectamente=true;
                                                                                      $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});

                                                                                      /* $(".mat-dialog-container").removeClass("mat-dialog-container");
                                                                                        $(".mat-dialog-container").addClass("mat-dialog-container");
                                                                                        $(".mat-dialog-container").addClass("mat-dialog-container");*/
                                                                                     /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                                                                       this.img.nativeElement.src = this.src;*/


                                                                                  /*Consumir el metodo para imprimir el documento*/ 

                                                                                  /*Fin del metodo para imprimir ticket*/            
                                                                                  

                                                                                }else{
                                                                               //   this.closeDialogCargar();
                                                                                  console.log('Entro');
                                                                               //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                                                   $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                this.titulo="Error";
                                                                                this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                                                 // console.log(this.ReporteGastos);
                                                                                }

                                                                          },
                                                                          error => {
                                                                            console.log(<any>error);
                                                                                $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                             this.titulo="Error";
                                                                             this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                                          }
                                                                      );
                                                          /*Fin del metodo para imagen ticket*/            
                                                          

                                                        }else{
                                                       //   this.closeDialogCargar();
                                                          console.log('Entro');
                                                       //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                          console.log('Entro');
                                                          this.titulo="Error";
                                                              $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                          this.MessageError=true;
                                                                               // this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                         // console.log(this.ReporteGastos);
                                                        }

                                                  },
                                                  error => {
                                                    console.log(<any>error);
                                                    this.titulo="Error";
                                                    this.MessageError=true;
                                                        $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                            this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                                                  }
                                              );

                              /*Fin del metodo para imprimir ticket*/            
                              

                            }else{
                           //   this.closeDialogCargar();
                                console.log('Entro');
                           //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                  console.log('Entro');
                                  this.titulo="Error";
                                  this.MessageError=true;
                                      $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                              //  this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                          console.log(<any>error);
                          this.titulo="Error";
                          this.MessageError=true;
                              $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                               // this.MessageError=true;
                                                                                this.pantalla=true;
                                                                                this.mensaje="Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                                                                this.boton=true;
                        }
                    );



    }


}

