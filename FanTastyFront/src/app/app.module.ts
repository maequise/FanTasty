import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeTemplateComponent } from './recipe-template/recipe-template.component';
import { HomeLightComponent } from './home-light/home-light.component';
import { NarutoComponent } from './naruto/naruto.component';
import { HarrypotterComponent } from './harrypotter/harrypotter.component';
import { DisneyComponent } from './disney/disney.component';
import { MarvelComponent } from './marvel/marvel.component';
import { FormsModule } from '@angular/forms';
import { DarkModeDirective } from './dark-mode.directive';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeTemplateComponent,
    NarutoComponent,
    HomeLightComponent,
    HarrypotterComponent,
    DisneyComponent,
    MarvelComponent,
    DarkModeDirective,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
