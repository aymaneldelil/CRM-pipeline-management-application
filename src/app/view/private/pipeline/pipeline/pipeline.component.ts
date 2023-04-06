import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PipelineTabs } from 'src/app/features/pipeline-feature/interfaces/pipeline-tabs';
import { PipelineService } from 'src/app/features/pipeline-feature/services/pipeline.service';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss'],
})
export class PipelineComponent implements OnInit , AfterViewInit {
  public majorTabs: Array<PipelineTabs> = [];

  constructor(private pipelineSVC: PipelineService) {}

  ngOnInit(): void {
    this.majorTabs = this.pipelineSVC.mockMajorTabs;

  }
  ngAfterViewInit(): void {
    console.log(this.majorTabs);
  }
}
