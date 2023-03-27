import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Item } from '../model/product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
products:Item={
id:'',
name:'',
price:0,
rating:0,
imageUrl:''
}
constructor(private productservice:ProductService,private route:ActivatedRoute,private router:Router){}
ngOnInit(){
  this.route.paramMap.subscribe((param)=>{
    var id=Number(param.get('id'));
    this.getById(id);
  })
 
}
  getById(id: number) {
    this.productservice.get(id).subscribe((data)=>{
      this.products=data
    }
    )
    
  }
  update(){
    this.productservice.update(this.products,'id').subscribe({
      next:(data)=>{
        this.router.navigate(['/list']);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
