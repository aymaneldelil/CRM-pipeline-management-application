import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiplineRoutingModule } from './pipline-routing.module';
import { PiplineComponent } from './pipline/pipline.component';


@NgModule({
  declarations: [
    PiplineComponent
  ],
  imports: [
    CommonModule,
    PiplineRoutingModule
  ]
})
export class PiplineModule { }
