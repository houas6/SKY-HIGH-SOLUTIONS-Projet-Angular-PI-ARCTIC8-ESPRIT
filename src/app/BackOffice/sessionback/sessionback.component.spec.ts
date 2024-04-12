import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionbackComponent } from './sessionback.component';

describe('SessionbackComponent', () => {
  let component: SessionbackComponent;
  let fixture: ComponentFixture<SessionbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
