import { Component, Input } from '@angular/core';
import { Ideals } from '../../interfaces/ideals';

@Component({
  selector: 'deals-card',
  templateUrl: './pipeline-deals-card.component.html',
  styleUrls: ['./pipeline-deals-card.component.scss']
})
export class PipelineDealsCardComponent {
  @Input()
  deal!: Ideals;

}
