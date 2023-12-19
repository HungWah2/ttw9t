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
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch:"full"
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
