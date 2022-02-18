import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentsModule} from "./modules/components-module/components.module";
import {AdminModuleModule} from "./modules/admin-module/admin-module.module";
import {MongoComponent} from './components/mongo/mongo.component';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";


@NgModule({
  declarations: [
    MongoComponent,
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModuleModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
