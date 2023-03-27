import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

import { HomeComponent } from './home/home.component';
import { CouponsComponent } from './coupons/coupons.component';

import { RegisterComponent } from './register/register.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListCouponComponent } from './coupon/list-coupon/list-coupon.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';






const routes: Routes = [{
  path:'about',component:AboutComponent
},
{
  path:'listproduct',component:ListProductComponent
},
{
  path: 'login',
  component: LoginComponent
},
{ path: 'cart', component: CartComponent },
{
  path: 'home', component: HomeComponent
},
{
path:'products',component:ProductsComponent
},
{
  path: 'coupon',
  canActivate: [AuthGuard], component: CouponsComponent
},

{
  path: 'register',
  component: RegisterComponent
},

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutComponent,LoginComponent,CartComponent,HomeComponent]
