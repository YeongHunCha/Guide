import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'

import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MyInfoComponent } from './components/my-info/my-info.component';
import { LoginComponent } from './components/login/login.component';

const routes : Routes = [
  {path : '', component: UsersComponent},
  {path : 'login', component: LoginComponent},
  {path : 'myInfo', component: MyInfoComponent},
  {path : 'signUp', component: UserFormComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
