import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgAisModule} from "angular-instantsearch";
import {HitModule} from "./hit/hit.module";
import {ProductRefinementsModule} from "./product-refinements/product-refinements.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    HitModule,
    ProductRefinementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
