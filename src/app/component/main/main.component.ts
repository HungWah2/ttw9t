import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data.model';
import { ApiService } from '../../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  data: Data[] = [];
  checkData: boolean = false;
  searchKey: string = "";

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.get();
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  openEditDialog(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
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

  addToCart(data: Data) {
    this.cartService.addtoCart(data);
  }

  
}
