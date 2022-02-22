import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from "./components/admin/admin.component";
import {AdminModuleRoutingModule} from "./admin-module-routing.module";
import {ComponentsModule} from "../components-module/components.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/auth.interceptor";


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ComponentsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
})
export class AdminModuleModule {
}
