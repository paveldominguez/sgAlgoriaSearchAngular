import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HitSectionComponent} from "./hit-section/hit-section.component";
import {HitComponent} from "./hit.component";
import {ImageFallbackDirective} from "./image-fallback.directive";
import {NgAisHitsModule, NgAisHitsPerPageModule, NgAisPaginationModule, NgAisSortByModule} from "angular-instantsearch";

@NgModule({
  declarations: [
    HitComponent,
    HitSectionComponent,
    ImageFallbackDirective,
  ],
  imports: [
    CommonModule,
    NgAisPaginationModule,
    NgAisHitsModule,
    NgAisSortByModule,
    NgAisHitsPerPageModule
  ],
  exports : [
    HitSectionComponent,
  ]
})
export class HitModule { }
