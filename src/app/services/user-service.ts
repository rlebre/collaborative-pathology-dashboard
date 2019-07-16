import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import * as globals from './globals'; //<==== this one
import { UserLoggedIn } from '../data-models/UserLoggedIn';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'multipart/form-data'}),
  withCredentials: true
};

@Injectable()
export class UserService {

    private userLoggedIn: UserLoggedIn;

    private baseUrl: string = globals.user_profile_url;

    constructor(private http: HttpClient) { }

    setUserLoggedIn(user: UserLoggedIn){
        this.userLoggedIn = user;
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUserLoggedIn(){
        if(this.userLoggedIn)
            return this.userLoggedIn;
        else{
            let obj = JSON.parse(sessionStorage.getItem('user'));
            return obj;
        }
    }

    updateProfile(user: UserLoggedIn, image: File): Observable<any>{
        const customOptions ={
            withCredentials: true
          };
        const fd = new FormData();
        fd.append('data', JSON.stringify(user));
        if(image)
            fd.append('avatar', image, image.name);

        return this.http.post(this.baseUrl, fd, customOptions);
    }

}
