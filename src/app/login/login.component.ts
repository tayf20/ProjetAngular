import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationService} from '../registration.service';
import {User} from '../user';
import {Route} from '@angular/compiler/src/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router , private auth :AuthService) {
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.auth.logIn(this.user);
    // this._service.loginUserFromRemote(this.user).subscribe(
    //   data => {
    //     console.log('response receieved');
    //     this._router.navigate(['/loginsuccess']);
    //   },
    //   error => {
    //     console.log('exception occured');
    //     this.msg = 'Bad credentials,please enter valid email and password ';
    //   }
    // );
  }

}
