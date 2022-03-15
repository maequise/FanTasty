import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {DarkModeDirective} from "../../dark-mode.directive";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DarkModeDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class StaticModule { }
