import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeTemplateComponent } from './components/recipe-template/recipe-template.component';
import { HomeLightComponent } from './components/home-light/home-light.component';
import { NarutoComponent } from './components/naruto/naruto.component';
import { HarrypotterComponent } from './components/harrypotter/harrypotter.component';
import { DisneyComponent } from './components/disney/disney.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DarkModeDirective } from './dark-mode.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UniversComponent } from './components/univers/univers.component';
import { SearchFormComponent } from './components/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NarutoComponent,
    HomeLightComponent,
    HarrypotterComponent,
    DisneyComponent,
    DarkModeDirective,
    HeaderComponent,
    FooterComponent,
    RecipeTemplateComponent,
    UniversComponent,
    MarvelComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
