import { inject, TestBed } from '@angular/core/testing';
import { ListUsersProxyService } from './list-users-proxy.service';
import { ListUsersProxyServiceFake } from './list-users-proxy.service.fake.spec';
import { ListUsersService } from './list-users.service';


describe('ListUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListUsersService,
        {provide: ListUsersProxyService, useClass: ListUsersProxyServiceFake}
      ]
    });
  });

  it('Should be created', inject([ListUsersService], (service: ListUsersService) => {
    expect(service).toBeTruthy();
  }));

  it('Should get users', () => {
    const service: ListUsersService = TestBed.get(ListUsersService);
    service.getUsers().subscribe(
      users => {
        expect(users[0].login).toEqual('mojombo');
      }
    );
  })

});
