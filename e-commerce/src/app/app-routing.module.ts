import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './authentication.guard';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SignupUserComponent } from './signup-user/signup-user.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path : 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path : 'seller-auth/login',
    component: SellerLoginComponent
  },
  {
    path : 'login/signup',
    component: SignupUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
