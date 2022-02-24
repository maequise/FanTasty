import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UniversComponent} from "../../components/univers/univers.component";
import {RecipeTemplateComponent} from "../../components/recipe-template/recipe-template.component";

const routes: Routes = [
  { path: 'naruto', component: UniversComponent },
  { path: 'harrypotter', component: UniversComponent },
  { path: 'disney', component: UniversComponent },
  { path: 'marvel', component: UniversComponent },
  { path: 'disney/recette/:id', component: RecipeTemplateComponent },
  { path: 'naruto/recette/:id', component: RecipeTemplateComponent },
  { path: 'harrypotter/recette/:id', component: RecipeTemplateComponent },
  { path: 'marvel/recette/:id', component: RecipeTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniverseRoutingModule { }
