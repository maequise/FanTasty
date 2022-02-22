import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../../components/login/login.component";
import {AuthGuard} from "../../core/auth/auth.guard";
import {Login} from "../../models/Login";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'user', canActivateChild: [AuthGuard], children:
      [
        {path: 'manage', component: UserComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
