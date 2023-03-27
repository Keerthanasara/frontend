import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public product:any=[];
  public grandtotal:number=0;
  paymentHandler: any = null;

  /*constructor(private cartservice:CartService){}
  ngOnInit(): void {
    this.cartservice.getproducts().subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cartservice.gettotalprice();
    })
    
  }
  removeitem(item:any){
    this.cartservice.removecart(item);
  }
emptycart(){
  this.cartservice.removeallcart();
}*/

  resultPrice: any;
  public item=new BehaviorSubject<any>([]);
  constructor(
    private cartservice: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrservice: ToastrService
  ) { }

  ngOnInit(): void {
    this.getItemsFromService();
  }

  //function to get items from product page
  getItemsFromService() {
    {
      this.cartservice.getproducts().subscribe(res=>{
        this.product=res;
        this.grandtotal=this.cartservice.gettotalprice();
      })
      
      console.log(this.item);
      this.item.forEach((item: { ordervalue: number; }) => {
        item.ordervalue = 1
        if(item.ordervalue == 0){  
          this.deleteFromCart(item);
        }
      })
    }
  }

  //function to delete an item from cart
  deleteFromCart(i:any) {
    this.cartservice.deleteFromCart(i).subscribe((response) => {
        alert('The item selected will be removed');
        this.getItemsFromService();
        this.showSuccess();
    });
  }

  // order() {
  //   this.toastrservice.success('Order placed successfully');
  //   this.item.forEach((_item: any)=> {
  //     this.item.ordervalue = 0
  //     if(this.item.ordervalue == 0){  
  //       this.deleteFromCart(this.item)
  //     }
  //   })
  // }
  
  order() {
    this.toastrservice.success('ORDER PLACED SUCCESSFULLY');
    this.item.forEach((item: { ordervalue: number; }) => {
      item.ordervalue = 0;
      if(item.ordervalue == 0){  
        this.deleteFromCart(item)
      }
    })
  }

  //function to show success message
  showSuccess() {
    this.toastrservice.success('Item deleted successfully from cart');
  }
  removeitem(item:any){
    this.cartservice.removecart(item);
  }
  getCoupon(coupon: { price: any; }) {
    var button = <HTMLInputElement>document.getElementById('i');
    console.log("Coupon", coupon);
    console.log("Coupon Price", coupon.price);
    this.product.forEach((item: { price: number; }) => {
      console.log(item.price);
      this.grandtotal= item.price - ((item.price*20)/100);
      console.log(item.price);
    })
    coupon.price = this.grandtotal;
    console.log(coupon.price);
    button.disabled = true;//setting the button as disabled
    return coupon.price;
  }

  //function to increment / decrement the quantity of the product
  Increment(cond: string, item: { ordervalue: number; }) {
    if (cond === 'up') {
      item.ordervalue++;
    }
    else if (cond === 'down') {
      if (item.ordervalue > 0) {
        item.ordervalue--;
      }
      if(item.ordervalue == 0){  
        this.removeitem(item);
      }
    }
  }
 
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:
        'pk_test_51MYgm5SGkErIyu06Irq7TQAbRa6XCMMurnvE7e9BBl8cWK8pB14kKsnyVDPHnRncU6MwWosRYj5JaYZTuBtmJ5v2002Bq8P0lk',

      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken.card);
        alert('Stripe token generated!');
      },
    });

    paymentHandler.open({
      name: 'CouponBuddy',
      description: 'Selected Products Added',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(script);
    }
  }
  
}

