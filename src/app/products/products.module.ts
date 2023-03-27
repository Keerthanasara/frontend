import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductComponent } from '../list-product/list-product.component';
import { CreateProductComponent } from '../create-product/create-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from '../editproduct/editproduct.component';


@NgModule({
  declarations: [ListProductComponent,CreateProductComponent,EditproductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ProductsModule { }
