import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeTemplateComponent} from "../../components/recipe-template/recipe-template.component";

const routes: Routes = [
  {path: '', component: RecipeTemplateComponent},
  {path: 'naruto/recette/:id', component: RecipeTemplateComponent},
  {path: 'marvel/recette/:id', component: RecipeTemplateComponent},
  {path: 'disney/recette/:id', component: RecipeTemplateComponent},
  {path: 'harrypotter/recette/:id', component: RecipeTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
