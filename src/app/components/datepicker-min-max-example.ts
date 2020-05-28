
import {Component} from '@angular/core';
import { GLOBAL } from '../services/global';
import {datosCuentasServicio} from  '../services/datosCuentaServicio';
import {datosCuenta} from '../models/DatosCuenta';
import { DatePipe } from '@angular/common';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";

export class AppDateAdapter extends NativeDateAdapter {
   parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');
      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

   format(date: Date, displayFormat: Object): string {
       if (displayFormat == "input") {
           let day = date.getDate();
           let month = date.getMonth() + 1;
           let year = date.getFullYear();
           return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
       } else {
          let options = {  month: 'short' ,year: 'numeric'};
         
          return date.toLocaleDateString('es-MX', options);
           //return date.toDateString();
       }
   }

   private _to2digit(n: number) {
       return ('00' + n).slice(-2);
   } 
}

export const APP_DATE_FORMATS =
{
   parse: {
       dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
   },
   display: {
       // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
       dateInput: 'input',
       monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
       dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
       monthYearA11yLabel: {year: 'numeric', month: 'long'},
   }
}

/**
 * @title Datepicker Min Max
 */
@Component({
  selector: 'datepicker-min-max-example',
 templateUrl: '../views/datepicker-min-max-example.html',
  styleUrls: ['../css/datepicker-min-max-example.css'],
  providers: [
        {
            provide: DateAdapter, useClass: AppDateAdapter
        },
        {
            provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
        }
    ]

})
export class DatepickerMinMaxExample {
  public  d: Date = new Date();
  public año:number=Number(this.d.getFullYear());
  public mes:number=Number(this.d.getMonth());
  public dia:number=Number(this.d.getDate());

  public  fechaInicio :string ;//= this.fechaInicio=this.dia+'/'+this.mes+'/'+this.año;
  public cuentas : datosCuenta;

  minDate = new Date(this.año, 0, 1);
     
 // maxDate = new Date(this.año, 11, 31);
  maxDate = new Date(this.año, this.mes, this.dia);


  //alert(day);
/*  minDate = new Date(año, mes, day);
  maxDate = new Date(año+1, mes-1, day);*/
  constructor(private datosCuentasServicios: datosCuentasServicio,private dateAdapter: DateAdapter<Date>) {
         // this.cuentas = datosCuentasServicios.getDatosCuentas();
            this.dateAdapter.setLocale('es-MX');   

      }
 
    obtieneValor(){
        var datePipe = new DatePipe("en-MX");
       // this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
         this.datosCuentasServicios.getFechaInicio(datePipe.transform(this.fechaInicio, 'yyyy-MM-dd'));
        
    }


}
