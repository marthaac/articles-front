import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
