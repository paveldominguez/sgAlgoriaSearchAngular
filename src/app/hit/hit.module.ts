import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HitComponent} from "./hit.component";

import {ImageFallbackDirective} from "./image-fallback.directive";


@NgModule({
  declarations: [
    HitComponent,
    ImageFallbackDirective,

  ],
  imports: [
    CommonModule
  ],
  exports : [
    HitComponent,
  ]
})
export class HitModule { }
