import { Pipe, PipeTransform } from '@angular/core';
import {detFletes} from '../models/detFletes';

@Pipe({
    name: 'myfilter2',
    pure: false
})
export class MyFilterPipe2 implements PipeTransform {
    transform(items: any[], term: detFletes): any {
        // I am unsure what id is here. did you mean title?

        console.log(term);
     

        //var res= items.filter(item => item.fcNombre.indexOf(term) !== -1);

        return items.filter(item => item.indexOf(term) !== -1);

        
    }
}
