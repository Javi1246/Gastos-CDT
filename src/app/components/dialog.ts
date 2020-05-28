import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
//import {ReporteGastosComponent}  from  '../components/dialog-component';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: '../views/dialog.html',
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '450px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: '../views/DialogContentExample.html',
})
export class DialogContentExampleDialog {}



/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */