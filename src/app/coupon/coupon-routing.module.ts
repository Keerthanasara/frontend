import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';

const routes: Routes = [{
  path:'allcoupon',component:ListCouponComponent
},
{
  path:'createcoupon',component:CreateCouponComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
