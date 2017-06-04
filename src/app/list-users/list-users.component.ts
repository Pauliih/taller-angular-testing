import { Component, OnInit } from '@angular/core';
import { ListUsersService } from './list-users.service';
import { User } from './user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];

  constructor(private service: ListUsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      users => this.users = users
    );
  }

}
