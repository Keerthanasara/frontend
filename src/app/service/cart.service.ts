import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  public serviceUrl: string = "http://localhost:8082/cart/addCart";
public cartitemlist:any=[]
public productlist=new BehaviorSubject<any>([]);
constructor(private http: HttpClient) { }

getproducts(){
return this.productlist.asObservable();
}
setproduct(product:any){
this.cartitemlist.push(...product);
this.productlist.next(product);
}
addcart(product:any){
  this.cartitemlist.push(product);
  this.productlist.next(this.cartitemlist);
  this.gettotalprice();
  console.log(this.cartitemlist)

}
gettotalprice():number{
  let grandtotal=0;
  this.cartitemlist.map((a:any)=>(
    grandtotal+=a.total
  ));
  return grandtotal;
}
removecart(product:any){
  this.cartitemlist.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartitemlist.splice(index,1);
    }
  })
}
removeallcart(){
  this.cartitemlist=[]
  this.productlist.next(this.cartitemlist);
}
  //public serviceUrl: string = "http://localhost:8082/findall";

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //function to get items
  getToCart() {
    return this.http.get(this.serviceUrl);
  }

  //function to add items to cart
  addToCart(item: { name: any; price: any; imageUrl: any; }) {

    let addCart = { name: item.name, price: item.price, imageUrl: item.imageUrl };

    return this.http.post(this.serviceUrl, addCart);

  }
  
  //function to delete items from cart
  deleteFromCart(i: { _id: string; }) {
    return this.http.delete(this.serviceUrl + i._id);
  }
}
