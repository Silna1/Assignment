import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path : 'users',component : UsersComponent },
  {path : 'userDetails/:id' , component : UsersDetailsComponent},
  {path : 'addUser',component : AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
