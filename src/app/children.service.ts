import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Child } from './child';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  private baseUrl='http://localhost:8082/api/v1/child';

  constructor(private httpCliend: HttpClient) {
  }

  getUnAssignedCheldren() {
    return this.httpCliend.get('http://localhost:8082/api/v1/child/unAssignedChildren');
  }
  deleteChild(idchild: number){
    return this.httpCliend.delete(`${this.baseUrl}/${idchild}`, { responseType: 'text' });
  }
  createChild(child: Child) {
    return this.httpCliend.post(this.baseUrl, child);
  }

  updateChild(idchild: number, value: any){
    return this.httpCliend.put(`${this.baseUrl}/${idchild}`, value);
  }
  getChildById(idchild: number) {
    return this.httpCliend.get(this.baseUrl + idchild);
  }

}
