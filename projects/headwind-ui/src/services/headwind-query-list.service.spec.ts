import { TestBed } from '@angular/core/testing';

import { HeadwindQueryListService } from './headwind-query-list.service';

describe('HeadwindQueryListService', () => {
  let service: HeadwindQueryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindQueryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
