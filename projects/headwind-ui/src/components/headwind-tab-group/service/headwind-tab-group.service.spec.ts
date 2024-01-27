import { TestBed } from '@angular/core/testing';

import { HeadwindTabGroupService } from './headwind-tab-group.service';

describe('HeadwindTabGroupService', () => {
  let service: HeadwindTabGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindTabGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
