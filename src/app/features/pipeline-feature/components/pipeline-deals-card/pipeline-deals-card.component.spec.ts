import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineDealsCardComponent } from './pipeline-deals-card.component';

describe('PipelineDealsCardComponent', () => {
  let component: PipelineDealsCardComponent;
  let fixture: ComponentFixture<PipelineDealsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipelineDealsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelineDealsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
