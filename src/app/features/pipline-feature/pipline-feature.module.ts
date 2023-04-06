import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorTabsComponent } from './major-tabs/major-tabs.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [MajorTabsComponent, DealsComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports:[
    MajorTabsComponent
  ]
})
export class PiplineFeatureModule {}
