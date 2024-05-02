import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudygfrontComponent } from './studygfront.component';

describe('StudygfrontComponent', () => {
  let component: StudygfrontComponent;
  let fixture: ComponentFixture<StudygfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudygfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudygfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
