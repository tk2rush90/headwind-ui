import { TestBed } from '@angular/core/testing';

import { HeadwindOverlayService } from './headwind-overlay.service';

describe('HeadwindOverlayService', () => {
  let service: HeadwindOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
