import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Subject , Observable
  user: Subject<User> = new Subject<User>();

  constructor(private httpClient: HttpClient, private _router: Router) {
    this.user.next(JSON.parse(localStorage.getItem('user')));
  }

  // Service return the current user.
  getCurrentUser() {
    return this.user.asObservable();
  }

  //
  logIn(user: User) {
    this.httpClient.post<any>('http://localhost:8081/api/v2/login', user).subscribe(data => {
      console.log('data');
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      this.user.next(data);
      if (data.role == 'ADMIN') {
        this._router.navigate(['/admin']);
      }
    });
  }
}
