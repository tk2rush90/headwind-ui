import { TestBed } from '@angular/core/testing';

import { HeadwindPopoverService } from './headwind-popover.service';

describe('HeadwindPopoverService', () => {
  let service: HeadwindPopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindPopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
