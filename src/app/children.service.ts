import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  constructor(private httpCliend: HttpClient) {
  }

  getUnAssignedCheldren() {
    return this.httpCliend.get('http://localhost:8082/api/v1/child/unAssignedChildren');
  }
}
