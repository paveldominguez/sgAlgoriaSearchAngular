import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRefinementsComponent} from "./product-refinements.component";
import {
  NgAisClearRefinementsModule,
  NgAisRangeInputModule,
  NgAisRefinementListModule,
  NgAisToggleModule
} from "angular-instantsearch";



@NgModule({
  declarations: [
    ProductRefinementsComponent
  ],
  imports: [
    CommonModule,
    NgAisClearRefinementsModule,
    NgAisRefinementListModule,
    NgAisToggleModule,
    NgAisRangeInputModule
  ],
  exports: [
    ProductRefinementsComponent
  ]
})
export class ProductRefinementsModule { }
