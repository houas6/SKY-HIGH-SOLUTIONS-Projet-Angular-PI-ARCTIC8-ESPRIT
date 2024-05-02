import { TestBed } from '@angular/core/testing';

import { ManageStudyGroupService } from './manage-study-group.service';

describe('ManageStudyGroupService', () => {
  let service: ManageStudyGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageStudyGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
