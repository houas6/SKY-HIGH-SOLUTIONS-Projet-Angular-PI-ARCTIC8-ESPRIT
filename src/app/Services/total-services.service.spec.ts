import { TestBed } from '@angular/core/testing';

import { TotalServicesService } from './total-services.service';

describe('TotalServicesService', () => {
  let service: TotalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
