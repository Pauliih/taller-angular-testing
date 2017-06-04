import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListUsersProxyService {

  constructor(private http: Http) { }

  getUsers(): Observable<Response> {
    return this.http.get(`${environment.api}/users`)
  }

}
