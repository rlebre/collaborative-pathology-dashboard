import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import * as globals from './globals'; //<==== this one

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'text/plain'}),
};

@Injectable()
export class DashboardService {

  private baseUrl: string = globals.dashboard_url;

  constructor(private http: HttpClient) { }

  getSessions(): Observable<any>{
    return this.http.get(this.baseUrl, httpOptions);
  }

}
