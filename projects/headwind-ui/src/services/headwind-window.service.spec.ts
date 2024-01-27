import { TestBed } from '@angular/core/testing';

import { HeadwindWindowService } from './headwind-window.service';

describe('HeadwindWindowService', () => {
  let service: HeadwindWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
