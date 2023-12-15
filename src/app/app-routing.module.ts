import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path: "home",
    loadChildren: () => import('./component/main/main.module').then(m => m.MainModule)
  },
  {
    path: "cart",
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  // {
  //   path: "**",
  //   redirectTo:"home",
  //   pathMatch:"full"
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
