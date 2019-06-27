import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Group} from '../data-models/Group'; 

import * as globals from './globals'; //<==== this one

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class CreateGroupService {

  private baseUrl: string = globals.create_group_url;

  constructor(private http: HttpClient) { }

  postGroup(group: Group): Observable<any>{
    const fd = new FormData();
    fd.append('data', JSON.stringify(group));
    return this.http.post(this.baseUrl, fd);
  }

}
