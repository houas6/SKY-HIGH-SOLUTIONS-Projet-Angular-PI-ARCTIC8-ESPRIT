import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCComponent } from './total-c.component';

describe('TotalCComponent', () => {
  let component: TotalCComponent;
  let fixture: ComponentFixture<TotalCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
