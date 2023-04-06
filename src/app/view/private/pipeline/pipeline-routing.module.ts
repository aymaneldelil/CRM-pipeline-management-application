import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelineComponent } from './pipeline/pipeline.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pipeline',
    pathMatch: 'full',
  },
  {
    path: 'pipeline',
    component: PipelineComponent,
    children: [
      {
        path: 'sales',
        loadChildren: () =>
          import('./sales/sales.module').then((t) => t.SalesModule),
      },
      {
        path: 'exhibitors',
        loadChildren: () =>
          import('./exhibitors/exhibitors.module').then(
            (t) => t.ExhibitorsModule
          ),
      },
      {
        path: 'program',
        loadChildren: () =>
          import('./program/program.module').then((t) => t.ProgramModule),
      },
      {
        path: 'delegates',
        loadChildren: () =>
          import('./delegates/delegates.module').then((t) => t.DelegatesModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((t) => t.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipelineRoutingModule {}
