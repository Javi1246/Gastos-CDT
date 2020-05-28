import {Component, Inject, Input} from '@angular/core';
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
import {datosEgreso} from '../models/datosEgreso';
import {ConsultaSolPorCifra} from '../models/ConsultaSolPorCifra';
import {DialogDataEmpleadoHuellaDialog} from '../components/dialog-data-empleados-dialog';
import  {CajaDetalleFolios} from '../models/CajaDetalleFolios';
import { DecimalPipe } from '@angular/common';

declare var jquery:any;
declare var $ :any;

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-egreso',
  templateUrl: '../views/dialog-egreso.html',
})
export class DialogDataEgreso {

  @Input() valor:any;
  public cuentas : datosCuenta;
  public cuentaGastos: cuenta[];
  public ReporteGastos: reporteGastos;
  public dialogRefCarga;
   public datosGenerales: datosGenerales;
   public requiereXML:RequiereXML
   public cuentaGastosXML :cuentaGastosXML;

   public tituloDesc:string;
   public leyenda : string;
   public tituloBoton : string;
    public importe: any;
 public importe2: string;
 

   mensaje: any;
    error : boolean=false;
    comentario: string;
    titulos : string = "Alerta";

    public cuenta : string;   
public desc : string;
  constructor(public dialog: MatDialog,private datosCuentasServicios: datosCuentasServicio,private _productoService: ProductoService,public dialogCarga: MatDialog,private datosGeneralesServicios: datosGeneralesServicio,) {

         console.log('variable valor en el constructor'+ this.valor);

           this.tituloComponente(this.valor);
  }

  tituloComponente(tipo:Number){

      if (tipo===3){
           this.tituloDesc='Egreso de Cifra de Control';
           this.leyenda='Cifra de Control';
           this.tituloBoton='Validar Cifra';
      }else{

          this.tituloDesc='Pago de Cifra de Control y Gasolina x Empleado';
          this.leyenda='No de Empleado';
          this.tituloBoton='Validar Empleado';

      }

  }


 

