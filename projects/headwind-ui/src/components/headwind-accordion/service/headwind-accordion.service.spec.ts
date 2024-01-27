import { TestBed } from '@angular/core/testing';

import { HeadwindAccordionService } from './headwind-accordion.service';

describe('HeadwindAccordionService', () => {
  let service: HeadwindAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
