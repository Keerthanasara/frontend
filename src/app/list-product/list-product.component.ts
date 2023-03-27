import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Item } from '../model/product';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
allproducts:Item[]=[];
constructor(private productservice:ProductService,private router:Router){}
ngOnInit(){
  this.get();
  
}
get(){
  this.productservice.getItems().subscribe((data)=>{
    this.allproducts=data;
  });
}
delete(id:String){
  this.productservice.delete(id)
  .subscribe((data)=>{
    this.allproducts=this.allproducts.filter(d=>d.id!==id);
  })
}

}
