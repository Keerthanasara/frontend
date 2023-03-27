import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData= {
    emailId: '',
    fullName: '',
    mobileNo: '',
     password: ''
  }
    
    isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  //function to register user details and log in to the website and navigate to home page
  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token)
          this._router.navigate(['/home'])
        },
        err => console.log(err)
      )
  }


}
