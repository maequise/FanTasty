import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLightComponent} from './components/home-light/home-light.component';
import {RecipeTemplateComponent} from './components/recipe-template/recipe-template.component';
import {UniversComponent} from "./components/univers/univers.component";
import {MongoComponent} from "./components/mongo/mongo.component";

const routes: Routes = [
  { path: '', redirectTo: '/home-light', pathMatch: 'full' },
  { path: 'home-light', component: HomeLightComponent },
  { path: 'naruto', component: UniversComponent },
  { path: 'harrypotter', component: UniversComponent },
  { path: 'disney', component: UniversComponent },
  { path: 'marvel', component: UniversComponent },
  { path: 'disney/recette/:id', component: RecipeTemplateComponent },
  { path: 'naruto/recette/:id', component: RecipeTemplateComponent },
  { path: 'harrypotter/recette/:id', component: RecipeTemplateComponent },
  { path: 'marvel/recette/:id', component: RecipeTemplateComponent },
  { path: 'mongo', component: MongoComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
