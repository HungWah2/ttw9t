import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Data } from '../model/data.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public products: any[] = [];
  public grandTotal!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  increaseQuantity(product: Data) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Data) {
    this.cartService.decreaseQuantity(product);
  }
  

  removeItem(product: Data) {
    this.cartService.removeCartItem(product);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  buyProducts() {
    this.cartService.buyProducts();
  }


 
}
