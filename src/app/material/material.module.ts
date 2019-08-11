import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  exports: [
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
