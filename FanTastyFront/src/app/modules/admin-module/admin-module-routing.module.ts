import {RouterModule,Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../core/auth/auth.guard";
import {AdminComponent} from "./components/admin/admin.component";
import {LoginComponent} from "../../components/login/login.component";

const routesAdmin: Routes = [
  {
    path: 'admin', canActivate: [AuthGuard], component: AdminComponent
  },
  {
    path: 'admin/login', component : LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routesAdmin)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule {
}
