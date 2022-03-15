import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UniversComponent} from "../../components/univers/univers.component";


const routes: Routes = [
  {path: '', component: UniversComponent},
  {path: 'naruto', component: UniversComponent},
  {path: 'disney', component: UniversComponent},
  {path: 'harrypotter', component: UniversComponent},
  {path: 'marvel', component: UniversComponent},
 /* {path: 'disney/recette/:id', loadChildren: () => import('../../modules/recipe/recipe.module').then(m => m.RecipeModule)},
  {path: 'naruto/recette/:id', loadChildren: () => import('../../modules/recipe/recipe.module').then(m => m.RecipeModule)},
  {path: 'marvel/recette/:id', loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipeModule)},
  {path: 'harrypotter/recette/:id', loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipeModule)},*/
  /*{path: 'naruto/recette/:id', component: RecipeTemplateComponent},
  {path: 'harrypotter/recette/:id', component: RecipeTemplateComponent},
  {path: 'marvel/recette/:id', component: RecipeTemplateComponent},*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniverseRoutingModule {
}
