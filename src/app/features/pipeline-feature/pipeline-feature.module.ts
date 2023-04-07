import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinorTabsComponent } from './components/pipeline-minor-tabs/minor-tabs.component';
import { MajorTabsComponent } from './components/pipeline-major-tabs/major-tabs.component';
import { PipelineService } from './services/pipeline.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipelineDealsCardComponent } from './components/pipeline-deals-card/pipeline-deals-card.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MinorTabsComponent, MajorTabsComponent, PipelineDealsCardComponent],
  imports: [CommonModule, AngularMaterialModule , RouterModule],
  exports: [MajorTabsComponent, MinorTabsComponent , PipelineDealsCardComponent],
  providers: [PipelineService],
})
export class PipelineFeatureModule {}
