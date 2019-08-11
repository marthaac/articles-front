import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatSnackBarModule
  ],
  exports: [
    MatListModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
