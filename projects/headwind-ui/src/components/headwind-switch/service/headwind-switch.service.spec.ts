import { TestBed } from '@angular/core/testing';

import { HeadwindSwitchService } from './headwind-switch.service';

describe('HeadwindSwitchService', () => {
  let service: HeadwindSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
