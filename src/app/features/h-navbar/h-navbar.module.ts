import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HNavbarComponent } from './h-navbar/h-navbar.component';



@NgModule({
  declarations: [
    HNavbarComponent
  ],
  imports: [
    CommonModule
  ] ,
  exports:[
    HNavbarComponent
  ]
})
export class HNavbarModule { }
