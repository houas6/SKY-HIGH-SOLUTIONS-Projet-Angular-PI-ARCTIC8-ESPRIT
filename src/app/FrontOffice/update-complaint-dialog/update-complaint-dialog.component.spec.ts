import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComplaintDialogComponent } from './update-complaint-dialog.component';

describe('UpdateComplaintDialogComponent', () => {
  let component: UpdateComplaintDialogComponent;
  let fixture: ComponentFixture<UpdateComplaintDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateComplaintDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateComplaintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
