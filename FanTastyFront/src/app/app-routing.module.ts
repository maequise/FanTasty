import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLightComponent} from './components/home-light/home-light.component';
import {RecipeTemplateComponent} from './components/recipe-template/recipe-template.component';
import {UniversComponent} from "./components/univers/univers.component";
import {MongoComponent} from "./components/mongo/mongo.component";

const routes: Routes = [
  { path: '', redirectTo: '/home-light', pathMatch: 'full' },
  { path: 'home-light', component: HomeLightComponent },
  { path: 'naruto', loadChildren: () => import('./modules/universe/universe.module').then(m => m.UniverseModule)},
  { path: 'mongo', component: MongoComponent },
  {path: 'login', loadChildren: () => import('./modules/user-module/user.module').then(m => m.UserModule)}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
