import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLightComponent} from "../../components/home-light/home-light.component";
import {RecipeTemplateComponent} from "../../components/recipe-template/recipe-template.component";
import {UniversComponent} from "../../components/univers/univers.component";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../../app.component";
import {LoginComponent} from "../../components/login/login.component";
import {FavoriteComponent} from '../../components/favorite/favorite.component';
import {UserModule} from "../user-module/user.module";
import {StaticModule} from "../static/static.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeLightComponent,
    RecipeTemplateComponent,
    UniversComponent,
    LoginComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //UserModule,
    StaticModule
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class ComponentsModule { }
