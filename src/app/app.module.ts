import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { CartService } from './service/cart.service';

import { CartComponent } from './cart/cart.component';

import { HomeComponent } from './home/home.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ProductService } from './service/product.service';

import { CouponsService } from './service/coupons.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CouponModule } from './coupon/coupon.module';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';

import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";

import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"

import {MatCheckboxModule} from "@angular/material/checkbox"
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { ListCouponComponent } from './coupon/list-coupon/list-coupon.component';
import { ToastrModule } from 'ngx-toastr';
 





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,RegisterComponent,
  FooterComponent,AboutComponent,LoginComponent, CartComponent, HomeComponent,ProductsComponent,CouponsComponent, ProfileComponent
 ],
  imports: [
    BrowserModule,MatRadioModule,MatButtonModule,MatPaginatorModule,MatSortModule,MatDialogModule,MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule,
   ProductsModule,
   BrowserAnimationsModule,
   CouponModule,
 MatCardModule,
 MatTableModule,MatFormFieldModule,MatSelectModule,MatOptionModule,MatInputModule,ToastrModule.forRoot({
  positionClass :'toast-center-center'
})
  ],
  providers: [AuthService,AuthGuard,  CartService, CouponsService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
