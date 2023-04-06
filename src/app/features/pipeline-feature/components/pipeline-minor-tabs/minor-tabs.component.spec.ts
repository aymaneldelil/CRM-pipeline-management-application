import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorTabsComponent } from './minor-tabs.component';

describe('MinorTabsComponent', () => {
  let component: MinorTabsComponent;
  let fixture: ComponentFixture<MinorTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
