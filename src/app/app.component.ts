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
  ShowLogoutButton: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    // Check for stored credentials
    const storedUserId = localStorage.getItem('userId');
    const storedPassword = localStorage.getItem('password');

    if (storedUserId && storedPassword) {
      // Set the initial state based on stored credentials
      this.checkCredentials(storedUserId, storedPassword);
    } else {
      // If no stored credentials, open the login dialog
      this.openLoginDialog();
    }
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
      if (result && result.userId && result.password) {
        this.checkCredentials(result.userId, result.password);
        // Store credentials in localStorage after successful login
        localStorage.setItem('userId', result.userId);
        localStorage.setItem('password', result.password);
      } else {
        // Handle the case where the login dialog is closed without entering credentials
        this.showEditDeleteButtons = false;
      }
    });
  }

  private checkCredentials(userId: string, password: string): void {
    // Check user credentials and show/hide buttons accordingly
    if (userId === '1' && password === 'admin') {
      this.showEditDeleteButtons = true;
      this.ShowLogoutButton = true;
    } else if (userId === '2' && password === 'guest') {
      this.showEditDeleteButtons = false;
      this.ShowLogoutButton = true;
    } else {
      this.showEditDeleteButtons = false;
    }
  }

  logout(): void {
    // Clear stored credentials when logging out
    localStorage.removeItem('userId');
    localStorage.removeItem('password');
    this.showEditDeleteButtons = false;
    this.openLoginDialog();
  }
}