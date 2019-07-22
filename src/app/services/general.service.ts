import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import * as globals from './globals'; //<==== this one

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'}), 
  withCredentials: true,
};

const session_tags = [
  "AAB", 
  "AAC",
  "TAC",
  "CCE",
  "ERR",
];

const perms = [
  {"id":"movementPermission","itemName":"Movement"},
  {"id":"flipPermission","itemName":"Flip"},
  {"id":"annotationPermission","itemName":"Annotation"},
  {"id":"adjustmentPermission","itemName":"Adjustment"},
];

const roles = [
  {"id":"moderator","itemName":"Moderator"},
  {"id":"guest","itemName":"Guest"},
];

@Injectable()
export class GeneralService {

  private google_sign_in_url: string = globals.google_sign_in_url;
  private google_api_user_data_url: string = globals.google_api_user_data_url;

  constructor(private http: HttpClient) { }

  createGoogleUser(userData: any): Observable<any>{
    const fd = new FormData();
    fd.append('data', JSON.stringify(userData));
    return this.http.post(this.google_sign_in_url, fd, httpOptions);
  }


  verifyOrCreateGoogleUser(token: any): Observable<any>{
    let customHeaders = new HttpHeaders();
    customHeaders = customHeaders.set('Content-type', 'application/json');
    customHeaders = customHeaders.set('Access_token', token);

    let customOptions = {headers: customHeaders};
    return this.http.get(this.google_sign_in_url, customOptions);
  }

  logout(): Observable<any>{
    return this.http.get(globals.logout_url, httpOptions);
  }

  getGoogleUserData(token: any): Observable<any>{
    return this.http.get(this.google_api_user_data_url + token, httpOptions)
  }

  getDefaultTags(): string[]{
    return session_tags;
  }

  getPerms(): any[]{
    return perms;
  }

  getRoles(): any[]{
    return roles;
  }

}
