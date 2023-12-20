import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public searchTerm: string = "";

  constructor(public auth: AuthService, public cartService: CartService) { }

  ngOnInit(): void{
    
  }



  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
