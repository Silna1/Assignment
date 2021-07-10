import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
