import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiplineComponent } from './pipline/pipline.component';

const routes: Routes = [{ path: '', component: PiplineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiplineRoutingModule {}
