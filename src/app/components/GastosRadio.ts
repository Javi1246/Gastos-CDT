import {Component,Input} from '@angular/core';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {FormBuilder, FormGroup} from '@angular/forms';
/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'radio-ng-model',
  templateUrl: '../views/GastosRadio.html',
  styleUrls: ['../css/radio-ng-model.css'],
})
export class RadioNgModel {
   @Input() valor:any;
  favoriteCuenta: string;
  idCuenta : Number;
  cuentas=[];
  descripcion : string;





  /*cuentas = [
    {id:0,desc:'Pendientes de Autorizar'},
    {id:3,desc:'Autorizados'},
    {id:4,desc:'Pagados'}
    
  ];*/



  options: FormGroup;


   constructor(private datosCuentasServicios: datosCuentasServicio,fb: FormBuilder) {
        //  this.cuentas = datosCuentasServicios.getDatosCuentas();
          // alert(this.datosCuentasServicios)
          this.options = fb.group({
      
             radios: 'auto',
          });

         // this.idCuenta=0;

      }


   ngOnInit(){

         //alert('El valor del valor'+this.valor);

     if (this.valor===1){
           this.cuentas = [
                    /*{id:0,desc:'Pendiente de Autorizar'},
                    {id:3,desc:'Autorizado'},
                   // {id:2,desc:'Rechazado'},
                    {id:4,desc:'Afectado'},
                    {id:7,desc:'Comprobado'},*/

                    {id:0,desc:'Pendiente de Autorizar'},
                    {id:1,desc:'Autorizado'},
                    {id:2,desc:'Rechazado'},
                    {id:4,desc:'Afectado'},
                    {id:5,desc:'Comprobado'},

                    ];

                    this.idCuenta=0;

     }else if (this.valor===2){
           this.cuentas = [
                    {id:3,desc:'Pendientes de Egresar'}
                   // {id:6,desc:'Pendientes de Ingresar'}
                    
                    ];
                    this.idCuenta=3;

     }
     else if (this.valor===3){
           this.cuentas = [
                   {id:4,desc:'Pendiente de Comprobar'},
                    {id:5,desc:'Comprobado'},
                    {id:6,desc:'Rechazado (Pendientes de Ingresar a Caja)'},
                    {id:7,desc:'Ingresados a Caja'},                  
                    
                    ];
                    this.idCuenta=4;

     }
     else if (this.valor===4){
           this.cuentas = [
                   {id:4,desc:'Pendientes de Comprobar'},
                   {id:9,desc:'Pendiente de Ingresar'},
                   {id:7,desc:'Comprobados'},
                    
                    
                    ];
                    this.idCuenta=4;

     }
             
             
          
  }  

  	  getIdCuenta(){
  	  			console.log('Entro');  		
  	  		 	console.log(this.idCuenta);  		
  	  		 this.datosCuentasServicios.getStatus(this.idCuenta);
           this.descripcion  = this.idCuenta==0 ? 'Pendientes de Autorizar' : this.idCuenta==3 ? 'Autorizados': this.idCuenta==4?'Pagados':'Sin descripcion';
           console.log(this.descripcion);    
           this.datosCuentasServicios.setDescEstatus(this.descripcion);
  	  }

}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */