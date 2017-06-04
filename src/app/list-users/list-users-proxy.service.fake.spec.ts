import { environment } from './../../environments/environment';
import { Http, Response, ResponseOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { LIST_USER_FAKE } from './list-users.fake.spec';
import { observable } from 'rxjs/symbol/observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


export class ListUsersProxyServiceFake {

  getUsers(): Observable<Response> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: LIST_USER_FAKE
    });
    const response: Response = new Response(responseOptions);
    return Observable.of(response);
  }

}
