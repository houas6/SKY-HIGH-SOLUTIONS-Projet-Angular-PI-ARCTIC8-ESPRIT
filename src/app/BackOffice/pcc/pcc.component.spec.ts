import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PccComponent } from './pcc.component';

describe('PccComponent', () => {
  let component: PccComponent;
  let fixture: ComponentFixture<PccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
