import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorTabsComponent } from './major-tabs.component';

describe('MajorTabsComponent', () => {
  let component: MajorTabsComponent;
  let fixture: ComponentFixture<MajorTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
