import { Component, Inject, NgModule } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    userId: any;
    password: any;
    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
    onNoClick(): void {
        this.dialogRef.close();
    }
};

@NgModule({
    imports: [
      FormsModule,
      MatButtonModule,
      MatDialogModule,
    ],
    declarations: [
      LoginComponent
    ]
  })
  export class LoginModule { }
