import { User } from './user';
import { Injectable } from '@angular/core';
import { ListUsersProxyService } from './list-users-proxy.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ListUsersService {

  constructor(private proxy: ListUsersProxyService) { }

  getUsers(): Observable<User[]> {
    return this.proxy.getUsers().map(
      response => {
        const data = response.json();
        const listUsers: User[] = [];
        data.forEach(d => {
          const user: User = {
            login: d.login,
            avatar: d.avatar_url,
            url: d.url,
            admin: d.site_admin
          };
          listUsers.push(user);
        });
        return listUsers;
      }
    );
  }

}
