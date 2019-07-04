import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Group} from '../data-models/Group'; 

import * as globals from './globals'; //<==== this one

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'}), 
  withCredentials: true
};

@Injectable()
export class GroupsService {

  constructor(private http: HttpClient) { }

  postGroup(group: Group): Observable<any>{
    return this.http.post(globals.create_group_url, group, httpOptions);
  }

  deleteGroup(name: string): Observable<any>{
    let body = {"name": name};
    return this.http.post(globals.group_details_url + "deleteGroup", body, httpOptions);
  }

  updateGroup(group: Group): Observable<any>{
    let body = {"group": group};
    return this.http.post(globals.group_details_url, body, httpOptions )
  }

  getUserGroups(): Observable<any>{
      return this.http.get(globals.mygroups_url, httpOptions);
  }

  getGroupDetails(name: string): Observable<any>{
    return this.http.get(globals.group_details_url + name, httpOptions);
  }

}
