import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data.model';
import { ApiService } from './service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hd-semniar';
  data: Data[] = [];
showEditDeleteButtons: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.get();
    this.openLoginDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      this.dialog.closeAll();
    });
  }

  openEditDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
      this.dialog.closeAll();
    });
  }

  async get() {
    try {
      this.data = await this.apiService.get();
      console.log(this.data);
    } catch (error) {
      console.error(error);
    }
  }

  delete(id: number) {
    this.apiService.delete(id).then((res) => {
      console.log(res);
      this.get();
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Check user credentials and show/hide buttons accordingly
      let showEditDeleteButtons: boolean = false;

      if (result && result.userId === '1' && result.password === 'admin') {
        // User with ID 1 and password 'admin'
        // Show edit and delete buttons
        showEditDeleteButtons = true;
      } else if (result && result.userId === '2' && result.password === 'guest') {
        // User with ID 2 and password 'guest'
        // Hide edit and delete buttons
        showEditDeleteButtons = false;
      } else {
        // Invalid credentials or canceled login
        // You may handle this case as needed
        showEditDeleteButtons = false;
      }
    });
  }
}