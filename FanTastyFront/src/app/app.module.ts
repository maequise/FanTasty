import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from "./modules/components-module/components.module";
import {AdminModuleModule} from "./modules/admin-module/admin-module.module";


@NgModule({
  declarations: [
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModuleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
