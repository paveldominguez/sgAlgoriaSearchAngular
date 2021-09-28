import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRefinementsComponent} from "./product-refinements.component";
import {NgAisClearRefinementsModule, NgAisRefinementListModule, NgAisToggleModule} from "angular-instantsearch";



@NgModule({
  declarations: [
    ProductRefinementsComponent
  ],
  imports: [
    CommonModule,
    NgAisClearRefinementsModule,
    NgAisRefinementListModule,
    NgAisToggleModule
  ],
  exports: [
    ProductRefinementsComponent
  ]
})
export class ProductRefinementsModule { }
