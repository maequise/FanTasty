import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from "./modules/components-module/components.module";
import {UserModule} from "./modules/user-module/user.module";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {StaticModule} from "./modules/static/static.module";


@NgModule({
  declarations: [
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    StaticModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HttpClientModule }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
