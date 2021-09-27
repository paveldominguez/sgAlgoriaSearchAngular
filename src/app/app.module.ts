import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgAisModule} from "angular-instantsearch";
import { ProductRefinementsComponent } from './product-refinements/product-refinements.component';
import {HitModule} from "./hit/hit.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductRefinementsComponent,
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    HitModule
  ],
  exports: [
    ProductRefinementsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
