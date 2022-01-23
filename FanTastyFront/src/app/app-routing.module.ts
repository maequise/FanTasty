import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLightComponent } from './home-light/home-light.component';
import { NarutoComponent } from './naruto/naruto.component';
import { HarrypotterComponent } from './harrypotter/harrypotter.component';
import { DisneyComponent } from './disney/disney.component';
import { MarvelComponent } from './marvel/marvel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-light', pathMatch: 'full' },
  { path: 'home-light', component: HomeLightComponent },
  { path: 'naruto', component: NarutoComponent },
  { path: 'harrypotter', component: HarrypotterComponent },
  { path: 'disney', component: DisneyComponent },
  { path: 'marvel', component: MarvelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }