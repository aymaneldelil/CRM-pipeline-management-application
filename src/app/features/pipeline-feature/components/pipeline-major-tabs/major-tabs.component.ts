import { Component, Input, OnInit } from '@angular/core';
import { PipelineTabs } from '../../interfaces/pipeline-tabs';
import { PipelineService } from '../../services/pipeline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pipeline-major-tabs',
  templateUrl: './major-tabs.component.html',
  styleUrls: ['./major-tabs.component.scss'],
})
export class MajorTabsComponent implements OnInit {
  public majorTabs: Array<PipelineTabs> = [];
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  constructor(private pipelineSVC: PipelineService ) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.majorTabs = this.pipelineSVC.mockMajorTabs;
  }

test(){
  console.log('Iam Here');
}
}
