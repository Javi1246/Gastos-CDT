import {Component,Input} from '@angular/core';
import {reporteGastos} from '../models/reporteGastos';
/**
 * @title Basic tooltip
 */
@Component({
  selector: 'tooltip-general',
  templateUrl: '../views/tooltip-general.html',
})
export class TooltipGeneral {
	@Input() valor:any;
    public titulo:string;
    public Mensaje:string;

    

    constructor(){
    	console.log('valor de Entrada '+this.valor);   
    	if(this.valor){
    		this.titulo=String(this.valor.FolioAdn);
        	this.Mensaje=this.valor.Descripcion;

    	}else{
    		this.titulo="fallo";
        	this.Mensaje="Intentar de Nuevo";
    	}
        
    }
    

}