import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChartjsComponent } from './angular-chartjs.component';

describe('AngularChartjsComponent', () => {
  let component: AngularChartjsComponent;
  let fixture: ComponentFixture<AngularChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularChartjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
