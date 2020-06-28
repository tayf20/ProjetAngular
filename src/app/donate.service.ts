import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donate } from './donate/donate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  apiDonateURL = 'http://localhost:8082/api/childdonator';

  constructor(private _http: HttpClient) { }

  public reg(donate: Donate): Observable<any> {

    return this._http.post<any>('http://localhost:8082/api/v3/donation', donate);
  }

  public donateForChild(childId: string, donateId, total): Observable<any> {
    var childDonator = {
      child: {
        idchild: childId
      },
      donate: { idchild:donateId }
      , total
    }
    return this._http.post<any>('http://localhost:8082/api/childdonator', childDonator);
  }
  
  addNewDonate(ChildDonaterModel){
    return this._http.post( this.apiDonateURL, ChildDonaterModel, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

}
