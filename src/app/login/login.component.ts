// login.component.ts

import { Component, Inject, NgModule } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'; // Add this import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  logout() {
    throw new Error('Method not implemented.');
  }
  userId: any;
  password: any;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLoginClick(): void {
    // Check user credentials
    if (this.userId === '1' && this.password === 'admin') {
      // Store credentials in localStorage
      localStorage.setItem('userId', this.userId);
      localStorage.setItem('password', this.password);

      // Close the login dialog
      this.dialogRef.close();
    } else if (this.userId === '2' && this.password === 'guest') {
      // Store credentials in localStorage
      localStorage.setItem('userId', this.userId);
      localStorage.setItem('password', this.password);

      // Close the login dialog
      this.dialogRef.close();
    }
  }
}

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
