import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CouponsService } from 'src/app/service/coupons.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent {
createCoupon:Coupon={
  image:'',
  offer:'',
  productinfo:'',
promocode:''
}
constructor(private couponservice:CouponsService,private router:Router){}
ngOnInit():void{}
create(){
  this.couponservice.addCoupon(this.createCoupon)
  .subscribe({
    next:(data)=>{this.router.navigate(["/allcoupon"])},
  error:(error)=>{console.log(error);}})
  

}
}
