import { TestBed } from '@angular/core/testing';

import { ManageLocalService } from './manage-local.service';

describe('ManageLocalService', () => {
  let service: ManageLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
