import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLightComponent} from './components/home-light/home-light.component';
import {MongoComponent} from "./components/mongo/mongo.component";

const routes: Routes = [
  { path: '', redirectTo: '/home-light', pathMatch: 'full' },
  { path: 'home-light', component: HomeLightComponent },
  {path : 'naruto', loadChildren: () => import('./modules/universe/universe.module').then(m => m.UniverseModule)},
  {path : 'disney', loadChildren: () => import('./modules/universe/universe.module').then(m => m.UniverseModule)},
  {path : 'harrypotter', loadChildren: () => import('./modules/universe/universe.module').then(m => m.UniverseModule)},
  {path : 'marvel', loadChildren: () => import('./modules/universe/universe.module').then(m => m.UniverseModule)},
  {path : 'disney/recette/:id', loadChildren: () => import('./modules/recipe/recipe.module').then(m => m.RecipeModule)},
  {path : 'marvel/recette/:id', loadChildren: () => import('./modules/recipe/recipe.module').then(m => m.RecipeModule)},
  {path : 'harrypotter/recette/:id', loadChildren: () => import('./modules/recipe/recipe.module').then(m => m.RecipeModule)},
  {path : 'naruto/recette/:id', loadChildren: () => import('./modules/recipe/recipe.module').then(m => m.RecipeModule)},
  { path: 'mongo', component: MongoComponent },
  { path: 'create', loadChildren: () => import('./modules/user-module/user.module').then(m => m.UserModule) },
  { path: 'user/manage', loadChildren: () => import('./modules/user-module/user.module').then(m => m.UserModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
