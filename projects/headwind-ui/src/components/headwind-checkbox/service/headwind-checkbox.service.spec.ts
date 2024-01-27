import { TestBed } from '@angular/core/testing';

import { HeadwindCheckboxService } from './headwind-checkbox.service';

describe('HeadwindCheckboxService', () => {
  let service: HeadwindCheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindCheckboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
