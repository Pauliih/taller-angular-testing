import { ListUsersProxyServiceFake } from './list-users-proxy.service.fake.spec';
import { ListUsersProxyService } from './list-users-proxy.service';
import { ListUsersService } from './list-users.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      providers: [
        ListUsersService,
        {provide: ListUsersProxyService, useClass: ListUsersProxyServiceFake}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should set users', () => {
    component.ngOnInit();
    expect(component.users);
    expect(component.users[0].login).toEqual('mojombo');
  });
});
