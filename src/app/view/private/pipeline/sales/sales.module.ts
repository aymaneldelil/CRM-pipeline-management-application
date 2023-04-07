import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { DealsComponent } from './deals/deals.component';
import { ActivitesComponent } from './activites/activites.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PipelineFeatureModule } from 'src/app/features/pipeline-feature/pipeline-feature.module';
import { AngularMaterialModule } from 'src/app/features/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DealsComponent, ActivitesComponent, StatisticsComponent],
  imports: [
    CommonModule,
    DragDropModule,
    PipelineFeatureModule,
    SalesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
})
export class SalesModule {}
