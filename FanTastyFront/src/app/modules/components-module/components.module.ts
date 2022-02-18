import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLightComponent} from "../../components/home-light/home-light.component";
import {DarkModeDirective} from "../../dark-mode.directive";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {RecipeTemplateComponent} from "../../components/recipe-template/recipe-template.component";
import {UniversComponent} from "../../components/univers/univers.component";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../../app.component";
import {LoginComponent} from "../../components/login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeLightComponent,
    DarkModeDirective,
    HeaderComponent,
    FooterComponent,
    RecipeTemplateComponent,
    UniversComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class ComponentsModule { }
