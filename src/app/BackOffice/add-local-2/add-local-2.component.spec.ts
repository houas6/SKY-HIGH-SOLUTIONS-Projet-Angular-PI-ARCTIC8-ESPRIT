import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocal2Component } from './add-local-2.component';

describe('AddLocal2Component', () => {
  let component: AddLocal2Component;
  let fixture: ComponentFixture<AddLocal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLocal2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLocal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
