import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline/pipeline.component';
import { AngularMaterialModule } from 'src/app/features/angular-material/angular-material.module';
import { PipelineFeatureModule } from 'src/app/features/pipeline-feature/pipeline-feature.module';
import { PipelineService } from 'src/app/features/pipeline-feature/services/pipeline.service';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [PipelineComponent],
  imports: [
    CommonModule,
    PipelineRoutingModule,
    AngularMaterialModule,
    PipelineFeatureModule,
RouterModule

  ],
  providers:[
    PipelineService
  ]
})
export class PipelineModule {}
