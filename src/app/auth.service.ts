import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, observable, from} from 'rxjs';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Subject , Observable
  user: User = new User();

  constructor(private httpClient: HttpClient, private _router: Router) {
    if(localStorage.getItem('user') != null)
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  // Service return the current user.
  getCurrentUser() {
    return this.user ;
  }

  //
  logIn(user: User) {
    this.httpClient.post<any>('http://localhost:8082/api/v2/authenticate', user).subscribe(data => {
   console.log('data');
   console.log(data);
    localStorage.setItem('user', JSON.stringify(data));
    this.user= data;
   if (data.role == 'ADMIN') {
      this._router.navigate(['/admin']);
    }
   if (data.role == 'USER') {
      this._router.navigate(['/home']);
    }
    
  });
  }
}
