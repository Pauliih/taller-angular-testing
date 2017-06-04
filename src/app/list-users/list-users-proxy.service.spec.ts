import { HttpModule } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { ListUsersProxyService } from './list-users-proxy.service';

describe('ListUsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ListUsersProxyService]
    });
  });

  it('should be created', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('Should connect to remote server and get users', async(() => {
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    service.getUsers().subscribe(
      response => {
        expect(response.json()).not.toBeNull();
      }
    );
  }))
});
