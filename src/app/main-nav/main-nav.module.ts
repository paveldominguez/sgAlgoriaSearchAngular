import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav.component';
import {NgAisCurrentRefinementsModule, NgAisSearchBoxModule} from "angular-instantsearch";



@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    NgAisSearchBoxModule,
    NgAisCurrentRefinementsModule
  ],
  exports: [
    MainNavComponent
  ]
})
export class MainNavModule { }
