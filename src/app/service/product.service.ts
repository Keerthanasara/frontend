import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Item } from '../model/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public serviceUrl: string = "http://localhost:8092/products/list";

  constructor(private http: HttpClient) { }
 
  //function to get items from the above url and cast the observable into an array
  getItems(): Observable<Item[]> {

    return this.http.get<Item[]>(this.serviceUrl);

  }
  addproduct(data:any):Observable<Item[]> {
    return this.http.post<Item[]>("http://localhost:8092/products/product",data);
  }
  update(data:any,id:String):Observable<any>{
    return this.http.put(`http://localhost:8092/products/product/${id}`,data,{responseType: 'text'});
  }
  get(id:any):Observable<any>{
    return this.http.get(`http://localhost:8092/products/product/${id}`);
  }
  delete(id:any):Observable<any>{
    return this.http.delete(`http://localhost:8092/products/product/${id}`)
  }
  getproduct(){
    return this.http.get<any>("http://localhost:8092/products/list")
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }
}
