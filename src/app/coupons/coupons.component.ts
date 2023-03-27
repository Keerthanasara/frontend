import { Component } from '@angular/core';
import { Coupon } from '../model/coupon';
import { CouponsService } from '../service/coupons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent {
  coupons: Coupon[]=[];
   

  constructor(private couponService: CouponsService, private router: Router) { }
  ngOnInit() {
   this.get();
  }
 
  get(){
    this.couponService.get().subscribe((data)=>{
      this.coupons=data;
    });
  }
  

}
