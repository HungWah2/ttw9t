import { Injectable } from '@angular/core';
import { Data } from '../model/data.model';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { FillComponent } from '../fill/fill.component';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  public checkDataa: boolean = false;
  constructor(private api: ApiService, private auth:AuthService, private dialog: MatDialog) {}
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    if(this.cartItemList.length != 0) {
      if(this.cartItemList.some((item: any) => item.id === product.id)) {
        alert('Product already in cart');
        this.checkDataa = true;
      } else {
        this.checkDataa = false;
      }
    }

    if (product.quantity > 0 && this.checkDataa == false) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      console.log(this.cartItemList);
      product.quantity -= 1;
      product.stock += 1;
      product.totals = product.stock * product.price;
    } 
    if (product.quantity == 0) {
      alert('Out of stock');
    }
  }

  // checkProduct(product: any) {
  //   this.cartItemList.map((a: any) => {
  //     if (product.id === a.id) {
  //       alert('Product already in cart');
  //       this.checkDataa = true;
  //     } else if (product.id !== a.id) {
  //       this.checkDataa = false;
  //     }
  //   });
  // }

  increaseQuantity(product: Data) {
    product.stock += 1;
    product.quantity -= 1;
    product.totals = product.stock * product.price;
    this.productList.next(this.cartItemList);
  }

  decreaseQuantity(product: Data) {
    if (product.stock > 1) {
      product.stock -= 1;
      product.quantity += 1;
      product.totals = product.stock * product.price;
      this.productList.next(this.cartItemList);
    } else if (product.stock == 1) {
      this.removeCartItem(product);
    }
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.totals;
    });
    return grandTotal;
  }
  removeCartItem(product: Data) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
        this.checkDataa = false;
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.checkDataa = false;
  }

  buyProducts() {
    if(this.auth.session == null) {
      alert('Please login to buy products or fill in the form below');
      this.openDialog();
      


    } else {
      alert('Thank you for buying our products');
      this.removeAllCart();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(FillComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.closeAll();
    });
  }


  
}
