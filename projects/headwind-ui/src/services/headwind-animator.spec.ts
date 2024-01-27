import { TestBed } from '@angular/core/testing';

import { HeadwindAnimator } from './headwind-animator';

describe('HeadwindAnimatorService', () => {
  let service: HeadwindAnimator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindAnimator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
