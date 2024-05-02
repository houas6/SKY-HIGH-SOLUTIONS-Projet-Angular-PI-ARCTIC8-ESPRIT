import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudyGroupComponent } from './view-study-group.component';

describe('ViewStudyGroupComponent', () => {
  let component: ViewStudyGroupComponent;
  let fixture: ComponentFixture<ViewStudyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewStudyGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewStudyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
