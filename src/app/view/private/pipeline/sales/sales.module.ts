import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { DealsComponent } from './deals/deals.component';
import { ActivitesComponent } from './activites/activites.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    DealsComponent,
    ActivitesComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
