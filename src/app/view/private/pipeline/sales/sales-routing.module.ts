import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ActivitesComponent } from './activites/activites.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deals',
    pathMatch: 'full',
    children: [
      { path: 'deals', component: DealsComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'activites', component: ActivitesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
