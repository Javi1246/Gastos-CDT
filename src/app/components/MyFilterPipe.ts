import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter'
    
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
    transform(items: any, term: any): any {
        // I am unsure what id is here. did you mean title?

        console.log(term);
     
        if(term === undefined){
                return items;

        }
        
       return items.filter(item => item.fcNombre.indexOf(term) !== -1);

        //return res.filter(item => item.fcRFC.indexOf(term) !== -1);

        //return items.filter(item => item.fcNombre.indexOf(term) !== -1);
    }
}



/*export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: detFletes): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.indexOf(filter) !== -1);
    }
}*/
