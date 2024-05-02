import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintdetailsadminComponent } from './complaintdetailsadmin.component';

describe('ComplaintdetailsadminComponent', () => {
  let component: ComplaintdetailsadminComponent;
  let fixture: ComponentFixture<ComplaintdetailsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplaintdetailsadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintdetailsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
