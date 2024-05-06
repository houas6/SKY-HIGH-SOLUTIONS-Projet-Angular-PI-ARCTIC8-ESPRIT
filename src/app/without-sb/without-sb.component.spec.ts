import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutSBComponent } from './without-sb.component';

describe('WithoutSBComponent', () => {
  let component: WithoutSBComponent;
  let fixture: ComponentFixture<WithoutSBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithoutSBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithoutSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
