import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'cargar',
  templateUrl: '../views/cargar.html',
  styleUrls: ['../css/cargar.css'],
})
export class DialogCargar {

   constructor(
    public dialogRefCarga: MatDialogRef<DialogCargar>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRefCarga.close();
  }

}