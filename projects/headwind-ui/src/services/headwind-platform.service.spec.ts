import { TestBed } from '@angular/core/testing';

import { HeadwindPlatformService } from './headwind-platform.service';

describe('HeadwindPlatformService', () => {
  let service: HeadwindPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
