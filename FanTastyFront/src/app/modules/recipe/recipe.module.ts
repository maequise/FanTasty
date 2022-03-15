import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import {RecipeTemplateComponent} from "../../components/recipe-template/recipe-template.component";
import {ComponentsModule} from "../components-module/components.module";


@NgModule({
  declarations: [
    //RecipeTemplateComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
