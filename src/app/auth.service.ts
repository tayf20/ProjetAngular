import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {User} from './user'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Subject , Observable 
  user : BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private httpClient : HttpClient) { }

  // Service return the current user.
  getCurrentUser (){
    return this.user.asObservable();
  }

  // 
  logIn( user:User ){
    this.httpClient.post<any>("http://localhost:8081/login",user).subscribe(data =>{
      this.user.next(data);
    });
   }
}
