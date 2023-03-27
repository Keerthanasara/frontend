import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalItem:number=0;
constructor(public _authService:AuthService,private cartservice:CartService){}
ngOninit():void{
this.cartservice.getproducts()
.subscribe(res=>{
  this.totalItem=res.length;
})
}
}
