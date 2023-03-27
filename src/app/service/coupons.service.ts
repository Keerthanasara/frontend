import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon} from '../model/coupon';
@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  

  constructor(private http: HttpClient) { }
 
  //function to get coupons from the above url and cast the observable into an array
 
  addCoupon(coupon: Coupon):Observable<any> {
    return this.http.post<Coupon[]>("http://localhost:8081/coupon/add",coupon)
  }
  get():Observable<Coupon[]>{
    return this.http.get<Coupon[]>("http://localhost:8081/coupon/findall")
  }
  update(id:any):Observable<any>{
    return this.http.post("http://localhost:8081/coupon/update",id);
  }
  getbyid(id:any):Observable<any>{
    return this.http.get(`$http://localhost:8081/find/id/${id}`);
  }
  delete(id:any):Observable<any>{
    return this.http.delete(`$http://localhost:8081/delete/id/${id}`)
  }
}
