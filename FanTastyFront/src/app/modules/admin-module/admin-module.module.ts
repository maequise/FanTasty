import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./components/admin/admin.component";
import {AdminModuleRoutingModule} from "./admin-module-routing.module";
import {ComponentsModule} from "../components-module/components.module";



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ComponentsModule
  ]
})
export class AdminModuleModule { }