  openDialogCargar(): void {
     
     this.dialogRefCarga = this.dialogCarga.open(DialogCargar, {
      width: '160px'
     
    });

    this.dialogRefCarga.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
 closeDialogCargar(): void {

        this.dialogRefCarga.close();
    }


    openDialogegreso(){
      console.log('Valor de cuenta');
      console.log(this.valor);

        this.dialog.open(DialogDataEgresoDialog, {
                                                      width: '700px',
                                                      data: {
                                                        carga: this.valor                                                        
                                                      },
                                                      disableClose:true
                                                    });
    }

    openDialogPrueba(){
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

                                              console.log(result);

                                              console.log('Paso el valor');              
                                              //this.cuentaGastos = result.data.detCuentas;
                                              this.requiereXML = result.DetalleTiendaCuentaResult;
                                              console.log(this.requiereXML);
                                              console.log('cuentaGastosXML');
                                              this.cuentaGastosXML = result.detCuentaGastos;
                                              console.log(this.cuentaGastosXML);
                                                if(result.DetalleTiendaCuentaResult.EsError===false){

                                                    this.dialog.open(DialogDataEgresoDialog, {
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
                                                }else{
                                                        this.error=true;
                                                        this.comentario= result.RequiereXMLResult.Mensaje;
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

   
  }


  openDialog() {
    
       
      console.log('getReporteGastos');
     // console.log(this.cuentas);

          this.dialog.open(DialogDataEgresoDialog, {
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



                                              this.dialog.open(DialogDataEgresoDialog, {
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

  selector: 'dialog-data-egreso-dialog',
  templateUrl: '../views/dialog-data-egreso-dialog.html',
  providers: [    
    ProductoService,
  ],
})
export class DialogDataEgresoDialog {
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
   public consultaSolPorCifra : ConsultaSolPorCifra;

   public descrip: string ;
   public mostrarFactura: boolean ;
   public habilitarComponenetes: boolean ;
   public requiredValidacion:boolean;
   public requiredValidacionJust:boolean;
   public mensaje:string;
   public pantalla:boolean;
   public boton:boolean;
   public habilitarAgregar:boolean;
   public habilitarFolioCentral:boolean;
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
   public datosGeneralesCopia :datosGenerales;
   public cabecero:boolean=true;
   public datosEgreso:datosEgreso;
   public tituloValidar:string;
   public validaCentral:boolean;
   public consulta:boolean;
   public cajaDetalleFolios:CajaDetalleFolios;
   public botonTitulo:string;


    public tituloDesc:string;

   public leyenda : string;
   public tituloBoton : string;
   public tipoEgreso:Number;


/*Parametros para la validacion de egreso*/
public folio:Number =0;
public refempleado:Number=0;
public tipoOperacion:Number=0;
public cifracontrol:string='';

public desc:string;
public cuenta:string;

public vermas : boolean=false;
public vermasme : boolean=false;
   public mensaje2:string="";

   public importe: any;
 public importe2: string;
public botonCaja:boolean=false;


public BanderaFondeo: boolean=true;//javi
cliked=true;//javi
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private datosCuentasServicios: datosCuentasServicio,private _productoService2: ProductoService,private datosGeneralesServicios: datosGeneralesServicio,public dialog: MatDialog,) {

        console.log('Valor de la cuenta');
        console.log(data);
          this.tipoEgreso=data.carga;


         this.egresos=  new egreso(0,'','',' ','','',0);
         this.datosEgreso = new datosEgreso('','','');
         this.validaCentral=true;
            this.egresos.descCuenta='Cuenta '+ data.carga;//data.requiere.TiendaCuentas.NoCuenta+' '+data.requiere.TiendaCuentas.Descripcion;
            this.egresos.noCuenta=data.carga;
           // this.egresos.importe=0.00;
            

            this.tipoOperacion=data;
            
            if (this.tipoEgreso==3){
               this.tituloValidar='Validar CifraContol';
               //this.titulo = 'Egreso de Cifra Control';
               this.datosEgreso.cifraControl='';
               this.datosEgreso.empleado='';
              
            } else if (data==4){
                  this.tituloValidar='Validar CifraContol';
                  //this.titulo = 'Egreso de Gasolina x Empleado';
                  this.datosEgreso.empleado='1';
                   this.datosEgreso.cifraControl='';
                  
            }
            else{
                  this.tituloValidar='Validar Cifra Contol ';

                  
            } 


              this.cabecero=true;



               this.tituloComponente(this.data.carga);


               console.log('Valor de la carga generales');
            console.log(this.data);

            console.log('Valor de la carga ');
            console.log(this.data.generales);    

             this.datosGeneralesServicios.setEmpleado(this.data.empleadoDI);        

            this.datosGenerales=this.data.generales;

            this.data.generales.NoEmpleado=this.data.empleadoDI;

            console.log('Valor de los datoa de la huella');
            console.log(this.data.generales);
            
               // this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();


     
  }

  
  




 
 validarComponentes(form):boolean{
      console.log('Entro a validar los campor '+form);

try{

    console.log(this.tipoEgreso);
      if (this.tipoEgreso==3){
          console.log('Entro 3');
          if(this.datosEgreso.cifraControl.length>0 && form ){ 
                  console.log('this.datosEgreso.cifraControl');  
                  console.log(this.datosEgreso.cifraControl.length);  
                 this.habilitarAgregar=true; 
          }else{
                this.habilitarAgregar=false;

          }

      }else if (this.tipoEgreso==4){
          console.log('Entro 4');
          if(String(this.datosEgreso.empleado).length>0 ){
            console.log('this.datosEgreso.empleado');  
                  console.log(this.datosEgreso.empleado.length);  
                 this.habilitarAgregar=true; 
          }else{
                this.habilitarAgregar=false;

          }

      }
}catch(e){
    this.habilitarAgregar=false;
}



   /*   if (Number(this.datosEgreso.importe)>0 && this.egresos.factura.length>0 && form){
            this.habilitarAgregar=true;
      }else{
          this.habilitarAgregar=false;

      }*/
console.log('this.habilitarAgregar'); 
console.log(this.habilitarAgregar); 

        return this.habilitarAgregar;
  }




tituloComponente(tipo:Number){



      if (this.tipoEgreso===3){
           this.tituloDesc='Egreso de Cifra de Control';
           this.leyenda='Cifra de Control';
           this.tituloBoton='Validar Cifra';
           this.botonTitulo='Egresar Cifra';
      }else{

          this.tituloDesc='Pago de Cifra de Control y Gasolina x Empleado';
          this.leyenda='No de Empleado';
          this.tituloBoton='Validar Empleado';
          this.botonTitulo='Egresar Cifra';

      }

  }



 myMethod(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
   
    return (key <= 13 || (key >= 48 && key <= 57) || key == 46);

}

myMethod2(evt){
  
    var key =  evt.which ;  
    console.log('Valor de key');
    console.log(key);
    return (key <= 13 || (key >= 48 && key <= 57) );

}

ver(id:Number){

  console.log('valor de id');
  console.log(id);
  
  if (id==1){
       this.vermasme =true;
       
  }else{
       this.vermasme =false;
       
  }
    

}



validarFolioCentral(tipo:number ){

  this.pantalla=true; 
  this.PantallaImprimir=true;
  this.imprimirCorrectamente=false;
  this.cabecero=false;
   $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
   $('.mat-dialog-content').css({'overflow': 'hidden'});

  console.log('Entro en el metodo getConsultaValidacionEgreso');
        

    if (tipo===3){      
      this.cifracontrol=this.datosEgreso.cifraControl; 
    }else{
        this.refempleado=Number(this.datosEgreso.empleado); 
    }


             this.cajaDetalleFolios= new CajaDetalleFolios('','','','','','',0,'','',0,0,0,0,0,0,'',0,0,'','',0,false);
            
              // this.openCargaHuella();

        this._productoService2.getConsultaValidacionEgreso(this.folio,this.refempleado,tipo,this.cifracontrol.toUpperCase()).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              
                                              this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length>0?result.ValidaEgresoCajaResult.CajaDetalleFolios[0]:this.cajaDetalleFolios;
                                              console.log('Valor de la respuesta');
                                              console.log(this.cajaDetalleFolios);
  
                                             $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                               if (result.ValidaEgresoCajaResult.EsError==false){
                                                       console.log('Se valido con exito');
                                                       
                                                        this.pantalla=false; 
                                                        this.boton=true;
                                                        this.cabecero=true;
                                                        this.validaCentral=false;
                                                       // this.titulo="Egresar ";
                                                       this.desc= this.cajaDetalleFolios.FBPDescripcionCuenta!= null && this.cajaDetalleFolios.FBPDescripcionCuenta!= ''?this.cajaDetalleFolios.FBPDescripcionCuenta:'Sin descripción';
                                                       this.cuenta=String(this.cajaDetalleFolios.NoCuenta) !=null ?String(this.cajaDetalleFolios.NoCuenta):'Sin cuenta';
                                                       this.desc = String(this.cuenta) + ' - '+ this.desc;

                                                         var decimalPipe = new DecimalPipe("en-US");
                                                         console.log('importe antes');
                                                         console.log(this.cajaDetalleFolios.ImporteGasto);
                                                         this.importe=decimalPipe.transform(Number(this.cajaDetalleFolios.ImporteGasto), ".2-2");  

                                                         this.importe2='$'+String(this.importe);
                                                                                 
                                                         console.log('importe descpues');
                                                         console.log(this.importe);
                                                         console.log(this.importe2);
          
                                                         this.cajaDetalleFolios.FiEmpleado = result.ValidaEgresoCajaResult.CajaDetalleFolios[0].CifraEmpleadoDestino;

                                                        if (this.cajaDetalleFolios.ValidaHuella){                                                           
                                                            this.pantalla=false; 
                                                            this.boton=true;
                                                            this.validaCentral=false;

                                                            this.datosGeneralesCopia= new datosGenerales();
                                                            this.datosGeneralesCopia.NoEmpleado=result.ValidaEgresoCajaResult.CajaDetalleFolios[0].CifraEmpleadoDestino;
                                                            console.log('Antes de entrar a la huella ');
                                                            console.log(this.datosGeneralesCopia.NoEmpleado);
                                                            this.openCargaHuella();

                                                        }else{
                                                          console.log("Se carga la ventana de fondo si es necesaria :,v");
                                                          if(this.datosGenerales.Activafondeo==1){
                                                              this.CargaDeFondeoCaja();
                                                          }
                                                        }


                                                        

                                               }else{

                                                        console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Alerta";
                                                        this.mensaje= result.ValidaEgresoCajaResult.Mensaje;
                                                        this.cabecero=true;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                         this.boton=true;
                                               }

                                                    
                                                    
                                                    

                                             
                                            }else{
                                                     //   this.closeDialogCargar();
                                                       console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                                                        this.pantalla=true;
                                                         this.cabecero=true;
                                                           this.PantallaImprimir=false;
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );


   



    console.log('Valor de datosEgreso');    
    console.log(this.datosEgreso);
    this.validaCentral=false;

}

DesbloquearBoton(){//javi
  
  setTimeout(() => {
    this.cliked=false;
  }, 5000);
}

CargaDeFondeoCaja(){

  this.pantalla=true; 
 this.PantallaImprimir=true;
 this.imprimirCorrectamente=false;
 this.cabecero=false;
  $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
      $('.mat-dialog-content').css({'overflow': 'hidden'});
   this._productoService2.getSaldoscaja(this.cajaDetalleFolios, this.tipoEgreso,this.datosGenerales).subscribe(
                                         result => {
                                                console.log('RESULTADO');
                                                console.log(result);
                                          
                                           this.pantalla=false; 
                                          //  this.cabecero=true;
                                        
                                             console.log(result);                                              
                                                $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                              if (result.NoError==0){
                                                      console.log('Se valido correctamente  con exito datos de solicitud');
                                                      this.cliked=false;

                                              }else {

                                                       console.log('Mensaje del servicio getSaldoscaja'+ result.Descripcion);
                                                       console.log('Antes de entrar con el windowa open');

                                                        try{
                                                                                                                                                                                                   
                                                             this.BanderaFondeo=false;
                                                            var url ="http://"+this.datosGenerales.servidor+":9014/Caja/Fronts/Fondeo/Fondeo.html?divisa=1&monto="+result.MontoFondeo+"&usuario="+this.datosGenerales.NoEmpleado+"&ws="+this.datosGenerales.estacion+"&esWeb=True";
                                                            console.log("El valor de la url"+ url)
                                                             var win= window.open(url, "xulschoolhello-some-window", "chrome,centerscreen");
                                                            win.focus();
                                                            console.log("el valor de win");
                                                            console.log(win);
                                                            this.DesbloquearBoton();//javi
                                                          
                                                        }catch(e){
                                                            console.log('fallo'+e);

                                                        }

                                                            console.log('paso con el modal ');
                                                       

                                                    
                                              }

                                                       

                                          

                                       },
                                       error => {
                                            this.titulo="Error";
                                                       this.mensaje= "Se presentó un error al validar la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                       this.pantalla=true; 
                                                       this.PantallaImprimir=false;
                                                       this.boton=true;
                                                       this.retornar=false;
                                       }

                                        );

}




 MovimientoGastos(){
 $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
       $('.mat-dialog-content').css({'overflow': 'hidden'});
 this.pantalla=true; 
  this.PantallaImprimir=true;
  this.imprimirCorrectamente=false;
  this.cabecero=false;
  
  
if(this.botonCaja==false){
  this.botonCaja=true;
  console.log('Entro en el MovimientoGastos');

  this.retornar=false;
  console.log('Entro en el metodo validarSolicitudGastos');

  //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
           var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

           console.log('data carga cuenta');
           console.log(this.data.carga);


             console.log('data carga cuenta');
             this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
           
          // getMovimientocaja(objCajaDet:CajaDetalleFolios,tipoOperacion:Number, datosGenerales: datosGenerales){
            console.log('Antees de Enviar');
           console.log(this.cajaDetalleFolios);
           this._productoService2.getMovimientocaja(this.cajaDetalleFolios, this.tipoEgreso,this.datosGenerales).subscribe(
                                      result => {
                                             console.log('RESULTADO');
                                             console.log(result);
                                        if(result.code != 200){
                                          
                                     
                                          console.log(result);                                              
                                             $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                           if (result.MovimientoCajaResult.EsError==false){
                                                   console.log('Se valido correctamente  con exito datos de solicitud');
                                                   /* this.titulo="Alerta";
                                                    this.mensaje= result.MovimientoCajaResult.Mensaje;
                                                    this.pantalla=true;
                                                    this.boton=false;*/
                                                         /* console.log('valor de stcontinuar :'+result.ValidaAltaSolicitudResult.stcontinuar);
                                                          if(result.ValidaAltaSolicitudResult.stcontinuar==0)
                                                          {
                                                              this.boton=true;
                                                          }
                                                          else
                                                          {
                                                               this.boton=false;
                                                          }*/
                                                          if(result.MovimientoCajaResult.DetCuentasReimpresion.length>0){


                                                             this.cajaDetalleFolios.FolioADN=result.MovimientoCajaResult.DetCuentasReimpresion[0].FolioAdn;
                                                               this.reimpresionSolicitudGastos();
                                                          }else{
                                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                console.log('Se presentó un error al egresar la solicitud');
                                                                this.titulo="Error";
                                                                //this.mensaje= result.MovimientoCajaResult.Mensaje;
                                                                this.mensaje= 'Se egreso correctamente, pero no se encontro informacion para generar el ticket';
                                                                this.pantalla=true; 
                                                                this.PantallaImprimir=false;
                                                                this.boton=true;
                                                                this.retornar=false;
                                                                this.botonCaja=false;


                                                          }
                                                  
                                                        // this.reimpresionSolicitudGastos();

                                                    

                                           }else{
                                                     $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                    console.log('Se presentó un error al egresar la solicitud');
                                                    this.titulo="Error";
                                                    this.mensaje= result.MovimientoCajaResult.Mensaje;
                                                    this.pantalla=true; 
                                                    this.PantallaImprimir=false;
                                                    this.boton=true;
                                                    this.retornar=false;
                                                    this.botonCaja=false;


                                                                  this.mensaje= 'Se presento un error al egresar solicitud de gastos';
                                                                  this.vermas =true;
                                                                  //this.vermasme =false;
                                                                  this.mensaje2=result.MovimientoCajaResult.Mensaje!=''?result.MovimientoCajaResult.Mensaje:'Error en el componente de caja';
                                                                  console.log(this.mensaje2);


                                           }

                                                    

                                         
                                        }else{
                                       
                                          console.log('Entro');                                           

                                          console.log('Se presento un error al guardar la solicitud');

                                           $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                    this.titulo="Error";
                                                    this.mensaje= "Se presentó un error al egresar la solicitud de gastos ";
                                                    this.pantalla=true; 
                                                    this.PantallaImprimir=false;
                                                    this.boton=true;
                                                    this.retornar=false;
                                                    this.botonCaja=false;
                                        }

                                    },
                                    error => {
                                      console.log(<any>error);
                                      $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                      this.titulo="Error";
                                                                                      this.mensaje= "Se presento un error al egresar la solicitud de gastos ";
                                                                                      this.pantalla=true; 
                                                                                      this.PantallaImprimir=false;
                                                                                      this.boton=true;
                                                                                      this.retornar=false;
                                                                                       console.log( this.mensaje);
                                                                                       this.botonCaja=false;
                                    }

                                     );
          
                     /*Fin de servicio*/ 

}

  


    }




openCargaHuella(){

    //  this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();

console.log('Entro en el metodo de openCargaHuella');



          let dialogRef = this.dialog.open(DialogDataEmpleadoHuellaDialog, {
                data: {                 
                  datosGenerales: this.datosGeneralesCopia,
                  consulta:this.consulta
                },
                disableClose:true
              });

           dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

          this.consulta = result;
          console.log('Valor de consulta');
          console.log(this.consulta);
           console.log('Valor de consulta');
         
             if(this.consulta==false){
                 this.titulo="Error";
                 this.mensaje= "No se tiene una huella valida para realizar un Egreso Gasolina x Empleado";
                 this.pantalla=true;
                 this.cabecero=true;
                 this.PantallaImprimir=false;

             }else{

               //this.pantalla=false;
               //this.validaCentral=false;

               console.log("Se carga la ventana del fondeo si es necesaria");//javi
               if(this.datosGenerales.Activafondeo==1){ 
               this.CargaDeFondeoCaja();//javi
               }
             }

                                                        
         
        });

  }


validarComponentesFolioCentral(form):boolean{
      console.log('Entro a validar los campor '+form);
       console.log(this.datosEgreso);


      if (Number(this.datosEgreso.empleado)>0 && this.datosEgreso.referencia.length>0 && form){
            this.habilitarFolioCentral=true;
      }else{
          this.habilitarFolioCentral=false;

      }

        return this.habilitarFolioCentral;
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






    this.banderafactura=true;
    this.detalleFactura=true;
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

         if (this.data.datosGenerales.fiActivaXML===1){
               

                if(this.data.requiere.TiendaCuentas.RequiereXML===1 && this.data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=false;
                }
                /*else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
                {
                       this.banderafactura=false;

                }*/

                  
         }else{

                      this.banderafactura=false;
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
                             this._productoService2.getValidacionXML(xml.trim(),'UID067305511790').subscribe(
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

                             this._productoService2.getValidacionXMLPrueba(xml.trim(),this.data.carga.Cuenta,this.data.datosGenerales.Canal).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);

                                              
                                              this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                                              console.log(this.validaFacturacion);

                                                  if(result.ValidaArchivoXMLResult.EsError == false){

                                                         this.titulo="Solicitud de Gastos";
                                                         this.pantalla=false;
                                                         this.egresos.importe=String(this.validaFacturacion.Totalxml);
                                                         this.egresos.factura=this.validaFacturacion.Folioxml;
                                                         this.egresos.importe=String(this.validaFacturacion.Ivaxml);  
                                                         console.log('El valor de la this.validaFacturacion');
                                                         console.log(this.validaFacturacion);


                                                         this.valorFactura="No. Factura " +this.validaFacturacion.Folioxml+'  '+
                                                                           /*"<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                                                                           "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                                                                           "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                                                                           "Total: " +this.validaFacturacion.Totalxml+'  '+
                                                                           "IVA: " +this.validaFacturacion.Ivaxml;
                                                        

                                                  }else{
                                                        console.log('error al consultar la servicio de validacion de factura');
                                                        this.titulo="Alerta";
                                                        this.mensaje= "Error al validar xml de factura, \nfavor de intentarlo nuevamente"+ result.ValidaArchivoXMLResult.Mensaje;
                                                        this.pantalla=true;
                                                        this.boton=false;
                                                        this.retornar=true;

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


    insertaSolicitudGastos(){

      console.log('Entro en el metodo insertaSolicitudGastos');   

      /*Cambiar el status de banderafactura*/
      if (this.banderafactura==true){
          this.validaFacturacion.Datosparam=this.banderafactura==true?1:0;  
      }
      
      /*if (this.data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado'){
            this.data.datosGenerales.NoEmpleado=this.egresos.factura;
      }*/
   


               console.log('data carga cuenta');
               console.log(this.data.carga);
               this._productoService2.getInsertaSolicitudGastos(this.data.datosGenerales,                                                               
                                                                this.egresos,                                                                
                                                                this.validaFacturacion,
                                                                this.data.carga                                                                
                                                                ).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                              console.log(result);                                             
                                            
                                               if (result.AfectaAltaSolicitudResult.EsError==false){
                                                       console.log('Se guardo con exito');
                                                        this.titulo="Exito";
                                                        this.mensaje= "Se regisro correctamente la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        this.boton=true;

                                                        if(this.data.carga.Cuenta===604910 || this.data.carga.Cuenta===60491 || this.data.carga.Cuenta===1025 || this.data.carga.Cuenta===620106 ){
                                                          var impresion:reporteGastos;
                                                          impresion = new reporteGastos(9152, 7439758, 620070, 1,0,0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '','');
                                                              
                                                              this.cabecero=false;
                                                              this.imprimirEgreso(impresion);
                                                              this.PantallaImprimir=true;
                                                        }

                                               }else{

                                                        console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+"\n" +this.data.carga.Descripcion +"\n" +result.AfectaAltaSolicitudResult.Mensaje;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                         this.boton=true;
                                               }

                                                        

                                             
                                            }else{
                                              //   this.closeDialogCargar();
                                              console.log('Entro');
                                              //this.ReporteGastos = result.detDetCuentasReimpresion;
                                              console.log('Entro');

                                              console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al guardar la  solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                         this.boton=true;
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
                                        }

                                         );
                         /*Fin de servicio*/ 


    }


    /*Metodo para validar solicitud de gastos*/
    validarSolicitudGastos(){
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

                                              console.log('Se presento un error al guardar la solicitud');
                                                        this.titulo="Error";
                                                        this.mensaje= "Se presento un error al validar la solicitud de gastos para la cuenta "+this.data.carga.Descripcion;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=false;
                                                          this.retornar=true;
                                            }

                                        },
                                        error => {
                                          console.log(<any>error);
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

   }

/*Metodo para el egreso de cifra control y egreso de gasolinas x empleado*/
egresoCifraxEmp(){

    console.log('Entro en el metodo egresoCifraxEmp');
    this.reimpresionSolicitudGastos();

}



/*Metodo para llamar a imprimir el ticket*/
 reimpresionSolicitudGastos(){

 $('.mat-dialog-container').css({'width': '25%','height': '150px','margin':'auto'});
 $('.mat-dialog-content').css({'overflow': 'hidden'});
     this.pantalla=true;
     
     this.PantallaImprimir=true;
     this.imprimirCorrectamente=false;
     this.cabecero=false;
      console.log('Entro en el metodo reimpresionSolicitudGastos');
      
    //  this.cajaDetalleFolios.FolioADN=this.cajaDetalleFolios.FolioADN>0?this.cajaDetalleFolios.FolioADN:9152;
      console.log(String(this.cajaDetalleFolios.FolioADN));



      //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
               var UUID=this.Complemento!=null ?this.Complemento.UUID:"";

               try{
                     
                    // this.cajaDetalleFolios.FolioADN=9152; //Se asigna para visualizar la impresion del ticket;
                     this._productoService2.getDetalleReimpresion(this.cajaDetalleFolios.FolioADN).subscribe(
                                          result => {
                                                 console.log('RESULTADO');
                                                 console.log(result);
                                            if(result.code != 200){
                                              
                                         
                                                    console.log(result);                                              
                                                   
                                                    if(result.detalleSolicitudImpresionResult.EsError==false)
                                                    {
                                                        this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                                                        console.log(this.ticket);
                                                        this.imprimirEgreso(this.ticket);  
                                                    }else{
                                                          $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                          this.titulo="Error";
                                                          this.pantalla=true;
                                                          this.MessageError=true;
                                                          this.mensaje=result.detalleSolicitudImpresionResult.Mensaje;
                                                          this.boton=true;
                                                          this.cabecero=true;
                                                          console.log( this.mensaje)



                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        this.titulo="Error";
                                                            this.mensaje=result.detalleSolicitudImpresionResult.Mensaje;
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=true;
                                                        this.retornar=false;

                                                    }
                                              

                                             
                                            }else{
                                              console.log('Entro');
                                              
                                                $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        this.titulo="Error";
                                                        this.mensaje='Error al obtener información del ticket';
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=true;
                                                        this.retornar=false;
                                              console.log( this.mensaje)
                                              //console.log(this.ReporteGastos);
                                            }

                                        },
                                        error => {
                                            $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        this.titulo="Error";
                                                        this.mensaje='Error al obtener información del ticket';
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=true;
                                                        this.retornar=false;
                                              console.log( this.mensaje)
                                              console.log( this.mensaje)
                                        }

                                         );
                         /*Fin de servicio*/ 

               }catch(err){


                                      $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                        this.titulo="Error";
                                                        this.mensaje='Error al obtener información del ticket';
                                                        this.pantalla=true; 
                                                        this.PantallaImprimir=false;
                                                        this.boton=true;
                                                        this.retornar=false;
                                              console.log( this.mensaje)

               }
             


    }






   imprimirEgreso(ticket){
           // alert('El valor del '+ticket.FolioAdn);
               this.imprimirCorrectamente=false;
               

                $('.mat-dialog-container').css({'width': '20%','height': '150px','margin':'auto'});
                $('.mat-dialog-content').css({'overflow': 'hidden'});
                
               
               /* $(".mat-dialog-container").removeClass("mat-dialog-container");
                $(".mat-dialog-container").addClass("mat-dialog-container2");  
               if (ticket!=null){
                   this.ticket=ticket;
               }
              /*Metodos para realizar la impresion*/
               console.log('Valor de ticket');
               console.log(ticket);
               this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();    


               this.cajaDetalleFolios.CifraControl= this.cajaDetalleFolios.CifraControl!=null?this.cajaDetalleFolios.CifraControl:this.datosEgreso.cifraControl;

               console.log('Valor de datos generales');
               console.log(this.datosGenerales);

                       this._productoService2.setArchivoImprimirEgresoCifra(this.datosGenerales,this.ticket,this.cajaDetalleFolios).subscribe(
                          result => {
                                 console.log('RESULTADO');
                                 console.log(result);
                               
                            if(result.code != 200){
                                                     
                              this.impresion=result; 
                              console.log(this.impresion);
                               this.noImpresion=Number(this.impresion.Contenido);

                              console.log('Paso el valor'+this.noImpresion); 

                              /*Consumir el metodo para imprimir el documento*/ 




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

                                                                                      if(this.impresion.EstatusExito){
                                                                                             this.pantalla=true;

                                                                                             this.imagen=JSON.parse(this.impresion.Contenido);
                                                                                             if (this.imagen.length>0){
                                                                                                   $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                                   this.bse64=this.imagen[0].ImagenBase64;

                                                                                                   console.log(this.bse64);
                                                                                                   this.imprimirCorrectamente=true;
                                                                                             
                                                                                             }else{
                                                                                                     $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                              this.titulo="Error";
                                                                                              this.mensaje='Se imprimio correctamente el ticket, pero no se obtuvo correctamente el previo del ticket para su reimpresión';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);

                                                                                             }
                                                                                             

                                                                                      }else{
                                                                                             this.PantallaImprimir=false;
                                                                                            this.titulo="Error";
                                                                                               this.pantalla=true;
                                                                                                this.PantallaImprimir=false;
                                                                                                this.imprimirCorrectamente=true;
                                                                                               this.boton=true;
                                                                                            this.mensaje="Error al generar tikect del folio ADN";

                                                                                             $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                              this.titulo="Error";
                                                                                             this.mensaje='Se imprimio correctamente el ticket, pero no se obtuvo correctamente el previo del ticket para su reimpresión';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);

                                                                                      }

                                                                                      

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
                                                                                             this.mensaje='Se imprimio correctamente el ticket, pero no se obtuvo correctamente el previo del ticket para su reimpresión';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);
                                                                               
                                                                                 // console.log(this.ReporteGastos);
                                                                                }

                                                                          },
                                                                          error => {
                                                                            console.log(<any>error);
                                                                                $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                              this.titulo="Error";
                                                                                             this.mensaje='Se imprimio correctamente el ticket, pero no se obtuvo correctamente el previo del ticket para su reimpresión';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);
                                                                          }
                                                                      );
                                                          /*Fin del metodo para imagen ticket*/            
                                                          

                                                        }else{
                                                       //   this.closeDialogCargar();
                                                          console.log('Entro');
                                                       //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                                          console.log('Entro');
                                                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                              this.titulo="Error";
                                                                                             this.mensaje='Se imprimir  ticket';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);
                                                         // console.log(this.ReporteGastos);
                                                        }

                                                  },
                                                  error => {
                                                    console.log(<any>error);
                                                    console.log('Entro');
                                                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                              this.titulo="Error";
                                                                                             this.mensaje='Se imprimir  ticket';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);
                                                  }
                                              );

                              /*Fin del metodo para imprimir ticket*/            
                              

                            }else{
                           //   this.closeDialogCargar();
                              console.log('Entro');
                           //   this.ReporteGastos = result.detDetCuentasReimpresion;
                              console.log('Entro');  console.log('Entro');
                                                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                              this.titulo="Error";
                                                                                             this.mensaje='Se imprimir  ticket';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);
                             // console.log(this.ReporteGastos);
                            }

                        },
                        error => {
                          console.log(<any>error);
                                                                                
                                                                            console.log('Entro');
                                                                               $('.mat-dialog-container').css({'width': '100%','height': '100%','max-width':'80vw'});
                                                                                              this.titulo="Error";
                                                                                             this.mensaje='Se imprimir  ticket';
                                                                                              this.pantalla=true; 
                                                                                              this.PantallaImprimir=false;
                                                                                              this.boton=true;
                                                                                              this.retornar=false;
                                                                                              console.log( this.mensaje);
                        }
                    );



    }


}


