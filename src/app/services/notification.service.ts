import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(   public snackBar: MatSnackBar) { }

  /**
   * Notify if error
   */
  public notifyIfError(message): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['red-snackbar']
    });
  }
}
