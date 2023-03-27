import { Component } from '@angular/core';
import { Coupon } from 'src/app/model/coupon';
import { CouponsService } from 'src/app/service/coupons.service';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.css']
})
export class ListCouponComponent {
allcoupon:Coupon[]=[];
constructor(private couponservice:CouponsService){

}
ngOninit(){
  this.get();
}
get(){
  this.couponservice.get().subscribe((data)=>{
    this.allcoupon=data;
  })
}

}
