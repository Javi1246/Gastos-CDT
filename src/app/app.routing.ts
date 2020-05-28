import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
import {ReimprimirComponent} from './components/reimpresion';
import {SolicitudPresupuestoComponent } from './components/SolicitudPresupuesto';
import {SolicitudFiniquitoComponent} from './components/Solicitudfiniquito';
import {AutorizacionPresupuestoComponent} from './components/AutorizacionPresupuesto';
import {RedirectComponent} from './components/redirect';
import {ComprobacionComponent}  from './components/comprobacion';
import {EgresoComponent} from './components/EgresoComponent';
import {EgresoADNComponent} from './components/egresoADN';
import {IngresoADNComponent} from './components/ingresoADN';
import {Egreso925Component} from './components/Egreso925Component';
import {Egreso1225Component} from './components/Egreso1225Component';

 


const appRoutes: Routes = [
	/*{path: '', redirectTo: '/productos',
    pathMatch: 'full'},*/
    {path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'productos', component: ProductosListComponent},
	{path: 'crear-producto', component: ProductoAddComponent},
	{path: 'producto/:id', component: ProductoDetailComponent},
	{path: 'editar-producto/:id', component: ProductoEditComponent},
	{path: 'reimpresion', component: ReimprimirComponent},
	{path: 'solicitud', component: SolicitudPresupuestoComponent},
	{path: 'finiquito', component: SolicitudFiniquitoComponent},
	{path: 'autorizacion', component: AutorizacionPresupuestoComponent},
	{path: 'redirect',component:RedirectComponent},
	{path: 'comprobacion',component:ComprobacionComponent},
	{path: 'egreso',component:EgresoComponent},
	{path: 'egresoADN',component:EgresoADNComponent},
	{path: 'ingresoADN',component:IngresoADNComponent},
	{path: 'egreso925',component:Egreso925Component},
	{path: 'egreso1225',component:Egreso1225Component},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);