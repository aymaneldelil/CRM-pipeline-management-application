import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelegatesRoutingModule } from './delegates-routing.module';
import { DelegatesComponent } from './delegates/delegates.component';


@NgModule({
  declarations: [
    DelegatesComponent
  ],
  imports: [
    CommonModule,
    DelegatesRoutingModule
  ]
})
export class DelegatesModule { }
