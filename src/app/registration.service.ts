import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient, auth: AuthService) {
  }

  public loginUserFromRemote(user: User): Observable<any> {
    this._http.post<any>('http://localhost:8082/api/v2/authenticate', user).subscribe(data => {

    });
    return this._http.post<any>('http://localhost:8082/api/v2/authenticate', user);
  }

  public reg(user: User): Observable<any> {

    return this._http.post<any>('http://localhost:8082/api/v2/registerUser', user);
  }
}

