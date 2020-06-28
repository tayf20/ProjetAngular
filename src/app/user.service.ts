import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8082/api/v2/';  
  getUserList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'users');  
  }  
  deleteUser(iduser: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}users/${iduser}`, { responseType: 'text' });  
  }  
  updateUser(iduser: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}users/${iduser}`, value);  
  }  

  getUser(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}users/${id}`);  
  }  
  
}


