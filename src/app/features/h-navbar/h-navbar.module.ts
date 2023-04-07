import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HNavbarComponent } from './h-navbar/h-navbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    HNavbarComponent
  ],
  imports: [
    CommonModule,
AngularMaterialModule

  ] ,
  exports:[
    HNavbarComponent
  ]
})
export class HNavbarModule { }
