import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { DealsComponent } from './deals/deals.component';
import { ActivitesComponent } from './activites/activites.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { PipelineFeatureModule } from 'src/app/features/pipeline-feature/pipeline-feature.module';


@NgModule({
  declarations: [
    DealsComponent,
    ActivitesComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    PipelineFeatureModule,
    SalesRoutingModule,
  ]
})
export class SalesModule { }
