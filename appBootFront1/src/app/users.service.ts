import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url = 'http://localhost:8080/api/users';
  constructor(private httpclient: HttpClient, private router : Router) { }
  public getById(id: string){
    return this.httpclient.get(`${this.url}/iduser=${id}`);
  }
  public editerUser(id: any, data) {
    return this.httpclient.put(`${this.url}/update/${id}`, data);
  }
}
