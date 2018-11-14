import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnChartComponent } from './burn-chart.component';

describe('BurnChartComponent', () => {
  let component: BurnChartComponent;
  let fixture: ComponentFixture<BurnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
