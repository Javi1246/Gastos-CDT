import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';

// Rutas
import { routing, appRoutingProviders } from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
import { ReimprimirComponent} from './components/reimpresion';
import {SolicitudPresupuestoComponent} from './components/SolicitudPresupuesto';
import {SolicitudFiniquitoComponent} from './components/Solicitudfiniquito';
import {AutorizacionPresupuestoComponent} from './components/AutorizacionPresupuesto';
import {RedirectComponent} from './components/redirect';
import {ComprobacionComponent} from './components/comprobacion';
import {EgresoComponent} from './components/EgresoComponent';
import {EgresoADNComponent} from './components/egresoADN';
import {IngresoADNComponent} from './components/ingresoADN';
import {DialogDataegresoADNDialog} from './components/dialog-egresoADN';
import {DialogDataIngresoADNDialog} from './components/dialog-ingresoADN';

import {Egreso925Component} from './components/Egreso925Component';
import {Egreso1225Component} from './components/Egreso1225Component';
import {DialogDataegreso925Dialog} from './components/dialog-egreso925';
import {DialogDataegreso1225Dialog} from './components/dialog-egreso1225';






//import {ReporteGastosComponent} from './components/dialog-component';
import {DialogContentExample,DialogContentExampleDialog}  from './components/dialog';
import {DialogOverviewExampleDialog}  from './components/message';
import {DialogCargar} from './components/carga';
import {MyFilterPipe} from './components/MyFilterPipe';
import {MyFilterPipe2} from './components/MyFilterPipe2';
import {FilterAutorizar,FilterAutorizarNO,Filter1025} from './components/FilterAutorizar';
import {TooltipGeneral} from './components/tooltip';
import {DialogDataEmpleadoHuellaDialog} from './components/dialog-data-empleados-dialog'; 






import { datosCuentasServicio } from  './services/datosCuentaServicio';
/*servicio datos generales*/
import {datosGeneralesServicio} from './services/datosGeneralesServicio';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import {DatepickerMinMaxExample} from './components/datepicker-min-max-example';
import {RadioNgModel} from './components/GastosRadio';
import {DateFechaFin} from './components/FechaFin';
import {DialogDataExample, DialogDataExampleDialog} from './components/dialog-data-example';
import {DialogDataReimpresion, DialogDataReimpresionDialog} from './components/dialog-reimpresion';
import {DialogDataSolcitud,DialogDataSolcitudDialog} from './components/dialog-solicitud';
import {DialogDataFiniquito,DialogDataFiniquitoDialog} from './components/dialog-finiquito';
import {DialogDataAutorizacion,DialogDataAutorizacionDialog} from './components/dialog-autorizacionsolicitud';
import {DialogDataSolcitudFletes,DialogDataSolcitudFletesDialog} from './components/dialog-solicitud-fletes';
import {DialogDataComprobacion,DialogDataComprobacionDialog} from './components/dialog-comprobacion';
import {DialogDataEgreso,DialogDataEgresoDialog} from './components/dialog-egreso';



import {Carousel} from './components/Carousel';  

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ]
})
export class PlunkerMaterialModule {}

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ProductoEditComponent,
    DatepickerMinMaxExample,
    ReimprimirComponent,
    DateFechaFin,
    RadioNgModel,    
    EgresoADNComponent,
    Egreso925Component,
    Egreso1225Component,
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogOverviewExampleDialog,
    DialogCargar,
    DialogDataReimpresion,
    DialogDataReimpresionDialog,
    SolicitudPresupuestoComponent,
    DialogDataSolcitud,
    DialogDataSolcitudDialog,
    SolicitudFiniquitoComponent,
    DialogDataFiniquito,DialogDataFiniquitoDialog,
    AutorizacionPresupuestoComponent,
    DialogDataAutorizacionDialog,
    DialogDataAutorizacion,
    RedirectComponent,
    DialogDataSolcitudFletes,
    DialogDataSolcitudFletesDialog,
    MyFilterPipe,MyFilterPipe2,FilterAutorizar,FilterAutorizarNO,Filter1025,
    TooltipGeneral,
    Carousel,
    ComprobacionComponent,
    DialogDataComprobacion,DialogDataComprobacionDialog,DialogDataEmpleadoHuellaDialog,EgresoComponent,
    DialogDataEgreso,DialogDataEgresoDialog,DialogDataegresoADNDialog,DialogDataegreso925Dialog,DialogDataegreso1225Dialog,
    IngresoADNComponent,DialogDataIngresoADNDialog
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    PlunkerMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    routing,
    NgbModule.forRoot(),
  ],
  entryComponents:[TooltipGeneral],
  providers: [
    appRoutingProviders,
    datosCuentasServicio,
    datosGeneralesServicio,
   {provide: Window, useValue: window },
  ],
  bootstrap: [AppComponent,DatepickerMinMaxExample,DateFechaFin,DialogContentExample,DialogDataExample, DialogDataExampleDialog,DialogOverviewExampleDialog,DialogCargar,DialogDataReimpresion,DialogDataReimpresionDialog,DialogDataSolcitud,DialogDataFiniquito,DialogDataFiniquitoDialog,
    DialogDataSolcitudDialog,DialogDataAutorizacionDialog,DialogDataAutorizacion,DialogDataSolcitudFletes,DialogDataSolcitudFletesDialog,TooltipGeneral,Carousel,ComprobacionComponent,DialogDataComprobacion,DialogDataComprobacionDialog,DialogDataEmpleadoHuellaDialog,DialogDataEgreso,
    DialogDataEgresoDialog,DialogDataegresoADNDialog,DialogDataegreso925Dialog,DialogDataegreso1225Dialog,DialogDataIngresoADNDialog]
})
export class AppModule { }   

