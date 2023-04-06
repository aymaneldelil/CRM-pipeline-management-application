import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinorTabsComponent } from './components/pipeline-minor-tabs/minor-tabs.component';
import { MajorTabsComponent } from './components/pipeline-major-tabs/major-tabs.component';
import { PipelineService } from './services/pipeline.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MinorTabsComponent, MajorTabsComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [MajorTabsComponent, MinorTabsComponent],
  providers: [PipelineService],
})
export class PipelineFeatureModule {}
