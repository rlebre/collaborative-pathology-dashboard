import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import * as globals from './globals'; //<==== this one
import { SessionCreate } from '../data-models/SessionCreate';
import { Observable } from 'rxjs';
import { SessionDetails } from '../data-models/SessionDetails';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'}),
  withCredentials: true
};

@Injectable()
export class SessionsService {

    private baseUrl: string = globals.create_session_url;

    constructor(private http: HttpClient) { }

    getSessions(): Observable<any>{
        return this.http.get(globals.dashboard_url, httpOptions);
    }

    getSetupInfo(): Observable<any>{
        return this.http.get(this.baseUrl, httpOptions);
    }

    createSession(session: SessionCreate): Observable<any>{
        let body = {'data': session};
        return this.http.post(this.baseUrl, body, httpOptions);
    }

    getSessionDetails(hash: number): Observable<any>{
        return this.http.get(globals.session_details_url + hash, httpOptions);
    }

    updateSession(session: SessionDetails): Observable<any>{
        return this.http.post(globals.session_details_url + 'editSession', session, httpOptions);
    }

    deleteSession(hash: number): Observable<any>{
        return this.http.post(globals.session_details_url + hash, {}, httpOptions);
    }

}
