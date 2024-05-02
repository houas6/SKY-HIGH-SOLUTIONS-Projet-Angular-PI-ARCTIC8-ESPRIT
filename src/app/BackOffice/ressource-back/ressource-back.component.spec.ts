import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceBackComponent } from './ressource-back.component';

describe('RessourceBackComponent', () => {
  let component: RessourceBackComponent;
  let fixture: ComponentFixture<RessourceBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RessourceBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RessourceBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
