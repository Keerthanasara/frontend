import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

import { Observable } from 'rxjs';



@Injectable()
export class AuthService {

  
  constructor(private http: HttpClient,
    private _router: Router) { }

  //insert user info to the database
  registerUser(data:any):Observable<any> {
    return this.http.post<any>("http://localhost:8080/profile/reg",data)
  }

  loginUser(user: any) {
    return this.http.post<any>("http://localhost:8080/profile/authenticate",user)
  }

  //removes token from browser's local storage when logged out and navigate to home page
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }

  //function to check whether the user has logged in
  loggedIn() {
    return !!localStorage.getItem('token')
  }
}


