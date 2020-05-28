import { Pipe, PipeTransform } from '@angular/core';
import {AutizacionSolicitud} from '../models/AutizacionSolicitud';


@Pipe({
    name: 'filterAutorizacion',
    pure: false
})
export class FilterAutorizar implements PipeTransform {
    transform(items: any[], term: any): any {
        // I am unsure what id is here. did you mean title?
        
        try{
                    console.log('dETERMINA ')
                    console.log(term.TdaEstado);

                  
                     console.log(items);
                 
                    if (items==undefined || term ==undefined) {
                            console.log('El valor del filter');     
                            console.log(items);     
                            return items;
                    }        
                   //return items.filter(item => item.fcNombre.indexOf(term) !== -1);
                   console.log('Filter arnol');
                   //console.log( items.filter(item => item.Autorizadas.indexOf(false) !== -1)
                  return items.filter(item => String(item.autorizada).indexOf(String(term.TdaEstado)) !== -1);

        }catch(eer){
            console.log(eer);
            return items;
        }
        


        
    }
}


@Pipe({
    name: 'filterAutorizacionNo',
    pure: false
})
export class FilterAutorizarNO implements PipeTransform {
    transform(items: any[], term: any): any {
        // I am unsure what id is here. did you mean title?
        
        try{
                    console.log('dETERMINA ')
                    console.log(term.TdaEstado);

                  
                     console.log(items);
                 
                    if (items==undefined || term ==undefined) {
                            console.log('El valor del filter');     
                            console.log(items);     
                            return items;
                    }        
                   //return items.filter(item => item.fcNombre.indexOf(term) !== -1);
                   console.log('Filter arnol');
                   //console.log( items.filter(item => item.Autorizadas.indexOf(false) !== -1)
                  return items.filter(item => String(item.autorizada).indexOf(String(term.TdaEstado)) !== -1);

        }catch(eer){
            console.log(eer);
            return items;
        }
        


        
    }
}



@Pipe({
    name: 'filter1025',
    pure: false
})
export class Filter1025 implements PipeTransform {
    transform(items: any[], term: any): any {
        // I am unsure what id is here. did you mean title?
        
        try{
                    console.log('dETERMINA ')
                    console.log(term.TdaEstado);

                  
                     console.log(items);
                 
                    if (items==undefined || term ==undefined) {
                            console.log('El valor del filter');     
                            console.log(items);     
                            return items;
                    }        
                   //return items.filter(item => item.fcNombre.indexOf(term) !== -1);
                   console.log('Filter arnol');
                   //console.log( items.filter(item => item.Autorizadas.indexOf(false) !== -1)
                  return items.filter(item => String(item.NoCuenta).indexOf(String(term.NoCuenta)) !== -1);

        }catch(eer){
            console.log(eer);
            return items;
        }
        


        
    }
}