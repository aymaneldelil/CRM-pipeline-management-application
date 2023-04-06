import { Injectable } from '@angular/core';
import { PipelineTabs } from '../interfaces/pipeline-tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ideals } from '../interfaces/ideals';

@Injectable()
export class PipelineService {
  public readonly mockMajorTabs: Array<PipelineTabs> = [
    {
      name: 'Exhibitors',
      icon: 'storefront',
      path: 'exhibitors',
    },
    {
      name: 'Sales',
      icon: 'local_mall',
      path: 'sales',
      nestedtabs: [
        {
          name: 'Deals',
          path: '/deals',
        },
        {
          name: 'Activites',
          path: '/activites',
        },
        {
          name: 'Statistics',
          path: '/statistics',
        },
      ],
    },
    {
      name: 'Program',
      icon: 'calendar_today',
      path: 'program',
    },
    {
      name: 'Delegates',
      icon: 'perm_contact_calendar',
      path: 'delegates',
    },
    {
      name: 'Settings',
      icon: 'manage_accounts',
      path: 'settings',
    },
  ];
  //---------------------------------------------------------------------------------------------------------------------------------------------------
  constructor(private http: HttpClient) {}

  //---------------------------------------------------------------------------------------------------------------------------------------------------
  public getDeals(): Observable<Ideals> {
    return this.http.get<Ideals>(
      'https://my-json-server.typicode.com/mabukoush1/contacts/db'
    );
  }
}
