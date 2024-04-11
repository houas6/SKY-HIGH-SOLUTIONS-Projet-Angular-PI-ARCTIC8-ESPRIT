import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicbackComponent } from './dynamicback.component';

describe('DynamicbackComponent', () => {
  let component: DynamicbackComponent;
  let fixture: ComponentFixture<DynamicbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
