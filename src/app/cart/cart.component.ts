import { Component } from '@angular/core';
import { MainComponent } from '../component/main/main.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  itemList$: any = [];
  constructor() { }
}
