import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { EditCouponComponent } from './edit-coupon/edit-coupon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListCouponComponent,
    CreateCouponComponent,
    EditCouponComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class CouponModule { }
