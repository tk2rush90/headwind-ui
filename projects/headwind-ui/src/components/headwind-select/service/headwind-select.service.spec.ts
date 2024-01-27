import { TestBed } from '@angular/core/testing';

import { HeadwindSelectService } from './headwind-select.service';

describe('HeadwindSelectService', () => {
  let service: HeadwindSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
