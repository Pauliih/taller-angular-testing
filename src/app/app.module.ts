import { HttpModule } from '@angular/http';
import { ListUsersProxyService } from './list-users/list-users-proxy.service';
import { ListUsersService } from './list-users/list-users.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListUsersComponent } from './list-users/list-users.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [ListUsersService, ListUsersProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
