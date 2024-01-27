import { TestBed } from '@angular/core/testing';

import { HeadwindRadioGroupService } from './headwind-radio-group.service';

describe('HeadwindRadioGroupService', () => {
  let service: HeadwindRadioGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindRadioGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
