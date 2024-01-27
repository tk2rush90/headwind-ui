import { TestBed } from '@angular/core/testing';

import { HeadwindClickDetector } from './headwind-click-detector.service';

describe('HeadwindOutsideClickDetectorService', () => {
  let service: HeadwindClickDetector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadwindClickDetector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
