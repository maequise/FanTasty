import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserCreateComponent } from './components/user-create/user-create.component';



@NgModule({
  declarations: [
    UserComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserCreateComponent
  ],
  exports: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
