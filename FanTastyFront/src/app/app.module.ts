import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentsModule} from "./modules/components-module/components.module";
import {AdminModuleModule} from "./modules/admin-module/admin-module.module";
import {MongoComponent} from './components/mongo/mongo.component';
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {UserModule} from "./modules/user-module/user.module";
import {UniverseModule} from "./modules/universe/universe.module";


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
    UserModule,
    UniverseModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
