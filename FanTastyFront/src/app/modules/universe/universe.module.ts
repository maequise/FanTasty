import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniverseRoutingModule } from './universe-routing.module';
import {UniversComponent} from "../../components/univers/univers.component";
import {AppComponent} from "../../app.component";


@NgModule({
  declarations: [
    UniversComponent,
  ],
  imports: [
    CommonModule,
    UniverseRoutingModule,
  ],
  bootstrap: []
})
export class UniverseModule { }
