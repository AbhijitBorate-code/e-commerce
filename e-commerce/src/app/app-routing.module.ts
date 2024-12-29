import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './authentication.guard';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { AddProductListComponent } from './add-product-list/add-product-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent,

  },
  {
    path : 'seller-home',
    component: SellerHomeComponent,
  },
  {
    path:'login',
    component:LoginPageComponent,

  },
  {
    path : 'seller-auth/login',
    component: SellerLoginComponent,

  },
  {
    path : 'login/signup',
    component: SignupUserComponent,

  },
  {
    path:'add-product-list',
    component: AddProductListComponent,

  },
  {
    path:'add-to-cart',
    component:AddToCartComponent,
    canActivate:[UserAuthGuard]
  },
  {
    path:'Home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
