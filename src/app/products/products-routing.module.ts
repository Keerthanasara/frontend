import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ListProductComponent } from '../list-product/list-product.component';
import { EditproductComponent } from '../editproduct/editproduct.component';

const routes: Routes = [
  {
    path:'create',component:CreateProductComponent
  },
  {
    path:'list',component:ListProductComponent
  },
  {
    path:'edit/:id',component:EditproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
