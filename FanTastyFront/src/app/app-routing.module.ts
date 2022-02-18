import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLightComponent } from './components/home-light/home-light.component';
import { NarutoComponent } from './components/naruto/naruto.component';
import { HarrypotterComponent } from './components/harrypotter/harrypotter.component';
import { DisneyComponent } from './components/disney/disney.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { RecipeTemplateComponent } from './components/recipe-template/recipe-template.component';
import {MongoComponent} from "./components/mongo/mongo.component";

const routes: Routes = [
  { path: '', redirectTo: '/home-light', pathMatch: 'full' },
  { path: 'home-light', component: HomeLightComponent },
  { path: 'naruto', component: NarutoComponent },
  { path: 'harrypotter', component: HarrypotterComponent },
  { path: 'disney', component: DisneyComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'disney/recette/:id', component: RecipeTemplateComponent },
  { path: 'naruto/recette/:id', component: RecipeTemplateComponent },
  { path: 'harrypotter/recette/:id', component: RecipeTemplateComponent },
  { path: 'marvel/recette/:id', component: RecipeTemplateComponent },
  {path: 'mongo', component: MongoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
