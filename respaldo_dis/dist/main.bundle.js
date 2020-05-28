webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" class=\"col-lg-10 col-lg-offset-1\">\n\n\n\n<!--<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">{{title}}</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n       <a mat-list-item routerLink=\"/home\" >Home</a> \n       <a mat-list-item routerLink=\"/productos\" >Reporte de Gastos</a> \n       <a mat-list-item routerLink=\"/reimpresion\" >Reimpresión</a> \n       <a mat-list-item routerLink=\"/solicitud\" >Solicitud</a> \n       <a mat-list-item routerLink=\"/finiquito\" >Finiquito</a> \n       <a mat-list-item routerLink=\"/autorizacion\" >Autorización</a> \n\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      \n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n-->\n\n\n\n\n\t<header id=\"header\" class=\"col-lg-12\" [style.background]=\"header_color\">\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-1 col-lg-1\">\n\t\t\t\t<!-- <img  src=\"../assets/images/gasto_icono.png\" alt=\"Random first slide\" style=\"width: 70px;height: 70px;\">  Desarrollo-->\n\t\t\t\t<img  src=\"assets/images/gasto_icono.png\" alt=\"Random first slide\" style=\"width: 70px;height: 70px;\"> <!-- Produccion -->\n\n\t\t\t</div>\n\t\t\t<div class=\"col-md-10 col-lg-10\">\n\t\t\t\t<h1>\n\t\t \t\t {{title}}\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</header>\n\n\t<nav id=\"nav\" class=\" col-lg-12 right\">\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t<ul>\n\n\t\t\t\t\t<li><a [routerLink]=\"['/home']\" [routerLinkActive]=\"['activado']\">Home</a></li>\n\n\t\t\t\t\t\t<li *ngFor=\"let menu of ListaMenu\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<a [routerLink]=\"[menu.ruta]\" [routerLinkActive]=\"['activado']\">{{menu.desc}}</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li> \n\n\t\t\t\t\t<!--\t<li><a [routerLink]=\"['/productos']\" [routerLinkActive]=\"['activado']\">Reporte de Gastos</a></li> \n\t\t\t\t\t\n\t\t\t\t\t<li><a [routerLink]=\"['/reimpresion']\" [routerLinkActive]=\"['activado']\">Reimpresión</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/solicitud']\" [routerLinkActive]=\"['activado']\">Solicitud</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/finiquito']\" [routerLinkActive]=\"['activado']\">Finiquito</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/autorizacion']\" [routerLinkActive]=\"['activado']\">Autorización</a></li> -->\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\n\n\t<section id=\"main\" class=\"col-lg-12\">\n\t\t\n\t\t<router-outlet></router-outlet>\n\t</section>\n\n\t<footer id=\"footer\" class=\"col-lg-12\">\n\t\t<p>Sistema de Gastos</p>\n\t</footer> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_datosGenerales__ = __webpack_require__("../../../../../src/app/models/datosGenerales.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_menus__ = __webpack_require__("../../../../../src/app/models/menus.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {MediaMatcher} from './media-matcher';









/*Componentes para el menu*/
var AppComponent = /** @class */ (function () {
    function AppComponent(datosCuentasServicios, datosGeneralesServicios, _productoService, dialog, changeDetectorRef) {
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this._productoService = _productoService;
        this.dialog = dialog;
        this.title = 'Sistemas de Gastos';
        this.error = false;
        this.titulos = "Alerta";
        this.ListaMenu = [];
        this.header_color = __WEBPACK_IMPORTED_MODULE_1__services_global__["a" /* GLOBAL */].header_color;
    }
    AppComponent.prototype.cargaMenus = function (id) {
        console.log('Entro cargaMenu' + id);
        // this.datosGenerales.Puesto=632;
        if (this.datosGenerales.Puesto != 632) {
            if (id == 1) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](1, "Reporte de Gastos", "/productos");
                this.ListaMenu.push(menu);
            }
            else if (id == 2) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](2, "Reimpresión", "/reimpresion");
                this.ListaMenu.push(menu);
            }
            else if (id == 3) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](3, "Solicitud", "/solicitud");
                this.ListaMenu.push(menu);
            }
            else if (id == 4) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](4, "Finiquito", "/finiquito");
                this.ListaMenu.push(menu);
            }
            else if (id == 5) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](5, "Autorizacións", "/autorizacion");
                this.ListaMenu.push(menu);
            }
            else if (id == 6) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](6, "Egreso", "/egreso");
                this.ListaMenu.push(menu);
            }
            else if (id == 7) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](7, "Comprobacion", "/comprobacion");
                this.ListaMenu.push(menu);
            }
        }
        else {
            console.log('Valor del puesto');
            console.log(this.datosGenerales.Puesto);
            //Menus para la parte de egreso 
            if (id == 1) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](6, "Ingreso", "/comprobacion"); //Opcion 1
                this.ListaMenu.push(menu);
            }
            else if (id == 2) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](7, "EgresoADN", "/egresoADN"); //Opcion 2
                this.ListaMenu.push(menu);
            }
            else if (id == 3) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](8, "Cifra Control", "/egreso"); //3 y 4 Este menu incluira pago al empleeado Gasolina
                this.ListaMenu.push(menu);
            }
            else if (id == 4) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](9, "JSA Cuenta 925", "/egreso925"); //Opcion 5
                this.ListaMenu.push(menu);
            }
            else if (id == 5) {
                var menu = new __WEBPACK_IMPORTED_MODULE_8__models_menus__["a" /* menus */](10, "JSA Cuenta 1225", "/egreso1225"); //Opcion 6
                this.ListaMenu.push(menu);
            }
        }
        console.log(this.ListaMenu);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.liga = window.location.href;
        //alert(window.location.href);
        // localStorage.setItem("servidor", null);
        this.carga = this.getParameterByName('puesto');
        this.noEmpl = Number(this.getParameterByName('numempleado'));
        this.estacion = this.getParameterByName('ws');
        this.datosGenerales = new __WEBPACK_IMPORTED_MODULE_5__models_datosGenerales__["a" /* datosGenerales */]();
        this.servidor = this.getParameterByName('servidor');
        console.log(this.servidor);
        console.log(this.servidor);
        this.datosGenerales.servidor = this.servidor;
        console.log();
        this.datosGeneralesServicios.setServidor(this.servidor);
        // this.datosGeneralesServicios.addDatosGenerales(this.datosGenerales);
        //  alert(this.servidor);
        console.log('Servidor');
        console.log(this.servidor);
        //localStorage.setItem("servidor", this.servidor);
        //	alert(this.carga);
        //	this.datosCuentasServicios.setPuesto(Number(this.carga));
        this.cuentas = this.datosCuentasServicios.getDatosCuentas();
        this._productoService.getDatosGenerales(this.noEmpl).subscribe(function (result) {
            //this.closeDialogCargar();
            if (result.code != 200) {
                console.log('Metodo de la salida de datos generales');
                console.log(result);
                //this.cuentaGastos = result.data.detCuentas;
                console.log(result.ObtenerDatosInicialesResult.EsError);
                if (result.ObtenerDatosInicialesResult.EsError == false) {
                    _this.datosGenerales = result.ObtenerDatosInicialesResult.DatosInicio;
                    // this.datosGenerales.Ceco='620673'; //demo
                    // this.datosGenerales.CecoEnt=520673; //demo
                    console.log(_this.datosGenerales);
                    _this.datosGeneralesServicios.addDatosGenerales(_this.datosGenerales);
                    _this.datosGeneralesServicios.setEstacion(_this.estacion);
                    _this.datosGeneralesServicios.setServidor(_this.servidor);
                    console.log(_this.datosGeneralesServicios.getDatosGenerales());
                    //this.menu=this.datosGenerales.Menu; 
                    console.log('this.datosGenerales.menu');
                    console.log(_this.datosGenerales.menu);
                    _this.detMenus = _this.datosGenerales.menu.split(',');
                    console.log(_this.detMenus);
                    var self = _this;
                    _this.detMenus.forEach(function (i) {
                        // self.ListaMenu= new Array[5];
                        console.log(i);
                        self.cargaMenus(i);
                    });
                    console.log('Menu ListaMenu');
                    console.log(_this.ListaMenu);
                    console.log('Valor de puesto' + _this.datosGenerales.Puesto);
                    /*Se toma solo los 3 digiro de la derecha a izquierda*/
                    _this.funcionSAP = String(_this.datosGenerales.FuncionSAP).length == 3 ? '0' + _this.datosGenerales.FuncionSAP : String(_this.datosGenerales.FuncionSAP).length == 4 ? String(_this.datosGenerales.FuncionSAP) : '0000';
                    _this.funcionSAP = String(_this.funcionSAP).trim().substr(1, 4);
                    // this.datosCuentasServicios.setPuesto(this.datosGenerales.Puesto);
                    _this.datosCuentasServicios.setPuesto(Number(_this.funcionSAP));
                }
                else {
                    _this.titulos = "Error";
                    _this.error = true;
                    _this.comentario = "Error al consultar Datos de Inicio";
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.openDialog();
                    console.log('Entro' + _this.mensaje);
                }
            }
            else {
                /*this.titulos= "Error";
                this.error=true;
                this.comentario= "Error al consultar cuentas de gastos";
                this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
                this.openDialog();
            console.log('Entro');*/
                //this.cuentaGastos = result.detCuentas;
                console.log('Entro');
            }
        }, function (error) {
            console.log('');
        });
        console.log('Valor de cuenta');
        console.log(this.cuentas);
    };
    AppComponent.prototype.openDialog = function () {
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
    };
    AppComponent.prototype.getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PlunkerMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_error_component__ = __webpack_require__("../../../../../src/app/components/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_productos_list_component__ = __webpack_require__("../../../../../src/app/components/productos-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_producto_add_component__ = __webpack_require__("../../../../../src/app/components/producto-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_producto_detail_component__ = __webpack_require__("../../../../../src/app/components/producto-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_producto_edit_component__ = __webpack_require__("../../../../../src/app/components/producto-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_reimpresion__ = __webpack_require__("../../../../../src/app/components/reimpresion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_SolicitudPresupuesto__ = __webpack_require__("../../../../../src/app/components/SolicitudPresupuesto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Solicitudfiniquito__ = __webpack_require__("../../../../../src/app/components/Solicitudfiniquito.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_AutorizacionPresupuesto__ = __webpack_require__("../../../../../src/app/components/AutorizacionPresupuesto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_redirect__ = __webpack_require__("../../../../../src/app/components/redirect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_comprobacion__ = __webpack_require__("../../../../../src/app/components/comprobacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_EgresoComponent__ = __webpack_require__("../../../../../src/app/components/EgresoComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_egresoADN__ = __webpack_require__("../../../../../src/app/components/egresoADN.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dialog_egresoADN__ = __webpack_require__("../../../../../src/app/components/dialog-egresoADN.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_Egreso925Component__ = __webpack_require__("../../../../../src/app/components/Egreso925Component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_Egreso1225Component__ = __webpack_require__("../../../../../src/app/components/Egreso1225Component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dialog_egreso925__ = __webpack_require__("../../../../../src/app/components/dialog-egreso925.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dialog_egreso1225__ = __webpack_require__("../../../../../src/app/components/dialog-egreso1225.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_dialog__ = __webpack_require__("../../../../../src/app/components/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_MyFilterPipe__ = __webpack_require__("../../../../../src/app/components/MyFilterPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_MyFilterPipe2__ = __webpack_require__("../../../../../src/app/components/MyFilterPipe2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_FilterAutorizar__ = __webpack_require__("../../../../../src/app/components/FilterAutorizar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_tooltip__ = __webpack_require__("../../../../../src/app/components/tooltip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_dialog_data_empleados_dialog__ = __webpack_require__("../../../../../src/app/components/dialog-data-empleados-dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_datepicker_min_max_example__ = __webpack_require__("../../../../../src/app/components/datepicker-min-max-example.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_GastosRadio__ = __webpack_require__("../../../../../src/app/components/GastosRadio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_FechaFin__ = __webpack_require__("../../../../../src/app/components/FechaFin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_dialog_data_example__ = __webpack_require__("../../../../../src/app/components/dialog-data-example.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_dialog_reimpresion__ = __webpack_require__("../../../../../src/app/components/dialog-reimpresion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_dialog_solicitud__ = __webpack_require__("../../../../../src/app/components/dialog-solicitud.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_dialog_finiquito__ = __webpack_require__("../../../../../src/app/components/dialog-finiquito.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_dialog_autorizacionsolicitud__ = __webpack_require__("../../../../../src/app/components/dialog-autorizacionsolicitud.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_dialog_solicitud_fletes__ = __webpack_require__("../../../../../src/app/components/dialog-solicitud-fletes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_dialog_comprobacion__ = __webpack_require__("../../../../../src/app/components/dialog-comprobacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_dialog_egreso__ = __webpack_require__("../../../../../src/app/components/dialog-egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_Carousel__ = __webpack_require__("../../../../../src/app/components/Carousel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Rutas


// Componentes




















//import {ReporteGastosComponent} from './components/dialog-component';









/*servicio datos generales*/














var PlunkerMaterialModule = /** @class */ (function () {
    function PlunkerMaterialModule() {
    }
    PlunkerMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["d" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["e" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["f" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["g" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["h" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["i" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["j" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["l" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["F" /* MatStepperModule */],
            ]
        })
    ], PlunkerMaterialModule);
    return PlunkerMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_productos_list_component__["a" /* ProductosListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_producto_add_component__["a" /* ProductoAddComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_producto_detail_component__["a" /* ProductoDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_producto_edit_component__["a" /* ProductoEditComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_datepicker_min_max_example__["a" /* DatepickerMinMaxExample */],
                __WEBPACK_IMPORTED_MODULE_15__components_reimpresion__["a" /* ReimprimirComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_FechaFin__["a" /* DateFechaFin */],
                __WEBPACK_IMPORTED_MODULE_40__components_GastosRadio__["a" /* RadioNgModel */],
                __WEBPACK_IMPORTED_MODULE_22__components_egresoADN__["a" /* EgresoADNComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_Egreso925Component__["a" /* Egreso925Component */],
                __WEBPACK_IMPORTED_MODULE_25__components_Egreso1225Component__["a" /* Egreso1225Component */],
                __WEBPACK_IMPORTED_MODULE_28__components_dialog__["a" /* DialogContentExample */],
                __WEBPACK_IMPORTED_MODULE_28__components_dialog__["b" /* DialogContentExampleDialog */],
                __WEBPACK_IMPORTED_MODULE_42__components_dialog_data_example__["a" /* DialogDataExample */],
                __WEBPACK_IMPORTED_MODULE_42__components_dialog_data_example__["b" /* DialogDataExampleDialog */],
                __WEBPACK_IMPORTED_MODULE_29__components_message__["a" /* DialogOverviewExampleDialog */],
                __WEBPACK_IMPORTED_MODULE_30__components_carga__["a" /* DialogCargar */],
                __WEBPACK_IMPORTED_MODULE_43__components_dialog_reimpresion__["a" /* DialogDataReimpresion */],
                __WEBPACK_IMPORTED_MODULE_43__components_dialog_reimpresion__["b" /* DialogDataReimpresionDialog */],
                __WEBPACK_IMPORTED_MODULE_16__components_SolicitudPresupuesto__["a" /* SolicitudPresupuestoComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_dialog_solicitud__["a" /* DialogDataSolcitud */],
                __WEBPACK_IMPORTED_MODULE_44__components_dialog_solicitud__["b" /* DialogDataSolcitudDialog */],
                __WEBPACK_IMPORTED_MODULE_17__components_Solicitudfiniquito__["a" /* SolicitudFiniquitoComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_dialog_finiquito__["a" /* DialogDataFiniquito */], __WEBPACK_IMPORTED_MODULE_45__components_dialog_finiquito__["b" /* DialogDataFiniquitoDialog */],
                __WEBPACK_IMPORTED_MODULE_18__components_AutorizacionPresupuesto__["a" /* AutorizacionPresupuestoComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_dialog_autorizacionsolicitud__["b" /* DialogDataAutorizacionDialog */],
                __WEBPACK_IMPORTED_MODULE_46__components_dialog_autorizacionsolicitud__["a" /* DialogDataAutorizacion */],
                __WEBPACK_IMPORTED_MODULE_19__components_redirect__["a" /* RedirectComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_dialog_solicitud_fletes__["a" /* DialogDataSolcitudFletes */],
                __WEBPACK_IMPORTED_MODULE_47__components_dialog_solicitud_fletes__["b" /* DialogDataSolcitudFletesDialog */],
                __WEBPACK_IMPORTED_MODULE_31__components_MyFilterPipe__["a" /* MyFilterPipe */], __WEBPACK_IMPORTED_MODULE_32__components_MyFilterPipe2__["a" /* MyFilterPipe2 */], __WEBPACK_IMPORTED_MODULE_33__components_FilterAutorizar__["a" /* FilterAutorizar */], __WEBPACK_IMPORTED_MODULE_33__components_FilterAutorizar__["b" /* FilterAutorizarNO */],
                __WEBPACK_IMPORTED_MODULE_34__components_tooltip__["a" /* TooltipGeneral */],
                __WEBPACK_IMPORTED_MODULE_50__components_Carousel__["a" /* Carousel */],
                __WEBPACK_IMPORTED_MODULE_20__components_comprobacion__["a" /* ComprobacionComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_dialog_comprobacion__["a" /* DialogDataComprobacion */], __WEBPACK_IMPORTED_MODULE_48__components_dialog_comprobacion__["b" /* DialogDataComprobacionDialog */], __WEBPACK_IMPORTED_MODULE_35__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], __WEBPACK_IMPORTED_MODULE_21__components_EgresoComponent__["a" /* EgresoComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_dialog_egreso__["a" /* DialogDataEgreso */], __WEBPACK_IMPORTED_MODULE_49__components_dialog_egreso__["b" /* DialogDataEgresoDialog */], __WEBPACK_IMPORTED_MODULE_23__components_dialog_egresoADN__["a" /* DialogDataegresoADNDialog */], __WEBPACK_IMPORTED_MODULE_26__components_dialog_egreso925__["a" /* DialogDataegreso925Dialog */], __WEBPACK_IMPORTED_MODULE_27__components_dialog_egreso1225__["a" /* DialogDataegreso1225Dialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                PlunkerMaterialModule,
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material__["j" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_34__components_tooltip__["a" /* TooltipGeneral */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_36__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
                __WEBPACK_IMPORTED_MODULE_37__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
                { provide: Window, useValue: window },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_39__components_datepicker_min_max_example__["a" /* DatepickerMinMaxExample */], __WEBPACK_IMPORTED_MODULE_41__components_FechaFin__["a" /* DateFechaFin */], __WEBPACK_IMPORTED_MODULE_28__components_dialog__["a" /* DialogContentExample */], __WEBPACK_IMPORTED_MODULE_42__components_dialog_data_example__["a" /* DialogDataExample */], __WEBPACK_IMPORTED_MODULE_42__components_dialog_data_example__["b" /* DialogDataExampleDialog */], __WEBPACK_IMPORTED_MODULE_29__components_message__["a" /* DialogOverviewExampleDialog */], __WEBPACK_IMPORTED_MODULE_30__components_carga__["a" /* DialogCargar */], __WEBPACK_IMPORTED_MODULE_43__components_dialog_reimpresion__["a" /* DialogDataReimpresion */], __WEBPACK_IMPORTED_MODULE_43__components_dialog_reimpresion__["b" /* DialogDataReimpresionDialog */], __WEBPACK_IMPORTED_MODULE_44__components_dialog_solicitud__["a" /* DialogDataSolcitud */], __WEBPACK_IMPORTED_MODULE_45__components_dialog_finiquito__["a" /* DialogDataFiniquito */], __WEBPACK_IMPORTED_MODULE_45__components_dialog_finiquito__["b" /* DialogDataFiniquitoDialog */],
                __WEBPACK_IMPORTED_MODULE_44__components_dialog_solicitud__["b" /* DialogDataSolcitudDialog */], __WEBPACK_IMPORTED_MODULE_46__components_dialog_autorizacionsolicitud__["b" /* DialogDataAutorizacionDialog */], __WEBPACK_IMPORTED_MODULE_46__components_dialog_autorizacionsolicitud__["a" /* DialogDataAutorizacion */], __WEBPACK_IMPORTED_MODULE_47__components_dialog_solicitud_fletes__["a" /* DialogDataSolcitudFletes */], __WEBPACK_IMPORTED_MODULE_47__components_dialog_solicitud_fletes__["b" /* DialogDataSolcitudFletesDialog */], __WEBPACK_IMPORTED_MODULE_34__components_tooltip__["a" /* TooltipGeneral */], __WEBPACK_IMPORTED_MODULE_50__components_Carousel__["a" /* Carousel */], __WEBPACK_IMPORTED_MODULE_20__components_comprobacion__["a" /* ComprobacionComponent */], __WEBPACK_IMPORTED_MODULE_48__components_dialog_comprobacion__["a" /* DialogDataComprobacion */], __WEBPACK_IMPORTED_MODULE_48__components_dialog_comprobacion__["b" /* DialogDataComprobacionDialog */], __WEBPACK_IMPORTED_MODULE_35__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], __WEBPACK_IMPORTED_MODULE_49__components_dialog_egreso__["a" /* DialogDataEgreso */],
                __WEBPACK_IMPORTED_MODULE_49__components_dialog_egreso__["b" /* DialogDataEgresoDialog */], __WEBPACK_IMPORTED_MODULE_23__components_dialog_egresoADN__["a" /* DialogDataegresoADNDialog */], __WEBPACK_IMPORTED_MODULE_26__components_dialog_egreso925__["a" /* DialogDataegreso925Dialog */], __WEBPACK_IMPORTED_MODULE_27__components_dialog_egreso1225__["a" /* DialogDataegreso1225Dialog */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_component__ = __webpack_require__("../../../../../src/app/components/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_productos_list_component__ = __webpack_require__("../../../../../src/app/components/productos-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_producto_add_component__ = __webpack_require__("../../../../../src/app/components/producto-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_producto_detail_component__ = __webpack_require__("../../../../../src/app/components/producto-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_producto_edit_component__ = __webpack_require__("../../../../../src/app/components/producto-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_reimpresion__ = __webpack_require__("../../../../../src/app/components/reimpresion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_SolicitudPresupuesto__ = __webpack_require__("../../../../../src/app/components/SolicitudPresupuesto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Solicitudfiniquito__ = __webpack_require__("../../../../../src/app/components/Solicitudfiniquito.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_AutorizacionPresupuesto__ = __webpack_require__("../../../../../src/app/components/AutorizacionPresupuesto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_redirect__ = __webpack_require__("../../../../../src/app/components/redirect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_comprobacion__ = __webpack_require__("../../../../../src/app/components/comprobacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_EgresoComponent__ = __webpack_require__("../../../../../src/app/components/EgresoComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_egresoADN__ = __webpack_require__("../../../../../src/app/components/egresoADN.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Egreso925Component__ = __webpack_require__("../../../../../src/app/components/Egreso925Component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Egreso1225Component__ = __webpack_require__("../../../../../src/app/components/Egreso1225Component.ts");

// Componentes
















var appRoutes = [
    /*{path: '', redirectTo: '/productos',
    pathMatch: 'full'},*/
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */] },
    { path: 'productos', component: __WEBPACK_IMPORTED_MODULE_3__components_productos_list_component__["a" /* ProductosListComponent */] },
    { path: 'crear-producto', component: __WEBPACK_IMPORTED_MODULE_4__components_producto_add_component__["a" /* ProductoAddComponent */] },
    { path: 'producto/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_producto_detail_component__["a" /* ProductoDetailComponent */] },
    { path: 'editar-producto/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_producto_edit_component__["a" /* ProductoEditComponent */] },
    { path: 'reimpresion', component: __WEBPACK_IMPORTED_MODULE_7__components_reimpresion__["a" /* ReimprimirComponent */] },
    { path: 'solicitud', component: __WEBPACK_IMPORTED_MODULE_8__components_SolicitudPresupuesto__["a" /* SolicitudPresupuestoComponent */] },
    { path: 'finiquito', component: __WEBPACK_IMPORTED_MODULE_9__components_Solicitudfiniquito__["a" /* SolicitudFiniquitoComponent */] },
    { path: 'autorizacion', component: __WEBPACK_IMPORTED_MODULE_10__components_AutorizacionPresupuesto__["a" /* AutorizacionPresupuestoComponent */] },
    { path: 'redirect', component: __WEBPACK_IMPORTED_MODULE_11__components_redirect__["a" /* RedirectComponent */] },
    { path: 'comprobacion', component: __WEBPACK_IMPORTED_MODULE_12__components_comprobacion__["a" /* ComprobacionComponent */] },
    { path: 'egreso', component: __WEBPACK_IMPORTED_MODULE_13__components_EgresoComponent__["a" /* EgresoComponent */] },
    { path: 'egresoADN', component: __WEBPACK_IMPORTED_MODULE_14__components_egresoADN__["a" /* EgresoADNComponent */] },
    { path: 'egreso925', component: __WEBPACK_IMPORTED_MODULE_15__components_Egreso925Component__["a" /* Egreso925Component */] },
    { path: 'egreso1225', component: __WEBPACK_IMPORTED_MODULE_16__components_Egreso1225Component__["a" /* Egreso1225Component */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_error_component__["a" /* ErrorComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/AutorizacionPresupuesto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorizacionPresupuestoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AutorizacionPresupuestoComponent = /** @class */ (function () {
    function AutorizacionPresupuestoComponent(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.filterArgNo = { TdaEstado: false };
        this.filterArg = { TdaEstado: true };
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Autorizacion de Solicitud';
        this.confirmado = null;
    }
    AutorizacionPresupuestoComponent.prototype.ngOnInit = function () {
        console.log('Cargar los valores de las cuentas');
        this.getCuentasGastosSolicitud();
        //this.getProductos();
        //this.getCuentasGastos();
    };
    AutorizacionPresupuestoComponent.prototype.getValidacion = function (datosCuenta) {
        this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
        this.fechaFin = this.datosCuentas.fechaFin.trim().split('-');
        // alert(this.fechaFin);
        if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de fin";
        }
        if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de Inicio";
        }
        //alert(this.datosCuentas.puesto);
        /*if (this.datosCuentas.puesto != 399 || this.datosCuentas.puesto != 35){
            this.error=true;
            this.comentario= "No cuenta con un puesto valido";
        }*/
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[1]) < parseInt(this.fechaInicio[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[2]) < parseInt(this.fechaInicio[2])) {
                this.error = true;
                this.comentario = "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El dia de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        this.mensaje = { error: this.error, comentario: this.comentario, titulo: this.titulos };
    };
    /*Metodo para obtener el nuemro de cuentas*/
    AutorizacionPresupuestoComponent.prototype.getCuentasGastosSolicitud = function () {
        var _this = this;
        try {
            this.openDialogCargar();
            this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
            console.log('getCuentasGastos');
            console.log(this.datosGenerales);
            if (this.error != true) {
                console.log('Entro a validar');
                this._productoService.getDatosGastosSolicitudAutorizadas(this.datosGenerales).subscribe(function (result) {
                    _this.closeDialogCargar();
                    if (result.code != 200) {
                        console.log(result);
                        //this.cuentaGastos = result.data.detCuentas;
                        if (result.SolicitudesAutorizadasResult.EsError != true) {
                            _this.detSolicitudAutPaso = result.SolicitudesAutorizadasResult.DetalleSolicitudes;
                            try {
                                for (var i = 0; i < _this.detSolicitudAutPaso.length; i++) {
                                    if (_this.detSolicitudAutPaso[i].TdaEstado === "") {
                                        _this.detSolicitudAutPaso[i].autorizada = false;
                                    }
                                    else {
                                        _this.detSolicitudAutPaso[i].autorizada = true;
                                    }
                                }
                                console.log('Se cargo correctamente');
                                console.log(_this.detSolicitudAutPaso);
                            }
                            catch (err) {
                                console.log(err);
                            }
                            _this.detSolicitudAut = _this.detSolicitudAutPaso;
                            _this.detSolicitudAutNO = _this.detSolicitudAutPaso;
                            console.log('Con la variable this.Autorizadas');
                            console.log(_this.detSolicitudAut);
                            if (_this.detSolicitudAut.length === 0) {
                                _this.error = true;
                                _this.comentario = "La consulta no muestra solicitudes autorizadas disponibles";
                                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                                _this.openDialog();
                                console.log(_this.cuentaGastos);
                            }
                            else if (_this.detSolicitudAut.length > 0) {
                                if (_this.datosGenerales.fiMensajeXML === 1) {
                                    _this.error = true;
                                    _this.titulos = "Aviso Importante";
                                    /*this.comentario= "Se le informa que a partir del dia "+ this.datosGenerales.fdActivaXML +"todos los gastos \n"+
                                                     "deberán ser comprobados de forma obligatoria con facturas electronicas \n"+
                                                     " Siempre y cuando la cuenta del gasto solicitado así lo exija";
                                    this.mensaje = {error:this.error,comentario:this.comentario,titulo:this.titulos};
                                    this.openDialog();*/
                                }
                            }
                        }
                        else {
                            _this.error = true;
                            _this.titulos = "Alerta";
                            _this.comentario = result.SolicitudesAutorizadasResult.Mensaje;
                            _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                            _this.openDialog();
                        }
                    }
                    else {
                        _this.titulos = "Error";
                        _this.error = true;
                        _this.comentario = "Error al consultar cuentas de gastos";
                        _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                        _this.openDialog();
                        console.log('Entro');
                        //this.cuentaGastos = result.detCuentas;
                    }
                }, function (error) {
                    //console.log(<any>error);
                    _this.closeDialogCargar();
                    _this.error = true;
                    console.log(_this.error);
                    _this.titulos = "Aviso Importante";
                    console.log(_this.titulos);
                    _this.comentario = "La consulta no muestra cuentas disponibles";
                    console.log(_this.comentario);
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    console.log(_this.mensaje);
                    _this.openDialog();
                    //this.openDialogCargar();   
                });
            }
            else {
                console.log('Entro en el error');
                console.log(this.mensaje);
                // this.closeDialogCargar();
                //	this.openDialog();
            }
        }
        catch (err) {
            console.log('Error al cargar modal');
        }
    };
    AutorizacionPresupuestoComponent.prototype.borrarConfirm = function (id) {
        this.confirmado = id;
    };
    AutorizacionPresupuestoComponent.prototype.cancelarConfirm = function () {
        this.confirmado = null;
    };
    AutorizacionPresupuestoComponent.prototype.openDialog = function () {
        var _this = this;
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            //width: '500px',
            data: { mensaje: this.mensaje }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            try {
                _this.animal = result;
            }
            catch (err) {
                console.log(err);
            }
        });
    };
    AutorizacionPresupuestoComponent.prototype.openDialogCargar = function () {
        var _this = this;
        try {
            this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
                width: '160px',
                data: { mensaje: this.mensaje }
            });
            this.dialogRefCarga.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
                try {
                    _this.animal = result;
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
        catch (err) {
            console.log('Mensaje de errror');
            console.log(err);
        }
    };
    /*openDialogCargar(): void {
      
       this.dialogRefCarga = this.dialog.open(DialogCargar, {
        width: '200px',
        data: { mensaje: this.mensaje }
      });
  
  
    }*/
    AutorizacionPresupuestoComponent.prototype.closeDialogCargar = function () {
        try {
            if (this.dialogRefCarga != null) {
                this.dialogRefCarga.close();
            }
        }
        catch (err) {
            console.log(err);
        }
        // close();
    };
    AutorizacionPresupuestoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'autorizacionSolicitud',
            template: __webpack_require__("../../../../../src/app/views/AutorizacionPresupuesto.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], AutorizacionPresupuestoComponent);
    return AutorizacionPresupuestoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/Carousel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Carousel = /** @class */ (function () {
    function Carousel(config) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    Carousel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'carousel',
            template: __webpack_require__("../../../../../src/app/views/Carousel.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]])
    ], Carousel);
    return Carousel;
}());



/***/ }),

/***/ "../../../../../src/app/components/Egreso1225Component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egreso1225Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialog_egreso1225__ = __webpack_require__("../../../../../src/app/components/dialog-egreso1225.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_CajaDetalleFolios__ = __webpack_require__("../../../../../src/app/models/CajaDetalleFolios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__ = __webpack_require__("../../../../../src/app/models/datosEgreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dialog_data_empleados_dialog__ = __webpack_require__("../../../../../src/app/components/dialog-data-empleados-dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Egreso1225Component = /** @class */ (function () {
    function Egreso1225Component(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.refempleado = 0;
        this.tipoOperacion = 5;
        this.cifracontrol = '';
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Egreso de Gastos Diversos';
        this.confirmado = null;
        this.tipoOperacion = 6;
    }
    Egreso1225Component.prototype.ngOnInit = function () {
        this.datosEgreso = new __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__["a" /* datosEgreso */](0, '', '');
        console.log('Muestra la pantalla de los folios ADN');
    };
    Egreso1225Component.prototype.opeenvalidacion = function () {
        var _this = this;
        var dia = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_dialog_egreso1225__["a" /* DialogDataegreso1225Dialog */], {
            width: '500px',
            data: {
                animal: 'panda',
                carga: this.folioADN,
                detEgresoADN: this.cajaDetalleFolios,
                desc: '',
                generales: this.datosGenerales,
                act: this.detActualizarFiniquito
            }, disableClose: true
        });
        dia.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.datosEgreso = new __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__["a" /* datosEgreso */](0, '', '');
        });
    };
    Egreso1225Component.prototype.openDialog = function () {
        var _this = this;
        console.log('Valores para la carga');
        console.log(this.datosEgreso);
        this.refempleado = this.datosEgreso.empleado;
        this.openDialogCargar();
        this.cajaDetalleFolios = new __WEBPACK_IMPORTED_MODULE_9__models_CajaDetalleFolios__["a" /* CajaDetalleFolios */]('', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, '', 0, 0, '', '', 0, false);
        /*Se cargan los valores para probar el modal */
        //	this.openCargaHuella();
        this.folioADN = Number(this.datosEgreso.referencia);
        this._productoService.getConsultaValidacionEgreso(this.folioADN, this.refempleado, this.tipoOperacion, this.cifracontrol).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length > 0 ? result.ValidaEgresoCajaResult.CajaDetalleFolios[0] : _this.cajaDetalleFolios;
                console.log('Valor de la respuesta');
                console.log(_this.cajaDetalleFolios);
                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                if (result.ValidaEgresoCajaResult.EsError == false) {
                    console.log('Se valido con exito');
                    _this.closeDialogCargar();
                }
                else {
                    console.log('Se presento un error al egresar  la solicitud');
                    _this.titulo = "Alerta";
                    _this.error = true;
                    _this.comentario = result.ValidaEgresoCajaResult.Mensaje;
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.closeDialogCargar();
                    //this.openDialogMensaje();	
                }
            }
            else {
                _this.titulo = "Alerta";
                _this.error = true;
                _this.comentario = "Error al consultar informacion de folioADN";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                _this.openDialogMensaje();
            }
        }, function (error) {
            console.log(error);
        });
    };
    Egreso1225Component.prototype.openDialogMensaje = function () {
        this.error = false;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        /* dialogRef.afterClosed().subscribe(result => {
           console.log('The dialog was closed');
           this.animal = result;
         });*/
    };
    Egreso1225Component.prototype.openDialogCargar = function () {
        var _this = this;
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (_this.error == true) {
                _this.openDialogMensaje();
            }
            else {
                _this.opeenvalidacion();
            }
        });
    };
    Egreso1225Component.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
        // close();
    };
    Egreso1225Component.prototype.openCargaHuella = function () {
        var _this = this;
        console.log('Entro en el metodo de openCargaHuella');
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], {
            data: {
                datosGenerales: this.datosGenerales,
                consulta: this.consulta
            },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.consulta = result;
            console.log('Valor de consulta');
            console.log(_this.consulta);
            console.log('Valor de consulta');
            if (_this.consulta == false) {
                _this.error = true;
                _this.titulos = "Aviso Importante";
                _this.comentario = "No se cuenta con una huella valida para egresar ";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                _this.openDialogMensaje();
            }
            else {
                _this.openDialog();
                _this.error = true;
                _this.titulos = "Aviso Importante";
                _this.comentario = "Se le informa que a partir del dia " + _this.datosGenerales.fdfechaXML + " todos los gastos \n" +
                    "deberán ser comprobados de forma obligatoria con facturas electronicas \n" +
                    " Siempre y cuando la cuenta del gasto solicitado así lo exija";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                //this.openDialogMensaje();
                //this.openDialog();
            }
        });
    };
    Egreso1225Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egresos1225',
            template: __webpack_require__("../../../../../src/app/views/egresos1225.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], Egreso1225Component);
    return Egreso1225Component;
}());



/***/ }),

/***/ "../../../../../src/app/components/Egreso925Component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egreso925Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialog_egreso925__ = __webpack_require__("../../../../../src/app/components/dialog-egreso925.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_CajaDetalleFolios__ = __webpack_require__("../../../../../src/app/models/CajaDetalleFolios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__ = __webpack_require__("../../../../../src/app/models/datosEgreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dialog_data_empleados_dialog__ = __webpack_require__("../../../../../src/app/components/dialog-data-empleados-dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Egreso925Component = /** @class */ (function () {
    function Egreso925Component(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.refempleado = 0;
        this.tipoOperacion = 5;
        this.cifracontrol = '';
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Egreso de Gastos Diversos';
        this.confirmado = null;
        this.tipoOperacion = 5;
    }
    Egreso925Component.prototype.ngOnInit = function () {
        this.datosEgreso = new __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__["a" /* datosEgreso */](0, '', '');
        console.log('Muestra la pantalla de los folios ADN');
    };
    Egreso925Component.prototype.opeenvalidacion = function () {
        var _this = this;
        var dia = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_dialog_egreso925__["a" /* DialogDataegreso925Dialog */], {
            width: '500px',
            data: {
                animal: 'panda',
                carga: this.folioADN,
                detEgresoADN: this.cajaDetalleFolios,
                desc: '',
                generales: this.datosGenerales,
                act: this.detActualizarFiniquito
            }, disableClose: true
        });
        dia.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.datosEgreso = new __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__["a" /* datosEgreso */](0, '', '');
        });
    };
    Egreso925Component.prototype.openDialog = function () {
        var _this = this;
        console.log('Valores para la carga');
        console.log(this.datosEgreso);
        this.refempleado = this.datosEgreso.empleado;
        this.openDialogCargar();
        this.cajaDetalleFolios = new __WEBPACK_IMPORTED_MODULE_9__models_CajaDetalleFolios__["a" /* CajaDetalleFolios */]('', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, '', 0, 0, '', '', 0, false);
        /*Se cargan los valores para probar el modal */
        //	this.openCargaHuella();
        this.folioADN = Number(this.datosEgreso.referencia);
        this._productoService.getConsultaValidacionEgreso(this.folioADN, this.refempleado, this.tipoOperacion, this.cifracontrol).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length > 0 ? result.ValidaEgresoCajaResult.CajaDetalleFolios[0] : _this.cajaDetalleFolios;
                console.log('Valor de la respuesta');
                console.log(_this.cajaDetalleFolios);
                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                if (result.ValidaEgresoCajaResult.EsError == false) {
                    console.log('Se valido con exito');
                    _this.closeDialogCargar();
                    /*   this.dialog.open(DialogDataegreso925Dialog, {
                           width: '500px',
                           data: {
                             animal: 'panda',
                             carga: this.folioADN,
                             detEgresoADN : this.cajaDetalleFolios ,
                             desc: '',
                             generales:this.datosGenerales,
                             act:this.detActualizarFiniquito

                           },disableClose:true
                         });*/
                }
                else {
                    console.log('Se presento un error al egresar  la solicitud');
                    _this.titulo = "Alerta";
                    _this.error = true;
                    _this.comentario = result.ValidaEgresoCajaResult.Mensaje;
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.closeDialogCargar();
                    //this.openDialogMensaje();	
                }
            }
            else {
                _this.titulo = "Alerta";
                _this.error = true;
                _this.comentario = "Error al consultar informacion de folioADN";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                _this.openDialogMensaje();
            }
        }, function (error) {
            console.log(error);
        });
    };
    Egreso925Component.prototype.openDialogMensaje = function () {
        this.error = false;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        /* dialogRef.afterClosed().subscribe(result => {
           console.log('The dialog was closed');
           this.animal = result;
         });*/
    };
    Egreso925Component.prototype.openDialogCargar = function () {
        var _this = this;
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (_this.error == true) {
                _this.openDialogMensaje();
            }
            else {
                _this.opeenvalidacion();
            }
        });
    };
    Egreso925Component.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
        // close();
    };
    Egreso925Component.prototype.openCargaHuella = function () {
        var _this = this;
        console.log('Entro en el metodo de openCargaHuella');
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], {
            data: {
                datosGenerales: this.datosGenerales,
                consulta: this.consulta
            },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.consulta = result;
            console.log('Valor de consulta');
            console.log(_this.consulta);
            console.log('Valor de consulta');
            if (_this.consulta == false) {
                _this.error = true;
                _this.titulos = "Aviso Importante";
                _this.comentario = "No se cuenta con una huella valida para egresar ";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                _this.openDialogMensaje();
            }
            else {
                _this.openDialog();
                _this.error = true;
                _this.titulos = "Aviso Importante";
                _this.comentario = "Se le informa que a partir del dia " + _this.datosGenerales.fdfechaXML + " todos los gastos \n" +
                    "deberán ser comprobados de forma obligatoria con facturas electronicas \n" +
                    " Siempre y cuando la cuenta del gasto solicitado así lo exija";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                //this.openDialogMensaje();
                //this.openDialog();
            }
        });
    };
    Egreso925Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egresos925',
            template: __webpack_require__("../../../../../src/app/views/egresos925.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], Egreso925Component);
    return Egreso925Component;
}());



/***/ }),

/***/ "../../../../../src/app/components/EgresoComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EgresoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dialog_egreso__ = __webpack_require__("../../../../../src/app/components/dialog-egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EgresoComponent = /** @class */ (function () {
    function EgresoComponent(dialog, _productoService, datosGeneralesServicios) {
        this.dialog = dialog;
        this._productoService = _productoService;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.titulo = 'Egreso de Gastos';
    }
    EgresoComponent.prototype.ngOnInit = function () {
        console.log('Se ha cargado el componente IngresoComponent.component.ts');
    };
    EgresoComponent.prototype.openDialogegreso = function (tipo) {
        /*
            3.- Egreso de Gasolinas x empleado
            4.- Egreso de Pago de Cifra Control
        */
        console.log('Valor de egreso');
        console.log(tipo);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__components_dialog_egreso__["b" /* DialogDataEgresoDialog */], {
            width: '700px',
            data: {
                carga: tipo
            },
            disableClose: true
        });
    };
    EgresoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ingreso',
            template: __webpack_require__("../../../../../src/app/views/Egreso.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], EgresoComponent);
    return EgresoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/FechaFin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppDateAdapter */
/* unused harmony export APP_DATE_FORMATS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFechaFin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppDateAdapter = /** @class */ (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppDateAdapter.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat == "input") {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
        }
        else {
            var options = { month: 'short', year: 'numeric' };
            return date.toLocaleDateString('es-mex', options);
            //return date.toDateString();
        }
    };
    AppDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return AppDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* NativeDateAdapter */]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
/**
 * @title Datepicker Min Max
 */
var DateFechaFin = /** @class */ (function () {
    //alert(day);
    /*  minDate = new Date(año, mes, day);
      maxDate = new Date(año+1, mes-1, day);*/
    function DateFechaFin(datosCuentasServicios, dateAdapter) {
        this.datosCuentasServicios = datosCuentasServicios;
        this.dateAdapter = dateAdapter;
        this.d = new Date();
        this.año = Number(this.d.getFullYear());
        this.mes = Number(this.d.getMonth());
        this.dia = Number(this.d.getDate());
        this.minDate = new Date(this.año, 0, 1);
        this.maxDate = new Date(this.año, 11, 31);
        // this.cuentas = datosCuentasServicios.getDatosCuentas();
        this.dateAdapter.setLocale('es-mex');
    }
    DateFechaFin.prototype.obtieneValor = function () {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]("en-US");
        // this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        this.datosCuentasServicios.getFechaFin(datePipe.transform(this.fechaInicio, 'yyyy-MM-dd'));
    };
    DateFechaFin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fechafin',
            template: __webpack_require__("../../../../../src/app/views/FechaFin.html"),
            styles: [__webpack_require__("../../../../../src/app/css/datepicker-min-max-example.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */], useClass: AppDateAdapter
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: APP_DATE_FORMATS
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */]])
    ], DateFechaFin);
    return DateFechaFin;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "../../../../../src/app/components/FilterAutorizar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterAutorizar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilterAutorizarNO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterAutorizar = /** @class */ (function () {
    function FilterAutorizar() {
    }
    FilterAutorizar.prototype.transform = function (items, term) {
        // I am unsure what id is here. did you mean title?
        try {
            console.log('dETERMINA ');
            console.log(term.TdaEstado);
            console.log(items);
            if (items == undefined || term == undefined) {
                console.log('El valor del filter');
                console.log(items);
                return items;
            }
            //return items.filter(item => item.fcNombre.indexOf(term) !== -1);
            console.log('Filter arnol');
            //console.log( items.filter(item => item.Autorizadas.indexOf(false) !== -1)
            return items.filter(function (item) { return String(item.autorizada).indexOf(String(term.TdaEstado)) !== -1; });
        }
        catch (eer) {
            console.log(eer);
            return items;
        }
    };
    FilterAutorizar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'filterAutorizacion',
            pure: false
        })
    ], FilterAutorizar);
    return FilterAutorizar;
}());

var FilterAutorizarNO = /** @class */ (function () {
    function FilterAutorizarNO() {
    }
    FilterAutorizarNO.prototype.transform = function (items, term) {
        // I am unsure what id is here. did you mean title?
        try {
            console.log('dETERMINA ');
            console.log(term.TdaEstado);
            console.log(items);
            if (items == undefined || term == undefined) {
                console.log('El valor del filter');
                console.log(items);
                return items;
            }
            //return items.filter(item => item.fcNombre.indexOf(term) !== -1);
            console.log('Filter arnol');
            //console.log( items.filter(item => item.Autorizadas.indexOf(false) !== -1)
            return items.filter(function (item) { return String(item.autorizada).indexOf(String(term.TdaEstado)) !== -1; });
        }
        catch (eer) {
            console.log(eer);
            return items;
        }
    };
    FilterAutorizarNO = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'filterAutorizacionNo',
            pure: false
        })
    ], FilterAutorizarNO);
    return FilterAutorizarNO;
}());



/***/ }),

/***/ "../../../../../src/app/components/GastosRadio.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioNgModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @title Radios with ngModel
 */
var RadioNgModel = /** @class */ (function () {
    function RadioNgModel(datosCuentasServicios, fb) {
        this.datosCuentasServicios = datosCuentasServicios;
        this.cuentas = [];
        //  this.cuentas = datosCuentasServicios.getDatosCuentas();
        // alert(this.datosCuentasServicios)
        this.options = fb.group({
            radios: 'auto',
        });
        // this.idCuenta=0;
    }
    RadioNgModel.prototype.ngOnInit = function () {
        //alert('El valor del valor'+this.valor);
        if (this.valor === 1) {
            this.cuentas = [
                { id: 0, desc: 'Pendientes de Autorizar' },
                { id: 1, desc: 'Autorizados' },
                { id: 2, desc: 'Rechazado' },
                { id: 4, desc: 'Afectado' },
                { id: 5, desc: 'Comprobado' },
            ];
            this.idCuenta = 0;
        }
        else if (this.valor === 2) {
            this.cuentas = [
                { id: 3, desc: 'Pendientes de Egresar' }
                // {id:6,desc:'Pendientes de Ingresar'}
            ];
            this.idCuenta = 3;
        }
        else if (this.valor === 3) {
            this.cuentas = [
                { id: 4, desc: 'Pendientes de Comprobar' },
                { id: 5, desc: 'Comprobados' },
                { id: 6, desc: 'Rechazado (Pendientes de Ingresar a Caja)' },
                { id: 7, desc: 'Ingresados a Caja' },
            ];
            this.idCuenta = 4;
        }
        else if (this.valor === 4) {
            this.cuentas = [
                { id: 4, desc: 'Pendientes de Comprobar' },
                { id: 5, desc: 'Comprobados' },
            ];
            this.idCuenta = 4;
        }
    };
    RadioNgModel.prototype.getIdCuenta = function () {
        console.log('Entro');
        console.log(this.idCuenta);
        this.datosCuentasServicios.getStatus(this.idCuenta);
        this.descripcion = this.idCuenta == 0 ? 'Pendientes de Autorizar' : this.idCuenta == 3 ? 'Autorizados' : this.idCuenta == 4 ? 'Pagados' : 'Sin descripcion';
        console.log(this.descripcion);
        this.datosCuentasServicios.setDescEstatus(this.descripcion);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RadioNgModel.prototype, "valor", void 0);
    RadioNgModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'radio-ng-model',
            template: __webpack_require__("../../../../../src/app/views/GastosRadio.html"),
            styles: [__webpack_require__("../../../../../src/app/css/radio-ng-model.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], RadioNgModel);
    return RadioNgModel;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/MyFilterPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, term) {
        // I am unsure what id is here. did you mean title?
        console.log(term);
        if (term === undefined) {
            return items;
        }
        return items.filter(function (item) { return item.fcNombre.indexOf(term) !== -1; });
        //return res.filter(item => item.fcRFC.indexOf(term) !== -1);
        //return items.filter(item => item.fcNombre.indexOf(term) !== -1);
    };
    MyFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'myfilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], MyFilterPipe);
    return MyFilterPipe;
}());

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


/***/ }),

/***/ "../../../../../src/app/components/MyFilterPipe2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFilterPipe2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFilterPipe2 = /** @class */ (function () {
    function MyFilterPipe2() {
    }
    MyFilterPipe2.prototype.transform = function (items, term) {
        // I am unsure what id is here. did you mean title?
        console.log(term);
        //var res= items.filter(item => item.fcNombre.indexOf(term) !== -1);
        return items.filter(function (item) { return item.indexOf(term) !== -1; });
    };
    MyFilterPipe2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'myfilter2',
            pure: false
        })
    ], MyFilterPipe2);
    return MyFilterPipe2;
}());



/***/ }),

/***/ "../../../../../src/app/components/SolicitudPresupuesto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudPresupuestoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SolicitudPresupuestoComponent = /** @class */ (function () {
    function SolicitudPresupuestoComponent(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Solicitud de Gastos';
        this.confirmado = null;
    }
    SolicitudPresupuestoComponent.prototype.ngOnInit = function () {
        console.log('Cargar los valores de las cuentas');
        this.getCuentasGastosSolicitud();
        //this.getProductos();
        //this.getCuentasGastos();
    };
    SolicitudPresupuestoComponent.prototype.getProductos = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (result) {
            if (result.code != 200) {
                console.log(result);
            }
            else {
                _this.productos = result.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudPresupuestoComponent.prototype.getValidacion = function (datosCuenta) {
        this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
        this.fechaFin = this.datosCuentas.fechaFin.trim().split('-');
        // alert(this.fechaFin);
        if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de fin";
        }
        if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de Inicio";
        }
        //alert(this.datosCuentas.puesto);
        /*if (this.datosCuentas.puesto != 399 || this.datosCuentas.puesto != 35){
            this.error=true;
            this.comentario= "No cuenta con un puesto valido";
        }*/
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[1]) < parseInt(this.fechaInicio[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[2]) < parseInt(this.fechaInicio[2])) {
                this.error = true;
                this.comentario = "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El dia de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        this.mensaje = { error: this.error, comentario: this.comentario, titulo: this.titulos };
    };
    /*Metodo para obtener el nuemro de cuentas*/
    SolicitudPresupuestoComponent.prototype.getCuentasGastosSolicitud = function () {
        var _this = this;
        this.openDialogCargar();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('getCuentasGastos');
        console.log(this.datosGenerales);
        if (this.error != true) {
            console.log('Entro a validar');
            this._productoService.getDatosGastosSolicitud(this.datosGenerales).subscribe(function (result) {
                _this.closeDialogCargar();
                if (result.code != 200) {
                    console.log(result);
                    //this.cuentaGastos = result.data.detCuentas;
                    //this.cuentasSolicitud = result.detComponentesProsupuestoxTienda;
                    _this.cuentasSolicitud = result.CentralComponenetesDePresupuestoPorTiendaResult.DetalleCuentas;
                    if (result.CentralComponenetesDePresupuestoPorTiendaResult.EsError === false) {
                        if (_this.cuentasSolicitud.length === 0) {
                            _this.error = true;
                            _this.comentario = "La consulta no muestra cuentas disponibles";
                            _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                            _this.openDialog();
                            console.log(_this.cuentaGastos);
                        }
                        else if (_this.cuentasSolicitud.length > 0) {
                            if (_this.datosGenerales.fiMensajeXML === 1) {
                                _this.error = true;
                                _this.titulos = "Aviso Importante";
                                _this.comentario = "Se le informa que a partir del dia " + _this.datosGenerales.fdfechaXML + " todos los gastos \n" +
                                    "deberán ser comprobados de forma obligatoria con facturas electronicas \n" +
                                    " Siempre y cuando la cuenta del gasto solicitado así lo exija";
                                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                                _this.openDialog();
                            }
                        }
                    }
                    else {
                        _this.error = true;
                        _this.titulos = "Aviso Importante";
                        _this.comentario = result.CentralComponenetesDePresupuestoPorTiendaResult.Mensaje;
                        _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                        _this.openDialog();
                    }
                }
                else {
                    _this.titulos = "Error";
                    _this.error = true;
                    _this.comentario = "Error al consultar cuentas de gastos";
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.openDialog();
                    console.log('Entro');
                    //this.cuentaGastos = result.detCuentas;
                }
            }, function (error) {
                //console.log(<any>error);
                _this.closeDialogCargar();
                _this.error = true;
                console.log(_this.error);
                _this.titulos = "Aviso Importante";
                console.log(_this.titulos);
                _this.comentario = "La consulta no muestra cuentas disponibles";
                console.log(_this.comentario);
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                console.log(_this.mensaje);
                _this.openDialog();
                //this.openDialogCargar();   
            });
        }
        else {
            console.log('Entro en el error');
            console.log(this.mensaje);
            // this.closeDialogCargar();
            //	this.openDialog();
        }
    };
    SolicitudPresupuestoComponent.prototype.borrarConfirm = function (id) {
        this.confirmado = id;
    };
    SolicitudPresupuestoComponent.prototype.cancelarConfirm = function () {
        this.confirmado = null;
    };
    SolicitudPresupuestoComponent.prototype.onDeleteProducto = function (id) {
        var _this = this;
        this._productoService.deleteProducto(id).subscribe(function (response) {
            if (response.code == 200) {
                _this.getProductos();
            }
            else {
                alert('Error al borrar producto');
            }
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudPresupuestoComponent.prototype.openDialog = function () {
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //this.animal = result;
        });
    };
    SolicitudPresupuestoComponent.prototype.openDialogCargar = function () {
        console.log('openDialogCargar()');
        this.dialogRefCarga = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    /*openDialogCargar(): void {
      
       this.dialogRefCarga = this.dialog.open(DialogCargar, {
        width: '200px',
        data: { mensaje: this.mensaje }
      });
  
  
    }*/
    SolicitudPresupuestoComponent.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
        // close();
    };
    SolicitudPresupuestoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reimpresion',
            template: __webpack_require__("../../../../../src/app/views/solicitudPresupuesto.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], SolicitudPresupuestoComponent);
    return SolicitudPresupuestoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/Solicitudfiniquito.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudFiniquitoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialog_finiquito__ = __webpack_require__("../../../../../src/app/components/dialog-finiquito.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SolicitudFiniquitoComponent = /** @class */ (function () {
    function SolicitudFiniquitoComponent(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Pago de Finiquito';
        this.confirmado = null;
    }
    SolicitudFiniquitoComponent.prototype.ngOnInit = function () {
        console.log('Cargar los valores de las cuentas');
        //this.getCuentasGastosSolicitud();
        //this.getProductos();
        //this.getCuentasGastos();
    };
    SolicitudFiniquitoComponent.prototype.getProductos = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (result) {
            if (result.code != 200) {
                console.log(result);
            }
            else {
                _this.productos = result.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudFiniquitoComponent.prototype.getValidacion = function (datosCuenta) {
        this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
        this.fechaFin = this.datosCuentas.fechaFin.trim().split('-');
        // alert(this.fechaFin);
        if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de fin";
        }
        if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de Inicio";
        }
        //alert(this.datosCuentas.puesto);
        /*if (this.datosCuentas.puesto != 399 || this.datosCuentas.puesto != 35){
            this.error=true;
            this.comentario= "No cuenta con un puesto valido";
        }*/
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[1]) < parseInt(this.fechaInicio[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[2]) < parseInt(this.fechaInicio[2])) {
                this.error = true;
                this.comentario = "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El dia de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        this.mensaje = { error: this.error, comentario: this.comentario, titulo: this.titulos };
    };
    /*Metodo para abrir el modal de finiquito*/
    SolicitudFiniquitoComponent.prototype.openDialog = function () {
        var _this = this;
        //alert(this.folioFBP);
        this.openDialogCargar();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this._productoService.getConsultaFiniquito(this.folioFBP).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                //this.detFiniquito = result.detFiniquito;
                _this.detFiniquito = result.ConsultaFiniquitoResult.ConsultaFiniquito;
                _this.detActualizarFiniquito = result.actFiniquito;
                console.log(_this.ReporteGastos);
                if (result.ConsultaFiniquitoResult.EsError != true) {
                    _this.error = false;
                    _this.closeDialogCargar();
                    /*	this.dialog.open(DialogDataFiniquitoDialog, {
                            data: {
                              animal: 'panda',
                              carga: this.folioFBP,
                              detFiniquito : this.detFiniquito,
                              desc: '',
                              generales:this.datosGenerales,
                              act:this.detActualizarFiniquito
    
                            },disableClose:true
                          });
    
                          */
                }
                else {
                    _this.titulos = "Alerta";
                    _this.error = true;
                    _this.comentario = result.ConsultaFiniquitoResult.Mensaje;
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.closeDialogCargar();
                    //this.openDialogMensaje();			
                }
                //this.folioFBP=0;
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    /*Metodo para obtener el nuemro de cuentas*/
    SolicitudFiniquitoComponent.prototype.getCuentasGastosSolicitud = function () {
        var _this = this;
        this.openDialogCargar();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('getCuentasGastos');
        console.log(this.datosGenerales);
        /*validacion de las fechas*/
        //this.getValidacion(this.datosCuentas);
        /*
            if (this.datosCuentas.cuenta=== 0){
                this.error=true;
                //this.mensaje= "Favor de Seleccionar una fecha de Inicio";
            }
                 
        */
        if (this.error != true) {
            console.log('Entro a validar');
            this._productoService.getDatosGastosSolicitud(this.datosGenerales).subscribe(function (result) {
                _this.closeDialogCargar();
                if (result.code != 200) {
                    console.log(result);
                    //this.cuentaGastos = result.data.detCuentas;
                    _this.cuentasSolicitud = result.detComponentesProsupuestoxTienda;
                    if (_this.cuentasSolicitud.length === 0) {
                        _this.error = true;
                        _this.comentario = "La consulta no muestra cuentas disponibles";
                        _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                        _this.openDialog();
                        console.log(_this.cuentaGastos);
                    }
                    else if (_this.cuentasSolicitud.length > 0) {
                        if (_this.datosGenerales.fiMensajeXML === 1) {
                            _this.error = true;
                            _this.titulos = "Aviso Importante";
                            _this.comentario = "Se le informa que a partir del dia " + _this.datosGenerales.fdActivaXML + "todos los gastos \n" +
                                "deberán ser comprobados de forma obligatoria con facturas electronicas \n" +
                                " Siempre y cuando la cuenta del gasto solicitado así lo exija";
                            _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                            _this.openDialog();
                        }
                    }
                }
                else {
                    _this.titulos = "Error";
                    _this.error = true;
                    _this.comentario = "Error al consultar cuentas de gastos";
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.openDialog();
                    console.log('Entro');
                    //this.cuentaGastos = result.detCuentas;
                }
            }, function (error) {
                //console.log(<any>error);
                _this.closeDialogCargar();
                _this.error = true;
                console.log(_this.error);
                _this.titulos = "Aviso Importante";
                console.log(_this.titulos);
                _this.comentario = "La consulta no muestra cuentas disponibles";
                console.log(_this.comentario);
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                console.log(_this.mensaje);
                _this.openDialog();
                _this.openDialogCargar();
            });
        }
        else {
            console.log('Entro en el error');
            console.log(this.mensaje);
            // this.closeDialogCargar();
            //	this.openDialog();
        }
    };
    SolicitudFiniquitoComponent.prototype.borrarConfirm = function (id) {
        this.confirmado = id;
    };
    SolicitudFiniquitoComponent.prototype.cancelarConfirm = function () {
        this.confirmado = null;
    };
    SolicitudFiniquitoComponent.prototype.onDeleteProducto = function (id) {
        var _this = this;
        this._productoService.deleteProducto(id).subscribe(function (response) {
            if (response.code == 200) {
                _this.getProductos();
            }
            else {
                alert('Error al borrar producto');
            }
        }, function (error) {
            console.log(error);
        });
    };
    /*openDialog(): void {

        this.error=false;
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { mensaje: this.mensaje }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }*/
    SolicitudFiniquitoComponent.prototype.openDialogMensaje = function () {
        this.error = false;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        /* dialogRef.afterClosed().subscribe(result => {
           console.log('The dialog was closed');
           this.animal = result;
         });*/
    };
    SolicitudFiniquitoComponent.prototype.openDialogCargar = function () {
        var _this = this;
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            if (_this.error) {
                _this.openDialogMensaje();
            }
            else {
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_dialog_finiquito__["b" /* DialogDataFiniquitoDialog */], {
                    data: {
                        animal: 'panda',
                        carga: _this.folioFBP,
                        detFiniquito: _this.detFiniquito,
                        desc: '',
                        generales: _this.datosGenerales,
                        act: _this.detActualizarFiniquito
                    }, disableClose: true
                });
            }
        });
    };
    /*openDialogCargar(): void {
      
       this.dialogRefCarga = this.dialog.open(DialogCargar, {
        width: '200px',
        data: { mensaje: this.mensaje }
      });
  
  
    }*/
    SolicitudFiniquitoComponent.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
        // close();
    };
    SolicitudFiniquitoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'finiquito',
            template: __webpack_require__("../../../../../src/app/views/solicitudFiniquito.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], SolicitudFiniquitoComponent);
    return SolicitudFiniquitoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/carga.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogCargar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogCargar = /** @class */ (function () {
    function DialogCargar(dialogRefCarga, data) {
        this.dialogRefCarga = dialogRefCarga;
        this.data = data;
    }
    DialogCargar.prototype.onNoClick = function () {
        this.dialogRefCarga.close();
    };
    DialogCargar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cargar',
            template: __webpack_require__("../../../../../src/app/views/cargar.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogCargar);
    return DialogCargar;
}());



/***/ }),

/***/ "../../../../../src/app/components/comprobacion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialog_data_empleados_dialog__ = __webpack_require__("../../../../../src/app/components/dialog-data-empleados-dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComprobacionComponent = /** @class */ (function () {
    function ComprobacionComponent(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Comprobacion de Gastos en Tienda';
        this.confirmado = null;
        this.datosCuentasServicios.reiniciar();
        this.consulta = false;
        //	this.openCargaHuella();
    }
    ComprobacionComponent.prototype.openCargaHuella = function () {
        var _this = this;
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('Entro en el metodo de openCargaHuella');
        var dialogRef = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_8__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], {
            data: {
                datosGenerales: this.datosGenerales,
                consulta: this.consulta
            },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.consulta = result;
            _this.datosCuentasServicios.setHuella(_this.consulta);
            // alert(this.consulta);
        });
    };
    ComprobacionComponent.prototype.openDialogMensaje = function () {
        console.log('Entro en el metodo de openDialogMensaje');
        this.error = false;
        this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje }
        });
    };
    ComprobacionComponent.prototype.ngOnInit = function () {
        console.log('productos-list.component.ts cargado');
        //this.getProductos();
        //this.getCuentasGastos();
    };
    ComprobacionComponent.prototype.getProductos = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (result) {
            if (result.code != 200) {
                console.log(result);
            }
            else {
                _this.productos = result.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ComprobacionComponent.prototype.getValidacion = function (datosCuenta) {
        this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
        this.fechaFin = this.datosCuentas.fechaFin.trim().split('-');
        // alert(this.fechaFin);
        if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de fin";
        }
        if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de Inicio";
        }
        //alert(this.datosCuentas.puesto);
        /*if (this.datosCuentas.puesto != 399 || this.datosCuentas.puesto != 35){
            this.error=true;
            this.comentario= "No cuenta con un puesto valido";
        }*/
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[1]) < parseInt(this.fechaInicio[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[2]) < parseInt(this.fechaInicio[2])) {
                this.error = true;
                this.comentario = "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El dia de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        this.mensaje = { error: this.error, comentario: this.comentario, titulo: this.titulos };
    };
    /*Metodo para obtener el nuemro de cuentas*/
    ComprobacionComponent.prototype.getCuentasGastos = function () {
        var _this = this;
        this.openDialogCargar();
        this.datosCuentas = this.datosCuentasServicios.getDatosCuentas();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('getCuentasGastos');
        console.log(this.datosCuentas);
        /*validacion de las fechas*/
        this.getValidacion(this.datosCuentas);
        if (this.error != true) {
            console.log('Entro a validar');
            this._productoService.getCuentasReimpresion(this.datosCuentas, this.datosGenerales.FuncionSAP).subscribe(function (result) {
                _this.closeDialogCargar();
                if (result.code != 200) {
                    console.log(result);
                    _this.cuentaGastos = result.ConsultaCuentasReimpresionResult.CuentasReimpresion;
                    console.log(_this.cuentaGastos);
                    if (result.ConsultaCuentasReimpresionResult.EsError === true) {
                        console.log('Entro en el error' + result.ConsultaCuentasReimpresionResult.Mensaje);
                        _this.titulos = "Alerta";
                        _this.error = true;
                        _this.comentario = result.ConsultaCuentasReimpresionResult.Mensaje;
                        _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                        //this.closeDialogCargar();
                        _this.openDialog();
                    }
                    else {
                        _this.titulos = "Error";
                        _this.error = true;
                        _this.comentario = "Error al consultar cuentas de gastos";
                        _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                        //this.closeDialogCargar();
                        //this.dialogCarga.close()
                        _this.openDialog();
                        console.log('Entro');
                    }
                }
            }, function (error) {
                console.log(error);
                _this.closeDialogCargar();
                _this.titulos = "Error";
                _this.error = true;
                _this.comentario = "Error al consultar cuentas de gastos";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                //this.closeDialogCargar();
                //this.dialogCarga.close()
                _this.openDialog();
                console.log('Entro');
            });
        }
        else {
            console.log('Entro en el error');
            console.log(this.mensaje);
            this.closeDialogCargar();
            this.openDialog();
        }
    };
    ComprobacionComponent.prototype.borrarConfirm = function (id) {
        this.confirmado = id;
    };
    ComprobacionComponent.prototype.cancelarConfirm = function () {
        this.confirmado = null;
    };
    ComprobacionComponent.prototype.openDialog = function () {
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        /*dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });*/
    };
    ComprobacionComponent.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        /*this.dialogRefCarga.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });*/
    };
    /*openDialogCargar(): void {
      
       this.dialogRefCarga = this.dialog.open(DialogCargar, {
        width: '200px',
        data: { mensaje: this.mensaje }
      });
  
  
    }*/
    ComprobacionComponent.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    ComprobacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'comprobacion',
            template: __webpack_require__("../../../../../src/app/views/comprobacion.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], ComprobacionComponent);
    return ComprobacionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/datepicker-min-max-example.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppDateAdapter */
/* unused harmony export APP_DATE_FORMATS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerMinMaxExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppDateAdapter = /** @class */ (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppDateAdapter.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat == "input") {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
        }
        else {
            var options = { month: 'short', year: 'numeric' };
            return date.toLocaleDateString('es-mex', options);
            //return date.toDateString();
        }
    };
    AppDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return AppDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* NativeDateAdapter */]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
/**
 * @title Datepicker Min Max
 */
var DatepickerMinMaxExample = /** @class */ (function () {
    //alert(day);
    /*  minDate = new Date(año, mes, day);
      maxDate = new Date(año+1, mes-1, day);*/
    function DatepickerMinMaxExample(datosCuentasServicios, dateAdapter) {
        this.datosCuentasServicios = datosCuentasServicios;
        this.dateAdapter = dateAdapter;
        this.d = new Date();
        this.año = Number(this.d.getFullYear());
        this.mes = Number(this.d.getMonth());
        this.dia = Number(this.d.getDate());
        this.minDate = new Date(this.año, 0, 1);
        this.maxDate = new Date(this.año, 11, 31);
        // this.cuentas = datosCuentasServicios.getDatosCuentas();
        this.dateAdapter.setLocale('es-mex');
    }
    DatepickerMinMaxExample.prototype.obtieneValor = function () {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]("en-US");
        // this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        this.datosCuentasServicios.getFechaInicio(datePipe.transform(this.fechaInicio, 'yyyy-MM-dd'));
    };
    DatepickerMinMaxExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'datepicker-min-max-example',
            template: __webpack_require__("../../../../../src/app/views/datepicker-min-max-example.html"),
            styles: [__webpack_require__("../../../../../src/app/css/datepicker-min-max-example.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */], useClass: AppDateAdapter
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: APP_DATE_FORMATS
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */]])
    ], DatepickerMinMaxExample);
    return DatepickerMinMaxExample;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-autorizacionsolicitud.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataAutorizacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataAutorizacionDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/**
 * @title Injecting data when opening a dialog
 */
var DialogDataAutorizacion = /** @class */ (function () {
    function DialogDataAutorizacion(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
    }
    DialogDataAutorizacion.prototype.retorno = function () {
    };
    DialogDataAutorizacion.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_4__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    DialogDataAutorizacion.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataAutorizacion.prototype.openDialogPrueba = function () {
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('paso' + this.datosGenerales);
        /*Conulta del servicio*/
        console.log('Antes de abrir el pop');
        try {
            this.dialog.open(DialogDataAutorizacionDialog, {
                //width: '700px',
                data: {
                    animal: 'panda',
                    carga: this.valor,
                    /*requiere:this.requiereXML,
                    descp: this.cuentaGastosXML,*/
                    datosGenerales: this.datosGenerales
                },
                disableClose: true
            });
        }
        catch (err) {
            console.log('Error al cargar dialog');
            console.log(err);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataAutorizacion.prototype, "valor", void 0);
    DialogDataAutorizacion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-autorizacionsolicitudes',
            template: __webpack_require__("../../../../../src/app/views/dialog-autorizacion.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataAutorizacion);
    return DialogDataAutorizacion;
}());

var DialogDataAutorizacionDialog = /** @class */ (function () {
    /* cuenta:string;
     importe:number;
     factura:string;
     justificacion:string;*/
    function DialogDataAutorizacionDialog(data, datosCuentasServicios, _productoService2, router) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.router = router;
        this.MessageError = false;
        this.imprimirCorrectamente = true;
        this.ocultarTitulo = true;
        /*this.cuenta=data.cuenta+data.descripcion;
        this.importe=0.0;
        this.factura='';
        this.justificacion='';*/
        this.detAutizacionSolicitud = data.carga;
        this.pantalla = false;
        this.titulo = 'Solicitud de Gastos';
        if (this.detAutizacionSolicitud.TdaEstado == "") {
            this.titulo = 'Rechazo de Solicitud de Gastos';
        }
        this.boton = true;
        this.habilitarAgregar = false;
        console.log('Carga del detalle');
        console.log(this.detAutizacionSolicitud);
    }
    DialogDataAutorizacionDialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        //this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
    };
    DialogDataAutorizacionDialog.prototype.onSubmit = function () {
    };
    DialogDataAutorizacionDialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.egresos.importe > 0 && this.egresos.factura.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    //getDetalleReimpresion
    DialogDataAutorizacionDialog.prototype.reimpresionSolicitudGastos = function () {
        var _this = this;
        this.imprimirCorrectamente = false;
        this.ocultarTitulo = false;
        this.pantalla = true;
        this.MessageError = false;
        console.log('Entro en el metodo insertaSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        try {
            this._productoService2.getDetalleReimpresion(this.detAutizacionSolicitud.FolioADN).subscribe(function (result) {
                console.log('RESULTADO');
                console.log(result);
                if (result.code != 200) {
                    console.log(result);
                    if (result.detalleSolicitudImpresionResult.EsError == false) {
                        _this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                        console.log(_this.ticket);
                        _this.imprimirEgreso(_this.ticket);
                    }
                    else {
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.MessageError = true;
                        _this.mensaje = result.detalleSolicitudImpresionResult.Mensaje;
                        _this.boton = true;
                        console.log(_this.mensaje);
                    }
                }
                else {
                    console.log('Entro');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                    //console.log(this.ReporteGastos);
                }
            }, function (error) {
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.MessageError = true;
                _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
            });
            /*Fin de servicio*/
        }
        catch (err) {
            this.titulo = "Error";
            this.pantalla = true;
            this.MessageError = true;
            this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
            this.boton = true;
            console.log(this.mensaje);
        }
    };
    DialogDataAutorizacionDialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        this.imprimirCorrectamente = false;
        this.ocultarTitulo = false;
        this.pantalla = true;
        this.MessageError = false;
        console.log('Entro en el metodo insertaSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        try {
            this._productoService2.getActualizarSolicitudGastos(this.data.datosGenerales, this.detAutizacionSolicitud).subscribe(function (result) {
                console.log('RESULTADO');
                console.log(result);
                if (result.code != 200) {
                    console.log(result);
                    if (result.ActualizaSolicitudResult.EsError == false) {
                        _this.ticket = result.ActualizaSolicitudResult.DetCuentasReimpresion[0];
                        console.log(_this.ticket);
                        if (_this.detAutizacionSolicitud.TdaEstado == "") {
                            _this.ocultarTitulo = true;
                            _this.titulo = "Error";
                            _this.pantalla = true;
                            _this.MessageError = true;
                            _this.mensaje = result.ActualizaSolicitudResult.Mensaje;
                            _this.boton = true;
                            console.log(_this.mensaje);
                        }
                        else {
                            _this.imprimirEgreso(_this.ticket);
                        }
                    }
                    else {
                        _this.ocultarTitulo = true;
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.MessageError = true;
                        _this.mensaje = result.ActualizaSolicitudResult.Mensaje;
                        _this.boton = true;
                        console.log(_this.mensaje);
                    }
                }
                else {
                    console.log('Entro');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                    //console.log(this.ReporteGastos);
                }
            }, function (error) {
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.MessageError = true;
                _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
            });
            /*Fin de servicio*/
        }
        catch (err) {
            this.titulo = "Error";
            this.pantalla = true;
            this.MessageError = true;
            this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
            this.boton = true;
            console.log(this.mensaje);
        }
    };
    DialogDataAutorizacionDialog.prototype.imprimirEgreso = function (ticket) {
        var _this = this;
        // alert('El valor del '+ticket.FolioAdn);
        this.imprimirCorrectamente = false;
        this.ocultarTitulo = false;
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        this._productoService2.setArchivoImprimir(this.data.datosGenerales, this.ticket).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService2.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService2.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                //this.ocultarTitulo=true;
                                /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                  this.img.nativeElement.src = this.src;*/
                                /*Consumir el metodo para imprimir el documento*/
                                /*Fin del metodo para imprimir ticket*/
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.titulo = "Error";
                                //this.MessageError=f;
                                _this.pantalla = true;
                                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                _this.ocultarTitulo = false;
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            // this.MessageError=true;
                            _this.pantalla = true;
                            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        // this.MessageError=true;
                        _this.pantalla = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    //  this.MessageError=true;
                    _this.pantalla = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                //  this.MessageError=true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            // this.MessageError=true;
            _this.pantalla = true;
            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
            _this.boton = true;
        });
        /*Fin del metodo de reimpresion*/
    };
    DialogDataAutorizacionDialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataAutorizacionDialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        this.boton = true;
    };
    DialogDataAutorizacionDialog.prototype.redirect = function () {
        console.log('Entro en redirect');
        // window.location.href=window.location.href;
        this.router.navigate(['redirect']);
        console.log('Entro en redirect');
    };
    DialogDataAutorizacionDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-autorizacion-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-autorizacion-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], DialogDataAutorizacionDialog);
    return DialogDataAutorizacionDialog;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/dialog-comprobacion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataComprobacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataComprobacionDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * @title Injecting data when opening a dialog
 */
var DialogDataComprobacion = /** @class */ (function () {
    function DialogDataComprobacion(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
    }
    DialogDataComprobacion.prototype.retorno = function () {
    };
    DialogDataComprobacion.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_5__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    DialogDataComprobacion.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataComprobacion.prototype.openDialog = function () {
        /*Metodo para la carga de la Informaciòn*/
        var _this = this;
        //    this.openDialogCargar();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this.datosCuentasServicios.setCuenta(this.valor.NoCuenta);
        this.cuentas = this.datosCuentasServicios.getDatosCuentas();
        //this.cuentas.cuenta=this.data.carga.NoCuenta
        console.log('getReporteGastos');
        console.log(this.cuentas);
        this._productoService.getDetalleCuentasReimpresion(this.cuentas, this.datosGenerales.FuncionSAP).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.ReporteGastos = result.ConsultaDetCuentasReimpresionResult.DetCuentasReimpresion;
                console.log(_this.ReporteGastos);
                _this.dialog.open(DialogDataComprobacionDialog, {
                    data: {
                        animal: 'panda',
                        carga: _this.valor,
                        cuentaGastos: _this.ReporteGastos,
                        desc: _this.cuentas.descEstatus,
                        generales: _this.datosGenerales,
                        consulta: _this.cuentas.huella
                    },
                    disableClose: true
                });
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataComprobacion.prototype, "valor", void 0);
    DialogDataComprobacion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-comprobacion',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-comprobacion.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataComprobacion);
    return DialogDataComprobacion;
}());

var DialogDataComprobacionDialog = /** @class */ (function () {
    //  this.datosGeneralesServicios.getDatosGenerales();
    function DialogDataComprobacionDialog(data, datosCuentasServicios, _productoService) {
        //this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.pantalla = false;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.boton = true;
        this.MessageProceder = true;
        this.mostrarFile = false;
        this.cabecero = true;
        this.consulta = this.data.consulta;
        console.log('Se el valor de consulta en el metodo DialogDataComprobacionDialog ' + this.consulta);
        this.consulta = false;
        console.log('Se el valor de consulta en el metodo DialogDataComprobacionDialog despues' + this.consulta);
    }
    DialogDataComprobacionDialog.prototype.abrirFile = function (archivo) {
        console.log('Entro en el metodo de cargar el archivo' + archivo);
        $('#' + archivo).click();
    };
    DialogDataComprobacionDialog.prototype.mostrarMensaje = function (ticket) {
        // alert('Entro en el metodo mostrarMensaje');
        this.pantalla = true;
        this.MessageError = false;
        this.MessageProceder = true;
        this.valorSeleccionado = ticket;
        console.log(ticket);
    };
    DialogDataComprobacionDialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
        if (this.filesToUpload != null) {
            this.nombreArchivo = 'Se selecciono el archivo: ' + this.filesToUpload[0].name;
        }
        //console.log('egresos antres');
        //console.log(this.egresos);
        //    this.cargarArchivo(this.filesToUpload);
        //   console.log('Los comprobantes');
        //  console.log(this.comprobantes);
    };
    DialogDataComprobacionDialog.prototype.aceptarComprobacion = function () {
        console.log('Valor del folio ADN seleccionado');
        console.log(this.valorSeleccionado);
        this.reimpresionSolicitudGastos();
    };
    DialogDataComprobacionDialog.prototype.reimpresionSolicitudGastos = function () {
        var _this = this;
        this.pantalla = true;
        this.MessageError = false;
        this.MessageProceder = false;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        console.log('Entro en el metodo reimpresionSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        // var UUID=this.Complemento!=null ?this.Complemento.UUID:"";
        try {
            this._productoService.getDetalleReimpresion(this.valorSeleccionado.FolioAdn).subscribe(function (result) {
                console.log('RESULTADO');
                console.log(result);
                if (result.code != 200) {
                    console.log(result);
                    if (result.detalleSolicitudImpresionResult.EsError == false) {
                        _this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                        console.log(_this.ticket);
                        _this.imprimirEgreso(_this.ticket);
                    }
                    else {
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.MessageError = true;
                        _this.mensaje = result.detalleSolicitudImpresionResult.Mensaje;
                        _this.boton = true;
                        _this.cabecero = true;
                        console.log(_this.mensaje);
                    }
                }
                else {
                    console.log('Entro');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                    //console.log(this.ReporteGastos);
                }
            }, function (error) {
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.MessageError = true;
                _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
            });
            /*Fin de servicio*/
        }
        catch (err) {
            this.titulo = "Error";
            this.pantalla = true;
            this.MessageError = true;
            this.mensaje = "Error al imprimir comprobante , Favor de intentarlo nuevamente";
            this.boton = true;
            console.log(this.mensaje);
        }
    };
    DialogDataComprobacionDialog.prototype.imprimirEgreso = function (ticket) {
        var _this = this;
        // alert('El valor del '+ticket.FolioAdn);
        this.imprimirCorrectamente = false;
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        this._productoService.setArchivoImprimirIngreso(this.data.generales, this.ticket).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                  this.img.nativeElement.src = this.src;*/
                                /*Consumir el metodo para imprimir el documento*/
                                /*Fin del metodo para imprimir ticket*/
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                console.log('Entro');
                                // console.log(this.ReporteGastos);
                                console.log('Error al guaradar solicitud de finiquito');
                                _this.titulo = "Error";
                                _this.pantalla = true;
                                //  this.MessageError=true;
                                _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                console.log(_this.mensaje);
                            }
                        }, function (error) {
                            console.log('Error al guaradar solicitud de finiquito');
                            _this.titulo = "Error";
                            _this.pantalla = true;
                            // this.MessageError=true;
                            _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                            _this.boton = true;
                            console.log(_this.mensaje);
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Error al guaradar solicitud de finiquito');
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        // this.MessageError=true;
                        _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        console.log(_this.mensaje);
                    }
                }, function (error) {
                    console.log('Error al guaradar solicitud de finiquito');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    // this.MessageError=true;
                    _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Error al guaradar solicitud de finiquito');
                _this.titulo = "Error";
                _this.pantalla = true;
                // this.MessageError=true;
                _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            console.log('Error al guaradar solicitud de finiquito');
            _this.titulo = "Error";
            _this.pantalla = true;
            //this.MessageError=true;
            _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
            _this.boton = true;
            console.log(_this.mensaje);
        });
        /*Fin del metodo de reimpresion*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('imgRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DialogDataComprobacionDialog.prototype, "img", void 0);
    DialogDataComprobacionDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-comprobacion-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-comprobacion-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */]])
    ], DialogDataComprobacionDialog);
    return DialogDataComprobacionDialog;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/dialog-data-empleados-dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataEmpleadoHuellaDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_empleadoHuella__ = __webpack_require__("../../../../../src/app/models/empleadoHuella.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DialogDataEmpleadoHuellaDialog = /** @class */ (function () {
    function DialogDataEmpleadoHuellaDialog(data, datosCuentasServicios, _productoService2, router, window) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.router = router;
        this.window = window;
        this.MessageError = false;
        this.imprimirCorrectamente = true;
        this.cabecero = true;
        /*this.cuenta=data.cuenta+data.descripcion;
        this.importe=0.0;
        this.factura='';
        this.justificacion='';*/
        this.detAutizacionSolicitud = data.carga;
        this.pantalla = false;
        this.titulo = 'Comprobación de Gasto en Tienda';
        this.boton = true;
        this.habilitarAgregar = false;
        console.log('Valor de empleado DialogDataEmpleadoHuellaDialog');
        console.log(this.data.datosGenerales.NomEmpleado);
        console.log(this.data);
        if (this.data.datosGenerales != null) {
            this.empleadoHuella = new __WEBPACK_IMPORTED_MODULE_6__models_empleadoHuella__["a" /* empleadoHuella */](this.data.datosGenerales.NoEmpleado, this.data.datosGenerales.NomEmpleado, '', '');
            this.ejecutarPluginFirefoxHuella(this.data.datosGenerales.NoEmpleado);
            console.log('datos de empleado huella');
            console.log(this.empleadoHuella);
        }
    }
    /***************************************************************
     * Plugin gdiNavegadorJ.exe                                    *
     ***************************************************************/
    DialogDataEmpleadoHuellaDialog.prototype.ejecutarPluginFirefoxHuella = function (userid) {
        var _this = this;
        console.log('Entro en validar la huella del empleado ' + userid);
        var objJson = {
            'employee': {
                'numberEmployee': userid
            },
            'settings': {
                'numberAttempts': 3,
                'location': [50, 50]
            }
        };
        try {
            //    CJSGlobalObject.JSCallEnviaMensaje('standard', JSON.stringify(objJson));  
            var self = this;
            this.pantalla = true;
            this.MessageError = false;
            this.imprimirCorrectamente = false;
            this.cabecero = false;
            //$('.mat-dialog-container').css({'height': '150px','margin':'auto'});
            $('.mat-dialog-content').css({ 'overflow': 'hidden' });
            __webpack_require__.e/* import() */("huella").then(__webpack_require__.bind(null, "../../../../../src/assets/Huella/huella.js")).then(function (file) {
                //
                console.log('El valoe de file ');
                console.log(file);
                try {
                    console.log('Entro a ejecutar el metodo de la huella con los siguiemtes valoes');
                    console.log('file.ejecutarPluginFirefox(' + userid + ')');
                    _this.respuesta = file.ejecutarPluginFirefox(userid);
                }
                catch (err) {
                    console.log(err);
                    _this.titulo = "Error                                                 ";
                    _this.mensaje = "Error al invocar el componente de la Huella: " + err;
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.cabecero = true;
                }
            });
        }
        catch (ex) {
            this.titulo = "Error                                                 ";
            this.mensaje = "Error al invocar el componente de la Huella " + ex;
            this.pantalla = true;
            this.MessageError = true;
            this.data.consulta = false;
            this.cabecero = true;
        }
    };
    DialogDataEmpleadoHuellaDialog.prototype.JSSetUpdate2 = function () {
        // alert('JSSetUpdate2');
        $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
        try {
            if (typeof (Storage) !== "undefined") {
                this.respuesta = localStorage.getItem("respuesta");
                console.log(this.respuesta);
                var objResp = JSON.parse(this.respuesta);
                var mensaje = objResp.PluginResponse.processDetail;
                var codigo = -1;
                this.data.consulta = false;
                if (objResp.Issue.statusControl) {
                    var det = objResp.Issue.detail;
                    mensaje = "Error al validar la huella del empleado, favor de contactar a Soporte.";
                    mensaje += "Detalle del error: " + det.message + " TypeError:" + det.typeError + " CodeError: " + det.codeError;
                    this.titulo = "Error                                                 ";
                    this.mensaje = mensaje;
                    this.pantalla = true;
                    this.MessageError = true;
                    this.data.consulta = false;
                    this.cabecero = true;
                }
                else {
                    this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                    this.data.consulta = true;
                    this.titulo = "Exito                                                 ";
                    this.mensaje = "La huella fue obtenida correctamente";
                    this.pantalla = true;
                    this.MessageError = true;
                    this.cabecero = true;
                }
                //this.data.codigo = objResp.PluginResponse.authenticated == 1 ? 0 : -1;
                localStorage.setItem("respuesta", null);
            }
            else {
                this.titulo = "Error                                                 ";
                this.mensaje = "Local storage no soportado por el navegaddor ";
                this.pantalla = true;
                this.MessageError = true;
                this.data.consulta = false;
                this.cabecero = true;
            }
            localStorage.setItem("respuesta", null);
        }
        catch (err) {
            console.log('Error en la validacion de la huella ');
            this.titulo = "Error                                                 ";
            this.mensaje = "Error en la validacion de la huella " + err;
            this.pantalla = true;
            this.MessageError = true;
            this.data.consulta = false;
            this.cabecero = true;
            localStorage.setItem("respuesta", null);
        }
    };
    DialogDataEmpleadoHuellaDialog.prototype.redirectHome = function () {
        this.router.navigate(['home']);
        console.log('Entro en redirect');
    };
    DialogDataEmpleadoHuellaDialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
    };
    DialogDataEmpleadoHuellaDialog.prototype.onSubmit = function () {
    };
    DialogDataEmpleadoHuellaDialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.egresos.importe > 0 && this.egresos.factura.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    DialogDataEmpleadoHuellaDialog.prototype.validaImporte = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.importe >= 0 ? true : false;
        }
        else {
            salida = this.egresos.importe >= 0 && valor ? true : false;
        }
        console.log('validar importe' + salida);
        return salida;
    };
    DialogDataEmpleadoHuellaDialog.prototype.validaFactura = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.factura.length > 0 ? true : false;
        }
        else {
            salida = this.egresos.factura.length > 0 && valor ? true : false;
        }
        console.log('validar factura' + salida);
        return salida;
    };
    DialogDataEmpleadoHuellaDialog.prototype.cargarArchivo = function (filesToUpload) {
        var reader = new FileReader();
        var self = this;
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log('Entro con el componente ' + theFile.name);
                console.log(e.target.result);
                self.xml = e.target.result;
                self.consultaValidacionXML(self.xml);
            };
        })(filesToUpload[0]);
        // Read in the image file as a data URL.
        //reader.readAsDataURL(f);
        //reader.readAsDataURL(filesToUpload[0]);
        reader.readAsText(filesToUpload[0]);
    };
    DialogDataEmpleadoHuellaDialog.prototype.llenarDatosfactura = function () {
        /*
                       this.egresos.importe=Number(this.comprobantes.total);
                       this.egresos.factura=this.comprobantes.folio;
        
                       console.log('llenarDatosfactura');*/
        console.log(this.xmltexto);
    };
    DialogDataEmpleadoHuellaDialog.prototype.convertirXMLtoJson = function (xml) {
        console.log('XML');
        console.log(xml);
        var self = this;
        var ress;
        Object(__WEBPACK_IMPORTED_MODULE_4_xml2js__["parseString"])(xml, function (err, result) {
            console.log('objeto en json');
            console.log(result);
            ress = result;
        });
        console.log('Despues arnol');
        self.xmltexto = ress;
        console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);
        self.comprobantes = self.xmltexto["cfdi:Comprobante"]["$"];
        console.log(self.comprobantes);
        console.log(self.comprobantes.folio);
        console.log('Egresos');
        console.log(self.egresos);
        self.egresos.importe = Number(self.comprobantes.total);
        self.egresos.factura = self.comprobantes.folio;
        //                             self.validarComponentes();
        /*  this.Addenda=this.xmltexto["cfdi:Comprobante"]["cfdi:Addenda"][0];
          console.log( this.Addenda);

          this.Complemento=this.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0];
          console.log( this.Complemento);

          this.Conceptos=this.xmltexto["cfdi:Comprobante"]["cfdi:Conceptos"][0];
          console.log( this.Conceptos);*/
        self.Complemento = self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
        console.log('Complemento');
        console.log(self.Complemento);
        console.log('Valor UUID=' + self.Complemento.UUID);
        /*this.egreso.importe=this.Complemento.total;
        this.egreso.factura=this.Complemento.folio;*/
        self.Emisor = self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
        console.log(self.Emisor);
        self.Impuestos = self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
        console.log(self.Impuestos);
        self.Receptor = self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
        console.log(self.Receptor);
    };
    DialogDataEmpleadoHuellaDialog.prototype.consultaValidacionXML = function (xml) {
        var _this = this;
        console.log('XML');
        xml = xml.trim();
        xml = xml.split("\n").join("");
        xml = xml.split("\r").join("");
        xml = xml.split("\t").join("");
        // xml='<?xml version="1.0" encoding="UTF-8"?>  <cfdi:Comprobante NumCtaPago="7053" LugarExpedicion="Liverpool Perisur" metodoDePago="TARJETA DE DEBITO" tipoDeComprobante="ingreso" total="254.15" subTotal="219.09" certificado="MIIEmDCCA4CgAwIBAgIUMDAwMDEwMDAwMDAyMDI5MzY1OTEwDQYJKoZIhvcNAQEFBQAwggGVMTgwNgYDVQQDDC9BLkMuIGRlbCBTZXJ2aWNpbyBkZSBBZG1pbmlzdHJhY2nDs24gVHJpYnV0YXJpYTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMSEwHwYJKoZIhvcNAQkBFhJhc2lzbmV0QHNhdC5nb2IubXgxJjAkBgNVBAkMHUF2LiBIaWRhbGdvIDc3LCBDb2wuIEd1ZXJyZXJvMQ4wDAYDVQQRDAUwNjMwMDELMAkGA1UEBhMCTVgxGTAXBgNVBAgMEERpc3RyaXRvIEZlZGVyYWwxFDASBgNVBAcMC0N1YXVodMOpbW9jMRUwEwYDVQQtEwxTQVQ5NzA3MDFOTjMxPjA8BgkqhkiG9w0BCQIML1Jlc3BvbnNhYmxlOiBDZWNpbGlhIEd1aWxsZXJtaW5hIEdhcmPDrWEgR3VlcnJhMB4XDTEzMDEzMDE3MzM1N1oXDTE3MDEzMDE3MzM1N1owgdkxKTAnBgNVBAMTIERJU1RSSUJVSURPUkEgTElWRVJQT09MIFNBIERFIENWMSkwJwYDVQQpEyBESVNUUklCVUlET1JBIExJVkVSUE9PTCBTQSBERSBDVjEpMCcGA1UEChMgRElTVFJJQlVJRE9SQSBMSVZFUlBPT0wgU0EgREUgQ1YxJTAjBgNVBC0THERMSTkzMTIwMU1JOSAvIE1BTUE2NDA4MjE3WjExHjAcBgNVBAUTFSAvIE1BTUE2NDA4MjFIVlpSSk4wODEPMA0GA1UECxMGTUFUUklaMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDahhNvBmdLPOzXe2JYcgbFxAmvUM49MRWbXha3sv977ls+egA/cfYL3r6BhwNqnBSGW+yDQpVp6XSdltgojVRAT6ftsp5eTNFLlQ6Hz/2pcplW4GngLkf7EmfmPFxVkXRcdiFxtQCLNzZldtFq/TETwRW1msnVFY5vXQIxu3S1IwIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQUFAAOCAQEAN03lIAt1IkR+R9dVQNWLspgQIBTt5fD63OUTe0h90FAjKk/nBMPiVdXzLycgLoQrEEbXC/YFAIRId40Eib70siptV1sh/8IP6+4NMvON56rm4kjTdhuiUk6KjI/7UwkGehkY8AGNOkmW1HyMma3l42Cu2H49k0ajNFe9SAxI5ZhsYI6K6MPoYd48BrAZkntZkgjChDa9y87kOnvPnETmiJwMFlGnvFFzqDSvIQ2iggoRRUqGCp6EX+Tv1kU2xNLbCL8E4w3w40Zk2PNS5g9mVxZ+1TDJDan+e6hb3thDdjYmRz39vn5isBX91+OAbqFPgs3MDzaykuiW9F4II/0VAA==" noCertificado="00001000000202936591" formaDePago="PAGADO EN UNA SOLA EXHIBICIÓN" sello="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" fecha="2015-03-30T14:32:46" folio="279116" serie="LWF" version="3.2" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv32.xsd http://www.buzonfiscal.com/ns/addenda/bf/2 http://www.buzonfiscal.com/schema/xsd/Addenda_BF_v20.xsd" xmlns:bfa2="http://www.buzonfiscal.com/ns/addenda/bf/2" xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <cfdi:Emisor nombre="Distribuidora Liverpool S.A. de C.V." rfc="DLI931201MI9">        <cfdi:DomicilioFiscal codigoPostal="05348" pais="Mexico" estado="Mexico, D.F." municipio="Cuajimalpa de Morelos" colonia="Santa Fe Cuajimalpa" calle="C. Mario Pani No. 200"/>        <cfdi:ExpedidoEn codigoPostal="04500" pais="Mexico" estado="México, Distrito Federal" municipio="Coyoacan" referencia="LIV" colonia="Ampliacion del Pedregal de San Angel" calle="Av. Anillo Periférico Sur No. 4690"/>        <cfdi:RegimenFiscal Regimen="REGIMEN GENERAL DE LEY PERSONAS MORALES"/>    </cfdi:Emisor>    <cfdi:Receptor nombre="HORACIO GONZALEZ YLLEZCAS" rfc="GOYH831206431">        <cfdi:Domicilio codigoPostal="12400" pais="MEXICO" estado="MÉXICO, D.F." municipio="MILPA ALTA" colonia="SAN PABLO OZTOTEPEC" calle="CALLEJON ZARAGOZA 28"/>    </cfdi:Receptor>    <cfdi:Conceptos>        <cfdi:Concepto importe="219.09" valorUnitario="219.09" descripcion="DC PELUCHE MEDIAN" unidad="PZA" cantidad="1.00">            <cfdi:InformacionAduanera aduana="510-LAZARO CARDENAS" fecha="2014-08-22" numero="037945104007311"/>        </cfdi:Concepto>    </cfdi:Conceptos>    <cfdi:Impuestos totalImpuestosTrasladados="35.06">        <cfdi:Traslados>            <cfdi:Traslado importe="35.06" tasa="16" impuesto="IVA"/>        </cfdi:Traslados>    </cfdi:Impuestos>    <cfdi:Complemento>        <tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigital.xsd"  selloSAT="i0N11jbvZf1buPdqH93Du7RMLKwQEK6cwRDeEfzjVD4muh99eqxuGq+jyCwwDgn8ZgVIMWBFbAk9bGKUbffmqVuQXHzNRpMmOXB6EFaA/ioj9NxM0/MYok83csdSI7AwIM3SOyg0S/XXwnIb14E/IZnG35PmbA9hMErOHvCrbw4=" noCertificadoSAT="00001000000202693892" selloCFD="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" FechaTimbrado="2015-03-30T14:32:51" UUID="168743ca-c1f4-4851-bf17-73a9b7369457" version="1.0"/>    </cfdi:Complemento>    <cfdi:Addenda>        <bfa2:AddendaBuzonFiscal version="2.0">            <bfa2:CFD totalConLetra="DOSCIENTOS CINCUENTA Y CUATRO PESOS 15/100 M.N."/>            <bfa2:Extra valor="2015-03-30T14:32:46.827" atributo="DIVERZA_FECHA_CFDI"/>        </bfa2:AddendaBuzonFiscal>    </cfdi:Addenda></cfdi:Comprobante>producto.service.ts:88 http://10.51.118.175:8082/ServicioGastos.svc/json/ConsultaValidacionXML?xml=<?xml version="1.0" encoding="UTF-8"?>  <cfdi:Comprobante NumCtaPago="7053" LugarExpedicion="Liverpool Perisur" metodoDePago="TARJETA DE DEBITO" tipoDeComprobante="ingreso" total="254.15" subTotal="219.09" certificado="MIIEmDCCA4CgAwIBAgIUMDAwMDEwMDAwMDAyMDI5MzY1OTEwDQYJKoZIhvcNAQEFBQAwggGVMTgwNgYDVQQDDC9BLkMuIGRlbCBTZXJ2aWNpbyBkZSBBZG1pbmlzdHJhY2nDs24gVHJpYnV0YXJpYTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3RyYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBTZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMSEwHwYJKoZIhvcNAQkBFhJhc2lzbmV0QHNhdC5nb2IubXgxJjAkBgNVBAkMHUF2LiBIaWRhbGdvIDc3LCBDb2wuIEd1ZXJyZXJvMQ4wDAYDVQQRDAUwNjMwMDELMAkGA1UEBhMCTVgxGTAXBgNVBAgMEERpc3RyaXRvIEZlZGVyYWwxFDASBgNVBAcMC0N1YXVodMOpbW9jMRUwEwYDVQQtEwxTQVQ5NzA3MDFOTjMxPjA8BgkqhkiG9w0BCQIML1Jlc3BvbnNhYmxlOiBDZWNpbGlhIEd1aWxsZXJtaW5hIEdhcmPDrWEgR3VlcnJhMB4XDTEzMDEzMDE3MzM1N1oXDTE3MDEzMDE3MzM1N1owgdkxKTAnBgNVBAMTIERJU1RSSUJVSURPUkEgTElWRVJQT09MIFNBIERFIENWMSkwJwYDVQQpEyBESVNUUklCVUlET1JBIExJVkVSUE9PTCBTQSBERSBDVjEpMCcGA1UEChMgRElTVFJJQlVJRE9SQSBMSVZFUlBPT0wgU0EgREUgQ1YxJTAjBgNVBC0THERMSTkzMTIwMU1JOSAvIE1BTUE2NDA4MjE3WjExHjAcBgNVBAUTFSAvIE1BTUE2NDA4MjFIVlpSSk4wODEPMA0GA1UECxMGTUFUUklaMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDahhNvBmdLPOzXe2JYcgbFxAmvUM49MRWbXha3sv977ls+egA/cfYL3r6BhwNqnBSGW+yDQpVp6XSdltgojVRAT6ftsp5eTNFLlQ6Hz/2pcplW4GngLkf7EmfmPFxVkXRcdiFxtQCLNzZldtFq/TETwRW1msnVFY5vXQIxu3S1IwIDAQABox0wGzAMBgNVHRMBAf8EAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQUFAAOCAQEAN03lIAt1IkR+R9dVQNWLspgQIBTt5fD63OUTe0h90FAjKk/nBMPiVdXzLycgLoQrEEbXC/YFAIRId40Eib70siptV1sh/8IP6+4NMvON56rm4kjTdhuiUk6KjI/7UwkGehkY8AGNOkmW1HyMma3l42Cu2H49k0ajNFe9SAxI5ZhsYI6K6MPoYd48BrAZkntZkgjChDa9y87kOnvPnETmiJwMFlGnvFFzqDSvIQ2iggoRRUqGCp6EX+Tv1kU2xNLbCL8E4w3w40Zk2PNS5g9mVxZ+1TDJDan+e6hb3thDdjYmRz39vn5isBX91+OAbqFPgs3MDzaykuiW9F4II/0VAA==" noCertificado="00001000000202936591" formaDePago="PAGADO EN UNA SOLA EXHIBICIÓN" sello="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" fecha="2015-03-30T14:32:46" folio="279116" serie="LWF" version="3.2" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv32.xsd http://www.buzonfiscal.com/ns/addenda/bf/2 http://www.buzonfiscal.com/schema/xsd/Addenda_BF_v20.xsd" xmlns:bfa2="http://www.buzonfiscal.com/ns/addenda/bf/2" xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <cfdi:Emisor nombre="Distribuidora Liverpool S.A. de C.V." rfc="DLI931201MI9">        <cfdi:DomicilioFiscal codigoPostal="05348" pais="Mexico" estado="Mexico, D.F." municipio="Cuajimalpa de Morelos" colonia="Santa Fe Cuajimalpa" calle="C. Mario Pani No. 200"/>        <cfdi:ExpedidoEn codigoPostal="04500" pais="Mexico" estado="México, Distrito Federal" municipio="Coyoacan" referencia="LIV" colonia="Ampliacion del Pedregal de San Angel" calle="Av. Anillo Periférico Sur No. 4690"/>        <cfdi:RegimenFiscal Regimen="REGIMEN GENERAL DE LEY PERSONAS MORALES"/>    </cfdi:Emisor>    <cfdi:Receptor nombre="HORACIO GONZALEZ YLLEZCAS" rfc="GOYH831206431">        <cfdi:Domicilio codigoPostal="12400" pais="MEXICO" estado="MÉXICO, D.F." municipio="MILPA ALTA" colonia="SAN PABLO OZTOTEPEC" calle="CALLEJON ZARAGOZA 28"/>    </cfdi:Receptor>    <cfdi:Conceptos>        <cfdi:Concepto importe="219.09" valorUnitario="219.09" descripcion="DC PELUCHE MEDIAN" unidad="PZA" cantidad="1.00">            <cfdi:InformacionAduanera aduana="510-LAZARO CARDENAS" fecha="2014-08-22" numero="037945104007311"/>        </cfdi:Concepto>    </cfdi:Conceptos>    <cfdi:Impuestos totalImpuestosTrasladados="35.06">        <cfdi:Traslados>            <cfdi:Traslado importe="35.06" tasa="16" impuesto="IVA"/>        </cfdi:Traslados>    </cfdi:Impuestos>    <cfdi:Complemento>        <tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigital.xsd"  selloSAT="i0N11jbvZf1buPdqH93Du7RMLKwQEK6cwRDeEfzjVD4muh99eqxuGq+jyCwwDgn8ZgVIMWBFbAk9bGKUbffmqVuQXHzNRpMmOXB6EFaA/ioj9NxM0/MYok83csdSI7AwIM3SOyg0S/XXwnIb14E/IZnG35PmbA9hMErOHvCrbw4=" noCertificadoSAT="00001000000202693892" selloCFD="VHUZFysMRgyteYpu923YiR5SzFpnvVVeikeVYTuXOmVCMcW5G52k/hSc2NW2fz0IgB/nMpOI5QbTB+GAktvcfPFm+drt+/tJxVC01AhhKATI8eQw5Wdle8PgnlzjW44ivcspk8dpVQShsJ3UzIJQH05HFI1E4BdEj6IxJFijWcM=" FechaTimbrado="2015-03-30T14:32:51" UUID="168743ca-c1f4-4851-bf17-73a9b7369457" version="1.0"/>    </cfdi:Complemento>    <cfdi:Addenda>        <bfa2:AddendaBuzonFiscal version="2.0">            <bfa2:CFD totalConLetra="DOSCIENTOS CINCUENTA Y CUATRO PESOS 15/100 M.N."/>            <bfa2:Extra valor="2015-03-30T14:32:46.827" atributo="DIVERZA_FECHA_CFDI"/>        </bfa2:AddendaBuzonFiscal>    </cfdi:Addenda></cfdi:Comprobante>';
        //xml = '<![CDATA['+xml+']]>';
        xml = xml.split("\n").join("");
        // xml= xml.replace(/['"]+/g, "'");
        console.log(xml.trim());
        /* var xmlString= ( new DOMParser() ).parseFromString(xml, "text/xml");
    

        console.log(xmlString);

        console.log('Xml transformado');
        console.log((new XMLSerializer()).serializeToString(xmlString));*/
        //            var xmlText = (new XMLSerializer()).serializeToString(xml);
        //          console.log(xmlText);
        /*Conulta del servicio*/
        /*  var oSerializer = new XMLSerializer();
         var xmlString = oSerializer.serializeToString(xml);



*/
        this._productoService2.getValidacionXML(xml.trim(), '').subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.detValidacionXML;
                console.log(_this.validaFacturacion);
                if (_this.validaFacturacion != null) {
                    /*   if (this.validaFacturacion.codigo ==0){
                               this.convertirXMLtoJson(this.xml);

                       }else{

                           console.log('Xml no es valido \n Favor de cargar un XML valido');
                           this.titulo="Alerta                                                 ";
                           this.mensaje= "Favor de cargar un xml valido, \n Intenta nuevamente ";
                           this.pantalla=true;
                           this.boton=false;


                       }*/
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                    _this.pantalla = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    /*parseString(xml, function (err, result) {
      console.dir(result);
    });*/
    DialogDataEmpleadoHuellaDialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        console.log('Entro en el metodo insertaSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        this._productoService2.getActualizarSolicitudGastos(this.data.datosGenerales, this.detAutizacionSolicitud).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                //alert('Terrmino');
                //this.validaFacturacion = result.detValidacionXML;
                //console.log(this.validaFacturacion);
                /* console.log('Se guardo con exito');
                          this.titulo="Exito";
                          this.mensaje= "Se regisro correctamente la solicitud de gastos para la cuenta "+this.data.carga.descripcion;
                          this.pantalla=true;*/
                if (result.error == false) {
                    _this.ticket = result.detDetCuentasReimpresion[0];
                    console.log(_this.ticket);
                    _this.imprimirEgreso(_this.ticket);
                }
                else {
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                }
            }
            else {
                console.log('Entro');
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.MessageError = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            _this.titulo = "Error";
            _this.pantalla = true;
            _this.MessageError = true;
            _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
            _this.boton = true;
            console.log(_this.mensaje);
        });
        /*Fin de servicio*/
    };
    DialogDataEmpleadoHuellaDialog.prototype.imprimirEgreso = function (ticket) {
        var _this = this;
        // alert('El valor del '+ticket.FolioAdn);
        this.imprimirCorrectamente = false;
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        this._productoService2.setArchivoImprimir(this.data.datosGenerales, this.ticket).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService2.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService2.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                  this.img.nativeElement.src = this.src;*/
                                /*Consumir el metodo para imprimir el documento*/
                                /*Fin del metodo para imprimir ticket*/
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.titulo = "Error";
                                //this.MessageError=f;
                                _this.pantalla = true;
                                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            // this.MessageError=true;
                            _this.pantalla = true;
                            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        // this.MessageError=true;
                        _this.pantalla = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    //  this.MessageError=true;
                    _this.pantalla = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                //  this.MessageError=true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            // this.MessageError=true;
            _this.pantalla = true;
            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
            _this.boton = true;
        });
        /*Fin del metodo de reimpresion*/
    };
    DialogDataEmpleadoHuellaDialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataEmpleadoHuellaDialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        this.boton = true;
    };
    DialogDataEmpleadoHuellaDialog.prototype.redirect = function () {
        console.log('Entro en redirect');
        // window.location.href=window.location.href;
        this.router.navigate(['redirect']);
        console.log('Entro en redirect');
    };
    DialogDataEmpleadoHuellaDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-empleados-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-empleados-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], Window])
    ], DialogDataEmpleadoHuellaDialog);
    return DialogDataEmpleadoHuellaDialog;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/dialog-data-example.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * @title Injecting data when opening a dialog
 */
var DialogDataExample = /** @class */ (function () {
    function DialogDataExample(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
    }
    DialogDataExample.prototype.retorno = function () {
    };
    DialogDataExample.prototype.cargarEstilo = function (tipo) {
        if (tipo === 1) {
            this.estilo = 'Este folio no existe tienda y en central lo tiene con estatus de autorizado';
        }
        else {
            this.estilo = '';
        }
        return this.estilo;
    };
    DialogDataExample.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_4__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    DialogDataExample.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataExample.prototype.openDialog = function () {
        /*Metodo para la carga de la Informaciòn*/
        var _this = this;
        //    this.openDialogCargar();
        this.datosCuentasServicios.setCuenta(this.valor.NoCuenta);
        this.cuentas = this.datosCuentasServicios.getDatosCuentas();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        //this.cuentas.cuenta=this.data.carga.NoCuenta
        console.log('getReporteGastos');
        console.log(this.cuentas);
        this._productoService.getReporteGastos(this.cuentas, this.valor.detHistoricoSolicitudes, this.datosGenerales).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor ');
                //this.cuentaGastos = result.data.detCuentas;
                _this.ReporteGastos = result.consultaDetCuentasResult.detReporteGastos;
                console.log(_this.ReporteGastos);
                _this.dialog.open(DialogDataExampleDialog, {
                    data: {
                        animal: 'panda',
                        carga: _this.valor,
                        cuentaGastos: _this.ReporteGastos,
                        desc: _this.cuentas.descEstatus,
                        datosGenerales: _this.datosGenerales
                    },
                    disableClose: true
                });
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detReporteGastos;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataExample.prototype, "valor", void 0);
    DialogDataExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-example',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-example.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataExample);
    return DialogDataExample;
}());

var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data, datosCuentasServicios) {
        /* this.datosCuentasServicios.setPuesto(this.data.carga.NoCuenta);
         this.cuentas = this.datosCuentasServicios.getDatosCuentas();
          console.log(this.cuentas);*/
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        console.log('Valor de data DialogDataExampleDialog');
        console.log(data);
    }
    DialogDataExampleDialog.prototype.cargarEstilo = function (tipo) {
        if (tipo === 1) {
            this.estilo = 'Este folio no existe tienda y en central lo tiene con estatus de autorizado';
        }
        else {
            this.estilo = '';
        }
        return this.estilo;
    };
    DialogDataExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-example-dialog.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */]])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/dialog-egreso.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataEgreso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataEgresoDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__ = __webpack_require__("../../../../../src/app/models/reporteGastos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_egreso__ = __webpack_require__("../../../../../src/app/models/egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__ = __webpack_require__("../../../../../src/app/models/datosEgreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dialog_data_empleados_dialog__ = __webpack_require__("../../../../../src/app/components/dialog-data-empleados-dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_CajaDetalleFolios__ = __webpack_require__("../../../../../src/app/models/CajaDetalleFolios.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













/**
 * @title Injecting data when opening a dialog
 */
var DialogDataEgreso = /** @class */ (function () {
    function DialogDataEgreso(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.error = false;
        this.titulos = "Alerta";
        console.log('variable valor en el constructor' + this.valor);
        this.tituloComponente(this.valor);
    }
    DialogDataEgreso.prototype.tituloComponente = function (tipo) {
        if (tipo === 3) {
            this.tituloDesc = 'Egreso de Cifra de Control';
            this.leyenda = 'Cifra de Control';
            this.tituloBoton = 'Validar Cifra';
        }
        else {
            this.tituloDesc = 'Pago de Cifra de Control y Gasolina x Empleado';
            this.leyenda = 'No de Empleado';
            this.tituloBoton = 'Validar Empleado';
        }
    };
    DialogDataEgreso.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_5__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    DialogDataEgreso.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataEgreso.prototype.openDialogegreso = function () {
        console.log('Valor de cuenta');
        console.log(this.valor);
        this.dialog.open(DialogDataEgresoDialog, {
            width: '700px',
            data: {
                carga: this.valor
            },
            disableClose: true
        });
    };
    DialogDataEgreso.prototype.openDialogPrueba = function () {
        var _this = this;
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('paso' + this.datosGenerales);
        console.log('variable valor ' + this.valor.Cuenta);
        /*Conulta del servicio*/
        this._productoService.getCuentasConXML(this.datosGenerales, this.valor.Cuenta).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.requiereXML = result.DetalleTiendaCuentaResult;
                console.log(_this.requiereXML);
                console.log('cuentaGastosXML');
                _this.cuentaGastosXML = result.detCuentaGastos;
                console.log(_this.cuentaGastosXML);
                if (result.DetalleTiendaCuentaResult.EsError === false) {
                    _this.dialog.open(DialogDataEgresoDialog, {
                        width: '700px',
                        data: {
                            animal: 'panda',
                            carga: _this.valor,
                            requiere: _this.requiereXML,
                            descp: _this.requiereXML,
                            datosGenerales: _this.datosGenerales
                        },
                        disableClose: true
                    });
                }
                else {
                    _this.error = true;
                    _this.comentario = result.RequiereXMLResult.Mensaje;
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.openDialogAlerta();
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DialogDataEgreso.prototype.openDialogAlerta = function () {
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
    };
    DialogDataEgreso.prototype.openDialog = function () {
        var _this = this;
        console.log('getReporteGastos');
        // console.log(this.cuentas);
        this.dialog.open(DialogDataEgresoDialog, {
            width: '400px',
            data: {
                animal: 'panda',
                carga: this.valor,
                cuentaGastos: this.ReporteGastos,
                desc: this.cuentas.descEstatus
            },
            disableClose: true
        });
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this._productoService.getDetalleCuentasReimpresion(this.cuentas, this.datosGenerales.FuncionSAP).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log(_this.ReporteGastos);
                /*Conulta del servicio*/
                _this._productoService.getCuentasConXML(_this.datosGenerales, _this.valor.cuenta).subscribe(function (result) {
                    console.log('RESULTADO');
                    console.log(result);
                    if (result.code != 200) {
                        //  this.closeDialogCargar();
                        console.log(result);
                        console.log('Paso el valor');
                        //this.cuentaGastos = result.data.detCuentas;
                        _this.requiereXML = result.detReporteGastos;
                        console.log(_this.requiereXML);
                        _this.dialog.open(DialogDataEgresoDialog, {
                            data: {
                                animal: 'panda',
                                carga: _this.valor,
                                cuentaGastos: _this.ReporteGastos,
                                desc: _this.cuentas.descEstatus,
                                requiere: _this.requiereXML,
                                descp: _this.cuentaGastosXML
                            },
                            disableClose: true
                        });
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        //console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                });
                /*Fin de servicio*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataEgreso.prototype, "valor", void 0);
    DialogDataEgreso = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-egreso',
            template: __webpack_require__("../../../../../src/app/views/dialog-egreso.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_8__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataEgreso);
    return DialogDataEgreso;
}());

var DialogDataEgresoDialog = /** @class */ (function () {
    function DialogDataEgresoDialog(data, datosCuentasServicios, _productoService2, datosGeneralesServicios, dialog) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.PantallaImprimir = false;
        this.retornar = false;
        this.banderafactura = true;
        this.siniestro = false;
        this.valorFactura = "";
        this.detalleFactura = false;
        this.cabecero = true;
        /*Parametros para la validacion de egreso*/
        this.folio = 0;
        this.refempleado = 0;
        this.tipoOperacion = 0;
        this.cifracontrol = '';
        console.log('Valor de la cuenta');
        console.log(data);
        this.tipoEgreso = data.carga;
        this.egresos = new __WEBPACK_IMPORTED_MODULE_6__models_egreso__["a" /* egreso */](0, '', 0.00, ' ', '', '', 0);
        this.datosEgreso = new __WEBPACK_IMPORTED_MODULE_10__models_datosEgreso__["a" /* datosEgreso */](0, '', '');
        this.validaCentral = true;
        this.egresos.descCuenta = 'Cuenta ' + data.carga; //data.requiere.TiendaCuentas.NoCuenta+' '+data.requiere.TiendaCuentas.Descripcion;
        this.egresos.noCuenta = data.carga;
        this.egresos.importe = 0.00;
        this.tipoOperacion = data;
        if (this.tipoEgreso == 3) {
            this.tituloValidar = 'Validar CifraContol';
            this.titulo = 'Egreso de Cifra Control';
        }
        else if (data == 4) {
            this.tituloValidar = 'Validar CifraContol';
            this.titulo = 'Egreso de Gasolina x Empleado';
        }
        else {
            this.tituloValidar = 'Validar Cifra Contol ';
        }
        this.tituloComponente(this.data.carga);
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
    }
    DialogDataEgresoDialog.prototype.tituloComponente = function (tipo) {
        if (this.tipoEgreso === 3) {
            this.tituloDesc = 'Egreso de Cifra de Control';
            this.leyenda = 'Cifra de Control';
            this.tituloBoton = 'Validar Cifra';
            this.botonTitulo = 'Egresar Cifra';
        }
        else {
            this.tituloDesc = 'Pago de Cifra de Control y Gasolina x Empleado';
            this.leyenda = 'No de Empleado';
            this.tituloBoton = 'Validar Empleado';
            this.botonTitulo = 'Egresar Cifra';
        }
    };
    DialogDataEgresoDialog.prototype.validarFolioCentral = function (tipo) {
        var _this = this;
        this.pantalla = true;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        console.log('Entro en el metodo getConsultaValidacionEgreso');
        if (tipo === 3) {
            this.cifracontrol = this.datosEgreso.cifraControl;
        }
        else {
            this.refempleado = this.datosEgreso.empleado;
        }
        this.cajaDetalleFolios = new __WEBPACK_IMPORTED_MODULE_12__models_CajaDetalleFolios__["a" /* CajaDetalleFolios */]('', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, '', 0, 0, '', '', 0, false);
        // this.openCargaHuella();
        this._productoService2.getConsultaValidacionEgreso(this.folio, this.refempleado, tipo, this.cifracontrol).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length > 0 ? result.ValidaEgresoCajaResult.CajaDetalleFolios[0] : _this.cajaDetalleFolios;
                console.log('Valor de la respuesta');
                console.log(_this.cajaDetalleFolios);
                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                if (result.ValidaEgresoCajaResult.EsError == false) {
                    console.log('Se valido con exito');
                    _this.pantalla = false;
                    _this.boton = true;
                    _this.cabecero = true;
                    _this.validaCentral = false;
                    // this.titulo="Egresar ";
                    if (_this.cajaDetalleFolios.ValidaHuella) {
                        _this.pantalla = false;
                        _this.boton = true;
                        _this.validaCentral = false;
                        _this.datosGenerales.NoEmpleado = result.ValidaEgresoCajaResult.CajaDetalleFolios[0].CifraEmpleadoDestino;
                        console.log('Antes de entrar a la huella ');
                        console.log(_this.datosGenerales.NoEmpleado);
                        _this.openCargaHuella();
                    }
                }
                else {
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaEgresoCajaResult.Mensaje;
                    _this.cabecero = true;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                _this.cabecero = true;
                _this.PantallaImprimir = false;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        console.log('Valor de datosEgreso');
        console.log(this.datosEgreso);
        this.validaCentral = false;
    };
    DialogDataEgresoDialog.prototype.openCargaHuella = function () {
        //  this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
        var _this = this;
        console.log('Entro en el metodo de openCargaHuella');
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], {
            data: {
                datosGenerales: this.datosGenerales,
                consulta: this.consulta
            },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.consulta = result;
            console.log('Valor de consulta');
            console.log(_this.consulta);
            console.log('Valor de consulta');
            if (_this.consulta == false) {
                _this.titulo = "Error";
                _this.mensaje = "No se tiene una huella valida para realizar un Egreso Gasolina x Empleado";
                _this.pantalla = true;
                _this.cabecero = true;
                _this.PantallaImprimir = false;
            }
            else {
                _this.pantalla = false;
                _this.validaCentral = false;
            }
        });
    };
    DialogDataEgresoDialog.prototype.validarComponentesFolioCentral = function (form) {
        console.log('Entro a validar los campor ' + form);
        console.log(this.datosEgreso);
        if (this.datosEgreso.empleado > 0 && this.datosEgreso.referencia.length > 0 && form) {
            this.habilitarFolioCentral = true;
        }
        else {
            this.habilitarFolioCentral = false;
        }
        return this.habilitarFolioCentral;
    };
    DialogDataEgresoDialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('Cargada de los archivos fileChangeEvent');
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
        /*Cambio de la bandera de factura*/
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
            else if (this.data.requiere.TiendaCuentas.RequiereXML === 2 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
        }
        else {
            this.banderafactura = false;
        }
        this.banderafactura = true;
        this.detalleFactura = true;
        console.log('valor de la banderafactura' + this.banderafactura);
        try {
            //console.log(fileInput.target.files.mozFullPath);
            console.log('Ruta del archivo');
            console.log(fileInput.target.value);
        }
        catch (err) {
            console.log('Fallo la carga ');
        }
    };
    DialogDataEgresoDialog.prototype.onSubmit = function () {
    };
    DialogDataEgresoDialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.egresos.importe > 0 && this.egresos.factura.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    DialogDataEgresoDialog.prototype.validaImporte = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.importe >= 0 ? true : false;
        }
        else {
            salida = this.egresos.importe >= 0 && valor ? true : false;
        }
        console.log('validar importe' + salida);
        return salida;
    };
    DialogDataEgresoDialog.prototype.validaFactura = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.factura.length > 0 ? true : false;
        }
        else {
            salida = this.egresos.factura.length > 0 && valor ? true : false;
        }
        console.log('validar factura' + salida);
        return salida;
    };
    DialogDataEgresoDialog.prototype.cargarArchivo = function (filesToUpload) {
        var reader = new FileReader();
        var self = this;
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log('Entro con el componente ' + theFile.name);
                self.xml = e.target.result;
                console.log('Carga del xml cargarArchivo');
                console.log(self.xml);
                //        self.consultaValidacionXML(self.xml);
                self.consultaValidacionXMLPrueba(self.xml);
            };
        })(filesToUpload[0]);
        //reader.readAsText(filesToUpload[0]);
        reader.readAsDataURL(filesToUpload[0]);
    };
    DialogDataEgresoDialog.prototype.llenarDatosfactura = function () {
        console.log(this.xmltexto);
    };
    DialogDataEgresoDialog.prototype.convertirXMLtoJson = function (xml) {
        console.log('XML');
        console.log(xml);
        var self = this;
        var ress;
        Object(__WEBPACK_IMPORTED_MODULE_7_xml2js__["parseString"])(xml, function (err, result) {
            console.log('objeto en json');
            console.log(result);
            ress = result;
        });
        console.log('Despues arnol');
        self.xmltexto = ress;
        console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);
        self.comprobantes = self.xmltexto["cfdi:Comprobante"]["$"];
        console.log(self.comprobantes);
        console.log(self.comprobantes.folio);
        console.log('Egresos');
        console.log(self.egresos);
        self.egresos.importe = Number(self.comprobantes.total);
        self.egresos.factura = self.comprobantes.folio;
        self.Complemento = self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
        console.log('Complemento');
        console.log(self.Complemento);
        console.log('Valor UUID=' + self.Complemento.UUID);
        /*this.egreso.importe=this.Complemento.total;
        this.egreso.factura=this.Complemento.folio;*/
        self.Emisor = self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
        console.log(self.Emisor);
        self.Impuestos = self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
        console.log(self.Impuestos);
        self.Receptor = self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
        console.log(self.Receptor);
    };
    /*Metodos para cambiar estatus de facturacion*/
    DialogDataEgresoDialog.prototype.cambiarEstatusFactura = function () {
        this.banderafactura = false;
        this.detalleFactura = false;
        //  alert(this.banderafactura);
        console.log('Valor de la banderafactura: ' + this.banderafactura);
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = false;
            }
            /*else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
            {
                   this.banderafactura=false;

            }*/
        }
        else {
            this.banderafactura = false;
        }
    };
    DialogDataEgresoDialog.prototype.consultaValidacionXML = function (xml) {
        var _this = this;
        console.log('XML');
        xml = xml.trim();
        xml = xml.split("\n").join("");
        xml = xml.split("\r").join("");
        //xml=xml.split("+").join("~"); 
        xml = xml.split("\n").join("");
        console.log(xml.trim());
        this._productoService2.getValidacionXML(xml.trim(), 'UID067305511790').subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.detValidacionXML;
                console.log(_this.validaFacturacion);
                if (result.ValidafacturaResult.EsError == false) {
                    /*  if (this.validaFacturacion.codigo ==0){
                              this.convertirXMLtoJson(this.xml);

                      }else{

                          console.log('Xml no es valido \n Favor de cargar un XML valido');
                          this.titulo="Alerta                                                 ";
                          this.mensaje= "Favor de cargar un xml valido, \n Intenta nuevamente ";
                          this.pantalla=true;
                          this.boton=false;


                      }*/
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidafacturaResult.Mensaje;
                    _this.pantalla = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataEgresoDialog.prototype.consultaValidacionXMLPrueba = function (xml) {
        var _this = this;
        this.retornar = false;
        this.boton = true;
        this._productoService2.getValidacionXMLPrueba(xml.trim(), this.data.carga.Cuenta, this.data.datosGenerales.Canal).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                console.log(_this.validaFacturacion);
                if (result.ValidaArchivoXMLResult.EsError == false) {
                    _this.titulo = "Solicitud de Gastos";
                    _this.pantalla = false;
                    _this.egresos.importe = Number(_this.validaFacturacion.Totalxml);
                    _this.egresos.factura = _this.validaFacturacion.Folioxml;
                    _this.egresos.importe = Number(_this.validaFacturacion.Ivaxml);
                    console.log('El valor de la this.validaFacturacion');
                    console.log(_this.validaFacturacion);
                    _this.valorFactura = "No. Factura " + _this.validaFacturacion.Folioxml + '  ' +
                        /*"<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                        "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                        "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                        "Total: " + _this.validaFacturacion.Totalxml + '  ' +
                        "IVA: " + _this.validaFacturacion.Ivaxml;
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidaArchivoXMLResult.Mensaje;
                    _this.pantalla = true;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataEgresoDialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        console.log('Entro en el metodo insertaSolicitudGastos');
        /*Cambiar el status de banderafactura*/
        if (this.banderafactura == true) {
            this.validaFacturacion.Datosparam = this.banderafactura == true ? 1 : 0;
        }
        /*if (this.data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado'){
              this.data.datosGenerales.NoEmpleado=this.egresos.factura;
        }*/
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getInsertaSolicitudGastos(this.data.datosGenerales, this.egresos, this.validaFacturacion, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.AfectaAltaSolicitudResult.EsError == false) {
                    console.log('Se guardo con exito');
                    _this.titulo = "Exito";
                    _this.mensaje = "Se regisro correctamente la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                    _this.pantalla = true;
                    _this.boton = true;
                    if (_this.data.carga.Cuenta === 604910 || _this.data.carga.Cuenta === 60491 || _this.data.carga.Cuenta === 1025 || _this.data.carga.Cuenta === 620106) {
                        var impresion;
                        impresion = new __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__["a" /* reporteGastos */](9152, 7439758, 620070, 1, 0, 0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '', '');
                        _this.cabecero = false;
                        _this.imprimirEgreso(impresion);
                        _this.PantallaImprimir = true;
                    }
                }
                else {
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + "\n" + _this.data.carga.Descripcion + "\n" + result.AfectaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    /*Metodo para validar solicitud de gastos*/
    DialogDataEgresoDialog.prototype.validarSolicitudGastos = function () {
        var _this = this;
        this.retornar = false;
        console.log('Entro en el metodo validarSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getValidacionDatosGastosSolicitud(this.data.datosGenerales, this.egresos, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.ValidaAltaSolicitudResult.EsError == false) {
                    console.log('Se valido correctamente  con exito datos de solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    console.log('valor de stcontinuar :' + result.ValidaAltaSolicitudResult.stcontinuar);
                    if (result.ValidaAltaSolicitudResult.stcontinuar == 0) {
                        _this.boton = true;
                    }
                    else {
                        _this.boton = false;
                    }
                }
                else {
                    console.log('Se presento un error al validar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = _this.data.carga.Descripcion + "\n" + result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al validar la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = false;
                _this.retornar = true;
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataEgresoDialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataEgresoDialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        // this.boton=true;
        this.titulo = "Solicitud de Gastos";
    };
    /*Metodo para el egreso de cifra control y egreso de gasolinas x empleado*/
    DialogDataEgresoDialog.prototype.egresoCifraxEmp = function () {
        console.log('Entro en el metodo egresoCifraxEmp');
        this.reimpresionSolicitudGastos();
    };
    /*Metodo para llamar a imprimir el ticket*/
    DialogDataEgresoDialog.prototype.reimpresionSolicitudGastos = function () {
        var _this = this;
        $('.mat-dialog-container').css({ 'width': '25%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        this.pantalla = true;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        console.log('Entro en el metodo reimpresionSolicitudGastos');
        this.cajaDetalleFolios.FolioADN = this.cajaDetalleFolios.FolioADN > 0 ? this.cajaDetalleFolios.FolioADN : 9152;
        console.log(String(this.cajaDetalleFolios.FolioADN));
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        try {
            this.cajaDetalleFolios.FolioADN = 9152; //Se asigna para visualizar la impresion del ticket;
            this._productoService2.getDetalleReimpresion(this.cajaDetalleFolios.FolioADN).subscribe(function (result) {
                console.log('RESULTADO');
                console.log(result);
                if (result.code != 200) {
                    console.log(result);
                    if (result.detalleSolicitudImpresionResult.EsError == false) {
                        _this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                        console.log(_this.ticket);
                        _this.imprimirEgreso(_this.ticket);
                    }
                    else {
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.MessageError = true;
                        _this.mensaje = result.detalleSolicitudImpresionResult.Mensaje;
                        _this.boton = true;
                        _this.cabecero = true;
                        console.log(_this.mensaje);
                    }
                }
                else {
                    console.log('Entro');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                    //console.log(this.ReporteGastos);
                }
            }, function (error) {
                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.imprimirCorrectamente = true;
                _this.mensaje = "No se obtuvieron datos del folio ADN";
                _this.cabecero = true;
                _this.boton = true;
                console.log(_this.mensaje);
            });
            /*Fin de servicio*/
        }
        catch (err) {
            this.titulo = "Error";
            this.pantalla = true;
            this.MessageError = true;
            this.boton = true;
            this.mensaje = "Error al imprimir comprobante , Favor de intentarlo nuevamente";
            this.boton = true;
            console.log(err);
        }
    };
    DialogDataEgresoDialog.prototype.imprimirEgreso = function (ticket) {
        var _this = this;
        // alert('El valor del '+ticket.FolioAdn);
        this.imprimirCorrectamente = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        /* $(".mat-dialog-container").removeClass("mat-dialog-container");
         $(".mat-dialog-container").addClass("mat-dialog-container2");
        if (ticket!=null){
            this.ticket=ticket;
        }
       /*Metodos para realizar la impresion*/
        console.log('Valor de ticket');
        console.log(ticket);
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this.cajaDetalleFolios.CifraControl = this.cajaDetalleFolios.CifraControl != null ? this.cajaDetalleFolios.CifraControl : this.datosEgreso.cifraControl;
        console.log('Valor de datos generales');
        console.log(this.datosGenerales);
        this._productoService2.setArchivoImprimirEgresoCifra(this.datosGenerales, this.ticket, this.cajaDetalleFolios).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService2.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService2.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                if (_this.impresion.EstatusExito) {
                                    _this.pantalla = true;
                                    _this.imagen = JSON.parse(_this.impresion.Contenido);
                                    _this.bse64 = _this.imagen[0].ImagenBase64;
                                    console.log(_this.bse64);
                                    _this.imprimirCorrectamente = true;
                                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                                }
                                else {
                                    _this.PantallaImprimir = false;
                                    _this.titulo = "Error";
                                    _this.pantalla = true;
                                    _this.PantallaImprimir = false;
                                    _this.imprimirCorrectamente = true;
                                    _this.boton = true;
                                    _this.mensaje = "Error al generar tikect del folio ADN";
                                }
                                /* $(".mat-dialog-container").removeClass("mat-dialog-container");
                                  $(".mat-dialog-container").addClass("mat-dialog-container");
                                  $(".mat-dialog-container").addClass("mat-dialog-container");*/
                                /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                  this.img.nativeElement.src = this.src;*/
                                /*Consumir el metodo para imprimir el documento*/
                                /*Fin del metodo para imprimir ticket*/
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.PantallaImprimir = false;
                                _this.titulo = "Error";
                                _this.pantalla = true;
                                _this.PantallaImprimir = false;
                                _this.imprimirCorrectamente = true;
                                _this.boton = true;
                                _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            _this.pantalla = true;
                            _this.PantallaImprimir = false;
                            _this.imprimirCorrectamente = true;
                            _this.MessageError = true;
                            _this.boton = true;
                            _this.mensaje = "Error al imprimir el ticket";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.PantallaImprimir = false;
                        _this.imprimirCorrectamente = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.imprimirCorrectamente = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.imprimirCorrectamente = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            _this.pantalla = true;
            _this.PantallaImprimir = false;
            _this.imprimirCorrectamente = true;
            _this.mensaje = "Error al generar ticket para el folio ADN";
            _this.boton = true;
        });
    };
    DialogDataEgresoDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-egreso-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-egreso-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_8__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */]])
    ], DialogDataEgresoDialog);
    return DialogDataEgresoDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-egreso1225.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataegreso1225Dialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__ = __webpack_require__("../../../../../src/app/models/reporteGastos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_egreso__ = __webpack_require__("../../../../../src/app/models/egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_CajaDetalleFolios__ = __webpack_require__("../../../../../src/app/models/CajaDetalleFolios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dialog_data_empleados_dialog__ = __webpack_require__("../../../../../src/app/components/dialog-data-empleados-dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








//import {DialogDataegresoADNDialog} from '../components/dialog-egresoADN';


var DialogDataegreso1225Dialog = /** @class */ (function () {
    function DialogDataegreso1225Dialog(data, datosCuentasServicios, _productoService2, datosGeneralesServicios, dialog) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.PantallaImprimir = false;
        this.retornar = false;
        this.banderafactura = true;
        this.siniestro = false;
        this.valorFactura = "";
        this.detalleFactura = false;
        this.cabecero = true;
        /*Parametros para la validacion de egreso*/
        this.folio = 0;
        this.refempleado = 0;
        this.tipoOperacion = 0;
        this.cifracontrol = '';
        this.egresos = new __WEBPACK_IMPORTED_MODULE_5__models_egreso__["a" /* egreso */](0, '', 0.00, ' ', '', '', 0);
        this.egresos.descCuenta = ''; //data.requiere.TiendaCuentas.NoCuenta+' '+data.requiere.TiendaCuentas.Descripcion;
        this.egresos.noCuenta = 0; //data.requiere.TiendaCuentas.NoCuenta;
        this.egresos.importe = 0.00;
        this.titulo = "Egreso de Gastos Diversos";
        this.requiereXML = data.requiere;
        console.log(this.requiereXML);
        console.log(this.egresos);
        // console.log(this.requiereXML.TiendaCuentas);
        this.descrip = ''; //data.requiere.TiendaCuentas.Parametro;
        this.habilitarComponenetes = false;
        this.requiredValidacion = true;
        this.requiredValidacionJust = true;
        this.cajaDetalleFolios = this.data.detEgresoADN;
        console.log('this.cajaDetalleFolios.FBPDescripcionCuenta ' + this.cajaDetalleFolios.FBPDescripcionCuenta);
        console.log('this.cajaDetalleFolios.NoCuenta ' + this.cajaDetalleFolios.NoCuenta);
        this.cajaDetalleFolios.FBPDescripcionCuenta = this.cajaDetalleFolios.NoCuenta + ' - ' + this.cajaDetalleFolios.FBPDescripcionCuenta;
    }
    DialogDataegreso1225Dialog.prototype.openCargaHuella = function () {
        var _this = this;
        console.log('Entro en el metodo de openCargaHuella');
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], {
            data: {
                datosGenerales: this.datosGenerales,
                consulta: this.consulta
            },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.consulta = result;
            console.log('Valor de consulta');
            console.log(_this.consulta);
            console.log('Valor de consulta');
            if (_this.consulta == false) {
                _this.titulo = "Error";
                _this.mensaje = "No se tiene una huella valida para realizar un Egreso Gasolina x Empleado";
                _this.pantalla = true;
                _this.cabecero = true;
                _this.PantallaImprimir = false;
                _this.reimpresionSolicitudGastos();
            }
            else {
                _this.reimpresionSolicitudGastos();
            }
        });
    };
    DialogDataegreso1225Dialog.prototype.validarFolioCentral = function (tipo) {
        var _this = this;
        this.pantalla = true;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        console.log('Entro en el metodo getConsultaValidacionEgreso');
        /*  if (tipo===3){
            this.cifracontrol=this.datosEgreso.cifraControl;
          }else{
              this.refempleado=this.datosEgreso.empleado;
          }*/
        this.cajaDetalleFolios = new __WEBPACK_IMPORTED_MODULE_8__models_CajaDetalleFolios__["a" /* CajaDetalleFolios */]('', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, '', 0, 0, '', '', 0, false);
        this._productoService2.getConsultaValidacionEgreso(this.folio, this.refempleado, tipo, this.cifracontrol).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length > 0 ? result.ValidaEgresoCajaResult.CajaDetalleFolios[0] : _this.cajaDetalleFolios;
                console.log('Valor de la respuesta');
                console.log(_this.cajaDetalleFolios);
                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                if (result.ValidaEgresoCajaResult.EsError == false) {
                    console.log('Se valido con exito');
                    _this.pantalla = false;
                    _this.boton = true;
                    _this.cabecero = true;
                    _this.validaCentral = false;
                    // this.titulo="Egresar ";
                    if (_this.cajaDetalleFolios.ValidaHuella) {
                        _this.pantalla = false;
                        _this.boton = true;
                        _this.validaCentral = false;
                        _this.openCargaHuella();
                    }
                }
                else {
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaEgresoCajaResult.Mensaje;
                    _this.cabecero = true;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                _this.cabecero = true;
                _this.PantallaImprimir = false;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        console.log('Valor de datosEgreso');
        //console.log(this.datosEgreso);
        this.validaCentral = false;
    };
    DialogDataegreso1225Dialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('Cargada de los archivos fileChangeEvent');
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
        /*Cambio de la bandera de factura*/
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
            else if (this.data.requiere.TiendaCuentas.RequiereXML === 2 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
        }
        else {
            this.banderafactura = false;
        }
        this.banderafactura = true;
        this.detalleFactura = true;
        console.log('valor de la banderafactura' + this.banderafactura);
        try {
            //console.log(fileInput.target.files.mozFullPath);
            console.log('Ruta del archivo');
            console.log(fileInput.target.value);
        }
        catch (err) {
            console.log('Fallo la carga ');
        }
    };
    DialogDataegreso1225Dialog.prototype.onSubmit = function () {
    };
    DialogDataegreso1225Dialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.egresos.importe > 0 && this.egresos.factura.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    DialogDataegreso1225Dialog.prototype.validaImporte = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.importe >= 0 ? true : false;
        }
        else {
            salida = this.egresos.importe >= 0 && valor ? true : false;
        }
        console.log('validar importe' + salida);
        return salida;
    };
    DialogDataegreso1225Dialog.prototype.validaFactura = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.factura.length > 0 ? true : false;
        }
        else {
            salida = this.egresos.factura.length > 0 && valor ? true : false;
        }
        console.log('validar factura' + salida);
        return salida;
    };
    DialogDataegreso1225Dialog.prototype.cargarArchivo = function (filesToUpload) {
        var reader = new FileReader();
        var self = this;
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log('Entro con el componente ' + theFile.name);
                self.xml = e.target.result;
                console.log('Carga del xml cargarArchivo');
                console.log(self.xml);
                //        self.consultaValidacionXML(self.xml);
                self.consultaValidacionXMLPrueba(self.xml);
            };
        })(filesToUpload[0]);
        //reader.readAsText(filesToUpload[0]);
        reader.readAsDataURL(filesToUpload[0]);
    };
    DialogDataegreso1225Dialog.prototype.llenarDatosfactura = function () {
        console.log(this.xmltexto);
    };
    DialogDataegreso1225Dialog.prototype.convertirXMLtoJson = function (xml) {
        console.log('XML');
        console.log(xml);
        var self = this;
        var ress;
        Object(__WEBPACK_IMPORTED_MODULE_6_xml2js__["parseString"])(xml, function (err, result) {
            console.log('objeto en json');
            console.log(result);
            ress = result;
        });
        console.log('Despues arnol');
        self.xmltexto = ress;
        console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);
        self.comprobantes = self.xmltexto["cfdi:Comprobante"]["$"];
        console.log(self.comprobantes);
        console.log(self.comprobantes.folio);
        console.log('Egresos');
        console.log(self.egresos);
        self.egresos.importe = Number(self.comprobantes.total);
        self.egresos.factura = self.comprobantes.folio;
        self.Complemento = self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
        console.log('Complemento');
        console.log(self.Complemento);
        console.log('Valor UUID=' + self.Complemento.UUID);
        /*this.egreso.importe=this.Complemento.total;
        this.egreso.factura=this.Complemento.folio;*/
        self.Emisor = self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
        console.log(self.Emisor);
        self.Impuestos = self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
        console.log(self.Impuestos);
        self.Receptor = self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
        console.log(self.Receptor);
    };
    /*Metodos para cambiar estatus de facturacion*/
    DialogDataegreso1225Dialog.prototype.cambiarEstatusFactura = function () {
        this.banderafactura = false;
        this.detalleFactura = false;
        //  alert(this.banderafactura);
        console.log('Valor de la banderafactura: ' + this.banderafactura);
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = false;
            }
            /*else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
            {
                   this.banderafactura=false;

            }*/
        }
        else {
            this.banderafactura = false;
        }
    };
    DialogDataegreso1225Dialog.prototype.consultaValidacionXML = function (xml) {
        var _this = this;
        console.log('XML');
        xml = xml.trim();
        xml = xml.split("\n").join("");
        xml = xml.split("\r").join("");
        //xml=xml.split("+").join("~"); 
        xml = xml.split("\n").join("");
        console.log(xml.trim());
        this._productoService2.getValidacionXML(xml.trim(), this.data.carga.Cuenta).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.detValidacionXML;
                console.log(_this.validaFacturacion);
                if (result.ValidafacturaResult.EsError == false) {
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidafacturaResult.Mensaje;
                    _this.pantalla = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegreso1225Dialog.prototype.consultaValidacionXMLPrueba = function (xml) {
        var _this = this;
        this.retornar = false;
        this.boton = true;
        this._productoService2.getValidacionXMLPrueba(xml.trim(), this.data.carga.Cuenta, this.data.datosGenerales.Canal).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                console.log(_this.validaFacturacion);
                if (result.ValidaArchivoXMLResult.EsError == false) {
                    _this.titulo = "Solicitud de Gastos";
                    _this.pantalla = false;
                    _this.egresos.importe = Number(_this.validaFacturacion.Totalxml);
                    _this.egresos.factura = _this.validaFacturacion.Folioxml;
                    _this.egresos.importe = Number(_this.validaFacturacion.Ivaxml);
                    console.log('El valor de la this.validaFacturacion');
                    console.log(_this.validaFacturacion);
                    _this.valorFactura = "No. Factura " + _this.validaFacturacion.Folioxml + '  ' +
                        /*"<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                        "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                        "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                        "Total: " + _this.validaFacturacion.Totalxml + '  ' +
                        "IVA: " + _this.validaFacturacion.Ivaxml;
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidaArchivoXMLResult.Mensaje;
                    _this.pantalla = true;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegreso1225Dialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        console.log('Entro en el metodo insertaSolicitudGastos');
        /*Cambiar el status de banderafactura*/
        if (this.banderafactura == true) {
            this.validaFacturacion.Datosparam = this.banderafactura == true ? 1 : 0;
        }
        /*if (this.data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado'){
              this.data.datosGenerales.NoEmpleado=this.egresos.factura;
        }*/
        this.egresos.noCuenta = this.data.carga.Cuenta === 1025 ? 604910 : this.data.carga.Cuenta;
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getInsertaSolicitudGastos(this.data.datosGenerales, this.egresos, this.validaFacturacion, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.AfectaAltaSolicitudResult.EsError == false) {
                    console.log('Se guardo con exito');
                    _this.titulo = "Exito";
                    _this.mensaje = "Se regisro correctamente la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                    _this.pantalla = true;
                    _this.boton = true;
                    _this.cabecero = true;
                    _this.PantallaImprimir = false;
                    _this.imprimirCorrectamente = true;
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    if (_this.data.carga.Cuenta === 604910 || _this.data.carga.Cuenta === 60491 || _this.data.carga.Cuenta === 1025 || _this.data.carga.Cuenta === 620106) {
                        var impresion;
                        impresion = new __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__["a" /* reporteGastos */](13796, 7439758, 620070, 1, 0, 0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '', '');
                        _this.cabecero = false;
                        _this.imprimirEgreso(impresion);
                        _this.PantallaImprimir = true;
                    }
                }
                else {
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + "\n" + _this.data.carga.Descripcion + "\n" + result.AfectaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                    _this.cabecero = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    /*Metodo para validar solicitud de gastos*/
    DialogDataegreso1225Dialog.prototype.validarSolicitudGastos = function () {
        var _this = this;
        this.retornar = false;
        console.log('Entro en el metodo validarSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getValidacionDatosGastosSolicitud(this.data.datosGenerales, this.egresos, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.ValidaAltaSolicitudResult.EsError == false) {
                    console.log('Se valido correctamente  con exito datos de solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    console.log('valor de stcontinuar :' + result.ValidaAltaSolicitudResult.stcontinuar);
                    if (result.ValidaAltaSolicitudResult.stcontinuar == 0) {
                        _this.boton = true;
                    }
                    else {
                        _this.boton = false;
                    }
                }
                else {
                    console.log('Se presento un error al validar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = _this.data.carga.Descripcion + "\n" + result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al validar la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = false;
                _this.retornar = true;
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegreso1225Dialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataegreso1225Dialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        // this.boton=true;
        this.titulo = "Solicitud de Gastos";
    };
    DialogDataegreso1225Dialog.prototype.egresar925 = function () {
        console.log('Valor del folio ADN seleccionado');
        // console.log(this.valorSeleccionado);
        /*Metodo mensaje a desplegar */
        this.titulo = "Alerta";
        this.pantalla = true;
        this.MessageError = true;
        //this.mensaje=result.detalleSolicitudImpresionResult.Mensaje;
        this.mensaje = "La autorización del Gasto con Folio ADN:7795. Fue pagada Satisfactoriamente";
        this.boton = false;
        this.cabecero = false;
        console.log(this.mensaje);
        //this.reimpresionSolicitudGastos();
        this.cajaDetalleFolios.FolioADN = 13812;
        this.openCargaHuella();
    };
    DialogDataegreso1225Dialog.prototype.reimpresionSolicitudGastos = function () {
        var _this = this;
        $('.mat-dialog-container').css({ 'width': '25%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        this.pantalla = true;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        console.log('Entro en el metodo reimpresionSolicitudGastos');
        console.log(this.cajaDetalleFolios.FolioADN);
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        try {
            this._productoService2.getDetalleReimpresion(this.cajaDetalleFolios.FolioADN).subscribe(function (result) {
                console.log('RESULTADO');
                console.log(result);
                if (result.code != 200) {
                    console.log(result);
                    if (result.detalleSolicitudImpresionResult.EsError == false) {
                        _this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                        console.log(_this.ticket);
                        _this.imprimirEgreso(_this.ticket);
                    }
                    else {
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.MessageError = true;
                        _this.mensaje = result.detalleSolicitudImpresionResult.Mensaje;
                        _this.boton = true;
                        _this.cabecero = true;
                        console.log(_this.mensaje);
                    }
                }
                else {
                    console.log('Entro');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                    //console.log(this.ReporteGastos);
                }
            }, function (error) {
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.MessageError = true;
                _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
            });
            /*Fin de servicio*/
        }
        catch (err) {
            this.titulo = "Error";
            this.pantalla = true;
            this.MessageError = true;
            this.mensaje = "Error al imprimir comprobante , Favor de intentarlo nuevamente";
            this.boton = true;
            console.log(err);
        }
    };
    DialogDataegreso1225Dialog.prototype.imprimirEgreso = function (ticket) {
        // alert('El valor del '+ticket.FolioAdn);
        var _this = this;
        $('.mat-dialog-container').css({ 'width': '25%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        this.imprimirCorrectamente = false;
        /* $(".mat-dialog-container").removeClass("mat-dialog-container");
         $(".mat-dialog-container").addClass("mat-dialog-container2");
         $(".mat-dialog-container").addClass("mat-dialog-container");*/
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        console.log('Valor de ticket');
        console.log(ticket);
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('Valor de datos generales');
        console.log(this.data.generales);
        this._productoService2.setArchivoImprimirEgresoCifra925(this.datosGenerales, this.ticket, this.cajaDetalleFolios).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService2.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService2.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                _this.PantallaImprimir = true;
                                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.titulo = "Error";
                                _this.MessageError = true;
                                _this.pantalla = true;
                                _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            _this.MessageError = true;
                            _this.pantalla = true;
                            _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        _this.MessageError = true;
                        // this.MessageError=true;
                        _this.pantalla = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    _this.MessageError = true;
                    _this.MessageError = true;
                    _this.pantalla = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                _this.MessageError = true;
                //  this.MessageError=true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            _this.MessageError = true;
            // this.MessageError=true;
            _this.pantalla = true;
            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
            _this.boton = true;
        });
    };
    DialogDataegreso1225Dialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-egreso1225-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-egreso1225-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */]])
    ], DialogDataegreso1225Dialog);
    return DialogDataegreso1225Dialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-egreso925.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataegreso925Dialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__ = __webpack_require__("../../../../../src/app/models/reporteGastos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_egreso__ = __webpack_require__("../../../../../src/app/models/egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_CajaDetalleFolios__ = __webpack_require__("../../../../../src/app/models/CajaDetalleFolios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dialog_data_empleados_dialog__ = __webpack_require__("../../../../../src/app/components/dialog-data-empleados-dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








//import {DialogDataegresoADNDialog} from '../components/dialog-egresoADN';


var DialogDataegreso925Dialog = /** @class */ (function () {
    function DialogDataegreso925Dialog(data, datosCuentasServicios, _productoService2, datosGeneralesServicios, dialog) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.PantallaImprimir = false;
        this.retornar = false;
        this.banderafactura = true;
        this.siniestro = false;
        this.valorFactura = "";
        this.detalleFactura = false;
        this.cabecero = true;
        /*Parametros para la validacion de egreso*/
        this.folio = 0;
        this.refempleado = 0;
        this.tipoOperacion = 0;
        this.cifracontrol = '';
        this.egresos = new __WEBPACK_IMPORTED_MODULE_5__models_egreso__["a" /* egreso */](0, '', 0.00, ' ', '', '', 0);
        this.egresos.descCuenta = ''; //data.requiere.TiendaCuentas.NoCuenta+' '+data.requiere.TiendaCuentas.Descripcion;
        this.egresos.noCuenta = 0; //data.requiere.TiendaCuentas.NoCuenta;
        this.egresos.importe = 0.00;
        this.titulo = "Egreso de Gastos Diversos";
        this.requiereXML = data.requiere;
        console.log(this.requiereXML);
        console.log(this.egresos);
        // console.log(this.requiereXML.TiendaCuentas);
        this.descrip = ''; //data.requiere.TiendaCuentas.Parametro;
        this.habilitarComponenetes = false;
        this.requiredValidacion = true;
        this.requiredValidacionJust = true;
        this.cajaDetalleFolios = this.data.detEgresoADN;
        console.log('this.cajaDetalleFolios.FBPDescripcionCuenta ' + this.cajaDetalleFolios.FBPDescripcionCuenta);
        console.log('this.cajaDetalleFolios.NoCuenta ' + this.cajaDetalleFolios.NoCuenta);
        this.cajaDetalleFolios.FBPDescripcionCuenta = this.cajaDetalleFolios.NoCuenta + ' - ' + this.cajaDetalleFolios.FBPDescripcionCuenta;
    }
    DialogDataegreso925Dialog.prototype.openCargaHuella = function () {
        var _this = this;
        console.log('Entro en el metodo de openCargaHuella');
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this.datosGenerales.NoEmpleado = String(this.refempleado);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__components_dialog_data_empleados_dialog__["a" /* DialogDataEmpleadoHuellaDialog */], {
            data: {
                datosGenerales: this.datosGenerales,
                consulta: this.consulta
            },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.consulta = result;
            console.log('Valor de consulta');
            console.log(_this.consulta);
            console.log('Valor de consulta');
            if (_this.consulta == false) {
                _this.titulo = "Error";
                _this.mensaje = "No se tiene una huella valida para realizar un Egreso Gasolina x Empleado";
                _this.pantalla = true;
                _this.cabecero = true;
                _this.PantallaImprimir = false;
                _this.reimpresionSolicitudGastos();
            }
            else {
                _this.reimpresionSolicitudGastos();
            }
        });
    };
    DialogDataegreso925Dialog.prototype.validarFolioCentral = function (tipo) {
        var _this = this;
        this.pantalla = true;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        console.log('Entro en el metodo getConsultaValidacionEgreso');
        /*  if (tipo===3){
            this.cifracontrol=this.datosEgreso.cifraControl;
          }else{
              this.refempleado=this.datosEgreso.empleado;
          }*/
        this.cajaDetalleFolios = new __WEBPACK_IMPORTED_MODULE_8__models_CajaDetalleFolios__["a" /* CajaDetalleFolios */]('', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, '', 0, 0, '', '', 0, false);
        this._productoService2.getConsultaValidacionEgreso(this.folio, this.refempleado, tipo, this.cifracontrol).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length > 0 ? result.ValidaEgresoCajaResult.CajaDetalleFolios[0] : _this.cajaDetalleFolios;
                console.log('Valor de la respuesta');
                console.log(_this.cajaDetalleFolios);
                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                if (result.ValidaEgresoCajaResult.EsError == false) {
                    console.log('Se valido con exito');
                    _this.pantalla = false;
                    _this.boton = true;
                    _this.cabecero = true;
                    _this.validaCentral = false;
                    // this.titulo="Egresar ";
                    if (_this.cajaDetalleFolios.ValidaHuella) {
                        _this.pantalla = false;
                        _this.boton = true;
                        _this.validaCentral = false;
                        _this.openCargaHuella();
                    }
                }
                else {
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaEgresoCajaResult.Mensaje;
                    _this.cabecero = true;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                _this.cabecero = true;
                _this.PantallaImprimir = false;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        console.log('Valor de datosEgreso');
        //console.log(this.datosEgreso);
        this.validaCentral = false;
    };
    DialogDataegreso925Dialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('Cargada de los archivos fileChangeEvent');
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
        /*Cambio de la bandera de factura*/
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
            else if (this.data.requiere.TiendaCuentas.RequiereXML === 2 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
        }
        else {
            this.banderafactura = false;
        }
        this.banderafactura = true;
        this.detalleFactura = true;
        console.log('valor de la banderafactura' + this.banderafactura);
        try {
            //console.log(fileInput.target.files.mozFullPath);
            console.log('Ruta del archivo');
            console.log(fileInput.target.value);
        }
        catch (err) {
            console.log('Fallo la carga ');
        }
    };
    DialogDataegreso925Dialog.prototype.onSubmit = function () {
    };
    DialogDataegreso925Dialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.egresos.importe > 0 && this.egresos.factura.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    DialogDataegreso925Dialog.prototype.validaImporte = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.importe >= 0 ? true : false;
        }
        else {
            salida = this.egresos.importe >= 0 && valor ? true : false;
        }
        console.log('validar importe' + salida);
        return salida;
    };
    DialogDataegreso925Dialog.prototype.validaFactura = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.factura.length > 0 ? true : false;
        }
        else {
            salida = this.egresos.factura.length > 0 && valor ? true : false;
        }
        console.log('validar factura' + salida);
        return salida;
    };
    DialogDataegreso925Dialog.prototype.cargarArchivo = function (filesToUpload) {
        var reader = new FileReader();
        var self = this;
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log('Entro con el componente ' + theFile.name);
                self.xml = e.target.result;
                console.log('Carga del xml cargarArchivo');
                console.log(self.xml);
                //        self.consultaValidacionXML(self.xml);
                self.consultaValidacionXMLPrueba(self.xml);
            };
        })(filesToUpload[0]);
        //reader.readAsText(filesToUpload[0]);
        reader.readAsDataURL(filesToUpload[0]);
    };
    DialogDataegreso925Dialog.prototype.llenarDatosfactura = function () {
        console.log(this.xmltexto);
    };
    DialogDataegreso925Dialog.prototype.convertirXMLtoJson = function (xml) {
        console.log('XML');
        console.log(xml);
        var self = this;
        var ress;
        Object(__WEBPACK_IMPORTED_MODULE_6_xml2js__["parseString"])(xml, function (err, result) {
            console.log('objeto en json');
            console.log(result);
            ress = result;
        });
        console.log('Despues arnol');
        self.xmltexto = ress;
        console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);
        self.comprobantes = self.xmltexto["cfdi:Comprobante"]["$"];
        console.log(self.comprobantes);
        console.log(self.comprobantes.folio);
        console.log('Egresos');
        console.log(self.egresos);
        self.egresos.importe = Number(self.comprobantes.total);
        self.egresos.factura = self.comprobantes.folio;
        self.Complemento = self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
        console.log('Complemento');
        console.log(self.Complemento);
        console.log('Valor UUID=' + self.Complemento.UUID);
        /*this.egreso.importe=this.Complemento.total;
        this.egreso.factura=this.Complemento.folio;*/
        self.Emisor = self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
        console.log(self.Emisor);
        self.Impuestos = self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
        console.log(self.Impuestos);
        self.Receptor = self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
        console.log(self.Receptor);
    };
    /*Metodos para cambiar estatus de facturacion*/
    DialogDataegreso925Dialog.prototype.cambiarEstatusFactura = function () {
        this.banderafactura = false;
        this.detalleFactura = false;
        //  alert(this.banderafactura);
        console.log('Valor de la banderafactura: ' + this.banderafactura);
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = false;
            }
            /*else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
            {
                   this.banderafactura=false;

            }*/
        }
        else {
            this.banderafactura = false;
        }
    };
    DialogDataegreso925Dialog.prototype.consultaValidacionXML = function (xml) {
        var _this = this;
        console.log('XML');
        xml = xml.trim();
        xml = xml.split("\n").join("");
        xml = xml.split("\r").join("");
        //xml=xml.split("+").join("~"); 
        xml = xml.split("\n").join("");
        console.log(xml.trim());
        this._productoService2.getValidacionXML(xml.trim(), this.data.carga.Cuenta).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.detValidacionXML;
                console.log(_this.validaFacturacion);
                if (result.ValidafacturaResult.EsError == false) {
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidafacturaResult.Mensaje;
                    _this.pantalla = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegreso925Dialog.prototype.consultaValidacionXMLPrueba = function (xml) {
        var _this = this;
        this.retornar = false;
        this.boton = true;
        this._productoService2.getValidacionXMLPrueba(xml.trim(), this.data.carga.Cuenta, this.data.datosGenerales.Canal).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                console.log(_this.validaFacturacion);
                if (result.ValidaArchivoXMLResult.EsError == false) {
                    _this.titulo = "Solicitud de Gastos";
                    _this.pantalla = false;
                    _this.egresos.importe = Number(_this.validaFacturacion.Totalxml);
                    _this.egresos.factura = _this.validaFacturacion.Folioxml;
                    _this.egresos.importe = Number(_this.validaFacturacion.Ivaxml);
                    console.log('El valor de la this.validaFacturacion');
                    console.log(_this.validaFacturacion);
                    _this.valorFactura = "No. Factura " + _this.validaFacturacion.Folioxml + '  ' +
                        /*"<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                        "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                        "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                        "Total: " + _this.validaFacturacion.Totalxml + '  ' +
                        "IVA: " + _this.validaFacturacion.Ivaxml;
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidaArchivoXMLResult.Mensaje;
                    _this.pantalla = true;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegreso925Dialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        console.log('Entro en el metodo insertaSolicitudGastos');
        /*Cambiar el status de banderafactura*/
        if (this.banderafactura == true) {
            this.validaFacturacion.Datosparam = this.banderafactura == true ? 1 : 0;
        }
        /*if (this.data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado'){
              this.data.datosGenerales.NoEmpleado=this.egresos.factura;
        }*/
        this.egresos.noCuenta = this.data.carga.Cuenta === 1025 ? 604910 : this.data.carga.Cuenta;
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getInsertaSolicitudGastos(this.data.datosGenerales, this.egresos, this.validaFacturacion, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.AfectaAltaSolicitudResult.EsError == false) {
                    console.log('Se guardo con exito');
                    _this.titulo = "Exito";
                    _this.mensaje = "Se regisro correctamente la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                    _this.pantalla = true;
                    _this.boton = true;
                    _this.cabecero = true;
                    _this.PantallaImprimir = false;
                    _this.imprimirCorrectamente = true;
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    if (_this.data.carga.Cuenta === 604910 || _this.data.carga.Cuenta === 60491 || _this.data.carga.Cuenta === 1025 || _this.data.carga.Cuenta === 620106) {
                        var impresion;
                        impresion = new __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__["a" /* reporteGastos */](13796, 7439758, 620070, 1, 0, 0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '', '');
                        _this.cabecero = false;
                        _this.imprimirEgreso(impresion);
                        _this.PantallaImprimir = true;
                    }
                }
                else {
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + "\n" + _this.data.carga.Descripcion + "\n" + result.AfectaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                    _this.cabecero = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    /*Metodo para validar solicitud de gastos*/
    DialogDataegreso925Dialog.prototype.validarSolicitudGastos = function () {
        var _this = this;
        this.retornar = false;
        console.log('Entro en el metodo validarSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getValidacionDatosGastosSolicitud(this.data.datosGenerales, this.egresos, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.ValidaAltaSolicitudResult.EsError == false) {
                    console.log('Se valido correctamente  con exito datos de solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    console.log('valor de stcontinuar :' + result.ValidaAltaSolicitudResult.stcontinuar);
                    if (result.ValidaAltaSolicitudResult.stcontinuar == 0) {
                        _this.boton = true;
                    }
                    else {
                        _this.boton = false;
                    }
                }
                else {
                    console.log('Se presento un error al validar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = _this.data.carga.Descripcion + "\n" + result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al validar la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = false;
                _this.retornar = true;
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegreso925Dialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataegreso925Dialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        // this.boton=true;
        this.titulo = "Solicitud de Gastos";
    };
    DialogDataegreso925Dialog.prototype.egresar925 = function () {
        console.log('Valor del folio ADN seleccionado');
        // console.log(this.valorSeleccionado);
        /*Metodo mensaje a desplegar */
        this.titulo = "Alerta";
        this.pantalla = true;
        this.MessageError = true;
        //this.mensaje=result.detalleSolicitudImpresionResult.Mensaje;
        this.mensaje = "La autorización del Gasto con Folio ADN:7795. Fue pagada Satisfactoriamente";
        this.boton = false;
        this.cabecero = false;
        console.log(this.mensaje);
        //this.reimpresionSolicitudGastos();
        this.cajaDetalleFolios.FolioADN = 13812;
        this.openCargaHuella();
    };
    DialogDataegreso925Dialog.prototype.reimpresionSolicitudGastos = function () {
        var _this = this;
        $('.mat-dialog-container').css({ 'width': '25%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        this.pantalla = true;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        console.log('Entro en el metodo reimpresionSolicitudGastos');
        console.log(this.cajaDetalleFolios.FolioADN);
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        try {
            this._productoService2.getDetalleReimpresion(this.cajaDetalleFolios.FolioADN).subscribe(function (result) {
                console.log('RESULTADO');
                console.log(result);
                if (result.code != 200) {
                    console.log(result);
                    if (result.detalleSolicitudImpresionResult.EsError == false) {
                        _this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                        console.log(_this.ticket);
                        _this.imprimirEgreso(_this.ticket);
                    }
                    else {
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.MessageError = true;
                        _this.mensaje = result.detalleSolicitudImpresionResult.Mensaje;
                        _this.boton = true;
                        _this.cabecero = true;
                        console.log(_this.mensaje);
                    }
                }
                else {
                    console.log('Entro');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                    //console.log(this.ReporteGastos);
                }
            }, function (error) {
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.MessageError = true;
                _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
            });
            /*Fin de servicio*/
        }
        catch (err) {
            this.titulo = "Error";
            this.pantalla = true;
            this.MessageError = true;
            this.mensaje = "Error al imprimir comprobante , Favor de intentarlo nuevamente";
            this.boton = true;
            console.log(err);
        }
    };
    DialogDataegreso925Dialog.prototype.imprimirEgreso = function (ticket) {
        // alert('El valor del '+ticket.FolioAdn);
        var _this = this;
        $('.mat-dialog-container').css({ 'width': '25%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        this.imprimirCorrectamente = false;
        /* $(".mat-dialog-container").removeClass("mat-dialog-container");
         $(".mat-dialog-container").addClass("mat-dialog-container2");
         $(".mat-dialog-container").addClass("mat-dialog-container");*/
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        console.log('Valor de ticket');
        console.log(ticket);
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('Valor de datos generales');
        console.log(this.data.generales);
        this._productoService2.setArchivoImprimirEgresoCifra925(this.datosGenerales, this.ticket, this.cajaDetalleFolios).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService2.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService2.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                _this.PantallaImprimir = true;
                                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.titulo = "Error";
                                _this.MessageError = true;
                                _this.pantalla = true;
                                _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            _this.MessageError = true;
                            _this.pantalla = true;
                            _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        _this.MessageError = true;
                        // this.MessageError=true;
                        _this.pantalla = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    _this.MessageError = true;
                    _this.MessageError = true;
                    _this.pantalla = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                _this.MessageError = true;
                //  this.MessageError=true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            _this.MessageError = true;
            // this.MessageError=true;
            _this.pantalla = true;
            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
            _this.boton = true;
        });
    };
    DialogDataegreso925Dialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-egreso925-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-egreso925-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */]])
    ], DialogDataegreso925Dialog);
    return DialogDataegreso925Dialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-egresoADN.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataegresoADNDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__ = __webpack_require__("../../../../../src/app/models/reporteGastos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_egreso__ = __webpack_require__("../../../../../src/app/models/egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DialogDataegresoADNDialog = /** @class */ (function () {
    function DialogDataegresoADNDialog(data, datosCuentasServicios, _productoService2, datosGeneralesServicios) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.PantallaImprimir = false;
        this.retornar = false;
        this.banderafactura = true;
        this.siniestro = false;
        this.valorFactura = "";
        this.detalleFactura = false;
        this.cabecero = true;
        this.egresos = new __WEBPACK_IMPORTED_MODULE_5__models_egreso__["a" /* egreso */](0, '', 0.00, ' ', '', '', 0);
        this.egresos.descCuenta = ''; //data.requiere.TiendaCuentas.NoCuenta+' '+data.requiere.TiendaCuentas.Descripcion;
        this.egresos.noCuenta = 0; //data.requiere.TiendaCuentas.NoCuenta;
        this.egresos.importe = 0.00;
        this.titulo = "Egreso de Gastos Diversos";
        this.requiereXML = data.requiere;
        console.log(this.requiereXML);
        console.log(this.egresos);
        // console.log(this.requiereXML.TiendaCuentas);
        this.descrip = ''; //data.requiere.TiendaCuentas.Parametro;
        this.habilitarComponenetes = false;
        this.requiredValidacion = true;
        this.requiredValidacionJust = true;
        this.cajaDetalleFolios = this.data.detEgresoADN;
        this.cajaDetalleFolios.FBPDescripcionCuenta = this.cajaDetalleFolios.NoCuenta + ' - ' + this.cajaDetalleFolios.FBPDescripcionCuenta;
    }
    DialogDataegresoADNDialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('Cargada de los archivos fileChangeEvent');
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
        /*Cambio de la bandera de factura*/
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
            else if (this.data.requiere.TiendaCuentas.RequiereXML === 2 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
        }
        else {
            this.banderafactura = false;
        }
        this.banderafactura = true;
        this.detalleFactura = true;
        console.log('valor de la banderafactura' + this.banderafactura);
        try {
            //console.log(fileInput.target.files.mozFullPath);
            console.log('Ruta del archivo');
            console.log(fileInput.target.value);
        }
        catch (err) {
            console.log('Fallo la carga ');
        }
    };
    DialogDataegresoADNDialog.prototype.onSubmit = function () {
    };
    DialogDataegresoADNDialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.egresos.importe > 0 && this.egresos.factura.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    DialogDataegresoADNDialog.prototype.validaImporte = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.importe >= 0 ? true : false;
        }
        else {
            salida = this.egresos.importe >= 0 && valor ? true : false;
        }
        console.log('validar importe' + salida);
        return salida;
    };
    DialogDataegresoADNDialog.prototype.validaFactura = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.factura.length > 0 ? true : false;
        }
        else {
            salida = this.egresos.factura.length > 0 && valor ? true : false;
        }
        console.log('validar factura' + salida);
        return salida;
    };
    DialogDataegresoADNDialog.prototype.cargarArchivo = function (filesToUpload) {
        var reader = new FileReader();
        var self = this;
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log('Entro con el componente ' + theFile.name);
                self.xml = e.target.result;
                console.log('Carga del xml cargarArchivo');
                console.log(self.xml);
                //        self.consultaValidacionXML(self.xml);
                self.consultaValidacionXMLPrueba(self.xml);
            };
        })(filesToUpload[0]);
        //reader.readAsText(filesToUpload[0]);
        reader.readAsDataURL(filesToUpload[0]);
    };
    DialogDataegresoADNDialog.prototype.llenarDatosfactura = function () {
        console.log(this.xmltexto);
    };
    DialogDataegresoADNDialog.prototype.convertirXMLtoJson = function (xml) {
        console.log('XML');
        console.log(xml);
        var self = this;
        var ress;
        Object(__WEBPACK_IMPORTED_MODULE_6_xml2js__["parseString"])(xml, function (err, result) {
            console.log('objeto en json');
            console.log(result);
            ress = result;
        });
        console.log('Despues arnol');
        self.xmltexto = ress;
        console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);
        self.comprobantes = self.xmltexto["cfdi:Comprobante"]["$"];
        console.log(self.comprobantes);
        console.log(self.comprobantes.folio);
        console.log('Egresos');
        console.log(self.egresos);
        self.egresos.importe = Number(self.comprobantes.total);
        self.egresos.factura = self.comprobantes.folio;
        self.Complemento = self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
        console.log('Complemento');
        console.log(self.Complemento);
        console.log('Valor UUID=' + self.Complemento.UUID);
        /*this.egreso.importe=this.Complemento.total;
        this.egreso.factura=this.Complemento.folio;*/
        self.Emisor = self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
        console.log(self.Emisor);
        self.Impuestos = self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
        console.log(self.Impuestos);
        self.Receptor = self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
        console.log(self.Receptor);
    };
    /*Metodos para cambiar estatus de facturacion*/
    DialogDataegresoADNDialog.prototype.cambiarEstatusFactura = function () {
        this.banderafactura = false;
        this.detalleFactura = false;
        //  alert(this.banderafactura);
        console.log('Valor de la banderafactura: ' + this.banderafactura);
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = false;
            }
            /*else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
            {
                   this.banderafactura=false;

            }*/
        }
        else {
            this.banderafactura = false;
        }
    };
    DialogDataegresoADNDialog.prototype.consultaValidacionXML = function (xml) {
        var _this = this;
        console.log('XML');
        xml = xml.trim();
        xml = xml.split("\n").join("");
        xml = xml.split("\r").join("");
        //xml=xml.split("+").join("~"); 
        xml = xml.split("\n").join("");
        console.log(xml.trim());
        this._productoService2.getValidacionXML(xml.trim(), this.data.carga.Cuenta).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.detValidacionXML;
                console.log(_this.validaFacturacion);
                if (result.ValidafacturaResult.EsError == false) {
                    /*  if (this.validaFacturacion.codigo ==0){
                              this.convertirXMLtoJson(this.xml);

                      }else{

                          console.log('Xml no es valido \n Favor de cargar un XML valido');
                          this.titulo="Alerta                                                 ";
                          this.mensaje= "Favor de cargar un xml valido, \n Intenta nuevamente ";
                          this.pantalla=true;
                          this.boton=false;


                      }*/
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidafacturaResult.Mensaje;
                    _this.pantalla = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegresoADNDialog.prototype.consultaValidacionXMLPrueba = function (xml) {
        var _this = this;
        this.retornar = false;
        this.boton = true;
        this._productoService2.getValidacionXMLPrueba(xml.trim(), this.data.carga.Cuenta, this.data.datosGenerales.Canal).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                console.log(_this.validaFacturacion);
                if (result.ValidaArchivoXMLResult.EsError == false) {
                    _this.titulo = "Solicitud de Gastos";
                    _this.pantalla = false;
                    _this.egresos.importe = Number(_this.validaFacturacion.Totalxml);
                    _this.egresos.factura = _this.validaFacturacion.Folioxml;
                    _this.egresos.importe = Number(_this.validaFacturacion.Ivaxml);
                    console.log('El valor de la this.validaFacturacion');
                    console.log(_this.validaFacturacion);
                    _this.valorFactura = "No. Factura " + _this.validaFacturacion.Folioxml + '  ' +
                        /*"<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                        "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                        "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                        "Total: " + _this.validaFacturacion.Totalxml + '  ' +
                        "IVA: " + _this.validaFacturacion.Ivaxml;
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidaArchivoXMLResult.Mensaje;
                    _this.pantalla = true;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegresoADNDialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        console.log('Entro en el metodo insertaSolicitudGastos');
        /*Cambiar el status de banderafactura*/
        if (this.banderafactura == true) {
            this.validaFacturacion.Datosparam = this.banderafactura == true ? 1 : 0;
        }
        /*if (this.data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado'){
              this.data.datosGenerales.NoEmpleado=this.egresos.factura;
        }*/
        this.egresos.noCuenta = this.data.carga.Cuenta === 1025 ? 604910 : this.data.carga.Cuenta;
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getInsertaSolicitudGastos(this.data.datosGenerales, this.egresos, this.validaFacturacion, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.AfectaAltaSolicitudResult.EsError == false) {
                    console.log('Se guardo con exito');
                    _this.titulo = "Exito";
                    _this.mensaje = "Se regisro correctamente la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                    _this.pantalla = true;
                    _this.boton = true;
                    _this.cabecero = true;
                    _this.PantallaImprimir = false;
                    _this.imprimirCorrectamente = true;
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    if (_this.data.carga.Cuenta === 604910 || _this.data.carga.Cuenta === 60491 || _this.data.carga.Cuenta === 1025 || _this.data.carga.Cuenta === 620106) {
                        var impresion;
                        impresion = new __WEBPACK_IMPORTED_MODULE_4__models_reporteGastos__["a" /* reporteGastos */](13796, 7439758, 620070, 1, 0, 0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '', '');
                        _this.cabecero = false;
                        _this.imprimirEgreso(impresion);
                        _this.PantallaImprimir = true;
                    }
                }
                else {
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + "\n" + _this.data.carga.Descripcion + "\n" + result.AfectaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                    _this.cabecero = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    /*Metodo para validar solicitud de gastos*/
    DialogDataegresoADNDialog.prototype.validarSolicitudGastos = function () {
        var _this = this;
        this.retornar = false;
        console.log('Entro en el metodo validarSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getValidacionDatosGastosSolicitud(this.data.datosGenerales, this.egresos, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.ValidaAltaSolicitudResult.EsError == false) {
                    console.log('Se valido correctamente  con exito datos de solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    console.log('valor de stcontinuar :' + result.ValidaAltaSolicitudResult.stcontinuar);
                    if (result.ValidaAltaSolicitudResult.stcontinuar == 0) {
                        _this.boton = true;
                    }
                    else {
                        _this.boton = false;
                    }
                }
                else {
                    console.log('Se presento un error al validar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = _this.data.carga.Descripcion + "\n" + result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al validar la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = false;
                _this.retornar = true;
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataegresoADNDialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataegresoADNDialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        // this.boton=true;
        this.titulo = "Solicitud de Gastos";
    };
    DialogDataegresoADNDialog.prototype.egresarADN = function () {
        console.log('Valor del folio ADN seleccionado');
        // console.log(this.valorSeleccionado);
        this.reimpresionSolicitudGastos();
    };
    DialogDataegresoADNDialog.prototype.reimpresionSolicitudGastos = function () {
        var _this = this;
        $('.mat-dialog-container').css({ 'width': '25%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        this.pantalla = true;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        console.log('Entro en el metodo reimpresionSolicitudGastos');
        console.log(this.cajaDetalleFolios.FolioADN);
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        try {
            this._productoService2.getDetalleReimpresion(this.cajaDetalleFolios.FolioADN).subscribe(function (result) {
                console.log('RESULTADO');
                console.log(result);
                if (result.code != 200) {
                    console.log(result);
                    if (result.detalleSolicitudImpresionResult.EsError == false) {
                        _this.ticket = result.detalleSolicitudImpresionResult.DetCuentasReimpresion[0];
                        console.log(_this.ticket);
                        _this.imprimirEgreso(_this.ticket);
                    }
                    else {
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        _this.MessageError = true;
                        _this.mensaje = result.detalleSolicitudImpresionResult.Mensaje;
                        _this.boton = true;
                        _this.cabecero = true;
                        console.log(_this.mensaje);
                    }
                }
                else {
                    console.log('Entro');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                    //console.log(this.ReporteGastos);
                }
            }, function (error) {
                _this.titulo = "Error";
                _this.pantalla = true;
                _this.MessageError = true;
                _this.mensaje = "Error al autorizar Solicitud , Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
            });
            /*Fin de servicio*/
        }
        catch (err) {
            this.titulo = "Error";
            this.pantalla = true;
            this.MessageError = true;
            this.mensaje = "Error al imprimir comprobante , Favor de intentarlo nuevamente";
            this.boton = true;
            console.log(err);
        }
    };
    DialogDataegresoADNDialog.prototype.imprimirEgreso = function (ticket) {
        // alert('El valor del '+ticket.FolioAdn);
        var _this = this;
        $('.mat-dialog-container').css({ 'width': '25%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        this.imprimirCorrectamente = false;
        /* $(".mat-dialog-container").removeClass("mat-dialog-container");
         $(".mat-dialog-container").addClass("mat-dialog-container2");
         $(".mat-dialog-container").addClass("mat-dialog-container");*/
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        console.log('Valor de ticket');
        console.log(ticket);
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('Valor de datos generales');
        console.log(this.data.generales);
        this._productoService2.setArchivoImprimirEgresoADN(this.datosGenerales, this.ticket).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService2.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService2.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                _this.PantallaImprimir = true;
                                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.titulo = "Error";
                                _this.MessageError = true;
                                _this.pantalla = true;
                                _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            _this.MessageError = true;
                            _this.pantalla = true;
                            _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        _this.MessageError = true;
                        // this.MessageError=true;
                        _this.pantalla = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    _this.MessageError = true;
                    _this.MessageError = true;
                    _this.pantalla = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                _this.MessageError = true;
                //  this.MessageError=true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            _this.MessageError = true;
            // this.MessageError=true;
            _this.pantalla = true;
            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
            _this.boton = true;
        });
    };
    DialogDataegresoADNDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-egresoADN-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-egresoADN-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataegresoADNDialog);
    return DialogDataegresoADNDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-finiquito.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataFiniquito; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataFiniquitoDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_SolicitudFiniquito__ = __webpack_require__("../../../../../src/app/models/SolicitudFiniquito.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






//import {ActualizarFiniquito} from '../models/ActualizarFiniquito';

/**
 * @title Injecting data when opening a dialog
 */
var DialogDataFiniquito = /** @class */ (function () {
    function DialogDataFiniquito(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
    }
    DialogDataFiniquito.prototype.retorno = function () {
    };
    DialogDataFiniquito.prototype.openDialogPrueba = function () {
    };
    DialogDataFiniquito.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_5__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    DialogDataFiniquito.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataFiniquito.prototype.openDialog = function () {
        /*Metodo para la carga de la Informaciòn*/
        var _this = this;
        //    this.openDialogCargar();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this.datosCuentasServicios.setCuenta(this.valor.folioFBP);
        this.cuentas = this.datosCuentasServicios.getDatosCuentas();
        //this.cuentas.cuenta=this.data.carga.NoCuenta
        console.log('getReporteGastos');
        console.log(this.cuentas);
        this._productoService.getConsultaFiniquito(this.valor.folioFBP).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.detFiniquito = result.detFiniquito;
                console.log(_this.ReporteGastos);
                _this.dialog.open(DialogDataFiniquitoDialog, {
                    data: {
                        animal: 'panda',
                        carga: _this.valor,
                        detFiniquito: _this.detFiniquito,
                        desc: _this.cuentas.descEstatus,
                        generales: _this.datosGenerales
                    },
                    disableClose: true
                });
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataFiniquito.prototype, "valor", void 0);
    DialogDataFiniquito = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-finiquito',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-finiquito.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataFiniquito);
    return DialogDataFiniquito;
}());

var DialogDataFiniquitoDialog = /** @class */ (function () {
    //  this.datosGeneralesServicios.getDatosGenerales();
    function DialogDataFiniquitoDialog(data, datosCuentasServicios, _productoService) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.pantalla = false;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.boton = true;
        //this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
        this.finiquito = this.data.detFiniquito;
        this.general = this.data.generales;
        this.actualiza = this.data.act;
    }
    DialogDataFiniquitoDialog.prototype.guardarSolicitudFiniquito = function () {
        var _this = this;
        this.imprimirCorrectamente = false;
        this.actualiza = new __WEBPACK_IMPORTED_MODULE_6__models_SolicitudFiniquito__["a" /* SolicitudFiniquito */](this.general.NoEmpleado, this.general.estacion, String(this.general.FuncionSAPCorta), this.general.TipoUsuario, this.finiquito);
        // String(this.general.Puesto);
        this._productoService.getInsertaSolicitudFiniquito(this.actualiza).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                if (result.InsertaFolioFiniquitoResult.EsError == false) {
                    _this.ticket = result.InsertaFolioFiniquitoResult.DetCuentasReimpresion[0];
                    console.log(_this.ticket);
                    _this.imprimirEgreso(_this.ticket);
                }
                else {
                    console.log('Error al guaradar solicitud de finiquito');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    _this.MessageError = true;
                    _this.mensaje = result.InsertaFolioFiniquitoResult.Mensaje;
                    _this.boton = true;
                    console.log(_this.mensaje);
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ticket);
                _this.titulo = "Error";
                _this.MessageError = true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DialogDataFiniquitoDialog.prototype.imprimirEgreso = function (ticket) {
        var _this = this;
        // alert('El valor del '+ticket.FolioAdn);
        this.imprimirCorrectamente = false;
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        this._productoService.setArchivoImprimirFiniquito(this.data.generales, this.ticket).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                  this.img.nativeElement.src = this.src;*/
                                /*Consumir el metodo para imprimir el documento*/
                                /*Fin del metodo para imprimir ticket*/
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.titulo = "Error";
                                _this.MessageError = true;
                                _this.pantalla = true;
                                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            _this.MessageError = true;
                            _this.pantalla = true;
                            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        _this.MessageError = true;
                        // this.MessageError=true;
                        _this.pantalla = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    _this.MessageError = true;
                    _this.MessageError = true;
                    _this.pantalla = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                _this.MessageError = true;
                //  this.MessageError=true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            _this.MessageError = true;
            // this.MessageError=true;
            _this.pantalla = true;
            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
            _this.boton = true;
        });
        /*Fin del metodo de reimpresion*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('imgRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DialogDataFiniquitoDialog.prototype, "img", void 0);
    DialogDataFiniquitoDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-finiquito-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-finiquito-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */]])
    ], DialogDataFiniquitoDialog);
    return DialogDataFiniquitoDialog;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/dialog-reimpresion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataReimpresion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataReimpresionDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * @title Injecting data when opening a dialog
 */
var DialogDataReimpresion = /** @class */ (function () {
    function DialogDataReimpresion(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
    }
    DialogDataReimpresion.prototype.retorno = function () {
    };
    DialogDataReimpresion.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_5__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    DialogDataReimpresion.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataReimpresion.prototype.openDialog = function () {
        /*Metodo para la carga de la Informaciòn*/
        var _this = this;
        //    this.openDialogCargar();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this.datosCuentasServicios.setCuenta(this.valor.NoCuenta);
        this.cuentas = this.datosCuentasServicios.getDatosCuentas();
        //this.cuentas.cuenta=this.data.carga.NoCuenta
        console.log('getReporteGastos');
        console.log(this.cuentas);
        this._productoService.getDetalleCuentasReimpresion(this.cuentas, this.datosGenerales.FuncionSAP).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.ReporteGastos = result.ConsultaDetCuentasReimpresionResult.DetCuentasReimpresion;
                console.log(_this.ReporteGastos);
                _this.dialog.open(DialogDataReimpresionDialog, {
                    data: {
                        animal: 'panda',
                        carga: _this.valor,
                        cuentaGastos: _this.ReporteGastos,
                        desc: _this.cuentas.descEstatus,
                        generales: _this.datosGenerales
                    },
                    disableClose: true
                });
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataReimpresion.prototype, "valor", void 0);
    DialogDataReimpresion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-reimpresion',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-example.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataReimpresion);
    return DialogDataReimpresion;
}());

var DialogDataReimpresionDialog = /** @class */ (function () {
    //  this.datosGeneralesServicios.getDatosGenerales();
    function DialogDataReimpresionDialog(data, datosCuentasServicios, _productoService) {
        //this.datosGenerales=this.datosGeneralesServicios.getDatosGenerales();
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.pantalla = false;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.boton = true;
    }
    DialogDataReimpresionDialog.prototype.imprimirEgreso = function (ticket) {
        var _this = this;
        // alert('El valor del '+ticket.FolioAdn);
        this.imprimirCorrectamente = false;
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        this._productoService.setArchivoImprimir(this.data.generales, this.ticket).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                  this.img.nativeElement.src = this.src;*/
                                /*Consumir el metodo para imprimir el documento*/
                                /*Fin del metodo para imprimir ticket*/
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                console.log('Entro');
                                // console.log(this.ReporteGastos);
                                console.log('Error al guaradar solicitud de finiquito');
                                _this.titulo = "Error";
                                _this.pantalla = true;
                                //  this.MessageError=true;
                                _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                console.log(_this.mensaje);
                            }
                        }, function (error) {
                            console.log('Error al guaradar solicitud de finiquito');
                            _this.titulo = "Error";
                            _this.pantalla = true;
                            // this.MessageError=true;
                            _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                            _this.boton = true;
                            console.log(_this.mensaje);
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Error al guaradar solicitud de finiquito');
                        _this.titulo = "Error";
                        _this.pantalla = true;
                        // this.MessageError=true;
                        _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        console.log(_this.mensaje);
                    }
                }, function (error) {
                    console.log('Error al guaradar solicitud de finiquito');
                    _this.titulo = "Error";
                    _this.pantalla = true;
                    // this.MessageError=true;
                    _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                    _this.boton = true;
                    console.log(_this.mensaje);
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Error al guaradar solicitud de finiquito');
                _this.titulo = "Error";
                _this.pantalla = true;
                // this.MessageError=true;
                _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
                _this.boton = true;
                console.log(_this.mensaje);
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            console.log('Error al guaradar solicitud de finiquito');
            _this.titulo = "Error";
            _this.pantalla = true;
            //this.MessageError=true;
            _this.mensaje = "Error al hacer la reimpresión, Favor de intentarlo nuevamente";
            _this.boton = true;
            console.log(_this.mensaje);
        });
        /*Fin del metodo de reimpresion*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('imgRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DialogDataReimpresionDialog.prototype, "img", void 0);
    DialogDataReimpresionDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-reimpresion-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-reimpresion-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */]])
    ], DialogDataReimpresionDialog);
    return DialogDataReimpresionDialog;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/dialog-solicitud-fletes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataSolcitudFletes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataSolcitudFletesDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_detFletes__ = __webpack_require__("../../../../../src/app/models/detFletes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_fletero__ = __webpack_require__("../../../../../src/app/models/fletero.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









/**
 * @title Injecting data when opening a dialog
 */
var DialogDataSolcitudFletes = /** @class */ (function () {
    function DialogDataSolcitudFletes(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        // console.log('Entro en el constructor DialogDataSolcitudFletes '+valor);
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
    }
    DialogDataSolcitudFletes.prototype.retorno = function () {
    };
    DialogDataSolcitudFletes.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_4__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    DialogDataSolcitudFletes.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataSolcitudFletes.prototype.openDialogPrueba = function () {
        var _this = this;
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('paso' + this.datosGenerales);
        /*Conulta del servicio*/
        this._productoService.getConsultaFletes().subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                console.log('cuentaGastosXML');
                _this.detFletes = result.consultaFletesResult.detalleFletes;
                console.log(_this.detFletes);
                console.log(_this.valor);
                _this.dialog.open(DialogDataSolcitudFletesDialog, {
                    width: '700px',
                    data: {
                        animal: 'panda',
                        carga: _this.valor,
                        requiere: _this.requiereXML,
                        detFletes: _this.detFletes,
                        datosGenerales: _this.datosGenerales
                    },
                    disableClose: true
                });
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
        /*  this.dialog.open(DialogDataSolcitudDialog, {
                  width: '600px',
                  data: {
                    animal: 'panda',
                    carga: this.valor
                    //cuentaGastos : this.ReporteGastos
                   // desc: this.cuentas.descEstatus
                  }
                });*/
    };
    DialogDataSolcitudFletes.prototype.openDialog = function () {
        /*Metodo para la carga de la Informaciòn*/
        var _this = this;
        //    this.openDialogCargar();
        //   this.datosCuentasServicios.setCuenta(this.valor.NoCuenta);
        //   this.cuentas = this.datosCuentasServicios.getDatosCuentas();
        //this.cuentas.cuenta=this.data.carga.NoCuenta
        console.log('getReporteGastos');
        // console.log(this.cuentas);
        this.dialog.open(DialogDataSolcitudFletesDialog, {
            width: '400px',
            data: {
                animal: 'panda',
                carga: this.valor,
                cuentaGastos: this.ReporteGastos,
                desc: this.cuentas.descEstatus
            },
            disableClose: true
        });
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this._productoService.getDetalleCuentasReimpresion(this.cuentas, this.datosGenerales.FuncionSAP).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log(_this.ReporteGastos);
                /* this.dialog.open(DialogDataSolcitudDialog, {
                   data: {
                     animal: 'panda',
                     carga: this.valor,
                     cuentaGastos : this.ReporteGastos,
                     desc: this.cuentas.descEstatus
                   }
                 });*/
                /*Conulta del servicio*/
                _this._productoService.getCuentasConXML(_this.datosGenerales, _this.valor.cuenta).subscribe(function (result) {
                    console.log('RESULTADO');
                    console.log(result);
                    if (result.code != 200) {
                        //  this.closeDialogCargar();
                        console.log(result);
                        console.log('Paso el valor');
                        //this.cuentaGastos = result.data.detCuentas;
                        _this.requiereXML = result.detReporteGastos;
                        console.log(_this.requiereXML);
                        _this.dialog.open(DialogDataSolcitudFletesDialog, {
                            data: {
                                animal: 'panda',
                                carga: _this.valor,
                                cuentaGastos: _this.ReporteGastos,
                                desc: _this.cuentas.descEstatus,
                                requiere: _this.requiereXML,
                                descp: _this.cuentaGastosXML
                            },
                            disableClose: true
                        });
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        //console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                });
                /*Fin de servicio*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataSolcitudFletes.prototype, "valor", void 0);
    DialogDataSolcitudFletes = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-fletes',
            template: __webpack_require__("../../../../../src/app/views/dialog-solicitud-fletes.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataSolcitudFletes);
    return DialogDataSolcitudFletes;
}());

var DialogDataSolcitudFletesDialog = /** @class */ (function () {
    /* cuenta:string;
     importe:number;
     factura:string;
     justificacion:string;*/
    function DialogDataSolcitudFletesDialog(data, datosCuentasServicios, _productoService2) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.existeFletero = 1;
        this.validImporte = true;
        /*this.cuenta=data.cuenta+data.descripcion;
        this.importe=0.0;
        this.factura='';
        this.justificacion='';*/
        this.fletero = new __WEBPACK_IMPORTED_MODULE_8__models_fletero__["a" /* fletero */](0, '', 0.00, ' ', '', '', '');
        this.nuevoFletero = new __WEBPACK_IMPORTED_MODULE_7__models_detFletes__["a" /* detFletes */]('', '', '', '', '', '', '', '', '', '');
        this.fletero.descCuenta = data.carga.Cuenta + ' ' + data.carga.Descripcion;
        this.fletero.noCuenta = data.carga.Cuenta;
        this.fletero.importe = 0.00;
        this.titulo = "Egresar";
        this.requiereXML = data.requiere;
        this.detFletes = data.detFletes;
        //  console.log(this.requiereXML);
        console.log(this.detFletes);
        //  this.descrip= data.descp.fcParametro;
        this.habilitarComponenetes = false;
        this.requiredValidacion = true;
        this.requiredValidacionJust = true;
        this.folioRef = true;
        this.Busca = false;
        this.agregar = false;
        this.crear = false;
        this.pantalla = false;
        this.titulo = 'Solicitud de Gastos';
        this.boton = true;
        this.habilitarAgregar = false;
        /*Se realizar validacion para las cuentas 620159 620156 Para fletes entre tiendas*/
        this.folioRef = data.carga.Cuenta == 620159 || data.carga.Cuenta == 620156 ? false : true;
        this.validImporte = data.carga.Cuenta == 620159 || data.carga.Cuenta == 620156 ? false : true;
    }
    DialogDataSolcitudFletesDialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
    };
    DialogDataSolcitudFletesDialog.prototype.LlenarFletero = function () {
        console.log('entro LlenarFletero');
        this.crear = true;
        this.existeFletero = 1;
    };
    DialogDataSolcitudFletesDialog.prototype.ObtenerFletero = function () {
        console.log('entro LlenarFletero');
        //this.nuevoFletero.pcreferencia=  this.validacionFlete.referencia;
        this.fletero.nombreFletero = this.nuevoFletero.fcNombre;
        this.fletero.comprobanteFiscal = this.nuevoFletero.fcRFC;
        this.Busca = false;
    };
    DialogDataSolcitudFletesDialog.prototype.ObtenerFleteroBusqueda = function (detalle) {
        console.log('entro LlenarFletero');
        this.nuevoFletero = detalle;
        // this.nuevoFletero.pcreferencia=  this.validacionFlete.referencia;     
        this.fletero.nombreFletero = this.nuevoFletero.fcNombre;
        this.fletero.comprobanteFiscal = this.nuevoFletero.fcRFC;
        this.Busca = false;
        this.existeFletero = 0;
    };
    DialogDataSolcitudFletesDialog.prototype.onSubmit = function () {
    };
    DialogDataSolcitudFletesDialog.prototype.onSubmit2 = function () {
    };
    DialogDataSolcitudFletesDialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.fletero.importe > 0 && this.fletero.nombreFletero.length > 0 && this.fletero.comprobanteFiscal.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    DialogDataSolcitudFletesDialog.prototype.validaImporte = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.fletero.importe >= 0 ? true : false;
        }
        else {
            salida = this.fletero.importe >= 0 && valor ? true : false;
        }
        console.log('validar importe' + salida);
        return salida;
    };
    DialogDataSolcitudFletesDialog.prototype.cargarArchivo = function (filesToUpload) {
        var reader = new FileReader();
        var self = this;
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log('Entro con el componente ' + theFile.name);
                console.log(e.target.result);
                self.xml = e.target.result;
                self.consultaValidacionXML(self.xml);
            };
        })(filesToUpload[0]);
        // Read in the image file as a data URL.
        //reader.readAsDataURL(f);
        //reader.readAsDataURL(filesToUpload[0]);
        reader.readAsText(filesToUpload[0]);
    };
    DialogDataSolcitudFletesDialog.prototype.llenarDatosfactura = function () {
        /*
                       this.egresos.importe=Number(this.comprobantes.total);
                       this.egresos.factura=this.comprobantes.folio;
        
                       console.log('llenarDatosfactura');*/
        console.log(this.xmltexto);
    };
    DialogDataSolcitudFletesDialog.prototype.convertirXMLtoJson = function (xml) {
        console.log('XML');
        console.log(xml);
        var self = this;
        var ress;
        Object(__WEBPACK_IMPORTED_MODULE_5_xml2js__["parseString"])(xml, function (err, result) {
            console.log('objeto en json');
            console.log(result);
            ress = result;
        });
        console.log('Despues arnol');
        self.xmltexto = ress;
        console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);
        self.comprobantes = self.xmltexto["cfdi:Comprobante"]["$"];
        console.log(self.comprobantes);
        console.log(self.comprobantes.folio);
        console.log('Egresos');
        console.log(self.egresos);
        self.egresos.importe = Number(self.comprobantes.total);
        self.egresos.factura = self.comprobantes.folio;
        //                             self.validarComponentes();
        /*  this.Addenda=this.xmltexto["cfdi:Comprobante"]["cfdi:Addenda"][0];
          console.log( this.Addenda);

          this.Complemento=this.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0];
          console.log( this.Complemento);

          this.Conceptos=this.xmltexto["cfdi:Comprobante"]["cfdi:Conceptos"][0];
          console.log( this.Conceptos);*/
        self.Complemento = self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
        console.log('Complemento');
        console.log(self.Complemento);
        console.log('Valor UUID=' + self.Complemento.UUID);
        /*this.egreso.importe=this.Complemento.total;
        this.egreso.factura=this.Complemento.folio;*/
        self.Emisor = self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
        console.log(self.Emisor);
        self.Impuestos = self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
        console.log(self.Impuestos);
        self.Receptor = self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
        console.log(self.Receptor);
    };
    DialogDataSolcitudFletesDialog.prototype.consultaValidacionXML = function (xml) {
        var _this = this;
        console.log('XML');
        xml = xml.trim();
        xml = xml.split("\n").join("");
        xml = xml.split("\r").join("");
        xml = xml.split("\t").join("");
        xml = xml.split("\n").join("");
        // xml= xml.replace(/['"]+/g, "'");
        console.log(xml.trim());
        this._productoService2.getValidacionXML(xml.trim(), '').subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.detValidacionXML;
                console.log(_this.validaFacturacion);
                if (_this.validaFacturacion != null) {
                    /*   if (this.validaFacturacion.codigo ==0){
                               this.convertirXMLtoJson(this.xml);

                       }else{

                           console.log('Xml no es valido \n Favor de cargar un XML valido');
                           this.titulo="Alerta                                                 ";
                           this.mensaje= "Favor de cargar un xml valido, \n Intenta nuevamente ";
                           this.pantalla=true;
                           this.boton=false;


                       }*/
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                    _this.pantalla = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    /*parseString(xml, function (err, result) {
      console.dir(result);
    });*/
    DialogDataSolcitudFletesDialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        console.log('Entro en el metodo insertaSolicitudGastos');
        //  this.nuevoFletero
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "0";
        this._productoService2.getInsertaSolicitudGastosFletes(this.data.datosGenerales, this.fletero, this.nuevoFletero, this.data.carga, this.existeFletero).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.AfectaAltaSolicitudResult.EsError == false) {
                    console.log('Se guardo con exito');
                    _this.titulo = "Exito";
                    _this.mensaje = "Se regisro correctamente la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                    _this.pantalla = true;
                    _this.boton = true;
                }
                else {
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + "\n" + _this.data.carga.Descripcion + "\n" + result.AfectaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    //this.PantallaImprimir=false;
                    _this.boton = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                //console.log(this.ReporteGastos);
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataSolcitudFletesDialog.prototype.buscarDatosFiscales = function () {
        this.Busca = true;
        this.nuevoFletero = new __WEBPACK_IMPORTED_MODULE_7__models_detFletes__["a" /* detFletes */]('', '', '', '', '', '', '', '', '', '');
    };
    DialogDataSolcitudFletesDialog.prototype.regresar = function () {
        this.crear = false;
    };
    DialogDataSolcitudFletesDialog.prototype.validarFolioReferencia = function () {
        var _this = this;
        console.log('Entro en el metodo validarFolioReferencia');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        this._productoService2.getVlidacionFletes(this.folioReferencia).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                if (result.ConsultaValidacionFletesResult.esError == false) {
                    _this.validacionFlete = result.ConsultaValidacionFletesResult.detValFactura;
                    console.log('Detalle de fletes detValFactura');
                    console.log(_this.validacionFlete);
                    if (_this.validacionFlete.status == 0) {
                        _this.fletero.importe = _this.validacionFlete.monto;
                        _this.fletero.referencia = _this.validacionFlete.referencia;
                        //this.fletero.descCuenta=this.data.carga.cuenta+' '+this.data.carga.descripcion;
                        _this.folioRef = false;
                        console.log(_this.fletero);
                    }
                    /*
                           public referencia :string,
                           public status : number,
                           public monto : number
                    */
                }
                else {
                    _this.titulo = "Alerta";
                    console.log('El valor de result' + result);
                    _this.mensaje = result.ConsultaValidacionFletesResult.mensaje;
                    _this.pantalla = true;
                }
                //alert('Terrmino');
                //this.validaFacturacion = result.detValidacionXML;
                //console.log(this.validaFacturacion);
                /*  console.log('Se guardo con exito');
                           this.titulo="Exito";
                           this.mensaje= "Se regisro correctamente la solicitud de gastos para la cuenta "+this.data.carga.descripcion;
                           this.pantalla=true;*/
            }
            else {
                //   this.closeDialogCargar();
                _this.titulo = "Error ";
                _this.mensaje = 'ERROR AL CONSULTAR REFERENCIA DE FLETES';
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataSolcitudFletesDialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataSolcitudFletesDialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        this.Busca = false;
        // this.boton=true;
        this.titulo = "Solicitud de Gastos";
        this.fletero.nombreFletero = this.nuevoFletero.fcNombre;
        this.fletero.comprobanteFiscal = this.nuevoFletero.fcRFC;
        console.log(this.nuevoFletero);
    };
    DialogDataSolcitudFletesDialog.prototype.validarSolicitudGastos = function () {
        var _this = this;
        console.log('Entro en el metodo validarSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getValidacionDatosGastosSolicitudFletero(this.data.datosGenerales, this.fletero, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.ValidaAltaSolicitudResult.EsError == false) {
                    console.log('Se valido correctamente  con exito datos de solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    console.log('valor de stcontinuar :' + result.ValidaAltaSolicitudResult.stcontinuar);
                    if (result.ValidaAltaSolicitudResult.stcontinuar == 0) {
                        _this.boton = true;
                    }
                    else {
                        _this.boton = false;
                    }
                }
                else {
                    console.log('Se presento un error al validar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion + "\n" + result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    //this.PantallaImprimir=false;
                    _this.boton = false;
                }
            }
            else {
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                //this.PantallaImprimir=false;
                _this.boton = false;
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataSolcitudFletesDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-fletes-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-solicitud-fletes-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */]])
    ], DialogDataSolcitudFletesDialog);
    return DialogDataSolcitudFletesDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-solicitud.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataSolcitud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataSolcitudDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_egreso__ = __webpack_require__("../../../../../src/app/models/egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









/**
 * @title Injecting data when opening a dialog
 */
var DialogDataSolcitud = /** @class */ (function () {
    function DialogDataSolcitud(dialog, datosCuentasServicios, _productoService, dialogCarga, datosGeneralesServicios) {
        this.dialog = dialog;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService = _productoService;
        this.dialogCarga = dialogCarga;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.error = false;
        this.titulos = "Alerta";
        console.log('variable valor en el constructor' + this.valor);
    }
    DialogDataSolcitud.prototype.openDialogCargar = function () {
        var _this = this;
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_4__components_carga__["a" /* DialogCargar */], {
            width: '160px'
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.dialog.open(DialogDataSolcitudDialog, {
                width: '700px',
                data: {
                    animal: 'panda',
                    carga: _this.valor,
                    requiere: _this.requiereXML,
                    descp: _this.requiereXML,
                    datosGenerales: _this.datosGenerales
                },
                disableClose: true
            });
            // this.animal = result;
        });
    };
    DialogDataSolcitud.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    DialogDataSolcitud.prototype.openDialogPrueba = function () {
        var _this = this;
        this.openDialogCargar();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('paso' + this.datosGenerales);
        console.log('variable valor ' + this.valor.Cuenta);
        /*Conulta del servicio*/
        this._productoService.getCuentasConXML(this.datosGenerales, this.valor.Cuenta).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                _this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.requiereXML = result.DetalleTiendaCuentaResult;
                console.log(_this.requiereXML);
                console.log('cuentaGastosXML');
                _this.cuentaGastosXML = result.detCuentaGastos;
                console.log(_this.cuentaGastosXML);
                if (result.DetalleTiendaCuentaResult.EsError === false) {
                    _this.closeDialogCargar();
                }
                else {
                    _this.error = true;
                    _this.comentario = result.RequiereXMLResult.Mensaje;
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.openDialogAlerta();
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DialogDataSolcitud.prototype.openDialogAlerta = function () {
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
    };
    DialogDataSolcitud.prototype.openDialog = function () {
        var _this = this;
        console.log('getReporteGastos');
        // console.log(this.cuentas);
        this.dialog.open(DialogDataSolcitudDialog, {
            width: '400px',
            data: {
                animal: 'panda',
                carga: this.valor,
                cuentaGastos: this.ReporteGastos,
                desc: this.cuentas.descEstatus
            },
            disableClose: true
        });
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this._productoService.getDetalleCuentasReimpresion(this.cuentas, this.datosGenerales.FuncionSAP).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                //  this.closeDialogCargar();
                console.log(result);
                console.log('Paso el valor');
                //this.cuentaGastos = result.data.detCuentas;
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log(_this.ReporteGastos);
                /*Conulta del servicio*/
                _this._productoService.getCuentasConXML(_this.datosGenerales, _this.valor.cuenta).subscribe(function (result) {
                    console.log('RESULTADO');
                    console.log(result);
                    if (result.code != 200) {
                        //  this.closeDialogCargar();
                        console.log(result);
                        console.log('Paso el valor');
                        //this.cuentaGastos = result.data.detCuentas;
                        _this.requiereXML = result.detReporteGastos;
                        console.log(_this.requiereXML);
                        _this.dialog.open(DialogDataSolcitudDialog, {
                            data: {
                                animal: 'panda',
                                carga: _this.valor,
                                cuentaGastos: _this.ReporteGastos,
                                desc: _this.cuentas.descEstatus,
                                requiere: _this.requiereXML,
                                descp: _this.cuentaGastosXML
                            },
                            disableClose: true
                        });
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        //console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                });
                /*Fin de servicio*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                _this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log(_this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogDataSolcitud.prototype, "valor", void 0);
    DialogDataSolcitud = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-solicitudes',
            template: __webpack_require__("../../../../../src/app/views/dialog-solicitud.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataSolcitud);
    return DialogDataSolcitud;
}());

var DialogDataSolcitudDialog = /** @class */ (function () {
    function DialogDataSolcitudDialog(data, datosCuentasServicios, _productoService2, datosGeneralesServicios) {
        this.data = data;
        this.datosCuentasServicios = datosCuentasServicios;
        this._productoService2 = _productoService2;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.imprimirCorrectamente = true;
        this.MessageError = false;
        this.PantallaImprimir = false;
        this.retornar = false;
        this.banderafactura = true;
        this.siniestro = false;
        this.valorFactura = "";
        this.detalleFactura = false;
        this.cabecero = true;
        this.egresos = new __WEBPACK_IMPORTED_MODULE_5__models_egreso__["a" /* egreso */](0, '', 0.00, ' ', '', '', 0);
        this.egresos.descCuenta = data.requiere.TiendaCuentas.NoCuenta + ' ' + data.requiere.TiendaCuentas.Descripcion;
        this.egresos.noCuenta = data.requiere.TiendaCuentas.NoCuenta;
        this.egresos.importe = 0.00;
        this.titulo = "Egresar";
        this.requiereXML = data.requiere;
        console.log(this.requiereXML);
        console.log(this.egresos);
        // console.log(this.requiereXML.TiendaCuentas);
        this.descrip = data.requiere.TiendaCuentas.Parametro;
        this.habilitarComponenetes = false;
        this.requiredValidacion = true;
        this.requiredValidacionJust = true;
        this.refereciaTienda = data.requiere.TiendaCuentas.Parametro;
        console.log('Mostrar el valor de la factura' + data.requiere.TiendaCuentas.RequiereXML);
        console.log('Mostrar el valro data.requiere.TiendaCuentas.Parametro ' + data.requiere.TiendaCuentas.Parametro);
        console.log('Mostrar el valro data.requiere.TiendaCuentas.Parametro ' + data.requiere.TiendaCuentas.Parametro);
        this.mostrarFactura = data.requiere.TiendaCuentas.RequiereXML === 2 || data.requiere.TiendaCuentas.RequiereXML === 1 ? true : false;
        if (this.data.datosGenerales.fiActivaXML === 1) {
            this.habilitarComponenetes = data.requiere.TiendaCuentas.RequiereXML === 1 ? false : data.requiere.TiendaCuentas.RequiereXML === 2 ? true : false;
            console.log('Primer valor dehabilitarComponenetes' + this.habilitarComponenetes);
            this.requiredValidacion = data.requiere.TiendaCuentas.RequiereXML === 1 ? true : data.requiere.TiendaCuentas.RequiereXML === 2 ? false : false;
            this.valorfacturacion = data.requiere.TiendaCuentas.Parametro.trim() === 'Factura' ? 1 : 0;
            if (data.requiere.TiendaCuentas.Parametro.trim() === 'No Empleado' || data.requiere.TiendaCuentas.Parametro.trim() === 'No Siniestro') {
                console.log('No Empleado' + this.habilitarComponenetes);
                this.habilitarComponenetes = false;
                this.requiredValidacion = true;
            }
            if (data.requiere.TiendaCuentas.Parametro.trim() != 'Factura') {
                console.log('Diferente de Factura' + this.habilitarComponenetes);
                this.mostrarFactura = false;
            }
        }
        else {
            this.habilitarComponenetes = data.requiere.requiereXML === 1 || data.requiere.requiereXML === 2 ? false : false;
            this.requiredValidacion = data.requiere.TiendaCuentas.RequiereXML === 1 || data.requiere.TiendaCuentas.RequiereXML === 2 ? true : false;
            this.valorfacturacion = data.requiere.TiendaCuentas.Parametro.trim() === 'Factura' ? 0 : 0;
            if (data.requiere.TiendaCuentas.Parametro.trim() != 'Factura') {
                this.mostrarFactura = false;
            }
        }
        this.pantalla = false;
        this.titulo = 'Solicitud de Gastos';
        this.boton = true;
        this.habilitarAgregar = false;
        console.log('El valor del parametro si requiere factura' + this.valorfacturacion);
        /*Mensaje para a desplegar para la cuenta de Siniestos*/
        if (data.carga.Cuenta === 620070) {
            this.siniestro = true;
            var CECO = this.data.datosGenerales.Ceco.substring(2, 6);
            this.titulo = "Alerta";
            this.mensaje = 'Esta a punto de realizar una solicitud de Gastos de Siniestros por regla de negocio este gasto se cargará al prefijo 39' + CECO;
            this.pantalla = true;
            this.PantallaImprimir = false;
            this.boton = false;
            this.retornar = true;
        }
        //604910 || egresos.noCuenta==60491
        if (data.carga.Cuenta === 1025 || data.carga.Cuenta === 604910 || data.carga.Cuenta === 106049125) {
            this.egresos.concepto = 'EXTRACCION DE BOLETAS';
        }
    }
    DialogDataSolcitudDialog.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('Cargada de los archivos fileChangeEvent');
        console.log(this.filesToUpload);
        console.log('egresos antres');
        console.log(this.egresos);
        this.cargarArchivo(this.filesToUpload);
        console.log('Los comprobantes');
        console.log(this.comprobantes);
        /*Cambio de la bandera de factura*/
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
            else if (this.data.requiere.TiendaCuentas.RequiereXML === 2 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = true;
            }
        }
        else {
            this.banderafactura = false;
        }
        this.banderafactura = false;
        console.log('valor de la banderafactura' + this.banderafactura);
        try {
            //console.log(fileInput.target.files.mozFullPath);
            console.log('Ruta del archivo');
            console.log(fileInput.target.value);
        }
        catch (err) {
            console.log('Fallo la carga ');
        }
    };
    DialogDataSolcitudDialog.prototype.onSubmit = function () {
    };
    DialogDataSolcitudDialog.prototype.validarComponentes = function (form) {
        console.log('Entro a validar los campor ' + form);
        if (this.egresos.importe > 0 && this.egresos.factura.length > 0 && form) {
            this.habilitarAgregar = true;
        }
        else {
            this.habilitarAgregar = false;
        }
        return this.habilitarAgregar;
    };
    DialogDataSolcitudDialog.prototype.validaImporte = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.importe >= 0 ? true : false;
        }
        else {
            salida = this.egresos.importe >= 0 && valor ? true : false;
        }
        console.log('validar importe' + salida);
        return salida;
    };
    DialogDataSolcitudDialog.prototype.validaFactura = function (valor) {
        var salida = true;
        console.log('validar habilitarComponenetes' + this.habilitarComponenetes + ' valor=' + valor);
        if (this.habilitarComponenetes) {
            salida = this.egresos.factura.length > 0 ? true : false;
        }
        else {
            salida = this.egresos.factura.length > 0 && valor ? true : false;
        }
        console.log('validar factura' + salida);
        return salida;
    };
    DialogDataSolcitudDialog.prototype.cargarArchivo = function (filesToUpload) {
        var reader = new FileReader();
        var self = this;
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log('Entro con el componente ' + theFile.name);
                self.xml = e.target.result;
                console.log('Carga del xml cargarArchivo');
                console.log(self.xml);
                //        self.consultaValidacionXML(self.xml);
                self.consultaValidacionXMLPrueba(self.xml);
            };
        })(filesToUpload[0]);
        //reader.readAsText(filesToUpload[0]);
        reader.readAsDataURL(filesToUpload[0]);
    };
    DialogDataSolcitudDialog.prototype.llenarDatosfactura = function () {
        console.log(this.xmltexto);
    };
    DialogDataSolcitudDialog.prototype.convertirXMLtoJson = function (xml) {
        console.log('XML');
        console.log(xml);
        var self = this;
        var ress;
        Object(__WEBPACK_IMPORTED_MODULE_6_xml2js__["parseString"])(xml, function (err, result) {
            console.log('objeto en json');
            console.log(result);
            ress = result;
        });
        console.log('Despues arnol');
        self.xmltexto = ress;
        console.log(self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"]);
        self.comprobantes = self.xmltexto["cfdi:Comprobante"]["$"];
        console.log(self.comprobantes);
        console.log(self.comprobantes.folio);
        console.log('Egresos');
        console.log(self.egresos);
        self.egresos.importe = Number(self.comprobantes.total);
        self.egresos.factura = self.comprobantes.folio;
        self.Complemento = self.xmltexto["cfdi:Comprobante"]["cfdi:Complemento"][0]["tfd:TimbreFiscalDigital"][0]["$"];
        console.log('Complemento');
        console.log(self.Complemento);
        console.log('Valor UUID=' + self.Complemento.UUID);
        /*this.egreso.importe=this.Complemento.total;
        this.egreso.factura=this.Complemento.folio;*/
        self.Emisor = self.xmltexto["cfdi:Comprobante"]["cfdi:Emisor"][0]["$"];
        console.log(self.Emisor);
        self.Impuestos = self.xmltexto["cfdi:Comprobante"]["cfdi:Impuestos"][0]["$"];
        console.log(self.Impuestos);
        self.Receptor = self.xmltexto["cfdi:Comprobante"]["cfdi:Receptor"][0]["$"];
        console.log(self.Receptor);
    };
    /*Metodos para cambiar estatus de facturacion*/
    DialogDataSolcitudDialog.prototype.cambiarEstatusFactura = function () {
        this.banderafactura = false;
        this.detalleFactura = false;
        //  alert(this.banderafactura);
        console.log('Valor de la banderafactura: ' + this.banderafactura);
        if (this.data.datosGenerales.fiActivaXML === 1) {
            if (this.data.requiere.TiendaCuentas.RequiereXML === 1 && this.data.requiere.TiendaCuentas.Parametro.trim() === 'Factura') {
                this.banderafactura = false;
            }
            /*else if (data.requiere.TiendaCuentas.RequiereXML===2 && data.requiere.TiendaCuentas.Parametro.trim()==='Factura')
            {
                   this.banderafactura=false;

            }*/
        }
        else {
            this.banderafactura = false;
        }
    };
    DialogDataSolcitudDialog.prototype.consultaValidacionXML = function (xml) {
        var _this = this;
        console.log('XML');
        xml = xml.trim();
        xml = xml.split("\n").join("");
        xml = xml.split("\r").join("");
        //xml=xml.split("+").join("~"); 
        xml = xml.split("\n").join("");
        console.log(xml.trim());
        this._productoService2.getValidacionXML(xml.trim(), this.data.carga.Cuenta).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.detValidacionXML;
                console.log(_this.validaFacturacion);
                if (result.ValidafacturaResult.EsError == false) {
                    /*  if (this.validaFacturacion.codigo ==0){
                              this.convertirXMLtoJson(this.xml);

                      }else{

                          console.log('Xml no es valido \n Favor de cargar un XML valido');
                          this.titulo="Alerta                                                 ";
                          this.mensaje= "Favor de cargar un xml valido, \n Intenta nuevamente ";
                          this.pantalla=true;
                          this.boton=false;


                      }*/
                }
                else {
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente" + result.ValidafacturaResult.Mensaje;
                    _this.pantalla = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataSolcitudDialog.prototype.consultaValidacionXMLPrueba = function (xml) {
        var _this = this;
        this.retornar = false;
        this.boton = true;
        this._productoService2.getValidacionXMLPrueba(xml.trim(), this.data.carga.Cuenta, this.data.datosGenerales.Canal).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.validaFacturacion = result.ValidaArchivoXMLResult.DatosCFDI;
                console.log(_this.validaFacturacion);
                if (result.ValidaArchivoXMLResult.EsError == false) {
                    _this.titulo = "Solicitud de Gastos";
                    _this.pantalla = false;
                    _this.egresos.importe = Number(_this.validaFacturacion.Totalxml);
                    _this.egresos.factura = _this.validaFacturacion.Folioxml;
                    _this.egresos.importe = Number(_this.validaFacturacion.Ivaxml);
                    console.log('El valor de la this.validaFacturacion');
                    console.log(_this.validaFacturacion);
                    _this.valorFactura = "No. Factura " + _this.validaFacturacion.Folioxml + '  ' +
                        /*"<br/>" +"Fecha: " +this.validaFacturacion.Fechaxml+
                        "<br/>" +"Serie: " +this.validaFacturacion.Serie+
                        "<br/>" +"UUID: " +this.validaFacturacion.UUIDValido+*/
                        "Total: " + _this.validaFacturacion.Totalxml + '  ' +
                        "IVA: " + _this.validaFacturacion.Ivaxml;
                    _this.detalleFactura = true;
                }
                else {
                    _this.detalleFactura = false;
                    console.log('error al consultar la servicio de validacion de factura');
                    _this.titulo = "Alerta";
                    _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente  " + result.ValidaArchivoXMLResult.Mensaje;
                    _this.pantalla = true;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('error al consultar la servicio de validacion de factura');
                _this.titulo = "Alerta";
                _this.mensaje = "Error al validar xml de factura, \nfavor de intentarlo nuevamente";
                _this.pantalla = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataSolcitudDialog.prototype.insertaSolicitudGastos = function () {
        var _this = this;
        this.PantallaImprimir = true;
        this.imprimirCorrectamente = false;
        this.cabecero = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        console.log('Entro en el metodo insertaSolicitudGastos');
        /*Cambiar el status de banderafactura*/
        if (this.banderafactura == true) {
            this.validaFacturacion.Datosparam = this.banderafactura == true ? 1 : 0;
        }
        /*if (this.data.requiere.TiendaCuentas.Parametro.trim()==='No Empleado'){
              this.data.datosGenerales.NoEmpleado=this.egresos.factura;
        }*/
        //this.egresos.noCuenta=this.data.carga.Cuenta===1025?604910:this.data.carga.Cuenta;
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getInsertaSolicitudGastos(this.data.datosGenerales, this.egresos, this.validaFacturacion, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.AfectaAltaSolicitudResult.EsError == false) {
                    console.log('Se guardo con exito');
                    _this.titulo = "Exito";
                    _this.mensaje = "Se regisro correctamente la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                    _this.pantalla = true;
                    _this.boton = true;
                    _this.cabecero = true;
                    _this.PantallaImprimir = false;
                    _this.imprimirCorrectamente = true;
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    if (_this.data.carga.Cuenta === 604910 || _this.data.carga.Cuenta === 60491 || _this.data.carga.Cuenta === 1025 || _this.data.carga.Cuenta === 620106) {
                        /*var impresion:reporteGastos;
                        impresion = new reporteGastos(13796, 7439758, 620070, 1,0,0, '01/23/2018', 'SINIESTROS DE CAJA EN SUCURSAL', ' 255', '', '', 270932, 34476476, '', '','');*/
                        console.log(result.AfectaAltaSolicitudResult.DetCuentasReimpresion);
                        _this.cabecero = false;
                        if (result.AfectaAltaSolicitudResult.DetCuentasReimpresion !== null) {
                            _this.imprimirEgreso(result.AfectaAltaSolicitudResult.DetCuentasReimpresion[0]);
                            _this.PantallaImprimir = true;
                        }
                    }
                }
                else {
                    $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + "\n" + _this.data.carga.Descripcion + "\n" + result.AfectaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = true;
                    _this.cabecero = true;
                }
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al guardar la  solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = true;
                //console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    /*Metodo para validar solicitud de gastos*/
    DialogDataSolcitudDialog.prototype.validarSolicitudGastos = function () {
        var _this = this;
        this.retornar = false;
        console.log('Entro en el metodo validarSolicitudGastos');
        //this.data.datosGenerales,this.data.carga.cuenta,this.data.carga.descripcion,0,this.egresos.importe,this.egresos.justificion,0,'',this.Complemento.UUID
        var UUID = this.Complemento != null ? this.Complemento.UUID : "";
        console.log('data carga cuenta');
        console.log(this.data.carga);
        this._productoService2.getValidacionDatosGastosSolicitud(this.data.datosGenerales, this.egresos, this.data.carga).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                if (result.ValidaAltaSolicitudResult.EsError == false) {
                    console.log('Se valido correctamente  con exito datos de solicitud');
                    _this.titulo = "Alerta";
                    _this.mensaje = result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    console.log('valor de stcontinuar :' + result.ValidaAltaSolicitudResult.stcontinuar);
                    if (result.ValidaAltaSolicitudResult.stcontinuar == 0) {
                        _this.boton = true;
                    }
                    else {
                        _this.boton = false;
                    }
                }
                else {
                    console.log('Se presento un error al validar la solicitud');
                    _this.titulo = "Error";
                    _this.mensaje = _this.data.carga.Descripcion + "\n" + result.ValidaAltaSolicitudResult.Mensaje;
                    _this.pantalla = true;
                    _this.PantallaImprimir = false;
                    _this.boton = false;
                    _this.retornar = true;
                }
            }
            else {
                console.log('Entro');
                console.log('Se presento un error al guardar la solicitud');
                _this.titulo = "Error";
                _this.mensaje = "Se presento un error al validar la solicitud de gastos para la cuenta " + _this.data.carga.Descripcion;
                _this.pantalla = true;
                _this.PantallaImprimir = false;
                _this.boton = false;
                _this.retornar = true;
            }
        }, function (error) {
            console.log(error);
        });
        /*Fin de servicio*/
    };
    DialogDataSolcitudDialog.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    DialogDataSolcitudDialog.prototype.mostarCarga = function () {
        this.pantalla = false;
        // this.boton=true;
        this.titulo = "Solicitud de Gastos";
    };
    DialogDataSolcitudDialog.prototype.imprimirEgreso = function (ticket) {
        var _this = this;
        // alert('El valor del '+ticket.FolioAdn);
        this.imprimirCorrectamente = false;
        $('.mat-dialog-container').css({ 'width': '20%', 'height': '150px', 'margin': 'auto' });
        $('.mat-dialog-content').css({ 'overflow': 'hidden' });
        /* $(".mat-dialog-container").removeClass("mat-dialog-container");
         $(".mat-dialog-container").addClass("mat-dialog-container2");
         $(".mat-dialog-container").addClass("mat-dialog-container");*/
        if (ticket != null) {
            this.ticket = ticket;
        }
        /*Metodos para realizar la impresion*/
        console.log('Valor de ticket');
        console.log(ticket);
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('Valor de datos generales');
        console.log(this.data.generales);
        this._productoService2.setArchivoImprimirSolicitud1025(this.datosGenerales, this.ticket, 'No Empleado').subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                _this.impresion = result;
                console.log(_this.impresion);
                _this.noImpresion = Number(_this.impresion.Contenido);
                console.log('Paso el valor' + _this.noImpresion);
                /*Consumir el metodo para imprimir el documento*/
                _this._productoService2.getIFolioImpresion(_this.noImpresion).subscribe(function (result) {
                    console.log('RESULTADO de la impresion');
                    console.log(result);
                    if (result.code != 200) {
                        _this.impresion = result;
                        console.log(_this.impresion);
                        //this.noImpresion=Number(this.impresion.Contenido);
                        console.log('Valor de la impresion' + _this.impresion.Detalle);
                        /*Consumir el metodo para imagen  el documento*/
                        _this._productoService2.getImagen(_this.noImpresion).subscribe(function (result) {
                            console.log('RESULTADO de la impresion');
                            console.log(result);
                            if (result.code != 200) {
                                _this.impresion = result;
                                console.log(_this.impresion);
                                //this.noImpresion=Number(this.impresion.Contenido);
                                console.log('Valor de la impresion' + _this.impresion.Detalle);
                                _this.pantalla = true;
                                _this.imagen = JSON.parse(_this.impresion.Contenido);
                                _this.bse64 = _this.imagen[0].ImagenBase64;
                                console.log(_this.bse64);
                                _this.imprimirCorrectamente = true;
                                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                                /* $(".mat-dialog-container").removeClass("mat-dialog-container");
                                  $(".mat-dialog-container").addClass("mat-dialog-container");
                                  $(".mat-dialog-container").addClass("mat-dialog-container");*/
                                /* this.src = 'data:image/svg+xml;base64,'+this.bse64;
                                  this.img.nativeElement.src = this.src;*/
                                /*Consumir el metodo para imprimir el documento*/
                                /*Fin del metodo para imprimir ticket*/
                            }
                            else {
                                //   this.closeDialogCargar();
                                console.log('Entro');
                                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                                _this.titulo = "Error";
                                _this.MessageError = true;
                                _this.pantalla = true;
                                _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                                _this.boton = true;
                                // console.log(this.ReporteGastos);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.titulo = "Error";
                            _this.MessageError = true;
                            _this.pantalla = true;
                            _this.mensaje = "Error al guardar Solicitud de Gastos, Favor de intentarlo nuevamente";
                            _this.boton = true;
                        });
                        /*Fin del metodo para imagen ticket*/
                    }
                    else {
                        //   this.closeDialogCargar();
                        console.log('Entro');
                        //   this.ReporteGastos = result.detDetCuentasReimpresion;
                        console.log('Entro');
                        _this.titulo = "Error";
                        _this.MessageError = true;
                        // this.MessageError=true;
                        _this.pantalla = true;
                        _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                        _this.boton = true;
                        // console.log(this.ReporteGastos);
                    }
                }, function (error) {
                    console.log(error);
                    _this.titulo = "Error";
                    _this.MessageError = true;
                    _this.MessageError = true;
                    _this.pantalla = true;
                    _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                    _this.boton = true;
                });
                /*Fin del metodo para imprimir ticket*/
            }
            else {
                //   this.closeDialogCargar();
                console.log('Entro');
                //   this.ReporteGastos = result.detDetCuentasReimpresion;
                console.log('Entro');
                _this.titulo = "Error";
                _this.MessageError = true;
                //  this.MessageError=true;
                _this.pantalla = true;
                _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
                _this.boton = true;
                // console.log(this.ReporteGastos);
            }
        }, function (error) {
            console.log(error);
            _this.titulo = "Error";
            _this.MessageError = true;
            // this.MessageError=true;
            _this.pantalla = true;
            _this.mensaje = "Error al guardar Solicitud de Finiquito, Favor de intentarlo nuevamente";
            _this.boton = true;
        });
    };
    DialogDataSolcitudDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-data-reimpresion-dialog',
            template: __webpack_require__("../../../../../src/app/views/dialog-data-solicitud-dialog.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__services_datosCuentaServicio__["a" /* datosCuentasServicio */], __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], DialogDataSolcitudDialog);
    return DialogDataSolcitudDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContentExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogContentExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {ReporteGastosComponent}  from  '../components/dialog-component';
/**
 * @title Dialog with header, scrollable content and actions
 */
var DialogContentExample = /** @class */ (function () {
    function DialogContentExample(dialog) {
        this.dialog = dialog;
    }
    DialogContentExample.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: '450px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DialogContentExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-content-example',
            template: __webpack_require__("../../../../../src/app/views/dialog.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */]])
    ], DialogContentExample);
    return DialogContentExample;
}());

var DialogContentExampleDialog = /** @class */ (function () {
    function DialogContentExampleDialog() {
    }
    DialogContentExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__("../../../../../src/app/views/DialogContentExample.html"),
        })
    ], DialogContentExampleDialog);
    return DialogContentExampleDialog;
}());

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/components/egresoADN.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EgresoADNComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialog_egresoADN__ = __webpack_require__("../../../../../src/app/components/dialog-egresoADN.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_CajaDetalleFolios__ = __webpack_require__("../../../../../src/app/models/CajaDetalleFolios.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EgresoADNComponent = /** @class */ (function () {
    function EgresoADNComponent(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.refempleado = 0;
        this.tipoOperacion = 2;
        this.cifracontrol = '';
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Egreso de Gastos Diversos';
        this.confirmado = null;
    }
    EgresoADNComponent.prototype.ngOnInit = function () {
        console.log('Muestra la pantalla de los folios ADN');
    };
    EgresoADNComponent.prototype.openDialog = function () {
        var _this = this;
        this.cajaDetalleFolios = new __WEBPACK_IMPORTED_MODULE_9__models_CajaDetalleFolios__["a" /* CajaDetalleFolios */]('', '', '', '', '', '', 0, '', '', 0, 0, 0, 0, 0, 0, '', 0, 0, '', '', 0, false);
        this._productoService.getConsultaValidacionEgreso(this.folioADN, this.refempleado, this.tipoOperacion, this.cifracontrol).subscribe(function (result) {
            console.log('RESULTADO');
            console.log(result);
            if (result.code != 200) {
                console.log(result);
                _this.cajaDetalleFolios = result.ValidaEgresoCajaResult.CajaDetalleFolios.length > 0 ? result.ValidaEgresoCajaResult.CajaDetalleFolios[0] : _this.cajaDetalleFolios;
                console.log('Valor de la respuesta');
                console.log(_this.cajaDetalleFolios);
                $('.mat-dialog-container').css({ 'width': '100%', 'height': '100%', 'max-width': '80vw' });
                if (result.ValidaEgresoCajaResult.EsError == false) {
                    console.log('Se valido con exito');
                    _this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_dialog_egresoADN__["a" /* DialogDataegresoADNDialog */], {
                        width: '500px',
                        data: {
                            animal: 'panda',
                            carga: _this.folioADN,
                            detEgresoADN: _this.cajaDetalleFolios,
                            desc: '',
                            generales: _this.datosGenerales,
                            act: _this.detActualizarFiniquito
                        }, disableClose: true
                    });
                }
                else {
                    console.log('Se presento un error al guardar la solicitud');
                    _this.titulo = "Alerta";
                    _this.error = true;
                    _this.comentario = result.ValidaEgresoCajaResult.Mensaje;
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.openDialogMensaje();
                }
            }
            else {
                _this.titulo = "Alerta";
                _this.error = true;
                _this.comentario = "Error al consultar informacion de folioADN";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                _this.openDialogMensaje();
            }
        }, function (error) {
            console.log(error);
        });
    };
    EgresoADNComponent.prototype.openDialogMensaje = function () {
        this.error = false;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        /* dialogRef.afterClosed().subscribe(result => {
           console.log('The dialog was closed');
           this.animal = result;
         });*/
    };
    EgresoADNComponent.prototype.openDialogCargar = function () {
        var _this = this;
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    EgresoADNComponent.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
        // close();
    };
    EgresoADNComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'egresosADN',
            template: __webpack_require__("../../../../../src/app/views/egresosADN.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], EgresoADNComponent);
    return EgresoADNComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.titulo = "Error!! Página no encontrada.";
    }
    ErrorComponent.prototype.ngOnInit = function () {
        console.log("Componente error.component.ts cargado");
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'error',
            template: __webpack_require__("../../../../../src/app/views/error.html")
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.titulo = 'Webapp de productos con Angular 4';
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('Se ha cargado el componente home.component.ts');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/views/home.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__("../../../../../src/app/views/message.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/producto-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoAddComponent = /** @class */ (function () {
    function ProductoAddComponent(_productoService, _route, _router) {
        this._productoService = _productoService;
        this._route = _route;
        this._router = _router;
        this.titulo = 'Crear un nuevo producto';
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__models_producto__["a" /* Producto */](0, '', '', 0, '');
    }
    ProductoAddComponent.prototype.ngOnInit = function () {
        console.log('producto-add.component.ts cargado...');
    };
    ProductoAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.producto);
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(__WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url + 'upload-file', [], this.filesToUpload).then(function (result) {
                console.log(result);
                _this.resultUpload = result;
                _this.producto.imagen = _this.resultUpload.filename;
                _this.saveProducto();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.saveProducto();
        }
    };
    ProductoAddComponent.prototype.saveProducto = function () {
        var _this = this;
        this._productoService.addProducto(this.producto).subscribe(function (response) {
            if (response.code == 200) {
                _this._router.navigate(['/productos']);
            }
            else {
                console.log(response);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductoAddComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    ProductoAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'producto-add',
            template: __webpack_require__("../../../../../src/app/views/producto-add.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductoAddComponent);
    return ProductoAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/producto-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoDetailComponent = /** @class */ (function () {
    function ProductoDetailComponent(_productoService, _route, _router) {
        this._productoService = _productoService;
        this._route = _route;
        this._router = _router;
    }
    ProductoDetailComponent.prototype.ngOnInit = function () {
        console.log('producto-detail.Component.ts cargado...');
        this.getProducto();
    };
    ProductoDetailComponent.prototype.getProducto = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productoService.getProducto(id).subscribe(function (response) {
                if (response.code == 200) {
                    _this.producto = response.data;
                }
                else {
                    _this._router.navigate(['/productos']);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProductoDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'producto-detail',
            template: __webpack_require__("../../../../../src/app/views/producto-detail.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductoDetailComponent);
    return ProductoDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/producto-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_producto__ = __webpack_require__("../../../../../src/app/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoEditComponent = /** @class */ (function () {
    function ProductoEditComponent(_productoService, _route, _router) {
        this._productoService = _productoService;
        this._route = _route;
        this._router = _router;
        this.titulo = 'Editar producto';
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__models_producto__["a" /* Producto */](1, '', '', 1, '');
        this.is_edit = true;
    }
    ProductoEditComponent.prototype.ngOnInit = function () {
        console.log(this.titulo);
        this.getProducto();
    };
    ProductoEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.producto);
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(__WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url + 'upload-file', [], this.filesToUpload).then(function (result) {
                console.log(result);
                _this.resultUpload = result;
                _this.producto.imagen = _this.resultUpload.filename;
                _this.updateProducto();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.updateProducto();
        }
    };
    ProductoEditComponent.prototype.updateProducto = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productoService.editProducto(id, _this.producto).subscribe(function (response) {
                if (response.code == 200) {
                    _this._router.navigate(['/producto', id]);
                }
                else {
                    console.log(response);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProductoEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    ProductoEditComponent.prototype.getProducto = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productoService.getProducto(id).subscribe(function (response) {
                if (response.code == 200) {
                    _this.producto = response.data;
                }
                else {
                    _this._router.navigate(['/productos']);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProductoEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'producto-edit',
            template: __webpack_require__("../../../../../src/app/views/producto-add.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductoEditComponent);
    return ProductoEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/productos-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductosListComponent = /** @class */ (function () {
    function ProductosListComponent(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Reporte de Gastos';
        this.confirmado = null;
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        this.datosCuentasServicios.reiniciar();
    }
    ProductosListComponent.prototype.ngOnInit = function () {
        console.log('productos-list.component.ts cargado');
        //this.getProductos();
        //this.getCuentasGastos();
    };
    ProductosListComponent.prototype.getProductos = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (result) {
            if (result.code != 200) {
                console.log(result);
            }
            else {
                _this.productos = result.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductosListComponent.prototype.getValidacion = function (datosCuenta) {
        this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
        this.fechaFin = this.datosCuentas.fechaFin.trim().split('-');
        // alert(this.fechaFin);
        if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de fin";
        }
        if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de Inicio";
        }
        //alert(this.datosCuentas.puesto);
        /*Se va a validar al cargar las pagina*/
        /*if (this.datosCuentas.puesto != 399  ){
            this.error=true;
            this.comentario= "No cuenta con un puesto valido";
        }*/
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[1]) < parseInt(this.fechaInicio[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[2]) < parseInt(this.fechaInicio[2])) {
                this.error = true;
                this.comentario = "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El dia de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        this.mensaje = { error: this.error, comentario: this.comentario, titulo: this.titulos };
    };
    /*Metodo para obtener el nuemro de cuentas*/
    ProductosListComponent.prototype.getCuentasGastos = function () {
        var _this = this;
        this.openDialogCargar();
        this.datosCuentas = this.datosCuentasServicios.getDatosCuentas();
        this.datosCuentas.puesto = this.datosGenerales.FuncionSAPCorta;
        console.log('getCuentasGastos');
        console.log(this.datosCuentas);
        /*validacion de las fechas*/
        this.getValidacion(this.datosCuentas);
        /*
            if (this.datosCuentas.cuenta=== 0){
                this.error=true;
                //this.mensaje= "Favor de Seleccionar una fecha de Inicio";
            }
                 
        */
        if (this.error != true) {
            console.log('Entro a validar');
            this._productoService.getCuentasGastos(this.datosCuentas, this.datosGenerales).subscribe(function (result) {
                _this.closeDialogCargar();
                if (result.code != 200) {
                    console.log(result);
                    //this.cuentaGastos = result.data.detCuentas;
                    _this.cuentaGastos = result.consultaCuentasResult.detCuentas;
                    if (_this.cuentaGastos.length === 0) {
                        _this.error = true;
                        _this.comentario = "La consulta no muestra cuentas disponibles";
                        _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                        _this.openDialog();
                    }
                    console.log(_this.cuentaGastos);
                }
                else {
                    _this.titulos = "Error";
                    _this.error = true;
                    _this.comentario = "Error al consultar cuentas de gastos";
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.openDialog();
                    console.log('Entro');
                    //this.cuentaGastos = result.detCuentas;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log('Entro en el error');
            console.log(this.mensaje);
            this.closeDialogCargar();
            this.openDialog();
        }
    };
    ProductosListComponent.prototype.borrarConfirm = function (id) {
        this.confirmado = id;
    };
    ProductosListComponent.prototype.cancelarConfirm = function () {
        this.confirmado = null;
    };
    ProductosListComponent.prototype.onDeleteProducto = function (id) {
        var _this = this;
        this._productoService.deleteProducto(id).subscribe(function (response) {
            if (response.code == 200) {
                _this.getProductos();
            }
            else {
                alert('Error al borrar producto');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductosListComponent.prototype.openDialog = function () {
        var _this = this;
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    ProductosListComponent.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje }
        });
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.openDialog();
        });
    };
    /*openDialogCargar(): void {
      
       this.dialogRefCarga = this.dialog.open(DialogCargar, {
        width: '200px',
        data: { mensaje: this.mensaje }
      });
  
  
    }*/
    ProductosListComponent.prototype.closeDialogCargar = function () {
        this.dialogRefCarga.close();
    };
    ProductosListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'productos-list',
            template: __webpack_require__("../../../../../src/app/views/productos-list.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], ProductosListComponent);
    return ProductosListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/redirect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedirectComponent = /** @class */ (function () {
    function RedirectComponent(router) {
        this.router = router;
        console.log('Carga se va redireccionar');
        this.router.navigate(['autorizacion']);
    }
    RedirectComponent.prototype.ngInit = function () {
        this.router.navigate(['autorizacion']);
    };
    RedirectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'loginForm',
            template: __webpack_require__("../../../../../src/app/views/redirect.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reimpresion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimprimirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__ = __webpack_require__("../../../../../src/app/services/datosCuentaServicio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message__ = __webpack_require__("../../../../../src/app/components/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carga__ = __webpack_require__("../../../../../src/app/components/carga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReimprimirComponent = /** @class */ (function () {
    function ReimprimirComponent(_route, _router, _productoService, datosCuentasServicios, datosGeneralesServicios, dialogMesage, dialog, dialogCarga) {
        this._route = _route;
        this._router = _router;
        this._productoService = _productoService;
        this.datosCuentasServicios = datosCuentasServicios;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.dialogMesage = dialogMesage;
        this.dialog = dialog;
        this.dialogCarga = dialogCarga;
        this.fechaInicio = [];
        this.fechaFin = [];
        this.error = false;
        this.titulos = "Alerta";
        this.titulo = 'Reimpresion de Comprobante de Gastos';
        this.confirmado = null;
        this.datosCuentasServicios.reiniciar();
    }
    ReimprimirComponent.prototype.ngOnInit = function () {
        console.log('productos-list.component.ts cargado');
    };
    ReimprimirComponent.prototype.getProductos = function () {
        var _this = this;
        this._productoService.getProductos().subscribe(function (result) {
            if (result.code != 200) {
                console.log(result);
            }
            else {
                _this.productos = result.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReimprimirComponent.prototype.getValidacion = function (datosCuenta) {
        this.fechaInicio = this.datosCuentas.fechaInicio.trim().split('-');
        this.fechaFin = this.datosCuentas.fechaFin.trim().split('-');
        // alert(this.fechaFin);
        if (this.datosCuentas.fechaFin === "" || this.datosCuentas.fechaFin === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de fin";
        }
        if (this.datosCuentas.fechaInicio === "" || this.datosCuentas.fechaInicio === null) {
            this.error = true;
            this.comentario = "Favor de Seleccionar una fecha de Inicio";
        }
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[1]) < parseInt(this.fechaInicio[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El mes de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        if (this.fechaInicio.length > 0 && this.fechaFin.length > 0) {
            if (parseInt(this.fechaFin[2]) < parseInt(this.fechaInicio[2])) {
                this.error = true;
                this.comentario = "El dia de la fecha de Fin  debe de ser mayor a la fecha de Inicio ";
            }
            if (parseInt(this.fechaInicio[1]) > parseInt(this.fechaFin[1])) {
                this.error = true;
                this.comentario = "El dia de la fecha de inicio  debe de ser menor a la fecha de Inicio ";
            }
        }
        this.mensaje = { error: this.error, comentario: this.comentario, titulo: this.titulos };
    };
    /*Metodo para obtener el nuemro de cuentas*/
    ReimprimirComponent.prototype.borrarConfirm = function (id) {
        this.confirmado = id;
    };
    ReimprimirComponent.prototype.cancelarConfirm = function () {
        this.confirmado = null;
    };
    ReimprimirComponent.prototype.openDialog = function () {
        var _this = this;
        this.error = false;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__components_message__["a" /* DialogOverviewExampleDialog */], {
            width: '500px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    ReimprimirComponent.prototype.openDialogCargar = function () {
        this.dialogRefCarga = this.dialogCarga.open(__WEBPACK_IMPORTED_MODULE_6__components_carga__["a" /* DialogCargar */], {
            width: '160px',
            data: { mensaje: this.mensaje },
            disableClose: true
        });
    };
    ReimprimirComponent.prototype.closeDialogCargar = function () {
        console.log('closeDialogCargar');
        this.dialogRefCarga.close();
        this.dialogRefCarga.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.openDialog();
        });
    };
    /*Metodo para consumir el servicio*/
    ReimprimirComponent.prototype.getCuentasGastos = function () {
        var _this = this;
        this.openDialogCargar();
        this.datosCuentas = this.datosCuentasServicios.getDatosCuentas();
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        console.log('getCuentasGastos');
        console.log(this.datosCuentas);
        var self = this;
        /*validacion de las fechas*/
        this.getValidacion(this.datosCuentas);
        if (this.error != true) {
            this._productoService.getCuentasReimpresion(this.datosCuentas, this.datosGenerales.FuncionSAP).subscribe(function (result) {
                console.log('Entro');
                _this.closeDialogCargar();
                if (result.code != 200) {
                    console.log(result);
                    _this.cuentaGastos = result.ConsultaCuentasReimpresionResult.CuentasReimpresion;
                    if (_this.cuentaGastos == null) {
                        _this.error = true;
                        _this.titulos = "Alerta";
                        _this.comentario = "La consulta no muestra cuentas disponibles";
                        console.log(result.ConsultaCuentasReimpresionResult.Mensaje);
                        //this.error=false;
                        _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                        /* let dialogRef2 = this.dialog.open(DialogOverviewExampleDialog, {
                          width: '500px',
                          data: { mensaje: this.mensaje },
                          disableClose: true
                        });*/
                    }
                    console.log(_this.cuentaGastos);
                }
                else {
                    _this.titulos = "Error";
                    _this.error = true;
                    _this.comentario = "Error al consultar cuentas de gastos";
                    _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                    _this.closeDialogCargar();
                    console.log('Entro');
                }
            }, function (error) {
                console.log(error);
                _this.titulos = "Error";
                _this.error = true;
                _this.comentario = "Error al consultar cuentas de gastos";
                _this.mensaje = { error: _this.error, comentario: _this.comentario, titulo: _this.titulos };
                //this.closeDialogCargar();
                //this.dialogCarga.close()
                _this.openDialog();
                console.log('Entro');
            });
        }
        else {
            console.log('Entro en el error');
            console.log(this.mensaje);
            this.closeDialogCargar();
            this.openDialog();
        }
    };
    ReimprimirComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reimpresion',
            template: __webpack_require__("../../../../../src/app/views/reimpresion.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_datosCuentaServicio__["a" /* datosCuentasServicio */],
            __WEBPACK_IMPORTED_MODULE_7__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialog */]])
    ], ReimprimirComponent);
    return ReimprimirComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tooltip.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipGeneral; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * @title Basic tooltip
 */
var TooltipGeneral = /** @class */ (function () {
    function TooltipGeneral() {
        console.log('valor de Entrada ' + this.valor);
        if (this.valor) {
            this.titulo = String(this.valor.FolioAdn);
            this.Mensaje = this.valor.Descripcion;
        }
        else {
            this.titulo = "fallo";
            this.Mensaje = "Intentar de Nuevo";
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TooltipGeneral.prototype, "valor", void 0);
    TooltipGeneral = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tooltip-general',
            template: __webpack_require__("../../../../../src/app/views/tooltip-general.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TooltipGeneral);
    return TooltipGeneral;
}());



/***/ }),

/***/ "../../../../../src/app/css/datepicker-min-max-example.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/css/radio-ng-model.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-radio-group {\r\n  display: inline;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.example-radio-button {\r\n  margin: 5px;\r\n}\r\n\r\n.example-selected-value {\r\n  margin: 15px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/models/CajaDetalleFolios.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CajaDetalleFolios; });
var CajaDetalleFolios = /** @class */ (function () {
    function CajaDetalleFolios(CifraCanal, CifraControl, CifraEmpleadoDestino, CifraFechaSolicitud, Concepto, DatosAdicionales, EstadoFolio, FBPDescripcionCuenta, FBPFolio, FiEmpleado, FolioADN, FolioRef, FolioSAP, ImporteGasto, ImporteIVA, Justificacion, NoCuenta, NoTransaccion, NombreEmpleado, Referencia, TipoGasto, ValidaHuella) {
        this.CifraCanal = CifraCanal;
        this.CifraControl = CifraControl;
        this.CifraEmpleadoDestino = CifraEmpleadoDestino;
        this.CifraFechaSolicitud = CifraFechaSolicitud;
        this.Concepto = Concepto;
        this.DatosAdicionales = DatosAdicionales;
        this.EstadoFolio = EstadoFolio;
        this.FBPDescripcionCuenta = FBPDescripcionCuenta;
        this.FBPFolio = FBPFolio;
        this.FiEmpleado = FiEmpleado;
        this.FolioADN = FolioADN;
        this.FolioRef = FolioRef;
        this.FolioSAP = FolioSAP;
        this.ImporteGasto = ImporteGasto;
        this.ImporteIVA = ImporteIVA;
        this.Justificacion = Justificacion;
        this.NoCuenta = NoCuenta;
        this.NoTransaccion = NoTransaccion;
        this.NombreEmpleado = NombreEmpleado;
        this.Referencia = Referencia;
        this.TipoGasto = TipoGasto;
        this.ValidaHuella = ValidaHuella;
    }
    return CajaDetalleFolios;
}());



/***/ }),

/***/ "../../../../../src/app/models/DatosCuenta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosCuenta; });
var datosCuenta = /** @class */ (function () {
    function datosCuenta() {
        this.status = 0;
        this.descEstatus = '';
        this.fechaInicio = '';
        this.fechaFin = '';
        this.puesto = 0;
        this.cuenta = 0;
    }
    datosCuenta.prototype.setHuella = function (huella) {
        this.huella = huella;
    };
    datosCuenta.prototype.setStatus = function (estatus) {
        this.status = estatus;
    };
    datosCuenta.prototype.setDescStatus = function (descEstatus) {
        this.descEstatus = descEstatus;
    };
    datosCuenta.prototype.setFechaInicio = function (fechaInicio) {
        this.fechaInicio = fechaInicio;
    };
    datosCuenta.prototype.setFechaFin = function (fechaFin) {
        this.fechaFin = fechaFin;
    };
    datosCuenta.prototype.setPuesto = function (puesto) {
        this.puesto = puesto;
    };
    datosCuenta.prototype.setCuenta = function (cuenta) {
        this.cuenta = cuenta;
    };
    datosCuenta.prototype.getStatus = function () {
        return this.status;
    };
    datosCuenta.prototype.getFechaInicio = function () {
        return this.fechaInicio;
    };
    datosCuenta.prototype.getFechaFin = function () {
        return this.fechaFin;
    };
    datosCuenta.prototype.getPuesto = function () {
        return this.puesto;
    };
    datosCuenta.prototype.getCuenta = function () {
        return this.cuenta;
    };
    return datosCuenta;
}());



/***/ }),

/***/ "../../../../../src/app/models/SolicitudFiniquito.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudFiniquito; });
var SolicitudFiniquito = /** @class */ (function () {
    function SolicitudFiniquito(usuario, estacion, funcionSAP, tipo, ConsultaFiniquito) {
        this.usuario = usuario;
        this.estacion = estacion;
        this.funcionSAP = funcionSAP;
        this.tipo = tipo;
        this.ConsultaFiniquito = ConsultaFiniquito;
    }
    return SolicitudFiniquito;
}());



/***/ }),

/***/ "../../../../../src/app/models/datosEgreso.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosEgreso; });
var datosEgreso = /** @class */ (function () {
    function datosEgreso(empleado, cifraControl, referencia) {
        this.empleado = empleado;
        this.cifraControl = cifraControl;
        this.referencia = referencia;
    }
    return datosEgreso;
}());



/***/ }),

/***/ "../../../../../src/app/models/datosGenerales.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosGenerales; });
var datosGenerales = /** @class */ (function () {
    function datosGenerales() {
        this.NumTienda = 0;
        this.NomTienda = '';
        this.Moneda = '';
        this.Mes = 0;
        this.Anio = 0;
        this.Puesto = 0;
        this.Canal = 0;
        this.FuncionSAP = 0;
        this.DescPresupuesto = '';
        this.SignoMoneda = '';
        this.PaisId = 0;
        this.NombreMoneda = '';
        this.Impuesto = '';
        this.PswMetodos = '';
        this.NomEmpleado = '';
        this.estacion = '';
        this.NomEmpCorto = '';
        this.NoEmpleado = "";
        this.fiActivaXML = 0;
        this.fdActivaXML = "";
        this.fiMensajeXML = 0;
        this.Ccentro = '520673';
        this.CecoEnt = 0;
        this.Idmenu = "";
        this.menu = "";
        this.servidor = "1";
    }
    return datosGenerales;
}());



/***/ }),

/***/ "../../../../../src/app/models/detFletes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detFletes; });
var detFletes = /** @class */ (function () {
    function detFletes(fcNombre, fcRFC, fcIFE, fcCalle, fcNoExt, fcNoInt, fcCP, fcColonia, fcPoblacion, fcTelefono) {
        this.fcNombre = fcNombre;
        this.fcRFC = fcRFC;
        this.fcIFE = fcIFE;
        this.fcCalle = fcCalle;
        this.fcNoExt = fcNoExt;
        this.fcNoInt = fcNoInt;
        this.fcCP = fcCP;
        this.fcColonia = fcColonia;
        this.fcPoblacion = fcPoblacion;
        this.fcTelefono = fcTelefono;
    }
    return detFletes;
}());



/***/ }),

/***/ "../../../../../src/app/models/egreso.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return egreso; });
var egreso = /** @class */ (function () {
    function egreso(noCuenta, descCuenta, importe, factura, justificacion, concepto, importeImpuesto) {
        this.noCuenta = noCuenta;
        this.descCuenta = descCuenta;
        this.importe = importe;
        this.factura = factura;
        this.justificacion = justificacion;
        this.concepto = concepto;
        this.importeImpuesto = importeImpuesto;
    }
    return egreso;
}());



/***/ }),

/***/ "../../../../../src/app/models/empleadoHuella.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empleadoHuella; });
var empleadoHuella = /** @class */ (function () {
    function empleadoHuella(NoEmpleado, Nombre, Apaterno, Amatreno) {
        this.NoEmpleado = NoEmpleado;
        this.Nombre = Nombre;
        this.Apaterno = Apaterno;
        this.Amatreno = Amatreno;
    }
    return empleadoHuella;
}());



/***/ }),

/***/ "../../../../../src/app/models/fletero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fletero; });
var fletero = /** @class */ (function () {
    function fletero(noCuenta, descCuenta, importe, referencia, comprobanteFiscal, nombreFletero, justificacion) {
        this.noCuenta = noCuenta;
        this.descCuenta = descCuenta;
        this.importe = importe;
        this.referencia = referencia;
        this.comprobanteFiscal = comprobanteFiscal;
        this.nombreFletero = nombreFletero;
        this.justificacion = justificacion;
    }
    return fletero;
}());



/***/ }),

/***/ "../../../../../src/app/models/menus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menus; });
var menus = /** @class */ (function () {
    function menus(id, desc, ruta) {
        this.id = id;
        this.desc = desc;
        this.ruta = ruta;
    }
    return menus;
}());



/***/ }),

/***/ "../../../../../src/app/models/producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto(id, nombre, descripcion, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
    return Producto;
}());



/***/ }),

/***/ "../../../../../src/app/models/reporteGastos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reporteGastos; });
var reporteGastos = /** @class */ (function () {
    function reporteGastos(FolioAdn, FolioSAP, NoCuenta, ImporteGasto, DescTipoGasto, IdTipo, Fecha, Descripcion, Referencia, Justificacion, Observaciones, Empleado, TranNo, Importeletra, FolioFBP, Parametro) {
        this.FolioAdn = FolioAdn;
        this.FolioSAP = FolioSAP;
        this.NoCuenta = NoCuenta;
        this.ImporteGasto = ImporteGasto;
        this.DescTipoGasto = DescTipoGasto;
        this.IdTipo = IdTipo;
        this.Fecha = Fecha;
        this.Descripcion = Descripcion;
        this.Referencia = Referencia;
        this.Justificacion = Justificacion;
        this.Observaciones = Observaciones;
        this.Empleado = Empleado;
        this.TranNo = TranNo;
        this.Importeletra = Importeletra;
        this.FolioFBP = FolioFBP;
        this.Parametro = Parametro;
    }
    return reporteGastos;
}());



/***/ }),

/***/ "../../../../../src/app/models/validaFacturacion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validaFacturacion; });
var validaFacturacion = /** @class */ (function () {
    /*
            public UID :string,
                    public codigo: number,
                    public mensaje:string
    */
    function validaFacturacion(ComprobanteFiscal, Datosparam, EjercicioFiscal, Fechaxml, Folioxml, RFCEmisor, RFCReceptor, Serie, UUIDValido, Ivaxml, Totalxml) {
        this.ComprobanteFiscal = ComprobanteFiscal;
        this.Datosparam = Datosparam;
        this.EjercicioFiscal = EjercicioFiscal;
        this.Fechaxml = Fechaxml;
        this.Folioxml = Folioxml;
        this.RFCEmisor = RFCEmisor;
        this.RFCReceptor = RFCReceptor;
        this.Serie = Serie;
        this.UUIDValido = UUIDValido;
        this.Ivaxml = Ivaxml;
        this.Totalxml = Totalxml;
    }
    return validaFacturacion;
}());



/***/ }),

/***/ "../../../../../src/app/services/datosCuentaServicio.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosCuentasServicio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_DatosCuenta__ = __webpack_require__("../../../../../src/app/models/DatosCuenta.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var datosCuentasServicio = /** @class */ (function () {
    function datosCuentasServicio() {
        console.log('Entro 1');
        this.datosCuentas = new __WEBPACK_IMPORTED_MODULE_1__models_DatosCuenta__["a" /* datosCuenta */]();
    }
    datosCuentasServicio.prototype.addDatosCuentas = function (cuenta) {
        this.datosCuentas = cuenta;
    };
    datosCuentasServicio.prototype.reiniciar = function () {
        this.datosCuentas = new __WEBPACK_IMPORTED_MODULE_1__models_DatosCuenta__["a" /* datosCuenta */]();
    };
    datosCuentasServicio.prototype.getDatosCuentas = function () {
        return this.datosCuentas;
    };
    datosCuentasServicio.prototype.setHuella = function (huella) {
        console.log('Entro en la setHuella');
        this.datosCuentas.huella = huella;
        console.log(this.datosCuentas);
    };
    datosCuentasServicio.prototype.getStatus = function (estatus) {
        console.log('Entro en la validacion');
        this.datosCuentas.status = estatus;
        console.log(this.datosCuentas);
    };
    datosCuentasServicio.prototype.getFechaInicio = function (fechaInicio) {
        console.log(fechaInicio);
        this.datosCuentas.fechaInicio = fechaInicio;
        console.log(this.datosCuentas);
    };
    datosCuentasServicio.prototype.getFechaFin = function (fechaFin) {
        this.datosCuentas.fechaFin = fechaFin;
        console.log(this.datosCuentas);
    };
    datosCuentasServicio.prototype.getPuesto = function (puesto) {
        this.datosCuentas.puesto = puesto;
    };
    datosCuentasServicio.prototype.setCuenta = function (cuenta) {
        this.datosCuentas.cuenta = cuenta;
    };
    datosCuentasServicio.prototype.setPuesto = function (puesto) {
        this.datosCuentas.puesto = puesto;
    };
    datosCuentasServicio.prototype.setDescEstatus = function (status) {
        this.datosCuentas.descEstatus = status;
    };
    datosCuentasServicio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], datosCuentasServicio);
    return datosCuentasServicio;
}());



/***/ }),

/***/ "../../../../../src/app/services/datosGeneralesServicio.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosGeneralesServicio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_datosGenerales__ = __webpack_require__("../../../../../src/app/models/datosGenerales.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var datosGeneralesServicio = /** @class */ (function () {
    function datosGeneralesServicio() {
        console.log('Entro 1');
        this.datosGenerales = new __WEBPACK_IMPORTED_MODULE_1__models_datosGenerales__["a" /* datosGenerales */]();
    }
    datosGeneralesServicio.prototype.addDatosGenerales = function (cuenta) {
        this.datosGenerales = cuenta;
    };
    datosGeneralesServicio.prototype.getDatosGenerales = function () {
        return this.datosGenerales;
    };
    datosGeneralesServicio.prototype.setEstacion = function (estacion) {
        this.datosGenerales.estacion = estacion;
    };
    datosGeneralesServicio.prototype.setServidor = function (servidor) {
        this.datosGenerales.servidor = servidor;
    };
    datosGeneralesServicio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], datosGeneralesServicio);
    return datosGeneralesServicio;
}());



/***/ }),

/***/ "../../../../../src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://localhost/curso-angular4-backend/index.php/',
    urlGastos: 'http://10.51.118.175:8082/ServicioGastos.svc/json/',
    urlDesarrollo: 'http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/',
    //urlGastosPV:'http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/',
    //Productiva
    urlGastosPV: ':9050/ServiciosGastos/ServicioGastos.svc/json/',
    //urlGastos : 'http://192.168.100.8:8082/ServicioGastos.svc/json/',
    //	urlGastosPV:':10579/ServicioGastos.svc/json/',
    urlPrint: 'http://localhost:9001/WSDesTecAppsLocal',
    header_color: '#E03137'
};


/***/ }),

/***/ "../../../../../src/app/services/producto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_datosGenerales__ = __webpack_require__("../../../../../src/app/models/datosGenerales.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_egreso__ = __webpack_require__("../../../../../src/app/models/egreso.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_validaFacturacion__ = __webpack_require__("../../../../../src/app/models/validaFacturacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_datosGeneralesServicio__ = __webpack_require__("../../../../../src/app/services/datosGeneralesServicio.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductoService = /** @class */ (function () {
    //export const contentHeaders = new Headers();
    function ProductoService(_http, datosGeneralesServicios) {
        //this.servidor= this.getParameterByName('servidor');
        //alert('Services');
        //alert(this.servidor);
        this._http = _http;
        this.datosGeneralesServicios = datosGeneralesServicios;
        this.ticket = "";
        this.datosGenerales = this.datosGeneralesServicios.getDatosGenerales();
        if (this.datosGenerales.servidor === "1") {
            this.servidor = this.getParameterByName('servidor');
            console.log(this.servidor);
            this.datosGeneralesServicios.setServidor(this.servidor);
        }
        //this.datosGenerales= this.datosGeneralesServicios.getDatosGenerales();
        console.log('ProductoService');
        console.log(this.datosGenerales);
        console.log('this.datosGenerales.servidor' + this.datosGenerales.servidor);
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
        this.urlGastos = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].urlGastos;
        this.urlGastosPV = 'http://' + this.datosGenerales.servidor + __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].urlGastosPV;
        this.urlPrint = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].urlPrint;
        console.log('valor this.urlGastosPV');
        console.log(this.urlGastosPV);
    }
    ProductoService.prototype.getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    ProductoService.prototype.getProductos = function () {
        return this._http.get(this.url + 'productos').map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getProducto = function (id) {
        return this._http.get(this.url + 'producto/' + id).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getInsertaSolicitudGastos = function (datosGenerales, egreso, DatosXML, datos) {
        //var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;
        console.log('valor de datos getInsertaSolicitudGastos');
        console.log(datosGenerales);
        console.log(egreso);
        console.log(__WEBPACK_IMPORTED_MODULE_7__models_validaFacturacion__["a" /* validaFacturacion */]);
        console.log(datos);
        var solicitud = {};
        solicitud.Empleado = datosGenerales.NoEmpleado;
        solicitud.NoCuenta = egreso.noCuenta;
        solicitud.ImporteGasto = egreso.importe;
        solicitud.ImporteImpuesto = egreso.importeImpuesto;
        solicitud.Valxml = 0; //datosGenerales.fiActivaXML
        solicitud.Referencia = egreso.factura;
        solicitud.Observaciones = '';
        solicitud.Justificacion = egreso.justificacion;
        solicitud.FolioRefFletes = '';
        solicitud.Cifracontrol = '';
        solicitud.PresupuestoDisponible = datos.Disponible;
        solicitud.estacioTrabajo = datosGenerales.estacion;
        if (DatosXML != undefined) {
            solicitud.DatosXMl = DatosXML;
        }
        else {
            var datosXML = new __WEBPACK_IMPORTED_MODULE_7__models_validaFacturacion__["a" /* validaFacturacion */]('0', 0, '', '', '', '', '', '', '', 0, 0);
            solicitud.DatosXMl = datosXML;
            var flete_1 = {};
            flete_1.Datosparam = 0; //V
        }
        var flete = {};
        flete.Datosparam = 0;
        solicitud.Datosfiscales = flete;
        console.log('Valores de solicitud');
        console.log(solicitud);
        //return this._http.get(url).map(res => res.json());	     
        return this._http.post(this.urlGastosPV + 'AfectaAltaSolicitud', solicitud).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getInsertaSolicitudGastosFletes = function (datosGenerales, fletero, fletes, datos, existeFletero) {
        console.log('URL de la solicitud');
        console.log('valor de cuentas de solicitud');
        console.log(datos);
        var solicitud = {};
        //Objeto de Solicitud
        var flete = {};
        solicitud.Empleado = datosGenerales.NoEmpleado;
        solicitud.NoCuenta = fletero.noCuenta;
        solicitud.ImporteGasto = fletero.importe;
        solicitud.ImporteImpuesto = 0;
        solicitud.Valxml = datosGenerales.fiActivaXML;
        solicitud.Referencia = fletero.referencia;
        solicitud.Observaciones = '';
        solicitud.Justificacion = fletero.justificacion;
        solicitud.FolioRefFletes = '';
        solicitud.Cifracontrol = '';
        solicitud.PresupuestoDisponible = datos.Disponible;
        solicitud.estacioTrabajo = datosGenerales.estacion;
        flete.Datosparam = existeFletero; //VAlidar parametro si existe 
        flete.Noidenficacion = 0;
        flete.calle = fletes.fcCalle;
        flete.colonia = fletes.fcColonia;
        flete.cp = fletes.fcCP;
        flete.estado = 0; //Se debe de Solicitar
        flete.estatusfolio = 0; // Se debe de Solicitar
        flete.foliorecibo = 0; // Se debe de Solicitar
        flete.noExt = fletes.fcNoExt;
        flete.noInt = fletes.fcNoInt;
        flete.nombre = fletes.fcNombre;
        flete.poblacion = fletes.fcPoblacion;
        flete.rfc = fletes.fcRFC;
        flete.telefono = fletes.fcTelefono;
        solicitud.Datosfiscales = flete;
        var datosXML = new __WEBPACK_IMPORTED_MODULE_7__models_validaFacturacion__["a" /* validaFacturacion */]('0', 0, '', '', '', '', '', '', '', 0, 0);
        solicitud.DatosXMl = datosXML;
        console.log('Valores de solicitud');
        console.log(solicitud);
        //return this._http.get(url).map(res => res.json());	
        return this._http.post(this.urlGastosPV + 'AfectaAltaSolicitud', solicitud).map(function (res) { return res.json(); });
    };
    /*Metodo para actualizar las solicitudes Autorizar*/
    ProductoService.prototype.getActualizarSolicitudGastos = function (datosGenerales, detActualizazr) {
        //referencia='prueba'; //public FOLIO_ADN       :string,
        var actualizar = {};
        actualizar.folioADN = detActualizazr.FolioADN;
        actualizar.nofolioSAP = detActualizazr.Folio;
        actualizar.estadosolicitud = detActualizazr.TdaEstado;
        actualizar.estacionTrabajo = datosGenerales.estacion;
        actualizar.empleado = datosGenerales.NoEmpleado;
        var url = this.urlGastosPV + 'InsertaFolioFiniquito';
        console.log(url);
        console.log('URL de la solicitud');
        console.log(url);
        return this._http.post(this.urlGastosPV + 'ActualizaSolicitud', actualizar).map(function (res) { return res.json(); });
        //return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'ActualizaSolicitud',actualizar).map(res => res.json());	
    };
    ProductoService.prototype.getInsertaSolicitudFiniquito = function (act) {
        //referencia='prueba';
        var report = {};
        report.det = act;
        var url = this.urlGastosPV + 'InsertaFolioFiniquito';
        console.log(url);
        console.log('valor de report' + act);
        console.log('valor de report' + report);
        ////http://localhost:17806/ServicioGastos.svc 
        return this._http.post(this.urlGastosPV + 'InsertaFolioFiniquito', report).map(function (res) { return res.json(); });
        //return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'InsertaFolioFiniquito',report).map(res => res.json());	
    };
    ProductoService.prototype.getCuentasConXML = function (datosGenerales, cuenta) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        console.log(this.urlGastos + 'requiereXML?cuenta=' + cuenta + '&moneda=' + datosGenerales.Moneda + '&canal=' + datosGenerales.Canal);
        var report = {};
        report.cuenta = cuenta;
        report.moneda = datosGenerales.Moneda;
        report.canal = datosGenerales.Canal;
        console.log(report);
        console.log(this.urlGastosPV + 'RequiereXML');
        //return this._http.post(this.urlGastosPV+'RequiereXML',report).map(res => res.json());
        //http://localhost:17806/ServicioGastos.svc
        //return this._http.post(this.urlGastosPV+'DetalleTiendaCuenta',report).map(res => res.json()); //Se comenta para desarrollo 
        return this._http.post(this.urlGastosPV + 'DetalleTiendaCuenta', report).map(function (res) { return res.json(); }); //Se comenta para desarrollo 
    };
    /*Metodo para validacion de flestes*/ //Se Modifico 19022018
    ProductoService.prototype.getVlidacionFletes = function (referencia) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        console.log(this.urlGastos + 'consultaValidacionFletes?referencia=' + referencia);
        //return this._http.get(this.urlGastos+'consultaValidacionFletes?referencia='+referencia).map(res => res.json());
        var report = {};
        report.referencia = referencia;
        //return this._http.post('http://10.51.118.175:8082/ServicioGastos.svc/json/'+'consultaValidacionFletes',report).map(res => res.json());
        return this._http.post(this.urlGastosPV + 'consultaValidacionFletes', report).map(function (res) { return res.json(); });
    };
    /*Metodo para consulta de fletes*/ //Se Modifico 19022018
    ProductoService.prototype.getConsultaFletes = function () {
        var report = {};
        report.referencia = '';
        //console.log(this.urlGastosPV+'consultaFletes);
        //return this._http.get(this.urlGastos+'consultaFletes').map(res => res.json());
        //return this._http.post('http://10.51.118.175:8082/ServicioGastos.svc/json/'+'consultaFletes',report).map(res => res.json());
        return this._http.post(this.urlGastosPV + 'consultaFletes', report).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getConsultaPresupuesto = function (datosGenerales, cuenta) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        console.log(this.urlGastos + 'requiereXML?cuenta=' + cuenta + '&moneda=' + datosGenerales.Moneda + '&canal=' + datosGenerales.Canal);
        return this._http.get(this.urlGastos + 'ConsultaPresupuesto?cuenta=' + cuenta + '&moneda=' + datosGenerales.Moneda + '&canal=' + datosGenerales.Canal).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getCuentasGastos = function (datosCuentas, datosGenerales) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/consultaDetCuentasReimpresion
        var report = {};
        report.IdEstado = datosCuentas.status;
        report.NoCuenta = datosCuentas.cuenta;
        report.FechaInf = datosCuentas.fechaInicio;
        report.FechaSup = datosCuentas.fechaFin;
        report.Puesto = datosCuentas.puesto;
        report.canal = datosGenerales.Canal;
        report.tienda = datosGenerales.NumTienda;
        report.moneda = datosGenerales.Moneda;
        report.NoEmpleado = datosGenerales.NoEmpleado;
        console.log(report);
        //return this._http.post(this.urlGastosPV+'consultaCuentas',report).map(res => res.json()); 
        //return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'consultaCuentas',report).map(res => res.json());
        return this._http.post(this.urlGastosPV + 'consultaCuentas', report).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getReporteGastos = function (datosCuentas, detHistoricoSolicitudes, datosGenerales) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //return this._http.get(this.urlGastos+'ConsultaComponentesDeProsupuestoPorTienda?Anio='+datosGenerales.Anio+'&Mes='+datosGenerales.Mes+'&Canal='+datosGenerales.Canal+'&tienda='+datosGenerales.NumTienda+'&Moneda='+datosGenerales.Moneda+'&Proyecto='+'0'+'&Puesto='+FuncionSAP+'&Centro='+'480673'+'&noEmpl='+datosGenerales.NoEmpleado).map(res => res.json());
        var report = {};
        report.IdEstado = datosCuentas.status;
        report.NoCuenta = datosCuentas.cuenta;
        report.FechaInf = datosCuentas.fechaInicio;
        report.FechaSup = datosCuentas.fechaFin;
        report.Puesto = datosCuentas.puesto;
        report.canal = datosGenerales.Canal;
        report.det = detHistoricoSolicitudes;
        /*report.Puesto=1;
        report.canal=0;*/
        //report.IdEstado=datosCuentas.cuenta==0?6:datosCuentas.status;
        console.log(report);
        //console.log('Valores'+this.urlGastos+'consultaReporteGastos?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto=399'+'&Auditor=0');
        //return this._http.get(this.urlGastos+'consultaReporteGastos?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //http://localhost:17806/ServicioGastos.svc
        //return this._http.post(this.urlGastosPV+'consultaDetCuentas',report).map(res => res.json());
        //return this._http.post('http://localhost:17806/ServicioGastos.svc/json/'+'consultaDetCuentas',report).map(res => res.json());
        //	return this._http.post(this.urlGastosPV+'consultaDetCuentas',report).map(res => res.json());
        //http://localhost:10579/ServicioGastos.svc
        //return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'consultaDetCuentas',report).map(res => res.json());
        return this._http.post(this.urlGastosPV + 'consultaDetCuentas', report).map(function (res) { return res.json(); });
        //'http://192.168.100.15:8098/ServicioGastos.svc/json/consultaCuentas
        //return this._http.post('http://192.168.100.15:8098/ServicioGastos.svc/json/'+'consultaDetCuentas',report).map(res => res.json());	
    };
    /*Metodo para la carga de la información  en la reimpresion*/
    ProductoService.prototype.getCuentasReimpresion = function (datosCuentas, puesto) {
        var FuncionSAP = String(puesto).length == 4 ? String(puesto).substring(1, 4) : String(puesto).length == 3 ? String(puesto).substring(0, 3) : '';
        console.log('Funcion SAp');
        console.log(FuncionSAP);
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        console.log(this.urlGastos + 'consultaCuentasReimpresion?IdEstado=' + datosCuentas.status + '&FechaInf=' + datosCuentas.fechaInicio + '&FechaSup=' + datosCuentas.fechaFin + '&Puesto=' + datosCuentas.puesto + '&Auditor=0');
        var report = {};
        report.IdEstado = datosCuentas.status;
        //report.NoCuenta=datosCuentas.cuenta;
        report.FechaInf = datosCuentas.fechaInicio;
        report.FechaSup = datosCuentas.fechaFin;
        report.Puesto = FuncionSAP;
        report.Auditor = 0;
        console.log(report);
        //return this._http.post(this.urlGastos+'consultaCuentasReimpresion?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        return this._http.post(this.urlGastosPV + 'consultaCuentasReimpresion', report).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getDetalleCuentasReimpresion = function (datosCuentas, puesto) {
        var FuncionSAP = String(puesto).length == 4 ? String(puesto).substring(1, 4) : String(puesto).length == 3 ? String(puesto).substring(0, 3) : '';
        console.log('Funcion SAp');
        console.log(FuncionSAP); //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        console.log('Valores' + this.urlGastos + 'consultaDetCuentasReimpresion?IdEstado=' + datosCuentas.status + '&NoCuenta=' + datosCuentas.cuenta + '&FechaInf=' + datosCuentas.fechaInicio + '&FechaSup=' + datosCuentas.fechaFin + '&Puesto=' + datosCuentas.puesto + '&Auditor=0');
        var report = {};
        report.IdEstado = datosCuentas.status;
        report.NoCuenta = datosCuentas.cuenta;
        report.FechaInf = datosCuentas.fechaInicio;
        report.FechaSup = datosCuentas.fechaFin;
        report.Puesto = FuncionSAP;
        report.Auditor = 0;
        console.log(report);
        //+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0
        //return this._http.get('http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/'+'consultaDetCuentasReimpresion?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto).map(res => res.json());
        //console.log('http://10.54.28.114/WebServicioTienda/ServicioGastos.svc/json/');
        return this._http.post(this.urlGastosPV + 'consultaDetCuentasReimpresion', report).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getDatosGenerales = function (noEmp) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //console.log('Valores'+this.urlGastos+'consultaDetCuentasReimpresion?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto=399'+'&Auditor=0');
        //var valor = {"empleado":"'"+noEmp+"'"};
        this.cadena = { "noEmpleado": noEmp };
        var solEmpleado = {};
        //solEmpleado.noEmpleado = String (noEmp);
        solEmpleado.empleado = String(noEmp);
        //let observable:Observable<WrapperRespuesta>; 
        /*let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });*/
        //	let head = new Headers({ 'Content-Type': 'application/json' });*/
        //console.log('Meaning of '+this.cadena + String(noEmp));
        //Se comenta el metodo de consulta de datos generales	
        //return this._http.post(this.urlGastos+'obtenerDatosGenerales',solEmpleado).map(res => res.json());   
        console.log('ruta en getDatosGenerales');
        console.log(this.urlGastosPV + 'ObtenerDatosIniciales');
        return this._http.post(this.urlGastosPV + 'ObtenerDatosIniciales', solEmpleado).map(function (res) { return res.json(); });
        //return this._http.post('http://localhost:17806/ServicioGastos.svc/json/'+'TiendaDatosInicio',solEmpleado).map(res => res.json());   
    };
    ProductoService.prototype.getConsultaFiniquito = function (folio) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //console.log('Valores'+this.urlGastos+'consultaDetCuentasReimpresion?IdEstado='+datosCuentas.status+'&NoCuenta='+datosCuentas.cuenta+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto=399'+'&Auditor=0');
        var solFolioFBP = {};
        //solEmpleado.noEmpleado = String (noEmp);
        solFolioFBP.foliofbp = String(folio);
        console.log('ruta:' + this.urlGastosPV + 'ConsultaFiniquito');
        console.log('datos:' + solFolioFBP);
        //return this._http.get(this.urlGastos+'ConsultaFiniquito?folio='+folio).map(res => res.json());     
        return this._http.post(this.urlGastosPV + 'ConsultaFiniquito', solFolioFBP).map(function (res) { return res.json(); });
        //return this._http.post('http://localhost:17806/ServicioGastos.svc/json/'+'ConsultaFiniquito',solFolioFBP).map(res => res.json());     
    };
    ProductoService.prototype.getValidacionXML = function (xml, UUID) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //console.log(this.urlGastos+'ConsultaValidacionXML?xml='+xml);
        //this.cadena= JSON.stringify('"xml":"'+ xml+'"');
        //this.cadena= {"xml": 'Hola mundo'} ;
        //	http://10.51.118.175:8082/ServicioGastos.svc/json/ConsultaValidacionXML
        var validaXML = {};
        validaXML.uid = UUID;
        validaXML.xmlfactura = xml;
        console.log(this.urlGastosPV + 'Validafactura');
        console.log('valor de parametro de getValidacionXML');
        console.log(validaXML);
        //return this._http.get(this.urlGastos+'ConsultaValidacionXML?xml='+xml).map(res => res.json());
        return this._http.post(this.urlGastosPV + 'Validafactura', validaXML).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getValidacionXMLPrueba = function (xml, cuenta, canal) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        //console.log(this.urlGastos+'ConsultaValidacionXML?xml='+xml);
        //this.cadena= JSON.stringify('"xml":"'+ xml+'"');
        //this.cadena= {"xml": 'Hola mundo'} ;
        //	http://10.51.118.175:8082/ServicioGastos.svc/json/ConsultaValidacionXML
        var validaXML = {};
        //validaXML.uid = UUID;
        validaXML.Cadenaxml = xml;
        validaXML.Canal = canal;
        validaXML.Cuenta = cuenta;
        console.log(this.urlGastosPV + 'Validafactura');
        console.log('valor de parametro de getValidacionXML');
        console.log(validaXML);
        //return this._http.get(this.urlGastos+'ConsultaValidacionXML?xml='+xml).map(res => res.json());
        return this._http.post(this.urlGastosPV + 'ValidaArchivoXML', validaXML).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getDatosGastosSolicitud = function (datosGenerales) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        var FuncionSAP = String(datosGenerales.FuncionSAP).length == 4 ? String(datosGenerales.FuncionSAP).substring(1, 4) : String(datosGenerales.FuncionSAP).length == 3 ? String(datosGenerales.FuncionSAP).substring(0, 3) : '';
        console.log('Funcion SAp');
        console.log(FuncionSAP);
        console.log('Valores=' + this.urlGastosPV + 'ConsultaComponentesDeProsupuestoPorTienda?Anio=' + datosGenerales.Anio + '&Mes=' + datosGenerales.Mes + '&Canal=' + datosGenerales.Canal + '&tienda=' + datosGenerales.NumTienda + '&Moneda=' + datosGenerales.Moneda + '&Proyecto=' + '0' + '&Puesto=' + FuncionSAP + '&Centro=' + '480673' + '&noEmpl=' + datosGenerales.NoEmpleado);
        //return this._http.get(this.urlGastos+'ConsultaComponentesDeProsupuestoPorTienda?Anio='+datosGenerales.Anio+'&Mes='+datosGenerales.Mes+'&Canal='+datosGenerales.Canal+'&tienda='+datosGenerales.NumTienda+'&Moneda='+datosGenerales.Moneda+'&Proyecto='+'0'+'&Puesto='+FuncionSAP+'&Centro='+'480673'+'&noEmpl='+datosGenerales.NoEmpleado).map(res => res.json());
        var report = {};
        report.Anio = datosGenerales.Anio; //Se comenta para pruebas
        //report.Anio=2017;  //Se comenta para pruebas
        report.Mes = datosGenerales.Mes;
        //report.Mes=12;
        report.Canal = datosGenerales.Canal;
        report.Tienda = datosGenerales.NumTienda;
        report.Moneda = datosGenerales.Moneda;
        report.Proyecto = 0;
        report.Puesto = FuncionSAP;
        report.Ccostos = datosGenerales.Ceco; //datosGenerales.Ccentro;
        console.log(report);
        return this._http.post(this.urlGastosPV + 'CentralComponenetesDePresupuestoPorTienda', report).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getDatosGastosSolicitudAutorizadas = function (datosGenerales) {
        //return this._http.get(this.urlGastos+'consultaCuentas?IdEstado='+datosCuentas.status+'&FechaInf='+datosCuentas.fechaInicio+'&FechaSup='+datosCuentas.fechaFin+'&Puesto='+datosCuentas.puesto+'&Auditor=0').map(res => res.json());
        var FuncionSAP = String(datosGenerales.FuncionSAP).length == 4 ? String(datosGenerales.FuncionSAP).substring(1, 4) : String(datosGenerales.FuncionSAP).length == 3 ? String(datosGenerales.FuncionSAP).substring(0, 3) : '';
        console.log('Funcion SAp');
        console.log(FuncionSAP);
        var report = {};
        report.anio = datosGenerales.Anio; //Se comenta para prueabas
        //report.anio=2017;
        report.mes = datosGenerales.Mes;
        //report.mes=12;
        report.canal = datosGenerales.Canal;
        report.tienda = datosGenerales.NumTienda;
        report.moneda = datosGenerales.Moneda;
        report.puesto = FuncionSAP;
        report.centro = datosGenerales.Ceco; //datosGenerales.Ccentro;
        console.log(report);
        console.log(this.urlGastosPV + 'SolicitudesAutorizadas');
        return this._http.post(this.urlGastosPV + 'SolicitudesAutorizadas', report).map(function (res) { return res.json(); });
        //return this._http.post('http://localhost:10579/ServicioGastos.svc/json/'+'SolicitudesAutorizadas',report).map(res => res.json());
    };
    /*Validacion de la solicitud de gastos*/
    ProductoService.prototype.getValidacionDatosGastosSolicitud = function (datosGenerales, egreso, datos) {
        console.log('Servicio getValidacionDatosGastosSolicitud');
        console.log(egreso);
        var ValidaAltaSolicitud = {};
        ValidaAltaSolicitud.referencia = egreso.factura;
        ValidaAltaSolicitud.pais = datosGenerales.PaisId;
        ValidaAltaSolicitud.Nocuenta = egreso.noCuenta;
        ValidaAltaSolicitud.disponible = datos.Disponible;
        ValidaAltaSolicitud.montogasto = egreso.importe;
        ValidaAltaSolicitud.piva = egreso.importeImpuesto;
        ValidaAltaSolicitud.canal = datosGenerales.Canal;
        ValidaAltaSolicitud.moneda = datosGenerales.Moneda;
        console.log(ValidaAltaSolicitud);
        console.log(this.urlGastosPV + 'ValidaAltaSolicitud');
        return this._http.post(this.urlGastosPV + 'ValidaAltaSolicitud', ValidaAltaSolicitud).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getValidacionDatosGastosSolicitudFletero = function (datosGenerales, fletero, datos) {
        console.log('Servicio getValidacionDatosGastosSolicitud');
        console.log(__WEBPACK_IMPORTED_MODULE_6__models_egreso__["a" /* egreso */]);
        var ValidaAltaSolicitud = {};
        ValidaAltaSolicitud.referencia = fletero.referencia;
        ValidaAltaSolicitud.pais = datosGenerales.PaisId;
        ValidaAltaSolicitud.Nocuenta = fletero.noCuenta;
        ValidaAltaSolicitud.disponible = datos.Disponible;
        ValidaAltaSolicitud.montogasto = fletero.importe;
        ValidaAltaSolicitud.piva = 0;
        ValidaAltaSolicitud.canal = datosGenerales.Canal;
        ValidaAltaSolicitud.moneda = datosGenerales.Moneda;
        console.log(ValidaAltaSolicitud);
        console.log(this.urlGastosPV + 'ValidaAltaSolicitud');
        return this._http.post(this.urlGastosPV + 'ValidaAltaSolicitud', ValidaAltaSolicitud).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getDetalleReimpresion = function (folio) {
        console.log('Servicio getValidacionDatosGastosSolicitud');
        console.log(__WEBPACK_IMPORTED_MODULE_6__models_egreso__["a" /* egreso */]);
        var reimpresion = {};
        reimpresion.folioADN = folio;
        //return this._http.post('http://10.51.119.93:8085/ServicioGastos.svc/json/'+'detalleSolicitudImpresion',reimpresion).map(res => res.json());
        return this._http.post(this.urlGastosPV + 'detalleSolicitudImpresion', reimpresion).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.setArchivoImprimir = function (datosGenerales, reporteGastos) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Reimpresión de Ticket</TEXT>                     " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" + reporteGastos.FolioSAP + "</TEXT>                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + reporteGastos.Parametro + ": " + reporteGastos.Referencia + "</TEXT>                          " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + reporteGastos.Empleado + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                    /*,
                    {
                        "Aplicacion": "TESTER",
                        "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
                        "NoCopias": 1
                    }*/
                ]
            };
        //alert(this.cadena); 10.54.28.114  urlPrint http:localhost:9001/WSDesTecAppsLocal/GenerarTickets
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.setArchivoImprimirSolicitud = function (datosGenerales, reporteGastos, referencia) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gasto Autorizado</TEXT>                     " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" + reporteGastos.FolioSAP + "</TEXT>                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + referencia + " : " + reporteGastos.Referencia + "</TEXT>                          " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + reporteGastos.Empleado + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                    /*,
                    {
                        "Aplicacion": "TESTER",
                        "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
                        "NoCopias": 1
                    }*/
                ]
            };
        //alert(this.cadena); 10.54.28.114
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.setArchivoImprimirSolicitud1025 = function (datosGenerales, reporteGastos, referencia) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gasto Autorizado</TEXT>                     " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" + reporteGastos.FolioSAP + "</TEXT>                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + referencia + " : " + reporteGastos.Referencia + "</TEXT>                          " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + reporteGastos.Empleado + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                    /*,
                    {
                        "Aplicacion": "TESTER",
                        "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
                        "NoCopias": 1
                    }*/
                ]
            };
        //alert(this.cadena); 10.54.28.114
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.setArchivoImprimirFiniquito = function (datosGenerales, reporteGastos) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Ticket de Finiquito</TEXT>                     " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Solicitud de Gasto Autorizada</TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">para el egreso en caja</TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio FBP:" + reporteGastos.FolioFBP + "</TEXT>                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " + reporteGastos.Referencia + "</TEXT>                          " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + reporteGastos.Empleado + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                    /*,
                    {
                        "Aplicacion": "TESTER",
                        "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
                        "NoCopias": 1
                    }*/
                ]
            };
        //alert(this.cadena);
        //return this._http.post('http://10.51.118.175:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        //this.urlPrint
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.setArchivoImprimirIngreso = function (datosGenerales, reporteGastos) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">Gastos pendientes de Comprobar en efectivo</TEXT>                     " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Ticket para Ingreso en Caja</TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" + reporteGastos.FolioSAP + "</TEXT>                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " + reporteGastos.Referencia + "</TEXT>                          " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + reporteGastos.Empleado + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                    /*,
                    {
                        "Aplicacion": "TESTER",
                        "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
                        "NoCopias": 1
                    }*/
                ]
            };
        //alert(this.cadena); 10.54.28.114
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.setArchivoImprimirEgresoADN = function (datosGenerales, reporteGastos) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        var concepto = "";
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Referencia: BANCO AZTECA ,S.A.</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">673-BK01-EKT114612V-0022526115-Apr 14-2015 7:19PM</TEXT>                     " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Egreso en Caja</TEXT>                     " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gasto Pagado</TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" + reporteGastos.FolioSAP + "</TEXT>                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " + reporteGastos.Referencia + "</TEXT>                          " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + reporteGastos.Empleado + "</TEXT>                  ";
        if (reporteGastos.NoCuenta === 1025 || reporteGastos.NoCuenta === 604910 || reporteGastos.NoCuenta === 60491) {
            concepto = "<TEXT></TEXT>                                                                                                                         " +
                "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Concepto : EXTRACCION DE BOLETAS" + "</TEXT>                  ";
        }
        this.ticket = this.ticket + concepto + "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                    /*,
                    {
                        "Aplicacion": "TESTER",
                        "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
                        "NoCopias": 1
                    }*/
                ]
            };
        //alert(this.cadena); 10.54.28.114
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.setArchivoImprimirEgresoCifra = function (datosGenerales, reporteGastos, cajaDectalleFolios) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">Egreso en Caja de Cifra Control</TEXT>                     " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gastos pagado </TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" + reporteGastos.FolioSAP + "</TEXT>                           ";
        var paso = "";
        if (cajaDectalleFolios.CifraControl != '') {
            paso = "<TEXT></TEXT>                                                                                                                         " +
                "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cifra de Control: " + cajaDectalleFolios.CifraControl + "</TEXT>                           ";
            this.ticket = this.ticket + paso;
        }
        this.ticket = this.ticket + "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Referencia : " + reporteGastos.Referencia + "</TEXT>                          " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + cajaDectalleFolios.CifraEmpleadoDestino + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">Nombre de Empleado : " + cajaDectalleFolios.NombreEmpleado + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                    /*,
                    {
                        "Aplicacion": "TESTER",
                        "Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">4336 Mega Tlahuac</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Vendedor: Sergio Valencia Reyes</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Gerente: Raul Mendez Lopez</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Telefono: 17207000</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">lunes 22 de Mayo de 2017 14:01:35</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">WS_VTAS02</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"14\" FONTTYPE = \"B\">PRESUPUESTO</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">NO. 1960679</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Venta Credito</TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">Cliente</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cliente: BERBARDO VILLAREAL LINARES</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tipo de Cliente: A</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente: \t\t 15465465</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">No.Cliente Unico: \t 1546781334823</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Direccion:</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Pallares y Portillo No. 12 Ext 94 Int 203</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Parques San Andres</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">C.P.04040 \t\t\t\t Tel:55440425</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Descripcion</HEADER><HEADER ALIGN=\"RIGHT\">Cant</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG.</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223458</CELL><CELL ALIGN=\"LEFT\">Smart TV</CELL><CELL ALIGN=\"RIGHT\">1</CELL><CELL ALIGN=\"RIGHT\">$ 12998.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total de Venta:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 25996.00</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Enganche a Pagar</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$ 0.00</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo 1</HEADER><HEADER ALIGN=\"LEFT\">Descripcion 1</HEADER><HEADER ALIGN=\"RIGHT\">Cant 1</HEADER><HEADER ALIGN=\"RIGHT\">Importe 1</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1223456 1</CELL><CELL ALIGN=\"LEFT\">Lavadora WPL 7MWT9 12KG. 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 4999.00 1</CELL></ROW><ROW><CELL ALIGN=\"LEFT\">1223457 1</CELL><CELL ALIGN=\"LEFT\">Refrigerador LG 1</CELL><CELL ALIGN=\"RIGHT\">1 1</CELL><CELL ALIGN=\"RIGHT\">$ 7999.00 1</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PLAN DE PAGO SEMANAL</TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">47 Pagos quincenales de: \t \t $96</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Ultimo pago de: \t \t \t $74</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tus pagos son dias 15 y 30 de cada mes.</TEXT><TEXT></TEXT><TEXT></TEXT><BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\"></BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"9\" FONTTYPE = \"B\">PROMOCIONES</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!Paga a Tiempo y en</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">tus proximas compras</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">ya no pagas enganche</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">paga tus abonos</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">con tu tarjeta</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"12\" FONTTYPE = \"B\">!y gana premios!</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"B\">COMPRAR CON NOSOTROS ES TU MEJOR OPCION</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Llevate el producto al momento de comparlo</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">* Protege tu producto por 2 años mas con Milenia</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienes 8 dias para evaluar el produto, sin riesgo alguno</TEXT><TEXT></TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Si tienes alguna queja comunicate al:</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">01 800 226 2006</TEXT><TEXT></TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Este formato no es un comprobante de pago, ni contrato de</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">venta, es para uso exclusivo del vendedor.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Los precios que en el consignan son válidos unicamente</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">para le fecha indicada</TEXT><TEXT></TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">HOLA</BARCODE><TEXT></TEXT><LINE POSX = \"10\" WIDTH = \"50\" BORDERWIDTH = \"0.3\"></LINE><TEXT></TEXT><TEXT></TEXT></TICKET>",
                        "NoCopias": 1
                    }*/
                ]
            };
        //alert(this.cadena); 10.54.28.114
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.setArchivoImprimirEgresoCifra925 = function (datosGenerales, reporteGastos, cajaDectalleFolios) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]("en-US");
        //this.fechaInicio=datePipe.transform(this.fechaInicio, 'dd/MM/yyyy');
        var fecha = new Date();
        //this.datosCuentasServicios.getFechaInicio(datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss'));
        //this.cadena="";
        console.log('Valor de reporteGastos dentro de setArchivoImprimir' + reporteGastos);
        console.log('Valor de datosGenerales dentro de setArchivoImprimir' + datosGenerales);
        this.ticket = "<TICKET>" +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            //"<BOX HEIGHT=\"7\" BORDERWIDTH=\"0.5\">																									   "+
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Referencia: BANCO AZTECA ,S.A.</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">673-BK01-EKT114612V-0022526115-Apr 14-2015 7:19PM</TEXT>                     " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Sistema de Gastos en Tienda</TEXT>               " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">Egreso en Caja de Cifra Control</TEXT>                     " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Tienda :" + datosGenerales.NumTienda + " " + datosGenerales.NomTienda + "</TEXT>              " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Opero: " + datosGenerales.NomEmpCorto + " en " + datosGenerales.estacion + "No. Op:" + reporteGastos.TranNo + "</TEXT>         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + datePipe.transform(fecha, 'yyyy-MMM-dd hh:mm:ss') + " </TEXT>                        " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\"></TEXT>                                                                               " +
            "<LINE POSX = \"0\" WIDTH=\"100\" BORDERWIDTH=\"0.3\"></LINE>                                                                           " +
            //	"<TEXT></TEXT>                                                                                                                         "+	
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Gastos pagado </TEXT>             " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\"></TEXT>                    " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Cuenta: " + reporteGastos.NoCuenta + " " + reporteGastos.Descripcion + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Importe: " + datosGenerales.SignoMoneda.trim() + " " + reporteGastos.ImporteGasto + " </TEXT>                             " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\">" + reporteGastos.Importeletra + "</TEXT>                             " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio ADN:" + reporteGastos.FolioAdn + " </TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Folio SAP:" + reporteGastos.FolioSAP + "</TEXT>                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Numero de Empleado : " + cajaDectalleFolios.CifraEmpleadoDestino + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Nombre de Empleado : " + "</TEXT>                  " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">" + cajaDectalleFolios.NombreEmpleado + "</TEXT>                  " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"7\" FONTTYPE = \"R\">Justificación del Gasto : </TEXT>                   " +
            "<TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"5\" FONTTYPE = \"R\"> " + reporteGastos.Justificacion + "</TEXT>                              " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"6\" FONTTYPE = \"B\">Aplico la Operacion</TEXT>                        " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"8\" FONTTYPE = \"B\">" + datosGenerales.NomEmpleado + "</TEXT>       " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<LINE POSX = \"10\" WIDTH=\"50\" BORDERWIDTH=\"0.5\"></LINE>                                                                           " +
            "<TEXT></TEXT>                                                                                                                         " +
            "<TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"Tahoma\" FONTSIZE = \"10\" FONTTYPE = \"B\">Tienda</TEXT>                                    " +
            "<TEXT></TEXT>                                                                                                                         " +
            //"</BOX>                                                                                                                                    "+	
            "</TICKET>                                                                                                                                 ";
        //alert(this.ticket);
        this.cadena =
            {
                "ListaTickets": [
                    {
                        "Aplicacion": "TESTER",
                        //"Contenido": "<TICKET><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"14\" FONTTYPE = \"B\">Presupuesto</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">No.762042</TEXT><TEXT></TEXT><BOX><TEXT  ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">CLIENTE</TEXT></BOX><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Nombre:  CLIENTE MOSTRADOR null</TEXT><TEXT></TEXT><BOX><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"10\" FONTTYPE = \"B\">DETALLE DEL PRESUPUESTO</TEXT></BOX><TABLE><ROW><HEADER ALIGN=\"LEFT\">Codigo</HEADER><HEADER ALIGN=\"LEFT\">Articulo</HEADER><HEADER ALIGN=\"RIGHT\">Cant.</HEADER><HEADER ALIGN=\"RIGHT\">Importe</HEADER></ROW><ROW><CELL ALIGN=\"LEFT\">1005441</CELL><CELL ALIGN=\"LEFT\">LED 32 HKPRO HKP32F17</CELL><CELL ALIGN=\"RIGHT\">01</CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW><ROW><CELL ALIGN=\"LEFT\"></CELL><CELL ALIGN=\"RIGHT\">Total a Pagar:</CELL><CELL ALIGN=\"RIGHT\"></CELL><CELL ALIGN=\"RIGHT\">$3,999</CELL></ROW></TABLE><TEXT></TEXT><TEXT></TEXT><TEXT></TEXT><LINE POSX = \"0\" WIDTH=\"70\" BORDERWIDTH=\"0.5\"></LINE><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"8\" FONTTYPE = \"B\">673 MEGA MIRAMONTES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Vendedor:  ROSA MARIA FLORES AVILES</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Fecha y Hora: 09/10/2017 06:01:35 p.m.</TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Nueva Elektra  del  Milenio , S.A. de C.V. y Elektra Com, S.A. de C.V.,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">con domicilio convencional para oir y recibir notificaciones en Insurgentes</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Sur 3579,Torre 3 PH, Colonia Tlalpan la Joya, Delegación Tlalpan,</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">C.P. 14000, Ciudad de México,  es responsable del tratamiento de sus </TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">Datos personales , los cuales serán  utilizados a efecto de proveerle los</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">productos  o prestarle los servicios encomendados.  Usted puede conocer</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\">nuestro Aviso de Privacidad Integral en el sitio web www.elektra.com.mx</TEXT><TEXT></TEXT><BARCODE POSX=\"10\" WIDTH=\"50\" HEIGHT=\"20\">BARRA</BARCODE><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">Este formato no es un comprobante de pago , ni contrato de</TEXT><TEXT ALIGNH = \"LEFT\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">venta, es para uso exclusivo del vendedor. Los precios que en el </TEXT><TEXT ALIGNH = \"CENTER\" FONTFAMILY = \"TAHOMA\" FONTSIZE = \"7\" FONTTYPE = \"B\">consignan son validos hasta la fecha indicada </TEXT><TEXT></TEXT><TEXT></TEXT><IMG PATH=\"\\\\10.54.28.41\\adn\\logs\\destec\\raymundo\\elektra.gif\" POSX= \"20\" WIDTH=\"30\" HEIGHT=\"20\"></IMG></TICKET>",
                        "Contenido": this.ticket,
                        "NoCopias": 1
                    }
                ]
            };
        //alert(this.cadena); 10.54.28.114
        //return this._http.post('http://localhost:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
        return this._http.post(this.urlPrint + '/GenerarTickets', this.cadena).map(function (res) { return res.json(); });
        //return this._http.post('http://10.54.28.114:9001/WSDesTecAppsLocal/GenerarTickets',this.cadena).map(res => res.json());
    };
    ProductoService.prototype.getIFolioImpresion = function (id) {
        //idticket
        //http://10.51.118.175:9001/WSDesTecAppsLocal/ImprimirTickets?idticket=222
        this.cadena = { "idticket": id };
        //return this._http.post('http://10.51.118.175:9001/WSDesTecAppsLocal/ImprimirTickets?idticket='+id,this.cadena).map(res => res.json());
        return this._http.post('http://localhost:9001/WSDesTecAppsLocal/ImprimirTickets?idticket=' + id, this.cadena).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getImagen = function (id) {
        //http://10.51.118.175:9001/WSDesTecAppsLocal/PrevisualizarTickets?IdTicket=101
        this.cadena = { "idticket": id };
        //return this._http.post('http://10.51.118.175:9001/WSDesTecAppsLocal/PrevisualizarTickets?idticket='+id,this.cadena).map(res => res.json());
        return this._http.post('http://localhost:9001/WSDesTecAppsLocal/PrevisualizarTickets?idticket=' + id, this.cadena).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.addProducto = function (producto) {
        var json = JSON.stringify(producto);
        var params = 'json=' + json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + 'productos', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.editProducto = function (id, producto) {
        var json = JSON.stringify(producto);
        var params = "json=" + json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + 'update-producto/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.deleteProducto = function (id) {
        return this._http.get(this.url + 'delete-producto/' + id)
            .map(function (res) { return res.json(); });
    };
    ProductoService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('uploads[]', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    /*Metodos servicio para los modulo de egreso*/
    ProductoService.prototype.getConsultaSolicitudesPorCifraControl = function (datosGenerales, cifraControl) {
        //var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;
        console.log('valor de datos getConsultaSolicitudesPorCifraControl');
        console.log(datosGenerales);
        console.log(cifraControl);
        var consulta = {};
        consulta.Anio = datosGenerales.Anio;
        consulta.CifraControl = cifraControl;
        console.log(consulta);
        return this._http.post(this.urlGastosPV + 'ConsultaSolicitudPorCifraControl', consulta).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getConsultaValidacionEgreso = function (folio, refempleado, tipoOperacion, cifraControl) {
        //var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;
        console.log('valor de datos getConsultaSolicitudesPorCifraControl');
        console.log(__WEBPACK_IMPORTED_MODULE_4__models_datosGenerales__["a" /* datosGenerales */]);
        console.log(cifraControl);
        var consulta = {};
        consulta.folio = folio;
        consulta.refempleado = refempleado;
        consulta.tipoOperacion = tipoOperacion;
        consulta.cifraControl = cifraControl;
        console.log(consulta);
        return this._http.post(this.urlGastosPV + 'ValidaEgresoCaja', consulta).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getConsultaValidacionEgreso925 = function (folio, refempleado, tipoOperacion, cifraControl) {
        //var url=this.urlGastos+'AltaSolicitudAfectacion?estacion='+datosGenerales.estacion+'&empleado='+datosGenerales.NoEmpleado+'&folioSAP='+'0'+'&estado=0'+'&Anio='+datosGenerales.Anio+'&Canal='+datosGenerales.Canal+'&Centro=0'+'&Cuenta='+cuenta+'&Descripcion='+descripcion+'&IdProyecto='+idProyecto+'&Importe='+importe+'&Justificacion='+Justificacion+'&Mes='+datosGenerales.Mes+'&Moneda='+datosGenerales.Moneda+'&PuestoId='+datosGenerales.FuncionSAP+'&Tienda='+datosGenerales.NumTienda+'&TipoGasto='+tipogasto+'&referencia='+referencia+'&UUID='+idProyecto;
        console.log('valor de datos getConsultaSolicitudesPorCifraControl');
        console.log(__WEBPACK_IMPORTED_MODULE_4__models_datosGenerales__["a" /* datosGenerales */]);
        console.log(cifraControl);
        var consulta = {};
        consulta.folio = folio;
        consulta.refempleado = refempleado;
        consulta.tipoOperacion = tipoOperacion;
        consulta.cifraControl = cifraControl;
        console.log(consulta);
        return this._http.post(this.urlGastosPV + 'ValidaEgresoCaja', consulta).map(function (res) { return res.json(); });
    };
    ProductoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_8__services_datosGeneralesServicio__["a" /* datosGeneralesServicio */]])
    ], ProductoService);
    return ProductoService;
}());



/***/ }),

/***/ "../../../../../src/app/views/AutorizacionPresupuesto.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<div *ngIf=\"productos\">\r\n\tCargando listado de productos...\r\n</div>\r\n<div *ngIf=\"!productos\">\r\n\t<!--<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-4 center\">\r\n\t\t\t\t<label>Fecha de Inicio</label>\r\n\t\t\t\t<datepicker-min-max-example>Cargando Fecha Inicio...</datepicker-min-max-example>\t\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4 center\">\r\n\t\t\t\t<label>Fecha de Fin</label>\r\n\t\t\t\t<fechafin>Cargando Fecha Fin ...</fechafin>\r\n\t\t</div>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-10 center\">\r\n\t\t\t\t<radio-ng-model [valor]=\"2\">Cargando Fecha Fin ...</radio-ng-model> \r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 center\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getCuentasGastos()\"><i class=\"glyphicon glyphicon-search\"> Buscar</i></button>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n\r\n -->\r\n\r\n\r\n\t<div class=\"row\" style=\"height: 300px;overflow: scroll\">\r\n\r\n\t\t<div class=\"col-md-12\" style=\"height: 350px\">\r\n\r\n\r\n\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t    <th>SELECCIONAR</th>\r\n\t\t\t\t\t<th>FOLIO ADN</th>\r\n\t\t\t\t\t<th>FOLIO</th>\r\n\t\t\t\t\t<th>CUENTA</th>\r\n\t\t\t\t\t<th>DESC. CUENTA</th>\r\n\t\t\t\t\t<th>IMPORTE</th>\r\n\t\t\t\t\t<th>FECHA</th>\r\n\t\t\t\t\t<th>ESTADO</th>\r\n\t\t\t\t\t<th>DESC. SOLICITUD</th>\r\n\t\t\t\t\t<th>JESTADO</th>\r\n\r\n\t\t\t\t\t<th>OBSERVACIONES</th>\r\n\t\t\t\t\t<th>EMPLEADO</th>\r\n\t\t\t\t\t<th>NUMPROYECTO</th>\r\n\t\t\t\t\t<th>DESCRIPCION PROY</th>\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t<!-- | filterAutorizacion: cuentas.TdaEstado  -->\r\n\t\t\t\t\t<tr *ngFor=\"let cuentas of detSolicitudAut | filterAutorizacion: filterArg \">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>-->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t \t\t   <dialog-autorizacionsolicitudes [valor]=\"cuentas\" > cargando </dialog-autorizacionsolicitudes>  \r\n\r\n\t\t\t\t\t \t\t   <!--<dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example> -->\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>{{cuentas.FolioADN}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Folio}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Cuenta}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.DescripCuenta}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Importe | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Fecha}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Estado}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.DescripSolicitud}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Jestado}}</td>\r\n\r\n\t\t\t\t\t\t<td>{{cuentas.Observaciones}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Empleado}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.NumProyecto}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.DescripProyecto}}</td>\r\n\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t<!--\t<td>\r\n\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t \t\t   <dialog-autorizacionsolicitudes [valor]=\"cuentas\" > cargando </dialog-autorizacionsolicitudes>  \r\n\r\n\t\t\t\t\t \t\t   \r\n\t\t\t\t\t\t</td> -->\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\r\n\t</div>\r\n<h3>Solicitudes No Autorizadas</h3>\r\n\t<div class=\"row\" style=\"height: 300px;overflow: scroll\">\r\n\t\t\r\n\t\t\t<div class=\"col-md-12\" style=\"height: 350px\">\r\n\r\n\t\t\t\t\r\n\r\n\r\n\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t    <th>SELECCIONAR</th>\r\n\t\t\t\t\t<th>FOLIO ADN</th>\r\n\t\t\t\t\t<th>FOLIO</th>\r\n\t\t\t\t\t<th>CUENTA</th>\r\n\t\t\t\t\t<th>DESC. CUENTA</th>\r\n\t\t\t\t\t<th>IMPORTE</th>\r\n\t\t\t\t\t<th>FECHA</th>\r\n\t\t\t\t\t<th>ESTADO</th>\r\n\t\t\t\t\t<th>DESC. SOLICITUD</th>\r\n\t\t\t\t\t<th>JESTADO</th>\r\n\r\n\t\t\t\t\t<th>OBSERVACIONES</th>\r\n\t\t\t\t\t<th>EMPLEADO</th>\r\n\t\t\t\t\t<th>NUMPROYECTO</th>\r\n\t\t\t\t\t<th>DESCRIPCION PROY</th>\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t<!-- | filterAutorizacion: cuentas.TdaEstado  -->\r\n\t\t\t\t\t<tr *ngFor=\"let cuentas of detSolicitudAutNO |filterAutorizacionNo: filterArgNo\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>-->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t \t\t   <dialog-autorizacionsolicitudes [valor]=\"cuentas\" > cargando </dialog-autorizacionsolicitudes>    \r\n\r\n\t\t\t\t\t \t\t   <!--<dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example> -->\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>{{cuentas.FolioADN}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Folio}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Cuenta}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.DescripCuenta}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Importe | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Fecha}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Estado}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.DescripSolicitud}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Jestado}}</td>\r\n\r\n\t\t\t\t\t\t<td>{{cuentas.Observaciones}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Empleado}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.NumProyecto}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.DescripProyecto}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.TdaEstado}}</td>\r\n\r\n\t\t\t\t\t<!--\t<td>\r\n\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t \t\t   <dialog-autorizacionsolicitudes [valor]=\"cuentas\" > cargando </dialog-autorizacionsolicitudes>  \r\n\r\n\t\t\t\t\t \t\t   \r\n\t\t\t\t\t\t</td> -->\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\t\t\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/Carousel.html":
/***/ (function(module, exports) {

module.exports = "<ngb-carousel>\r\n  <ng-template ngbSlide>\r\n    <img src=\"https://lorempixel.com/900/500?r=4\" alt=\"Random first slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>10 seconds between slides...</h3>\r\n      <p>This carousel uses customized default values.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img src=\"https://lorempixel.com/900/500?r=5\"  alt=\"Random second slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>No keyboard...</h3>\r\n      <p>This carousel uses customized default values.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img src=\"https://lorempixel.com/900/500?r=6\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>And no wrap after last slide.</h3>\r\n      <p>This carousel uses customized default values.</p>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/DialogContentExample.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Install Angular</h2>\r\n<mat-dialog-content>\r\n  \r\n\r\n\r\n\r\n  <h3>DETALLE DE GASTOS</h3>\r\n  \r\n      <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                  <label>Cuenta </label>\r\n              \r\n            </div>\r\n        \r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n             <div class=\"col-md-12\">\r\n\r\n\r\n              <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                          <th>No de Cuenta</th>\r\n                          <th>Descripcion</th>\r\n                          <th>Importe Total</th>\r\n\r\n                          <th>No de Cuenta</th>\r\n                          <th>Descripcion</th>\r\n                          <th>Importe Total</th>\r\n\r\n                          <th>No de Cuenta</th>\r\n                          <th>Descripcion</th>\r\n                          <th>Importe Total</th>\r\n\r\n                          <th>No de Cuenta</th>\r\n                          <th>Descripcion</th>\r\n                          <th>Importe Total</th>\r\n\r\n                          <th>No de Cuenta</th>\r\n                          \r\n                          <th></th>\r\n                       </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let reporte of ReporteGastos\">\r\n                          \r\n                          <td>{{reporte.FolioAdn}}</td>\r\n                          <td>{{reporte.FolioSAP}}</td>\r\n                          <td>{{reporte.NoCuenta }}</td>\r\n                          <td>{{reporte.ImporteGasto }}</td>\r\n                          <td>{{reporte.DescTipoGasto }}</td>\r\n                          <td>{{reporte.DescTipoGasto }}</td>\r\n\r\n                          <td>{{reporte.IdTipo }}</td>\r\n                          <td>{{reporte.Fecha }}</td>\r\n                          <td>{{reporte.Descripcion }}</td>\r\n\r\n                          <td>{{reporte.Referencia }}</td>\r\n                          <td>{{reporte.Justificacion }}</td>\r\n                          <td>{{reporte.Observaciones }}</td>\r\n\r\n                          <td>{{reporte.Empleado }}</td>\r\n\r\n                          \r\n\r\n                          <td><button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button></td>\r\n\r\n\r\n                        </tr>\r\n                    \r\n                    </tbody>\r\n                </table>  \r\n             </div>\r\n      </div>  \r\n\r\n\r\n\r\n\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Install</button>\r\n  <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n</mat-dialog-actions>\r\n-->\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n\r\n\r\n    <h2 mat-dialog-title>Install Angular</h2>\r\n<mat-dialog-content>\r\n  <h3>DEVELOP ACROSS ALL PLATFORMS</h3>\r\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build \r\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\r\n  \r\n  <h3>SPEED & PERFORMANCE</h3>\r\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web \r\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements \r\n    by building data models on RxJS, Immutable.js or another push-model.</p>\r\n  \r\n  <h3>INCREDIBLE TOOLING</h3>\r\n  <p>Build features quickly with simple, declarative templates. Extend the template language with your own \r\n    components and use a wide array of existing components. Get immediate Angular-specific help and feedback \r\n    with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather \r\n    than trying to make the code work.</p>\r\n  \r\n  <h3>LOVED BY MILLIONS</h3>\r\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure \r\n    that supports Google's largest applications.</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Install</button>\r\n  <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n</mat-dialog-actions>\r\n\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/views/Egreso.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n\r\n\r\n\r\n<div *ngIf=\"!productos\" class=\"text-center\">\r\n\t\r\n\r\n\t<div class=\"row text-center\" style=\"height: 400px;\">\r\n\r\n\t\t<div class=\"col-md-12 jumbotron\">\r\n\r\n\t\t\t\t<div class=\"row\" style=\"margin-left: auto;\">\r\n\t\t\t\t\t<div class=\"col-md-3 gasolina\" (click)=\"openDialogegreso(4)\" >\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"carousel-caption\"  style=\"padding-bottom:30px;\">\r\n\t\t\t      \t\t\t<h2><strong>Egreso de Gasolineas x Empleado</strong></h2>\r\n\t\t\t      \t\t\t\r\n\t\t\t    \t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--<div class=\"col-md-3  cuentas1025\" (click)=\"openDialogegreso(1025)\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\"  style=\"padding-bottom:80px;\">\r\n\t\t\t      \t\t\t<h2><strong>Cuenta 1025</strong></h2>\r\n\t\t\t      \t\t\t\r\n\t\t\t    \t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t<div class=\"col-md-3 cifra\" (click)=\"openDialogegreso(3)\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\"  style=\"padding-bottom:30px;\">\r\n\t\t\t      \t\t\t<h2><strong>Pago de Cifra Control</strong></h2>\r\n\t\t\t      \t\t\t\r\n\t\t\t    \t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\r\n\t\t\t\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/FechaFin.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\r\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"pickerFin\" [(ngModel)]=\"fechaInicio\" (ngModelChange)=\"obtieneValor()\"  placeholder=\"Fecha de Fin\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"pickerFin\"></mat-datepicker-toggle>\r\n  <mat-datepicker #pickerFin></mat-datepicker>\r\n</mat-form-field>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/GastosRadio.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<form class=\"example-container\" [formGroup]=\"options\">\r\n  \r\n    <div>\r\n        <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"idCuenta\" (ngModelChange)=\"getIdCuenta()\" formControlName=\"radios\">\r\n\t\t  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let cuenta of cuentas\" [value]=\"cuenta.id\">\r\n\t\t    {{cuenta.desc}}\r\n\t\t  </mat-radio-button>\r\n\r\n\t\t</mat-radio-group>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<div class=\"example-selected-value\">Your favorite season is: {{idCuenta}}</div> -->\r\n\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/views/cargar.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>"

/***/ }),

/***/ "../../../../../src/app/views/comprobacion.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<div *ngIf=\"productos\">\r\n\tCargando listado de productos...\r\n</div>\r\n<div *ngIf=\"!productos\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-6 center\">\r\n\t\t\t\t<label>Fecha de Inicio</label>\r\n\t\t\t\t<datepicker-min-max-example>Cargando Fecha Inicio...</datepicker-min-max-example>\t\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6 center\">\r\n\t\t\t\t<label>Fecha de Fin</label>\r\n\t\t\t\t<fechafin>Cargando Fecha Fin ...</fechafin>\r\n\t\t</div>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-10 center\">\r\n\t\t\t\t<radio-ng-model [valor]=\"4\">Cargando Fecha Fin ...</radio-ng-model> \r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 center\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getCuentasGastos()\"><i class=\"glyphicon glyphicon-search\"> Buscar</i></button>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n\r\n\t<div class=\"row\" style=\"height: 500px;\">\r\n\r\n\t\t<div class=\"col-md-12\">\r\n\r\n\r\n\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t<th>No de Cuenta</th>\r\n\t\t\t\t\t<th>Descripción</th>\r\n\t\t\t\t\t<th>Importe Total</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let cuentas of cuentaGastos\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>{{cuentas.NoCuenta}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Descripcion}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.importe  }}</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>-->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- <dialog-reimpresion [valor]=\"cuentas\">cargando</dialog-reimpresion> -->\r\n\t\t\t\t\t\t\t<dialog-comprobacion [valor]=\"cuentas\">cargando</dialog-comprobacion>\r\n\t\t\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\r\n\t\t\t\r\n\r\n\t</div>\r\n\r\n\t\t\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/datepicker-min-max-example.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\r\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"pickerInicio\" [(ngModel)]=\"fechaInicio\" (ngModelChange)=\"obtieneValor()\"  placeholder=\"Fecha de Inicio\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"pickerInicio\"></mat-datepicker-toggle>\r\n  <mat-datepicker #pickerInicio></mat-datepicker>\r\n</mat-form-field>\r\n\r\n\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dialog-autorizacion.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialogPrueba()\"><span class=\"btn btn-primary\"> <i class=\"glyphicon  glyphicon-list-alt\"></i></span> </button>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-autorizacion-dialog.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1 mat-dialog-title>{{titulo}}</h1> -->\r\n\r\n\r\n\r\n<div class=\"row\" *ngIf=\"ocultarTitulo\">\r\n   <div class=\"col-md-10\" >\r\n        <h1 mat-dialog-title></h1>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n   </div>\r\n   <hr/>\r\n</div>\r\n   \r\n\r\n\r\n\r\n\r\n<div mat-dialog-content style=\"overflow: hidden;\">\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">\r\n       \r\n\r\n          <div class=\"col-md-12\">\r\n                <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                  <h1>Detalle de Solicitud</h1>\r\n\r\n                      <label>\r\n                        Cuenta\r\n                        <!-- \r\n                             this.habilitarComponenetes=data.requiere.requiereXML===1?false:data.requiere.requiereXML===2?true:false;\r\n                             this.requiredValidacion=data.requiere.requiereXML===1?true:data.requiere.requiereXML===2?false:false;\r\n                        -->\r\n                        <!--&& cuenta.touched *ngIf=\"!descCuenta.valid \"-->\r\n                       <!-- <span  class=\"label label-danger\">La cuenta es obligatoria</span> -->\r\n                      </label>\r\n                      <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"detAutizacionSolicitud.Cuenta +' ' + detAutizacionSolicitud.DescripCuenta \" class=\"form-control\"   disabled=\"true\" />\r\n\r\n                      <label>\r\n                        Importe\r\n                        <!--&& && importe.touched -->\r\n                        \r\n                      </label>\r\n                      \r\n                       <!--  <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"egresos.importe\" class=\"form-control\" required  pattern=\"[0-9]\\d{0,2}+\" placeholder=\"0.00\"/>-->\r\n                      <!-- {{data.requiere.requiereXML}}\r\n                       {{requiredValidacion}}\r\n                       {{habilitarComponenetes}} -->\r\n                            <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"detAutizacionSolicitud.Importe\" class=\"form-control\"     placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                      \r\n                      <label>\r\n                        <!-- {{detAutizacionSolicitud.descTitulo}} -->\r\n                        \r\n                        {{'Observaciones'}}\r\n                      </label>\r\n\r\n                        \r\n                              <input type=\"text\" #factura=\"ngModel\" name=\"factura\" [(ngModel)]=\"detAutizacionSolicitud.Observaciones\" class=\"form-control\" placeholder=\"Agregar No. de facttura\"  disabled=\"true\"\r\n                                 />  \r\n                        \r\n                        \r\n\r\n                      <label>\r\n                        Justificacion\r\n                        \r\n                      </label>\r\n                      <input type=\"text\" #justificacion=\"ngModel\" name=\"justificacion\" [(ngModel)]=\"detAutizacionSolicitud.Jestado\" class=\"form-control\" placeholder=\"Justificación\" disabled=\"true\" />\r\n\r\n                     \r\n\r\n                      <br/>\r\n                     <!--  {{habilitarAgregar}}  ->\r\n                     \r\n                     <!--  <input type=\"submit\" value=\"{{titulo}}\" (click)=\"insertaSolicitudGastos();\" [disabled]=\"!formProducto.form.valid && !habilitarAgregar\" class=\"btn btn-success\"/>-->\r\n                      <input *ngIf=\"detAutizacionSolicitud.TdaEstado==='0'\" type=\"submit\" value=\"{{titulo}}\" (click)=\"insertaSolicitudGastos();\"  class=\"btn \r\n                      btn-success\"/>\r\n                      <input *ngIf=\"detAutizacionSolicitud.TdaEstado==='3'\" type=\"submit\" value=\"{{'Reimprimir'}}\" (click)=\"reimpresionSolicitudGastos();\"  class=\"btn \r\n                      btn-success\"/>\r\n                        <input *ngIf=\"detAutizacionSolicitud.TdaEstado===''\" type=\"submit\" value=\"{{titulo}}\" (click)=\"insertaSolicitudGastos();\"  class=\"btn \r\n                      btn-success\"/>\r\n                       \r\n                </form>\r\n\r\n          </div>\r\n\r\n\r\n</div>\r\n\r\n <div class=\"row text-center\"  *ngIf=\"pantalla\">\r\n\r\n\r\n          <div *ngIf=\"!MessageError\" >\r\n                <div class=\"row\" *ngIf=\"imprimirCorrectamente\">\r\n                      <div class=\"col-md-6\">\r\n                          <div style=\"height:400px;\">\r\n                                <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                          </div>\r\n                      </div>\r\n\r\n                    <div class=\"col-md-6 center\">\r\n                       <br/>\r\n                        <br/>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 center\">\r\n                              <label><strong>¿La impresión salio correcta?</strong></label>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-6 center\">\r\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                            </div>\r\n                            <div class=\"col-md-6 center\">\r\n                              <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" (click)=\"redirect();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                            </div>\r\n\r\n                        </div>\r\n                           \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row text-center\" style=\"margin:auto;\" *ngIf=\"!imprimirCorrectamente\" >\r\n                      <div style=\"height:65px;width: 116px;margin-left:auto;\">\r\n                        <mat-spinner></mat-spinner>\r\n                      </div>\r\n                </div>\r\n          </div>\r\n          \r\n\r\n            <div *ngIf=\"MessageError\">\r\n                 <div class=\"col-md-12\">\r\n                       <label><strong>{{mensaje}} </strong></label>\r\n                 </div>\r\n\r\n             \r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                 <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                        <button mat-dialog-close tabindex=\"-1\" (click)=\"redirect();\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                 </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"!boton\">\r\n                        <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                 </div>\r\n            </div>\r\n        </div>\r\n\r\n<div class=\"row\" >\r\n   <!--  <div class=\"col-md-12\">\r\n          <mat-dialog-actions>\r\n            <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Imprimir Reporte </button>\r\n            <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n          </mat-dialog-actions>\r\n    </div> -->\r\n\r\n\r\n\r\n</div>\r\n\r\n<hr/>\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-comprobacion-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"row text-center\" *ngIf=\"cabecero\">\r\n                      <div class=\"col-md-11\"><h1 mat-dialog-title>Aviso Importante</h1></div>\r\n                      <div class=\"col-md-1\">\r\n                             <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                                      <span aria-hidden=\"true\">&times;</span>\r\n                              </button>\r\n                      </div>\r\n                 </div>\r\n\r\n\r\n<div *ngIf=\"pantalla\">\r\n    <div *ngIf=\"!MessageError\">\r\n\r\n        <div *ngIf=\"MessageProceder\" class=\"row text-center\">\r\n                \r\n                \r\n\r\n\r\n                 <div class=\"row\">\r\n                      <div class=\"col-md-12\"> \r\n                        <label><strong>Recuerda que vas a realizar una comprobación con efectivo</strong></label>\r\n                        <br/>\r\n                        <label><strong>Debes de contar con efectivo para pasar a caja principal  </strong></label>\r\n                        <label><strong>terminando esta operación</strong></label>\r\n                        <br/>\r\n                        <label><strong>¿Estas seguro que deseas continuar?</strong></label>\r\n                       \r\n                      </div>\r\n                 </div>\r\n               <!--  <div class=\"row\">\r\n                      <div class=\"col-md-12\"> \r\n                        \r\n                        <textarea cols=\"5\" style=\"width: 100%;\" placeholder=\"Dar una observaion para la comprobacion de Gastos\"></textarea>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"col-md-12\" *ngIf=\"nombreArchivo.length > 0\">                             \r\n                            <br/>\r\n                            <div class=\"alert alert-success\">\r\n                                <strong>{{nombreArchivo}}</strong> \r\n                            </div>\r\n                       \r\n                      </div>\r\n                 </div> -->\r\n\r\n                 <br/>\r\n                 <div class=\"row\" >\r\n                    <!--  <div class=\"col-md-4 center\">\r\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"abrirFile('archivoFile');\" ><i class=\"glyphicon  glyphicon glyphicon-check\"> Validar XML</i></button> \r\n                              <div style=\"display: none;\">  \r\n                                <label>XML</label>\r\n                                <input type=\"file\" id=\"archivoFile\" class=\"form-control\" (change)=\"fileChangeEvent($event);\" accept='text/xml'/>\r\n                              </div> \r\n                      </div> -->\r\n                       <div class=\"col-md-6 \" >\r\n                              <button  type=\"button\" class=\"btn btn-success\" (click)=\"aceptarComprobacion();\"  ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Si </i></button> \r\n                      </div>\r\n                      <div class=\"col-md-6 \" >  \r\n                              <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon  glyphicon glyphicon-remove\"> No </i></button> \r\n                      </div>\r\n                      \r\n                  </div>        \r\n        </div>\r\n\r\n         <div *ngIf=\"!MessageProceder\" class=\"row\">\r\n                <div class=\"row\" *ngIf=\"imprimirCorrectamente\">\r\n                    <div class=\"col-md-6\">\r\n                        <div style=\"height:400px;\">\r\n                              <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 center\">\r\n                       <br/>\r\n                        <br/>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 center\">\r\n                              <label><strong>¿La impresión salio correcta?</strong></label>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                          <div class=\"row\">     \r\n                            <div class=\"col-md-6 center\">\r\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso();\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                            </div>\r\n                            <div class=\"col-md-6 center\">\r\n                              <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                            </div>\r\n                        </div>                     \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"!imprimirCorrectamente\" style=\"width:  130px;\">\r\n                    <mat-spinner></mat-spinner>\r\n                </div>\r\n\r\n        \r\n         </div>\r\n        \r\n    </div>\r\n\r\n      <div *ngIf=\"MessageError\" class=\"row text-center\" >\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n          \r\n               <div class=\"col-md-12\">\r\n                     <label><strong>{{mensaje}} </strong></label>\r\n               </div>\r\n\r\n           \r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n               <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n               </div>\r\n\r\n               <!-- <div class=\"col-md-12\" *ngIf=\"!boton\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n               </div> -->\r\n      </div>\r\n        \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"!pantalla\"> \r\n      <div class=\"row\">\r\n          <div class=\"col-md-10\"><h1 mat-dialog-title>Detalle de Gastos por Cuenta</h1></div>\r\n          <div class=\"col-md-2\">\r\n                 <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n          </div>\r\n      </div>\r\n      \r\n\r\n      <hr/>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <label><strong>No de Cuenta: {{data.carga.NoCuenta}}</strong> \r\n                      <span >{{data.carga.Descripcion}}</span> \r\n\r\n                      \r\n              </label>\r\n\r\n          </div>\r\n          <div class=\"col-md-6 \">\r\n                 <label ><strong>Estatus:  {{data.desc}} </strong></label>\r\n                 \r\n          </div>\r\n\r\n      <div>\r\n\r\n    <hr/>\r\n\r\n\r\n      <div mat-dialog-content>\r\n\r\n\r\n\r\n\r\n          <div class=\"row\" style=\"height: 400px;\">\r\n\r\n              <div class=\"col-md-12\">\r\n\r\n                 \r\n                  <table class=\"table table-hover\">\r\n                      <thead>\r\n                          <tr>\r\n                            <th>FolioAdn     </th>\r\n                            <th>FolioSAP        </th>\r\n                            <th>NoCuenta        </th>\r\n                            <th>ImporteGasto    </th>\r\n                            <th>DescTipoGasto   </th>\r\n                         <!--   <th>IdTipo          </th>-->\r\n                            <th>Fecha           </th>\r\n                            <th>Descripcion     </th>\r\n                            <th>Referencia      </th>\r\n                            <th>Justificacion   </th>\r\n                            <th>Observaciones   </th>\r\n                          <!--   <th>Empleado        </th> -->       \r\n                            <th>Comprobación</th>   \r\n                           </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let cuentas of data.cuentaGastos\">   <!--ReporteGastos -->\r\n                         \r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.FolioAdn      }} </td>  \r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.FolioSAP           }} </td>\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.NoCuenta           }} </td>\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.ImporteGasto       }} </td>\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.DescTipoGasto      }} </td>\r\n                      <!--   <td>{{cuentas.IdTipo             }} </td> -->\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.Fecha              }} </td>\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.Descripcion        }} </td>\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.Referencia         }} </td>\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.Justificacion      }} </td>\r\n                         <td (click)=\"mostrarMensaje(cuentas);\">{{cuentas.Observaciones      }} </td>\r\n                          <td>  <button type=\"button\" class=\"btn btn-primary\" (click)=\"mostrarMensaje(cuentas);\" [disabled]=\"consulta\" ><i class=\"glyphicon  glyphicon glyphicon-book\"></i></button> </td>\r\n\r\n                         <!--    <td>{{cuentas.Empleado           }} </td> -->\r\n                         <!--  <td>\r\n                            <button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>\r\n                            <dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example> \r\n                          </td> -->\r\n\r\n                        </tr>\r\n                        \r\n                      </tbody>\r\n                  </table>  \r\n              </div>\r\n            \r\n          </div>\r\n\r\n<hr/>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--<div class=\"row\" >\r\n     <div class=\"col-md-12\">\r\n          <mat-dialog-actions>\r\n            <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Imprimir Reporte </button>\r\n            <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n          </mat-dialog-actions>\r\n    </div>\r\n\r\n\r\n\r\n</div> -->\r\n\r\n<hr/>\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n\r\n\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-comprobacion.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\"><span class=\"btn btn-primary\"> <i class=\"glyphicon  glyphicon-list-alt\"></i></span> </button>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-egreso-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div > \r\n\r\n        <div class=\"row\" *ngIf=\"cabecero\">\r\n   <div class=\"col-md-10\">\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n   </div>\r\n</div>\r\n\r\n\r\n\r\n<div mat-dialog-content >\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">      \r\n\r\n\r\n          <div *ngIf=\"validaCentral\" class=\"col-md-12\">\r\n                  \r\n\r\n                  <form #formFolioCentral=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                      <div>\r\n                         <h2><strong>{{tituloDesc}}</strong></h2> \r\n                      </div>\r\n\r\n                     \r\n                        \r\n\r\n                        <div  *ngIf=\"tipoEgreso==3\"> \r\n                            <label>\r\n                                {{leyenda}}                         \r\n                                <span *ngIf=\"!cifraControl.valid && cifraControl.touched\" class=\"label label-danger\">  {{leyenda}} no es valida</span>                       \r\n                            </label>\r\n\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-9\" >\r\n                                    <input type=\"text\" #cifraControl=\"ngModel\" name=\"cifraControl\" [(ngModel)]=\"datosEgreso.cifraControl\" class=\"form-control\" required />\r\n                                  </div>\r\n                                  <div class=\"col-md-2\" >\r\n                                        <input type=\"submit\" value=\"{{tituloBoton}}\" (click)=\"validarFolioCentral(3);\" [disabled]=\"!formFolioCentral.form.valid\" class=\"btn btn-success\"/>    \r\n                                  </div>  \r\n                              </div>\r\n                              \r\n                              \r\n                        </div>                   \r\n                         \r\n                          <div  *ngIf=\"tipoEgreso==4\"> \r\n                             <label>\r\n                                   {{leyenda}}\r\n                                   <span *ngIf=\"!empleado.valid && empleado.touched\" class=\"label label-danger\">  {{leyenda}} no es valida</span>\r\n                        \r\n                             </label>\r\n\r\n                             <div>\r\n                                  <div class=\"col-md-9\" >\r\n                                        <input type=\"text\" #empleado=\"ngModel\" name=\"empleado\" [(ngModel)]=\"datosEgreso.empleado\" class=\"form-control\" required pattern=\"[0-9]+\"/>\r\n                                  </div>\r\n                                  <div class=\"col-md-2\" >\r\n                                        <input type=\"submit\" value=\"{{tituloBoton}}\" (click)=\"validarFolioCentral(4);\" [disabled]=\"!formFolioCentral.form.valid\" class=\"btn btn-success\"/>    \r\n                                  </div>\r\n                             </div>\r\n                                  \r\n                          </div>\r\n                  \r\n                     <br/>\r\n\r\n                              \r\n\r\n                        \r\n                       \r\n                </form>\r\n          </div>\r\n\r\n          <div *ngIf=\"!validaCentral\" class=\"col-md-12\">\r\n                <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                      <label>\r\n                        Cuenta\r\n                        \r\n                      </label>\r\n                      <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"cajaDetalleFolios.NoCuenta\" class=\"form-control\"   disabled=\"true\" />\r\n\r\n                      <label>\r\n                        Importe\r\n                        \r\n                     <!--   <span *ngIf=\"!validaImporte(importe.valid) \" class=\"label label-danger\">El importe no es correcto</span> -->\r\n                      </label>\r\n                      \r\n                       \r\n                            <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"cajaDetalleFolios.ImporteGasto\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" disabled  />\r\n                      \r\n                     \r\n                        <label>\r\n                        Número de Empleado\r\n                        <span *ngIf=\"!Empleado.valid && Empleado.touched\" class=\"label label-danger\">El empleado es obligatoria</span>\r\n                      </label>\r\n                      <input type=\"text\" #Empleado=\"ngModel\" name=\"Empleado\" [(ngModel)]=\"cajaDetalleFolios.CifraEmpleadoDestino\" class=\"form-control\" placeholder=\"Nombre\" disabled/>\r\n\r\n                       <label>\r\n                        Nombre de Empleado\r\n                        <span *ngIf=\"!NombreEmpleado.valid && NombreEmpleado.touched\" class=\"label label-danger\">El Nombre de empleado es obligatoria</span>\r\n                      </label>\r\n                      <input type=\"text\" #NombreEmpleado=\"ngModel\" name=\"NombreEmpleado\" [(ngModel)]=\"cajaDetalleFolios.NombreEmpleado\" class=\"form-control\" placeholder=\"Nombre Empleado\" disabled/>\r\n\r\n                      <label>\r\n                        Justificacion\r\n                        <span *ngIf=\"!justificacion.valid && justificacion.touched\" class=\"label label-danger\">La justificacion es obligatoria</span>\r\n                      </label>\r\n                      <input type=\"text\" #justificacion=\"ngModel\" name=\"justificacion\" [(ngModel)]=\"cajaDetalleFolios.Justificacion\" class=\"form-control\" placeholder=\"Justificación\" disabled/>\r\n\r\n                      <br/>                     \r\n\r\n                        <input type=\"submit\" value=\"{{botonTitulo}}\" (click)=\"egresoCifraxEmp();\"  class=\"btn btn-success\"/>\r\n                       \r\n                </form>\r\n\r\n          </div>\r\n\r\n\r\n</div>\r\n\r\n <div  *ngIf=\"pantalla\" >\r\n          \r\n          <!--Modal para  mostrar mensaje -->\r\n          <div class=\"row text-center\" *ngIf=\"!PantallaImprimir\"> \r\n            \r\n                   <div class=\"col-md-12\">\r\n                          <label>\r\n                            <strong>{{mensaje}} </strong>\r\n                          </label>\r\n                   </div>\r\n\r\n       \r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                   <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                          <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" >\r\n                                <i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n                   </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"!boton\" >\r\n                          <div *ngIf=\"!retornar\">\r\n                                <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertaSolicitudGastos();\"><i class=\"glyphicon glyphicon-ok\"> Continuar </i></button> \r\n\r\n                          </div>\r\n                        \r\n\r\n                          <div *ngIf=\"retornar\" >\r\n\r\n                              \r\n                                  \r\n                                  <button *ngIf=\"siniestro\"   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n                                  <button  type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button>    \r\n                                  \r\n                          </div>\r\n                                \r\n                                     \r\n                                    \r\n\r\n                   </div>\r\n\r\n\r\n          </div>\r\n     \r\n\r\n            <div class=\"row text-center\" *ngIf=\"PantallaImprimir\"  > \r\n\r\n                      <div class=\"col-md-12\" *ngIf=\"imprimirCorrectamente\">\r\n                             <div class=\"row\" >\r\n                                  <div class=\"col-md-6\">\r\n                                      <div style=\"height:500px;\">\r\n                                            <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                                      </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-md-6 center\">\r\n                                      <br/>\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-12 center\">\r\n                                            <label><strong>¿La impresión salio correcta?</strong></label>\r\n                                          </div>\r\n                                      </div>\r\n\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                                          </div>\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                                          </div>\r\n                                      </div>\r\n                                         \r\n                                  </div>\r\n                            </div>\r\n\r\n                      </div>                     \r\n\r\n\r\n                      <div *ngIf=\"!imprimirCorrectamente\" >\r\n                         \r\n                                <mat-spinner></mat-spinner>\r\n                         \r\n                              \r\n                      </div>\r\n\r\n            </div>\r\n          \r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-egreso1225-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div> \r\n        <div class=\"row\" *ngIf=\"cabecero\">\r\n   <div class=\"col-md-10\">\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n   </div>\r\n</div>\r\n\r\n<div mat-dialog-content>\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">\r\n\r\n          <div class=\"col-md-12\">\r\n                <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                      <label>\r\n                        Cuenta\r\n                        \r\n                      </label>\r\n                      <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"cajaDetalleFolios.FBPDescripcionCuenta\"  class=\"form-control\"   disabled=\"true\" />\r\n\r\n                      \r\n                      \r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                                <label>\r\n                                  Importe                       \r\n                                 <!--  <span *ngIf=\"!validaImporte(importe.valid) \" class=\"label label-danger\">El importe no es correcto</span> -->\r\n                                </label>\r\n                                <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"cajaDetalleFolios.ImporteGasto\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                          </div>\r\n                         <!-- <div class=\"col-md-6\">\r\n                                  \r\n                                </label>\r\n                                <input type=\"text\" #importeImpuesto=\"ngModel\" name=\"importeImpuesto\" [(ngModel)]=\"cajaDetalleFolios.ImporteIVA\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                          </div> -->\r\n                       </div>\r\n                            \r\n                      \r\n                      <label>\r\n                        Numero de Empleado\r\n                       <!-- <span *ngIf=\"!validaFactura(factura.valid)\" class=\"label label-danger\">La factura no es correcto</span> -->\r\n                      </label>\r\n\r\n                        \r\n                              <input type=\"text\" #factura=\"ngModel\" name=\"factura\"  [(ngModel)]=\"cajaDetalleFolios.CifraEmpleadoDestino\" class=\"form-control\" placeholder=\"Agregar No. de facttura\" \r\n                              disabled />  \r\n                        \r\n                     <label>\r\n                        Nombre de Empleado\r\n                       <!-- <span *ngIf=\"!validaFactura(factura.valid)\" class=\"label label-danger\">La factura no es correcto</span> -->\r\n                      </label>\r\n\r\n                        \r\n                              <input type=\"text\" #factura=\"ngModel\" name=\"factura\"  [(ngModel)]=\"cajaDetalleFolios.NombreEmpleado\" class=\"form-control\" placeholder=\"Agregar No. de facttura\" \r\n                              disabled />  \r\n                       \r\n\r\n                    \r\n\r\n                      <label>\r\n                        Justificacion de Gasto\r\n                        <span *ngIf=\"!justificacion.valid && justificacion.touched\" class=\"label label-danger\">La justificacion es obligatoria</span>\r\n                      </label>\r\n                      <input type=\"text\" #justificacion=\"ngModel\" name=\"justificacion\" [(ngModel)]=\"cajaDetalleFolios.Justificacion\" class=\"form-control\" placeholder=\"Justificación\" disabled />\r\n\r\n                     \r\n                      \r\n                     \r\n                     \r\n\r\n                      <br/>\r\n                     \r\n\r\n                        <input type=\"submit\" value=\"{{'Egresar'}}\" (click)=\"egresar925();\"  class=\"btn btn-success\"/>\r\n                       \r\n                </form>\r\n\r\n          </div>\r\n\r\n\r\n</div>\r\n\r\n <div  *ngIf=\"pantalla\" >\r\n          \r\n          <!--Modal para  mostrar mensaje -->\r\n          <div class=\"row text-center\" *ngIf=\"!PantallaImprimir\"> \r\n            \r\n                   <div class=\"col-md-12\">\r\n                          <label>\r\n                            <strong>{{mensaje}} </strong>\r\n                          </label>\r\n                   </div>\r\n\r\n       \r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                   <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                          <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" >\r\n                                <i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n                   </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"!boton\" >\r\n                          <div *ngIf=\"!retornar\">\r\n                                <!-- <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button>  -->\r\n\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"reimpresionSolicitudGastos();\"><i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n\r\n                          </div>\r\n                        \r\n\r\n                          <div *ngIf=\"retornar\" >\r\n\r\n                              \r\n                                  \r\n                                  <button *ngIf=\"siniestro\"   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n                                  <button  type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button>    \r\n                                  \r\n                          </div>\r\n                                \r\n                                     \r\n                                    \r\n\r\n                   </div>\r\n\r\n\r\n          </div>\r\n     \r\n\r\n            <div class=\"row text-center\" *ngIf=\"PantallaImprimir\"  > \r\n\r\n                      <div class=\"col-md-12\" *ngIf=\"imprimirCorrectamente\">\r\n                             <div class=\"row\" >\r\n                                  <div class=\"col-md-6\">\r\n                                      <div style=\"height:400px;\">\r\n                                            <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                                      </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-md-6 center\">\r\n                                      <br/>\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-12 center\">\r\n                                            <label><strong>¿La impresión salio correcta?</strong></label>\r\n                                          </div>\r\n                                      </div>\r\n\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                                          </div>\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                                          </div>\r\n                                      </div>\r\n                                         \r\n                                  </div>\r\n                            </div>\r\n\r\n                      </div>                     \r\n\r\n\r\n                      <div *ngIf=\"!imprimirCorrectamente\" style=\"width: 140px;\">\r\n                         \r\n                                <mat-spinner></mat-spinner>\r\n                         \r\n                              \r\n                      </div>\r\n\r\n            </div>\r\n          \r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-egreso925-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div> \r\n        <div class=\"row\" *ngIf=\"cabecero\">\r\n   <div class=\"col-md-10\">\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n   </div>\r\n</div>\r\n\r\n<div mat-dialog-content>\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">\r\n\r\n          <div class=\"col-md-12\">\r\n                <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                      <label>\r\n                        Cuenta\r\n                        \r\n                      </label>\r\n                      <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"cajaDetalleFolios.FBPDescripcionCuenta\"  class=\"form-control\"   disabled=\"true\" />\r\n\r\n                      \r\n                      \r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                                <label>\r\n                                  Importe                       \r\n                                 <!--  <span *ngIf=\"!validaImporte(importe.valid) \" class=\"label label-danger\">El importe no es correcto</span> -->\r\n                                </label>\r\n                                <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"cajaDetalleFolios.ImporteGasto\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                          </div>\r\n                         <!-- <div class=\"col-md-6\">\r\n                                  \r\n                                </label>\r\n                                <input type=\"text\" #importeImpuesto=\"ngModel\" name=\"importeImpuesto\" [(ngModel)]=\"cajaDetalleFolios.ImporteIVA\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                          </div> -->\r\n                       </div>\r\n                            \r\n                      \r\n                      <label>\r\n                        Numero de Empleado\r\n                       <!-- <span *ngIf=\"!validaFactura(factura.valid)\" class=\"label label-danger\">La factura no es correcto</span> -->\r\n                      </label>\r\n\r\n                        \r\n                              <input type=\"text\" #factura=\"ngModel\" name=\"factura\"  [(ngModel)]=\"cajaDetalleFolios.CifraEmpleadoDestino\" class=\"form-control\" placeholder=\"Agregar No. de facttura\" \r\n                              disabled />  \r\n                        \r\n                     <label>\r\n                        Nombre de Empleado\r\n                       <!-- <span *ngIf=\"!validaFactura(factura.valid)\" class=\"label label-danger\">La factura no es correcto</span> -->\r\n                      </label>\r\n\r\n                        \r\n                              <input type=\"text\" #factura=\"ngModel\" name=\"factura\"  [(ngModel)]=\"cajaDetalleFolios.NombreEmpleado\" class=\"form-control\" placeholder=\"Agregar No. de facttura\" \r\n                              disabled />  \r\n                       \r\n\r\n                    \r\n\r\n                      <label>\r\n                        Justificacion de Gasto\r\n                        <span *ngIf=\"!justificacion.valid && justificacion.touched\" class=\"label label-danger\">La justificacion es obligatoria</span>\r\n                      </label>\r\n                      <input type=\"text\" #justificacion=\"ngModel\" name=\"justificacion\" [(ngModel)]=\"cajaDetalleFolios.Justificacion\" class=\"form-control\" placeholder=\"Justificación\" disabled />\r\n\r\n                     \r\n                      \r\n                     \r\n                     \r\n\r\n                      <br/>\r\n                     \r\n\r\n                        <input type=\"submit\" value=\"{{'Egresar'}}\" (click)=\"egresar925();\"  class=\"btn btn-success\"/>\r\n                       \r\n                </form>\r\n\r\n          </div>\r\n\r\n\r\n</div>\r\n\r\n <div  *ngIf=\"pantalla\" >\r\n          \r\n          <!--Modal para  mostrar mensaje -->\r\n          <div class=\"row text-center\" *ngIf=\"!PantallaImprimir\"> \r\n            \r\n                   <div class=\"col-md-12\">\r\n                          <label>\r\n                            <strong>{{mensaje}} </strong>\r\n                          </label>\r\n                   </div>\r\n\r\n       \r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                   <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                          <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" >\r\n                                <i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n                   </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"!boton\" >\r\n                          <div *ngIf=\"!retornar\">\r\n                                <!-- <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button>  -->\r\n\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"reimpresionSolicitudGastos();\"><i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n\r\n                          </div>\r\n                        \r\n\r\n                          <div *ngIf=\"retornar\" >\r\n\r\n                              \r\n                                  \r\n                                  <button *ngIf=\"siniestro\"   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n                                  <button  type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button>    \r\n                                  \r\n                          </div>\r\n                                \r\n                                     \r\n                                    \r\n\r\n                   </div>\r\n\r\n\r\n          </div>\r\n     \r\n\r\n            <div class=\"row text-center\" *ngIf=\"PantallaImprimir\"  > \r\n\r\n                      <div class=\"col-md-12\" *ngIf=\"imprimirCorrectamente\">\r\n                             <div class=\"row\" >\r\n                                  <div class=\"col-md-6\">\r\n                                      <div style=\"height:400px;\">\r\n                                            <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                                      </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-md-6 center\">\r\n                                      <br/>\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-12 center\">\r\n                                            <label><strong>¿La impresión salio correcta?</strong></label>\r\n                                          </div>\r\n                                      </div>\r\n\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                                          </div>\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                                          </div>\r\n                                      </div>\r\n                                         \r\n                                  </div>\r\n                            </div>\r\n\r\n                      </div>                     \r\n\r\n\r\n                      <div *ngIf=\"!imprimirCorrectamente\" style=\"width: 140px;\">\r\n                         \r\n                                <mat-spinner></mat-spinner>\r\n                         \r\n                              \r\n                      </div>\r\n\r\n            </div>\r\n          \r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-egresoADN-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div > \r\n\r\n        <div class=\"row\" *ngIf=\"cabecero\">\r\n   <div class=\"col-md-10\">\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n   </div>\r\n</div>\r\n\r\n\r\n\r\n<div mat-dialog-content >\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">\r\n\r\n          <div class=\"col-md-12\">\r\n                <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                      <label>\r\n                        Cuenta\r\n                        \r\n                      </label>\r\n                      <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"cajaDetalleFolios.DescripcionCuenta\"  class=\"form-control\"   disabled=\"true\" />\r\n\r\n                      \r\n                      \r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                                <label>\r\n                                  Importe                       \r\n                                 <!--  <span *ngIf=\"!validaImporte(importe.valid) \" class=\"label label-danger\">El importe no es correcto</span> -->\r\n                                </label>\r\n                                <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"cajaDetalleFolios.ImporteGasto\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                                  <label>\r\n                                  IVA                       \r\n                                 <!--  <span *ngIf=\"!validaImporte(importeImpuesto.valid) \" class=\"label label-danger\">El IVA no es correcto</span> -->\r\n                                </label>\r\n                                <input type=\"text\" #importeImpuesto=\"ngModel\" name=\"importeImpuesto\" [(ngModel)]=\"cajaDetalleFolios.ImporteIVA\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                          </div>\r\n                       </div>\r\n                            \r\n                      \r\n                      <label>\r\n                        {{descrip}}\r\n                       <!-- <span *ngIf=\"!validaFactura(factura.valid)\" class=\"label label-danger\">La factura no es correcto</span> -->\r\n                      </label>\r\n\r\n                        \r\n                              <input type=\"text\" #factura=\"ngModel\" name=\"factura\" (change)=\"cambiarEstatusFactura();\" [(ngModel)]=\"cajaDetalleFolios.Referencia\" class=\"form-control\" placeholder=\"Agregar No. de facttura\" \r\n                              disabled />  \r\n                        \r\n                    \r\n                       \r\n\r\n                    \r\n\r\n                      <label>\r\n                        Justificacion de Gasto\r\n                        <span *ngIf=\"!justificacion.valid && justificacion.touched\" class=\"label label-danger\">La justificacion es obligatoria</span>\r\n                      </label>\r\n                      <input type=\"text\" #justificacion=\"ngModel\" name=\"justificacion\" [(ngModel)]=\"cajaDetalleFolios.Justificacion\" class=\"form-control\" placeholder=\"Justificación\" disabled />\r\n\r\n                     \r\n                      \r\n                     \r\n                     \r\n\r\n                      <br/>\r\n                     \r\n\r\n                        <input type=\"submit\" value=\"{{'Egresar'}}\" (click)=\"egresarADN();\"  class=\"btn btn-success\"/>\r\n                       \r\n                </form>\r\n\r\n          </div>\r\n\r\n\r\n</div>\r\n\r\n <div  *ngIf=\"pantalla\" >\r\n          \r\n          <!--Modal para  mostrar mensaje -->\r\n          <div class=\"row text-center\" *ngIf=\"!PantallaImprimir\"> \r\n            \r\n                   <div class=\"col-md-12\">\r\n                          <label>\r\n                            <strong>{{mensaje}} </strong>\r\n                          </label>\r\n                   </div>\r\n\r\n       \r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                   <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                          <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" >\r\n                                <i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n                   </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"!boton\" >\r\n                          <div *ngIf=\"!retornar\">\r\n                                <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertaSolicitudGastos();\"><i class=\"glyphicon glyphicon-ok\"> Continuar </i></button> \r\n\r\n                          </div>\r\n                        \r\n\r\n                          <div *ngIf=\"retornar\" >\r\n\r\n                              \r\n                                  \r\n                                  <button *ngIf=\"siniestro\"   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n                                  <button  type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button>    \r\n                                  \r\n                          </div>\r\n                                \r\n                                     \r\n                                    \r\n\r\n                   </div>\r\n\r\n\r\n          </div>\r\n     \r\n\r\n            <div class=\"row text-center\" *ngIf=\"PantallaImprimir\"  > \r\n\r\n                      <div class=\"col-md-12\" *ngIf=\"imprimirCorrectamente\">\r\n                             <div class=\"row\" >\r\n                                  <div class=\"col-md-6\">\r\n                                      <div style=\"height:400px;\">\r\n                                            <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                                      </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-md-6 center\">\r\n                                      <br/>\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-12 center\">\r\n                                            <label><strong>¿La impresión salio correcta?</strong></label>\r\n                                          </div>\r\n                                      </div>\r\n\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                                          </div>\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                                          </div>\r\n                                      </div>\r\n                                         \r\n                                  </div>\r\n                            </div>\r\n\r\n                      </div>                     \r\n\r\n\r\n                      <div *ngIf=\"!imprimirCorrectamente\" style=\"width: 140px;\">\r\n                         \r\n                                <mat-spinner></mat-spinner>\r\n                         \r\n                              \r\n                      </div>\r\n\r\n            </div>\r\n          \r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-empleados-dialog.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1 mat-dialog-title>{{titulo}}</h1> -->\r\n\r\n\r\n\r\n\r\n<div class=\"row\"  *ngIf=\"cabecero\">\r\n   <div class=\"col-md-10\">\r\n        <h1 mat-dialog-title>{{titulo}} </h1>        \r\n   </div>\r\n   <div class=\"col-md-2\">\r\n         <!-- <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button> -->\r\n   </div>\r\n</div>  \r\n\r\n\r\n\r\n<div mat-dialog-content style=\"overflow: hidden;\">\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">\r\n       \r\n\r\n          <div class=\"col-md-12\">\r\n                <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                 <!-- <h1>Detalle de Autorización</h1> -->\r\n\r\n                      <label>\r\n                        No de Empleado\r\n                      \r\n                      </label>\r\n                      <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"empleadoHuella.NoEmpleado\" class=\"form-control\"   disabled=\"true\" />\r\n\r\n                      <label>\r\n                        Nombre de Empleado\r\n                                        \r\n                      </label>                      \r\n                       \r\n                            <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"empleadoHuella.Nombre\" class=\"form-control\"     placeholder=\"Agregar un importe\" disabled=\"true\"  />\r\n                      \r\n                     \r\n                       \r\n                        <br/>\r\n\r\n                         <div class=\"row\" style=\"text-align: center;\">\r\n                              <div class=\"col-md-4\" style=\"text-align: center;\"><button type=\"submit\" class=\"btn btn-success\" disabled=\"false\">Consulta</button></div>\r\n                              <div class=\"col-md-4\" style=\"text-align: center;\"><button  (click)=\"redirectHome();\" type=\"button\"  mat-dialog-close tabindex=\"-1\" aria-label=\"Close\" class=\"btn btn-danger\">Salir </button> </div>\r\n\r\n                              <div class=\"col-md-4\" >\r\n                                  <button  type=\"button\" id=\"MetodoClick\"  class=\"btn btn-primary\" onclick=\"JSSetUpdate();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> JSSetUpdate</i></button> \r\n                             </div>\r\n\r\n                         </div>\r\n                       \r\n                </form>\r\n\r\n          </div>\r\n\r\n\r\n</div>\r\n\r\n <div class=\"row text-center\" *ngIf=\"pantalla\">\r\n\r\n\r\n          <div *ngIf=\"!MessageError\">\r\n                <div class=\"row\" *ngIf=\"imprimirCorrectamente\">\r\n                      <div class=\"col-md-6\">\r\n                          <div style=\"height:400px;\">\r\n                                <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                          </div>\r\n                      </div>\r\n\r\n                    <div class=\"col-md-6 center\">\r\n                       <br/>\r\n                        <br/>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 center\">\r\n                              <label><strong>¿La impresión salio correcta?</strong></label>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-6 center\">\r\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                            </div>\r\n                            <div class=\"col-md-6 center\">\r\n                              <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" (click)=\"redirect();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                            </div>\r\n\r\n                             \r\n                        </div>\r\n                           \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"!imprimirCorrectamente\" style=\"height:80px;width: 130px;\">\r\n                        <mat-spinner></mat-spinner>\r\n                </div>\r\n          </div>\r\n          \r\n\r\n            <div *ngIf=\"MessageError\">\r\n                 <div class=\"col-md-12\">\r\n                       <label><strong>{{mensaje}} </strong></label>\r\n                 </div>\r\n\r\n             \r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                 <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                        <button mat-button [mat-dialog-close]=\"data.consulta\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                 </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"!boton\">\r\n                        <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                 </div>\r\n\r\n                   \r\n\r\n            </div>\r\n        </div>\r\n\r\n<div class=\"row\" >\r\n   <!--  <div class=\"col-md-12\">\r\n          <mat-dialog-actions>\r\n            <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Imprimir Reporte </button>\r\n            <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n          </mat-dialog-actions>\r\n    </div> -->\r\n\r\n\r\n\r\n</div>\r\n\r\n<hr/>\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n\r\n\r\n<!-- Metodo para la validaacion de la huella -->\r\n\r\n    <div style=\"display: none;\" >\r\n        <button id=\"respHuella\" type=\"button\" class=\"btn btn-primary\" (click)=\"JSSetUpdate2();\"></button>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n   <div class=\"col-md-10\">\n        <h1 mat-dialog-title>Detalle del Resporte de Gastos</h1>\n   </div>\n   <div class=\"col-md-2\">\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n          </button>\n   </div>\n</div>\n\n\n<hr/>\n\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <label><strong>No de Cuenta: {{data.carga.NoCuenta>0?data.carga.NoCuenta:''}}</strong> \n                    <span>{{data.carga.Descripcion}}</span> \n\n                    \n            </label>\n\n        </div>\n        <div class=\"col-md-4\">\n               <label ><strong>Estatus:  {{data.carga.NoCuenta>0?data.desc:''}} </strong></label>\n              \n        </div>\n\n    <div>\n\n<hr/>\n\n\n<div mat-dialog-content>\n\n\n\n\n<div class=\"row\" style=\"height: 400px;\">\n\n    <div class=\"col-md-12\">\n\n       \n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                  <th>FolioAdn     </th>\n                  <th>FolioSAP        </th>\n                  <th>NoCuenta        </th>\n                  <th>ImporteGasto    </th>\n                  <th>DescTipoGasto   </th>\n                  <th>IdTipo          </th>\n                  <th>Fecha           </th>\n                  <th>Descripcion     </th>\n                  <th>Referencia      </th>\n                  <th>Justificacion   </th>    \n                  <th>Observaciones   </th> \n                <!--   <th>Empleado        </th> -->          \n                 </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let cuentas of data.cuentaGastos\"  >  <!--ReporteGastos -->\n               \n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">\n\n                <div *ngIf=\"!cuentas.existe\">{{cuentas.FolioAdn}}</div>\n                <div *ngIf=\"cuentas.existe\"> <span matTooltip=\"{{cargarEstilo(cuentas.existe)}}\">{{cuentas.FolioAdn}} </span></div>\n                   \n                    \n              </td>  \n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.FolioSAP }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.NoCuenta>0?cuentas.NoCuenta:'' }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\"> {{data.datosGenerales.SignoMoneda}} {{cuentas.ImporteGasto | number:'.2-2'}} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.DescTipoGasto      }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.IdTipo             }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.Fecha              }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.Descripcion        }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.Referencia         }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.Justificacion      }} </td>\n               <td [style.backgroundColor] = \"cuentas.existe ? '#faf2cc' : 'white'\">{{cuentas.Observaciones      }} </td>\n               <!--    <td>{{cuentas.Empleado           }} </td> -->\n               <!--  <td>\n                  <button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>\n                  <dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example> \n                </td> -->\n\n              </tr>\n              \n            </tbody>\n        </table>  \n    </div>\n  \n</div>\n\n<hr/>\n\n</div>\n\n<div class=\"row\" >\n  <!--  <div class=\"col-md-12\">\n          <mat-dialog-actions>\n            <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Imprimir Reporte </button>\n            <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\n          </mat-dialog-actions>\n    </div>\n-->\n\n\n</div>\n\n<hr/>\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-example.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\"><span class=\"btn btn-primary\"> <i class=\"glyphicon  glyphicon-list-alt\"></i></span> </button>\n\n\n\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-finiquito-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"pantalla\">\r\n\r\n     <div *ngIf=\"!MessageError\">\r\n        <div class=\"row\" *ngIf=\"imprimirCorrectamente\">\r\n              <div class=\"col-md-6\">\r\n                  <div style=\"height:400px;\">\r\n                        <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                  </div>\r\n              </div>\r\n\r\n            <div class=\"col-md-6 center\">\r\n               <br/>\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 center\">\r\n                      <label><strong>¿La impresión salio correcta?</strong></label>\r\n                    </div>\r\n                </div>\r\n                <br/>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 center\">\r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                    </div>\r\n                    <div class=\"col-md-6 center\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                    </div>\r\n                </div>\r\n                   \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"!imprimirCorrectamente\">\r\n                <mat-spinner></mat-spinner>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n      <div *ngIf=\"MessageError\" class=\"row text-center\" >\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n          \r\n               <div class=\"col-md-12\">\r\n                     <label><strong>{{mensaje}} </strong></label>\r\n               </div>\r\n\r\n           \r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n               <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n               </div>\r\n\r\n               <!-- <div class=\"col-md-12\" *ngIf=\"!boton\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n               </div> -->\r\n      </div>\r\n        \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"!pantalla\"> \r\n\r\n      <div class=\"row\">\r\n           <div class=\"col-md-10\">\r\n                 <h1 mat-dialog-title>Detalle del Finiquito</h1>\r\n\r\n           </div>\r\n           <div class=\"col-md-2\">\r\n                  <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n           </div>\r\n        </div>\r\n\r\n    \r\n      <hr/>\r\n\r\n    \r\n      <div mat-dialog-content>\r\n\r\n\r\n\r\n\r\n          <div class=\"row\" style=\"height: 400px; width: 600px;\">\r\n\r\n              <div class=\"col-md-12\">\r\n\r\n                      <form #formFiniquito=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12 \" id=\"form-producto\">\r\n\r\n                          <label>\r\n                            Cuenta\r\n                            <!--<span *ngIf=\"!nombre.valid && nombre.touched\" class=\"label label-danger\">El nombre es obligatorio</span>-->\r\n                          </label>\r\n                          <input type=\"text\" #CuentaFiniquitoDescripcion=\"ngModel\" name=\"CuentaFiniquitoDescripcion\" [(ngModel)]=\"finiquito.cuentaFiniquito +' - '+finiquito.cuentaFiniquitoDescripcion\" class=\"form-control\" required disabled=\"true\"/>\r\n\r\n                          <label>\r\n                            Importe\r\n                            <!--<span *ngIf=\"!descripcion.valid && descripcion.touched\" class=\"label label-danger\">La descripción es obligatorio</span>-->\r\n                          </label>\r\n                          <input type=\"text\" #MontoAutorizado=\"ngModel\" name=\"MontoAutorizado\" [(ngModel)]=\"finiquito.montoAutorizado\" class=\"form-control\" required disabled=\"true\"/>\r\n\r\n                          <label>\r\n                            Número de Empleado\r\n                            <!--<span *ngIf=\"!precio.valid && precio.touched\" class=\"label label-danger\">El precio no es correcto</span> -->\r\n                          </label>\r\n                          <input type=\"text\" #EmpleadoBaja=\"ngModel\" name=\"EmpleadoBaja\" [(ngModel)]=\"finiquito.empleadoBaja\" class=\"form-control\" required disabled=\"true\"/>\r\n                          \r\n                         \r\n\r\n                           <label>\r\n                            Nombre del Empleado\r\n                            <!--<span *ngIf=\"!precio.valid && precio.touched\" class=\"label label-danger\">El precio no es correcto</span> -->\r\n                          </label>\r\n                          <input type=\"text\" #EmpleadoNombre=\"ngModel\" name=\"EmpleadoNombre\" [(ngModel)]=\"finiquito.empleadoNombre\" class=\"form-control\" required disabled=\"true\"/>\r\n\r\n\r\n                          <label>\r\n                            Justificacion del Gasto\r\n                            <!--<span *ngIf=\"!precio.valid && precio.touched\" class=\"label label-danger\">El precio no es correcto</span> -->\r\n                          </label>\r\n                          <input type=\"text\" #DescripcionBaja=\"ngModel\" name=\"DescripcionBaja\" [(ngModel)]=\"finiquito.descripcionBaja\" class=\"form-control\" required disabled=\"true\"/>\r\n\r\n                          <br/>\r\n                          <input type=\"submit\" value=\"Egresar\" (click)=\"guardarSolicitudFiniquito();\"   class=\"btn btn-success\"/>\r\n                      </form>\r\n\r\n                 \r\n                 \r\n              </div>\r\n            \r\n          </div>\r\n\r\n<hr/>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--<div class=\"row\" >\r\n     <div class=\"col-md-12\">\r\n          <mat-dialog-actions>\r\n            <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Imprimir Reporte </button>\r\n            <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n          </mat-dialog-actions>\r\n    </div>\r\n\r\n\r\n\r\n</div> -->\r\n\r\n<hr/>\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n\r\n\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-finiquito.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialogPrueba()\"><span class=\"btn btn-success\"> Buscar</span> </button>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-reimpresion-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"pantalla\">\r\n<div *ngIf=\"!MessageError\">\r\n        <div class=\"row\" *ngIf=\"imprimirCorrectamente\">\r\n              <div class=\"col-md-6\">\r\n                  <div style=\"height:400px;\">\r\n                        <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                  </div>\r\n              </div>\r\n\r\n            <div class=\"col-md-6 center\">\r\n               <br/>\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 center\">\r\n                      <label><strong>¿La impresión salio correcta?</strong></label>\r\n                    </div>\r\n                </div>\r\n                <br/>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 center\">\r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                    </div>\r\n                    <div class=\"col-md-6 center\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                    </div>\r\n                </div>\r\n                   \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"!imprimirCorrectamente\">\r\n                <mat-spinner></mat-spinner>\r\n        </div>\r\n</div>\r\n\r\n<div *ngIf=\"MessageError\" class=\"row text-center\" >\r\n        \r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10\"><h1 mat-dialog-title>{{titulo}}</h1></div>\r\n          <div class=\"col-md-2\">\r\n                 <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n          </div>\r\n      </div>\r\n          \r\n               <div class=\"col-md-12\">\r\n                     <label><strong>{{mensaje}} </strong></label>\r\n               </div>\r\n\r\n           \r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n               <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n               </div>\r\n\r\n               <!-- <div class=\"col-md-12\" *ngIf=\"!boton\">\r\n                      <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n               </div> -->\r\n      </div>\r\n        \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"!pantalla\"> \r\n      <h1 mat-dialog-title>Detalle del ticket para reimpresión</h1>\r\n\r\n      <hr/>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <label><strong>No de Cuenta: {{data.carga.NoCuenta}}</strong> \r\n                      <span >{{data.carga.Descripcion}}</span> \r\n\r\n                      \r\n              </label>\r\n\r\n          </div>\r\n          <div class=\"col-md-6 \">\r\n                 <label ><strong>Estatus:  {{data.desc}} </strong></label>\r\n                 \r\n          </div>\r\n\r\n      <div>\r\n\r\n    <hr/>\r\n\r\n\r\n      <div mat-dialog-content>\r\n\r\n\r\n\r\n\r\n          <div class=\"row\" style=\"height: 400px;\">\r\n\r\n              <div class=\"col-md-12\">\r\n\r\n                 \r\n                  <table class=\"table table-hover\">\r\n                      <thead>\r\n                          <tr>\r\n                            <th>FolioAdn     </th>\r\n                            <th>FolioSAP        </th>\r\n                            <th>NoCuenta        </th>\r\n                            <th>ImporteGasto    </th>\r\n                            <th>DescTipoGasto   </th>\r\n                         <!--   <th>IdTipo          </th>-->\r\n                            <th>Fecha           </th>\r\n                            <th>Descripcion     </th>\r\n                            <th>Referencia      </th>\r\n                            <th>Justificacion   </th>\r\n                            <th>Observaciones   </th>\r\n                          <!--   <th>Empleado        </th> -->       \r\n                            <th>Reimpresión de Ticket</th>   \r\n                           </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let cuentas of data.cuentaGastos\">  <!--ReporteGastos -->\r\n                         \r\n                         <td>{{cuentas.FolioAdn      }} </td>  \r\n                         <td>{{cuentas.FolioSAP           }} </td>\r\n                         <td>{{cuentas.NoCuenta           }} </td>\r\n                         <td>{{cuentas.ImporteGasto       }} </td>\r\n                         <td>{{cuentas.DescTipoGasto      }} </td>\r\n                      <!--   <td>{{cuentas.IdTipo             }} </td> -->\r\n                         <td>{{cuentas.Fecha              }} </td>\r\n                         <td>{{cuentas.Descripcion        }} </td>\r\n                         <td>{{cuentas.Referencia         }} </td>\r\n                         <td>{{cuentas.Justificacion      }} </td>\r\n                         <td>{{cuentas.Observaciones      }} </td>\r\n                          <td>  <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"></i></button> </td>\r\n\r\n                         <!--    <td>{{cuentas.Empleado           }} </td> -->\r\n                         <!--  <td>\r\n                            <button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>\r\n                            <dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example> \r\n                          </td> -->\r\n\r\n                        </tr>\r\n                        \r\n                      </tbody>\r\n                  </table>  \r\n              </div>\r\n            \r\n          </div>\r\n\r\n<hr/>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--<div class=\"row\" >\r\n     <div class=\"col-md-12\">\r\n          <mat-dialog-actions>\r\n            <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Imprimir Reporte </button>\r\n            <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n          </mat-dialog-actions>\r\n    </div>\r\n\r\n\r\n\r\n</div> -->\r\n\r\n<hr/>\r\n\r\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n\r\n\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-solicitud-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div > \r\n\r\n        <div class=\"row\" *ngIf=\"cabecero\">\r\n   <div class=\"col-md-10\">\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n   </div>\r\n</div>\r\n\r\n\r\n\r\n<div mat-dialog-content >\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">\r\n\r\n          <div class=\"col-md-12\">\r\n                <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                      <label>\r\n                        Cuenta\r\n                        \r\n                      </label>\r\n                      <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"egresos.descCuenta\" class=\"form-control\"   disabled=\"true\" />\r\n\r\n                      <label>\r\n                        Importe\r\n                        \r\n                        <span *ngIf=\"!validaImporte(importe.valid) \" class=\"label label-danger\">El importe no es correcto</span>\r\n                      </label>\r\n                      \r\n                       \r\n                            <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"egresos.importe\" (change)=\"cambiarEstatusFactura();\" class=\"form-control\" [required]=\"requiredValidacion\" pattern=\"\"   placeholder=\"Agregar un importe\" [disabled]=\"habilitarComponenetes\"  />\r\n                      \r\n                      <label>\r\n                        {{descrip}}\r\n                        <span *ngIf=\"!validaFactura(factura.valid)\" class=\"label label-danger\">La factura no es correcto</span>\r\n                      </label>\r\n\r\n                        \r\n                              <input type=\"text\" #factura=\"ngModel\" name=\"factura\" (change)=\"cambiarEstatusFactura();\" [(ngModel)]=\"egresos.factura\" class=\"form-control\" placeholder=\"Agregar No. de facttura\" [required]=\"requiredValidacion\" \r\n                              [disabled]=\"habilitarComponenetes\"   />  \r\n                        \r\n                    \r\n                       \r\n\r\n                      <div *ngIf=\"mostrarFactura\">  \r\n                        <label>XML</label>\r\n                        <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event);\" accept='text/xml'/>\r\n\r\n                        <div *ngIf=\"detalleFactura\"  class=\"alert alert-success\" >{{valorFactura}}</div>\r\n                      </div> \r\n\r\n                      <label>\r\n                        Justificacion\r\n                        <span *ngIf=\"!justificacion.valid && justificacion.touched\" class=\"label label-danger\">La justificacion es obligatoria</span>\r\n                      </label>\r\n                      <input type=\"text\" #justificacion=\"ngModel\" name=\"justificacion\" [(ngModel)]=\"egresos.justificacion\" class=\"form-control\" placeholder=\"Justificación\" required=\"requiredValidacionJust\" />\r\n\r\n                      <div *ngIf=\"egresos.noCuenta==604910 || egresos.noCuenta==60491 || egresos.noCuenta==1025\" >\r\n                          <label>\r\n                                Concepto de Gastos\r\n                                <!-- <span *ngIf=\"!conceptoGastos.valid && conceptoGastos.touched\" class=\"label label-danger\">La justificacion es obligatoria</span> -->\r\n                          </label>  \r\n                          <input type=\"text\" #Concepto=\"ngModel\" name=\"concepto\" [(ngModel)]=\"egresos.concepto\" class=\"form-control\" placeholder=\"Concepto\" required=\"requiredValidacionJust\" />\r\n                      </div>\r\n                      \r\n                     \r\n                     \r\n\r\n                      <br/>\r\n                     \r\n\r\n                        <input type=\"submit\" value=\"{{titulo}}\" (click)=\"validarSolicitudGastos();\" [disabled]=\"!validarComponentes(formProducto.form.valid)\" class=\"btn btn-success\"/>\r\n                       \r\n                </form>\r\n\r\n          </div>\r\n\r\n\r\n</div>\r\n\r\n <div  *ngIf=\"pantalla\" >\r\n          \r\n          <!--Modal para  mostrar mensaje -->\r\n          <div class=\"row text-center\" *ngIf=\"!PantallaImprimir\"> \r\n            \r\n                   <div class=\"col-md-12\">\r\n                          <label>\r\n                            <strong>{{mensaje}} </strong>\r\n                          </label>\r\n                   </div>\r\n\r\n       \r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                   <div class=\"col-md-12\" *ngIf=\"boton\">\r\n                          <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" >\r\n                                <i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n                   </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"!boton\" >\r\n                          <div *ngIf=\"!retornar\">\r\n                                <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertaSolicitudGastos();\"><i class=\"glyphicon glyphicon-ok\"> Continuar </i></button> \r\n\r\n                          </div>\r\n                        \r\n\r\n                          <div *ngIf=\"retornar\" >\r\n\r\n                              \r\n                                  \r\n                                  <button *ngIf=\"siniestro\"   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Rechazar </i></button> \r\n                                  <button  type=\"button\" class=\"btn btn-primary\" (click)=\"mostarCarga();\"><i class=\"glyphicon glyphicon-ok\"> Aceptar </i></button>    \r\n                                  \r\n                          </div>\r\n                                \r\n                                     \r\n                                    \r\n\r\n                   </div>\r\n\r\n\r\n          </div>\r\n     \r\n\r\n            <div class=\"row text-center\" *ngIf=\"PantallaImprimir\"  > \r\n\r\n                      <div class=\"col-md-12\" *ngIf=\"imprimirCorrectamente\">\r\n                             <div class=\"row\" >\r\n                                  <div class=\"col-md-6\">\r\n                                      <div style=\"height:500px;\">\r\n                                            <img  [src]=\"'data:image/jpg;base64,'+bse64\"  width=\"100%\" >\r\n                                      </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-md-6 center\">\r\n                                      <br/>\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-12 center\">\r\n                                            <label><strong>¿La impresión salio correcta?</strong></label>\r\n                                          </div>\r\n                                      </div>\r\n\r\n                                      <br/>\r\n\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"imprimirEgreso(cuentas);\" ><i class=\"glyphicon  glyphicon glyphicon-print\"> Reimprimir</i></button> \r\n                                          </div>\r\n                                          <div class=\"col-md-6 center\">\r\n                                            <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar</i></button> \r\n                                          </div>\r\n                                      </div>\r\n                                         \r\n                                  </div>\r\n                            </div>\r\n\r\n                      </div>                     \r\n\r\n\r\n                      <div *ngIf=\"!imprimirCorrectamente\" >\r\n                         \r\n                                <mat-spinner></mat-spinner>\r\n                         \r\n                              \r\n                      </div>\r\n\r\n            </div>\r\n          \r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dialog-data-solicitud-fletes-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n   <div class=\"col-md-10\">\r\n        <h1 mat-dialog-title>{{titulo}}</h1>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n          <button  mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n   </div>\r\n</div>\r\n\r\n<hr/>\r\n\r\n\r\n<div mat-dialog-content >\r\n\r\n <div class=\"row\" *ngIf=\"!pantalla\">\r\n      \r\n          \r\n          <div class=\"col-md-12\" *ngIf=\"folioRef\">\r\n                   <form #formFolio=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-folio\">\r\n\r\n                      <div class=\"row\">\r\n                            <div class=\"col-md-8\">\r\n                                  <label>\r\n                                      Folio Referencia\r\n                        \r\n                                  </label>\r\n                                  <input type=\"text\" #folio=\"ngModel\" name=\"folio\" [(ngModel)]=\"folioReferencia\" class=\"form-control\"  pattern=\"[0-9]+\" required  placeholder=\"Agregar un folio referencia\"   />\r\n                            </div>\r\n                            <div class=\"col-md-4\" > \r\n                               <br/>\r\n                                 <input type=\"submit\" value=\"Validar\" (click)=\"validarFolioReferencia();\" [disabled]=\"!formFolio.form.valid\" class=\"btn btn-success\" />\r\n                             </div>  \r\n                      </div>\r\n                      \r\n                      \r\n                    </form>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\" *ngIf=\"!folioRef\">\r\n\r\n            <div *ngIf=\"!Busca\">\r\n                  <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n\r\n                        <label>\r\n                          Cuenta\r\n                        \r\n                        </label>\r\n                        <input type=\"text\" #descCuenta=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"fletero.descCuenta\" class=\"form-control\"   disabled=\"true\" />\r\n\r\n                        <label>\r\n                          Importe\r\n                         \r\n                        </label>\r\n                        \r\n                       \r\n                              <input type=\"text\" #importe=\"ngModel\" name=\"importe\" [(ngModel)]=\"fletero.importe\" class=\"form-control\"  pattern=\"\"   placeholder=\"Agregar un importe\" [disabled]=\"validImporte\"  />\r\n                        \r\n                       \r\n                          <label>\r\n                              Comprobante Fiscal  <strong>{{'Refenrencia del Flete: '+ fletero.referencia}}</strong>\r\n                          \r\n                        </label>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8\"> \r\n                                   <input type=\"text\" #comprobanteFiscal=\"ngModel\" name=\"comprobanteFiscal\" [(ngModel)]=\"fletero.comprobanteFiscal\" class=\"form-control\"   disabled=\"true\" />\r\n                          </div>\r\n                          <div class=\"col-md-4\">\r\n                                <input type=\"submit\" value=\"Buscar\" (click)=\"buscarDatosFiscales();\"  class=\"btn btn-success\" />\r\n\r\n                          </div>\r\n                          \r\n                        </div>\r\n                       \r\n\r\n                         <label>\r\n                          Nombre del Fletero\r\n                         \r\n                        </label>\r\n                        <input type=\"text\" #nombreFletero=\"ngModel\" name=\"nombreFletero\" [(ngModel)]=\"fletero.nombreFletero\" class=\"form-control\"   disabled=\"true\" />   \r\n                       \r\n\r\n                        <label>\r\n                          Justificacion\r\n                         <!--  <span *ngIf=\"!justificacion.valid && justificacion.touched\" class=\"label label-danger\">La justificacion es obligatoria</span> -->\r\n                        </label>\r\n                        <input type=\"text\" #justificacion=\"ngModel\" name=\"justificacion\" [(ngModel)]=\"fletero.justificacion\" class=\"form-control\" placeholder=\"Justificación\" required=\"requiredValidacionJust\" />\r\n\r\n                       \r\n\r\n                        <br/>\r\n\r\n\r\n                       \r\n                     \r\n\r\n                        <input type=\"submit\" value=\"{{titulo}}\" (click)=\"validarSolicitudGastos();\" [disabled]=\"!validarComponentes(formProducto.form.valid)\" class=\"btn btn-success\" />\r\n\r\n                         \r\n                  </form>\r\n             </div>  \r\n\r\n\r\n            <!--Metodo para realizar la busqueda de comprobantes fiscales-->\r\n            <div *ngIf=\"Busca\">\r\n                      \r\n                          \r\n                          <div *ngIf=\"!crear\"> \r\n\r\n                                      <div class=\"col-md-12\" >\r\n                                              <form #formBusqueda=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-folio\">\r\n\r\n                                                      <div class=\"row\">\r\n                                                            <div class=\"col-md-8\">\r\n                                                              <label>\r\n                                                                  Buscar                        \r\n                                                              </label>\r\n\r\n                                                             <input type=\"text\" #Busqueda=\"ngModel\" style=\"text-transform:uppercase;\" name=\"folio\" [(ngModel)]=\"busq\" class=\"form-control\"  required  placeholder=\"Agregar un folio referencia\" />                                                    \r\n                                                             </div>\r\n                                                        <div class=\"col-md-4\"> \r\n                                                              <br/>\r\n                                                            <input type=\"submit\" (click)=\"LlenarFletero();\" value=\"Crear Nuevo \"   class=\"btn btn-success\" />\r\n                                                        </div>  \r\n                                                         </div>\r\n                                                </form>\r\n                                      </div>\r\n                                               \r\n                                      \r\n\r\n                                      <div class=\"col-md-12\" >\r\n\r\n\r\n                                            <table class=\"table table-hover\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                    <th>Nombre</th>\r\n                                                    <th>RFC</th>\r\n                                                    <th>Calle</th>\r\n                                                    <th></th>\r\n                                             </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                              <tr *ngFor=\"let cuentas of detFletes |  myfilter: busq\">\r\n            \r\n                                                    <td>{{cuentas.fcNombre | uppercase}}</td>\r\n                                                    <td>{{cuentas.fcRFC | uppercase}}</td>\r\n                                                    <td>{{cuentas.fcCalle | uppercase}}</td>\r\n                                                    \r\n\r\n                                                    <td>\r\n                                                          <input type=\"submit\" (click)=\"ObtenerFleteroBusqueda(cuentas)\" value=\"Agregar\"   class=\"btn btn-success\" />\r\n\r\n                                                            <!--<dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example> -->\r\n                                                    </td>\r\n\r\n\r\n                                              </tr>       \r\n\r\n                                        </tbody>\r\n                                            </table>  \r\n                                      </div>\r\n                           </div>\r\n\r\n                           <div *ngIf=\"crear\">\r\n                                 <form #formFletero=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 col-md-12\" id=\"form-producto\">\r\n                                            <label>\r\n                                                  Nombre Completo                      \r\n                                                  <span *ngIf=\"!NombreCompleto.valid && NombreCompleto.touched\" class=\"label label-danger\">El nombre completo es obligatorio</span>\r\n                                            </label>\r\n                                            <input type=\"text\" #NombreCompleto=\"ngModel\" name=\"NombreCompleto\" [(ngModel)]=\"nuevoFletero.fcNombre\" placeholder=\"Nombre completo\" class=\"form-control\"  required />\r\n\r\n                                            <label>\r\n                                                  RFC\r\n                                                  <span *ngIf=\"!RFC.valid && RFC.touched\" class=\"label label-danger\">El RFC es obligatorio</span>\r\n                                            </label>\r\n\r\n                                            <input type=\"text\" #RFC=\"ngModel\" name=\"RFC\" [(ngModel)]=\"nuevoFletero.fcRFC\" class=\"form-control\"  pattern=\"\"   placeholder=\"RFC\" required  />\r\n                        \r\n                       \r\n                                            <label>\r\n                                                  IFE\r\n                                                  <span *ngIf=\"!IFE.valid && IFE.touched\" class=\"label label-danger\">El IFE es obligatorio</span>\r\n                                            </label>\r\n                                            <input type=\"text\" #IFE=\"ngModel\" name=\"IFE\" [(ngModel)]=\"nuevoFletero.fcIFE\" class=\"form-control\"  pattern=\"\"   placeholder=\"IFE\" required  />\r\n                                            \r\n                       \r\n\r\n                                            <label>\r\n                                              Calle \r\n                                              <span *ngIf=\"!calle.valid && calle.touched\" class=\"label label-danger\">El calle es obligatorio</span>                                             \r\n                                            </label>\r\n                                            <input type=\"text\" #calle=\"ngModel\" name=\"calle\" [(ngModel)]=\"nuevoFletero.fcCalle\" class=\"form-control\"   required />   \r\n\r\n\r\n                                            <div class=\"row\">\r\n                                                  <div class=\"col-md-6\">\r\n                                                            <label>No. Ext.  <span *ngIf=\"!noEXT.valid && noEXT.touched\" class=\"label label-danger\">El No. Ext. es obligatorio</span></label>\r\n                                                            <input type=\"text\" #noEXT=\"ngModel\" name=\"noEXT\" [(ngModel)]=\"nuevoFletero.fcNoExt\" class=\"form-control\" placeholder=\"No EXt.\"    required/>  \r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                            <label>No. Int. <span *ngIf=\"!noInt.valid && noInt.touched\" class=\"label label-danger\">El No. Int. es obligatorio</span></label>\r\n                                                            <input type=\"text\" #noInt=\"ngModel\" name=\"noInt\" [(ngModel)]=\"nuevoFletero.fcNoInt\" class=\"form-control\" placeholder=\"No Int.\"  required/>  \r\n                                                  </div>\r\n                                            </div> \r\n                                            <label>\r\n                                              Colonia \r\n                                              <span *ngIf=\"!colonia.valid && colonia.touched\" class=\"label label-danger\">La colonia es obligatorio</span>                                             \r\n                                            </label>\r\n                                            <input type=\"text\" #colonia=\"ngModel\" name=\"colonia\" [(ngModel)]=\"nuevoFletero.fcColonia\" class=\"form-control\" placeholder=\"Colonia\"  required />\r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                       <label>\r\n                                                              CP                                                  \r\n                                                              <span *ngIf=\"!CP.valid && CP.touched\" class=\"label label-danger\">Código Postal es obligatorio</span>\r\n                                                       </label>\r\n                                                        <input type=\"text\" #CP=\"ngModel\" name=\"CP\" [(ngModel)]=\"nuevoFletero.fcCP\" class=\"form-control\" placeholder=\"Código Postal\" pattern=\"[0-9]+\" required />       \r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                        <label>\r\n                                                              Poblacion                                                  \r\n                                                              <span *ngIf=\"!Poblacion.valid && Poblacion.touched\" class=\"label label-danger\">Poblacion es obligatorio</span>\r\n                                                        </label>\r\n                                                        <input type=\"text\" #Poblacion=\"ngModel\" name=\"Población\" [(ngModel)]=\"nuevoFletero.fcPoblacion\" class=\"form-control\" placeholder=\"Poblacion \" required />\r\n                                                </div>\r\n                                            </div>        \r\n                                           \r\n                                           \r\n                                            \r\n                                             <label>\r\n                                            telefono                                                  \r\n                                              <span *ngIf=\"!tele.valid && tele.touched\" class=\"label label-danger\">Numero de Telefono es obligatorio</span>\r\n                                            </label>\r\n                                            <input type=\"text\" #tele=\"ngModel\" name=\"tele\" [(ngModel)]=\"nuevoFletero.fcTelefono\" class=\"form-control\" placeholder=\"Número de Telefono \" required />\r\n\r\n\r\n                                            <br/>                     \r\n\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2\">\r\n                                                    <input type=\"submit\" value=\"Agregar\" (click)=\"mostarCarga();\" [disabled]=\"!formFletero.form.valid\" class=\"btn btn-success\" />\r\n                                                </div>\r\n                                                <div class=\"col-md-2 left\" >\r\n                                                    <input type=\"submit\" value=\"Regresar\" (click)=\"regresar();\"  class=\"btn btn-info\" />\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                </form>\r\n                           </div>\r\n            \r\n            </div>\r\n          </div>\r\n </div>\r\n\r\n\r\n <div class=\"row text-center\" *ngIf=\"pantalla\">          \r\n\r\n           <div class=\"col-md-12\">\r\n                 <label><strong>{{mensaje}} </strong></label>\r\n           </div>\r\n          \r\n\r\n           <div class=\"col-md-12\" *ngIf=\"boton\">\r\n               <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-primary\" ><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Aceptar </i></button> \r\n           </div>\r\n\r\n            <br/>\r\n            <div class=\"col-md-12\" *ngIf=\"!boton\">\r\n              \r\n\r\n\r\n                  <button   mat-dialog-close tabindex=\"-1\" type=\"button\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\"> Cancelar  </i></button> \r\n                  <label>     </label>\r\n\r\n                  <button  type=\"button\" class=\"btn btn-primary\" (click)=\"insertaSolicitudGastos();\"><i class=\"glyphicon  glyphicon glyphicon glyphicon-ok\"> Continuar </i></button> \r\n           </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"row\" >\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<hr/>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dialog-egreso.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialogegreso()\"><span class=\"btn btn-primary\"> <i class=\"glyphicon  glyphicon-list-alt\"></i></span> </button>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-solicitud-fletes.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialogPrueba()\"><span class=\"btn btn-primary\"> <i class=\"glyphicon  glyphicon-list-alt\"></i></span> </button>"

/***/ }),

/***/ "../../../../../src/app/views/dialog-solicitud.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialogPrueba()\"><span class=\"btn btn-primary\"> <i class=\"glyphicon  glyphicon-list-alt\"></i></span> </button>"

/***/ }),

/***/ "../../../../../src/app/views/dialog.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Open dialog</button>"

/***/ }),

/***/ "../../../../../src/app/views/egresos1225.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <div class=\"row\">\r\n \t\t<div class=\"col-md-12\">\r\n\t\t\t\t <form #formFolioADN=\"ngForm\"   id=\"form-egresoADN\">\r\n\t\t\t\t \t\t<h3> <strong>Validacion de Folio Central y Empleado</strong> </h3>\r\n\t\t\t\t           <div class=\"row\">\t\r\n\t\t\t\t\t               \r\n\t\t\t\t                       <div class=\"col-lg-4 col-md-4\">\r\n\t\t\t\t\t\t\t                      <label> No. de Empleado\t</label>\r\n\t\t\t\t\t\t\t                      <label>\t\t\t\t\t\t\t\t                       \r\n\t\t\t\t\t\t\t\t                        <span *ngIf=\"!FolioEmpleado.valid\" class=\"label label-danger\">El numero de empleado no tiene el formato correcto</span>\r\n\t\t\t\t\t\t\t                      </label>\r\n\t\t\t\t\t\t\t                      <input type=\"text\" #FolioEmpleado=\"ngModel\" name=\"FolioEmpleado\" [(ngModel)]=\"datosEgreso.empleado\" class=\"form-control\"  required pattern=\"[0-9]+\"/>\r\n\t\t\t\t\t                   </div>\r\n\t\t\t\t\t                   <div class=\"col-lg-4 col-md-4\">\r\n\t\t\t\t\t\t\t                      <label> Folio de Referencia\t</label>\r\n\t\t\t\t\t\t\t                      <label>\t\t\t\t\t\t\t\t                       \r\n\t\t\t\t\t\t\t\t                        <span *ngIf=\"!FolioReferencia.valid\" class=\"label label-danger\">El folio de Referencia no tiene el formato correcto</span>\r\n\t\t\t\t\t\t\t                      </label>\r\n\t\t\t\t\t\t\t                      <input type=\"text\" #FolioReferencia=\"ngModel\" name=\"FolioReferencia\" [(ngModel)]=\"datosEgreso.referencia\" class=\"form-control\"  required pattern=\"[0-9]+\"/>\r\n\t\t\t\t\t                   </div>\r\n\t\t\t\t\t\t               <div class=\"col-lg-2 col-md-2\">\r\n\r\n\t\t\t\t\t\t               \t\t <button class=\"btn btn-success\" style=\"margin-top: 9%;\" type=\"submit\" (click)=\"openDialog()\" [disabled]=\"!formFolioADN.form.valid\">\r\n\t\t\t\t\t\t               \t\t \t\t<strong><i class=\"glyphicon glyphicon-usd\"></i> Validar Cifra Control</strong>\r\n\t\t\t\t\t\t               \t\t </button>\t\t\t\t\t\t                     \t\t\t\t                      \r\n\t\t\t\t\t\t                      \r\n\t\t\t\t\t\t               </div>    \r\n\t\t\t\t\t\t    </div>     \t\r\n\t\t\t\t </form>\t\t\t\t               \r\n\r\n        </div>\r\n\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/views/egresos925.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <div class=\"row\">\r\n \t\t<div class=\"col-md-12\">\r\n\t\t\t\t <form #formFolioADN=\"ngForm\"   id=\"form-egresoADN\">\r\n\t\t\t\t \t\t<h3> <strong>Validacion de Folio Central y Empleado</strong> </h3>\r\n\t\t\t\t           <div class=\"row\">\t\r\n\t\t\t\t\t               \r\n\t\t\t\t                       <div class=\"col-lg-4 col-md-4\">\r\n\t\t\t\t\t\t\t                      <label> No. de Empleado\t</label>\r\n\t\t\t\t\t\t\t                      <label>\t\t\t\t\t\t\t\t                       \r\n\t\t\t\t\t\t\t\t                        <span *ngIf=\"!FolioEmpleado.valid\" class=\"label label-danger\">El numero de empleado no tiene el formato correcto</span>\r\n\t\t\t\t\t\t\t                      </label>\r\n\t\t\t\t\t\t\t                      <input type=\"text\" #FolioEmpleado=\"ngModel\" name=\"FolioEmpleado\" [(ngModel)]=\"datosEgreso.empleado\" class=\"form-control\"  required pattern=\"[0-9]+\"/>\r\n\t\t\t\t\t                   </div>\r\n\t\t\t\t\t                   <div class=\"col-lg-4 col-md-4\">\r\n\t\t\t\t\t\t\t                      <label> Folio de Referencia\t</label>\r\n\t\t\t\t\t\t\t                      <label>\t\t\t\t\t\t\t\t                       \r\n\t\t\t\t\t\t\t\t                        <span *ngIf=\"!FolioReferencia.valid\" class=\"label label-danger\">El folio de Referencia no tiene el formato correcto</span>\r\n\t\t\t\t\t\t\t                      </label>\r\n\t\t\t\t\t\t\t                      <input type=\"text\" #FolioReferencia=\"ngModel\" name=\"FolioReferencia\" [(ngModel)]=\"datosEgreso.referencia\" class=\"form-control\"  required pattern=\"[0-9]+\"/>\r\n\t\t\t\t\t                   </div>\r\n\t\t\t\t\t\t               <div class=\"col-lg-2 col-md-2\">\r\n\r\n\t\t\t\t\t\t               \t\t <button class=\"btn btn-success\" style=\"margin-top: 9%;\" type=\"submit\" (click)=\"openDialog()\" [disabled]=\"!formFolioADN.form.valid\">\r\n\t\t\t\t\t\t               \t\t \t\t<strong><i class=\"glyphicon glyphicon-usd\"></i> Validar Cifra Control</strong>\r\n\t\t\t\t\t\t               \t\t </button>\t\t\t\t\t\t                     \t\t\t\t                      \r\n\t\t\t\t\t\t                      \r\n\t\t\t\t\t\t               </div>    \r\n\t\t\t\t\t\t    </div>     \t\r\n\t\t\t\t </form>\t\t\t\t               \r\n\r\n        </div>\r\n\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/views/egresosADN.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n\r\n <div class=\"row\">\r\n \t\t<div class=\"col-md-12\">\r\n\t\t\t\t <form #formFolioADN=\"ngForm\"   id=\"form-egresoADN\">\r\n\t\t\t\t           <div class=\"row\">\t\r\n\t\t\t\t\t               \r\n\t\t\t\t                       <div class=\"col-lg-8 col-md-8\">\r\n\t\t\t\t\t\t\t                      <label> Folio ADN\t</label>\r\n\t\t\t\t\t\t\t                      <label>\t\t\t\t\t\t\t\t                       \r\n\t\t\t\t\t\t\t\t                        <span *ngIf=\"!FolioADN.valid\" class=\"label label-danger\">El folio ADN  no tiene el formato correcto</span>\r\n\t\t\t\t\t\t\t                      </label>\r\n\t\t\t\t\t\t\t                      <input type=\"text\" #FolioADN=\"ngModel\" name=\"FolioADN\" [(ngModel)]=\"folioADN\" class=\"form-control\"  required pattern=\"[0-9]+\"/>\r\n\t\t\t\t\t                   </div>\r\n\t\t\t\t\t\t               <div class=\"col-lg-4 col-md-4\">\r\n\r\n\t\t\t\t\t\t               \t\t <button class=\"btn btn-success\" style=\"margin-top: 7%;\" type=\"submit\" (click)=\"openDialog()\" [disabled]=\"!formFolioADN.form.valid\">\r\n\t\t\t\t\t\t               \t\t \t\t<strong><i class=\"glyphicon glyphicon-usd\"></i> Egresar</strong>\r\n\t\t\t\t\t\t               \t\t </button>\r\n\t\t\t\t\t\t                     \t\t\t\t                      \r\n\t\t\t\t\t\t                      \r\n\t\t\t\t\t\t               </div>    \r\n\t\t\t\t\t\t    </div>     \t\r\n\t\t\t\t </form>\t\t\t\t               \r\n\r\n        </div>\r\n\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/views/error.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10 col-lg-offset-1\">\r\n\t<div class=\"jumbotron\">\r\n\t\t<h2>{{titulo}}</h2>\r\n\t\t<p>La página que intentas cargar no existe, prueba con estos botones:</p>\r\n\t\t<p>\r\n\t\t\t<a [routerLink]=\"['/productos']\" class=\"btn btn-lg btn-primary\">Ver productos</a>\r\n\t\t\t<a [routerLink]=\"['/crear-producto']\" class=\"btn btn-lg btn-success\">Añadir productos</a>\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/home.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10 col-lg-offset-1\">\r\n\t<div class=\"jumbotron\">\r\n\t\t<!--<h2>{{titulo}}</h2>\r\n\t\t<p>Gestiona tus productos con la aplicación web SPA creada con Angular desde cero</p>\r\n\t\t<p>\r\n\t\t\t<a [routerLink]=\"['/productos']\" class=\"btn btn-lg btn-primary\">Ver productos</a>\r\n\t\t\t<a [routerLink]=\"['/crear-producto']\"  class=\"btn btn-lg btn-success\">Añadir productos</a>\r\n\t\t</p> -->\r\n\r\n\t\t<div style=\"width: 100%;\">\r\n\t\t\t    <!--  <img  src=\"../assets/images/gastos.png\" alt=\"Random first slide\" style=\"width: 100%;\">  Desarrollo-->\r\n\t\t\t    <img  src=\"assets/images/gastos.png\" alt=\"Random first slide\" style=\"width: 100%;\"> <!-- Produccion -->\r\n\t\t\t    <div class=\"carousel-caption\" style=\"padding-bottom:80px;\">\r\n\t\t\t      <h3><strong>Gasto</strong></h3>\r\n\t\t\t      <p>Un gasto es una partida que disminuye el beneficio de la empresa o, en su defecto, aumenta la deuda o pérdida. El gasto siempre implicará el desembolso de una cantidad de dinero, ya sea en efectivo o por otro medio de pago, y llevará asociada una contraprestación.</p>\r\n\t\t\t    </div>\r\n  \t\t</div>\r\n\r\n\t\t<!--<carousel>Cargando...</carousel>  -->\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\t\t\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/message.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"center\" style=\"text-align: center;\">\n<h1 mat-dialog-title>{{data.mensaje.titulo}}</h1>\n\n\n\n<div mat-dialog-content>\n  <strong>{{data.mensaje.comentario}}</strong>\n <!-- <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.mensaje.titulo\">\n  </mat-form-field>. -->\n</div>\n\n<br/>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 \" style=\"text-align: center;\">\n\t\t\t\t<button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Aceptar</button>\n\t\t</div>\n\t  \n\t</div>\n <!-- <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button> -->\n\n\n</div>\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/views/producto-add.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-6\" id=\"form-producto\">\r\n\r\n\t<label>\r\n\t\tNombre\r\n\t\t<span *ngIf=\"!nombre.valid && nombre.touched\" class=\"label label-danger\">El nombre es obligatorio</span>\r\n\t</label>\r\n\t<input type=\"text\" #nombre=\"ngModel\" name=\"nombre\" [(ngModel)]=\"producto.nombre\" class=\"form-control\" required />\r\n\r\n\t<label>\r\n\t\tDescripción\r\n\t\t<span *ngIf=\"!descripcion.valid && descripcion.touched\" class=\"label label-danger\">La descripción es obligatorio</span>\r\n\t</label>\r\n\t<textarea #descripcion=\"ngModel\" name=\"descripcion\" [(ngModel)]=\"producto.descripcion\" class=\"form-control\" required></textarea>\r\n\r\n\t<label>\r\n\t\tPrecio\r\n\t\t<span *ngIf=\"!precio.valid && precio.touched\" class=\"label label-danger\">El precio no es correcto</span>\r\n\t</label>\r\n\t<input type=\"text\" #precio=\"ngModel\" name=\"precio\" [(ngModel)]=\"producto.precio\" class=\"form-control\" required pattern=\"[0-9]+\"/>\r\n\r\n\t<label>Imagen</label>\r\n\t<div *ngIf=\"is_edit\">\r\n\t\t<img src=\"http://localhost/curso-angular4-backend/uploads/{{producto.imagen}}\" width=\"60\"/>\r\n\t</div>\r\n\t<input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\"/>\r\n\r\n\t<br/>\r\n\t<input type=\"submit\" value=\"{{titulo}}\" [disabled]=\"!formProducto.form.valid\" class=\"btn btn-success\"/>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/views/producto-detail.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!producto\">\r\n\t<p>Cargando producto...</p>\r\n</div>\r\n<div class=\"row\" *ngIf=\"producto\">\r\n\t<div class=\"col-lg-4\" *ngIf=\"producto.imagen\">\r\n\t\t<br>\r\n\t\t<img src=\"http://localhost/curso-angular4-backend/uploads/{{producto.imagen}}\" class=\"producto_imagen\"/>\r\n\t</div>\r\n\t<div class=\"col-lg-8\">\r\n\t\t<h3>{{producto.nombre}}</h3>\r\n\t\t<p><strong>{{producto.precio}} €</strong></p>\r\n\t\t<p>{{producto.descripcion}}</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/productos-list.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<div *ngIf=\"productos\">\r\n\tCargando listado de productos...\r\n</div>\r\n<div *ngIf=\"!productos\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-6 center\">\r\n\t\t\t\t<label>Fecha de Inicio</label>\r\n\t\t\t\t<datepicker-min-max-example>Cargando Fecha Inicio...</datepicker-min-max-example>\t\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6 center\">\r\n\t\t\t\t<label>Fecha de Fin</label>\r\n\t\t\t\t<fechafin>Cargando Fecha Fin ...</fechafin>\r\n\t\t</div>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-10 center\">\r\n\t\t\t\t<radio-ng-model [valor]=\"1\">Cargando Fecha Fin ...</radio-ng-model> \r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 center\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getCuentasGastos()\"><i class=\"glyphicon glyphicon-search\"> Buscar</i></button>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n\r\n\t<div class=\"row\" style=\"height: 400px;overflow: scroll;\">\r\n\r\n\t\t<div class=\"col-md-12\">\r\n\r\n\r\n\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t<th>No de Cuenta</th>\r\n\t\t\t\t\t<th>Descripción</th>\r\n\t\t\t\t\t<th>Importe Total</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let cuentas of cuentaGastos\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>{{cuentas.NoCuenta>0?cuentas.NoCuenta:''}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Descripcion}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Importe| number:'.2-2'}}</td>  \r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>-->\r\n\t\t\t\t\t\t\t<dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example>\r\n\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\r\n\t\t\t\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/redirect.html":
/***/ (function(module, exports) {

module.exports = "<h1></h1>"

/***/ }),

/***/ "../../../../../src/app/views/reimpresion.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<div *ngIf=\"productos\">\r\n\tCargando listado de productos...\r\n</div>\r\n<div *ngIf=\"!productos\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-6 center\">\r\n\t\t\t\t<label>Fecha de Inicio</label>\r\n\t\t\t\t<datepicker-min-max-example>Cargando Fecha Inicio...</datepicker-min-max-example>\t\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6 center\">\r\n\t\t\t\t<label>Fecha de Fin</label>\r\n\t\t\t\t<fechafin>Cargando Fecha Fin ...</fechafin>\r\n\t\t</div>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-10 center\">\r\n\t\t\t\t<radio-ng-model [valor]=\"2\">Cargando Fecha Fin ...</radio-ng-model> \r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 center\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getCuentasGastos()\"><i class=\"glyphicon glyphicon-search\"> Buscar</i></button>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n\r\n\t<div class=\"row\" style=\"height: 500px;\">\r\n\r\n\t\t<div class=\"col-md-12\">\r\n\r\n\r\n\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t<th>No de Cuenta</th>\r\n\t\t\t\t\t<th>Descripción</th>\r\n\t\t\t\t\t<th>Importe Total</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let cuentas of cuentaGastos\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>{{cuentas.NoCuenta}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Descripcion}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.importe  }}</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>-->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<dialog-reimpresion [valor]=\"cuentas\">cargando</dialog-reimpresion>\r\n\t\t\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\r\n\t\t\t\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/solicitudFiniquito.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<div *ngIf=\"productos\">\r\n\tCargando listado de productos...\r\n</div>\r\n<div *ngIf=\"!productos\">\r\n\t<!--<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-4 center\">\r\n\t\t\t\t<label>Fecha de Inicio</label>\r\n\t\t\t\t<datepicker-min-max-example>Cargando Fecha Inicio...</datepicker-min-max-example>\t\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4 center\">\r\n\t\t\t\t<label>Fecha de Fin</label>\r\n\t\t\t\t<fechafin>Cargando Fecha Fin ...</fechafin>\r\n\t\t</div>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-10 center\">\r\n\t\t\t\t<radio-ng-model [valor]=\"2\">Cargando Fecha Fin ...</radio-ng-model> \r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 center\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getCuentasGastos()\"><i class=\"glyphicon glyphicon-search\"> Buscar</i></button>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n\r\n -->\r\n\r\n\r\n <div class=\"row\">\r\n \t\t\t\t <div class=\"col-md-12\">\r\n\t\t\t\t                <form #formProducto=\"ngForm\"   id=\"form-producto\">\r\n\t\t\t\t                \t<div class=\"row\">\t\r\n\t\t\t\t\t                      <div class=\"col-lg-8 col-md-8\">\r\n\t\t\t\t\t\t\t                      <label>\r\n\t\t\t\t\t\t\t                        Folio FBP\r\n\t\t\t\t\t\t\t                      \r\n\t\t\t\t\t\t\t                      </label>\r\n\t\t\t\t\t\t\t                      <label>\r\n\t\t\t\t\t\t\t\t                       \r\n\t\t\t\t\t\t\t\t                        <span *ngIf=\"!FolioFBP.valid\" class=\"label label-danger\">El importe no es correcto</span>\r\n\t\t\t\t\t\t\t                      </label>\r\n\t\t\t\t\t\t\t                      <input type=\"text\" #FolioFBP=\"ngModel\" name=\"descCuenta\" [(ngModel)]=\"folioFBP\" class=\"form-control\"  required pattern=\"[0-9]+\"  />\r\n\t\t\t\t\t                       </div>\r\n\t\t\t\t                     \r\n\t\t\t\t\t\t                    <div class=\"col-lg-4 col-md-4\">\r\n\t\t\t\t\t\t                      <input style=\"margin-top: 7%;\" type=\"submit\" (click)=\"openDialog()\" value=\"cargar\"  [disabled]=\"!formProducto.form.valid\" class=\"btn btn-success\"/>\r\n\r\n\t\t\t\t\t\t                      \r\n\t\t\t\t\t\t                      \r\n\t\t\t\t\t\t                    </div>\r\n\t\t\t\t\t\t             </div>\r\n\t\t\t\t                </form>\r\n\r\n        \t\t\t\t  </div>\r\n\r\n \t\t\t\t\t\t \r\n\r\n\r\n \t\r\n </div>\r\n\r\n\r\n<!--Se comenta el codigo para hacer -->\r\n\t<!--<div class=\"row\" style=\"height: 500px;\">\r\n\r\n\t\t<div class=\"col-md-12\">\r\n\r\n\r\n\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t<th>No de Cuenta</th>\r\n\t\t\t\t\t<th>Descripción</th>\r\n\t\t\t\t\t<th>Presupuesto</th>\r\n\t\t\t\t\t<th>Afectados</th>\r\n\t\t\t\t\t<th>Bloqueado</th>\r\n\t\t\t\t\t<th>Ampliado</th>\r\n\t\t\t\t\t<th>Compensado</th>\r\n\t\t\t\t\t<th>Disponible</th>\r\n\t\t\t\t\t<th>Solicitado</th>\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let cuentas of cuentasSolicitud\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>{{cuentas.cuenta}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.descripcion}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.presupuesto}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.afectados}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.bloqueado}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.ampliado}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.compensado}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.disponible}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.solicitado}}</td>\r\n\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t \t\t   <dialog-solicitudes [valor]=\"cuentas\" > cargando </dialog-solicitudes>  \r\n\r\n\t\t\t\t\t \t\t  \r\n\t\t\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\r\n\t\t\t\r\n\r\n\t</div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/solicitudPresupuesto.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{titulo}}</h3>\r\n<hr/>\r\n\r\n<div *ngIf=\"productos\">\r\n\tCargando listado de productos...\r\n</div>\r\n<div *ngIf=\"!productos\">\r\n\t<!--<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-4 center\">\r\n\t\t\t\t<label>Fecha de Inicio</label>\r\n\t\t\t\t<datepicker-min-max-example>Cargando Fecha Inicio...</datepicker-min-max-example>\t\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4 center\">\r\n\t\t\t\t<label>Fecha de Fin</label>\r\n\t\t\t\t<fechafin>Cargando Fecha Fin ...</fechafin>\r\n\t\t</div>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-10 center\">\r\n\t\t\t\t<radio-ng-model [valor]=\"2\">Cargando Fecha Fin ...</radio-ng-model> \r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 center\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getCuentasGastos()\"><i class=\"glyphicon glyphicon-search\"> Buscar</i></button>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n\r\n -->\r\n\r\n\t<div class=\"row\" style=\"height: 400px;overflow: scroll;\">\r\n\r\n\t\t<div class=\"col-md-12\">\r\n\r\n\r\n\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t<th>No de Cuenta</th>\r\n\t\t\t\t\t<th>Descripción</th>\r\n\t\t\t\t\t<th>Presupuesto</th>\r\n\t\t\t\t\t<th>Afectados</th>\r\n\t\t\t\t\t<th>Bloqueado</th>\r\n\t\t\t\t\t<th>Ampliado</th>\r\n\t\t\t\t\t<th>Compensado</th>\r\n\t\t\t\t\t<th>Disponible</th>\r\n\t\t\t\t\t<th>Solicitado</th>\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let cuentas of cuentasSolicitud\"> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>{{cuentas.Cuenta}}</td>\r\n\t\t\t\t\t\t<td>{{cuentas.Descripcion}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Presupuesto | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Afectado | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Bloqueado | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Ampliado | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Compensado | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Disponible | number:'.2-2'}}</td>\r\n\t\t\t\t\t\t<td>{{datosGenerales.SignoMoneda}}{{cuentas.Solicitado | number:'.2-2'}}</td>\r\n\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon  glyphicon-list-alt\"></i></button>-->\r\n\t\t\t\t\t\t\t<div *ngIf=\"cuentas.Cuenta!=606080 && cuentas.Cuenta!=620156\">\r\n\t\t\t\t\t \t\t   <dialog-solicitudes [valor]=\"cuentas\"> cargando </dialog-solicitudes>  \r\n\t\t\t\t\t \t\t</div>\r\n\t\t\t\t\t \t\t<div *ngIf=\"cuentas.Cuenta==606080 || cuentas.Cuenta==620156\">\r\n\t\t\t\t\t \t\t   \t<dialog-fletes [valor]=\"cuentas\">cargando</dialog-fletes>  \r\n\t\t\t\t\t \t\t</div>\r\n\t\t\t\t\t \t\t   <!--<dialog-data-example [valor]=\"cuentas\">cargando</dialog-data-example> -->\r\n\t\t\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\r\n\t\t\t\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/tooltip-general.html":
/***/ (function(module, exports) {

module.exports = "<span matTooltip=\"{{Mensaje}}\">{{titulo}}</span>"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map