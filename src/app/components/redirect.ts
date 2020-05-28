import {Component, Inject} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'loginForm',
    templateUrl: '../views/redirect.html'
    
})

export class RedirectComponent {

    constructor(private router: Router) { 
    		console.log('Carga se va redireccionar');
    		this.router.navigate(['autorizacion']);

    }

    ngInit() {
        this.router.navigate(['autorizacion']);
    }

}