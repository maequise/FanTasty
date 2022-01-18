import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeTemplateComponent } from './recipe-template/recipe-template.component';
import { UniversTemplateComponent } from './univers-template/univers-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeTemplateComponent,
    UniversTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
