import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UserComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserCreateComponent,
    UserPasswordComponent
  ],
  exports: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
