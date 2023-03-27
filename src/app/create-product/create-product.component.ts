import { Component } from '@angular/core';
import { Item } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
product:Item={
  id: '',
    name: '',
    price: 0,
    rating: 0,
    imageUrl: ''
}
constructor(private createproduct:ProductService,private router:Router){}
ngOnInit():void{}

create(){
  this.createproduct.addproduct(this.product).subscribe({
    next:(data)=>{this.router.navigate(['/list'])},
    error:(error)=>{console.log(error);}
  })
}
}
