import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgAisModule} from "angular-instantsearch";
import { ProductRefinementsComponent } from './product-refinements/product-refinements.component';
import { HitComponent } from './hit/hit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductRefinementsComponent,
    HitComponent
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule
  ],
  exports: [
    ProductRefinementsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
