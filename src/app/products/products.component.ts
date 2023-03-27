import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Item } from '../model/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:['./products.component.css']
})
export class ProductsComponent implements OnInit {
  item: Item[] = [];

  constructor(private itemService: ProductService, private router: Router,private cartservice:CartService
  ) {
  }

 
  ngOnInit(): void {
    this.get();
 
  
  }
  get(){
    this.itemService.getItems().subscribe((data)=>{
      this.item=data;
      this.item.forEach((a:any)=>{
        Object.assign(a,{Quantity:1,total:a.price})
      }
      )
    });
  }
addtocart(i:any){
this.cartservice.addcart(i);
}
  //function to add items to the cart
  addcart(selecteditem: any) {
    this.cartservice.addToCart(selecteditem).subscribe((response) => {
      console.log("Value: ", response);
      this.router.navigate(['/cart']);
      this.showSuccess();
    })
  }
  
  //function to show success message
  showSuccess() {
   console.log("item added to cart successfully");
  }

}
